"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Place } from "@/components/anim/Things";
import { Bar, Cotton, Spindle, TONE } from "./ch07-animations";

const NEW = "#4ec27f"; // fresh value, the same green family as Sam

/* ─────────────────────────────────────────────────────────────
 * 8.1 · Old value moves, new value is added
 * ───────────────────────────────────────────────────────────── */
const U = 9; // pixels per coin

export function OldValueNewValue() {
  return (
    <Player
      id="anim-8-1"
      title="8.1 · Old value moves, new value is added"
      steps={[
        { caption: "Sam's 12-hour day again. On the bench: 20 lb of cotton worth 20 coins, and a spindle that will wear down by 4 coins' worth today." },
        { caption: "As Sam spins, the cotton's 20 coins of value move into the yarn. The value is not lost and not made bigger. It just moves." },
        { caption: "The spindle wears a little. The 4 coins of value it loses move into the yarn too. Never more than it loses." },
        { caption: "And Sam's work adds something brand new: 6 coins of fresh value that did not exist this morning." },
        {
          caption: "Here is the clever part. Sam does not do two jobs. One single act, spinning, both carries the old value across and adds the new. Marx calls this a gift of nature that costs the worker nothing and helps the boss a lot.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the inputs */}
          <Place x={60} y={60} show={s <= 1} scale={1.2}>
            <Cotton />
          </Place>
          <Fade show={s <= 1}>
            <text x="60" y="94" textAnchor="middle" fontSize="9">
              cotton: 20 coins
            </text>
          </Fade>
          <g transform="translate(160 62)">
            <g style={{ transform: `scale(1, ${s >= 2 ? 0.75 : 1})`, transition: "transform 900ms ease" }}>
              <Spindle />
            </g>
          </g>
          <text x="160" y="100" textAnchor="middle" fontSize="9">
            {s >= 2 ? "spindle: worn a bit" : "spindle"}
          </text>
          <Figure who="sam" x={262} y={110} scale={0.85} mood={s === 3 ? "wow" : "happy"} />

          {/* arrows into the yarn */}
          <Fade show={s === 1}>
            <path d="M60,104 L60,140" stroke="#000" strokeDasharray="3 3" markerEnd="url(#c08a)" />
          </Fade>
          <Fade show={s === 2}>
            <path d="M160,106 L160,140" stroke="#000" strokeDasharray="3 3" markerEnd="url(#c08a)" />
          </Fade>
          <Fade show={s === 3}>
            <path d="M262,124 L262,140" stroke={NEW} strokeWidth="2" markerEnd="url(#c08a)" />
          </Fade>
          <defs>
            <marker id="c08a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>

          {/* the yarn's value, built up part by part */}
          <text x="12" y="160" fontSize="10" fontWeight="600">
            yarn
          </text>
          <Bar
            x={44}
            y={147}
            unit={U}
            segs={[
              { n: 20, color: TONE.cotton, label: "cotton 20", show: s >= 1 },
              { n: 4, color: TONE.spindle, label: "4", show: s >= 2 },
              { n: 6, color: NEW, label: "new 6", show: s >= 3 },
            ]}
          />
          <Fade show={s >= 3} delay={700}>
            <text x={44 + 30 * U + 5} y="160" fontSize="10" fontWeight="600">
              30
            </text>
          </Fade>
          <Fade show={s === 4}>
            <path d={`M44,170 v4 h${24 * U} v-4`} fill="none" stroke="#000" strokeOpacity=".5" />
            <text x={44 + 12 * U} y="188" textAnchor="middle" fontSize="9.5">
              old value, carried over: 24
            </text>
            <path d={`M${44 + 24 * U},170 v4 h${6 * U} v-4`} fill="none" stroke={NEW} />
            <text x={44 + 27 * U} y="188" textAnchor="middle" fontSize="9.5" fill="#1f7a46">
              added: 6
            </text>
            <text x="180" y="210" textAnchor="middle" fontSize="11" fontWeight="600">
              one act of spinning does both
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.2 · The wheel that wears out (instruments pass on value bit by bit)
 * Marx's example: a machine worth £1,000 that wears out in 1,000 days.
 * ───────────────────────────────────────────────────────────── */
const DAYS = [0, 1, 50, 100, 100];

function Wheel({ worn, spinning }: { worn: number; spinning: boolean }) {
  return (
    <g>
      <rect x="-4" y="26" width="8" height="22" fill="#6b4a2b" />
      <g className={spinning ? "c08-spin" : ""}>
      <circle r="26" fill="none" stroke="#6b4a2b" strokeWidth="4" strokeDasharray={worn > 0.95 ? "6 10" : "none"} />
      {[0, 60, 120].map((a) => (
        <line key={a} x1="0" y1="-26" x2="0" y2="26" stroke="#6b4a2b" strokeWidth="2" transform={`rotate(${a})`} opacity={worn > 0.95 ? 0.3 : 1} />
      ))}
      <circle r="4" fill="#6b4a2b" />
      </g>
    </g>
  );
}

export function TheWheelThatWearsOut() {
  return (
    <Player
      id="anim-8-2"
      title="8.2 · The wheel that wears out"
      steps={[
        { caption: "Mr. Moneybags buys a spinning wheel for 100 coins. It will last 100 days before it is worn out." },
        { caption: "Day 1: the wheel is used whole, every day. But only a hundredth of it wears away, so it passes just 1 coin of value into the day's yarn." },
        { caption: "Day 50: half the wheel's value has moved into fifty days of yarn. Half is left in the wheel." },
        { caption: "Day 100: the wheel is worn out. All 100 coins of its value have moved into the yarn, a little each day." },
        {
          caption: "Not one coin more. Marx's rule: a tool or machine never passes on more value than it loses. That is why it cannot be the source of the extra.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const day = DAYS[s];
        const left = 100 - day;
        return (
          <>
            <g transform="translate(70 78)">
              <Wheel worn={day / 100} spinning={s >= 1 && s <= 2} />
            </g>
            <text x="70" y="148" textAnchor="middle" fontSize="11" fontWeight="600">
              day {day}
            </text>

            <text x="140" y="56" fontSize="9.5">
              value left in the wheel
            </text>
            <Bar x={140} y={62} unit={2} segs={[{ n: left, color: "#c9a27a", label: left >= 20 ? String(left) : "" }]} />
            <text x="140" y="110" fontSize="9.5">
              value passed into the yarn
            </text>
            <Bar x={140} y={116} unit={2} segs={[{ n: day, color: "#f3e3b3", label: day >= 20 ? String(day) : "" }]} />
            <Fade show={s === 1}>
              <text x="146" y="129" fontSize="9">
                1
              </text>
            </Fade>
            <text x="140" y="160" fontSize="9" fillOpacity=".55">
              both bars always add up to 100
            </text>

            <Fade show={s === 4}>
              <rect x="40" y="176" width="280" height="30" fill="#000" />
              <text x="180" y="195" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="600">
                passes on 100 coins, never more
              </text>
            </Fade>
            <style>{`
              @keyframes c08-spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
              .c08-spin { animation: c08-spin 2.4s linear infinite; transform-box: fill-box; transform-origin: center; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.3 · Constant and variable
 * ───────────────────────────────────────────────────────────── */
const UC = 4.2; // pixels per coin, vertical

export function ConstantAndVariable() {
  return (
    <Player
      id="anim-8-3"
      title="8.3 · Constant and variable"
      steps={[
        { caption: "Mr. Moneybags splits his money into two piles. 24 coins for cotton and spindle. 3 coins for Sam's labour-power." },
        { caption: "The 24 coins for cotton and spindle come out as 24 coins in the yarn. Same size in, same size out." },
        { caption: "The 3 coins spent on Sam come out as 6. This pile grows, because Sam's work makes new value." },
        {
          caption: "So Marx gives them names. The part that stays the same size is constant capital. The part that grows is variable capital. The extra comes only from the variable part.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const base = 186;
        const col = (x: number, n: number, color: string, show: boolean, label: string) => (
          <g>
            <rect
              x={x}
              y={show ? base - n * UC : base}
              width="54"
              height={show ? n * UC : 0}
              fill={color}
              stroke="#000"
              style={{ transition: "all 800ms cubic-bezier(.2,.8,.2,1)" }}
            />
            <Fade show={show} delay={500}>
              <text x={x + 27} y={base - n * UC - 6} textAnchor="middle" fontSize="10" fontWeight="600">
                {label}
              </text>
            </Fade>
          </g>
        );
        return (
          <>
            <line x1="20" y1={base} x2="340" y2={base} stroke="#000" />
            <text x="98" y="204" textAnchor="middle" fontSize="9.5">
              cotton and spindle
            </text>
            <text x="262" y="204" textAnchor="middle" fontSize="9.5">
              Sam&apos;s labour-power
            </text>
            <text x="54" y="216" textAnchor="middle" fontSize="8" fillOpacity=".6">
              in
            </text>
            <text x="142" y="216" textAnchor="middle" fontSize="8" fillOpacity=".6">
              out
            </text>
            <text x="218" y="216" textAnchor="middle" fontSize="8" fillOpacity=".6">
              in
            </text>
            <text x="306" y="216" textAnchor="middle" fontSize="8" fillOpacity=".6">
              out
            </text>

            {col(27, 24, TONE.cotton, true, "24")}
            {col(115, 24, TONE.cotton, s >= 1, "24")}
            {col(191, 3, TONE.wage, true, "3")}
            {col(279, 6, NEW, s >= 2, "6")}

            <Fade show={s === 1}>
              <text x="98" y="58" textAnchor="middle" fontSize="11" fontWeight="600">
                same size
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="262" y="120" textAnchor="middle" fontSize="11" fontWeight="600">
                it grew!
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="98" y="40" textAnchor="middle" fontSize="12" fontWeight="700">
                constant capital (c)
              </text>
              <text x="262" y="110" textAnchor="middle" fontSize="12" fontWeight="700">
                variable capital (v)
              </text>
            </Fade>

          </>
        );
      }}
    </Player>
  );
}
