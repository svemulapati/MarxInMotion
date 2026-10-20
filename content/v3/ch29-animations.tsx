"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Coins, Fade } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";
import { Bill, Share } from "./ch25-animations";

const GOLD = "#e6b800";
const RED = "#d6452f";
const BEA = CAST.bea.color;
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A government bond: a fancy promise of yearly interest. */
function Bond({ label = "bond: 5 a year" }: { label?: string }) {
  return (
    <g>
      <rect x="-26" y="-15" width="52" height="30" fill="#fdf0f0" stroke="#000" strokeWidth="1" />
      <circle cx="-16" cy="0" r="6" fill="none" stroke={RED} strokeWidth="1" />
      <text x="6" y="3" textAnchor="middle" fontSize="6.5" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 29.1 · Inside Bea's vault
 * Bank capital: cash (gold or notes) and securities (bills of exchange;
 * public securities, stocks). Deposits are "claims on the banker" and
 * "all capital seems to double itself, and sometimes treble itself".
 * ───────────────────────────────────────────────────────────── */
export function InsideBeasVault() {
  return (
    <Player
      id="anim-v3-29-1"
      title="29.1 · Inside Bea's vault"
      steps={[
        { caption: "Let's peek inside Bea's vault. Marx says a bank's capital comes in two kinds: cash, and papers." },
        { caption: "The cash is a pile of gold and bank-notes. The papers are bills of exchange, government bonds and company shares." },
        { caption: "Mia deposits 10 coins. Bea writes in her book: “I owe Mia 10.” Then she lends most of those coins to Mr. Moneybags. The book still says Mia has 10." },
        { caption: "Moneybags pays the coins to Tom, and Tom deposits them with Bea. Now the book says Mia has 10 and Tom has 10. The same coins are counted twice." },
        {
          caption: "Marx says that with credit, all capital seems to double, sometimes treble. Most of a bank's “money-capital” is promises and claims, not coins sitting in the vault.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the vault */}
          <rect x="16" y="24" width="190" height="168" fill="#fff" stroke="#000" strokeWidth="2" />
          <circle cx="111" cy="108" r="74" fill="none" stroke="#000" strokeOpacity=".08" strokeWidth="10" />
          <text x="111" y="18" textAnchor="middle" fontSize="9" fontWeight="600">
            Bea&apos;s vault
          </text>

          {/* cash */}
          <Fade show={s >= 1}>
            <g transform="translate(60 70)">
              <Coins n={4} />
            </g>
            <text x="60" y="96" textAnchor="middle" fontSize="8">
              gold and notes
            </text>
          </Fade>
          <Fade show={s >= 1} delay={300}>
            <g transform="translate(160 64)">
              <Bill />
            </g>
            <text x="160" y="96" textAnchor="middle" fontSize="8">
              bills of exchange
            </text>
            <g transform="translate(60 136)">
              <Bond />
            </g>
            <text x="60" y="164" textAnchor="middle" fontSize="8">
              government bonds
            </text>
            <g transform="translate(160 136)">
              <Share />
            </g>
            <text x="160" y="164" textAnchor="middle" fontSize="8">
              shares
            </text>
          </Fade>
          <Fade show={s === 0}>
            <text x="111" y="104" textAnchor="middle" fontSize="11">
              cash + papers
            </text>
          </Fade>

          {/* the ledger */}
          <Fade show={s >= 2}>
            <rect x="222" y="30" width="126" height="92" fill="#fffbe6" stroke="#000" />
            <text x="285" y="46" textAnchor="middle" fontSize="8.5" fontWeight="700">
              Bea&apos;s book
            </text>
            <text x="234" y="66" fontSize="9">
              owe Mia: 10
            </text>
            <text x="234" y="84" fontSize="9" style={{ opacity: s >= 3 ? 1 : 0, transition: "opacity 400ms" }}>
              owe Tom: 10
            </text>
            <line x1="230" y1="94" x2="340" y2="94" stroke="#000" strokeOpacity=".3" />
            <text x="234" y="110" fontSize="9" fontWeight="700" fill={s >= 3 ? RED : "#000"}>
              deposits: {s >= 3 ? 20 : 10}
            </text>
          </Fade>

          {/* the coins travel */}
          <Fade show={s >= 2}>
            <Figure who="mia" x={236} y={210} scale={0.6} />
            <Figure who="moneybags" x={284} y={210} scale={0.6} />
            <Figure who="tom" x={332} y={210} scale={0.6} />
          </Fade>
          <g
            style={{
              transform: `translate(${s <= 2 ? (s === 2 ? 284 : 236) : 332}px, 140px)`,
              opacity: s >= 2 ? 1 : 0,
              transition: `transform ${T}, opacity 400ms`,
            }}
          >
            <Coins n={2} label="the same coins" />
          </g>

          <Fade show={s === 4} delay={300}>
            <rect x="16" y="198" width="190" height="26" fill="#000" />
            <text x="111" y="215" textAnchor="middle" fontSize="9" fill="#fff">
              mostly claims, not coins
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 29.2 · How a promise gets a price
 * Marx's numbers: £100 lent to the state at 5% = £5 a year; any £100 income
 * at 5% is "capitalised" as £2,000; a £100 share paying 10% sells for £200 at
 * 5% interest; at 10% interest a £5 income is worth £50. 23 Oct 1847: public
 * stocks and canal and railway shares down £114,752,225.
 * ───────────────────────────────────────────────────────────── */
export function HowAPromiseGetsAPrice() {
  return (
    <Player
      id="anim-v3-29-2"
      title="29.2 · How a promise gets a price"
      steps={[
        { caption: "The government borrows 100 coins from Tom to pay for a war, and spends them. In return Tom gets a bond: a promise of 5 coins from taxes every year." },
        { caption: "Tom sells the bond to Mia for 100 coins. Mia feels she owns 100 coins of capital. But those 100 coins were spent long ago. Marx calls this fictitious capital." },
        { caption: "The rule that sets the price: if interest is 5%, any promise of 5 coins a year is treated as if it were 100 coins of capital. Marx calls this capitalising an income." },
        { caption: "A railway share that cost 100 now pays 10 a year. At 5% interest, 10 a year looks like 200 of capital, so the share sells for 200. Same railway, same rails." },
        { caption: "Now interest jumps to 10%. The bond's 5 a year is suddenly worth only 50. Nothing about the bond changed, only the rate of interest." },
        {
          caption: "In the panic of 1847, English bonds and railway shares fell by about 114 million pounds. Marx: unless trains and canals actually stopped, the country was not one cent poorer. A soap bubble had burst.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const price = [100, 100, 100, 200, 50, 50][s];
        const rate = s >= 4 ? 10 : 5;
        return (
          <>
            <Figure name="the government" x={46} y={208} scale={0.7} style={{ opacity: s <= 1 ? 1 : 0.2, transition: "opacity 400ms" }} />
            <Figure who="tom" x={130} y={208} scale={0.7} />
            <Figure who="mia" x={214} y={208} scale={0.7} style={{ opacity: s >= 1 ? 1 : 0.2, transition: "opacity 400ms" }} />

            {/* the war ate the coins */}
            <Fade show={s <= 1}>
              <g transform="translate(46 108)">
                <path d="M-14,10 L-4,-12 L4,2 L12,-14 L16,10 Z" fill="#ff8a3d" opacity=".85" />
              </g>
              <text x="46" y="134" textAnchor="middle" fontSize="8">
                100 coins: spent
              </text>
            </Fade>

            {/* the paper */}
            <g style={{ transform: `translate(${s === 0 ? 130 : 214}px, 112px)`, transition: `transform ${T}`, opacity: s <= 2 || s >= 4 ? 1 : 0 }}>
              <Bond />
            </g>
            <Fade show={s === 3}>
              <g transform="translate(214 112)">
                <Share label="railway share" />
              </g>
              <text x="214" y="138" textAnchor="middle" fontSize="8">
                pays 10 a year
              </text>
            </Fade>

            {/* the price board */}
            <g transform="translate(300 70)">
              <rect x="-50" y="-34" width="100" height="78" fill="#fff" stroke="#000" />
              <text y="-20" textAnchor="middle" fontSize="8">
                interest rate: <tspan fontWeight="700">{rate}%</tspan>
              </text>
              <text y="-4" textAnchor="middle" fontSize="8">
                paper&apos;s price
              </text>
              <text y="24" textAnchor="middle" fontSize="24" fontWeight="600" fill={price > 100 ? "#2a9d5b" : price < 100 ? RED : "#000"}>
                {price}
              </text>
              <text y="38" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                {s === 3 ? "10 a year at 5%" : "5 a year at " + rate + "%"}
              </text>
            </g>

            <Fade show={s === 1}>
              <text x="214" y="64" textAnchor="middle" fontSize="9" fontWeight="600" fill={BEA}>
                fictitious capital
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="160" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
                5 a year &divide; 5% = 100
              </text>
              <text x="160" y="56" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                Marx: 100 a year at 5% = 2,000
              </text>
            </Fade>

            {/* the 1847 bubble */}
            <Fade show={s === 5}>
              <g transform="translate(110 56)">
                <circle r="36" fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="4 6" className="v3c29-pop" />
                <text y="-2" textAnchor="middle" fontSize="8.5" fontWeight="700">
                  &minus; £114 million
                </text>
                <text y="11" textAnchor="middle" fontSize="7.5">
                  1847: paper prices
                </text>
              </g>
              <g transform="translate(110 104)">
                <Coin r={6} />
              </g>
              <text x="110" y="122" textAnchor="middle" fontSize="7.5">
                real railways: still there
              </text>
            </Fade>
            <style>{`
              @keyframes v3c29-pop { 0% { transform: scale(1); opacity: 1 } 70% { transform: scale(1.25); opacity: .9 } 100% { transform: scale(1.5); opacity: 0 } }
              .v3c29-pop { transform-box: fill-box; transform-origin: center; animation: v3c29-pop 1.8s ease-out infinite; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}
