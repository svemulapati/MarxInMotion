import type { Metadata } from "next";
import Link from "next/link";
import SiteBar from "@/components/SiteBar";
import { GLOSSARY_LIST } from "@/lib/glossary";
import { chapterHref, getChapter, getVolume } from "@/lib/kapital";

export const metadata: Metadata = {
  title: "Glossary · Marx in Motion",
  description: "Every word from Capital explained twice: once for kids, once for grown-ups.",
};

/** Where a term first appears, linking straight to its card on that page. */
function firstSeen(key: string, id: string) {
  if (key === "intro") return { href: "/introduction", label: "Introduction" };
  const [vol, n] = key.split("-").map(Number);
  const c = getChapter(vol, n)!;
  return { href: `${chapterHref(c)}#term-${id}`, label: `Vol. ${getVolume(vol)!.roman}, Ch. ${n}: ${c.title}` };
}

export default function GlossaryPage() {
  return (
    <main className="flex-1 overflow-x-clip">
      <SiteBar />
      <header className="px-4 pt-16 pb-12 sm:px-5 sm:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] text-white/50">(Glossary)</p>
          <h1 className="mt-4 text-[40px] leading-[0.98] tracking-[-0.035em] sm:text-[64px]">Every new word, twice</h1>
          <p className="mt-4 max-w-[520px] text-[16px] leading-snug text-white/60">
            Each word is explained once in kid language and once in Marx&apos;s own sense. The list grows with every
            chapter.
          </p>
        </div>
      </header>

      <article className="paper mx-auto max-w-[760px] px-5 pt-6 pb-14 sm:px-10">
        <dl>
          {GLOSSARY_LIST.map((t) => {
            const seen = firstSeen(t.firstSeen, t.id);
            return (
              <div key={t.id} id={t.id} className="grid scroll-mt-6 gap-1 border-b border-black/15 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="text-[20px] leading-tight tracking-[-0.015em]">{t.term}</dt>
                <dd>
                  <p className="text-[17px] leading-snug">{t.kid}</p>
                  <p className="mt-2 text-[14px] leading-snug text-black/65">
                    <span className="label">(Grown-up) </span>
                    {t.grownUp}
                  </p>
                  <p className="mt-2 text-[13px]">
                    First seen in{" "}
                    <Link href={seen.href}>{seen.label}</Link>
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </article>
    </main>
  );
}
