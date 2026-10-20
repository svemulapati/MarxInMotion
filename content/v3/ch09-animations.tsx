"use client";

import Player from "@/components/anim/Player";
import { Coin, Fade } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";
import { CapBar } from "./ch08-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** Marx's five capitals of 100 each (Ch. 9 tables), rate of surplus-value 100%. */
const FIVE = [
  { k: "I", c: 80, v: 20, value: 90, cost: 70, price: 92 },
  { k: "II", c: 70, v: 30, value: 111, cost: 81, price: 103 },
  { k: "III", c: 60, v: 40, value: 131, cost: 91, price: 113 },
  { k: "IV", c: 85, v: 15, value: 70, cost: 55, price: 77 },
  { k: "V", c: 95, v: 5, value: 20, cost: 15, price: 37 },
];

/* ─────────────────────────────────────────────────────────────
 * 9.1 · Five workshops, five rates
 * Marx's first table: capitals I to V of 100 each, s' = 100%. Rates of profit
 * 20, 30, 40, 15 and 5%. Together 500 capital, 110 surplus-value: 22%.
 * ───────────────────────────────────────────────────────────── */
export function FiveWorkshops() {
  return (
    <Player
      id="anim-v3-9-1"
      title="9.1 · Five workshops, five rates"
      steps={[
        { caption: "Marx imagines five businesses, I to V. Each puts in 100 coins, but each mixes machines (grey) and wages (green) differently." },
        { caption: "All five squeeze their workers the same: every coin of wages brings back a coin of surplus-value (gold). So the more wages, the more surplus." },
        { caption: "Measured against the 100 put in, that gives five different rates of profit: 20, 30, 40, 15 and 5 per cent. These are Marx's own numbers." },
        {
          caption: "Add them up. 500 coins of capital made 110 coins of surplus-value. Taken as one big business, that is 22 for every 100: an average rate of profit of 22%.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {FIVE.map((f, i) => {
            const y = 22 + i * 30;
            const rate = f.v;
            return (
              <g key={f.k}>
                <text x="14" y={y + 12} fontSize="11" fontWeight="700">
                  {f.k}
                </text>
                <CapBar x={36} y={y} c={f.c} v={f.v} s={f.v} unit={1.6} showS={s >= 1} />
                <Fade show={s >= 2}>
                  <text x="346" y={y + 12} textAnchor="end" fontSize="13" fontWeight="700" fill={rate > 22 ? "#2a9d5b" : rate < 22 ? "#d6452f" : "#000"}>
                    {rate}%
                  </text>
                </Fade>
              </g>
            );
          })}
          <Fade show={s >= 3}>
            <line x1="14" y1="174" x2="346" y2="174" stroke="#000" />
            <text x="14" y="192" fontSize="10">
              capital 500 · surplus-value 110
            </text>
            <text x="346" y="194" textAnchor="end" fontSize="16" fontWeight="700">
              average 22%
            </text>
          </Fade>
          <Fade show={s < 3}>
            <text x="14" y="194" fontSize="9" fillOpacity=".55">
              grey: machines and materials · green: wages · gold: surplus-value
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.2 · Sharing the pot
 * Marx's third table: values 90, 111, 131, 70, 20; cost-prices 70, 81, 91,
 * 55, 15; prices of production (cost-price + 22) 92, 103, 113, 77, 37.
 * Deviations +2, -8, -18, +7, +17: 26 above and 26 below. Totals 422 = 422.
 * ───────────────────────────────────────────────────────────── */
const PX = 1.75;

export function SharingThePot() {
  return (
    <Player
      id="anim-v3-9-2"
      title="9.2 · Sharing the pot"
      steps={[
        { caption: "Here are the five businesses again, with what each one's goods are really worth: their value. Grey is what they cost to make, gold is the surplus-value made inside." },
        { caption: "Competition does something strange. In effect, all the surplus-value goes into one pot: 110 coins." },
        { caption: "Then the pot is shared out by size. Each 100 coins of capital gets the same 22 coins of profit, wherever its surplus was made." },
        { caption: "So each business sells at its costs plus 22. Marx calls this the price of production. Some sell above value (I, IV, V), some below (II, III)." },
        {
          caption: "Above and below cancel out: 26 coins up, 26 down. All the prices add up to 422, exactly what all the values add up to. And all the profit equals all the surplus-value: 110.",
          ms: 5600,
        },
      ]}
      viewBox="0 0 360 240"
    >
      {(s) => {
        const pot = s === 1;
        const priced = s >= 3;
        return (
          <>
            {FIVE.map((f, i) => {
              const y = 18 + i * 32;
              const own = f.value - f.cost;
              const gold = s >= 2 ? 22 : s === 1 ? 0 : own;
              const dev = f.price - f.value;
              return (
                <g key={f.k}>
                  <text x="14" y={y + 12} fontSize="11" fontWeight="700">
                    {f.k}
                  </text>
                  <rect x="36" y={y} width={f.cost * PX} height="16" fill={TONE.cotton} stroke="#000" strokeWidth="1" />
                  <rect
                    x={36 + f.cost * PX}
                    y={y}
                    width={gold * PX}
                    height="16"
                    fill={TONE.surplus}
                    stroke="#000"
                    strokeWidth={gold ? 1 : 0}
                    style={{ transition: `width ${T} ${i * 80}ms` }}
                  />
                  {/* the value line stays where it was */}
                  <line x1={36 + f.value * PX} y1={y - 3} x2={36 + f.value * PX} y2={y + 19} stroke="#000" strokeWidth="2" strokeDasharray="3 2" />
                  <text x={36 + f.value * PX + 4} y={y - 2} fontSize="8" fillOpacity=".7">
                    value {f.value}
                  </text>
                  <Fade show={priced}>
                    <text x="350" y={y + 12} textAnchor="end" fontSize="10.5" fontWeight="700" fill={dev > 0 ? "#2a9d5b" : "#d6452f"}>
                      {f.price} ({dev > 0 ? "+" : ""}
                      {dev})
                    </text>
                  </Fade>
                </g>
              );
            })}

            {/* the pot */}
            <g style={{ opacity: s === 1 || s === 2 ? 1 : 0, transition: "opacity 500ms" }}>
              <path d="M284,148 h56 l-6,32 h-44 Z" fill="#555" stroke="#000" />
              <ellipse cx="312" cy="148" rx="28" ry="6" fill="#777" stroke="#000" />
              {[0, 1, 2].map((i) => (
                <g key={i} transform={`translate(${300 + i * 12} ${142 - (pot ? 6 : 0)})`}>
                  <Coin r={6} />
                </g>
              ))}
              <text x="278" y="170" textAnchor="end" fontSize="11" fontWeight="700">
                {s === 1 ? "pot: 110" : "22 per 100"}
              </text>
            </g>

            <Fade show={s === 4}>
              <rect x="14" y="184" width="332" height="44" fill="#000" />
              <text x="180" y="201" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                prices 92 + 103 + 113 + 77 + 37 = 422 = all the values
              </text>
              <text x="180" y="218" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                profits 5 × 22 = 110 = all the surplus-value
              </text>
            </Fade>
            <Fade show={s < 4}>
              <text x="14" y="200" fontSize="9" fillOpacity=".55">
                grey: cost-price · gold: {s >= 2 ? "profit, 22 each" : "surplus-value made inside"} · dashed: value
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.3 · Above, below, or on the line
 * Marx's tabulation with an average social capital of 80c + 20v at 20%:
 * 80c + 20v sells at 120 = value 120; 90c + 10v at 120 > value 110;
 * 70c + 30v at 120 < value 130.
 * ───────────────────────────────────────────────────────────── */
const THREE = [
  { name: "Mr. Moneybags' mill", note: "more machines than average", c: 90, v: 10 },
  { name: "an average workshop", note: "the town's average mix", c: 80, v: 20 },
  { name: "the tailoring workshop", note: "more workers than average", c: 70, v: 30 },
];

export function AboveBelowOrOnTheLine() {
  return (
    <Player
      id="anim-v3-9-3"
      title="9.3 · Above, below, or on the line"
      steps={[
        { caption: "Suppose the whole town's capital, on average, is 80 coins of machines for every 20 of wages, and profit averages 20%. Here are three businesses of 100 coins each." },
        { caption: "Their values differ. The mill's workers make only 10 of surplus, so its goods are worth 110. The tailors make 30, so theirs are worth 130. The average one is worth 120." },
        { caption: "But all three sell at 120: cost plus the average 20. The mill sells above its value, the tailoring workshop below, and only the average one exactly at value." },
        {
          caption: "So the mill's boss pockets surplus-value made by other people's workers. Marx says the bosses are like shareholders in one big company: each gets profit by the size of his share, not by what his own workers made.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {THREE.map((b, i) => {
            const y = 26 + i * 52;
            const value = b.c + b.v + b.v;
            const price = 120;
            const dev = price - value;
            return (
              <g key={b.name}>
                <text x="14" y={y} fontSize="10.5" fontWeight="700">
                  {b.name}
                </text>
                <text x="14" y={y + 12} fontSize="8.5" fillOpacity=".6">
                  {b.note}
                </text>
                <CapBar x={14} y={y + 18} c={b.c} v={b.v} s={b.v} unit={1.3} showS={s >= 1} />
                <Fade show={s >= 1}>
                  <text x={14 + value * 1.3 + 6} y={y + 12} fontSize="9.5">
                    value {value}
                  </text>
                </Fade>
                <Fade show={s >= 2}>
                  <line x1={14 + price * 1.3} y1={y + 14} x2={14 + price * 1.3} y2={y + 38} stroke="#000" strokeWidth="2" />
                  <text x="346" y={y + 30} textAnchor="end" fontSize="11" fontWeight="700" fill={dev > 0 ? "#2a9d5b" : dev < 0 ? "#d6452f" : "#000"}>
                    sells at 120 {dev > 0 ? `(+${dev})` : dev < 0 ? `(${dev})` : "(= value)"}
                  </text>
                </Fade>
              </g>
            );
          })}
          <Fade show={s === 3}>
            <rect x="40" y="190" width="280" height="24" fill="#000" />
            <text x="180" y="206" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
              profit follows the size of your capital, not your workers
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
