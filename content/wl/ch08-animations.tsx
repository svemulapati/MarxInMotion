"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Linen, Tag } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const SAM = CAST.sam.color;
const GOLD = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 8.1 · Five per cent and thirty per cent
 * Marx's example: in good years wages rise 5 per cent while profits rise
 * 30 per cent, so the relative wage falls. The starting heights (100 and
 * 100) are this site's, to make the percentages visible.
 * ───────────────────────────────────────────────────────────── */
export function FivePerCentThirtyPerCent() {
  const base = 100;
  const H = 0.75; // px per unit
  return (
    <Player
      id="anim-wl-8-1"
      title="8.1 · Five per cent and thirty per cent"
      steps={[
        { caption: "Boom years in Tiny Town. The workshops are busy and Mr. Moneybags is growing fast. (Made-up starting heights: 100 each.)" },
        { caption: "Sam gets a rise: wages go up 5 per cent. That is real, and it is welcome." },
        { caption: "In the same years, profits go up 30 per cent. These are Marx's own two numbers." },
        { caption: "So Sam is better off, but the gap between him and the boss is wider than before. His relative wage has fallen." },
        {
          caption: "Marx says the rise ties Sam closer: the faster he makes the boss richer, the bigger the crumbs. He calls it forging golden chains.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const wage = s >= 1 ? 105 : base;
        const profit = s >= 2 ? 130 : base;
        return (
          <>
            {[
              { x: 100, v: wage, fill: SAM, who: "sam" as const, label: s >= 1 ? "+5%" : "" },
              { x: 250, v: profit, fill: GOLD, who: "moneybags" as const, label: s >= 2 ? "+30%" : "" },
            ].map((b) => (
              <g key={b.x}>
                <rect x={b.x - 30} y={170 - b.v * H} width="60" height={b.v * H} fill={b.fill} style={{ transition: `all ${T}` }} />
                <text x={b.x} y={163 - b.v * H} textAnchor="middle" fontSize="11" fontWeight="700" style={{ transition: `y ${T}` }}>
                  {b.label}
                </text>
                <Figure who={b.who} x={b.x} y={205} scale={0.55} label={false} />
              </g>
            ))}
            <line x1="40" y1={170 - base * H} x2="320" y2={170 - base * H} stroke="#000" strokeDasharray="3 3" strokeOpacity=".4" />
            <text x="40" y={166 - base * H} fontSize="8.5" fillOpacity=".6">
              before
            </text>

            {/* the widening gap */}
            <Fade show={s >= 3}>
              <line x1="180" y1={170 - 105 * H} x2="180" y2={170 - 130 * H} stroke="#d6452f" strokeWidth="2" />
              <line x1="130" y1={170 - 105 * H} x2="220" y2={170 - 105 * H} stroke="#d6452f" strokeDasharray="2 2" />
              <text x="186" y={170 - 118 * H} fontSize="9" fill="#d6452f" fontWeight="600">
                the gap
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <rect x="70" y="28" width="220" height="20" fill="#000" />
              <text x="180" y="42" textAnchor="middle" fontSize="9.5" fill="#fff">
                better off, but further behind
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.2 · Half a yard, a whole yard
 * Marx's example: one capitalist weaves a whole yard of linen in the time
 * his rivals weave half a yard. He undersells them a little, not by half.
 * Rivals copy the method, and the price falls below even the new cost.
 * The coin prices are this site's.
 * ───────────────────────────────────────────────────────────── */
export function HalfAYardAWholeYard() {
  return (
    <Player
      id="anim-wl-8-2"
      title="8.2 · Half a yard, a whole yard"
      steps={[
        { caption: "In the same hour, every weaving workshop in town makes half a yard of linen. It sells for 4 coins. (The coin prices are made up.)" },
        { caption: "Then Mr. Moneybags gets a new machine. In that same hour his workers weave a whole yard." },
        { caption: "Does he sell at half price? No. He sells just a little cheaper, 3½ coins a half-yard, to win customers. The rest is extra profit." },
        { caption: "But the other workshops are not stupid. They buy the same machines. Now everyone weaves a whole yard an hour." },
        {
          caption: "With so much linen, the price falls below even the new cost. Everyone works harder for less than before, and the race starts again with the next machine.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const rivalsCopy = s >= 3;
        const price = s >= 4 ? "1¾" : s >= 2 ? "3½" : "4";
        return (
          <>
            {[
              { name: "Moneybags", x: 90, who: "moneybags" as const, fast: s >= 1 },
              { name: "rival", x: 270, who: undefined, fast: rivalsCopy },
            ].map((w) => (
              <g key={w.name}>
                <Figure who={w.who} name={w.who ? undefined : "Rival"} x={w.x} y={110} scale={0.65} />
                <rect x={w.x - 50} y="126" width="100" height="44" fill="#fff" stroke="#000" />
                <text x={w.x} y="140" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                  in one hour
                </text>
                <g transform={`translate(${w.x - (w.fast ? 18 : 0)} 156) scale(${w.fast ? 0.9 : 0.6})`} style={{ transition: `transform ${T}` }}>
                  <Linen />
                </g>
                {w.fast && (
                  <g transform={`translate(${w.x + 22} 156) scale(.9)`}>
                    <Linen />
                  </g>
                )}
                <text x={w.x} y="188" textAnchor="middle" fontSize="9.5" fontWeight="600">
                  {w.fast ? "1 yard" : "½ yard"}
                </text>
              </g>
            ))}

            <g transform="translate(180 40)">
              <Tag text={`½ yd: ${price}`} />
            </g>
            <text x="180" y="62" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              price of half a yard, in coins
            </text>

            <Fade show={s === 2}>
              <text x="90" y="210" textAnchor="middle" fontSize="9.5" fill="#8a6d00" fontWeight="600">
                extra profit, for now
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <text x="180" y="210" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
                price below the new cost: start again
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
