"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade } from "@/components/anim/Things";
import { Bar, TONE, Yarn } from "@/components/anim/Workshop";
import { INCOME } from "./ch48-animations";

/* ─────────────────────────────────────────────────────────────
 * 49.1 · Income for one, capital for another
 * Workshop numbers (CONTINUITY.md): 20 lb of yarn = 24 c + 3 v + 3 s.
 * ───────────────────────────────────────────────────────────── */
const U = 9; // px per coin

export function IncomeForOne() {
  return (
    <Player
      id="anim-v3-49-1"
      title="49.1 · Income for one, capital for another"
      steps={[
        { caption: "Mr. Moneybags' 20 lb of yarn is worth 30 coins: 24 for the cotton and the wear on the spindles, 3 for Sam's wage, 3 of surplus-value." },
        { caption: "For Mr. Moneybags, the 3 coins of surplus are income. For Sam, the 3 coins of wages are income. Together, 6 coins of the yarn become someone's income." },
        { caption: "Now the weaving mill buys the yarn. For the weaving mill, every one of the 30 coins is a cost: raw material for its cloth, part of its capital." },
        { caption: "So some economists said: income or capital, it just depends who is looking. Marx agrees that the same yarn is income for one and capital for another." },
        {
          caption: "But he adds: look at the whole town's year and the yarn still splits the same way. The 24 coins must buy new cotton and spindles, or next year nobody can spin. That part is nobody's income.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(40 52)">
            <Yarn />
          </g>
          <text x="40" y="78" textAnchor="middle" fontSize="8.5">
            20 lb yarn
          </text>
          <Bar
            x={66}
            y={42}
            unit={U}
            h={22}
            segs={[
              { n: 24, color: TONE.cotton, label: "24: cotton, wear" },
              { n: 3, color: TONE.wage, label: "3" },
              { n: 3, color: TONE.surplus, label: "3" },
            ]}
          />
          <text x={66 + 30 * U + 6} y="57" fontSize="10" fontWeight="600">
            30
          </text>

          {/* who sees what */}
          <Fade show={s === 1 || s === 4}>
            <rect x={66 + 24 * U} y="38" width={6 * U} height="30" fill="none" stroke="#2a9d5b" strokeWidth="2.5" />
            <text x={66 + 27 * U} y="30" textAnchor="middle" fontSize="9" fontWeight="600" fill="#2a9d5b">
              income
            </text>
          </Fade>
          <Fade show={s === 2 || s === 3}>
            <rect x="64" y="38" width={30 * U + 4} height="30" fill="none" stroke="#7b4bd6" strokeWidth="2.5" />
            <text x={66 + 15 * U} y="30" textAnchor="middle" fontSize="9" fontWeight="600" fill="#7b4bd6">
              for the weaving mill: all of it is capital
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="64" y="38" width={24 * U + 2} height="30" fill="none" stroke="#000" strokeWidth="2.5" strokeDasharray="5 3" />
            <text x={66 + 12 * U} y="86" textAnchor="middle" fontSize="9" fontWeight="600">
              must replace cotton and spindles
            </text>
          </Fade>

          <Figure who="moneybags" x={60} y={200} scale={0.72} />
          <Figure who="sam" x={110} y={200} scale={0.72} />
          {/* the weaving mill */}
          <g style={{ opacity: s >= 2 ? 1 : 0.2, transition: "opacity 500ms" }}>
            <g transform="translate(270 160)">
              <rect x="-40" y="-26" width="80" height="44" fill="#fff" stroke="#000" />
              <path d="M-40,-26 l12,-12 l12,12 l12,-12 l12,12 l12,-12 l12,12" fill="none" stroke="#000" />
              <text y="6" textAnchor="middle" fontSize="9">
                weaving mill
              </text>
            </g>
          </g>
          <g
            style={{
              transform: `translate(${s >= 2 ? 206 : 150}px, ${s >= 2 ? 172 : 160}px)`,
              transition: "transform 800ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            <Yarn />
          </g>
          <Fade show={s === 3}>
            <text x="180" y="112" textAnchor="middle" fontSize="10" fontStyle="italic">
              &ldquo;it depends who is looking&rdquo;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 49.2 · Gross and net
 * A made-up year for the whole town: 200 c + 50 v + 50 s = 300.
 * ───────────────────────────────────────────────────────────── */
const G = 0.95; // px per coin
const GX = 35;

export function GrossAndNet() {
  return (
    <Player
      id="anim-v3-49-2"
      title="49.2 · Gross and net"
      steps={[
        { caption: "Here is everything Tiny Town made in one year, worth 300 coins. Marx calls it the gross product. (These numbers are made up.)" },
        { caption: "200 of it only replaces what the year used up: cotton spun, iron hammered, machines worn. It has to go back into the workshops." },
        { caption: "The other 100 is new value. Wages, profit and rent all come out of it. Marx calls these 100 coins the gross income." },
        { caption: "Bosses and landlords call only the surplus, 50 coins, their net income: what is left once wages are paid." },
        {
          caption: "The economist Say claimed the whole 300 could be the nation's income. Marx calls this the absurd dogma since Adam Smith: eat it all, and next year there is no cotton and no machines.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="180" y="28" textAnchor="middle" fontSize="11" fontWeight="600">
            Tiny Town&apos;s year: 300 coins
          </text>
          <Bar
            x={GX}
            y={40}
            unit={G}
            h={30}
            segs={[
              { n: 200, color: TONE.cotton, label: "200: used up, replaced" },
              { n: 50, color: TONE.wage, label: "wages 50" },
              { n: 50, color: TONE.surplus, label: "surplus 50" },
            ]}
          />

          {/* brackets */}
          {[
            { show: s >= 0, x1: GX, x2: GX + 300 * G, y: 86, label: "gross product: 300", color: "#000" },
            { show: s >= 2, x1: GX + 200 * G, x2: GX + 300 * G, y: 108, label: "gross income: 100", color: "#2a9d5b" },
            { show: s >= 3, x1: GX + 250 * G, x2: GX + 300 * G, y: 130, label: "net income: 50", color: "#b38f00" },
          ].map((b) => (
            <Fade key={b.label} show={b.show && s !== 4}>
              <path d={`M${b.x1},${b.y - 6} V${b.y} H${b.x2} V${b.y - 6}`} fill="none" stroke={b.color} strokeWidth="1.5" />
              <text x={b.x2} y={b.y + 13} textAnchor="end" fontSize="9.5" fontWeight="600" fill={b.color}>
                {b.label}
              </text>
            </Fade>
          ))}
          <Fade show={s === 1}>
            <text x={GX + 100 * G} y="108" textAnchor="middle" fontSize="9">
              back into the workshops
            </text>
          </Fade>

          {/* Say's fantasy */}
          <Fade show={s === 4}>
            <rect x={GX - 3} y="36" width={300 * G + 6} height="38" fill="none" stroke="#d6452f" strokeWidth="2" strokeDasharray="5 3" />
            <text x="180" y="96" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
              &ldquo;all 300 is income&rdquo;?
            </text>
            <g transform="translate(130 150)">
              <rect x="-26" y="-16" width="52" height="30" fill="#fff" stroke="#000" />
              <text y="3" textAnchor="middle" fontSize="8.5">
                next year
              </text>
              <g transform="translate(22 -14)">
                <Cross />
              </g>
            </g>
            <text x="130" y="184" textAnchor="middle" fontSize="8.5">
              no cotton, no machines
            </text>
          </Fade>

          <g style={{ opacity: s === 4 ? 0.2 : 1, transition: "opacity 500ms" }}>
            <Figure who="sam" x={GX + 225 * G} y={204} scale={0.6} />
            <Figure who="moneybags" x={GX + 268 * G} y={204} scale={0.6} label={false} />
            <Figure name="Landlord" x={GX + 296 * G} y={204} scale={0.6} label={false} />
          </g>
          <Fade show={s >= 2 && s < 4}>
            <line x1={GX + 225 * G} y1="152" x2={GX + 225 * G} y2="76" stroke={INCOME.wages} strokeOpacity=".4" strokeDasharray="3 3" />
          </Fade>
        </>
      )}
    </Player>
  );
}
