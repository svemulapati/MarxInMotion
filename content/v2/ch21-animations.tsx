"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Chest, Coins, Fade, Place } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";
import { DEPT_I, DEPT_II, Gear, MoneyBag, SchemeRow } from "./ch20-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 21.1 · Saving up to grow (hoards as potential money-capital)
 * Marx: some capitalists "sell without buying" while they hoard;
 * others, ready to expand, "buy without selling".
 * ───────────────────────────────────────────────────────────── */
function Fill({ x, y, level }: { x: number; y: number; level: number }) {
  return (
    <g>
      <rect x={x - 6} y={y - 52} width="12" height="46" fill="#fff" stroke="#000" />
      <rect
        x={x - 6}
        y={y - 6 - 46 * level}
        width="12"
        height={46 * level}
        fill={TONE.surplus}
        style={{ transition: `all ${T}` }}
      />
    </g>
  );
}

export function SavingUpToGrow() {
  return (
    <Player
      id="anim-v2-21-1"
      title="21.1 · Saving up to grow"
      steps={[
        { caption: "To build a bigger forge you need a big pile of coins at once. One year's surplus-value is usually not enough." },
        { caption: "So the first Ironmaster sells his iron but buys nothing new. The coins go into his chest. Marx says he sells without buying." },
        { caption: "Year after year the chest fills. While it sits there, the money does no work. Marx calls it potential money-capital: capital waiting to happen." },
        { caption: "Meanwhile a second Ironmaster, whose chest filled up long ago, finally spends it: a new furnace and more workers. He buys without selling." },
        {
          caption: "Across the whole town, some owners are always saving while others are spending. Growth only runs smoothly if the two roughly match, and nothing makes sure they do.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const a = [0, 0.34, 1, 1, 1][s];
        const b = [1, 1, 1, 0, 0][s];
        return (
          <>
            <line x1="180" y1="20" x2="180" y2="205" stroke="#000" strokeOpacity=".12" />

            {/* the one who saves */}
            <text x="90" y="26" textAnchor="middle" fontSize="10" fontWeight="700">
              sells without buying
            </text>
            <Figure name="Ironmaster A" x={52} y={200} scale={0.8} />
            <g transform="translate(118 176)">
              <Chest open={s >= 1 && s <= 2} />
            </g>
            <Fill x={150} y={170} level={a} />
            <Place x={s >= 1 ? 118 : 70} y={s >= 1 ? 150 : 60} show={s >= 1 && s <= 2}>
              <Coins n={3} />
            </Place>
            <Place x={s >= 1 ? 30 : 70} y={60} scale={0.8} show={s <= 2}>
              <Gear r={11} />
            </Place>
            <Fade show={s >= 1}>
              <text x="62" y="82" textAnchor="middle" fontSize="8.5">
                iron sold
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="96" y="122" textAnchor="middle" fontSize="8.5" fill="#8a6d00" fontWeight="600">
                potential capital
              </text>
            </Fade>

            {/* the one who spends */}
            <text x="270" y="26" textAnchor="middle" fontSize="10" fontWeight="700">
              buys without selling
            </text>
            <Figure name="Ironmaster B" x={232} y={200} scale={0.8} mood={s >= 3 ? "wow" : "happy"} />
            <g transform="translate(298 176)">
              <Chest open={s >= 3} />
            </g>
            <Fill x={330} y={170} level={b} />
            <Place x={s >= 3 ? 290 : 298} y={s >= 3 ? 64 : 150} scale={1.1} show={s >= 3}>
              <MoneyBag label="spent" />
            </Place>
            <Fade show={s >= 3} delay={500}>
              <g transform="translate(240 70)">
                <rect x="-22" y="-20" width="44" height="36" fill={DEPT_I} stroke="#000" />
                <path d="M-8,-20 v-14 h16 v14" fill="#555" stroke="#000" />
                <path d="M-10,10 q10,-16 20,0" fill="#ff8a3d" />
              </g>
              <text x="240" y="104" textAnchor="middle" fontSize="8.5">
                new furnace
              </text>
            </Fade>

            <Fade show={s === 4} delay={300}>
              <text x="180" y="140" textAnchor="middle" fontSize="16" fontWeight="700">
                =?
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.2 · Marx's first illustration (expanded reproduction)
 * Numbers exactly as in Vol II, Ch 21, section III, 1.
 * ───────────────────────────────────────────────────────────── */
const YEARS = [9000, 9800, 10780, 11858, 13043, 14348];
const U = 0.03;

export function TheFirstIllustration() {
  return (
    <Player
      id="anim-v2-21-2"
      title="21.2 · A town that grows"
      steps={[
        { caption: "Marx's own example of a growing economy. Year one: Department I makes 4,000c + 1,000v + 1,000s. Department II makes 1,500c + 750v + 750s. Still 9,000 in all." },
        { caption: "The owners in Department I eat only half their surplus (500). The other 500 goes back to work: 400 for more machines and iron, 100 for more workers. Their capital becomes 4,400c + 1,100v.", ms: 5200 },
        { caption: "Department II buys those 100 of extra machines and hires 50 more workers. Its capital becomes 1,600c + 800v, and its owners eat 600.", ms: 4600 },
        { caption: "Next year both departments work with the bigger capital. Department I makes 6,600 and Department II 3,200: 9,800 instead of 9,000.", ms: 4400 },
        {
          caption: "Keep repeating and the town grows every year: 9,800, 10,780, 11,858, 13,043, 14,348. Marx: in five years the capital rose from 7,250 to 11,566, as 100 to 160.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const yearTwo = s >= 3;
        return (
          <>
            {/* the departments, year by year */}
            <g style={{ opacity: s === 4 ? 0 : 1, transition: "opacity 500ms" }}>
              <text x="40" y="34" fontSize="10" fontWeight="600">
                {yearTwo ? "year two" : "year one"}
              </text>
              <SchemeRow
                x={40}
                y={50}
                unit={U}
                c={s >= 1 ? 4400 : 4000}
                v={s >= 1 ? 1100 : 1000}
                s={s >= 3 ? 1100 : s >= 1 ? 500 : 1000}
                name="I"
              />
              <SchemeRow
                x={40}
                y={110}
                unit={U}
                c={s >= 2 ? 1600 : 1500}
                v={s >= 2 ? 800 : 750}
                s={s >= 3 ? 800 : s >= 2 ? 600 : 750}
                name="II"
              />
              <Fade show={s >= 1 && s <= 2}>
                <text x="40" y="84" fontSize="9" fill="#8a6d00">
                  gold now = what I&apos;s owners eat
                </text>
              </Fade>
              <Fade show={s === 1}>
                <text x="40" y="96" fontSize="9" fontWeight="600">
                  +400 machines, +100 workers, from I&apos;s surplus
                </text>
              </Fade>
              <Fade show={s === 2}>
                <text x="40" y="146" fontSize="9" fontWeight="600">
                  +100 machines bought from I, +50 workers
                </text>
              </Fade>
              <Fade show={s >= 3}>
                <text x="180" y="176" textAnchor="middle" fontSize="12" fontWeight="700">
                  6,600 + 3,200 = 9,800
                </text>
              </Fade>
            </g>

            {/* the growth over the years */}
            <Fade show={s === 4}>
              <text x="180" y="24" textAnchor="middle" fontSize="10" fontWeight="600">
                the whole town&apos;s product, year by year
              </text>
              {YEARS.map((v, i) => {
                const h = (v / 14348) * 140;
                return (
                  <g key={v}>
                    <rect
                      x={34 + i * 50}
                      y={186 - h}
                      width="34"
                      height={h}
                      fill={i === 0 ? TONE.cotton : TONE.surplus}
                      stroke="#000"
                      style={{ transform: `scaleY(${s === 4 ? 1 : 0})`, transformOrigin: `0 186px`, transition: `transform ${T} ${i * 160}ms` }}
                    />
                    <text x={51 + i * 50} y={180 - h} textAnchor="middle" fontSize="8.5" fontWeight="600">
                      {v.toLocaleString("en-GB")}
                    </text>
                    <text x={51 + i * 50} y="200" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                      {i === 0 ? "start" : `+${i} yr`}
                    </text>
                  </g>
                );
              })}
              <text x="180" y="218" textAnchor="middle" fontSize="9.5">
                capital: 7,250 → 11,566 in five years (100 → 160)
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.3 · The balance that nobody holds
 * Marx's three cases: I(v + ½s) equal to, bigger than, or smaller
 * than IIc. When IIc is bigger: over-production in II, "a great crash".
 * ───────────────────────────────────────────────────────────── */
export function TheBalance() {
  return (
    <Player
      id="anim-v2-21-3"
      title="21.3 · A balance nobody is holding"
      steps={[
        { caption: "On one side: what Department I's workers and owners want to spend on food and clothes, I (v + ½s). On the other: the new machines Department II needs, II c." },
        { caption: "In Marx's growing town they match: 1,000 + 500 = 1,500 on one side, 1,500 on the other. Everything sells and both departments grow." },
        { caption: "Next year Department I wants 1,650 of food but II c is only 1,600. The fix: II puts 50 of its own surplus into new machines, and grows faster too.", ms: 4800 },
        { caption: "But nobody plans this. Each owner decides alone. If Department II ever builds more than Department I can buy, bread and coats pile up unsold.", ms: 4600 },
        {
          caption: "Marx calls that over-production in II, settled only by “a great crash”. He sums up: the process is so complicated it offers “ever so many occasions for running abnormally”.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const deg = [0, 0, -7, 0, 9][s];
        const left = ["I (v + ½s)", "1,000 + 500", "1,100 + 550", "I (v + ½s)", "I (v + ½s)"][s];
        const right = ["II c", "1,500", s === 2 ? "1,600 + 50" : "II c", "II c", "II c"][s];
        return (
          <>
            {/* the stand */}
            <polygon points="180,120 166,170 194,170" fill="#000" />
            <g style={{ transformOrigin: "180px 118px", transform: `rotate(${deg}deg)`, transition: `transform ${T}` }}>
              <line x1="60" y1="118" x2="300" y2="118" stroke="#000" strokeWidth="4" />
              {/* left pan: Department I's spending on consumer goods */}
              <g transform="translate(80 118)">
                <line x1="0" y1="0" x2="0" y2="-18" stroke="#000" />
                <rect x="-46" y="-50" width="92" height="32" fill="#fff" stroke={DEPT_I} strokeWidth="2.5" />
                <text y="-36" textAnchor="middle" fontSize="9" fontWeight="600">
                  {left}
                </text>
                <text y="-25" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                  I wants bread
                </text>
              </g>
              {/* right pan: Department II's need for machines */}
              <g transform="translate(280 118)">
                <line x1="0" y1="0" x2="0" y2="-18" stroke="#000" />
                <rect x="-46" y="-50" width="92" height="32" fill="#fff" stroke={DEPT_II} strokeWidth="2.5" />
                <text y="-36" textAnchor="middle" fontSize="9" fontWeight="600">
                  {right}
                </text>
                <text y="-25" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                  II wants machines
                </text>
              </g>
            </g>

            <Fade show={s === 1 || s === 2}>
              <text x="180" y="194" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2a9d5b">
                {s === 2 ? "II tops up from its own surplus" : "balanced: everything sells"}
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="194" textAnchor="middle" fontSize="11" fontWeight="700">
                no one is holding the scale
              </text>
            </Fade>

            {/* unsold goods pile up on Department II's side */}
            <Fade show={s === 4} delay={300}>
              {Array.from({ length: 5 }, (_, i) => (
                <g key={i} transform={`translate(${262 + (i % 3) * 22} ${190 - Math.floor(i / 3) * 16})`}>
                  <path d="M-10,4 Q-11,-5 0,-6 Q11,-5 10,4 Z" fill={DEPT_II} stroke="#000" strokeWidth=".8" />
                </g>
              ))}
              <text x="286" y="214" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                unsold
              </text>
              <text x="110" y="200" textAnchor="middle" fontSize="12" fontWeight="700" fill="#d6452f">
                a great crash
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
