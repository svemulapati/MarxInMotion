"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coins, Cross, Fade, Place, Tag } from "@/components/anim/Things";
import { TONE, Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

export const T = "700ms cubic-bezier(.2,.8,.2,1)";
export const GOLD = "#e6b800";
export const RED = "#d6452f";
export const GREEN = "#2a9d5b";

/**
 * The Old Thinkers' Shelf: a short bookshelf in the Tiny Town library. The
 * book for this chapter's visitor sticks out and carries `label`.
 */
export function Shelf({ x, y, label, pulled = true }: { x: number; y: number; label: string; pulled?: boolean }) {
  const spines = ["#8a5a2b", "#5c6b8a", "#7a3b3b", "#4f6b4a", "#8a7a3b", "#6b4a6b", "#3b5c6b"];
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-4" y="40" width="98" height="5" fill="#6b4a2b" />
      {spines.map((c, i) =>
        i === 3 ? null : <rect key={i} x={i * 13} y={10 + (i % 3) * 2} width="11" height={30 - (i % 3) * 2} fill={c} stroke="#000" strokeWidth=".6" />
      )}
      <g style={{ transform: `translate(0px, ${pulled ? -16 : 0}px)`, transition: `transform ${T}` }}>
        <rect x="39" y="10" width="11" height="30" fill={GOLD} stroke="#000" strokeWidth=".8" />
      </g>
      <text x="45" y="58" textAnchor="middle" fontSize="8.5">
        {label}
      </text>
    </g>
  );
}

/** A simple open book, for a visitor's famous work. */
export function OpenBook({ title, year }: { title: string; year: string }) {
  return (
    <g>
      <path d="M-30,-14 Q-15,-20 0,-14 L0,14 Q-15,8 -30,14 Z" fill="#fff" stroke="#000" strokeWidth="1" />
      <path d="M30,-14 Q15,-20 0,-14 L0,14 Q15,8 30,14 Z" fill="#fff" stroke="#000" strokeWidth="1" />
      <text y="28" textAnchor="middle" fontSize="8.5" fontWeight="600">
        {title}
      </text>
      <text y="39" textAnchor="middle" fontSize="8" fillOpacity=".6">
        {year}
      </text>
    </g>
  );
}

/** A balance beam that tips by `tilt` degrees, with labelled pans. */
export function Seesaw({ x, y, tilt, left, right }: { x: number; y: number; tilt: number; left: string; right: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <polygon points="0,4 -12,30 12,30" fill="#000" />
      <g style={{ transform: `rotate(${tilt}deg)`, transition: `transform ${T}` }}>
        <line x1="-80" y1="0" x2="80" y2="0" stroke="#000" strokeWidth="3" />
        <rect x="-112" y="-14" width="64" height="12" fill="#fff" stroke="#000" />
        <rect x="48" y="-14" width="64" height="12" fill="#fff" stroke="#000" />
        <text x="-80" y="-5" textAnchor="middle" fontSize="7.5">
          {left}
        </text>
        <text x="80" y="-5" textAnchor="middle" fontSize="7.5">
          {right}
        </text>
      </g>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.1 · Profit from handing it over (Steuart's "profit upon alienation")
 * Steuart: price = "real value" + "profit upon alienation"; the gain on one
 * side is a loss on the other, "a vibration of the balance of wealth".
 * The 30 / 33 coin figures are this site's (workshop numbers).
 * ───────────────────────────────────────────────────────────── */
export function ProfitFromHandingItOver() {
  return (
    <Player
      id="anim-v4-1-1"
      title="1.1 · Profit from handing it over"
      steps={[
        { caption: "A book is pulled from the Old Thinkers' Shelf. Our first visitor is Sir James Steuart, a Scottish writer whose big book came out in 1767." },
        {
          caption: "Steuart says every price has two parts: the thing's real value, and an extra the seller gets by selling. He calls the extra profit upon alienation: profit from handing it over.",
          ms: 4600,
        },
        { caption: "So Mr. Moneybags sells yarn worth 30 coins to Tom for 33. Moneybags is 3 coins richer. (Our numbers.)" },
        { caption: "But Tom is exactly 3 coins poorer. Steuart saw this himself: what one side gains, the other side loses." },
        {
          caption: "He called it a vibration of the balance of wealth. The scale tips one way, then the other, but Tiny Town as a whole is no richer. Nothing new was made.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const mb = s >= 2 ? 103 : 100;
        const tom = s >= 3 ? 97 : 100;
        return (
          <>
            <Fade show={s <= 3}>
              <Shelf x={18} y={8} label="Steuart, 1767" />
            </Fade>
            <Fade show={s <= 1}>
              <Figure name="James Steuart" x={180} y={200} scale={0.85} />
            </Fade>

            {/* the price, split in two */}
            <Fade show={s === 1}>
              <g transform="translate(180 72)">
                <Yarn />
              </g>
              <rect x="70" y="96" width="200" height="16" fill={TONE.cotton} />
              <rect x="270" y="96" width="20" height="16" fill={GOLD} />
              <text x="170" y="108" textAnchor="middle" fontSize="8.5">
                real value 30
              </text>
              <text x="296" y="108" fontSize="8.5" fontWeight="700">
                + 3
              </text>
              <text x="180" y="128" textAnchor="middle" fontSize="9">
                price = real value + profit upon alienation
              </text>
            </Fade>

            {/* the sale */}
            <Fade show={s >= 2}>
              <Figure who="moneybags" x={60} y={200} scale={0.8} />
              <Figure who="tom" x={300} y={200} scale={0.8} mood={s >= 3 ? "sad" : "happy"} />
              <Place x={s >= 2 ? 262 : 98} y={150} scale={0.9}>
                <Yarn />
              </Place>
              <Fade show={s <= 3}>
                <g transform="translate(232 128)">
                  <Tag text="33 coins" />
                </g>
              </Fade>
              <text x="60" y="122" textAnchor="middle" fontSize="11" fontWeight="600" fill={s >= 2 ? GREEN : "#000"}>
                {mb}
              </text>
              <text x="300" y="122" textAnchor="middle" fontSize="11" fontWeight="600" fill={s >= 3 ? RED : "#000"}>
                {tom}
              </text>
              <text x="60" y="134" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                coins
              </text>
              <text x="300" y="134" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                coins
              </text>
            </Fade>

            {/* the balance between them */}
            <Fade show={s >= 4}>
              <g className="v4c01-rock">
                <Seesaw x={180} y={50} tilt={0} left="Moneybags" right="Tom" />
              </g>
              <text x="180" y="104" textAnchor="middle" fontSize="10" fontWeight="600">
                town total: 200 before, 200 after
              </text>
            </Fade>
            <style>{`
              @keyframes v4c01-rock { 0%,100% { transform: rotate(-7deg); } 50% { transform: rotate(7deg); } }
              .v4c01-rock { transform-box: fill-box; transform-origin: 50% 0%; animation: v4c01-rock 2.4s ease-in-out infinite; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.2 · Where Steuart stopped
 * Marx's "General Observation"; Steuart's positive vs relative profit;
 * Marx's verdict and the credit he gives Steuart (genesis of capital).
 * ───────────────────────────────────────────────────────────── */
export function WhereSteuartStopped() {
  return (
    <Player
      id="anim-v4-1-2"
      title="1.2 · Where Steuart stopped"
      steps={[
        {
          caption: "Marx opens the whole book with a warning: every economist before him studied surplus-value only in its costumes, as profit or as rent, never on its own.",
          ms: 4600,
        },
        { caption: "Steuart does know a second kind of profit, positive profit. It comes from more work, skill and cleverness, and it makes the whole town richer." },
        { caption: "But by positive profit he means more useful things in the town. When he explains a boss's own profit, he goes straight back to selling above value." },
        {
          caption: "Marx spells out what follows: on Steuart's theory, if every good were sold at its real value, no boss would make any profit at all.",
          ms: 4400,
        },
        {
          caption: "Still, Marx gives him credit. Steuart studied how country people were cut off from the land and left with only their hands to sell. That is how capital is born (Volume I, Part 8).",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* surplus-value in costumes */}
          <Fade show={s === 0}>
            <rect x="150" y="70" width="60" height="44" fill={GOLD} stroke="#000" />
            <text x="180" y="96" textAnchor="middle" fontSize="9" fontWeight="600">
              surplus-value
            </text>
            <g transform="translate(100 140)">
              <Tag text="profit" />
            </g>
            <g transform="translate(262 140)">
              <Tag text="rent" />
            </g>
            <path d="M160,114 L110,132 M200,114 L250,132" stroke="#000" strokeOpacity=".4" />
            <text x="180" y="190" textAnchor="middle" fontSize="9" fillOpacity=".7">
              everyone studied the costumes, not the thing inside
            </text>
          </Fade>

          {/* positive profit: the town's pile grows */}
          <Fade show={s === 1 || s === 2}>
            <text x="90" y="40" textAnchor="middle" fontSize="9" fontWeight="600">
              positive profit
            </text>
            <g transform="translate(90 120)">
              <Coins n={s >= 1 ? 6 : 4} label="the town makes more" />
            </g>
            <Figure name="James Steuart" x={250} y={200} scale={0.8} />
          </Fade>
          <Fade show={s === 2}>
            <g transform="translate(230 100)">
              <Bubble w={118} lines={["A boss's profit?", "Sell above value!"]} />
            </g>
          </Fade>

          {/* Marx's conclusion */}
          <Fade show={s === 3}>
            <rect x="60" y="60" width="240" height="20" fill={TONE.cotton} />
            <text x="180" y="74" textAnchor="middle" fontSize="9">
              every good sold at its real value
            </text>
            <text x="180" y="112" textAnchor="middle" fontSize="12" fontWeight="600">
              profit = 0
            </text>
            <g transform="translate(232 108)">
              <Cross />
            </g>
            <Figure name="Marx" x={180} y={200} scale={0.8} />
          </Fade>

          {/* the genesis of capital */}
          <Fade show={s === 4}>
            <g transform="translate(70 120)">
              <rect x="-24" y="-18" width="48" height="30" fill="#fff" stroke="#000" />
              <polygon points="-30,-18 0,-40 30,-18" fill="#8a5a2b" stroke="#000" />
              <text y="28" textAnchor="middle" fontSize="8">
                cottage and field
              </text>
            </g>
            <g transform="translate(70 108)">
              <Cross />
            </g>
            <path d="M110,150 L230,150" stroke="#000" strokeDasharray="4 4" markerEnd="url(#v4c01arr)" />
            <defs>
              <marker id="v4c01arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>
            <Figure name="farm family" x={170} y={200} scale={0.7} />
            <g transform="translate(290 120)">
              <rect x="-30" y="-20" width="60" height="34" fill="#fff" stroke="#000" />
              <path d="M-30,-20 l10,-10 v10 l10,-10 v10 l10,-10 v10" fill="none" stroke="#000" />
              <text y="28" textAnchor="middle" fontSize="8">
                work for hire
              </text>
            </g>
            <text x="180" y="40" textAnchor="middle" fontSize="9" fontWeight="600" fill={CAST.sam.color}>
              hands to sell, nothing else
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
