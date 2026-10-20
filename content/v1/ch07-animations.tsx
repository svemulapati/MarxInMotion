"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade, Place, Tick } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

/* ─────────────────────────────────────────────────────────────
 * Spinning-workshop drawings and value bars, shared by Ch 7 to 9.
 * Workshop numbers follow CONTINUITY.md (Marx's own, Ch 7).
 * ───────────────────────────────────────────────────────────── */

/** Colours for the parts of value, used the same way in every chapter. */
export const TONE = {
  cotton: "#d4d4d4",
  spindle: "#a9a9a9",
  wage: CAST.sam.color,
  surplus: "#e6b800",
};

/** A fluffy bale of raw cotton. */
export const Cotton = () => (
  <g>
    {[
      [-9, 2, 8],
      [0, -4, 9],
      [9, 2, 8],
      [-4, 6, 7],
      [5, 7, 7],
    ].map(([x, y, r], i) => (
      <circle key={i} cx={x} cy={y} r={r} fill="#fff" stroke="#000" strokeWidth="1" />
    ))}
  </g>
);

/** A hand spindle: a stick with a round whorl and some yarn on it. */
export const Spindle = () => (
  <g>
    <line x1="0" y1="-22" x2="0" y2="20" stroke="#6b4a2b" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="0" cy="-6" rx="6" ry="9" fill="#f3e3b3" stroke="#000" strokeWidth="1" />
    <ellipse cx="0" cy="12" rx="11" ry="3.5" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
  </g>
);

/** A skein of finished yarn. */
export const Yarn = ({ fill = "#f3e3b3" }: { fill?: string }) => (
  <g>
    <ellipse cx="0" cy="0" rx="14" ry="9" fill={fill} stroke="#000" strokeWidth="1.1" />
    <path d="M-12,-3 Q0,4 12,-3 M-12,2 Q0,9 12,2" fill="none" stroke="#000" strokeOpacity=".35" />
  </g>
);

export interface Seg {
  n: number;
  color: string;
  label?: string;
  show?: boolean;
}

/**
 * A horizontal bar of value, one segment per part. `unit` is pixels per coin
 * (or per hour). Hidden segments shrink to nothing, so parts grow in when shown.
 */
export function Bar({ x, y, unit, segs, h = 18, delay = 0 }: { x: number; y: number; unit: number; segs: Seg[]; h?: number; delay?: number }) {
  const widths = segs.map((s) => (s.show !== false ? s.n * unit : 0));
  const lefts = widths.map((_, i) => x + widths.slice(0, i).reduce((a, b) => a + b, 0));
  return (
    <g>
      {segs.map((s, i) => {
        const on = s.show !== false;
        const w = widths[i];
        const left = lefts[i];
        return (
          <g key={i}>
            <rect
              x={left}
              y={y}
              width={w}
              height={h}
              fill={s.color}
              stroke="#000"
              strokeWidth={on ? 1 : 0}
              style={{ transition: `width 700ms cubic-bezier(.2,.8,.2,1) ${delay + i * 120}ms, x 700ms cubic-bezier(.2,.8,.2,1)` }}
            />
            {s.label && (
              <text
                x={left + w / 2}
                y={y + h / 2 + 3.5}
                textAnchor="middle"
                fontSize="9"
                fill={s.color === TONE.wage ? "#fff" : "#000"}
                style={{ opacity: on ? 1 : 0, transition: `opacity 400ms ease ${on ? 500 + delay + i * 120 : 0}ms` }}
              >
                {s.label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 7.1 · The bee and the architect (the labour process)
 * ───────────────────────────────────────────────────────────── */
function Honeycomb() {
  const hex = (cx: number, cy: number) => {
    const pts = Array.from({ length: 6 }, (_, k) => {
      const a = (Math.PI / 3) * k;
      return `${(cx + 9 * Math.cos(a)).toFixed(1)},${(cy + 9 * Math.sin(a)).toFixed(1)}`;
    });
    return pts.join(" ");
  };
  const cells = [
    [0, 0],
    [13.5, 7.8],
    [13.5, -7.8],
    [0, 15.6],
    [-13.5, 7.8],
    [-13.5, -7.8],
    [0, -15.6],
  ];
  return (
    <g>
      {cells.map(([x, y], i) => (
        <polygon key={i} points={hex(x, y)} fill="#f5d061" stroke="#8a6d00" strokeWidth="1" />
      ))}
    </g>
  );
}

function Bee() {
  return (
    <g>
      <ellipse cx="-3" cy="-7" rx="5" ry="3.5" fill="#fff" stroke="#000" strokeWidth=".8" opacity=".9" />
      <ellipse cx="3" cy="-7" rx="5" ry="3.5" fill="#fff" stroke="#000" strokeWidth=".8" opacity=".9" />
      <ellipse rx="8" ry="5.5" fill="#e6b800" stroke="#000" strokeWidth="1" />
      <path d="M-3,-5 v10 M2,-5.5 v11" stroke="#000" strokeWidth="1.6" />
      <circle cx="8" cy="0" r="1" fill="#000" />
    </g>
  );
}

export function TheBeeAndTheArchitect() {
  return (
    <Player
      id="anim-7-1"
      title="7.1 · The bee and the architect"
      steps={[
        { caption: "A bee builds beautiful wax cells, perfect every time. But she builds them by instinct. She never decides to." },
        {
          caption: "Sam is different. Before he spins, he already pictures the yarn in his head. Marx says even the worst architect beats the best bee, because the plan comes first.",
          ms: 4400,
        },
        { caption: "Every kind of work has three parts: the work itself (Sam), the thing worked on (cotton), and the tool (the spindle)." },
        { caption: "Put them together and out comes a useful product: yarn. Marx calls this the labour process. It happens in every kind of society." },
        {
          caption: "But in Mr. Moneybags' workshop two things change. The boss watches over the work, and the yarn belongs to the boss, not to Sam.",
          ms: 4600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the bee and her cells */}
          <Fade show={s <= 1}>
            <g transform="translate(70 100)">
              <Honeycomb />
            </g>
            <g className="c07-buzz">
              <g transform="translate(104 64)">
                <Bee />
              </g>
            </g>
            <text x="70" y="146" textAnchor="middle" fontSize="9">
              by instinct
            </text>
          </Fade>

          {/* Sam, who plans first */}
          <Figure who="sam" x={s <= 1 ? 250 : 70} y={204} mood={s === 1 ? "wow" : "happy"} />
          <Fade show={s === 1}>
            <circle cx="232" cy="130" r="2.5" fill="#fff" stroke="#000" />
            <circle cx="226" cy="120" r="3.5" fill="#fff" stroke="#000" />
            <ellipse cx="200" cy="90" rx="38" ry="26" fill="#fff" stroke="#000" />
            <g transform="translate(200 92)">
              <Yarn />
            </g>
            <text x="200" y="74" textAnchor="middle" fontSize="8" fillOpacity=".6">
              the plan
            </text>
          </Fade>

          {/* the three parts of every labour process */}
          <Place x={s === 3 ? 165 : 180} y={150} show={s >= 2 && s <= 3}>
            <Cotton />
          </Place>
          <Place x={s === 3 ? 195 : 290} y={150} show={s >= 2 && s <= 3}>
            <Spindle />
          </Place>
          <Fade show={s === 2}>
            <text x="70" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
              1. the work
            </text>
            <text x="180" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
              2. what is worked on
            </text>
            <text x="290" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
              3. the tool
            </text>
            <text x="180" y="186" textAnchor="middle" fontSize="9">
              cotton
            </text>
            <text x="290" y="186" textAnchor="middle" fontSize="9">
              spindle
            </text>
          </Fade>

          {/* the product */}
          <Place x={s === 4 ? 324 : 180} y={s === 4 ? 176 : 80} scale={s === 4 ? 1.2 : 1.4} show={s >= 3}>
            <Yarn />
          </Place>
          <Fade show={s === 3}>
            <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              work + material + tool = yarn
            </text>
          </Fade>

          {/* under capital: control and ownership */}
          <Fade show={s === 4}>
            <Figure who="moneybags" x={280} y={204} />
            <path d="M262,140 Q160,90 92,140" fill="none" stroke="#000" strokeDasharray="4 3" markerEnd="url(#c07eye)" />
            <text x="176" y="96" textAnchor="middle" fontSize="9.5">
              the boss directs the work
            </text>
            <g transform="translate(340 150)">
              <Tick />
            </g>
            <text x="300" y="118" textAnchor="middle" fontSize="9.5">
              the yarn is his
            </text>
          </Fade>
          <defs>
            <marker id="c07eye" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
          <style>{`
            @keyframes c07-buzz { 0%,100% { transform: translate(0,0) } 25% { transform: translate(-14px,6px) } 50% { transform: translate(-4px,14px) } 75% { transform: translate(8px,4px) } }
            .c07-buzz { animation: c07-buzz 3s ease-in-out infinite; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.2 · A six-hour day: nothing extra (value in, value out)
 * ───────────────────────────────────────────────────────────── */
const U6 = 14; // pixels per coin

export function TheSixHourDay() {
  return (
    <Player
      id="anim-7-2"
      title="7.2 · A six-hour day: nothing extra"
      steps={[
        { caption: "Mr. Moneybags buys 10 lb of cotton for 10 coins. He also pays 2 coins for the wear on his spindle, and 3 coins for a day of Sam's labour-power. 15 coins in all." },
        { caption: "Sam spins for 6 hours. The value of the cotton and of the spindle wear moves into the yarn. Sam's 6 hours of work add 3 coins of new value." },
        { caption: "The 10 lb of yarn are worth 15 coins. Mr. Moneybags put in 15 and gets back 15. Marx says he “stares in astonishment”. There is nothing extra!" },
        {
          caption: "He tries excuses: his sacrifice, the cotton and spindle he supplied, his own hard work watching Sam. In Marx's telling he drops them himself with a hearty laugh. Excuses do not make value.",
          ms: 4400,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="12" y="52" fontSize="10" fontWeight="600">
            paid out
          </text>
          <Bar
            x={84}
            y={38}
            unit={U6}
            segs={[
              { n: 10, color: TONE.cotton, label: "cotton 10" },
              { n: 2, color: TONE.spindle, label: "2" },
              { n: 3, color: TONE.wage, label: "Sam 3" },
            ]}
          />
          <text x={84 + 15 * U6 + 6} y="51" fontSize="10" fontWeight="600">
            15
          </text>

          <Fade show={s >= 1}>
            <text x="12" y="102" fontSize="10" fontWeight="600">
              yarn
            </text>
          </Fade>
          <Bar
            x={84}
            y={88}
            unit={U6}
            segs={[
              { n: 10, color: TONE.cotton, label: "cotton 10", show: s >= 1 },
              { n: 2, color: TONE.spindle, label: "2", show: s >= 1 },
              { n: 3, color: TONE.wage, label: "new 3", show: s >= 1 },
            ]}
            delay={200}
          />
          <Fade show={s >= 1} delay={900}>
            <text x={84 + 15 * U6 + 6} y="101" fontSize="10" fontWeight="600">
              15
            </text>
            <text x="84" y="124" fontSize="8.5" fillOpacity=".6">
              6 hours of spinning: 10 lb of yarn
            </text>
          </Fade>

          <Fade show={s >= 2}>
            <text x="190" y="150" textAnchor="middle" fontSize="13" fontWeight="600">
              15 in, 15 out: nothing extra
            </text>
          </Fade>

          <Figure who="moneybags" x={52} y={204} scale={0.8} mood={s === 2 ? "wow" : s === 3 ? "sad" : "happy"} />
          <Figure who="sam" x={320} y={204} scale={0.8} />
          <Fade show={s === 3}>
            <g transform="translate(72 196)">
              <Bubble w={132} lines={["My sacrifice! My cotton!", "My hard work watching!"]} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.3 · A twelve-hour day: the trick succeeds
 * ───────────────────────────────────────────────────────────── */
const U12 = 8; // pixels per coin
const UH = 20; // pixels per hour

export function TheTrickSucceeds() {
  return (
    <Player
      id="anim-7-3"
      title="7.3 · A twelve-hour day: the trick succeeds"
      steps={[
        {
          caption: "Here is the secret. Sam's labour-power costs 3 coins a day, because 6 hours of work make his food, rent and clothes for a day. But Mr. Moneybags bought the whole day, and Sam can work for 12.",
          ms: 5200,
        },
        { caption: "So Sam works 12 hours. Now Mr. Moneybags pays 20 coins of cotton, 4 coins of spindle wear, and the same 3-coin wage: 27 coins." },
        { caption: "In 12 hours Sam spins 20 lb of yarn. The old value of cotton and spindle (24 coins) moves into it, and Sam's 12 hours add 6 coins of new value. The yarn is worth 30." },
        { caption: "27 coins went in and 30 come out. The extra 3 coins are surplus-value. In Marx's words: “The trick has at last succeeded”. Money has become capital." },
        {
          caption: "And nobody cheated. Cotton, spindle and labour-power were all bought at their value, and the yarn sold at its value. The extra comes from the gap between what Sam's labour-power costs and how much value it can create.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the gap between the cost of labour-power and what it can do */}
          <Fade show={s === 0}>
            <text x="12" y="46" fontSize="9.5" fontWeight="600">
              what Sam&apos;s day costs to make
            </text>
            <Bar x={60} y={52} unit={UH} segs={[{ n: 6, color: TONE.wage, label: "6 hours = 3 coins" }]} />
            <text x="12" y="104" fontSize="9.5" fontWeight="600">
              how long Sam can work
            </text>
            <Bar
              x={60}
              y={110}
              unit={UH}
              segs={[
                { n: 6, color: TONE.wage, label: "6 hours" },
                { n: 6, color: TONE.surplus, label: "6 more hours" },
              ]}
            />
          </Fade>

          {/* paid out vs the yarn */}
          <Fade show={s >= 1}>
            <text x="12" y="50" fontSize="10" fontWeight="600">
              paid out
            </text>
            <text x="12" y="100" fontSize="10" fontWeight="600">
              yarn
            </text>
          </Fade>
          <Bar
            x={70}
            y={36}
            unit={U12}
            segs={[
              { n: 20, color: TONE.cotton, label: "cotton 20", show: s >= 1 },
              { n: 4, color: TONE.spindle, label: "4", show: s >= 1 },
              { n: 3, color: TONE.wage, label: "3", show: s >= 1 },
            ]}
          />
          <Fade show={s >= 1} delay={700}>
            <text x={70 + 27 * U12 + 6} y="49" fontSize="10" fontWeight="600">
              27
            </text>
          </Fade>
          <Bar
            x={70}
            y={86}
            unit={U12}
            segs={[
              { n: 24, color: TONE.cotton, label: "old value 24", show: s >= 2 },
              { n: 3, color: TONE.wage, label: "3", show: s >= 2 },
              { n: 3, color: TONE.surplus, label: "3", show: s >= 2 },
            ]}
          />
          <Fade show={s >= 2} delay={700}>
            <text x={70 + 30 * U12 + 6} y="99" fontSize="10" fontWeight="600">
              30
            </text>
            <text x={70 + 24 * U12 + 24} y="120" textAnchor="middle" fontSize="8.5" fillOpacity=".7">
              new value 6
            </text>
            <path
              d={`M${70 + 24 * U12},108 v4 h${6 * U12} v-4`}
              fill="none"
              stroke="#000"
              strokeOpacity=".5"
            />
          </Fade>

          {/* the surplus */}
          <Fade show={s >= 3}>
            <text x={70 + 28.5 * U12} y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b38f00">
              +3
            </text>
            <text x="180" y="146" textAnchor="middle" fontSize="12" fontWeight="600">
              27 in, 30 out: surplus-value 3
            </text>
          </Fade>
          <Fade show={s === 4}>
            {["cotton at its value", "spindle at its value", "labour-power at its value", "yarn at its value"].map((t, i) => (
              <g key={t} transform={`translate(${i < 2 ? 112 : 232} ${168 + (i % 2) * 18})`}>
                <g transform="translate(-8 -3) scale(.7)">
                  <Tick />
                </g>
                <text x="2" y="0" fontSize="9">
                  {t}
                </text>
              </g>
            ))}
          </Fade>

          <Figure who="moneybags" x={40} y={204} scale={0.7} style={{ opacity: s >= 1 && s <= 3 ? 1 : 0, transition: `opacity 500ms, transform ${T}` }} />
          <Figure who="sam" x={326} y={204} scale={0.7} style={{ opacity: s <= 3 ? 1 : 0, transition: `opacity 500ms, transform ${T}` }} />
        </>
      )}
    </Player>
  );
}
