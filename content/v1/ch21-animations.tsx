"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade, Place } from "@/components/anim/Things";
import { TONE, Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 21.1 · Paid by the spool
 * Marx's numbers: 24 pieces in 12 hours, each worth 3d. of new value;
 * the worker gets 1½d. a piece, so 3s. a day. Half of each piece is paid.
 * ───────────────────────────────────────────────────────────── */
const SPOOL = { x0: 36, dx: 26, row1: 52, row2: 84 };
const spoolAt = (i: number): [number, number] => [SPOOL.x0 + (i % 12) * SPOOL.dx, i < 12 ? SPOOL.row1 : SPOOL.row2];

export function PaidBySpool() {
  return (
    <Player
      id="anim-21-1"
      title="21.1 · Paid by the spool"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Mr. Moneybags has a new idea: pay Sam for every spool of yarn instead of every hour. In a 12-hour day, Sam spins 24 spools." },
        { caption: "Each spool takes half an hour of work, and adds 3 pennies of new value." },
        { caption: "Sam's rate is 1½ pennies a spool. 24 spools × 1½ pennies = 36 pennies: exactly his old 3 coins." },
        {
          caption: "So nothing changed underneath. The first 12 spools pay Sam's wage; the other 12 are surplus-value. Marx says piece-wages are just time-wages in a new coat.",
          ms: 5200,
        },
        {
          caption: "But the boss gains something. A spool that is not up to standard is not paid at all. The wage itself now checks Sam's speed and quality, so less watching is needed.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="30" y="30" fontSize="10" fontWeight="600">
            Sam&apos;s spools today: 24
          </text>
          {Array.from({ length: 24 }, (_, i) => {
            const [x, y] = spoolAt(i);
            const fill = s >= 3 ? (i < 12 ? "#7fc79f" : TONE.surplus) : "#f3e3b3";
            const bad = s === 4 && i === 7;
            return (
              <g key={i}>
                <Place x={x} y={y} scale={0.72} delay={s === 0 ? i * 40 : 0}>
                  <g style={{ opacity: bad ? 0.35 : 1, transition: "opacity 400ms" }}>
                    <Yarn fill={fill} />
                  </g>
                </Place>
                {bad && (
                  <g transform={`translate(${x} ${y})`}>
                    <Cross />
                  </g>
                )}
              </g>
            );
          })}

          <Fade show={s === 1}>
            <text x="180" y="124" textAnchor="middle" fontSize="11">
              1 spool = half an hour = <tspan fontWeight="700">3 pennies</tspan> of new value
            </text>
          </Fade>
          <Fade show={s === 2}>
            <text x="180" y="124" textAnchor="middle" fontSize="11">
              24 &times; 1&frac12;p = <tspan fontWeight="700">36p = 3 coins</tspan>
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <text x="180" y="124" textAnchor="middle" fontSize="10.5">
              <tspan fill="#1f7a46" fontWeight="700">12 pay the wage</tspan>
              {"  ·  "}
              <tspan fill="#8a6d00" fontWeight="700">12 are surplus</tspan>
            </text>
          </Fade>
          <Fade show={s === 4}>
            <text x={spoolAt(7)[0]} y={spoolAt(7)[1] - 16} textAnchor="middle" fontSize="8.5" fill="#d6452f">
              not paid
            </text>
          </Fade>

          <Figure who="sam" x={90} y={212} scale={0.72} mood={s === 4 ? "sad" : "happy"} />
          <Figure who="moneybags" x={270} y={212} scale={0.72} />
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.2 · The middleman's cut (the sweating system)
 * Marx: the middleman's gain "comes entirely from the difference"
 * between what the capitalist pays and what reaches the worker. In
 * London tailoring a waistcoat was reckoned as "an hour" at 6d.
 * The 4p that reaches Ava is an example number.
 * ───────────────────────────────────────────────────────────── */
const Waistcoat = () => (
  <g>
    <path
      d="M-10,-16 L-3,-16 L0,-8 L3,-16 L10,-16 L14,14 L2,16 L0,4 L-2,16 L-14,14 Z"
      fill={CAST.ava.color}
      stroke="#000"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <circle cx="-2" cy="-2" r="1.2" fill="#000" />
    <circle cx="-2" cy="5" r="1.2" fill="#000" />
  </g>
);

function Pennies({ n, label }: { n: number; label: string }) {
  return (
    <g>
      <rect x="-22" y="-12" width="44" height="24" rx="12" fill="#e6b800" stroke="#000" />
      <text y="4" textAnchor="middle" fontSize="11" fontWeight="700">
        {n}p
      </text>
      <text y="26" textAnchor="middle" fontSize="8.5">
        {label}
      </text>
    </g>
  );
}

export function TheMiddlemansCut() {
  return (
    <Player
      id="anim-21-2"
      title="21.2 · The middleman's cut"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Mr. Moneybags now sells waistcoats too. He pays 6 pennies for every waistcoat sewn. In London's big tailoring shops, Marx says, a waistcoat was even called “an hour”." },
        { caption: "But he doesn't hire Ava himself. A middleman, Mr. Grabb, takes the work and hands it out to Ava, who sews at home." },
        { caption: "Mr. Grabb pays Ava only 4 pennies a waistcoat and keeps 2. Marx says the middleman's whole gain comes from that gap." },
        { caption: "To earn enough, Ava sews late into the night. In England this was called the sweating system." },
        {
          caption: "Sometimes the boss pays a head worker by the piece, and the head worker hires and pays his own helpers. Then, Marx says, workers end up squeezing other workers for the boss.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="moneybags" x={50} y={208} scale={0.8} />
          <Figure name={s === 4 ? "head worker" : "Mr. Grabb"} x={180} y={208} scale={0.8} style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 500ms" }} />
          <Figure who="ava" x={310} y={208} scale={0.8} mood={s === 3 ? "sleepy" : "happy"} style={{ opacity: s >= 1 && s <= 3 ? 1 : 0, transition: "opacity 500ms" }} />

          {/* the waistcoat travels down the chain */}
          <Place x={s === 0 ? 50 : s >= 1 && s <= 3 ? 310 : 180} y={118} scale={1.2}>
            <Waistcoat />
          </Place>

          <Place x={s === 0 ? 50 : 180} y={56} show={s <= 1}>
            <Pennies n={6} label="paid per waistcoat" />
          </Place>
          <Fade show={s >= 2 && s <= 3} delay={300}>
            <g transform="translate(310 56)">
              <Pennies n={4} label="reaches Ava" />
            </g>
            <g transform="translate(180 56)">
              <Pennies n={2} label="Grabb keeps" />
            </g>
          </Fade>

          <Fade show={s >= 1 && s <= 3}>
            <path d="M75,170 L150,170" stroke="#000" strokeOpacity=".3" markerEnd="url(#c21arr)" />
            <path d="M205,170 L280,170" stroke="#000" strokeOpacity=".3" markerEnd="url(#c21arr)" />
          </Fade>
          <defs>
            <marker id="c21arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" fillOpacity=".4" />
            </marker>
          </defs>

          {/* night work at home */}
          <Fade show={s === 3}>
            <g transform="translate(252 108)">
              <path d="M0,-10 a10,10 0 1,0 8,16 a8,8 0 1,1 -8,-16" fill="#e8d36a" stroke="#000" strokeWidth=".8" />
            </g>
            <text x="310" y="152" textAnchor="middle" fontSize="9" fontWeight="600">
              sewing at midnight
            </text>
          </Fade>

          {/* the head worker and his helpers */}
          <Fade show={s === 4} delay={300}>
            <Figure name="helper" x={260} y={208} scale={0.65} mood="sad" />
            <Figure name="helper" x={320} y={208} scale={0.65} mood="sad" />
            <text x="290" y="128" textAnchor="middle" fontSize="9" fontWeight="600">
              hired and paid by
            </text>
            <text x="290" y="140" textAnchor="middle" fontSize="9" fontWeight="600">
              the head worker
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.3 · Faster hands, smaller rates
 * Marx: when productivity doubles, 48 pieces instead of 24, the piece
 * rate falls from 1½d. to ¾d. and the day's wage stays 3s. Piece-work
 * also pushes up the normal intensity of labour. 28 spools is an example.
 * ───────────────────────────────────────────────────────────── */
const STEPS21 = [
  { n: 24, rate: "1½", total: 36, norm: 24 },
  { n: 28, rate: "1½", total: 42, norm: 24 },
  { n: 28, rate: "1½", total: 42, norm: 28 },
  { n: 48, rate: "¾", total: 36, norm: 48 },
  { n: 48, rate: "¾", total: 36, norm: 48 },
];
const PX_SPOOL = 6;

export function FasterHandsSmallerRates() {
  return (
    <Player
      id="anim-21-3"
      title="21.3 · Faster hands, smaller rates"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Sam spins 24 spools a day at 1½ pennies each: 36 pennies." },
        { caption: "Paid by the spool, Sam pushes himself to earn more. He manages 28 spools: 42 pennies. Now it is in his own interest to work as hard as he can." },
        { caption: "But when everyone pushes, the faster pace soon counts as the normal pace. Marx says piece-work makes it easier for the boss to raise how hard everyone works." },
        {
          caption: "Then a new machine doubles the output: 48 spools a day. Mr. Moneybags cuts the rate to ¾ of a penny. 48 × ¾ = 36 pennies. Twice the yarn, the same pay.",
          ms: 5600,
        },
        {
          caption: "Workers who believe they are paid for what they make get angry: why cut our rate? Marx says this sparks endless battles. Where a piece rate was old and hard to cut, some masters switched to time-wages instead, as in the Coventry ribbon-weavers' strike of 1860.",
          ms: 6600,
        },
      ]}
    >
      {(s) => {
        const st = STEPS21[s];
        return (
          <>
            <text x="30" y="30" fontSize="10" fontWeight="600">
              spools a day
            </text>
            <rect x="30" y="40" width={st.n * PX_SPOOL} height="22" fill="#f3e3b3" stroke="#000" style={{ transition: `width ${T}` }} />
            <text x={36 + st.n * PX_SPOOL} y="56" fontSize="10" fontWeight="600" style={{ transition: `x ${T}` }}>
              {st.n}
            </text>
            {/* what counts as normal */}
            <line
              x1={30 + st.norm * PX_SPOOL}
              y1="34"
              x2={30 + st.norm * PX_SPOOL}
              y2="72"
              stroke="#d6452f"
              strokeWidth="2"
              strokeDasharray="4 3"
              style={{ transition: `all ${T}` }}
            />
            <text x={30 + st.norm * PX_SPOOL} y="84" textAnchor="middle" fontSize="8.5" fill="#d6452f" style={{ transition: `x ${T}` }}>
              normal
            </text>

            <text x="180" y="122" textAnchor="middle" fontSize="16">
              {st.n} &times; {st.rate}p = <tspan fontWeight="700">{st.total}p</tspan>
            </text>
            <text x="180" y="140" textAnchor="middle" fontSize="9.5" fillOpacity=".6">
              spools &times; rate = Sam&apos;s day
            </text>

            <Figure who="sam" x={110} y={212} scale={0.72} mood={s === 4 ? "sad" : s === 1 ? "wow" : "happy"} />
            <Figure who="moneybags" x={270} y={212} scale={0.72} />

            <Fade show={s === 3}>
              <g transform="translate(205 168)">
                <rect x="-24" y="-14" width="48" height="26" fill="#fff" stroke="#000" />
                <circle cx="-10" cy="-1" r="7" fill="none" stroke="#000" className="spin-gear" />
                <circle cx="8" cy="-1" r="5" fill="none" stroke="#000" className="spin-gear" />
              </g>
            </Fade>
            <Fade show={s === 4} delay={200}>
              <g transform="translate(190 172)">
                <rect x="-40" y="-14" width="80" height="22" fill="#fff" stroke="#000" />
                <text y="1" textAnchor="middle" fontSize="9" fontWeight="600">
                  why cut our rate?
                </text>
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
