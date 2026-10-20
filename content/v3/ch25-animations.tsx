"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Coins, Cross, Fade, Place, Tick } from "@/components/anim/Things";
import { Cotton, Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const GOLD = "#e6b800";
const BEA = CAST.bea.color;
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * Drawings shared by the credit chapters (Vol III, Ch 25-30).
 * ───────────────────────────────────────────────────────────── */

/** Bea's bank: a little building with columns, centred on its doorstep. */
export function Bank({ label = "Bea's bank", w = 92 }: { label?: string; w?: number }) {
  const h = 54;
  return (
    <g>
      <polygon points={`${-w / 2 - 6},${-h} 0,${-h - 22} ${w / 2 + 6},${-h}`} fill="#fff" stroke="#000" strokeWidth="1.2" />
      <rect x={-w / 2} y={-h} width={w} height={h} fill="#fff" stroke="#000" strokeWidth="1.2" />
      {[-0.32, -0.11, 0.11, 0.32].map((f) => (
        <rect key={f} x={w * f - 4} y={-h + 8} width="8" height={h - 16} fill={BEA} opacity=".25" />
      ))}
      <text y={-h - 6} textAnchor="middle" fontSize="7.5" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

/** A bill of exchange: a written promise to pay, with room for signatures on the back. */
export function Bill({ amount = "30", due = "in 3 months", signs = 0, faded = false }: { amount?: string; due?: string; signs?: number; faded?: boolean }) {
  return (
    <g opacity={faded ? 0.35 : 1}>
      <rect x="-30" y="-17" width="60" height="34" fill="#fffbe6" stroke="#000" strokeWidth="1" />
      <text y="-6" textAnchor="middle" fontSize="7" fontWeight="700">
        I will pay {amount}
      </text>
      <text y="3" textAnchor="middle" fontSize="6.5">
        {due}
      </text>
      {Array.from({ length: 3 }, (_, i) => (
        <path
          key={i}
          d={`M${-24 + i * 18},12 q3,-4 6,0 t6,0`}
          fill="none"
          stroke={BEA}
          strokeWidth="1.1"
          style={{ opacity: i < signs ? 1 : 0, transition: "opacity 400ms" }}
        />
      ))}
    </g>
  );
}

/** A share certificate. */
export function Share({ label = "1 share" }: { label?: string }) {
  return (
    <g>
      <rect x="-22" y="-14" width="44" height="28" fill="#eef4ff" stroke="#000" strokeWidth="1" />
      <rect x="-18" y="-10" width="36" height="20" fill="none" stroke="#5b8fd9" strokeWidth=".8" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 25.1 · One promise, three payments
 * A bill passes from hand to hand by endorsement. Bosanquet (1842): bills
 * "transfer property from hand to hand by endorsement".
 * ───────────────────────────────────────────────────────────── */
const SPOT = { tom: 40, moneybags: 130, dealer: 220, iron: 310 };

export function OnePromiseThreePayments() {
  return (
    <Player
      id="anim-v3-25-1"
      title="25.1 · One promise, three payments"
      steps={[
        { caption: "Tom wants Mr. Moneybags' yarn for his shop, but he has no coins until he sells it. So he writes a promise instead: I will pay 30 coins in three months." },
        { caption: "Mr. Moneybags needs cotton. He doesn't wait three months. He signs the back of Tom's paper and hands it to the cotton dealer as payment." },
        { caption: "The cotton dealer owes the Ironmaster for a new machine part. He signs it too and passes it on. One piece of paper has paid three debts." },
        { caption: "Three months later the paper comes back to Tom. Now he has sold the yarn, so he pays 30 real coins, just once, to whoever holds it." },
        {
          caption: "Marx calls these papers bills of exchange, and says they are the real money of trade. A Yorkshire banker counted over 528 million pounds of them in England in 1839.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const holder = [SPOT.moneybags, SPOT.dealer, SPOT.iron, SPOT.tom, SPOT.tom][s];
        return (
          <>
            <Figure who="tom" x={SPOT.tom} y={208} scale={0.8} />
            <Figure who="moneybags" x={SPOT.moneybags} y={208} scale={0.8} />
            <Figure name="cotton dealer" x={SPOT.dealer} y={208} scale={0.8} />
            <Figure name="Ironmaster" x={SPOT.iron} y={208} scale={0.8} />

            {/* goods move the other way */}
            <Place x={s >= 0 ? SPOT.tom + 24 : SPOT.moneybags} y={168} scale={0.8}>
              <Yarn />
            </Place>
            <Place x={s >= 1 ? SPOT.moneybags + 24 : SPOT.dealer + 24} y={168} scale={0.8} show={s >= 1}>
              <Cotton />
            </Place>
            <Fade show={s >= 2}>
              <g transform={`translate(${SPOT.dealer + 24} 168)`}>
                <circle r="8" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="3 2" />
                <circle r="2.5" fill="#000" />
              </g>
            </Fade>

            {/* the bill travels */}
            <g style={{ transform: `translate(${holder}px, 108px)`, transition: `transform ${T}` }}>
              <Bill signs={Math.min(s, 2)} />
            </g>

            {/* the one payment at the end */}
            <Fade show={s >= 3} delay={400}>
              <path d={`M${SPOT.tom + 20},132 C150,70 250,70 ${SPOT.iron},84`} fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="5 4" />
              <g transform={`translate(${SPOT.iron} 72)`}>
                <Coins n={3} label="30 coins, paid once" />
              </g>
            </Fade>

            <Fade show={s === 2}>
              <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
                1 paper, 3 debts paid
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <text x="180" y="36" textAnchor="middle" fontSize="11" fontWeight="600">
                bills of exchange: the money of trade
              </text>
              <text x="180" y="52" textAnchor="middle" fontSize="9" fillOpacity=".6">
                England, 1839: over £528 million of bills
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 25.2 · Paper for produce, or paper for wind
 * Banks gather idle money and lend it by discounting bills; "accommodation"
 * bills drawn only to pay other bills (Leatham). Witness 1848: a bill "drawn
 * for produce or for wind".
 * ───────────────────────────────────────────────────────────── */
export function PaperForWind() {
  return (
    <Player
      id="anim-v3-25-2"
      title="25.2 · Paper for produce, or paper for wind"
      steps={[
        { caption: "Mia's takings, Sam's little savings, the boss's spare coins: on their own each pile is too small to do anything. Bea gathers them all into her bank." },
        { caption: "Mr. Moneybags brings Bea Tom's bill. She pays him now, but a little less than 30 coins. The gap is her interest. This is called discounting a bill." },
        { caption: "Bea earns by borrowing cheaply from savers and lending more dearly to bosses. Marx says a bank gathers all the lenders on one side and all the borrowers on the other. (Our numbers are made up.)" },
        { caption: "Then trouble. Someone writes a new bill only to pay off an old one. No yarn, no cotton, nothing real behind it. Bankers called these accommodation bills." },
        {
          caption: "From outside, a good bill and an empty one look the same. A Liverpool banker told Parliament he could not tell whether a bill was “drawn for produce or for wind”. When trust breaks, the empty ones fall first.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(180 120)">
            <Bank />
          </g>
          <Figure who="bea" x={180} y={208} scale={0.8} />

          {/* savers pour coins in */}
          {[
            { who: "mia" as const, x: 40 },
            { who: "sam" as const, x: 90 },
          ].map((p, i) => (
            <g key={p.who}>
              <Figure who={p.who} x={p.x} y={208} scale={0.7} />
              <Fade show={s <= 2}>
                <g transform={`translate(${168 + i * 12} 100)`}>
                  <g className="v3c25-in" style={{ ["--dx" as string]: `${p.x - 168 - i * 12}px`, animationDelay: `${i * 350}ms` }}>
                    <Coin r={6} />
                  </g>
                </g>
              </Fade>
            </g>
          ))}
          <style>{`
            @keyframes v3c25-in { from { transform: translate(var(--dx), 60px); opacity: 0 } 30% { opacity: 1 } to { transform: none } }
            .v3c25-in { animation: v3c25-in 1.4s cubic-bezier(.2,.8,.2,1) both; }
          `}</style>

          {/* discounting */}
          <Figure who="moneybags" x={318} y={208} scale={0.8} style={{ opacity: s >= 1 ? 1 : 0.25, transition: "opacity 400ms" }} />
          <Place x={s >= 1 ? 232 : 318} y={150} scale={0.8} show={s >= 1 && s <= 2}>
            <Bill />
          </Place>
          <Fade show={s >= 1 && s <= 2} delay={400}>
            <g transform="translate(300 100)">
              <Coins n={3} label="29 coins now" />
            </g>
            <text x="300" y="78" textAnchor="middle" fontSize="8.5" fill={BEA}>
              1 coin kept: interest
            </text>
          </Fade>

          <Fade show={s === 2} delay={300}>
            <text x="60" y="56" textAnchor="middle" fontSize="9">
              borrow at 2%
            </text>
            <text x="300" y="56" textAnchor="middle" fontSize="9">
              lend at 4%
            </text>
          </Fade>

          {/* accommodation bills: a chain of paper with nothing behind */}
          <Fade show={s >= 3}>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${268 + i * 30} ${44 + i * 34})`}>
                <Bill amount="30" due={`pays bill ${i + 1}`} faded={s === 4 && i > 0} />
              </g>
            ))}
            <text x="300" y="148" textAnchor="middle" fontSize="8.5" fill="#d6452f">
              nothing real behind it
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <g transform="translate(70 92)">
              <Bill amount="30" due="for real yarn" />
              <g transform="translate(0 30) scale(.8)">
                <Yarn />
              </g>
            </g>
          </Fade>
          <Fade show={s === 4} delay={600}>
            <g transform="translate(70 58)">
              <Tick />
            </g>
            <g transform="translate(346 62)">
              <Cross />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
