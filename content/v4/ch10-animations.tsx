"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { PROFIT, RENT, T, WAGE } from "./ch08-animations";

/* ─────────────────────────────────────────────────────────────
 * 10.1 · Two movements, one name
 * Marx: values are turned into cost-prices; then market-prices
 * rotate around the cost-price, which Ricardo calls the "natural
 * price" and also identifies with "natural value". Numbers here
 * are this site's.
 * ───────────────────────────────────────────────────────────── */
const PX = 0.95;
const FLOOR = 186;
const GOODS = [
  { label: "the mill's yarn", x: 95, value: 110 },
  { label: "the tailoring's coats", x: 225, value: 130 },
];
const COST_PRICE = 120;

export function TwoMovements() {
  return (
    <Player
      id="anim-v4-10-1"
      title="10.1 · Two movements, one name"
      steps={[
        { caption: "David Ricardo visits. For him, a thing's value is the work it takes to make it. Here are two batches of goods with their values: the mill's yarn 110, the tailoring's coats 130. (Made-up numbers.)" },
        { caption: "Movement one. Competition evens out profit between trades, so both batches sell for around 120. Marx calls this the cost-price (Volume III calls it the price of production). It is not the same as value." },
        { caption: "Movement two. Day to day, market prices bounce above and below that 120, as buyers and sellers come and go." },
        { caption: "Ricardo looked hard at movement two, prices swinging round a centre. He called the centre the 'natural price', and also the 'natural value', as if 120 were the value itself.", ms: 4800 },
        {
          caption: "So movement one, values turning into cost-prices, vanished from his view. Marx says Ricardo was right that work sets value, but skipped the steps that join value to the prices we actually see.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const lineY = FLOOR - COST_PRICE * PX;
        return (
          <>
            <Figure name="Ricardo" x={330} y={200} scale={0.6} mood={s === 4 ? "wow" : "happy"} />
            <line x1="30" y1={FLOOR} x2="300" y2={FLOOR} stroke="#000" strokeOpacity=".4" />
            {GOODS.map((g) => {
              const h = g.value * PX;
              return (
                <g key={g.label}>
                  <rect x={g.x - 26} y={FLOOR - h} width="52" height={h} fill="#cfcfcf" stroke="#000" strokeWidth=".8" style={{ opacity: s === 3 ? 0.35 : 1, transition: `opacity ${T}` }} />
                  <text x={g.x} y={FLOOR - h + 14} textAnchor="middle" fontSize="9">
                    value {g.value}
                  </text>
                  <text x={g.x} y={FLOOR + 13} textAnchor="middle" fontSize="8.5">
                    {g.label}
                  </text>
                </g>
              );
            })}

            {/* movement one: the cost-price line */}
            <Fade show={s >= 1}>
              <line x1="40" y1={lineY} x2="290" y2={lineY} stroke={WAGE} strokeWidth="2.5" />
              <text x="294" y={lineY + 3} fontSize="9" fontWeight="600" fill={WAGE}>
                cost-price 120
              </text>
              <Fade show={s === 1 || s === 4}>
                <text x="95" y={lineY - 8} textAnchor="middle" fontSize="8.5" fill={WAGE}>
                  sells above value
                </text>
                <text x="225" y={lineY - 16} textAnchor="middle" fontSize="8.5" fill={WAGE}>
                  sells below value
                </text>
              </Fade>
            </Fade>

            {/* movement two: market price swinging round the line */}
            <Fade show={s >= 2}>
              <g className="v4c10-swing" style={{ transformBox: "fill-box" }}>
                <circle cx="160" cy={lineY} r="7" fill={PROFIT} stroke="#000" />
              </g>
              <text x="160" y={lineY - 34} textAnchor="middle" fontSize="8.5" style={{ opacity: s === 3 ? 0 : 1 }}>
                market price
              </text>
            </Fade>

            {/* Ricardo's two names for one line */}
            <Fade show={s === 3}>
              <rect x="34" y="2" width="250" height="32" fill="#fff" stroke="#000" />
              <text x="159" y="15" textAnchor="middle" fontSize="9">
                Ricardo: 120 is the &ldquo;natural price&rdquo;
              </text>
              <text x="159" y="28" textAnchor="middle" fontSize="9">
                and also the &ldquo;natural value&rdquo;
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="159" y="18" textAnchor="middle" fontSize="9" fontWeight="600" fill={RENT}>
                missing step: value → cost-price
              </text>
            </Fade>

            <style>{`
              @keyframes v4c10-swing {
                0%, 100% { transform: translateY(-16px); }
                50% { transform: translateY(16px); }
              }
              .v4c10-swing { animation: v4c10-swing 1.8s ease-in-out infinite; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10.2 · Smith's two minds
 * Smith's chapter on wages starts from the necessary wage and
 * treats profit and rent as deductions; his natural price adds up
 * wages, profit and rent, each with its own natural rate.
 * Workshop numbers: 6 coins of new value, 3 wages, 3 surplus.
 * ───────────────────────────────────────────────────────────── */
const U = 26;
const BX = 70;

export function SmithsTwoMinds() {
  return (
    <Player
      id="anim-v4-10-2"
      title="10.2 · Smith's two minds"
      steps={[
        { caption: "Adam Smith visits too. In his chapter on wages, he starts from what a worker needs: enough to live and bring up a family." },
        { caption: "There Smith sees that profit and rent are taken out of what the worker's labour makes. Sam's day makes 6 coins of new value; 3 come back as his wage, 3 go to the boss and the landlord. Marx agrees: that is surplus-value.", ms: 5200 },
        { caption: "But when Smith turns to prices, he changes his mind. Now the natural price is built by adding three separate things: a natural rate of wages, plus a natural rate of profit, plus a natural rate of rent." },
        { caption: "Marx calls this a false assumption: three parts that 'independently determine' value. Ricardo did better here: he saw that one average rate of profit, at given wages, settles the cost-price.", ms: 5200 },
        { caption: "So Smith held two views at once. Marx keeps the first, profit and rent as slices of what labour made, and throws out the second." },
      ]}
    >
      {(s) => {
        const first = s <= 1 || s === 4;
        return (
          <>
            <Figure name="Adam Smith" x={34} y={200} scale={0.6} />
            <Figure who="sam" x={326} y={200} scale={0.6} />

            {/* view one: one day's new value, split */}
            <g style={{ opacity: first ? 1 : 0.2, transition: `opacity ${T}` }}>
              <text x={BX} y="34" fontSize="9" fontWeight="600">
                view one: Sam&apos;s day makes 6 coins of new value
              </text>
              <rect x={BX} y="42" width={6 * U} height="24" fill="#e5e5e5" stroke="#000" />
              <Fade show={s >= 1}>
                <rect x={BX} y="42" width={3 * U} height="24" fill={WAGE} stroke="#000" />
                <rect x={BX + 3 * U} y="42" width={3 * U} height="24" fill={PROFIT} stroke="#000" />
                <text x={BX + 1.5 * U} y="58" textAnchor="middle" fontSize="9" fill="#fff">
                  wage 3
                </text>
                <text x={BX + 4.5 * U} y="58" textAnchor="middle" fontSize="9">
                  profit + rent 3
                </text>
                <text x={BX + 4.5 * U} y="80" textAnchor="middle" fontSize="8.5" fillOpacity=".7">
                  taken out of what Sam made
                </text>
              </Fade>
            </g>

            {/* view two: three blocks stacked up into a price */}
            <Fade show={s >= 2}>
              <g style={{ opacity: s === 4 ? 0.25 : 1, transition: `opacity ${T}` }}>
                <text x={BX} y="104" fontSize="9" fontWeight="600">
                  view two: price = wages + profit + rent
                </text>
                {[
                  { label: "wages", fill: WAGE, x: BX, dark: true },
                  { label: "profit", fill: PROFIT, x: BX + 2.2 * U, dark: false },
                  { label: "rent", fill: RENT, x: BX + 4.4 * U, dark: false },
                ].map((b, i) => (
                  <g key={b.label} style={{ transform: `translateY(${s >= 2 ? 0 : 20}px)`, transition: `transform ${T} ${i * 150}ms` }}>
                    <rect x={b.x} y="112" width={1.8 * U} height="24" fill={b.fill} stroke="#000" />
                    <text x={b.x + 0.9 * U} y="128" textAnchor="middle" fontSize="9" fill={b.dark ? "#fff" : "#000"}>
                      {b.label}
                    </text>
                    {i < 2 && (
                      <text x={b.x + 2 * U} y="129" textAnchor="middle" fontSize="12" fontWeight="700">
                        +
                      </text>
                    )}
                  </g>
                ))}
                <text x={BX} y="152" fontSize="8.5" fillOpacity=".7">
                  each with its own &ldquo;natural rate&rdquo;
                </text>
              </g>
            </Fade>

            <Fade show={s === 3}>
              <text x="180" y="176" textAnchor="middle" fontSize="9" fontWeight="600" fill={RENT}>
                Marx: a false assumption
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="176" textAnchor="middle" fontSize="9" fontWeight="600" fill={WAGE}>
                Marx keeps view one
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
