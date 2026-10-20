"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Coins, Corn, Fade, Linen, Place } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const MONEY = "#b38f00";

/* ─────────────────────────────────────────────────────────────
 * 19.1 · Quesnay's zigzag
 * The Tableau Économique, very simply: three classes, money flowing
 * between them so that the year's product is reproduced on the same
 * scale. The farmers keep their seed and stock back in kind.
 * ───────────────────────────────────────────────────────────── */
const CLS = {
  farmers: { x: 64, y: 196 },
  owners: { x: 180, y: 96 },
  artisans: { x: 296, y: 196 },
};

/** A coin that travels along a path while its step is showing. */
function Travel({ d, show, delay = 0 }: { d: string; show: boolean; delay?: number }) {
  return (
    <g style={{ opacity: show ? 1 : 0, transition: "opacity 300ms" }}>
      <path d={d} fill="none" stroke={MONEY} strokeWidth="1.8" strokeDasharray="4 3" markerEnd="url(#v2c19-arr)" />
      {show && (
        <circle r="6" fill="#e6b800" stroke="#000">
          <animateMotion dur="1.8s" begin={`${delay}ms`} repeatCount="indefinite" path={d} />
        </circle>
      )}
    </g>
  );
}

export function QuesnaysZigzag() {
  return (
    <Player
      id="anim-v2-19-1"
      title="19.1 · Quesnay's zigzag"
      viewBox="0 0 360 225"
      steps={[
        {
          caption: "In 1758 a French doctor, François Quesnay, drew a whole country's economy on one page, his Tableau Économique. He saw three groups: farmers, landowners, and artisans.",
          ms: 4600,
        },
        { caption: "The farmers grow more than they use up. They pay the extra as rent, in money, to the landowners." },
        { caption: "The landowners spend that money: part on food from the farmers, part on goods from the artisans." },
        {
          caption: "The artisans spend their money on food and raw materials from the farmers. The money is back where it started, ready to pay next year's rent.",
          ms: 4600,
        },
        {
          caption: "And the farmers keep their seed and tools back to start again. Marx praised the whole scheme as the first systematic picture of capitalist production, even though Quesnay thought only farming made a surplus.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <defs>
            <marker id="v2c19-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={MONEY} />
            </marker>
          </defs>

          {/* the three classes */}
          <g style={{ opacity: 1, transition: `all ${T}` }}>
            <rect x="14" y="132" width="100" height="22" fill="#e9f3dd" stroke="#000" />
            <text x="64" y="147" textAnchor="middle" fontSize="9" fontWeight="600">
              farmers
            </text>
            <Figure who="ned" x={CLS.farmers.x - 18} y={CLS.farmers.y} scale={0.62} label={false} />
            <Figure name="farmhand" x={CLS.farmers.x + 18} y={CLS.farmers.y} scale={0.62} label={false} />
            <text x="64" y="214" textAnchor="middle" fontSize="8" fillOpacity=".6">
              grow the food and flax
            </text>

            <rect x="130" y="16" width="100" height="22" fill="#eee" stroke="#000" />
            <text x="180" y="31" textAnchor="middle" fontSize="9" fontWeight="600">
              landowners
            </text>
            <Figure name="Landlord" x={CLS.owners.x} y={CLS.owners.y} scale={0.62} label={false} />

            <rect x="246" y="132" width="100" height="22" fill="#e8e3f3" stroke="#000" />
            <text x="296" y="147" textAnchor="middle" fontSize="9" fontWeight="600">
              artisans
            </text>
            <Figure who="ava" x={CLS.artisans.x - 18} y={CLS.artisans.y} scale={0.62} label={false} />
            <Figure name="smith" x={CLS.artisans.x + 18} y={CLS.artisans.y} scale={0.62} label={false} />
            <text x="296" y="214" textAnchor="middle" fontSize="8" fillOpacity=".6">
              make tools and clothes
            </text>
          </g>

          {/* 1: rent */}
          <Travel d="M70,128 Q90,70 150,70" show={s === 1} />
          <Fade show={s === 1}>
            <text x="72" y="84" fontSize="9" fill={MONEY} fontWeight="600">
              rent
            </text>
          </Fade>

          {/* 2: landowners spend */}
          <Travel d="M160,92 Q120,110 84,128" show={s === 2} />
          <Travel d="M200,92 Q240,110 276,128" show={s === 2} delay={500} />
          <Fade show={s === 2}>
            <text x="104" y="108" textAnchor="end" fontSize="9" fill={MONEY}>
              food
            </text>
            <text x="258" y="108" fontSize="9" fill={MONEY}>
              goods
            </text>
          </Fade>

          {/* 3: artisans buy from farmers */}
          <Travel d="M244,170 Q180,186 118,170" show={s === 3} />
          <Fade show={s === 3}>
            <text x="180" y="200" textAnchor="middle" fontSize="9" fill={MONEY}>
              food and raw materials
            </text>
            <g transform="translate(64 112)">
              <Coins n={3} />
            </g>
            <text x="120" y="112" fontSize="8.5" fontWeight="600">
              back home: next year&apos;s rent
            </text>
          </Fade>

          {/* 4: seed kept back, and Marx's verdict */}
          <Fade show={s === 4}>
            <Place x={30} y={112} scale={0.8} show={s === 4}>
              <Corn />
            </Place>
            <text x="44" y="102" fontSize="8.5">
              seed and stock stay
            </text>
            <text x="44" y="113" fontSize="8.5">
              with the farmers
            </text>
            <g transform="translate(294 80)">
              <rect x="-60" y="-22" width="120" height="44" fill="#000" />
              <text y="-5" textAnchor="middle" fontSize="8.5" fill="#fff">
                &ldquo;the first systematic
              </text>
              <text y="7" textAnchor="middle" fontSize="8.5" fill="#fff">
                conception of capitalist
              </text>
              <text y="19" textAnchor="middle" fontSize="8.5" fill="#fff">
                production&rdquo;
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 19.2 · What Smith forgot
 * Smith resolves every price into wages, profit and rent and passes the
 * means of production back and back, so constant capital vanishes.
 * ───────────────────────────────────────────────────────────── */
const W = "#2a9d5b";
const P = "#e6b800";
const R = "#8a5a2b";

function SmithBar({ x, y, w, show = true, delay = 0 }: { x: number; y: number; w: number; show?: boolean; delay?: number }) {
  const third = w / 3;
  return (
    <g style={{ opacity: show ? 1 : 0, transition: `opacity 500ms ease ${show ? delay : 0}ms` }}>
      {[
        [W, "wages"],
        [P, "profit"],
        [R, "rent"],
      ].map(([c, l], i) => (
        <g key={l}>
          <rect x={x + i * third} y={y} width={third} height="16" fill={c} stroke="#000" />
          <text x={x + i * third + third / 2} y={y + 11.5} textAnchor="middle" fontSize="7.5" fill={i === 1 ? "#000" : "#fff"}>
            {l}
          </text>
        </g>
      ))}
    </g>
  );
}

export function WhatSmithForgot() {
  return (
    <Player
      id="anim-v2-19-2"
      title="19.2 · What Smith forgot"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Adam Smith said the price of every thing, a coat for example, splits into three parts: wages, profit and rent." },
        { caption: "Leo asks: but the coat was made from my linen. Isn't some of its price the linen? Smith answers: the linen's price splits into wages, profit and rent too." },
        {
          caption: "And the loom? The same answer. The wood for the loom? The same again. Smith keeps passing the question further back, and never stops to count the materials.",
          ms: 4800,
        },
        {
          caption: "Marx draws the conclusion: then the whole year's product would be only wages and surplus-value, v + s, all of it to be eaten. Nothing would be left to replace the cotton, the looms and the machines.",
          ms: 5200,
        },
        {
          caption: "But every real town must keep part of its product back to replace what it used up. That part, constant capital, is exactly what Smith's rule left out. Marx calls the rule Smith's dogma.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const chain = [
          { label: "a coat", draw: <Coat />, y: 30 },
          { label: "Leo's linen", draw: <Linen />, y: 70 },
          { label: "the loom", draw: <Loom />, y: 110 },
          { label: "the wood", draw: <Logs />, y: 150 },
        ];
        return (
          <>
            {chain.map((c, i) => {
              const on = s >= 3 ? false : i === 0 ? true : s >= Math.min(i, 2);
              return (
                <g key={c.label} style={{ opacity: on ? 1 : s >= 3 ? 0 : 0.15, transition: "opacity 500ms" }}>
                  <g transform={`translate(40 ${c.y}) scale(${i === 0 ? 0.7 : 0.85})`}>{c.draw}</g>
                  <text x="66" y={c.y + 4} fontSize="9">
                    {c.label}
                  </text>
                  <SmithBar x={150} y={c.y - 8} w={150} show={on} delay={i * 150} />
                  {i > 0 && on && (
                    <text x="310" y={c.y + 4} fontSize="12" fill="#d6452f">
                      ?
                    </text>
                  )}
                </g>
              );
            })}
            <Fade show={s === 2}>
              <text x="225" y="196" textAnchor="middle" fontSize="9.5" fontStyle="italic">
                ...and back, and back again
              </text>
            </Fade>

            {/* the whole town's yearly product */}
            <Fade show={s >= 3}>
              <text x="180" y="40" textAnchor="middle" fontSize="10.5" fontWeight="600">
                Tiny Town&apos;s whole year of products
              </text>
              <text x="40" y="80" fontSize="9">
                Smith&apos;s way
              </text>
              <rect
                x="110"
                y="68"
                height="20"
                width={s === 4 ? 70 : 0}
                fill={TONE.cotton}
                stroke="#000"
                style={{ transition: `width ${T}` }}
              />
              <rect x={s === 4 ? 180 : 110} y="68" width="110" height="20" fill={W} stroke="#000" style={{ transition: `x ${T}` }} />
              <rect x={s === 4 ? 290 : 220} y="68" width="50" height="20" fill={P} stroke="#000" style={{ transition: `x ${T}` }} />
              <text x={s === 4 ? 235 : 165} y="82" textAnchor="middle" fontSize="9" fill="#fff" style={{ transition: `x ${T}` }}>
                v
              </text>
              <text x={s === 4 ? 315 : 245} y="82" textAnchor="middle" fontSize="9" style={{ transition: `x ${T}` }}>
                s
              </text>
            </Fade>
            <Fade show={s === 3} delay={300}>
              <text x="180" y="116" textAnchor="middle" fontSize="10">
                all of it eaten...
              </text>
              <text x="180" y="132" textAnchor="middle" fontSize="10" fill="#d6452f" fontWeight="600">
                ...so nothing to work with next year?
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <text x="145" y="82" textAnchor="middle" fontSize="9" fontWeight="700">
                c
              </text>
              <text x="145" y="104" textAnchor="middle" fontSize="8.5" fontWeight="600">
                kept back to replace
              </text>
              <text x="145" y="115" textAnchor="middle" fontSize="8.5" fontWeight="600">
                cotton, looms, machines
              </text>
              <rect x="70" y="150" width="220" height="24" fill="#000" />
              <text x="180" y="166" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                Marx: c + v + s, not just v + s
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/** A little hand loom. */
const Loom = () => (
  <g>
    <rect x="-14" y="-12" width="28" height="22" fill="none" stroke="#000" strokeWidth="1.5" />
    {[-8, -3, 2, 7].map((x) => (
      <line key={x} x1={x} y1="-12" x2={x} y2="10" stroke="#000" strokeOpacity=".5" />
    ))}
    <line x1="-16" y1="10" x2="-16" y2="18" stroke="#000" strokeWidth="2" />
    <line x1="16" y1="10" x2="16" y2="18" stroke="#000" strokeWidth="2" />
  </g>
);

/** A stack of logs. */
const Logs = () => (
  <g>
    {[
      [-8, 4],
      [8, 4],
      [0, -6],
    ].map(([x, y]) => (
      <g key={`${x}${y}`}>
        <rect x={x - 12} y={y - 5} width="24" height="10" rx="5" fill="#a9744a" stroke="#000" />
        <circle cx={x + 12} cy={y} r="5" fill="#d6a46c" stroke="#000" />
      </g>
    ))}
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 19.3 · The seed corn
 * Smith's gross and net revenue sneak capital back in; Ricardo copies
 * Smith "almost verbatim"; Storch notices that a nation's capital is not
 * consumable. Ned's sacks are illustrative numbers.
 * ───────────────────────────────────────────────────────────── */
export function TheSeedCorn() {
  return (
    <Player
      id="anim-v2-19-3"
      title="19.3 · The seed corn"
      steps={[
        { caption: "Grandpa Ned harvests 10 sacks of wheat. (Example numbers.)" },
        { caption: "If the whole harvest were only wages, profit and rent, as Smith's rule says, Ned could eat all 10 sacks. Then what would he sow next spring?" },
        {
          caption: "Smith knows the seed matters, so he adds a side door: gross revenue is all 10 sacks, net revenue is what is left after keeping back seed and repairs.",
          ms: 4600,
        },
        {
          caption: "Marx points out the trick: the side door smuggles capital back in, a fourth part next to wages, profit and rent, which Smith's own rule had no room for.",
          ms: 4600,
        },
        {
          caption: "Later economists mostly copied Smith. Ricardo repeats him almost word for word. Only a few, like Heinrich Storch, noticed that the things which are a nation's capital cannot be eaten.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="ned" x={40} y={206} scale={0.85} mood={s === 1 ? "wow" : "happy"} />
          {Array.from({ length: 10 }, (_, i) => {
            const seed = i >= 8;
            const keep = s >= 2 && seed;
            const eaten = s === 1;
            return (
              <Place
                key={i}
                x={keep ? 300 + (i - 8) * 30 : 90 + (i % 5) * 34}
                y={keep ? 160 : 60 + Math.floor(i / 5) * 40}
                scale={0.95}
              >
                <g style={{ opacity: eaten ? 0.35 : 1, transition: "opacity 500ms" }}>
                  <Sack />
                </g>
              </Place>
            );
          })}
          <Fade show={s === 1}>
            <text x="175" y="146" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
              all eaten: no seed for spring
            </text>
          </Fade>
          <Fade show={s >= 2}>
            <text x="175" y="130" textAnchor="middle" fontSize="9">
              gross revenue: 10 sacks
            </text>
            <text x="175" y="142" textAnchor="middle" fontSize="9">
              net revenue: 8 sacks
            </text>
            <text x="315" y="196" textAnchor="middle" fontSize="8.5" fontWeight="600">
              seed kept back
            </text>
          </Fade>
          <Fade show={s === 3}>
            <rect x="96" y="160" width="170" height="40" fill="#000" />
            <text x="181" y="176" textAnchor="middle" fontSize="9" fill="#fff">
              wages + profit + rent
            </text>
            <text x="181" y="190" textAnchor="middle" fontSize="9" fill="#e6b800" fontWeight="700">
              + capital, by the side door
            </text>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(140 182)">
              <rect x="-44" y="-16" width="88" height="32" fill="#fff" stroke="#000" />
              <text y="-3" textAnchor="middle" fontSize="8.5">
                Ricardo:
              </text>
              <text y="9" textAnchor="middle" fontSize="8.5">
                copies Smith
              </text>
            </g>
            <g transform="translate(230 182)">
              <rect x="-44" y="-16" width="88" height="32" fill="#fff" stroke="#000" />
              <text y="-3" textAnchor="middle" fontSize="8.5">
                Storch: capital
              </text>
              <text y="9" textAnchor="middle" fontSize="8.5">
                &ldquo;not consumable&rdquo;
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/** A sack of wheat. */
const Sack = () => (
  <g>
    <path d="M-11,-12 Q0,-17 11,-12 L13,12 Q0,16 -13,12 Z" fill="#e8c35a" stroke="#000" strokeWidth="1.1" />
    <path d="M-5,-14 L-2,-19 M2,-19 L5,-14" stroke="#000" />
    <text y="5" textAnchor="middle" fontSize="6" fontWeight="600">
      WHEAT
    </text>
  </g>
);
