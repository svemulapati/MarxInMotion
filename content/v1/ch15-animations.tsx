"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coins, Cross, Fade, Linen, Place, Tag } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** Keyframes used by this chapter's scenes. */
const STYLE = `
@keyframes c15-puff { 0% { transform: translate(0,0) scale(.6); opacity: .8 } 100% { transform: translate(6px,-34px) scale(1.6); opacity: 0 } }
@keyframes c15-spin { to { transform: rotate(360deg) } }
@keyframes c15-belt { to { stroke-dashoffset: -20 } }
@keyframes c15-hammer { 0%, 100% { transform: rotate(0deg) } 50% { transform: rotate(-40deg) } }
.c15-puff { animation: c15-puff 1.8s ease-out infinite; transform-box: fill-box; transform-origin: center; }
.c15-spin { animation: c15-spin 0.9s linear infinite; transform-box: fill-box; transform-origin: center; }
.c15-belt { animation: c15-belt 0.6s linear infinite; }
.c15-hammer { animation: c15-hammer 0.5s ease-in-out infinite; transform-box: fill-box; transform-origin: 0% 100%; }
`;

/** A hand loom: a simple wooden frame with threads. */
function HandLoom() {
  return (
    <g>
      <rect x="-24" y="-30" width="48" height="34" fill="none" stroke="#8a5a2b" strokeWidth="3" />
      {[-16, -8, 0, 8, 16].map((x) => (
        <line key={x} x1={x} y1="-28" x2={x} y2="2" stroke={"#2f6fd6"} strokeWidth="1" />
      ))}
      <line x1="-24" y1="-12" x2="24" y2="-12" stroke="#8a5a2b" strokeWidth="3" />
      <line x1="-20" y1="4" x2="-20" y2="16" stroke="#8a5a2b" strokeWidth="3" />
      <line x1="20" y1="4" x2="20" y2="16" stroke="#8a5a2b" strokeWidth="3" />
    </g>
  );
}

/** A factory with a smoking chimney. */
function Factory({ smoke = true }: { smoke?: boolean }) {
  return (
    <g>
      <rect x="-40" y="-30" width="80" height="44" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <path d="M-40,-30 L-27,-42 L-27,-30 L-14,-42 L-14,-30 L-1,-42 L-1,-30" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <rect x="22" y="-60" width="10" height="30" fill="#8c8c8c" stroke="#000" strokeWidth="1.2" />
      {[-30, -14, 2, 18].map((x) => (
        <rect key={x} x={x} y="-16" width="10" height="10" fill="#fff" stroke="#000" strokeWidth=".8" />
      ))}
      {smoke &&
        [0, 600, 1200].map((d) => (
          <circle key={d} cx="27" cy="-64" r="5" fill="#9a9a9a" className="c15-puff" style={{ animationDelay: `${d}ms` }} />
        ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.1 · What a machine is made of (motor, transmission, working machine;
 * a machine adds its own value to the product, never any new value)
 * ───────────────────────────────────────────────────────────── */
const SPINDLES = Array.from({ length: 10 }, (_, i) => 170 + i * 17);

export function WhatAMachineIsMadeOf() {
  return (
    <Player
      id="anim-15-1"
      title="15.1 · What a machine is made of"
      steps={[
        { caption: "Before the machine, Sam spins at a wheel. He has two hands, so he can work just one spindle at a time." },
        { caption: "Mr. Moneybags buys a machine. Part one is the motor, a steam engine, which makes the power." },
        { caption: "Part two is the transmitting mechanism: belts and shafts that carry the power across the room." },
        {
          caption: "Part three is the working machine, which holds the tools. Here it turns many spindles at once. Sam no longer spins. He watches the machine.",
          ms: 4400,
        },
        {
          caption: "Marx's key point: the machine creates no new value. It slowly wears out, and passes its own value into the yarn, a little each day. New value still comes only from work.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          <line x1="0" y1="200" x2="360" y2="200" stroke="#000" strokeOpacity=".15" />

          {/* before: Sam at his spinning wheel */}
          <Fade show={s === 0}>
            <g transform="translate(220 160)">
              <circle r="26" fill="none" stroke="#8a5a2b" strokeWidth="3" />
              <line x1="0" y1="0" x2="0" y2="40" stroke="#8a5a2b" strokeWidth="3" />
              <g className="c15-spin">
                <line x1="-26" y1="0" x2="26" y2="0" stroke="#8a5a2b" strokeWidth="1.5" />
                <line x1="0" y1="-26" x2="0" y2="26" stroke="#8a5a2b" strokeWidth="1.5" />
              </g>
              <rect x="34" y="-4" width="6" height="18" fill="#fff" stroke="#000" />
              <text x="0" y="-36" textAnchor="middle" fontSize="9.5">
                one spindle
              </text>
            </g>
          </Fade>
          <Figure who="sam" x={s === 0 ? 150 : 118} y={s === 0 ? 198 : 196} scale={s === 0 ? 1 : 0.72} mood={s >= 3 ? "sleepy" : "happy"} />

          {/* 1: the motor */}
          <Fade show={s >= 1}>
            <g transform="translate(52 150)">
              <rect x="-30" y="-36" width="60" height="50" rx="6" fill="#4d4d4d" stroke="#000" strokeWidth="1.2" />
              <rect x="-6" y="-70" width="12" height="34" fill="#4d4d4d" stroke="#000" strokeWidth="1.2" />
              {[0, 600, 1200].map((d) => (
                <circle key={d} cx="0" cy="-74" r="6" fill="#bdbdbd" className="c15-puff" style={{ animationDelay: `${d}ms` }} />
              ))}
              <circle cx="0" cy="-10" r="12" fill="#e6b800" stroke="#000" />
              <text y="34" textAnchor="middle" fontSize="9.5" fontWeight="600">
                1 · motor
              </text>
            </g>
          </Fade>

          {/* 2: the transmitting mechanism */}
          <Fade show={s >= 2}>
            <line x1="62" y1="140" x2="62" y2="80" stroke="#000" strokeWidth="2" />
            <line x1="62" y1="80" x2="345" y2="80" stroke="#000" strokeWidth="3" />
            <path d="M62,140 L62,80 L345,80" fill="none" stroke="#e6b800" strokeWidth="2" strokeDasharray="6 4" className="c15-belt" />
            <text x="200" y="72" textAnchor="middle" fontSize="9.5" fontWeight="600">
              2 · transmitting mechanism
            </text>
          </Fade>

          {/* 3: the working machine with its many tools */}
          <Fade show={s >= 3}>
            <rect x="158" y="100" width="182" height="46" fill="#fff" stroke="#000" strokeWidth="1.2" />
            {SPINDLES.map((x, i) => (
              <g key={x}>
                <line x1={x} y1="80" x2={x} y2="104" stroke="#000" strokeOpacity=".3" />
                <g transform={`translate(${x} 122)`}>
                  <circle r="6.5" fill="#f6f1e1" stroke="#000" strokeWidth=".8" />
                  <g className="c15-spin" style={{ animationDelay: `${i * 60}ms` }}>
                    <line x1="-6" y1="0" x2="6" y2="0" stroke="#000" strokeWidth="1.2" />
                  </g>
                </g>
              </g>
            ))}
            <text x="249" y="160" textAnchor="middle" fontSize="9.5" fontWeight="600">
              3 · working machine: many spindles
            </text>
          </Fade>

          {/* 4: value passes on, bit by bit */}
          <Fade show={s === 4} delay={300}>
            <g transform="translate(330 186)">
              <Tag text="yarn" />
            </g>
            <path d="M330,146 L330,176" stroke="#b38f00" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#c15-drip)" />
            <text x="200" y="32" textAnchor="middle" fontSize="11" fontWeight="600">
              machine worth 1,000 coins
            </text>
            <text x="200" y="48" textAnchor="middle" fontSize="9.5">
              wears out slowly: a few coins of its value go into each day&apos;s yarn
            </text>
          </Fade>
          <defs>
            <marker id="c15-drip" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#b38f00" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.2 · Longer, then fuller, then faster
 * Machinery lengthens the day, pulls in the whole family, and, once the
 * law shortens the day, intensifies labour instead.
 * ───────────────────────────────────────────────────────────── */
const HOUR = 17; // px per hour on the day bar
const BAR_X = 40;

export function LongerFullerFaster() {
  return (
    <Player
      id="anim-15-2"
      title="15.2 · Longer, fuller, faster"
      steps={[
        { caption: "Sam hopes the new machine will make his working day shorter. After all, it does so much of the work." },
        {
          caption: "But a machine wears out, and goes out of date, even when it stands still. So Mr. Moneybags wants it running as many hours as possible. Sam's day stretches from 12 hours to 15.",
          ms: 5200,
        },
        {
          caption: "Machines need less strength, so Mr. Moneybags hires Sam's whole family, even the children. Four people now work four days' labour for about what one wage used to cost.",
          ms: 5200,
        },
        {
          caption: "Workers fight back. In 1847 a law limits the day to 10 hours for women and young workers. So Mr. Moneybags speeds the machines up and squeezes more work into every hour.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const hours = s === 0 ? 12 : s === 3 ? 10 : 15;
        const speed = s === 3 ? 70 : -40; // needle angle on the gauge
        return (
          <>
            <style>{STYLE}</style>
            {/* the working day */}
            <text x={BAR_X} y="22" fontSize="9.5">
              Sam&apos;s working day
            </text>
            <rect x={BAR_X} y="30" width={hours * HOUR} height="20" fill={s === 3 ? "url(#c15-dense)" : "#2a9d5b"} style={{ transition: `width ${T}` }} />
            <rect
              x={BAR_X + 12 * HOUR}
              y="30"
              width={3 * HOUR}
              height="20"
              fill="#d6452f"
              style={{ opacity: s === 1 || s === 2 ? 1 : 0, transition: "opacity 500ms" }}
            />
            <text x={BAR_X + hours * HOUR + 6} y="45" fontSize="11" fontWeight="600" style={{ transition: `x ${T}` }}>
              {hours} h
            </text>
            <defs>
              <pattern id="c15-dense" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="4" height="4" fill="#2a9d5b" />
                <line x1="0" y1="0" x2="0" y2="4" stroke="#0d4f2c" strokeWidth="2" />
              </pattern>
            </defs>
            <Fade show={s === 3}>
              <text x={BAR_X} y="66" fontSize="9.5" fill="#0d4f2c">
                shorter, but packed tighter
              </text>
            </Fade>

            {/* Sam, and then his family */}
            <Figure who="sam" x={60} y={205} mood={s === 0 ? "happy" : "sleepy"} />
            <Fade show={s === 0}>
              <g transform="translate(76 135)">
                <Bubble w={84} lines={["Home early now?"]} />
              </g>
            </Fade>
            {[
              { name: "Sam's mum", x: 112, scale: 0.9 },
              { name: "sister", x: 160, scale: 0.72 },
              { name: "brother", x: 200, scale: 0.62 },
            ].map((f, i) => (
              <Fade key={f.name} show={s >= 2} delay={i * 250}>
                <Figure name={f.name} x={f.x} y={205} scale={f.scale} mood="sleepy" />
              </Fade>
            ))}
            <Fade show={s >= 2}>
              <text x="140" y="116" textAnchor="middle" fontSize="9.5">
                four workers instead of one
              </text>
            </Fade>

            {/* the speed of the machine */}
            <g transform="translate(298 168)">
              <path d="M-34,0 A34,34 0 0 1 34,0" fill="none" stroke="#000" strokeWidth="1.5" />
              <path d="M10,-32 A34,34 0 0 1 34,0" fill="none" stroke="#d6452f" strokeWidth="5" />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="-28"
                stroke="#000"
                strokeWidth="2.5"
                style={{ transform: `rotate(${speed}deg)`, transformOrigin: "0px 0px", transition: `transform ${T}` }}
              />
              <circle r="4" fill="#000" />
              <text y="18" textAnchor="middle" fontSize="9.5">
                machine speed
              </text>
            </g>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.3 · Leo against the machine loom (the hand-loom weavers, the Luddites)
 * ───────────────────────────────────────────────────────────── */
export function LeoAgainstTheMachineLoom() {
  return (
    <Player
      id="anim-15-3"
      title="15.3 · Leo against the machine loom"
      steps={[
        { caption: "Leo still weaves at home on his hand loom. One roll of linen a day keeps him and his family fed." },
        {
          caption: "Then a power-loom factory opens. It pours out cloth so cheaply that the price of a roll falls and falls. Leo works just as hard, but his pay shrinks to almost nothing.",
          ms: 5000,
        },
        {
          caption: "This really happened. Marx describes how England's hand-loom weavers starved over several decades. In 1838 they and their families still numbered 800,000.",
          ms: 4800,
        },
        {
          caption: "In the early 1800s some desperate weavers smashed the new machines. They were called the Luddites.",
        },
        {
          caption: "Marx says workers learned, over time, to aim not at the machines themselves, but at the way capital used them: fighting for shorter hours and fair pay.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const pay = s === 0 ? 3 : 1;
        return (
          <>
            <style>{STYLE}</style>
            <line x1="0" y1="205" x2="360" y2="205" stroke="#000" strokeOpacity=".15" />

            {/* Leo's corner */}
            <Figure who="leo" x={48} y={200} mood={s === 0 ? "happy" : s === 4 ? "happy" : "sad"} />
            <g transform="translate(108 186)">
              <HandLoom />
            </g>
            <text x="78" y="28" textAnchor="middle" fontSize="9.5">
              Leo&apos;s pay a day
            </text>
            <Place x={78} y={48}>
              <Coins n={pay} />
            </Place>
            <Place x={108} y={118} scale={0.9}>
              <Linen />
            </Place>
            <Place x={140} y={118}>
              <Tag text={s === 0 ? "10 coins" : "2 coins"} />
            </Place>

            {/* the power-loom factory */}
            <Fade show={s >= 1}>
              <g transform="translate(280 150)">
                <Factory />
              </g>
              {[0, 1, 2, 3].map((i) => (
                <Place key={i} x={232 + i * 30} y={190} scale={0.7} show={s >= 1} delay={i * 150}>
                  <Linen />
                </Place>
              ))}
            </Fade>

            <Fade show={s === 2}>
              <text x="200" y="40" textAnchor="middle" fontSize="20" fontWeight="300">
                800,000
              </text>
              <text x="200" y="56" textAnchor="middle" fontSize="9.5">
                hand-loom weavers and families, 1838
              </text>
            </Fade>

            {/* the Luddites */}
            <Fade show={s === 3}>
              <Figure name="weaver" x={196} y={200} scale={0.8} mood="sad" />
              <g transform="translate(212 146)">
                <g className="c15-hammer">
                  <line x1="0" y1="0" x2="18" y2="-20" stroke="#8a5a2b" strokeWidth="3" />
                  <rect x="12" y="-28" width="14" height="8" fill="#4d4d4d" transform="rotate(-48 19 -24)" />
                </g>
              </g>
              <g transform="translate(262 128)">
                <Cross />
              </g>
              <text x="200" y="40" textAnchor="middle" fontSize="12" fontWeight="600">
                the Luddites
              </text>
            </Fade>

            {/* the lesson they learned */}
            <Fade show={s === 4}>
              <Figure who="sam" x={200} y={200} scale={0.8} />
              <g transform="translate(172 62)">
                <rect x="0" y="0" width="98" height="38" fill="#fff" stroke="#000" />
                <text x="49" y="16" textAnchor="middle" fontSize="9.5" fontWeight="600">
                  shorter hours!
                </text>
                <text x="49" y="30" textAnchor="middle" fontSize="9.5" fontWeight="600">
                  fair pay!
                </text>
                <line x1="28" y1="38" x2="28" y2="96" stroke="#8a5a2b" strokeWidth="2" />
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
