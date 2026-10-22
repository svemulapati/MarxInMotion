"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade, Linen, Place, Tick } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";
import { GOLD, GREEN, RED, Shelf, T } from "./ch01-animations";

/** A sack of grain. */
function Sack({ gold = false }: { gold?: boolean }) {
  return (
    <g>
      <path d="M-7,-9 L7,-9 L9,9 Q0,12 -9,9 Z" fill={gold ? GOLD : "#e3cf9a"} stroke="#000" strokeWidth=".9" />
      <path d="M-5,-9 Q0,-13 5,-9" fill="none" stroke="#000" strokeWidth=".9" />
    </g>
  );
}

/** A row of n sacks starting at x, the last `gold` of them coloured. */
function Sacks({ x, y, n, gold = 0, show = true }: { x: number; y: number; n: number; gold?: number; show?: boolean }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <Place key={i} x={x + i * 19} y={y} show={show} delay={i * 40}>
          <Sack gold={i >= n - gold} />
        </Place>
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.1 · From the market to the field
 * The Physiocrats moved the search for surplus-value from circulation to
 * production; the labourer on the minimum of wages (the "strict
 * nécessaire") reproduces more. Sack numbers are this site's.
 * ───────────────────────────────────────────────────────────── */
export function FromTheMarketToTheField() {
  return (
    <Player
      id="anim-v4-2-1"
      viewBox="0 0 360 236"
      title="2.1 · From the market to the field"
      steps={[
        {
          caption: "The next visitors are a whole school from France: Dr. François Quesnay and his followers, the Physiocrats. Steuart looked for profit in the market. They walked out to the farm.",
          ms: 4800,
        },
        { caption: "On Grandpa Ned's farm a farmhand eats 10 sacks of grain in a year: the bare minimum to stay alive. The Physiocrats called it the strictly necessary." },
        { caption: "But in that same year his work grows 15 sacks. That is 5 more than he needs. (Made-up numbers.)" },
        { caption: "They called the extra the net product. Nobody tricked anybody in a market to get it. It was made, out in the field." },
        {
          caption: "That move is why Marx calls the Physiocrats the true fathers of modern political economy: they took the hunt for surplus-value out of buying and selling, into production.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <Fade show={s === 0}>
            <Shelf x={250} y={6} label="Quesnay and friends" />
          </Fade>

          {/* market on the left, field on the right */}
          <g style={{ opacity: s === 0 ? 1 : 0.18, transition: `opacity ${T}` }}>
            <rect x="20" y="96" width="70" height="44" fill="#fff" stroke="#000" />
            <path d="M14,96 L50,76 L96,96" fill={RED} fillOpacity=".25" stroke="#000" />
            <text x="55" y="122" textAnchor="middle" fontSize="8.5">
              the market
            </text>
          </g>
          <rect x="130" y="150" width="210" height="16" fill="#c8b07a" opacity=".55" />
          <text x="235" y="182" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
            Grandpa Ned&apos;s field
          </text>
          <Figure name="Quesnay" x={s === 0 ? 70 : 40} y={210} scale={0.75} style={{ opacity: s === 0 ? 1 : 0.35, transition: `opacity ${T}` }} />
          <Fade show={s >= 1}>
            <Figure name="farmhand" x={150} y={146} scale={0.72} />
          </Fade>

          <Fade show={s >= 1}>
            <text x="180" y="58" fontSize="9">
              eats in a year:
            </text>
            <Sacks x={186} y={76} n={8} />
            <Sacks x={186} y={98} n={2} />
            <text x="232" y="102" fontSize="9" fontWeight="600">
              10
            </text>
          </Fade>
          <Fade show={s >= 2}>
            <text x="180" y="122" fontSize="9">
              grows in a year: <tspan fontWeight="700">15</tspan>
            </text>
            <Sacks x={186} y={138} n={8} gold={0} />
            <Sacks x={186} y={160} n={7} gold={5} />
          </Fade>
          <Fade show={s >= 3}>
            <text x="186" y="200" fontSize="10" fontWeight="700" fill="#b38f00">
              net product: 5
            </text>
          </Fade>
          <Fade show={s >= 4}>
            <rect x="8" y="10" width="236" height="20" fill="#000" />
            <text x="126" y="24" textAnchor="middle" fontSize="9" fill="#fff">
              surplus-value is made in production, not in selling
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.2 · A gift of nature?
 * Agriculture as the only productive labour, manufacture "sterile", rent the
 * only form of surplus-value; Marx: the "gift of nature" is surplus labour.
 * ───────────────────────────────────────────────────────────── */
export function AGiftOfNature() {
  return (
    <Player
      id="anim-v4-2-2"
      title="2.2 · A gift of nature?"
      steps={[
        { caption: "Why only farming? The Physiocrats pointed at the soil. Plant one sack of seed and many sacks come up. The extra looks like a gift of nature." },
        {
          caption: "Leo the weaver, they said, only changes the shape of things. His cloth is worth the flax plus the food he ate while weaving, nothing more. They called that kind of work sterile.",
          ms: 4800,
        },
        { caption: "So for them there was only one extra in the whole country, the farm's, and it belonged to the owner of the land as rent." },
        {
          caption: "Marx says the real gift is not in the soil. It is that a day of farm work can feed more than the worker who does it. The extra is extra work, surplus labour.",
          ms: 4600,
        },
        {
          caption: "And Leo's work can leave an extra too, as soon as he works longer than it takes to earn his keep. Volume I showed exactly that in Mr. Moneybags' workshop.",
          ms: 4600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the field */}
          <g transform="translate(90 0)">
            <rect x="-70" y="140" width="140" height="10" fill="#8a6a3a" />
            {[-48, -24, 0, 24, 48].map((x) => (
              <g key={x}>
                <line x1={x} y1="140" x2={x} y2="104" stroke={GREEN} strokeWidth="2" />
                <ellipse cx={x} cy="100" rx="4" ry="9" fill="#e3cf9a" stroke="#000" strokeWidth=".7" />
              </g>
            ))}
            <text x="0" y="168" textAnchor="middle" fontSize="8.5">
              the field
            </text>
            <Fade show={s <= 2}>
              <text x="0" y="84" textAnchor="middle" fontSize="9" fontWeight="600" fill="#b38f00">
                nature&apos;s gift?
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="0" y="74" textAnchor="middle" fontSize="9" fontWeight="600" fill="#b38f00">
                surplus labour
              </text>
              <rect x="-60" y="186" width="60" height="12" fill={TONE.wage} />
              <rect x="0" y="186" width="60" height="12" fill={GOLD} />
              <text x="-30" y="208" textAnchor="middle" fontSize="7.5">
                feeds the worker
              </text>
              <text x="30" y="208" textAnchor="middle" fontSize="7.5">
                the extra
              </text>
            </Fade>
            <Fade show={s === 3}>
              <g transform="translate(-30 84)">
                <Cross />
              </g>
            </Fade>
          </g>

          {/* the weaver */}
          <g transform="translate(270 0)">
            <Figure who="leo" x={-50} y={150} scale={0.7} mood={s === 1 || s === 2 ? "sad" : "happy"} />
            <Fade show={s >= 1}>
              <g transform="translate(10 104) scale(.8)">
                <Linen />
              </g>
              <text x="10" y="128" textAnchor="middle" fontSize="8">
                flax + food eaten
              </text>
            </Fade>
            <Fade show={s === 1 || s === 2}>
              <text x="10" y="84" textAnchor="middle" fontSize="10" fontWeight="700" fill={RED}>
                sterile
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <rect x="-50" y="186" width="50" height="12" fill={TONE.wage} />
              <rect x="0" y="186" width="50" height="12" fill={GOLD} />
              <text x="0" y="214" textAnchor="middle" fontSize="7.5">
                paid hours, then extra hours
              </text>
              <g transform="translate(40 84)">
                <Tick />
              </g>
            </Fade>
          </g>

          {/* rent to the landowner */}
          <Fade show={s === 2}>
            <path d="M150,120 C180,60 200,60 214,54" fill="none" stroke="#000" strokeDasharray="4 3" />
            <Figure name="Landlord" x={206} y={60} scale={0.55} />
            <text x="160" y="40" textAnchor="middle" fontSize="9" fontWeight="600">
              the only extra = rent
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.3 · An old coat over a new heart
 * The feudal semblance and bourgeois essence of the system; laissez faire,
 * the single tax on rent; Turgot (edict of February 1776, revoked three
 * months later); separation of the labourer from the land.
 * ───────────────────────────────────────────────────────────── */
export function AnOldCoatOverANewHeart() {
  return (
    <Player
      id="anim-v4-2-3"
      title="2.3 · An old coat over a new heart"
      steps={[
        { caption: "The Physiocrats looked old-fashioned. They praised the owners of land as the class that receives the extra, and some noble lords loved them for it." },
        {
          caption: "Yet what they asked for was very modern: laissez faire, let business alone. No guilds, no meddling by the state, and only one tax, on the rent of land.",
          ms: 4600,
        },
        {
          caption: "Marx says the system wore a landowner's coat over a capitalist heart. Underneath, it was the first real study of how capitalist production works.",
          ms: 4400,
        },
        {
          caption: "The most developed Physiocrat, Turgot, became a French minister. In February 1776 he abolished the guilds. Three months later the order was cancelled.",
          ms: 4600,
        },
        {
          caption: "Turgot also saw why a worker hands over the extra at all: he has been separated from the land, so he must work for whoever owns it.",
          ms: 4400,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the coat and the heart */}
          <Fade show={s <= 2}>
            <g transform="translate(110 112)">
              <g style={{ opacity: s === 2 ? 0.35 : 1, transition: `opacity ${T}` }}>
                <path d="M-40,-50 L-14,-58 L0,-40 L14,-58 L40,-50 L58,40 L-58,40 Z" fill="#7a3b3b" stroke="#000" strokeWidth="1.2" />
                <path d="M-20,-46 L0,-30 L20,-46" fill="none" stroke={GOLD} strokeWidth="3" />
                <text y="62" textAnchor="middle" fontSize="8.5">
                  a landowner&apos;s coat
                </text>
              </g>
              <Fade show={s === 2}>
                <circle r="20" fill="none" stroke="#000" strokeWidth="2" className="v4c02-spin" strokeDasharray="6 4" />
                <circle r="8" fill={GOLD} stroke="#000" />
                <text y="-26" textAnchor="middle" fontSize="8.5" fontWeight="700">
                  capitalist heart
                </text>
              </Fade>
            </g>
          </Fade>

          {/* the modern demands */}
          <Fade show={s >= 1 && s <= 2}>
            {[
              ["laissez faire", 50],
              ["no guilds", 84],
              ["no state meddling", 118],
              ["one tax: on rent", 152],
            ].map(([t, y]) => (
              <g key={t as string}>
                <rect x="210" y={(y as number) - 14} width="130" height="20" fill="#fff" stroke="#000" />
                <text x="275" y={y as number} textAnchor="middle" fontSize="9">
                  {t}
                </text>
              </g>
            ))}
          </Fade>

          {/* Turgot's edict */}
          <Fade show={s === 3}>
            <Figure name="Turgot" x={70} y={200} scale={0.8} />
            <line x1="130" y1="120" x2="330" y2="120" stroke="#000" strokeWidth="2" />
            {[
              { x: 150, t: "Feb 1776", sub: "guilds abolished", c: GREEN },
              { x: 300, t: "3 months later", sub: "order cancelled", c: RED },
            ].map((e) => (
              <g key={e.t}>
                <circle cx={e.x} cy="120" r="6" fill={e.c} stroke="#000" />
                <text x={e.x} y="100" textAnchor="middle" fontSize="9" fontWeight="600">
                  {e.t}
                </text>
                <text x={e.x} y="144" textAnchor="middle" fontSize="8.5">
                  {e.sub}
                </text>
              </g>
            ))}
          </Fade>

          {/* separated from the land */}
          <Fade show={s === 4}>
            <rect x="30" y="150" width="140" height="14" fill="#c8b07a" />
            {[30, 60, 90, 120, 150, 170].map((x) => (
              <line key={x} x1={x} y1="128" x2={x} y2="164" stroke="#000" strokeWidth="1.5" />
            ))}
            <line x1="30" y1="134" x2="170" y2="134" stroke="#000" strokeWidth="1.5" />
            <text x="100" y="184" textAnchor="middle" fontSize="8.5">
              land, fenced off
            </text>
            <Figure name="worker" x={240} y={176} scale={0.7} mood="sad" />
            <Figure name="Turgot" x={320} y={176} scale={0.7} />
            <text x="200" y="60" textAnchor="middle" fontSize="9.5" fontWeight="600" fill={CAST.sam.color}>
              no land of his own, so he works for the owner
            </text>
          </Fade>
          <style>{`
            @keyframes v4c02-spin { to { transform: rotate(360deg); } }
            .v4c02-spin { transform-box: fill-box; transform-origin: center; animation: v4c02-spin 4s linear infinite; }
          `}</style>
        </>
      )}
    </Player>
  );
}
