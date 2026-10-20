"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * 4.1 · Three capitals, one rate
 * Engels' numbers: each C = 11,000 and s = 5,000 a year, p′ = 45 5/11%.
 * I: 10,000 fixed + 500 circ. constant + 500 v, v turns 10 times.
 * II: 9,000 fixed + 1,000 circ. constant + 1,000 v, v turns 5 times.
 * III: no fixed, 6,000 circ. constant + 5,000 v, v turns once.
 * ───────────────────────────────────────────────────────────── */
const CAPS = [
  { k: "I", fixed: 10000, circ: 500, v: 500, n: 10 },
  { k: "II", fixed: 9000, circ: 1000, v: 1000, n: 5 },
  { k: "III", fixed: 0, circ: 6000, v: 5000, n: 1 },
];
const W = 0.019; // px per pound

export function ThreeCapitalsOneRate() {
  return (
    <Player
      id="anim-v3-4-1"
      title="4.1 · Three capitals, one rate"
      steps={[
        { caption: "Engels' example. Three capitals, each 11,000. Look at how differently they are built: gray is machines and buildings, light gray is materials, green is wages." },
        { caption: "Capital I has only 500 for wages, but gets them back and spends them again 10 times a year. Capital II has 1,000 and turns them over 5 times." },
        { caption: "Capital III has 5,000 for wages and turns them over just once a year." },
        { caption: "So each one pays 5,000 of wages over the year, and at a 100% rate of surplus-value each makes 5,000 of surplus-value." },
        { caption: "5,000 on 11,000: every one earns a rate of profit of about 45%. A small wage fund turned over fast does the work of a big one turned over slowly." },
      ]}
      viewBox="0 0 360 230"
    >
      {(s) => (
        <>
          {CAPS.map((c, i) => {
            const y = 28 + i * 62;
            const show = i < 2 ? s >= 1 : s >= 2;
            return (
              <g key={c.k}>
                <text x="12" y={y + 13} fontSize="11" fontWeight="700">
                  {c.k}
                </text>
                <rect x="34" y={y} width={c.fixed * W} height="18" fill="#9a9a9a" stroke="#000" strokeWidth=".6" />
                <rect x={34 + c.fixed * W} y={y} width={c.circ * W} height="18" fill="#d9d9d9" stroke="#000" strokeWidth=".6" />
                <rect x={34 + (c.fixed + c.circ) * W} y={y} width={c.v * W} height="18" fill={TONE.wage} stroke="#000" strokeWidth=".6" />
                <text x={34 + 11000 * W + 6} y={y + 13} fontSize="9">
                  11,000
                </text>
                <Fade show={show}>
                  <text x="34" y={y + 32} fontSize="9">
                    wages {c.v.toLocaleString("en")} × {c.n} {c.n === 1 ? "time" : "times"} a year
                  </text>
                  {Array.from({ length: c.n }, (_, k) => (
                    <circle key={k} cx={200 + k * 9} cy={y + 29} r="3.4" fill={TONE.wage} className="v3c04-pop" style={{ animationDelay: `${k * 80}ms` }} />
                  ))}
                </Fade>
                <Fade show={s >= 3}>
                  <text x="34" y={y + 46} fontSize="9" fill="#b38f00" fontWeight="600">
                    surplus-value in the year: 5,000
                  </text>
                </Fade>
                <Fade show={s >= 4}>
                  <text x="348" y={y + 46} textAnchor="end" fontSize="11" fontWeight="700" fill="#b38f00">
                    45%
                  </text>
                </Fade>
              </g>
            );
          })}
          <style>{`
            @keyframes v3c04-pop { from { transform: scale(0); } to { transform: scale(1); } }
            .v3c04-pop { transform-box: fill-box; transform-origin: center; animation: v3c04-pop 400ms ease both; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.2 · Faster round, fatter rate
 * Engels: a shipment to East Asia took at least twelve months in 1847 and
 * "almost as many weeks" after steamers and the Suez Canal. Madder took a
 * year or more to grow; alizarin from coal-tar takes a few weeks.
 * ───────────────────────────────────────────────────────────── */
export function FasterRoundFatterRate() {
  return (
    <Player
      id="anim-v3-4-2"
      title="4.2 · Faster round, fatter rate"
      steps={[
        { caption: "While a capital is on its way round, part of it is always stuck: as money waiting, as stock in a shed, or as goods on a ship. Stuck capital makes no surplus-value." },
        { caption: "In 1847, Engels says, goods shipped to East Asia took at least twelve months to come home as money." },
        { caption: "Then came steamships and the Suez Canal. The same round trip took almost as many weeks as it had months." },
        { caption: "Making goods got faster too. Red dye from the madder plant took a year or more to grow. Alizarin dye from coal-tar takes a few weeks." },
        { caption: "Shorter turnover means less capital stuck and more of it working. So the same capital makes more surplus-value in a year, and the rate of profit rises." },
      ]}
    >
      {(s) => {
        const fast = s >= 2;
        return (
          <>
            {/* the trip */}
            <text x="20" y="28" fontSize="9.5" fontWeight="600">
              England
            </text>
            <text x="340" y="28" textAnchor="end" fontSize="9.5" fontWeight="600">
              East Asia
            </text>
            <path d="M40,48 Q180,10 320,48" fill="none" stroke="#000" strokeOpacity=".3" strokeDasharray="4 4" />
            <Fade show={s >= 1}>
              <g className={fast ? "v3c04-ship-fast" : "v3c04-ship-slow"}>
                <path d="M-10,0 L10,0 L6,6 L-6,6 Z" fill="#8a5a2b" stroke="#000" strokeWidth=".8" />
                <path d="M0,0 L0,-12 L8,-2 Z" fill={fast ? "#555" : "#fff"} stroke="#000" strokeWidth=".8" />
              </g>
              <text x="180" y="72" textAnchor="middle" fontSize="12" fontWeight="700" fill={fast ? TONE.wage : "#d6452f"}>
                {fast ? "almost 12 weeks" : "12 months or more"}
              </text>
              <text x="180" y="86" textAnchor="middle" fontSize="9">
                {fast ? "steamers and the Suez Canal" : "sailing ships, 1847"}
              </text>
            </Fade>

            {/* the dye */}
            <Fade show={s >= 3}>
              <text x="20" y="118" fontSize="9.5" fontWeight="600">
                red dye
              </text>
              <rect x="80" y="108" width="240" height="12" fill="#d6452f" opacity=".35" />
              <text x="84" y="117" fontSize="8.5">
                madder root: a year or more
              </text>
              <rect x="80" y="126" width="20" height="12" fill="#d6452f" />
              <text x="104" y="135" fontSize="8.5">
                alizarin from coal-tar: a few weeks
              </text>
            </Fade>

            {/* capital stuck vs working */}
            <text x="20" y="170" fontSize="9.5" fontWeight="600">
              capital
            </text>
            <rect x="80" y="160" width="240" height="16" fill="#e7e7e7" stroke="#000" strokeWidth=".6" />
            <rect
              x="80"
              y="160"
              width={fast ? 200 : 110}
              height="16"
              fill={TONE.wage}
              stroke="#000"
              strokeWidth=".6"
              style={{ transition: "width 900ms cubic-bezier(.2,.8,.2,1)" }}
            />
            <text x="84" y="172" fontSize="8.5" fill="#fff">
              working
            </text>
            <text x="316" y="172" textAnchor="end" fontSize="8.5">
              stuck
            </text>
            <Fade show={s >= 4}>
              <text x="180" y="212" textAnchor="middle" fontSize="11" fontWeight="600" fill="#b38f00">
                more capital working = higher yearly rate of profit
              </text>
            </Fade>
            <text x="320" y="190" textAnchor="end" fontSize="7.5" fill="#777">
              shares made up to show the idea
            </text>
            <style>{`
              @keyframes v3c04-sail { from { offset-distance: 0%; } to { offset-distance: 100%; } }
              .v3c04-ship-slow, .v3c04-ship-fast { offset-path: path("M40,46 Q180,8 320,46"); offset-rotate: 0deg; animation: v3c04-sail linear infinite; }
              .v3c04-ship-slow { animation-duration: 9s; }
              .v3c04-ship-fast { animation-duration: 2.4s; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}
