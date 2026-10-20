"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { Bar, TONE } from "@/components/anim/Workshop";
import { Banner, Say, Thinker } from "./ch16-animations";

const FIXED = "#7a7a7a";

/* ─────────────────────────────────────────────────────────────
 * 18.1 · Ricardo changes his mind
 * Ricardo's own example ("On Machinery", 3rd ed. 1821), quoted by Marx:
 * £20,000 capital = £7,000 fixed + £13,000 paying workers; £2,000 profit.
 * Half the men build a machine worth £7,500; afterwards only £5,500 is
 * left to pay workers, so the labour paid by £7,500 becomes "redundant".
 * Bars are drawn in thousands of pounds.
 * ───────────────────────────────────────────────────────────── */
export function RicardoChangesHisMind() {
  return (
    <Player
      id="anim-v4-18-1"
      title="18.1 · Ricardo changes his mind"
      steps={[
        { caption: "For years Ricardo said machines never hurt workers in the end: the money they save gets spent hiring people somewhere else." },
        { caption: "Then, in 1821, he added a new chapter, “On Machinery”. His example: a capitalist with £20,000. £7,000 is in buildings and tools; £13,000 pays and feeds the workers." },
        { caption: "Each year the workers produce £15,000 of food and goods: £13,000 to keep them going again, £2,000 of profit for the owner." },
        { caption: "One year he puts half his men to building a machine instead. The machine is worth £7,500. His total capital is still £20,000, and his profit still £2,000." },
        {
          caption: "But only £5,500 is left to pay workers. All the labour once paid by the other £7,500 “would become redundant.” Ricardo now admits machines can throw workers out of work.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const after = s >= 3;
        const workers = after ? 5.5 : 13;
        return (
          <>
            <Thinker name="Ricardo" x={34} y={202} />

            <Fade show={s === 0}>
              <Say x={200} y={60} w={210} text="Machines save money, and the money hires others." />
            </Fade>

            <Fade show={s >= 1}>
              <text x="70" y="32" fontSize="8.5">
                the capitalist&apos;s £20,000 (in thousands)
              </text>
              <Bar
                x={70}
                y={38}
                unit={13}
                segs={[
                  { n: 7, color: TONE.cotton, label: "buildings 7" },
                  { n: 7.5, color: FIXED, label: "machine 7.5", show: after },
                  { n: workers, color: TONE.wage, label: `workers ${after ? "5.5" : "13"}` },
                ]}
              />
            </Fade>

            <Fade show={s >= 2}>
              <text x="70" y="78" fontSize="8.5">
                each year: £15,000 produced = £13,000 to go round again + £2,000 profit
              </text>
            </Fade>

            {/* the workers paid by the circulating part */}
            <Fade show={s >= 1}>
              {Array.from({ length: 13 }, (_, i) => {
                const kept = i < Math.round(workers);
                return (
                  <g key={i} style={{ opacity: kept ? 1 : 0.18, transition: `opacity 500ms ${i * 60}ms` }}>
                    <Figure name="" x={80 + i * 20} y={150} scale={0.42} label={false} />
                  </g>
                );
              })}
              <text x="80" y="166" fontSize="8">
                workers paid out of the circulating part
              </text>
            </Fade>

            <Banner show={s === 4} y={188} text="machine up, jobs down: £7,500 of work gone" />
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 18.2 · Barton's muslin (demand for labour depends on circulating capital)
 * Barton, Observations… (1817): British muslin needs "at least a hundred,
 * probably a thousand times" the fixed capital of Indian muslin.
 * ───────────────────────────────────────────────────────────── */
export function BartonsMuslin() {
  return (
    <Player
      id="anim-v4-18-2"
      title="18.2 · Barton's muslin"
      steps={[
        { caption: "Ricardo got the idea from a less famous writer, John Barton, who wrote a short book in 1817 about the condition of working people." },
        { caption: "Barton compared two pieces of fine cotton cloth, called muslin. An Indian weaver makes one with a simple hand loom and very little equipment." },
        { caption: "A British mill makes the same cloth with “at least a hundred, probably a thousand times” as much spent on machines and buildings." },
        { caption: "Barton's rule: jobs depend on the part of capital that pays and feeds workers, not on machines. So a richer country does not always hire more people. All its savings could go into machines and hire nobody new." },
        {
          caption: "Marx gives Barton “very great merit”: he was the first to see that the part spent on wages shrinks as capital grows. Marx only corrects the split: what matters is wages versus everything else, since cotton and coal don't hire anyone either.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          <Thinker name="Barton" x={34} y={202} />
          <Thinker name="Marx" x={330} y={202} scale={0.7} show={s === 4} />

          {/* India: small loom, mostly the weaver */}
          <Fade show={s >= 1}>
            <text x="120" y="30" textAnchor="middle" fontSize="9" fontWeight="600">
              India
            </text>
            <rect x="96" y="40" width="48" height="30" fill="#fff" stroke="#000" />
            <line x1="100" y1="50" x2="140" y2="50" stroke="#000" />
            <line x1="100" y1="60" x2="140" y2="60" stroke="#000" />
            <Figure name="" x={120} y={124} scale={0.55} label={false} />
            <text x="120" y="140" textAnchor="middle" fontSize="8">
              hand loom
            </text>
          </Fade>

          {/* Britain: huge mill */}
          <Fade show={s >= 2}>
            <text x="260" y="30" textAnchor="middle" fontSize="9" fontWeight="600">
              Britain
            </text>
            <rect x="200" y="40" width="120" height="76" fill={FIXED} stroke="#000" />
            {[0, 1, 2].map((i) => (
              <rect key={i} x={212 + i * 36} y="52" width="22" height="18" fill="#d4d4d4" stroke="#000" />
            ))}
            <rect x="300" y="18" width="10" height="22" fill={FIXED} stroke="#000" />
            <Figure name="" x={260} y={124} scale={0.55} label={false} />
            <text x="260" y="140" textAnchor="middle" fontSize="8">
              100 to 1,000 times the machinery
            </text>
          </Fade>

          {/* Barton's rule */}
          <Fade show={s >= 3}>
            <text x="190" y="160" textAnchor="middle" fontSize="9">
              jobs come from the part that pays workers
            </text>
            <text x="190" y="173" textAnchor="middle" fontSize="9" fill="#d6452f">
              savings poured into machines hire no one new
            </text>
          </Fade>

          <Banner show={s === 4} y={196} text="Marx: wages versus everything else" />
        </>
      )}
    </Player>
  );
}
