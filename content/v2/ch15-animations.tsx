"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const CAP_I = "#5b8fd9";
const CAP_II = "#e6b800";
const FREED = "#2a9d5b";
const SELL = "#d4d4d4";

/* ─────────────────────────────────────────────────────────────
 * 15.1 · The three-week gap
 * Marx's numbers (pounds, shown as coins): 9 weeks of work at 100 a week,
 * 3 weeks of circulation, 300 of additional capital.
 * ───────────────────────────────────────────────────────────── */
const COL = { x0: 34, w: 20, gap: 4, base: 160, unit: 0.9 };
const colX = (i: number) => COL.x0 + i * (COL.w + COL.gap);

export function TheThreeWeekGap() {
  return (
    <Player
      id="anim-v2-15-1"
      title="15.1 · The three-week gap"
      steps={[
        { caption: "A big batch of yarn takes 9 weeks of spinning. Every week Mr. Moneybags spends 100 coins on cotton and wages: 900 coins in all. (Marx's own numbers, in pounds.)" },
        { caption: "Then the yarn must be carried off and sold: 3 more weeks. The 900 coins only come home at the start of week 13." },
        { caption: "So what happens in weeks 10, 11 and 12? With no money left, the workshop stands still. Three weeks in every twelve: a quarter of the year, lost." },
        { caption: "One way out: spread the 900 coins over all 12 weeks, 75 a week. The workshop never stops, but it runs smaller." },
        {
          caption: "The other way: keep full size and add 300 more coins for weeks 10 to 12. Marx's rule: the extra is to the whole 1,200 as the 3 weeks of selling are to the 12 weeks: one quarter.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const spread = s === 3;
        return (
          <>
            <text x="180" y="20" textAnchor="middle" fontSize="11" fontWeight="600">
              {spread ? "75 coins a week, all 12 weeks" : s === 4 ? "900 + 300 additional capital" : "100 coins a week"}
            </text>
            {Array.from({ length: 12 }, (_, i) => {
              const working = i < 9;
              const h = spread ? 75 : working ? 100 : s === 4 ? 100 : 0;
              const fill = spread ? CAP_I : working ? CAP_I : CAP_II;
              return (
                <g key={i}>
                  {/* selling weeks shown as a hatched band */}
                  {!working && s >= 1 && s !== 3 && (
                    <rect x={colX(i)} y={COL.base - 100 * COL.unit} width={COL.w} height={100 * COL.unit} fill="url(#v2c15-hatch)" />
                  )}
                  <rect
                    x={colX(i)}
                    y={COL.base - h * COL.unit}
                    width={COL.w}
                    height={h * COL.unit}
                    fill={fill}
                    stroke="#000"
                    strokeWidth={h ? 0.8 : 0}
                    style={{ transition: `height ${T} ${i * 30}ms, y ${T} ${i * 30}ms` }}
                  />
                  <text x={colX(i) + COL.w / 2} y={COL.base + 12} textAnchor="middle" fontSize="8">
                    {i + 1}
                  </text>
                </g>
              );
            })}
            <defs>
              <pattern id="v2c15-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="6" height="6" fill="#fff" />
                <line x1="0" y1="0" x2="0" y2="6" stroke={SELL} strokeWidth="3" />
              </pattern>
            </defs>
            <text x="18" y={COL.base + 24} fontSize="8">
              week
            </text>
            <Fade show={s >= 1 && s !== 3}>
              <text x={colX(9) + 34} y={COL.base - 96} textAnchor="middle" fontSize="9">
                selling
              </text>
            </Fade>

            {/* the idle workshop */}
            <Fade show={s === 2}>
              <text x={colX(10) + 10} y={COL.base - 40} textAnchor="middle" fontSize="11" fontWeight="700" fill="#d6452f">
                idle
              </text>
            </Fade>
            <Figure who="sam" x={330} y={212} scale={0.55} mood={s === 2 ? "sleepy" : "happy"} label={false} />

            {/* totals */}
            <Fade show={s >= 1}>
              <text x={colX(4) + 10} y={COL.base + 40} textAnchor="middle" fontSize="10">
                9 weeks of work: 900
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <text x={colX(10) + 10} y={COL.base + 40} textAnchor="middle" fontSize="10" fontWeight="700" fill="#b38f00">
                +300
              </text>
              <text x="180" y={COL.base + 56} textAnchor="middle" fontSize="10" fontWeight="600">
                300 ÷ 1,200 = 3 weeks ÷ 12 weeks = ¼
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.2 · Two capitals that cross
 * Marx's case I continued: capital I = 900, capital II = 300, weeks 1 to 21.
 * ───────────────────────────────────────────────────────────── */
const W = 13.2;
const wx = (week: number) => 22 + (week - 1) * W;

/** One coloured run of weeks on the timeline. */
function Run({ from, to, y, fill, show, label }: { from: number; to: number; y: number; fill: string; show: boolean; label?: string }) {
  return (
    <g style={{ opacity: show ? 1 : 0, transition: "opacity 500ms" }}>
      <rect x={wx(from)} y={y} width={(to - from + 1) * W - 1} height="22" fill={fill} stroke="#000" strokeWidth=".8" />
      {label && (
        <text x={wx(from) + ((to - from + 1) * W) / 2} y={y + 14.5} textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#000">
          {label}
        </text>
      )}
    </g>
  );
}

export function TwoCapitalsThatCross() {
  return (
    <Player
      id="anim-v2-15-2"
      title="15.2 · Two capitals that cross"
      steps={[
        { caption: "Capital I, 900 coins, pays for the first 9 weeks of work." },
        { caption: "In week 10 the first batch goes off to be sold, and capital II, the extra 300 coins, starts the next batch so the work never stops." },
        {
          caption: "Week 13: the 900 coins come home. But the second batch is already 3 weeks along, so it needs only 600 more. 300 coins are left over: set free.",
          ms: 4800,
        },
        { caption: "Those freed 300 do the job capital II did: they keep the spinning going while the next batch is being sold. From now on the two capitals are mixed up together." },
        {
          caption: "Only in Marx's special case, 5 weeks of work and 5 of selling, do the two capitals take neat turns. In every other case they cross.",
          ms: 4800,
        },
      ]}
      viewBox="0 0 360 230"
    >
      {(s) => (
        <>
          {/* the weeks */}
          {Array.from({ length: 24 }, (_, i) => (
            <text key={i} x={wx(i + 1) + W / 2} y="40" textAnchor="middle" fontSize="6.5" fillOpacity={(i + 1) % 3 === 1 ? 0.7 : 0}>
              {i + 1}
            </text>
          ))}
          <text x="22" y="28" fontSize="9" fontWeight="600">
            weeks (9 of work, 3 of selling)
          </text>

          <Run from={1} to={9} y={48} fill={CAP_I} show label="capital I: 900" />
          <Run from={10} to={12} y={48} fill={CAP_II} show={s >= 1} label="II: 300" />
          <Run from={13} to={18} y={48} fill={CAP_I} show={s >= 2} label="600 of the 900" />
          <Run from={19} to={21} y={48} fill={FREED} show={s >= 3} label="freed 300" />

          {/* the money coming home */}
          <Fade show={s >= 2}>
            <path d={`M${wx(13)},92 L${wx(13)},74`} stroke="#000" markerEnd="url(#v2c15-up)" />
            <text x={wx(13)} y="104" textAnchor="middle" fontSize="8.5">
              900 back
            </text>
            <g transform={`translate(${wx(13) + 70} 100)`}>
              <Coins n={3} />
            </g>
            <text x={wx(13) + 70} y="122" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={FREED}>
              300 set free
            </text>
          </Fade>
          <defs>
            <marker id="v2c15-up" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" />
            </marker>
          </defs>

          {/* Marx's 5 + 5 case */}
          <Fade show={s === 4}>
            <text x="22" y="150" fontSize="9" fontWeight="600">
              5 weeks of work, 5 of selling
            </text>
            {[0, 1, 2, 3].map((k) => (
              <Run key={k} from={1 + k * 5} to={5 + k * 5} y={158} fill={k % 2 ? CAP_II : CAP_I} show label={k % 2 ? "II: 500" : "I: 500"} />
            ))}
            <text x="180" y="204" textAnchor="middle" fontSize="9.5">
              equal halves: I and II take turns and never mix
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.3 · Money that waits
 * Marx's third example: 6 weeks of work, circulation cut from 3 to 2 weeks,
 * so 800 does the work of 900. Then: prices of materials and labour halve.
 * ───────────────────────────────────────────────────────────── */
export function MoneyThatWaits() {
  return (
    <Player
      id="anim-v2-15-3"
      title="15.3 · Money that waits"
      steps={[
        { caption: "Another workshop: 6 weeks of work, 3 weeks of selling. To keep spinning without a break it needs 900 coins." },
        { caption: "Then times are good and buyers pay faster. The yarn now sells in 2 weeks instead of 3." },
        { caption: "Now 800 coins keep the work going just as well. 100 coins, one ninth of the capital, have nothing to do." },
        { caption: "Money with nothing to do does not sit still. It goes to Bea's bank, where other people borrow it. Marx says money set free this way is one of the foundations of credit." },
        {
          caption: "Cheaper materials do the same. Marx's example: if cotton and wages fall to half price, a workshop that needed 900 coins needs only 450. The other 450 are set free.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const sell = s === 0 || s === 4 ? 3 : 2;
        const need = s === 4 ? 450 : s >= 2 ? 800 : 900;
        const idle = 900 - need;
        return (
          <>
            {/* the turnover period as a bar of weeks */}
            <text x="30" y="30" fontSize="9" fontWeight="600">
              one turnover
            </text>
            <rect x="30" y="38" width={6 * 30} height="22" fill={CAP_I} stroke="#000" strokeWidth=".8" />
            <text x={30 + 90} y="53" textAnchor="middle" fontSize="9" fontWeight="600" fill="#fff">
              6 weeks of work
            </text>
            <rect x={30 + 180} y="38" width={sell * 30} height="22" fill="url(#v2c15-hatch2)" stroke="#000" strokeWidth=".8" style={{ transition: `width ${T}` }} />
            <text x={210 + (sell * 30) / 2} y="53" textAnchor="middle" fontSize="9" fontWeight="600" style={{ transition: `x ${T}` }}>
              {sell} wk selling
            </text>
            <defs>
              <pattern id="v2c15-hatch2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="6" height="6" fill="#fff" />
                <line x1="0" y1="0" x2="0" y2="6" stroke={SELL} strokeWidth="3" />
              </pattern>
            </defs>

            {/* the capital, split into needed and idle */}
            <text x="30" y="92" fontSize="9" fontWeight="600">
              {s === 4 ? "capital needed, cotton and wages at half price" : "capital needed in the workshop"}
            </text>
            <rect x="30" y="100" height="26" width={need * 0.3} fill={CAP_I} stroke="#000" strokeWidth=".8" style={{ transition: `width ${T}` }} />
            <text x={36} y="117" fontSize="10" fontWeight="700" fill="#fff">
              {need}
            </text>
            <rect
              x={30 + need * 0.3}
              y="100"
              height="26"
              width={idle * 0.3}
              fill={FREED}
              stroke="#000"
              strokeWidth={idle ? 0.8 : 0}
              style={{ transition: `width ${T}, x ${T}` }}
            />
            <Fade show={idle > 0}>
              <text x={30 + need * 0.3 + (idle * 0.3) / 2} y="140" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={FREED} style={{ transition: `x ${T}` }}>
                {idle} free
              </text>
            </Fade>

            {/* Bea's bank */}
            <Fade show={s >= 3}>
              <g transform="translate(300 170)">
                <rect x="-30" y="-24" width="60" height="34" fill="#fff" stroke="#000" />
                <path d="M-36,-24 L0,-42 L36,-24 Z" fill="#c9c9c9" stroke="#000" />
                <text y="-2" textAnchor="middle" fontSize="9" fontWeight="600">
                  Bea&apos;s bank
                </text>
              </g>
              <path d="M190,146 C220,158 240,166 262,166" stroke={FREED} strokeWidth="2" strokeDasharray="4 3" fill="none" markerEnd="url(#v2c15-up)" />
              <Figure who="bea" x={250} y={214} scale={0.5} label={false} />
              <text x="120" y="200" textAnchor="middle" fontSize="9.5" fontWeight="600">
                set free → lent out → credit
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
