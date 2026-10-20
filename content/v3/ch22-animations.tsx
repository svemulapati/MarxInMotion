"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const BEA = CAST.bea.color;
const MB = "#3a3a3a";
const RED = "#d6452f";

/* ─────────────────────────────────────────────────────────────
 * 22.1 · How big is Bea's slice?
 * The profit of 20 on 100 coins is Marx's Ch 21 example. The interest
 * amounts shown at each step are made up to show the limits.
 * ───────────────────────────────────────────────────────────── */
const BX = 40;
const BW = 280;
const SLICES = [5, 5, 20, 1, 5];

export function HowBigIsBeasSlice() {
  return (
    <Player
      id="anim-v3-22-1"
      title="22.1 · How big is Bea's slice?"
      steps={[
        { caption: "Moneybags borrowed 100 coins and made 20 profit with them. Bea takes part of that as interest. But how big a part?" },
        { caption: "Wages have an average set by what workers need to live. Profit has an average rate too. Is there a “natural” rate of interest as well? Marx says no." },
        { caption: "The most interest could ever be is the whole profit. Then Moneybags would be left with nothing for running the mill." },
        { caption: "The least it could be? Marx says there is no fixed bottom at all. It could fall almost to nothing." },
        {
          caption: "So the split is settled by tug-of-war: how many lenders and borrowers there are, plus custom and habit. Marx compares it to a market price, not to a value.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const i = SLICES[s];
        const iw = (i / 20) * BW;
        return (
          <>
            <text x={BX} y="36" fontSize="10" fontWeight="600">
              the profit on 100 coins: 20
            </text>
            <rect x={BX} y="46" width={BW} height="34" fill={MB} stroke="#000" />
            <rect x={BX} y="46" width={iw} height="34" fill={BEA} stroke="#000" style={{ transition: "width 700ms" }} />
            <text x={BX + iw / 2} y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700" style={{ transition: "x 700ms" }}>
              {i >= 2 ? `Bea ${i}` : ""}
            </text>
            {i < 20 && (
              <text x={BX + iw + (BW - iw) / 2} y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700" style={{ transition: "x 700ms" }}>
                Moneybags {20 - i}
              </text>
            )}
            <text x={BX + BW} y="96" textAnchor="end" fontSize="8" fillOpacity=".55">
              slice sizes made up
            </text>

            <Figure who="bea" x={70} y={205} scale={0.85} mood={s === 3 ? "sad" : "happy"} />
            <Figure who="moneybags" x={290} y={205} scale={0.85} mood={s === 2 ? "sad" : "happy"} />

            <Fade show={s === 1}>
              <text x="180" y="130" textAnchor="middle" fontSize="11" fontWeight="600">
                a natural rate of interest?
              </text>
              <text x="180" y="150" textAnchor="middle" fontSize="20" fontWeight="700" fill={RED}>
                no such thing
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="180" y="140" textAnchor="middle" fontSize="11" fontWeight="600">
                top limit: the whole profit
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="140" textAnchor="middle" fontSize="11" fontWeight="600">
                bottom limit: none fixed
              </text>
            </Fade>
            <Fade show={s === 4}>
              <line x1="96" y1="150" x2="264" y2="150" stroke="#8a5a2b" strokeWidth="4" />
              <rect x="174" y="144" width="12" height="12" fill={RED} />
              <text x="180" y="132" textAnchor="middle" fontSize="10" fontWeight="600">
                supply, demand and custom
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 22.2 · Interest through boom and crash
 * Marx's figures (via Gilbart): 4½% in spring 1842, 2% in spring and summer
 * 1843, 1½% in September 1843, then 8% and higher in the crisis of 1847.
 * ───────────────────────────────────────────────────────────── */
const POINTS = [
  { label: "spring 1842", r: 4.5 },
  { label: "summer 1843", r: 2 },
  { label: "Sept 1843", r: 1.5 },
  { label: "crisis 1847", r: 8 },
];
const GX = (i: number) => 60 + i * 84;
const GY = (r: number) => 180 - r * 17;

export function InterestThroughBoomAndCrash() {
  return (
    <Player
      id="anim-v3-22-2"
      title="22.2 · Interest through boom and crash"
      steps={[
        { caption: "Marx follows England's interest rate over a few real years. In spring 1842 it stood at 4½%." },
        { caption: "Then came good times. In 1843 business boomed and interest fell to 2%." },
        { caption: "By September 1843 it was down to 1½%. Plenty of money to lend, and lenders competing to lend it." },
        { caption: "Then the crisis of 1847. Firms had bills to pay and no cash. They borrowed at any price, and interest shot up to 8% and higher." },
        {
          caption: "Marx's pattern: low interest in prosperous times, and the highest interest in a crisis, “when money is borrowed at any cost to meet payments”.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const shown = Math.min(s, 3);
        const path = POINTS.slice(0, shown + 1)
          .map((p, i) => `${i ? "L" : "M"}${GX(i)},${GY(p.r)}`)
          .join(" ");
        return (
          <>
            <line x1="40" y1="180" x2="330" y2="180" stroke="#000" />
            {[2, 4, 6, 8].map((r) => (
              <g key={r}>
                <line x1="40" y1={GY(r)} x2="330" y2={GY(r)} stroke="#000" strokeOpacity=".08" />
                <text x="34" y={GY(r) + 3} textAnchor="end" fontSize="8" fillOpacity=".6">
                  {r}%
                </text>
              </g>
            ))}
            <path d={path} fill="none" stroke={BEA} strokeWidth="3" />
            {POINTS.map((p, i) => (
              <g key={p.label} style={{ opacity: i <= shown ? 1 : 0, transition: "opacity 400ms" }}>
                <circle cx={GX(i)} cy={GY(p.r)} r="5" fill={i === 3 ? RED : BEA} />
                <text x={i === 3 ? GX(i) - 10 : GX(i)} y={i === 2 ? GY(p.r) + 18 : GY(p.r) - 10} textAnchor={i === 3 ? "end" : "middle"} fontSize="11" fontWeight="700">
                  {p.r === 4.5 ? "4½" : p.r === 1.5 ? "1½" : p.r}%{i === 3 ? "+" : ""}
                </text>
                <text x={GX(i)} y="196" textAnchor="middle" fontSize="8.5">
                  {p.label}
                </text>
              </g>
            ))}
            <Fade show={s >= 1 && s <= 2}>
              <text x="160" y="40" textAnchor="middle" fontSize="10" fontWeight="600" fill="#2a9d5b">
                boom: lots of money to lend
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="200" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fill={RED}>
                crisis: borrowing at any cost
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
