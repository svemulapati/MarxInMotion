"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Coins, Fade, Place, Tick } from "@/components/anim/Things";

const GOLD = "#e6b800";
const SILVER = "#c9ccd1";
const COPPER = "#c47a3d";
const WAGE = "#2a9d5b";
const MUTE = "#8a8a8a";

/** A coin of any metal, with a stamp letter. */
function OddCoin({ fill, mark, r = 9 }: { fill: string; mark: string; r?: number }) {
  return (
    <g>
      <circle r={r} fill={fill} stroke="#000" strokeWidth="1" />
      <text y={r * 0.38} textAnchor="middle" fontSize={r * 1.05} fontWeight="700">
        {mark}
      </text>
    </g>
  );
}

/** The money-changer's table, with a set of scales on it. */
function Table({ tilt = 0 }: { tilt?: number }) {
  return (
    <g>
      <rect x="-52" y="0" width="104" height="8" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <line x1="-44" y1="8" x2="-44" y2="40" stroke="#000" strokeWidth="2" />
      <line x1="44" y1="8" x2="44" y2="40" stroke="#000" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="-28" stroke="#000" strokeWidth="1.5" />
      <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: "0px -28px", transition: "transform 600ms" }}>
        <line x1="-26" y1="-28" x2="26" y2="-28" stroke="#000" strokeWidth="1.5" />
        <path d="M-34,-14 L-18,-14 L-26,-28 Z" fill="none" stroke="#000" strokeWidth="1" />
        <path d="M18,-14 L34,-14 L26,-28 Z" fill="none" stroke="#000" strokeWidth="1" />
      </g>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 19.1 · The money-changer's table
 * ───────────────────────────────────────────────────────────── */
const TRAVELLERS = [
  { name: "trader from Big River", coins: [{ fill: SILVER, mark: "S" }, { fill: SILVER, mark: "S" }], x: 40 },
  { name: "trader from the coast", coins: [{ fill: COPPER, mark: "C" }, { fill: COPPER, mark: "C" }, { fill: COPPER, mark: "C" }], x: 320 },
];

export function TheMoneyChangersTable() {
  return (
    <Player
      id="anim-v3-19-1"
      title="19.1 · The money-changer's table"
      steps={[
        { caption: "Traders come to Tiny Town's market from far away. Each one carries a different kind of coin: silver from Big River, copper from the coast." },
        { caption: "Old Nell, the money-changer, sets up a table with a pair of scales. She weighs each strange coin for the gold or silver inside it, and swaps it for Tiny Town coins." },
        { caption: "Mr. Moneybags has his own headache. Every day he pays out coins to many people and takes coins in from many others. Counting it all takes hours." },
        { caption: "So he hands the job to Nell. She keeps the money for him and for Tom, makes their payments, and settles up whose coins go where. Many little trips become a few lines in her book." },
        {
          caption: "Marx says money-changing and trading in gold and silver were the oldest forms of this money business. In Dutch towns there were money-changers long before the Amsterdam bank opened in 1609.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="0" y1="200" x2="360" y2="200" stroke="#000" strokeOpacity=".15" />

          {/* the money-changer and her table */}
          <Figure name="Old Nell" x={180} y={200} scale={0.85} />
          <g transform="translate(180 152)">
            <Table tilt={s === 1 ? -8 : 0} />
          </g>

          {/* travellers with their odd coins */}
          {TRAVELLERS.map((t, i) => (
            <g key={t.name} style={{ opacity: s <= 1 ? 1 : 0, transition: "opacity 500ms" }}>
              <Figure name="" x={t.x} y={200} scale={0.75} label={false} />
              <text x={t.x} y="214" textAnchor="middle" fontSize="8">
                {t.name}
              </text>
              {t.coins.map((c, k) => (
                <Place key={k} x={s === 1 ? 140 + k * 14 + i * 44 : t.x - 10 + k * 12} y={s === 1 ? 98 : 116} delay={k * 80}>
                  <OddCoin fill={c.fill} mark={c.mark} />
                </Place>
              ))}
            </g>
          ))}
          <Fade show={s === 1} delay={500}>
            <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              weighed for the metal inside
            </text>
            <g transform="translate(180 64)">
              <Coins n={4} label="Tiny Town coins" />
            </g>
          </Fade>

          {/* Moneybags and Tom: many little payments */}
          <Fade show={s >= 2}>
            <Figure who="moneybags" x={40} y={200} scale={0.8} mood={s === 2 ? "sad" : "happy"} />
            <Figure who="tom" x={320} y={200} scale={0.8} />
          </Fade>
          <Fade show={s === 2}>
            {[0, 1, 2, 3, 4, 5].map((k) => (
              <g key={k}>
                <path
                  d={`M60,${120 + k * 6} Q${120 + k * 20},${40 + k * 12} ${300 - k * 10},${120 + k * 4}`}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </g>
            ))}
            <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
              pay out, take in, count, again and again
            </text>
          </Fade>

          {/* Nell's book: payments balanced */}
          <Fade show={s >= 3}>
            <g transform="translate(180 62)">
              <rect x="-62" y="-34" width="124" height="66" fill="#fffbe6" stroke="#000" strokeWidth="1" />
              <text x="-54" y="-20" fontSize="8.5">Moneybags pays Tom 6</text>
              <text x="-54" y="-8" fontSize="8.5">Tom pays Moneybags 4</text>
              <line x1="-54" y1="0" x2="54" y2="0" stroke="#000" strokeWidth=".6" />
              <text x="-54" y="14" fontSize="9" fontWeight="700">
                settle: just 2 coins move
              </text>
              <text x="-54" y="26" fontSize="7.5" fillOpacity=".6">
                (made-up numbers)
              </text>
            </g>
            <path d="M62,130 L128,96" stroke="#000" strokeOpacity=".35" />
            <path d="M298,130 L232,96" stroke="#000" strokeOpacity=".35" />
          </Fade>

          <Fade show={s === 4} delay={300}>
            <text x="180" y="12" textAnchor="middle" fontSize="10" fill={MUTE}>
              Dutch towns, before 1609: money-changers
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 19.2 · Where Nell's fee comes from
 * Workshop numbers (CONTINUITY.md): a day's yarn worth 30 coins,
 * 27 to replace cotton, spindle wear and wages, 3 of surplus-value.
 * ───────────────────────────────────────────────────────────── */
const BAR_X = 40;
const UNIT = 9; // px per coin

export function WhereNellsFeeComesFrom() {
  return (
    <Player
      id="anim-v3-19-2"
      title="19.2 · Where Nell's fee comes from"
      steps={[
        { caption: "A day's yarn from Mr. Moneybags' mill is worth 30 coins: 27 to replace cotton, spindle wear and Sam's wage, and 3 of surplus-value." },
        { caption: "Nell works hard all day: counting, weighing, writing up the book. But not one thread of yarn is spun at her table. Her work adds nothing to the yarn's value." },
        { caption: "Still, she is useful to Moneybags. He no longer needs his own clerk, or a big pile of spare coins kept for paying bills." },
        { caption: "So he gives her a slice of his surplus-value as her fee. Marx says the money-dealer's profit is nothing but a deduction from the surplus-value made in production." },
        {
          caption: "One table now does the paying and counting for the whole town, which is cheaper than every boss doing it alone. As it grows it becomes a big office full of cashiers and bookkeepers.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const fee = s >= 3 ? 1 : 0;
        return (
          <>
            <text x={BAR_X} y="36" fontSize="10" fontWeight="600">
              a day&apos;s yarn: 30 coins
            </text>
            <rect x={BAR_X} y="44" width={24 * UNIT} height="26" fill="#d4d4d4" stroke="#000" strokeWidth=".8" />
            <text x={BAR_X + 12 * UNIT} y="61" textAnchor="middle" fontSize="9">
              cotton and spindle wear 24
            </text>
            <rect x={BAR_X + 24 * UNIT} y="44" width={3 * UNIT} height="26" fill={WAGE} stroke="#000" strokeWidth=".8" />
            <rect x={BAR_X + 27 * UNIT} y="44" width={(3 - fee) * UNIT} height="26" fill={GOLD} stroke="#000" strokeWidth=".8" style={{ transition: "width 600ms" }} />
            <rect
              x={BAR_X + (30 - fee) * UNIT}
              y="44"
              width={fee * UNIT}
              height="26"
              fill="#7b4bd6"
              stroke="#000"
              strokeWidth=".8"
              style={{ transition: "all 600ms" }}
            />
            <text x={BAR_X + 30 * UNIT} y="84" textAnchor="end" fontSize="8.5">
              <tspan fill={WAGE}>green: wage 3</tspan>
              <tspan fill="#8a6d00"> · gold: surplus 3</tspan>
            </text>

            {/* Nell at work */}
            <Figure name="Old Nell" x={110} y={200} scale={0.85} />
            <g transform="translate(110 152)">
              <Table />
            </g>
            <Fade show={s >= 1}>
              <text x="110" y="112" textAnchor="middle" fontSize="10" fontWeight="600">
                new value from her table: 0
              </text>
            </Fade>

            {/* what she saves Moneybags */}
            <Figure who="moneybags" x={270} y={200} scale={0.85} />
            <Fade show={s === 2}>
              <g transform="translate(270 108)">
                <g style={{ opacity: 0.5 }}>
                  <Figure name="clerk" x={-40} y={40} scale={0.55} label={false} />
                  <g transform="translate(36 30)">
                    <Coins n={4} />
                  </g>
                </g>
                <line x1="-58" y1="2" x2="58" y2="44" stroke="#d6452f" strokeWidth="2" />
                <text y="-10" textAnchor="middle" fontSize="9">
                  no clerk, no spare pile
                </text>
              </g>
            </Fade>

            {/* the fee flows */}
            <Fade show={s >= 3}>
              <path d={`M${BAR_X + 29.5 * UNIT},92 C300,110 190,108 148,126`} fill="none" stroke="#7b4bd6" strokeWidth="2" strokeDasharray="4 3" />
              <text x="300" y="124" textAnchor="middle" fontSize="9" fill="#7b4bd6">
                her fee (size made up)
              </text>
              <g transform="translate(140 132)">
                <Coin r={7} />
              </g>
            </Fade>

            {/* one office does it for all */}
            <Fade show={s === 4} delay={300}>
              <g transform="translate(206 150)">
                {[0, 1, 2].map((k) => (
                  <rect key={k} x={k * 12} y={-k * 4} width="10" height="12" fill="#fff" stroke="#000" strokeWidth=".7" />
                ))}
                <text x="16" y="24" textAnchor="middle" fontSize="8.5">
                  one office for all
                </text>
              </g>
              <g transform="translate(240 140)">
                <Tick />
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
