"use client";

import Player from "@/components/anim/Player";
import { Coins, Fade, Loaf, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const SAM = CAST.sam.color;
const GOLD = "#e6b800";

/**
 * Sam's working day as one bar: the green part is the time that replaces his
 * wage, the gold part is the time that makes surplus-value. Widths animate
 * between steps. `perHour` sets the scale so longer days still fit.
 */
function DayBar({
  y,
  necessary,
  day,
  perHour,
  height = 24,
  x0 = 30,
}: {
  y: number;
  necessary: number;
  day: number;
  perHour: number;
  height?: number;
  x0?: number;
}) {
  const surplus = day - necessary;
  const nW = necessary * perHour;
  const sW = surplus * perHour;
  return (
    <g>
      <rect x={x0} y={y} width={nW} height={height} fill={SAM} style={{ transition: `all ${T}` }} />
      <rect x={x0 + nW} y={y} width={sW} height={height} fill={GOLD} style={{ transition: `all ${T}` }} />
      <text x={x0 + nW / 2} y={y + height / 2 + 3.5} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600" style={{ transition: `x ${T}` }}>
        {necessary} h
      </text>
      <text x={x0 + nW + sW / 2} y={y + height / 2 + 3.5} textAnchor="middle" fontSize="9" fontWeight="600" style={{ transition: `x ${T}` }}>
        {surplus} h
      </text>
      <text x={x0 + nW + sW + 5} y={y + height / 2 + 3.5} fontSize="9" style={{ transition: `x ${T}` }}>
        {day} h day
      </text>
    </g>
  );
}

/** "Sam: N coins" and "Moneybags: N coins" under the bar. */
function Split({ wage, surplus, y = 172 }: { wage: number; surplus: number; y?: number }) {
  return (
    <g>
      <text x="95" y={y - 22} textAnchor="middle" fontSize="9.5" fill={SAM} fontWeight="600">
        Sam&apos;s wage
      </text>
      <g transform={`translate(95 ${y})`}>
        <Coins n={wage} />
      </g>
      <text x="95" y={y + 22} textAnchor="middle" fontSize="10">
        {wage} coins
      </text>
      <text x="265" y={y - 22} textAnchor="middle" fontSize="9.5" fill="#8a6d00" fontWeight="600">
        surplus-value
      </text>
      <g transform={`translate(265 ${y})`}>
        <Coins n={surplus} />
      </g>
      <text x="265" y={y + 22} textAnchor="middle" fontSize="10">
        {surplus} coins
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17.1 · The fixed pie (productivity changes; length and intensity fixed)
 * Marx's numbers: a 12-hour day makes 6 shillings; 3 + 3; with cheaper
 * necessaries 4 hours do the work of 6 (2 + 4); with dearer, 8 hours (4 + 2).
 * ───────────────────────────────────────────────────────────── */
const PIE = [
  { nec: 6, top: "a 12-hour day always makes 6 coins of new value" },
  { nec: 4, top: "Sam's food gets cheaper to make" },
  { nec: 4, top: "wage down 1, surplus-value up 1" },
  { nec: 8, top: "a bad harvest: Sam's food gets dearer" },
  { nec: 6, top: "two slices of one fixed pie" },
];

export function TheFixedPie() {
  return (
    <Player
      id="anim-17-1"
      title="17.1 · The fixed pie"
      steps={[
        { caption: "Sam works 12 hours a day, the same speed as always. However many things he makes, a 12-hour day makes 6 coins of new value: 3 replace his wage, 3 are surplus-value." },
        { caption: "Mia gets a new oven, so bread takes less work to bake. Now just 4 hours of Sam's work cover everything he needs." },
        { caption: "So his wage is worth 2 coins and the surplus-value grows to 4. The day still made 6 coins. One slice can only grow if the other shrinks.", ms: 4200 },
        { caption: "Now the opposite: a bad harvest makes bread dearer. Sam needs 8 hours to cover his needs, so his wage is 4 coins and the surplus-value falls to 2." },
        {
          caption: "Marx's law: when the things workers need get cheaper to make, surplus-value rises; when they get dearer, it falls. Wage and surplus-value always move in opposite directions.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const { nec } = PIE[s];
        return (
          <>
            {PIE.map((p, i) => (
              <Fade key={i} show={s === i} delay={200}>
                <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
                  {p.top}
                </text>
              </Fade>
            ))}

            {/* the loaf that sets Sam's needs */}
            <Place x={30} y={56} scale={0.7} show={s === 1 || s === 2 || s === 3}>
              <Loaf />
            </Place>
            <Fade show={s === 1 || s === 2}>
              <text x="52" y="60" fontSize="9" fill={SAM}>
                cheaper bread
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="52" y="60" fontSize="9" fill="#d6452f">
                dearer bread
              </text>
            </Fade>

            <DayBar y={78} necessary={nec} day={12} perHour={23} />
            <text x="30" y="118" fontSize="8.5" fillOpacity=".55">
              green: replaces Sam&apos;s wage · gold: surplus-value
            </text>

            {/* where the line could sit */}
            <Fade show={s === 4}>
              {[4, 8].map((h) => (
                <g key={h}>
                  <line x1={30 + h * 23} y1="72" x2={30 + h * 23} y2="108" stroke="#000" strokeDasharray="3 3" />
                  <text x={30 + h * 23} y="68" textAnchor="middle" fontSize="8">
                    {h === 4 ? "cheaper food" : "dearer food"}
                  </text>
                </g>
              ))}
            </Fade>

            <Split wage={nec / 2} surplus={(12 - nec) / 2} />

            <Fade show={s === 2}>
              <text x="140" y="175" textAnchor="middle" fontSize="12" fontWeight="700" fill="#d6452f">
                −1
              </text>
              <text x="220" y="175" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2a9d5b">
                +1
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="176" textAnchor="middle" fontSize="16">
                ⇄
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17.2 · Three dials (length, intensity, productivity)
 * Marx: more intense 12 hours may make 8 shillings, both parts 3 → 4;
 * 2 more hours at the same wage raise surplus-value; a shorter day cuts it.
 * ───────────────────────────────────────────────────────────── */
type Level = "low" | "normal" | "high";
const ANGLE: Record<Level, number> = { low: -55, normal: 0, high: 55 };

function Dial({ x, label, level, value, on }: { x: number; label: string; level: Level; value: string; on: boolean }) {
  return (
    <g transform={`translate(${x} 52)`}>
      <path d="M-22,0 A22,22 0 0 1 22,0" fill="none" stroke={on ? "#000" : "#bbb"} strokeWidth="3" style={{ transition: "stroke 400ms" }} />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="-18"
        stroke={on ? "#d6452f" : "#555"}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ transform: `rotate(${ANGLE[level]}deg)`, transformOrigin: "0px 0px", transition: `transform ${T}, stroke 400ms` }}
      />
      <circle r="3" fill="#000" />
      <text y="16" textAnchor="middle" fontSize="9.5" fontWeight={on ? 700 : 400}>
        {label}
      </text>
      <text y="28" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
        {value}
      </text>
    </g>
  );
}

const DIALS = [
  { day: 12, nec: 6, intensity: "normal", prod: "normal", made: 6, wage: 3, surplus: 3, on: -1, thick: 22 },
  { day: 12, nec: 6, intensity: "high", prod: "normal", made: 8, wage: 4, surplus: 4, on: 1, thick: 32 },
  { day: 14, nec: 6, intensity: "normal", prod: "normal", made: 7, wage: 3, surplus: 4, on: 0, thick: 22 },
  { day: 10, nec: 6, intensity: "normal", prod: "normal", made: 5, wage: 3, surplus: 2, on: 0, thick: 22 },
  // coin figures are hidden on this step; they repeat step 3's so the fade-out doesn't flicker
  { day: 8, nec: 3, intensity: "normal", prod: "high", made: 5, wage: 3, surplus: 2, on: 2, thick: 22 },
] as const;

export function ThreeDials() {
  return (
    <Player
      id="anim-17-2"
      title="17.2 · Three dials"
      steps={[
        { caption: "Three dials decide how Sam's day is shared: how long the day is, how hard he works each hour, and how productive the work is. Here all three are normal." },
        { caption: "Turn up how hard he works. More work is packed into the same 12 hours, so the day makes 8 coins instead of 6. Now both slices can grow: 4 and 4. But a bigger wage may not make up for the extra tiredness.", ms: 5200 },
        { caption: "Turn up the length instead: 14 hours at the same wage. Sam still needs 6 hours for himself, so all 2 extra hours become surplus-value." },
        { caption: "Turn the length down to 10 hours, with nothing else changed, and the surplus-value shrinks. Marx notes that in real life shorter days usually come together with faster, more productive work." },
        {
          caption: "Turn up productivity a lot, and the part of the day Sam needs for himself shrinks, say to 3 hours. That is what could make a much shorter working day possible for everyone.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const d = DIALS[s];
        const lengthLevel: Level = d.day > 12 ? "high" : d.day < 12 ? "low" : "normal";
        return (
          <>
            <Dial x={70} label="length" level={lengthLevel} value={`${d.day} hours`} on={d.on === 0} />
            <Dial x={180} label="how hard" level={d.intensity} value={d.intensity} on={d.on === 1} />
            <Dial x={290} label="productivity" level={d.prod} value={d.prod} on={d.on === 2} />

            <g style={{ transform: `translateY(${(32 - d.thick) / 2}px)`, transition: `transform ${T}` }}>
              <DayBar y={104} necessary={d.nec} day={d.day} perHour={18} height={d.thick} />
            </g>

            <Fade show={s < 4}>
              <text x="180" y="160" textAnchor="middle" fontSize="10.5">
                the day makes <tspan fontWeight="700">{d.made} coins</tspan>:{" "}
                <tspan fill={SAM} fontWeight="600">
                  {d.wage} for Sam
                </tspan>
                ,{" "}
                <tspan fill="#8a6d00" fontWeight="600">
                  {d.surplus} surplus-value
                </tspan>
              </text>
            </Fade>
            <Fade show={s === 1}>
              <text x="180" y="184" textAnchor="middle" fontSize="9.5" fillOpacity=".7">
                thicker bar: more work packed into each hour
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="160" textAnchor="middle" fontSize="10.5">
                Sam&apos;s own needs now take just <tspan fontWeight="700">3 hours</tspan>
              </text>
              <text x="180" y="180" textAnchor="middle" fontSize="10">
                so the whole day could be far shorter
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17.3 · Dearer bread, longer days (Marx's case IV A, England 1799 to 1815)
 * Necessary labour 6 → 8 hours; day 12 → 14 keeps 3 shillings surplus;
 * day 16 raises it to 4.
 * ───────────────────────────────────────────────────────────── */
const DEARER = [
  { day: 12, nec: 6 },
  { day: 12, nec: 8 },
  { day: 14, nec: 8 },
  { day: 16, nec: 8 },
  { day: 16, nec: 8 },
];

export function DearerBreadLongerDays() {
  return (
    <Player
      id="anim-17-3"
      title="17.3 · Dearer bread, longer days"
      steps={[
        { caption: "Back to the usual day: 12 hours, 6 for Sam, 6 of surplus-value." },
        { caption: "Bad harvests make bread dearer. Sam now needs 8 hours to cover his needs. If the day stays 12 hours, surplus-value falls from 3 coins to 2." },
        { caption: "So Mr. Moneybags makes the day 14 hours. The surplus-value is back to 3 coins, though it is now smaller compared with Sam's wage." },
        { caption: "Make it 16 hours, and the surplus-value rises to 4 coins, more than when bread was cheap." },
        {
          caption: "Marx says this really happened in England between 1799 and 1815. Economists thought dear bread had cut the surplus. Marx says longer, harder days had made it grow.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const { day, nec } = DEARER[s];
        return (
          <>
            <Fade show={s >= 1}>
              <g transform="translate(30 40) scale(.7)">
                <Loaf />
              </g>
              <text x="50" y="44" fontSize="9" fill="#d6452f">
                dearer bread
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="330" y="44" textAnchor="end" fontSize="11" fontWeight="600">
                England, 1799 to 1815
              </text>
            </Fade>

            <DayBar y={72} necessary={nec} day={day} perHour={17} />
            {/* where the old day ended: tick marks above and below the bar, clear of its labels */}
            <line x1={30 + 12 * 17} y1="62" x2={30 + 12 * 17} y2="70" stroke="#000" strokeOpacity=".45" strokeWidth="1.5" />
            <line x1={30 + 12 * 17} y1="98" x2={30 + 12 * 17} y2="106" stroke="#000" strokeOpacity=".45" strokeWidth="1.5" />
            <text x={30 + 12 * 17} y="116" textAnchor="middle" fontSize="8" fillOpacity=".6">
              old 12 h
            </text>

            <Split wage={nec / 2} surplus={(day - nec) / 2} y={168} />
          </>
        );
      }}
    </Player>
  );
}
