"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";
const COST = "#b9b9b9";

/* ─────────────────────────────────────────────────────────────
 * 43.1 · Rent follows the differences
 * Engels' Table XI: five soils A to E, 60 shillings of price of production
 * per acre, yields 10, 12, 14, 16, 18 bushels, so 6 shillings a bushel and
 * rents of 0, 12, 24, 36, 48 shillings (120 in all).
 * ───────────────────────────────────────────────────────────── */
const SOILS = [
  { id: "A", bu: 10 },
  { id: "B", bu: 12 },
  { id: "C", bu: 14 },
  { id: "D", bu: 16 },
  { id: "E", bu: 18 },
];
const BX = 52;
const PER_BU = 13;
const rowY = (i: number) => 52 + i * 30;

export function RentFollowsDifferences() {
  return (
    <Player
      id="anim-v3-43-1"
      title="43.1 · Rent follows the differences"
      viewBox="0 0 360 226"
      steps={[
        {
          caption: "Five fields, A to E. On each one the farmer spends the same 60 shillings (50 for the work and seed, 10 of normal profit). They grow 10, 12, 14, 16 and 18 bushels. These are Engels' own numbers.",
          ms: 5200,
        },
        { caption: "The town needs wheat from every field, even the worst. So field A sets the price: 60 shillings for 10 bushels is 6 shillings a bushel." },
        {
          caption: "Every bushel sells for 6. Field A just covers its 60. Field B earns 72, so 12 is left over; C 24, D 36, E 48. The leftovers go to the landlords as rent: 120 shillings in all.",
          ms: 5400,
        },
        {
          caption: "Engels' big point: rent follows the differences between fields, not how much they grow. Fields growing 1 to 5 bushels, or 11 to 15, would still pay rents of 0, 1, 2, 3 and 4 bushels.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const lineX = BX + 10 * PER_BU;
        return (
          <>
            <text x="12" y="30" fontSize="10" fontWeight="600">
              bushels per acre
            </text>
            <Fade show={s >= 1}>
              <text x="348" y="30" textAnchor="end" fontSize="10" fontWeight="600">
                price: 6 shillings a bushel
              </text>
            </Fade>

            {SOILS.map((soil, i) => {
              const y = rowY(i);
              const extra = soil.bu - 10;
              return (
                <g key={soil.id}>
                  <text x="14" y={y + 12} fontSize="12" fontWeight="700">
                    {soil.id}
                  </text>
                  {/* the bushels that only cover costs */}
                  <rect x={BX} y={y} height="16" width={10 * PER_BU} fill={COST} />
                  {/* the extra bushels that turn into rent */}
                  <rect
                    x={BX + 10 * PER_BU}
                    y={y}
                    height="16"
                    width={extra * PER_BU}
                    fill={s >= 2 ? GOLD : COST}
                    style={{ transition: `fill ${T}` }}
                  />
                  <text x={BX + soil.bu * PER_BU + 6} y={y + 12} fontSize="10">
                    {soil.bu}
                  </text>
                  <Fade show={s >= 2} delay={i * 150}>
                    <text x="348" y={y + 12} textAnchor="end" fontSize="10" fontWeight="600" fill={extra ? "#8a6d00" : "#000"}>
                      {extra ? `rent ${extra * 6}` : "no rent"}
                    </text>
                  </Fade>
                </g>
              );
            })}

            {/* the line field A draws */}
            <Fade show={s >= 1}>
              <line x1={lineX} y1="44" x2={lineX} y2="200" stroke="#000" strokeWidth="1.5" strokeDasharray="4 3" />
            </Fade>
            <Fade show={s === 1 || s === 2}>
              <text x={lineX} y="212" textAnchor="middle" fontSize="9">
                what field A can grow
              </text>
            </Fade>

            <Fade show={s === 2}>
              <text x="348" y="212" textAnchor="end" fontSize="10" fontWeight="700">
                total rent: 120
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <rect x="186" y="200" width="168" height="20" fill="#000" />
              <text x="270" y="214" textAnchor="middle" fontSize="9.5" fill="#fff">
                gold = the difference from field A
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 43.2 · More capital, more rent
 * Engels' conclusions from his thirteen tables: with a second investment
 * of capital the total rent of 120 shillings doubles to 240 in five cases,
 * more than doubles in four (330, 450, 380, 581¼), rises to 150 in one,
 * and stays at 120 in three. Then the 1846 repeal and overseas grain.
 * ───────────────────────────────────────────────────────────── */
const CASES = [
  { r: 240, g: "double" },
  { r: 240, g: "double" },
  { r: 240, g: "double" },
  { r: 240, g: "double" },
  { r: 240, g: "double" },
  { r: 330, g: "more" },
  { r: 450, g: "more" },
  { r: 380, g: "more" },
  { r: 581.25, g: "more" },
  { r: 150, g: "less" },
  { r: 120, g: "same" },
  { r: 120, g: "same" },
  { r: 120, g: "same" },
] as const;
const GROUP_STEP = { double: 1, more: 2, less: 3, same: 3 } as const;
const BASE_Y = 150;
const SCALE = 0.19;

export function MoreCapitalMoreRent() {
  return (
    <Player
      id="anim-v3-43-2"
      title="43.2 · More capital, more rent"
      viewBox="0 0 360 226"
      steps={[
        {
          caption: "Now every farmer puts a second dose of capital into the same fields: more seed, more manure, more work. Before, the rent on all five fields was 120 shillings. Engels worked through 13 ways it could turn out.",
          ms: 5400,
        },
        { caption: "In 5 of the 13 cases the total rent doubles, from 120 to 240 shillings." },
        { caption: "In 4 cases it more than doubles. In one of them it climbs to 581¼ shillings." },
        {
          caption: "In 1 case it rises a little, to 150. Only in 3 cases does it stay at 120: when the worst field drops out and the next one becomes the worst.",
          ms: 5200,
        },
        {
          caption: "So the more capital farmers sink into the land, the more the landlords get. When England ended its grain duties in 1846, landlords were expected to be ruined. Instead farmers had to put in £12 an acre instead of £8, and rents rose.",
          ms: 6000,
        },
        {
          caption: "But Engels adds a twist. Steamships and railways later brought cheap grain from the American prairies, the Argentine pampas, Russia and India. European rents fell everywhere.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const chart = s <= 3;
        return (
          <>
            <Fade show={chart}>
              <text x="12" y="22" fontSize="10" fontWeight="600">
                total rent after a second dose of capital (shillings)
              </text>
              <line x1="60" y1={BASE_Y} x2="346" y2={BASE_Y} stroke="#000" />
              {/* the old total */}
              <line x1="50" y1={BASE_Y - 120 * SCALE} x2="346" y2={BASE_Y - 120 * SCALE} stroke="#000" strokeDasharray="4 3" />
              <text x="14" y={BASE_Y - 120 * SCALE - 10} fontSize="9">
                before:
              </text>
              <text x="14" y={BASE_Y - 120 * SCALE + 2} fontSize="9" fontWeight="700">
                120
              </text>
              {CASES.map((c, i) => {
                const on = s >= GROUP_STEP[c.g];
                const lit = s === GROUP_STEP[c.g];
                const h = (on ? c.r : 0) * SCALE;
                const x = 66 + i * 21;
                return (
                  <g key={i}>
                    <rect
                      x={x}
                      y={BASE_Y - h}
                      width="16"
                      height={h}
                      fill={lit ? GOLD : "#8a8a8a"}
                      style={{ transition: `y ${T}, height ${T}, fill 400ms` }}
                    />
                    <Fade show={on} delay={300}>
                      <text x={x + 8} y={BASE_Y - h - 4} textAnchor="middle" fontSize="8">
                        {c.r === 581.25 ? "581¼" : c.r}
                      </text>
                    </Fade>
                  </g>
                );
              })}
              <text x="203" y={BASE_Y + 16} textAnchor="middle" fontSize="9">
                Engels&apos; 13 cases
              </text>
              <Fade show={s >= 1}>
                <text x="203" y={BASE_Y + 34} textAnchor="middle" fontSize="11" fontWeight="600">
                  {["", "5 cases: rent doubles", "4 cases: more than double", "1 case: a little more · 3 cases: the same"][s]}
                </text>
              </Fade>
            </Fade>

            {/* 1846: the landlord does well */}
            <Fade show={s === 4}>
              <Figure name="Landlord" x={90} y={180} scale={0.95} />
              <Figure who="ned" x={250} y={180} scale={0.95} />
              <text x="250" y="70" textAnchor="middle" fontSize="10">
                invest per acre
              </text>
              <text x="250" y="92" textAnchor="middle" fontSize="18" fontWeight="300">
                £8 → £12
              </text>
              <g transform="translate(90 70)">
                <Coins n={5} />
              </g>
              <text x="90" y="98" textAnchor="middle" fontSize="10" fontWeight="600" fill="#8a6d00">
                rent rises
              </text>
              <text x="180" y="212" textAnchor="middle" fontSize="10">
                England, after the grain duties ended in 1846
              </text>
            </Fade>

            {/* overseas grain */}
            <Fade show={s === 5}>
              <g transform="translate(70 120)">
                <path d="M-40,0 L40,0 L30,16 L-30,16 Z" fill="#8a5a2b" stroke="#000" />
                <rect x="-6" y="-34" width="4" height="34" fill="#000" />
                <rect x="-24" y="-28" width="40" height="14" fill="#555" />
                <text y="34" textAnchor="middle" fontSize="9">
                  grain from far away
                </text>
              </g>
              <text x="70" y="64" textAnchor="middle" fontSize="9">
                prairies · pampas
              </text>
              <text x="70" y="76" textAnchor="middle" fontSize="9">
                Russia · India
              </text>
              <Figure name="Landlord" x={250} y={180} scale={0.95} mood="sad" />
              <text x="250" y="80" textAnchor="middle" fontSize="12" fontWeight="600" fill="#d6452f">
                rents fall
              </text>
              <text x="180" y="212" textAnchor="middle" fontSize="10">
                Europe, late 1800s (Engels&apos; note)
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
