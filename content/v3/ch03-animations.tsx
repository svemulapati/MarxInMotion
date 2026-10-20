"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";
import { T } from "./ch01-animations";

/**
 * A capital of 100 units drawn as a 10 x 10 grid of squares: gray for
 * constant capital, green for variable capital, with the surplus-value as a
 * gold column beside it. Used for Marx's per-cent examples.
 */
function Hundred({ x, y, c, v, sv, cell = 9 }: { x: number; y: number; c: number; v: number; sv: number; cell?: number }) {
  return (
    <g>
      {Array.from({ length: 100 }, (_, i) => {
        const isV = i >= c;
        return (
          <rect
            key={i}
            x={x + (i % 10) * cell}
            y={y + Math.floor(i / 10) * cell}
            width={cell - 1}
            height={cell - 1}
            fill={isV ? TONE.wage : "#cfcfcf"}
            style={{ transition: `fill 500ms ease ${(i % 10) * 20}ms` }}
          />
        );
      })}
      {Array.from({ length: 6 }, (_, k) => (
        <rect
          key={k}
          x={x + 10 * cell + 6}
          y={y + 10 * cell - (k + 1) * cell * (40 / 60)}
          width={cell * 1.6}
          height={cell * (40 / 60) - 1}
          fill={TONE.surplus}
          style={{ opacity: k < Math.round((sv / 40) * 6) ? 1 : 0, transition: "opacity 400ms" }}
        />
      ))}
      <text x={x + 5 * cell} y={y + 10 * cell + 14} textAnchor="middle" fontSize="9">
        {c}c + {v}v
      </text>
      <text x={x + 10 * cell + 6 + cell * 0.8} y={y + 10 * cell + 14} textAnchor="middle" fontSize="9" fill="#b38f00">
        {sv}s
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.1 · The recipe: p′ = s′ × v/C
 * Marx's numbers: 80c + 20v with 10s, 20s, 40s → s′ 50, 100, 200%; p′ 10, 20, 40%.
 * ───────────────────────────────────────────────────────────── */
const ROWS = [
  { sv: 10, sp: 50, pp: 10 },
  { sv: 20, sp: 100, pp: 20 },
  { sv: 40, sp: 200, pp: 40 },
];

export function TheRecipe() {
  return (
    <Player
      id="anim-v3-3-1"
      title="3.1 · The recipe: profit rate from two ingredients"
      steps={[
        { caption: "Marx turns profit into a recipe. Take a capital of 100: 80 for machines and materials (gray), 20 for wages (green)." },
        { caption: "If the workers make 20 of surplus-value, the rate of surplus-value is 20 ÷ 20 = 100%. The rate of profit is 20 ÷ 100 = 20%." },
        { caption: "Squeeze the workers less: 10 of surplus-value. Now 50% and 10%. The rate of profit halves too." },
        { caption: "Squeeze them more: 40 of surplus-value. Now 200% and 40%." },
        { caption: "The recipe: rate of profit = rate of surplus-value × (wages ÷ whole capital). Here wages are a fifth of the capital, so profit is always a fifth of s′." },
      ]}
    >
      {(s) => {
        const row = s <= 1 ? ROWS[1] : s === 2 ? ROWS[0] : s === 3 ? ROWS[2] : ROWS[1];
        return (
          <>
            <Hundred x={40} y={30} c={80} v={20} sv={s === 0 ? 0 : row.sv} />
            <Fade show={s >= 1}>
              <text x="200" y="60" fontSize="10">
                rate of surplus-value
              </text>
              <text x="200" y="82" fontSize="24" fontWeight="700" fill={TONE.wage} style={{ transition: `all ${T}` }}>
                {row.sp}%
              </text>
              <text x="200" y="118" fontSize="10">
                rate of profit
              </text>
              <text x="200" y="140" fontSize="24" fontWeight="700" fill="#b38f00">
                {row.pp}%
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <rect x="20" y="176" width="320" height="30" fill="#000" />
              <text x="180" y="195" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="600">
                p&prime; = s&prime; × v/C = s&prime; × 20/100
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.2 · Same squeeze, different mix
 * Marx's numbers: 15,000 = 12,000c + 3,000v (+3,000s) → 20%;
 * 15,000 = 13,000c + 2,000v (+2,000s) → 13⅓%, both at s′ = 100%.
 * Drawn per hundred (80/20 and 86⅔/13⅓, shown as 87/13 squares).
 * ───────────────────────────────────────────────────────────── */
export function SameSqueezeDifferentMix() {
  return (
    <Player
      id="anim-v3-3-2"
      title="3.2 · Same squeeze, different mix"
      steps={[
        { caption: "Marx's example: a capital of 15,000. 12,000 go on machines and materials, 3,000 on wages. The workers make 3,000 of surplus-value." },
        { caption: "Rate of surplus-value 100%. Rate of profit 3,000 ÷ 15,000 = 20%." },
        { caption: "Now the boss buys more machines with the same 15,000: 13,000 on machines, only 2,000 on wages. The workers are squeezed exactly as hard: still 100%." },
        { caption: "But fewer wages mean less surplus-value: 2,000. The rate of profit falls to 13⅓%." },
        { caption: "Same exploitation, lower profit rate. The mix of machines and wages matters as much as the squeeze." },
      ]}
    >
      {(s) => {
        const after = s >= 2;
        return (
          <>
            <Hundred x={40} y={26} c={after ? 87 : 80} v={after ? 13 : 20} sv={s === 0 || s === 2 ? 0 : after ? 13 : 20} />
            <text x="85" y="140" textAnchor="middle" fontSize="9" fill="#555">
              {after ? "13,000c + 2,000v" : "12,000c + 3,000v"}
            </text>
            <Fade show={s >= 1}>
              <text x="200" y="56" fontSize="10">
                rate of surplus-value
              </text>
              <text x="200" y="78" fontSize="22" fontWeight="700" fill={TONE.wage}>
                100%
              </text>
            </Fade>
            <Fade show={s === 1 || s >= 3}>
              <text x="200" y="110" fontSize="10">
                rate of profit
              </text>
              <text x="200" y="132" fontSize="22" fontWeight="700" fill="#b38f00">
                {after ? "13⅓%" : "20%"}
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <text x="180" y="190" textAnchor="middle" fontSize="11" fontWeight="600">
                more machines, same squeeze, lower profit rate
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.3 · Opposite directions
 * Marx's numbers: 80c + 20v + 20s (s′ 100%, p′ 20%) →
 * 90c + 10v + 15s (s′ 150%, p′ 15%).
 * ───────────────────────────────────────────────────────────── */
export function OppositeDirections() {
  return (
    <Player
      id="anim-v3-3-3"
      title="3.3 · Exploitation up, profit rate down"
      steps={[
        { caption: "Start again with Marx's 80 for machines, 20 for wages and 20 of surplus-value: 100% and 20%." },
        { caption: "New machines arrive. Now it is 90 for machines and only 10 for wages. Each worker is squeezed harder: 15 of surplus-value from 10 of wages." },
        { caption: "The rate of surplus-value climbs to 150%. Workers are more exploited than before." },
        { caption: "Yet the rate of profit falls, from 20% to 15%, because the surplus is now measured against a capital that is mostly machines." },
        { caption: "So the profit rate can fall while exploitation rises. Marx shows every other mix too: they can rise together, fall together, or stand still. Hold on to this for Part III." },
      ]}
    >
      {(s) => {
        const after = s >= 1;
        return (
          <>
            <Hundred x={40} y={26} c={after ? 90 : 80} v={after ? 10 : 20} sv={after ? 15 : 20} />
            <text x="200" y="56" fontSize="10">
              rate of surplus-value
            </text>
            <text x="200" y="78" fontSize="22" fontWeight="700" fill={TONE.wage}>
              {s >= 2 ? "150%" : "100%"}
            </text>
            <Fade show={s >= 2}>
              <text x="282" y="78" fontSize="18" fill={TONE.wage}>
                ▲
              </text>
            </Fade>
            <text x="200" y="110" fontSize="10">
              rate of profit
            </text>
            <text x="200" y="132" fontSize="22" fontWeight="700" fill="#b38f00">
              {s >= 3 ? "15%" : "20%"}
            </text>
            <Fade show={s >= 3}>
              <text x="262" y="132" fontSize="18" fill="#d6452f">
                ▼
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <text x="180" y="190" textAnchor="middle" fontSize="11" fontWeight="600">
                the two rates can move in opposite directions
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
