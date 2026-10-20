import Link from "next/link";
import Grain from "@/components/Grain";
import Wordmark from "@/components/Wordmark";
import { VOLUMES, TOTAL_CHAPTERS, chapterCount, chapterHref, type Part } from "@/lib/kapital";

const [V1, V2, V3, V4] = VOLUMES;

const range = (p: Part) =>
  p.chapters[0] === p.chapters[1] ? `Ch. ${p.chapters[0]}` : `Ch. ${p.chapters[0]}–${p.chapters[1]}`;

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

      {/* ── Volume I: the tall card ─────────────────────────── */}
      <section id="volume-1" className="scroll-mt-6 px-4 pt-32 pb-24 sm:pt-44">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-center">
          <article className="reveal grid w-full max-w-[335px] grid-cols-[130px_1fr] bg-white p-2.5 text-black sm:aspect-[335/426]">
            <Grain className="h-full min-h-[300px]" />
            <div className="flex flex-col justify-end pl-2.5">
              <p className="label">(Volume)</p>
              <h2 className="mb-6 text-[13px]">One</h2>
              <ol className="space-y-3">
                {V1.parts.slice(0, 4).map((p) => (
                  <li key={p.n} className="grid grid-cols-[22px_1fr] text-[8.5px] leading-[1.15]">
                    <span>1.{p.n}</span>
                    <span>
                      {p.title}
                      <span className="block text-black/40">{range(p)}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <div className="flex gap-2 sm:flex-col">
            <CircuitDial />
            <Grain mood="mid" className="h-[68px] w-[68px]" />
          </div>
        </div>

        <p className="reveal mx-auto mt-6 max-w-[335px] text-[13px] leading-snug text-white/60">
          <span className="text-white">{V1.kidLine}</span> {V1.parts.length} parts, {chapterCount(V1)} chapters.{" "}
          <Link href={chapterHref(V1.chapters[0])} className="text-white">
            Read Chapter 1
          </Link>
        </p>
      </section>

      {/* ── Volume II: the wide card over a full-bleed print ───── */}
      <section id="volume-2" className="relative py-24 sm:py-36">
        <Grain mood="mid" className="!absolute inset-0" />
        <article className="reveal relative mx-4 grid max-w-[1045px] grid-cols-1 bg-white text-black sm:mx-auto sm:h-[420px] sm:grid-cols-[1fr_1fr_1fr]">
          <Grain className="h-48 sm:h-full" />
          <div className="flex items-center gap-10 p-3 sm:pl-3">
            <span className="text-[10px]">2</span>
            <div>
              <p className="label">(Volume)</p>
              <h2 className="text-[13px]">Two</h2>
            </div>
          </div>
          <div className="relative h-56 overflow-hidden sm:h-full" aria-label="Volume II parts">
            <div className="marquee-up">
              {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1} className="text-[38px] leading-[0.98] tracking-[-0.03em]">
                  {V2.parts.concat(V2.parts).map((p, i) => (
                    <li key={i}>{p.title}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </article>
        <p className="reveal relative mx-4 mt-4 max-w-[335px] bg-black/80 p-3 text-[13px] leading-snug text-white sm:mx-auto">
          {V2.kidLine} {V2.parts.length} parts, {chapterCount(V2)} chapters.
        </p>
      </section>

      {/* ── Volume III: the circle ──────────────────────────── */}
      <section id="volume-3" className="px-4 py-24 sm:py-36">
        <div className="reveal relative mx-auto aspect-square w-full max-w-[560px] rounded-full bg-white text-black">
          <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
            {Array.from({ length: 12 }, (_, i) => (
              <text
                key={i}
                x="100"
                y="13"
                fontSize="4.2"
                fill="#bfbfbf"
                textAnchor="middle"
                transform={`rotate(${i * 30} 100 100)`}
              >
                (Volume)
              </text>
            ))}
          </svg>
          <div className="absolute inset-[18%] flex flex-col items-center justify-center text-center">
            <p className="label">(Volume)</p>
            <h2 className="mb-5 text-[13px]">Three</h2>
            <ol className="grid grid-cols-1 gap-x-6 gap-y-1.5 text-left text-[9px] leading-[1.15] sm:grid-cols-2">
              {V3.parts.map((p) => (
                <li key={p.n} className="grid grid-cols-[22px_1fr]">
                  <span>3.{p.n}</span>
                  <span>{p.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="reveal mx-auto mt-6 max-w-[335px] text-[13px] leading-snug text-white/60">
          <span className="text-white">{V3.kidLine}</span> {V3.parts.length} parts, {chapterCount(V3)} chapters.
        </p>
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
          {[V1, V2, V3, V4].map((v) => (
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

/** The M → C → M′ loop as a tiny dial: money becomes goods becomes more money. */
function CircuitDial() {
  return (
    <div className="relative h-[68px] w-[68px] rounded-full bg-white" title="M → C → M′">
      <svg viewBox="0 0 68 68" className="absolute inset-0" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1="34"
            y1="2"
            x2="34"
            y2="5"
            stroke="#bfbfbf"
            strokeWidth="0.8"
            transform={`rotate(${i * 30} 34 34)`}
          />
        ))}
      </svg>
      <div className="spin-a absolute inset-0">
        <span className="absolute top-[10px] left-[19px] h-[6px] w-[6px] rounded-full bg-black" />
      </div>
      <div className="spin-b absolute inset-0">
        <span className="absolute top-[28px] right-[6px] h-[10px] w-[10px] rounded-full bg-black" />
      </div>
      <div className="spin-c absolute inset-0">
        <span className="absolute bottom-[12px] left-[24px] h-[4px] w-[4px] rounded-full bg-black" />
      </div>
    </div>
  );
}
