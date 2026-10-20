"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { Cotton } from "@/components/anim/Workshop";

const GRAY = "#bdbdbd";
const GOLD = "#e6b800";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 14.1 · Six brakes on the fall
 * Marx's six counteracting influences, in his order.
 * ───────────────────────────────────────────────────────────── */
const BRAKES = [
  "work harder, longer",
  "wages pushed below value",
  "cheaper machines, cheaper cotton",
  "the crowd at the gate",
  "trade with far countries",
  "capital that asks only interest",
];

export function SixBrakes() {
  return (
    <Player
      id="anim-v3-14-1"
      title="14.1 · Six brakes on the fall"
      steps={[
        { caption: "Left alone, Chapter 13's law would send the rate of profit sliding down fast, like the dashed line. But it falls much more slowly in real life. Why?" },
        { caption: "Brake one: make the workers work harder and longer. More surplus-value from the same wages. Marx covered this in Volume I." },
        { caption: "Brake two: push wages below the value of labour-power. Marx only mentions it, but calls it one of the most important." },
        { caption: "Brake three: the same new machines also make machines and cotton cheaper, so the pile of capital grows less in value than in size." },
        { caption: "Brake four: the crowd of out-of-work people at the gate. Cheap, plentiful hands keep old, labour-heavy trades going." },
        { caption: "Brake five: trade with far countries brings cheaper cotton and cheaper food, and can pay extra-high profits for a while." },
        { caption: "Brake six: some big capital, like railway shares, asks only for interest or a dividend, so it does not pull the average down." },
        {
          caption: "With all six pushing back, the fall slows down and wobbles. That is why Marx calls it a tendency, not a law that works in a straight line.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const b = Math.min(s, 6);
        const end = 196 - b * 17;
        return (
          <>
            {/* axes */}
            <line x1="22" y1="28" x2="22" y2="200" stroke="#000" strokeWidth="1" />
            <line x1="22" y1="200" x2="196" y2="200" stroke="#000" strokeWidth="1" />
            <text x="24" y="22" fontSize="8.5" fillOpacity=".6">
              rate of profit
            </text>
            <text x="196" y="212" textAnchor="end" fontSize="8.5" fillOpacity=".6">
              years →
            </text>

            {/* legend, in the empty top-right of the chart */}
            <line x1="110" y1="30" x2="130" y2="30" stroke="#d6452f" strokeWidth="2" strokeDasharray="5 4" />
            <text x="134" y="33" fontSize="8.5" fill="#d6452f">
              the law alone
            </text>
            <g style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 400ms" }}>
              <line x1="110" y1="44" x2="130" y2="44" stroke="#000" strokeWidth="3" />
              <text x="134" y="47" fontSize="8.5" fontWeight="600">
                what happens
              </text>
            </g>

            {/* the law alone */}
            <line x1="22" y1="40" x2="190" y2="196" stroke="#d6452f" strokeWidth="2" strokeDasharray="5 4" />

            {/* what actually happens: flatter with each brake, wobbling at the end */}
            <path
              d={s === 7 ? `M22,40 C60,60 80,52 105,${70 + (end - 40) * 0.3} S150,${end - 14} 190,${end}` : `M22,40 L190,${end}`}
              fill="none"
              stroke="#000"
              strokeWidth="3"
              style={{ opacity: s >= 1 ? 1 : 0, transition: `d ${T}, opacity 400ms` }}
            />

            {/* the list of brakes */}
            {BRAKES.map((label, i) => (
              <g key={label} style={{ opacity: s >= i + 1 ? 1 : 0.12, transition: "opacity 400ms" }}>
                <rect x="206" y={30 + i * 27} width="146" height="22" fill={s === i + 1 ? GOLD : "#fff"} stroke="#000" strokeWidth=".8" />
                <text x="212" y={45 + i * 27} fontSize="8.5">
                  {i + 1}. {label}
                </text>
              </g>
            ))}
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14.2 · Ten times the cotton, not ten times the cost
 * Marx's example: a factory spinner works up far more cotton than a
 * spinner at a wheel, but its value does not grow in proportion.
 * The ×10 and ×3 are illustrative.
 * ───────────────────────────────────────────────────────────── */
export function TenTimesTheCotton() {
  return (
    <Player
      id="anim-v3-14-2"
      title="14.2 · Ten times the cotton, not ten times the cost"
      steps={[
        { caption: "Long ago Sam's grandmother spun one bale of cotton at her wheel in the time it takes to boil a big pot of soup." },
        { caption: "In Mr. Moneybags' mill, Sam works up ten bales in the same time. Marx gives this very example: the cotton a factory spinner handles has grown enormously." },
        { caption: "So the pile of materials is ten times bigger. But is it ten times more expensive? No. Machines also make cotton growing, shipping and machine-building cheaper." },
        { caption: "Here its value has only tripled. (Made-up numbers to show the idea.) Marx: the value of constant capital does not grow as fast as its size." },
        {
          caption: "And the more slowly the value of the pile grows, the more slowly the rate of profit falls. The same progress that drives the rate down also holds it up.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const now = s >= 1;
        const bars = s >= 2;
        return (
          <>
            <line x1="180" y1="12" x2="180" y2="130" stroke="#000" strokeOpacity=".1" />
            <text x="90" y="22" textAnchor="middle" fontSize="10" fontWeight="600">
              at the wheel
            </text>
            <Figure name="" label={false} x={56} y={110} scale={0.7} />
            <g transform="translate(118 92)">
              <Cotton />
            </g>
            <text x="90" y="126" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              1 bale
            </text>

            <Fade show={now}>
              <text x="270" y="22" textAnchor="middle" fontSize="10" fontWeight="600">
                in the mill
              </text>
              <Figure who="sam" x={204} y={110} scale={0.7} />
              {Array.from({ length: 10 }, (_, i) => (
                <g key={i} transform={`translate(${236 + (i % 5) * 24} ${74 + Math.floor(i / 5) * 24}) scale(.8)`}>
                  <Cotton />
                </g>
              ))}
              <text x="290" y="126" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                10 bales
              </text>
            </Fade>

            <Fade show={bars}>
              <text x="20" y="150" fontSize="9" fillOpacity=".6">
                size of the pile
              </text>
              <rect x="110" y="141" width="12" height="12" fill={GRAY} stroke="#000" strokeWidth=".6" />
              <rect x="130" y="141" width="120" height="12" fill={GRAY} stroke="#000" strokeWidth=".6" />
              <text x="256" y="151" fontSize="9">
                × 10
              </text>
              <text x="20" y="176" fontSize="9" fillOpacity=".6">
                value of the pile
              </text>
              <rect x="110" y="167" width="12" height="12" fill={GOLD} stroke="#000" strokeWidth=".6" />
              <rect x="130" y="167" width={s >= 3 ? 36 : 120} height="12" fill={GOLD} stroke="#000" strokeWidth=".6" style={{ transition: `width ${T}` }} />
              <text x={s >= 3 ? 172 : 256} y="177" fontSize="9" style={{ transition: `x ${T}` }}>
                {s >= 3 ? "× 3" : "× 10?"}
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <rect x="40" y="190" width="280" height="22" fill="#000" />
              <text x="180" y="205" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
                cheaper means of production slow the fall
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
