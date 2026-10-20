"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bible, Coin, Coins, Corn, Cross, Fade, IOU, Jug, Linen, Loaf, Place, Tag, Tick } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * 3.1 · Linen, coins, Bible, cider (C–M–C and the path of money)
 * Marx's own example: the linen weaver sells for £2 and buys a family
 * Bible; the Bible seller spends the £2 on brandy. Here it is cider.
 * ───────────────────────────────────────────────────────────── */
const ROW = { ava: 45, leo: 135, tom: 225, ned: 315 };
const HELD = 116;

export function LinenToBible() {
  return (
    <Player
      id="anim-3-1"
      title="3.1 · Linen, coins, Bible, cider"
      steps={[
        { caption: "Leo wants a big family Bible from Tom's shop. But Tom doesn't want linen. So first Leo must sell." },
        { caption: "Step one, selling: Ava buys Leo's linen for 2 coins. This is the risky jump. Marx calls it the commodity's somersault: what if nobody wants it?", ms: 4400 },
        { caption: "Step two, buying: Leo spends the 2 coins on the Bible. Linen became money, then money became a Bible. Marx writes this C–M–C." },
        { caption: "But the coins don't stop with Tom. He spends them on a jug of cider from Grandpa Ned." },
        { caption: "Look at the path. The linen, the Bible and the cider leave the market to be used at home. The money keeps on travelling. That is circulation.", ms: 4600 },
      ]}
    >
      {(s) => (
        <>
          <Figure who="ava" x={ROW.ava} y={208} scale={0.8} />
          <Figure who="leo" x={ROW.leo} y={208} scale={0.8} mood={s === 1 ? "wow" : "happy"} />
          <Figure who="tom" x={ROW.tom} y={208} scale={0.8} />
          <Figure who="ned" x={ROW.ned} y={208} scale={0.8} />

          {/* where the money has been */}
          <Fade show={s === 4}>
            <path
              d={`M${ROW.ava},${HELD - 26} Q${(ROW.ava + ROW.leo) / 2},${HELD - 58} ${ROW.leo},${HELD - 26} Q${(ROW.leo + ROW.tom) / 2},${HELD - 58} ${ROW.tom},${HELD - 26} Q${(ROW.tom + ROW.ned) / 2},${HELD - 58} ${ROW.ned},${HELD - 26}`}
              fill="none"
              stroke="#e6b800"
              strokeWidth="3"
              strokeDasharray="6 4"
            />
            <text x="180" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
              the money keeps moving
            </text>
          </Fade>

          {/* the goods */}
          <Place x={s >= 1 ? ROW.ava : ROW.leo} y={HELD} scale={0.9}>
            <g style={{ opacity: s === 4 ? 0.3 : 1, transition: "opacity 500ms" }}>
              <Linen />
            </g>
          </Place>
          <Place x={s >= 2 ? ROW.leo : ROW.tom} y={HELD} scale={0.9}>
            <g style={{ opacity: s === 4 ? 0.3 : 1, transition: "opacity 500ms" }}>
              <Bible />
            </g>
          </Place>
          <Place x={s >= 3 ? ROW.tom : ROW.ned} y={HELD} scale={0.9}>
            <g style={{ opacity: s === 4 ? 0.3 : 1, transition: "opacity 500ms" }}>
              <Jug />
            </g>
          </Place>

          {/* the two coins */}
          <Place x={[ROW.ava, ROW.leo, ROW.tom, ROW.ned, ROW.ned][s]} y={HELD - 30}>
            <Coins n={2} />
          </Place>

          {/* what just happened */}
          {["", "sell:  C → M", "buy:  M → C", "the coins move on", ""].map((t, i) =>
            t ? (
              <Fade key={i} show={s === i} delay={300}>
                <text x="180" y="40" textAnchor="middle" fontSize="12" fontWeight="600">
                  {t}
                </text>
              </Fade>
            ) : null
          )}
          <Fade show={s === 1}>
            <text x={ROW.leo} y="70" textAnchor="middle" fontSize="22" fontWeight="300">
              ?
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.2 · How many coins does Tiny Town need? (quantity of money)
 * Marx's numbers: £8 of sales, coins that move 4 times, £2 of money.
 * ───────────────────────────────────────────────────────────── */
const GOODS = [<Linen key="l" />, <Bible key="b" />, <Jug key="j" />, <Corn key="c" />];
const PLAN = [
  { coins: 0, moves: 0 },
  { coins: 8, moves: 1 },
  { coins: 4, moves: 2 },
  { coins: 2, moves: 4 },
];

export function HowManyCoins() {
  return (
    <Player
      id="anim-3-2"
      title="3.2 · How many coins does Tiny Town need?"
      steps={[
        { caption: "Today four things get sold in Tiny Town, each for 2 coins. That is 8 coins' worth of selling." },
        { caption: "If every coin could be used only once, the town would need 8 coins." },
        { caption: "But a coin can be passed on. If each coin changes hands twice today, 4 coins are enough." },
        {
          caption: "If each coin changes hands four times, just 2 coins do the whole day's work. Marx's rule: money needed = total of all prices ÷ how many times each coin moves.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const { coins, moves } = PLAN[s];
        return (
          <>
            {GOODS.map((g, i) => (
              <g key={i}>
                <g transform={`translate(${60 + i * 80} 42)`}>{g}</g>
                <g transform={`translate(${60 + i * 80} 74)`}>
                  <Tag text="2 coins" />
                </g>
              </g>
            ))}
            <text x="180" y="104" textAnchor="middle" fontSize="11">
              total prices today: <tspan fontWeight="700">8 coins</tspan>
            </text>

            {Array.from({ length: 8 }, (_, i) => (
              <Place key={i} x={180 + (i - (Math.max(coins, 1) - 1) / 2) * 26} y={145} show={i < coins} delay={i * 40}>
                <g className={moves > 1 ? "hop" : ""} style={{ animationDelay: `${i * 120}ms` }}>
                  <Coin r={10} />
                </g>
              </Place>
            ))}

            <Fade show={s >= 1}>
              <text x="180" y="185" textAnchor="middle" fontSize="11">
                each coin moves <tspan fontWeight="700">{moves || 1}</tspan> {moves > 1 ? "times" : "time"}
              </text>
              <text x="180" y="208" textAnchor="middle" fontSize="13" fontWeight="600">
                8 ÷ {moves || 1} = {coins || 8} coins needed
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.3 · The broken chain (money as means of payment)
 * ───────────────────────────────────────────────────────────── */
const CHAIN = { ned: 45, mia: 135, leo: 225, ava: 315 };
/** Debts, from debtor to creditor. */
const DEBTS = [
  { from: CHAIN.ava, to: CHAIN.leo, good: <Linen key="l" />, paidAt: 0.3 },
  { from: CHAIN.leo, to: CHAIN.mia, good: <Loaf key="b" />, paidAt: 0.63 },
  { from: CHAIN.mia, to: CHAIN.ned, good: <Corn key="c" />, paidAt: 1 },
];

export function TheBrokenChain() {
  return (
    <Player
      id="anim-3-3"
      title="3.3 · The broken chain"
      steps={[
        { caption: "Ava buys linen from Leo and promises to pay on Friday. Leo buys bread from Mia the same way, and Mia buys wheat from Grandpa Ned." },
        { caption: "Now the goods move first and the money comes later. Each promise is a little note: I owe you. Marx calls money used this way a means of payment.", ms: 4400 },
        { caption: "Friday. Ava sells her coats and pays Leo. Leo uses the same coins to pay Mia, and Mia pays Ned. Every promise is kept.", ms: 4400 },
        { caption: "Next week, nobody buys Ava's coats. She can't pay Leo." },
        {
          caption: "So Leo can't pay Mia, and Mia can't pay Ned. One broken promise knocks over the next, like dominoes. Marx shows how this is the way money crises spread.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="ned" x={CHAIN.ned} y={208} scale={0.8} mood={s === 4 ? "sad" : "happy"} />
          <Figure who="mia" x={CHAIN.mia} y={208} scale={0.8} mood={s === 4 ? "sad" : "happy"} />
          <Figure who="leo" x={CHAIN.leo} y={208} scale={0.8} mood={s >= 3 ? "sad" : "happy"} />
          <Figure who="ava" x={CHAIN.ava} y={208} scale={0.8} mood={s >= 3 ? "sad" : "happy"} />

          {/* the goods went to the buyers straight away */}
          {DEBTS.map((d, i) => (
            <Place key={i} x={s === 0 ? d.to : d.from} y={60} scale={0.75} delay={i * 200}>
              {d.good}
            </Place>
          ))}

          {/* the promises */}
          {DEBTS.map((d, i) => {
            const mid = (d.from + d.to) / 2;
            const kept = s === 2;
            const broken = (s === 3 && i === 0) || s === 4;
            return (
              <g key={i}>
                <path d={`M${d.from - 18},150 L${d.to + 18},150`} stroke="#000" strokeOpacity=".3" markerEnd="url(#owe)" />
                <g transform={`translate(${mid} 128)`}>
                  <IOU />
                </g>
                <text x={mid} y="164" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                  pay Friday
                </text>
                <Fade show={kept} delay={3000 * d.paidAt}>
                  <g transform={`translate(${mid + 18} 116)`}>
                    <Tick />
                  </g>
                </Fade>
                <Fade show={broken} delay={s === 4 ? i * 700 : 0}>
                  <g transform={`translate(${mid + 18} 116)`}>
                    <Cross />
                  </g>
                </Fade>
              </g>
            );
          })}
          <defs>
            <marker id="owe" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" fillOpacity=".4" />
            </marker>
          </defs>

          {/* Friday: one pair of coins settles every promise in turn */}
          {s === 2 && (
            <g className="pay-chain">
              <g transform="translate(0 -26)">
                <Coins n={2} />
              </g>
            </g>
          )}

          {/* unsold coats pile up */}
          <Fade show={s >= 3}>
            <text x={CHAIN.ava} y="96" textAnchor="middle" fontSize="9" fill="#d6452f">
              coats unsold
            </text>
          </Fade>
          <Fade show={s === 4} delay={1800}>
            <text x="180" y="30" textAnchor="middle" fontSize="12" fontWeight="600" fill="#d6452f">
              a money crisis
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
