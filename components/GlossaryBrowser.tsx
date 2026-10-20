"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

export interface GlossaryRow {
  id: string;
  term: string;
  kid: string;
  grownUp: string;
  /** 0 for the introduction, otherwise the volume where the term first appears. */
  vol: number;
  first: { href: string; label: string };
  also: { href: string; label: string }[];
  see: { id: string; term: string }[];
}

const FILTERS = [
  { v: -1, label: "All" },
  { v: 1, label: "Vol. I" },
  { v: 2, label: "Vol. II" },
  { v: 3, label: "Vol. III" },
  { v: 4, label: "Vol. IV" },
];

/** First letter for the A to Z strip, ignoring quotes and Greek-style symbols. */
const initial = (t: string) => {
  const c = t.replace(/^[^A-Za-z]+/, "")[0]?.toUpperCase() ?? "#";
  return /[A-Z]/.test(c) ? c : "#";
};

export default function GlossaryBrowser({ rows }: { rows: GlossaryRow[] }) {
  const [query, setQuery] = useState("");
  const [vol, setVol] = useState(-1);
  const q = useDeferredValue(query.trim().toLowerCase());

  const shown = useMemo(
    () =>
      rows.filter(
        (r) =>
          (vol === -1 || r.vol === vol || (vol === 1 && r.vol === 0)) &&
          (!q || r.term.toLowerCase().includes(q) || r.kid.toLowerCase().includes(q) || r.grownUp.toLowerCase().includes(q))
      ),
    [rows, vol, q]
  );
  const letters = useMemo(() => [...new Set(shown.map((r) => initial(r.term)))], [shown]);
  const firstOfLetter = new Set<string>();

  return (
    <div>
      {/* controls stick under the top of the screen while scrolling */}
      <div className="sticky top-0 z-10 -mx-5 border-b border-black/10 bg-white/95 px-5 pt-4 pb-3 backdrop-blur sm:-mx-10 sm:px-10">
        <label className="block">
          <span className="sr-only">Search the glossary</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${rows.length} words, e.g. rent, profit, money`}
            className="w-full bg-[#f1f1f1] px-3 py-2.5 text-[16px] outline-none focus:ring-2 focus:ring-black"
          />
        </label>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f.v}
              type="button"
              onClick={() => setVol(f.v)}
              aria-pressed={vol === f.v}
              className={`px-2.5 py-1 text-[13px] ${vol === f.v ? "bg-black text-white" : "bg-[#f1f1f1] hover:bg-[#e4e4e4]"}`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-[12px] tabular-nums text-black/50">
            {shown.length} {shown.length === 1 ? "word" : "words"}
          </span>
        </div>
        <nav aria-label="Jump to letter" className="mt-2 flex flex-wrap gap-x-1.5 gap-y-1 text-[12px]">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="no-underline hover:underline">
              {l}
            </a>
          ))}
        </nav>
      </div>

      {shown.length === 0 && <p className="py-10 text-[16px] text-black/60">No word matches that. Try a shorter search.</p>}

      <dl>
        {shown.map((t) => {
          const l = initial(t.term);
          const anchor = firstOfLetter.has(l) ? undefined : `letter-${l}`;
          firstOfLetter.add(l);
          return (
            <div key={t.id} id={t.id} className="grid scroll-mt-44 gap-1 border-b border-black/15 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
              {anchor && <span id={anchor} className="sr-only scroll-mt-44" />}
              <dt className="text-[20px] leading-tight tracking-[-0.015em]">{t.term}</dt>
              <dd>
                <p className="text-[17px] leading-snug">{t.kid}</p>
                <p className="mt-2 text-[14px] leading-snug text-black/65">
                  <span className="label">(Grown-up) </span>
                  {t.grownUp}
                </p>
                <p className="mt-2 text-[13px]">
                  First seen in <Link href={t.first.href}>{t.first.label}</Link>
                </p>
                {t.also.length > 0 && (
                  <p className="mt-1 text-[13px] text-black/60">
                    Also in{" "}
                    {t.also.map((a, i) => (
                      <span key={a.href}>
                        {i > 0 && ", "}
                        <Link href={a.href}>{a.label}</Link>
                      </span>
                    ))}
                  </p>
                )}
                {t.see.length > 0 && (
                  <p className="mt-2 flex flex-wrap gap-1.5 text-[12px]">
                    <span className="label self-center">(See also)</span>
                    {t.see.map((s) => (
                      <a key={s.id} href={`#${s.id}`} onClick={() => {
                          setQuery("");
                          setVol(-1);
                        }} className="bg-[#f1f1f1] px-2 py-0.5 no-underline hover:bg-[#e4e4e4]">
                        {s.term}
                      </a>
                    ))}
                  </p>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
