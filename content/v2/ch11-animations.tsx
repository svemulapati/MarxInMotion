"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, Loaf, Place, Tick } from "@/components/anim/Things";
import { Cotton } from "@/components/anim/Workshop";
import { Machine, Plough, Sack } from "./ch10-animations";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ─────────────────────────────────────────────────────────────
 * 11.1 · Where did the cotton go? (Ricardo's two kinds of capital)
 * ───────────────────────────────────────────────────────────── */
export function WhereDidTheCottonGo() {
  return (
    <Player
      id="anim-v2-11-1"
      title="11.1 · Where did the cotton go?"
      viewBox="0 0 360 224"
      steps={[
        { caption: "The workshop again: the spinning machine, the cotton, and Sam." },
        {
          caption: "David Ricardo, a famous English economist, sorted capital into two kinds: tools, machinery and buildings, and “capital that is to support labour”, meaning wages.",
          ms: 4800,
        },
        { caption: "But where does the cotton go? It is not a tool, and it is not a wage. In Ricardo's sorting the raw material simply vanishes from sight.", ms: 4400 },
        { caption: "Marx's sorting has a place for everything. The machine and the cotton only pass on their value: constant capital. Sam makes new value: variable capital.", ms: 4800 },
        {
          caption: "And who is really advancing what? Sam works all week before he sees a coin on Saturday. Marx says it is the worker who advances his labour to the capitalist, not the other way round.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const ricardo = s === 1 || s === 2;
        const marx = s === 3;
        const week = s === 4;
        const boxes = s >= 1 && s <= 3;
        return (
          <>
            {/* the two boxes, relabelled for Ricardo, then for Marx */}
            <Fade show={boxes}>
              <rect x="10" y="22" width="160" height="112" fill="#fff" fillOpacity=".55" stroke="#000" strokeDasharray="4 3" />
              <rect x="190" y="22" width="160" height="112" fill="#fff" fillOpacity=".55" stroke={marx ? "#b38f00" : "#000"} strokeDasharray="4 3" />
            </Fade>
            <Fade show={ricardo}>
              <text x="16" y="35" fontSize="9" fontWeight="600">
                tools, machinery, buildings
              </text>
              <text x="196" y="35" fontSize="9" fontWeight="600">
                &ldquo;capital to support labour&rdquo;
              </text>
            </Fade>
            <Fade show={marx}>
              <text x="16" y="35" fontSize="9" fontWeight="600">
                constant: passes on its value
              </text>
              <text x="196" y="35" fontSize="9" fontWeight="600" fill="#b38f00">
                variable: makes new value
              </text>
            </Fade>

            {/* the machine */}
            <Place x={s === 0 ? 70 : 90} y={s === 0 ? 120 : 84} show={!week}>
              <Machine />
            </Place>
            {/* the cotton: in the row, then lost, then in Marx's constant box */}
            <Place x={s === 0 ? 180 : marx ? 140 : 180} y={s === 0 ? 124 : marx ? 92 : 172} show={!week}>
              <g style={{ opacity: s === 2 ? 0.35 : 1, transition: "opacity 500ms" }}>
                <Cotton />
              </g>
            </Place>
            <Fade show={s === 2}>
              <text x="180" y="150" textAnchor="middle" fontSize="20" fontWeight="300">
                ?
              </text>
              <text x="180" y="204" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                the cotton falls out of both piles
              </text>
            </Fade>

            {/* Sam's wage / Sam */}
            <Fade show={ricardo}>
              <g transform="translate(270 92)">
                <Coins n={3} label="wages" />
              </g>
            </Fade>
            <Figure who="sam" x={s === 0 ? 290 : week ? 40 : 270} y={s === 0 ? 148 : week ? 200 : 122} scale={0.7} style={{ opacity: ricardo ? 0 : 1, transition: "opacity 500ms" }} />

            {/* the week: work first, pay later */}
            <Fade show={week}>
              {DAYS.map((d, i) => (
                <g key={d}>
                  <rect x={80 + i * 44} y={40} width={38} height={26} fill={i < 5 ? "#2a9d5b" : "#e6b800"} stroke="#000" strokeWidth=".8" />
                  <text x={99 + i * 44} y={57} textAnchor="middle" fontSize="8.5" fill={i < 5 ? "#fff" : "#000"} fontWeight="600">
                    {d}
                  </text>
                </g>
              ))}
              <text x="80" y="82" fontSize="8.5">
                Sam works first: a week of labour, given in advance
              </text>
              <path d="M70,150 C140,120 200,120 290,150" stroke="#2a9d5b" strokeWidth="2" fill="none" markerEnd="url(#v2c11-arr)" />
              <text x="180" y="116" textAnchor="middle" fontSize="8.5" fill="#2a9d5b">
                6 days of work
              </text>
              <path d="M290,178 C220,198 140,198 74,180" stroke="#b38f00" strokeWidth="2" fill="none" markerEnd="url(#v2c11-arr)" />
              <g transform="translate(184 196)">
                <Coins n={3} />
              </g>
              <text x="184" y="216" textAnchor="middle" fontSize="8.5" fill="#b38f00">
                paid on Saturday
              </text>
            </Fade>
            <Figure who="moneybags" x={318} y={200} scale={0.7} style={{ opacity: week ? 1 : 0, transition: "opacity 500ms" }} />
            <defs>
              <marker id="v2c11-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.2 · Seed wheat and baker's wheat (Ricardo's own example)
 * ───────────────────────────────────────────────────────────── */
const WEEK_X = (w: number) => 92 + (w / 52) * 248;

export function SeedWheatAndBakersWheat() {
  return (
    <Player
      id="anim-v2-11-2"
      title="11.2 · Seed wheat and baker's wheat"
      steps={[
        { caption: "Ricardo's own example. Grandpa Ned and Mia each buy the same sack of wheat on the same day." },
        { caption: "Mia grinds it, bakes bread and sells it within a week. Her money is back and ready to use again." },
        { caption: "Ned sows his wheat in the ground. He gets nothing back until the harvest, a whole year later." },
        { caption: "Ricardo said Ned's wheat is “comparatively a fixed capital”, because it comes back so slowly.", ms: 4000 },
        {
          caption: "Marx says no. Both sacks hand over their whole value at once, so both are circulating capital. Fixed capital is like Ned's plough, which passes on its value a little each year. Ned's wheat is simply slow: a long production time.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the year line */}
          <line x1={WEEK_X(0)} y1="200" x2={WEEK_X(52)} y2="200" stroke="#000" strokeOpacity=".4" />
          {[0, 13, 26, 39, 52].map((w) => (
            <text key={w} x={WEEK_X(w)} y="212" textAnchor="middle" fontSize="7.5" fillOpacity=".55">
              {w === 0 ? "week 0" : `week ${w}`}
            </text>
          ))}

          {/* Mia's lane */}
          <Figure who="mia" x={36} y={86} scale={0.6} />
          <line x1={WEEK_X(0)} y1="68" x2={WEEK_X(52)} y2="68" stroke="#000" strokeOpacity=".15" />
          <Place x={s >= 1 ? WEEK_X(1) + 8 : WEEK_X(0)} y={58} scale={0.8}>
            {s >= 1 ? <Loaf /> : <Sack label="WHEAT" />}
          </Place>
          <Fade show={s >= 1} delay={300}>
            <g transform={`translate(${WEEK_X(1) + 34} 58)`}>
              <Coins n={2} />
            </g>
            <text x={WEEK_X(1) + 20} y="86" fontSize="8">
              back in a week
            </text>
          </Fade>

          {/* Ned's lane */}
          <Figure who="ned" x={36} y={170} scale={0.6} />
          <line x1={WEEK_X(0)} y1="152" x2={WEEK_X(52)} y2="152" stroke="#000" strokeOpacity=".15" />
          <Place x={WEEK_X(0)} y={142} scale={0.8} show={s < 2}>
            <Sack label="WHEAT" />
          </Place>
          <Fade show={s >= 2}>
            <rect x={WEEK_X(0)} y={146} width={WEEK_X(51) - WEEK_X(0)} height={12} fill="url(#v2c11-wait)" />
            <text x={WEEK_X(26)} y="140" textAnchor="middle" fontSize="8">
              in the ground, growing
            </text>
            <g transform={`translate(${WEEK_X(52) - 4} 132)`}>
              <Coins n={2} />
            </g>
            <text x={WEEK_X(52) + 4} y="176" textAnchor="end" fontSize="8">
              back after a year
            </text>
          </Fade>
          <defs>
            <pattern id="v2c11-wait" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="6" height="6" fill="#e9f3dd" />
              <line x1="0" y1="0" x2="0" y2="6" stroke="#6b8f3a" strokeWidth="2" />
            </pattern>
          </defs>

          {/* Ricardo's label, then Marx's correction */}
          <Fade show={s === 3}>
            <rect x="96" y="96" width="210" height="30" fill="#fff" stroke="#000" />
            <text x="201" y="115" textAnchor="middle" fontSize="9">
              Ricardo: Ned&apos;s wheat is &ldquo;comparatively fixed&rdquo;
            </text>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(100 104)">
              <Cross />
            </g>
            <text x="112" y="108" fontSize="8.5">
              not fixed: all its value goes into the harvest
            </text>
            <g transform="translate(100 124)">
              <Tick />
            </g>
            <text x="112" y="128" fontSize="8.5">
              fixed is like the plough: a little each year
            </text>
            <g transform="translate(330 96) scale(.8)">
              <Plough />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
