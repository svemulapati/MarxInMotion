"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { COST, PROFIT, RENT } from "./ch37-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
/** Pixels per pound in the price bars. */
const U = 1.15;

function SteamMill() {
  return (
    <g>
      <rect x="-26" y="-20" width="52" height="34" fill="#fff" stroke="#000" />
      <rect x="12" y="-44" width="9" height="24" fill="#555" />
      <circle cx="17" cy="-52" r="5" fill="#bbb" className="v3c38-puff" />
      <circle cx="22" cy="-62" r="4" fill="#ccc" className="v3c38-puff" style={{ animationDelay: "600ms" }} />
      <rect x="-20" y="-6" width="14" height="10" fill="#333" />
      <text x="-13" y="12" textAnchor="middle" fontSize="6" fill="#000">
        coal
      </text>
    </g>
  );
}

function WaterMill() {
  return (
    <g>
      {/* the cliff and falling water */}
      <rect x="22" y="-56" width="26" height="70" fill="#a8a8a8" />
      <rect x="22" y="-56" width="10" height="70" fill="#7fb3e6" className="v3c38-fall" />
      <rect x="-26" y="-20" width="44" height="34" fill="#fff" stroke="#000" />
      <g transform="translate(18 -2)">
        <g className="v3c38-wheel">
          <circle r="13" fill="none" stroke="#000" strokeWidth="1.5" />
          {[0, 45, 90, 135].map((a) => (
            <line key={a} x1="-13" y1="0" x2="13" y2="0" stroke="#000" strokeWidth="1.2" transform={`rotate(${a})`} />
          ))}
        </g>
      </g>
    </g>
  );
}

/** A price bar: cost, then average profit, then any surplus-profit. */
function PriceBar({ cost, profit, extra, y, show = true }: { cost: number; profit: number; extra: number; y: number; show?: boolean }) {
  return (
    <g transform={`translate(110 ${y})`} style={{ opacity: show ? 1 : 0, transition: "opacity 500ms" }}>
      <rect width={cost * U} height="16" fill={COST} stroke="#000" strokeWidth=".6" style={{ transition: `width ${T}` }} />
      <text x={(cost * U) / 2} y="11.5" textAnchor="middle" fontSize="8">
        cost {cost}
      </text>
      <rect x={cost * U} width={profit * U} height="16" fill={PROFIT} stroke="#000" strokeWidth=".6" style={{ transition: `all ${T}` }} />
      <rect x={(cost + profit) * U} width={extra * U} height="16" fill={RENT} stroke="#000" strokeWidth=".6" style={{ transition: `all ${T}` }} />
      <text x={(cost + profit + extra) * U + 4} y="11.5" fontSize="8.5" fontWeight="700">
        {cost + profit + extra}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 38.1 · The steam mill and the waterfall mill
 * Marx's numbers: cost 100, price of production 115 (15% profit);
 * with water-power the cost is 90, so the profit is 25.
 * ───────────────────────────────────────────────────────────── */
export function SteamAndWaterfall() {
  return (
    <Player
      id="anim-v3-38-1"
      title="38.1 · The steam mill and the waterfall mill"
      steps={[
        { caption: "Most mills in the land run on steam engines. Making a batch of goods costs them 100, and they sell it for 115: the cost plus the usual 15% profit." },
        { caption: "One mill stands beside a waterfall. Its wheel is turned by falling water, which needs no coal. The same batch costs it only 90." },
        { caption: "But it sells at the same market price as everyone else: 115. Its profit is 25. That is the usual 15, plus 10 extra. Marx calls the extra surplus-profit." },
        { caption: "Can the steam mills copy it? No. A steam engine can be bought, but a waterfall cannot be made. There are only a few, and they belong to whoever owns that land." },
        {
          caption: "So the owner of the land with the waterfall can demand the 10 extra as rent. This rent comes from a difference between two mills, so Marx calls it differential rent.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(52 72)">
            <SteamMill />
            <text y="28" textAnchor="middle" fontSize="8.5">
              steam mills
            </text>
          </g>
          <PriceBar cost={100} profit={15} extra={0} y={46} />

          <Fade show={s >= 1}>
            <g transform="translate(44 168)">
              <WaterMill />
              <text x="4" y="28" textAnchor="middle" fontSize="8.5">
                waterfall mill
              </text>
            </g>
          </Fade>
          <PriceBar cost={90} profit={s >= 2 ? 15 : 0} extra={s >= 2 ? 10 : 0} y={142} show={s >= 1} />
          <Fade show={s >= 2}>
            <text x="110" y="132" fontSize="8.5" fontWeight="600">
              sells at the market price, 115
            </text>
            <text x="250" y="174" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={RENT}>
              10 extra
            </text>
            <line x1="250" y1="164" x2="234" y2="158" stroke={RENT} />
          </Fade>

          <Fade show={s === 3}>
            <text x="215" y="24" textAnchor="middle" fontSize="9.5" fontWeight="700">
              a steam engine can be built; a waterfall cannot
            </text>
          </Fade>
          <Fade show={s >= 4}>
            <Figure name="Landlord" x={330} y={150} scale={0.7} />
            <path d="M262,170 C290,170 312,150 326,156" stroke={RENT} strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
            <text x="215" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill={RENT}>
              surplus-profit becomes rent
            </text>
          </Fade>

          <style>{`
            @keyframes v3c38-rise { from { transform: translateY(0); opacity: .9 } to { transform: translateY(-10px); opacity: 0 } }
            .v3c38-puff { animation: v3c38-rise 1.6s ease-out infinite; }
            @keyframes v3c38-flow { to { stroke-dashoffset: -12 } }
            .v3c38-fall { stroke: #fff; stroke-width: 1; stroke-dasharray: 3 3; animation: v3c38-flow .6s linear infinite; }
            @keyframes v3c38-spin { to { transform: rotate(360deg) } }
            .v3c38-wheel { animation: v3c38-spin 4s linear infinite; transform-box: fill-box; transform-origin: center; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 38.2 · What is a waterfall worth?
 * Marx's numbers: £10 a year capitalised at 5% interest = £200.
 * ───────────────────────────────────────────────────────────── */
export function WhatIsAWaterfallWorth() {
  return (
    <Player
      id="anim-v3-38-2"
      title="38.2 · What is a waterfall worth?"
      steps={[
        { caption: "Every year the waterfall brings its owner 10 in rent." },
        { caption: "Suppose a buyer wants it. Interest in Tiny Town is 5% a year. To earn 10 a year at 5%, you would have to lend out 200." },
        { caption: "So the waterfall sells for 200, which is twenty years of rent. Marx calls this capitalised rent." },
        { caption: "But nobody worked to make the waterfall. It has no value at all. Its price is, in Marx's words, an irrational expression: a price for something that is not a product of labour." },
        {
          caption: "And if a new kind of steam engine cut the steam mills' cost from 100 to 90, the extra would vanish, and with it the rent and the waterfall's price.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const years = s === 0 ? 1 : 20;
        return (
          <>
            {/* twenty years of rent stacked into a price */}
            <g transform="translate(40 36)">
              {Array.from({ length: 20 }, (_, i) => (
                <g key={i} style={{ opacity: s === 4 ? 0.12 : i < years ? 1 : 0, transition: `opacity 400ms ease ${i * 40}ms` }}>
                  <rect x={(i % 10) * 28} y={Math.floor(i / 10) * 26} width="24" height="20" fill={RENT} stroke="#000" strokeWidth=".6" />
                  <text x={(i % 10) * 28 + 12} y={Math.floor(i / 10) * 26 + 13.5} textAnchor="middle" fontSize="8" fill="#fff" fontWeight="700">
                    10
                  </text>
                </g>
              ))}
              <text x="0" y="-8" fontSize="9" fontWeight="600">
                {s === 0 ? "rent this year: 10" : "20 years of rent"}
              </text>
            </g>

            <Fade show={s >= 1}>
              <text x="180" y="112" textAnchor="middle" fontSize="10">
                10 a year at 5% interest =
              </text>
              <text x="180" y="136" textAnchor="middle" fontSize="22" fontWeight="300" fill={s === 4 ? "#aaa" : "#000"}>
                200
              </text>
              <Fade show={s === 4}>
                <line x1="160" y1="128" x2="200" y2="128" stroke="#d6452f" strokeWidth="2.5" />
              </Fade>
            </Fade>

            <Fade show={s === 3}>
              <rect x="70" y="150" width="220" height="40" fill="#000" />
              <text x="180" y="166" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
                no labour made it: no value
              </text>
              <text x="180" y="180" textAnchor="middle" fontSize="8.5" fill="#fff" fillOpacity=".8">
                its price is capitalised rent
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="170" textAnchor="middle" fontSize="9.5" fontWeight="700">
                steam cost 100 → 90: no extra, no rent, no price
              </text>
            </Fade>
            <Figure name="Landlord" x={330} y={196} scale={0.7} mood={s === 4 ? "sad" : "happy"} />
          </>
        );
      }}
    </Player>
  );
}
