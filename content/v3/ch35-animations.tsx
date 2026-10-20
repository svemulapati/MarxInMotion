"use client";

import Player from "@/components/anim/Player";
import { Fade, Gold, IOU, Place } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";
const RED = "#d6452f";

/* ─────────────────────────────────────────────────────────────
 * 35.1 · The barometer between countries
 * Engels' explanation in Ch 35: if England owes Germany more than
 * Germany owes England, marks get dearer in London until it pays to
 * ship gold instead of bills; then the Bank of England raises interest.
 * ───────────────────────────────────────────────────────────── */
export function TheBarometer() {
  return (
    <Player
      id="anim-v3-35-1"
      title="35.1 · The barometer between countries"
      steps={[
        { caption: "England and Germany trade with each other. Normally they pay with bills of exchange: paper promises that cancel each other out." },
        { caption: "But this year England owes Germany more than Germany owes England. More English buyers want marks than there are marks to go round." },
        { caption: "So in London the price of marks rises. This price of one country's money in another's is the rate of exchange." },
        { caption: "When marks get dear enough, it is cheaper to ship real gold to Germany than to buy bills. Gold leaves England." },
        {
          caption: "Gold leaving worries the Bank of England, so it raises interest to pull gold back. That is why the rate of exchange is called the barometer of gold's movements.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const tilt = s >= 1 ? 8 : 0;
        const price = [20, 20, 21, 22, 22][s];
        return (
          <>
            {/* two countries */}
            <rect x="12" y="150" width="96" height="40" fill="#f1f1f1" stroke="#000" />
            <text x="60" y="174" textAnchor="middle" fontSize="11" fontWeight="600">
              England
            </text>
            <rect x="252" y="150" width="96" height="40" fill="#f1f1f1" stroke="#000" />
            <text x="300" y="174" textAnchor="middle" fontSize="11" fontWeight="600">
              Germany
            </text>

            {/* a balance of what each owes */}
            <polygon points="180,128 170,148 190,148" fill="#000" />
            <g style={{ transformOrigin: "180px 128px", transform: `rotate(${tilt}deg)`, transition: `transform ${T}` }}>
              <line x1="110" y1="128" x2="250" y2="128" stroke="#000" strokeWidth="3" />
              <g transform="translate(124 116)">
                <IOU text="to Ger" />
              </g>
              <g transform="translate(124 98)" style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 500ms" }}>
                <IOU text="to Ger" />
              </g>
              <g transform="translate(236 116)">
                <IOU text="to Eng" />
              </g>
            </g>

            {/* price of marks in London */}
            <Fade show={s >= 2}>
              <rect x="120" y="14" width="120" height="44" fill="#fff" stroke="#000" />
              <text x="180" y="30" textAnchor="middle" fontSize="9">
                price of marks in London
              </text>
              <text x="180" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill={s >= 2 ? RED : "#000"}>
                {price} ↑
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="180" y="72" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                (example numbers)
              </text>
            </Fade>

            {/* gold ships out */}
            <Place x={s >= 3 ? 280 : 60} y={204} show={s >= 3}>
              <Gold label="Au" />
            </Place>
            <Fade show={s >= 3}>
              <text x="170" y="212" textAnchor="middle" fontSize="9">
                gold goes to Germany
              </text>
            </Fade>

            {/* the Bank raises interest */}
            <Fade show={s === 4} delay={300}>
              <rect x="10" y="20" width="96" height="36" fill={GOLD} />
              <text x="58" y="35" textAnchor="middle" fontSize="9">
                Bank of England
              </text>
              <text x="58" y="49" textAnchor="middle" fontSize="10" fontWeight="700">
                interest up
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 35.2 · Faith and gold
 * "The monetary system is essentially a Catholic institution, the
 * credit system essentially Protestant." The central bank is the
 * pivot of the credit system, the metal reserve the pivot of the bank;
 * a drain of metal is "a premonition" of crisis.
 * ───────────────────────────────────────────────────────────── */
export function FaithAndGold() {
  return (
    <Player
      id="anim-v3-35-2"
      title="35.2 · Faith and gold"
      steps={[
        { caption: "Most of a country's buying and selling runs on paper: bills, cheques and bank-notes, piled up like a huge upside-down pyramid." },
        { caption: "All that paper rests on one small block at the bottom: the gold reserve of the central bank. Marx: the bank is the pivot of credit, and the gold is the pivot of the bank." },
        { caption: "Marx makes a joke. Credit is “essentially Protestant”: it works on faith, as long as people believe the paper is good." },
        { caption: "And money is “essentially a Catholic institution”: in the end everyone returns to the real thing, gold." },
        {
          caption: "So when gold starts draining away, Marx says it is often a warning that a crisis is near, because then the whole pyramid wants to turn into gold at once.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const wobble = s === 4 ? -4 : 0;
        return (
          <>
            <g style={{ transformOrigin: "180px 186px", transform: `rotate(${wobble}deg)`, transition: `transform ${T}` }}>
              {/* the inverted pyramid of paper */}
              {[
                { w: 250, y: 40, label: "bills of exchange" },
                { w: 180, y: 80, label: "bank deposits" },
                { w: 110, y: 120, label: "bank-notes" },
              ].map((r) => (
                <g key={r.label}>
                  <rect x={180 - r.w / 2} y={r.y} width={r.w} height="34" fill="#fffbe6" stroke="#000" />
                  <text x="180" y={r.y + 21} textAnchor="middle" fontSize="10">
                    {r.label}
                  </text>
                </g>
              ))}
              {/* the gold point */}
              <rect x="160" y="156" width="40" height="30" fill={GOLD} stroke="#000" style={{ opacity: s >= 1 ? 1 : 0.4, transition: "opacity 500ms" }} />
              <text x="180" y="175" textAnchor="middle" fontSize="9" fontWeight="700">
                gold
              </text>
            </g>
            <line x1="40" y1="190" x2="320" y2="190" stroke="#000" strokeOpacity=".3" />

            <Fade show={s >= 1}>
              <text x="216" y="172" fontSize="9">
                ← the central bank&apos;s reserve
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="180" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
                credit: runs on faith
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
                money: back to the real thing
              </text>
            </Fade>
            <Fade show={s === 4}>
              {[0, 1, 2].map((i) => (
                <circle key={i} cx={150 - i * 26} cy={204} r="6" fill={GOLD} stroke="#000" />
              ))}
              <text x="166" y="208" fontSize="9" fill={RED} fontWeight="600">
                gold draining: a warning sign
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
