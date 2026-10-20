"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Coins, Fade, Loaf, Place } from "@/components/anim/Things";
import { TONE, Yarn } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 10.1 · Capital on the move
 * Made-up rates (10% and 30%, averaging 20%) to show Marx's mechanism:
 * capital leaves the low-profit trade and floods the high-profit one until
 * supply and prices bring both rates to the average.
 * ───────────────────────────────────────────────────────────── */
const MOVES = [
  { yarn: 10, coat: 30 },
  { yarn: 10, coat: 30 },
  { yarn: 10, coat: 30 },
  { yarn: 15, coat: 25 },
  { yarn: 20, coat: 20 },
];

export function CapitalOnTheMove() {
  return (
    <Player
      id="anim-v3-10-1"
      title="10.1 · Capital on the move"
      steps={[
        { caption: "Two trades in Tiny Town. Spinning yarn needs lots of machines; making coats needs lots of hands. Sold at their values, yarn earns 10% and coats 30%. (Made-up numbers.)" },
        { caption: "Every boss wants the higher rate. Nobody wants to stay in the trade that pays least." },
        { caption: "So money moves. Some bosses close their spinning rooms and open coat workshops instead." },
        { caption: "Now there are too many coats and too little yarn. Coats get cheaper, so coat profits fall. Yarn gets dearer, so yarn profits rise." },
        {
          caption: "The money keeps moving until both trades earn the same average: 20%. Marx says this constant flow of capital in and out is what turns values into prices of production.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const m = MOVES[s];
        return (
          <>
            {[
              { k: "yarn", x: 90, rate: m.yarn, icon: <Yarn /> },
              { k: "coats", x: 270, rate: m.coat, icon: <Coat /> },
            ].map((t) => {
              const h = t.rate * 2.6;
              return (
                <g key={t.k}>
                  <g transform={`translate(${t.x} 30) scale(.9)`}>{t.icon}</g>
                  <text x={t.x} y="58" textAnchor="middle" fontSize="11" fontWeight="700">
                    {t.k}
                  </text>
                  <rect x={t.x - 22} y={170 - h} width="44" height={h} fill={TONE.surplus} stroke="#000" style={{ transition: `all ${T}` }} />
                  <text x={t.x} y={164 - h} textAnchor="middle" fontSize="13" fontWeight="700" style={{ transition: `y ${T}` }}>
                    {t.rate}%
                  </text>
                  <text x={t.x} y="184" textAnchor="middle" fontSize="8.5">
                    rate of profit
                  </text>
                </g>
              );
            })}
            <line x1="40" y1={170 - 20 * 2.6} x2="320" y2={170 - 20 * 2.6} stroke="#000" strokeDasharray="4 3" style={{ opacity: s === 4 ? 1 : 0.25, transition: "opacity 500ms" }} />
            <text x="180" y={166 - 20 * 2.6} textAnchor="middle" fontSize="9" style={{ opacity: s === 4 ? 1 : 0.4 }}>
              average 20%
            </text>

            {/* the moving money */}
            <Place x={s >= 2 ? 180 : 110} y={128} show={s >= 2}>
              <Coins n={3} label="capital moves" />
            </Place>
            <Fade show={s === 3}>
              <text x="90" y="204" textAnchor="middle" fontSize="9" fill="#2a9d5b">
                less yarn: dearer
              </text>
              <text x="270" y="204" textAnchor="middle" fontSize="9" fill="#d6452f">
                more coats: cheaper
              </text>
            </Fade>
            <Figure who="moneybags" x={180} y={214} scale={0.55} label={false} mood={s === 1 ? "wow" : "happy"} />
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10.2 · Three ovens, one price
 * Made-up hours: good, middling and poor ovens take 8, 10 and 12 hours for
 * the same batch. Most bread comes from middling ovens, so the market-value
 * is 10 hours. One price for every loaf: surplus-profit for the best oven.
 * ───────────────────────────────────────────────────────────── */
const OVENS = [
  { who: "Mia", hours: 8, note: "new oven" },
  { who: "most bakers", hours: 10, note: "ordinary ovens" },
  { who: "old Mr. Crust", hours: 12, note: "worn-out oven" },
];

export function ThreeOvensOnePrice() {
  return (
    <Player
      id="anim-v3-10-2"
      title="10.2 · Three ovens, one price"
      steps={[
        { caption: "Three kinds of baker make the same batch of bread. Mia's new oven takes 8 hours. Most bakers' ordinary ovens take 10. Old Mr. Crust's worn-out oven takes 12. (Made-up numbers.)" },
        { caption: "Each batch has its own individual value: the hours it really took." },
        { caption: "But at market every loaf of the same kind sells for one price. Most bread comes from ordinary ovens, so the batch counts as 10 hours. Marx calls this the market-value." },
        { caption: "Mia's batch took 8 hours but sells as 10. She pockets 2 hours extra: a surplus-profit." },
        {
          caption: "Mr. Crust's batch took 12 hours but sells as 10. He cannot get back 2 hours of the surplus his helpers made. That is why every baker races for a better oven.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {OVENS.map((o, i) => {
            const y = 30 + i * 52;
            const w = o.hours * 16;
            const diff = 10 - o.hours;
            return (
              <g key={o.who}>
                <g transform={`translate(30 ${y + 12}) scale(.8)`}>
                  <Loaf />
                </g>
                <text x="56" y={y + 6} fontSize="10" fontWeight="700">
                  {o.who}
                </text>
                <text x="56" y={y + 18} fontSize="8.5" fillOpacity=".6">
                  {o.note}
                </text>
                <Fade show={s >= 1}>
                  <rect x="140" y={y} width={w} height="16" fill={i === 0 ? "#d99a00" : TONE.cotton} stroke="#000" />
                  <text x={144} y={y + 12} fontSize="9">
                    {o.hours} hours
                  </text>
                </Fade>
                <Fade show={(s === 3 && i === 0) || (s === 4 && i === 2) || (s === 4 && i === 0)}>
                  <text x="140" y={y + 30} fontSize="10" fontWeight="700" fill={diff > 0 ? "#2a9d5b" : "#d6452f"}>
                    {diff > 0 ? `+${diff} h surplus-profit` : `${diff} h lost`}
                  </text>
                </Fade>
              </g>
            );
          })}
          <g style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }}>
            <line x1={140 + 10 * 16} y1="20" x2={140 + 10 * 16} y2="178" stroke="#000" strokeWidth="2" strokeDasharray="5 3" />
            <text x={140 + 10 * 16} y="192" textAnchor="middle" fontSize="10" fontWeight="700">
              market-value: 10 hours
            </text>
          </g>

        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10.3 · The swinging price
 * Market price swings around market-value with supply and demand. When the
 * two balance they cancel out and explain nothing. Then Marx's remark that
 * capitalists are a "freemason society" against the working class.
 * ───────────────────────────────────────────────────────────── */
const SWING = [
  { y: 0, label: "" },
  { y: -38, label: "too few loaves: price above value" },
  { y: 34, label: "too many loaves: price below value" },
  { y: 0, label: "supply = demand: price = value" },
  { y: 0, label: "" },
];

export function TheSwingingPrice() {
  return (
    <Player
      id="anim-v3-10-3"
      title="10.3 · The swinging price"
      steps={[
        { caption: "The dashed line is the market-value of a loaf. The ball is today's market price." },
        { caption: "A bad harvest week: too few loaves for everyone who wants one. Buyers outbid each other, and the price rises above value." },
        { caption: "Next week bakers rush to bake more. Now there are too many loaves, sellers undercut each other, and the price falls below value." },
        { caption: "When supply and demand balance, they cancel out and stop explaining anything. The price sits on the value. Marx says value is the centre the swinging is around." },
        {
          caption: "One more thing. Bosses fight each other over prices. But all of them gain when every worker is squeezed harder. Marx says that against the workers they act like a secret club, a \"freemason society\".",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const sw = SWING[s];
        return (
          <>
            <g style={{ opacity: s === 4 ? 0.15 : 1, transition: "opacity 500ms" }}>
              <line x1="30" y1="100" x2="330" y2="100" stroke="#000" strokeWidth="2" strokeDasharray="6 4" />
              <text x="30" y="92" fontSize="9">
                market-value
              </text>
              <path d="M30,100 C70,60 100,60 130,100 S190,140 230,100 S290,80 330,100" fill="none" stroke="#000" strokeOpacity=".2" />
              <g style={{ transform: `translate(180px, ${100 + sw.y}px)`, transition: `transform ${T}` }}>
                <circle r="11" fill={TONE.surplus} stroke="#000" />
              </g>
              <text x="180" y="165" textAnchor="middle" fontSize="10.5" fontWeight="600">
                {sw.label}
              </text>
            </g>
            <Fade show={s === 4}>
              <Figure who="moneybags" x={75} y={150} scale={0.75} />
              <Figure name="Mr. Fenn" x={135} y={150} scale={0.75} />
              <Figure name="Mr. Crust" x={195} y={150} scale={0.75} />
              <Figure who="sam" x={290} y={150} scale={0.75} mood="sad" />
              <rect x="46" y="56" width="176" height="108" fill="none" stroke="#000" strokeDasharray="4 3" />
              <text x="140" y="50" textAnchor="middle" fontSize="9.5" fontWeight="600">
                rivals, but one club
              </text>
              <text x="180" y="196" textAnchor="middle" fontSize="10" fontWeight="600">
                all gain from a higher rate of exploitation
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
