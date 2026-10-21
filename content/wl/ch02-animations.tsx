"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Clock, Coins, Cross, Fade, Linen, Place, Tick } from "@/components/anim/Things";

/** A small weighing scale, for comparing sugar (by weight) with work (by time). */
function Scales() {
  return (
    <g>
      <line x1="0" y1="-26" x2="0" y2="10" stroke="#000" strokeWidth="2" />
      <line x1="-26" y1="-20" x2="26" y2="-20" stroke="#000" strokeWidth="2" />
      <path d="M-34,-8 Q-26,0 -18,-8 Z M18,-8 Q26,0 34,-8 Z" fill="#fff" stroke="#000" />
      <line x1="-26" y1="-20" x2="-26" y2="-8" stroke="#000" />
      <line x1="26" y1="-20" x2="26" y2="-8" stroke="#000" />
      <rect x="-12" y="10" width="24" height="4" fill="#000" />
    </g>
  );
}

/** A sack of sugar. */
function Sugar() {
  return (
    <g>
      <path d="M-12,12 L-14,-6 Q0,-16 14,-6 L12,12 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <text y="6" textAnchor="middle" fontSize="6.5" fontWeight="700">
        SUGAR
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.1 · What does Sam really sell?
 * ───────────────────────────────────────────────────────────── */
export function WhatSamReallySells() {
  return (
    <Player
      id="anim-wl-2-1"
      title="2.1 · What does Sam really sell?"
      steps={[
        { caption: "Ask any worker what wages are and they'll say: the money the boss pays me for my work. Sam gets 3 coins for a day." },
        { caption: "So it looks as if Sam sells his work for coins. Marx says this is only how it looks." },
        { caption: "What Mr. Moneybags really buys is the use of Sam's ability to work, for 12 hours. Marx calls it labour-power." },
        { caption: "Labour-power is a thing for sale, just like sugar. The difference: sugar is measured with scales, labour-power with a clock.", ms: 4400 },
        { caption: "So a wage is just the price of labour-power. (Marx's own example: 2 shillings for 12 hours of weaving. In Tiny Town it's 3 coins.)", ms: 4400 },
      ]}
    >
      {(s) => (
        <>
          <Figure who="sam" x={60} y={195} />
          <Figure who="moneybags" x={300} y={195} />

          <Place x={180} y={110} show={s <= 1}>
            <Coins n={3} label="3 coins" />
          </Place>
          <Fade show={s === 1}>
            <path d="M85,150 C130,130 230,130 275,150" fill="none" stroke="#000" strokeOpacity=".4" markerEnd="url(#wl2-arr)" />
            <text x="180" y="160" textAnchor="middle" fontSize="9.5">
              Sam&apos;s work?
            </text>
            <text x="180" y="60" textAnchor="middle" fontSize="11" fontWeight="600">
              it only looks like this
            </text>
          </Fade>
          <defs>
            <marker id="wl2-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>

          <Fade show={s >= 2}>
            <g transform="translate(180 92)">
              <rect x="-70" y="-26" width="140" height="40" fill="#fff" stroke="#2a9d5b" strokeWidth="2" />
              <text y="-9" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2a9d5b">
                labour-power
              </text>
              <text y="6" textAnchor="middle" fontSize="8.5">
                Sam&apos;s ability to work, for 12 hours
              </text>
            </g>
          </Fade>

          <Fade show={s === 3}>
            <g transform="translate(130 160)">
              <Scales />
              <g transform="translate(-26 -14) scale(.6)">
                <Sugar />
              </g>
              <text y="30" textAnchor="middle" fontSize="8.5">
                sugar: by weight
              </text>
            </g>
            <g transform="translate(230 152)">
              <Clock hours="by time" color="#2a9d5b" />
            </g>
          </Fade>

          <Fade show={s === 4}>
            <text x="180" y="150" textAnchor="middle" fontSize="12" fontWeight="600">
              wage = price of labour-power
            </text>
            <g transform="translate(180 175)">
              <Coins n={3} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.2 · Paid before the cloth is sold
 * ───────────────────────────────────────────────────────────── */
export function PaidBeforeTheCloth() {
  return (
    <Player
      id="anim-wl-2-2"
      title="2.2 · Paid before the cloth is sold"
      steps={[
        { caption: "Marx's example is a weaver. Mr. Moneybags hands Sam a loom and some yarn, and Sam weaves the yarn into cloth." },
        { caption: "At the end of the week Sam gets his 3 coins a day. They come from money Mr. Moneybags already had in his chest, long before the cloth is sold." },
        { caption: "Maybe the cloth sells for a lot. Maybe it sells for little. Maybe nobody buys it at all. Sam's wage is the same either way." },
        { caption: "So a wage is not Sam's share of the cloth he made. It is part of what the boss already owned, used to buy Sam's labour-power, just as he bought the loom and the yarn.", ms: 5000 },
      ]}
    >
      {(s) => (
        <>
          {/* the loom */}
          <g transform="translate(110 130)">
            <rect x="-40" y="-40" width="80" height="60" fill="none" stroke="#000" strokeWidth="2" />
            {[-28, -14, 0, 14, 28].map((x) => (
              <line key={x} x1={x} y1="-40" x2={x} y2="20" stroke="#bcd0f2" strokeWidth="2" />
            ))}
            <text y="36" textAnchor="middle" fontSize="8.5">
              Moneybags&apos; loom
            </text>
          </g>
          <Figure who="sam" x={50} y={200} scale={0.85} />
          <Figure who="moneybags" x={310} y={200} scale={0.85} />

          {/* the money already in the chest goes to Sam */}
          <g transform="translate(300 52)">
            <rect x="-22" y="-8" width="44" height="24" fill="#8a5a2b" stroke="#000" />
            <text y="30" textAnchor="middle" fontSize="8">
              money he already had
            </text>
          </g>
          <Place x={s >= 1 ? 50 : 300} y={s >= 1 ? 110 : 52} show={s >= 1} delay={200}>
            <Coins n={3} />
          </Place>

          {/* the cloth, and its uncertain sale */}
          <Place x={200} y={110} show={s >= 0}>
            <Linen label={s === 0 ? "cloth" : undefined} />
          </Place>
          <Fade show={s === 2}>
            {[
              ["sells high", 240, 112, true],
              ["sells low", 240, 132, true],
              ["not sold", 240, 152, false],
            ].map(([t, x, y, ok]) => (
              <g key={t as string} transform={`translate(${x} ${y})`}>
                <g transform="scale(.8)">{ok ? <Tick /> : <Cross />}</g>
                <text x="12" y="3" fontSize="8.5">
                  {t}
                </text>
              </g>
            ))}
            <text x="140" y="70" textAnchor="middle" fontSize="9" fontWeight="600">
              wage still 3 coins
            </text>
          </Fade>
          <Fade show={s === 3}>
            <rect x="40" y="8" width="210" height="26" fill="#000" />
            <text x="145" y="25" textAnchor="middle" fontSize="9.5" fill="#fff">
              a wage is not a share of the cloth
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.3 · Slave, serf, wage-worker
 * ───────────────────────────────────────────────────────────── */
const KINDS = [
  { name: "the slave", line1: "sold once,", line2: "body and all" },
  { name: "the serf", line1: "tied to the land,", line2: "gives the lord a share" },
  { name: "the wage-worker", line1: "free, but sells", line2: "hours, day by day" },
];

export function SlaveSerfWorker() {
  return (
    <Player
      id="anim-wl-2-3"
      title="2.3 · Slave, serf, wage-worker"
      steps={[
        { caption: "Selling your ability to work by the hour is not how it always was. Marx compares three kinds of worker." },
        { caption: "A slave was sold once and for all, body and all, from one owner to another. He did not sell his work; he himself was sold." },
        { caption: "A serf belonged to a piece of land and had to give its lord part of what he grew. The lord took a share; he did not pay a wage." },
        { caption: "The wage-worker is free: nobody owns him. But he must sell 8, 10, 12 or 15 hours of his life, day after day, to whoever will buy them.", ms: 4600 },
        { caption: "Sam can quit one boss whenever he likes. But he can't quit all bosses, because he has nothing else to live on. Marx says he belongs not to one boss, but to the whole class of them.", ms: 5200 },
      ]}
    >
      {(s) => (
        <>
          {KINDS.map((k, i) => {
            const x = 65 + i * 115;
            const on = s === i + 1 || (s === 4 && i === 2) || s === 0;
            return (
              <g key={k.name} style={{ opacity: on ? 1 : 0.3, transition: "opacity 500ms" }}>
                {i === 2 ? <Figure who="sam" x={x} y={150} scale={0.85} label={false} /> : <Figure name="" label={false} x={x} y={150} scale={0.85} mood="sad" />}
                {i === 0 && <path d={`M${x - 14},${125} q14,10 28,0`} stroke="#000" strokeWidth="2" fill="none" strokeDasharray="3 2" />}
                {i === 1 && <rect x={x - 30} y="150" width="60" height="8" fill="#8a5a2b" />}
                <text x={x} y="176" textAnchor="middle" fontSize="10" fontWeight="600">
                  {k.name}
                </text>
                <text x={x} y="190" textAnchor="middle" fontSize="8.5">
                  {k.line1}
                </text>
                <text x={x} y="202" textAnchor="middle" fontSize="8.5">
                  {k.line2}
                </text>
              </g>
            );
          })}
          <Fade show={s === 3}>
            <g transform="translate(295 60)">
              <Clock hours="8, 10, 12, 15 h" color="#2a9d5b" />
            </g>
          </Fade>
          <Fade show={s === 4}>
            {[0, 1, 2].map((i) => (
              <Figure key={i} who="moneybags" x={200 + i * 40} y={88} scale={0.55} label={false} />
            ))}
            <text x="240" y="28" textAnchor="middle" fontSize="9">
              can leave one boss,
            </text>
            <text x="240" y="40" textAnchor="middle" fontSize="9">
              not all of them
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
