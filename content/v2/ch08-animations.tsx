"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Corn, Cow, Fade, Place, Tag } from "@/components/anim/Things";
import { Bar, Cotton, TONE } from "@/components/anim/Workshop";

const FIXED = "#5a5a5a";
const FLOW = "#2a9d5b";

/** Mr. Moneybags' spinning machine: a frame of spindles with a flywheel. */
export function SpinningMachine({ worn = 0 }: { worn?: number }) {
  return (
    <g>
      <rect x="-34" y="-22" width="68" height="40" fill="#fff" stroke="#000" strokeWidth="1.2" />
      {Array.from({ length: 6 }, (_, i) => (
        <g key={i}>
          <line x1={-26 + i * 10} y1="-16" x2={-26 + i * 10} y2="8" stroke="#6b4a2b" strokeWidth="2" />
          <ellipse cx={-26 + i * 10} cy="-4" rx="3.2" ry="5" fill="#f3e3b3" stroke="#000" strokeWidth=".7" />
        </g>
      ))}
      <circle cx="42" cy="0" r="12" fill="none" stroke="#000" strokeWidth="1.5" />
      <line x1="42" y1="-12" x2="42" y2="12" stroke="#000" />
      <line x1="30" y1="0" x2="54" y2="0" stroke="#000" />
      <rect x="-34" y="18" width="88" height="4" fill="#000" />
      {/* rust spots as it wears */}
      {worn > 0 &&
        [
          [-20, 10],
          [8, -12],
          [26, 12],
          [-8, -18],
        ]
          .slice(0, Math.ceil(worn * 4))
          .map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="2.5" fill="#b5651d" />)}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.1 · What stays and what flows
 * Workshop day from CONTINUITY.md: cotton 20, spindle and machine wear 4,
 * wage 3 (surplus-value left aside, as Marx does in this chapter).
 * ───────────────────────────────────────────────────────────── */
const U = 7;

export function WhatStaysWhatFlows() {
  return (
    <Player
      id="anim-v2-8-1"
      title="8.1 · What stays and what flows"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Mr. Moneybags' workshop has three things in it: a spinning machine, a pile of cotton, and Sam." },
        { caption: "Today the cotton is spun up completely. All 20 coins of its value go into today's yarn. Tomorrow he must buy cotton all over again." },
        { caption: "Sam's wage, 3 coins, also goes wholly into today's yarn, and must be paid again tomorrow." },
        { caption: "The machine is different. It stays in the workshop and passes on only a thin slice of its value each day: 4 coins' worth of wear." },
        {
          caption: "So Marx sorts capital by how its value travels. Cotton and wages flow out whole, every time: circulating capital. The machine's value stays fixed and leaks out slowly: fixed capital.",
          ms: 5200,
        },
        {
          caption: "Careful: this is a different sorting from constant and variable. Cotton is constant capital, like the machine, but it circulates like the wage. Mixing the two up was, Marx says, the economists' basic mistake.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the workshop */}
          <rect x="10" y="10" width="340" height="96" fill="#fff" stroke="#000" strokeOpacity=".25" />
          <text x="18" y="24" fontSize="8.5" fillOpacity=".5">
            Mr. Moneybags&apos; workshop
          </text>
          <g transform="translate(70 62)">
            <SpinningMachine />
          </g>
          <text x="75" y="98" textAnchor="middle" fontSize="8.5">
            spinning machine
          </text>
          <g transform="translate(190 62) scale(1.2)" style={{ opacity: s >= 1 ? 0.15 : 1, transition: "opacity 600ms ease" }}>
            <Cotton />
          </g>
          <text x="190" y="98" textAnchor="middle" fontSize="8.5" style={{ opacity: s >= 1 ? 0.3 : 1 }}>
            {s >= 1 ? "cotton: used up" : "cotton"}
          </text>
          <Figure who="sam" x={290} y={92} scale={0.62} label={false} />
          <text x="290" y="102" textAnchor="middle" fontSize="8.5">
            Sam
          </text>

          {/* today's yarn */}
          <text x="14" y="140" fontSize="10" fontWeight="600">
            today&apos;s yarn
          </text>
          <Bar
            x={100}
            y={128}
            unit={U}
            segs={[
              { n: 20, color: TONE.cotton, label: "cotton 20", show: s >= 1 },
              { n: 3, color: TONE.wage, label: "3", show: s >= 2 },
              { n: 4, color: FIXED, label: "", show: s >= 3 },
            ]}
          />
          <Fade show={s >= 3}>
            <text x={100 + 23 * U + 14} y="124" textAnchor="middle" fontSize="8.5" fill={FIXED}>
              wear 4
            </text>
            <path d={`M75,103 C75,118 ${100 + 23 * U},106 ${100 + 23 * U + 14},126`} fill="none" stroke={FIXED} strokeDasharray="3 3" />
          </Fade>

          {/* the two sortings */}
          <Fade show={s >= 4}>
            <path d={`M100,156 v6 h${23 * U} v-6`} fill="none" stroke={FLOW} strokeWidth="1.5" />
            <text x={100 + (23 * U) / 2} y="174" textAnchor="middle" fontSize="9" fill={FLOW} fontWeight="700">
              circulating: flows out whole
            </text>
            <path d={`M${100 + 23 * U},156 v6 h${4 * U} v-6`} fill="none" stroke={FIXED} strokeWidth="1.5" />
            <text x={100 + 25 * U + 30} y="174" textAnchor="middle" fontSize="9" fill={FIXED} fontWeight="700">
              fixed
            </text>
          </Fade>
          <Fade show={s === 5}>
            <rect x="14" y="184" width="332" height="38" fill="#fff" stroke="#000" strokeOpacity=".3" />
            <text x="22" y="198" fontSize="8.5">
              by how value travels:
            </text>
            <text x="120" y="198" fontSize="8.5" fill={FLOW} fontWeight="600">
              circulating = cotton + wages
            </text>
            <text x="270" y="198" fontSize="8.5" fill={FIXED} fontWeight="600">
              fixed = machine
            </text>
            <text x="22" y="214" fontSize="8.5">
              by who makes value:
            </text>
            <text x="120" y="214" fontSize="8.5" fontWeight="600">
              constant = cotton + machine
            </text>
            <text x="270" y="214" fontSize="8.5" fill={TONE.wage} fontWeight="600">
              variable = wages
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.2 · The machine's double life (Marx: £10,000, ten years)
 * ───────────────────────────────────────────────────────────── */
const SEG = 18;

export function MachinesDoubleLife() {
  return (
    <Player
      id="anim-v2-8-2"
      title="8.2 · The machine's double life"
      steps={[
        { caption: "Marx's own example: a machine worth £10,000 that will last ten years." },
        { caption: "Each year it wears out by a tenth. £1,000 of its value goes into the year's goods, is sold with them, and comes home as money, into a fund." },
        { caption: "Year 5: half its value is still inside the working machine, and half has turned into money. Marx says the value now lives a double life." },
        {
          caption: "Year 10: the machine is worn out. All £10,000 has come back as money, just in time to buy a new one. One turnover of this fixed capital took ten whole years.",
          ms: 5000,
        },
        { caption: "Speed matters. Of two machines worth the same, one lasting 5 years and one lasting 10, Marx says the first hands on twice as much value each year." },
        {
          caption: "And a machine can lose value before it wears out, when a better one appears. Marx notes engines and carriages that cost £40,000 could be bought for £30,000 ten years later. He calls this moral depreciation.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const year = [0, 1, 5, 10, 10, 10][s];
        const left = 10 - year;
        return (
          <>
            {/* the year counter */}
            <Fade show={s <= 3}>
              <text x="180" y="24" textAnchor="middle" fontSize="13" fontWeight="700">
                year {year}
              </text>
            </Fade>

            {/* still inside the machine */}
            <Fade show={s <= 3}>
              <g transform="translate(70 80)">
                <SpinningMachine worn={year / 10} />
              </g>
              <text x="70" y="118" textAnchor="middle" fontSize="9">
                inside the machine
              </text>
              {Array.from({ length: 10 }, (_, i) => (
                <rect
                  key={i}
                  x={20 + (i % 5) * SEG}
                  y={130 + Math.floor(i / 5) * (SEG - 2)}
                  width={SEG - 3}
                  height={SEG - 5}
                  fill={FIXED}
                  style={{ opacity: i < left ? 1 : 0.1, transition: `opacity 500ms ease ${i * 60}ms` }}
                />
              ))}
              <text x="62" y="176" textAnchor="middle" fontSize="10" fontWeight="600">
                £{(left * 1000).toLocaleString("en-GB")}
              </text>

              {/* the money fund */}
              <rect x="226" y="60" width="104" height="70" fill="#fff" stroke="#000" />
              <text x="278" y="52" textAnchor="middle" fontSize="9">
                back as money
              </text>
              {Array.from({ length: 10 }, (_, i) => (
                <circle
                  key={i}
                  cx={242 + (i % 5) * 18}
                  cy={78 + Math.floor(i / 5) * 22}
                  r="7.5"
                  fill="#e6b800"
                  stroke="#000"
                  style={{ opacity: i < year ? 1 : 0.08, transition: `opacity 500ms ease ${i * 60}ms` }}
                />
              ))}
              <text x="278" y="148" textAnchor="middle" fontSize="10" fontWeight="600">
                £{(year * 1000).toLocaleString("en-GB")}
              </text>
              <path d="M128,84 C160,70 190,70 222,84" fill="none" stroke="#000" strokeDasharray="4 3" markerEnd="url(#v2c08a)" />
              <text x="175" y="66" textAnchor="middle" fontSize="8.5">
                £1,000 a year
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="180" y="196" textAnchor="middle" fontSize="10" fontWeight="700">
                half in the machine, half in money
              </text>
            </Fade>
            <Fade show={s === 3}>
              <g transform="translate(278 196)">
                <SpinningMachine />
              </g>
              <text x="200" y="200" textAnchor="end" fontSize="9.5" fontWeight="700">
                the fund buys a new one
              </text>
            </Fade>
            <defs>
              <marker id="v2c08a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>

            {/* five years against ten */}
            <Fade show={s === 4}>
              {[
                { y: 70, life: 5, label: "lasts 5 years" },
                { y: 140, life: 10, label: "lasts 10 years" },
              ].map((m) => (
                <g key={m.life}>
                  <g transform={`translate(54 ${m.y})`}>
                    <g transform="scale(.75)">
                      <SpinningMachine />
                    </g>
                  </g>
                  <text x="54" y={m.y + 30} textAnchor="middle" fontSize="8.5">
                    {m.label}
                  </text>
                  <rect x="120" y={m.y - 10} width={m.life === 5 ? 200 : 100} height="20" fill="#e6b800" stroke="#000" />
                  <text x="128" y={m.y + 4} fontSize="9" fontWeight="600">
                    {m.life === 5 ? "£2,000 a year" : "£1,000 a year"}
                  </text>
                </g>
              ))}
              <text x="180" y="30" textAnchor="middle" fontSize="10.5" fontWeight="700">
                two £10,000 machines
              </text>
            </Fade>

            {/* moral depreciation */}
            <Fade show={s === 5}>
              <g transform="translate(110 110)">
                <SpinningMachine worn={0.25} />
              </g>
              <text x="110" y="148" textAnchor="middle" fontSize="9">
                still works fine
              </text>
              <g transform="translate(110 64)">
                <Tag text="£40,000" />
              </g>
              <line x1="92" y1="64" x2="130" y2="64" stroke="#d6452f" strokeWidth="2" />
              <g transform="translate(250 110)">
                <g transform="scale(1.15)">
                  <SpinningMachine />
                </g>
              </g>
              <text x="250" y="152" textAnchor="middle" fontSize="9">
                new and better
              </text>
              <g transform="translate(250 64)">
                <Tag text="£30,000" />
              </g>
              <text x="180" y="190" textAnchor="middle" fontSize="11" fontWeight="700" fill="#d6452f">
                the old one is worth less now
              </text>
              <text x="180" y="206" textAnchor="middle" fontSize="9">
                moral depreciation
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.3 · Ox for ploughing, ox for dinner (form, not material)
 * ───────────────────────────────────────────────────────────── */
function Locomotive() {
  return (
    <g>
      <rect x="-26" y="-14" width="34" height="20" fill="#333" />
      <rect x="8" y="-24" width="18" height="30" fill="#333" />
      <rect x="-20" y="-26" width="8" height="12" fill="#333" />
      <circle cx="-16" cy="10" r="7" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <circle cx="4" cy="10" r="7" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <circle cx="20" cy="10" r="5" fill="#fff" stroke="#000" strokeWidth="1.5" />
    </g>
  );
}

function Plough() {
  return <path d="M0,0 L22,0 L30,10 L4,10 Z M22,0 L14,-14" fill="#8a5a2b" stroke="#000" strokeWidth="1" />;
}

export function OxForPloughing() {
  return (
    <Player
      id="anim-v2-8-3"
      title="8.3 · Ox for ploughing, ox for dinner"
      steps={[
        { caption: "Is a thing fixed or circulating capital because of what it is? Marx says no. Look at Grandpa Ned's ox." },
        { caption: "Pulling Ned's plough, year after year, the ox is fixed capital. It stays on the farm and hands on its value bit by bit, as it gets old." },
        { caption: "Fattened and sold for beef, an ox is circulating capital. It goes out whole, all its value at once." },
        { caption: "A railway engine rushes about all day, yet it is fixed capital. Seed corn lies in one field for a whole year, yet it is circulating capital." },
        { caption: "So moving or staying still is not the test. What counts is how the value travels: bit by bit, while the thing keeps working, or all at once." },
      ]}
    >
      {(s) => (
        <>
          <line x1="0" y1="196" x2="360" y2="196" stroke="#000" strokeOpacity=".15" />
          <Figure who="ned" x={44} y={192} scale={0.75} />

          {/* the ox on the farm */}
          <Fade show={s <= 1}>
            <g transform="translate(150 158)">
              <g transform="scale(1.6)">
                <Cow />
              </g>
            </g>
          </Fade>
          <Fade show={s === 1}>
            <g transform="translate(205 168)">
              <Plough />
            </g>
            <path d="M190,160 L210,166" stroke="#000" />
            <rect x="236" y="60" width="104" height="44" fill="#fff" stroke={FIXED} strokeWidth="1.5" />
            <text x="288" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill={FIXED}>
              fixed capital
            </text>
            <text x="288" y="94" textAnchor="middle" fontSize="8.5">
              value leaves bit by bit
            </text>
          </Fade>

          {/* the ox for the butcher */}
          <Fade show={s === 2}>
            <Place x={200} y={158} scale={1.6}>
              <Cow />
            </Place>
            <g transform="translate(176 116)">
              <Tag text="for beef" />
            </g>
            <rect x="236" y="40" width="104" height="44" fill="#fff" stroke={FLOW} strokeWidth="1.5" />
            <text x="288" y="58" textAnchor="middle" fontSize="10" fontWeight="700" fill={FLOW}>
              circulating capital
            </text>
            <text x="288" y="74" textAnchor="middle" fontSize="8.5">
              all its value at once
            </text>
          </Fade>

          {/* engine and seed */}
          <Fade show={s >= 3}>
            <g transform="translate(150 70)">
              <g transform="scale(1.3)">
                <Locomotive />
              </g>
            </g>
            <text x="150" y="104" textAnchor="middle" fontSize="9">
              always moving
            </text>
            <text x="150" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill={FIXED}>
              fixed
            </text>
            <g transform="translate(270 70)">
              <g transform="scale(1.4)">
                <Corn />
              </g>
            </g>
            <text x="270" y="104" textAnchor="middle" fontSize="9">
              stays a whole year
            </text>
            <text x="270" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill={FLOW}>
              circulating
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="96" y="130" width="250" height="50" fill="#fff" stroke="#000" />
            <text x="221" y="150" textAnchor="middle" fontSize="10.5" fontWeight="700">
              the test: how does the value travel?
            </text>
            <text x="221" y="168" textAnchor="middle" fontSize="9">
              bit by bit = fixed · all at once = circulating
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
