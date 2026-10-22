"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { CAST_LIST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

const STOPS = [
  { year: "1818", head: "Born in Trier", line: "a town in Prussia, now Germany" },
  { year: "1840s", head: "Writer on the move", line: "his newspapers are shut down" },
  { year: "1848", head: "The Communist Manifesto", line: "written with his friend Engels" },
  { year: "1849", head: "Moves to London", line: "reads for years in the British Museum" },
  { year: "1867", head: "Capital, Volume I", line: "the one volume he finished" },
  { year: "1883", head: "Dies in London", line: "piles of notes left unfinished" },
  { year: "1885 to 1910", head: "Friends finish the job", line: "Engels: Vols II and III. Kautsky: Vol IV" },
];

const x = (i: number) => 30 + i * 50;

/** Marx himself: a head with a very large beard. */
function MarxHead() {
  return (
    <g>
      <path d="M-13,-46 Q-16,-20 0,-14 Q16,-20 13,-46 Z" fill="#9a9a9a" stroke="#000" strokeWidth="1.2" />
      <circle cx="0" cy="-50" r="10" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <path d="M-10,-47 Q0,-36 10,-47 Q8,-34 0,-30 Q-8,-34 -10,-47 Z" fill="#9a9a9a" stroke="#000" strokeWidth="1" />
      <path d="M-10,-54 Q-12,-64 0,-62 Q12,-64 10,-54" fill="#9a9a9a" stroke="#000" strokeWidth="1" />
      <circle cx="-3.5" cy="-52" r="1.3" />
      <circle cx="3.5" cy="-52" r="1.3" />
      <rect x="-11" y="-14" width="22" height="14" fill="#1f1f1f" />
    </g>
  );
}

export function MarxsLife() {
  return (
    <Player
      id="anim-intro-1"
      title="0.1 · Marx's life in seven stops"
      steps={[
        { caption: "Karl Marx was born in 1818 in Trier, a small town that is now in Germany." },
        { caption: "As a young man he wrote for newspapers. The rulers did not like what he wrote: his papers were shut down, and he was ordered out of France, Belgium and Prussia, one after another." },
        { caption: "In 1848, with his friend Friedrich Engels, he wrote a short and famous pamphlet: The Communist Manifesto." },
        { caption: "In 1849 he moved to London. He was often poor, and spent years reading in the British Museum library, studying how money and work fit together." },
        { caption: "In 1867 he published Capital, Volume I. It was the only volume he finished himself." },
        { caption: "Marx died in London in 1883, leaving boxes of notes for the rest of the book." },
        { caption: "Engels turned those notes into Volume II (1885) and Volume III (1894). Later, Karl Kautsky published Marx's notes on earlier thinkers as Theories of Surplus-Value.", ms: 4800 },
      ]}
    >
      {(s) => (
        <>
          <line x1={x(0)} y1="170" x2={x(6)} y2="170" stroke="#000" strokeWidth="2" />
          {STOPS.map((st, i) => (
            <g key={st.year}>
              <circle
                cx={x(i)}
                cy="170"
                r={i === s ? 6 : 4}
                fill={i <= s ? "#000" : "#fff"}
                stroke="#000"
                strokeWidth="1.5"
                style={{ transition: `all ${T}` }}
              />
              <text x={x(i)} y="190" textAnchor="middle" fontSize={i === 6 ? 7 : 8.5} fillOpacity={i === s ? 1 : 0.45}>
                {i === 6 ? "1885+" : st.year}
              </text>
            </g>
          ))}

          {/* Marx walks along the line */}
          <g style={{ transform: `translate(${x(Math.min(s, 5))}px, 162px)`, opacity: s >= 6 ? 0.25 : 1, transition: `transform ${T}, opacity 500ms` }}>
            <MarxHead />
          </g>
          <Fade show={s >= 6}>
            <Figure name="Engels" x={x(6)} y={158} scale={0.75} label={false} />
            <text x={x(6)} y="104" textAnchor="middle" fontSize="8.5">
              Engels
            </text>
          </Fade>

          {/* the card for this stop */}
          {STOPS.map((st, i) => (
            <Fade key={st.year} show={i === s} delay={200}>
              <text x="180" y="40" textAnchor="middle" fontSize="30" fontWeight="300" letterSpacing="-1">
                {st.year}
              </text>
              <text x="180" y="62" textAnchor="middle" fontSize="13" fontWeight="600">
                {st.head}
              </text>
              <text x="180" y="78" textAnchor="middle" fontSize="10">
                {st.line}
              </text>
            </Fade>
          ))}

          {/* books appear as they are published */}
          {[
            { at: 4, label: "I", x: 150 },
            { at: 6, label: "II", x: 172 },
            { at: 6, label: "III", x: 194 },
            { at: 6, label: "IV", x: 216 },
          ].map((b) => (
            <Fade key={b.label} show={s >= b.at} delay={b.at === 6 ? 300 : 0}>
              <rect x={b.x - 9} y="92" width="18" height="26" fill={b.label === "IV" ? "#fff" : "#000"} stroke="#000" />
              <text x={b.x} y="109" textAnchor="middle" fontSize="8" fill={b.label === "IV" ? "#000" : "#fff"}>
                {b.label}
              </text>
            </Fade>
          ))}
        </>
      )}
    </Player>
  );
}

export function MeetTinyTown() {
  const slots = CAST_LIST.map((c, i) => ({ c, x: 50 + (i % 4) * 87, y: i < 4 ? 88 : 200 }));
  return (
    <Player
      id="anim-intro-2"
      title="0.2 · Meet Tiny Town"
      viewBox="0 0 360 228"
      steps={[
        ...CAST_LIST.map((c) => ({
          caption: `${c.name} ${c.job} ${c.teaches}.`,
          ms: 2800,
        })),
        { caption: "These eight neighbours will act out the whole of Capital, one chapter at a time. Watch for them!", ms: 3600 },
      ]}
    >
      {(s) => (
        <>
          {slots.map(({ c, x: cx, y }, i) => (
            <g key={c.id} style={{ opacity: i <= s ? 1 : 0, transition: "opacity 500ms" }}>
              <Figure
                who={c.id}
                x={cx}
                y={i <= s ? y : y + 16}
                scale={i === s ? 1.12 : 0.95}
                mood={i === s ? "wow" : "happy"}
              />
              <text x={cx} y={y + 22} textAnchor="middle" fontSize="7.5" fillOpacity=".55">
                {c.job.replace("the ", "")}
              </text>
            </g>
          ))}
        </>
      )}
    </Player>
  );
}
