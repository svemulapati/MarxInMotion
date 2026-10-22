"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Linen, Loaf, Place } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

const STYLE = `
@keyframes c30-puff { 0% { transform: translate(0,0) scale(.6); opacity: .8 } 100% { transform: translate(6px,-28px) scale(1.5); opacity: 0 } }
@keyframes c30-spin { to { transform: rotate(360deg) } }
@keyframes c30-glow { 0%, 100% { opacity: .25 } 50% { opacity: .9 } }
.c30-puff { animation: c30-puff 1.8s ease-out infinite; transform-box: fill-box; transform-origin: center; }
.c30-spin { animation: c30-spin 2.4s linear infinite; transform-box: fill-box; transform-origin: center; }
.c30-glow { animation: c30-glow 1.4s ease-in-out infinite; }
`;

/** A cottage: a box with a pointed roof, centred on its base. */
function Cottage() {
  return (
    <g>
      <rect x="-18" y="-24" width="36" height="24" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <path d="M-22,-24 L0,-40 L22,-24 Z" fill="#c9a46b" stroke="#000" strokeWidth="1.2" />
      <rect x="-5" y="-14" width="10" height="14" fill="#8a5a2b" />
    </g>
  );
}

/** A little patch of flax: green stalks with blue flowers. */
function Flax({ w = 50 }: { w?: number }) {
  const n = Math.round(w / 8);
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const x = -w / 2 + 4 + i * 8;
        return (
          <g key={i}>
            <line x1={x} y1="0" x2={x} y2="-16" stroke="#3f8f3a" strokeWidth="1.5" />
            <circle cx={x} cy="-17" r="2.4" fill="#6f8fe0" />
          </g>
        );
      })}
    </g>
  );
}

/** A spinning wheel. */
function Wheel({ spin = false }: { spin?: boolean }) {
  return (
    <g>
      <g className={spin ? "c30-spin" : ""}>
        <circle r="9" fill="none" stroke="#8a5a2b" strokeWidth="2" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke="#8a5a2b" />
        <line x1="0" y1="-9" x2="0" y2="9" stroke="#8a5a2b" />
      </g>
      <line x1="0" y1="9" x2="0" y2="16" stroke="#8a5a2b" strokeWidth="2" />
    </g>
  );
}

/** A mill with a chimney, centred on its base. */
function Mill({ label }: { label?: string }) {
  return (
    <g>
      <rect x="-54" y="-44" width="108" height="44" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <path d="M-54,-44 L-36,-58 L-36,-44 L-18,-58 L-18,-44 L0,-58 L0,-44" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <rect x="30" y="-78" width="11" height="34" fill="#8c8c8c" stroke="#000" strokeWidth="1.2" />
      {[0, 700, 1400].map((d) => (
        <circle key={d} cx="35" cy="-82" r="5" fill="#9a9a9a" className="c30-puff" style={{ animationDelay: `${d}ms` }} />
      ))}
      {label && (
        <text y="-28" textAnchor="middle" fontSize="9">
          {label}
        </text>
      )}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 30.1 · The flax with a new soul (Marx's Westphalian flax example)
 * ───────────────────────────────────────────────────────────── */
const HOMES = [60, 180, 300];

export function TheFlaxWithANewSoul() {
  return (
    <Player
      id="anim-30-1"
      title="30.1 · The flax with a new soul"
      steps={[
        { caption: "Long ago, in villages like the one Sam's great-grandparents lived in, every family grew a little flax and spun it at home into thread for the family's linen." },
        { caption: "Then the fences went up. Most families were driven off their land. A few stayed behind to work for wages on one big farm." },
        { caption: "In town, a big flax mill opens. The families who were driven off now spin and weave there, for a wage. The spinning wheels move in with them." },
        {
          caption: "Look at the flax. Not one fibre has changed. But Marx says a “new social soul” has popped into its body: it now belongs to the mill owner, as part of his capital.",
          ms: 4800,
        },
        {
          caption: "The extra work in that flax used to stay with many families. Now it becomes profit for one owner. Marx's own example: the flax spinners of Westphalia, in Prussia.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          <line x1="0" y1="200" x2="360" y2="200" stroke="#000" strokeOpacity=".15" />

          {/* the old village */}
          {HOMES.map((x) => (
            <g key={x} style={{ opacity: s === 0 ? 1 : 0.12, transition: "opacity 600ms" }}>
              <g transform={`translate(${x} 96)`}>
                <Cottage />
              </g>
            </g>
          ))}

          {/* small flax patches become one big field */}
          {HOMES.map((x) => (
            <g key={x} style={{ opacity: s === 0 ? 1 : 0, transition: "opacity 500ms" }}>
              <g transform={`translate(${x} 136)`}>
                <Flax w={56} />
              </g>
            </g>
          ))}
          <Fade show={s === 1}>
            <rect x="24" y="112" width="312" height="30" fill="#e3efd9" stroke="#3f8f3a" strokeDasharray="4 3" />
            <g transform="translate(180 138)">
              <Flax w={300} />
            </g>
            <text x="180" y="160" textAnchor="middle" fontSize="10" fontWeight="600">
              one big farm
            </text>
            <Figure name="day labourer" x={70} y={198} scale={0.55} />
            <Figure name="day labourer" x={290} y={198} scale={0.55} />
          </Fade>

          {/* the families: at home, then walking away */}
          {HOMES.map((x, i) => (
            <Figure
              key={x}
              name={["family", "family", "family"][i]}
              x={s === 0 ? x - 30 : s === 1 ? 370 : 140 + i * 40}
              y={s >= 2 ? 190 : 198}
              scale={0.55}
              mood={s === 1 ? "sad" : "happy"}
              style={{ opacity: s === 1 ? 0 : 1, transition: `transform ${T}, opacity 500ms` }}
            />
          ))}

          {/* the mill */}
          <Place x={180} y={104} show={s >= 2}>
            <Mill label="flax mill" />
          </Place>

          {/* the spinning wheels move from the cottages into the mill */}
          {HOMES.map((x, i) => (
            <Place key={x} x={s <= 1 ? x + 30 : 152 + i * 28} y={s <= 1 ? 118 : 124} scale={s <= 1 ? 1 : 0.8}>
              <g style={{ opacity: s === 1 ? 0.12 : 1, transition: "opacity 500ms" }}>
                <Wheel spin={s === 0 || s >= 2} />
              </g>
            </Place>
          ))}

          {/* the flax with its new soul */}
          <Fade show={s >= 3}>
            <g transform="translate(300 64)">
              <Flax w={28} />
              <circle cx="0" cy="-8" r="22" fill="none" stroke="#e6b800" strokeWidth="2" className="c30-glow" />
            </g>
            <text x="300" y="84" textAnchor="middle" fontSize="9">
              same flax
            </text>
            <text x="300" y="96" textAnchor="middle" fontSize="9" fontWeight="600">
              now: capital
            </text>
          </Fade>

          {/* the extra goes to one owner */}
          <Fade show={s === 4}>
            <Figure who="moneybags" x={318} y={198} scale={0.7} />
            <Place x={282} y={156} show={s === 4} delay={300}>
              <Coins n={3} />
            </Place>
            <text x="56" y="150" textAnchor="middle" fontSize="9">
              before: extra for
            </text>
            <text x="56" y="162" textAnchor="middle" fontSize="9" fontWeight="600">
              many families
            </text>
            <text x="56" y="180" textAnchor="middle" fontSize="9">
              now: profit for
            </text>
            <text x="56" y="192" textAnchor="middle" fontSize="9" fontWeight="600">
              one owner
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 30.2 · Buyers are born (the creation of the home market)
 * ───────────────────────────────────────────────────────────── */
function Candle() {
  return (
    <g>
      <rect x="-3" y="-12" width="6" height="16" fill="#fff6d6" stroke="#000" strokeWidth="1" />
      <path d="M0,-20 q4,4 0,8 q-4,-4 0,-8" fill="#ff9d2e" />
    </g>
  );
}

function Shop({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <g>
      <rect x="-26" y="-30" width="52" height="30" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <rect x="-26" y="-38" width="52" height="8" fill="#000" />
      <text y="-32" textAnchor="middle" fontSize="6.5" fill="#fff">
        {name}
      </text>
      <g transform="translate(0 -15) scale(.7)">{children}</g>
    </g>
  );
}

const SHOPS = [
  { name: "the bakery", x: 236, y: 96, draw: <Loaf /> },
  { name: "the mill", x: 304, y: 96, draw: <Linen /> },
  { name: "the shop", x: 270, y: 158, draw: <Candle /> },
];

export function BuyersAreBorn() {
  return (
    <Player
      id="anim-30-2"
      title="30.2 · Buyers are born"
      steps={[
        { caption: "On their old farm, Sam's great-grandparents made almost everything they used: bread from their own grain, linen from their own flax, candles from their own tallow. Made at home, used at home." },
        { caption: "Then they were driven off the land and into Tiny Town. Now they have nothing to make things with, only their hands." },
        { caption: "So everything must be bought. Their wages go to the baker for bread, to the mill for cloth, to the shop for candles." },
        { caption: "Meanwhile the big farm sells its grain to the town, and the mill sells its cloth back to the countryside. Things that were never sold before have become commodities." },
        {
          caption: "Marx's point: the same events that made wage workers also made customers. Many small households became one great home market for industrial capital.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          {/* the old farm, making for itself */}
          <g style={{ opacity: s === 0 ? 1 : s === 1 ? 0.35 : 0.12, transition: "opacity 600ms" }}>
            <g transform="translate(78 110)">
              <Cottage />
            </g>
            <circle cx="78" cy="96" r="52" fill="none" stroke="#000" strokeOpacity=".3" strokeDasharray="5 4" />
            <g transform="translate(30 92) scale(.7)">
              <Loaf />
            </g>
            <g transform="translate(78 40) scale(.6)">
              <Linen />
            </g>
            <g transform="translate(128 100)">
              <Candle />
            </g>
          </g>
          <Fade show={s === 0}>
            <text x="78" y="168" textAnchor="middle" fontSize="9.5" fontWeight="600">
              made at home, used at home
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <rect x="10" y="176" width="110" height="20" fill="#e3efd9" stroke="#3f8f3a" />
            <text x="65" y="190" textAnchor="middle" fontSize="8.5">
              big farm: grain for sale
            </text>
          </Fade>

          {/* the family moves to town */}
          <Figure name="great-grandma" x={s === 0 ? 52 : 136} y={s === 0 ? 206 : 150} scale={0.6} mood={s === 1 ? "sad" : "happy"} />
          <Figure name="great-grandpa" x={s === 0 ? 108 : 190} y={s === 0 ? 206 : 150} scale={0.6} mood={s === 1 ? "sad" : "happy"} />
          <Fade show={s === 1}>
            <text x="184" y="100" textAnchor="middle" fontSize="9.5" fontWeight="600">
              only their hands
            </text>
          </Fade>

          {/* the town's shops */}
          {SHOPS.map((sh) => (
            <Place key={sh.name} x={sh.x} y={sh.y} show={s >= 2}>
              <Shop name={sh.name}>{sh.draw}</Shop>
            </Place>
          ))}

          {/* wages flow out to the shops */}
          {SHOPS.map((sh, i) => (
            <Place key={i} x={s === 2 ? sh.x : 162} y={s === 2 ? sh.y - 48 : 120} show={s === 2} delay={300 + i * 250}>
              <Coins n={1} />
            </Place>
          ))}

          {/* grain to town, cloth to country */}
          <Fade show={s >= 3} delay={300}>
            <path d="M120,182 C170,182 206,150 222,104" fill="none" stroke="#3f8f3a" strokeWidth="1.5" markerEnd="url(#c30a)" />
            <path d="M320,104 C340,200 160,214 122,194" fill="none" stroke="#2f6fd6" strokeWidth="1.5" markerEnd="url(#c30b)" />
            <text x="236" y="214" textAnchor="middle" fontSize="8.5" fill="#2f6fd6">
              cloth to the country
            </text>
          </Fade>
          <defs>
            <marker id="c30a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#3f8f3a" />
            </marker>
            <marker id="c30b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#2f6fd6" />
            </marker>
          </defs>

          <Fade show={s === 4} delay={400}>
            <rect x="196" y="16" width="150" height="24" fill="#000" />
            <text x="271" y="32" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">
              the home market
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
