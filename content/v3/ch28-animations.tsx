"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade, Loaf, Tick } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";
import { Bank } from "./ch25-animations";

const RED = "#d6452f";
const GREEN = "#2a9d5b";
const BEA = CAST.bea.color;
const T = "800ms cubic-bezier(.2,.8,.2,1)";

/** A five-coin bank-note. */
function Note({ tag }: { tag?: string }) {
  return (
    <g>
      <rect x="-18" y="-10" width="36" height="20" fill="#e3f0d9" stroke="#000" strokeWidth="1" />
      <circle r="6" fill="none" stroke={GREEN} strokeWidth="1" />
      <text y="3" textAnchor="middle" fontSize="7" fontWeight="700">
        5
      </text>
      {tag && (
        <text y="-15" textAnchor="middle" fontSize="7.5" fontWeight="600">
          {tag}
        </text>
      )}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 28.1 · One note, two jobs
 * Marx: the same five-pound note passes between the spending of revenue and
 * the transfer of capital; the real distinction is "between the money-form of
 * revenue and the money-form of capital", not between currency and capital.
 * ───────────────────────────────────────────────────────────── */
const STOP = [
  { x: 60, y: 120, tag: "capital", who: "moneybags" as const },
  { x: 180, y: 60, tag: "spending money", who: "sam" as const },
  { x: 300, y: 120, tag: "capital again", who: "mia" as const },
  { x: 180, y: 172, tag: "in the bank", who: "bea" as const },
];

export function OneNoteTwoJobs() {
  return (
    <Player
      id="anim-v3-28-1"
      title="28.1 · One note, two jobs"
      steps={[
        { caption: "Follow one 5-coin note. Mr. Moneybags pays it to Sam as wages. For the boss, this note is capital: money laid out to make more money." },
        { caption: "Sam spends it on bread at Mia's bakery. For Sam it is just money to live on. Marx calls money spent this way revenue." },
        { caption: "In Mia's till the same note is capital again. It pays back what her flour and oven cost, and some profit." },
        { caption: "Mia puts it in Bea's bank. Next Monday Mr. Moneybags takes it out to pay wages, and round it goes." },
        {
          caption: "Two writers on money, Thomas Tooke and John Fullarton, split money into “currency” and “capital”. Marx says no: it is the same note. What changes is whether it is being spent to live or laid out to gain.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const at = STOP[s === 4 ? 3 : s];
        return (
          <>
            {/* the loop */}
            <path d="M60,120 Q100,60 180,60 Q260,60 300,120 Q260,160 180,160 Q100,160 60,120 Z" fill="none" stroke="#000" strokeOpacity=".2" strokeDasharray="4 4" />
            {STOP.map((p, i) => (
              <g key={p.who} style={{ opacity: i <= s || s === 4 ? 1 : 0.25, transition: "opacity 400ms" }}>
                <Figure who={p.who} x={p.x} y={Math.min(p.y + 46, 204)} scale={0.6} />
              </g>
            ))}
            <Fade show={s >= 1}>
              <g transform="translate(222 108) scale(.7)">
                <Loaf />
              </g>
            </Fade>

            <g style={{ transform: `translate(${at.x}px, ${at.y - 26}px)`, transition: `transform ${T}` }}>
              <Note tag={s === 4 ? "" : at.tag} />
            </g>

            <Fade show={s === 4} delay={300}>
              <rect x="20" y="8" width="320" height="30" fill="#000" />
              <text x="180" y="27" textAnchor="middle" fontSize="9.5" fill="#fff">
                same note: revenue for some, capital for others
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 28.2 · Good times, bad times at the bank window
 * Fullarton: "A demand for capital on loan and a demand for additional
 * circulation are quite distinct things". Marx: what distinguishes a
 * depression is not a strong demand for loans but "the difficulties which it
 * meets", while in prosperity it is easily satisfied.
 * ───────────────────────────────────────────────────────────── */
export function GoodTimesBadTimes() {
  return (
    <Player
      id="anim-v3-28-2"
      title="28.2 · Good times, bad times"
      steps={[
        { caption: "Good times. Lots of wages are paid and spent, so many notes are out in shops and pockets. Bosses get paid quickly by their customers." },
        { caption: "Bosses still borrow, and Bea lends easily. Money comes back to the bank smoothly every week." },
        { caption: "Bad times. Shops are quieter, fewer notes are needed for spending. But bosses now rush to Bea, not to buy more, but to pay debts that fall due." },
        { caption: "Fullarton thought the difference was simply how much people want to borrow. Marx disagreed: people want to borrow in good times too." },
        {
          caption: "The real difference, Marx says, is how easy borrowing is. In good times the window is open. In bad times it slams shut, just when debts must be paid.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const bad = s >= 2;
        return (
          <>
            <text x="180" y="22" textAnchor="middle" fontSize="11" fontWeight="600" fill={bad ? RED : GREEN}>
              {bad ? "bad times" : "good times"}
            </text>
            <g transform="translate(100 140)">
              <Bank />
            </g>
            <Figure who="bea" x={100} y={198} scale={0.7} />

            {/* the window */}
            <g transform="translate(100 112)">
              <rect x="-14" y="-14" width="28" height="22" fill={s === 4 ? "#555" : "#fff"} stroke="#000" style={{ transition: "fill 500ms" }} />
              <text y="22" textAnchor="middle" fontSize="7.5">
                {s === 4 ? "closed" : "loans"}
              </text>
            </g>

            {/* notes in pockets: many in good times */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i} style={{ opacity: !bad || i < 3 ? 1 : 0.1, transition: "opacity 500ms" }} transform={`translate(${220 + (i % 4) * 34} ${60 + Math.floor(i / 4) * 26})`}>
                <Note />
              </g>
            ))}
            <text x="271" y="122" textAnchor="middle" fontSize="8.5">
              notes out for spending
            </text>

            {/* bosses at the window */}
            {[0, 1, 2, 3].map((i) => (
              <Figure
                key={i}
                name=""
                label={false}
                x={180 + i * 36}
                y={198}
                scale={0.6}
                mood={bad ? "sad" : "happy"}
                style={{ opacity: i < (bad ? 4 : 2) ? 1 : 0, transition: "opacity 500ms" }}
              />
            ))}
            <text x="234" y="212" textAnchor="middle" fontSize="8.5">
              {bad ? "bosses with debts to pay" : "bosses borrowing"}
            </text>

            <Fade show={s === 1}>
              <g transform="translate(150 150)">
                <Tick />
              </g>
            </Fade>
            <Fade show={s === 4}>
              <g transform="translate(150 150)">
                <Cross />
              </g>
            </Fade>

            <Fade show={s === 3}>
              <rect x="190" y="132" width="164" height="40" fill="#fff" stroke={BEA} />
              <text x="272" y="148" textAnchor="middle" fontSize="8.5">
                Fullarton: it&apos;s about how much
              </text>
              <text x="272" y="162" textAnchor="middle" fontSize="8.5" fontWeight="700">
                Marx: it&apos;s about how easily
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
