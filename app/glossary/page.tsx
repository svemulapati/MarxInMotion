import type { Metadata } from "next";
import GlossaryBrowser, { type GlossaryRow } from "@/components/GlossaryBrowser";
import SiteBar from "@/components/SiteBar";
import { CONTENT } from "@/content";
import { GLOSSARY, GLOSSARY_LIST, type TermId } from "@/lib/glossary";
import { relatedTo } from "@/lib/glossary-related";
import { chapterHref, getChapter, getVolume, type VolumeNumber } from "@/lib/kapital";

export const metadata: Metadata = {
  title: "Glossary · Marx in Motion",
  description: "Every word from all four volumes, explained twice: once for kids, once for grown-ups, and linked across volumes.",
};

const label = (key: string) => {
  const [vol, n] = key.split("-").map(Number);
  return `Vol. ${getVolume(vol)!.roman}, Ch. ${n}: ${getChapter(vol, n)!.title}`;
};
const short = (key: string) => {
  const [vol, n] = key.split("-").map(Number);
  return `Vol. ${getVolume(vol)!.roman}, Ch. ${n}`;
};
const href = (key: string, id: string) => {
  const [vol, n] = key.split("-").map(Number);
  return `${chapterHref({ vol: vol as VolumeNumber, n })}#term-${id}`;
};

/** Chapters listing each term in their "New words", in reading order. */
function usage() {
  const used = new Map<string, string[]>();
  for (const [key, c] of Object.entries(CONTENT)) for (const id of c.terms) used.set(id, [...(used.get(id) ?? []), key]);
  const order = (k: string) => k.split("-").map(Number).reduce((a, b) => a * 100 + b);
  used.forEach((keys) => keys.sort((a, b) => order(a) - order(b)));
  return used;
}

export default function GlossaryPage() {
  const used = usage();
  const rows: GlossaryRow[] = GLOSSARY_LIST.map((t) => ({
    id: t.id,
    term: t.term,
    kid: t.kid,
    grownUp: t.grownUp,
    vol: t.firstSeen === "intro" ? 0 : Number(t.firstSeen.split("-")[0]),
    first:
      t.firstSeen === "intro" ? { href: "/introduction", label: "the Introduction" } : { href: href(t.firstSeen, t.id), label: label(t.firstSeen) },
    also: (used.get(t.id) ?? []).filter((k) => k !== t.firstSeen).map((k) => ({ href: href(k, t.id), label: short(k) })),
    see: relatedTo(t.id).map((id) => ({ id, term: GLOSSARY[id as TermId].term })),
  }));

  return (
    <main className="flex-1 overflow-x-clip">
      <SiteBar />
      <header className="px-4 pt-16 pb-12 sm:px-5 sm:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] text-white/50">(Glossary)</p>
          <h1 className="mt-4 text-[40px] leading-[0.98] tracking-[-0.035em] sm:text-[64px]">Every new word, twice</h1>
          <p className="mt-4 max-w-[520px] text-[16px] leading-snug text-white/60">
            All {rows.length} words from the four volumes. Each one is explained in kid language and in Marx&apos;s own
            sense, with the chapter where it first appears and links to related ideas in other volumes.
          </p>
        </div>
      </header>

      <article className="paper mx-auto max-w-[760px] px-5 pb-14 sm:px-10">
        <GlossaryBrowser rows={rows} />
      </article>
    </main>
  );
}
