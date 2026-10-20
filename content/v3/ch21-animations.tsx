"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Chest, Coat, Coins, Fade, Place, Tick } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const GOLD = "#e6b800";
const BEA = CAST.bea.color;
const MB = "#3a3a3a";

/** A coin pile drawn as a stack with its number on it. */
export function Stack({ n, color = GOLD, w = 46 }: { n: number; color?: string; w?: number }) {
  return (
    <g>
      <rect x={-w / 2} y="-14" width={w} height="28" rx="4" fill={color} stroke="#000" strokeWidth="1" />
      <text y="5" textAnchor="middle" fontSize="13" fontWeight="700" fill={color === GOLD ? "#000" : "#fff"}>
        {n}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.1 · Money for hire
 * Marx's numbers: average rate of profit 20%, so £100 used as capital makes
 * £20 a year; the borrower pays £5 of it as interest. Pounds shown as coins.
 * ───────────────────────────────────────────────────────────── */
export function MoneyForHire() {
  return (
    <Player
      id="anim-v3-21-1"
      title="21.1 · Money for hire"
      steps={[
        { caption: "Bea the banker has 100 coins in her vault. Sitting there, they make nothing at all." },
        { caption: "In Mr. Moneybags' hands, 100 coins used as capital would make a profit. Marx's example: if the average rate of profit is 20%, 100 coins make 20 a year." },
        { caption: "So Bea lends him the 100 coins for a year. She doesn't sell them and she doesn't spend them. She hands over their power to make profit." },
        { caption: "Moneybags buys cotton and hires Sam. A year later the 100 has become 120." },
        {
          caption: "He pays Bea back her 100, plus 5 as interest, and keeps 15. Marx's point: interest is simply a part of the profit, handed to the owner of the money.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const atBea = s <= 1 || s === 4;
        return (
          <>
            <Figure who="bea" x={50} y={205} mood="happy" />
            <g transform="translate(50 120)">
              <Chest open={s !== 2 && s !== 3} />
            </g>
            <Figure who="moneybags" x={310} y={205} />
            <Figure who="sam" x={250} y={205} scale={0.8} style={{ opacity: s === 3 ? 1 : 0, transition: "opacity 500ms" }} />

            {/* the 100 coins travel */}
            <Place x={atBea ? 50 : 300} y={s === 4 ? 70 : 90} show={s !== 3}>
              <Stack n={100} />
            </Place>

            {/* the potential: 20 a year */}
            <Fade show={s === 1}>
              <g transform="translate(240 80)">
                <rect x="-74" y="-28" width="148" height="52" fill="#fff" stroke="#000" strokeDasharray="4 3" />
                <text y="-10" textAnchor="middle" fontSize="9">
                  in a workshop, a year later:
                </text>
                <text y="12" textAnchor="middle" fontSize="16" fontWeight="700">
                  100 &rarr; 120
                </text>
              </g>
              <text x="240" y="122" textAnchor="middle" fontSize="9">
                average profit 20% (Marx&apos;s example)
              </text>
            </Fade>

            {/* the loan */}
            <Fade show={s === 2}>
              <path d="M80,74 C150,30 220,30 290,74" fill="none" stroke={BEA} strokeWidth="2" strokeDasharray="5 4" />
              <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600" fill={BEA}>
                lent for a year, not sold
              </text>
            </Fade>

            {/* the year's work */}
            <Fade show={s === 3}>
              <g transform="translate(180 150)">
                <Yarn />
              </g>
              <Place x={300} y={90}>
                <Stack n={120} />
              </Place>
              <text x="300" y="66" textAnchor="middle" fontSize="9">
                a year later
              </text>
            </Fade>

            {/* the split */}
            <Fade show={s === 4}>
              <g transform="translate(110 70)">
                <Stack n={5} color={BEA} w={30} />
                <text y="30" textAnchor="middle" fontSize="9" fill={BEA}>
                  interest
                </text>
              </g>
              <g transform="translate(300 70)">
                <Stack n={15} color={MB} w={36} />
                <text y="30" textAnchor="middle" fontSize="9">
                  kept by Moneybags
                </text>
              </g>
              <text x="200" y="22" textAnchor="middle" fontSize="11" fontWeight="600">
                profit 20 = interest 5 + 15
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.2 · The longest circle: M – M – C – M′ – M′
 * ───────────────────────────────────────────────────────────── */
const STOPS = [
  { x: 36, label: "Bea", sym: "M", sub: "100" },
  { x: 106, label: "Moneybags", sym: "M", sub: "100" },
  { x: 180, label: "cotton, Sam", sym: "C", sub: "" },
  { x: 254, label: "yarn sold", sym: "M′", sub: "120" },
  { x: 324, label: "Bea", sym: "M′", sub: "105" },
];

export function TheLongestCircle() {
  return (
    <Player
      id="anim-v3-21-2"
      title="21.2 · The longest circle"
      steps={[
        { caption: "In Volume I, capital went round M–C–M′: money buys things, things make more money. Lending adds a step at each end." },
        { caption: "First, Bea's money moves to Mr. Moneybags. No buying or selling happens here. It is a loan: M–M." },
        { caption: "Then the usual circle: Moneybags buys cotton and Sam's labour-power, and sells the yarn for 120. M–C–M′." },
        { caption: "Last, part of the money flows back to Bea: her 100 plus 5 interest. M′–M′." },
        {
          caption: "So the whole path is M–M–C–M′–M′. Marx notes the money changes hands twice at each end, but those steps are lending and paying back, not buying and selling.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const lit = (i: number) => (s === 0 ? i >= 1 && i <= 3 : s === 1 ? i <= 1 : s === 2 ? i >= 1 && i <= 3 : s === 3 ? i >= 3 : true);
        return (
          <>
            {STOPS.slice(0, -1).map((st, i) => {
              const nx = STOPS[i + 1].x;
              const on = lit(i) && lit(i + 1);
              return (
                <line
                  key={i}
                  x1={st.x + 24}
                  y1="100"
                  x2={nx - 24}
                  y2="100"
                  stroke={i === 0 || i === 3 ? BEA : "#000"}
                  strokeWidth={on ? 3 : 1}
                  strokeOpacity={on ? 1 : 0.2}
                  strokeDasharray={i === 0 || i === 3 ? "5 3" : undefined}
                  style={{ transition: "all 400ms" }}
                />
              );
            })}
            {STOPS.map((st, i) => (
              <g key={i} style={{ opacity: lit(i) ? 1 : 0.25, transition: "opacity 400ms" }}>
                <circle cx={st.x} cy="100" r="22" fill="#fff" stroke={i === 0 || i === 4 ? BEA : "#000"} strokeWidth="2" />
                <text x={st.x} y="106" textAnchor="middle" fontSize="15" fontWeight="700">
                  {st.sym}
                </text>
                <text x={st.x} y="140" textAnchor="middle" fontSize="8.5">
                  {st.label}
                </text>
                {st.sub && (
                  <text x={st.x} y="154" textAnchor="middle" fontSize="10" fontWeight="600" fill="#8a6d00">
                    {st.sub}
                  </text>
                )}
              </g>
            ))}
            <Fade show={s === 1}>
              <text x="71" y="70" textAnchor="middle" fontSize="10" fontWeight="600" fill={BEA}>
                a loan
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="180" y="62" textAnchor="middle" fontSize="10" fontWeight="600">
                the workshop circle
              </text>
              <g transform="translate(180 186)">
                <Yarn />
              </g>
            </Fade>
            <Fade show={s === 3}>
              <text x="289" y="70" textAnchor="middle" fontSize="10" fontWeight="600" fill={BEA}>
                paid back
              </text>
              <text x="289" y="186" textAnchor="middle" fontSize="9">
                Moneybags keeps 15
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="40" y="186" width="280" height="26" fill="#000" />
              <text x="180" y="203" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="600">
                M &ndash; M &ndash; C &ndash; M&prime; &ndash; M&prime;
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.3 · A strange thing to sell
 * ───────────────────────────────────────────────────────────── */
export function AStrangeThingToSell() {
  return (
    <Player
      id="anim-v3-21-3"
      title="21.3 · A strange thing to sell"
      steps={[
        { caption: "An ordinary sale: Ava sells a coat for 5 coins. The coat is gone for good, and she has its full value back straight away, in coins." },
        { caption: "A loan is different. Bea hands over 100 coins and gets nothing back at first. A year later she gets the very same 100 back, plus 5." },
        { caption: "So what did Bea really sell? Not the coins: she got them back. Marx says she sold their use as capital, their power to make profit." },
        { caption: "This turns money into a commodity of a very odd kind. Its “price” is the interest. Marx calls it an irrational price, because it isn't the value of anything." },
        {
          caption: "An economist called Gilbart said it was simple “natural justice” that the borrower shares his profit. Marx calls that nonsense: it is just how lending works once capital exists.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="180" y1="24" x2="180" y2="214" stroke="#000" strokeOpacity=".15" />
          <text x="90" y="20" textAnchor="middle" fontSize="10" fontWeight="600">
            an ordinary sale
          </text>
          <text x="270" y="20" textAnchor="middle" fontSize="10" fontWeight="600">
            a loan
          </text>

          {/* the sale */}
          <Figure who="ava" x={40} y={205} scale={0.8} />
          <Figure name="buyer" x={140} y={205} scale={0.8} />
          <Place x={140} y={90} scale={0.8}>
            <Coat />
          </Place>
          <Place x={40} y={90}>
            <Coins n={5} />
          </Place>
          <g>
            <text x="90" y="128" textAnchor="middle" fontSize="8.5">
              coat gone for good
            </text>
            <text x="90" y="140" textAnchor="middle" fontSize="8.5">
              its value back at once
            </text>
            <g transform="translate(90 160)">
              <Tick />
            </g>
          </g>

          {/* the loan */}
          <Figure who="bea" x={220} y={205} scale={0.8} />
          <Figure who="moneybags" x={320} y={205} scale={0.8} />
          <Place x={s === 1 ? 320 : 220} y={90}>
            <Stack n={s >= 2 ? 105 : 100} />
          </Place>
          <Fade show={s === 1}>
            <text x="270" y="128" textAnchor="middle" fontSize="8.5">
              nothing back at first
            </text>
            <text x="270" y="140" textAnchor="middle" fontSize="8.5">
              a year later: 100 + 5
            </text>
          </Fade>
          <Fade show={s === 2}>
            <rect x="196" y="120" width="148" height="34" fill="#fff" stroke="#000" />
            <text x="270" y="134" textAnchor="middle" fontSize="8.5">
              sold: the money&apos;s power
            </text>
            <text x="270" y="146" textAnchor="middle" fontSize="8.5">
              to make profit
            </text>
          </Fade>
          <Fade show={s === 3}>
            <text x="270" y="134" textAnchor="middle" fontSize="10" fontWeight="600">
              &ldquo;price&rdquo; = interest
            </text>
            <text x="270" y="148" textAnchor="middle" fontSize="9" fill="#d6452f">
              an irrational price
            </text>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(196 122)">
              <rect width="148" height="30" fill="#fff" stroke="#000" />
              <text x="74" y="13" textAnchor="middle" fontSize="8.5">
                Gilbart: &ldquo;natural justice&rdquo;
              </text>
              <text x="74" y="25" textAnchor="middle" fontSize="8.5" fontWeight="700">
                Marx: nonsense
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
