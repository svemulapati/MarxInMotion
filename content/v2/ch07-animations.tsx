"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Corn, Fade } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";

const PROD = "#2a9d5b";
const CIRC = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 7.1 · One trip round the circle (turnover time)
 * ───────────────────────────────────────────────────────────── */
const RING = { x: 180, y: 118, r: 72 };

/** Half of the ring: top half is production, bottom half circulation. */
const half = (top: boolean) =>
  `M${RING.x - RING.r},${RING.y} A${RING.r},${RING.r} 0 0 ${top ? 1 : 0} ${RING.x + RING.r},${RING.y}`;

const WEEKS = ["0 weeks", "4 weeks", "10 weeks", "13 weeks: 3 months", "26 weeks: twice round"];

export function OneTripRound() {
  return (
    <Player
      id="anim-v2-7-1"
      title="7.1 · One trip round the circle"
      steps={[
        { caption: "On Monday Mr. Moneybags sends his coins out: for cotton, for spindles, for Sam's wages. The clock starts now." },
        { caption: "First the coins are inside the workshop, as cotton being spun into yarn by Sam. This part of the trip is production time." },
        { caption: "Then the yarn sits on carts and in shops until somebody buys it. This part is circulation time." },
        {
          caption: "At last the coins come home, back in the same form they left in: money, plus the extra. One full trip is one turnover, and its length is production time plus circulation time.",
          ms: 5200,
        },
        { caption: "Then the coins must go round again, and again. Marx says a single trip is just one period in the life of a capital. Stop sending the coins out, and they stop being capital." },
      ]}
    >
      {(s) => {
        const angle = [0, 90, 270, 360, 720][s];
        return (
          <>
            {/* the two halves of the trip */}
            <path d={half(true)} fill="none" stroke={PROD} strokeWidth={s === 1 ? 7 : 4} style={{ transition: "stroke-width 400ms" }} />
            <path d={half(false)} fill="none" stroke={CIRC} strokeWidth={s === 2 ? 7 : 4} style={{ transition: "stroke-width 400ms" }} />
            <text x={RING.x + RING.r + 10} y={RING.y - 48} fontSize="10" fontWeight={s === 1 ? 700 : 400} fill={PROD}>
              production
            </text>
            <text x={RING.x + RING.r + 10} y={RING.y - 36} fontSize="10" fontWeight={s === 1 ? 700 : 400} fill={PROD}>
              time
            </text>
            <text x={RING.x + RING.r + 10} y={RING.y + 44} fontSize="10" fontWeight={s === 2 ? 700 : 400} fill="#9a7a00">
              circulation
            </text>
            <text x={RING.x + RING.r + 10} y={RING.y + 56} fontSize="10" fontWeight={s === 2 ? 700 : 400} fill="#9a7a00">
              time
            </text>

            {/* what the coins have turned into on each half */}
            <Fade show={s === 1}>
              <Figure who="sam" x={RING.x} y={RING.y + 6} scale={0.55} label={false} />
              <text x={RING.x} y={RING.y + 22} textAnchor="middle" fontSize="8.5">
                spinning in the workshop
              </text>
            </Fade>
            <Fade show={s === 2}>
              <g transform={`translate(${RING.x} ${RING.y - 10})`}>
                <Yarn />
              </g>
              <text x={RING.x} y={RING.y + 14} textAnchor="middle" fontSize="8.5">
                yarn waiting to be sold
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x={RING.x} y={RING.y - 6} textAnchor="middle" fontSize="11" fontWeight="700">
                one turnover
              </text>
              <text x={RING.x} y={RING.y + 9} textAnchor="middle" fontSize="8.5">
                = production time
              </text>
              <text x={RING.x} y={RING.y + 20} textAnchor="middle" fontSize="8.5">
                + circulation time
              </text>
            </Fade>

            {/* the coins riding the ring, starting at the left */}
            <g
              style={{
                transformOrigin: `${RING.x}px ${RING.y}px`,
                transform: `rotate(${angle}deg)`,
                transition: "transform 1400ms cubic-bezier(.45,0,.2,1)",
              }}
            >
              <g transform={`translate(${RING.x - RING.r} ${RING.y})`}>
                <circle r="15" fill="#fff" stroke="#000" />
                <Coin r={10} />
              </g>
            </g>

            {/* start and home */}
            <text x={RING.x - RING.r - 20} y={RING.y + 4} textAnchor="end" fontSize="9">
              start
            </text>
            <text x={RING.x - RING.r - 20} y={RING.y + 15} textAnchor="end" fontSize="9">
              and home
            </text>
            <Figure who="moneybags" x={40} y={212} scale={0.6} label={false} />

            {/* the clock */}
            <g transform="translate(300 34)">
              <rect x="-50" y="-14" width="100" height="22" fill="#fff" stroke="#000" />
              <text y="1" textAnchor="middle" fontSize="9" fontWeight="600">
                {WEEKS[s]}
              </text>
            </g>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.2 · How many trips in a year? (n = T / t)
 * ───────────────────────────────────────────────────────────── */
const YX = 40;
const YW = 240; // pixels for 12 months
const YY = 92;
const PER_MONTH = YW / 12;
const MONTHS = "JFMAMJJASOND".split("");
const LAP = ["#2a9d5b", "#4ec27f"];

export function TripsInAYear() {
  return (
    <Player
      id="anim-v2-7-2"
      title="7.2 · How many trips in a year?"
      steps={[
        { caption: "Marx measures turnovers by the year, just as the working day measures work. Why a year? Because the main crops of the temperate lands ripen once a year." },
        { caption: "If Mr. Moneybags' coins come home every 3 months, they go round 4 times a year. 12 ÷ 3 = 4." },
        { caption: "Grandpa Ned's money comes home once, when the harvest is sold. 12 ÷ 12 = 1." },
        { caption: "A slow trade whose capital takes 18 months to come home gets only two-thirds of the way round in a year. 12 ÷ 18 = two-thirds." },
        {
          caption: "Marx's rule: number of turnovers = the year ÷ the turnover time. The more trips a year, the more often the same coins can come back with surplus-value.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const t = s === 1 || s === 4 ? 3 : s === 2 ? 12 : s === 3 ? 18 : 0;
        const laps = t ? Math.ceil(12 / t) : 0;
        const n = t === 3 ? "4" : t === 12 ? "1" : t === 18 ? "⅔" : "";
        return (
          <>
            <text x={YX} y={YY - 30} fontSize="10" fontWeight="600">
              one year
            </text>
            {/* the year */}
            <rect x={YX} y={YY - 14} width={YW} height="28" fill="#fff" stroke="#000" />
            {MONTHS.map((m, i) => (
              <text key={i} x={YX + PER_MONTH * (i + 0.5)} y={YY + 28} textAnchor="middle" fontSize="8" fillOpacity=".55">
                {m}
              </text>
            ))}

            {/* the trips */}
            {Array.from({ length: 4 }, (_, i) => {
              const on = i < laps;
              const x = YX + i * t * PER_MONTH;
              const w = Math.min(t * PER_MONTH, YW - (x - YX));
              return (
                <g key={i} style={{ opacity: on ? 1 : 0, transition: `opacity 400ms ease ${on ? i * 250 : 0}ms` }}>
                  <rect x={x + 1} y={YY - 12} width={Math.max(0, (on ? w : 0) - 2)} height="24" fill={LAP[i % 2]} />
                  {on && t < 12 && (
                    <text x={x + w / 2} y={YY + 4} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
                      trip {i + 1}
                    </text>
                  )}
                </g>
              );
            })}
            {/* the part of an 18-month trip that spills into next year */}
            <Fade show={s === 3}>
              <rect x={YX + YW} y={YY - 12} width={6 * PER_MONTH} height="24" fill={LAP[0]} opacity=".3" />
              <text x={YX + YW + 3 * PER_MONTH} y={YY + 30} textAnchor="middle" fontSize="8" fill="#d6452f">
                next year
              </text>
              <text x={YX + YW / 2} y={YY + 4} textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
                two-thirds of one trip
              </text>
            </Fade>
            <Fade show={s === 2}>
              <g transform={`translate(${YX + YW / 2} ${YY})`}>
                <g transform="scale(.75)">
                  <Corn />
                </g>
              </g>
              <text x={YX + YW / 2 + 22} y={YY + 4} fontSize="9" fill="#fff" fontWeight="600">
                harvest
              </text>
            </Fade>

            {/* the sum */}
            <Fade show={s >= 1 && s <= 3}>
              <text x="180" y="168" textAnchor="middle" fontSize="14" fontWeight="600">
                12 months ÷ {t} months = {n} {t === 3 ? "trips" : "trip"}
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="160" textAnchor="middle" fontSize="16" fontWeight="700">
                n = T ÷ t
              </text>
              <text x="180" y="180" textAnchor="middle" fontSize="9.5">
                turnovers = the year ÷ the time of one turnover
              </text>
            </Fade>
            <Fade show={s === 0}>
              <Figure who="ned" x={300} y={205} scale={0.6} />
              <g transform="translate(330 190)">
                <Corn />
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
