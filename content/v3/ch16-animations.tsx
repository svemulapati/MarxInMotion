"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Tick } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const GOLD = "#e6b800";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** Tom's shop: a little house with an awning. */
function Shop({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-40" y="-36" width="80" height="58" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <path d="M-44,-36 L44,-36 L38,-48 L-38,-48 Z" fill={CAST.tom.color} stroke="#000" strokeWidth="1" />
      <text y="-40" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="600">
        TOM&apos;S
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.1 · Tom buys the whole batch
 * Marx's own example is a dealer with £3,000 buying 30,000 yards of
 * linen at 2s. Here Tom buys Mr. Moneybags' yarn.
 * ───────────────────────────────────────────────────────────── */
export function TomBuysTheBatch() {
  return (
    <Player
      id="anim-v3-16-1"
      title="16.1 · Tom buys the whole batch"
      steps={[
        { caption: "Mr. Moneybags has a big batch of yarn. To sell it himself he would have to wait for customers one by one, with his money stuck in a pile of yarn." },
        { caption: "Then Tom the shopkeeper comes with his own money and buys the whole batch at once." },
        { caption: "Mr. Moneybags has his coins straight away. He can buy cotton and pay Sam, and the mill keeps spinning." },
        { caption: "But look: the yarn itself still has not been sold to the people who will use it. It now sits on Tom's shelves, waiting." },
        {
          caption: "So selling has become a separate business, with its own capital. Marx calls Tom's money commercial capital. His own example: a dealer with £3,000 buys 30,000 yards of linen at 2 shillings a yard.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const atTom = s >= 1;
        return (
          <>
            {/* the mill side */}
            <Figure who="moneybags" x={50} y={150} scale={0.75} />
            <rect x="12" y="160" width="76" height="4" fill="#000" fillOpacity=".15" />

            <Shop x={290} y={130} />
            <Figure who="tom" x={290} y={198} scale={0.6} />

            {/* the batch of yarn moves from the mill to Tom's shelves */}
            {Array.from({ length: 6 }, (_, i) => {
              const x = atTom ? 266 + (i % 3) * 24 : 94 + (i % 3) * 24;
              const y = atTom ? 108 + Math.floor(i / 3) * 22 : 120 + Math.floor(i / 3) * 22;
              return (
                <g key={i} style={{ transform: `translate(${x}px, ${y}px) scale(.55)`, transition: `transform ${T} ${i * 60}ms` }}>
                  <Yarn />
                </g>
              );
            })}

            {/* the coins go the other way */}
            <g style={{ transform: `translate(${s >= 2 ? 50 : 290}px, ${s >= 2 ? 64 : 64}px)`, opacity: s >= 1 ? 1 : 0, transition: `transform ${T}, opacity 400ms` }}>
              <Coins n={3} />
            </g>
            <Fade show={s >= 1}>
              <path d="M110,74 L250,74" stroke="#000" strokeOpacity=".3" strokeDasharray="4 4" />
              <text x="180" y="68" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                Tom pays at once
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <g transform="translate(50 40)">
                <Tick />
              </g>
              <text x="50" y="30" textAnchor="middle" fontSize="8.5">
                mill keeps going
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="290" y="58" textAnchor="middle" fontSize="8.5">
                still waiting for
              </text>
              <text x="290" y="69" textAnchor="middle" fontSize="8.5">
                the real buyers
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <rect x="110" y="182" width="120" height="22" fill="#000" />
              <text x="170" y="197" textAnchor="middle" fontSize="9" fill={GOLD} fontWeight="600">
                commercial capital
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.2 · Does Tom make the yarn worth more?
 * Merchant's capital creates neither value nor surplus-value directly,
 * but can raise the rate of profit by shortening circulation time.
 * ───────────────────────────────────────────────────────────── */
export function DoesTomAddValue() {
  return (
    <Player
      id="anim-v3-16-2"
      title="16.2 · Does Tom make the yarn worth more?"
      steps={[
        { caption: "A skein of yarn leaves the mill worth 30 coins: 24 of cotton and wear, 3 for Sam's wage, 3 of surplus-value." },
        { caption: "It sits in Tom's shop. Tom dusts it, sells it, counts the money. Does any of that change the yarn? No. Its value is still 30." },
        { caption: "Marx: merchant's capital “does not create either value or surplus-value, at least not directly”. (Carrying goods is different: back in Volume II, the carter added value.)" },
        { caption: "But Tom does help Mr. Moneybags. Without Tom, the mill's money spent weeks stuck as unsold yarn. With Tom, it comes back fast." },
        {
          caption: "Less money waiting means more of it is working in the mill. So, Marx says, the merchant can raise the rate of profit indirectly, even though he makes no value himself.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const atTom = s >= 1;
        return (
          <>
            <text x="20" y="22" fontSize="10" fontWeight="600">
              one batch of yarn
            </text>
            <g style={{ transform: `translate(${atTom ? 250 : 60}px, 60px)`, transition: `transform ${T}` }}>
              <Yarn />
            </g>
            <Fade show={atTom}>
              <Figure who="tom" x={300} y={92} scale={0.55} />
            </Fade>
            <text x="60" y="92" textAnchor="middle" fontSize="8.5" fillOpacity=".6" style={{ opacity: atTom ? 0.3 : 1 }}>
              at the mill
            </text>

            {/* value bar never changes */}
            <text x="20" y="118" fontSize="9" fillOpacity=".6">
              value of the yarn
            </text>
            <rect x="20" y="124" width={24 * 8} height="16" fill="#bdbdbd" stroke="#000" strokeWidth=".6" />
            <rect x={20 + 24 * 8} y="124" width={3 * 8} height="16" fill="#2a9d5b" stroke="#000" strokeWidth=".6" />
            <rect x={20 + 27 * 8} y="124" width={3 * 8} height="16" fill={GOLD} stroke="#000" strokeWidth=".6" />
            <text x={20 + 30 * 8 + 6} y="136" fontSize="10" fontWeight="600">
              30
            </text>
            <Fade show={s >= 1 && s <= 2}>
              <text x="300" y="136" fontSize="9" fill="#d6452f" fontWeight="600">
                still 30
              </text>
            </Fade>

            {/* circulation time: weeks the money waits */}
            <Fade show={s >= 3}>
              <text x="20" y="168" fontSize="9" fillOpacity=".6">
                weeks Mr. Moneybags&apos; money waits as unsold yarn
              </text>
              <rect x="20" y="176" height="14" width={s >= 4 ? 30 : 180} fill="#d6452f" fillOpacity=".7" style={{ transition: `width ${T}` }} />
              <text x={s >= 4 ? 56 : 206} y="187" fontSize="9" style={{ transition: `x ${T}` }}>
                {s >= 4 ? "with Tom" : "without Tom"}
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
