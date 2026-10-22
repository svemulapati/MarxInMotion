"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Coins, Fade, Loaf, Place } from "@/components/anim/Things";
import { TONE, Yarn } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GRAY = "#bdbdbd";

/* ─────────────────────────────────────────────────────────────
 * 23.1 · Last week pays this week
 * Workshop numbers from CONTINUITY.md: each 12-hour day Sam makes
 * 6 coins of new value and is paid 3. A six-day week: 36 and 18.
 * ───────────────────────────────────────────────────────────── */
export function LastWeekPaysThisWeek() {
  return (
    <Player
      id="anim-23-1"
      title="23.1 · Last week pays this week"
      steps={[
        { caption: "Monday morning. Sam starts work. He will not be paid a single coin until Saturday." },
        { caption: "All week Sam spins. Six 12-hour days make 36 coins of new value, sitting in the yarn." },
        { caption: "Saturday. Mr. Moneybags pays Sam his week's wage, 18 coins, out of his purse. It looks as if the boss feeds Sam out of his own savings." },
        { caption: "But look again. Sam was paid after he worked. By Saturday his yarn already held 36 coins of new value. His wage is just part of what he himself made.", ms: 4400 },
        {
          caption: "And so it goes every week: last week's yarn is sold, and that money pays this week's wage. In Marx's words, “it is his labour of last week” that pays for his labour-power this week.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="180" y="22" textAnchor="middle" fontSize="11" fontWeight="600">
            {["Monday", "Monday to Saturday", "Saturday", "Saturday", "every week"][s]}
          </text>

          <Figure who="sam" x={55} y={206} scale={0.85} mood={s === 2 ? "wow" : "happy"} />
          <Figure who="moneybags" x={305} y={206} scale={0.85} />

          {/* the yarn Sam makes during the week */}
          {Array.from({ length: 6 }, (_, i) => (
            <Place key={i} x={128 + (i % 3) * 34} y={i < 3 ? 70 : 96} scale={0.85} show={s >= 1} delay={i * 120}>
              <Yarn />
            </Place>
          ))}
          <Fade show={s >= 1} delay={700}>
            <text x="162" y="124" textAnchor="middle" fontSize="9.5">
              new value this week: <tspan fontWeight="700">36 coins</tspan>
            </text>
          </Fade>

          {/* the purse and the wage */}
          <g transform="translate(305 104)">
            <path d="M-16,-6 Q-18,16 0,18 Q18,16 16,-6 Z" fill="#8a5a2b" stroke="#000" />
            <path d="M-12,-6 Q0,-14 12,-6" fill="none" stroke="#000" />
            <text y="34" textAnchor="middle" fontSize="8.5">
              purse
            </text>
          </g>
          <Place x={s >= 2 ? 84 : 305} y={s >= 2 ? 136 : 104} show={s >= 2}>
            <Coins n={4} />
            <text y="18" textAnchor="middle" fontSize="9" fontWeight="600" fill={TONE.wage}>
              18 coins
            </text>
          </Place>

          {/* where the wage really came from */}
          <Fade show={s >= 3} delay={200}>
            <path d="M128,126 C120,132 114,136 108,136" stroke={TONE.wage} strokeWidth="2" fill="none" markerEnd="url(#c23arr)" />
            <text x="162" y="150" textAnchor="middle" fontSize="9.5" fill={TONE.wage} fontWeight="600">
              18 of Sam&apos;s own 36
            </text>
          </Fade>
          <Fade show={s === 4} delay={300}>
            <path
              d="M200,166 a26,14 0 1,1 -1,0"
              fill="none"
              stroke="#000"
              strokeDasharray="4 3"
              markerEnd="url(#c23arr)"
            />
            <text x="200" y="198" textAnchor="middle" fontSize="8.5">
              sold, then paid out
            </text>
          </Fade>
          <defs>
            <marker id="c23arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 23.2 · Where did the first 100 coins go?
 * Marx's own ratio, scaled down: £1,000 of capital and £200 of
 * surplus-value eaten each year is gone, in value, after 5 years.
 * ───────────────────────────────────────────────────────────── */
const YEARS = [0, 1, 3, 5, 5];

export function WhereDidTheFirstCoinsGo() {
  return (
    <Player
      id="anim-23-2"
      title="23.2 · Where did the first 100 coins go?"
      steps={[
        { caption: "Let's use simple round numbers. Say Mr. Moneybags started with 100 coins of his own savings, and every year the workshop brings him 20 coins of surplus-value." },
        { caption: "He spends all 20 on himself: dinners, a carriage, a new hat. The workshop stays the same size. Marx calls this simple reproduction. After one year he has eaten 20 coins." },
        { caption: "After three years he has eaten 60 coins. His workshop looks just as it did, so he thinks his own 100 coins are still safely in it." },
        { caption: "After five years he has eaten 100 coins, as much as he put in. The value now in his workshop is nothing but surplus-value made by his workers. Not one coin's worth of his own savings is left.", ms: 5200 },
        {
          caption: "Marx's rule: what he put in, divided by what he eats each year, gives the number of years. 100 ÷ 20 = 5. If he ate only half, 10 a year, it would take 10 years. (Marx's own sums use £1,000 and £200.)",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const year = YEARS[s];
        const gold = year * 2; // each year, 20 coins: two bricks of 10
        return (
          <>
            <text x="180" y="22" textAnchor="middle" fontSize="12" fontWeight="600">
              year {year}
            </text>

            <Figure who="moneybags" x={42} y={196} scale={0.8} />

            {/* the workshop's value, in ten bricks of 10 coins */}
            <text x="170" y="48" textAnchor="middle" fontSize="9" fillOpacity=".6">
              the workshop: 100 coins of value
            </text>
            {Array.from({ length: 10 }, (_, i) => {
              const isGold = i < gold;
              return (
                <g key={i} transform={`translate(${96 + (i % 5) * 30} ${58 + Math.floor(i / 5) * 24})`}>
                  <rect
                    width="28"
                    height="22"
                    fill={isGold ? TONE.surplus : GRAY}
                    stroke="#000"
                    strokeWidth=".8"
                    style={{ transition: `fill 600ms ease ${(i % 2) * 200}ms` }}
                  />
                  <text x="14" y="15" textAnchor="middle" fontSize="8">
                    10
                  </text>
                </g>
              );
            })}
            <g transform="translate(96 118)">
              <rect width="10" height="10" fill={GRAY} stroke="#000" strokeWidth=".8" />
              <text x="14" y="9" fontSize="8.5">
                his own savings
              </text>
              <rect x="88" width="10" height="10" fill={TONE.surplus} stroke="#000" strokeWidth=".8" />
              <text x="102" y="9" fontSize="8.5">
                made by the workers
              </text>
            </g>

            {/* what he has eaten */}
            <g transform="translate(300 74)">
              <ellipse rx="26" ry="9" fill="#fff" stroke="#000" />
              <ellipse rx="17" ry="5" fill="none" stroke="#000" strokeOpacity=".3" />
              <text y="26" textAnchor="middle" fontSize="9">
                eaten so far
              </text>
              <text y="44" textAnchor="middle" fontSize="16" fontWeight="700">
                {year * 20}
              </text>
            </g>

            <Fade show={s === 3}>
              <text x="200" y="160" textAnchor="middle" fontSize="11" fontWeight="600">
                every brick is now the workers&apos; work
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="200" y="160" textAnchor="middle" fontSize="12" fontWeight="600">
                100 ÷ 20 = 5 years
              </text>
              <text x="200" y="180" textAnchor="middle" fontSize="10">
                eat only 10 a year: 100 ÷ 10 = 10 years
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 23.3 · Invisible threads
 * "The Roman slave was held by fetters: the wage labourer is bound
 * to his owner by invisible threads."
 * ───────────────────────────────────────────────────────────── */
function House() {
  return (
    <g>
      <polygon points="-13,-2 0,-14 13,-2" fill="#c0392b" stroke="#000" strokeWidth="1" />
      <rect x="-10" y="-2" width="20" height="16" fill="#fff" stroke="#000" strokeWidth="1" />
      <rect x="-3" y="5" width="6" height="9" fill="#8a5a2b" />
    </g>
  );
}

export function InvisibleThreads() {
  return (
    <Player
      id="anim-23-3"
      title="23.3 · Invisible threads"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Long ago in Rome, a slave was held by a chain. He could not leave his owner." },
        { caption: "Sam wears no chain. He is free to quit Mr. Moneybags and work for someone else." },
        { caption: "But on Saturday his wage goes on bread, rent and clothes. It has to: that is what keeps him alive. By Sunday his pocket is empty again." },
        { caption: "So on Monday Sam must sell his labour-power again. He can change bosses, but he cannot stop working for one." },
        {
          caption: "Marx: “the wage labourer is bound to his owner by invisible threads”. Even what Sam eats makes next week's worker for the workshop. He “belongs to capital before he has sold himself”.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="150" y1="10" x2="150" y2="210" stroke="#000" strokeOpacity=".12" />

          {/* Rome */}
          <text x="75" y="22" textAnchor="middle" fontSize="10" fontWeight="600">
            Rome
          </text>
          <Figure name="slave" x={40} y={200} scale={0.75} mood="sad" />
          <Figure name="owner" x={112} y={200} scale={0.75} />
          {Array.from({ length: 6 }, (_, i) => (
            <ellipse key={i} cx={56 + i * 8} cy={172} rx="5" ry="3" fill="none" stroke="#555" strokeWidth="1.6" />
          ))}
          <text x="75" y="134" textAnchor="middle" fontSize="8.5">
            a chain you can see
          </text>

          {/* Tiny Town */}
          <text x="255" y="22" textAnchor="middle" fontSize="10" fontWeight="600">
            Tiny Town
          </text>
          <Figure who="sam" x={255} y={200} scale={0.75} mood={s === 2 ? "sad" : "happy"} />
          <Fade show={s === 1}>
            <text x="255" y="134" textAnchor="middle" fontSize="8.5">
              no chain at all
            </text>
          </Fade>

          {/* where the wage goes */}
          <Fade show={s === 2}>
            <g transform="translate(205 70) scale(.7)">
              <Loaf />
            </g>
            <g transform="translate(255 70)">
              <House />
            </g>
            <g transform="translate(305 70) scale(.55)">
              <Coat />
            </g>
            <text x="205" y="94" textAnchor="middle" fontSize="8">
              bread
            </text>
            <text x="255" y="94" textAnchor="middle" fontSize="8">
              rent
            </text>
            <text x="305" y="94" textAnchor="middle" fontSize="8">
              clothes
            </text>
            {[205, 255, 305].map((x) => (
              <path key={x} d={`M255,134 L${x},104`} stroke="#e6b800" strokeWidth="1.5" strokeDasharray="3 3" />
            ))}
            <text x="255" y="122" textAnchor="middle" fontSize="9" fontWeight="600">
              pocket: empty
            </text>
          </Fade>

          {/* two bosses and the threads */}
          <Fade show={s >= 3}>
            <Figure who="moneybags" x={330} y={200} scale={0.7} />
            <Figure name="another boss" x={186} y={200} scale={0.7} />
            {[186, 330].map((x) => (
              <path
                key={x}
                d={`M255,160 Q${(255 + x) / 2},${s === 4 ? 96 : 110} ${x},150`}
                fill="none"
                stroke="#888"
                strokeWidth={s === 4 ? 1.4 : 0.9}
                strokeDasharray="2 3"
                style={{ transition: `stroke-width ${T}` }}
              />
            ))}
            <text x="258" y="80" textAnchor="middle" fontSize="9" fontWeight="600">
              threads you cannot see
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
