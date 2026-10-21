"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";

/** A bale of cotton. */
function Bale() {
  return (
    <g>
      <rect x="-9" y="-7" width="18" height="14" rx="2" fill="#f4f4f4" stroke="#000" strokeWidth="1" />
      <line x1="-9" y1="-2" x2="9" y2="-2" stroke="#000" strokeWidth=".7" />
      <line x1="-9" y1="3" x2="9" y2="3" stroke="#000" strokeWidth=".7" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.1 · Three tugs of war (competition sets the price)
 * ───────────────────────────────────────────────────────────── */
export function ThreeTugsOfWar() {
  return (
    <Player
      id="anim-wl-3-1"
      title="3.1 · Three tugs of war"
      viewBox="0 0 360 230"
      steps={[
        { caption: "At the market, prices are set by competition. Marx says there are three tugs of war going on at once." },
        { caption: "One: sellers fight each other. Each wants to sell the most, so each sells a little cheaper. That pulls the price down." },
        { caption: "Two: buyers fight each other. Each wants to get the goods first, so each offers a little more. That pulls the price up." },
        { caption: "Three: buyers against sellers. Whichever side fights less among itself wins. Marx's example: 100 bales of cotton, but buyers who want 1,000. The buyers fight, the sellers relax, and the price shoots up.", ms: 5600 },
        { caption: "The opposite happens even more often: far too many bales and too few buyers. Sellers fight to get rid of them, and the price crashes.", ms: 4600 },
      ]}
    >
      {(s) => {
        const scarce = s === 3;
        const glut = s === 4;
        const priceY = s === 1 || glut ? 175 : s === 2 || scarce ? 45 : 110;
        return (
          <>
            {/* price gauge */}
            <line x1="330" y1="35" x2="330" y2="185" stroke="#000" strokeWidth="2" />
            <text x="330" y="28" textAnchor="middle" fontSize="8.5">
              price
            </text>
            <g style={{ transform: `translate(330px, ${priceY}px)`, transition: "transform 800ms cubic-bezier(.2,.8,.2,1)" }}>
              <path d="M-14,0 L-4,-6 L-4,6 Z" fill="#d6452f" />
            </g>

            {/* sellers on the left, buyers on the right */}
            <text x="80" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
              sellers
            </text>
            <text x="240" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
              buyers
            </text>
            {[0, 1, 2].map((i) => (
              <Figure key={`s${i}`} name="" label={false} x={45 + i * 35} y={120} scale={0.6} mood={s === 1 || glut ? "sad" : "happy"} />
            ))}
            {[0, 1, 2].map((i) => (
              <Figure key={`b${i}`} name="" label={false} x={205 + i * 35} y={120} scale={0.6} mood={s === 2 || scarce ? "wow" : "happy"} />
            ))}

            {/* fights inside each camp */}
            <Fade show={s === 1 || glut}>
              <text x="80" y="140" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                &ldquo;cheaper!&rdquo; &ldquo;cheaper still!&rdquo;
              </text>
            </Fade>
            <Fade show={s === 2 || scarce}>
              <text x="240" y="140" textAnchor="middle" fontSize="8.5" fill="#2a9d5b">
                &ldquo;I&apos;ll pay more!&rdquo;
              </text>
            </Fade>

            {/* the bales: few when scarce, many in a glut */}
            {Array.from({ length: 12 }, (_, i) => {
              const show = scarce ? i < 2 : glut ? true : s === 0 ? i < 6 : i < 6;
              return (
                <g key={i} transform={`translate(${50 + (i % 6) * 22} ${168 + Math.floor(i / 6) * 18})`} style={{ opacity: show ? 1 : 0, transition: "opacity 400ms" }}>
                  <Bale />
                </g>
              );
            })}
            <Fade show={scarce}>
              <text x="160" y="214" textAnchor="middle" fontSize="9">
                100 bales for sale, buyers want 1,000
              </text>
            </Fade>
            <Fade show={glut}>
              <text x="160" y="214" textAnchor="middle" fontSize="9">
                far too many bales, too few buyers
              </text>
            </Fade>
            <Fade show={s === 3 || s === 4}>
              <text x="290" y={priceY + 4} textAnchor="end" fontSize="9" fontWeight="600" fill="#d6452f" style={{ transition: "y 800ms" }}>
                {scarce ? "price up" : "price down"}
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.2 · The see-saw around the cost (cost of production)
 * ───────────────────────────────────────────────────────────── */
const WAVE = "M20,110 C50,40 80,40 110,110 C140,180 170,180 200,110 C230,50 260,50 290,110 C310,150 325,150 340,120";

export function SeeSawAroundTheCost() {
  return (
    <Player
      id="anim-wl-3-2"
      title="3.2 · The see-saw around the cost"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Prices go up and down all the time. But up and down compared with what? Marx's answer: compared with what it costs to make the thing." },
        { caption: "When the price of yarn is high, spinning pays extra. Money rushes into spinning and new workshops open." },
        { caption: "Soon there's too much yarn. The price falls, even below what it cost to make." },
        { caption: "Now spinning loses money. Bosses pull out, less yarn gets made, and the price climbs back up. Round and round it goes.", ms: 4400 },
        { caption: "Over time the ups and downs cancel out, so yarn sells, on average, at its cost of production. And that cost is really the work it took: the hours in the cotton, the tools and the spinning.", ms: 5200 },
      ]}
    >
      {(s) => (
        <>
          {/* the cost of production line */}
          <line x1="20" y1="110" x2="340" y2="110" stroke="#000" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x="22" y="124" fontSize="8.5">
            cost of production
          </text>
          {/* the price wave draws itself step by step */}
          <path
            d={WAVE}
            fill="none"
            stroke="#d6452f"
            strokeWidth="3"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - [0, 0.22, 0.45, 0.8, 1][s]}
            style={{ transition: "stroke-dashoffset 900ms ease" }}
          />
          <text x="340" y="30" textAnchor="end" fontSize="8.5" fill="#d6452f">
            the price
          </text>

          <Fade show={s === 1}>
            <text x="65" y="32" textAnchor="middle" fontSize="9">
              high price: money rushes in
            </text>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${30 + i * 22} 200)`}>
                <rect x="-8" y="-14" width="16" height="14" fill="#fff" stroke="#000" />
                <polygon points="-8,-14 0,-20 8,-14" fill="#000" />
              </g>
            ))}
          </Fade>
          <Fade show={s === 2}>
            <text x="155" y="196" textAnchor="middle" fontSize="9">
              too much yarn: price below the cost
            </text>
          </Fade>
          <Fade show={s === 3}>
            <text x="245" y="34" textAnchor="middle" fontSize="9">
              bosses pull out, price recovers
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="80" y="196" width="200" height="24" fill="#000" />
            <text x="180" y="212" textAnchor="middle" fontSize="9" fill="#fff">
              on average: cost of production = hours of work
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
