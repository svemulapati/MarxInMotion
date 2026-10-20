"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Loaf } from "@/components/anim/Things";
import { Shelf } from "./ch04-animations";

const GOLD = "#e6b800";
const GREEN = "#2a9d5b";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 5.1 · Eighty do the work of a hundred
 * Necker's own example: "a century ago a hundred thousand workers were
 * required to do what is done today by eighty thousand"; the other twenty
 * thousand turn to making luxuries for the rich, while wages stay at
 * "the necessary price of subsistence". Shown as 10 figures for 100,000.
 * ───────────────────────────────────────────────────────────── */
export function EightyDoTheWorkOfAHundred() {
  return (
    <Player
      id="anim-v4-5-1"
      title="5.1 · Eighty do the work of a hundred"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Jacques Necker was a Swiss banker who ran France's finances in the 1770s and 1780s. He asks us to picture a century ago. Ten figures here stand for his hundred thousand workers." },
        { caption: "They make all the bread, cloth and houses people need." },
        { caption: "Then come better tools and machines. Now eighty thousand can do what a hundred thousand did before." },
        { caption: "What happens to the other twenty thousand? Necker says they must find other work. They end up making fine things for the rich: lace, carriages, gold clocks." },
        {
          caption: "And the workers' pay? Necker says it stays at what a person needs to live. The faster work helps only the owners, never the workers themselves.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const faster = s >= 2;
        return (
          <>
            <Shelf x={326} y={60} label="1784" />
            {Array.from({ length: 10 }, (_, i) => {
              const moved = faster && i >= 8;
              const x = moved ? 236 + (i - 8) * 40 : 22 + i * 26;
              return (
                <g key={i} style={{ transform: `translateX(${x}px)`, transition: `transform ${T}` }}>
                  <Figure name="" x={0} y={moved ? 212 : 132} scale={0.55} label={false} mood={s === 4 && !moved ? "sad" : "happy"} />
                </g>
              );
            })}
            {/* what the eight (or ten) make */}
            <Fade show={s >= 1}>
              <g transform="translate(110 162)">
                <Loaf />
              </g>
              <text x="110" y="190" textAnchor="middle" fontSize="9">
                bread, cloth, houses
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="110" y="34" textAnchor="middle" fontSize="11" fontWeight="600">
                {faster ? "80,000 do it now" : ""}
              </text>
              <text x="110" y="50" textAnchor="middle" fontSize="9" fillOpacity=".6">
                with better tools
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <g transform="translate(276 170)">
                <rect x="-36" y="-14" width="72" height="22" fill={GOLD} stroke="#000" strokeWidth=".8" />
                <text y="1" textAnchor="middle" fontSize="9">
                  luxuries
                </text>
              </g>
              <text x="276" y="130" textAnchor="middle" fontSize="9">
                20,000 make fine
              </text>
              <text x="276" y="142" textAnchor="middle" fontSize="9">
                things for the rich
              </text>
            </Fade>
            <Fade show={s === 4}>
              <g transform="translate(110 76)">
                <rect x="-74" y="-12" width="148" height="22" fill={GREEN} />
                <text y="3" textAnchor="middle" fontSize="9" fill="#fff">
                  pay: still just enough to live
                </text>
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.2 · One class fixed, one class growing
 * Necker: one class "whose wealth must always be pretty nearly the same",
 * another "whose wealth necessarily increases"; durable luxuries pile up
 * across generations; "they must work today on pain of dying tomorrow".
 * Marx: Necker traces profit and rent to surplus-labour and sees relative
 * surplus-value, but frames it as rich against poor, not as capital.
 * ───────────────────────────────────────────────────────────── */
const GENS = ["great-grandparents", "grandparents", "parents", "today"];

export function OneClassFixedOneGrowing() {
  return (
    <Player
      id="anim-v4-5-2"
      title="5.2 · One class fixed, one class growing"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Necker saw two classes. One lives by the work of its hands, and its share stays about the same, generation after generation." },
        { caption: "The other owns the land and the tools. Some of the fine things made for it last a long time: houses, silver, paintings." },
        { caption: "So these lasting things pile up, generation after generation, in the owners' hands. The gap between the two classes grows deeper every century." },
        { caption: "Necker on the worker's side of a bargain: he must work today, or face hunger tomorrow. The owner risks only a delay in more luxury." },
        {
          caption: "Marx gives Necker credit: he saw that profit and rent come from workers' extra labour. But Necker told it as a story of rich and poor, not of how capital grows.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {GENS.map((g, i) => {
            const x = 50 + i * 80;
            const pile = s >= 2 ? i + 1 : s >= 1 ? 1 : 0;
            return (
              <g key={g}>
                <text x={x} y="214" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                  {g}
                </text>
                {/* workers' share: the same each generation */}
                <rect x={x - 26} y="186" width="20" height="14" fill={GREEN} />
                {/* owners' lasting things: grow */}
                {Array.from({ length: pile }, (_, k) => (
                  <rect
                    key={k}
                    x={x + 4}
                    y={186 - (k + 1) * 16}
                    width="22"
                    height="14"
                    fill={GOLD}
                    stroke="#000"
                    strokeWidth=".6"
                    style={{ opacity: s >= 2 || k === 0 ? 1 : 0, transition: `opacity 500ms ease ${k * 150}ms` }}
                  />
                ))}
              </g>
            );
          })}
          <g transform="translate(14 30)">
            <rect width="10" height="10" fill={GREEN} />
            <text x="14" y="9" fontSize="9">
              workers&apos; share
            </text>
            <rect y="16" width="10" height="10" fill={GOLD} />
            <text x="14" y="25" fontSize="9">
              owners&apos; lasting fine things
            </text>
          </g>

          <Fade show={s === 3}>
            <g transform="translate(240 50)">
              <rect x="-90" y="-16" width="180" height="40" fill="#fff" stroke="#000" />
              <text y="0" textAnchor="middle" fontSize="9">
                worker: work today,
              </text>
              <text y="13" textAnchor="middle" fontSize="9">
                or go hungry tomorrow
              </text>
            </g>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(220 46)">
              <rect x="-94" y="-14" width="188" height="36" fill="#000" />
              <text y="0" textAnchor="middle" fontSize="9" fill="#fff">
                profit and rent come from extra labour,
              </text>
              <text y="13" textAnchor="middle" fontSize="9" fill="#fff">
                but this is about capital, not just rich and poor
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
