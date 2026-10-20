"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * The core of Volume I as a toy. Drag the end of Sam's day to make it longer
 * (absolute surplus-value, Ch. 10) or make bread cheaper so his paid part
 * shrinks (relative surplus-value, Ch. 12). Workshop numbers follow
 * CONTINUITY.md: one hour of work makes half a coin of new value.
 */
const COIN_PER_HOUR = 0.5;
const MARKS = [
  { h: 8, label: "8 hours: the demand of 1866" },
  { h: 10, label: "10 hours: the 1847 law" },
  { h: 12, label: "12 hours: Tiny Town today" },
];

export default function StretchTheDay() {
  const [hours, setHours] = useState(12);
  const [need, setNeed] = useState(6);
  const day = Math.max(hours, need);

  const wage = need * COIN_PER_HOUR;
  const surplus = (day - need) * COIN_PER_HOUR;
  const rate = Math.round(((day - need) / need) * 100);
  const pct = (h: number) => `${(h / 24) * 100}%`;
  const mood =
    day >= 16 ? "Sam can barely stand." : day >= 13 ? "Sam is worn out." : day <= 9 ? "Sam is home before dark." : "Sam's usual long day.";

  return (
    <section aria-labelledby="stretch-title" className="px-4 py-28 sm:px-5 sm:py-40">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label text-white/40">(Try it)</p>
          <h2 id="stretch-title" className="mt-2 text-[44px] leading-[0.95] tracking-[-0.04em] sm:text-[72px]">
            Stretch Sam&apos;s day.
          </h2>
        </div>
        <p className="max-w-[460px] self-end text-[16px] leading-snug text-white/60 lg:col-span-5 lg:col-start-8">
          Drag the end of the bar. Sam is always paid for the hours that cover his needs. Every hour after that belongs
          to Mr. Moneybags. Then make bread cheaper and watch what happens to the same 12 hours.
        </p>
      </div>

      {/* ── the day, 0 to 24 hours ─────────────────────── */}
      <div className="relative mt-14 select-none sm:mt-20">
        <div className="relative h-28 bg-[#2c2c2c] sm:h-36">
          <div className="absolute inset-y-0 left-0 bg-[#2a9d5b] transition-[width] duration-150" style={{ width: pct(need) }}>
            <span className="absolute top-3 left-3 text-[13px] leading-tight text-white sm:text-[15px]">
              paid
              <br />
              {need} h
            </span>
          </div>
          <div
            className="absolute inset-y-0 bg-[#e6b800] transition-[left,width] duration-150"
            style={{ left: pct(need), width: pct(day - need) }}
          >
            {day - need >= 2 && (
              <span className="absolute top-3 left-3 text-[13px] leading-tight text-black sm:text-[15px]">
                unpaid
                <br />
                {day - need} h
              </span>
            )}
          </div>
          <span className="absolute top-3 right-3 text-right text-[13px] leading-tight text-white/40 sm:text-[15px]">
            Sam&apos;s own time
            <br />
            {24 - day} h
          </span>

          {/* the handle */}
          <div className="pointer-events-none absolute inset-y-[-10px] w-0 transition-[left] duration-150" style={{ left: pct(day) }}>
            <div className="absolute inset-y-0 -left-[3px] w-[6px] bg-white" />
            <div className="absolute top-1/2 -left-5 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-[15px] text-black shadow-[0_6px_24px_rgba(0,0,0,.4)]">
              ↔
            </div>
          </div>

          {/* native slider over the bar: keyboard and touch for free */}
          <input
            type="range"
            min={0}
            max={24}
            step={0.5}
            value={day}
            onChange={(e) => setHours(Math.min(20, Math.max(need, Number(e.target.value))))}
            aria-label="Length of Sam's working day in hours"
            aria-valuetext={`${day} hours`}
            className="stretch-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        {/* scale and history marks */}
        <div className="relative mt-2 h-24 text-[11px] text-white/45 sm:text-[12px]">
          {[0, 6, 12, 18, 24].map((h) => (
            <span key={h} className="absolute -translate-x-1/2 tabular-nums" style={{ left: pct(h) }}>
              {h}h
            </span>
          ))}
          {MARKS.map((m, i) => (
            <span key={m.h} className="absolute border-l border-white/30 pl-1.5" style={{ left: pct(m.h), top: 20 + i * 22 }}>
              {m.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── the readout ───────────────────────────────── */}
      <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-3">
        <Readout label="Sam's wage" value={`${fmt(wage)}`} unit="coins a day" tone="#2a9d5b" note={mood} />
        <Readout label="Mr. Moneybags keeps" value={`${fmt(surplus)}`} unit="coins a day" tone="#e6b800" note={<Pile n={surplus} />} />
        <Readout label="Rate of surplus-value" value={`${rate}%`} unit="unpaid ÷ paid" tone="#fff" note="Marx's measure of exploitation (Ch. 9)" />
      </div>

      {/* ── cheaper bread ─────────────────────────────── */}
      <div className="mt-10 grid items-center gap-4 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="text-[15px] text-white/70">
            Hours Sam needs to cover his bread, rent and clothes: <strong className="text-white">{need}</strong>
          </span>
          <input
            type="range"
            min={2}
            max={6}
            step={0.5}
            value={need}
            onChange={(e) => {
              const n = Number(e.target.value);
              setNeed(n);
              setHours((h) => Math.max(h, n));
            }}
            className="stretch-small mt-3 block w-full max-w-[520px]"
          />
          <span className="mt-1 flex max-w-[520px] justify-between text-[12px] text-white/40">
            <span>bread very cheap</span>
            <span>bread at today&apos;s price</span>
          </span>
        </label>
        <p className="flex flex-wrap gap-2 text-[13px]">
          <button type="button" className="px-3 py-2 ring-1 ring-white/40" onClick={() => {
              setHours(12);
              setNeed(6);
            }}>
            Reset
          </button>
          <Link href="/volume-1/chapter-10" className="px-3 py-2 ring-1 ring-white/40">
            Longer days: Ch. 10
          </Link>
          <Link href="/volume-1/chapter-12" className="px-3 py-2 ring-1 ring-white/40">
            Cheaper bread: Ch. 12
          </Link>
        </p>
      </div>
    </section>
  );
}

const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

function Readout({ label, value, unit, tone, note }: { label: string; value: string; unit: string; tone: string; note: React.ReactNode }) {
  return (
    <div className="bg-[#222] px-1 py-6 sm:px-6">
      <p className="label text-white/40">({label})</p>
      <p className="mt-2 text-[64px] leading-none tracking-[-0.05em] tabular-nums sm:text-[96px]" style={{ color: tone }}>
        {value}
      </p>
      <p className="mt-1 text-[13px] text-white/50">{unit}</p>
      <div className="mt-4 min-h-[28px] text-[14px] text-white/70">{note}</div>
    </div>
  );
}

/** One gold disc per coin, half a disc for a half coin. */
function Pile({ n }: { n: number }) {
  const whole = Math.floor(n);
  return (
    <span className="flex flex-wrap gap-1.5" aria-hidden>
      {Array.from({ length: whole }, (_, i) => (
        <span key={i} className="block h-6 w-6 rounded-full bg-[#e6b800] ring-2 ring-black/20" />
      ))}
      {n - whole >= 0.5 && <span className="block h-6 w-3 rounded-l-full bg-[#e6b800]" />}
    </span>
  );
}
