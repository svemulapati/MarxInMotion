"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade, Tick } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* Small drawings used only in this chapter. Each is centred on (0, 0). */
const Scroll = () => (
  <g>
    <rect x="-12" y="-15" width="24" height="30" fill="#fffbe6" stroke="#000" strokeWidth="1" />
    <rect x="-14" y="-17" width="28" height="5" rx="2.5" fill="#d9c27a" stroke="#000" strokeWidth=".8" />
    <rect x="-14" y="12" width="28" height="5" rx="2.5" fill="#d9c27a" stroke="#000" strokeWidth=".8" />
    {[-6, -1, 4].map((y) => (
      <line key={y} x1="-8" y1={y} x2="8" y2={y} stroke="#000" strokeOpacity=".4" />
    ))}
  </g>
);
const Workshop = () => (
  <g>
    <path d="M-34,26 V-10 L0,-30 L34,-10 V26 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <rect x="-9" y="6" width="18" height="20" fill="#555" />
    <text y="-6" textAnchor="middle" fontSize="8">
      workshop
    </text>
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 28.1 · Pushed off the land, punished for it (vagrancy laws)
 * ───────────────────────────────────────────────────────────── */
const LAWS = [
  {
    year: "1530",
    who: "Henry VIII",
    lines: ["Old or sick beggars get a licence to beg.", "Strong people with no work are whipped", "and sent home to “put themselves to labour”."],
  },
  {
    year: "1547",
    who: "Edward VI",
    lines: ["Anyone who refuses to work can be made", "the slave of the person who reported them,", "and marked with a hot iron if they run away."],
  },
  {
    year: "1572",
    who: "Elizabeth I",
    lines: ["Beggars over 14 are flogged and marked", "on the ear, unless someone hires them for", "two years. Caught again and again: death."],
  },
];
const PEOPLE = 18;

export function PunishedForBeingPoor() {
  return (
    <Player
      id="anim-28-1"
      title="28.1 · Pushed off the land, punished for it"
      steps={[
        { caption: "Thousands of families driven off the land arrive in the towns, all at once." },
        {
          caption: "But the new workshops can take only a few of them. Marx says most became beggars or wanderers, a few by choice, but most because they had no other way to live.",
          ms: 4800,
        },
        { caption: "The law did not blame the people who took the land. It blamed the people who lost it. In 1530, under Henry VIII, strong beggars were whipped and sent home to find work." },
        { caption: "In 1547, under Edward VI, a person who refused to work could be made a slave of whoever reported them as idle." },
        { caption: "In 1572, under Elizabeth I, beggars over 14 were flogged and marked on the ear, unless someone gave them work for two years. Those caught again and again could be put to death." },
        {
          caption: "Marx's summary: people were first driven from their land, then whipped, branded and punished by terrible laws until they accepted the discipline of working for wages.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const inside = 6;
        return (
          <>
            <g transform="translate(306 168)">
              <Workshop />
            </g>
            <text x="306" y="210" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              room for 6
            </text>

            {/* the crowd: in from the left, a few get inside */}
            {Array.from({ length: PEOPLE }, (_, i) => {
              const hired = i < inside && s >= 1;
              const x = s === 0 ? 14 + (i % 9) * 12 : hired ? 306 : 30 + (i % 9) * 24;
              const y = hired ? 192 : 160 + Math.floor(i / 9) * 22;
              return (
                <g
                  key={i}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: hired ? 0 : 1,
                    transition: `transform 1000ms cubic-bezier(.4,0,.2,1) ${i * 30}ms, opacity 300ms ${hired ? 900 : 0}ms`,
                  }}
                >
                  <circle cy="-8" r="4" fill="#fff" stroke="#000" />
                  <rect x="-4" y="-4" width="8" height="10" fill="#9a9a9a" />
                </g>
              );
            })}
            <Fade show={s === 1}>
              <text x="130" y="216" textAnchor="middle" fontSize="9" fill="#d6452f">
                no work for the rest
              </text>
            </Fade>

            {/* the laws, one card at a time */}
            {LAWS.map((law, i) => (
              <Fade key={law.year} show={s === i + 2} delay={200}>
                <g transform="translate(36 56)">
                  <Scroll />
                </g>
                <text x="60" y="44" fontSize="16" fontWeight="600">
                  {law.year}
                </text>
                <text x="104" y="44" fontSize="10" fillOpacity=".6">
                  {law.who}
                </text>
                {law.lines.map((l, k) => (
                  <text key={k} x="60" y={64 + k * 14} fontSize="10">
                    {l}
                  </text>
                ))}
              </Fade>
            ))}

            <Fade show={s === 5} delay={200}>
              <text x="180" y="50" textAnchor="middle" fontSize="12" fontWeight="600">
                driven from the land,
              </text>
              <text x="180" y="68" textAnchor="middle" fontSize="12" fontWeight="600">
                then punished into wage work
              </text>
              <text x="180" y="90" textAnchor="middle" fontSize="9.5" fillOpacity=".7">
                laws &ldquo;grotesquely terrible&rdquo;, Marx says
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 28.2 · A ceiling, never a floor (wage laws and the ban on unions)
 * ───────────────────────────────────────────────────────────── */
const M = { x: 46, top: 40, bottom: 186, w: 28 };

export function ACeilingNeverAFloor() {
  return (
    <Player
      id="anim-28-2"
      title="28.2 · A ceiling, never a floor"
      steps={[
        { caption: "In 1349 the Statute of Labourers fixed the highest wage a worker could be paid. It never fixed a lowest one." },
        {
          caption: "Paying more than the legal wage could land an employer in prison, and taking more was punished even harder than giving it.",
          ms: 4200,
        },
        { caption: "Workers were not allowed to band together to ask for more. Marx says this was treated as a serious crime from the 14th century until 1825." },
        { caption: "In 1825, under pressure from the workers, the laws against trade unions finally fell, at least in part." },
        {
          caption: "By then the whip was hardly needed. Marx: “the dull compulsion of economic relations” does the job. With no land and no tools, hunger alone sends people to the workshop.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const level = s === 1 ? 72 : 96; // y of the wage level (lower y = higher wage)
        return (
          <>
            {/* the wage meter */}
            <rect x={M.x} y={M.top} width={M.w} height={M.bottom - M.top} fill="#fff" stroke="#000" />
            <rect
              x={M.x}
              y={level}
              width={M.w}
              height={M.bottom - level}
              fill={CAST.sam.color}
              style={{ transition: `all ${T}` }}
            />
            <text x={M.x + M.w / 2} y={M.bottom + 14} textAnchor="middle" fontSize="9">
              wage
            </text>
            <line x1={M.x - 10} y1="86" x2={M.x + M.w + 10} y2="86" stroke="#d6452f" strokeWidth="3" />
            <text x={M.x + M.w + 14} y="89" fontSize="9" fill="#d6452f" fontWeight="600">
              highest legal wage
            </text>
            <line x1={M.x - 10} y1={M.bottom} x2={M.x + M.w + 10} y2={M.bottom} stroke="#000" strokeDasharray="3 3" strokeOpacity=".4" />
            <text x={M.x + M.w + 14} y={M.bottom - 2} fontSize="9" fillOpacity=".6">
              lowest: none
            </text>
            <Fade show={s === 1}>
              <text x={M.x + M.w / 2} y={64} textAnchor="middle" fontSize="18" fill="#d6452f">
                &times;
              </text>
              <text x={M.x + M.w + 14} y="66" fontSize="9">
                pay more: prison
              </text>
            </Fade>

            {/* workers banding together */}
            <g transform="translate(200 150)" style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }}>
              {[-48, -16, 16, 48].map((x, i) => (
                <g key={x} transform={`translate(${x} 0) scale(.7)`}>
                  <circle cy="-30" r="9" fill="#fff" stroke="#000" strokeWidth="1.4" />
                  <rect x="-10" y="-20" width="20" height="26" fill={i === 1 ? CAST.sam.color : "#9a9a9a"} />
                </g>
              ))}
              <line x1="-40" y1="-4" x2="40" y2="-4" stroke="#000" strokeWidth="2" strokeDasharray={s === 2 ? "4 6" : "0"} />
              <text y="22" textAnchor="middle" fontSize="9.5">
                workers joining together
              </text>
            </g>
            <Fade show={s === 2} delay={300}>
              <g transform="translate(200 128) scale(2)">
                <Cross />
              </g>
              <text x="200" y="60" textAnchor="middle" fontSize="11" fontWeight="600">
                1349 to 1825: a crime
              </text>
            </Fade>
            <Fade show={s === 3} delay={300}>
              <g transform="translate(200 116) scale(1.6)">
                <Tick />
              </g>
              <text x="200" y="60" textAnchor="middle" fontSize="11" fontWeight="600">
                1825: the ban falls (in part)
              </text>
            </Fade>

            {/* hunger does the rest */}
            <Fade show={s === 4} delay={200}>
              <rect x="0" y="0" width="360" height="220" fill="#f1f1f1" />
              <text x="233" y="58" textAnchor="middle" fontSize="11" fontWeight="600">
                the dull compulsion
              </text>
              <text x="233" y="72" textAnchor="middle" fontSize="11" fontWeight="600">
                of economic relations
              </text>
              <ellipse cx="170" cy="128" rx="24" ry="8" fill="#fff" stroke="#000" />
              <text x="170" y="150" textAnchor="middle" fontSize="9">
                an empty plate
              </text>
              <path d="M200,126 L246,126" stroke="#000" strokeWidth="1.5" markerEnd="url(#c28-arr)" />
              <Figure who="sam" x={290} y={205} scale={0.8} />
              <text x="290" y="110" textAnchor="middle" fontSize="9">
                off to work
              </text>
              <defs>
                <marker id="c28-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
                </marker>
              </defs>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
