"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { Field, RENT, SOIL } from "./ch37-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const COLX = [55, 135, 215, 295];
/** Pixels per pound of rent. */
const RU = 4.2;

/** A vertical rent bar standing on (x, baseY). */
function RentBar({ x, baseY, pounds, label }: { x: number; baseY: number; pounds: number; label: string }) {
  const h = pounds * RU;
  return (
    <g>
      <rect x={x - 14} y={baseY - h} width="28" height={h} fill={RENT} style={{ transition: `all ${T}` }} />
      <text x={x} y={baseY - h - 4} textAnchor="middle" fontSize="9" fontWeight="700" style={{ transition: `all ${T}` }}>
        {label}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 41.1 · Double the dose
 * Marx's Table I → Table II: capital £2½ → £5 an acre, output
 * doubles, price stays £3, rent £18 → £36.
 * ───────────────────────────────────────────────────────────── */
const T1 = [0, 3, 6, 9];
const T2 = [0, 6, 12, 18];
const Q1 = [1, 2, 3, 4];

export function DoubleTheDose() {
  return (
    <Player
      id="anim-v3-41-1"
      title="41.1 · Double the dose"
      steps={[
        { caption: "Marx's starting table, in pounds: on each acre A to D, £2½ of capital. Wheat sells at £3 a quarter, set by soil A. Rents: £0, £3, £6, £9. Total £18." },
        { caption: "Now every farmer doubles his capital to £5 an acre, and each acre's harvest doubles too: 2, 4, 6 and 8 quarters." },
        { caption: "Soil A still sets the price, so wheat stays at £3 a quarter. Nothing about the worst soil has changed." },
        { caption: "Rents double: £0, £6, £12, £18. Total £36 instead of £18." },
        {
          caption: "It is just as if more acres of the same soils had been farmed. Rent grows in step with the extra capital, because each extra dose is as productive as the first.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const doubled = s >= 1;
        const rents = s >= 3 ? T2 : T1;
        return (
          <>
            {COLX.map((x, i) => (
              <g key={i}>
                <g transform={`translate(${x} 204)`}>
                  <Field w={66} h={22} fill={SOIL[i]} label={`soil ${"ABCD"[i]}`} />
                </g>
                <text x={x} y="182" textAnchor="middle" fontSize="8.5">
                  {doubled ? "£5" : "£2½"} · {doubled ? Q1[i] * 2 : Q1[i]} qrs
                </text>
                <RentBar x={x} baseY={170} pounds={rents[i]} label={`£${rents[i]}`} />
              </g>
            ))}
            <text x="180" y="20" textAnchor="middle" fontSize="10" fontWeight="600">
              price: £3 a quarter{s >= 2 ? " (unchanged)" : ""}
            </text>
            <g transform="translate(180 40)">
              <rect x="-62" y="-11" width="124" height="20" fill="#fff" stroke={RENT} strokeWidth="1.5" />
              <text y="3.5" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={RENT}>
                total rent: £{s >= 3 ? 36 : 18}
              </text>
            </g>
            <Fade show={s === 4}>
              <text x="180" y="62" textAnchor="middle" fontSize="8.5" fontWeight="600">
                twice the capital, twice the rent
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 41.2 · Good doses, poor doses
 * Marx's cases I, III and IV. Case III uses his Table III:
 * second doses yield 1½, 2 and 3½ quarters on B, C and D.
 * ───────────────────────────────────────────────────────────── */
const CASES = [
  { title: "first dose only", rents: [0, 3, 6, 9], second: ["", "", "", ""] },
  { title: "case I: extra doses do only as well as soil A", rents: [0, 3, 6, 9], second: ["", "+1", "+1", "+1"] },
  { title: "case III: extra doses do well, but less well than the first", rents: [0, 4.5, 9, 16.5], second: ["", "+1½", "+2", "+3½"] },
  { title: "case IV: extra doses do even better than the first", rents: [0, 9, 15, 21], second: ["", "+3", "+4", "+5"] },
];

export function GoodDosesPoorDoses() {
  return (
    <Player
      id="anim-v3-41-2"
      title="41.2 · Good doses, poor doses"
      steps={[
        { caption: "Start again from the first table: £2½ on each acre, rents £0, £3, £6 and £9." },
        { caption: "Case I. On B, C and D a second £2½ is added, but it only grows 1 more quarter, no better than soil A. It earns just the average profit. Rents do not change at all." },
        { caption: "Case III. The second doses grow more than A, but less than the first doses did: 1½, 2 and 3½ quarters (Marx's Table III). Rents still rise, to £4½, £9 and £16½." },
        { caption: "Case IV. If extra doses grow even more than the first, for example after improvements, rent rises faster than the capital. (Marx gives no table here; these bars are made up.)" },
        {
          caption: "So with the price fixed, rent depends on how much better each extra dose does than the worst soil. Only that difference becomes rent.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const c = CASES[Math.min(s, 3)];
        return (
          <>
            <rect x="8" y="6" width="344" height="18" fill="#000" />
            <text x="180" y="18.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
              {s === 4 ? "only the difference over soil A becomes rent" : c.title}
            </text>
            {COLX.map((x, i) => (
              <g key={i}>
                <g transform={`translate(${x} 204)`}>
                  <Field w={66} h={22} fill={SOIL[i]} label={`soil ${"ABCD"[i]}`} />
                </g>
                <text x={x} y="182" textAnchor="middle" fontSize="8.5">
                  {Q1[i]} qr{Q1[i] > 1 ? "s" : ""}
                  {c.second[i] && <tspan fontWeight="700"> {c.second[i]}</tspan>}
                </text>
                <RentBar x={x} baseY={170} pounds={c.rents[i]} label={`£${String(c.rents[i]).replace(".5", "½")}`} />
              </g>
            ))}
            <Fade show={s === 3}>
              <text x="180" y="40" textAnchor="middle" fontSize="8" fillOpacity=".65">
                illustration: Marx describes this case without numbers
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
