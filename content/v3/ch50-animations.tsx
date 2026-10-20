"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";
import { INCOME } from "./ch48-animations";

/* ─────────────────────────────────────────────────────────────
 * 50.1 · Cutting a cake, or stacking blocks?
 * Marx's own numbers: a commodity worth 300, of which 200 is used-up
 * means of production and 100 new value; wages x + profit y + rent z
 * always make 100. The split 50 / 30 / 20 is made up.
 * ───────────────────────────────────────────────────────────── */
const X0 = 40;
const PX = 0.95;

type Part = { key: string; n: number; color: string; label: string; dark?: boolean };
const PARTS: Part[] = [
  { key: "c", n: 200, color: TONE.cotton, label: "200: means of production" },
  { key: "x", n: 50, color: INCOME.wages, label: "x 50", dark: true },
  { key: "y", n: 30, color: INCOME.profit, label: "y 30", dark: true },
  { key: "z", n: 20, color: INCOME.rent, label: "z 20", dark: true },
];

export function CakeOrBlocks() {
  return (
    <Player
      id="anim-v3-50-1"
      title="50.1 · Cutting a cake, or stacking blocks?"
      steps={[
        { caption: "Marx's own example. A commodity is worth 300." },
        { caption: "200 of that is the value of the means of production used up to make it. It is only passed on." },
        { caption: "The other 100 is new value, made by this year's work. That 100 is all there is to share." },
        {
          caption: "Wages, profit and rent must share it: Marx calls them x, y and z. Whatever happens, x + y + z = 100. If one grows, another must shrink. (Our split is made up.)",
          ms: 5000,
        },
        {
          caption: "But to a businessman it looks the other way round. Wages, profit and rent seem to be fixed first, each on its own, then stacked up like blocks to make the price.",
          ms: 4800,
        },
        {
          caption: "Marx says that is upside down. The value comes first, and it is then cut up like a cake. Competition shows us only the blocks.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const stacked = s === 4;
        let left = X0;
        return (
          <>
            <text x="180" y="28" textAnchor="middle" fontSize="11" fontWeight="600">
              {stacked ? "the businessman's view: price = blocks added up" : "a commodity worth 300"}
            </text>
            {PARTS.map((p, i) => {
              const w = p.n * PX;
              const x = left;
              left += w;
              const show = s === 0 ? true : p.key === "c" ? true : s >= 2;
              const fill = s === 0 ? "#e8e8e8" : s === 2 && p.key !== "c" ? TONE.surplus : p.color;
              const lift = stacked && p.key !== "c" ? -1 - i * 7 : 0;
              return (
                <g
                  key={p.key}
                  style={{ transform: `translate(0px, ${lift}px)`, transition: `transform 600ms cubic-bezier(.2,.8,.2,1) ${stacked ? (4 - i) * 150 : 0}ms`, opacity: show ? 1 : 0 }}
                >
                  <rect x={x} y="60" width={w} height="34" fill={fill} stroke={p.key !== "c" && s <= 2 ? fill : "#000"} style={{ transition: "fill 500ms" }} />
                  {s >= 1 && (p.key === "c" || s >= 3) && (
                    <text x={x + w / 2} y="81" textAnchor="middle" fontSize={p.key === "c" ? 9.5 : 8.5} fill={p.dark ? "#fff" : "#000"} fontWeight="600">
                      {p.label}
                    </text>
                  )}
                </g>
              );
            })}
            <Fade show={s === 2}>
              <text x={X0 + 250 * PX} y="81" textAnchor="middle" fontSize="10" fontWeight="600">
                new: 100
              </text>
            </Fade>
            <Fade show={s === 3 || s === 5}>
              <path d={`M${X0 + 200 * PX},104 V110 H${X0 + 300 * PX} V104`} fill="none" stroke="#000" strokeWidth="1.5" />
              <text x={X0 + 250 * PX} y="126" textAnchor="middle" fontSize="10" fontWeight="600">
                x + y + z = 100
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="320" y="126" textAnchor="end" fontSize="9.5" fill="#d6452f">
                each block decided on its own?
              </text>
            </Fade>
            <Fade show={s === 5}>
              <g transform="translate(300 150)">
                <circle r="22" fill={TONE.surplus} stroke="#000" />
                <path d="M0,0 L0,-22 M0,0 L19,11 M0,0 L-19,11" stroke="#000" strokeWidth="1.5" />
                <text y="38" textAnchor="middle" fontSize="8.5">
                  value first, then cut
                </text>
              </g>
            </Fade>

            <Figure who="moneybags" x={60} y={204} scale={0.72} mood={s === 4 ? "wow" : "happy"} />
            <Fade show={s === 4}>
              <g transform="translate(78 158)">
                <rect x="0" y="-20" width="120" height="26" fill="#fff" stroke="#000" />
                <text x="6" y="-9" fontSize="8">
                  &ldquo;wages + my profit + rent:
                </text>
                <text x="6" y="1" fontSize="8">
                  that&apos;s why it costs 300!&rdquo;
                </text>
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 50.2 · When wages rise
 * Same 100 of new value; made-up shares.
 * ───────────────────────────────────────────────────────────── */
const W0 = 50;
const P_PX = 2.6;

export function WhenWagesRise() {
  return (
    <Player
      id="anim-v3-50-2"
      title="50.2 · When wages rise"
      steps={[
        { caption: "Back to the 100 coins of new value: 50 for wages, 30 for profit, 20 for rent. (Made-up shares.)" },
        { caption: "Workers across Tiny Town win higher wages: 60 instead of 50. Mr. Moneybags grumbles that his prices will have to go up." },
        { caption: "But the work done is the same, so the new value is still 100. If wages take 60, the profits of the town's bosses must fall. Wages and profit move in opposite directions." },
        {
          caption: "Marx adds a twist: some prices do rise and others fall, depending on how many machines each trade uses. So in some trades it really looks as if wages push prices up.",
          ms: 5000,
        },
        {
          caption: "Because each share moves by its own rules, they look independent, like separate blocks. Marx says the cake is still one cake, made by labour.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const wage = s >= 2 ? 60 : 50;
        const profit = s >= 2 ? 20 : 30;
        const shares = [
          { label: `wages ${wage}`, n: wage, color: INCOME.wages },
          { label: `profit ${profit}`, n: profit, color: INCOME.profit },
          { label: "rent 20", n: 20, color: INCOME.rent },
        ];
        let x = W0;
        return (
          <>
            <text x="180" y="28" textAnchor="middle" fontSize="11" fontWeight="600">
              new value: always 100
            </text>
            {shares.map((p) => {
              const w = p.n * P_PX;
              const at = x;
              x += w;
              return (
                <g key={p.color}>
                  <rect x={at} y="42" width={w} height="32" fill={p.color} stroke="#000" style={{ transition: "x 700ms, width 700ms" }} />
                  <text x={at + w / 2} y="62" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#fff" style={{ transition: "x 700ms" }}>
                    {p.label}
                  </text>
                </g>
              );
            })}
            <Fade show={s === 1}>
              <text x="180" y="96" textAnchor="middle" fontSize="10" fill="#2a9d5b" fontWeight="600">
                wages up by 10
              </text>
            </Fade>
            <Fade show={s >= 2 && s < 4}>
              <text x="180" y="96" textAnchor="middle" fontSize="10" fontWeight="600">
                wages up 10, profit down 10
              </text>
            </Fade>

            {/* two trades: machine-heavy and labour-heavy */}
            <Fade show={s === 3}>
              <g transform="translate(110 138)">
                <rect x="-46" y="-16" width="92" height="30" fill="#fff" stroke="#000" />
                <text y="-2" textAnchor="middle" fontSize="8.5">
                  many machines
                </text>
                <text y="9" textAnchor="middle" fontSize="8.5" fill="#2a6fd6" fontWeight="600">
                  price falls
                </text>
              </g>
              <g transform="translate(250 138)">
                <rect x="-46" y="-16" width="92" height="30" fill="#fff" stroke="#000" />
                <text y="-2" textAnchor="middle" fontSize="8.5">
                  many workers
                </text>
                <text y="9" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                  price rises
                </text>
              </g>
            </Fade>

            <Figure who="sam" x={40} y={204} scale={0.7} />
            <Figure who="moneybags" x={320} y={204} scale={0.7} mood={s >= 2 && s < 4 ? "sad" : "happy"} />
            <Fade show={s === 1}>
              <g transform="translate(220 170)">
                <rect x="0" y="-18" width="84" height="22" fill="#fff" stroke="#000" />
                <text x="6" y="-4" fontSize="8">
                  &ldquo;prices must rise!&rdquo;
                </text>
              </g>
            </Fade>
            <Fade show={s === 4}>
              <rect x={W0 - 4} y="38" width={100 * P_PX + 8} height="40" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="5 3" />
              <text x="180" y="96" textAnchor="middle" fontSize="10" fontWeight="600">
                one cake, made by labour
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
