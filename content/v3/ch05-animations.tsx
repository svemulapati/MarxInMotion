"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * 5.1 · One roof for many
 * Illustrative numbers (labelled): five small workshops each need their own
 * roof, engine and stove; one big workshop shares them.
 * ───────────────────────────────────────────────────────────── */
function Shed({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label?: string }) {
  return (
    <g>
      <path d={`M${x},${y} L${x + w / 2},${y - h * 0.35} L${x + w},${y} Z`} fill="#8a5a2b" stroke="#000" strokeWidth=".8" />
      <rect x={x} y={y} width={w} height={h} fill="#fff" stroke="#000" strokeWidth=".8" />
      {label && (
        <text x={x + w / 2} y={y + h + 11} textAnchor="middle" fontSize="8">
          {label}
        </text>
      )}
    </g>
  );
}

export function OneRoofForMany() {
  return (
    <Player
      id="anim-v3-5-1"
      title="5.1 · One roof for many"
      steps={[
        { caption: "Five small spinning workshops. Each one needs its own roof, its own steam engine and its own stove to keep warm." },
        { caption: "Put the same 50 spinners under one big roof. They share one engine, one chimney, one stove, one storeroom." },
        { caption: "The machines and materials used up per spinner shrink. Marx calls this economy in the use of constant capital." },
        { caption: "The workers make the same surplus-value as before. But it is now measured against a smaller capital, so the rate of profit rises." },
        { caption: "Marx's point: this saving comes from many people working together. The boss gets the benefit as if it were his own cleverness." },
      ]}
    >
      {(s) => {
        const big = s >= 1;
        const before = 5 * 20;
        const after = 60;
        return (
          <>
            <Fade show={!big}>
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={i}>
                  <Shed x={14 + i * 68} y={70} w={54} h={40} />
                  <rect x={14 + i * 68 + 40} y="38" width="7" height="20" fill="#555" />
                  {[0, 1].map((k) => (
                    <circle key={k} cx={14 + i * 68 + 14 + k * 24} cy="98" r="6" fill={TONE.wage} />
                  ))}
                </g>
              ))}
              <text x="180" y="132" textAnchor="middle" fontSize="9">
                5 roofs, 5 engines, 5 stoves
              </text>
            </Fade>
            <Fade show={big}>
              <Shed x={60} y={70} w={240} h={46} label="one roof, one engine, one stove" />
              <rect x="276" y="30" width="10" height="26" fill="#555" />
              {Array.from({ length: 10 }, (_, k) => (
                <circle key={k} cx={78 + k * 22} cy="96" r="6" fill={TONE.wage} />
              ))}
            </Fade>

            {/* constant capital used up per spinner */}
            <text x="20" y="160" fontSize="9" fontWeight="600">
              machines and buildings used up
            </text>
            <rect x="20" y="166" width={before * 2.6} height="14" fill="#cfcfcf" />
            <rect
              x="20"
              y="166"
              width={(big ? after : before) * 2.6}
              height="14"
              fill="#8a8a8a"
              stroke="#000"
              strokeWidth=".6"
              style={{ transition: "width 900ms cubic-bezier(.2,.8,.2,1)" }}
            />
            <text x={20 + (big ? after : before) * 2.6 + 6} y="177" fontSize="9" style={{ transition: "x 900ms" }}>
              {big ? after : before}
            </text>
            <Fade show={s >= 3}>
              <text x="20" y="204" fontSize="10" fontWeight="600" fill="#b38f00">
                same surplus-value, smaller capital: rate of profit up
              </text>
            </Fade>
            <text x="350" y="216" textAnchor="end" fontSize="7.5" fill="#777">
              numbers made up to show the idea
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.2 · Saving on safety
 * Marx's sources: about 1860 a weekly average of 15 men died in English
 * collieries; 8,466 killed in the ten years 1852-61 (report of 1862), a
 * figure the report itself calls far too low.
 * ───────────────────────────────────────────────────────────── */
export function SavingOnSafety() {
  return (
    <Player
      id="anim-v3-5-3"
      title="5.3 · Saving on safety"
      steps={[
        { caption: "There is a darker way to economise on constant capital: spend as little as possible on the place where people work." },
        { caption: "In the coal mines Marx read about, owners saved on drainage, fresh air, strong shafts and good machinery." },
        { caption: "Government reports counted the cost. In the ten years 1852 to 1861, 8,466 miners were killed in English coal mines, and the report admitted the true number was higher." },
        { caption: "Around 1860, that was about 15 men a week." },
        { caption: "Marx says capitalism is careful with every scrap of material, yet it squanders human lives, “not only blood and flesh, but also nerve and brain”." },
      ]}
    >
      {(s) => (
        <>
          {/* the mine */}
          <rect x="0" y="40" width="360" height="110" fill="#3a3027" />
          <rect x="0" y="34" width="360" height="8" fill="#6b8f3a" />
          <rect x="60" y="40" width="20" height="90" fill="#1f1a15" />
          <rect x="80" y="110" width="240" height="22" fill="#1f1a15" />
          <Fade show={s >= 1}>
            {/* weak props and no air */}
            {[130, 190, 250].map((x, i) => (
              <line key={x} x1={x} y1="110" x2={x + (i === 1 ? 6 : 0)} y2="132" stroke="#8a5a2b" strokeWidth="3" strokeDasharray={i === 1 ? "3 3" : "0"} />
            ))}
            <text x="200" y="102" textAnchor="middle" fontSize="9" fill="#fff">
              thin props, no fresh air, poor drains
            </text>
          </Fade>
          <Figure who="sam" x={290} y={130} scale={0.42} label={false} mood={s >= 2 ? "sad" : "happy"} />

          <Fade show={s >= 2}>
            <text x="180" y="176" textAnchor="middle" fontSize="20" fontWeight="700">
              8,466
            </text>
            <text x="180" y="192" textAnchor="middle" fontSize="9">
              miners killed in England, 1852 to 1861
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <text x="180" y="210" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
              about 15 a week, around 1860
            </text>
          </Fade>
          <Fade show={s >= 4}>
            <rect x="20" y="4" width="320" height="24" fill="#000" />
            <text x="180" y="20" textAnchor="middle" fontSize="9.5" fill="#fff">
              careful with materials, wasteful with human lives
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.3 · Waste into wealth
 * Marx's examples: iron filings back into iron-making; woollen rags into
 * "shoddy"; gas-tar into aniline dyes; London's sewage poured into the Thames.
 * ───────────────────────────────────────────────────────────── */
const LOOPS = [
  { from: "iron filings", to: "new iron", y: 44 },
  { from: "woollen rags", to: "shoddy cloth", y: 84 },
  { from: "gas-tar", to: "aniline dyes", y: 124 },
];

export function WasteIntoWealth() {
  return (
    <Player
      id="anim-v3-5-2"
      title="5.2 · Waste into wealth"
      steps={[
        { caption: "A big workshop makes big piles of waste. Big enough to be worth using again." },
        { caption: "Iron filings from machine-making go back into making iron. Old woollen rags are torn up and spun into new cloth called shoddy." },
        { caption: "Chemists turn useless gas-tar into bright aniline dyes. Every bit of waste turned back into material is constant capital saved." },
        { caption: "But Marx notes what still gets wasted. London had no better use for the waste of four and a half million people than to dump it in the Thames, at heavy expense." },
      ]}
    >
      {(s) => (
        <>
          {LOOPS.map((l, i) => {
            const on = i < 2 ? s >= 1 : s >= 2;
            return (
              <g key={l.from}>
                <rect x="20" y={l.y - 12} width="96" height="22" fill="#e7e7e7" stroke="#000" strokeWidth=".6" />
                <text x="68" y={l.y + 3} textAnchor="middle" fontSize="9">
                  {l.from}
                </text>
                <Fade show={on}>
                  <path d={`M118,${l.y - 1} C170,${l.y - 22} 190,${l.y - 22} 240,${l.y - 1}`} fill="none" stroke={TONE.wage} strokeWidth="2" markerEnd="url(#v3c05-arr)" />
                  <rect x="244" y={l.y - 12} width="96" height="22" fill={TONE.wage} stroke="#000" strokeWidth=".6" />
                  <text x="292" y={l.y + 3} textAnchor="middle" fontSize="9" fill="#fff">
                    {l.to}
                  </text>
                </Fade>
              </g>
            );
          })}
          <defs>
            <marker id="v3c05-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={TONE.wage} />
            </marker>
          </defs>
          <Fade show={s >= 3}>
            <path d="M20,182 Q100,172 180,186 T340,180 L340,210 L20,210 Z" fill="#7a8a6a" opacity=".8" />
            <text x="180" y="170" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#5a4a2a">
              still wasted: London&apos;s sewage, dumped in the Thames
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
