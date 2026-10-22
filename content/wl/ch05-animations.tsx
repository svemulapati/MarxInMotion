"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Gold, Place } from "@/components/anim/Things";
import { Cotton } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A spinning machine, centred on (0, 0). */
const Spinner = () => (
  <g>
    <rect x="-24" y="-16" width="48" height="32" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <circle cx="-9" cy="-1" r="9" fill="none" stroke="#000" />
    <line x1="-9" y1="-10" x2="-9" y2="8" stroke="#000" />
    <line x1="-18" y1="-1" x2="0" y2="-1" stroke="#000" />
    {[6, 12, 18].map((x) => (
      <line key={x} x1={x} y1="-12" x2={x} y2="12" stroke="#000" strokeWidth="1.5" />
    ))}
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 5.1 · A machine, or capital? (the same thing in different relations)
 * ───────────────────────────────────────────────────────────── */
export function MachineOrCapital() {
  return (
    <Player
      id="anim-wl-5-1"
      viewBox="0 0 360 240"
      title="5.1 · A machine, or capital?"
      steps={[
        { caption: "The old economists said: capital is just tools, materials and food used to make more things. So is this spinning machine capital?" },
        { caption: "Put it in a museum. It is a machine for spinning cotton. Nobody works it, nobody earns from it." },
        { caption: "Put it in Leo's cottage. He spins his own yarn for his own weaving. It is his tool, nothing more." },
        { caption: "Now put it in Mr. Moneybags' mill, and hire Sam, who owns nothing else, to work it for a wage. Now it is capital." },
        {
          caption: "Same machine, every time. What changed is the relation between people around it. Marx says gold is only money, and a machine only capital, under certain conditions.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const scene = s <= 1 ? 0 : s - 1; // 0 museum, 1 cottage, 2 mill, 3 mill (summary)
        return (
          <>
            {/* three stages laid side by side; the machine slides between them */}
            {["a museum", "Leo's cottage", "Moneybags' mill"].map((place, i) => (
              <g key={place} style={{ opacity: s === 0 ? 0.3 : scene === i || (s === 4 && i === 2) ? 1 : 0.25, transition: "opacity 500ms" }}>
                <rect x={14 + i * 114} y="40" width="104" height="152" fill="#fff" stroke="#000" strokeOpacity=".3" />
                <text x={66 + i * 114} y="56" textAnchor="middle" fontSize="9.5" fontWeight="600">
                  {place}
                </text>
              </g>
            ))}
            {/* a little sign in the museum, the cottage roof, the mill teeth */}
            <text x="66" y="180" textAnchor="middle" fontSize="8" fillOpacity=".6">
              please do not touch
            </text>
            <path d="M128,40 L180,22 L232,40" fill="none" stroke="#000" strokeOpacity=".3" />
            <polygon points="242,40 256,28 256,40 270,28 270,40 284,28 284,40" fill="#000" fillOpacity=".3" />

            <Place x={s <= 1 ? 66 : s === 2 ? 180 : 294} y={s >= 3 ? 100 : 110}>
              <Spinner />
            </Place>

            <Fade show={s === 2}>
              <Figure who="leo" x={152} y={178} scale={0.7} />
            </Fade>
            <Fade show={s >= 3}>
              <Figure who="sam" x={268} y={178} scale={0.7} />
              <Figure who="moneybags" x={322} y={178} scale={0.7} />
              <g transform="translate(296 70)">
                <Coins n={3} />
              </g>
            </Fade>

            <text x="180" y="212" textAnchor="middle" fontSize="11" fontWeight="600" dy="4">
              {s === 0 ? "a machine for spinning cotton" : s === 1 ? "just a machine" : s === 2 ? "a worker's own tool" : "capital"}
            </text>
            <Fade show={s === 4}>
              <text x="180" y="228" textAnchor="middle" fontSize="9" fillOpacity=".7">
                capital is a relation between people, not a thing
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.2 · New clothes, same capital (capital as a sum of exchange values)
 * ───────────────────────────────────────────────────────────── */
const WOOL = (
  <g>
    <circle r="12" fill="#f2efe6" stroke="#000" />
    <path d="M-7,-2 q3,-6 7,0 q4,-6 7,0 M-7,5 q3,-6 7,0 q4,-6 7,0" fill="none" stroke="#000" strokeWidth=".8" />
  </g>
);
const SHIP = (
  <g>
    <path d="M-20,4 L20,4 L14,14 L-14,14 Z" fill="#8a5a2b" stroke="#000" />
    <rect x="-4" y="-14" width="8" height="18" fill="#333" />
    <path d="M-2,-18 q4,-6 0,-10" fill="none" stroke="#999" strokeWidth="2" />
  </g>
);

export function NewClothesSameCapital() {
  const bodies = [
    { label: "wool", draw: WOOL },
    { label: "cotton", draw: <Cotton key="c" /> },
    { label: "a steamship share", draw: SHIP },
  ];
  return (
    <Player
      id="anim-wl-5-2"
      title="5.2 · New clothes, same capital"
      steps={[
        { caption: "Mr. Moneybags' capital is 100 coins' worth of wool. (Made-up amount.)" },
        { caption: "He sells the wool and buys cotton instead, still worth 100 coins. Is his capital any different?" },
        { caption: "Then he swaps the cotton for a share in a steamship, worth 100 coins. Wool, cotton, ships: its body keeps changing." },
        {
          caption: "But the capital is the same: 100 coins of exchange-value. Marx says capital is not only a pile of things, it is a sum of values that can wear any costume.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          {bodies.map((b, i) => (
            <Place key={b.label} x={180} y={100} scale={1.8} show={Math.min(s, 2) === i}>
              {b.draw}
            </Place>
          ))}
          <text x="180" y="160" textAnchor="middle" fontSize="11">
            {bodies[Math.min(s, 2)].label}
          </text>
          <g transform="translate(180 190)">
            <Coins n={4} label="worth 100 coins" />
          </g>
          {/* the trail of costumes */}
          {bodies.map((b, i) => (
            <Fade key={b.label} show={s >= 3}>
              <g transform={`translate(${50 + i * 26} 50) scale(.55)`}>{b.draw}</g>
            </Fade>
          ))}
          <Fade show={s >= 3}>
            <text x="76" y="76" textAnchor="middle" fontSize="8" fillOpacity=".6">
              its old bodies
            </text>
            <g transform="translate(300 60)">
              <Gold label="100" />
            </g>
            <text x="300" y="88" textAnchor="middle" fontSize="8" fillOpacity=".6">
              same value
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.3 · Past work and living work (capital as the rule of accumulated
 * labour over living labour)
 * ───────────────────────────────────────────────────────────── */
export function PastWorkAndLivingWork() {
  return (
    <Player
      id="anim-wl-5-3"
      viewBox="0 0 360 240"
      title="5.3 · Past work and living work"
      steps={[
        { caption: "Everything in the mill was made by someone's work, long ago: the machine, the cotton, the coins. Marx calls it accumulated labour, or past work." },
        { caption: "Sam's work today is living work. It is the only thing in the mill that is happening right now." },
        { caption: "The old economists said: past work helps living work make new things. That sounds friendly." },
        {
          caption: "Marx turns the arrow round. Here, living work serves past work: Sam's day keeps Moneybags' pile of value safe and makes it grow.",
          ms: 4600,
        },
        {
          caption: "That only works if there are people who own nothing but their ability to work. Marx says that class is what turns a pile of things into capital.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const flipped = s >= 3;
        return (
          <>
            {/* past work */}
            <Fade show={s >= 0}>
              <g transform="translate(70 100)">
                <Spinner />
              </g>
              <g transform="translate(46 140) scale(.8)">
                <Cotton />
              </g>
              <g transform="translate(94 140)">
                <Coins n={2} />
              </g>
              <text x="70" y="172" textAnchor="middle" fontSize="10" fontWeight="600">
                past work
              </text>
              <text x="70" y="185" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                (accumulated labour)
              </text>
            </Fade>

            {/* living work */}
            <Fade show={s >= 1}>
              <Figure who="sam" x={290} y={150} />
              <text x="290" y="172" textAnchor="middle" fontSize="10" fontWeight="600">
                living work
              </text>
            </Fade>

            {/* the arrow, which flips */}
            <Fade show={s >= 2}>
              <g style={{ transformOrigin: "180px 110px", transform: `rotate(${flipped ? 180 : 0}deg)`, transition: `transform ${T}` }}>
                <line x1="125" y1="110" x2="235" y2="110" stroke={flipped ? CAST.moneybags.color : "#2a9d5b"} strokeWidth="3" />
                <path d="M235,104 L247,110 L235,116 Z" fill={flipped ? CAST.moneybags.color : "#2a9d5b"} />
              </g>
              <text x="180" y="96" textAnchor="middle" fontSize="9.5">
                {flipped ? "living work serves past work" : "past work helps living work"}
              </text>
            </Fade>

            {/* the pile grows */}
            <Fade show={s >= 3}>
              <g transform="translate(70 60)">
                <Coins n={s >= 3 ? 3 : 2} label="grows" />
              </g>
            </Fade>

            <Fade show={s >= 4}>
              <rect x="40" y="200" width="280" height="22" fill="#000" />
              <text x="180" y="215" textAnchor="middle" fontSize="9.5" fill="#fff">
                a class with nothing but its ability to work
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
