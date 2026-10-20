"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const GOLD = "#e6b800";
const BEA = CAST.bea.color;
const RED = "#d6452f";
const GREEN = "#2a9d5b";

/** A tree whose fruit is drawn by `fruit`. */
function Tree({ fruit, count }: { fruit: (k: number) => React.ReactNode; count: number }) {
  const spots = [
    [-26, -70],
    [8, -86],
    [30, -62],
    [-8, -54],
    [20, -40],
    [-30, -42],
  ];
  return (
    <g>
      <rect x="-6" y="-30" width="12" height="40" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <circle cx="0" cy="-62" r="44" fill="#9cc98a" stroke="#000" strokeWidth="1" />
      {spots.slice(0, count).map(([x, y], k) => (
        <g key={k} transform={`translate(${x} ${y})`} style={{ opacity: 1, transition: "opacity 400ms" }}>
          {fruit(k)}
        </g>
      ))}
    </g>
  );
}

const Pear = () => <path d="M0,-8 C5,-8 4,-2 6,3 C8,9 -8,9 -6,3 C-4,-2 -5,-8 0,-8 Z" fill="#d6c24a" stroke="#000" strokeWidth=".8" />;

/* ─────────────────────────────────────────────────────────────
 * 24.1 · Money that grows on trees
 * Marx: "much as it is an attribute of pear-trees to bear pears."
 * ───────────────────────────────────────────────────────────── */
export function MoneyThatGrowsOnTrees() {
  return (
    <Player
      id="anim-v3-24-1"
      title="24.1 · Money that grows on trees"
      steps={[
        { caption: "Grandpa Ned's pear tree bears pears every autumn. That is just what pear trees do." },
        { caption: "Now look at Bea's bank. She lends 100 coins and every year 5 more coins come back. It looks as if money simply bears interest, the way a pear tree bears pears." },
        { caption: "Marx says this is the most upside-down form capital takes. M–M′: money making more money, with nothing in between." },
        { caption: "Lift the curtain. The 5 coins were made in Mr. Moneybags' mill, out of Sam's unpaid hours, before any of it reached Bea." },
        {
          caption: "Marx calls interest-bearing capital the “automatic fetish”: money that seems to grow by itself, with every trace of where it came from rubbed out.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the pear tree */}
          <g style={{ opacity: s === 0 ? 1 : s >= 3 ? 0.08 : 0.3, transition: "opacity 500ms" }}>
            <g transform="translate(80 170)">
              <Tree count={6} fruit={() => <Pear />} />
            </g>
            <Figure who="ned" x={42} y={205} scale={0.7} label={s === 0} />
          </g>

          {/* the money tree */}
          <Fade show={s >= 1}>
            <g transform="translate(270 170)">
              <Tree count={5} fruit={() => <Coin r={6} />} />
            </g>
            <text x="270" y="200" textAnchor="middle" fontSize="9">
              Bea&apos;s 100 coins
            </text>
            <Figure who="bea" x={330} y={205} scale={0.7} />
          </Fade>
          <Fade show={s === 1 || s === 2}>
            <text x="180" y="24" textAnchor="middle" fontSize="12" fontWeight="700">
              {s === 1 ? "pears from pear trees, interest from money?" : "M – M′"}
            </text>
          </Fade>

          {/* the hidden mill */}
          <Fade show={s >= 3}>
            <rect x="74" y="40" width="120" height="70" fill="#fff" stroke="#000" />
            <text x="134" y="56" textAnchor="middle" fontSize="9" fontWeight="600">
              Moneybags&apos; mill
            </text>
            <rect x="86" y="64" width="48" height="14" fill={GREEN} />
            <rect x="134" y="64" width="48" height="14" fill={GOLD} />
            <text x="110" y="74" textAnchor="middle" fontSize="7" fill="#fff">
              paid
            </text>
            <text x="158" y="74" textAnchor="middle" fontSize="7">
              unpaid
            </text>
            <text x="134" y="98" textAnchor="middle" fontSize="8.5">
              Sam&apos;s unpaid hours
            </text>
            <path d="M182,72 C206,72 214,96 228,104" fill="none" stroke={BEA} strokeWidth="2" strokeDasharray="4 3" />
            <text x="198" y="126" textAnchor="middle" fontSize="8" fill={BEA}>
              5 coins
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="80" y="8" width="200" height="22" fill="#000" />
            <text x="180" y="23" textAnchor="middle" fontSize="10" fill="#fff">
              &ldquo;automatic fetish&rdquo;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 24.2 · Dr. Price's penny
 * Price (quoted by Marx): one penny lent at 5% compound interest from the
 * birth of Christ would by his day exceed 150 million earths of solid gold;
 * at simple interest it would be only 7 shillings and 4½ pence.
 * The curve's shape is illustrative.
 * ───────────────────────────────────────────────────────────── */
const CX = 50;
const CW = 270;
const CY = 190;

function curve(k: number) {
  // an exponential climb, drawn up to fraction k of the way across
  const pts: string[] = [];
  const n = 60;
  for (let i = 0; i <= Math.round(n * k); i++) {
    const t = i / n;
    const y = CY - (Math.exp(t * 6) - 1) / (Math.exp(6) - 1) * 160;
    pts.push(`${i ? "L" : "M"}${(CX + t * CW).toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

export function DrPricesPenny() {
  return (
    <Player
      id="anim-v3-24-2"
      title="24.2 · Dr. Price's penny"
      steps={[
        { caption: "In the 1700s, a preacher and writer called Dr. Richard Price did a famous sum. Lend one penny at 5% interest, and add the interest to the loan every year." },
        { caption: "With simple interest, where only the first penny earns, the penny grows slowly. By Price's own day, about 1,770 years later, it is only 7 shillings and 4½ pence." },
        { caption: "With compound interest, where the interest earns interest too, it creeps at first and then shoots up." },
        { caption: "Price said that by his own day it would be more gold than 150 million Earths made of solid gold!" },
        {
          caption: "Marx says Price was dazzled by the numbers and forgot what interest really is: a share of what workers make. And the British Prime Minister, William Pitt, took the idea seriously.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const k = s <= 1 ? 0 : s === 2 ? 0.75 : 1;
        return (
          <>
            <line x1={CX} y1={CY} x2={CX + CW} y2={CY} stroke="#000" />
            <line x1={CX} y1={CY} x2={CX} y2="24" stroke="#000" />
            <text x={CX} y={CY + 14} fontSize="8.5">
              year 1
            </text>
            <text x={CX + CW} y={CY + 14} textAnchor="end" fontSize="8.5">
              Price&apos;s day (1700s)
            </text>
            <g transform={`translate(${CX} ${CY - 8})`}>
              <Coin r={6} />
            </g>
            <text x={CX + 10} y={CY - 18} fontSize="8.5">
              one penny
            </text>

            {/* simple interest: a nearly flat line */}
            <Fade show={s >= 1}>
              <line x1={CX} y1={CY - 4} x2={CX + CW} y2={CY - 14} stroke={GREEN} strokeWidth="3" />
              <text x={CX + CW} y={CY - 22} textAnchor="end" fontSize="9" fill={GREEN} fontWeight="600">
                simple: 7s 4&frac12;d
              </text>
            </Fade>

            {/* compound interest */}
            <path d={curve(k)} fill="none" stroke={GOLD} strokeWidth="4" style={{ transition: "all 600ms" }} />
            <Fade show={s >= 2}>
              <text x="150" y="80" fontSize="10" fill="#8a6d00" fontWeight="600">
                compound
              </text>
            </Fade>

            {/* the earths of gold */}
            <Fade show={s >= 3}>
              {[0, 1, 2, 3].map((i) => (
                <Place key={i} x={280 - i * 22} y={40 + (i % 2) * 14} delay={i * 120}>
                  <circle r="9" fill={GOLD} stroke="#000" />
                </Place>
              ))}
              <text x="226" y="22" textAnchor="middle" fontSize="9" fontWeight="600">
                150 million Earths of gold
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="70" y="100" width="150" height="34" fill="#fff" stroke="#000" />
              <text x="145" y="114" textAnchor="middle" fontSize="8.5">
                Marx: interest comes from
              </text>
              <text x="145" y="126" textAnchor="middle" fontSize="8.5" fontWeight="700">
                workers&apos; labour, not maths
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 24.3 · The ceiling Price forgot
 * Pitt's 1786 sinking fund (£1 million raised and left to
 * "accumulate"); Marx's qualitative limit: the working day and the population.
 * ───────────────────────────────────────────────────────────── */
export function TheCeilingPriceForgot() {
  return (
    <Player
      id="anim-v3-24-3"
      title="24.3 · The ceiling Price forgot"
      steps={[
        { caption: "In 1786 Prime Minister Pitt followed Price's idea. Parliament raised £1 million by taxing people, to set it aside and let it grow and pay off the national debt by magic." },
        { caption: "But where would the growing interest really come from? Every coin of interest has to come out of surplus-value, made by people working." },
        { caption: "And work has a limit. There are only so many hours in a day, and only so many people to work them." },
        { caption: "So the real line can't shoot up forever. It runs into a ceiling: all the working days a country has." },
        {
          caption: "Marx: seen only as interest, growth seems to have no real limit, one that “defies all fantasy”. Seen as surplus labour, it has a real one.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const ceil = 76;
        return (
          <>
            <line x1={CX} y1={CY} x2={CX + CW} y2={CY} stroke="#000" />
            <line x1={CX} y1={CY} x2={CX} y2="24" stroke="#000" />
            <Fade show={s === 0}>
              <g transform="translate(110 130)">
                <rect x="-40" y="-18" width="80" height="36" fill="#fff" stroke="#000" />
                <text y="-2" textAnchor="middle" fontSize="10" fontWeight="700">
                  1786
                </text>
                <text y="12" textAnchor="middle" fontSize="8.5">
                  &pound;1 million set aside
                </text>
              </g>
              <path d={curve(1)} fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" opacity=".6" />
              <text x="250" y="40" fontSize="9" fill="#8a6d00">
                Price&apos;s dream
              </text>
            </Fade>
            <Fade show={s >= 1 && s <= 2}>
              <Figure who="sam" x={110} y={CY - 4} scale={0.7} />
              <Figure name="" x={150} y={CY - 4} scale={0.7} label={false} />
              <Figure name="" x={190} y={CY - 4} scale={0.7} label={false} />
              <text x="230" y="120" fontSize="9">
                interest comes from
              </text>
              <text x="230" y="132" fontSize="9">
                people working
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="150" y="60" textAnchor="middle" fontSize="10" fontWeight="600">
                24 hours a day, so many people
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <line x1={CX} y1={ceil} x2={CX + CW} y2={ceil} stroke={RED} strokeWidth="3" />
              <text x={CX + CW} y={ceil - 8} textAnchor="end" fontSize="9" fill={RED} fontWeight="600">
                ceiling: all the working days
              </text>
              <path
                d={`M${CX},${CY - 4} C${CX + 90},${CY - 20} ${CX + 150},${ceil + 30} ${CX + 200},${ceil + 6} L${CX + CW},${ceil + 4}`}
                fill="none"
                stroke={GOLD}
                strokeWidth="4"
              />
              <path d={curve(1)} fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="4 4" opacity=".35" />
            </Fade>
            <Fade show={s === 4}>
              <rect x="70" y="120" width="190" height="30" fill="#000" />
              <text x="165" y="139" textAnchor="middle" fontSize="9" fill="#fff">
                surplus-value has a real limit
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
