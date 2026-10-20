"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coin, Fade } from "@/components/anim/Things";
import { TONE, Yarn } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const PX = 0.95;

/* ─────────────────────────────────────────────────────────────
 * 12.1 · Two ways a price can change
 * Marx's numbers: k = 200, p' = 20%, price of production 240. The two
 * changed cases (15% giving 230; cost-price 180 giving 216) are our
 * arithmetic on his formula k + kp', labelled on screen.
 * ───────────────────────────────────────────────────────────── */
const CASES = [
  { k: 200, rate: 20, label: "" },
  { k: 200, rate: 20, label: "" },
  { k: 200, rate: 15, label: "cause one: the average rate of profit changes" },
  { k: 180, rate: 20, label: "cause two: the yarn's own value changes" },
  { k: 180, rate: 20, label: "" },
];

export function TwoWaysAPriceChanges() {
  return (
    <Player
      id="anim-v3-12-1"
      title="12.1 · Two ways a price can change"
      steps={[
        { caption: "A batch of Mr. Moneybags' yarn costs him 200 coins to make. The town's average rate of profit is 20%. So its price of production is 200 + 40 = 240. (Marx's numbers.)" },
        { caption: "Marx says there are only two things that can change this price." },
        { caption: "One: the average rate of profit changes for the whole town, say to 15%. The yarn now sells at 200 + 30 = 230, even though nothing about making yarn changed." },
        { caption: "Two: the yarn itself takes less work, because cotton got cheaper or spinning got faster. Its cost falls to 180, and at 20% it sells at 216. (Example numbers.)" },
        {
          caption: "Either way, Marx says, every change in price goes back in the end to a change in value: of this yarn, or of other things in the town.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const c = CASES[s];
        const profit = (c.k * c.rate) / 100;
        const price = c.k + profit;
        return (
          <>
            <g transform="translate(36 70)">
              <Yarn />
            </g>
            <text x="36" y="100" textAnchor="middle" fontSize="9">
              a batch
            </text>
            <rect x="70" y="60" width={c.k * PX} height="22" fill={TONE.cotton} stroke="#000" style={{ transition: `width ${T}` }} />
            <text x={70 + (c.k * PX) / 2} y="75" textAnchor="middle" fontSize="10">
              cost {c.k}
            </text>
            <rect x={70 + c.k * PX} y="60" width={profit * PX} height="22" fill={TONE.surplus} stroke="#000" style={{ transition: `all ${T}` }} />
            <text x={70 + c.k * PX + (profit * PX) / 2} y="75" textAnchor="middle" fontSize="9.5">
              +{profit}
            </text>
            <text x="346" y="110" textAnchor="end" fontSize="16" fontWeight="700">
              price {price}
            </text>
            <text x="346" y="124" textAnchor="end" fontSize="9" fillOpacity=".6">
              average rate {c.rate}%
            </text>
            <text x="180" y="160" textAnchor="middle" fontSize="10.5" fontWeight="600">
              {c.label}
            </text>
            <Fade show={s === 4}>
              <rect x="40" y="180" width="280" height="24" fill="#000" />
              <text x="180" y="196" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                in the end, every price change is a value change
              </text>
            </Fade>
            <Fade show={s === 1}>
              <text x="180" y="160" textAnchor="middle" fontSize="10.5" fontWeight="600">
                price of production = cost + cost × average rate
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12.2 · Everything looks upside down
 * Marx's "grounds for compensating": risky trades, slow turnover. The
 * capitalist thinks each addition creates profit; Marx says each is only a
 * claim on the "common loot", the total surplus-value.
 * ───────────────────────────────────────────────────────────── */
const ADDS = [
  { label: "my costs", n: 100, color: TONE.cotton },
  { label: "risk at sea", n: 8, color: "#7aa6d9" },
  { label: "slow selling", n: 6, color: "#b48ad9" },
  { label: "my clever running", n: 6, color: "#d99a00" },
];

export function UpsideDown() {
  return (
    <Player
      id="anim-v3-12-2"
      title="12.2 · Everything looks upside down"
      steps={[
        { caption: "Mr. Moneybags now ships yarn overseas. He starts his price with what it cost him to make." },
        { caption: "Ships sink, so he adds something for the risk. Insurance costs money, and he puts it in the price. Marx calls reasons like this grounds for compensating." },
        { caption: "His yarn takes months to sell abroad, so he adds something for the slow turnover. And something for his clever management. (Example amounts.)" },
        { caption: "To him, each addition seems to create part of his profit. That is how it looks in competition." },
        {
          caption: "Marx says it is upside down. All these additions only decide how big a share each boss gets of one common pile: the surplus made by all the workers. He calls it the \"common loot\".",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const widths = ADDS.map((a, i) => (i === 0 || (i === 1 && s >= 1) || (i >= 2 && s >= 2) ? a.n * 2.3 : 0));
        const lefts = widths.map((_, i) => 30 + widths.slice(0, i).reduce((p, q) => p + q, 0));
        return (
          <>
            {ADDS.map((a, i) => {
              const w = widths[i];
              const on = w > 0;
              const left = lefts[i];
              return (
                <g key={a.label}>
                  <rect x={left} y="44" width={w} height="26" fill={a.color} stroke="#000" strokeWidth={on ? 1 : 0} style={{ transition: `all ${T}` }} />
                  {i > 0 && (
                    <g style={{ opacity: on ? 1 : 0, transition: "opacity 400ms" }}>
                      <rect x="200" y={86 + (i - 1) * 16} width="10" height="10" fill={a.color} stroke="#000" strokeWidth=".8" />
                      <text x="216" y={95 + (i - 1) * 16} fontSize="9.5">
                        + {a.label}
                      </text>
                    </g>
                  )}
                  {i === 0 && (
                    <text x={left + w / 2} y="61" textAnchor="middle" fontSize="10">
                      {a.label}
                    </text>
                  )}
                </g>
              );
            })}
            <Figure who="moneybags" x={60} y={196} scale={0.7} mood={s >= 3 ? "wow" : "happy"} />
            <Fade show={s === 3}>
              <g transform="translate(78 152)">
                <Bubble w={112} lines={["Each of these", "makes my profit!"]} />
              </g>
            </Fade>
            <Fade show={s === 4}>
              <path d="M240,170 h70 l-7,34 h-56 Z" fill="#555" stroke="#000" />
              <ellipse cx="275" cy="170" rx="35" ry="6" fill="#777" stroke="#000" />
              {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(${258 + i * 11} 164)`}>
                  <Coin r={5.5} />
                </g>
              ))}
              <text x="275" y="150" textAnchor="middle" fontSize="9.5" fontWeight="600">
                the common loot
              </text>
              <path d="M310,72 Q350,110 312,146" fill="none" stroke="#000" strokeDasharray="3 3" />
              <Figure who="sam" x={180} y={210} scale={0.6} label={false} />
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
