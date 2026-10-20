"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Tag } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";

const GOLD = "#e6b800";
const TOM = "#c2407f";
const RED = "#d6452f";

/* ─────────────────────────────────────────────────────────────
 * 18.1 · Five trips, the same yearly profit
 * Marx's numbers: average annual rate 15%, merchant's capital £100.
 * Once a year: buy at 100, sell at 115. Five times a year: sell what
 * cost 100 at 103, five times, so 500 sells for 515. Profit 15 either way.
 * ───────────────────────────────────────────────────────────── */
export function FiveTripsSameProfit() {
  return (
    <Player
      id="anim-v3-18-1"
      title="18.1 · Five trips, the same yearly profit"
      steps={[
        { caption: "Marx's numbers. The average rate of profit is 15% a year. Tom has 100 coins of capital." },
        { caption: "If Tom buys 100 coins of yarn and it takes him a whole year to sell it, he sells it for 115. Profit for the year: 15." },
        { caption: "Now suppose Tom sells out five times a year. Each time he buys for 100 and sells for just 103." },
        { caption: "Five trips: 500 coins of yarn sold for 515. His profit for the year is still 15 on his 100." },
        {
          caption: "So the faster a merchant turns his money over, the smaller the bit he adds to each price. Marx: “small profits and quick returns”. Otherwise quick merchants would beat the average rate, and competition would not allow that.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const five = s >= 2;
        const trips = five ? 5 : 1;
        return (
          <>
            <Figure who="tom" x={36} y={110} scale={0.75} />
            <text x="36" y="132" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              capital: 100
            </text>

            {/* the year */}
            <text x="80" y="24" fontSize="9" fillOpacity=".6">
              one year
            </text>
            <line x1="80" y1="34" x2="340" y2="34" stroke="#000" strokeOpacity=".3" />
            {Array.from({ length: 5 }, (_, i) => {
              const w = 260 / trips;
              const on = i < trips;
              return (
                <g key={i} style={{ opacity: on && s >= 1 ? 1 : 0, transition: `opacity 400ms ${i * 150}ms` }}>
                  <rect x={80 + i * w + 3} y={44} width={w - 6} height={46} fill="#fff" stroke={TOM} strokeWidth="1.5" />
                  <g transform={`translate(${80 + i * w + w / 2} 62) scale(.45)`}>
                    <Yarn />
                  </g>
                  <text x={80 + i * w + w / 2} y={84} textAnchor="middle" fontSize="8.5" fontWeight="600">
                    {five ? "100 → 103" : "100 → 115"}
                  </text>
                </g>
              );
            })}

            <Fade show={s >= 1}>
              <text x="80" y="122" fontSize="9" fillOpacity=".6">
                added to each price
              </text>
              <g transform="translate(228 118)">
                <Tag text={five ? "+3" : "+15"} />
              </g>
            </Fade>
            <Fade show={s >= 3 || s === 1}>
              <text x="80" y="150" fontSize="9" fillOpacity=".6">
                Tom&apos;s profit for the year
              </text>
              <text x="236" y="156" fontSize="20" fontWeight="600" fill="#8a6d00">
                15
              </text>
              <text x="262" y="156" fontSize="9" fillOpacity=".6">
                {five ? "(5 × 3)" : "(1 × 15)"}
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="80" y="178" fontSize="9">
                500 coins of yarn sold for 515
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <rect x="40" y="180" width="280" height="24" fill="#000" />
              <text x="180" y="196" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
                small profits, <tspan fill={GOLD}>quick returns</tspan>
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 18.2 · The pile-up nobody sees
 * Merchant's capital can run ahead of real demand; goods lie unsold "at
 * some particular imperceptible point"; crises break out first in
 * wholesale trade and banking, not retail.
 * ───────────────────────────────────────────────────────────── */
const CHAIN = [
  { label: "the mill", x: 40 },
  { label: "the exporter", x: 130 },
  { label: "the wholesaler", x: 220 },
  { label: "Tom's shop", x: 310 },
];

export function ThePileUpNobodySees() {
  return (
    <Player
      id="anim-v3-18-2"
      title="18.2 · The pile-up nobody sees"
      steps={[
        { caption: "Yarn travels along a chain: from the mill, to an exporter, to a wholesaler, to Tom's shop, and finally to the people who use it." },
        { caption: "In good times every link buys eagerly, often on credit. Each one sells to the next, so the mill sees roaring sales." },
        { caption: "But those are sales between merchants, not to the people who will actually use the yarn. Marx says merchants can create a fictitious demand." },
        { caption: "Somewhere along the chain, “at some particular imperceptible point”, the yarn stops moving. Stock piles up at the wholesaler." },
        {
          caption: "Then the crash comes. Marx notes it breaks out first not in the little shops, but in wholesale trade and in the banks that lent to it. Tom's customers were still buying when it began.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const pile = s >= 3 ? 8 : s >= 1 ? 3 : 1;
        return (
          <>
            {CHAIN.map((c, i) => (
              <g key={c.label}>
                <rect x={c.x - 38} y={70} width="76" height="40" fill={s === 4 && i === 2 ? RED : "#fff"} fillOpacity={s === 4 && i === 2 ? 0.2 : 1} stroke="#000" strokeWidth="1" />
                <text x={c.x} y="125" textAnchor="middle" fontSize="8.5">
                  {c.label}
                </text>
                {i < CHAIN.length - 1 && <path d={`M${c.x + 40},90 L${CHAIN[i + 1].x - 42},90`} stroke="#000" strokeWidth="1" markerEnd="url(#v3c18arr)" />}
              </g>
            ))}
            <defs>
              <marker id="v3c18arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>

            {/* yarn at the wholesaler */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i} style={{ opacity: i < pile ? 1 : 0, transition: `opacity 300ms ${i * 60}ms` }} transform={`translate(${200 + (i % 4) * 13} ${80 + Math.floor(i / 4) * 16}) scale(.4)`}>
                <Yarn />
              </g>
            ))}

            {/* the mill's happy sales */}
            <Fade show={s >= 1 && s <= 2}>
              <text x="40" y="58" textAnchor="middle" fontSize="8.5" fill="#2a9d5b" fontWeight="600">
                sales roaring!
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="175" y="58" textAnchor="middle" fontSize="8.5" fillOpacity=".7">
                merchants selling to merchants
              </text>
            </Fade>

            {/* the final users */}
            <Figure who="sam" x={300} y={196} scale={0.55} label={false} />
            <Figure name="" x={326} y={196} scale={0.55} label={false} />
            <text x="313" y="212" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              the people who use it
            </text>
            <Fade show={s === 4} delay={300}>
              <text x="220" y="150" textAnchor="middle" fontSize="11" fontWeight="700" fill={RED}>
                crash starts here
              </text>
              <text x="80" y="180" textAnchor="middle" fontSize="8.5">
                and in the banks
              </text>
              <text x="80" y="192" textAnchor="middle" fontSize="8.5">
                that lent to it
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
