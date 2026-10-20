"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";
const RED = "#d6452f";

/* ─────────────────────────────────────────────────────────────
 * 45.1 · Not for nothing
 * The landlord will not let even the worst land for nothing; mere
 * ownership gives him the power to keep it empty. So the price must rise
 * until field A also pays a rent r: P becomes P + r, while the
 * differential rents d, 2d, 3d stay as they were.
 * ───────────────────────────────────────────────────────────── */
const FIELDS = ["A", "B", "C", "D"];
const FX = (i: number) => 52 + i * 78;
const BASE = 168;
const U = 13; // pixels per unit of rent

export function NotForNothing() {
  return (
    <Player
      id="anim-v3-45-1"
      title="45.1 · Not for nothing"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Tiny Town needs more wheat. Field A, the poorest, is lying empty, and the Landlord owns it." },
        {
          caption: "Grandpa Ned does his sums. At today's price, field A would just pay back his costs and a normal profit. For a farmer, that is enough, if he pays no rent.",
          ms: 5000,
        },
        {
          caption: "But the Landlord won't lend his land for nothing. Owning it gives him the power to keep it empty. Marx notes that in every developed country a good share of land always lies unused.",
          ms: 5600,
        },
        { caption: "So the price of wheat has to rise a little more, until field A can pay a rent too. Marx calls this absolute rent, r." },
        {
          caption: "Every field now pays r on top of its old rent. The differences between fields, d, 2d and 3d, stay exactly the same. Only the whole price has gone up.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const absolute = s >= 3;
        const r = absolute ? 1 : 0;
        return (
          <>
            {FIELDS.map((id, i) => {
              const x = FX(i);
              const empty = i === 0 && s < 3;
              const diff = i; // d, 2d, 3d in units
              return (
                <g key={id}>
                  {/* the field */}
                  <rect x={x - 28} y={BASE} width="56" height="16" fill={empty ? "#d9d9d9" : "#cfe3a8"} stroke="#000" />
                  <text x={x} y={BASE + 30} textAnchor="middle" fontSize="11" fontWeight="700">
                    {id}
                  </text>
                  {/* differential rent */}
                  <rect x={x - 14} y={BASE - diff * U} width="28" height={diff * U} fill={GOLD} />
                  {/* absolute rent sits on top */}
                  <rect
                    x={x - 14}
                    y={BASE - diff * U - r * U}
                    width="28"
                    height={r * U}
                    fill={RED}
                    style={{ transition: `y ${T}, height ${T}` }}
                  />
                  <Fade show={s >= 4}>
                    <text x={x} y={BASE - diff * U - r * U - 6} textAnchor="middle" fontSize="9.5">
                      {i === 0 ? "r" : `r + ${i === 1 ? "" : i}d`}
                    </text>
                  </Fade>
                </g>
              );
            })}

            {/* the locked gate on field A */}
            <Fade show={s === 2}>
              <g transform={`translate(${FX(0)} ${BASE - 18})`}>
                <rect x="-20" y="-8" width="40" height="22" fill="none" stroke="#000" strokeWidth="2" />
                <line x1="-20" y1="3" x2="20" y2="3" stroke="#000" strokeWidth="2" />
                <rect x="-5" y="-3" width="10" height="9" fill="#000" />
              </g>
            </Fade>

            <Figure name="Landlord" x={60} y={96} scale={0.75} style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }} />
            <Fade show={s === 2}>
              <g transform="translate(78 30)">
                <Bubble w={98} lines={["Not for nothing."]} />
              </g>
            </Fade>

            <Figure who="ned" x={300} y={96} scale={0.75} style={{ opacity: s === 1 ? 1 : 0, transition: "opacity 500ms" }} />
            <Fade show={s === 1}>
              <g transform="translate(160 44)">
                <Bubble w={128} lines={["costs + normal profit", "and no rent? Fine!"]} />
              </g>
            </Fade>

            <Fade show={s >= 3}>
              <text x="348" y="24" textAnchor="end" fontSize="11" fontWeight="700">
                price: P + r
              </text>
              <rect x="246" y="32" width="10" height="10" fill={RED} />
              <text x="260" y="41" fontSize="9.5">
                absolute rent
              </text>
              <rect x="246" y="48" width="10" height="10" fill={GOLD} />
              <text x="260" y="57" fontSize="9.5">
                differential rent
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 45.2 · More hands, more value
 * Marx: non-agricultural capital 85c + 15v, rate of surplus-value 100%,
 * price of production 115; agricultural capital 75c + 25v, value 125.
 * Averaged over the 200 of capital: surplus 40, or 20%, so both would
 * sell at 120. Landed property can stop the farm's extra 5 being shared.
 * ───────────────────────────────────────────────────────────── */
const PXU = 1.05; // pixels per unit of value
const COL = [
  { name: "the mill", c: 85, v: 15, x: 100 },
  { name: "the farm", c: 75, v: 25, x: 260 },
];
const FLOOR = 196;

export function MoreHandsMoreValue() {
  return (
    <Player
      id="anim-v3-45-2"
      title="45.2 · More hands, more value"
      viewBox="0 0 360 230"
      steps={[
        {
          caption: "Two businesses, each with 100 coins of capital. The mill spends 85 on machines and cotton and 15 on wages. The farm spends 75 on tools and seed and 25 on wages. These are Marx's numbers.",
          ms: 5600,
        },
        {
          caption: "Workers create as much new value as their wages and the same again (100%). So the mill's product is worth 115, and the farm's 125. More hands means more new value.",
          ms: 5400,
        },
        { caption: "Competition usually evens out profit. 40 of surplus on 200 of capital is 20%, so both products would sell at 120." },
        { caption: "Then the farm's product, worth 125, would sell for 120. Five of the value it made would flow off to industry." },
        {
          caption: "But the Landlord's fence stops that evening-out. The farm's price can climb toward its full value of 125, and the extra, up to 5, becomes absolute rent.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {COL.map((col, k) => {
            const sv = s >= 1 ? col.v : 0;
            const top = FLOOR - (col.c + col.v + sv) * PXU;
            const farm = k === 1;
            return (
              <g key={col.name}>
                <rect x={col.x - 26} y={FLOOR - col.c * PXU} width="52" height={col.c * PXU} fill="#b9b9b9" />
                <text x={col.x} y={FLOOR - col.c * PXU / 2 + 4} textAnchor="middle" fontSize="10">
                  c {col.c}
                </text>
                <rect x={col.x - 26} y={FLOOR - (col.c + col.v) * PXU} width="52" height={col.v * PXU} fill="#2a9d5b" />
                <text x={col.x} y={FLOOR - (col.c + col.v / 2) * PXU + 4} textAnchor="middle" fontSize="10" fill="#fff">
                  v {col.v}
                </text>
                <rect
                  x={col.x - 26}
                  y={FLOOR - (col.c + col.v + sv) * PXU}
                  width="52"
                  height={sv * PXU}
                  fill={farm && s >= 4 ? RED : GOLD}
                  style={{ transition: `y ${T}, height ${T}, fill 500ms` }}
                />
                <Fade show={s >= 1}>
                  <text x={col.x} y={FLOOR - (col.c + col.v + col.v / 2) * PXU + 4} textAnchor="middle" fontSize="10">
                    s {col.v}
                  </text>
                  <text x={col.x + 30} y={top + 16} fontSize="11" fontWeight="700">
                    {col.c + col.v + col.v}
                  </text>
                </Fade>
                <text x={col.x} y={FLOOR + 16} textAnchor="middle" fontSize="11" fontWeight="600">
                  {col.name}
                </text>
              </g>
            );
          })}

          {/* the 120 line both would sell at */}
          <Fade show={s >= 2}>
            <line x1="30" y1={FLOOR - 120 * PXU} x2="330" y2={FLOOR - 120 * PXU} stroke="#000" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="30" y={FLOOR - 120 * PXU - 5} fontSize="10" fontWeight="600">
              average price: 120
            </text>
          </Fade>
          <Fade show={s === 3}>
            <path d={`M232,${FLOOR - 122 * PXU} C190,${FLOOR - 140 * PXU} 150,${FLOOR - 140 * PXU} 130,${FLOOR - 118 * PXU}`} fill="none" stroke="#000" strokeDasharray="3 3" markerEnd="url(#v3c45-arrow)" />
            <text x="180" y={FLOOR - 144 * PXU} textAnchor="middle" fontSize="10">
              5 flows to industry
            </text>
          </Fade>
          <Fade show={s === 4}>
            <line x1="200" y1={FLOOR - 160 * PXU + 40} x2="200" y2={FLOOR - 4} stroke="#000" strokeWidth="3" />
            <text x="200" y={FLOOR - 160 * PXU + 34} textAnchor="middle" fontSize="9.5">
              the Landlord&apos;s fence
            </text>
            <text x="300" y={FLOOR - 138 * PXU} textAnchor="middle" fontSize="10" fontWeight="600" fill={RED}>
              up to 5: absolute rent
            </text>
          </Fade>
          <defs>
            <marker id="v3c45-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 45.3 · Which comes first, rent or price?
 * For absolute rent the rent is the cause of the higher price, not its
 * effect; the price can sit between price of production and value. If
 * farming's composition reached the social average, absolute rent would
 * disappear; anything more would be a monopoly price.
 * ───────────────────────────────────────────────────────────── */
const SY = (v: number) => 200 - (v - 110) * 7;

export function RentOrPriceFirst() {
  return (
    <Player
      id="anim-v3-45-3"
      title="45.3 · Which comes first, rent or price?"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Most people think wheat is dear, so landlords can charge rent. The price comes first." },
        { caption: "For absolute rent, Marx turns this round. The rent comes first: the Landlord's fence pushes the price up. Rent is the cause, not the result." },
        {
          caption: "How far up? Usually only between the price of production, 120, and the full value of the wheat, 125. The market decides where in that gap it lands.",
          ms: 5200,
        },
        {
          caption: "If farms got as many machines per worker as factories, the farm's value would fall to 120 too. Then there would be no gap, and absolute rent would disappear.",
          ms: 5400,
        },
        {
          caption: "Any rent above value would be a monopoly price, set only by how much buyers want something and can pay, like a rare wine from one small vineyard.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const gapGone = s === 3;
        const valueY = SY(gapGone ? 120 : 125);
        return (
          <>
            {/* the two arrows: price then rent, or rent then price */}
            <Fade show={s <= 1}>
              <g transform="translate(0 0)">
                <rect x="40" y="70" width="100" height="44" fill="#fff" stroke="#000" />
                <text x="90" y="97" textAnchor="middle" fontSize="12" fontWeight="600">
                  {s === 0 ? "dear wheat" : "rent"}
                </text>
                <rect x="220" y="70" width="100" height="44" fill="#fff" stroke="#000" />
                <text x="270" y="97" textAnchor="middle" fontSize="12" fontWeight="600">
                  {s === 0 ? "rent" : "dear wheat"}
                </text>
                <line x1="146" y1="92" x2="212" y2="92" stroke="#000" strokeWidth="2" markerEnd="url(#v3c45b)" />
                <text x="180" y="84" textAnchor="middle" fontSize="9.5">
                  causes
                </text>
                <text x="180" y="150" textAnchor="middle" fontSize="11" fontWeight="600" fill={s === 1 ? RED : "#000"}>
                  {s === 0 ? "the usual view" : "Marx, for absolute rent"}
                </text>
              </g>
            </Fade>

            {/* the price scale */}
            <Fade show={s >= 2}>
              <line x1="70" y1={SY(110)} x2="70" y2={SY(135)} stroke="#000" strokeWidth="2" />
              {[110, 115, 120, 125, 130, 135].map((v) => (
                <g key={v}>
                  <line x1="64" y1={SY(v)} x2="70" y2={SY(v)} stroke="#000" />
                  <text x="58" y={SY(v) + 3} textAnchor="end" fontSize="9">
                    {v}
                  </text>
                </g>
              ))}
              <line x1="70" y1={SY(120)} x2="250" y2={SY(120)} stroke="#000" strokeDasharray="5 3" />
              <text x="256" y={SY(120) + 4} fontSize="10">
                price of production
              </text>
              <line x1="70" y1={valueY} x2="250" y2={valueY} stroke={RED} strokeWidth="1.5" style={{ transition: `all ${T}` }} />
              <text x="256" y={valueY + (gapGone ? -8 : 4)} fontSize="10" fill={RED} style={{ transition: `all ${T}` }}>
                value
              </text>
              <rect
                x="72"
                y={valueY}
                width="178"
                height={SY(120) - valueY}
                fill={RED}
                opacity=".18"
                style={{ transition: `all ${T}` }}
              />
              <Fade show={s === 2}>
                <text x="160" y={SY(122.5) + 4} textAnchor="middle" fontSize="10" fontWeight="600">
                  room for absolute rent
                </text>
              </Fade>
              <Fade show={s === 3}>
                <text x="160" y={SY(127)} textAnchor="middle" fontSize="10" fontWeight="600">
                  farms as machine-heavy as mills: no gap
                </text>
              </Fade>
            </Fade>

            {/* monopoly price: a rare wine */}
            <Fade show={s === 4}>
              <line x1="70" y1={SY(133)} x2="250" y2={SY(133)} stroke="#7b4bd6" strokeWidth="1.5" />
              <text x="160" y={SY(133) - 6} textAnchor="middle" fontSize="10" fontWeight="600" fill="#7b4bd6">
                monopoly price
              </text>
              <g transform="translate(306 180)">
                <rect x="-7" y="-36" width="14" height="14" fill="#5b2a6e" />
                <path d="M-14,-22 L14,-22 L14,30 L-14,30 Z" fill="#5b2a6e" stroke="#000" />
                <rect x="-11" y="-4" width="22" height="16" fill="#fff" />
                <text y="8" textAnchor="middle" fontSize="7">
                  rare
                </text>
                <text y="46" textAnchor="middle" fontSize="9">
                  one tiny vineyard
                </text>
              </g>
            </Fade>
            <defs>
              <marker id="v3c45b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>
          </>
        );
      }}
    </Player>
  );
}
