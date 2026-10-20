"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Corn, Fade } from "@/components/anim/Things";
import { Bar, Spindle, TONE } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * Visitors from the Old Thinkers' Shelf, shared by Vol IV Ch 16 to 19.
 * ───────────────────────────────────────────────────────────── */

const RENT = "#9a9a9a";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A thinker from the shelf: a gray figure holding a little book with their name. */
export function Thinker({ name, x, y, scale = 0.8, show = true }: { name: string; x: number; y: number; scale?: number; show?: boolean }) {
  return (
    <g style={{ opacity: show ? 1 : 0, transition: "opacity 500ms" }}>
      <Figure name={name} x={x} y={y} scale={scale} />
      <rect x={x + 9 * scale} y={y - 34 * scale} width={11 * scale} height={14 * scale} fill="#fff" stroke="#000" strokeWidth="0.8" />
    </g>
  );
}

/** A speech line in a rounded box, centred at (x, y). */
export function Say({ x, y, w, text, show = true }: { x: number; y: number; w: number; text: string; show?: boolean }) {
  return (
    <g style={{ opacity: show ? 1 : 0, transition: "opacity 450ms" }}>
      <rect x={x - w / 2} y={y - 11} width={w} height={20} rx="6" fill="#fff" stroke="#000" strokeWidth="0.9" />
      <text x={x} y={y + 3} textAnchor="middle" fontSize="8.5">
        {text}
      </text>
    </g>
  );
}

/**
 * A dark caption banner near the bottom of a scene. It stays between x 56
 * and 304 so the visiting thinkers' names at either side remain readable.
 */
export function Banner({ text, show, y = 204 }: { text: string; show: boolean; y?: number }) {
  return (
    <Fade show={show} delay={300}>
      <rect x="56" y={y - 12} width="248" height="20" fill="#000" />
      <text x="180" y={y + 2} textAnchor="middle" fontSize="9" fill="#fff">
        {text}
      </text>
    </Fade>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.1 · Ricardo's story: poorer fields, dearer bread
 * Ricardo's own numbers (Principles, quoted by Marx): goods worth £720,
 * wages £240 rising to £274 5s., profit £480 falling to £445 15s.
 * ───────────────────────────────────────────────────────────── */
export function PoorerFields() {
  return (
    <Player
      id="anim-v4-16-1"
      title="16.1 · Ricardo's story: poorer fields, dearer bread"
      steps={[
        { caption: "David Ricardo steps off the Old Thinkers' Shelf. He wants to explain why profit rates fall as a country grows richer." },
        { caption: "His own example: a workshop makes goods worth £720 a year. £240 goes in wages and £480 is profit." },
        { caption: "The town grows and needs more bread. Poorer fields far away must be farmed, so corn costs more to grow." },
        { caption: "Wages must rise to keep the workers fed: £240 becomes £274 5s. The goods still sell for £720, so profit shrinks to £445 15s." },
        {
          caption: "Meanwhile the owners of the good fields collect more rent. Ricardo's verdict: dearer food and rising rent slowly squeeze profit, because nature gets stingier.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const wage = s >= 3 ? 274.25 : 240;
        const profit = 720 - wage;
        return (
          <>
            <Thinker name="Ricardo" x={34} y={202} />

            {/* the workshop's year: £720 split into wages and profit */}
            <Fade show={s >= 1}>
              <text x="70" y="34" fontSize="9">
                one year&apos;s goods: £720
              </text>
              <Bar
                x={70}
                y={40}
                unit={0.36}
                segs={[
                  { n: wage, color: TONE.wage, label: s >= 3 ? "wages 274¼" : "wages 240" },
                  { n: profit, color: TONE.surplus, label: s >= 3 ? "profit 445¾" : "profit 480" },
                ]}
              />
              <g transform="translate(345 49)">
                <g transform="scale(.6)">
                  <Spindle />
                </g>
              </g>
            </Fade>

            {/* fields: rich ones near town, poor ones farther out */}
            <Fade show={s >= 2}>
              {[
                { x: 90, sacks: 4, label: "rich field" },
                { x: 170, sacks: 3, label: "middle" },
                { x: 250, sacks: 2, label: "poor field" },
              ].map((f, i) => (
                <g key={f.label} style={{ opacity: i === 2 && s < 2 ? 0 : 1, transition: "opacity 500ms" }}>
                  <rect x={f.x - 32} y={120} width={64} height={22} fill={i === 0 ? "#b9d89a" : i === 1 ? "#cfe3b8" : "#e6eccd"} stroke="#000" />
                  {Array.from({ length: f.sacks }, (_, k) => (
                    <g key={k} transform={`translate(${f.x - 22 + k * 15} 104) scale(.55)`}>
                      <Corn />
                    </g>
                  ))}
                  <text x={f.x} y={154} textAnchor="middle" fontSize="8">
                    {f.label}
                  </text>
                </g>
              ))}
              <text x="300" y="134" fontSize="8.5" fill="#d6452f">
                same work,
              </text>
              <text x="300" y="145" fontSize="8.5" fill="#d6452f">
                less corn
              </text>
            </Fade>

            {/* rent piles up on the good fields */}
            <Fade show={s >= 4}>
              <Figure name="Landlord" x={290} y={204} scale={0.7} />
              <rect x="312" y="174" width="16" height="22" fill={RENT} stroke="#000" />
              <text x="320" y="168" textAnchor="middle" fontSize="8.5">
                rent up
              </text>
            </Fade>

            <Fade show={s === 3}>
              <text x="70" y="80" fontSize="9" fill="#d6452f">
                bread dearer, so wages up, so profit down
              </text>
            </Fade>
            <Fade show={s === 4} delay={400}>
              <text x="70" y="80" fontSize="9" fontWeight="600">
                Ricardo: the cause is in nature, the soil gets poorer
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.2 · Marx's story: bigger machines, same squeeze
 * Workshop numbers (c 24, v 3, s 3) with the machines doubled twice:
 * the doubling is made up to show Marx's point.
 * ───────────────────────────────────────────────────────────── */
const STAGES = [
  { c: 24, rate: "11%" },
  { c: 48, rate: "6%" },
  { c: 96, rate: "3%" },
];

export function BiggerMachines() {
  return (
    <Player
      id="anim-v4-16-2"
      title="16.2 · Marx's story: bigger machines, same squeeze"
      steps={[
        { caption: "Marx takes the book from Ricardo and opens Mr. Moneybags' workshop instead. Here is one day: 24 coins of cotton and wear, 3 for Sam's wage, 3 of surplus-value." },
        { caption: "Marx agrees profit rates fall. But look at Sam: he is squeezed exactly as hard as before. Paid 3, unpaid 3." },
        { caption: "Now the boss buys more and bigger machines, so more cotton is spun each day. The capital he lays out grows, and the same 3 coins of surplus are spread thinner. (Made-up doubling.)" },
        {
          caption: "Marx's point: the rate falls “not because labour becomes less productive, but because it becomes more productive.” Machines, not stingy soil.",
          ms: 4600,
        },
        {
          caption: "So Ricardo made two mistakes, says Marx: he blamed rent on poorer soil, and he treated the rate of profit as if it were the same thing as the rate of surplus-value.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const st = STAGES[s <= 1 ? 0 : s === 2 ? 1 : 2];
        const unit = 2.6;
        const machines = s <= 1 ? 1 : s === 2 ? 2 : 4;
        return (
          <>
            <Thinker name="Marx" x={30} y={202} />
            <Thinker name="Ricardo" x={330} y={202} scale={0.7} show={s === 0 || s === 4} />

            {/* machines in the workshop */}
            <rect x="60" y="22" width="220" height="56" fill="#fff" stroke="#000" />
            <text x="66" y="34" fontSize="8">
              the workshop
            </text>
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i} style={{ opacity: i < machines ? 1 : 0, transition: `opacity 500ms ${i * 120}ms` }}>
                <rect x={78 + i * 34} y="44" width="26" height="24" fill="#d4d4d4" stroke="#000" />
                <circle cx={91 + i * 34} cy="56" r="6" fill="none" stroke="#000" />
              </g>
            ))}
            <Figure who="sam" x={258} y={74} scale={0.5} label={false} />

            {/* the capital laid out each day */}
            <text x="60" y="98" fontSize="8.5">
              laid out each day: {st.c + 3} coins
            </text>
            <Bar
              x={60}
              y={104}
              unit={unit}
              segs={[
                { n: st.c, color: TONE.cotton, label: s >= 2 ? `machines, cotton ${st.c}` : `cotton, wear ${st.c}` },
                { n: 3, color: TONE.wage },
              ]}
            />

            {/* Sam's day: always 3 paid, 3 unpaid */}
            <Fade show={s >= 1}>
              <text x="60" y="142" fontSize="8.5">
                Sam&apos;s day: paid 3, unpaid 3 (100%)
              </text>
              <Bar
                x={60}
                y={148}
                unit={12}
                segs={[
                  { n: 3, color: TONE.wage, label: "paid 3" },
                  { n: 3, color: TONE.surplus, label: "unpaid 3" },
                ]}
              />
            </Fade>

            {/* the rate of profit */}
            <g style={{ opacity: s >= 1 && s <= 3 ? 1 : 0, transition: "opacity 400ms" }}>
              <text x="300" y="150" textAnchor="middle" fontSize="8">
                rate of profit
              </text>
              <text x="300" y="174" textAnchor="middle" fontSize="22" fontWeight="300" fill={s >= 2 ? "#d6452f" : "#000"} style={{ transition: `fill ${T}` }}>
                {st.rate}
              </text>
            </g>

            <Banner show={s === 4} text="Ricardo's slips: poor soil, and profit = surplus" y={196} />
          </>
        );
      }}
    </Player>
  );
}
