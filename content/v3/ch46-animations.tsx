"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Place } from "@/components/anim/Things";

const GOLD = "#e6b800";

/** A small terraced house. */
function House({ shade = "#d6c4a8" }: { shade?: string }) {
  return (
    <g>
      <rect x="-12" y="-14" width="24" height="18" fill={shade} stroke="#000" strokeWidth="1" />
      <path d="M-15,-14 L0,-26 L15,-14 Z" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <rect x="-3" y="-6" width="6" height="10" fill="#555" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 46.1 · Rent for standing room
 * Edward Capps, a big London building speculator, to the 1857 Select
 * Committee on Bank Acts: he takes ground at £300 a year, builds on it,
 * and makes £400 or £450 a year; his profit is the improved ground-rent
 * of £100 or £150. After the lease, generally 99 years, land, houses and
 * rent go back to the landlord. Mines pay rent like farmland.
 * ───────────────────────────────────────────────────────────── */
export function RentForStandingRoom() {
  return (
    <Player
      id="anim-v3-46-1"
      title="46.1 · Rent for standing room"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Tiny Town is growing fast. There is a new mill and a railway station, and everyone needs somewhere to live and work. Even an empty plot is now worth something." },
        {
          caption: "A builder rents a bare plot from the Landlord for £300 a year. These are the words of a real London builder, Edward Capps, speaking to Parliament in 1857.",
          ms: 5200,
        },
        {
          caption: "He lays out streets and houses and lets them for £400 or £450 a year. He told Parliament he hardly profits from the houses at all. His gain is the extra ground-rent: £100 or £150 a year.",
          ms: 5800,
        },
        {
          caption: "The lease lasts 99 years. When it ends, the land, the houses and the higher rent all go back to the Landlord's family.",
          ms: 5000,
        },
        {
          caption: "Marx: the owner adds nothing and risks nothing. The town's growth raises his rent while he waits. Mines work the same way: a rich seam pays rent, a poor one pays none.",
          ms: 5800,
        },
      ]}
    >
      {(s) => {
        const built = s >= 2;
        return (
          <>
            {/* the growing town in the background */}
            <rect x="0" y="150" width="360" height="6" fill="#bbb" />
            <Fade show={s === 0 || s === 4}>
              <g transform="translate(40 150)">
                <rect x="-22" y="-40" width="44" height="40" fill="#ddd" stroke="#000" />
                <rect x="10" y="-62" width="8" height="22" fill="#555" />
                <text y="14" textAnchor="middle" fontSize="9">
                  the mill
                </text>
              </g>
              <g transform="translate(316 150)">
                <rect x="-26" y="-28" width="52" height="28" fill="#ddd" stroke="#000" />
                <path d="M-30,-28 L0,-42 L30,-28 Z" fill="#aaa" stroke="#000" />
                <text y="14" textAnchor="middle" fontSize="9">
                  the station
                </text>
              </g>
            </Fade>

            {/* the plot */}
            <rect x="110" y="134" width="140" height="16" fill="#cbb994" stroke="#000" strokeDasharray={built ? "0" : "4 3"} />
            {Array.from({ length: 5 }, (_, i) => (
              <Place key={i} x={128 + i * 26} y={134} show={built} delay={i * 120}>
                <House shade={s === 3 ? "#bdbdbd" : "#d6c4a8"} />
              </Place>
            ))}
            <text x="180" y="172" textAnchor="middle" fontSize="10">
              {built ? "the plot, built up" : "a bare plot"}
            </text>

            <Figure name="Landlord" x={50} y={112} scale={0.7} style={{ opacity: s >= 1 && s <= 3 ? 1 : 0, transition: "opacity 500ms" }} />
            <Figure name="Builder" x={310} y={112} scale={0.7} style={{ opacity: s >= 1 && s <= 2 ? 1 : 0, transition: "opacity 500ms" }} />

            <Fade show={s === 1}>
              <text x="180" y="60" textAnchor="middle" fontSize="18" fontWeight="300">
                £300 a year
              </text>
              <text x="180" y="78" textAnchor="middle" fontSize="10">
                builder pays the Landlord for the bare ground
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="180" y="40" textAnchor="middle" fontSize="11">
                lets the houses for £400 to £450 a year
              </text>
              <text x="180" y="66" textAnchor="middle" fontSize="18" fontWeight="600" fill="#8a6d00">
                +£100 to £150
              </text>
              <text x="180" y="84" textAnchor="middle" fontSize="10">
                the &ldquo;improved ground-rent&rdquo; is his real gain
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="50" textAnchor="middle" fontSize="22" fontWeight="300">
                99 years later
              </text>
              <text x="180" y="72" textAnchor="middle" fontSize="10">
                land + houses + rent go back to the Landlord&apos;s family
              </text>
              <g transform="translate(50 30)">
                <Coins n={4} />
              </g>
            </Fade>

            {/* mines */}
            <Fade show={s === 4}>
              <rect x="110" y="182" width="140" height="30" fill="#4a3a2a" />
              <rect x="120" y="188" width="44" height="18" fill="#111" />
              <rect x="200" y="194" width="18" height="6" fill="#111" />
              <text x="142" y="224" textAnchor="middle" fontSize="9">
                rich seam: rent
              </text>
              <text x="222" y="224" textAnchor="middle" fontSize="9">
                thin seam: none
              </text>
              <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
                the town grows, the ground-rent grows
              </text>
              <text x="180" y="56" textAnchor="middle" fontSize="10">
                the owner adds nothing and risks nothing
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 46.2 · What is a field worth?
 * The price of land is capitalised rent. Marx's example (Vol. III,
 * Ch. 37): £200 of rent at 5% interest is the interest on £4,000, "20
 * years' purchase"; if interest falls to 4%, the price becomes £5,000.
 * ───────────────────────────────────────────────────────────── */
export function WhatIsAFieldWorth() {
  return (
    <Player
      id="anim-v3-46-2"
      title="46.2 · What is a field worth?"
      viewBox="0 0 360 230"
      steps={[
        { caption: "The Landlord's field brings him £200 of rent every year. Someone wants to buy it. What price is fair?" },
        {
          caption: "If money lent at Bea's bank earns 5% a year, it takes £4,000 to earn £200. So the field sells for £4,000, twenty years' rent. Marx calls the price of land capitalised rent.",
          ms: 5600,
        },
        {
          caption: "Now interest falls to 4%. To earn £200 at 4% you need £5,000. Same field, same rent, but the price jumps to £5,000.",
          ms: 5200,
        },
        {
          caption: "The buyer feels he is just earning interest on the money he paid. But the sale only passes on the right to collect rent. It does not create that right.",
          ms: 5400,
        },
        {
          caption: "Marx: one day owning the earth will look as strange as owning another person. No one owns the planet. We only use it, and must hand it on in better shape.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const rate = s >= 2 ? 4 : 5;
        const price = s >= 2 ? 5000 : 4000;
        return (
          <>
            {/* the field and its yearly rent */}
            <rect x="24" y="120" width="120" height="60" fill="#cfe3a8" stroke="#000" />
            <text x="84" y="196" textAnchor="middle" fontSize="10">
              the field
            </text>
            <g transform="translate(84 104)">
              <Coins n={4} />
            </g>
            <text x="84" y="90" textAnchor="middle" fontSize="11" fontWeight="600" fill="#8a6d00">
              £200 rent a year
            </text>

            <Fade show={s >= 1 && s <= 3}>
              <text x="252" y="56" textAnchor="middle" fontSize="11">
                interest at Bea&apos;s bank: {rate}%
              </text>
              <text x="252" y="92" textAnchor="middle" fontSize="30" fontWeight="300" fill={s === 2 ? GOLD : "#000"}>
                £{price.toLocaleString("en-GB")}
              </text>
              <text x="252" y="112" textAnchor="middle" fontSize="10">
                £200 ÷ {rate}% = £{price.toLocaleString("en-GB")}
              </text>
              <text x="252" y="128" textAnchor="middle" fontSize="9.5">
                ({price / 200} years of rent)
              </text>
            </Fade>
            <Figure who="bea" x={252} y={200} scale={0.65} style={{ opacity: s === 1 || s === 2 ? 1 : 0, transition: "opacity 500ms" }} />

            <Fade show={s === 3}>
              <rect x="176" y="140" width="160" height="34" fill="#000" />
              <text x="256" y="155" textAnchor="middle" fontSize="9.5" fill="#fff">
                the sale passes on the right to rent
              </text>
              <text x="256" y="168" textAnchor="middle" fontSize="9.5" fill="#fff">
                it does not create it
              </text>
            </Fade>

            <Fade show={s === 4}>
              <circle cx="260" cy="110" r="52" fill="#7fb0d8" stroke="#000" />
              <path d="M228,92 C240,80 256,86 262,98 C270,112 252,122 240,116 Z" fill="#8bb35a" />
              <path d="M270,130 C282,118 300,124 298,140 C290,152 276,148 270,130 Z" fill="#8bb35a" />
              <text x="260" y="182" textAnchor="middle" fontSize="10.5" fontWeight="600">
                users, not owners
              </text>
              <text x="260" y="198" textAnchor="middle" fontSize="9.5">
                hand it on improved
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
