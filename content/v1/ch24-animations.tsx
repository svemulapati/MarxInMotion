"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coins, Fade, Place, Tick } from "@/components/anim/Things";
import { Bar, Spindle, TONE } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 24.1 · The circle becomes a spiral (surplus-value turned into capital)
 * Marx's own numbers: £10,000 (four-fifths constant, one-fifth wages,
 * rate 100%) brings £2,000; that £2,000 brings £400; that £400 brings £80.
 * ───────────────────────────────────────────────────────────── */
const UNIT = 0.02; // pixels per coin: 10,000 coins = 200 px
const BX = 104;
const ROWS = [
  { y: 52, label: "first capital", c: 8000, v: 2000, s: 2000 },
  { y: 112, label: "the 2,000 put back", c: 1600, v: 400, s: 400 },
  { y: 162, label: "the 400 put back", c: 320, v: 80, s: 80 },
];

export function CircleBecomesSpiral() {
  return (
    <Player
      id="anim-24-1"
      title="24.1 · The circle becomes a spiral"
      steps={[
        { caption: "To watch a whole year, Marx imagines a big spinning mill. Mr. Moneybags puts in 10,000 coins: 8,000 for cotton and machines, 2,000 for wages." },
        { caption: "The year's yarn sells for 12,000 coins. That is 2,000 more than he put in: the surplus-value." },
        {
          caption: "Last chapter he spent the extra on himself. This time he puts it back to work: 1,600 for more cotton and machines, 400 to hire more spinners. Marx calls this accumulation.",
          ms: 5200,
        },
        {
          caption: "The new 2,000 makes its own extra, 400 coins. That is put to work too, and makes 80 more. Marx jokes it is the old story: Abraham begat Isaac, Isaac begat Jacob.",
          ms: 5200,
        },
        { caption: "So each year the workshop starts again, bigger than before. Marx borrows a word from another economist, Sismondi: the circle has become a spiral.", ms: 4800 },
      ]}
    >
      {(s) => (
        <>
          {/* legend */}
          {[
            { c: TONE.cotton, t: "cotton and machines", x: 12 },
            { c: TONE.wage, t: "wages", x: 128 },
            { c: TONE.surplus, t: "surplus-value", x: 186 },
          ].map((k) => (
            <g key={k.t}>
              <rect x={k.x} y="12" width="10" height="10" fill={k.c} stroke="#000" strokeWidth=".8" />
              <text x={k.x + 14} y="21" fontSize="9">
                {k.t}
              </text>
            </g>
          ))}

          {ROWS.map((r, i) => {
            const shown = i === 0 || s >= i + 1;
            const surplusShown = i === 0 ? s >= 1 : s >= 3;
            return (
              <Fade key={r.label} show={shown} delay={i === 0 ? 0 : 500}>
                <text x="12" y={r.y + 15} fontSize="9.5">
                  {r.label}
                </text>
                <Bar
                  x={BX}
                  y={r.y}
                  unit={UNIT}
                  h={22}
                  segs={[
                    { n: r.c, color: TONE.cotton, label: i === 0 ? "8,000" : i === 1 ? "1,600" : undefined },
                    { n: r.v, color: TONE.wage, label: i === 0 ? "2,000" : undefined },
                    { n: r.s, color: TONE.surplus, label: i === 0 ? "+2,000" : undefined, show: surplusShown },
                  ]}
                />
                {i > 0 && (
                  <Fade show={surplusShown} delay={600}>
                    <text x={BX + (r.c + r.v + r.s) * UNIT + 6} y={r.y + 15} fontSize="9.5" fontWeight="600">
                      makes {r.s.toLocaleString("en-US")} more
                    </text>
                  </Fade>
                )}
              </Fade>
            );
          })}

          {/* the surplus drops down to become new capital */}
          <Fade show={s >= 2} delay={200}>
            <path d={`M${BX + 220},76 C${BX + 220},96 ${BX + 60},92 ${BX + 30},108`} fill="none" stroke="#000" strokeDasharray="3 3" />
            <text x="250" y="127" fontSize="8.5" fillOpacity=".7">
              + more spinners hired
            </text>
          </Fade>
          <Fade show={s >= 3} delay={1200}>
            <path d={`M${BX + 46},136 C${BX + 46},150 ${BX + 20},150 ${BX + 8},158`} fill="none" stroke="#000" strokeDasharray="3 3" />
            <text x="12" y="208" fontSize="9.5" fillOpacity=".7">
              and so the ball rolls on...
            </text>
          </Fade>

          {/* circle to spiral */}
          <Fade show={s === 4} delay={300}>
            <path
              d="M310,176 a4,4 0 1,1 6,3 a9,9 0 1,1 -14,-8 a15,15 0 1,1 24,13 a22,22 0 1,1 -36,-18"
              fill="none"
              stroke={TONE.surplus}
              strokeWidth="3"
              strokeLinecap="round"
              className="c24-draw"
            />
            <text x="312" y="214" textAnchor="middle" fontSize="9.5" fontWeight="600">
              a spiral
            </text>
          </Fade>
          <style>{`
            @keyframes c24-draw { from { stroke-dashoffset: 260; } to { stroke-dashoffset: 0; } }
            .c24-draw { stroke-dasharray: 260; animation: c24-draw 1.6s ease-out forwards; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 24.2 · Whose coins paid for the new spinners?
 * (the laws of commodity exchange turn into their very opposite)
 * ───────────────────────────────────────────────────────────── */
const WORKERS = [
  { who: "sam" as const, x: 182 },
  { name: "Kim", x: 222 },
  { name: "Raj", x: 262 },
];
const NEW = [302, 342];

export function WhoseCoins() {
  return (
    <Player
      id="anim-24-2"
      title="24.2 · Whose coins paid for the new spinners?"
      steps={[
        { caption: "Suppose Mr. Moneybags earned his very first coins by his own hard work. Marx is happy to assume this, to be fair to him." },
        { caption: "He pays Sam and the others the full value of their labour-power. Every swap is fair. Nobody is cheated." },
        { caption: "But in the unpaid hours of their day the spinners make more than their wages: a pile of surplus-value that now belongs to Mr. Moneybags." },
        {
          caption: "Next year he uses that pile to hire two new spinners. So the new spinners are paid with coins that earlier workers made and were never paid for.",
          ms: 5000,
        },
        {
          caption: "Marx says the rules of fair swapping have turned into their very opposite. Owning now means the right to take other people's unpaid labour, though not one swap was unfair.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="moneybags" x={52} y={204} scale={0.85} />

          {/* his own first coins */}
          <Place x={62} y={92}>
            <Coins n={3} />
            <text y="22" textAnchor="middle" fontSize="8.5">
              his first coins
            </text>
            <text y="32" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              (his own work)
            </text>
          </Place>

          {/* the workers */}
          {WORKERS.map((w) => (
            <Figure key={w.x} who={w.who} name={w.name} x={w.x} y={204} scale={0.75} />
          ))}
          {NEW.map((x, i) => (
            <Figure key={x} name="new" x={x} y={204} scale={0.75} style={{ opacity: s >= 3 ? 1 : 0, transition: `opacity 500ms ease ${300 + i * 200}ms` }} />
          ))}

          {/* fair wages, paid out of his first coins */}
          {WORKERS.map((w, i) => (
            <Place key={w.x} x={s >= 1 ? w.x : 62} y={s >= 1 ? 140 : 92} show={s >= 1} delay={i * 150}>
              <Coins n={1} />
            </Place>
          ))}
          <Fade show={s === 1} delay={700}>
            <g transform="translate(222 118)">
              <Tick />
            </g>
            <text x="222" y="108" textAnchor="middle" fontSize="9" fontWeight="600">
              fair wages
            </text>
          </Fade>

          {/* the surplus pile the workers made */}
          <Place x={s >= 3 ? 326 : 222} y={s >= 3 ? 96 : 70} show={s >= 2}>
            <Coins n={3} />
            <rect x="-16" y="-7" width="32" height="14" fill={TONE.surplus} fillOpacity=".25" />
          </Place>
          <Fade show={s === 2} delay={400}>
            <text x="222" y="50" textAnchor="middle" fontSize="9.5" fontWeight="600">
              made in their unpaid hours
            </text>
          </Fade>
          <Fade show={s >= 3} delay={500}>
            <text x="354" y="72" textAnchor="end" fontSize="9" fontWeight="600">
              pays the new spinners
            </text>
            <text x="354" y="120" textAnchor="end" fontSize="8.5" fillOpacity=".7">
              (made by Sam, Kim, Raj)
            </text>
            <path d="M232,74 C262,92 290,96 308,96" fill="none" stroke="#000" strokeDasharray="3 3" style={{ opacity: s === 3 ? 1 : 0, transition: "opacity 400ms" }} />
          </Fade>

          {/* the verdict */}
          <Fade show={s === 4} delay={300}>
            <rect x="96" y="14" width="250" height="40" fill="#000" />
            <text x="221" y="30" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
              fair swaps, turned into their opposite
            </text>
            <text x="221" y="45" textAnchor="middle" fontSize="9" fill="#fff">
              workers&apos; past work now employs them
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 24.3 · Two souls in one breast (revenue or capital; abstinence)
 * ───────────────────────────────────────────────────────────── */
/** [for himself, into the workshop], in pixels of bar height, per step. */
const SPLIT: [number, number][] = [
  [0, 0],
  [10, 76],
  [34, 84],
  [30, 104],
  [30, 104],
];
const BASE = 172;

function Cake() {
  return (
    <g>
      <rect x="-13" y="-6" width="26" height="14" fill="#f0c9d8" stroke="#000" strokeWidth="1" />
      <rect x="-13" y="-10" width="26" height="5" fill="#fff" stroke="#000" strokeWidth="1" />
      <circle cx="0" cy="-13" r="3" fill="#d6452f" stroke="#000" strokeWidth=".8" />
    </g>
  );
}

function Mill() {
  return (
    <g>
      <rect x="-26" y="-22" width="52" height="40" fill="#cfcfcf" stroke="#000" strokeWidth="1.2" />
      <rect x="12" y="-46" width="9" height="24" fill="#9a9a9a" stroke="#000" strokeWidth="1" />
      {[-16, -2, 12].map((x) => (
        <rect key={x} x={x} y="-10" width="8" height="8" fill="#fff" stroke="#000" strokeWidth=".8" />
      ))}
    </g>
  );
}

export function TwoSouls() {
  return (
    <Player
      id="anim-24-3"
      title="24.3 · Two souls in one breast"
      steps={[
        { caption: "Every year Mr. Moneybags must choose: spend this year's surplus on himself, or turn it into more capital." },
        { caption: "Bosses just starting out save nearly everything. Spending on yourself feels almost like a sin against the business." },
        {
          caption: "Later, some luxury becomes part of the job: fine dinners show he is rich and help him borrow. Marx calls this a Faustian conflict, two souls in one breast.",
          ms: 4800,
        },
        {
          caption: "But he can never stop growing. A rival with a bigger mill would beat him. Competition makes it a law, and Marx sums it up in the old economists' own motto: “Accumulate, accumulate! That is Moses and the prophets!”",
          ms: 5600,
        },
        {
          caption: "Nassau Senior called the saved part a reward for the boss's “abstinence”, his going without. Marx laughed: the people really going without are the workers.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const [mine, mill] = SPLIT[s];
        return (
          <>
            {/* this year's surplus */}
            <Place x={180} y={30} scale={s >= 2 ? 1.25 : 1}>
              <Coins n={s >= 2 ? 5 : 4} />
            </Place>
            <text x="180" y="56" textAnchor="middle" fontSize="9">
              this year&apos;s surplus
            </text>

            {/* the two piles */}
            <rect x="58" y={BASE - mine} width="44" height={mine} fill="#f0c9d8" stroke="#000" strokeWidth={mine ? 1 : 0} style={{ transition: `all ${T}` }} />
            <rect x="258" y={BASE - mill} width="44" height={mill} fill={TONE.surplus} stroke="#000" strokeWidth={mill ? 1 : 0} style={{ transition: `all ${T}` }} />
            <line x1="40" y1={BASE} x2="320" y2={BASE} stroke="#000" strokeOpacity=".3" />
            <g transform={`translate(80 ${BASE + 18})`}>
              <Cake />
            </g>
            <text x="80" y={BASE + 40} textAnchor="middle" fontSize="9">
              for himself
            </text>
            <g transform={`translate(280 ${BASE + 20}) scale(.6)`}>
              <Spindle />
            </g>
            <text x="280" y={BASE + 40} textAnchor="middle" fontSize="9">
              into the workshop
            </text>

            {/* the boss in the middle */}
            <Figure who="moneybags" x={180} y={160} scale={0.85} label={false} mood={s === 3 ? "wow" : "happy"} />
            <Fade show={s === 2} delay={400}>
              <text x="180" y="78" textAnchor="middle" fontSize="9.5" fontWeight="600">
                two souls, one breast
              </text>
            </Fade>

            {/* the rival */}
            <g style={{ opacity: s === 3 ? 1 : 0, transition: "opacity 500ms" }}>
              <g transform="translate(334 112)">
                <Mill />
              </g>
              <text x="334" y="142" textAnchor="middle" fontSize="8.5">
                a rival
              </text>
            </g>

            {/* Senior and the workers */}
            <g style={{ opacity: s === 4 ? 1 : 0, transition: "opacity 500ms" }}>
              <Figure name="Prof. Senior" x={128} y={160} scale={0.75} />
              <g transform="translate(16 78)">
                <Bubble w={128} lines={["Profit rewards his", "“abstinence”!"]} />
              </g>
              <Figure who="sam" x={232} y={160} scale={0.75} mood="sad" />
              <text x="232" y="88" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                who really
              </text>
              <text x="232" y="98" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                goes without?
              </text>
            </g>
          </>
        );
      }}
    </Player>
  );
}
