"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Loaf, Tag } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 20.1 · Same pay, cheaper hours
 * Marx's numbers: a daily wage of 3s. (36 pennies) for a 10-hour day is
 * 3 3/5d. an hour; for 12 hours, 3d.; for 15 hours, 2 2/5d.
 * ───────────────────────────────────────────────────────────── */
const PX_H = 20;
const X0 = 30;
const DAYS = [
  { h: 10, price: "3⅗" },
  { h: 12, price: "3" },
  { h: 15, price: "2⅖" },
];

export function SamePayCheaperHours() {
  return (
    <Player
      id="anim-20-1"
      title="20.1 · Same pay, cheaper hours"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Sam gets 3 coins a day. One coin is 12 pennies, so that is 36 pennies. If his day is 10 hours long, each hour earns him 3⅗ pennies." },
        { caption: "Now the day stretches to 12 hours. Same 3 coins. Each hour now earns just 3 pennies." },
        { caption: "Stretch it to 15 hours, still for 3 coins. Each hour is now worth only 2⅖ pennies." },
        {
          caption: "Sam's day's pay never changed. But the price of each hour of his work fell by a third. Marx says this is why we must look at the price of an hour, not just the day's pay.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const d = DAYS[Math.min(s, 2)];
        return (
          <>
            <text x={X0} y="30" fontSize="10" fontWeight="600">
              Sam&apos;s working day: {d.h} hours
            </text>
            <rect x={X0} y="40" width={d.h * PX_H} height="24" fill={TONE.wage} stroke="#000" style={{ transition: `width ${T}` }} />
            {Array.from({ length: 15 }, (_, i) => (
              <line
                key={i}
                x1={X0 + (i + 1) * PX_H}
                y1="40"
                x2={X0 + (i + 1) * PX_H}
                y2="64"
                stroke="#fff"
                strokeOpacity=".6"
                style={{ opacity: i + 1 < d.h ? 1 : 0, transition: "opacity 400ms" }}
              />
            ))}
            <text x={X0 + 15 * PX_H} y="78" textAnchor="end" fontSize="8.5" fillOpacity=".5">
              15 h
            </text>

            <g transform="translate(90 112)">
              <Coins n={3} />
            </g>
            <text x="90" y="138" textAnchor="middle" fontSize="9.5">
              pay for the day: 3 coins
            </text>
            <text x="90" y="151" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
              (36 pennies, always)
            </text>

            <text x="250" y="108" textAnchor="middle" fontSize="9.5">
              price of one hour
            </text>
            <text x="250" y="142" textAnchor="middle" fontSize="28" fontWeight="300" style={{ transition: "all 400ms" }}>
              {d.price}
            </text>
            <text x="250" y="156" textAnchor="middle" fontSize="9.5">
              pennies
            </text>

            <Fade show={s === 3}>
              <rect x="30" y="172" width="300" height="40" fill="#fff" stroke="#000" />
              <text x="180" y="188" textAnchor="middle" fontSize="10" fontWeight="600">
                {"3⅗  →  3  →  2⅖ pennies an hour"}
              </text>
              <text x="180" y="203" textAnchor="middle" fontSize="9">
                same day&apos;s pay, a third less for every hour
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.2 · Short weeks hurt
 * Marx: at 3d. an hour, 6 or 8 hours bring only 1s. 6d. or 2s. Every
 * hour makes 6d. of value, half for the worker, half for the capitalist.
 * ───────────────────────────────────────────────────────────── */
const CELL = 25;

export function ShortWeeksHurt() {
  return (
    <Player
      id="anim-20-2"
      title="20.2 · Short weeks hurt"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Now Mr. Moneybags pays by the hour: 3 pennies an hour. On a full 12-hour day, Sam earns 36 pennies, the 3 coins he needs to live." },
        { caption: "Look inside one hour. It makes 6 pennies of new value. Sam gets 3. Mr. Moneybags gets 3. Half of every hour is for Sam, half for the boss.", ms: 4600 },
        { caption: "Trade is slow, so Moneybags only needs Sam for 8 hours today. Sam earns 24 pennies, just 2 coins. He is a whole coin short of what he needs." },
        { caption: "Another day, only 6 hours: 18 pennies. Sam can't make a living. But Mr. Moneybags still kept half of every hour Sam worked.", ms: 4600 },
        {
          caption: "Paid by the hour, a worker can be squeezed both ways: worked too long when it suits the boss, and sent home when it doesn't. London builders revolted against this in 1860, and Marx calls their revolt perfectly rational.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const hours = s === 2 ? 8 : s >= 3 ? 6 : 12;
        const pennies = hours * 3;
        return (
          <>
            <text x="30" y="28" fontSize="10" fontWeight="600">
              hours of work today: {hours}
            </text>
            {Array.from({ length: 12 }, (_, i) => {
              const on = i < hours;
              const focus = s === 1 && i === 0;
              return (
                <g key={i} style={{ opacity: on ? 1 : 0.2, transition: "opacity 500ms" }}>
                  <rect x={30 + i * CELL} y="38" width={CELL / 2} height="26" fill={TONE.wage} stroke="#000" />
                  <rect x={30 + i * CELL + CELL / 2} y="38" width={CELL / 2} height="26" fill={TONE.surplus} stroke="#000" />
                  {focus && <rect x={28} y="36" width={CELL + 4} height="30" fill="none" stroke="#d6452f" strokeWidth="2" />}
                </g>
              );
            })}
            <Fade show={s === 1}>
              <text x="44" y="82" fontSize="9">
                one hour = 6 pennies of value:
              </text>
              <text x="44" y="95" fontSize="9" fill="#1f7a46" fontWeight="600">
                3 for Sam
              </text>
              <text x="100" y="95" fontSize="9" fill="#8a6d00" fontWeight="600">
                3 for Moneybags
              </text>
            </Fade>

            <Figure who="sam" x={70} y={212} scale={0.75} mood={s >= 2 ? "sad" : "happy"} />
            <text x="160" y="140" textAnchor="middle" fontSize="9.5">
              Sam earns
            </text>
            <text x="160" y="164" textAnchor="middle" fontSize="20" fontWeight="600">
              {pennies}p
            </text>
            <text x="160" y="180" textAnchor="middle" fontSize="9">
              {pennies / 12} {pennies === 12 ? "coin" : "coins"}
            </text>

            <text x="285" y="140" textAnchor="middle" fontSize="9.5">
              he needs
            </text>
            <text x="285" y="164" textAnchor="middle" fontSize="20" fontWeight="600">
              36p
            </text>
            <text
              x="285"
              y="184"
              textAnchor="middle"
              fontSize="9.5"
              fontWeight="600"
              fill={pennies >= 36 ? "#2a9d5b" : "#d6452f"}
              style={{ transition: "fill 400ms" }}
            >
              {pennies >= 36 ? "enough" : `${36 - pennies}p short`}
            </text>

            <Fade show={s === 4}>
              <rect x="190" y="194" width="160" height="22" fill="#fff" stroke="#000" />
              <text x="270" y="209" textAnchor="middle" fontSize="9" fontWeight="600">
                London builders, 1860: no!
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.3 · Overtime and the race to the bottom
 * Marx: normal hour 3d. (half unpaid), overtime hour 4d. (a third
 * unpaid); London "undersellers" got 18 hours' work for 12 hours'
 * wages; Redgrave, 1839-1859: wages rose under the 10 Hours' Act and fell
 * where days lasted 14 to 15 hours.
 * ───────────────────────────────────────────────────────────── */
function HourPie({ x, y, paid, label }: { x: number; y: number; paid: number; label: string }) {
  // a 6-penny hour as a circle; `paid` pennies go to the worker
  const angle = (paid / 6) * 2 * Math.PI;
  const r = 26;
  const ex = x + r * Math.sin(angle);
  const ey = y - r * Math.cos(angle);
  const large = paid > 3 ? 1 : 0;
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={TONE.surplus} stroke="#000" />
      <path d={`M${x},${y} L${x},${y - r} A${r},${r} 0 ${large} 1 ${ex},${ey} Z`} fill={TONE.wage} stroke="#000" />
      <text x={x} y={y + r + 14} textAnchor="middle" fontSize="9.5" fontWeight="600">
        {label}
      </text>
      <text x={x} y={y + r + 27} textAnchor="middle" fontSize="9">
        Sam {paid}p, boss {6 - paid}p
      </text>
    </g>
  );
}

export function OvertimeAndTheRace() {
  return (
    <Player
      id="anim-20-3"
      title="20.3 · Overtime and the race to the bottom"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Many trades call the first 10 hours “the regular hours”. Anything after that is overtime, paid a little better." },
        {
          caption: "But the regular price is set so low that 10 regular hours don't add up to a living. To earn enough, Sam has to work overtime as well. Marx found this in many British trades.",
          ms: 5200,
        },
        {
          caption: "Overtime pays 4 pennies instead of 3, which feels generous. But the hour still makes 6 pennies of value. Moneybags now keeps a third of the hour instead of a half: still unpaid work.",
          ms: 5600,
        },
        {
          caption: "Competition makes it worse. London bakers told Parliament that some masters got 18 hours of work for 12 hours' wages, then sold their bread cheaper. Honest bakers like Mia were forced to follow.",
          ms: 5800,
        },
        {
          caption: "Marx's conclusion: the longer the working days in a trade, the lower the wages. A factory inspector found that from 1839 to 1859, wages rose in factories under the 10-hour law and fell where days ran 14 to 15 hours.",
          ms: 6200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the day: regular hours and overtime */}
          <Fade show={s <= 1}>
            <text x="30" y="30" fontSize="10" fontWeight="600">
              Sam&apos;s day
            </text>
            <rect x="30" y="40" width="200" height="24" fill={TONE.wage} stroke="#000" />
            <rect x="230" y="40" width="60" height="24" fill="#7fc79f" stroke="#000" />
            <text x="130" y="56" textAnchor="middle" fontSize="9" fill="#fff">
              10 regular hours at 3p
            </text>
            <text x="260" y="56" textAnchor="middle" fontSize="9">
              overtime 4p
            </text>
            <Fade show={s === 1} delay={200}>
              <text x="130" y="96" textAnchor="middle" fontSize="11">
                10 &times; 3p = <tspan fontWeight="700">30p</tspan>
              </text>
              <text x="130" y="112" textAnchor="middle" fontSize="9.5" fill="#d6452f">
                6p short of a living
              </text>
              <text x="260" y="96" textAnchor="middle" fontSize="11">
                + 2 &times; 4p = <tspan fontWeight="700">38p</tspan>
              </text>
              <text x="260" y="112" textAnchor="middle" fontSize="9.5" fill="#2a9d5b">
                only now enough
              </text>
            </Fade>
            <Figure who="sam" x={180} y={210} scale={0.75} mood={s === 1 ? "sleepy" : "happy"} />
            <text x="180" y="156" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
              (example hours; the 3p and 4p are Marx&apos;s)
            </text>
          </Fade>

          {/* who keeps what part of an hour */}
          <Fade show={s === 2}>
            <HourPie x={110} y={80} paid={3} label="a regular hour" />
            <HourPie x={250} y={80} paid={4} label="an overtime hour" />
            <text x="110" y="168" textAnchor="middle" fontSize="10" fontWeight="600">
              half unpaid
            </text>
            <text x="250" y="168" textAnchor="middle" fontSize="10" fontWeight="600">
              a third unpaid
            </text>
          </Fade>

          {/* the undersellers */}
          <Fade show={s === 3}>
            <Figure who="mia" x={95} y={205} scale={0.8} mood="sad" />
            <Figure name="underseller" x={265} y={205} scale={0.8} />
            <g transform="translate(95 60)">
              <Loaf />
            </g>
            <g transform="translate(265 60)">
              <Loaf />
            </g>
            <g transform="translate(95 90)">
              <Tag text="full price" />
            </g>
            <g transform="translate(265 90)">
              <Tag text="cheaper" />
            </g>
            <text x="95" y="122" textAnchor="middle" fontSize="9">
              12 hours&apos; work, 12 hours&apos; pay
            </text>
            <text x="265" y="122" textAnchor="middle" fontSize="9">
              18 hours&apos; work, 12 hours&apos; pay
            </text>
          </Fade>

          {/* Redgrave's twenty years */}
          <Fade show={s === 4}>
            <text x="180" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
              wages, 1839 to 1859
            </text>
            <text x="100" y="52" textAnchor="middle" fontSize="9">
              10-hour factories
            </text>
            <text x="260" y="52" textAnchor="middle" fontSize="9">
              14 to 15-hour factories
            </text>
            <path d="M100,140 L100,72" stroke="#2a9d5b" strokeWidth="6" markerEnd="url(#c20up)" />
            <path d="M260,72 L260,140" stroke="#d6452f" strokeWidth="6" markerEnd="url(#c20down)" />
            <text x="100" y="164" textAnchor="middle" fontSize="11" fontWeight="600" fill="#2a9d5b">
              rose
            </text>
            <text x="260" y="164" textAnchor="middle" fontSize="11" fontWeight="600" fill="#d6452f">
              fell
            </text>
            <text x="180" y="196" textAnchor="middle" fontSize="9.5">
              longer days, lower wages
            </text>
            <defs>
              <marker id="c20up" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                <path d="M0,0 L4,2 L0,4 Z" fill="#2a9d5b" />
              </marker>
              <marker id="c20down" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                <path d="M0,0 L4,2 L0,4 Z" fill="#d6452f" />
              </marker>
            </defs>
          </Fade>
        </>
      )}
    </Player>
  );
}
