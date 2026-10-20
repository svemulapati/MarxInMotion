"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const X0 = 150;
const PX = 1.45; // px per coin of price

interface Row {
  name: string;
  note: string;
  c: number;
  v: number;
  p: number;
  price: string;
  priceN: number;
}

function PriceRows({ rows, shown, base = true }: { rows: Row[]; shown: boolean[]; base?: boolean }) {
  return (
    <>
      {rows.map((r, i) => {
        const y = 34 + i * 46;
        const on = shown[i];
        return (
          <g key={r.name}>
            <text x="14" y={y + 8} fontSize="10" fontWeight="700">
              {r.name}
            </text>
            <text x="14" y={y + 20} fontSize="8.5" fillOpacity=".6">
              {r.note}
            </text>
            <rect x={X0} y={y} width={r.c * PX} height="16" fill={TONE.cotton} stroke="#000" strokeWidth="1" style={{ transition: `width ${T}` }} />
            <rect x={X0 + r.c * PX} y={y} width={r.v * PX} height="16" fill={TONE.wage} stroke="#000" strokeWidth="1" style={{ transition: `all ${T}` }} />
            <rect x={X0 + (r.c + r.v) * PX} y={y} width={r.p * PX} height="16" fill={TONE.surplus} stroke="#000" strokeWidth="1" style={{ transition: `all ${T}` }} />
            <text
              x={X0}
              y={y + 30}
              fontSize="11"
              fontWeight="700"
              fill={!on || r.priceN === 120 ? "#000" : r.priceN > 120 ? "#d6452f" : "#2a9d5b"}
            >
              price {on ? r.price : "120"}
            </text>
          </g>
        );
      })}
      {base && (
        <>
          <line x1={X0 + 120 * PX} y1="26" x2={X0 + 120 * PX} y2="172" stroke="#000" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x={X0 + 120 * PX} y="20" textAnchor="middle" fontSize="8.5">
            old price 120
          </text>
        </>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.1 · Wages up by a quarter
 * Marx's numbers: average 80c + 20v at 20%; wages up 25% gives 80c + 25v +
 * 15p, new average rate 14 2/7%. Price of average capital stays 120; 50c + 50v
 * rises to 128 4/7; 92c + 8v falls to 116 4/7.
 * ───────────────────────────────────────────────────────────── */
const BEFORE: Row[] = [
  { name: "average workshop", note: "80 machines : 20 wages", c: 80, v: 20, p: 20, price: "120", priceN: 120 },
  { name: "tailoring workshop", note: "50 machines : 50 wages", c: 50, v: 50, p: 20, price: "120", priceN: 120 },
  { name: "Mr. Moneybags' mill", note: "92 machines : 8 wages", c: 92, v: 8, p: 20, price: "120", priceN: 120 },
];
const AFTER_UP: Row[] = [
  { ...BEFORE[0], v: 25, p: 15, price: "120", priceN: 120 },
  { ...BEFORE[1], v: 62.5, p: 16.07, price: "128 4/7", priceN: 128.57 },
  { ...BEFORE[2], v: 10, p: 14.57, price: "116 4/7", priceN: 116.57 },
];

export function WagesUp() {
  return (
    <Player
      id="anim-v3-11-1"
      title="11.1 · Wages up by a quarter"
      steps={[
        { caption: "Three workshops of 100 coins each, all selling at 120: costs of 100 plus the town's average profit of 20%. They mix machines (grey) and wages (green) very differently." },
        { caption: "Then wages rise by a quarter everywhere. In the average workshop, wages go from 20 to 25 and profit falls from 20 to 15. Its price stays 120. The new average rate of profit is 14 2/7%." },
        { caption: "The tailoring workshop pays lots of wages, so its costs jump to 112½. To earn the new average it must sell at 128 4/7. Its price goes up." },
        { caption: "Mr. Moneybags' mill pays few wages, so its costs barely move: 102. At the new average its price falls to 116 4/7." },
        {
          caption: "So higher wages do not simply raise all prices. They cut profit everywhere, push up the price of labour-heavy goods and lower the price of machine-heavy ones. These are Marx's own numbers.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const rows = s === 0 ? BEFORE : AFTER_UP.map((r, i) => (i <= s - 1 || s === 4 ? r : BEFORE[i]));
        const shown = [s >= 1, s >= 2, s >= 3];
        return (
          <>
            <PriceRows rows={rows} shown={shown} />
            <Fade show={s >= 1}>
              <text x="14" y="196" fontSize="10" fontWeight="600">
                average rate of profit: 20% → 14 2/7%
              </text>
            </Fade>
            <Fade show={s === 0}>
              <text x="14" y="196" fontSize="9" fillOpacity=".55">
                grey: machines · green: wages · gold: profit
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.2 · Wages down by a quarter
 * Marx's numbers: 80c + 15v + 25p, new rate 26 6/19%. 50c + 37½v falls to
 * 110 10/19; 92c + 6v rises to 123 15/19 (Marx's 92c + 8v case).
 * ───────────────────────────────────────────────────────────── */
const AFTER_DOWN: Row[] = [
  { ...BEFORE[0], v: 15, p: 25, price: "120", priceN: 120 },
  { ...BEFORE[1], v: 37.5, p: 23.03, price: "110 10/19", priceN: 110.53 },
  { ...BEFORE[2], v: 6, p: 25.79, price: "123 15/19", priceN: 123.79 },
];

export function WagesDown() {
  return (
    <Player
      id="anim-v3-11-2"
      title="11.2 · Wages down by a quarter"
      steps={[
        { caption: "Now run it backwards. Same three workshops, all at 120. This time wages fall by a quarter." },
        { caption: "In the average workshop, wages drop from 20 to 15 and profit rises to 25. Its price still stays 120. The average rate of profit climbs to 26 6/19%." },
        { caption: "The tailoring workshop saves the most on wages. At the new average its price falls to 110 10/19." },
        {
          caption: "Mr. Moneybags' mill saves little on wages but now earns the higher average rate, so its price rises to 123 15/19. Marx notes that Ricardo never worked out this case at all.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const rows = s === 0 ? BEFORE : AFTER_DOWN.map((r, i) => (i <= s - 1 ? r : BEFORE[i]));
        const shown = [s >= 1, s >= 2, s >= 3];
        return (
          <>
            <PriceRows rows={rows} shown={shown} />
            <Fade show={s >= 1}>
              <text x="14" y="196" fontSize="10" fontWeight="600">
                average rate of profit: 20% → 26 6/19%
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
