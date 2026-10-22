"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade } from "@/components/anim/Things";
import { Field, PROFIT, RENT, SOIL } from "./ch37-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const COLX = [55, 135, 215, 295];
const RU = 4.2;

function RentBar({ x, baseY, pounds }: { x: number; baseY: number; pounds: number }) {
  const h = pounds * RU;
  return (
    <g>
      <rect x={x - 14} y={baseY - h} width="28" height={h} fill={RENT} style={{ transition: `all ${T}` }} />
      <text x={x} y={baseY - h - 4} textAnchor="middle" fontSize="9" fontWeight="700" style={{ transition: `all ${T}` }}>
        £{pounds}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 42.1 · Soil A drops out
 * Marx: start from Table II (£5 an acre, 20 quarters, rent £36);
 * if 18 quarters meet demand, A drops out, B regulates at 30 shillings
 * (£1½) a quarter, and rent falls to £9 (Table IV).
 * ───────────────────────────────────────────────────────────── */
const BEFORE = { qrs: [2, 4, 6, 8], rent: [0, 6, 12, 18] };
const AFTER = { qrs: [0, 4, 6, 8], rent: [0, 0, 3, 6] };

export function SoilADropsOut() {
  return (
    <Player
      id="anim-v3-42-1"
      viewBox="0 0 360 236"
      title="42.1 · Soil A drops out"
      steps={[
        { caption: "Last chapter ended here: £5 of capital on each acre, 20 quarters in all, wheat at £3, rents of £36." },
        { caption: "Now suppose the town only needs 18 quarters. The extra capital on B, C and D grows enough without poor soil A." },
        { caption: "So A is no longer farmed for wheat. Its 2 quarters are not needed, and nobody will pay £3 a quarter just to cover A's high costs." },
        { caption: "Now B is the worst soil in use. B grows 4 quarters for £6 of costs and profit, so the price falls to £1½ a quarter (30 shillings)." },
        {
          caption: "At the lower price, rents shrink: B pays none, C pays £3, D pays £6. Total rent falls from £36 to £9, though total output only fell from 20 to 18 quarters.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const after = s >= 4;
        const qrs = s >= 2 ? AFTER.qrs : BEFORE.qrs;
        const rent = after ? AFTER.rent : BEFORE.rent;
        return (
          <>
            {COLX.map((x, i) => (
              <g key={i} style={{ opacity: s >= 2 && i === 0 ? 0.3 : 1, transition: "opacity 500ms" }}>
                <g transform={`translate(${x} 204)`}>
                  <Field w={66} h={22} fill={SOIL[i]} label={`soil ${"ABCD"[i]}`} />
                </g>
                <text x={x} y="182" textAnchor="middle" fontSize="8.5">
                  {qrs[i] ? `${qrs[i]} qrs` : "not farmed"}
                </text>
                {!(s >= 2 && i === 0) && <RentBar x={x} baseY={170} pounds={rent[i]} />}
              </g>
            ))}
            <Fade show={s >= 2}>
              <g transform="translate(55 150)">
                <Cross />
              </g>
            </Fade>

            {/* price */}
            <g transform="translate(20 20)">
              <rect width="200" height="12" fill="#eee" stroke="#000" strokeWidth=".6" />
              <rect width={s >= 3 ? 100 : 200} height="12" fill={PROFIT} style={{ transition: `width ${T}` }} />
              <text x="206" y="10" fontSize="9" fontWeight="700">
                {s >= 3 ? "£1½ a quarter" : "£3 a quarter"}
              </text>
              <text y="-4" fontSize="8">
                price of wheat, set by {s >= 3 ? "soil B" : "soil A"}
              </text>
            </g>
            <g transform="translate(296 48)">
              <rect x="-50" y="-11" width="100" height="20" fill="#fff" stroke={RENT} strokeWidth="1.5" />
              <text y="3.5" textAnchor="middle" fontSize="9" fontWeight="700" fill={RENT}>
                total rent: £{after ? 9 : 36}
              </text>
            </g>
            <Fade show={s === 1}>
              <text x="180" y="70" textAnchor="middle" fontSize="9.5" fontWeight="600">
                demand: only 18 quarters
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 42.2 · Cheaper wheat, the same rent
 * Marx: Table I (rent £18 of a £30 product) vs Table IVd, where the
 * price is £1½ but D takes £12½ of capital, grows 20 quarters, and
 * total rent is £18 again, now of a £45 product.
 * ───────────────────────────────────────────────────────────── */
export function CheaperWheatSameRent() {
  return (
    <Player
      id="anim-v3-42-2"
      title="42.2 · Cheaper wheat, the same rent"
      steps={[
        { caption: "Back to the very first table. Wheat at £3 a quarter, a harvest worth £30, and £18 of it goes in rent. More than half!" },
        { caption: "Now the price has halved to £1½ a quarter, because soil B is the worst soil in use. Surely the Landlords lose out?" },
        { caption: "But farmers pour much more capital into the best soil, D: £12½ instead of £2½. D now grows 20 quarters on one acre." },
        { caption: "D's rent is 10 quarters, worth £15. Add C's £3, and the total rent is £18: exactly what it was when wheat cost twice as much." },
        {
          caption: "The harvest is now worth £45, so £18 is less than half of it. Wheat got cheaper and rent became a smaller share, yet the Landlords' money stayed the same.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const late = s >= 1;
        const total = late ? 45 : 30;
        const rentShare = 18 / total;
        return (
          <>
            {/* the whole harvest as one bar */}
            <g transform="translate(20 40)">
              <text fontSize="9" fontWeight="600" y="-6">
                value of the whole harvest: £{total}
              </text>
              <rect width={total * 6} height="22" fill={PROFIT} stroke="#000" strokeWidth=".6" style={{ transition: `width ${T}` }} />
              <rect width={18 * 6} height="22" fill={RENT} style={{ transition: `width ${T}` }} />
              <text x="54" y="15" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">
                rent £18
              </text>
              <text x={total * 6 + 6} y="15" fontSize="9" fontWeight="700">
                {Math.round(rentShare * 100)}% rent
              </text>
            </g>

            {/* price tag */}
            <g transform="translate(20 96)">
              <text fontSize="9">price of wheat:</text>
              <text x="74" fontSize="13" fontWeight="700">
                {late ? "£1½" : "£3"}
              </text>
            </g>

            {/* soil D grows */}
            <Fade show={s >= 2}>
              <g transform="translate(270 180)">
                <Field w={110} h={40} fill={SOIL[3]} crops={12} label="soil D: £12½ of capital" />
              </g>
              <g transform="translate(270 128)">
                {Array.from({ length: 20 }, (_, i) => (
                  <rect
                    key={i}
                    x={(i % 10) * 10 - 50}
                    y={-Math.floor(i / 10) * 12}
                    width="8"
                    height="10"
                    fill={s >= 3 && i >= 10 ? RENT : "#efe3c2"}
                    stroke="#000"
                    strokeWidth=".5"
                    style={{ transition: "fill 500ms" }}
                  />
                ))}
                <text y="-20" textAnchor="middle" fontSize="8.5">
                  20 quarters
                </text>
              </g>
            </Fade>
            <Fade show={s >= 3}>
              <text x="110" y="150" textAnchor="middle" fontSize="9">
                D: 10 qrs = <tspan fontWeight="700" fill={RENT}>£15</tspan>
              </text>
              <text x="110" y="166" textAnchor="middle" fontSize="9">
                C: <tspan fontWeight="700" fill={RENT}>£3</tspan>
              </text>
              <text x="110" y="186" textAnchor="middle" fontSize="10" fontWeight="700" fill={RENT}>
                total rent: £18
              </text>
            </Fade>
            <Figure name="Landlord" x={30} y={200} scale={0.6} mood={s === 1 ? "sad" : "happy"} />
          </>
        );
      }}
    </Player>
  );
}
