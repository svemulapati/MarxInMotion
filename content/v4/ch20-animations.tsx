"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coins, Cross, Fade, Jug, Place, Tick } from "@/components/anim/Things";
import { Bar, TONE } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * The Old Thinkers' Shelf: a library shelf of old books, shared by
 * Volume IV, Chapters 20 to 24. `lit` marks the book being read.
 * ───────────────────────────────────────────────────────────── */
const SPINES = ["#8a5a2b", "#2f6fd6", "#5c5c5c", "#2a9d5b", "#7b4bd6", "#c2407f", "#d99a00", "#3e3e3e"];

export function Shelf({ x, y, lit = -1, label }: { x: number; y: number; lit?: number; label?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-4" y="30" width="96" height="5" fill="#6b4a2b" />
      {SPINES.map((c, i) => (
        <rect
          key={i}
          x={i * 11}
          y={i === lit ? -2 : 4 + (i % 3) * 2}
          width="9"
          height={i === lit ? 32 : 26 - (i % 3) * 2}
          fill={c}
          stroke="#000"
          strokeWidth={i === lit ? 1.4 : 0.6}
          style={{ transition: "y 500ms, height 500ms" }}
        />
      ))}
      {label && (
        <text x="44" y="47" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
          {label}
        </text>
      )}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.1 · Two cracks in Ricardo's house
 * ───────────────────────────────────────────────────────────── */
export function TwoCracks() {
  return (
    <Player
      id="anim-v4-20-1"
      title="20.1 · Two cracks in Ricardo's house"
      steps={[
        { caption: "David Ricardo built a fine house of ideas on one rule: things are worth the labour it takes to make them." },
        { caption: "Crack one. Sam is paid 3 coins, the full value of his labour, people said. Yet his day makes 6 coins of new value. If labour is paid in full, where does profit come from?" },
        { caption: "Crack two. Mr. Moneybags' machine-heavy mill and a hand-sewing workshop next door earn the same rate of profit, though they use very different amounts of labour. How can that fit the rule?" },
        { caption: "Ricardo's followers spent years patching these two cracks with clever words. Marx says the school declined at exactly these “two points”." },
        {
          caption: "Marx's own repairs come from Capital: Sam sells his labour-power, not his labour (Volume I), and profits are averaged out across trades (Volume III).",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the house */}
          <g transform="translate(110 40)">
            <polygon points="0,40 70,0 140,40" fill="#fff" stroke="#000" strokeWidth="1.4" />
            <rect x="10" y="40" width="120" height="96" fill="#fff" stroke="#000" strokeWidth="1.4" />
            <text x="70" y="30" textAnchor="middle" fontSize="8.5" fontWeight="600">
              Ricardo
            </text>
            <rect x="10" y="118" width="120" height="18" fill="#efe4c8" stroke="#000" />
            <text x="70" y="130" textAnchor="middle" fontSize="7.5">
              value = labour
            </text>
            {/* cracks */}
            <path
              d="M40,40 L48,58 L38,72 L50,92 L44,112"
              fill="none"
              stroke="#d6452f"
              strokeWidth="2.2"
              style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 500ms" }}
            />
            <path
              d="M104,40 L96,60 L108,78 L98,96 L104,114"
              fill="none"
              stroke="#d6452f"
              strokeWidth="2.2"
              style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }}
            />
            <Fade show={s >= 1}>
              <text x="-4" y="70" textAnchor="end" fontSize="8.5" fill="#d6452f" fontWeight="600">
                1. wages
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="144" y="70" fontSize="8.5" fill="#d6452f" fontWeight="600">
                2. equal profits
              </text>
            </Fade>
            {/* patches */}
            <Fade show={s === 3}>
              {[
                [34, 62],
                [98, 84],
              ].map(([px, py]) => (
                <rect key={px} x={px} y={py} width="22" height="14" fill="#e6b800" stroke="#000" transform={`rotate(-8 ${px} ${py})`} />
              ))}
            </Fade>
          </g>

          {/* crack one: Sam's 3 vs 6 */}
          <Fade show={s === 1}>
            <Figure who="sam" x={46} y={208} scale={0.75} mood="wow" />
            <g transform="translate(16 120)">
              <Bar
                x={0}
                y={0}
                unit={9}
                segs={[
                  { n: 3, color: TONE.wage, label: "3" },
                  { n: 3, color: TONE.surplus, label: "+3" },
                ]}
              />
              <text x="27" y="30" textAnchor="middle" fontSize="7.5">
                paid 3, makes 6
              </text>
            </g>
          </Fade>

          {/* crack two: two workshops, same rate */}
          <Fade show={s === 2}>
            <Figure who="moneybags" x={300} y={208} scale={0.72} />
            <text x="300" y="132" textAnchor="middle" fontSize="8">
              mill and hand workshop:
            </text>
            <text x="300" y="146" textAnchor="middle" fontSize="8" fontWeight="600">
              the same rate of profit
            </text>
          </Fade>

          {/* Marx's repairs */}
          <Fade show={s === 4}>
            <g transform="translate(18 176)">
              <rect width="150" height="34" fill="#fff" stroke="#000" />
              <text x="8" y="14" fontSize="8" fontWeight="600">
                1. labour-power
              </text>
              <text x="8" y="27" fontSize="7.5">
                Volume I, Chapter 6
              </text>
            </g>
            <g transform="translate(192 176)">
              <rect width="150" height="34" fill="#fff" stroke="#000" />
              <text x="8" y="14" fontSize="8" fontWeight="600">
                2. average profit
              </text>
              <text x="8" y="27" fontSize="7.5">
                Volume III, Chapter 9
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.2 · Wine in the cellar (James Mill, and Bailey's reply)
 * ───────────────────────────────────────────────────────────── */
export function WineInTheCellar() {
  return (
    <Player
      id="anim-v4-20-2"
      title="20.2 · Wine in the cellar"
      steps={[
        { caption: "James Mill was the first to lay out Ricardo's ideas neatly. One puzzle bothered him: wine." },
        { caption: "Grandpa Ned stores a jug of cider in his cellar for a year. Nobody touches it. Yet it sells for more: Mill's example says one-tenth more. Where did the extra value come from?" },
        { caption: "Mill's patch: the time the wine spends ageing counts as labour too. So the rule still holds!" },
        { caption: "Samuel Bailey laughed: by the terms of the story, no human being came near the wine. Calling time “labour” just stretches the word until it means nothing." },
        {
          caption: "Marx agrees with Bailey that Mill's patch fails. His own answer: the jug earns the average profit, but that profit is surplus-value made by workers in other trades and shared out by competition.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <Shelf x={20} y={20} lit={1} label="James Mill, 1821" />

          {/* the cellar */}
          <rect x="150" y="96" width="190" height="104" fill="#e9e4da" stroke="#000" />
          <text x="245" y="112" textAnchor="middle" fontSize="8" fillOpacity=".6">
            the cellar
          </text>
          <Place x={245} y={160} scale={1.4}>
            <Jug />
          </Place>
          <Fade show={s >= 1}>
            <text x="245" y="196" textAnchor="middle" fontSize="8.5">
              one year later: worth 1/10 more
            </text>
          </Fade>
          <Fade show={s >= 1 && s < 4}>
            <text x="300" y="136" textAnchor="middle" fontSize="20" fill="#d6452f">
              ?
            </text>
          </Fade>

          {/* Mill */}
          <Fade show={s === 2}>
            <Figure name="James Mill" x={70} y={208} scale={0.8} />
            <g transform="translate(86 130)">
              <Bubble w={74} lines={["time is", "labour too!"]} />
            </g>
          </Fade>

          {/* Bailey */}
          <Fade show={s === 3}>
            <Figure name="Bailey" x={70} y={208} scale={0.8} mood="wow" />
            <g transform="translate(86 130)">
              <Bubble w={80} lines={["nobody", "touched it!"]} />
            </g>
            <g transform="translate(245 132)">
              <Cross />
            </g>
          </Fade>

          {/* Marx: the profit is shared out */}
          <Fade show={s === 4}>
            <Figure name="Marx" x={60} y={208} scale={0.8} />
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${20 + i * 36} 98)`}>
                <rect x="-14" y="-12" width="28" height="22" fill="#fff" stroke="#000" />
                <text y="2" textAnchor="middle" fontSize="6.5">
                  workshop
                </text>
              </g>
            ))}
            <path d="M130,98 C170,90 200,110 228,148" fill="none" stroke="#e6b800" strokeWidth="2.5" strokeDasharray="5 4" />
            <g transform="translate(200 104)">
              <Coins n={2} />
            </g>
            <text x="245" y="88" textAnchor="middle" fontSize="8" fontWeight="600">
              a share of surplus made elsewhere
            </text>
            <g transform="translate(290 156)">
              <Tick />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
