"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const NEED = "#2a9d5b";
const EXTRA = "#e6b800";

/** A tiny worker for crowd scenes: head and block body in Sam's colour. */
function Worker({ x, y, show = true, delay = 0, k = 1 }: { x: number; y: number; show?: boolean; delay?: number; k?: number }) {
  return (
    <g style={{ opacity: show ? 1 : 0, transition: `opacity 400ms ease ${show ? delay : 0}ms` }}>
      <circle cx={x} cy={y - 9 * k} r={3 * k} fill="#fff" stroke="#000" strokeWidth=".8" />
      <rect x={x - 3.5 * k} y={y - 6 * k} width={7 * k} height={8 * k} fill={CAST.sam.color} />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.1 · One worker or a hundred (mass of surplus-value)
 * Workshop numbers from CONTINUITY.md: v = 3 coins, s = 3 coins per worker.
 * ───────────────────────────────────────────────────────────── */
const COUNTS = [1, 10, 100, 100];

export function OneWorkerOrAHundred() {
  return (
    <Player
      id="anim-11-1"
      title="11.1 · One worker or a hundred"
      steps={[
        { caption: "Sam is paid 3 coins a day, and in his 12-hour day he makes 3 coins of surplus-value for Mr. Moneybags." },
        { caption: "Mr. Moneybags hires 10 workers like Sam. He pays 30 coins in wages, and 30 coins of surplus-value come back." },
        { caption: "With 100 workers, he pays 300 coins in wages and gets 300 coins of surplus-value. Same day, same rate, just more people." },
        {
          caption: "Marx's rule: the mass of surplus-value = the money spent on wages × the rate of surplus-value. Here, 300 coins × 100% = 300 coins.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const n = COUNTS[s];
        return (
          <>
            {/* the crowd: up to 100 workers in a 20 x 5 grid */}
            {Array.from({ length: 100 }, (_, i) => (
              <Worker key={i} x={34 + (i % 20) * 15} y={52 + Math.floor(i / 20) * 20} show={i < n && s > 0} delay={(i % 20) * 15} />
            ))}
            <Fade show={s === 0}>
              <Figure who="sam" x={34} y={88} scale={0.62} label={false} />
            </Fade>

            {/* wages and surplus as two bars, on a scale where 300 coins = 280 units */}
            <text x="24" y="168" fontSize="9">
              wages (v)
            </text>
            <rect x="80" y="160" height="12" width={Math.max(n * 0.93, 3)} fill={NEED} style={{ transition: `width ${T}` }} />
            <text x={86 + Math.max(n * 0.93, 3)} y="170" fontSize="9" fontWeight="600" style={{ transition: `x ${T}` }}>
              {n * 3}
            </text>
            <text x="24" y="190" fontSize="9">
              surplus (s)
            </text>
            <rect x="80" y="182" height="12" width={Math.max(n * 0.93, 3)} fill={EXTRA} style={{ transition: `width ${T}` }} />
            <text x={86 + Math.max(n * 0.93, 3)} y="192" fontSize="9" fontWeight="600" style={{ transition: `x ${T}` }}>
              {n * 3}
            </text>

            <text x="180" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
              {n} {n === 1 ? "worker" : "workers"}
            </text>
            <Fade show={s === 3} delay={200}>
              <text x="180" y="214" textAnchor="middle" fontSize="11" fontWeight="600">
                300 coins × 100% = 300 coins of surplus-value
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.2 · Fewer workers, longer days? (the ceiling of the day)
 * Marx's numbers: 500 workers, 12-hour day, 100% rate: 1,500s. 100 workers
 * at an 18-hour day: 600s. Even 24 hours of value from 100 workers: 1,200s.
 * ───────────────────────────────────────────────────────────── */
const SCALE = 0.17; // px per coin: 1,500 coins = 255 px

export function FewerWorkersLongerDays() {
  return (
    <Player
      id="anim-11-2"
      title="11.2 · Fewer workers, longer days?"
      steps={[
        { caption: "Workshop A has 500 workers on a 12-hour day. Each makes 3 coins of surplus-value, so together they make 1,500 coins." },
        { caption: "Workshop B has only 100 workers. Its boss tries to catch up by stretching the day to 18 hours. Now each makes 6 coins of surplus: 600 coins in all." },
        {
          caption: "Even if B's workers toiled all 24 hours and got no wage at all, which is impossible, 100 people could only make 1,200 coins of new value. Still less than A.",
          ms: 5200,
        },
        { caption: "A day can never be longer than 24 hours. So a boss who wants much more surplus-value can't just squeeze a few people harder. He needs more workers, which means more capital.", ms: 5200 },
      ]}
    >
      {(s) => (
        <>
          <text x="20" y="44" fontSize="11" fontWeight="600">
            A: 500 workers, 12 hours
          </text>
          <rect x="20" y="52" height="20" width={1500 * SCALE} fill={EXTRA} />
          <text x={26 + 1500 * SCALE} y="66" fontSize="10" fontWeight="600">
            1,500
          </text>

          <text x="20" y="108" fontSize="11" fontWeight="600">
            B: 100 workers, {s === 0 ? 12 : s === 1 ? 18 : 24} hours
          </text>
          <rect
            x="20"
            y="116"
            height="20"
            width={(s === 0 ? 300 : s === 1 ? 600 : 1200) * SCALE}
            fill={s >= 2 ? "url(#c11-impossible)" : EXTRA}
            style={{ transition: `width ${T}` }}
          />
          <text
            x={26 + (s === 0 ? 300 : s === 1 ? 600 : 1200) * SCALE}
            y="130"
            fontSize="10"
            fontWeight="600"
            style={{ transition: `x ${T}` }}
          >
            {s === 0 ? "300" : s === 1 ? "600" : "1,200"}
          </text>
          <defs>
            <pattern id="c11-impossible" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="6" height="6" fill="#fff" />
              <line x1="0" y1="0" x2="0" y2="6" stroke="#d6452f" strokeWidth="2" />
            </pattern>
          </defs>

          {/* the ceiling */}
          <Fade show={s >= 2}>
            <line x1={20 + 1500 * SCALE} y1="40" x2={20 + 1500 * SCALE} y2="150" stroke="#000" strokeDasharray="4 3" />
            <text x="20" y="162" fontSize="9" fill="#d6452f">
              24 hours, no wage: impossible, and still short
            </text>
          </Fade>
          <Fade show={s === 3} delay={200}>
            <text x="180" y="196" textAnchor="middle" fontSize="12" fontWeight="600">
              the day has a ceiling: 24 hours
            </text>
            <text x="180" y="214" textAnchor="middle" fontSize="10">
              more surplus needs more workers
            </text>
          </Fade>
          <Fade show={s === 1}>
            <text x="180" y="196" textAnchor="middle" fontSize="10">
              18 hours: 6 for the wage, 12 of surplus
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.3 · How big must a boss be? (the minimum sum of capital)
 * Marx's example: a worker needs 8 hours for himself; a master who gets
 * 4 extra hours from each needs 2 workers just to live like one of them,
 * and 8 (8 times the cost of one labour-power) to live twice as well and
 * turn half the surplus into capital.
 * ───────────────────────────────────────────────────────────── */
const STAGE = [
  { n: 0, label: "works for himself", sub: "8 hours feed him" },
  { n: 2, label: "a small master", sub: "2 helpers × 4 extra hours = 8 hours" },
  { n: 8, label: "8 helpers", sub: "lives twice as well, saves half" },
  { n: 8, label: "a capitalist", sub: "manages, and no longer works himself" },
];

export function HowBigMustABossBe() {
  return (
    <Player
      id="anim-11-3"
      title="11.3 · How big must a boss be?"
      steps={[
        { caption: "Leo works for himself. 8 hours of weaving a day is enough to feed him, so he doesn't need to work any longer." },
        {
          caption: "A master hires 2 helpers. Each works 8 hours for himself and 4 more for the master. Those 8 extra hours only let the master live like a worker. He is a small master, still working at the loom himself.",
          ms: 5800,
        },
        { caption: "To live twice as well as a worker and still put half the surplus back into the business, Marx works out he needs 8 helpers: 8 times the money it takes to hire one." },
        {
          caption: "Now he can stop weaving and just run things. A big enough amount of money turns into something new: capital. Marx borrows an idea from the philosopher Hegel: a change in amount, past a point, becomes a change in kind.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const st = STAGE[s];
        return (
          <>
            <text x="180" y="28" textAnchor="middle" fontSize="13" fontWeight="600">
              {st.label}
            </text>
            <text x="180" y="44" textAnchor="middle" fontSize="9.5">
              {st.sub}
            </text>

            {/* the boss: Leo alone, then a master who is at the loom, then one who only manages */}
            <Figure
              who={s === 0 ? "leo" : undefined}
              name={s === 0 ? undefined : "the master"}
              x={60}
              y={200}
              scale={0.8}
            />
            {/* the loom he works at, until he stops */}
            <g style={{ opacity: s <= 2 ? 1 : 0.15, transition: "opacity 500ms" }}>
              <rect x="88" y="168" width="34" height="28" fill="#fff" stroke="#000" />
              <line x1="92" y1="174" x2="118" y2="174" stroke="#000" />
              <line x1="92" y1="182" x2="118" y2="182" stroke="#000" />
              <line x1="92" y1="190" x2="118" y2="190" stroke="#000" />
            </g>

            {/* helpers */}
            {Array.from({ length: 8 }, (_, i) => (
              <Worker key={i} x={166 + i * 22} y={196} show={i < st.n} delay={i * 60} k={2} />
            ))}

            {/* what the master takes home, in coins */}
            <Fade show={s >= 1}>
              <text x="160" y="84" fontSize="9" fillOpacity=".6">
                master&apos;s share
              </text>
              {Array.from({ length: 4 }, (_, i) => (
                <g
                  key={i}
                  transform={`translate(${168 + i * 18} 104)`}
                  style={{ opacity: s === 1 ? (i < 1 ? 1 : 0) : 1, transition: "opacity 400ms" }}
                >
                  <Coin r={7} />
                </g>
              ))}
              <text x="250" y="108" fontSize="9">
                {s === 1 ? "= a worker's living" : "= 2 livings, 2 saved"}
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
