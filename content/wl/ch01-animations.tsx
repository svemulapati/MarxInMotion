"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade, Place, Tick } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * 1.1 · Under the headlines (the economic conditions below the politics)
 * ───────────────────────────────────────────────────────────── */
const HEADLINES = ["June fighting in Paris", "Vienna falls", "Berlin, November", "Hungary, Poland, Italy"];

export function UnderTheHeadlines() {
  return (
    <Player
      id="anim-wl-1-1"
      title="1.1 · Under the headlines"
      viewBox="0 0 360 240"
      steps={[
        { caption: "For a year, Marx's newspaper has reported battles and revolutions all over Europe: Paris, Vienna, Berlin, Hungary, Poland, Italy." },
        { caption: "Readers complain: you tell us who is fighting, but not why. What is underneath it all?" },
        { caption: "Marx agrees. Under the headlines, like the ground under a house, are the everyday economic facts: who owns the workshops, and who works for a wage.", ms: 4400 },
        { caption: "So in April 1849 he stops the news for a moment and starts digging. First question: what are wages? That is the next chapter." },
      ]}
    >
      {(s) => (
        <>
          {/* the ground line */}
          <line x1="20" y1="120" x2="340" y2="120" stroke="#000" strokeWidth="2" />
          <rect x="20" y="120" width="320" height="90" fill="#8a5a2b" style={{ opacity: s >= 2 ? 0.25 : 0.08, transition: "opacity 600ms" }} />

          {/* headlines above ground */}
          {HEADLINES.map((h, i) => (
            <Place key={h} x={70 + (i % 2) * 150} y={42 + Math.floor(i / 2) * 40} show>
              <rect x="-62" y="-14" width="124" height="26" fill="#fff" stroke="#000" />
              <text y="3" textAnchor="middle" fontSize="8.5" fontWeight="600">
                {h}
              </text>
            </Place>
          ))}

          <Fade show={s === 1}>
            <Figure who="sam" x={300} y={205} scale={0.7} mood="wow" label={false} />
            <g transform="translate(230 150)">
              <rect x="-58" y="-16" width="116" height="26" fill="#fff" stroke="#000" />
              <text y="1" textAnchor="middle" fontSize="8.5">
                but why is it all happening?
              </text>
            </g>
          </Fade>

          {/* what lies underneath */}
          <Fade show={s >= 2}>
            <g transform="translate(180 150)">
              <rect x="-120" y="-14" width="110" height="26" fill="#fff" stroke="#000" />
              <text x="-65" y="3" textAnchor="middle" fontSize="8.5">
                who owns the tools
              </text>
              <rect x="10" y="-14" width="110" height="26" fill="#fff" stroke="#000" />
              <text x="65" y="3" textAnchor="middle" fontSize="8.5">
                who works for wages
              </text>
            </g>
            <text x="180" y="200" textAnchor="middle" fontSize="9.5" fontWeight="600">
              the economic ground under the politics
            </text>
          </Fade>
          <Fade show={s === 3}>
            <g transform="translate(320 150)">
              <path d="M0,-30 L0,20 M-8,12 L0,20 L8,12" stroke="#000" strokeWidth="2.5" fill="none" />
            </g>
            <text x="180" y="230" textAnchor="middle" fontSize="10">
              next: what are wages?
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.2 · A plan in three parts (and only one got written)
 * ───────────────────────────────────────────────────────────── */
const PLAN = [
  { title: "Wage-labour and capital", sub: "how workers and owners are tied together" },
  { title: "The ruin of the middle classes", sub: "small shopkeepers and farmers squeezed out" },
  { title: "England rules the world market", sub: "how one country's trade dominates the rest" },
];

export function APlanInThreeParts() {
  return (
    <Player
      id="anim-wl-1-2"
      title="1.2 · A plan in three parts"
      steps={[
        { caption: "Marx tells his readers his plan. He will explain the economy in three big parts." },
        { caption: "Part one: how wage-workers and capital are tied together. Part two: why small shopkeepers and farmers get squeezed. Part three: how England's trade dominates the world market.", ms: 5000 },
        { caption: "And a promise: he will use the simplest words he can, and assume his readers know no economics at all. 'We wish to be understood by the workers.'", ms: 4600 },
        { caption: "Only part one ever got printed. The paper closed in May 1849, so this little book is the first part of a much bigger plan." },
      ]}
    >
      {(s) => (
        <>
          {PLAN.map((p, i) => {
            const y = 40 + i * 50;
            const done = i === 0;
            return (
              <g key={p.title} style={{ opacity: s >= 1 || i === 0 ? 1 : 0.25, transition: "opacity 500ms" }}>
                <rect x="30" y={y} width="250" height="38" fill={s === 3 && !done ? "#f1f1f1" : "#fff"} stroke="#000" />
                <text x="42" y={y + 16} fontSize="10" fontWeight="600" fillOpacity={s === 3 && !done ? 0.4 : 1}>
                  {i + 1}. {p.title}
                </text>
                <text x="42" y={y + 30} fontSize="8.5" fillOpacity={s === 3 && !done ? 0.35 : 0.7}>
                  {p.sub}
                </text>
                <Fade show={s === 3}>
                  <g transform={`translate(305 ${y + 19})`}>{done ? <Tick /> : <Cross />}</g>
                  <text x="320" y={y + 23} fontSize="8">
                    {done ? "printed" : "never"}
                  </text>
                </Fade>
              </g>
            );
          })}

          <Fade show={s === 2}>
            <rect x="30" y="196" width="300" height="30" fill="#000" />
            <text x="180" y="215" textAnchor="middle" fontSize="10" fill="#fff">
              simple words, no economics needed
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
