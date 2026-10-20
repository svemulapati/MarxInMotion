"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade, Tag } from "@/components/anim/Things";
import { Bar, TONE, Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";
import { Banner, Say, Thinker } from "./ch16-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 19.1 · Malthus's price tag: profit as an extra on top
 * Workshop numbers: cost 27 coins, sold for 30. Malthus reads the 3 as
 * a surcharge added to the cost; Marx reads it as unpaid labour.
 * ───────────────────────────────────────────────────────────── */
export function MalthusPriceTag() {
  return (
    <Player
      id="anim-v4-19-1"
      title="19.1 · Malthus's price tag"
      steps={[
        { caption: "Thomas Robert Malthus visits from the shelf. He was a clergyman and economist, and Ricardo's friend and great rival." },
        { caption: "He looks at Mr. Moneybags' yarn. It costs 27 coins to make: cotton, wear and Sam's wage. It sells for 30." },
        { caption: "Malthus says the 3 coins of profit are an extra added on top of the cost, like a price tag stuck on. Marx calls this a “nominal surcharge”." },
        { caption: "But wait, says Marx. If every boss adds an extra when he sells, every boss also pays extras when he buys. Their gains and losses cancel out." },
        {
          caption: "Marx's answer is the one from Volume I: the 3 coins are not stuck on at the till. They were made inside the workshop, in the hours Sam worked unpaid.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <Thinker name="Malthus" x={34} y={202} />
          <Thinker name="Marx" x={330} y={202} scale={0.7} show={s >= 3} />

          <g transform="translate(95 60)">
            <g transform="scale(1.4)">
              <Yarn />
            </g>
          </g>
          <Fade show={s >= 1}>
            <text x="130" y="40" fontSize="8.5">
              the yarn
            </text>
            <Bar
              x={130}
              y={48}
              unit={6.2}
              segs={[
                { n: 24, color: TONE.cotton, label: "cotton, wear 24" },
                { n: 3, color: TONE.wage, label: "3" },
                { n: 3, color: TONE.surplus, label: "3", show: s >= 1 },
              ]}
            />
            <text x="130" y="80" fontSize="8">
              green: Sam&apos;s wage 3 · gold: the extra 3 · sells for 30
            </text>
          </Fade>

          {/* Malthus: the 3 is a price tag stuck on */}
          <g style={{ opacity: s === 2 || s === 3 ? 1 : 0, transition: "opacity 500ms" }}>
            <g transform="translate(305 92)">
              <Tag text="+3" />
            </g>
            <text x="300" y="116" textAnchor="middle" fontSize="8">
              added at the till?
            </text>
          </g>

          {/* every boss adds, every boss pays */}
          <Fade show={s === 3}>
            {[
              { x: 140, label: "Moneybags +3" },
              { x: 230, label: "the Forge +3" },
            ].map((b, i) => (
              <g key={b.label}>
                <Figure who={i === 0 ? "moneybags" : undefined} name={i === 0 ? undefined : "Ironmaster"} x={b.x} y={176} scale={0.55} label={false} />
                <text x={b.x} y="190" textAnchor="middle" fontSize="8">
                  {b.label}
                </text>
              </g>
            ))}
            <path d="M152,134 C175,120 200,120 218,134" fill="none" stroke="#000" markerEnd="url(#v4c19a)" />
            <path d="M218,142 C200,156 175,156 152,142" fill="none" stroke="#000" markerEnd="url(#v4c19a)" />
            <text x="185" y="112" textAnchor="middle" fontSize="8" fill="#d6452f">
              gains and losses cancel
            </text>
          </Fade>
          <defs>
            <marker id="v4c19a" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" />
            </marker>
          </defs>

          {/* Marx: made in the unpaid hours */}
          <Fade show={s === 4}>
            <Figure who="sam" x={150} y={170} scale={0.6} />
            <text x="190" y="100" fontSize="8.5">
              Sam&apos;s 12-hour day
            </text>
            <Bar
              x={190}
              y={106}
              unit={11}
              segs={[
                { n: 6, color: TONE.wage, label: "paid" },
                { n: 6, color: TONE.surplus, label: "unpaid: the 3" },
              ]}
            />
          </Fade>
          <Banner show={s === 4} y={204} text="made in the workshop, not stuck on at the till" />
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 19.2 · Buyers who never sell (Malthus's "unproductive consumers")
 * ───────────────────────────────────────────────────────────── */
const CONSUMERS = ["Landlord", "Parson", "Pensioner", "Courtier"];

export function BuyersWhoNeverSell() {
  return (
    <Player
      id="anim-v4-19-2"
      title="19.2 · Buyers who never sell"
      steps={[
        { caption: "Malthus worries: if workers can only buy back part of what they make, and bosses save instead of spending, who buys all the extra yarn?" },
        {
          caption: "His answer: a class of people who buy but never sell. Marx lists them: “landlords, pensioners, sinecurists, priests”, and their servants. Malthus called them unproductive consumers.",
          ms: 5000,
        },
        { caption: "They spend freely on fine things, so the warehouses empty and the bosses can sell at a profit. Without them, Malthus feared, there would be gluts." },
        { caption: "Marx asks: where does their money come from? From rents and taxes, taken first out of the bosses' and workers' pockets. So they only hand back what they took." },
        {
          caption: "Marx is harsh on Malthus and accuses him of defending the landlords. But Malthus had seen a real problem, demand that may fall short, which Ricardo denied. Keynes later praised him for it.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <Thinker name="Malthus" x={34} y={202} />

          {/* the warehouse */}
          <rect x="70" y="22" width="110" height="70" fill="#fff" stroke="#000" />
          <text x="125" y="34" textAnchor="middle" fontSize="8.5">
            unsold yarn
          </text>
          {Array.from({ length: 8 }, (_, i) => {
            const left = s >= 2 ? 2 : 8;
            return (
              <g key={i} style={{ opacity: i < left ? 1 : 0, transition: `opacity 400ms ${i * 80}ms` }}>
                <g transform={`translate(${88 + (i % 4) * 24} ${54 + Math.floor(i / 4) * 22}) scale(.6)`}>
                  <Yarn />
                </g>
              </g>
            );
          })}
          <Fade show={s === 0}>
            <text x="230" y="56" fontSize="20" fontWeight="300">
              ?
            </text>
          </Fade>

          {/* the buyers who never sell */}
          {CONSUMERS.map((name, i) => (
            <g key={name} style={{ opacity: s >= 1 ? 1 : 0, transition: `opacity 500ms ${i * 150}ms` }}>
              <Figure name={name} x={210 + i * 38} y={150} scale={0.5} />
              <g style={{ opacity: s === 2 ? 1 : 0, transition: `opacity 400ms ${i * 150}ms` }}>
                <g transform={`translate(${210 + i * 38} 100)`}>
                  <Coin r={6} />
                </g>
              </g>
            </g>
          ))}
          <Fade show={s >= 1}>
            <text x="267" y="170" textAnchor="middle" fontSize="8.5">
              buy, but never sell
            </text>
          </Fade>
          <Fade show={s === 2}>
            <path d="M200,100 C190,80 185,70 182,62" fill="none" stroke="#000" strokeDasharray="3 3" />
            <text x="267" y="88" textAnchor="middle" fontSize="8.5">
              coins flow to the warehouse
            </text>
          </Fade>

          {/* where their coins come from */}
          <Fade show={s === 3}>
            <Figure who="moneybags" x={110} y={170} scale={0.55} label={false} />
            <Figure who="sam" x={140} y={170} scale={0.55} label={false} />
            <path d="M150,124 C180,108 200,104 205,104" fill="none" stroke={CAST.moneybags.color} strokeWidth="1.5" markerEnd="url(#v4c19b)" />
            <text x="125" y="190" textAnchor="middle" fontSize="8" fill="#d6452f">
              rents and taxes first
            </text>
          </Fade>
          <defs>
            <marker id="v4c19b" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill={CAST.moneybags.color} />
            </marker>
          </defs>

          <g style={{ opacity: s === 4 ? 1 : 0, transition: `opacity ${T}` }}>
            <Say x={268} y={60} w={176} text="a real worry: demand may fall short" />
          </g>
          <Banner show={s === 4} y={204} text="Malthus: wrong cure, Marx says, but a real problem" />
        </>
      )}
    </Player>
  );
}
