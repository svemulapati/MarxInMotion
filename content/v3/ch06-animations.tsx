"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { Bar, TONE } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * 6.1 · Dearer cotton, smaller rate
 * Marx's rule: if raw material rises by d, p′ = s/((c + d) + v).
 * Applied to the workshop numbers (CONTINUITY.md): cotton 20, spindles 4,
 * wages 3, surplus 3. Doubling cotton to 40 is this site's example.
 * ───────────────────────────────────────────────────────────── */
export function DearerCotton() {
  const U = 5.4;
  const X = 24;
  return (
    <Player
      id="anim-v3-6-1"
      title="6.1 · Dearer cotton, smaller rate"
      steps={[
        { caption: "The usual day: 20 coins of cotton, 4 of spindle wear, 3 of wages. Sam's work makes 3 coins of surplus-value. Rate of profit: 3 out of 27, about 11%." },
        { caption: "Now a bad year for cotton. The same cotton costs 40 coins instead of 20." },
        { caption: "Sam works just as hard and makes the same 3 coins of surplus-value. Nothing changed in the workshop." },
        { caption: "But the 3 coins are now measured against 47 coins spent. The rate of profit drops to about 6%." },
        { caption: "Marx's rule: other things equal, the rate of profit falls when raw materials get dearer and rises when they get cheaper." },
      ]}
    >
      {(s) => {
        const cotton = s >= 1 ? 40 : 20;
        const total = cotton + 4 + 3;
        const rate = s >= 3 ? "6%" : "11%";
        return (
          <>
            <text x={X} y="36" fontSize="9.5" fontWeight="600">
              spent today: {total} coins
            </text>
            <Bar
              x={X}
              y={44}
              unit={U}
              h={24}
              segs={[
                { n: cotton, color: TONE.cotton, label: `cotton ${cotton}` },
                { n: 4, color: TONE.spindle, label: "4" },
                { n: 3, color: TONE.wage, label: "3" },
              ]}
            />
            <Fade show={s >= 1}>
              <text x={X + 20 * U} y="86" textAnchor="middle" fontSize="9" fill="#d6452f" fontWeight="600">
                bad harvest: cotton doubles
              </text>
            </Fade>
            <text x={X} y="118" fontSize="9.5" fontWeight="600">
              surplus-value
            </text>
            <Bar x={X} y={124} unit={U} h={24} segs={[{ n: 3, color: TONE.surplus, label: "3" }]} />
            <Fade show={s >= 2}>
              <text x={X + 24} y="140" fontSize="9">
                same as before
              </text>
            </Fade>
            <text x="290" y="132" textAnchor="middle" fontSize="10">
              rate of profit
            </text>
            <text x="290" y="160" textAnchor="middle" fontSize="26" fontWeight="700" fill={s >= 3 ? "#d6452f" : "#b38f00"}>
              {rate}
            </text>
            <Fade show={s >= 4}>
              <text x="180" y="200" textAnchor="middle" fontSize="10.5" fontWeight="600">
                raw materials up, rate of profit down
              </text>
            </Fade>
            <text x="350" y="216" textAnchor="end" fontSize="7.5" fill="#777">
              doubling of cotton made up to show the idea
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6.2 · Machines grow fast, cotton grows slow
 * Marx: machinery and coal can be multiplied quickly; vegetable and animal
 * raw materials follow natural time periods. Hence relative over-production
 * of machinery and relative under-production of raw materials.
 * ───────────────────────────────────────────────────────────── */
export function MachinesFastCottonSlow() {
  return (
    <Player
      id="anim-v3-6-2"
      title="6.2 · Machines grow fast, cotton grows slow"
      steps={[
        { caption: "In good times, mill owners order more and more spinning machines. Machines can be built quickly." },
        { caption: "But cotton is a plant. It grows once a year, at nature's pace. Marx says plant and animal materials cannot be suddenly multiplied like machines." },
        { caption: "So the machines race ahead of the cotton. Too many spindles chase too little cotton, and its price shoots up." },
        { caption: "High prices squeeze profits, mills cut back, and later cotton floods in again. Marx calls it over-production of machinery and under-production of raw materials, a source of violent swings." },
      ]}
    >
      {(s) => {
        const m = [3, 6, 10, 10][s];
        const c = [3, 4, 4, 9][s];
        return (
          <>
            <text x="90" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
              spinning machines
            </text>
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i} style={{ opacity: i < m ? 1 : 0, transition: `opacity 400ms ease ${i * 60}ms` }}>
                <rect x={30 + (i % 5) * 24} y={44 + Math.floor(i / 5) * 30} width="20" height="22" fill="#9a9a9a" stroke="#000" strokeWidth=".7" />
                <circle cx={40 + (i % 5) * 24} cy={55 + Math.floor(i / 5) * 30} r="5" fill="none" stroke="#000" strokeWidth=".7" />
              </g>
            ))}
            <text x="270" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
              cotton plants
            </text>
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i} style={{ opacity: i < c ? 1 : 0, transition: `opacity 400ms ease ${i * 60}ms` }}>
                <line x1={210 + (i % 5) * 24} y1={66 + Math.floor(i / 5) * 30} x2={210 + (i % 5) * 24} y2={50 + Math.floor(i / 5) * 30} stroke="#2a9d5b" strokeWidth="2" />
                <circle cx={210 + (i % 5) * 24} cy={47 + Math.floor(i / 5) * 30} r="5" fill="#fff" stroke="#000" strokeWidth=".7" />
              </g>
            ))}
            <Fade show={s >= 1}>
              <text x="270" y="122" textAnchor="middle" fontSize="9">
                one harvest a year
              </text>
            </Fade>

            {/* price of cotton */}
            <text x="30" y="150" fontSize="9.5" fontWeight="600">
              price of cotton
            </text>
            <polyline
              points={[
                [30, 196],
                [110, 190],
                [180, s >= 2 ? 160 : 188],
                [250, s >= 2 ? 150 : 186],
                [320, s >= 3 ? 194 : s >= 2 ? 150 : 186],
              ]
                .map((p) => p.join(","))
                .join(" ")}
              fill="none"
              stroke="#d6452f"
              strokeWidth="2.5"
              style={{ transition: "all 700ms" }}
            />
            <Fade show={s >= 2}>
              <text x="250" y="142" textAnchor="middle" fontSize="9" fill="#d6452f" fontWeight="600">
                shoots up
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="320" y="210" textAnchor="end" fontSize="9" fill="#d6452f">
                then crashes
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6.3 · The cotton famine
 * Marx's sources: 1861-65, the American Civil War cut off cotton.
 * Factory inspectors, October 1862, Lancashire and Cheshire:
 * 40,146 (11.3%) full time, 134,767 (38%) short time, 179,721 (50.7%) unemployed.
 * ───────────────────────────────────────────────────────────── */
const GROUPS = [
  { label: "full time", n: 40146, pct: 11.3, color: "#2a9d5b" },
  { label: "short time", n: 134767, pct: 38, color: "#e6b800" },
  { label: "no work at all", n: 179721, pct: 50.7, color: "#d6452f" },
];

export function TheCottonFamine() {
  return (
    <Player
      id="anim-v3-6-3"
      title="6.3 · The cotton famine"
      steps={[
        { caption: "1861. The American Civil War begins. Lancashire's mills spin mostly American cotton, and suddenly almost none arrives." },
        { caption: "The price of cotton rises higher than it had been for almost a hundred years. Mills switch to Indian Surat cotton, which wastes a quarter in spinning." },
        { caption: "Factory inspectors counted the cotton workers of Lancashire and Cheshire in October 1862. Only 11.3% were working full time." },
        { caption: "38% were on short time. And more than half, 50.7%, had no work at all: almost 180,000 people." },
        { caption: "Marx uses the cotton famine as his great example of a raw material running short. The machines stood ready. The workers stood ready. The cotton was missing." },
      ]}
    >
      {(s) => (
        <>
          <text x="20" y="28" fontSize="10" fontWeight="600">
            Lancashire, 1861 to 1865
          </text>
          {/* empty ship */}
          <g transform="translate(290 34)">
            <path d="M-26,0 L26,0 L18,12 L-18,12 Z" fill="#8a5a2b" stroke="#000" strokeWidth=".8" />
            <path d="M0,0 L0,-22 L16,-4 Z" fill="#fff" stroke="#000" strokeWidth=".8" />
            <Fade show={s >= 0}>
              <text x="0" y="26" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                no American cotton
              </text>
            </Fade>
          </g>
          <Fade show={s >= 1}>
            <text x="20" y="54" fontSize="9.5">
              Surat cotton: a quarter lost as waste
            </text>
          </Fade>

          {GROUPS.map((g, i) => {
            const show = i === 0 ? s >= 2 : s >= 3;
            const y = 80 + i * 36;
            return (
              <g key={g.label}>
                <text x="20" y={y + 13} fontSize="9.5">
                  {g.label}
                </text>
                <rect x="104" y={y} width="220" height="18" fill="#eee" />
                <rect
                  x="104"
                  y={y}
                  width={show ? (g.pct / 100) * 220 : 0}
                  height="18"
                  fill={g.color}
                  stroke="#000"
                  strokeWidth={show ? 0.6 : 0}
                  style={{ transition: "width 900ms cubic-bezier(.2,.8,.2,1)" }}
                />
                <Fade show={show}>
                  <text x="330" y={y + 13} fontSize="9.5" fontWeight="700">
                    {g.pct}%
                  </text>
                  <text x="108" y={y + 30} fontSize="8">
                    {g.n.toLocaleString("en")} people
                  </text>
                </Fade>
              </g>
            );
          })}
          <Fade show={s >= 4}>
            <Figure who="sam" x={340} y={210} scale={0.5} label={false} mood="sad" />
            <text x="20" y="206" fontSize="10" fontWeight="600">
              machines ready, workers ready, cotton missing
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
