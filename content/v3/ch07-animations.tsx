"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade } from "@/components/anim/Things";
import { Bar, TONE } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 7.1 · Same surplus, different profit
 * Marx's numbers (pounds, shown as coins): both enterprises pay 1,000 in
 * wages and get 1,000 of surplus-value. A needs 9,000 of constant capital,
 * B needs 11,000. Rates of profit 10% and 8⅓%.
 * ───────────────────────────────────────────────────────────── */
const UNIT = 0.0205; // px per coin: 12,000 coins ≈ 246 px

export function SameSurplusDifferentProfit() {
  return (
    <Player
      id="anim-v3-7-1"
      viewBox="0 0 360 236"
      title="7.1 · Same surplus, different profit"
      steps={[
        { caption: "Two workshops, A and B. Each pays its workers 1,000 coins of wages, and each gets 1,000 coins of surplus-value. Same workers, same hours, same squeeze." },
        { caption: "Workshop A is run carefully: cheap cotton, good machines, little waste. It needs 9,000 coins of machines and materials." },
        { caption: "Workshop B is run badly. It wastes cotton and pays too much for its machines. It needs 11,000 coins for the same work." },
        { caption: "A makes 1,000 on 10,000: a rate of profit of 10%. B makes 1,000 on 12,000: only 8⅓%. These are Marx's own numbers." },
        {
          caption: "So the boss of A thinks: my profit comes from my own cleverness! Marx says the cleverness only decides how big the profit looks. The 1,000 itself still came from the workers' unpaid hours.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {[
            { k: "A", y: 46, c: 9000, show: s >= 1, rate: "10%" },
            { k: "B", y: 96, c: 11000, show: s >= 2, rate: "8⅓%" },
          ].map((w) => (
            <g key={w.k}>
              <text x="14" y={w.y + 13} fontSize="12" fontWeight="700">
                {w.k}
              </text>
              <Bar
                x={30}
                y={w.y}
                unit={UNIT}
                segs={[
                  { n: w.c, color: TONE.cotton, label: `machines, cotton ${w.c.toLocaleString("en")}`, show: w.show },
                  { n: 1000, color: TONE.wage, label: "", show: true },
                  { n: 1000, color: TONE.surplus, label: "", show: true },
                ]}
              />
              <text x={30 + (w.show ? w.c * UNIT : 0) + 10} y={w.y + 30} fontSize="8.5" fill={TONE.wage} style={{ transition: `x ${T}` }}>
                wages 1,000
              </text>
              <Fade show={s >= 3}>
                <text x="350" y={w.y + 13} textAnchor="end" fontSize="13" fontWeight="700">
                  {w.rate}
                </text>
              </Fade>
            </g>
          ))}
          <text x="30" y="30" fontSize="9" fillOpacity=".6">
            gold = surplus-value: 1,000 in both
          </text>

          <Figure who="moneybags" x={60} y={212} scale={0.7} mood={s === 4 ? "wow" : "happy"} />
          <Fade show={s === 4}>
            <g transform="translate(78 182)">
              <Bubble w={150} lines={["My profit comes from", "my own cleverness!"]} />
            </g>
            <text x="250" y="200" textAnchor="middle" fontSize="9.5" fontWeight="600">
              cleverness changes the rate,
            </text>
            <text x="250" y="213" textAnchor="middle" fontSize="9.5" fontWeight="600">
              not where the 1,000 came from
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.2 · Bigger or smaller, the rate stays put
 * Marx's numbers: at 20%, capitals of 1,000, 2,000 and 500 make 200, 400 and
 * 100. The rate changes only if the mix of machines and wages changes.
 * ───────────────────────────────────────────────────────────── */
const SIZES = [
  { cap: 1000, profit: 200, label: "1,000" },
  { cap: 2000, profit: 400, label: "2,000" },
  { cap: 500, profit: 100, label: "500" },
];

export function BiggerOrSmaller() {
  return (
    <Player
      id="anim-v3-7-2"
      title="7.2 · Bigger or smaller, the rate stays put"
      steps={[
        { caption: "A workshop with 1,000 coins of capital makes 200 coins of profit. That is a rate of profit of 20%." },
        { caption: "Double it: 2,000 coins of capital, with machines and wages in the same mix. Profit doubles too, to 400. Still 20%." },
        { caption: "Halve it: 500 coins in the same mix makes 100. Still 20%. These are Marx's numbers." },
        {
          caption: "The rate only moves when the mix moves: more machines for each worker, or cheaper ones. A bigger pile of profit can just mean a bigger pile of capital.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const k = Math.min(s, 2);
        return (
          <>
            {SIZES.map((z, i) => {
              const on = i <= k;
              const y = 40 + i * 50;
              const w = z.cap * 0.07;
              return (
                <g key={z.label} style={{ opacity: on ? 1 : 0, transition: "opacity 500ms" }}>
                  <text x="14" y={y + 12} fontSize="10">
                    capital {z.label}
                  </text>
                  <rect x="88" y={y} width={on ? w * 0.8 : 0} height="16" fill={TONE.cotton} stroke="#000" strokeWidth="1" style={{ transition: `width ${T}` }} />
                  <rect x={88 + w * 0.8} y={y} width={on ? w * 0.2 : 0} height="16" fill={TONE.wage} stroke="#000" strokeWidth="1" style={{ transition: `width ${T}` }} />
                  <rect x={88 + w + 4} y={y} width={on ? z.profit * 0.07 : 0} height="16" fill={TONE.surplus} stroke="#000" strokeWidth="1" style={{ transition: `width ${T}` }} />
                  <text x={88 + w + 8 + z.profit * 0.07} y={y + 12} fontSize="9.5">
                    profit {z.profit}
                  </text>
                  <text x="350" y={y + 12} textAnchor="end" fontSize="12" fontWeight="700">
                    20%
                  </text>
                </g>
              );
            })}
            <Fade show={s === 3}>
              <rect x="40" y="186" width="280" height="26" fill="#000" />
              <text x="180" y="203" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                same mix of machines and wages = same rate
              </text>
            </Fade>
            <Fade show={s < 3}>
              <text x="180" y="200" textAnchor="middle" fontSize="9" fillOpacity=".55">
                grey: machines and materials · green: wages · gold: profit
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
