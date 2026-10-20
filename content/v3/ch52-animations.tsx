"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { Spindle } from "@/components/anim/Workshop";
import { Field, INCOME, MoneyPile } from "./ch48-animations";

/* ─────────────────────────────────────────────────────────────
 * 52.1 · Three great classes
 * ───────────────────────────────────────────────────────────── */
const CLASSES = [
  { x: 60, who: "sam" as const, owns: "labour-power", gets: "wages", color: INCOME.wages },
  { x: 180, who: "moneybags" as const, owns: "capital", gets: "profit", color: INCOME.profit },
  { x: 300, who: null, owns: "land", gets: "rent", color: INCOME.rent },
];

export function ThreeGreatClasses() {
  return (
    <Player
      id="anim-v3-52-1"
      title="52.1 · Three great classes"
      steps={[
        { caption: "Marx's last chapter begins with Tiny Town's three big groups, sorted by what they own." },
        { caption: "Sam owns only his ability to work, and lives on wages. Mr. Moneybags owns capital and lives on profit. The Landlord owns land and lives on rent." },
        { caption: "Wage-labourers, capitalists and landowners: Marx calls them the three great classes of modern society." },
        { caption: "Even in England, the most developed country of his day, Marx admits the lines are blurred: in-between people like shopkeepers, clerks and doctors sit between the groups." },
        {
          caption: "But he says the big trend runs one way: tools and workshops gather into fewer, larger hands, and more and more people end up working for wages.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          {CLASSES.map((c, i) => (
            <g key={c.owns} style={{ opacity: s >= 1 || s === 0 ? 1 : 0, transition: "opacity 500ms" }}>
              <rect x={c.x - 52} y="34" width="104" height="22" fill={c.color} style={{ opacity: s >= 2 ? 1 : 0, transition: `opacity 500ms ease ${i * 200}ms` }} />
              <text x={c.x} y="49" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600" style={{ opacity: s >= 2 ? 1 : 0, transition: `opacity 500ms ease ${i * 200}ms` }}>
                {["wage-labourers", "capitalists", "landowners"][i]}
              </text>
              <g style={{ opacity: s >= 1 ? 1 : 0, transition: `opacity 500ms ease ${i * 250}ms` }}>
                <text x={c.x} y="78" textAnchor="middle" fontSize="9">
                  owns: <tspan fontWeight="600">{c.owns}</tspan>
                </text>
                <text x={c.x} y="92" textAnchor="middle" fontSize="9">
                  lives on: <tspan fontWeight="600">{c.gets}</tspan>
                </text>
              </g>
              <g transform={`translate(${c.x + 34} 186)`}>
                {i === 0 && (
                  <g transform="scale(.65)">
                    <Spindle />
                  </g>
                )}
                {i === 1 && <MoneyPile />}
                {i === 2 && <Field w={40} />}
              </g>
              {c.who ? <Figure who={c.who} x={c.x - 6} y={200} scale={0.78} /> : <Figure name="Landlord" x={c.x - 6} y={200} scale={0.78} />}
            </g>
          ))}

          {/* the in-between people */}
          <Fade show={s === 3}>
            <Figure who="tom" x={104} y={162} scale={0.5} />
            <Figure name="clerk" x={246} y={162} scale={0.5} />
            <Figure name="doctor" x={134} y={162} scale={0.5} />
            <text x="180" y="106" textAnchor="middle" fontSize="9" fill="#d6452f" fontWeight="600">
              in-between people blur the lines
            </text>
          </Fade>

          {/* the trend */}
          <Fade show={s === 4}>
            <text x="180" y="112" textAnchor="middle" fontSize="9" fontWeight="600">
              more and more people work for wages
            </text>
            <path d="M210,130 C170,150 130,150 100,134" fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#v3c52-arr)" />
            <defs>
              <marker id="v3c52-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 52.2 · What makes a class? (the page where the manuscript stops)
 * ───────────────────────────────────────────────────────────── */
export function WhatMakesAClass() {
  return (
    <Player
      id="anim-v3-52-2"
      title="52.2 · What makes a class?"
      steps={[
        { caption: "Marx asks the big question: what makes these three groups classes at all?" },
        { caption: "The first answer looks easy: each group lives from the same kind of income. Wages, profit, rent." },
        { caption: "Then Marx tests it. By that rule, doctors would be a class, and government officials another, since each lives from one source." },
        { caption: "And landowners would split into many classes: owners of vineyards, farms, forests, mines and fisheries. So income alone cannot be the answer." },
        {
          caption: "And there the page stops. Marx's manuscript breaks off mid-thought, and Volume III ends here, with his question still open.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const lines = [
          "What makes a class?",
          "Same source of income?",
          "Then doctors and officials too...",
          "and vineyards, forests, mines, fisheries...",
        ];
        return (
          <>
            {/* the manuscript page */}
            <g transform="translate(60 24)">
              <path d={s === 4 ? "M0,0 H240 V120 L220,128 L200,118 L176,130 L150,119 L126,131 L100,118 L76,129 L50,117 L26,130 L0,120 Z" : "M0,0 H240 V180 H0 Z"} fill="#fffbe6" stroke="#000" strokeWidth="1.2" />
              <text x="12" y="20" fontSize="8" fillOpacity=".5">
                Capital, Volume III, Chapter 52: Classes
              </text>
              {lines.map((l, i) => (
                <text key={l} x="12" y={42 + i * 20} fontSize={i === 0 ? 11 : 9.5} fontWeight={i === 0 ? 700 : 400} style={{ opacity: s >= i ? 1 : 0, transition: "opacity 500ms" }}>
                  {l}
                </text>
              ))}
              <g style={{ opacity: s === 4 ? 1 : 0, transition: "opacity 600ms ease 400ms" }}>
                <text x="12" y="112" fontSize="9" fontStyle="italic" fill="#d6452f">
                  [Here the manuscript breaks off.]
                </text>
              </g>
            </g>
            {/* the doctor and the official */}
            <Fade show={s === 2}>
              <Figure name="doctor" x={130} y={208} scale={0.55} />
              <Figure name="official" x={230} y={208} scale={0.55} />
            </Fade>
            <Fade show={s === 3}>
              {["vines", "farm", "forest", "mine", "fish"].map((t, i) => (
                <g key={t} transform={`translate(${80 + i * 50} 196)`}>
                  <rect x="-20" y="-10" width="40" height="18" fill="#fff" stroke="#000" />
                  <text y="3" textAnchor="middle" fontSize="8">
                    {t}
                  </text>
                </g>
              ))}
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="186" textAnchor="middle" fontSize="10" fontWeight="600">
                the end of Volume III
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
