"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/**
 * A stacked bar for one capital: constant (grey), variable (green) and the
 * surplus-value it produces (gold). Exported for Chapters 9 to 12.
 */
export function CapBar({
  x,
  y,
  c,
  v,
  s,
  unit = 2,
  h = 16,
  showS = true,
  labels = true,
}: {
  x: number;
  y: number;
  c: number;
  v: number;
  s: number;
  unit?: number;
  h?: number;
  showS?: boolean;
  labels?: boolean;
}) {
  const cw = c * unit;
  const vw = v * unit;
  const sw = showS ? s * unit : 0;
  return (
    <g>
      <rect x={x} y={y} width={cw} height={h} fill={TONE.cotton} stroke="#000" strokeWidth="1" style={{ transition: `width ${T}` }} />
      <rect x={x + cw} y={y} width={vw} height={h} fill={TONE.wage} stroke="#000" strokeWidth="1" style={{ transition: `all ${T}` }} />
      <rect x={x + cw + vw} y={y} width={sw} height={h} fill={TONE.surplus} stroke="#000" strokeWidth={showS ? 1 : 0} style={{ transition: `all ${T}` }} />
      {labels && (
        <>
          {cw > 22 && (
            <text x={x + cw / 2} y={y + h / 2 + 3.5} textAnchor="middle" fontSize="8.5">
              {c}c
            </text>
          )}
          {vw > 22 && (
            <text x={x + cw + vw / 2} y={y + h / 2 + 3.5} textAnchor="middle" fontSize="8.5" fill="#fff">
              {v}v
            </text>
          )}
          {showS && sw > 22 && (
            <text x={x + cw + vw + sw / 2} y={y + h / 2 + 3.5} textAnchor="middle" fontSize="8.5">
              {s}s
            </text>
          )}
        </>
      )}
    </g>
  );
}

/** A row of little worker heads: one head per `per` workers. */
export function Crowd({ x, y, n, per = 50, show = true }: { x: number; y: number; n: number; per?: number; show?: boolean }) {
  const heads = Math.round(n / per);
  return (
    <g>
      {Array.from({ length: heads }, (_, i) => (
        <g
          key={i}
          transform={`translate(${x + (i % 6) * 13} ${y + Math.floor(i / 6) * 15})`}
          style={{ opacity: show ? 1 : 0, transition: `opacity 300ms ${i * 60}ms` }}
        >
          <circle cy="-8" r="4" fill="#fff" stroke="#000" strokeWidth="1" />
          <rect x="-4" y="-4" width="8" height="8" fill={TONE.wage} />
        </g>
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.1 · The mill and the tailoring workshop
 * Marx's numbers: equal capitals of 700, A = 600c + 100v, B = 100c + 600v,
 * rate of surplus-value 100%. Profits 100 and 600; rates 14 2/7% and 85 5/7%.
 * £1 of wages = 1 worker for a week.
 * ───────────────────────────────────────────────────────────── */
export function TheMillAndTheTailor() {
  return (
    <Player
      id="anim-v3-8-1"
      title="8.1 · The mill and the tailoring workshop"
      steps={[
        { caption: "Two bosses each put in 700 coins. Mr. Moneybags runs a mill full of machines. The big tailoring workshop on the square, where Ava sews, is run almost entirely by hand." },
        { caption: "The mill spends 600 on machines and cotton, and only 100 on wages. That hires 100 workers for a week. (Marx's own numbers.)" },
        { caption: "The tailoring workshop spends only 100 on cloth and tools, and 600 on wages. That hires 600 workers: six times as many people." },
        { caption: "Both squeeze their workers equally: half of every day is unpaid. So the mill's 100 workers make 100 of surplus-value. The tailors' 600 make 600." },
        {
          caption: "Same 700 coins, very different profits: 14% for the mill, 86% for the tailoring workshop. Only living workers make surplus-value, so the one with more workers makes more.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {[
            { k: "Mr. Moneybags' mill", y: 30, c: 600, v: 100, rate: "14 2/7%", show: s >= 1 },
            { k: "the tailoring workshop", y: 120, c: 100, v: 600, rate: "85 5/7%", show: s >= 2 },
          ].map((w) => (
            <g key={w.k}>
              <text x="14" y={w.y} fontSize="11" fontWeight="700">
                {w.k}
              </text>
              <text x="346" y={w.y} textAnchor="end" fontSize="9" fillOpacity=".6">
                capital 700
              </text>
              <g style={{ opacity: w.show ? 1 : 0.15, transition: "opacity 500ms" }}>
                <CapBar x={14} y={w.y + 8} c={w.c} v={w.v} s={w.v} unit={0.24} showS={s >= 3} />
              </g>
              <Crowd x={24} y={w.y + 50} n={w.v} show={w.show} />
              <text x="104" y={w.y + 48} fontSize="9">
                {w.show ? `${w.v} workers` : ""}
              </text>
              <Fade show={s >= 3}>
                <text x="200" y={w.y + 48} fontSize="9.5" fill="#8a6d00" fontWeight="600">
                  surplus-value {w.v}
                </text>
              </Fade>
              <Fade show={s >= 4}>
                <text x="346" y={w.y + 48} textAnchor="end" fontSize="14" fontWeight="700">
                  {w.rate}
                </text>
                <text x="346" y={w.y + 61} textAnchor="end" fontSize="8.5" fillOpacity=".6">
                  rate of profit
                </text>
              </Fade>
            </g>
          ))}
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.2 · Iron or copper
 * Marx's numbers: 100 of wages set in motion 200 of constant capital in A and
 * 400 in B, because B's materials are dearer. Same surplus-value of 100.
 * Rates 33⅓% and 20%. Technical composition the same, value composition not.
 * ───────────────────────────────────────────────────────────── */
export function IronOrCopper() {
  return (
    <Player
      id="anim-v3-8-2"
      title="8.2 · Iron or copper"
      steps={[
        { caption: "The Forge works in iron. A coppersmith down the lane works in copper. Each has 100 workers and each uses the same weight of metal every week." },
        { caption: "So in things, the two are alike: the same people handle the same heap of metal. Marx calls this the technical composition of capital." },
        { caption: "But copper costs twice as much as iron. The Forge spends 200 coins on metal and tools. The coppersmith spends 400. Both pay 100 in wages. (Marx's numbers.)" },
        { caption: "Both get 100 of surplus-value. The Forge earns 100 on 300: 33⅓%. The coppersmith earns 100 on 500: just 20%." },
        {
          caption: "Same work, same workers, different prices for the metal. Marx calls the mix measured in coins the value composition. When it follows the technical mix, he calls it the organic composition.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {[
            { k: "the Forge (iron)", y: 34, c: 200, color: "#777", rate: "33⅓%", fig: 0 },
            { k: "the coppersmith", y: 124, c: 400, color: "#c97a3a", rate: "20%", fig: 1 },
          ].map((w) => (
            <g key={w.k}>
              <text x="14" y={w.y} fontSize="11" fontWeight="700">
                {w.k}
              </text>
              {/* the heap of metal: same size in both */}
              <g transform={`translate(40 ${w.y + 36})`}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <rect key={i} x={(i % 3) * 16 - 24} y={-Math.floor(i / 3) * 9} width="14" height="8" fill={w.color} stroke="#000" strokeWidth=".8" />
                ))}
                <text y="20" textAnchor="middle" fontSize="8.5">
                  same weight
                </text>
              </g>
              <Crowd x={92} y={w.y + 34} n={100} per={25} />
              <text x="92" y={w.y + 50} fontSize="8.5">
                100 workers
              </text>

              <Fade show={s >= 2}>
                <CapBar x={160} y={w.y + 10} c={w.c} v={100} s={100} unit={0.3} showS={s >= 3} />
                <text x="160" y={w.y + 38} fontSize="8.5">
                  {w.c} on metal, 100 on wages
                </text>
              </Fade>
              <Fade show={s >= 3}>
                <text x="346" y={w.y + 52} textAnchor="end" fontSize="14" fontWeight="700">
                  {w.rate}
                </text>
              </Fade>
            </g>
          ))}
          <Fade show={s === 1}>
            <text x="250" y="110" textAnchor="middle" fontSize="10" fontWeight="600">
              technical composition: the same
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="60" y="196" width="240" height="20" fill="#000" />
            <text x="180" y="210" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
              same things, different coins: value composition
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
