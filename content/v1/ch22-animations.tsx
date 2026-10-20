"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade } from "@/components/anim/Things";
import { TONE, Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A row of coins that can end in a half coin, e.g. 1.5. */
function CoinRow({ n }: { n: number }) {
  const whole = Math.floor(n);
  const half = n - whole >= 0.5;
  return (
    <g>
      {Array.from({ length: whole }, (_, i) => (
        <g key={i} transform={`translate(${i * 12} 0)`}>
          <Coin r={5.5} />
        </g>
      ))}
      {half && (
        <g transform={`translate(${whole * 12} 0)`}>
          <path d="M0,-5.5 A5.5,5.5 0 0 0 0,5.5 Z" fill="#e6b800" stroke="#000" strokeWidth="1" />
        </g>
      )}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 22.1 · Cheap wages, dear yarn
 * Made-up numbers in the spirit of Marx's Oldenburg example: wages
 * there were "in many cases 50%" lower and the day ran from 5.30 a.m.
 * to 8 p.m., yet less was made than in England in 10 hours.
 * ───────────────────────────────────────────────────────────── */
const SIDES = [
  { x: 0, place: "Tiny Town", who: "sam" as const, name: undefined, wage: 3, hours: 12, lbs: 20, skeins: 4, perLb: "0.15" },
  { x: 180, place: "Far Valley", who: undefined, name: "Jan", wage: 1.5, hours: 14, lbs: 5, skeins: 1, perLb: "0.30" },
];

export function CheapWagesDearYarn() {
  return (
    <Player
      id="anim-22-1"
      title="22.1 · Cheap wages, dear yarn"
      viewBox="0 0 360 232"
      steps={[
        { caption: "Sam earns 3 coins a day. Far away, in Far Valley, a spinner called Jan earns only 1½ coins. Mr. Moneybags thinks: Far Valley must be the cheaper place to spin!" },
        { caption: "Jan also works longer: 14 hours a day to Sam's 12. Surely that makes Far Valley cheaper still?" },
        { caption: "Now look at what each one makes. Sam minds a big machine with many spindles and spins 20 pounds of yarn. Jan, with a few old spindles, spins 5." },
        { caption: "Divide the wage by the yarn. Sam's wage costs 0.15 coin for each pound. Jan's costs 0.30. For the boss, Jan's yarn is twice as dear!", ms: 4400 },
        {
          caption: "An English factory commissioner found the same in 1833: wages in England were “virtually lower to the capitalist, though higher to the operative”. Higher pay for the worker, cheaper labour for the boss. (Our numbers are made up to show the idea.)",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="180" y1="10" x2="180" y2="182" stroke="#000" strokeOpacity=".12" />
          {SIDES.map((d) => (
            <g key={d.place} transform={`translate(${d.x} 0)`}>
              <text x="90" y="22" textAnchor="middle" fontSize="12" fontWeight="600">
                {d.place}
              </text>
              <Figure who={d.who} name={d.name} x={30} y={128} scale={0.8} mood={s === 3 && !d.who ? "sad" : "happy"} />

              {/* wage */}
              <text x="62" y="49" fontSize="9" fillOpacity=".55">
                wage
              </text>
              <g transform="translate(92 46)">
                <CoinRow n={d.wage} />
              </g>
              <text x="92" y="64" fontSize="9">
                {d.wage === 3 ? "3" : "1½"} coins a day
              </text>

              {/* hours */}
              <Fade show={s >= 1}>
                <text x="62" y="86" fontSize="9" fillOpacity=".55">
                  hours
                </text>
                <rect x="92" y="78" height="10" width={s >= 1 ? d.hours * 4.5 : 0} fill="#bbb" stroke="#000" strokeWidth=".8" style={{ transition: `width ${T}` }} />
                <text x={96 + d.hours * 4.5} y="87" fontSize="9">
                  {d.hours} h
                </text>
              </Fade>

              {/* yarn */}
              <Fade show={s >= 2}>
                <text x="62" y="112" fontSize="9" fillOpacity=".55">
                  yarn
                </text>
                {Array.from({ length: d.skeins }, (_, i) => (
                  <g key={i} transform={`translate(${102 + i * 17} 108) scale(.55)`}>
                    <Yarn />
                  </g>
                ))}
                <text x="92" y="128" fontSize="9">
                  {d.lbs} lb a day
                </text>
              </Fade>

              {/* wage cost per pound */}
              <Fade show={s >= 3} delay={200}>
                <text x="90" y="152" textAnchor="middle" fontSize="9" fillOpacity=".6">
                  {d.wage === 3 ? "3" : "1½"} coins ÷ {d.lbs} lb =
                </text>
                <text
                  x="90"
                  y="172"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill={d.who ? CAST.sam.color : "#d6452f"}
                >
                  {d.perLb} coin a pound
                </text>
              </Fade>
            </g>
          ))}

          <Fade show={s === 4} delay={300}>
            <rect x="20" y="192" width="320" height="30" fill="#000" />
            <text x="180" y="211" textAnchor="middle" fontSize="10.5" fill="#fff">
              higher for the worker, lower for the boss
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 22.2 · Spindles per spinner
 * Marx's own table, from Factory Inspector Redgrave's report of
 * 31 October 1866: average number of spindles per person employed.
 * ───────────────────────────────────────────────────────────── */
const TABLE = [
  { land: "France", n: 14, at: 0 },
  { land: "Russia", n: 28, at: 1 },
  { land: "Prussia", n: 37, at: 1 },
  { land: "Austria", n: 49, at: 2 },
  { land: "Switzerland", n: 55, at: 2 },
  { land: "Great Britain", n: 74, at: 3 },
];
const PX = 3.1;
const X0 = 92;

export function SpindlesPerSpinner() {
  return (
    <Player
      id="anim-22-2"
      title="22.2 · Spindles per spinner"
      viewBox="0 0 360 236"
      steps={[
        { caption: "Marx printed a table from an English factory inspector, Alexander Redgrave, in 1866. It counts how many spindles one person looked after. In France: 14." },
        { caption: "In Russia, 28. In Prussia, 37." },
        { caption: "In Austria, 49. In Switzerland, 55." },
        { caption: "In Great Britain, 74: five times as many as in France. The same hours of work turn far more cotton into yarn." },
        { caption: "Redgrave even knew English mills where one man and two helpers minded 2,200 spindles and turned out 220 pounds of yarn a day.", ms: 4400 },
        {
          caption: "Marx's point: on the world market, more productive work counts like more intense work, so it makes more value in the same hours. That is how wages can be higher in Britain while labour there is cheaper for the boss.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="180" y="16" textAnchor="middle" fontSize="10" fontWeight="600">
            spindles minded by one person
          </text>
          {TABLE.map((r, i) => {
            const y = 30 + i * 22;
            const on = s >= r.at;
            const uk = r.land === "Great Britain";
            return (
              <g key={r.land} style={{ opacity: on ? 1 : 0.15, transition: "opacity 500ms" }}>
                <text x={X0 - 6} y={y + 11} textAnchor="end" fontSize="10" fontWeight={uk ? 700 : 400}>
                  {r.land}
                </text>
                <rect
                  x={X0}
                  y={y}
                  height="14"
                  width={on ? r.n * PX : 0}
                  fill={uk ? TONE.surplus : "#bbb"}
                  stroke="#000"
                  strokeWidth=".8"
                  style={{ transition: `width ${T}` }}
                />
                <text x={X0 + r.n * PX + 5} y={y + 11} fontSize="10" fontWeight={uk ? 700 : 400} style={{ opacity: on ? 1 : 0, transition: "opacity 400ms 400ms" }}>
                  {r.n}
                </text>
              </g>
            );
          })}

          {/* the giant English mule */}
          <Fade show={s >= 4}>
            <g transform="translate(20 168)">
              <rect width="196" height="22" fill="#fff" stroke="#000" />
              {Array.from({ length: 38 }, (_, i) => (
                <line key={i} x1={6 + i * 5} y1="4" x2={6 + i * 5} y2="18" stroke="#6b4a2b" strokeWidth="1" />
              ))}
              <text x="98" y="36" textAnchor="middle" fontSize="9">
                a mule: 2,200 spindles
              </text>
            </g>
            <Figure name="minder" x={248} y={204} scale={0.55} label={false} />
            <Figure name="helper" x={272} y={204} scale={0.45} label={false} />
            <Figure name="helper" x={292} y={204} scale={0.45} label={false} />
            <text x="270" y="216" textAnchor="middle" fontSize="8.5">
              1 man + 2 helpers
            </text>
            <g transform="translate(330 186) scale(.7)">
              <Yarn />
            </g>
            <text x="330" y="216" textAnchor="middle" fontSize="8.5" fontWeight="600">
              220 lb
            </text>
          </Fade>

          <Fade show={s === 5} delay={300}>
            <rect x="0" y="222" width="360" height="14" fill="#000" />
            <text x="180" y="232" textAnchor="middle" fontSize="8.5" fill="#fff">
              more productive work = more value in the same hours, on the world market
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
