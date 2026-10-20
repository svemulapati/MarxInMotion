"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Chest, Coat, Coin, Cross, Fade, Linen, Place } from "@/components/anim/Things";
import { Banner, Say, Thinker } from "./ch16-animations";

/* ─────────────────────────────────────────────────────────────
 * 17.1 · Say's balance: every seller is a buyer
 * ───────────────────────────────────────────────────────────── */
export function SaysBalance() {
  return (
    <Player
      id="anim-v4-17-1"
      title="17.1 · Say's balance: every seller is a buyer"
      steps={[
        { caption: "A French economist, Jean-Baptiste Say, visits from the shelf. Ricardo agreed with him, and so did James Mill." },
        { caption: "Say's idea: nobody makes things just to keep them. Leo makes linen only so he can get something else, say Ava's coat." },
        { caption: "So every sale is also a purchase. Leo's linen is his demand for the coat; Ava's coat is her demand for linen. The scale always balances." },
        {
          caption: "Then there can never be too much of everything at once, says Say. Too many coats, maybe, but then too few of something else. Mill called it the “metaphysical equilibrium of sellers and buyers.”",
          ms: 5200,
        },
        { caption: "Ricardo went further: any amount of capital can be put to use in a country. A general glut, too much of everything, is impossible." },
      ]}
    >
      {(s) => {
        const swapped = s >= 2;
        return (
          <>
            <Thinker name="Say" x={34} y={202} />
            <Thinker name="Ricardo" x={330} y={202} scale={0.7} show={s === 4} />

            {/* the balance */}
            <g style={{ opacity: s >= 1 ? 1 : 0.25, transition: "opacity 500ms" }}>
              <polygon points="180,128 168,150 192,150" fill="#000" />
              <line x1="90" y1="126" x2="270" y2="126" stroke="#000" strokeWidth="4" />
              <line x1="100" y1="126" x2="100" y2="104" stroke="#000" />
              <line x1="260" y1="126" x2="260" y2="104" stroke="#000" />
            </g>

            <Figure who="leo" x={90} y={202} scale={0.7} />
            <Figure who="ava" x={270} y={202} scale={0.7} />

            <Place x={swapped ? 260 : 100} y={90} scale={0.9} show={s >= 1}>
              <Linen />
            </Place>
            <Place x={swapped ? 100 : 260} y={86} scale={0.7} show={s >= 1}>
              <Coat />
            </Place>

            <Fade show={s >= 2}>
              <text x="180" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
                every sale is a purchase
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="180" y="56" textAnchor="middle" fontSize="9">
                so supply and demand always match
              </text>
            </Fade>
            <Fade show={s === 4}>
              <Say x={186} y={176} w={136} text="No general glut is possible!" />
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17.2 · The two halves come apart (money separates sale and purchase)
 * ───────────────────────────────────────────────────────────── */
export function HalvesComeApart() {
  return (
    <Player
      id="anim-v4-17-2"
      title="17.2 · The two halves come apart"
      steps={[
        { caption: "Marx steps forward. Say's balance works for barter, he says, when linen is swapped straight for a coat. But Tiny Town uses money." },
        { caption: "With money, a swap splits into two halves. First Leo sells his linen for coins. That is one deal, finished." },
        { caption: "The second half, buying, can wait. Leo is worried about the winter, so he keeps his coins in the chest." },
        { caption: "Now Ava's coats find no buyer, so she cannot buy from Mia, and Mia cannot pay Grandpa Ned. One pause spreads down the line." },
        {
          caption: "Marx: a crisis is “the forcible assertion of the unity” of steps that have come apart. The halves belong together, and when they drift too far, they are snapped back together, painfully.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <Thinker name="Marx" x={30} y={202} />

          {/* the two halves of one swap */}
          <rect x="70" y="24" width="120" height="30" fill="#fff" stroke="#000" />
          <text x="130" y="43" textAnchor="middle" fontSize="9">
            1. sell: linen for coins
          </text>
          <g style={{ transform: `translateX(${s >= 2 ? 30 : 0}px)`, transition: "transform 700ms" }}>
            <rect x="190" y="24" width="120" height="30" fill={s >= 2 ? "#f1f1f1" : "#fff"} stroke="#000" strokeDasharray={s >= 2 ? "4 3" : "0"} />
            <text x="250" y="43" textAnchor="middle" fontSize="9" fill={s >= 2 ? "#999" : "#000"}>
              2. buy: coins for a coat
            </text>
          </g>
          <Fade show={s === 0}>
            <text x="190" y="70" textAnchor="middle" fontSize="8.5">
              with barter, both halves happen at once
            </text>
          </Fade>

          {/* Leo and his coins */}
          <Figure who="leo" x={110} y={150} scale={0.65} mood={s >= 2 ? "sad" : "happy"} />
          <Place x={s >= 1 ? 140 : 210} y={110} show={s >= 1}>
            <Coin r={6} />
          </Place>
          <Fade show={s >= 2}>
            <g transform="translate(150 140) scale(.7)">
              <Chest />
            </g>
            <text x="150" y="168" textAnchor="middle" fontSize="8">
              coins kept
            </text>
          </Fade>

          {/* the chain that stops */}
          <Fade show={s >= 3}>
            {[
              { who: "ava" as const, x: 220, label: "coats unsold" },
              { who: "mia" as const, x: 275, label: "can't buy" },
              { who: "ned" as const, x: 330, label: "unpaid" },
            ].map((p, i) => (
              <g key={p.who}>
                <Figure who={p.who} x={p.x} y={150} scale={0.6} mood="sad" />
                <text x={p.x} y="170" textAnchor="middle" fontSize="7.5" fill="#d6452f">
                  {p.label}
                </text>
                <g transform={`translate(${p.x + 14} 98)`} style={{ opacity: s >= 3 ? 1 : 0, transition: `opacity 400ms ${i * 350}ms` }}>
                  <Cross />
                </g>
              </g>
            ))}
          </Fade>

          <Banner show={s === 4} y={196} text="crisis: the two halves forced back together" />
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17.3 · Wanting is not paying (need versus demand backed by money)
 * ───────────────────────────────────────────────────────────── */
export function WantingIsNotPaying() {
  return (
    <Player
      id="anim-v4-17-3"
      title="17.3 · Wanting is not paying"
      steps={[
        { caption: "Ricardo had one more answer: people always want more. If there are too many coats, someone will surely want them." },
        { caption: "Marx agrees that plenty of people want coats. Sam's family is cold all winter. But wanting is not the same as paying." },
        { caption: "Workers can only buy as much as their wages allow, and wages are kept low. Marx says their spending can grow only “within very narrow limits.”" },
        { caption: "Meanwhile bosses race to make more and more, driven by the wish to grow their capital, not by what people can buy. The warehouse fills." },
        {
          caption: "So the market can be full of coats while cold people walk past. Over-production, says Marx, is about “demand that is backed by ability to pay,” not about what people need. That is why crises come back again and again.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          <Thinker name="Ricardo" x={34} y={202} show={s === 0} />
          <Thinker name="Marx" x={34} y={202} show={s >= 1} />

          {/* the warehouse fills */}
          <rect x="210" y="26" width="130" height="92" fill="#fff" stroke="#000" />
          <text x="275" y="38" textAnchor="middle" fontSize="8.5">
            Moneybags&apos; warehouse
          </text>
          {Array.from({ length: 12 }, (_, i) => {
            const shown = s === 0 ? 3 : s <= 2 ? 5 : 12;
            return (
              <g key={i} style={{ opacity: i < shown ? 1 : 0, transition: `opacity 400ms ${(i % 6) * 70}ms` }}>
                <g transform={`translate(${228 + (i % 6) * 19} ${62 + Math.floor(i / 6) * 30}) scale(.36)`}>
                  <Coat />
                </g>
              </g>
            );
          })}

          {/* Sam's family: wanting, not able to pay */}
          <Fade show={s >= 1}>
            <Figure who="sam" x={100} y={170} scale={0.65} mood="sad" />
            <Figure name="sister" x={135} y={170} scale={0.5} mood="sad" />
            <ellipse cx="118" cy="62" rx="40" ry="18" fill="#fff" stroke="#000" />
            <text x="118" y="60" textAnchor="middle" fontSize="8">
              we need
            </text>
            <text x="118" y="70" textAnchor="middle" fontSize="8">
              warm coats
            </text>
          </Fade>
          <Fade show={s >= 2}>
            <text x="118" y="188" textAnchor="middle" fontSize="8.5" fill="#d6452f">
              wage: 3 coins, all spent on food
            </text>
          </Fade>

          {/* the gap */}
          <Fade show={s >= 3}>
            <text x="275" y="132" textAnchor="middle" fontSize="8.5">
              made: more and more
            </text>
            <text x="275" y="144" textAnchor="middle" fontSize="8.5" fill="#d6452f">
              bought: only what wages allow
            </text>
          </Fade>

          <Banner show={s === 4} y={204} text="need is not demand: demand needs money" />
        </>
      )}
    </Player>
  );
}
