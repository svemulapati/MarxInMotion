"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Corn, Fade, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";
import { Bank } from "./ch25-animations";

const GOLD = "#e6b800";
const RED = "#d6452f";
const BEA = CAST.bea.color;

/* ─────────────────────────────────────────────────────────────
 * 26.1 · The price of borrowing
 * The Bank of England rate in 1847, month by month, as Marx lists it:
 * Jan 3-3½, Feb 4-4½, Mar 4, Apr 4-7½ (panic), May 5-5½, Jun 5, Jul 5,
 * Aug 5-5½, Sep 5-6, Oct 5-7, Nov 7-10, Dec 7 to 5.
 * ───────────────────────────────────────────────────────────── */
const RATES: [string, number, number][] = [
  ["J", 3, 3.5],
  ["F", 4, 4.5],
  ["M", 4, 4],
  ["A", 4, 7.5],
  ["M", 5, 5.5],
  ["J", 5, 5],
  ["J", 5, 5],
  ["A", 5, 5.5],
  ["S", 5, 6],
  ["O", 5, 7],
  ["N", 7, 10],
  ["D", 5, 7],
];
const CH = { x: 120, y: 200, w: 228, h: 150, max: 10 };
const ry = (r: number) => CH.y - (r / CH.max) * CH.h;

export function ThePriceOfBorrowing() {
  return (
    <Player
      id="anim-v3-26-1"
      title="26.1 · The price of borrowing"
      steps={[
        { caption: "Bea's bank is full of spare coins, and only a few bosses want to borrow. So she lends cheaply. The interest rate is the price of borrowing money." },
        { caption: "Then the harvest fails. Tiny Town must buy corn from far away and pay in gold. Coins flow out of Bea's vault, and more bosses come asking for loans." },
        { caption: "Fewer coins to lend and more people wanting them: the price of borrowing goes up. This really happened in England in 1847, after a bad harvest and a railway boom." },
        { caption: "Marx copies the Bank of England's rate month by month: about 3% in January, a panic in April, and 7 to 10% by November." },
        {
          caption: "His point: the interest rate is set by how much money-capital is on offer and how much is wanted. Here it rose even while profits were falling.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const shown = s <= 2 ? 0 : 12;
        return (
          <>
            {/* the bank and the queue */}
            <g style={{ opacity: s <= 2 ? 1 : 0, transition: "opacity 500ms" }}>
              <g transform="translate(60 130)">
                <Bank w={80} />
              </g>
              <Figure who="bea" x={60} y={208} scale={0.75} />
              {Array.from({ length: 8 }, (_, i) => (
                <g key={i} style={{ opacity: s === 0 || i < 3 ? 1 : 0, transition: "opacity 500ms" }}>
                  <g transform={`translate(${36 + (i % 4) * 16} ${100 - Math.floor(i / 4) * 14})`}>
                    <Coin r={6} />
                  </g>
                </g>
              ))}
              {Array.from({ length: 5 }, (_, i) => (
                <Figure key={i} name="" x={150 + i * 40} y={208} scale={0.62} label={false} style={{ opacity: i < (s === 0 ? 1 : 5) ? 1 : 0, transition: "opacity 500ms" }} />
              ))}
              <text x="230" y="214" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                bosses wanting loans
              </text>
            </g>

            {/* corn bought abroad, gold sent out */}
            <Fade show={s === 1 || s === 2}>
              <g transform="translate(330 60)">
                <Corn />
              </g>
              <path d="M90,96 C180,40 260,40 318,58" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="5 4" />
              <text x="230" y="40" textAnchor="middle" fontSize="9">
                gold out, corn in
              </text>
            </Fade>

            {/* the price tag on borrowing */}
            <g transform="translate(290 120)" style={{ opacity: s <= 2 ? 1 : 0, transition: "opacity 400ms" }}>
              <rect x="-34" y="-16" width="68" height="32" fill="#fff" stroke="#000" />
              <text y="-3" textAnchor="middle" fontSize="7.5">
                price of borrowing
              </text>
              <text y="11" textAnchor="middle" fontSize="12" fontWeight="700" fill={s === 2 ? RED : "#000"}>
                {s === 2 ? "high" : "low"}
              </text>
            </g>

            {/* 1847 chart */}
            <Fade show={s >= 3}>
              <text x="234" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
                Bank of England rate, 1847
              </text>
              {[0, 5, 10].map((r) => (
                <g key={r}>
                  <line x1={CH.x - 4} y1={ry(r)} x2={CH.x + CH.w} y2={ry(r)} stroke="#000" strokeOpacity=".12" />
                  <text x={CH.x - 8} y={ry(r) + 3} textAnchor="end" fontSize="8">
                    {r}%
                  </text>
                </g>
              ))}
              {RATES.map(([m, lo, hi], i) => {
                const x = CH.x + 8 + i * 19;
                const on = i < shown;
                return (
                  <g key={i}>
                    <rect
                      x={x - 5}
                      y={ry(hi) - (lo === hi ? 2 : 0)}
                      width="10"
                      height={Math.max(4, ((hi - lo) / CH.max) * CH.h)}
                      fill={hi >= 7 ? RED : BEA}
                      style={{ opacity: on ? 1 : 0, transition: `opacity 300ms ease ${i * 120}ms` }}
                    />
                    <text x={x} y={CH.y + 12} textAnchor="middle" fontSize="8">
                      {m}
                    </text>
                  </g>
                );
              })}
              <Fade show={s >= 3} delay={600}>
                <text x={CH.x + 8 + 3 * 19} y={ry(7.5) - 6} textAnchor="middle" fontSize="8" fill={RED}>
                  panic
                </text>
              </Fade>
              <text x="60" y="110" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                each bar: lowest
              </text>
              <text x="60" y="122" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                to highest rate
              </text>
              <text x="60" y="134" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                that month
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <text x="234" y="232" textAnchor="middle" fontSize="9.5" fontWeight="600">
                interest up, profits down
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 26.2 · Lord Overstone's riddle
 * Overstone (Samuel Jones Loyd), banker, to the 1857 committee: interest
 * fluctuates from "an alteration in the value of capital". Marx: the value
 * of money-capital simply is the rate of interest. Gurney: fluctuations are
 * "advantageous to dealers in money".
 * ───────────────────────────────────────────────────────────── */
export function OverstonesRiddle() {
  return (
    <Player
      id="anim-v3-26-2"
      title="26.2 · Lord Overstone's riddle"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Lord Overstone was one of England's richest bankers. Parliament asked him why interest had jumped so high." },
        { caption: "His answer: interest rose because “the value of capital” rose." },
        { caption: "Marx pounces. For a banker, the value of borrowed money is the rate of interest. So Overstone is saying: interest rose because interest rose." },
        { caption: "And it can't mean profits. In 1847 profits were falling while interest climbed. The two moved in opposite directions." },
        {
          caption: "Another banker, Samuel Gurney, was more honest. Asked if big swings in interest helped bankers, he said they were “advantageous to dealers in money”.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure name="Lord Overstone" x={60} y={210} scale={0.85} />
          <g transform="translate(60 160)">
            <rect x="-11" y="-8" width="22" height="5" fill="#000" />
            <rect x="-7" y="-26" width="14" height="19" fill="#000" />
          </g>

          {/* his answer */}
          <Fade show={s >= 1 && s <= 2}>
            <g transform="translate(120 60)">
              <rect x="0" y="-22" width="220" height="44" fill="#fff" stroke="#000" />
              <text x="110" y="-4" textAnchor="middle" fontSize="10">
                interest rose because
              </text>
              <text x="110" y="12" textAnchor="middle" fontSize="10" fontWeight="700">
                {s === 2 ? "interest rose" : "the “value of capital” rose"}
              </text>
            </g>
          </Fade>
          <Fade show={s === 2} delay={400}>
            <path d="M330,96 C360,140 300,170 240,150 C190,135 200,100 230,96" fill="none" stroke={RED} strokeWidth="2" markerEnd="url(#v3c26-arr)" />
            <text x="270" y="190" textAnchor="middle" fontSize="9" fill={RED}>
              going round in a circle
            </text>
          </Fade>
          <defs>
            <marker id="v3c26-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={RED} />
            </marker>
          </defs>

          {/* profit down, interest up */}
          <Fade show={s === 3}>
            <line x1="140" y1="170" x2="340" y2="170" stroke="#000" strokeOpacity=".3" />
            <path d="M150,70 L330,140" stroke={GOLD} strokeWidth="4" fill="none" />
            <text x="336" y="132" textAnchor="end" fontSize="9.5" fontWeight="600">
              profits
            </text>
            <path d="M150,150 L330,62" stroke={BEA} strokeWidth="4" fill="none" />
            <text x="336" y="56" textAnchor="end" fontSize="9.5" fontWeight="600" fill={BEA}>
              interest
            </text>
            <text x="240" y="186" textAnchor="middle" fontSize="9">
              1847: opposite directions
            </text>
          </Fade>

          {/* Gurney */}
          <Fade show={s === 4}>
            <Figure name="Samuel Gurney" x={290} y={210} scale={0.85} />
            <g transform="translate(150 70)">
              <rect x="0" y="-26" width="200" height="40" fill="#fff" stroke="#000" />
              <text x="100" y="-9" textAnchor="middle" fontSize="9.5">
                big swings in interest are
              </text>
              <text x="100" y="6" textAnchor="middle" fontSize="9.5" fontWeight="700">
                &ldquo;advantageous to dealers in money&rdquo;
              </text>
            </g>
            {[0, 1, 2].map((i) => (
              <Place key={i} x={200 + i * 16} y={140} show>
                <Coin r={6} />
              </Place>
            ))}
          </Fade>
        </>
      )}
    </Player>
  );
}
