"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Loaf } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const NEED = "#2a9d5b";
const EXTRA = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 10.1 · How long is a working day? (limits, and right against right)
 * A 24-hour bar: 6 hours pay for Sam's wage, the rest is surplus labour.
 * ───────────────────────────────────────────────────────────── */
const BX = 24;
const BW = 312;
const hx = (h: number) => BX + (h / 24) * BW;

export function HowLongIsADay() {
  return (
    <Player
      id="anim-10-1"
      title="10.1 · How long is a working day?"
      steps={[
        { caption: "Sam's day has 24 hours, like everyone's. The question is how many of them belong to Mr. Moneybags." },
        { caption: "In the first 6 hours, Sam makes as much new value as his wage: 3 coins. That part of the day is necessary labour." },
        { caption: "Sam works on until hour 12. Those extra 6 hours make 3 more coins, and they go to Mr. Moneybags. That is surplus labour." },
        { caption: "Mr. Moneybags would like 15 or 18 hours. But a day has limits. Sam must sleep, eat and wash, and he needs time to see his family, rest and learn.", ms: 4800 },
        {
          caption: "So they pull. Moneybags says: I bought your day, I decide how long it is. Sam says: you bought one day, not my whole life. Both rely on the rules of fair swapping. Marx: between equal rights, force decides.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const end = s <= 1 ? 6 : s === 3 ? 15 : 12;
        return (
          <>
            {/* hour ticks */}
            {[0, 6, 12, 18, 24].map((h) => (
              <g key={h}>
                <line x1={hx(h)} y1="58" x2={hx(h)} y2="64" stroke="#000" strokeOpacity=".4" />
                <text x={hx(h)} y="54" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                  {h}h
                </text>
              </g>
            ))}
            <rect x={BX} y="66" width={BW} height="26" fill="#fff" stroke="#000" />

            {/* necessary labour */}
            <rect x={BX} y="66" height="26" width={s >= 1 ? hx(6) - BX : 0} fill={NEED} style={{ transition: `width ${T}` }} />
            {/* surplus labour, stretching */}
            <rect
              x={hx(6)}
              y="66"
              height="26"
              width={s >= 2 ? hx(end) - hx(6) : 0}
              fill={EXTRA}
              style={{ transition: `width ${T}` }}
            />
            <Fade show={s >= 1}>
              <text x={(BX + hx(6)) / 2} y="83" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                wage
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x={(hx(6) + hx(12)) / 2} y="83" textAnchor="middle" fontSize="8.5" fontWeight="600">
                for Moneybags
              </text>
            </Fade>

            {/* the limits of the day: Sam's own time */}
            <Fade show={s === 3}>
              <rect x={hx(15)} y="66" width={hx(24) - hx(15)} height="26" fill="url(#c10-rest)" />
              <text x={(hx(15) + hx(24)) / 2} y="108" textAnchor="middle" fontSize="9" fontWeight="600">
                Sam&apos;s own time
              </text>
              <text x={(hx(15) + hx(24)) / 2} y="121" textAnchor="middle" fontSize="9">
                sleep, food, washing,
              </text>
              <text x={(hx(15) + hx(24)) / 2} y="133" textAnchor="middle" fontSize="9">
                family, rest, learning
              </text>
              <text x={hx(15)} y="40" textAnchor="middle" fontSize="9" fill="#d6452f" fontWeight="600">
                longer and longer?
              </text>
            </Fade>
            <defs>
              <pattern id="c10-rest" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="6" height="6" fill="#bcd0f2" />
                <line x1="0" y1="0" x2="0" y2="6" stroke={CAST.leo.color} strokeWidth="1.5" />
              </pattern>
            </defs>

            {/* the tug of war over where the day ends */}
            <Fade show={s === 4}>
              <line x1={hx(12)} y1="60" x2={hx(12)} y2="100" stroke="#d6452f" strokeWidth="2" />
              <line x1="70" y1="168" x2="290" y2="168" stroke="#8a5a2b" strokeWidth="3" />
              <rect x="175" y="162" width="10" height="12" fill="#d6452f" />
              <text x="180" y="150" textAnchor="middle" fontSize="10" fontWeight="600">
                where does the day end?
              </text>
              <text x="180" y="212" textAnchor="middle" fontSize="10" fontWeight="600">
                right against right
              </text>
            </Fade>
            <Figure who="sam" x={44} y={205} scale={0.8} mood={s === 3 ? "sad" : "happy"} style={{ opacity: s >= 3 ? 1 : 0, transition: "opacity 500ms" }} />
            <Figure who="moneybags" x={316} y={205} scale={0.8} style={{ opacity: s >= 3 ? 1 : 0, transition: "opacity 500ms" }} />
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10.2 · A baker's night (a trade with no legal limit)
 * From the 1862 to 1863 reports on London journeymen bakers that Marx quotes.
 * ───────────────────────────────────────────────────────────── */
/** Hours from 10 p.m. (0) to 7 p.m. the next day (21). */
const TX = 24;
const TW = 312;
const tx = (h: number) => TX + (h / 21) * TW;
const SHIFT = [
  { from: 1, to: 1.75, label: "make the dough", color: "#d99a00" },
  { from: 1.75, to: 3.75, label: "nap on the board", color: "#bcd0f2" },
  { from: 3.75, to: 8.75, label: "bake, fast", color: "#d6452f" },
  { from: 8.75, to: 15, label: "carry the bread round", color: "#8a5a2b" },
];

export function ABakersNight() {
  return (
    <Player
      id="anim-10-2"
      title="10.2 · A baker's night"
      steps={[
        { caption: "In the big city, no law limited a baker's helper's day. His work began at about 11 at night, mixing the dough: heavy work for most of an hour." },
        { caption: "Then he lay down on the kneading board, a sack under him and another for a pillow, and slept for about two hours." },
        { caption: "Next came about five hours of fast work at the oven, in a bakehouse that could be hotter than 30 degrees Celsius." },
        { caption: "When the bread was baked, he carried it round the streets, often until somewhere between 1 and 6 in the afternoon. Then, that night, it began again.", ms: 4600 },
        {
          caption: "The government's own report found these bakers rarely lived to 42. In 1863 a new law banned night baking, but only for helpers under 18. Mia remembers those nights from when she was young.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* night and day */}
          <rect x={TX} y="70" width={tx(8) - TX} height="34" fill="#1d2440" opacity=".12" />
          <text x={tx(0.4)} y="62" fontSize="9" fillOpacity=".6">
            night
          </text>
          <text x={tx(9)} y="62" fontSize="9" fillOpacity=".6">
            day
          </text>
          {[
            [0, "10pm"],
            [2, "12am"],
            [8, "6am"],
            [14, "12pm"],
            [20, "6pm"],
          ].map(([h, l]) => (
            <text key={l} x={tx(h as number)} y="118" textAnchor="middle" fontSize="8" fillOpacity=".55">
              {l}
            </text>
          ))}
          <rect x={TX} y="70" width={TW} height="34" fill="none" stroke="#000" strokeOpacity=".4" />

          {SHIFT.map((p, i) => (
            <g key={p.label}>
              <rect
                x={tx(p.from)}
                y="74"
                height="26"
                width={s >= i ? tx(p.to) - tx(p.from) : 0}
                fill={p.color}
                style={{ transition: `width 900ms ease` }}
              />
              <Fade show={s === i}>
                <text x={Math.min(Math.max((tx(p.from) + tx(p.to)) / 2, 70), 290)} y="140" textAnchor="middle" fontSize="11" fontWeight="600">
                  {p.label}
                </text>
              </Fade>
            </g>
          ))}
          {/* the delivery can run long: anywhere up to 6 p.m. */}
          <Fade show={s >= 3}>
            <rect x={tx(15)} y="74" width={tx(20) - tx(15)} height="26" fill="url(#c10-maybe)" />
          </Fade>
          <defs>
            <pattern id="c10-maybe" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="6" height="6" fill="#fff" />
              <line x1="0" y1="0" x2="0" y2="6" stroke="#8a5a2b" strokeWidth="2" />
            </pattern>
          </defs>

          {/* the oven */}
          <Fade show={s === 2}>
            <g transform="translate(180 30)">
              <text textAnchor="middle" fontSize="11" fill="#d6452f" fontWeight="600">
                hot!
              </text>
            </g>
          </Fade>

          <Figure name="baker's helper" x={60} y={208} scale={0.75} mood={s === 1 ? "sleepy" : s === 4 ? "sad" : "happy"} />
          <g transform="translate(96 190)">
            <Loaf />
          </g>

          <Fade show={s === 4}>
            <text x="230" y="172" textAnchor="middle" fontSize="12" fontWeight="600">
              rarely lived to 42
            </text>
            <text x="230" y="192" textAnchor="middle" fontSize="9.5">
              1863: no night baking for under-18s
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10.3 · The fight over the clock (laws that lengthened, then shortened, the day)
 * ───────────────────────────────────────────────────────────── */
const ERAS = [
  { year: "1349", what: "Statute of Labourers", who: "old laws push the day longer", hours: 15 },
  { year: "1833", what: "First Factory Act", who: "teenagers in mills: 12 hours", hours: 12 },
  { year: "1844", what: "Women added", who: "women over 18: 12 hours", hours: 12 },
  { year: "1847", what: "Ten Hours' Act", who: "teenagers and women: 10 hours", hours: 10 },
  { year: "1850", what: "New Factory Act", who: "10½ hours, 6am to 6pm", hours: 10.5 },
  { year: "1866", what: "Baltimore and Geneva", who: "workers demand 8 hours", hours: 8 },
];
const yx = (i: number) => 36 + i * 57.6;

export function TheFightOverTheClock() {
  return (
    <Player
      id="anim-10-3"
      title="10.3 · The fight over the clock"
      viewBox="0 0 360 230"
      steps={[
        { caption: "For centuries, starting with the Statute of Labourers in 1349, English laws fixed wages by law and pushed working people to work longer days, for example from 5 in the morning until 7 or 8 at night." },
        { caption: "1833: the first real Factory Act covered cotton, wool, flax and silk mills. Teenagers could work at most 12 hours, children of 9 to 13 at most 8, and no one under 9.", ms: 5000 },
        { caption: "1844: women over 18 got the same 12-hour limit. For the first time, a law directly controlled the work of adults." },
        {
          caption: "1847: after years of campaigning, the Ten Hours' Act. From 1848 teenagers and women would work 10 hours. Owners fought back with shift tricks, and inspectors like Leonard Horner took them to court.",
          ms: 5600,
        },
        { caption: "1850: a new Act fixed the day for teenagers and women at 6 a.m. to 6 p.m., with breaks, and a short Saturday: 60 hours a week." },
        {
          caption: "1866: a labour congress in Baltimore, and the International in Geneva, both demanded an 8-hour day. Marx calls the legal limit a modest Magna Carta for workers.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const e = ERAS[s];
        return (
          <>
            <line x1={yx(0)} y1="40" x2={yx(5)} y2="40" stroke="#000" strokeWidth="2" />
            {ERAS.map((era, i) => (
              <g key={era.year}>
                <circle
                  cx={yx(i)}
                  cy="40"
                  r={i === s ? 6 : 4}
                  fill={i <= s ? "#000" : "#fff"}
                  stroke="#000"
                  strokeWidth="1.5"
                  style={{ transition: `all ${T}` }}
                />
                <text x={yx(i)} y="24" textAnchor="middle" fontSize="8.5" fillOpacity={i === s ? 1 : 0.45}>
                  {era.year}
                </text>
              </g>
            ))}

            {ERAS.map((era, i) => (
              <Fade key={era.year} show={i === s} delay={200}>
                <text x="180" y="76" textAnchor="middle" fontSize="15" fontWeight="600">
                  {era.what}
                </text>
                <text x="180" y="94" textAnchor="middle" fontSize="10">
                  {era.who}
                </text>
              </Fade>
            ))}

            {/* the legal limit on a 24-hour clock bar */}
            <text x={hx(0)} y="122" fontSize="8.5" fillOpacity=".6">
              {s === 0 ? "the day the old laws demanded" : "longest legal working day"}
            </text>
            <rect x={BX} y="128" width={BW} height="24" fill="#fff" stroke="#000" />
            <rect
              x={BX}
              y="128"
              height="24"
              width={hx(e.hours) - BX}
              fill={s === 0 ? "url(#c10-none)" : s === 5 ? NEED : EXTRA}
              style={{ transition: `width ${T}` }}
            />
            <defs>
              <pattern id="c10-none" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="6" height="6" fill="#fff" />
                <line x1="0" y1="0" x2="0" y2="6" stroke="#d6452f" strokeWidth="2" />
              </pattern>
            </defs>
            <text
              x={hx(e.hours) + 6}
              y="145"
              fontSize="10"
              fontWeight="600"
              style={{ transition: `x ${T}` }}
            >
              {s === 0 ? "5am to 8pm" : `${e.hours === 10.5 ? "10½" : e.hours} h`}
            </text>
            {[0, 6, 12, 18, 24].map((h) => (
              <text key={h} x={hx(h)} y="166" textAnchor="middle" fontSize="8" fillOpacity=".5">
                {h}h
              </text>
            ))}

            <Figure name="Inspector Horner" x={300} y={222} scale={0.62} style={{ opacity: s === 3 || s === 4 ? 1 : 0, transition: "opacity 500ms" }} />
            <Figure who="sam" x={60} y={222} scale={0.62} mood={s === 0 ? "sad" : "happy"} />
          </>
        );
      }}
    </Player>
  );
}
