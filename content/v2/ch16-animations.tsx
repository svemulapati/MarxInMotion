"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Chest, Coin, Fade, Loaf, Tag } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const A = "#5b8fd9";
const B = "#8a5a2b";
const GOLD = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 16.1 · Capital A and capital B
 * Marx's numbers (pounds, shown as coins): both pay 100 a week in wages at a
 * 100% rate of surplus-value; A advances 500 turned over 10 times a year,
 * B advances 5,000 turned over once. Annual rates 1,000% and 100%.
 * ───────────────────────────────────────────────────────────── */
export function CapitalAAndCapitalB() {
  return (
    <Player
      id="anim-v2-16-1"
      title="16.1 · Capital A and capital B"
      steps={[
        { caption: "Two workshops each pay 100 coins of wages a week. In both, the workers' days are half paid and half unpaid: a rate of surplus-value of 100%." },
        { caption: "Workshop A sells its goods every 5 weeks. So it only needs to advance 500 coins of wages. The same 500 come back and go round 10 times in a year." },
        { caption: "Workshop B makes something that takes a whole year and is paid for the day it is finished. It must advance all 5,000 coins of the year's wages." },
        { caption: "In a year both make exactly the same surplus-value: 5,000 coins. Same workers, same hours, same exploitation." },
        {
          caption: "But measure it against the money advanced. A: 5,000 on 500 is 1,000% a year. B: 5,000 on 5,000 is 100% a year. A gap of 900%, from turnover alone.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {[
            { k: "A", x: 95, color: A, adv: 500, loops: 10, rate: "1,000%" },
            { k: "B", x: 265, color: B, adv: 5000, loops: 1, rate: "100%" },
          ].map((w) => {
            const shown = w.k === "A" ? s >= 1 : s >= 2;
            return (
              <g key={w.k}>
                <text x={w.x} y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill={w.color}>
                  Workshop {w.k}
                </text>
                <text x={w.x} y="36" textAnchor="middle" fontSize="9">
                  wages: 100 coins a week
                </text>

                {/* advanced capital as a stack whose height is the sum advanced */}
                <Fade show={shown}>
                  <text x={w.x} y="56" textAnchor="middle" fontSize="9">
                    advanced
                  </text>
                  <rect x={w.x - 40} y={60} width="80" height={w.k === "A" ? 10 : 60} fill={w.color} stroke="#000" strokeWidth=".8" />
                  <text x={w.x} y={w.k === "A" ? 68.5 : 94} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff">
                    {w.adv.toLocaleString("en")}
                  </text>
                  {/* the turnovers: one little loop per time round */}
                  <text x={w.x} y="136" textAnchor="middle" fontSize="9">
                    {w.loops === 1 ? "goes round once a year" : "goes round 10 times a year"}
                  </text>
                  {Array.from({ length: w.loops }, (_, i) => (
                    <circle
                      key={i}
                      cx={w.x - (w.loops - 1) * 7 + i * 14}
                      cy="148"
                      r="5"
                      fill="none"
                      stroke={w.color}
                      strokeWidth="2"
                      style={{ opacity: shown ? 1 : 0, transition: `opacity 300ms ${i * 120}ms` }}
                    />
                  ))}
                </Fade>

                {/* surplus-value for the year */}
                <Fade show={s >= 3}>
                  <text x={w.x} y="174" textAnchor="middle" fontSize="9.5">
                    surplus-value in a year
                  </text>
                  <text x={w.x} y="190" textAnchor="middle" fontSize="13" fontWeight="700" fill="#b38f00">
                    5,000
                  </text>
                </Fade>
                <Fade show={s === 4} delay={300}>
                  <text x={w.x} y="214" textAnchor="middle" fontSize="15" fontWeight="700" fill={w.color}>
                    {w.rate} a year
                  </text>
                </Fade>
              </g>
            );
          })}
          <line x1="180" y1="14" x2="180" y2="200" stroke="#000" strokeOpacity=".12" />
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.2 · Why the numbers differ
 * B's 5,000 as 50 stacks of 100, one stack spent each week.
 * ───────────────────────────────────────────────────────────── */
export function WhyTheNumbersDiffer() {
  return (
    <Player
      id="anim-v2-16-2"
      title="16.2 · Why the numbers differ"
      steps={[
        { caption: "Here are workshop B's 5,000 coins at the start of the year: 50 piles of 100, one for each week's wages." },
        { caption: "Week 1: one pile goes out to pay the workers. The other 49 just wait in the chest." },
        { caption: "Week 25: half the year has gone. Half the money is still waiting, doing nothing. Money waiting in a chest makes no surplus-value." },
        {
          caption: "Marx's test: put B in A's shoes. If B spent all 5,000 in 5 weeks (1,000 a week, ten times the workers), its money would also go round 10 times, make 50,000 of surplus-value, and earn 1,000% a year.",
          ms: 5600,
        },
        {
          caption: "So the rule from Volume I still holds: only the capital actually paying for labour-power makes surplus-value. Slow turnover just leaves more of it waiting.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const spent = s === 0 ? 0 : s === 1 ? 1 : s === 2 ? 25 : 50;
        return (
          <>
            <g transform="translate(52 120) scale(1.1)">
              <Chest open={s >= 1} />
            </g>
            <text x="52" y="146" textAnchor="middle" fontSize="8.5">
              the chest
            </text>
            {Array.from({ length: 50 }, (_, i) => {
              const out = i < spent;
              const col = i % 10;
              const row = Math.floor(i / 10);
              return (
                <g
                  key={i}
                  style={{
                    transform: `translate(${118 + col * 22}px, ${48 + row * 22}px)`,
                    opacity: out ? 1 : 0.45,
                    transition: `opacity 400ms ${s === 2 ? i * 12 : 0}ms`,
                  }}
                >
                  <Coin r={8} />
                </g>
              );
            })}
            <text x="217" y="28" textAnchor="middle" fontSize="9.5" fontWeight="600">
              {s >= 3 ? "all 5,000 working, in 5 weeks" : `${spent} of 50 piles paid out`}
            </text>
            <text x="217" y="168" textAnchor="middle" fontSize="8.5">
              bright = paying wages now · faded = waiting
            </text>
            <Fade show={s >= 3}>
              <text x="217" y="190" textAnchor="middle" fontSize="11" fontWeight="700" fill={B}>
                round 10 times a year: 1,000% again
              </text>
            </Fade>
            <g style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 400ms" }}>
              <Figure who="sam" x={330} y={214} scale={0.5} label={false} />
            </g>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 16.3 · A railway that feeds no one
 * Marx's point: long works like railways draw labour and means of
 * subsistence from the market for a year or more, and supply nothing back.
 * ───────────────────────────────────────────────────────────── */
export function ARailwayThatFeedsNoOne() {
  return (
    <Player
      id="anim-v2-16-3"
      title="16.3 · A railway that feeds no one"
      steps={[
        { caption: "A company starts building a railway that will take more than a year. It hires many workers and pays them every week." },
        { caption: "The railway workers spend their wages on bread and clothes, like everyone else." },
        { caption: "But for a whole year the railway sells nothing. Money keeps pouring in for bread, yet no extra bread is made. So the prices of food and materials go up." },
        { caption: "The railway pulls people off the farms and out of the crowd at the gate. For a while wages rise everywhere, until a crash throws them back." },
        {
          caption: "Marx: a planned society would work out beforehand how much labour it can spare for such long projects. Under capitalism, he says, reason only arrives afterwards.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the railway under construction */}
          <line x1="20" y1="70" x2="200" y2="70" stroke="#000" strokeWidth="3" />
          {Array.from({ length: 12 }, (_, i) => (
            <line key={i} x1={26 + i * 15} y1="65" x2={26 + i * 15} y2="75" stroke="#000" strokeWidth="1.5" />
          ))}
          <text x="110" y="56" textAnchor="middle" fontSize="9" fontWeight="600">
            railway: nothing to sell for a year
          </text>
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i} transform={`translate(${30 + i * 30} 112)`}>
              <circle cy="-15" r="4" fill="#fff" stroke="#000" strokeWidth=".8" />
              <rect x="-5" y="-11" width="10" height="12" fill={CAST.sam.color} />
            </g>
          ))}

          {/* wages flow to the bakery */}
          <Fade show={s >= 1}>
            <path d="M190,108 C215,112 240,120 262,128" stroke={GOLD} strokeWidth="2.5" fill="none" strokeDasharray="5 4" />
            <text x="226" y="104" textAnchor="middle" fontSize="8.5">
              wages spent
            </text>
          </Fade>
          <g transform="translate(300 140)">
            <rect x="-34" y="-24" width="68" height="40" fill="#fff" stroke="#000" />
            <text y="-30" textAnchor="middle" fontSize="8.5">
              Mia&apos;s bakery
            </text>
            <g transform="scale(.8)">
              <Loaf />
            </g>
          </g>
          <Fade show={s >= 2}>
            <g transform="translate(318 96)">
              <Tag text="dearer" />
            </g>
            <text x="290" y="178" textAnchor="middle" fontSize="9" fontWeight="600" fill="#d6452f">
              same bread, more money
            </text>
          </Fade>

          {/* pulled from the farms and the gate */}
          <Fade show={s === 3}>
            {Array.from({ length: 4 }, (_, i) => (
              <g key={i} transform={`translate(${30 + i * 16} 170)`}>
                <circle cy="-15" r="4" fill="#fff" stroke="#000" strokeWidth=".8" />
                <rect x="-5" y="-11" width="10" height="12" fill="#9a9a9a" />
              </g>
            ))}
            <path d="M58,150 L58,128" stroke="#000" strokeOpacity=".5" fill="none" markerEnd="url(#v2c16-up)" />
            <defs>
              <marker id="v2c16-up" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" fillOpacity=".5" />
              </marker>
            </defs>
            <text x="30" y="186" fontSize="8.5">
              from farms and the gate
            </text>
            <text x="200" y="210" textAnchor="middle" fontSize="9" fontWeight="600">
              wages up, then the crash
            </text>
          </Fade>
          <Fade show={s === 4}>
            <text x="180" y="210" textAnchor="middle" fontSize="9.5" fontWeight="600">
              plan before, or find out after
            </text>
          </Fade>
          <Fade show={s >= 1}>
            <g style={{ opacity: s === 2 ? 1 : 0.6 }}>
              <Figure who="mia" x={346} y={218} scale={0.4} label={false} mood={s === 2 ? "wow" : "happy"} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
