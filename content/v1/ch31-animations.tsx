"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Gold, Place } from "@/components/anim/Things";

const STYLE = `
@keyframes c31-sail { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
@keyframes c31-puff { 0% { transform: translate(0,0) scale(.6); opacity: .8 } 100% { transform: translate(5px,-24px) scale(1.4); opacity: 0 } }
.c31-sail { animation: c31-sail 1.6s ease-in-out infinite; }
.c31-puff { animation: c31-puff 1.8s ease-out infinite; transform-box: fill-box; transform-origin: center; }
`;

/** A sailing ship, centred on its waterline. */
function Ship() {
  return (
    <g className="c31-sail">
      <path d="M-22,0 L22,0 L16,9 L-16,9 Z" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="-28" stroke="#000" strokeWidth="1.2" />
      <path d="M1,-26 L18,-8 L1,-8 Z" fill="#fff" stroke="#000" strokeWidth="1" />
      <path d="M-1,-24 L-16,-8 L-1,-8 Z" fill="#fff" stroke="#000" strokeWidth="1" />
    </g>
  );
}

/** A small factory with smoke. */
function Works() {
  return (
    <g>
      <rect x="-26" y="-22" width="52" height="22" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <path d="M-26,-22 L-15,-31 L-15,-22 L-4,-31 L-4,-22" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <rect x="12" y="-42" width="8" height="20" fill="#8c8c8c" stroke="#000" />
      {[0, 900].map((d) => (
        <circle key={d} cx="16" cy="-45" r="4" fill="#9a9a9a" className="c31-puff" style={{ animationDelay: `${d}ms` }} />
      ))}
    </g>
  );
}

/** A snail, for the slow road. */
function Snail() {
  return (
    <g>
      <path d="M-14,0 L12,0 Q16,0 16,-4 L18,-10" fill="none" stroke="#000" strokeWidth="1.5" />
      <circle cx="-2" cy="-8" r="8" fill="#e8c35a" stroke="#000" strokeWidth="1.2" />
      <path d="M-2,-8 m0,-4 a4,4 0 1,1 -4,4" fill="none" stroke="#000" strokeWidth="1" />
    </g>
  );
}

/** A crown, worn by the king one-off. */
function Crown() {
  return <path d="M-9,-60 L-9,-68 L-4,-63 L0,-70 L4,-63 L9,-68 L9,-60 Z" fill="#e6b800" stroke="#000" strokeWidth="1" />;
}

/* ─────────────────────────────────────────────────────────────
 * 31.1 · The slow road and the fast road
 * ───────────────────────────────────────────────────────────── */
const LEVERS = ["colonies", "national debt", "heavy taxes", "protection"];

export function TheSlowRoadAndTheFastRoad() {
  return (
    <Player
      id="anim-31-1"
      title="31.1 · The slow road and the fast road"
      steps={[
        { caption: "Some capitalists grew slowly. A small master saved a little, hired one more helper, then another. Marx says this road went at a snail's pace." },
        { caption: "But after the great sea voyages at the end of the 1400s, a world market opened up. The snail's road was far too slow for it." },
        { caption: "So a faster road was taken, using the power of the state. Marx names four levers: colonies, national debt, heavy taxes, and protection of home industry." },
        { caption: "Each lever pushed money into a few hands, and pushed small farmers and craftspeople out of working for themselves." },
        { caption: "Marx sums it up in one sentence: “Force is the midwife of every old society pregnant with a new one.”", ms: 4600 },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          {/* the slow road */}
          <line x1="16" y1="190" x2="344" y2="190" stroke="#000" strokeOpacity=".25" strokeDasharray="6 5" />
          <text x="16" y="208" fontSize="9" fillOpacity=".6">
            the slow road
          </text>
          <Place x={s === 0 ? 70 : 92} y={190}>
            <Snail />
          </Place>
          <Figure name="small master" x={36} y={186} scale={0.55} />
          <Fade show={s >= 1}>
            <text x="230" y="208" fontSize="9" fill="#d6452f">
              far too slow
            </text>
          </Fade>

          {/* the world market opens */}
          <Fade show={s === 1}>
            <circle cx="300" cy="62" r="34" fill="#cfe3f5" stroke="#000" strokeWidth="1.2" />
            <path d="M282,48 q10,-10 22,0 q6,10 -6,18 q-14,4 -16,-18 M306,74 q8,4 14,-6" fill="#a7c98a" stroke="#000" strokeWidth=".8" />
            <text x="300" y="112" textAnchor="middle" fontSize="9">
              a world market
            </text>
          </Fade>
          <Place x={s >= 1 ? 228 : 150} y={98} show={s === 1}>
            <Ship />
          </Place>

          {/* four levers of the state */}
          {LEVERS.map((l, i) => (
            <Place key={l} x={36 + i * 74} y={60} show={s >= 2} delay={i * 200}>
              <rect x="-33" y="-14" width="66" height="28" fill="#000" />
              <text y="4" textAnchor="middle" fontSize="9" fill="#fff">
                {l}
              </text>
            </Place>
          ))}
          <Fade show={s >= 2}>
            <text x="148" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
              the fast road: the power of the state
            </text>
          </Fade>

          {/* money to a few, small producers out */}
          <Fade show={s === 3}>
            {LEVERS.map((l, i) => (
              <line key={l} x1={36 + i * 74} y1="76" x2="150" y2="118" stroke="#000" strokeOpacity=".3" />
            ))}
          </Fade>
          <Fade show={s >= 3}>
            <g transform="translate(150 132)">
              <Gold label="£" />
            </g>
            <text x="150" y="160" textAnchor="middle" fontSize="9">
              into a few hands
            </text>
            {[250, 280, 310].map((x, i) => (
              <Place key={x} x={s >= 3 ? x + 20 : x} y={164} delay={i * 150}>
                <Figure name="" x={0} y={0} scale={0.42} mood="sad" label={false} />
              </Place>
            ))}
            <text x="290" y="182" textAnchor="middle" fontSize="8.5">
              small producers pushed out
            </text>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="196" y="94" width="156" height="34" fill="#fff" stroke="#000" />
            <text x="274" y="108" textAnchor="middle" fontSize="8.5">
              &ldquo;Force is the midwife of every
            </text>
            <text x="274" y="120" textAnchor="middle" fontSize="8.5">
              old society pregnant with a new one&rdquo;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 31.2 · Treasure that floated home (the colonial system)
 * Liverpool slave-ship counts are Marx's (from Aikin, 1795).
 * ───────────────────────────────────────────────────────────── */
const LIVERPOOL = [
  { year: "1730", ships: 15 },
  { year: "1751", ships: 53 },
  { year: "1760", ships: 74 },
  { year: "1770", ships: 96 },
  { year: "1792", ships: 132 },
];

export function TreasureThatFloatedHome() {
  return (
    <Player
      id="anim-31-2"
      title="31.2 · Treasure that floated home"
      steps={[
        { caption: "Ships sailed from Europe to lands far away: the Americas, Africa and the East Indies." },
        {
          caption: "In the Americas, gold and silver were dug from the mines by the people who already lived there. They were forced to work, and very many of them died.",
          ms: 4400,
        },
        {
          caption: "From Africa, people were captured and carried across the ocean to be sold as slaves. Marx counts Liverpool's slave ships: 15 in 1730, 132 by 1792. The city grew rich on this trade.",
          ms: 5200,
        },
        { caption: "The treasure floated back to Europe and was turned into capital: money that built ships, workshops and banks." },
        {
          caption: "Marx's sharpest sentence is about this: capital came into the world “dripping from head to foot, from every pore, with blood and dirt”.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          {/* sea */}
          <rect x="96" y="20" width="150" height="160" fill="#e3eef8" />
          {/* home country */}
          <rect x="12" y="60" width="80" height="80" fill="#fff" stroke="#000" />
          <text x="40" y="72" textAnchor="middle" fontSize="9" fontWeight="600">
            Europe
          </text>
          <Place x={52} y={122} show={s >= 3}>
            <Works />
          </Place>

          {/* far lands */}
          {[
            { y: 30, label: "the Americas" },
            { y: 86, label: "Africa" },
            { y: 142, label: "East Indies" },
          ].map((l, i) => (
            <g key={l.label} style={{ opacity: s === 1 && i !== 0 ? 0.35 : s === 2 && i !== 1 ? 0.35 : 1, transition: "opacity 500ms" }}>
              <rect x="250" y={l.y} width="98" height="48" fill="#fff" stroke="#000" />
              <text x="299" y={l.y + 14} textAnchor="middle" fontSize="9" fontWeight="600">
                {l.label}
              </text>
            </g>
          ))}

          {/* ships going out */}
          <Place x={s === 0 ? 200 : 170} y={s === 0 ? 60 : 160} show={s === 0 || s === 3}>
            <Ship />
          </Place>
          <Place x={s === 0 ? 140 : 210} y={s === 0 ? 120 : 70} show={s === 0}>
            <Ship />
          </Place>

          {/* the mines */}
          <Fade show={s === 1}>
            <path d="M262,66 L276,48 L290,66 Z" fill="#8a7a6a" stroke="#000" />
            <g transform="translate(318 57) scale(.5)">
              <Gold />
            </g>
            <text x="299" y="75" textAnchor="middle" fontSize="7" fill="#d6452f">
              forced labour
            </text>
          </Fade>

          {/* the slave trade, told by Marx's Liverpool numbers */}
          <Fade show={s === 2} delay={300}>
            <text x="171" y="36" textAnchor="middle" fontSize="9" fontWeight="600">
              Liverpool slave ships
            </text>
            {LIVERPOOL.map((r, i) => {
              const h = (r.ships / 132) * 100;
              return (
                <g key={r.year}>
                  <rect x={112 + i * 26} y={150 - h} width="18" height={h} fill="#555" />
                  <text x={121 + i * 26} y={146 - h} textAnchor="middle" fontSize="8">
                    {r.ships}
                  </text>
                  <text x={121 + i * 26} y="162" textAnchor="middle" fontSize="7.5">
                    {r.year}
                  </text>
                </g>
              );
            })}
            <text x="299" y="128" textAnchor="middle" fontSize="7.5" fill="#d6452f">
              people taken
            </text>
          </Fade>

          {/* treasure floats home */}
          {[0, 1, 2].map((i) => (
            <Place key={i} x={s >= 3 ? 40 + i * 12 : 299} y={s >= 3 ? 134 : 54 + i * 56} show={s >= 3} delay={i * 250}>
              <Coins n={2} />
            </Place>
          ))}
          <Fade show={s >= 3}>
            <text x="52" y="154" textAnchor="middle" fontSize="8.5" fontWeight="600">
              turned into capital
            </text>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="12" y="178" width="336" height="34" fill="#000" />
            <text x="180" y="192" textAnchor="middle" fontSize="9" fill="#fff">
              capital comes &ldquo;dripping from head to foot, from
            </text>
            <text x="180" y="205" textAnchor="middle" fontSize="9" fill="#fff">
              every pore, with blood and dirt&rdquo;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 31.3 · Who pays the king's debt? (national debt, taxes, protection)
 * ───────────────────────────────────────────────────────────── */
const PAYERS = [
  { who: "sam" as const, x: 40 },
  { who: "mia" as const, x: 90 },
  { who: "leo" as const, x: 140 },
];

export function WhoPaysTheKingsDebt() {
  return (
    <Player
      id="anim-31-3"
      title="31.3 · Who pays the king's debt?"
      steps={[
        { caption: "Kings and governments wanted money for wars and colonies. So they borrowed it from rich lenders." },
        { caption: "In 1694 the Bank of England was founded. It lent its money to the government at 8 per cent interest a year." },
        {
          caption: "Now the lenders' money grows without any work or risk. Marx says the debt “endows barren money with the power of breeding”.",
          ms: 4400,
        },
        { caption: "Who pays the interest? Everyone, through taxes, and above all through taxes on the things people need most, like food." },
        {
          caption: "Heavy taxes, and tariffs that protected the new manufacturers, squeezed small farmers and craftspeople until many lost their land or shop and became wage workers.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the king */}
          <g transform="translate(206 108)">
            <Figure name="the king" x={0} y={0} scale={0.85} mood={s === 0 ? "sad" : "happy"} />
            <g transform="scale(.85)">
              <Crown />
            </g>
          </g>
          <Fade show={s === 0}>
            <text x="206" y="30" textAnchor="middle" fontSize="9.5" fontWeight="600">
              needs money for wars
            </text>
          </Fade>

          {/* the lenders and the bank */}
          <Figure who="bea" x={318} y={108} scale={0.85} />
          <Fade show={s >= 1}>
            <rect x="282" y="20" width="72" height="30" fill="#fff" stroke="#000" />
            <text x="318" y="33" textAnchor="middle" fontSize="8">
              Bank of England
            </text>
            <text x="318" y="45" textAnchor="middle" fontSize="8">
              1694
            </text>
          </Fade>
          <Place x={s >= 1 ? 250 : 300} y={70} show={s >= 1}>
            <Coins n={3} label="loan at 8%" />
          </Place>

          {/* money that breeds */}
          <Fade show={s === 2}>
            <path d="M296,74 C306,60 312,60 318,74" fill="none" stroke="#b38f00" strokeWidth="1.5" />
            <text x="318" y="128" textAnchor="middle" fontSize="9" fontWeight="600" fill="#b38f00">
              +8 every year
            </text>
            <text x="318" y="140" textAnchor="middle" fontSize="8.5">
              no work, no risk
            </text>
          </Fade>

          {/* taxes from everyone */}
          {PAYERS.map((p, i) => (
            <g key={p.who}>
              <Figure who={p.who} x={p.x} y={200} scale={0.65} mood={s === 4 ? "sad" : "happy"} />
              <Place x={s >= 3 ? 206 : p.x} y={s >= 3 ? 132 : 150} show={s >= 3} delay={i * 200}>
                <Coins n={1} />
              </Place>
            </g>
          ))}
          <Fade show={s >= 3}>
            <text x="90" y="134" textAnchor="middle" fontSize="9" fontWeight="600">
              taxes on food
            </text>
            <path d="M226,128 L292,96" stroke="#000" strokeOpacity=".3" markerEnd="url(#c31a)" />
            <text x="262" y="134" fontSize="8.5">
              interest
            </text>
          </Fade>
          <defs>
            <marker id="c31a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" fillOpacity=".4" />
            </marker>
          </defs>

          {/* squeezed into wage work */}
          <Fade show={s === 4} delay={300}>
            <rect x="196" y="160" width="152" height="44" fill="#fff" stroke="#000" />
            <text x="272" y="176" textAnchor="middle" fontSize="8.5">
              small farmers and craftspeople
            </text>
            <text x="272" y="190" textAnchor="middle" fontSize="8.5" fontWeight="600">
              lose their land or shop
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
