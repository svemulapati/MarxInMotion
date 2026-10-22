"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { RENT } from "@/content/v3/ch37-animations";

const ABS = "#b38f00";
const COAL = "#2b2b2b";

/** A coal mine: a pit head with a winding wheel, centred on (0, 0). */
export function Mine({ label, dim = false }: { label: string; dim?: boolean }) {
  return (
    <g style={{ opacity: dim ? 0.25 : 1, transition: "opacity 500ms" }}>
      <rect x="-26" y="-6" width="52" height="22" fill="#8a7a63" stroke="#000" />
      <path d="M-12,-6 L-6,-30 L6,-30 L12,-6" fill="none" stroke="#000" strokeWidth="1.5" />
      <circle cx="0" cy="-32" r="7" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <line x1="0" y1="-32" x2="0" y2="10" stroke="#000" strokeDasharray="2 2" />
      <text y="30" textAnchor="middle" fontSize="9" fontWeight="700">
        {label}
      </text>
    </g>
  );
}

/** A heap of coal, drawn as a stack of small blocks: one block per 5 tons. */
function Heap({ tons }: { tons: number }) {
  const blocks = Math.round(tons / 5);
  return (
    <g>
      {Array.from({ length: blocks }, (_, i) => (
        <rect key={i} x={(i % 4) * 9 - 18} y={-8 - Math.floor(i / 4) * 7} width="8" height="6" fill={COAL} />
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12.1 · Three mines, one price
 * Marx's Table A: £100 in each mine, 60 / 65 / 75 tons, £2 a ton.
 * ───────────────────────────────────────────────────────────── */
const TABLE_A = [
  { id: "I", tons: 60, value: 120, diff: 0 },
  { id: "II", tons: 65, value: 130, diff: 10 },
  { id: "III", tons: 75, value: 150, diff: 30 },
];
const AX = [70, 180, 290];

export function ThreeMinesOnePrice() {
  return (
    <Player
      id="anim-v4-12-1"
      title="12.1 · Three mines, one price"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Marx's tables use coal mines. Three mines, I, II and III. Each owner puts £100 into tools, wages and pit props." },
        { caption: "Same money, different rock. Mine I digs 60 tons, mine II 65, mine III 75. The town needs all 200 tons." },
        { caption: "Every ton sells at one price, £2. That is what a ton from mine I is worth, the hardest mine the town still needs." },
        { caption: "So mine I brings in £120, mine II £130 and mine III £150. Each mine has £10 of absolute rent, the value above its costs and profit. II and III also have a differential rent: £10 and £30." },
        {
          caption: "Total rent: £70. Marx: absolute rent is the value of the coal over its cost-price. Differential rent is the market price over a mine's own value.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {TABLE_A.map((m, i) => (
            <g key={m.id}>
              <g transform={`translate(${AX[i]} 192)`}>
                <Mine label={`mine ${m.id}`} />
              </g>
              <text x={AX[i]} y="150" textAnchor="middle" fontSize="8" fillOpacity=".7">
                capital £100
              </text>
              <Fade show={s >= 1} delay={i * 150}>
                <g transform={`translate(${AX[i]} 136)`}>
                  <Heap tons={m.tons} />
                </g>
                <text x={AX[i]} y="88" textAnchor="middle" fontSize="10" fontWeight="700">
                  {m.tons} tons
                </text>
              </Fade>
              <Fade show={s >= 3}>
                <text x={AX[i]} y="48" textAnchor="middle" fontSize="11" fontWeight="700">
                  £{m.value}
                </text>
                <rect x={AX[i] - 22} y="54" width="20" height="10" fill={ABS} />
                <text x={AX[i] - 12} y="62" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">
                  10
                </text>
                {m.diff > 0 && (
                  <>
                    <rect x={AX[i] + 2} y="54" width="20" height="10" fill={RENT} />
                    <text x={AX[i] + 12} y="62" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">
                      {m.diff}
                    </text>
                  </>
                )}
              </Fade>
            </g>
          ))}

          <Fade show={s >= 2}>
            <rect x="8" y="6" width="344" height="18" fill="#000" />
            <text x="180" y="18.5" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
              {s === 4 ? "one price: £2 a ton · total rent: 30 + 40 = £70" : "one price: £2 a ton, set by mine I"}
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <rect x="96" y="30" width="8" height="6" fill={ABS} />
            <text x="107" y="35.5" fontSize="7">absolute rent</text>
            <rect x="170" y="30" width="8" height="6" fill={RENT} />
            <text x="181" y="35.5" fontSize="7">differential rent</text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12.2 · A richer mine opens
 * Table A becomes Table B: mine IV digs 92½ tons with £100; mine I shuts,
 * mine II halves; the price falls to £1 11/13 and total rent RISES to
 * £94 3/13 on less capital (£250 instead of £300).
 * ───────────────────────────────────────────────────────────── */
const BX = [45, 135, 225, 315];

export function ARicherMineOpens() {
  return (
    <Player
      id="anim-v4-12-2"
      title="12.2 · A richer mine opens"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Back to the three mines: £300 of capital, coal at £2 a ton, and £70 of rent in all." },
        { caption: "Then a new, richer seam is found: mine IV. With £100 it digs 92½ tons, more than mine I and half of mine II together." },
        { caption: "The town still wants only 200 tons. So mine I shuts, and half the capital leaves mine II, which now digs 32½ tons." },
        { caption: "Now mine II is the hardest mine still needed, so it sets the price: £1 11/13 a ton, a little less than £1 17 shillings. Coal is cheaper." },
        {
          caption: "Yet rent goes up! Mine II pays £5, III £28 6/13, IV £60 10/13: £94 3/13 in all, on only £250 of capital. Cheaper coal and better mines, and still more rent. Ricardo's single rule could not show this.",
          ms: 6200,
        },
      ]}
    >
      {(s) => {
        const before = s < 2;
        const rows = [
          { id: "I", tons: before ? 60 : 0, rent: before ? 10 : 0, shut: !before },
          { id: "II", tons: before ? 65 : 32.5, rent: before ? 20 : 5, shut: false },
          { id: "III", tons: 75, rent: before ? 40 : 28.46, shut: false },
          { id: "IV", tons: s >= 1 ? 92.5 : 0, rent: s >= 4 ? 60.77 : 0, shut: s < 1 },
        ];
        const rentLabel = ["10", before ? "20" : "5", before ? "40" : "28 6/13", "60 10/13"];
        return (
          <>
            {rows.map((m, i) => (
              <g key={m.id}>
                <g transform={`translate(${BX[i]} 192)`}>
                  <Mine label={`mine ${m.id}`} dim={m.shut} />
                </g>
                <Fade show={m.tons > 0}>
                  <g transform={`translate(${BX[i]} 140)`}>
                    <Heap tons={m.tons} />
                  </g>
                  <text x={BX[i]} y="78" textAnchor="middle" fontSize="9" fontWeight="700">
                    {m.tons === 32.5 ? "32½" : m.tons === 92.5 ? "92½" : m.tons} t
                  </text>
                </Fade>
                <Fade show={(s === 0 && i < 3) || (s >= 4 && i >= 1)}>
                  <rect x={BX[i] - 26} y="50" width="52" height="14" fill={RENT} />
                  <text x={BX[i]} y="60" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="700">
                    rent £{rentLabel[i]}
                  </text>
                </Fade>
              </g>
            ))}

            <rect x="8" y="6" width="344" height="18" fill="#000" />
            <text x="180" y="18.5" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
              {s < 3 ? "price: £2 a ton" : "price: £1 11/13 a ton (cheaper)"}
            </text>
            <text x="180" y="40" textAnchor="middle" fontSize="9">
              {s === 0 ? "capital £300 · total rent £70" : s >= 4 ? "capital £250 · total rent £94 3/13" : s >= 2 ? "capital £250" : ""}
            </text>
          </>
        );
      }}
    </Player>
  );
}
