"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";
import { Stack } from "./ch21-animations";

const BEA = CAST.bea.color;
const MB = "#3a3a3a";

/* ─────────────────────────────────────────────────────────────
 * 23.1 · Same coins, two names
 * Uses Marx's Ch 21 example: 100 coins make 20 profit; 5 is interest.
 * ───────────────────────────────────────────────────────────── */
export function SameCoinsTwoNames() {
  return (
    <Player
      id="anim-v3-23-1"
      title="23.1 · Same coins, two names"
      steps={[
        { caption: "Last time: Moneybags borrowed 100 coins from Bea and made 20 profit. 5 went to Bea as interest, 15 stayed with him." },
        { caption: "The next year he has saved 100 coins of his own. Now he borrows nothing, and the whole 20 profit is his." },
        { caption: "Yet he still splits it in his head! “I could have lent these coins to Bea's bank for 5. So 5 is interest for owning money, and 15 is what I earned by running the mill.”" },
        { caption: "So every boss, borrowing or not, now sees profit as two different things: interest, the fruit of owning capital, and profit of enterprise, the fruit of using it." },
        {
          caption: "Marx asks how a split that only measured quantities, how much went to Bea, became a split between two kinds of thing. Once lending is common, every coin can earn interest, so every coin of profit gets sorted.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const borrowed = s === 0;
        return (
          <>
            <Figure who="bea" x={50} y={205} scale={0.85} style={{ opacity: borrowed || s >= 2 ? 1 : 0.25, transition: "opacity 500ms" }} />
            <Figure who="moneybags" x={300} y={205} scale={0.9} />
            <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
              {borrowed ? "with Bea's 100 coins" : "with his own 100 coins"}
            </text>

            {/* the profit of 20 */}
            <g transform="translate(180 72)">
              <rect x="-100" y="-16" width="200" height="32" fill={MB} stroke="#000" />
              <rect x="-100" y="-16" width={s === 1 ? 0 : 50} height="32" fill={BEA} stroke="#000" style={{ transition: "width 600ms" }} />
              <text x={s === 1 ? 0 : -75} y="5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" style={{ transition: "x 600ms" }}>
                {s === 1 ? "20, all his" : "5"}
              </text>
              {s !== 1 && (
                <text x="25" y="5" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
                  15
                </text>
              )}
            </g>
            <Fade show={s >= 3}>
              <text x="105" y="108" textAnchor="middle" fontSize="9" fill={BEA} fontWeight="600">
                interest
              </text>
              <text x="105" y="120" textAnchor="middle" fontSize="8">
                for owning capital
              </text>
              <text x="230" y="108" textAnchor="middle" fontSize="9" fontWeight="600">
                profit of enterprise
              </text>
              <text x="230" y="120" textAnchor="middle" fontSize="8">
                for using it
              </text>
            </Fade>

            <Fade show={s === 2}>
              <g transform="translate(218 150)">
                <Bubble w={128} lines={["I could have lent it", "for 5. So 5 is interest!"]} />
              </g>
            </Fade>
            <Fade show={s === 4}>
              <g transform="translate(180 158)">
                <rect x="-74" y="-14" width="148" height="26" fill="#000" />
                <text y="3" textAnchor="middle" fontSize="9" fill="#fff">
                  how much &rarr; what kind
                </text>
              </g>
            </Fade>
            <Fade show={s === 1}>
              <g transform="translate(236 150)">
                <Stack n={100} />
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 23.2 · Boss or conductor?
 * ───────────────────────────────────────────────────────────── */
export function BossOrConductor() {
  return (
    <Player
      id="anim-v3-23-2"
      title="23.2 · Boss or conductor?"
      steps={[
        { caption: "Mr. Moneybags starts to believe his 15 coins are a wage, a bigger one than Sam's, for the hard work of running the mill." },
        { caption: "Marx agrees that big shared work needs someone to co-ordinate it, like an orchestra needs a conductor. That job is real and useful." },
        { caption: "But in a mill there is a second job too: watching over workers whose interests clash with the owner's, to squeeze out as much as possible. That comes from the boss-and-worker relation itself." },
        { caption: "And a conductor need not own the instruments. Marx points to co-operative factories run by the workers themselves, where a manager is simply paid a wage." },
        {
          caption: "As more people train as managers, managers' pay falls like other skilled wages. The owner turns out not to be needed for running things at all, Marx says.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* Moneybags thinks he earns a wage */}
          <Fade show={s === 0}>
            <Figure who="moneybags" x={180} y={205} />
            <g transform="translate(196 140)">
              <Bubble w={128} lines={["My 15 coins are a", "wage for hard work!"]} />
            </g>
          </Fade>

          {/* the conductor */}
          <Fade show={s === 1 || s === 3}>
            <Figure name={s === 3 ? "manager (paid a wage)" : "conductor"} x={180} y={150} scale={0.85} />
            <line x1="194" y1="104" x2="212" y2="88" stroke="#000" strokeWidth="2" />
            {[60, 120, 240, 300].map((x) => (
              <g key={x}>
                <Figure name="" x={x} y={210} scale={0.65} label={false} />
                <text x={x + 12} y="186" fontSize="12">
                  {"♪"}
                </text>
              </g>
            ))}
          </Fade>
          <Fade show={s === 3}>
            <text x="180" y="24" textAnchor="middle" fontSize="10" fontWeight="600">
              a co-operative factory: no owner needed
            </text>
          </Fade>

          {/* the overseer */}
          <Fade show={s === 2}>
            <Figure who="moneybags" x={180} y={130} scale={0.85} mood="sad" />
            {[60, 120, 240, 300].map((x) => (
              <g key={x}>
                <Figure who={x === 120 ? "sam" : undefined} name={x === 120 ? undefined : ""} x={x} y={210} scale={0.65} label={false} />
                <line x1="180" y1="120" x2={x} y2="160" stroke="#d6452f" strokeOpacity=".5" strokeDasharray="3 3" />
              </g>
            ))}
            <text x="180" y="24" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
              watching to squeeze out more
            </text>
          </Fade>

          {/* managers' pay falls */}
          <Fade show={s === 4}>
            {[0, 1, 2, 3, 4].map((k) => (
              <Figure key={k} name="" x={60 + k * 60} y={205} scale={0.65} label={false} />
            ))}
            <text x="180" y="150" textAnchor="middle" fontSize="10">
              many trained managers
            </text>
            <path d="M120,40 L240,100" stroke="#d6452f" strokeWidth="3" markerEnd="url(#c23down)" />
            <text x="260" y="60" fontSize="10" fontWeight="600">
              their pay falls
            </text>
            <defs>
              <marker id="c23down" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#d6452f" />
              </marker>
            </defs>
          </Fade>
        </>
      )}
    </Player>
  );
}
