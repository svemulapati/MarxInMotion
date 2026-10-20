"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Corn, Fade, Gold, Loaf, Place } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";

const ADV = "#5b8fd9";
const GOLD = "#e6b800";
const SPENT = "#d6452f";

/* ─────────────────────────────────────────────────────────────
 * 17.1 · 500 in, 600 out?
 * Marx's numbers (pounds, shown as coins): the capitalist class advances 500
 * and puts commodities worth 600 into circulation.
 * ───────────────────────────────────────────────────────────── */
export function FiveHundredInSixHundredOut() {
  return (
    <Player
      id="anim-v2-17-1"
      title="17.1 · 500 in, 600 out?"
      steps={[
        { caption: "Picture all the bosses of Tiny Town as one team. Together they put 500 coins into circulation, buying cotton, tools and labour-power." },
        { caption: "Out of the workshops come goods worth 600: the 500 again, plus 100 of surplus-value." },
        { caption: "To sell all of it, buyers must hand over 600 coins. But the bosses only ever put 500 in. Where do the other 100 coins come from?" },
        { caption: "Easy answers go round in a circle: A buys from B, B buys from C, C buys from A. Marx says they only assume the very money they were meant to explain." },
        {
          caption: "His answer is a surprise: the bosses themselves put the extra money in. Not as capital, but by spending it on their own dinners, coats and carriages.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the bosses as one team */}
          <Figure who="moneybags" x={48} y={200} scale={0.8} />
          <Figure name="boss" x={88} y={200} scale={0.7} />
          <text x="68" y="226" textAnchor="middle" fontSize="8.5">
            all the bosses
          </text>

          {/* the advanced 500 */}
          <rect x="130" y="40" width="100" height="22" fill={ADV} stroke="#000" strokeWidth=".8" />
          <text x="180" y="55" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
            500 put in
          </text>

          {/* the goods worth 600 */}
          <Fade show={s >= 1}>
            <rect x="130" y="80" width="100" height="22" fill="#d4d4d4" stroke="#000" strokeWidth=".8" />
            <rect x="230" y="80" width="20" height="22" fill={GOLD} stroke="#000" strokeWidth=".8" />
            <text x="180" y="95" textAnchor="middle" fontSize="10" fontWeight="700">
              goods: 500
            </text>
            <text x="262" y="95" fontSize="10" fontWeight="700" fill="#b38f00">
              +100
            </text>
            <g transform="translate(110 91) scale(.7)">
              <Yarn />
            </g>
          </Fade>

          {/* the puzzle */}
          <Fade show={s >= 2}>
            <text x="190" y="128" textAnchor="middle" fontSize="11" fontWeight="600">
              buyers must pay 600
            </text>
            <Fade show={s === 2}>
              <text x="300" y="58" textAnchor="middle" fontSize="30" fontWeight="300">
                ?
              </text>
            </Fade>
          </Fade>

          {/* going round in circles */}
          <Fade show={s === 3}>
            <circle cx="290" cy="170" r="26" fill="none" stroke="#000" strokeDasharray="4 4" />
            {["A", "B", "C"].map((l, i) => {
              const a = (i * 120 - 90) * (Math.PI / 180);
              return (
                <g key={l}>
                  <circle cx={290 + 26 * Math.cos(a)} cy={170 + 26 * Math.sin(a)} r="8" fill="#fff" stroke="#000" />
                  <text x={290 + 26 * Math.cos(a)} y={174 + 26 * Math.sin(a)} textAnchor="middle" fontSize="10" fontWeight="700">
                    {l}
                  </text>
                </g>
              );
            })}
            <text x="290" y="214" textAnchor="middle" fontSize="8.5">
              assumes the money already exists
            </text>
          </Fade>

          {/* the bosses' own spending */}
          <Fade show={s === 4} delay={200}>
            <Place x={190} y={170} scale={0.8}>
              <Loaf />
            </Place>
            <text x="240" y="160" fontSize="9" fontWeight="600" fill={SPENT}>
              100 spent on living
            </text>
            <text x="240" y="174" fontSize="9">
              comes back as
            </text>
            <text x="240" y="188" fontSize="9" fontWeight="600" fill="#b38f00">
              the 100 of surplus
            </text>
            <path d="M110,176 C130,160 150,160 168,166" stroke={SPENT} strokeWidth="2" fill="none" />
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17.2 · Grandpa Ned's first year
 * Marx's farmer, in pounds shown as coins: 5,000 advanced (4,000 for means
 * of production, 1,000 for labour-power), 1,000 spent on living, 6,000 at sale.
 * ───────────────────────────────────────────────────────────── */
const STEPS_172 = [
  { caption: "Grandpa Ned starts a farm. He advances 5,000 coins: 4,000 for seed, tools and animals, and 1,000 for his farmhands' wages. (Marx's own example, in pounds.)" },
  { caption: "No money comes in until the harvest. But Ned's family must eat all year, so he spends 1,000 coins of his own savings on living." },
  { caption: "His farmhands' work makes 1,000 coins of surplus-value, a rate of 100%. At harvest he sells the whole crop for 6,000." },
  {
    caption: "Back come his 5,000, plus 1,000 more. And where did buyers find that extra 1,000? It is, in effect, the money Ned himself spent at the market all year, now flowing back to him.",
    ms: 5600,
  },
  {
    caption: "From the second year on, he lives on the surplus itself. For the total amount of money to grow, Marx points to the gold mines, where miners are paid with gold they dug themselves.",
    ms: 5400,
  },
];

export function NedsFirstYear() {
  return (
    <Player id="anim-v2-17-2" title="17.2 · Grandpa Ned's first year" steps={STEPS_172}>
      {(s) => (
        <>
          <Figure who="ned" x={44} y={200} scale={0.85} />
          <Place x={44} y={96} scale={1.1}>
            <Corn />
          </Place>

          {/* advanced capital */}
          <text x="100" y="30" fontSize="9" fontWeight="600">
            advanced as capital
          </text>
          <rect x="100" y="36" width="160" height="20" fill="#d4d4d4" stroke="#000" strokeWidth=".8" />
          <text x="180" y="50" textAnchor="middle" fontSize="9.5" fontWeight="600">
            means of production 4,000
          </text>
          <rect x="260" y="36" width="40" height="20" fill="#2a9d5b" stroke="#000" strokeWidth=".8" />
          <text x="280" y="50" textAnchor="middle" fontSize="9" fontWeight="600" fill="#fff">
            1,000
          </text>
          <text x="280" y="66" textAnchor="middle" fontSize="8">
            wages
          </text>

          {/* spent on living */}
          <Fade show={s >= 1}>
            <text x="100" y="92" fontSize="9" fontWeight="600" fill={SPENT}>
              spent on living (not capital)
            </text>
            <rect x="100" y="98" width="40" height="20" fill={SPENT} stroke="#000" strokeWidth=".8" />
            <text x="120" y="112" textAnchor="middle" fontSize="9" fontWeight="600" fill="#fff">
              1,000
            </text>
            <g transform="translate(170 108) scale(.75)">
              <Loaf />
            </g>
          </Fade>

          {/* the sale */}
          <Fade show={s >= 2}>
            <text x="100" y="146" fontSize="9" fontWeight="600">
              harvest sold for
            </text>
            <rect x="100" y="152" width="200" height="20" fill="#d4d4d4" stroke="#000" strokeWidth=".8" />
            <rect x="300" y="152" width="40" height="20" fill={GOLD} stroke="#000" strokeWidth=".8" />
            <text x="200" y="166" textAnchor="middle" fontSize="9.5" fontWeight="600">
              5,000 back
            </text>
            <text x="320" y="166" textAnchor="middle" fontSize="9" fontWeight="700">
              1,000
            </text>
            <text x="220" y="186" textAnchor="middle" fontSize="10" fontWeight="700">
              total 6,000
            </text>
          </Fade>

          {/* the loop: his own spending returns as surplus-value */}
          <Fade show={s === 3}>
            <path d="M200,108 C270,108 312,120 320,148" stroke={SPENT} strokeWidth="2" strokeDasharray="5 4" fill="none" />
            <text x="262" y="100" textAnchor="middle" fontSize="8.5" fill={SPENT}>
              his own spending flows back
            </text>
          </Fade>

          {/* gold mines */}
          <Fade show={s === 4}>
            <g transform="translate(320 206)">
              <Gold />
            </g>
            <text x="298" y="210" textAnchor="end" fontSize="9">
              new money: gold mines
            </text>
            <g transform="translate(130 206)">
              <Coins n={3} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
