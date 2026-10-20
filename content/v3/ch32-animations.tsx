"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, IOU, Place, Tag } from "@/components/anim/Things";
import { Cotton, Yarn } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A half-dial gauge for the rate of interest, 0 (low) to 1 (highest). */
function Gauge({ v, label }: { v: number; label: string }) {
  const a = Math.PI * (1 - v);
  return (
    <g>
      <path d="M-30,0 A30,30 0 0 1 30,0" fill="none" stroke="#000" strokeOpacity=".2" strokeWidth="8" />
      <path d="M12,-27.5 A30,30 0 0 1 30,0" fill="none" stroke="#d6452f" strokeWidth="8" />
      <line
        x1="0"
        y1="0"
        x2={(24 * Math.cos(a)).toFixed(1)}
        y2={(-24 * Math.sin(a)).toFixed(1)}
        stroke="#000"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ transition: `all ${T}` }}
      />
      <circle r="3" fill="#000" />
      <text y="16" textAnchor="middle" fontSize="9">
        interest
      </text>
      <text y="28" textAnchor="middle" fontSize="9" fontWeight="700" fill={v > 0.8 ? "#d6452f" : "#000"}>
        {label}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 32.1 · Borrowing to buy, borrowing to pay
 * Marx: in the crisis "everyone borrows only for the purpose of
 * paying", and interest reaches its maximum just as profit vanishes.
 * ───────────────────────────────────────────────────────────── */
export function BorrowToBuyBorrowToPay() {
  return (
    <Player
      id="anim-v3-32-1"
      title="32.1 · Borrowing to buy, borrowing to pay"
      steps={[
        { caption: "Good times. Mr. Moneybags borrows from Bea to buy more cotton. The loan is cheap." },
        { caption: "The borrowed coins turn into cotton, then into yarn, then into profit. Borrowing helps him make more." },
        { caption: "Then a crisis. Nobody buys his yarn, but a promise to pay falls due on Friday. Now he borrows only to pay that debt." },
        {
          caption: "And so does everyone else, all at once. Marx: in a crisis, people borrow only to pay what they owe. Interest jumps to its highest just when there is no profit left to pay it from.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const crisis = s >= 2;
        return (
          <>
            <Figure who="moneybags" x={60} y={200} scale={0.85} mood={crisis ? "sad" : "happy"} />
            <Figure who="bea" x={300} y={200} scale={0.85} />
            <g transform="translate(300 52)">
              <Gauge v={[0.15, 0.2, 0.6, 1][s]} label={["low", "low", "rising", "highest"][s]} />
            </g>

            {/* the loan travels from Bea to Moneybags */}
            <Place x={s === 0 ? 260 : 100} y={140}>
              <Coins n={3} />
            </Place>

            {/* good times: what the loan turns into */}
            <Fade show={s === 1}>
              <g transform="translate(150 120)">
                <Cotton />
              </g>
              <text x="174" y="124" fontSize="14">
                →
              </text>
              <g transform="translate(205 120)">
                <Yarn />
              </g>
              <text x="178" y="152" textAnchor="middle" fontSize="10" fontWeight="600" fill="#2a9d5b">
                borrowing to buy
              </text>
            </Fade>

            {/* crisis: what the loan is for */}
            <Fade show={crisis}>
              <g transform="translate(150 66)">
                <Yarn />
                <text x="0" y="24" textAnchor="middle" fontSize="9">
                  unsold
                </text>
                <g transform="translate(12 -10)">
                  <Cross />
                </g>
              </g>
              <g transform="translate(200 118)">
                <IOU text="pay Fri" />
              </g>
              <text x="178" y="152" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
                borrowing to pay
              </text>
            </Fade>

            {/* everyone queues */}
            <Fade show={s === 3} delay={300}>
              {["Tom", "Ironmaster", "Ava"].map((n, i) => (
                <Figure key={n} who={n === "Tom" ? "tom" : n === "Ava" ? "ava" : undefined} name={n} x={165 + i * 36} y={210} scale={0.6} mood="sad" />
              ))}
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 32.2 · Only money will do
 * "money suddenly stands as the only means of payment ... Hence the
 * universal depreciation of commodities."
 * ───────────────────────────────────────────────────────────── */
const CHAIN = [50, 130, 210, 290];

export function OnlyMoneyWillDo() {
  return (
    <Player
      id="anim-v3-32-2"
      title="32.2 · Only money will do"
      steps={[
        { caption: "Normal times. Tiny Town runs on promises. Notes saying “I owe you” pass from hand to hand and settle most bills." },
        { caption: "Then a big firm in the city fails. Suddenly nobody trusts a promise any more." },
        { caption: "Everyone wants real coins now. Marx: money suddenly becomes the only thing that can pay a debt." },
        { caption: "To get coins, people sell whatever they have, at any price. Yarn worth 30 sells for 15. (Example numbers.)" },
        {
          caption: "So prices of almost everything tumble at once. Marx says the credit system suddenly turns back into a money system: only gold seems to hold value.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the chain of promises */}
          {CHAIN.map((x, i) => (
            <g key={x}>
              <g style={{ opacity: s >= 1 ? 0.35 : 1, transition: "opacity 500ms" }}>
                <g transform={`translate(${x} 48)`}>
                  <IOU />
                </g>
              </g>
              <Fade show={s >= 1} delay={i * 200}>
                <g transform={`translate(${x + 12} 40)`}>
                  <Cross />
                </g>
              </Fade>
              {i < CHAIN.length - 1 && (
                <path d={`M${x + 18},48 L${CHAIN[i + 1] - 18},48`} stroke="#000" strokeOpacity={s >= 1 ? 0.15 : 0.4} markerEnd="url(#v3c32-arr)" />
              )}
            </g>
          ))}
          <defs>
            <marker id="v3c32-arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" fillOpacity=".5" />
            </marker>
          </defs>
          <text x="180" y="80" textAnchor="middle" fontSize="9.5" fillOpacity=".6">
            {s === 0 ? "promises pass as money" : "nobody trusts a promise"}
          </text>

          {/* everyone wants coins */}
          <Fade show={s >= 2}>
            <g transform="translate(180 110)">
              <Coins n={3} />
            </g>
            <text x="180" y="134" textAnchor="middle" fontSize="10" fontWeight="600">
              only coins will do
            </text>
          </Fade>

          {/* fire sale */}
          <Fade show={s >= 3}>
            {[70, 180, 290].map((x) => (
              <g key={x} transform={`translate(${x} 176)`}>
                <Yarn />
                <g transform="translate(26 -4)">
                  <Tag text={s >= 3 ? "15" : "30"} />
                </g>
                <text x="0" y="26" textAnchor="middle" fontSize="8.5" fillOpacity=".6" textDecoration="line-through">
                  was 30
                </text>
              </g>
            ))}
          </Fade>
          <Fade show={s === 4} delay={500}>
            <rect x="80" y="144" width="200" height="16" fill="#000" />
            <text x="180" y="155" textAnchor="middle" fontSize="9" fill="#fff">
              credit system turns back into a money system
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
