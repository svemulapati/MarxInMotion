"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Gold, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GREEN = "#2a9d5b";
const GOLD = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 31.1 · Two piles that move apart
 * Over the industrial cycle the money waiting to be lent and the
 * capital actually at work in the workshops often move in opposite
 * directions (Marx: "inversely proportional").
 * ───────────────────────────────────────────────────────────── */
const PHASES = [
  { label: "after the crash", work: 30, vault: 110, interest: "low" },
  { label: "calm again", work: 70, vault: 90, interest: "low" },
  { label: "boom", work: 115, vault: 45, interest: "rising" },
  { label: "crash", work: 25, vault: 15, interest: "highest" },
];
const COL = (i: number) => 64 + i * 78;
const BASE = 182;

export function TwoPilesMoveApart() {
  return (
    <Player
      id="anim-v3-31-1"
      title="31.1 · Two piles that move apart"
      steps={[
        { caption: "Two piles to watch. Green: how much work the town's workshops are really doing. Gold: the coins sitting in Bea's bank, waiting to be lent." },
        { caption: "Just after a crash, many workshops stand still. Their owners leave their coins with Bea, so her vault is full and loans are cheap." },
        { caption: "Things calm down. Workshops start up again and borrow, but there is still plenty to lend, so interest stays low." },
        { caption: "Boom! Every workshop is busy and wants to borrow more. Bea's pile shrinks and interest starts to rise." },
        { caption: "Crash. Work collapses, and so does the pile of coins to lend. Now interest jumps to its highest of all.", ms: 4200 },
        {
          caption: "So a full vault does not mean a busy town. Marx says a big pile of money to lend often goes with workshops standing still.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          {/* legend */}
          <rect x="14" y="14" width="10" height="10" fill={GREEN} />
          <text x="28" y="23" fontSize="9.5">
            work really being done
          </text>
          <rect x="160" y="14" width="10" height="10" fill={GOLD} />
          <text x="174" y="23" fontSize="9.5">
            coins waiting at Bea&apos;s bank
          </text>
          <line x1="20" y1={BASE} x2="340" y2={BASE} stroke="#000" strokeOpacity=".25" />

          {PHASES.map((p, i) => {
            const on = s >= i + 1;
            const x = COL(i);
            return (
              <g key={p.label} style={{ opacity: on ? 1 : 0.12, transition: "opacity 500ms" }}>
                <rect x={x - 26} y={BASE - (on ? p.work : 0)} width="24" height={on ? p.work : 0} fill={GREEN} style={{ transition: `all ${T}` }} />
                <rect x={x + 2} y={BASE - (on ? p.vault : 0)} width="24" height={on ? p.vault : 0} fill={GOLD} style={{ transition: `all ${T}` }} />
                <text x={x} y={BASE + 14} textAnchor="middle" fontSize="9.5">
                  {p.label}
                </text>
                <text
                  x={x}
                  y={BASE + 27}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight={p.interest === "highest" ? 700 : 400}
                  fill={p.interest === "highest" ? "#d6452f" : "#000"}
                  fillOpacity={p.interest === "highest" ? 1 : 0.6}
                >
                  interest {p.interest}
                </text>
              </g>
            );
          })}

          <Fade show={s === 0}>
            <Figure who="bea" x={310} y={150} scale={0.8} />
          </Fade>

          <Fade show={s === 5} delay={300}>
            <rect x="40" y="36" width="280" height="22" fill="#000" />
            <text x="180" y="51" textAnchor="middle" fontSize="10" fill="#fff">
              more money to lend is not more work being done
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 31.2 · Gold from far away
 * Marx's example: the Australian and Californian gold of 1852 and
 * 1853 went into the Bank of England and swelled loanable money.
 * ───────────────────────────────────────────────────────────── */
function Ship() {
  return (
    <g>
      <path d="M-26,0 L26,0 L18,12 L-18,12 Z" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="-30" stroke="#000" strokeWidth="1.5" />
      <path d="M2,-28 L20,-6 L2,-6 Z" fill="#fff" stroke="#000" strokeWidth="1" />
      <path d="M-2,-24 L-16,-6 L-2,-6 Z" fill="#fff" stroke="#000" strokeWidth="1" />
    </g>
  );
}

function BankHouse({ label }: { label: string }) {
  return (
    <g>
      <path d="M-38,-30 L0,-50 L38,-30 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <rect x="-34" y="-30" width="68" height="40" fill="#fff" stroke="#000" strokeWidth="1.2" />
      {[-22, -8, 8, 22].map((x) => (
        <rect key={x} x={x - 3} y="-26" width="6" height="32" fill="#e8e8e8" stroke="#000" strokeWidth=".6" />
      ))}
      <text y="24" textAnchor="middle" fontSize="9">
        {label}
      </text>
    </g>
  );
}

function Spindles({ n }: { n: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <g key={i} transform={`translate(${(i - (n - 1) / 2) * 12} 0)`}>
          <line x1="0" y1="-14" x2="0" y2="6" stroke="#000" strokeWidth="1.5" />
          <ellipse cx="0" cy="-4" rx="4" ry="6" fill="#f3e3b3" stroke="#000" strokeWidth=".8" />
        </g>
      ))}
    </g>
  );
}

export function GoldFromFarAway() {
  return (
    <Player
      id="anim-v3-31-2"
      title="31.2 · Gold from far away"
      steps={[
        { caption: "In 1852 and 1853, gold rushes in Australia and California sent ships full of new gold to England." },
        { caption: "The gold went into the Bank of England. The people who brought it got bank-notes in return." },
        { caption: "Suddenly the banks had far more money to lend. In Tiny Town, Bea's vault bulges too." },
        {
          caption: "But look at the workshop. Not one new spindle, not one extra worker. Marx's point: a pile of money to lend can grow without any real capital growing at all.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* sea */}
          <rect x="0" y="80" width="130" height="30" fill="#cfe0f2" />
          <text x="10" y="126" fontSize="9" fillOpacity=".6">
            from Australia and California
          </text>
          <Place x={s === 0 ? 34 : 112} y={86}>
            <Ship />
            <Fade show={s === 0}>
              <g transform="translate(0 -40)">
                <Gold label="Au" />
              </g>
            </Fade>
          </Place>

          {/* the Bank of England */}
          <g transform="translate(180 100)">
            <BankHouse label="Bank of England" />
          </g>
          <Fade show={s >= 1}>
            <g transform="translate(180 30)">
              <Gold label="Au" />
            </g>
            <rect x="150" y="140" width="30" height="16" fill="#fffbe6" stroke="#000" strokeWidth=".8" />
            <text x="165" y="151" textAnchor="middle" fontSize="7.5">
              £5 note
            </text>
            <text x="190" y="152" fontSize="9">
              notes back
            </text>
          </Fade>

          {/* Bea's vault */}
          <g transform="translate(300 60)">
            <Figure who="bea" x={0} y={40} scale={0.7} />
            <text y="58" textAnchor="middle" fontSize="9">
              to lend
            </text>
          </g>
          <rect
            x="280"
            y={s >= 2 ? 150 : 178}
            width="40"
            height={s >= 2 ? 50 : 22}
            fill={GOLD}
            style={{ transition: `all ${T}` }}
          />
          <g style={{ transform: `translate(300px, ${s >= 2 ? 140 : 168}px)`, transition: `transform ${T}` }}>
            <Coins n={s >= 2 ? 4 : 2} />
          </g>

          {/* the workshop, unchanged */}
          <Fade show={s >= 3}>
            <rect x="20" y="150" width="120" height="56" fill="#fff" stroke="#000" strokeWidth="1" />
            <text x="80" y="164" textAnchor="middle" fontSize="9">
              Moneybags&apos; workshop
            </text>
            <g transform="translate(80 192)">
              <Spindles n={6} />
            </g>
            <text x="150" y="190" fontSize="10" fontWeight="600" fill={CAST.moneybags.color}>
              same as before
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
