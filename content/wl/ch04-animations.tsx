"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Loaf, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 4.1 · The wage on a string (supply and demand swing it; the cost of
 * keeping the worker holds it in place)
 * ───────────────────────────────────────────────────────────── */
const LINE_Y = 120; // 3 coins
const COIN_PX = 22; // vertical pixels per coin above or below the line
const WAGES = [3, 3, 2, 4, 3.25, 3];

export function WageOnAString() {
  return (
    <Player
      id="anim-wl-4-1"
      viewBox="0 0 360 240"
      title="4.1 · The wage on a string"
      steps={[
        { caption: "Sam's wage is a price, like the price of bread. It is the price of a day of his labour-power." },
        { caption: "Underneath it sits a line: what it costs to keep Sam fed, housed and able to work. In Tiny Town that is 3 coins a day." },
        { caption: "When there are many workers and few jobs, bosses can pay less. The wage sinks below the line." },
        { caption: "When there are few workers and lots of jobs, bosses must offer more. The wage rises above the line." },
        { caption: "Up and down it bobs, but always around the line, like a ball on a string. Marx says the cost of keeping the worker holds it in place.", ms: 4200 },
        { caption: "Marx calls that line the minimum of wages. It holds for workers as a whole class, not for every single person: many get less than they need.", ms: 4600 },
      ]}
    >
      {(s) => {
        const wage = WAGES[s];
        const y = LINE_Y - (wage - 3) * COIN_PX;
        const job = s === 2 ? "few jobs, many workers" : s === 3 ? "many jobs, few workers" : "";
        return (
          <>
            {/* the cost line */}
            <Fade show={s >= 1}>
              <line x1="70" y1={LINE_Y} x2="340" y2={LINE_Y} stroke="#000" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x="340" y={LINE_Y + 14} textAnchor="end" fontSize="9">
                cost of keeping Sam: 3 coins
              </text>
            </Fade>
            <Fade show={s >= 5}>
              <text x="340" y={LINE_Y - 8} textAnchor="end" fontSize="9" fontWeight="600">
                the minimum of wages
              </text>
            </Fade>

            {/* the string and the ball (the wage) */}
            <Fade show={s >= 4}>
              <line x1="205" y1={LINE_Y} x2="205" y2={y} stroke="#000" strokeOpacity=".4" style={{ transition: `all ${T}` }} />
            </Fade>
            <g style={{ transform: `translate(205px, ${y}px)`, transition: `transform ${T}` }}>
              <circle r="16" fill="#e6b800" stroke="#000" />
              <text y="4" textAnchor="middle" fontSize="10" fontWeight="700">
                {wage % 1 ? wage.toFixed(2).replace(/0$/, "") : wage}
              </text>
            </g>
            <text x="205" y="34" textAnchor="middle" fontSize="10">
              Sam&apos;s wage today
            </text>

            {/* who is at the gate */}
            <Figure who="sam" x={42} y={200} scale={0.75} mood={s === 2 ? "sad" : s === 3 ? "wow" : "happy"} />
            <Fade show={s === 2}>
              {[0, 1, 2, 3].map((i) => (
                <Figure key={i} name="" label={false} x={250 + i * 22} y={205} scale={0.5} />
              ))}
            </Fade>
            <Fade show={s === 3}>
              {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(${250 + i * 22} 192)`}>
                  <rect x="-8" y="-8" width="16" height="16" fill="#fff" stroke="#000" />
                  <text y="4" textAnchor="middle" fontSize="8">
                    job
                  </text>
                </g>
              ))}
            </Fade>
            <text x="290" y="226" textAnchor="middle" fontSize="9" fillOpacity=".7">
              {job}
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.2 · Wearing out (Marx's own machine example, and the worker's cost
 * of existence and propagation)
 * ───────────────────────────────────────────────────────────── */
const Machine = () => (
  <g>
    <rect x="-22" y="-14" width="44" height="28" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <circle cx="-8" cy="0" r="7" fill="none" stroke="#000" />
    <circle cx="10" cy="0" r="5" fill="none" stroke="#000" />
  </g>
);

export function WearingOut() {
  return (
    <Player
      id="anim-wl-4-2"
      title="4.2 · Wearing out"
      steps={[
        { caption: "Marx's example: a machine costs 1,000 shillings and is used up in 10 years." },
        { caption: "So each year the factory owner adds 100 shillings to his prices. After 10 years he can buy a new machine." },
        { caption: "Marx says a worker is counted the same way. Sam wears out too, and one day someone must take his place." },
        { caption: "So the cost of keeping a worker has two parts: keeping Sam going today, and raising children who will work after him. (Made-up split: 2 coins and 1 coin.)", ms: 4600 },
        { caption: "Jobs that need years of training cost more to fill, so they pay more. Jobs anyone can do straight away pay least.", ms: 4200 },
      ]}
    >
      {(s) => (
        <>
          {/* the machine side */}
          <g style={{ opacity: s <= 1 ? 1 : 0.25, transition: "opacity 500ms" }}>
            <Place x={70} y={80}>
              <Machine />
            </Place>
            <text x="70" y="112" textAnchor="middle" fontSize="9">
              machine: 1,000 shillings
            </text>
            {Array.from({ length: 10 }, (_, i) => (
              <rect
                key={i}
                x={30 + i * 8}
                y="122"
                width="7"
                height="10"
                fill={s >= 1 ? "#e6b800" : "#e4e4e4"}
                stroke="#000"
                strokeWidth=".5"
                style={{ transition: `fill 300ms ease ${i * 80}ms` }}
              />
            ))}
            <text x="70" y="146" textAnchor="middle" fontSize="9">
              {s >= 1 ? "100 a year for 10 years" : "10 years of use"}
            </text>
          </g>

          {/* the worker side */}
          <Fade show={s >= 2}>
            <Figure who="sam" x={220} y={140} scale={0.85} />
            <text x="220" y="164" textAnchor="middle" fontSize="9">
              a day of Sam: 3 coins
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <g transform="translate(275 70)">
              <Coins n={2} />
              <text y="18" textAnchor="middle" fontSize="8">
                keeps Sam going
              </text>
            </g>
            <g transform="translate(320 120)">
              <Figure name="" label={false} x={0} y={14} scale={0.45} />
              <g transform="translate(0 -40)">
                <Coins n={1} />
              </g>
              <text y="28" textAnchor="middle" fontSize="8">
                raising the next worker
              </text>
            </g>
            <g transform="translate(270 100) scale(.6)">
              <Loaf />
            </g>
          </Fade>

          {/* training */}
          <Fade show={s === 4}>
            <rect x="20" y="180" width="320" height="40" fill="#fff" stroke="#000" strokeOpacity=".2" />
            <text x="30" y="196" fontSize="9">
              no training needed
            </text>
            <rect x="30" y="202" width="60" height="8" fill={CAST.sam.color} />
            <text x="200" y="196" fontSize="9">
              years of training
            </text>
            <rect x="200" y="202" width="120" height="8" fill="#e6b800" />
            <text x="96" y="210" fontSize="8" fillOpacity=".7">
              lower pay
            </text>
            <text x="326" y="214" textAnchor="end" fontSize="8" fillOpacity=".7">
              higher pay
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
