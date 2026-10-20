"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade } from "@/components/anim/Things";
import { Bar, TONE } from "@/components/anim/Workshop";
import { COST } from "./ch01-animations";

/* ─────────────────────────────────────────────────────────────
 * 2.1 · Two rulers for one pile
 * Workshop numbers: s = 3, v = 3, C = c + v = 27.
 * s/v = 100%, s/C = 3/27 = 11.1%.
 * ───────────────────────────────────────────────────────────── */
export function TwoRulers() {
  const U = 9;
  const X = 34;
  return (
    <Player
      id="anim-v3-2-1"
      title="2.1 · Two rulers for one pile"
      steps={[
        { caption: "Here are the same 3 coins of surplus-value from Mr. Moneybags' workshop. How big are they? It depends what you measure them against." },
        { caption: "Marx's first ruler: compare them with the wages that made them, 3 coins. 3 out of 3 is 100%. That is the rate of surplus-value." },
        { caption: "The boss's ruler: compare them with everything he spent, 27 coins. 3 out of 27 is about 11%. That is the rate of profit." },
        { caption: "Same 3 coins, two very different numbers. Marx says they are two measurements of the same thing." },
        { caption: "The boss only ever sees the second number. Because the whole 27 is bigger than the wages, the rate of profit is always smaller than the rate of surplus-value." },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(320 40)">
            <Coin r={9} />
            <g transform="translate(-14 14)">
              <Coin r={9} />
            </g>
            <g transform="translate(14 14)">
              <Coin r={9} />
            </g>
          </g>
          <text x="320" y="82" textAnchor="middle" fontSize="9">
            surplus-value: 3
          </text>

          {/* ruler 1: against wages */}
          <Fade show={s >= 1}>
            <text x={X} y="40" fontSize="9.5" fontWeight="600">
              against the wages
            </text>
            <Bar x={X} y={46} unit={U} h={18} segs={[{ n: 3, color: TONE.wage, label: "v 3" }]} />
            <Bar x={X} y={68} unit={U} h={18} segs={[{ n: 3, color: TONE.surplus, label: "s 3" }]} />
            <text x={X + 40} y="82" fontSize="13" fontWeight="700">
              = 100%
            </text>
            <text x={X + 108} y="82" fontSize="9" fill="#555">
              rate of surplus-value s/v
            </text>
          </Fade>

          {/* ruler 2: against total capital */}
          <Fade show={s >= 2}>
            <text x={X} y="118" fontSize="9.5" fontWeight="600">
              against everything spent
            </text>
            <Bar x={X} y={124} unit={U} h={18} segs={[{ n: 27, color: COST, label: "c + v = 27" }]} />
            <Bar x={X} y={146} unit={U} h={18} segs={[{ n: 3, color: TONE.surplus, label: "s 3" }]} />
            <text x={X + 40} y="160" fontSize="13" fontWeight="700">
              = 11%
            </text>
            <text x={X + 98} y="160" fontSize="9" fill="#555">
              rate of profit s/C
            </text>
          </Fade>

          <Fade show={s >= 3}>
            <text x="180" y="196" textAnchor="middle" fontSize="11" fontWeight="600">
              one pile of coins, two measurements
            </text>
          </Fade>
          <Fade show={s >= 4}>
            <Figure who="moneybags" x={322} y={186} scale={0.6} label={false} />
            <text x="322" y="208" textAnchor="middle" fontSize="8.5">
              sees only 11%
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.2 · Every coin seems to sprout
 * ───────────────────────────────────────────────────────────── */
const PILES = [
  { label: "cotton", n: 20, color: TONE.cotton, x: 60 },
  { label: "spindles", n: 4, color: TONE.spindle, x: 150 },
  { label: "Sam's wage", n: 3, color: TONE.wage, x: 240 },
];

export function EveryCoinSeemsToSprout() {
  return (
    <Player
      id="anim-v3-2-2"
      title="2.2 · Every coin seems to sprout"
      steps={[
        { caption: "Mr. Moneybags spent 27 coins in three piles: 20 on cotton, 4 on spindle wear, 3 on Sam's wage." },
        { caption: "In Volume I we saw that only the wage pile grows. Sam's labour makes 6 coins of new value: 3 replace his wage, 3 are extra." },
        { caption: "But the boss thinks every pile grew a little. A sprout on the cotton, a sprout on the spindles, a sprout on the wages." },
        { caption: "It feels true to him, because he wants the same return on every coin he puts in, wherever it goes." },
        { caption: "Marx says this is how profit hides its origin. The secret of where the extra comes from is, in his words, “obscured and extinguished”." },
      ]}
    >
      {(s) => {
        const believe = s >= 2;
        return (
          <>
            <line x1="20" y1="170" x2="340" y2="170" stroke="#000" strokeOpacity=".2" />
            {PILES.map((p, i) => {
              const h = Math.max(8, p.n * 5);
              const grows = believe || (s === 1 && i === 2);
              const sprout = believe ? 6 : s === 1 && i === 2 ? 18 : 0;
              return (
                <g key={p.label}>
                  <rect x={p.x - 26} y={170 - h} width="52" height={h} fill={p.color} stroke="#000" />
                  <text x={p.x} y="184" textAnchor="middle" fontSize="9">
                    {p.label}: {p.n}
                  </text>
                  <rect
                    x={p.x - 26}
                    y={170 - h - sprout}
                    width="52"
                    height={sprout}
                    fill={TONE.surplus}
                    stroke="#000"
                    strokeWidth={grows ? 1 : 0}
                    style={{ transition: "y 700ms, height 700ms" }}
                  />
                  <Fade show={grows}>
                    <path
                      d={`M${p.x},${170 - h - sprout - 2} q-6,-12 0,-20 q6,8 0,20`}
                      fill="#2a9d5b"
                      stroke="#000"
                      strokeWidth=".8"
                      style={{ transition: "d 700ms" }}
                    />
                  </Fade>
                </g>
              );
            })}
            <Fade show={s === 1}>
              <text x="240" y="40" textAnchor="middle" fontSize="9.5" fill={TONE.wage} fontWeight="600">
                only this pile grows
              </text>
            </Fade>
            <Fade show={s >= 2 && s <= 3}>
              <text x="150" y="30" textAnchor="middle" fontSize="9.5" fill="#b38f00" fontWeight="600">
                what the boss believes
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <Figure who="moneybags" x={322} y={150} scale={0.6} label={false} mood="happy" />
            </Fade>
            <Fade show={s >= 4}>
              <rect x="40" y="198" width="280" height="18" fill="#000" />
              <text x="180" y="211" textAnchor="middle" fontSize="9.5" fill="#fff">
                profit: surplus-value with its origin hidden
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
