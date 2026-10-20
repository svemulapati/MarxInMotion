"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Place } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * Ground-rent drawings, shared by Volume III, Chapters 37 to 42.
 * Grandpa Ned is the tenant farmer; the gray "Landlord" owns the land.
 * ───────────────────────────────────────────────────────────── */

/** Colours used the same way in every rent chapter. */
export const RENT = "#e07a1f";
export const PROFIT = "#e6b800";
export const WAGE = "#2a9d5b";
export const COST = "#cfcfcf";
export const SOIL = ["#d8c9a3", "#c9b27a", "#b39556", "#8f7340"];

/** A ploughed field, centred on (0, 0). Darker fill means richer soil. */
export function Field({ w = 70, h = 40, fill = SOIL[1], label, crops = 0 }: { w?: number; h?: number; fill?: string; label?: string; crops?: number }) {
  return (
    <g>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} fill={fill} stroke="#000" strokeWidth="1" />
      {Array.from({ length: Math.floor(h / 8) }, (_, i) => (
        <line key={i} x1={-w / 2 + 4} x2={w / 2 - 4} y1={-h / 2 + 6 + i * 8} y2={-h / 2 + 6 + i * 8} stroke="#000" strokeOpacity=".18" />
      ))}
      {Array.from({ length: crops }, (_, i) => (
        <g key={i} transform={`translate(${-w / 2 + 8 + (i * (w - 16)) / Math.max(1, crops - 1)} ${-2})`}>
          <line x1="0" y1="8" x2="0" y2="-6" stroke="#6b5a1e" strokeWidth="1.2" />
          <ellipse cx="0" cy="-8" rx="2.4" ry="4" fill={PROFIT} stroke="#6b5a1e" strokeWidth=".8" />
        </g>
      ))}
      {label && (
        <text y={h / 2 + 12} textAnchor="middle" fontSize="9" fontWeight="700">
          {label}
        </text>
      )}
    </g>
  );
}

/** One sack of wheat: Marx's "quarter" of grain. */
export function Sack({ fill = "#efe3c2" }: { fill?: string }) {
  return (
    <g>
      <path d="M-7,-9 Q-9,-12 -6,-13 L6,-13 Q9,-12 7,-9 Q11,0 9,9 Q0,12 -9,9 Q-11,0 -7,-9 Z" fill={fill} stroke="#000" strokeWidth="1" />
      <line x1="-6" y1="-9" x2="6" y2="-9" stroke="#000" strokeWidth="1" />
    </g>
  );
}

/** A stack of n sacks, bottom-centred on (0, 0), two per row. */
export function Sacks({ n, fill }: { n: number; fill?: string | ((i: number) => string) }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <g key={i} transform={`translate(${(i % 2) * 18 - (n > 1 ? 9 : 0)} ${-12 - Math.floor(i / 2) * 22})`}>
          <Sack fill={typeof fill === "function" ? fill(i) : fill} />
        </g>
      ))}
    </g>
  );
}

/** A small rent receipt, the Landlord's slice. */
export function RentNote({ text }: { text: string }) {
  return (
    <g>
      <rect x="-22" y="-9" width="44" height="18" fill="#fff" stroke={RENT} strokeWidth="1.5" />
      <text y="3.5" textAnchor="middle" fontSize="8" fontWeight="700" fill={RENT}>
        {text}
      </text>
    </g>
  );
}

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 37.1 · Three people, one field
 * ───────────────────────────────────────────────────────────── */
export function ThreePeopleOneField() {
  return (
    <Player
      id="anim-v3-37-1"
      title="37.1 · Three people, one field"
      steps={[
        { caption: "Here is a big field outside Tiny Town. It belongs to the Landlord, who lives far away in the city and never touches a plough." },
        { caption: "Grandpa Ned wants to farm it. He signs a lease: every year he will pay the Landlord a sum of money just for the right to use the land. That payment is rent." },
        { caption: "Ned brings his own money: seed, tools, horses, and wages for farmhands who do the field work. That makes Ned a capitalist farmer." },
        { caption: "At harvest the crop is sold, and the money splits three ways: wages for the farmhands, profit for Ned, and rent for the Landlord." },
        {
          caption: "Marx says these three, wage-workers, capitalists and landowners, together make up the frame of modern society. Rent is how owning land turns into money.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the city, far away */}
          <g transform="translate(306 66)">
            {[-20, 0, 20].map((x, i) => (
              <rect key={x} x={x - 8} y={-18 - i * 6} width="16" height={18 + i * 6} fill="#fff" stroke="#000" strokeWidth=".8" />
            ))}
            <text y="14" textAnchor="middle" fontSize="8" fillOpacity=".6">
              the city
            </text>
          </g>
          <Figure name="Landlord" x={306} y={140} scale={0.8} />

          {/* the field with its fence */}
          <g transform="translate(130 70)">
            <Field w={150} h={70} fill={SOIL[2]} crops={s >= 3 ? 9 : 0} />
            <rect x="-79" y="-39" width="158" height="78" fill="none" stroke="#000" strokeDasharray="3 3" />
            <text y="-46" textAnchor="middle" fontSize="9">
              the Landlord&apos;s field
            </text>
          </g>

          {/* the lease */}
          <Fade show={s >= 1}>
            <Figure who="ned" x={60} y={196} scale={0.8} />
            <g transform="translate(240 160)">
              <rect x="-26" y="-14" width="52" height="28" fill="#fffbe6" stroke="#000" />
              <text y="-2" textAnchor="middle" fontSize="8" fontWeight="700">
                LEASE
              </text>
              <text y="9" textAnchor="middle" fontSize="7">
                rent every year
              </text>
            </g>
            <path d="M268,156 C282,150 292,140 298,130" stroke={RENT} strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          </Fade>

          {/* Ned's capital and the farmhands */}
          <Fade show={s >= 2}>
            <Place x={118} y={186}>
              <Coins n={3} label="Ned's capital" />
            </Place>
            <Figure name="farmhand" x={172} y={210} scale={0.6} />
            <Figure name="farmhand" x={204} y={210} scale={0.6} />
          </Fade>

          {/* the three-way split */}
          <Fade show={s >= 3}>
            <g transform="translate(55 112)">
              <rect width="62" height="14" fill={WAGE} />
              <rect x="62" width="44" height="14" fill={PROFIT} />
              <rect x="106" width="44" height="14" fill={RENT} />
              <text x="31" y="10" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="700">
                wages
              </text>
              <text x="84" y="10" textAnchor="middle" fontSize="7.5" fontWeight="700">
                profit
              </text>
              <text x="128" y="10" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="700">
                rent
              </text>
            </g>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="196" y="2" width="160" height="30" fill="#000" />
            <text x="276" y="15" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
              wage-workers · capitalists · landowners
            </text>
            <text x="276" y="26" textAnchor="middle" fontSize="7.5" fill="#fff" fillOpacity=".75">
              the frame of modern society
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 37.2 · Who keeps Ned's drains?
 * Capital sunk in the land (Marx's "terre-capital") and the lease.
 * ───────────────────────────────────────────────────────────── */
export function WhoKeepsTheDrains() {
  return (
    <Player
      id="anim-v3-37-2"
      title="37.2 · Who keeps Ned's drains?"
      steps={[
        { caption: "Ned's field is soggy. With his own money he digs drains and spreads manure. Marx calls capital sunk into the land like this terre-capital, land-capital." },
        { caption: "For the rest of his lease the field grows more wheat. The rent was fixed when he signed, so the extra is Ned's." },
        { caption: "Then the lease runs out. The drains stay in the ground, and the ground belongs to the Landlord." },
        { caption: "The new lease costs more: the old rent plus interest on Ned's own drains. The Landlord now earns from work he never paid for." },
        {
          caption: "So tenants avoid improvements that outlast their lease. Marx notes that writers since James Anderson in the 1700s complained this held farming back.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const rentW = s >= 3 ? 104 : 64;
        return (
          <>
            <g transform="translate(110 78)">
              <Field w={150} h={70} fill={s >= 1 ? SOIL[2] : SOIL[0]} crops={s >= 1 ? 9 : 4} />
              {/* drains */}
              {[-40, 0, 40].map((x) => (
                <line key={x} x1={x} y1="-34" x2={x} y2="34" stroke="#4a7fb5" strokeWidth="3" strokeDasharray="6 3" />
              ))}
              <text y="-44" textAnchor="middle" fontSize="9">
                {s >= 2 ? "the Landlord's field" : "the field Ned rents"}
              </text>
            </g>
            <Figure who="ned" x={40} y={196} scale={0.8} mood={s >= 3 ? "sad" : "happy"} />
            <Figure name="Landlord" x={326} y={196} scale={0.8} />

            {/* lease timeline */}
            <g transform="translate(140 182)">
              <line x1="0" y1="0" x2="140" y2="0" stroke="#000" />
              <rect x="0" y="-6" width="90" height="12" fill="#fffbe6" stroke="#000" strokeWidth=".8" />
              <text x="45" y="3" textAnchor="middle" fontSize="7.5">
                Ned&apos;s lease
              </text>
              <g style={{ transform: `translateX(${[8, 60, 92, 112, 112][s]}px)`, transition: `transform ${T}` }}>
                <polygon points="0,-12 -5,-20 5,-20" fill="#000" />
              </g>
              <text x="118" y="16" textAnchor="middle" fontSize="7.5">
                new lease
              </text>
            </g>

            {/* who gets the extra */}
            <Fade show={s === 1}>
              <text x="110" y="134" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#b38f00">
                extra wheat: Ned keeps it
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <g transform="translate(200 104)">
                <rect width="64" height="14" fill={RENT} />
                <rect x="64" width={rentW - 64} height="14" fill="#f2b37a" style={{ transition: `width ${T}` }} />
                <text x="32" y="10" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="700">
                  old rent
                </text>
                <text x="84" y="10" textAnchor="middle" fontSize="7" fontWeight="700">
                  + drains
                </text>
                <text x="52" y="-5" textAnchor="middle" fontSize="8.5" fontWeight="600">
                  the new rent
                </text>
              </g>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <text x="180" y="14" textAnchor="middle" fontSize="10" fontWeight="700">
                why improve what you will lose?
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
