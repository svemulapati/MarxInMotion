"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Cross, Fade } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";

const GOLD = "#e6b800";
const RED = "#d6452f";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 15.1 · Making it is not selling it
 * "The conditions of direct exploitation, and those of realising it,
 * are not identical."
 * ───────────────────────────────────────────────────────────── */
export function MakingIsNotSelling() {
  return (
    <Player
      id="anim-v3-15-1"
      title="15.1 · Making it is not selling it"
      steps={[
        { caption: "Inside the mill, the workers make yarn full of surplus-value. Making it is only limited by how productive the mill is, and the mill keeps getting faster." },
        { caption: "But the surplus-value is only real for Mr. Moneybags once the yarn is sold. Selling it depends on who can afford to buy." },
        { caption: "And who are most of the buyers? Workers like Sam, whose wages are kept as low as possible. Marx says this keeps what most people can buy near a minimum." },
        { caption: "So the yarn pours out faster than the town can buy it. The pile in the warehouse grows." },
        {
          caption: "Marx: the conditions of making surplus-value and of selling it “are not identical”. If the yarn will not sell, the workers were exploited, but the profit is never realised.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const pile = [2, 4, 5, 9, 12][s];
        return (
          <>
            {/* the mill */}
            <rect x="14" y="60" width="110" height="80" fill="#fff" stroke="#000" strokeWidth="1.2" />
            <path d="M14,60 L36,40 L36,60 L58,40 L58,60 L80,40 L80,60" fill="none" stroke="#000" strokeWidth="1.2" />
            <text x="69" y="86" textAnchor="middle" fontSize="10" fontWeight="600">
              the mill
            </text>
            <text x="69" y="100" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              making: no limit
            </text>
            <text x="69" y="111" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              but its speed
            </text>

            {/* conveyor of yarn */}
            <line x1="124" y1="130" x2="214" y2="130" stroke="#000" strokeWidth="1.5" />
            <g className="v3c15-roll">
              {[0, 1, 2].map((i) => (
                <g key={i} transform={`translate(${148 + i * 24} 120) scale(.5)`}>
                  <Yarn />
                </g>
              ))}
            </g>

            {/* the warehouse pile */}
            <rect x="214" y="70" width="64" height="76" fill="none" stroke="#000" strokeDasharray="3 3" />
            <text x="246" y="64" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              warehouse
            </text>
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i} style={{ opacity: i < pile ? 1 : 0, transition: `opacity 300ms ${i * 40}ms` }} transform={`translate(${226 + (i % 3) * 20} ${136 - Math.floor(i / 3) * 16}) scale(.5)`}>
                <Yarn />
              </g>
            ))}

            {/* buyers */}
            <Fade show={s >= 1}>
              <text x="320" y="64" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                buyers
              </text>
              <Figure who="sam" x={306} y={150} scale={0.6} label={false} />
              <Figure name="" label={false} x={334} y={150} scale={0.6} />
              <text x="320" y="166" textAnchor="middle" fontSize="8.5">
                selling: only what
              </text>
              <text x="320" y="177" textAnchor="middle" fontSize="8.5">
                people can afford
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <g transform="translate(320 88)">
                <Coin r={6} />
              </g>
              <text x="320" y="78" textAnchor="middle" fontSize="8" fill={RED}>
                low wages
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <rect x="20" y="190" width="320" height="24" fill="#000" />
              <text x="180" y="206" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
                exploited, but <tspan fill={GOLD}>not yet realised</tspan>
              </text>
            </Fade>
            <style>{`
              @keyframes v3c15-roll { from { transform: translateX(-12px); } to { transform: translateX(0); } }
              .v3c15-roll { animation: v3c15-roll 1.6s linear infinite; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.2 · Too much capital, and too many hands
 * "Unemployed capital at one pole, and unemployed worker population
 * at the other."
 * ───────────────────────────────────────────────────────────── */
export function TooMuchCapital() {
  return (
    <Player
      id="anim-v3-15-2"
      title="15.2 · Too much capital, and too many hands"
      steps={[
        { caption: "Boom years. Every boss in Tiny Town reinvests, and new money keeps arriving at Bea's bank looking for a mill to build." },
        { caption: "Marx asks: what if adding more capital no longer adds any more surplus-value? Say every worker is already hired and wages start to rise." },
        { caption: "Then the extra coins earn nothing. Marx calls this over-production of capital: too much capital for the profit it can make." },
        { caption: "So coins sit idle in the bank, while workers are laid off and wait at the gate." },
        {
          caption: "Marx: “unemployed capital at one pole, and unemployed worker population at the other”. Idle machines and idle people, side by side, and nobody can put them together.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const coins = [4, 8, 10, 12, 12][s];
        const idle = s >= 3;
        return (
          <>
            {/* the bank */}
            <path d="M24,60 L84,36 L144,60 Z" fill="#fff" stroke="#000" />
            <rect x="30" y="60" width="108" height="64" fill="#fff" stroke="#000" />
            <text x="84" y="54" textAnchor="middle" fontSize="9" fontWeight="600">
              Bea&apos;s bank
            </text>
            {Array.from({ length: 12 }, (_, i) => (
              <g key={i} style={{ opacity: i < coins ? 1 : 0, transition: `opacity 300ms ${i * 50}ms` }} transform={`translate(${46 + (i % 6) * 15} ${84 + Math.floor(i / 6) * 18})`}>
                <Coin r={6} />
              </g>
            ))}
            <Fade show={s >= 2}>
              <text x="84" y="140" textAnchor="middle" fontSize="9" fill={RED} fontWeight="600">
                {idle ? "idle capital" : "earns nothing extra"}
              </text>
            </Fade>

            {/* the mill gate */}
            <rect x="210" y="40" width="130" height="84" fill="#fff" stroke="#000" />
            <text x="275" y="34" textAnchor="middle" fontSize="9" fontWeight="600">
              the mill
            </text>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const out = idle && i >= 2;
              return (
                <g key={i}>
                  <Figure
                    name=""
                    who={i === 0 ? "sam" : undefined}
                    label={false}
                    x={out ? 200 + (i - 2) * 26 : 228 + i * 19}
                    y={out ? 196 : 112}
                    scale={0.5}
                    mood={out ? "sad" : "happy"}
                  />
                </g>
              );
            })}
            <Fade show={idle}>
              <text x="240" y="212" textAnchor="middle" fontSize="9" fill={RED} fontWeight="600">
                idle hands
              </text>
            </Fade>
            <Fade show={s === 1}>
              <text x="275" y="150" textAnchor="middle" fontSize="9">
                everyone already hired
              </text>
              <text x="275" y="163" textAnchor="middle" fontSize="9">
                wages begin to rise
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <line x1="140" y1="160" x2="180" y2="186" stroke="#000" strokeDasharray="3 3" />
              <g transform="translate(160 172)">
                <Cross />
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.3 · The crash that restarts the clock
 * Marx's sequence: fall in prices, broken chain of payments, capital
 * destroyed or depreciated, wages pushed down, new machines, expansion
 * again; "the cycle would run its course anew".
 * ───────────────────────────────────────────────────────────── */
const STATIONS = [
  { label: "boom", sub: "more capital piles in" },
  { label: "crash", sub: "prices fall, debts unpaid" },
  { label: "clear-out", sub: "capital destroyed, wages cut" },
  { label: "new machines", sub: "costs pushed down" },
];
const pos = (i: number): [number, number] => {
  const a = (-90 + i * 90) * (Math.PI / 180);
  return [180 + 98 * Math.cos(a), 112 + 72 * Math.sin(a)];
};

export function CrashRestartsTheClock() {
  return (
    <Player
      id="anim-v3-15-3"
      title="15.3 · The crash that restarts the clock"
      viewBox="0 0 360 230"
      steps={[
        { caption: "A boom. Capital floods in and profit rates are squeezed." },
        { caption: "Then prices fall. Marx says the chain of payments “is broken in a hundred places”, and credit collapses. A crash." },
        { caption: "In the crash some capital is simply destroyed: mills shut, goods rot, machines are sold for scrap. Workers are laid off and wages are pushed down." },
        { caption: "Every surviving boss rushes to cut costs with new machines. The capital that is left is cheaper, so the rate of profit can rise again." },
        {
          caption: "And so the boom returns, and the cycle runs again. Marx: crises are “momentary and forcible solutions”. And his famous line: the real barrier of capitalist production is capital itself.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const at = s === 4 ? 0 : s;
        const [bx, by] = pos(at);
        return (
          <>
            <ellipse cx="180" cy="112" rx="98" ry="72" fill="none" stroke="#000" strokeOpacity=".25" strokeWidth="2" strokeDasharray="5 5" />
            {STATIONS.map((st, i) => {
              const [x, y] = pos(i);
              const on = i === at;
              return (
                <g key={st.label}>
                  <rect x={x - 54} y={y - 17} width="108" height="34" fill={on ? (i === 1 ? RED : GOLD) : "#fff"} stroke="#000" strokeWidth={on ? 1.6 : 0.8} style={{ transition: "fill 400ms" }} />
                  <text x={x} y={y - 3} textAnchor="middle" fontSize="10" fontWeight="600" fill={on && i === 1 ? "#fff" : "#000"}>
                    {st.label}
                  </text>
                  <text x={x} y={y + 10} textAnchor="middle" fontSize="8" fill={on && i === 1 ? "#fff" : "#000"} fillOpacity={on ? 1 : 0.6}>
                    {st.sub}
                  </text>
                </g>
              );
            })}
            {/* the ball going round */}
            <circle r="7" fill="#000" style={{ transform: `translate(${bx}px, ${by - 26}px)`, transition: `transform ${T}` }} />
            <Fade show={s === 4} delay={500}>
              <text x="180" y="108" textAnchor="middle" fontSize="9.5" fontWeight="600">
                and round again
              </text>
              <rect x="20" y="206" width="320" height="22" fill="#000" />
              <text x="180" y="221" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
                the real barrier of capitalist production is capital itself
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
