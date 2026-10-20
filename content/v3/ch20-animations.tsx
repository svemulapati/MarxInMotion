"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Linen, Place } from "@/components/anim/Things";

const SEA = "#cfe0f2";
const RED = "#d6452f";

/** A small sailing ship. */
function Ship() {
  return (
    <g>
      <path d="M-22,0 L22,0 L15,10 L-15,10 Z" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="-26" stroke="#000" strokeWidth="1.5" />
      <path d="M1,-25 L18,-6 L1,-6 Z" fill="#fff" stroke="#000" strokeWidth="1" />
    </g>
  );
}

/** A little village: two houses. */
function Village({ label }: { label: string }) {
  return (
    <g>
      {[-12, 12].map((dx) => (
        <g key={dx} transform={`translate(${dx} 0)`}>
          <rect x="-8" y="-12" width="16" height="12" fill="#fff" stroke="#000" strokeWidth="1" />
          <path d="M-10,-12 L0,-21 L10,-12 Z" fill="#c98a3a" stroke="#000" strokeWidth="1" />
        </g>
      ))}
      <text y="14" textAnchor="middle" fontSize="9">
        {label}
      </text>
    </g>
  );
}

/** A spice sack (goods from far away). */
function Spice() {
  return (
    <g>
      <path d="M-10,-12 Q0,-16 10,-12 L12,12 L-12,12 Z" fill="#d9a441" stroke="#000" strokeWidth="1" />
      <text y="4" textAnchor="middle" fontSize="6.5" fontWeight="700">
        SPICE
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.1 · The oldest kind of capital
 * Marx's examples: the carrying trade of the Venetians, Genoese and Dutch;
 * Carthage, Rome, the Portuguese; England against Holland.
 * ───────────────────────────────────────────────────────────── */
export function TheOldestKindOfCapital() {
  return (
    <Player
      id="anim-v3-20-1"
      title="20.1 · The oldest kind of capital"
      steps={[
        { caption: "Long before there were spinning mills, there were merchants. Marx says merchant's capital is the oldest form of capital there is." },
        { caption: "A merchant sails between two faraway peoples. He buys spice cheaply in one place and sells it dearly in the other, and carries cloth back the same way. Marx calls this the carrying trade." },
        { caption: "The Venetians, the Genoese and the Dutch grew rich this way, standing in the middle and profiting from both sides, Marx says." },
        { caption: "Where merchants ruled, Marx says, trade often went hand in hand with robbery: piracy, taking people as slaves, and conquering colonies. He names Carthage, Rome, the Venetians, the Portuguese and the Dutch." },
        {
          caption: "Then big industry arrived. Now industry drives trade, not the other way round. Marx's example: Holland, the great trading nation, fell behind England, the great industrial one.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <rect x="70" y="80" width="220" height="90" fill={SEA} />
          <g transform="translate(42 150)">
            <Village label="Spice Coast" />
          </g>
          <g transform="translate(318 150)">
            <Village label="Cloth Hills" />
          </g>

          {/* the ship goes back and forth */}
          <Place x={s === 0 ? 180 : s === 1 ? 250 : s === 2 ? 110 : 180} y={128}>
            <Ship />
          </Place>

          {/* goods and prices */}
          <Fade show={s === 1 || s === 2}>
            <g transform="translate(42 104)">
              <Spice />
            </g>
            <text x="42" y="76" textAnchor="middle" fontSize="9">
              buy cheap
            </text>
            <g transform="translate(318 104)">
              <Spice />
            </g>
            <text x="318" y="76" textAnchor="middle" fontSize="9" fontWeight="700">
              sell dear
            </text>
            <g transform="translate(318 186)">
              <Linen />
            </g>
          </Fade>
          <Fade show={s === 2}>
            <g transform="translate(180 50)">
              <Coins n={5} label="the merchant's gain" />
            </g>
            <text x="180" y="16" textAnchor="middle" fontSize="10">
              Venetians, Genoese, Dutch
            </text>
          </Fade>
          <Fade show={s === 3}>
            <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600" fill={RED}>
              trade and robbery went together
            </text>
            <text x="180" y="46" textAnchor="middle" fontSize="9">
              piracy, slavery, conquest
            </text>
          </Fade>

          {/* England and Holland */}
          <Fade show={s === 4}>
            <rect x="0" y="0" width="360" height="72" fill="#f1f1f1" />
            <g transform="translate(110 46)">
              <Ship />
              <text y="22" textAnchor="middle" fontSize="9">
                Holland: trade
              </text>
            </g>
            <g transform="translate(250 50)">
              <rect x="-22" y="-20" width="44" height="22" fill="#fff" stroke="#000" />
              <rect x="10" y="-36" width="7" height="16" fill="#555" />
              <text y="18" textAnchor="middle" fontSize="9">
                England: industry
              </text>
            </g>
            <text x="180" y="14" textAnchor="middle" fontSize="10" fontWeight="600">
              industry now drives trade
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.2 · Two roads out of the old world
 * Marx's example of the second road: the English 17th-century clothier who
 * sells wool to independent weavers and buys their cloth.
 * ───────────────────────────────────────────────────────────── */
export function TwoRoadsOutOfTheOldWorld() {
  return (
    <Player
      id="anim-v3-20-2"
      title="20.2 · Two roads out of the old world"
      steps={[
        { caption: "In the old world, weavers worked at home and farmers grew food for themselves. How did capitalism grow out of that? Marx sees two roads." },
        { caption: "Road one: the merchant takes charge. Tom sells Leo the wool and buys back his cloth. Leo still weaves at home, but Tom now sets the price. Marx's example is the English clothier of the 1600s." },
        { caption: "Marx says this road does not change how things are made. It keeps the old ways going, and only makes the weavers poorer, until they are wage-workers in all but name." },
        { caption: "Road two: a producer becomes a merchant and a capitalist himself. He gathers workers in one place, buys machines and makes goods for the market." },
        {
          caption: "Marx calls the second road “the really revolutionising path”. It is the road that leads to mills like Mr. Moneybags'.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="180" y1="24" x2="180" y2="214" stroke="#000" strokeOpacity={s >= 3 ? 0.15 : 0} />

          {/* road one: putting out */}
          <g style={{ opacity: s >= 3 ? 0.4 : 1, transition: "opacity 500ms" }}>
            <text x="90" y="20" textAnchor="middle" fontSize="10" fontWeight="600">
              road one: the merchant
            </text>
            <Figure who="leo" x={50} y={200} scale={0.8} mood={s === 2 ? "sad" : "happy"} />
            <g transform="translate(50 132)">
              <rect x="-16" y="-14" width="32" height="20" fill="#fff" stroke="#000" />
              <text y="0" textAnchor="middle" fontSize="7">
                loom
              </text>
            </g>
            <Fade show={s >= 1}>
              <Figure who="tom" x={140} y={200} scale={0.8} />
              <Place x={s === 1 ? 70 : 120} y={80}>
                <g>
                  <ellipse rx="12" ry="8" fill="#f2efe6" stroke="#000" />
                  <text y="20" textAnchor="middle" fontSize="8">
                    wool
                  </text>
                </g>
              </Place>
              <Place x={s === 1 ? 120 : 70} y={60}>
                <Linen label="cloth" />
              </Place>
              <path d="M70,104 L120,104" stroke="#000" strokeOpacity=".4" strokeDasharray="3 3" />
              <text x="95" y="118" textAnchor="middle" fontSize="8">
                Tom sets the price
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="90" y="38" textAnchor="middle" fontSize="9" fill={RED}>
                same old loom, poorer weaver
              </text>
            </Fade>
          </g>

          {/* road two: the producer becomes a capitalist */}
          <Fade show={s >= 3}>
            <text x="270" y="20" textAnchor="middle" fontSize="10" fontWeight="600">
              road two: the producer
            </text>
            <g transform="translate(270 112)">
              <rect x="-60" y="-40" width="120" height="56" fill="#fff" stroke="#000" />
              <path d="M-60,-40 L-40,-56 L-20,-40 L0,-56 L20,-40 L40,-56 L60,-40" fill="none" stroke="#000" />
              <rect x="44" y="-74" width="10" height="20" fill="#555" />
              <text y="-18" textAnchor="middle" fontSize="8">
                his own workshop
              </text>
              <g transform="translate(-30 4) scale(.8)">
                <Linen />
              </g>
              <g transform="translate(18 4) scale(.8)">
                <Linen />
              </g>
            </g>
            {[230, 260, 290].map((x) => (
              <Figure key={x} name="" x={x} y={200} scale={0.6} label={false} />
            ))}
            <Figure name="master" x={330} y={200} scale={0.75} />
          </Fade>
          <Fade show={s === 4} delay={300}>
            <rect x="196" y="34" width="148" height="26" fill="#000" />
            <text x="270" y="51" textAnchor="middle" fontSize="9" fill="#fff">
              &ldquo;the really revolutionising path&rdquo;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
