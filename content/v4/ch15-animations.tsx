"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const WAGE = CAST.sam.color;
const SURPLUS = "#e6b800";
const CONST = "#cfcfcf";
const T = "width 700ms cubic-bezier(.2,.8,.2,1), x 700ms cubic-bezier(.2,.8,.2,1)";

/** One labelled bar segment, animating its position and width. */
function Seg({ x, w, y, h = 26, fill, label, dark = false }: { x: number; w: number; y: number; h?: number; fill: string; label: string; dark?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={Math.max(0, w)} height={h} fill={fill} style={{ transition: T }} />
      {w > 26 && (
        <text x={x + w / 2} y={y + h / 2 + 3.5} textAnchor="middle" fontSize="9" fontWeight="700" fill={dark ? "#000" : "#fff"} style={{ transition: T }}>
          {label}
        </text>
      )}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.1 · One pie, two slices
 * Ricardo: wages and profit divide a fixed value, so one rises only as
 * the other falls; and wages must be judged relative to the product
 * (his "ten shillings ... eight" example). Workshop numbers: 6 coins.
 * ───────────────────────────────────────────────────────────── */
const PX = 40;
const PW = 280;

export function OnePieTwoSlices() {
  return (
    <Player
      id="anim-v4-15-1"
      title="15.1 · One pie, two slices"
      steps={[
        { caption: "Ricardo visits the shelf. He looks at Sam's 12-hour day: it makes 6 coins of new value. Sam gets 3 as wages, Mr. Moneybags keeps 3." },
        { caption: "Ricardo's rule: the 6 coins are a fixed amount, set by the work done. If wages go up, profit must go down by the same amount." },
        { caption: "And the other way round. Bread gets cheaper, so Sam's living now costs 2 coins. His wage falls to 2, and profit rises to 4." },
        { caption: "Ricardo's own example: pay a worker eight shillings instead of ten. If food got cheaper, he may buy more food than before, yet his share of what he makes has shrunk." },
        {
          caption: "Marx calls this one of Ricardo's great merits: he looked at relative wages, the worker's share, not only at how much he can buy. The worker is seen in his place in society.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const wage = s >= 2 ? 2 : 3;
        const unit = PW / 6;
        return (
          <>
            <text x={PX} y="40" fontSize="9" fontWeight="600">
              new value from Sam&apos;s day: 6 coins
            </text>
            <rect x={PX} y="48" width={PW} height="26" fill="none" stroke="#000" />
            <Seg x={PX} w={wage * unit} y={48} fill={WAGE} label={`wage ${wage}`} />
            <Seg x={PX + wage * unit} w={(6 - wage) * unit} y={48} fill={SURPLUS} label={`profit ${6 - wage}`} dark />

            <Fade show={s === 1 || s === 2}>
              <text x="180" y="96" textAnchor="middle" fontSize="10" fontWeight="700">
                one slice grows only if the other shrinks
              </text>
            </Fade>

            <Fade show={s >= 3}>
              <text x={PX} y="98" fontSize="9" fontWeight="600">
                Ricardo&apos;s example
              </text>
              <text x={PX} y="112" fontSize="10">
                wage: 10 shillings <tspan fontWeight="700">→ 8 shillings</tspan>
              </text>
              <text x={PX} y="126" fontSize="10">
                food he can buy: <tspan fontWeight="700">the same or more</tspan>
              </text>
              <text x={PX} y="140" fontSize="10">
                his share of the product: <tspan fontWeight="700" fill="#d6452f">smaller</tspan>
              </text>
            </Fade>

            <Figure who="sam" x={60} y={202} scale={0.6} mood={s === 2 ? "sad" : "happy"} />
            <Figure who="moneybags" x={120} y={202} scale={0.6} />
            <Figure name="Ricardo" x={310} y={202} scale={0.6} />
            <Fade show={s === 4}>
              <rect x="170" y="86" width="180" height="18" fill="#000" />
              <text x="260" y="98.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                Marx: a great merit of Ricardo
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.2 · Profit is not surplus-value
 * Workshop numbers (CONTINUITY.md): c 24, v 3, s 3.
 * s / v = 100%; s / (c + v) = 3 / 27 = 11.1%.
 * ───────────────────────────────────────────────────────────── */
export function ProfitIsNotSurplusValue() {
  return (
    <Player
      id="anim-v4-15-2"
      title="15.2 · Profit is not surplus-value"
      steps={[
        { caption: "Mr. Moneybags' day: 24 coins of cotton and spindles, 3 coins of wages, 3 coins of surplus-value." },
        { caption: "Measure the 3 extra coins against the wages that produced them: 3 out of 3. That is the rate of surplus-value, 100 per cent." },
        { caption: "Measure the same 3 coins against everything Moneybags laid out, 27 coins: about 11 per cent. That is the rate of profit." },
        { caption: "Ricardo never looks at surplus-value on its own. He always calls it profit. Marx says the two are only the same when all the capital is spent on wages." },
        {
          caption: "So Ricardo mixes up the laws of surplus-value with the laws of profit. That is why, Marx says, he gets the causes of a rising or falling rate of profit wrong, and the theory of rent too.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const unit = 280 / 30;
        return (
          <>
            <text x="40" y="34" fontSize="9" fontWeight="600">
              Mr. Moneybags&apos; day: 30 coins of yarn
            </text>
            <Seg x={40} w={24 * unit} y={42} fill={CONST} label="cotton, spindles 24" dark />
            <Seg x={40 + 24 * unit} w={3 * unit} y={42} fill={WAGE} label="3" />
            <Seg x={40 + 27 * unit} w={3 * unit} y={42} fill={SURPLUS} label="3" dark />

            <Fade show={s === 1}>
              <path d={`M${40 + 25.5 * unit},74 v14 h${3 * unit} v-14`} fill="none" stroke="#000" />
              <text x="180" y="112" textAnchor="middle" fontSize="12" fontWeight="700">
                3 ÷ 3 = 100% (rate of surplus-value)
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <path d={`M40,74 v14 h${27 * unit} v-14`} fill="none" stroke="#000" />
              <text x="180" y="112" textAnchor="middle" fontSize="12" fontWeight="700">
                3 ÷ 27 ≈ 11% (rate of profit)
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <rect x="40" y="128" width="280" height="20" fill="#000" />
              <text x="180" y="141.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                the same only if all capital is wages
              </text>
            </Fade>
            <Figure who="moneybags" x={50} y={202} scale={0.6} />
            <Figure name="Ricardo" x={310} y={202} scale={0.6} />
            <Fade show={s === 3}>
              <g transform="translate(205 186)">
                <Bubble w={80} lines={["It's all profit!"]} />
              </g>
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="176" textAnchor="middle" fontSize="9">
                Ricardo mixes up the two rates
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 15.3 · The day that stretches
 * Ricardo treats the working day as a fixed magnitude; Marx: it is
 * elastic. With a longer day, wages and surplus can rise together.
 * The 14-hour figures are made up for illustration.
 * ───────────────────────────────────────────────────────────── */
const HX = 40;
const HU = 280 / 16;

export function TheDayThatStretches() {
  return (
    <Player
      id="anim-v4-15-3"
      title="15.3 · The day that stretches"
      steps={[
        { caption: "Ricardo's rule only works if the working day is a fixed size. Sam's 12 hours make 6 coins: more for Sam means less for the boss." },
        { caption: "But the day is not fixed. Marx calls it elastic. Mr. Moneybags can stretch it, as Volume I showed." },
        { caption: "Make it 14 hours. Now Sam's day makes 7 coins. Even if Sam gets 3½ instead of 3, the boss's share grows too, to 3½. (Made-up numbers.)" },
        { caption: "Wages and surplus-value rise together, so Ricardo's 'one up, one down' law breaks. He never looked at where surplus-value comes from, so he never saw this." },
        {
          caption: "One more slip: Ricardo talks of the 'value of labour'. Marx says Sam does not sell his labour, he sells his labour-power, his ability to work. Its value is his living; the work he does can make more.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const hours = s >= 2 ? 14 : 12;
        const wage = s >= 2 ? 3.5 : 3;
        const surplus = hours / 2 - wage;
        const wHours = wage * 2;
        return (
          <>
            <text x={HX} y="34" fontSize="9" fontWeight="600">
              Sam&apos;s working day: {hours} hours, {hours / 2} coins of new value
            </text>
            <rect x={HX} y="42" width={16 * HU} height="26" fill="#f1f1f1" stroke="#ccc" />
            <Seg x={HX} w={wHours * HU} y={42} fill={WAGE} label={`Sam ${wage === 3 ? "3" : "3½"}`} />
            <Seg x={HX + wHours * HU} w={(hours - wHours) * HU} y={42} fill={SURPLUS} label={`boss ${surplus === 3 ? "3" : "3½"}`} dark />
            {[0, 4, 8, 12, 16].map((h) => (
              <text key={h} x={HX + h * HU} y="80" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                {h}h
              </text>
            ))}
            <Fade show={s === 0}>
              <line x1={HX + 12 * HU} y1="36" x2={HX + 12 * HU} y2="74" stroke="#000" strokeWidth="2" />
              <text x={HX + 12 * HU + 4} y="98" fontSize="8.5" fontWeight="700">
                Ricardo: fixed
              </text>
            </Fade>
            <Fade show={s === 1}>
              <text x={HX + 12 * HU} y="98" textAnchor="middle" fontSize="9" fontWeight="700">
                ↔ elastic
              </text>
            </Fade>
            <Fade show={s === 3}>
              <rect x="40" y="104" width="280" height="20" fill="#000" />
              <text x="180" y="117.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                both rise: the inverse law breaks
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="40" y="104" width="134" height="34" fill="#fff" stroke="#000" />
              <text x="107" y="118" textAnchor="middle" fontSize="8.5" fontWeight="700">
                Ricardo: &quot;value of labour&quot;
              </text>
              <text x="107" y="131" textAnchor="middle" fontSize="8" fillOpacity=".6">
                the work itself
              </text>
              <rect x="186" y="104" width="134" height="34" fill="#000" />
              <text x="253" y="118" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="700">
                Marx: labour-power
              </text>
              <text x="253" y="131" textAnchor="middle" fontSize="8" fill="#fff">
                the ability to work
              </text>
            </Fade>
            <Figure who="sam" x={60} y={202} scale={0.6} mood={s >= 2 ? "sleepy" : "happy"} />
            <Figure name="Ricardo" x={310} y={202} scale={0.6} />
          </>
        );
      }}
    </Player>
  );
}
