"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";
import { Bill } from "./ch25-animations";

const GOLD = "#e6b800";
const RED = "#d6452f";
const GREEN = "#2a9d5b";
const BEA = CAST.bea.color;

/* ─────────────────────────────────────────────────────────────
 * 30.1 · Interest goes the other way
 * Marx's cycle: low interest after the crisis; low but rising in the
 * recovery; average in the boom of "cavaliers" working "without any capital";
 * maximum in the crisis, with "a superabundance of idle industrial capital"
 * beside "an almost absolute absence of loan capital". "On the whole ... the
 * movement of loan capital ... is in the opposite direction to that of
 * industrial capital." The curves are illustrative, not data.
 * ───────────────────────────────────────────────────────────── */
const PHASES = [
  { name: "after a crash", industry: 0.15, interest: 0.12 },
  { name: "getting better", industry: 0.45, interest: 0.28 },
  { name: "boom", industry: 0.9, interest: 0.5 },
  { name: "crisis", industry: 0.25, interest: 0.95 },
];
const PX = (i: number) => 70 + i * 82;
const PY = (v: number) => 180 - v * 120;

export function InterestGoesTheOtherWay() {
  return (
    <Player
      id="anim-v3-30-1"
      title="30.1 · Interest goes the other way"
      steps={[
        { caption: "Just after a crash. Workshops are half empty, and spare money piles up in Bea's bank because nobody wants to borrow. Interest is low." },
        { caption: "Business picks up. Bills flow, customers pay on time, and loans are easy to get. Interest is still low, though rising a little." },
        { caption: "The boom. New mills, new railways. Marx says people now appear who borrow with no capital of their own at all. Interest climbs to its middle level." },
        { caption: "The crash. Nobody can pay, credit suddenly stops, and interest shoots to its highest. Idle mills stand next to a bank with nothing to lend." },
        {
          caption: "Put the two lines together. Interest is lowest when industry is weakest and highest when industry collapses. On the whole, Marx says, they move in opposite directions. (The curves are drawn to show the idea, not real data.)",
          ms: 5800,
        },
      ]}
    >
      {(s) => {
        const upTo = s === 4 ? 3 : s;
        const path = (k: "industry" | "interest") =>
          PHASES.slice(0, upTo + 1)
            .map((p, i) => `${i ? "L" : "M"}${PX(i)},${PY(p[k])}`)
            .join(" ");
        const cur = PHASES[upTo];
        return (
          <>
            <line x1="50" y1="186" x2="330" y2="186" stroke="#000" strokeOpacity=".3" />
            {PHASES.map((p, i) => (
              <text key={p.name} x={PX(i)} y="202" textAnchor="middle" fontSize="8.5" style={{ opacity: i <= upTo ? 1 : 0.25, fontWeight: i === upTo ? 700 : 400 }}>
                {p.name}
              </text>
            ))}

            <path d={path("industry")} fill="none" stroke={GREEN} strokeWidth="3.5" style={{ transition: "d 600ms" }} />
            <path d={path("interest")} fill="none" stroke={BEA} strokeWidth="3.5" strokeDasharray="7 4" style={{ transition: "d 600ms" }} />
            {PHASES.slice(0, upTo + 1).map((p, i) => (
              <g key={i}>
                <circle cx={PX(i)} cy={PY(p.industry)} r="4" fill={GREEN} />
                <circle cx={PX(i)} cy={PY(p.interest)} r="4" fill={BEA} />
              </g>
            ))}

            {/* legend */}
            <line x1="60" y1="22" x2="80" y2="22" stroke={GREEN} strokeWidth="3" />
            <text x="84" y="25" fontSize="8.5">
              how busy industry is
            </text>
            <line x1="200" y1="22" x2="220" y2="22" stroke={BEA} strokeWidth="3" strokeDasharray="6 3" />
            <text x="224" y="25" fontSize="8.5">
              interest rate
            </text>

            {/* little scene for the current phase */}
            <g transform={`translate(${PX(upTo)} ${Math.min(PY(cur.industry), PY(cur.interest)) - 18})`}>
              {upTo === 0 && (
                <g>
                  {[0, 1, 2].map((i) => (
                    <g key={i} transform={`translate(${-12 + i * 12} 0)`}>
                      <Coin r={5} />
                    </g>
                  ))}
                </g>
              )}
              {upTo === 2 && (
                <text textAnchor="middle" fontSize="8" fill={RED}>
                  borrowing on nothing
                </text>
              )}
              {upTo === 3 && (
                <text textAnchor="middle" fontSize="8.5" fontWeight="700" fill={RED}>
                  credit stops
                </text>
              )}
            </g>

            <Fade show={s === 4} delay={300}>
              <rect x="70" y="36" width="220" height="24" fill="#000" />
              <text x="180" y="52" textAnchor="middle" fontSize="9" fill="#fff">
                loan capital and industry: opposite ways
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 30.2 · Soundest on the eve of the crash
 * Bills made by "commodity transactions for the sole purpose of manufacturing
 * bills"; "business always appears almost excessively sound right on the eve
 * of a crash"; the Bank Act reports of 1857 and 1858; 1857: crisis in the
 * United States, gold to America, then back to England.
 * ───────────────────────────────────────────────────────────── */
export function SoundestBeforeTheCrash() {
  return (
    <Player
      id="anim-v3-30-2"
      title="30.2 · Soundest on the eve of the crash"
      steps={[
        { caption: "In the boom, some traders buy goods only so they can write bills against them. When a bill falls due, they pay it with a fresh bill. Paper keeps paper alive." },
        { caption: "From outside, everything looks wonderful. Payments seem to come in on time. Marx says business always looks almost too sound right on the eve of a crash." },
        { caption: "In 1857 the bank directors and experts, led by Lord Overstone, congratulated each other before Parliament on how sound business was. One month later, in August 1857, the crisis broke out." },
        { caption: "That same year the crisis broke out in the United States. Gold flowed from England to America. When the American bubble burst, the crisis hit England and the gold flowed back." },
        {
          caption: "Marx says the deepest cause is not a shortage of money. Production races ahead as if people could buy without limit, while most people are too poor to buy much.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {/* a tower of paper */}
          {Array.from({ length: 5 }, (_, i) => (
            <g
              key={i}
              style={{
                transform: s >= 3 ? `translate(${70 + (i % 2 ? 30 : -30) + i * 6}px, ${196 - i * 4}px) rotate(${i % 2 ? 40 : -35}deg)` : `translate(70px, ${190 - i * 30}px)`,
                transition: `transform 800ms cubic-bezier(.5,0,.4,1) ${i * 80}ms`,
                opacity: s === 0 && i > 2 ? 0 : 1,
              }}
            >
              <g transform="scale(.8)">
                <Bill amount="30" due={i ? `pays bill ${i}` : "for goods"} />
              </g>
            </g>
          ))}

          {/* the experts */}
          <Fade show={s === 1 || s === 2}>
            <Figure name="" label={false} x={210} y={206} scale={0.75} />
            <Figure name="Lord Overstone" x={260} y={206} scale={0.75} />
            <Figure name="" label={false} x={310} y={206} scale={0.75} />
            <g transform="translate(260 90)">
              <rect x="-74" y="-18" width="148" height="34" fill="#fff" stroke="#000" />
              <text y="-3" textAnchor="middle" fontSize="9">
                {s === 2 ? "1857: “business is very sound!”" : "all payments on time!"}
              </text>
              <text y="10" textAnchor="middle" fontSize="8" fill={GREEN}>
                everything looks fine
              </text>
            </g>
          </Fade>

          {/* 1857: gold across the Atlantic and back */}
          <Fade show={s === 3}>
            <text x="190" y="40" textAnchor="middle" fontSize="9" fontWeight="600">
              England
            </text>
            <text x="320" y="40" textAnchor="middle" fontSize="9" fontWeight="600">
              America
            </text>
            <path d="M200,60 C240,30 280,30 312,60" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="5 4" />
            <path d="M312,80 C280,110 240,110 200,80" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="5 4" />
            <text x="256" y="28" textAnchor="middle" fontSize="8">
              first: gold out
            </text>
            <text x="256" y="118" textAnchor="middle" fontSize="8">
              then: gold back
            </text>
            <text x="256" y="160" textAnchor="middle" fontSize="11" fontWeight="700" fill={RED}>
              crisis of 1857
            </text>
          </Fade>

          {/* the deeper cause */}
          <Fade show={s === 4}>
            <g transform="translate(250 110)">
              <rect x="-50" y="-58" width="40" height="70" fill={GREEN} opacity=".85" />
              <text x="-30" y="26" textAnchor="middle" fontSize="8">
                what is made
              </text>
              <rect x="20" y="-12" width="40" height="24" fill={BEA} opacity=".85" />
              <text x="40" y="26" textAnchor="middle" fontSize="8">
                what most
              </text>
              <text x="40" y="36" textAnchor="middle" fontSize="8">
                can buy
              </text>
            </g>
            <Figure who="sam" x={330} y={208} scale={0.65} mood="sad" />
          </Fade>
        </>
      )}
    </Player>
  );
}
