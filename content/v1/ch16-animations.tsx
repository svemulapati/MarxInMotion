"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Linen, Place } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

const STYLE = `
@keyframes c16-sway { 0%, 100% { transform: rotate(-4deg) } 50% { transform: rotate(4deg) } }
.c16-sway { animation: c16-sway 3s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
`;

/** A small school building with a bell. */
function School({ label }: { label: string }) {
  return (
    <g>
      <rect x="-34" y="-24" width="68" height="40" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <path d="M-40,-24 L0,-46 L40,-24 Z" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <circle cx="0" cy="-32" r="4" fill="#e6b800" stroke="#000" strokeWidth=".8" />
      <rect x="-6" y="0" width="12" height="16" fill="#8a5a2b" />
      <text y="30" textAnchor="middle" fontSize="9">
        {label}
      </text>
    </g>
  );
}

/** Three small pupils' heads in a row. */
function Pupils() {
  return (
    <g>
      {[-14, 0, 14].map((x) => (
        <g key={x}>
          <circle cx={x} cy="0" r="5.5" fill="#fff" stroke="#000" />
          <circle cx={x - 2} cy="-1" r=".9" />
          <circle cx={x + 2} cy="-1" r=".9" />
        </g>
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.1 · Two teachers (productive labour means producing surplus-value)
 * Marx's own example: a schoolmaster in a "teaching factory".
 * ───────────────────────────────────────────────────────────── */
export function TwoTeachers() {
  return (
    <Player
      id="anim-16-1"
      title="16.1 · Two teachers"
      viewBox="0 0 360 228"
      steps={[
        { caption: "Two teachers in Tiny Town give exactly the same lesson, to the same kind of children. Both work hard. Both are useful." },
        { caption: "Miss Rose teaches at the town school. The town pays her wage out of its own purse. Nobody makes a profit from her lessons." },
        {
          caption: "Miss Kim teaches at a school Mr. Moneybags owns. Parents pay him 10 coins. He pays her 5 and keeps 5. Her work makes surplus-value for him.",
          ms: 4800,
        },
        {
          caption: "So, in Marx's special sense, only Miss Kim is a \u201cproductive\u201d worker: she makes profit for capital. Marx adds that being productive in this sense is not luck but a misfortune.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="180" y1="10" x2="180" y2="222" stroke="#000" strokeOpacity=".12" />

          {/* the two schools */}
          <g transform="translate(90 54)">
            <School label="town school" />
          </g>
          <g transform="translate(270 54)">
            <School label="Moneybags' school" />
          </g>

          {/* the people */}
          <Figure name="Miss Rose" x={56} y={212} scale={0.72} />
          <g transform="translate(118 200)">
            <Pupils />
          </g>
          <Figure name="Miss Kim" x={212} y={212} scale={0.72} />
          <g transform="translate(262 200)">
            <Pupils />
          </g>
          <Figure who="moneybags" x={330} y={212} scale={0.72} label={false} style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }} />

          {/* the town pays a wage; nobody profits */}
          <Fade show={s >= 1}>
            <Place x={90} y={112} show={s >= 1}>
              <Coins n={3} />
            </Place>
            <text x="90" y="130" textAnchor="middle" fontSize="8.5">
              wage from the town
            </text>
            <text x="90" y="141" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
              no profit for anyone
            </text>
          </Fade>

          {/* fees, then the split */}
          <Fade show={s >= 2}>
            <text x="270" y="98" textAnchor="middle" fontSize="8.5">
              parents pay 10 coins
            </text>
            <Place x={226} y={116} show={s >= 2} delay={200}>
              <Coins n={5} />
            </Place>
            <text x="226" y="134" textAnchor="middle" fontSize="8.5">
              5 to Miss Kim
            </text>
            <Place x={314} y={116} show={s >= 2} delay={400}>
              <Coins n={5} />
            </Place>
            <text x="314" y="134" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#b38f00">
              5 kept
            </text>
            <text x="314" y="144" textAnchor="middle" fontSize="8" fill="#b38f00">
              surplus-value
            </text>
          </Fade>

          {/* the verdict */}
          <Fade show={s === 3} delay={200}>
            <g transform="translate(270 162) rotate(-6)">
              <rect x="-44" y="-11" width="88" height="20" fill="#fff" stroke="#d6452f" strokeWidth="2" />
              <text y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#d6452f">
                PRODUCTIVE
              </text>
            </g>
            <text x="90" y="153" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              useful, but not productive
            </text>
            <text x="90" y="163" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              in Marx&apos;s sense
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.2 · Same loom, new boss; then a new way of working
 * (formal and real subsumption; absolute and relative surplus-value)
 * ───────────────────────────────────────────────────────────── */
const H = 20; // px per hour

export function SameLoomNewBoss() {
  return (
    <Player
      id="anim-16-2"
      title="16.2 · Same loom, new boss"
      steps={[
        { caption: "At first Leo works for himself, at home, on his own hand loom. He decides when he starts and stops." },
        {
          caption: "Then Leo goes to work for Mr. Moneybags, for a wage. Same loom, same way of weaving. Only the boss is new. Marx calls this formal subsumption.",
          ms: 4800,
        },
        {
          caption: "With the old way of working, the only way Mr. Moneybags can get more surplus-value is to make the day longer. That is absolute surplus-value.",
          ms: 4800,
        },
        {
          caption: "Later he changes the work itself: a factory and a machine loom. Leo makes his wage back faster, so more of the same 12 hours is extra. That is real subsumption, and relative surplus-value.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        // the working day: necessary part (gray) + surplus part (gold), in hours
        const day = s === 2 ? 14 : 12;
        const need = s === 3 ? 4 : 6;
        return (
          <>
            {/* the scene */}
            <Figure who="leo" x={58} y={150} mood={s >= 2 ? "sleepy" : "happy"} />
            <Fade show={s <= 2}>
              <g transform="translate(118 132)">
                <rect x="-24" y="-30" width="48" height="34" fill="none" stroke="#8a5a2b" strokeWidth="3" />
                {[-16, -8, 0, 8, 16].map((x) => (
                  <line key={x} x1={x} y1="-28" x2={x} y2="2" stroke="#2f6fd6" />
                ))}
                <text y="20" textAnchor="middle" fontSize="8.5">
                  same old hand loom
                </text>
              </g>
            </Fade>
            <Fade show={s === 3}>
              <g transform="translate(130 120)">
                <rect x="-34" y="-30" width="68" height="40" fill="#fff" stroke="#000" strokeWidth="1.2" />
                <circle cx="-16" cy="-10" r="9" fill="none" stroke="#000" strokeDasharray="3 2" className="spin-gear" />
                <circle cx="10" cy="-10" r="7" fill="none" stroke="#000" strokeDasharray="3 2" className="spin-gear" />
                <text y="24" textAnchor="middle" fontSize="8.5">
                  machine loom
                </text>
              </g>
            </Fade>
            <Figure who="moneybags" x={250} y={150} scale={0.85} style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 500ms" }} />
            <Fade show={s === 0}>
              <text x="250" y="100" textAnchor="middle" fontSize="10">
                his own boss
              </text>
            </Fade>
            <text x="305" y="60" textAnchor="middle" fontSize="10" fontWeight="600" style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 400ms" }}>
              {s === 3 ? "real" : "formal"}
            </text>
            <text x="305" y="73" textAnchor="middle" fontSize="9" style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 400ms" }}>
              subsumption
            </text>
            <Place x={186} y={70} scale={0.7} show={s >= 1}>
              <Linen />
            </Place>

            {/* the working day bar */}
            <Fade show={s >= 1}>
              <text x="20" y="176" fontSize="9">
                Leo&apos;s day
              </text>
              <rect x="20" y="182" width={need * H} height="16" fill="#9a9a9a" style={{ transition: `width ${T}` }} />
              <rect
                x={20 + need * H}
                y="182"
                width={(day - need) * H}
                height="16"
                fill="#e6b800"
                style={{ transition: `x ${T}, width ${T}` }}
              />
              <text x={20 + (need * H) / 2} y="194" textAnchor="middle" fontSize="8" fill="#fff" style={{ transition: `x ${T}` }}>
                pays his wage
              </text>
              <text x={20 + need * H + ((day - need) * H) / 2} y="194" textAnchor="middle" fontSize="8" style={{ transition: `x ${T}` }}>
                surplus
              </text>
              <text x={24 + day * H} y="194" fontSize="9" fontWeight="600" style={{ transition: `x ${T}` }}>
                {day} h
              </text>
              <text x="20" y="214" fontSize="8.5" fillOpacity=".6">
                {s === 2 ? "longer day: absolute surplus-value" : s === 3 ? "wage paid back faster: relative surplus-value" : "example numbers"}
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.3 · The sago island (the "natural basis" of surplus-value)
 * Marx's own example: sago grows wild; one tree commonly yields 300 lb;
 * 12 working hours a week would meet the islander's needs.
 * ───────────────────────────────────────────────────────────── */
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function TheSagoIsland() {
  return (
    <Player
      id="anim-16-3"
      title="16.3 · The sago island"
      steps={[
        { caption: "Far from Tiny Town is an island where sago trees grow wild. Cut one down, scrape out the inside, and you have food. One tree commonly gives 300 pounds." },
        { caption: "Marx imagines an islander who needs only 12 hours of work a week to get everything he needs. Nature has given him lots of free time." },
        {
          caption: "Now suppose a capitalist set up shop. Marx says the islander might have to work six days a week, and keep the product of just one of them.",
          ms: 4800,
        },
        {
          caption: "Nature made the extra time possible. It does not explain why he must hand it to someone else. For Marx, that comes from history and from force.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          {/* the island */}
          <ellipse cx="90" cy="176" rx="80" ry="20" fill="#e8d9a8" stroke="#000" strokeWidth="1" />
          <path d="M0,190 Q30,184 60,190 T120,190 T180,190" fill="none" stroke="#5aa0d6" strokeWidth="2" />
          <g transform="translate(60 168)">
            <g className="c16-sway">
              <rect x="-3" y="-70" width="6" height="70" fill="#8a5a2b" />
              {[-60, -30, 0, 30, 60].map((a) => (
                <path key={a} d="M0,-70 q18,-6 32,6" fill="none" stroke="#2a9d5b" strokeWidth="4" transform={`rotate(${a - 90} 0 -70)`} />
              ))}
            </g>
          </g>
          <Figure name="islander" x={118} y={172} scale={0.75} mood={s >= 2 ? "sad" : "happy"} />
          <Fade show={s === 0}>
            <text x="90" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              one tree: 300 lb of food
            </text>
          </Fade>

          {/* the week */}
          <Fade show={s >= 1}>
            <text x="270" y="22" textAnchor="middle" fontSize="9.5">
              {s >= 2 ? "his week under a boss" : "his week"}
            </text>
            {DAYS.map((d, i) => {
              const x = 210 + (i % 3) * 40;
              const y = 32 + Math.floor(i / 3) * 62;
              // step 1: only part of Monday and Tuesday worked (12 hours in all)
              const fill = s === 1 ? (i < 2 ? 0.5 : 0) : s >= 2 ? 1 : 0;
              const forHim = i === 0;
              return (
                <g key={d}>
                  <rect x={x} y={y} width="34" height="48" fill="#fff" stroke="#000" />
                  <rect
                    x={x}
                    y={y + 48 - 48 * fill}
                    width="34"
                    height={48 * fill}
                    fill={s >= 2 && !forHim ? "#e6b800" : "#2a9d5b"}
                    style={{ transition: `all ${T} ${i * 120}ms` }}
                  />
                  <text x={x + 17} y={y + 60} textAnchor="middle" fontSize="8">
                    {d}
                  </text>
                </g>
              );
            })}
            <Fade show={s === 1}>
              <text x="270" y="172" textAnchor="middle" fontSize="9.5">
                12 hours of work, the rest free
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="270" y="172" textAnchor="middle" fontSize="9.5">
                <tspan fill="#2a9d5b" fontWeight="600">1 day for him</tspan>, <tspan fill="#b38f00" fontWeight="600">5 for the boss</tspan>
              </text>
            </Fade>
          </Fade>

          <Fade show={s === 3} delay={300}>
            <text x="180" y="210" textAnchor="middle" fontSize="11" fontWeight="600">
              nature gives the time; history decides who takes it
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
