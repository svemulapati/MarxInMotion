"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Corn, Cross, Fade, Linen, Loaf, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

/* ─────────────────────────────────────────────────────────────
 * 5.1 · The clock of one round
 * Marx: total time = time of production + time of circulation. Production
 * time includes pauses and stock waiting; only labour-time makes value.
 * Production time can exceed labour-time (grain, wine). Circulation time
 * makes no value and limits production.
 * ───────────────────────────────────────────────────────────── */
const X0 = 30;
const W = 300;

type Piece = { w: number; fill: string; label: string; hatch?: boolean };
const PROD: Piece[] = [
  { w: 0.18, fill: CAST.sam.color, label: "work" },
  { w: 0.1, fill: "#4a4a4a", label: "night" },
  { w: 0.17, fill: CAST.sam.color, label: "work" },
  { w: 0.1, fill: "#d4d4d4", label: "stock" },
];
const CIRC: Piece[] = [
  { w: 0.32, fill: "#f4c7bd", label: "selling" },
  { w: 0.13, fill: "#f9e7a8", label: "buying" },
];

function Row({ y, pieces, start, show }: { y: number; pieces: Piece[]; start: number; show: boolean }) {
  const lefts = pieces.map((_, i) => X0 + (start + pieces.slice(0, i).reduce((a, q) => a + q.w, 0)) * W);
  return (
    <g>
      {pieces.map((p, i) => {
        const left = lefts[i];
        return (
          <g key={i} style={{ opacity: show ? 1 : 0, transition: `opacity 400ms ease ${show ? i * 150 : 0}ms` }}>
            <rect x={left} y={y} width={p.w * W} height="24" fill={p.fill} stroke="#000" strokeWidth="1" />
            <text x={left + (p.w * W) / 2} y={y + 15.5} textAnchor="middle" fontSize="7.5" fill={p.fill === "#4a4a4a" || p.fill === CAST.sam.color ? "#fff" : "#000"}>
              {p.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export function TheClockOfOneRound() {
  return (
    <Player
      id="anim-v2-5-1"
      title="5.1 · The clock of one round"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Every trip of capital round the circle takes time. Marx splits it in two: the time it spends in production and the time it spends in circulation, being sold and bought." },
        { caption: "Production time is more than work. The machines stand still at night, and cotton waits in the store before it is spun. Only the hours Sam actually works make new value." },
        {
          caption: "Sometimes nature does the waiting. Grandpa Ned sows his wheat in a day, then it grows for months with nobody working on it. Marx's examples are grain, wine in the cellar, and leather in the tannery.",
          ms: 5200,
        },
        { caption: "Then circulation time: selling the yarn, then buying new cotton. Selling is usually the hardest and longest part. No new value is made while capital is out here." },
        {
          caption: "So the shorter the circulation time, the more often the same coins can go round and set Sam to work. Marx calls circulation time a limit on production. Our round numbers are made up.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* braces over the two halves */}
          <text x={X0 + 0.275 * W} y="22" textAnchor="middle" fontSize="10" fontWeight="600">
            production time
          </text>
          <path d={`M${X0},30 L${X0},26 L${X0 + 0.55 * W},26 L${X0 + 0.55 * W},30`} fill="none" stroke="#000" />
          <text x={X0 + 0.775 * W} y="22" textAnchor="middle" fontSize="10" fontWeight="600">
            circulation time
          </text>
          <path d={`M${X0 + 0.555 * W},30 L${X0 + 0.555 * W},26 L${X0 + W},26 L${X0 + W},30`} fill="none" stroke="#000" />

          {/* the empty round, then the pieces */}
          <rect x={X0} y="36" width={W} height="24" fill="#fff" stroke="#000" strokeOpacity=".3" />
          <Row y={36} pieces={PROD} start={0} show={s >= 1} />
          <Row y={36} pieces={CIRC} start={0.55} show={s >= 3} />

          <Fade show={s >= 1}>
            {[0.09, 0.365].map((f) => (
              <text key={f} x={X0 + f * W} y="74" textAnchor="middle" fontSize="8.5" fill={CAST.sam.color} fontWeight="600">
                + value
              </text>
            ))}
          </Fade>
          <Fade show={s >= 3}>
            <text x={X0 + 0.775 * W} y="74" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
              no new value
            </text>
          </Fade>

          {/* Ned's wheat: production time far longer than work */}
          <Fade show={s === 2}>
            <Figure who="ned" x={40} y={170} scale={0.6} />
            <rect x={70} y="120" width="10" height="20" fill={CAST.ned.color} stroke="#000" />
            <rect x={80} y="120" width="220" height="20" fill="url(#v2c5grow)" stroke="#000" />
            <rect x={300} y="120" width="14" height="20" fill={CAST.ned.color} stroke="#000" />
            <text x="75" y="152" textAnchor="middle" fontSize="7.5">
              sow
            </text>
            <text x="190" y="152" textAnchor="middle" fontSize="8">
              the wheat grows by itself, months
            </text>
            <text x="307" y="152" textAnchor="middle" fontSize="7.5">
              reap
            </text>
            <g transform="translate(330 128) scale(.8)">
              <Corn />
            </g>
            <text x="190" y="176" textAnchor="middle" fontSize="9" fontWeight="600">
              production time much longer than working time
            </text>
          </Fade>
          <defs>
            <pattern id="v2c5grow" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="8" height="8" fill="#eef5e3" />
              <line x1="0" y1="0" x2="0" y2="8" stroke="#9ab86a" strokeWidth="2" />
            </pattern>
          </defs>

          {/* shorter circulation, more rounds */}
          <Fade show={s === 4}>
            {[
              { y: 120, circ: 0.45, rounds: 3, label: "slow selling" },
              { y: 168, circ: 0.15, rounds: 4, label: "quick selling" },
            ].map((r) => {
              const one = W / r.rounds;
              return (
                <g key={r.label}>
                  <text x={X0} y={r.y - 6} fontSize="8.5" fontWeight="600">
                    {r.label}: {r.rounds} rounds a year
                  </text>
                  {Array.from({ length: r.rounds }, (_, k) => (
                    <g key={k}>
                      <rect x={X0 + k * one} y={r.y} width={one * (1 - r.circ)} height="16" fill={CAST.sam.color} stroke="#000" />
                      <rect x={X0 + k * one + one * (1 - r.circ)} y={r.y} width={one * r.circ} height="16" fill="#f4c7bd" stroke="#000" />
                    </g>
                  ))}
                </g>
              );
            })}
            <text x="180" y="208" textAnchor="middle" fontSize="9.5" fontWeight="600">
              same coins, more trips through the workshop
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.2 · Bread that won't wait
 * Marx: use-values are perishable; if not sold in time the value in them
 * is lost. The more perishable a commodity, the narrower its market,
 * unless improved transport or a populous district widens it.
 * ───────────────────────────────────────────────────────────── */
export function BreadThatWontWait() {
  return (
    <Player
      id="anim-v2-5-2"
      title="5.2 · Bread that won't wait"
      steps={[
        { caption: "Mia bakes a tray of loaves before dawn. They are only good to eat for a day or two." },
        { caption: "If they are not sold in time, they go stale. Then the use-value is gone, and Marx says the value inside goes with it." },
        { caption: "So Mia's bread can only travel as far as a cart can go in a morning. Its market is a small circle round the bakery." },
        { caption: "Leo's linen keeps for years. It can wait in a shop for months and travel across the whole country." },
        {
          caption: "Better roads and railways stretch the circle, and a big crowded town can buy perishable things by the cartload. Marx gives the example of large breweries and dairies.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const breadR = s >= 4 ? 78 : 42;
        return (
          <>
            {/* the linen's wide market */}
            <circle
              cx="180"
              cy="112"
              r="104"
              fill="#bcd0f2"
              fillOpacity=".25"
              stroke={CAST.leo.color}
              strokeDasharray="5 4"
              style={{ opacity: s >= 3 ? 1 : 0, transition: "opacity 500ms" }}
            />
            <Fade show={s >= 3}>
              <text x="180" y="22" textAnchor="middle" fontSize="9" fill={CAST.leo.color} fontWeight="600">
                linen&apos;s market: the whole country
              </text>
              <Place x={290} y={60} scale={0.8}>
                <Linen />
              </Place>
            </Fade>

            {/* the bread's small market */}
            <circle
              cx="180"
              cy="112"
              r={breadR}
              fill="#f3d9a8"
              fillOpacity=".5"
              stroke={CAST.mia.color}
              strokeWidth="1.5"
              style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms, r 700ms cubic-bezier(.2,.8,.2,1)" }}
            />
            <Fade show={s >= 2}>
              <text x="180" y={112 + breadR + 12} textAnchor="middle" fontSize="8.5" fill="#8a6200" fontWeight="600" style={{ transition: "y 700ms" }}>
                {s >= 4 ? "bread's market, with a railway" : "bread's market"}
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <path d="M180,112 L330,200" stroke="#000" strokeWidth="3" strokeDasharray="10 4" />
              <text x="300" y="214" fontSize="8" textAnchor="middle">
                railway
              </text>
            </Fade>

            {/* the bakery and its loaves */}
            <rect x="160" y="96" width="40" height="30" fill="#fff" stroke="#000" />
            <text x="180" y="138" textAnchor="middle" fontSize="7.5">
              Mia&apos;s Bakery
            </text>
            <Figure who="mia" x={120} y={150} scale={0.55} mood={s === 1 ? "sad" : "happy"} />
            {[0, 1, 2].map((k) => (
              <Place key={k} x={170 + k * 10} y={108 - (k % 2) * 4} scale={0.45}>
                <g style={{ filter: s === 1 ? "grayscale(1)" : "none", opacity: s === 1 ? 0.6 : 1, transition: "opacity 500ms" }}>
                  <Loaf />
                </g>
              </Place>
            ))}
            <Fade show={s === 1}>
              <g transform="translate(212 92)">
                <Cross />
              </g>
              <text x="240" y="96" fontSize="9" fill="#d6452f" fontWeight="600">
                stale: value lost
              </text>
            </Fade>
            <Fade show={s === 0}>
              <text x="240" y="100" fontSize="9" fontWeight="600">
                baked at 4 a.m.
              </text>
              <text x="240" y="112" fontSize="8.5" fillOpacity=".6">
                good for a day or two
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
