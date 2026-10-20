"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Place } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";

/** A bank-note, centred on (0, 0). */
export function Note({ text = "£500", w = 40 }: { text?: string; w?: number }) {
  return (
    <g>
      <rect x={-w / 2} y="-11" width={w} height="22" fill="#fffbe6" stroke="#000" strokeWidth="1" />
      <rect x={-w / 2 + 3} y="-8" width={w - 6} height="16" fill="none" stroke="#8a6d00" strokeWidth=".6" />
      <text y="4" textAnchor="middle" fontSize="9" fontWeight="700">
        {text}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 33.1 · One note, many jobs
 * Marx's own example: a £500 note goes A → B → B's banker, who
 * discounts C's bill with it → C's bank → a bill-broker, all in a day.
 * ───────────────────────────────────────────────────────────── */
const STOPS = [
  { name: "A", x: 36 },
  { name: "B", x: 100 },
  { name: "banker", x: 168 },
  { name: "C", x: 236 },
  { name: "bill-broker", x: 312 },
];
const WHERE = [0, 1, 2, 3, 2, 4]; // the note's position at each step

export function OneNoteManyJobs() {
  return (
    <Player
      id="anim-v3-33-1"
      title="33.1 · One note, many jobs"
      steps={[
        { caption: "Marx follows a single £500 note through one day in London. A has it in the morning." },
        { caption: "A pays a bill with it, so the note goes to B." },
        { caption: "B puts it in the bank the same day. It is now B's deposit." },
        { caption: "The banker lends the very same note to C, by paying C early for a bill that is not yet due." },
        { caption: "C pays it into a bank again, and it becomes someone else's deposit." },
        {
          caption: "Then it is lent out once more, to a bill-broker. One note did the job of several before teatime. Credit lets a little money do a lot of work.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const at = STOPS[WHERE[s]];
        return (
          <>
            {STOPS.map((p, i) => (
              <g key={p.name} style={{ opacity: WHERE.slice(0, s + 1).includes(i) ? 1 : 0.4, transition: "opacity 400ms" }}>
                {p.name === "banker" ? (
                  <Figure who="bea" x={p.x} y={190} scale={0.7} label={false} />
                ) : (
                  <Figure name={p.name} x={p.x} y={190} scale={0.7} label={false} />
                )}
                <text x={p.x} y={208} textAnchor="middle" fontSize="9">
                  {p.name}
                </text>
              </g>
            ))}

            {/* the trail so far */}
            {WHERE.slice(1, s + 1).map((to, k) => {
              const from = STOPS[WHERE[k]].x;
              const dest = STOPS[to].x;
              const lift = 30 + (k % 2) * 16;
              return (
                <path
                  key={k}
                  d={`M${from},120 Q${(from + dest) / 2},${120 - lift} ${dest},120`}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
              );
            })}

            <Place x={at.x} y={120}>
              <Note />
            </Place>

            <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
              {["morning: in A's pocket", "a payment", "a deposit", "a loan", "a deposit again", "a loan again"][s]}
            </text>
            <Fade show={s === 5} delay={300}>
              <text x="180" y="48" textAnchor="middle" fontSize="10" fillOpacity=".7">
                1 note, 5 jobs, 1 day
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 33.2 · How many notes does the town need?
 * Business decides how many notes circulate (about £20 million in
 * ordinary times, Neave 1858); spare notes flow back; in an alarm "the
 * country requires twice as much"; the 1844 Act forced the Bank to
 * contract just then.
 * ───────────────────────────────────────────────────────────── */
const BAR_X = 120;
const UNIT = 5.2; // px per £1 million

export function HowManyNotes() {
  return (
    <Player
      id="anim-v3-33-2"
      title="33.2 · How many notes does the town need?"
      steps={[
        { caption: "In ordinary times, a Governor of the Bank of England told Parliament in 1858, the public uses about £20 million of its notes." },
        { caption: "What if the Bank pushed out extra notes? Marx says any note nobody needs simply comes straight back to the bank." },
        { caption: "So it is trade that decides how many notes are out, not the bank. But in a scare, one banker said, the country wants twice as much." },
        {
          caption: "And just then, the law of 1844 forced the Bank to hold back notes. Everyone cried out for money and could not get it. Marx: the credit system suddenly turns into a money system.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const need = s >= 2 ? 40 : 20;
        const out = s === 1 ? 26 : s === 3 ? 16 : 20;
        return (
          <>
            {/* the Bank */}
            <g transform="translate(52 120)">
              <path d="M-38,-30 L0,-52 L38,-30 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
              <rect x="-34" y="-30" width="68" height="44" fill="#fff" stroke="#000" strokeWidth="1.2" />
              {[-22, -8, 8, 22].map((x) => (
                <rect key={x} x={x - 3} y="-26" width="6" height="36" fill="#e8e8e8" stroke="#000" strokeWidth=".6" />
              ))}
              <text y="28" textAnchor="middle" fontSize="9">
                Bank of England
              </text>
            </g>

            {/* what the public needs */}
            <text x={BAR_X} y="60" fontSize="9.5">
              notes the public needs
            </text>
            <rect x={BAR_X} y="66" width={need * UNIT} height="18" fill="#000" fillOpacity=".12" stroke="#000" strokeDasharray="4 3" style={{ transition: `width ${T}` }} />
            <text x={BAR_X + need * UNIT - 4} y="79" textAnchor="end" fontSize="10" fontWeight="700" style={{ transition: `x ${T}` }}>
              £{need}m
            </text>

            {/* what is actually out */}
            <text x={BAR_X} y="112" fontSize="9.5">
              notes actually out
            </text>
            <rect x={BAR_X} y="118" width={out * UNIT} height="18" fill={GOLD} style={{ transition: `width ${T}` }} />
            <text x={BAR_X + out * UNIT + 4} y="131" fontSize="10" fontWeight="700" style={{ transition: `x ${T}` }}>
              £{out}m
            </text>

            {/* spare notes come home */}
            <Fade show={s === 1}>
              <path d={`M${BAR_X + 22 * UNIT},150 Q${BAR_X + 60},178 ${92},140`} fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#v3c33-arr)" />
              <text x="230" y="168" fontSize="9.5">
                spare notes flow back
              </text>
            </Fade>
            <defs>
              <marker id="v3c33-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>

            <Fade show={s >= 2}>
              <text x="180" y="196" textAnchor="middle" fontSize="10">
                &ldquo;the country requires twice as much&rdquo;
              </text>
            </Fade>
            <Fade show={s === 3} delay={300}>
              <rect x={BAR_X + out * UNIT} y="118" width={Math.max(0, need - out) * UNIT} height="18" fill="#d6452f" fillOpacity=".25" />
              <text x={BAR_X + ((out + need) / 2) * UNIT} y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#d6452f">
                the gap
              </text>
              <rect x="70" y="204" width="220" height="15" fill="#000" />
              <text x="180" y="215" textAnchor="middle" fontSize="9" fill="#fff">
                1844 law: hold notes back
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
