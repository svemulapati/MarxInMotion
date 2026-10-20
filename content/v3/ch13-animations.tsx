"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";

const GRAY = "#bdbdbd";
const GREEN = "#2a9d5b";
const GOLD = "#e6b800";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 13.1 · Same squeeze, smaller rate
 * Marx's own sequence: v = 100, s = 100 (rate of surplus-value 100%),
 * c = 50, 100, 200, 300, 400 gives a rate of profit of
 * 66⅔%, 50%, 33⅓%, 25%, 20%.
 * ───────────────────────────────────────────────────────────── */
const SEQ = [
  { c: 50, rate: "66⅔%" },
  { c: 100, rate: "50%" },
  { c: 200, rate: "33⅓%" },
  { c: 300, rate: "25%" },
  { c: 400, rate: "20%" },
];
const UNIT = 0.5; // px per coin

export function SameSqueezeSmallerRate() {
  return (
    <Player
      id="anim-v3-13-1"
      title="13.1 · Same squeeze, smaller rate"
      steps={[
        { caption: "Marx's own numbers. A workshop pays 100 coins of wages a week. The workers make 100 coins of surplus-value: half the day paid, half unpaid. And it uses 50 coins' worth of machines and cotton. Profit 100 on 150 advanced: 66⅔%.", ms: 5600 },
        { caption: "Over the years Mr. Moneybags buys more machines. Now 100 coins of machines and cotton. Same workers, same wages, same 100 of surplus. But 100 on 200 is only 50%." },
        { caption: "More machines: 200. The workers are squeezed exactly as hard as before. The rate of profit drops to 33⅓%." },
        { caption: "300 of machines and cotton: 25%." },
        { caption: "400: 20%. Nobody squeezed less. The surplus is the same size, but it is spread over a bigger and bigger pile of capital. Marx calls this the tendency of the rate of profit to fall.", ms: 5600 },
      ]}
    >
      {(s) => {
        const { c, rate } = SEQ[s];
        const x0 = 20;
        return (
          <>
            {/* machines: one block per 50 coins of constant capital */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i} style={{ opacity: i < c / 50 ? 1 : 0, transition: `opacity 400ms ${i * 60}ms` }}>
                <rect x={x0 + i * 26} y={34} width={22} height={22} fill="#fff" stroke="#000" strokeWidth="1" />
                <circle cx={x0 + i * 26 + 11} cy={45} r={6} fill="none" stroke="#000" strokeWidth="1" />
              </g>
            ))}
            <text x={x0} y="26" fontSize="9" fillOpacity=".6">
              machines and cotton
            </text>

            {/* the capital advanced: c (gray) + v (green) */}
            <text x={x0} y="84" fontSize="9" fillOpacity=".6">
              capital advanced
            </text>
            <rect x={x0} y={90} height={22} width={c * UNIT} fill={GRAY} stroke="#000" strokeWidth=".8" style={{ transition: `width ${T}` }} />
            <text x={x0 + (c * UNIT) / 2} y={105} textAnchor="middle" fontSize="9" style={{ transition: `x ${T}` }}>
              c {c}
            </text>
            <rect x={x0 + c * UNIT} y={90} height={22} width={100 * UNIT} fill={GREEN} stroke="#000" strokeWidth=".8" style={{ transition: `x ${T}` }} />
            <text x={x0 + c * UNIT + 25} y={105} textAnchor="middle" fontSize="9" fill="#fff" style={{ transition: `x ${T}` }}>
              v 100
            </text>

            {/* the surplus, always the same */}
            <text x={x0} y="140" fontSize="9" fillOpacity=".6">
              surplus-value (profit)
            </text>
            <rect x={x0} y={146} height={22} width={100 * UNIT} fill={GOLD} stroke="#000" strokeWidth=".8" />
            <text x={x0 + 25} y={161} textAnchor="middle" fontSize="9">
              s 100
            </text>
            <text x={x0 + 60} y={161} fontSize="9" fillOpacity=".6">
              never changes
            </text>

            {/* the rate */}
            <text x="340" y="160" textAnchor="end" fontSize="9" fillOpacity=".6">
              rate of profit
            </text>
            <text x="340" y="196" textAnchor="end" fontSize="32" fontWeight="300" fill={s === 4 ? "#d6452f" : "#000"}>
              {rate}
            </text>
            <text x="20" y="200" fontSize="9" fillOpacity=".6">
              {`100 ÷ (${c} + 100)`}
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.2 · A smaller slice of a bigger pie
 * Marx's own numbers (in millions): workers 2 → 3 million;
 * 4c + 2v + 2s (33⅓%) becomes 15c + 3v + 3s (16⅔%).
 * ───────────────────────────────────────────────────────────── */
export function SmallerSliceBiggerPie() {
  return (
    <Player
      id="anim-v3-13-2"
      title="13.2 · A smaller slice of a bigger pie"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Marx zooms out to a whole country. 2 million workers, 2 million of wages, 2 million of surplus-value, and 4 million of machines and materials. Profit: 2 on 6, or 33⅓%." },
        { caption: "Years later, 3 million workers. Wages and surplus-value both grow to 3 million. But machines and materials have grown much faster: from 4 million to 15." },
        { caption: "Now profit is 3 on 18: only 16⅔%. The rate has halved." },
        {
          caption: "Yet the total profit grew, from 2 million to 3 million. Marx calls this a double-edged law: the rate of profit falls while the mass of profit rises, for the same reason.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const later = s >= 1;
        const cols = [
          { x: 95, label: "before", c: 4, v: 2, sv: 2, rate: "33⅓%", show: true },
          { x: 265, label: "later", c: 15, v: 3, sv: 3, rate: "16⅔%", show: later },
        ];
        const U = 8;
        return (
          <>
            <line x1="180" y1="10" x2="180" y2="220" stroke="#000" strokeOpacity=".1" />
            {cols.map((col) => (
              <Fade key={col.label} show={col.show}>
                <text x={col.x} y="18" textAnchor="middle" fontSize="11" fontWeight="600">
                  {col.label}
                </text>
                {/* workers: one figure per million */}
                {Array.from({ length: col.v }, (_, i) => (
                  <Figure key={i} name="" label={false} x={col.x - (col.v - 1) * 13 + i * 26} y={78} scale={0.5} />
                ))}
                <text x={col.x} y="92" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                  {col.v} million workers
                </text>
                {/* stacked bar: c, v */}
                <rect x={col.x - 60} y={102} width={col.c * U} height={16} fill={GRAY} stroke="#000" strokeWidth=".8" />
                <text x={col.x - 60 + (col.c * U) / 2} y={113.5} textAnchor="middle" fontSize="8.5">
                  c {col.c}
                </text>
                <rect x={col.x - 60} y={122} width={col.v * U} height={16} fill={GREEN} stroke="#000" strokeWidth=".8" />
                <text x={col.x - 60 + col.v * U + 4} y={133.5} fontSize="8.5">
                  v {col.v}
                </text>
                <rect x={col.x - 60} y={142} width={col.sv * U} height={16} fill={GOLD} stroke="#000" strokeWidth=".8" />
                <text x={col.x - 60 + col.sv * U + 4} y={153.5} fontSize="8.5">
                  s {col.sv} (profit)
                </text>
              </Fade>
            ))}

            {cols.map((col) => (
              <Fade key={col.label} show={col.label === "before" || s >= 2}>
                <text x={col.x} y="176" textAnchor="middle" fontSize="9" fillOpacity=".6">
                  rate of profit
                </text>
                <text x={col.x} y="194" textAnchor="middle" fontSize="16" fontWeight="600" fill={col.label === "later" ? "#d6452f" : "#000"}>
                  {col.rate}
                </text>
              </Fade>
            ))}
            <Fade show={s === 3} delay={300}>
              <rect x="40" y="204" width="280" height="22" fill="#000" />
              <text x="180" y="219" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
                rate down by half, <tspan fill={GOLD}>mass of profit up by half</tspan>
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.3 · Cheaper yarn, and much more of it
 * Each skein holds less living labour, so its price falls and so does
 * the profit in each one; but there are many more skeins.
 * (Illustrative numbers, labelled.)
 * ───────────────────────────────────────────────────────────── */
export function CheaperYarnMoreOfIt() {
  return (
    <Player
      id="anim-v3-13-3"
      title="13.3 · Cheaper yarn, and much more of it"
      steps={[
        { caption: "Sam's day with the old machine: 10 skeins of yarn. (Made-up numbers to show the idea.)" },
        { caption: "With the new machine, the same day of Sam's work turns into 40 skeins." },
        { caption: "So each skein holds far less of Sam's work than before. Marx says the price of each single piece falls, and so does the profit inside each piece." },
        {
          caption: "But there are four times as many pieces. That is how the rate can fall while the pile of profit still grows. Marx adds it only works within limits.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const many = s >= 1;
        const n = many ? 40 : 10;
        return (
          <>
            <Figure who="sam" x={36} y={150} scale={0.85} />
            <text x="36" y="176" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              one day of work
            </text>
            {Array.from({ length: 40 }, (_, i) => (
              <g
                key={i}
                style={{
                  opacity: i < n ? 1 : 0,
                  transform: `translate(${84 + (i % 10) * 26}px, ${40 + Math.floor(i / 10) * 30}px) scale(.55)`,
                  transition: `opacity 300ms ${i * 18}ms`,
                }}
              >
                <Yarn />
              </g>
            ))}
            <text x="214" y="22" textAnchor="middle" fontSize="10" fontWeight="600">
              {n} skeins
            </text>

            <Fade show={s >= 2}>
              <text x="84" y="176" fontSize="9" fillOpacity=".6">
                Sam&apos;s work in each skein
              </text>
              <rect x="84" y="182" width={many ? 18 : 72} height="12" fill={GREEN} style={{ transition: `width ${T}` }} />
              <text x={many ? 108 : 162} y="192" fontSize="9" style={{ transition: `x ${T}` }}>
                {many ? "a quarter as much" : ""}
              </text>
            </Fade>
            <Fade show={s === 3} delay={300}>
              <text x="340" y="190" textAnchor="end" fontSize="11" fontWeight="600" fill="#b38f00">
                less per piece, more pieces
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
