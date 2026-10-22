"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Place, Tag } from "@/components/anim/Things";

const STYLE = `
@keyframes c33-bob { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-3px) } }
.c33-bob { animation: c33-bob 1.6s ease-in-out infinite; }
`;

/** A big sailing ship, centred on its waterline. */
function Ship() {
  return (
    <g className="c33-bob">
      <path d="M-34,0 L34,0 L26,12 L-26,12 Z" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
      <line x1="-8" y1="0" x2="-8" y2="-38" stroke="#000" strokeWidth="1.2" />
      <line x1="14" y1="0" x2="14" y2="-30" stroke="#000" strokeWidth="1.2" />
      <path d="M-7,-36 L10,-8 L-7,-8 Z" fill="#fff" stroke="#000" />
      <path d="M15,-28 L28,-8 L15,-8 Z" fill="#fff" stroke="#000" />
    </g>
  );
}

/** A crate of tools and seeds. */
function Crate() {
  return (
    <g>
      <rect x="-10" y="-10" width="20" height="20" fill="#c9a46b" stroke="#000" />
      <path d="M-10,-10 L10,10 M10,-10 L-10,10" stroke="#8a5a2b" />
    </g>
  );
}

/** A little farm plot with a hut. */
function Plot() {
  return (
    <g>
      <rect x="-22" y="-6" width="44" height="14" fill="#e3efd9" stroke="#3f8f3a" />
      <rect x="-8" y="-20" width="16" height="14" fill="#fff" stroke="#000" />
      <path d="M-11,-20 L0,-28 L11,-20 Z" fill="#c9a46b" stroke="#000" />
    </g>
  );
}

/** An unmade bed and a water bucket, nobody to tend them. */
function BedAndBucket() {
  return (
    <g>
      <rect x="-24" y="-8" width="38" height="12" fill="#fff" stroke="#000" />
      <path d="M-20,-8 q8,-8 16,0 q8,-6 14,0" fill="#cfe3f5" stroke="#000" strokeWidth=".8" />
      <line x1="-24" y1="4" x2="-24" y2="10" stroke="#000" />
      <line x1="14" y1="4" x2="14" y2="10" stroke="#000" />
      <path d="M22,-6 L34,-6 L32,8 L24,8 Z" fill="#9a9a9a" stroke="#000" />
      <path d="M22,-6 q6,-10 12,0" fill="none" stroke="#000" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 33.1 · Mr. Peel's empty bed (Wakefield's story, told by Marx)
 * Real figures: £50,000 of goods and 300 working people (Moore and
 * Aveling, after Wakefield). Mr. Moneybags plays the same part.
 * ───────────────────────────────────────────────────────────── */
const PLOTS = [
  { x: 200, y: 88 },
  { x: 258, y: 72 },
  { x: 316, y: 92 },
  { x: 240, y: 128 },
  { x: 304, y: 140 },
];

export function MrPeelsEmptyBed() {
  return (
    <Player
      id="anim-33-1"
      title="33.1 · Mr. Peel's empty bed"
      steps={[
        {
          caption: "Mr. Moneybags hears of a colony far across the sea, with wide land free for the taking. He loads a ship with money, tools, seeds and food, and brings 300 workers too.",
          ms: 4600,
        },
        { caption: "They land. There is so much free land that anyone can have a farm of their own." },
        { caption: "One by one, the workers walk off, claim a piece of land, and work for themselves. Why work for a boss when you can work for yourself?" },
        {
          caption: "Mr. Moneybags is left alone. His tools rust and his seeds spoil. This really happened to a Mr. Peel at the Swan River in Western Australia: he was “left without a servant to make his bed or fetch him water from the river”.",
          ms: 6000,
        },
        {
          caption: "Marx's lesson: money and tools are not capital by themselves. Capital is a relation between people. It needs workers who have no other way to live.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          {/* sea and shore */}
          <rect x="0" y="0" width="150" height="220" fill="#e3eef8" />
          <path d="M150,0 Q140,110 156,220 L360,220 L360,0 Z" fill="#f4ecd8" />

          {/* the ship */}
          <Place x={s === 0 ? 62 : 112} y={s === 0 ? 120 : 112}>
            <Ship />
          </Place>
          <Fade show={s === 0}>
            <text x="62" y="152" textAnchor="middle" fontSize="9">
              goods worth £50,000
            </text>
            <text x="62" y="164" textAnchor="middle" fontSize="9">
              and 300 workers
            </text>
          </Fade>

          {/* free land */}
          {PLOTS.map((p, i) => (
            <Place key={i} x={p.x} y={p.y} show={s >= 1} delay={i * 120}>
              <g style={{ opacity: s >= 2 ? 1 : 0.35, transition: "opacity 600ms" }}>
                <Plot />
              </g>
            </Place>
          ))}
          <Fade show={s === 1}>
            <text x="258" y="24" textAnchor="middle" fontSize="10" fontWeight="600">
              free land for anyone
            </text>
          </Fade>

          {/* the workers: on the ship, on the beach, then off to their plots */}
          {PLOTS.map((p, i) => (
            <Figure
              key={i}
              name=""
              label={false}
              x={s === 0 ? 40 + i * 12 : s === 1 ? 290 + i * 14 : p.x - 26}
              y={s === 0 ? 106 : s === 1 ? 196 : p.y + 6}
              scale={s === 0 ? 0.3 : 0.45}
            />
          ))}

          {/* Moneybags and his useless goods */}
          <Figure who="moneybags" x={s === 0 ? 86 : 178} y={s === 0 ? 106 : 200} scale={s === 0 ? 0.35 : 0.72} mood={s >= 3 ? "sad" : "happy"} />
          {[0, 1, 2].map((i) => (
            <Place key={i} x={s === 0 ? 70 : 214 + i * 23} y={s === 0 ? 108 : 194} scale={s === 0 ? 0.5 : 1} show={s >= 1}>
              <g style={{ opacity: s >= 3 ? 0.4 : 1, transition: "opacity 600ms" }}>
                <Crate />
              </g>
            </Place>
          ))}
          <Fade show={s === 3}>
            <g transform="translate(316 194)">
              <BedAndBucket />
            </g>
            <text x="74" y="30" textAnchor="middle" fontSize="9.5" fontWeight="600">
              nobody to make his bed
            </text>
            <text x="74" y="44" textAnchor="middle" fontSize="9">
              tools rust, seeds spoil
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="6" y="14" width="138" height="38" fill="#000" />
            <text x="75" y="30" textAnchor="middle" fontSize="8.5" fill="#fff">
              capital is not a thing, but
            </text>
            <text x="75" y="43" textAnchor="middle" fontSize="8.5" fill="#fff">
              a relation between people
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 33.2 · The "sufficient price" (Wakefield's systematic colonisation)
 * ───────────────────────────────────────────────────────────── */
export function TheSufficientPrice() {
  return (
    <Player
      id="anim-33-2"
      title="33.2 · The “sufficient price”"
      steps={[
        { caption: "A writer called Edward Gibbon Wakefield studied this problem. Where land is free, he said, workers soon become farmers, and bosses cannot find hands." },
        { caption: "His plan, which he called “systematic colonisation”: the government puts a high price on the colony's unsold land, a “sufficient price”." },
        { caption: "Now a newcomer must work for wages for years before he can save enough to buy a farm." },
        { caption: "And the money from land sales pays to ship more workers from Europe, so there are always people looking for wages." },
        {
          caption: "Marx says the plan gave away the secret of the old countries too: capitalism needs workers cut off from the land. In practice, he notes, it failed, and many emigrants went to the United States instead.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          <rect x="0" y="0" width="90" height="220" fill="#e3eef8" />

          {/* the land, with or without a price */}
          <rect x="226" y="120" width="120" height="60" fill="#e3efd9" stroke="#3f8f3a" />
          <text x="286" y="196" textAnchor="middle" fontSize="9">
            colony land
          </text>
          <Place x={300} y={110} show={s >= 1}>
            <Tag text="pricey" />
          </Place>
          <Fade show={s === 0}>
            <text x="286" y="110" textAnchor="middle" fontSize="9" fontWeight="600" fill="#3f8f3a">
              free
            </text>
          </Fade>

          {/* the worker walks straight to the land, or is held at the workshop */}
          <Figure
            name="newcomer"
            x={s === 0 ? 270 : s === 1 ? 210 : 170}
            y={s === 0 ? 168 : 200}
            scale={0.7}
            mood={s === 0 ? "happy" : "sad"}
          />
          <Fade show={s === 0}>
            <text x="190" y="40" textAnchor="middle" fontSize="9.5" fontWeight="600">
              free land: workers become farmers
            </text>
          </Fade>

          {/* the workshop he must work in first */}
          <Place x={156} y={110} show={s >= 2}>
            <rect x="-34" y="-30" width="68" height="30" fill="#d9d9d9" stroke="#000" />
            <text y="-12" textAnchor="middle" fontSize="8.5">
              boss&apos;s workshop
            </text>
          </Place>
          <Fade show={s >= 2}>
            <text x="156" y="40" textAnchor="middle" fontSize="9.5" fontWeight="600">
              years of wages first
            </text>
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={110 + i * 19} y="50" width="15" height="10" fill="#2a9d5b" style={{ opacity: s >= 2 ? 1 : 0, transition: `opacity 400ms ${i * 250}ms` }} />
            ))}
          </Fade>

          {/* land money ships in new workers */}
          <Place x={s >= 3 ? 286 : 300} y={s >= 3 ? 82 : 110} show={s >= 3}>
            <Coins n={3} />
          </Place>
          <Fade show={s >= 3}>
            <path d="M266,82 C200,70 120,70 72,96" fill="none" stroke="#000" strokeOpacity=".35" strokeDasharray="4 3" />
            <g transform="translate(45 120)">
              <Ship />
            </g>
            {[0, 1, 2].map((i) => (
              <Figure key={i} name="" label={false} x={30 + i * 14} y={110} scale={0.28} />
            ))}
            <text x="45" y="150" textAnchor="middle" fontSize="8.5">
              more workers
            </text>
            <text x="45" y="162" textAnchor="middle" fontSize="8.5">
              from Europe
            </text>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="226" y="10" width="128" height="40" fill="#fff" stroke="#000" />
            <text x="290" y="26" textAnchor="middle" fontSize="8.5">
              the plan failed: many
            </text>
            <text x="290" y="40" textAnchor="middle" fontSize="8.5">
              went to the United States
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
