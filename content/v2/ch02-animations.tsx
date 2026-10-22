"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Chest, Coin, Coins, Fade, Loaf, Place, Tick } from "@/components/anim/Things";
import { Bar, Cotton, TONE, Yarn } from "@/components/anim/Workshop";
import { Gear, Note, Track, type StationId } from "./ch01-animations";

/* ─────────────────────────────────────────────────────────────
 * 2.1 · Watch the workshop instead (P … C′ – M′ – C … P)
 * ───────────────────────────────────────────────────────────── */
const P_ORDER: StationId[] = ["P", "C2", "M2", "C", "P"];
const P_SUBS = ["Sam spins", "20 lb yarn: 30", "30 coins", "cotton, Sam", "Sam spins again"];

export function WatchTheWorkshop() {
  return (
    <Player
      id="anim-v2-2-1"
      title="2.1 · Watch the workshop instead"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Same capital, new camera. This time the story starts in the workshop in the morning: Sam is spinning. That is productive capital, P." },
        { caption: "Evening: the day's yarn is finished, worth more than went in (C′)." },
        { caption: "The yarn is sold for coins (M′)..." },
        { caption: "...and the coins buy cotton and Sam's next day (C)." },
        {
          caption: "Next morning the workshop runs once more. Seen from here, all the buying and selling is just a pit stop between two working days. Marx writes P…P.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <Track order={P_ORDER} active={s} subs={P_SUBS} loop={false} />
          <Fade show={s >= 1 && s <= 3}>
            <rect x="80" y="24" width="200" height="16" rx="8" fill="#f1f1f1" stroke="#000" strokeDasharray="3 3" />
            <text x="180" y="35" textAnchor="middle" fontSize="8.5">
              the pit stop: selling and buying
            </text>
          </Fade>
          <Note show={s === 4}>P … P: production renews itself, day after day</Note>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.2 · Two roads out of the yarn (C – M – C and c – m – c)
 * ───────────────────────────────────────────────────────────── */
export function TwoRoads() {
  return (
    <Player
      id="anim-v2-2-2"
      title="2.2 · Two roads out of the yarn"
      viewBox="0 0 360 225"
      steps={[
        { caption: "The day's yarn is worth 30 coins. 27 of them are the capital Mr. Moneybags put in. 3 are surplus-value." },
        { caption: "Once it is sold, the 30 coins split in two, and each part takes its own road." },
        { caption: "Road one: the 27 coins buy cotton and Sam's next day. The capital goes round again. Marx writes C–M–C." },
        { caption: "Road two: the 3 coins go on Mr. Moneybags' own dinners from Mia's bakery. Marx writes c–m–c. Tomorrow the workshop is the same size: simple reproduction." , ms: 5000 },
        {
          caption: "Or he saves the 3 coins and puts them to work too. Then tomorrow's workshop is bigger. Marx writes P…P′: reproduction on a growing scale.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the yarn and its value */}
          <g transform="translate(60 56)">
            <Yarn />
          </g>
          <Bar
            x={90}
            y={47}
            unit={7}
            segs={[
              { n: 27, color: "#cfcfcf", label: "capital: 27" },
              { n: 3, color: TONE.surplus, label: "3" },
            ]}
          />

          {/* road one: back into the workshop */}
          <Fade show={s >= 2}>
            <path d="M160,72 C150,110 120,128 100,140" fill="none" stroke="#000" strokeWidth="1.4" markerEnd="url(#v2-arrow22)" />
            <g transform="translate(70 160)">
              <Cotton />
            </g>
            <Figure who="sam" x={110} y={190} scale={0.5} label={false} />
            <text x="88" y="212" textAnchor="middle" fontSize="9">
              27: cotton and Sam again
            </text>
          </Fade>

          {/* road two: dinners or a bigger workshop */}
          <Fade show={s >= 2}>
            <path d="M300,72 C305,110 290,128 270,140" fill="none" stroke={TONE.surplus} strokeWidth="1.8" markerEnd="url(#v2-arrow22)" />
          </Fade>
          <Fade show={s === 3}>
            <Figure who="moneybags" x={250} y={192} scale={0.55} label={false} />
            <g transform="translate(285 175)">
              <Loaf />
            </g>
            <text x="270" y="212" textAnchor="middle" fontSize="9">
              3: Moneybags&apos; dinners
            </text>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(255 165)">
              <Gear r={14} spin />
            </g>
            <g transform="translate(290 168)">
              <Gear r={10} spin />
            </g>
            <text x="270" y="212" textAnchor="middle" fontSize="9" fontWeight="600" fill="#9a7a00">
              3: a bigger workshop (P′)
            </text>
          </Fade>

          {/* the coins */}
          <Place x={160} y={92} show={s >= 1}>
            <Coins n={3} label="27" />
          </Place>
          <Place x={s >= 2 ? 300 : 230} y={92} show={s >= 1}>
            <Coin r={6} />
          </Place>

          <defs>
            <marker id="v2-arrow22" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.3 · The money that has to wait (latent money-capital, reserve fund)
 * Prices here are invented for the picture; the idea is Marx's.
 * ───────────────────────────────────────────────────────────── */
const SAVED = [0, 3, 12, 0, 6];
const CHEST_LABEL = ["in the chest: 0 coins", "in the chest: 3 coins", "in the chest: 12 coins", "spent on the machine", "saved since: 6 coins"];

export function TheMoneyThatWaits() {
  return (
    <Player
      id="anim-v2-2-3"
      title="2.3 · The money that has to wait"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Mr. Moneybags wants a second spinning machine. The Forge sells one for 12 coins (a made-up price)." },
        { caption: "Each day he saves the 3 coins of surplus-value in a chest. After day one he has 3: far too few to buy a machine." },
        {
          caption: "He must wait until the pile is big enough. Until then the coins cannot work. Marx calls them latent money-capital: capital that is asleep.",
          ms: 5000,
        },
        { caption: "Day four: 12 coins. He buys the machine, the sleeping money wakes up, and the workshop grows." },
        {
          caption: "Days later he has saved 6 more coins. A pile like this can also be a reserve fund: when cotton suddenly costs more, coins from the chest keep the circuit running without a break.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const n = SAVED[s];
        return (
          <>
            {/* the chest and its pile */}
            <g transform="translate(90 150)">
              <Chest open={s !== 2} />
            </g>
            {Array.from({ length: 12 }, (_, i) => (
              <Place key={i} x={60 + (i % 6) * 12} y={112 - Math.floor(i / 6) * 13} show={i < n} delay={i * 50}>
                <Coin r={6} />
              </Place>
            ))}
            <text x="90" y="200" textAnchor="middle" fontSize="10" fontWeight="600">
              {CHEST_LABEL[s]}
            </text>
            <Fade show={s === 2}>
              <text x="90" y="62" textAnchor="middle" fontSize="9" fill="#666">
                z z z
              </text>
              <text x="90" y="74" textAnchor="middle" fontSize="9" fontWeight="600">
                latent money-capital
              </text>
            </Fade>

            {/* the machine on sale */}
            <g transform="translate(260 100)" style={{ opacity: s === 3 ? 0.25 : 1, transition: "opacity 500ms" }}>
              <rect x="-42" y="-30" width="84" height="56" fill="#fff" stroke="#000" />
              <g transform="translate(-14 -2)">
                <Gear r={11} />
              </g>
              <g transform="translate(14 -2)">
                <Gear r={11} />
              </g>
              <text y="40" textAnchor="middle" fontSize="9">
                at the Forge: 12 coins
              </text>
            </g>
            <Fade show={s === 3}>
              <g transform="translate(260 172)">
                <Gear r={13} spin />
              </g>
              <g transform="translate(292 176)">
                <Gear r={9} spin />
              </g>
              <g transform="translate(230 150)">
                <Tick />
              </g>
              <text x="270" y="210" textAnchor="middle" fontSize="9" fontWeight="600">
                bought: the workshop grows
              </text>
            </Fade>
            <Fade show={s === 4}>
              <g transform="translate(250 172)">
                <Cotton />
              </g>
              <text x="285" y="170" fontSize="9" fill="#d6452f">
                cotton dearer!
              </text>
              <path d="M130,160 C170,190 200,190 230,178" fill="none" stroke={TONE.surplus} strokeWidth="2" strokeDasharray="4 3" />
              <text x="270" y="210" textAnchor="middle" fontSize="9" fontWeight="600">
                reserve fund to the rescue
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
