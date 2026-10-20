"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { SpinningMachine } from "./ch08-animations";

const FIXED = "#5a5a5a";
const FLOW = "#2a9d5b";
const GOLD = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 9.1 · More turned over than advanced
 * Marx's own numbers: fixed £80,000 lasting 10 years, circulating £20,000
 * turned over 5 times a year. Bars drawn at 2.1 px per £1,000.
 * ───────────────────────────────────────────────────────────── */
const K = 2.1;
const BX = 62;

export function MoreTurnedOver() {
  return (
    <Player
      id="anim-v2-9-1"
      title="9.1 · More turned over than advanced"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Marx's example. A capitalist advances £100,000: £80,000 fixed in buildings and machines that last 10 years, and £20,000 of circulating capital for materials and wages." },
        { caption: "The circulating £20,000 goes round five times in the year. That is £100,000 of capital turned over." },
        { caption: "The fixed capital turns over only a tenth in the year: £8,000 of it comes back as money." },
        { caption: "Add them up: in one year £108,000 has been turned over. That is more than the whole £100,000 advanced!", ms: 4400 },
        {
          caption: "But nothing new was added. What comes home to be sent out again is £20,000 for materials and wages, plus the £8,000 from wear. The machines, now worth £72,000, keep working for nine more years.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const laps = s >= 1 ? 5 : 0;
        return (
          <>
            {/* what was advanced */}
            <text x="12" y="34" fontSize="9.5" fontWeight="600">
              advanced
            </text>
            <rect x={BX} y="22" width={80 * K} height="18" fill={FIXED} />
            <text x={BX + 6} y="35" fontSize="9" fill="#fff">
              fixed £80,000
            </text>
            <rect x={BX + 80 * K} y="22" width={20 * K} height="18" fill={FLOW} />
            <text x={BX + 100 * K + 6} y="35" fontSize="9">
              £100,000
            </text>
            <text x={BX + 80 * K + 24} y="55" textAnchor="middle" fontSize="8.5" fill={FLOW}>
              circulating £20,000
            </text>

            {/* turned over this year */}
            <Fade show={s >= 1}>
              <text x="12" y="94" fontSize="9.5" fontWeight="600">
                turned over
              </text>
              <text x="12" y="105" fontSize="9.5" fontWeight="600">
                in a year
              </text>
              {Array.from({ length: 5 }, (_, i) => (
                <g key={i} style={{ opacity: i < laps ? 1 : 0, transition: `opacity 350ms ease ${i * 280}ms` }}>
                  <rect x={BX + i * 20 * K} y="86" width={20 * K - 1.5} height="18" fill={i % 2 ? "#4ec27f" : FLOW} />
                  <text x={BX + i * 20 * K + 10 * K} y="99" textAnchor="middle" fontSize="8.5" fill="#fff">
                    {i + 1}
                  </text>
                </g>
              ))}
              <text x={BX + 50 * K} y="120" textAnchor="middle" fontSize="8.5" fill={FLOW}>
                £20,000 × 5 = £100,000
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <rect x={BX + 100 * K} y="86" width={8 * K} height="18" fill={FIXED} />
              <text x={BX + 104 * K} y="78" textAnchor="middle" fontSize="8.5">
                + £8,000
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x={BX + 108 * K + 6} y="99" fontSize="11" fontWeight="700">
                £108,000
              </text>
              <line x1={BX + 100 * K} y1="18" x2={BX + 100 * K} y2="130" stroke={GOLD} strokeWidth="2" strokeDasharray="4 3" />
              <text x={BX + 100 * K} y="142" textAnchor="middle" fontSize="8.5" fill="#9a7a00">
                the size of the advance
              </text>
            </Fade>

            {/* what comes home, and what is left in the machines */}
            <Fade show={s === 4}>
              <rect x="12" y="156" width="336" height="66" fill="#fff" stroke="#000" strokeOpacity=".3" />
              <text x="22" y="174" fontSize="9.5" fontWeight="600">
                comes home to go out again:
              </text>
              <rect x="22" y="182" width={20 * K} height="14" fill={FLOW} />
              <text x={22 + 20 * K + 6} y="193" fontSize="9">
                £20,000
              </text>
              <rect x="130" y="182" width={8 * K} height="14" fill={FIXED} />
              <text x={130 + 8 * K + 6} y="193" fontSize="9">
                £8,000
              </text>
              <text x="22" y="214" fontSize="9">
                still working in the mill: machines worth £72,000, nine more years
              </text>
              <g transform="translate(316 186) scale(.55)">
                <SpinningMachine worn={0.1} />
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.2 · The ten-year heartbeat (cycles of turnover and crisis)
 * ───────────────────────────────────────────────────────────── */
const TX = 24;
const TW = 316; // 0 to 20 years
const PER_YEAR = TW / 20;
const BASE = 150;

/** Business activity over 20 years: a smooth wave that dips at each crisis. */
function wave(upTo: number) {
  let d = "";
  const steps = 160;
  for (let i = 0; i <= steps; i++) {
    const yr = (i / steps) * 20;
    if (yr > upTo) break;
    const phase = (yr % 10) / 10; // 0 at a fresh start, 1 at the crisis
    const h = phase < 0.85 ? 18 + 62 * Math.pow(phase / 0.85, 1.6) : 80 - 300 * (phase - 0.85);
    d += `${i ? "L" : "M"}${(TX + yr * PER_YEAR).toFixed(1)},${(BASE - h).toFixed(1)}`;
  }
  return d;
}

const PHASES = [
  { at: 1, label: "dull" },
  { at: 4.5, label: "medium" },
  { at: 7.4, label: "rush" },
  { at: 9.2, label: "crisis" },
];

export function TenYearHeartbeat() {
  return (
    <Player
      id="anim-v2-9-2"
      title="9.2 · The ten-year heartbeat"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Big machines and buildings now last for years. Marx says this ties capital to a cycle of turnovers lasting, in his day, about ten years." },
        { caption: "Inside that cycle business goes through stages: dull times, medium activity, a rush, and then a crisis.", ms: 4000 },
        { caption: "In a crisis many firms throw out old machines together and buy new, better ones." },
        { caption: "That burst of new buying becomes the starting point of the next cycle. Marx: a crisis always starts large new investments." },
        {
          caption: "So Marx calls the long life of fixed capital a material basis for crises that come round again and again. It is one ingredient, not the whole recipe, and he says the exact number of years does not matter.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const upTo = s === 0 ? 0 : s <= 2 ? 10 : 20;
        return (
          <>
            {/* the years */}
            <line x1={TX} y1={BASE} x2={TX + TW} y2={BASE} stroke="#000" />
            {[0, 5, 10, 15, 20].map((y) => (
              <g key={y}>
                <line x1={TX + y * PER_YEAR} y1={BASE} x2={TX + y * PER_YEAR} y2={BASE + 5} stroke="#000" />
                <text x={TX + y * PER_YEAR} y={BASE + 16} textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                  year {y}
                </text>
              </g>
            ))}

            {/* machine lives */}
            <rect x={TX} y={BASE + 26} width={10 * PER_YEAR - 2} height="14" fill={FIXED} />
            <text x={TX + 5 * PER_YEAR} y={BASE + 37} textAnchor="middle" fontSize="8.5" fill="#fff">
              the machines&apos; life: about 10 years
            </text>
            <Fade show={s >= 3}>
              <rect x={TX + 10 * PER_YEAR} y={BASE + 26} width={10 * PER_YEAR} height="14" fill="#7a7a7a" />
              <text x={TX + 15 * PER_YEAR} y={BASE + 37} textAnchor="middle" fontSize="8.5" fill="#fff">
                the new machines&apos; life
              </text>
            </Fade>

            {/* business activity */}
            <path d={wave(upTo)} fill="none" stroke="#000" strokeWidth="2.5" />
            <text x={TX} y="30" fontSize="9" fillOpacity=".6">
              how busy business is
            </text>
            <Fade show={s >= 1}>
              {PHASES.map((p) => (
                <text
                  key={p.label}
                  x={TX + p.at * PER_YEAR}
                  y={p.label === "crisis" ? BASE - 18 : BASE - 46 - p.at * 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="600"
                  fill={p.label === "crisis" ? "#d6452f" : "#000"}
                >
                  {p.label}
                </text>
              ))}
            </Fade>

            {/* the crisis: old machines out, new ones in */}
            <Fade show={s >= 2}>
              {Array.from({ length: 4 }, (_, i) => (
                <g key={i} transform={`translate(${TX + 10 * PER_YEAR - 8 + (i % 2) * 22} ${46 + Math.floor(i / 2) * 24}) scale(.32)`}>
                  <SpinningMachine worn={s === 2 ? 1 : 0} />
                </g>
              ))}
              <text x={TX + 10 * PER_YEAR + 40} y="56" fontSize="8.5" fill={s === 2 ? "#d6452f" : "#2a9d5b"}>
                {s === 2 ? "old ones out" : "new ones in"}
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="180" y="12" width="168" height="26" fill="#fff" stroke="#000" />
              <text x="264" y="29" textAnchor="middle" fontSize="9.5" fontWeight="700">
                a material basis for crises
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
