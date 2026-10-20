"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, IOU, Linen, Place } from "@/components/anim/Things";
import { Bar, Cotton, Spindle, TONE, Yarn } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * 4.1 · One workshop, three places at once
 * Marx: every industrial capital is present simultaneously in all three
 * circuits; while this week's 10,000 lb of yarn is sold, the money from
 * last week's yarn is buying new cotton, and the spindles never stop.
 * ───────────────────────────────────────────────────────────── */
const ST = [
  { key: "M", x: 180, y: 48, name: "money (M)" },
  { key: "P", x: 72, y: 160, name: "workshop (P)" },
  { key: "C", x: 288, y: 160, name: "yarn at market (C′)" },
] as const;

/** For each step, the station (0 = M, 1 = P, 2 = C′) of each of three parcels; -1 = not in use. */
const PARCELS: number[][] = [
  [0, -1, -1],
  [1, -1, -1],
  [2, -1, -1],
  [0, 1, 2],
  [1, 2, 0],
];

function ParcelIcon({ at }: { at: number }) {
  if (at === 0) return <Coins n={3} />;
  if (at === 1) return <Cotton />;
  return <Yarn />;
}

export function ThreePlacesAtOnce() {
  return (
    <Player
      id="anim-v2-4-1"
      title="4.1 · One workshop, three places at once"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Mr. Moneybags starts with a pile of coins (M). He spends them all on cotton and on a week of Sam's work." },
        { caption: "Into the workshop (P). The spindles turn and yarn comes out." },
        {
          caption: "Now all his capital is yarn waiting at the market (C′). Until it sells, there is nothing left to buy cotton with, so the workshop stands still. Leo has the same problem whenever he walks to market with his cloth.",
          ms: 4800,
        },
        { caption: "So Mr. Moneybags splits his capital into three parts. One part is coins, one is in the workshop, one is yarn being sold." },
        {
          caption: "Every week each part moves on one place, and the workshop never stops. Marx says the same capital is in all three forms at once: money-capital, productive capital and commodity-capital.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const parcels = PARCELS[s];
        const busy = parcels.includes(1);
        return (
          <>
            {/* the circuit's arrows */}
            <defs>
              <marker id="v2c4arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" fillOpacity=".45" />
              </marker>
            </defs>
            <path d="M150,62 Q95,80 82,118" fill="none" stroke="#000" strokeOpacity=".35" strokeWidth="1.5" markerEnd="url(#v2c4arr)" />
            <path d="M112,178 Q180,200 246,178" fill="none" stroke="#000" strokeOpacity=".35" strokeWidth="1.5" markerEnd="url(#v2c4arr)" />
            <path d="M282,118 Q268,80 212,62" fill="none" stroke="#000" strokeOpacity=".35" strokeWidth="1.5" markerEnd="url(#v2c4arr)" />
            <text x="102" y="86" fontSize="8" fillOpacity=".5" textAnchor="end">
              buy
            </text>
            <text x="180" y="206" fontSize="8" fillOpacity=".5" textAnchor="middle">
              make
            </text>
            <text x="262" y="86" fontSize="8" fillOpacity=".5">
              sell
            </text>

            {/* the three places */}
            <g transform={`translate(${ST[1].x} ${ST[1].y})`}>
              <rect x="-40" y="-34" width="80" height="50" fill={s === 2 ? "#e4e4e4" : "#fff"} stroke="#000" strokeWidth="1.2" style={{ transition: "fill 400ms" }} />
              <g transform="translate(26 -14) scale(.7)">
                <Spindle />
              </g>
              <text y="30" textAnchor="middle" fontSize="9">
                {ST[1].name}
              </text>
              <Fade show={s === 2}>
                <text x="-12" y="-5" textAnchor="middle" fontSize="9" fontWeight="600" fill="#d6452f">
                  stopped
                </text>
              </Fade>
            </g>
            <g transform={`translate(${ST[2].x} ${ST[2].y})`}>
              <path d="M-40,-16 L-34,-34 L34,-34 L40,-16 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
              <rect x="-40" y="-16" width="80" height="32" fill="#fff" stroke="#000" strokeWidth="1.2" />
              <text y="30" textAnchor="middle" fontSize="9">
                {ST[2].name}
              </text>
            </g>
            <g transform={`translate(${ST[0].x} ${ST[0].y})`}>
              <circle r="24" fill="#fff" stroke="#000" strokeWidth="1.2" />
              <text y="-30" textAnchor="middle" fontSize="9">
                {ST[0].name}
              </text>
            </g>

            {/* the parcels of capital */}
            {parcels.map((at, i) => {
              const st = ST[Math.max(at, 0)];
              const dy = at === 0 ? 0 : -10;
              return (
                <Place key={i} x={st.x + (at === 1 ? -8 : 0)} y={st.y + dy} show={at >= 0} delay={i * 120}>
                  <ParcelIcon at={Math.max(at, 0)} />
                </Place>
              );
            })}

            <Fade show={s === 4} delay={500}>
              <text x="180" y="226" textAnchor="middle" fontSize="9.5" fontWeight="600">
                the spindles never stop
              </text>
            </Fade>
            <Fade show={busy && s < 3}>
              <text x="180" y="226" textAnchor="middle" fontSize="9.5" fillOpacity=".6">
                all the capital in one place
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.2 · Supply bigger than demand
 * Marx's numbers: commodity-capital 80c + 20v + 20s. The capitalist's
 * demand is 80c + 20v, one-fifth smaller than his supply.
 * ───────────────────────────────────────────────────────────── */
const U = 2.1;

export function SupplyBiggerThanDemand() {
  return (
    <Player
      id="anim-v2-4-2"
      title="4.2 · Supply bigger than demand"
      steps={[
        { caption: "These are Marx's own numbers. Mr. Moneybags buys 80 coins of cotton and machines, and pays 20 coins in wages. What he takes out of the market is 100." },
        { caption: "The workshop runs. Out comes yarn worth 120: the 80 passed on, the 20 for wages made back, and 20 more." },
        { caption: "He brings 120 to market and only ever bought 100. Marx says his supply is always bigger than his demand, here by one fifth." },
        {
          caption: "If the two were equal, the workshop would have made no surplus-value at all. So his aim is not to balance them, Marx says, but to make the gap as big as possible.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="moneybags" x={34} y={200} scale={0.75} />

          <text x="70" y="40" fontSize="10" fontWeight="600">
            what he buys (demand)
          </text>
          <Bar
            x={70}
            y={48}
            unit={U}
            segs={[
              { n: 80, color: TONE.cotton, label: "80 cotton, machines" },
              { n: 20, color: TONE.wage, label: "20" },
            ]}
          />
          <text x={70 + 100 * U + 6} y="61" fontSize="10" fontWeight="600">
            100
          </text>

          <Fade show={s >= 1}>
            <text x="70" y="104" fontSize="10" fontWeight="600">
              what he sells (supply)
            </text>
          </Fade>
          <Bar
            x={70}
            y={112}
            unit={U}
            segs={[
              { n: 80, color: TONE.cotton, label: "80 passed on", show: s >= 1 },
              { n: 20, color: TONE.wage, label: "20", show: s >= 1 },
              { n: 20, color: TONE.surplus, label: "+20", show: s >= 1 },
            ]}
          />
          <Fade show={s >= 1} delay={600}>
            <text x={70 + 120 * U + 6} y="125" fontSize="10" fontWeight="600">
              120
            </text>
          </Fade>

          {/* the gap */}
          <Fade show={s >= 2}>
            <line x1={70 + 100 * U} y1="72" x2={70 + 100 * U} y2="138" stroke="#000" strokeDasharray="3 3" />
            <line x1={70 + 120 * U} y1="138" x2={70 + 120 * U} y2="150" stroke="#000" />
            <path d={`M${70 + 100 * U},146 L${70 + 120 * U},146`} stroke="#b38f00" strokeWidth="2" />
            <text x={70 + 110 * U} y="162" textAnchor="middle" fontSize="9.5" fill="#b38f00" fontWeight="600">
              the gap: 20, one fifth
            </text>
          </Fade>
          <Fade show={s === 3}>
            <text x="200" y="196" textAnchor="middle" fontSize="10.5" fontWeight="600">
              his aim: make the gap as big as he can
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.3 · Three names for how people swap
 * Marx: "natural economy, money-economy and credit-economy" were set
 * against each other; he objects that credit-economy is only a form of
 * money-economy, and that the labels look at exchange, not production.
 * ───────────────────────────────────────────────────────────── */
const PANELS = [
  { x: 62, title: "natural economy", line: "makes most things himself" },
  { x: 180, title: "money economy", line: "sells all, buys even seed" },
  { x: 298, title: "credit economy", line: "buys now, pays later" },
];

export function ThreeNames() {
  return (
    <Player
      id="anim-v2-4-3"
      title="4.3 · Three names for how people swap"
      steps={[
        { caption: "Some economists sorted the world into three kinds of economy, depending on how people swap." },
        { caption: "A natural economy: Marx's old-fashioned small peasant makes his own tools and clothes, and buys and sells as little as he can." },
        { caption: "A money economy: a farmer in the Scottish lowlands sells his whole crop and must buy everything back, even his seed." },
        { caption: "A credit economy: people buy now and pay later, on promises." },
        {
          caption: "Marx objects. Credit is only a later form of money economy, and all three names look only at how people swap. He asks a different question: how is the work organised, and who works for whom?",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {PANELS.map((p, i) => (
            <g key={p.title}>
              <rect x={p.x - 54} y="22" width="108" height="150" fill="#fff" stroke="#000" strokeOpacity=".25" />
              <text x={p.x} y="40" textAnchor="middle" fontSize="10" fontWeight="600">
                {p.title}
              </text>
              <Fade show={s >= i + 1}>
                <text x={p.x} y="162" textAnchor="middle" fontSize="8.5" fillOpacity=".7">
                  {p.line}
                </text>
              </Fade>
            </g>
          ))}

          {/* natural: a peasant and his own coat and linen */}
          <Fade show={s >= 1}>
            <Figure name="peasant" x={44} y={140} scale={0.7} />
            <Place x={86} y={92} scale={0.6}>
              <Linen />
            </Place>
            <text x="86" y="120" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
              home-made
            </text>
          </Fade>

          {/* money: sells all, buys back */}
          <Fade show={s >= 2}>
            <Figure name="farmer" x={160} y={140} scale={0.7} />
            <Place x={204} y={74} scale={0.85}>
              <Coins n={2} />
            </Place>
            <text x="204" y="100" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
              sell all,
            </text>
            <text x="204" y="110" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
              buy all
            </text>
          </Fade>

          {/* credit: promises */}
          <Fade show={s >= 3}>
            <Figure name="buyer" x={278} y={140} scale={0.7} />
            <g transform="translate(320 84)">
              <IOU text="pay later" />
            </g>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="10" y="180" width="340" height="40" fill="#000" />
            <text x="180" y="197" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
              Marx: not how people swap, but how the work is organised
            </text>
            <text x="180" y="212" textAnchor="middle" fontSize="9" fill="#fff" fillOpacity=".75">
              who owns the tools, and who works for whom?
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
