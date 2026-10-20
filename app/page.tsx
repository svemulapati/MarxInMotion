import Link from "next/link";
import CountUp from "@/components/home/CountUp";
import ScrollStory from "@/components/home/ScrollStory";
import StretchTheDay from "@/components/home/StretchTheDay";
import Wordmark from "@/components/Wordmark";
import { CONTENT } from "@/content";
import { CAST_LIST } from "@/lib/cast";
import { GLOSSARY_LIST } from "@/lib/glossary";
import { READY_CHAPTERS, TOTAL_CHAPTERS, VOLUMES, chapterHref } from "@/lib/kapital";

/** Every animation on the site: the chapters' own, plus the two in the introduction. */
const ANIMATIONS = Object.values(CONTENT).reduce((n, c) => n + c.struggle.length + c.reveal.length, 2);

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      {/* ── Masthead ───────────────────────────────────────── */}
      <header className="px-4 pt-4 sm:px-5 sm:pt-5">
        <h1 className="sr-only">Marx in Motion: Das Kapital explained with animations</h1>
        <Wordmark />
        <div className="mt-2.5 grid grid-cols-1 gap-y-1.5 text-[13px] leading-tight sm:grid-cols-12">
          <p className="strip sm:col-span-6">
            Marx in Motion / <a href="#contents">Das Kapital</a>, all three volumes and a bonus
          </p>
          <p className="strip sm:col-span-3 sm:pb-3">
            Every chapter, explained with
            <br className="hidden sm:block" /> moving pictures a kid can follow
          </p>
          <p className="strip flex justify-between gap-6 sm:col-span-3 sm:justify-end">
            <Link href="/introduction">Start here</Link>
            <Link href="/glossary">Glossary</Link>
          </p>
        </div>
      </header>

      {/* ── Capital in one scroll ───────────────────────── */}
      <ScrollStory ready={VOLUMES.filter((v) => v.chapters.every((c) => c.status === "ready")).map((v) => v.n)} />

      {/* ── The toy: stretch Sam's day ─────────────────── */}
      <StretchTheDay />

      {/* ── Running totals ─────────────────────────────── */}
      <section aria-label="What is ready" className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-4">
        {[
          { n: READY_CHAPTERS.length, label: "chapters to read" },
          { n: ANIMATIONS, label: "step-by-step animations" },
          { n: GLOSSARY_LIST.length, label: "words explained twice" },
          { n: CAST_LIST.length, label: "neighbours in Tiny Town" },
        ].map((s) => (
          <div key={s.label} className="bg-[#222] px-4 py-10 sm:px-5 sm:py-14">
            <p className="text-[64px] leading-none tracking-[-0.05em] sm:text-[104px]">
              <CountUp to={s.n} />
            </p>
            <p className="mt-2 text-[13px] text-white/50">{s.label}</p>
          </div>
        ))}
      </section>


      {/* ── Contents ───────────────────────────────────────── */}
      <section id="contents" className="scroll-mt-6 px-4 pb-24 sm:px-5">
        <p className="label">(Contents)</p>
        <h2 className="mb-8 text-[34px] leading-none tracking-[-0.03em] sm:text-[52px]">Every chapter</h2>
        <p className="mb-8 max-w-[420px] text-[13px] leading-snug text-white/60">
          <Link href="/introduction" className="text-white">
            Start with the introduction
          </Link>
          . Underlined chapters are ready to read; the rest are on their way.
        </p>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {VOLUMES.map((v) => (
            <div key={v.n}>
              <p className="label">(Volume {v.roman}){v.n === 4 ? " Bonus" : ""}</p>
              <h3 className="mb-4 text-[17px] leading-tight">{v.title}</h3>
              {v.parts.map((p) => (
                <div key={p.n} className="mb-4">
                  <p className="mb-1 text-[10px] text-white/40">
                    {v.n}.{p.n} {v.n === 4 ? "" : p.title}
                  </p>
                  <ol className="space-y-0.5 text-[12px] leading-tight">
                    {v.chapters.slice(p.chapters[0] - 1, p.chapters[1]).map((c) => (
                      <li key={c.n} className="grid grid-cols-[22px_1fr]">
                        <span className="text-white/40">{c.n}</span>
                        {c.status === "ready" ? (
                          <Link href={chapterHref(c)}>{c.title}</Link>
                        ) : (
                          <span className="text-white/45">{c.title}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer strip ───────────────────────────────────── */}
      <footer className="grid grid-cols-1 gap-y-1.5 px-4 pb-5 text-[13px] leading-tight sm:grid-cols-12 sm:px-5">
        <p className="strip sm:col-span-6">
          {VOLUMES.length} volumes / {TOTAL_CHAPTERS} chapters / one story about work and money
        </p>
        <p className="strip sm:col-span-6 sm:text-right">Built chapter by chapter. First chapters coming soon.</p>
      </footer>
    </main>
  );
}
