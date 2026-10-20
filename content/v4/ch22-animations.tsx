"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coins, Fade, Place } from "@/components/anim/Things";
import { Cotton, Spindle, TONE } from "@/components/anim/Workshop";
import { Shelf } from "./ch20-animations";

/* ─────────────────────────────────────────────────────────────
 * 22.1 · Ramsay's two piles (fixed capital comes close to constant capital)
 * ───────────────────────────────────────────────────────────── */
type Item = "spindle" | "cotton" | "wage";
const ITEMS: { id: Item; label: string; ramsay: "fixed" | "circulating"; usual: "fixed" | "circulating" }[] = [
  { id: "spindle", label: "spindle wear: 4", ramsay: "fixed", usual: "fixed" },
  { id: "cotton", label: "cotton: 20", ramsay: "fixed", usual: "circulating" },
  { id: "wage", label: "Sam's wage: 3", ramsay: "circulating", usual: "circulating" },
];
const PILE_X = { fixed: 100, circulating: 270 };

function ItemIcon({ id }: { id: Item }) {
  if (id === "spindle") return <Spindle />;
  if (id === "cotton") return <Cotton />;
  return <Coins n={3} />;
}

export function RamsaysPiles() {
  return (
    <Player
      id="anim-v4-22-1"
      title="22.1 · Ramsay's two piles"
      steps={[
        { caption: "George Ramsay of Cambridge wrote in 1836. Here are three things Mr. Moneybags pays for each day: spindle wear, cotton, and Sam's wage." },
        { caption: "Most economists sorted them by how long they last: the spindle is fixed capital; the cotton and the wage are circulating capital." },
        { caption: "Ramsay sorted them differently. Machines AND raw materials, even the cotton and the farmer's seed, go in his “fixed” pile. Only the workers' wages count as “circulating”." },
        {
          caption: "Marx says that is really his own split between constant capital (things) and variable capital (wages). Ramsay found it, but kept the old, wrong names.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const sorted = s >= 1;
        return (
          <>
            <Shelf x={250} y={12} lit={2} label="Ramsay, 1836" />
            {sorted && (
              <>
                {(["fixed", "circulating"] as const).map((k) => (
                  <g key={k}>
                    <rect x={PILE_X[k] - 62} y="78" width="124" height="112" fill="none" stroke="#000" strokeDasharray="4 3" />
                    <text x={PILE_X[k]} y="72" textAnchor="middle" fontSize="9" fontWeight="600">
                      {s === 3 ? (k === "fixed" ? "constant capital" : "variable capital") : `${k} capital`}
                    </text>
                  </g>
                ))}
              </>
            )}
            {ITEMS.map((it, i) => {
              const pile = s === 0 ? null : s === 1 ? it.usual : it.ramsay;
              const same = ITEMS.filter((o) => (s === 1 ? o.usual : o.ramsay) === pile);
              const k = same.findIndex((o) => o.id === it.id);
              const x = pile ? PILE_X[pile] : 60 + i * 90;
              const y = pile ? 100 + k * 52 : 120;
              return (
                <Place key={it.id} x={x} y={y}>
                  <ItemIcon id={it.id} />
                  <text x="0" y="31" textAnchor="middle" fontSize="8">
                    {it.label}
                  </text>
                </Place>
              );
            })}
            <Fade show={s === 2}>
              <text x="100" y="204" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                cotton moved here!
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="100" y="204" textAnchor="middle" fontSize="8.5" fill={TONE.spindle}>
                passes on its value
              </text>
              <text x="270" y="204" textAnchor="middle" fontSize="8.5" fill={TONE.wage}>
                buys the work that adds value
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 22.2 · Could work happen without a boss? (Ramsay: capital is "not essential")
 * ───────────────────────────────────────────────────────────── */
export function NotEssential() {
  return (
    <Player
      id="anim-v4-22-2"
      title="22.2 · Could the work happen without the boss?"
      steps={[
        { caption: "Ramsay noticed something odd about his own two piles. Machines, tools and materials are needed for any work at all. Without them, nothing gets made." },
        { caption: "But wages, the “circulating” pile? Sam needs bread to work, yes. Does it have to be advanced to him by a boss?" },
        { caption: "Only if Sam is too poor to feed himself until the yarn is sold. Ramsay called the wage advance a mere convenience, made necessary by the poverty of the mass of the people." },
        {
          caption: "Marx was struck: here an economist himself suggests that capital, in this sense, is not eternal, but “accidental”, tied to a certain history. Ramsay, though, did not follow the thought through.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <Shelf x={250} y={12} lit={2} label="Ramsay, 1836" />

          {/* needed for any work */}
          <g transform="translate(40 80)">
            <rect width="110" height="64" fill="#fff" stroke="#000" />
            <text x="55" y="14" textAnchor="middle" fontSize="8" fontWeight="600">
              tools and materials
            </text>
            <g transform="translate(30 40)">
              <Spindle />
            </g>
            <g transform="translate(78 40)">
              <Cotton />
            </g>
            <text x="55" y="80" textAnchor="middle" fontSize="8.5" fill="#2a9d5b" fontWeight="600" style={{ opacity: s === 3 ? 0 : 1, transition: "opacity 400ms" }}>
              needed for any work
            </text>
          </g>

          {/* the wage advance */}
          <g transform="translate(190 80)" style={{ opacity: s >= 1 ? 1 : 0.15, transition: "opacity 500ms" }}>
            <rect width="110" height="64" fill="#fff" stroke="#000" />
            <text x="55" y="14" textAnchor="middle" fontSize="8" fontWeight="600">
              wages paid in advance
            </text>
            <g transform="translate(55 40)">
              <Coins n={3} />
            </g>
            <Fade show={s === 2}>
              <text x="55" y="80" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                only because workers are poor
              </text>
            </Fade>
          </g>

          <Figure who="sam" x={245} y={212} scale={0.62} mood={s === 2 ? "sad" : "happy"} />
          <Fade show={s === 1}>
            <g transform="translate(260 176)">
              <Bubble w={72} lines={["must a boss", "feed me?"]} />
            </g>
          </Fade>
          <Fade show={s === 3}>
            <Figure name="Marx" x={90} y={212} scale={0.62} />
            <g transform="translate(104 202)">
              <Bubble w={100} lines={["capital: not", "eternal, but historical"]} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
