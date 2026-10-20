"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade, Place } from "@/components/anim/Things";
import { Cotton, Spindle, TONE, Yarn } from "@/components/anim/Workshop";
import { Shelf } from "./ch20-animations";

/* ─────────────────────────────────────────────────────────────
 * 23.1 · The worker's right, turned upside down (the law of appropriation)
 * ───────────────────────────────────────────────────────────── */
export function RightUpsideDown() {
  return (
    <Player
      id="anim-v4-23-1"
      title="23.1 · The worker's right, turned upside down"
      steps={[
        { caption: "Antoine Cherbuliez, a Swiss economist, wrote a book in 1841 called Rich or Poor. He starts from a fair-sounding rule." },
        { caption: "His rule: a worker has an exclusive right to what his own labour makes. Mia's bread is Mia's." },
        { caption: "But now Mr. Moneybags supplies the cotton, the spindles and Sam's food in advance. Sam spins." },
        { caption: "So who owns the yarn? Cherbuliez says, by the very same rule, it belongs entirely to Mr. Moneybags, who supplied everything." },
        {
          caption: "Marx's reply: a rule that begins “you own what you make” ends with “you own nothing you make”. That is not a law of appropriation, he says, but of expropriation.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <Shelf x={250} y={12} lit={3} label="Cherbuliez, 1841" />
          <g transform="translate(120 34)">
            <rect width="120" height="28" fill="#fff" stroke="#000" />
            <text x="60" y="12" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
              the rule
            </text>
            <text x="60" y="23" textAnchor="middle" fontSize="8.5" fontWeight="600">
              {s === 4 ? "you own nothing you make" : "you own what you make"}
            </text>
          </g>

          {/* Mia owns her bread */}
          <Fade show={s === 1}>
            <Figure who="mia" x={90} y={204} scale={0.8} />
            <g transform="translate(140 170)">
              <path d="M-20,8 Q-22,-10 0,-12 Q22,-10 20,8 Z" fill="#c98a3a" stroke="#000" strokeWidth="1.2" />
            </g>
            <path d="M104,150 L124,160" stroke="#2a9d5b" strokeWidth="2" />
            <text x="200" y="174" fontSize="8.5" fill="#2a9d5b" fontWeight="600">
              Mia&apos;s
            </text>
          </Fade>

          {/* the workshop */}
          <Fade show={s >= 2}>
            <Figure who="moneybags" x={300} y={204} scale={0.75} />
            <Figure who="sam" x={70} y={204} scale={0.75} mood={s >= 3 ? "sad" : "happy"} />
            <Place x={160} y={110} show={s === 2}>
              <Cotton />
            </Place>
            <Place x={196} y={110} show={s === 2}>
              <Spindle />
            </Place>
            <Place x={s >= 3 ? 270 : 130} y={s >= 3 ? 150 : 160} scale={1.3}>
              <Yarn />
            </Place>
            <Fade show={s >= 3}>
              <text x="270" y="134" textAnchor="middle" fontSize="8.5" fontWeight="600">
                all his
              </text>
            </Fade>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(86 156)">
              <Bubble w={100} lines={["law of expropriation,", "says Marx"]} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 23.2 · More machines, a smaller share (Cherbuliez borrowing from Sismondi)
 * ───────────────────────────────────────────────────────────── */
const STAGES = [
  { c: 24, v: 3 },
  { c: 36, v: 3 },
  { c: 48, v: 3 },
];

export function SmallerShare() {
  return (
    <Player
      id="anim-v4-23-2"
      title="23.2 · More machines, a smaller share"
      steps={[
        { caption: "Cherbuliez noticed something else. Mr. Moneybags' capital is made of two parts: machines and materials, and the wages for Sam." },
        { caption: "As the workshop grows, it adds more and more machines and cotton." },
        { caption: "The wage part hardly grows at all, so its share of the whole keeps shrinking. (These numbers are made up to show the idea.)" },
        {
          caption: "So, Cherbuliez said, the need for workers falls relatively, and some are left over. Marx agreed, but called Cherbuliez an eclectic who mixed Ricardo's ideas with those of Sismondi without fitting them together.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const st = STAGES[Math.min(2, s)];
        const unit = 5;
        return (
          <>
            <Shelf x={250} y={12} lit={3} label="Cherbuliez, 1841" />
            <text x="20" y="84" fontSize="8.5" fillOpacity=".6">
              Mr. Moneybags&apos; capital
            </text>
            <rect x="20" y="92" width={st.c * unit} height="26" fill={TONE.cotton} stroke="#000" style={{ transition: "width 700ms cubic-bezier(.2,.8,.2,1)" }} />
            <text x={20 + (st.c * unit) / 2} y="109" textAnchor="middle" fontSize="8.5" style={{ transition: "x 700ms" }}>
              machines and materials: {st.c}
            </text>
            <rect
              x={20 + st.c * unit}
              y="92"
              width={st.v * unit}
              height="26"
              fill={TONE.wage}
              stroke="#000"
              style={{ transition: "x 700ms cubic-bezier(.2,.8,.2,1)" }}
            />
            <text x={20 + st.c * unit + 8} y="132" fontSize="8.5" fill={TONE.wage} fontWeight="600" style={{ transition: "x 700ms" }}>
              wages: {st.v}
            </text>
            <Fade show={s >= 2}>
              <text x="20" y="160" fontSize="9" fontWeight="600">
                wages&apos; share: {Math.round((st.v / (st.c + st.v)) * 100)}%
              </text>
            </Fade>
            <Fade show={s === 3}>
              {[0, 1, 2].map((i) => (
                <Figure key={i} name={i === 0 ? "worker" : ""} x={210 + i * 30} y={210} scale={0.55} label={false} mood="sad" />
              ))}
              <text x="240" y="160" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                left over
              </text>
              <Figure name="Marx" x={50} y={212} scale={0.6} />
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
