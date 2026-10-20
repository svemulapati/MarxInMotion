"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Corn, Fade } from "@/components/anim/Things";
import { Shelf } from "./ch20-animations";

/* ─────────────────────────────────────────────────────────────
 * 24.1 · Rent has a history (Jones's forms of rent)
 * ───────────────────────────────────────────────────────────── */
const FORMS = [
  { name: "labour rent", who: "a serf", pays: "days of work", x: 46 },
  { name: "produce rent", who: "a peasant", pays: "sacks of grain", x: 112 },
  { name: "metayer rent", who: "a share-cropper", pays: "half the harvest", x: 178 },
  { name: "ryot rent", who: "a ryot (India)", pays: "a share to the ruler", x: 244 },
  { name: "farmer's rent", who: "Grandpa Ned", pays: "money, from profit", x: 312 },
];

export function RentHasAHistory() {
  return (
    <Player
      id="anim-v4-24-1"
      title="24.1 · Rent has a history"
      steps={[
        { caption: "Richard Jones, an English clergyman, wrote about rent in 1831. Ricardo had treated rent as if it were always the same thing." },
        { caption: "Jones looked at history and around the world. Under serfdom, rent was paid in days of work on the lord's land." },
        { caption: "Later it was paid in produce, in sacks of grain. Then came metayer rent, with half the harvest, and in India the ryot's share to the ruler." },
        { caption: "Only last comes Grandpa Ned's kind: a capitalist farmer who pays money rent out of his profit." },
        {
          caption: "Each form of rent, Jones saw, goes with a different way of working. Marx praised him for this sense of the historical differences in ways of producing, missing in English economists since Steuart.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const shown = s === 0 ? 0 : s === 1 ? 1 : s === 2 ? 4 : 5;
        return (
          <>
            <Shelf x={8} y={10} lit={6} label="Jones, 1831" />
            <line x1="20" y1="168" x2="340" y2="168" stroke="#000" />
            <text x="20" y="182" fontSize="7.5" fillOpacity=".5">
              long ago
            </text>
            <text x="340" y="182" textAnchor="end" fontSize="7.5" fillOpacity=".5">
              Jones&apos;s day
            </text>
            {FORMS.map((f, i) => (
              <g key={f.name} style={{ opacity: i < shown ? 1 : 0, transition: `opacity 500ms ease ${i * 120}ms` }}>
                <circle cx={f.x} cy="168" r="4" fill={i === 4 ? "#8a5a2b" : "#000"} />
                <text x={f.x} y="80" textAnchor="middle" fontSize="8" fontWeight="600">
                  {f.name}
                </text>
                <text x={f.x} y="92" textAnchor="middle" fontSize="7">
                  {f.pays}
                </text>
                {i === 4 ? (
                  <Figure who="ned" x={f.x} y={160} scale={0.55} label={false} />
                ) : (
                  <Figure name="" x={f.x} y={160} scale={0.55} label={false} />
                )}
                <text x={f.x} y="200" textAnchor="middle" fontSize="7">
                  {f.who}
                </text>
                <g transform={`translate(${f.x} 108) scale(.55)`}>{i === 4 ? <Coins n={2} /> : i === 0 ? null : <Corn />}</g>
              </g>
            ))}
            <Fade show={s === 4}>
              <rect x="70" y="208" width="220" height="12" fill="#000" />
              <text x="180" y="217" textAnchor="middle" fontSize="7.5" fill="#fff">
                each form of rent goes with a way of working
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 24.2 · Not forever (Jones: capitalist relations are not eternal)
 * The last animation of the bonus volume: the shelf closes.
 * ───────────────────────────────────────────────────────────── */
const STAGES = ["peasants and lords", "small masters", "bosses and wage-workers", "?"];

export function NotForever() {
  return (
    <Player
      id="anim-v4-24-2"
      title="24.2 · Not forever"
      steps={[
        { caption: "Jones went further. He described the “economical structure of nations”: the way a people organises work changes over time." },
        { caption: "Workers were once paid by customers out of their own spending. Step by step they passed into the hands of employers with capital, like Mr. Moneybags." },
        { caption: "And Jones wrote that a state of things may one day exist where the workers and the owners of capital are the same people." },
        {
          caption: "Marx says Jones by no means saw capitalist relations as eternal, and grasped this more deeply than Ramsay. That is where Marx's history of the old thinkers ends.",
          ms: 5000,
        },
        {
          caption: "The Old Thinkers' Shelf is full: from Steuart and the Physiocrats to Ricardo and Jones. Every one of them helped Marx build Capital, sometimes by being wrong.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {/* stages of the economical structure */}
          <g style={{ opacity: s <= 3 ? 1 : 0, transition: "opacity 600ms" }}>
            {STAGES.map((st, i) => {
              const show = s >= 1 ? true : i === 0;
              const last = i === 3;
              return (
                <g key={st} transform={`translate(${22 + i * 84} 70)`} style={{ opacity: show && (!last || s >= 2) ? 1 : 0, transition: `opacity 500ms ease ${i * 150}ms` }}>
                  <rect width="74" height="40" fill={last ? "none" : "#fff"} stroke="#000" strokeDasharray={last ? "4 3" : undefined} />
                  <text x="37" y="18" textAnchor="middle" fontSize={last ? 16 : 7.5} fontWeight="600">
                    {last ? "?" : st.split(" ")[0]}
                  </text>
                  {!last && (
                    <text x="37" y="30" textAnchor="middle" fontSize="7.5">
                      {st.split(" ").slice(1).join(" ")}
                    </text>
                  )}
                  {i < 3 && s >= 1 && <path d="M76,20 L82,20" stroke="#000" strokeWidth="1.5" />}
                </g>
              );
            })}
            <Fade show={s === 2}>
              <text x="296" y="128" textAnchor="middle" fontSize="7.5" fontWeight="600">
                workers and owners
              </text>
              <text x="296" y="139" textAnchor="middle" fontSize="7.5" fontWeight="600">
                the same people?
              </text>
            </Fade>
            <Figure name="Jones" x={60} y={196} scale={0.7} />
            <Fade show={s === 3}>
              <Figure name="Marx" x={300} y={196} scale={0.7} />
              <text x="180" y="170" textAnchor="middle" fontSize="9" fontWeight="600">
                not eternal
              </text>
            </Fade>
          </g>

          {/* the shelf closes */}
          <Fade show={s === 4}>
            <g transform="translate(106 60) scale(1.6)">
              <Shelf x={0} y={0} />
            </g>
            <text x="180" y="160" textAnchor="middle" fontSize="10" fontWeight="600">
              the end of the bonus volume
            </text>
            <text x="180" y="176" textAnchor="middle" fontSize="8.5">
              next: the whole story in one animation
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
