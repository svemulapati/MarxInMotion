"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * Rent drawings for Volume IV, Chapters 8 to 11 (the rent
 * chapters of Theories of Surplus-Value). Grandpa Ned is the
 * tenant farmer; the gray "Landlord" owns the land.
 * ───────────────────────────────────────────────────────────── */

export const RENT = "#e07a1f";
export const PROFIT = "#e6b800";
export const WAGE = "#2a9d5b";
export const TOOLS = "#bdbdbd";
export const RAW = "#e9dcb8";
export const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** One coloured piece of a capital bar; width animates between steps. */
export function Piece({ x, y, w, h = 20, fill, label, dark = false }: { x: number; y: number; w: number; h?: number; fill: string; label?: string; dark?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={Math.max(0, w)} height={h} fill={fill} stroke="#000" strokeWidth=".8" style={{ transition: `all ${T}` }} />
      {label && w > 22 && (
        <text x={x + w / 2} y={y + h / 2 + 3} textAnchor="middle" fontSize="8" fill={dark ? "#fff" : "#000"} style={{ transition: `all ${T}` }}>
          {label}
        </text>
      )}
    </g>
  );
}

/** A small fenced field, centred on (0, 0). */
export function Plot({ w = 60, h = 30, fill = "#c9b27a" }: { w?: number; h?: number; fill?: string }) {
  return (
    <g>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} fill={fill} stroke="#000" strokeWidth="1" />
      {Array.from({ length: Math.floor(h / 7) }, (_, i) => (
        <line key={i} x1={-w / 2 + 3} x2={w / 2 - 3} y1={-h / 2 + 5 + i * 7} y2={-h / 2 + 5 + i * 7} stroke="#000" strokeOpacity=".2" />
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.1 · Rodbertus's sums
 * Rodbertus's own scheme as Marx sets it out: agriculture 100
 * machinery + 100 wages, 50 surplus-value (1/4); industry adds
 * raw materials, taken as 100, giving 50 on 300 = 16 2/3 per cent.
 * ───────────────────────────────────────────────────────────── */
const U = 0.55; // px per coin
const X0 = 70;

export function RodbertusSums() {
  return (
    <Player
      id="anim-v4-8-1"
      title="8.1 · Rodbertus's sums"
      steps={[
        { caption: "A visitor from the Old Thinkers' Shelf: Johann Karl Rodbertus, a Prussian landowner. In 1851 he wrote a long letter with a new theory of rent." },
        { caption: "First, a mill. Rodbertus counts its capital: 100 for machines, 100 for raw cotton, 100 for wages. The workers make 50 of surplus-value. 50 on 300 is a profit of 16⅔%." },
        { caption: "Now a farm. Rodbertus says a farmer never pays for raw material: the seed and fodder come from his own fields, so they cost him nothing. His capital is only 100 for tools and 100 for wages." },
        { caption: "The same 50 of surplus-value, but on only 200: that is 25%, more than the mill's 16⅔%. Rodbertus says this extra is where rent comes from.", ms: 4200 },
        {
          caption: "Marx disagrees. Grandpa Ned's seed and fodder are worth something: they took work to grow, and he could sell them. Count them in and the farm's special extra disappears. Marx calls it a miscalculation.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const seed = s >= 4;
        return (
          <>
            <Figure name="Rodbertus" x={34} y={202} scale={0.62} mood={s === 4 ? "sad" : "happy"} />
            <Fade show={s === 4}>
              <Figure name="Marx" x={330} y={202} scale={0.62} />
            </Fade>

            {/* the mill */}
            <Fade show={s >= 1}>
              <text x={X0} y="30" fontSize="10" fontWeight="600">
                the mill
              </text>
              <Piece x={X0} y={36} w={100 * U} fill={TOOLS} label="tools 100" />
              <Piece x={X0 + 100 * U} y={36} w={100 * U} fill={RAW} label="cotton 100" />
              <Piece x={X0 + 200 * U} y={36} w={100 * U} fill={WAGE} label="wages 100" dark />
              <Piece x={X0 + 300 * U} y={36} w={50 * U} fill={PROFIT} label="s 50" />
              <text x="352" y="51" textAnchor="end" fontSize="12" fontWeight="700">
                16⅔%
              </text>
            </Fade>

            {/* the farm */}
            <Fade show={s >= 2}>
              <text x={X0} y="96" fontSize="10" fontWeight="600">
                Grandpa Ned&apos;s farm
              </text>
              <Piece x={X0} y={102} w={100 * U} fill={TOOLS} label="tools 100" />
              <Piece x={X0 + 100 * U} y={102} w={seed ? 100 * U : 0} fill={RAW} label="seed 100" />
              <Piece x={X0 + (seed ? 200 : 100) * U} y={102} w={100 * U} fill={WAGE} label="wages 100" dark />
              <Piece x={X0 + (seed ? 300 : 200) * U} y={102} w={50 * U} fill={PROFIT} label="s 50" />
              <Fade show={s >= 3}>
                <text x="352" y="117" textAnchor="end" fontSize="12" fontWeight="700" fill={s === 3 ? RENT : "#000"}>
                  {seed ? "16⅔%" : "25%"}
                </text>
              </Fade>
              <Fade show={s === 2}>
                <text x={X0 + 100 * U} y="140" fontSize="8.5" fill="#d6452f">
                  &ldquo;seed and fodder cost nothing&rdquo;
                </text>
              </Fade>
            </Fade>

            {/* the gap Rodbertus calls rent */}
            <Fade show={s === 3}>
              <rect x={X0 + 250 * U} y="132" width={100 * U} height="16" fill={RENT} opacity=".18" />
              <text x={X0 + 300 * U} y="143" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={RENT}>
                the extra = rent?
              </text>
            </Fade>
            <Fade show={s === 4}>
              <g transform={`translate(${X0 + 150 * U} 150)`}>
                <Cross />
              </g>
              <text x={X0 + 150 * U + 12} y="154" fontSize="8.5">
                seed counts too: no special extra
              </text>
            </Fade>

            <text x="190" y="176" textAnchor="middle" fontSize="8" fillOpacity=".55">
              Rodbertus&apos;s own numbers, as Marx sets them out
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 8.2 · Hostile brothers and a fence
 * Marx's kernel of truth: where hand labour still dominates, 100
 * of capital makes more surplus-value; landed property can keep
 * that excess out of the shared pool. Numbers are this site's.
 * ───────────────────────────────────────────────────────────── */
const COLS = [
  { label: "the mill", x: 60, made: 20 },
  { label: "the tailoring", x: 160, made: 30 },
  { label: "Ned's farm", x: 270, made: 40 },
];
const PX = 2.6; // px per coin of surplus-value
const BASE = 168;

export function HostileBrothers() {
  return (
    <Player
      id="anim-v4-8-2"
      title="8.2 · Hostile brothers and a fence"
      steps={[
        { caption: "Marx's own answer. Three businesses each put in 100 coins. The mill is full of machines and makes 20 of surplus-value; the tailoring makes 30. (Made-up numbers.)" },
        { caption: "Competition pours their surplus together and shares it out by size of capital: 25 each. Marx says capitalists divide the loot like 'hostile brothers'." },
        { caption: "Grandpa Ned's farm still uses many hands and few machines. So his 100 coins set more workers to work, and make more surplus-value: 40." },
        {
          caption: "If the farm's 40 joined the pool, it would be shared out too. But the Landlord's fence keeps it in. Ned keeps the usual 25 like everyone else, and the extra 15 goes to the Landlord. That is absolute rent.",
          ms: 5600,
        },
        {
          caption: "Marx adds that this rests on 'a historical difference which can disappear'. If machines come to farms as they came to mills, the farm's extra shrinks, and this rent with it.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="20" y1={BASE} x2="345" y2={BASE} stroke="#000" strokeOpacity=".3" />
          {COLS.map((c, i) => {
            const isFarm = i === 2;
            const shared = !isFarm && s >= 1;
            const farmMade = s >= 4 ? 25 : c.made;
            const shown = isFarm ? farmMade : shared ? 25 : c.made;
            const visible = isFarm ? s >= 2 : true;
            const rent = isFarm && s >= 3 ? farmMade - 25 : 0;
            const profit = shown - rent;
            return (
              <g key={c.label} style={{ opacity: visible ? 1 : 0.15, transition: "opacity 500ms" }}>
                <rect x={c.x - 22} y={BASE - profit * PX} width="44" height={profit * PX} fill={PROFIT} stroke="#000" strokeWidth=".8" style={{ transition: `all ${T}` }} />
                <rect
                  x={c.x - 22}
                  y={BASE - shown * PX}
                  width="44"
                  height={rent * PX}
                  fill={RENT}
                  stroke="#000"
                  strokeWidth=".8"
                  style={{ transition: `all ${T}`, opacity: rent > 0 ? 1 : 0 }}
                />
                <text x={c.x} y={BASE - shown * PX - 6} textAnchor="middle" fontSize="11" fontWeight="700" style={{ transition: `all ${T}` }}>
                  {shown}
                </text>
                <text x={c.x} y={BASE + 13} textAnchor="middle" fontSize="9">
                  {c.label}
                </text>
                <text x={c.x} y={BASE + 24} textAnchor="middle" fontSize="7.5" fillOpacity=".55">
                  capital 100
                </text>
              </g>
            );
          })}

          {/* the shared average for the two industries */}
          <Fade show={s >= 1}>
            <line x1="25" y1={BASE - 25 * PX} x2="205" y2={BASE - 25 * PX} stroke="#000" strokeDasharray="4 3" />
            <text x="110" y={BASE - 25 * PX - 22} textAnchor="middle" fontSize="8.5">
              shared out: 25 each
            </text>
          </Fade>

          {/* the Landlord's fence round the farm */}
          <Fade show={s >= 3}>
            <rect x="222" y="30" width="126" height={BASE - 30} fill="none" stroke="#7a4a14" strokeWidth="2.5" strokeDasharray="2 5" />
            <text x="285" y="24" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#7a4a14">
              the Landlord&apos;s fence
            </text>
          </Fade>
          <Fade show={s === 3}>
            <text x="298" y={BASE - 34 * PX} fontSize="8.5" fill={RENT} fontWeight="600">
              rent 15
            </text>
            <text x="298" y={BASE - 12 * PX} fontSize="8.5">
              Ned 25
            </text>
          </Fade>
          <Fade show={s === 4}>
            <text x="285" y="44" textAnchor="middle" fontSize="8.5">
              machines on the farm
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
