"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Loaf } from "@/components/anim/Things";
import { INCOME } from "./ch48-animations";

/* ─────────────────────────────────────────────────────────────
 * 51.1 · Two ways to share a harvest
 * Marx's own comparison: old village communities (he names India and
 * the Peruvians) also split work into a part for the producers and a
 * surplus for common needs. Pile sizes are made up.
 * ───────────────────────────────────────────────────────────── */
function Pile({ n, color }: { n: number; color: string }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <rect key={i} x={(i % 3) * 13 - 19} y={-Math.floor(i / 3) * 10 - 9} width="12" height="9" fill={color} stroke="#000" strokeWidth=".8" />
      ))}
    </g>
  );
}

export function TwoWaysToShare() {
  return (
    <Player
      id="anim-v3-51-1"
      title="51.1 · Two ways to share a harvest"
      steps={[
        { caption: "Every society splits its work in two: one part feeds the people who did it, and a surplus that meets everyone's wider needs." },
        { caption: "In an old village commune, like those Marx mentions in India or among the Peruvians, the surplus went into a common store, for needs everyone shared, such as caring for the old or mending roads." },
        { caption: "In Tiny Town the same surplus is shared as profit for Mr. Moneybags, interest for Bea, and rent for the Landlord." },
        {
          caption: "The thinker John Stuart Mill agreed that ways of sharing change through history. But he said the ways of making things follow laws that never change.",
          ms: 4600,
        },
        {
          caption: "Marx disagrees. The way of sharing comes straight out of the way of making. Both belong to one moment in history, and both can change.",
          ms: 4600,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="180" y1="20" x2="180" y2="205" stroke="#000" strokeOpacity=".12" />
          <text x="90" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
            a village commune
          </text>
          <text x="270" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
            Tiny Town
          </text>

          {/* commune */}
          <g transform="translate(55 112)">
            <Pile n={9} color="#c98a3a" />
          </g>
          <text x="55" y="132" textAnchor="middle" fontSize="8.5">
            for the workers
          </text>
          <g transform="translate(125 112)">
            <Pile n={4} color="#e6b800" />
          </g>
          <text x="125" y="132" textAnchor="middle" fontSize="8.5">
            surplus
          </text>
          <Fade show={s >= 1}>
            <g transform="translate(125 70)">
              <rect x="-26" y="-14" width="52" height="24" fill="#fff" stroke="#000" />
              <text y="2" textAnchor="middle" fontSize="8.5">
                common store
              </text>
            </g>
            <line x1="125" y1="84" x2="125" y2="96" stroke="#000" />
          </Fade>
          <Figure name="villagers" x={60} y={212} scale={0.6} />
          <Figure name="" x={92} y={212} scale={0.52} label={false} />

          {/* Tiny Town */}
          <g transform="translate(225 112)">
            <Pile n={9} color={INCOME.wages} />
          </g>
          <text x="225" y="132" textAnchor="middle" fontSize="8.5">
            wages
          </text>
          <g transform="translate(305 112)">
            <Pile n={4} color="#e6b800" />
          </g>
          <text x="305" y="132" textAnchor="middle" fontSize="8.5">
            surplus
          </text>
          <Fade show={s >= 2}>
            {[
              { x: 268, label: "profit", c: INCOME.profit },
              { x: 305, label: "interest", c: INCOME.interest },
              { x: 342, label: "rent", c: INCOME.rent },
            ].map((t) => (
              <g key={t.label}>
                <line x1="305" y1="96" x2={t.x} y2="64" stroke="#000" strokeOpacity=".4" />
                <rect x={t.x - 17} y="48" width="34" height="16" fill={t.c} />
                <text x={t.x} y="60" textAnchor="middle" fontSize="8" fill="#fff">
                  {t.label}
                </text>
              </g>
            ))}
          </Fade>
          <Figure who="sam" x={225} y={212} scale={0.6} />
          <Fade show={s >= 2}>
            <Figure who="moneybags" x={268} y={212} scale={0.52} label={false} />
            <Figure who="bea" x={305} y={212} scale={0.52} label={false} />
            <Figure name="Landlord" x={342} y={212} scale={0.52} label={false} />
          </Fade>

          {/* Mill and Marx */}
          <Fade show={s === 3}>
            <rect x="20" y="136" width="320" height="30" fill="#fff" stroke="#000" />
            <text x="180" y="149" textAnchor="middle" fontSize="8.5">
              Mill: sharing changes over history;
            </text>
            <text x="180" y="160" textAnchor="middle" fontSize="8.5">
              making follows laws that never change
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="20" y="136" width="320" height="30" fill="#000" />
            <text x="180" y="155" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
              Marx: making and sharing change together
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 51.2 · The tree and the pot (Marx's two marks, and his claim that
 * historical forms are outgrown)
 * ───────────────────────────────────────────────────────────── */
export function TheTreeAndThePot() {
  return (
    <Player
      id="anim-v3-51-2"
      title="51.2 · The tree and the pot"
      steps={[
        { caption: "Marx names two marks of capitalism. First mark: nearly everything is made to be sold, even a worker's ability to work." },
        { caption: "Second mark: the main aim of making things is surplus-value, more money for the owner." },
        { caption: "Think of a society's skills and machines as a tree, and its way of owning and sharing as the pot it grows in. The pot was once the right size." },
        { caption: "But the tree keeps growing: bigger machines, more science, more teamwork. Marx says the pot starts to pinch: the growing powers clash with the old shape." },
        {
          caption: "His claim: when that clash ripens, the old form is cast off and a new one takes its place, as earlier ways of life were before. It is his argument about history, not a proven law.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const tree = s <= 2 ? 1 : 1.45;
        const cracked = s >= 3;
        return (
          <>
            {/* the two marks */}
            <g style={{ opacity: s <= 1 ? 1 : 0.25, transition: "opacity 500ms" }}>
              <g transform="translate(70 70)">
                <rect x="-50" y="-26" width="100" height="44" fill="#fff" stroke="#000" />
                <text y="-12" textAnchor="middle" fontSize="8.5" fontWeight="600">
                  1. everything for sale
                </text>
                <g transform="translate(-22 6) scale(.6)">
                  <Loaf />
                </g>
                <text x="12" y="10" fontSize="8">
                  even work
                </text>
              </g>
              <g transform="translate(70 140)" style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 500ms" }}>
                <rect x="-50" y="-26" width="100" height="44" fill="#fff" stroke="#000" />
                <text y="-12" textAnchor="middle" fontSize="8.5" fontWeight="600">
                  2. aim: surplus-value
                </text>
                <circle cx="-20" cy="6" r="8" fill="#e6b800" stroke="#000" />
                <text x="-5" y="10" fontSize="8">
                  more money
                </text>
              </g>
            </g>

            {/* tree in a pot */}
            <g transform="translate(250 196)">
              <path
                d={cracked ? "M-34,-40 L34,-40 L26,0 L4,0 L0,-14 L-4,0 L-26,0 Z" : "M-34,-40 L34,-40 L26,0 L-26,0 Z"}
                fill="#c66b3d"
                stroke="#000"
                strokeWidth="1.5"
              />
              {cracked && <path d="M6,-40 L0,-26 L8,-18 L2,-6" fill="none" stroke="#000" strokeWidth="1.5" />}
              <g style={{ transform: `scale(${tree})`, transformOrigin: "0px -40px", transition: "transform 900ms cubic-bezier(.2,.8,.2,1)" }}>
                <rect x="-4" y="-90" width="8" height="52" fill="#8a5a2b" />
                <circle cx="0" cy="-104" r="30" fill="#5fa35a" stroke="#000" />
                <circle cx="-20" cy="-88" r="16" fill="#6db667" stroke="#000" />
                <circle cx="20" cy="-88" r="16" fill="#6db667" stroke="#000" />
              </g>
              {cracked && (
                <g>
                  <path d="M-30,-6 q-10,4 -16,0 M30,-6 q10,4 16,0" fill="none" stroke="#8a5a2b" strokeWidth="2.5" />
                </g>
              )}
            </g>
            <Fade show={s >= 2}>
              <text x="250" y="212" textAnchor="middle" fontSize="8.5">
                pot: the way of owning and sharing
              </text>
            </Fade>
            <Fade show={s >= 2 && s < 3}>
              <text x="250" y="28" textAnchor="middle" fontSize="8.5">
                tree: skills, machines, science
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="20" y="178" width="140" height="34" fill="#000" />
              <text x="90" y="192" textAnchor="middle" fontSize="8.5" fill="#fff">
                Marx&apos;s claim: the old form
              </text>
              <text x="90" y="204" textAnchor="middle" fontSize="8.5" fill="#fff">
                makes way for a new one
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
