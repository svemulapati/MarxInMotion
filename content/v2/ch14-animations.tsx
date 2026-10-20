"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const SEA = "#cfe3f3";
const GOODS = "#a9a9a9";
const MONEY = "#e6b800";

/** A small sailing ship. */
function Ship() {
  return (
    <g>
      <path d="M-18,0 L18,0 L12,9 L-12,9 Z" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="-22" stroke="#000" strokeWidth="1.2" />
      <path d="M1,-21 L14,-4 L1,-4 Z" fill="#fff" stroke="#000" strokeWidth="1" />
      <path d="M-1,-18 L-11,-4 L-1,-4 Z" fill="#fff" stroke="#000" strokeWidth="1" />
    </g>
  );
}

/** A little town: a few roofs and a name. */
function Town({ name, big = false }: { name: string; big?: boolean }) {
  const roofs = big ? [-14, 0, 14] : [-7, 7];
  return (
    <g>
      {roofs.map((x) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <rect x="-6" y="-8" width="12" height="10" fill="#fff" stroke="#000" strokeWidth=".9" />
          <path d="M-8,-8 L0,-15 L8,-8 Z" fill="#c9c9c9" stroke="#000" strokeWidth=".9" />
        </g>
      ))}
      <text y="16" textAnchor="middle" fontSize="9" fontWeight="600">
        {name}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14.1 · The long road to India
 * Marx's own example: four months out, four months for the money back.
 * ───────────────────────────────────────────────────────────── */
export function TheLongRoadToIndia() {
  return (
    <Player
      id="anim-v2-14-1"
      title="14.1 · The long road to India"
      steps={[
        { caption: "Mr. Moneybags' yarn is finished. If he sold it in Tiny Town's market, his money would be back within days." },
        { caption: "But this yarn is sold in a country far across the sea. Marx's example is India: the ship takes about four months to get there." },
        { caption: "Even if the yarn is paid for the moment it arrives, the money needs about four more months to travel home." },
        {
          caption: "Eight months in all. For half of that time his capital is yarn on a ship, for the other half it is money on its way back. Either way it cannot buy cotton or pay Sam.",
          ms: 5000,
        },
        {
          caption: "Faster ships, the telegraph and, later, the Suez Canal shortened the trip. But faster travel also pulls in markets farther away. The whole world becomes the market.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const months = [0, 4, 8, 8, 8][s];
        const shipX = s === 1 ? 290 : 70;
        return (
          <>
            {/* the sea and the route */}
            <rect x="60" y="58" width="240" height="70" fill={SEA} />
            <path d="M70,92 C140,70 220,114 290,92" fill="none" stroke="#000" strokeOpacity=".35" strokeDasharray="4 4" />
            <g transform="translate(34 104)">
              <Town name="Tiny Town" big />
            </g>
            <g transform="translate(328 104)">
              <Town name="India" big />
            </g>

            {/* the ship carries yarn out, then money home */}
            <g style={{ transform: `translate(${shipX}px, 92px)`, transition: `transform 1400ms cubic-bezier(.4,0,.2,1)` }}>
              <Ship />
              <Fade show={s <= 1}>
                <g transform="translate(0 -30) scale(.7)">
                  <Yarn />
                </g>
              </Fade>
              <Fade show={s === 2}>
                <g transform="translate(0 -30)">
                  <Coins n={3} />
                </g>
              </Fade>
            </g>

            {/* month counter */}
            <text x="180" y="30" textAnchor="middle" fontSize="13" fontWeight="600">
              {s === 0 ? "ready to sell" : s === 4 ? "the trip gets shorter" : `${months} months`}
            </text>
            <Fade show={s === 4}>
              <text x="180" y="46" textAnchor="middle" fontSize="9">
                later: steamships, telegraphs, the Suez Canal
              </text>
            </Fade>

            {/* the eight months as a bar */}
            <Fade show={s >= 1}>
              <text x="40" y="160" fontSize="9">
                capital away from the workshop
              </text>
              <rect x="40" y="166" width="280" height="20" fill="#fff" stroke="#000" strokeOpacity=".3" />
              <rect x="40" y="166" height="20" width={s >= 1 ? (s === 4 ? 87 : 140) : 0} fill={GOODS} style={{ transition: `width ${T}` }} />
              <rect
                x={s === 4 ? 127 : 180}
                y="166"
                height="20"
                width={s >= 2 ? (s === 4 ? 88 : 140) : 0}
                fill={MONEY}
                style={{ transition: `width ${T}, x ${T}` }}
              />
              <Fade show={s >= 2}>
                <text x="40" y="200" fontSize="8.5">
                  as yarn, travelling and selling
                </text>
                <text x="320" y="200" textAnchor="end" fontSize="8.5">
                  as money, travelling home
                </text>
              </Fade>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14.2 · Close on the map, far in time
 * The towns and distances are this site's illustration of Marx's point
 * that railways change relative distances.
 * ───────────────────────────────────────────────────────────── */
export function CloseOnTheMap() {
  return (
    <Player
      id="anim-v2-14-2"
      title="14.2 · Close on the map, far in time"
      steps={[
        { caption: "Two villages sell yarn in Tiny Town's market. Hollow is close by. Ford is three times as far away. (Made-up places to show Marx's point.)" },
        { caption: "By cart, Hollow's yarn reaches the market in one day. Ford's takes three. Hollow's money comes back faster." },
        { caption: "Then a railway is built from Tiny Town straight to Ford. Now Ford's yarn arrives in half a day. The train skips Hollow." },
        {
          caption: "Hollow is still closer on the map, but now it is farther away in time. Its workshops shrink and Ford's grow. Marx noticed exactly this: new transport moves where things get made.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const rail = s >= 2;
        return (
          <>
            <g transform="translate(40 120)">
              <Town name="Tiny Town" big />
            </g>
            <g transform="translate(130 70)">
              <Town name="Hollow" big={!rail} />
            </g>
            <g transform="translate(320 140)">
              <Town name="Ford" big={rail} />
            </g>

            {/* cart roads */}
            <path d="M58,116 L118,74" stroke="#8a5a2b" strokeWidth="2" strokeDasharray="5 4" fill="none" />
            <path d="M58,124 C150,170 230,170 302,142" stroke="#8a5a2b" strokeWidth="2" strokeDasharray="5 4" fill="none" />

            {/* the railway */}
            <g style={{ opacity: rail ? 1 : 0, transition: "opacity 600ms" }}>
              <path d="M58,128 L302,146" stroke="#000" strokeWidth="3" />
              {Array.from({ length: 16 }, (_, i) => {
                const x = 66 + i * 15;
                const y = 128.6 + (x - 58) * (18 / 244);
                return <line key={i} x1={x} y1={y - 4} x2={x} y2={y + 4} stroke="#000" strokeWidth="1.2" />;
              })}
              <text x="180" y="126" textAnchor="middle" fontSize="9" fontWeight="600">
                railway
              </text>
            </g>

            {/* travel times */}
            <Fade show={s >= 1}>
              <text x="92" y="88" fontSize="10" fontWeight="600" textAnchor="end">
                1 day
              </text>
              <text x="210" y="184" fontSize="10" fontWeight="600" textAnchor="middle" style={{ opacity: rail ? 0.3 : 1, transition: "opacity 500ms" }}>
                3 days by cart
              </text>
            </Fade>
            <Fade show={rail}>
              <text x="180" y="152" textAnchor="middle" fontSize="10" fontWeight="700">
                half a day
              </text>
            </Fade>

            {/* winners and losers */}
            <Fade show={s === 3} delay={300}>
              <text x="130" y="40" textAnchor="middle" fontSize="10" fill="#d6452f" fontWeight="600">
                shrinking
              </text>
              <text x="320" y="110" textAnchor="middle" fontSize="10" fill="#2a9d5b" fontWeight="600">
                growing
              </text>
            </Fade>
            <Figure who="moneybags" x={40} y={210} scale={0.5} label={false} />
          </>
        );
      }}
    </Player>
  );
}
