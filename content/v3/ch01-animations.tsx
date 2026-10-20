"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade, Tag } from "@/components/anim/Things";
import { Bar, TONE, Yarn } from "@/components/anim/Workshop";

/** Colour for "cost-price": the boss's single lump of c and v. */
export const COST = "#7d7d7d";
export const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A labelled ledger page, for what Mr. Moneybags writes down. */
export function Ledger({ x, y, w, h, title }: { x: number; y: number; w: number; h: number; title: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#fffdf3" stroke="#000" strokeWidth="1" />
      <line x1={x} y1={y + 16} x2={x + w} y2={y + 16} stroke="#000" strokeOpacity=".3" />
      <text x={x + 6} y={y + 11.5} fontSize="8.5" fontWeight="600">
        {title}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.1 · The boss's ledger
 * Workshop numbers (CONTINUITY.md): a day's yarn worth 30 = c 24 + v 3 + s 3.
 * The boss lumps c and v into one cost-price of 27.
 * ───────────────────────────────────────────────────────────── */
export function TheBosssLedger() {
  const U = 8.4;
  const X = 28;
  return (
    <Player
      id="anim-v3-1-1"
      title="1.1 · The boss's ledger"
      steps={[
        { caption: "A day in Mr. Moneybags' workshop. The yarn is worth 30 coins: 24 for cotton and spindle wear, 3 for Sam's wage, and 3 of surplus-value." },
        { caption: "We know from Volume I that only Sam's part is different. The 24 just passes its value on. Sam's labour makes 6 coins of new value, and the boss pays him 3 of them." },
        { caption: "But Mr. Moneybags doesn't write it like that. To him, cotton, spindles and wages are all just money he spent. He adds them up: 27 coins." },
        { caption: "Marx calls that 27 the cost-price. In one lump, you can no longer see which coins were cotton and which were wages." },
        { caption: "So what is left over, the 3 coins, looks as if it grew out of all 27 coins together. The boss calls it profit." },
      ]}
    >
      {(s) => {
        const merged = s >= 2;
        return (
          <>
            <g transform="translate(330 44)">
              <Yarn />
            </g>
            <text x="330" y="70" textAnchor="middle" fontSize="8.5">
              yarn: 30
            </text>
            <text x={X} y="34" fontSize="10" fontWeight="600">
              {merged ? "What Mr. Moneybags writes" : "What really happened"}
            </text>
            <Bar
              x={X}
              y={44}
              unit={U}
              h={26}
              segs={[
                { n: 24, color: merged ? COST : TONE.cotton, label: merged ? "" : "cotton + spindle 24" },
                { n: 3, color: merged ? COST : TONE.wage, label: merged ? "" : "3" },
                { n: 3, color: TONE.surplus, label: "3" },
              ]}
            />
            <Fade show={merged}>
              <text x={X + (27 * U) / 2} y="61" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                cost-price 27
              </text>
            </Fade>

            {/* the real story underneath: Sam's six coins */}
            <Fade show={s === 1}>
              <rect x={X + 24 * U} y="80" width={6 * U} height="14" fill="none" stroke={TONE.wage} strokeWidth="1.5" strokeDasharray="3 2" />
              <text x={X + 27 * U} y="108" textAnchor="middle" fontSize="9" fill={TONE.wage}>
                Sam&apos;s new value: 6
              </text>
              <text x={X + 12 * U} y="88" textAnchor="middle" fontSize="9">
                old value, passed on
              </text>
            </Fade>

            <Figure who="moneybags" x={60} y={200} scale={0.85} mood={s >= 4 ? "wow" : "happy"} />
            <Fade show={s >= 2}>
              <Ledger x={110} y={120} w={150} h={80} title="My costs today" />
              <text x="118" y="152" fontSize="9">
                cotton, spindles, wages
              </text>
              <text x="252" y="152" textAnchor="end" fontSize="10" fontWeight="700">
                27
              </text>
              <Fade show={s >= 4}>
                <text x="118" y="174" fontSize="9">
                  my profit
                </text>
                <text x="252" y="174" textAnchor="end" fontSize="10" fontWeight="700" fill="#b38f00">
                  3
                </text>
              </Fade>
            </Fade>
            <Fade show={s >= 4}>
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M${X + 20 + i * 48},74 Q${X + 30 + i * 48 + 30},96 ${X + 27 * U + 12},76`}
                  fill="none"
                  stroke="#b38f00"
                  strokeOpacity=".55"
                  strokeDasharray="3 3"
                />
              ))}
              <text x="300" y="196" textAnchor="middle" fontSize="9" fill="#b38f00">
                from all 27 coins?
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.2 · What it costs him, what it really costs
 * ───────────────────────────────────────────────────────────── */
export function TwoKindsOfCost() {
  return (
    <Player
      id="anim-v3-1-2"
      title="1.2 · What it costs him, what it really costs"
      steps={[
        { caption: "How much did today's yarn cost? Ask Mr. Moneybags and he says 27 coins. That is what he paid out." },
        { caption: "Ask what it took to make it, and the answer is 30 coins' worth of work: the old work in the cotton and spindles, plus all 12 of Sam's hours." },
        { caption: "The 3 coins in between cost the boss nothing. Marx says they cost the worker something instead: unpaid labour." },
        { caption: "So there are two costs. What the yarn costs the capitalist, and what it actually costs to produce. Marx says they are two quite different sizes." },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(70 0)">
            <text x="0" y="32" textAnchor="middle" fontSize="10" fontWeight="600">
              cost to the boss
            </text>
            <rect x="-28" y={190 - 27 * 5} width="56" height={27 * 5} fill={COST} stroke="#000" />
            <text x="0" y={190 - 13.5 * 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
              27
            </text>
          </g>
          <Fade show={s >= 1}>
            <g transform="translate(200 0)">
              <text x="0" y="32" textAnchor="middle" fontSize="10" fontWeight="600">
                real cost in work
              </text>
              <rect x="-28" y={190 - 30 * 5} width="56" height={30 * 5} fill="#cfcfcf" stroke="#000" />
              <rect x="-28" y={190 - 30 * 5} width="56" height={3 * 5} fill={TONE.surplus} stroke="#000" style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }} />
              <text x="0" y={190 - 13.5 * 5} textAnchor="middle" fontSize="14" fontWeight="700">
                30
              </text>
            </g>
          </Fade>
          <Fade show={s >= 2}>
            <line x1="98" y1={190 - 27 * 5} x2="172" y2={190 - 27 * 5} stroke="#000" strokeDasharray="3 3" />
            <Figure who="sam" x={322} y={196} scale={0.75} mood="sleepy" />
            <g transform="translate(232 128)">
              <Bubble w={118} lines={["These 3 cost me", "unpaid hours."]} />
            </g>
          </Fade>
          <Fade show={s >= 3}>
            <text x="135" y="210" textAnchor="middle" fontSize="10" fontWeight="600">
              two different sizes
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.3 · Profit below value
 * Marx's numbers: cost-price £500, value £600; sold at 510 to 590 the
 * profit is 10 to 90, though every price is below value.
 * ───────────────────────────────────────────────────────────── */
const PRICES = [600, 590, 560, 510, 510];

export function ProfitBelowValue() {
  const Y = (v: number) => 196 - (v - 440) * 1.0;
  return (
    <Player
      id="anim-v3-1-3"
      title="1.3 · Profit below value"
      steps={[
        { caption: "Marx's own example. A batch of goods has a cost-price of 500 and a value of 600. Sold at 600, the profit is 100: all the surplus-value." },
        { caption: "Now sell it for 590. That is 10 below its value, but the seller still makes a profit of 90." },
        { caption: "At 560, 40 below value, the profit is 60." },
        { caption: "At 530 the profit is 30. Even at 510, far below value, it is 10. Any price between 500 and 600 brings some profit." },
        { caption: "This is a big clue for later. Bosses can undercut each other and still profit, because the cost-price is lower than the value. Competition plays in that gap." },
      ]}
    >
      {(s) => {
        const price = PRICES[Math.min(s, 4)];
        return (
          <>
            {/* the scale of values */}
            <line x1="70" y1={Y(440)} x2="70" y2={Y(620)} stroke="#000" />
            {[500, 600].map((v) => (
              <g key={v}>
                <line x1="64" y1={Y(v)} x2="300" y2={Y(v)} stroke="#000" strokeOpacity=".35" strokeDasharray={v === 500 ? "0" : "4 3"} />
                <text x="58" y={Y(v) + 3} textAnchor="end" fontSize="9">
                  {v}
                </text>
              </g>
            ))}
            <text x="304" y={Y(600) + 3} fontSize="8.5">
              value
            </text>
            <text x="304" y={Y(500) + 3} fontSize="8.5">
              cost-price
            </text>
            <rect x="110" y={Y(500)} width="60" height={Y(440) - Y(500)} fill={COST} stroke="#000" />
            <text x="140" y={Y(470) + 3} textAnchor="middle" fontSize="9" fill="#fff">
              500 spent
            </text>
            {/* the profit part */}
            <rect
              x="110"
              y={Y(price)}
              width="60"
              height={Y(500) - Y(price)}
              fill={TONE.surplus}
              stroke="#000"
              style={{ transition: `y ${T}, height ${T}` }}
            />
            <g style={{ transform: `translate(205px, ${Y(price)}px)`, transition: `transform ${T}` }}>
              <Tag text={`sold: ${price}`} />
            </g>
            <text x="140" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b38f00">
              profit {price - 500}
            </text>
            <Fade show={s >= 1}>
              <text x="250" y="22" textAnchor="middle" fontSize="10" fill="#d6452f">
                {600 - price} below value
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
