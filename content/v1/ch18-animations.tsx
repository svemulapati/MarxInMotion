"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const SAM = CAST.sam.color;
const GOLD = "#e6b800";
const PER_HOUR = 25;
const X0 = 30;

/* ─────────────────────────────────────────────────────────────
 * 18.1 · Two ways to measure
 * Marx's numbers: 6 h surplus / 6 h necessary = 100%, but
 * 6 h surplus / 12 h day = 50%. Lavergne's farmhand keeps 1/4: 300%.
 * ───────────────────────────────────────────────────────────── */
const MEASURE = [
  { nec: 6, top: "Sam's 12-hour day" },
  { nec: 6, top: "Marx's way" },
  { nec: 6, top: "the old way" },
  { nec: 3, top: "a farmhand who keeps a quarter" },
  { nec: 1, top: "squeeze Sam's own part to 1 hour" },
];

const pct = (a: number, b: number) => `${Math.round((a / b) * 100)}%`;

function Formula({ x, title, top, bottom, result, show, accent }: { x: number; title: string; top: string; bottom: string; result: string; show: boolean; accent: string }) {
  return (
    <Fade show={show}>
      <g transform={`translate(${x} 128)`}>
        <rect width="150" height="80" fill="#fff" stroke={accent} strokeWidth="1.5" />
        <text x="75" y="15" textAnchor="middle" fontSize="9" fontWeight="600" fill={accent}>
          {title}
        </text>
        <text x="45" y="38" textAnchor="middle" fontSize="10">
          {top}
        </text>
        <line x1="10" y1="43" x2="80" y2="43" stroke="#000" />
        <text x="45" y="57" textAnchor="middle" fontSize="10">
          {bottom}
        </text>
        <text x="118" y="52" textAnchor="middle" fontSize="20" fontWeight="600">
          {result}
        </text>
      </g>
    </Fade>
  );
}

export function TwoWaysToMeasure() {
  return (
    <Player
      id="anim-18-1"
      title="18.1 · Two ways to measure"
      viewBox="0 0 360 232"
      steps={[
        { caption: "Sam works 12 hours: 6 hours to make the value of his wage, and 6 hours of surplus-labour for Mr. Moneybags." },
        { caption: "Marx compares the surplus hours with the hours Sam works for himself: 6 ÷ 6. Sam works as long for Moneybags as for himself, a rate of 100%." },
        { caption: "Older economists compared the surplus hours with the whole day instead: 6 ÷ 12 = 50%. Same day, but the number looks only half as big.", ms: 4400 },
        { caption: "A French economist, Lavergne, guessed that English farmhands kept only a quarter of what they made. The old way says 75%. Marx's way says 300%: three hours for the farmer for every one for themselves.", ms: 5600 },
        {
          caption: "Squeeze the worker's own part down to 1 hour, and Marx's way says 1100%. The old way still says under 100%, because the surplus is always only part of the day. That is why it hides how big the share really is.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const { nec } = MEASURE[s];
        const sur = 12 - nec;
        return (
          <>
            {MEASURE.map((m, i) => (
              <Fade key={i} show={s === i} delay={200}>
                <text x="180" y="26" textAnchor="middle" fontSize="11" fontWeight="600">
                  {m.top}
                </text>
              </Fade>
            ))}

            {/* the day */}
            <rect x={X0} y="44" width={nec * PER_HOUR} height="26" fill={SAM} style={{ transition: `all ${T}` }} />
            <rect x={X0 + nec * PER_HOUR} y="44" width={sur * PER_HOUR} height="26" fill={GOLD} style={{ transition: `all ${T}` }} />
            <text x={X0 + (nec * PER_HOUR) / 2} y="61" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600" style={{ transition: `x ${T}` }}>
              {nec} h
            </text>
            <text x={X0 + nec * PER_HOUR + (sur * PER_HOUR) / 2} y="61" textAnchor="middle" fontSize="9" fontWeight="600" style={{ transition: `x ${T}` }}>
              {sur} h surplus
            </text>
            {/* brackets: what each formula divides by */}
            <Fade show={s >= 1}>
              <path d={`M${X0},80 v6 h${nec * PER_HOUR} v-6`} fill="none" stroke={SAM} strokeWidth="1.5" style={{ transition: `d ${T}` }} />
              <text x={X0 + 2} y="98" fontSize="8.5" fill={SAM}>
                Sam&apos;s own hours
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <path d={`M${X0},104 v6 h${12 * PER_HOUR} v-6`} fill="none" stroke="#555" strokeWidth="1.5" />
              <text x={X0 + 12 * PER_HOUR} y="121" textAnchor="end" fontSize="8.5" fill="#555">
                the whole day
              </text>
            </Fade>

            <Formula
              x={14}
              title="Marx: surplus ÷ Sam's own"
              top={`${sur} h`}
              bottom={`${nec} h`}
              result={pct(sur, nec)}
              show={s >= 1}
              accent={SAM}
            />
            <Formula x={196} title="old way: surplus ÷ whole day" top={`${sur} h`} bottom="12 h" result={pct(sur, 12)} show={s >= 2} accent="#555" />
            <Fade show={s === 4} delay={500}>
              <text x="271" y="223" textAnchor="middle" fontSize="9" fill="#d6452f" fontWeight="600">
                can never reach 100%
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 18.2 · Paid and unpaid
 * Formula III: surplus-labour / necessary labour = unpaid / paid labour;
 * all surplus-value, later split into profit, interest and rent, is unpaid labour.
 * ───────────────────────────────────────────────────────────── */
const C = { x: 92, y: 104, r: 64 };
function wedge(fromHour: number, toHour: number) {
  const a = (h: number) => ((h * 30 - 90) * Math.PI) / 180;
  const p = (h: number) => `${(C.x + C.r * Math.cos(a(h))).toFixed(1)},${(C.y + C.r * Math.sin(a(h))).toFixed(1)}`;
  const large = toHour - fromHour > 6 ? 1 : 0;
  return `M${C.x},${C.y} L${p(fromHour)} A${C.r},${C.r} 0 ${large} 1 ${p(toHour)} Z`;
}

export function PaidAndUnpaid() {
  return (
    <Player
      id="anim-18-2"
      title="18.2 · Paid and unpaid"
      steps={[
        { caption: "Here is Sam's 12-hour day as a clock. Watch what each half of it makes." },
        { caption: "In the first 6 hours, Sam makes 3 coins of new value, exactly what his wage is worth. Marx calls this the paid part of the day." },
        { caption: "In the next 6 hours, Sam makes 3 more coins. They go to Mr. Moneybags and cost him nothing. Marx calls this unpaid labour." },
        {
          caption: "Careful: Mr. Moneybags did not cheat on the wage. He paid the full value of Sam's labour-power. The unpaid part comes from using it for longer than it takes to replace its value.",
          ms: 5400,
        },
        {
          caption: "Later the unpaid part gets shared out: profit for Mr. Moneybags, interest for Bea the banker, rent for Grandpa Ned. Marx says all of it is, at bottom, unpaid labour.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const hand = s === 0 ? 0 : s === 1 ? 180 : 360;
        return (
          <>
            {/* the clock */}
            <circle cx={C.x} cy={C.y} r={C.r} fill="#fff" stroke="#000" strokeWidth="1.5" />
            <path d={wedge(0, 6)} fill={SAM} style={{ opacity: s >= 1 ? 0.85 : 0, transition: "opacity 600ms" }} />
            <path d={wedge(6, 12)} fill={GOLD} style={{ opacity: s >= 2 ? 0.9 : 0, transition: "opacity 600ms" }} />
            {Array.from({ length: 12 }, (_, i) => {
              const a = ((i * 30 - 90) * Math.PI) / 180;
              return (
                <text
                  key={i}
                  x={C.x + (C.r - 10) * Math.cos(a)}
                  y={C.y + (C.r - 10) * Math.sin(a) + 3}
                  textAnchor="middle"
                  fontSize="8"
                  fill={(i >= 1 && i <= 5 && s >= 1) || (i >= 7 && s >= 2) ? "#fff" : "#000"}
                >
                  {i === 0 ? 12 : i}
                </text>
              );
            })}
            <line
              x1={C.x}
              y1={C.y}
              x2={C.x}
              y2={C.y - C.r + 14}
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ transform: `rotate(${hand}deg)`, transformOrigin: `${C.x}px ${C.y}px`, transition: "transform 1400ms ease-in-out" }}
            />
            <circle cx={C.x} cy={C.y} r="3.5" fill="#000" />
            <Fade show={s >= 1}>
              <text x={C.x + 20} y={C.y + C.r + 16} textAnchor="middle" fontSize="9" fill={SAM} fontWeight="600">
                paid: 6 h
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x={C.x - 20} y={C.y - C.r - 6} textAnchor="middle" fontSize="9" fill="#8a6d00" fontWeight="600">
                unpaid: 6 h
              </text>
            </Fade>

            {/* who gets what */}
            <Figure who="sam" x={225} y={200} scale={0.8} style={{ opacity: s <= 3 ? 1 : 0, transition: "opacity 500ms" }} />
            <Figure who="moneybags" x={s === 4 ? 205 : 310} y={200} scale={0.8} />
            <Figure who="bea" x={265} y={200} scale={0.8} style={{ opacity: s === 4 ? 1 : 0, transition: "opacity 500ms" }} />
            <Figure who="ned" x={325} y={200} scale={0.8} style={{ opacity: s === 4 ? 1 : 0, transition: "opacity 500ms" }} />

            <Fade show={s >= 1 && s <= 3}>
              <g transform="translate(225 92)">
                <Coins n={3} />
              </g>
              <text x="225" y="76" textAnchor="middle" fontSize="8.5">
                worth the wage
              </text>
            </Fade>
            <Fade show={s >= 2 && s <= 3}>
              <g transform="translate(310 92)">
                <Coins n={3} />
              </g>
              <text x="310" y="76" textAnchor="middle" fontSize="8.5">
                costs him nothing
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="268" y="30" textAnchor="middle" fontSize="9.5" fontWeight="600">
                the wage was fair
              </text>
              <text x="268" y="44" textAnchor="middle" fontSize="9">
                the extra comes from the extra hours
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              {[
                { x: 205, t: "profit" },
                { x: 265, t: "interest" },
                { x: 325, t: "rent" },
              ].map((r) => (
                <g key={r.t}>
                  <text x={r.x} y="112" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#8a6d00">
                    {r.t}
                  </text>
                  <g transform={`translate(${r.x} 92)`}>
                    <Coins n={1} />
                  </g>
                </g>
              ))}
              <text x="265" y="44" textAnchor="middle" fontSize="9.5" fontWeight="600">
                all from the unpaid part
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
