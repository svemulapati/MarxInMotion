"use client";

import Player from "@/components/anim/Player";
import { Fade, Place } from "@/components/anim/Things";
import { Field, PROFIT, RENT, SOIL, Sacks } from "./ch37-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** Marx's Table I (Ch 39): 50 shillings spent on each soil, wheat at 60 shillings a quarter. */
export const TABLE_I = [
  { soil: "A", qrs: 1, rent: 0 },
  { soil: "B", qrs: 2, rent: 60 },
  { soil: "C", qrs: 3, rent: 120 },
  { soil: "D", qrs: 4, rent: 180 },
];
const COLX = [55, 135, 215, 295];

/* ─────────────────────────────────────────────────────────────
 * 39.1 · Four fields, one price
 * ───────────────────────────────────────────────────────────── */
export function FourFieldsOnePrice() {
  return (
    <Player
      id="anim-v3-39-1"
      title="39.1 · Four fields, one price"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Four fields of the same size, from poor soil A to rich soil D. On each one, a farmer spends the same: 50 shillings on seed, tools and wages." },
        { caption: "Same money, same work, very different harvests. A gives 1 sack (Marx's 'quarter' of wheat), B gives 2, C gives 3, D gives 4." },
        { caption: "All wheat sells at one price. It must be high enough for the poorest field A to cover its 50 shillings plus the usual profit of 10. So a sack sells for 60 shillings." },
        { caption: "Every farmer keeps 50 for his costs and 10 as profit. Field A has nothing left over. But B, C and D have 60, 120 and 180 shillings extra." },
        {
          caption: "That extra goes to the Landlords as rent: 6 sacks, or 360 shillings, in all. Field A, the worst soil in use, pays no differential rent. Its price rules the market.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {TABLE_I.map((r, i) => (
            <g key={r.soil}>
              <g transform={`translate(${COLX[i]} 196)`}>
                <Field w={66} h={28} fill={SOIL[i]} label={`soil ${r.soil}`} />
              </g>
              <text x={COLX[i]} y="176" textAnchor="middle" fontSize="8">
                spend 50
              </text>
              {/* harvest */}
              <Fade show={s >= 1} delay={i * 150}>
                <g transform={`translate(${COLX[i]} 160)`}>
                  <Sacks n={r.qrs} fill={(k) => (s >= 3 && k >= 1 ? RENT : "#efe3c2")} />
                </g>
              </Fade>
              {/* proceeds and the split */}
              <Fade show={s >= 2}>
                <text x={COLX[i]} y="40" textAnchor="middle" fontSize="10" fontWeight="700">
                  {r.qrs * 60}
                </text>
                <text x={COLX[i]} y="50" textAnchor="middle" fontSize="7" fillOpacity=".6">
                  shillings
                </text>
              </Fade>
              <Fade show={s >= 3}>
                <text x={COLX[i]} y="66" textAnchor="middle" fontSize="8">
                  50 + <tspan fill="#b38f00" fontWeight="700">10</tspan>
                </text>
                <text x={COLX[i]} y="80" textAnchor="middle" fontSize="9" fontWeight="700" fill={r.rent ? RENT : "#999"}>
                  {r.rent ? `+${r.rent}` : "nothing extra"}
                </text>
              </Fade>
            </g>
          ))}

          <Fade show={s >= 2}>
            <rect x="8" y="6" width="344" height="18" fill="#000" />
            <text x="180" y="18.5" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
              one price for every sack: 60 shillings, set by soil A
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="196" y="88" width="154" height="20" fill="#fff" stroke={RENT} strokeWidth="1.5" />
            <text x="273" y="101.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={RENT}>
              rent: 6 sacks = 360 shillings
            </text>
            <text x="55" y="100" textAnchor="middle" fontSize="8" fontWeight="700">
              the worst soil
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 39.2 · Downhill, or uphill?
 * Marx's descending sequence: the price climbs 15 → 20 → 30 → 60
 * shillings, and D's rent per quarter climbs 0 → 5 → 15 → 45.
 * ───────────────────────────────────────────────────────────── */
const SEQ = [
  { open: ["D"], price: 15, dRent: 0 },
  { open: ["D", "C"], price: 20, dRent: 5 },
  { open: ["D", "C", "B"], price: 30, dRent: 15 },
  { open: ["D", "C", "B", "A"], price: 60, dRent: 45 },
];

export function DownhillOrUphill() {
  return (
    <Player
      id="anim-v3-39-2"
      title="39.2 · Downhill, or uphill?"
      steps={[
        { caption: "Marx tells it as a story. At first only the richest soil, D, is farmed. Its 4 sacks cost 60 shillings to grow, so wheat sells at 15 shillings a sack. No rent yet." },
        { caption: "The town grows and needs more bread. Soil C must be farmed too. Its wheat costs 20 shillings a sack, so the price rises to 20. Now D earns 5 shillings a sack extra." },
        { caption: "More people, more bread. Soil B comes in, the price climbs to 30, and D's extra grows to 15 shillings a sack." },
        { caption: "Finally even poor soil A is ploughed. The price reaches 60, and D's rent is 45 shillings a sack: 180 shillings in all." },
        {
          caption: "David Ricardo thought farming always moved downhill like this, from better land to worse. Marx shows the order can just as well go uphill, as new, better land is found. Rent comes from the difference, not from things getting worse.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const k = Math.min(s, 3);
        const st = SEQ[k];
        const order = ["D", "C", "B", "A"];
        return (
          <>
            {order.map((soil, i) => {
              const open = s === 4 || st.open.includes(soil);
              return (
                <g key={soil} transform={`translate(${295 - i * 80} 110)`} style={{ opacity: open ? 1 : 0.25, transition: "opacity 500ms" }}>
                  <Field w={66} h={34} fill={SOIL[3 - i]} crops={open ? 5 : 0} label={`soil ${soil}`} />
                </g>
              );
            })}

            {/* the price meter */}
            <g transform="translate(20 30)">
              <text fontSize="9" fontWeight="600">
                price of a sack
              </text>
              <rect y="8" width="320" height="12" fill="#eee" stroke="#000" strokeWidth=".6" />
              <rect y="8" width={(st.price / 60) * 320} height="12" fill={PROFIT} style={{ transition: `width ${T}` }} />
              <text x={(st.price / 60) * 320 - 4} y="17.5" textAnchor="end" fontSize="8.5" fontWeight="700">
                {st.price} shillings
              </text>
            </g>

            {/* D's rent per sack */}
            <g transform="translate(295 162)" style={{ opacity: s === 4 ? 0 : 1, transition: "opacity 400ms" }}>
              <text textAnchor="middle" fontSize="8.5">
                D&apos;s extra per sack
              </text>
              <text y="18" textAnchor="middle" fontSize="16" fontWeight="700" fill={st.dRent ? RENT : "#999"}>
                {st.dRent}
              </text>
            </g>

            <Fade show={s === 4}>
              <path d="M300,80 C230,64 140,64 70,80" stroke="#000" strokeWidth="1.5" fill="none" markerEnd="url(#v3c39-arr)" />
              <text x="185" y="62" textAnchor="middle" fontSize="8.5" fontWeight="600">
                Ricardo: always downhill
              </text>
              <path d="M70,150 C140,168 230,168 290,152" stroke={RENT} strokeWidth="1.5" fill="none" strokeDasharray="4 3" markerEnd="url(#v3c39-arr2)" />
              <text x="185" y="186" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={RENT}>
                Marx: uphill works too
              </text>
            </Fade>
            <defs>
              <marker id="v3c39-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
              <marker id="v3c39-arr2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill={RENT} />
              </marker>
            </defs>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 39.3 · Near the town, far from the town
 * Fertility and location, Marx's two causes of differential rent.
 * The numbers are this site's, for illustration.
 * ───────────────────────────────────────────────────────────── */
export function NearAndFar() {
  return (
    <Player
      id="anim-v3-39-3"
      title="39.3 · Near the town, far from the town"
      steps={[
        { caption: "Marx names two causes of differential rent. The first is fertility: how much a field grows. The second is location: where the field is." },
        { caption: "The Near Field is right next to Tiny Town's market. Its soil is thin: it grows only 3 sacks. (Made-up numbers.)" },
        { caption: "The Far Field is rich: it grows 5 sacks. But it lies a long day's cart ride away, and carting costs eat up 2 sacks' worth." },
        { caption: "So the two fields come out level. Good soil and good location can pull in opposite directions." },
        {
          caption: "Marx adds that better transport and communication even out differences in location, while big new centres of industry create new ones. In colonies, he says, location decides which land gets farmed first.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* Tiny Town */}
          <g transform="translate(40 110)">
            {[-14, 4, 22].map((x, i) => (
              <path key={x} d={`M${x - 8},0 L${x - 8},-16 L${x},-26 L${x + 8},-16 L${x + 8},0 Z`} fill="#fff" stroke="#000" strokeWidth=".8" transform={`translate(0 ${i === 1 ? -6 : 0})`} />
            ))}
            <text x="4" y="14" textAnchor="middle" fontSize="8.5">
              Tiny Town
            </text>
          </g>

          {/* the road */}
          <line x1="70" y1="104" x2="330" y2="104" stroke="#999" strokeWidth="6" strokeDasharray="2 6" />

          <Fade show={s >= 1}>
            <g transform="translate(110 150)">
              <Field w={70} h={36} fill={SOIL[0]} crops={3} label="Near Field" />
            </g>
            <g transform="translate(110 88)">
              <Sacks n={3} />
            </g>
          </Fade>
          <Fade show={s >= 2}>
            <g transform="translate(290 150)">
              <Field w={70} h={36} fill={SOIL[3]} crops={5} label="Far Field" />
            </g>
            <g transform="translate(290 88)">
              <Sacks n={5} fill={(k) => (s >= 2 && k >= 3 ? "#d6d6d6" : "#efe3c2")} />
            </g>
            <Place x={s >= 2 ? 200 : 290} y={98}>
              <g>
                <rect x="-14" y="-10" width="28" height="12" fill="#8a5a2b" stroke="#000" />
                <circle cx="-8" cy="4" r="4" fill="#fff" stroke="#000" />
                <circle cx="8" cy="4" r="4" fill="#fff" stroke="#000" />
              </g>
            </Place>
            <text x="290" y="124" textAnchor="middle" fontSize="8" fill="#777">
              2 sacks&apos; worth spent on carting
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <text x="200" y="196" textAnchor="middle" fontSize="10" fontWeight="700">
              3 near = 5 − 2 far
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="140" y="204" width="216" height="18" fill="#000" />
            <text x="248" y="216" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
              fertility + location: two causes of rent
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
