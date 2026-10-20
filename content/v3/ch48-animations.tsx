"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade } from "@/components/anim/Things";
import { Spindle, TONE } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

/* ─────────────────────────────────────────────────────────────
 * Part VII drawings, shared by Volume III, Chapters 48 to 52.
 * The four incomes keep the same colour everywhere.
 * ───────────────────────────────────────────────────────────── */

export const INCOME = {
  wages: TONE.wage,
  profit: CAST.moneybags.color,
  interest: CAST.bea.color,
  rent: "#9a9a9a",
};

/** A small rented field: green strip with furrows. */
export const Field = ({ w = 48 }: { w?: number }) => (
  <g>
    <rect x={-w / 2} y={-9} width={w} height={18} fill="#cfe3b8" stroke="#000" strokeWidth="1" />
    {[-0.3, 0, 0.3].map((k) => (
      <line key={k} x1={-w / 2 + 4} y1={k * 18} x2={w / 2 - 4} y2={k * 18} stroke="#6b8f3a" strokeWidth="1" />
    ))}
  </g>
);

/** A stack of coins standing for "capital": money that seems to breed. */
export const MoneyPile = () => (
  <g>
    {[0, 1, 2, 3].map((i) => (
      <ellipse key={i} cx="0" cy={-i * 5} rx="14" ry="4.5" fill="#e6b800" stroke="#000" strokeWidth="1" />
    ))}
  </g>
);

/** Coins that keep rising from a source, like water from a spring. */
function Spring({ x, y, h, on, color }: { x: number; y: number; h: number; on: boolean; color: string }) {
  return (
    <g style={{ opacity: on ? 1 : 0, transition: "opacity 500ms" }}>
      <line x1={x} y1={y} x2={x} y2={y - h} stroke={color} strokeWidth="2" strokeDasharray="3 4" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <g className="v3c48-rise" style={{ animationDelay: `${i * 600}ms`, ["--h" as string]: `-${h}px` }}>
            <Coin r={5} />
          </g>
        </g>
      ))}
    </g>
  );
}

const KEYFRAMES = (
  <style>{`
    @keyframes v3c48-rise {
      from { transform: translateY(0); opacity: 0; }
      15% { opacity: 1; }
      85% { opacity: 1; }
      to { transform: translateY(var(--h)); opacity: 0; }
    }
    .v3c48-rise { animation: v3c48-rise 1.8s linear infinite; }
  `}</style>
);

/* ─────────────────────────────────────────────────────────────
 * 48.1 · Three springs (the trinity formula as it looks)
 * ───────────────────────────────────────────────────────────── */
const COL = { capital: 75, land: 215, labour: 318 };

export function ThreeSprings() {
  return (
    <Player
      id="anim-v3-48-1"
      title="48.1 · Three springs"
      steps={[
        { caption: "The end of the year in Tiny Town. Four people collect their income: profit, interest, rent and wages." },
        { caption: "Mr. Moneybags and Bea look at their money. It seems to grow all by itself, like water from a spring: capital brings profit and interest." },
        { caption: "The Landlord looks at his field. It seems to pay him rent, the way a tree gives apples: land brings rent." },
        { caption: "Sam looks at his week of spinning. It seems he was paid for all of it: labour brings wages." },
        {
          caption: "Three springs, three incomes, each looking natural and separate. Marx calls this the trinity formula: capital, profit; land, rent; labour, wages.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const on = (k: "capital" | "land" | "labour") =>
          s === 0 || s === 4 || (k === "capital" && s === 1) || (k === "land" && s === 2) || (k === "labour" && s === 3);
        const dim = (k: "capital" | "land" | "labour") => ({ opacity: on(k) ? 1 : 0.25, transition: "opacity 500ms" });
        return (
          <>
            {KEYFRAMES}
            <line x1="0" y1="204" x2="360" y2="204" stroke="#000" strokeOpacity=".15" />
            <line x1="148" y1="40" x2="148" y2="200" stroke="#000" strokeOpacity=".1" />
            <line x1="262" y1="40" x2="262" y2="200" stroke="#000" strokeOpacity=".1" />

            {/* capital */}
            <g style={dim("capital")}>
              <Figure who="moneybags" x={28} y={200} scale={0.72} />
              <Figure who="bea" x={122} y={200} scale={0.72} />
              <g transform={`translate(${COL.capital} 192)`}>
                <MoneyPile />
              </g>
              <text x={COL.capital} y="58" textAnchor="middle" fontSize="10" fontWeight="600">
                profit + interest
              </text>
              <text x={COL.capital} y="72" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
                from capital?
              </text>
            </g>
            <Spring x={COL.capital} y={172} h={86} on={on("capital") && s > 0} color={INCOME.profit} />

            {/* land */}
            <g style={dim("land")}>
              <Figure name="Landlord" x={176} y={200} scale={0.72} />
              <g transform={`translate(${COL.land + 10} 192)`}>
                <Field w={44} />
              </g>
              <text x={COL.land} y="58" textAnchor="middle" fontSize="10" fontWeight="600">
                rent
              </text>
              <text x={COL.land} y="72" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
                from land?
              </text>
            </g>
            <Spring x={COL.land + 10} y={176} h={90} on={on("land") && s > 0} color={INCOME.rent} />

            {/* labour */}
            <g style={dim("labour")}>
              <Figure who="sam" x={290} y={200} scale={0.72} />
              <g transform={`translate(${COL.labour + 12} 184) scale(.7)`}>
                <Spindle />
              </g>
              <text x={COL.labour} y="58" textAnchor="middle" fontSize="10" fontWeight="600">
                wages
              </text>
              <text x={COL.labour} y="72" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
                from labour?
              </text>
            </g>
            <Spring x={COL.labour + 12} y={166} h={80} on={on("labour") && s > 0} color={INCOME.wages} />

            <Fade show={s === 4} delay={300}>
              <rect x="80" y="10" width="200" height="26" fill="#000" />
              <text x="180" y="27" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">
                the trinity formula
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 48.2 · One pie, not three springs
 * Workshop numbers (CONTINUITY.md): 12 hours make 6 coins of new value,
 * 3 for Sam's wage, 3 surplus. The three-way split is made up.
 * ───────────────────────────────────────────────────────────── */
const BX = 30;
const UNIT = 50; // px per coin

export function OnePie() {
  return (
    <Player
      id="anim-v3-48-2"
      title="48.2 · One pie, not three springs"
      steps={[
        { caption: "Marx looks behind the springs. All four incomes came out of one thing: Sam's 12-hour day made 6 coins of new value." },
        { caption: "The first half pays Sam's wage, 3 coins. That part really was paid." },
        { caption: "The other half, 3 coins, is the surplus: hours Sam worked and was not paid for." },
        { caption: "Now the surplus pie is cut up. A slice for Bea as interest, a slice for the Landlord as rent, and a slice for Mr. Moneybags as his profit. (The sizes are made up.)", ms: 4800 },
        {
          caption: "So the springs were never three. Profit, interest and rent are slices of one pie: Sam's unpaid labour. The trinity formula hides where they come from.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
            Sam&apos;s 12-hour day: 6 coins of new value
          </text>
          <rect x={BX} y="46" width={6 * UNIT} height="30" fill="#e8e8e8" stroke="#000" />
          {/* wage */}
          <rect x={BX} y="46" width={3 * UNIT} height="30" fill={INCOME.wages} stroke="#000" style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 500ms" }} />
          <Fade show={s >= 1}>
            <text x={BX + 1.5 * UNIT} y="65" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
              wage: 3
            </text>
          </Fade>
          {/* surplus, whole then sliced */}
          <rect
            x={BX + 3 * UNIT}
            y="46"
            width={3 * UNIT}
            height="30"
            fill={TONE.surplus}
            stroke="#000"
            style={{ opacity: s === 2 ? 1 : 0, transition: "opacity 400ms" }}
          />
          <Fade show={s === 2}>
            <text x={BX + 4.5 * UNIT} y="65" textAnchor="middle" fontSize="10" fontWeight="600">
              surplus: 3
            </text>
          </Fade>
          {[
            { label: "interest 1", color: INCOME.interest, i: 0 },
            { label: "rent 1", color: INCOME.rent, i: 1 },
            { label: "profit 1", color: INCOME.profit, i: 2 },
          ].map((p) => (
            <g key={p.label} style={{ opacity: s >= 3 ? 1 : 0, transition: `opacity 500ms ease ${p.i * 250}ms` }}>
              <rect x={BX + (3 + p.i) * UNIT + 2 * p.i} y={46 + (s >= 3 ? 8 : 0)} width={UNIT - 4} height="30" fill={p.color} stroke="#000" style={{ transition: "y 600ms" }} />
              <text x={BX + (3.5 + p.i) * UNIT + 2 * p.i - 2} y={65 + (s >= 3 ? 8 : 0)} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
                {p.label}
              </text>
            </g>
          ))}

          {/* who gets what */}
          <Figure who="sam" x={BX + 1.5 * UNIT} y={196} scale={0.72} />
          <g style={{ opacity: s >= 3 ? 1 : 0.2, transition: "opacity 500ms" }}>
            <Figure who="bea" x={BX + 3.5 * UNIT} y={196} scale={0.72} />
            <Figure name="Landlord" x={BX + 4.5 * UNIT + 2} y={196} scale={0.72} />
            <Figure who="moneybags" x={BX + 5.5 * UNIT + 4} y={196} scale={0.72} />
          </g>
          <Fade show={s >= 3}>
            {[3.5, 4.5, 5.5].map((k, i) => (
              <line key={k} x1={BX + k * UNIT + 2 * i - 2} y1="94" x2={BX + k * UNIT + 2 * i - 2} y2="126" stroke="#000" strokeOpacity=".35" strokeDasharray="3 3" />
            ))}
          </Fade>
          <Fade show={s >= 1}>
            <line x1={BX + 1.5 * UNIT} y1="86" x2={BX + 1.5 * UNIT} y2="126" stroke="#000" strokeOpacity=".35" strokeDasharray="3 3" />
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x={BX + 3 * UNIT - 4} y="40" width={3 * UNIT + 12} height="50" fill="none" stroke="#d6452f" strokeWidth="2" strokeDasharray="5 3" />
            <text x={BX + 4.5 * UNIT} y="106" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#d6452f">
              all from Sam&apos;s unpaid hours
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 48.3 · Necessity and freedom
 * A waking day of 16 hours: hours of necessary work, and free hours.
 * ───────────────────────────────────────────────────────────── */
const DX = 30;
const HOUR = 18.75; // 16 hours across 300px

export function NecessityAndFreedom() {
  return (
    <Player
      id="anim-v3-48-3"
      title="48.3 · Necessity and freedom"
      steps={[
        { caption: "Sam is awake for 16 hours a day. Today 12 of them go on work he must do to live. Marx calls this the realm of necessity." },
        { caption: "Every society has this realm, the first people on earth and us alike. People must always wrestle with nature for food, clothes and shelter." },
        {
          caption: "Marx says freedom here can only mean working together, as associated producers, and running this work wisely: with the least effort, in conditions fit for human beings.",
          ms: 4800,
        },
        { caption: "Beyond it begins the realm of freedom: time for things done for their own sake. Music, learning, play, making things for joy." },
        {
          caption: "And how does that realm grow? Marx answers in one line: the shortening of the working day is its basic prerequisite.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const work = s >= 4 ? 6 : s >= 2 ? 9 : 12;
        const free = 16 - work;
        return (
          <>
            <text x={DX} y="34" fontSize="10" fontWeight="600">
              Sam&apos;s waking day: 16 hours
            </text>
            <rect x={DX} y="44" width={work * HOUR} height="34" fill="#c9a26b" stroke="#000" style={{ transition: "width 700ms cubic-bezier(.2,.8,.2,1)" }} />
            <rect
              x={DX + work * HOUR}
              y="44"
              width={free * HOUR}
              height="34"
              fill="#bfe0f2"
              stroke="#000"
              style={{ transition: "x 700ms cubic-bezier(.2,.8,.2,1), width 700ms cubic-bezier(.2,.8,.2,1)" }}
            />
            <text x={DX + (work * HOUR) / 2} y="65" textAnchor="middle" fontSize="10" fontWeight="600" style={{ transition: "x 700ms" }}>
              necessity: {work} h
            </text>
            <text x={DX + work * HOUR + (free * HOUR) / 2} y="65" textAnchor="middle" fontSize="10" fontWeight="600" style={{ transition: "x 700ms" }}>
              {free >= 4 ? `free: ${free} h` : free}
            </text>

            {/* the field and the work */}
            <Figure who="sam" x={60} y={196} scale={0.75} mood={s <= 1 ? "sleepy" : "happy"} />
            <g transform="translate(110 186)">
              <Field w={60} />
            </g>
            <Fade show={s === 1}>
              <Figure name="long ago" x={170} y={196} scale={0.75} />
              <text x="170" y="120" textAnchor="middle" fontSize="9" fillOpacity=".6">
                same need, every age
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <Figure who="ava" x={160} y={196} scale={0.7} />
              <Figure who="leo" x={190} y={196} scale={0.7} />
            </Fade>
            <Fade show={s === 2 || s === 3}>
              <text x="150" y="112" textAnchor="middle" fontSize="9" fontWeight="600">
                working together, wisely
              </text>
            </Fade>

            {/* the free time */}
            <Fade show={s >= 3}>
              <g transform="translate(250 150)">
                <rect x="-12" y="-9" width="24" height="18" fill="#fff" stroke="#000" />
                <line x1="0" y1="-9" x2="0" y2="9" stroke="#000" />
                <text y="26" textAnchor="middle" fontSize="8">
                  reading
                </text>
              </g>
              <g transform="translate(290 146)">
                <text textAnchor="middle" fontSize="20">
                  ♪
                </text>
                <text y="30" textAnchor="middle" fontSize="8">
                  music
                </text>
              </g>
              <g transform="translate(328 150)">
                <circle r="9" fill="#d6452f" stroke="#000" />
                <text y="26" textAnchor="middle" fontSize="8">
                  play
                </text>
              </g>
            </Fade>
            <Fade show={s === 4} delay={400}>
              <rect x="40" y="88" width="280" height="20" fill="#000" />
              <text x="180" y="102" textAnchor="middle" fontSize="9.5" fill="#fff">
                a shorter working day is the first step
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
