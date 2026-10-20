"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Fade, Loaf, Place } from "@/components/anim/Things";
import { Bar, TONE } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * Shared drawings for the reproduction schemes (Vol II, Ch 20 and 21).
 * Department I makes means of production (the Forge, the spinning mill);
 * Department II makes things people use up (Mia's bakery, Ava's tailoring).
 * Numbers are Marx's own scheme for simple reproduction:
 *   I.  4,000c + 1,000v + 1,000s = 6,000
 *   II. 2,000c +   500v +   500s = 3,000
 * ───────────────────────────────────────────────────────────── */

export const DEPT_I = "#7a7a7a";
export const DEPT_II = "#c98a3a";

/** A cog wheel: the sign for "means of production". */
export function Gear({ r = 12, fill = DEPT_I }: { r?: number; fill?: string }) {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <g>
      {teeth.map((a) => (
        <rect key={a} x={-r * 0.22} y={-r * 1.28} width={r * 0.44} height={r * 0.5} fill={fill} stroke="#000" strokeWidth=".8" transform={`rotate(${a})`} />
      ))}
      <circle r={r} fill={fill} stroke="#000" strokeWidth="1" />
      <circle r={r * 0.38} fill="#f1f1f1" stroke="#000" strokeWidth=".8" />
    </g>
  );
}

/** A simple workshop front with a name plate. */
export function Shop({ name, fill }: { name: string; fill: string }) {
  return (
    <g>
      <polygon points="-44,-30 0,-52 44,-30" fill={fill} stroke="#000" strokeWidth="1.2" />
      <rect x="-40" y="-30" width="80" height="44" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <rect x="-9" y="-6" width="18" height="20" fill={fill} stroke="#000" strokeWidth="1" />
      <text y="-17" textAnchor="middle" fontSize="8.5" fontWeight="600">
        {name}
      </text>
    </g>
  );
}

/** A money bag with an amount written on it. */
export function MoneyBag({ label }: { label: string }) {
  return (
    <g>
      <path d="M-14,-8 Q-18,16 0,17 Q18,16 14,-8 Z" fill={TONE.surplus} stroke="#000" strokeWidth="1.1" />
      <path d="M-7,-8 L-4,-15 L4,-15 L7,-8" fill={TONE.surplus} stroke="#000" strokeWidth="1.1" />
      <text y="7" textAnchor="middle" fontSize="7.5" fontWeight="700">
        {label}
      </text>
    </g>
  );
}

const fmt = (n: number) => n.toLocaleString("en-GB");

/** One department's year: c, v and s side by side, with its total. */
export function SchemeRow({
  x,
  y,
  unit,
  c,
  v,
  s,
  name,
  show = true,
  sLabel = true,
}: {
  x: number;
  y: number;
  unit: number;
  c: number;
  v: number;
  s: number;
  name: string;
  show?: boolean;
  sLabel?: boolean;
}) {
  return (
    <g style={{ opacity: show ? 1 : 0, transition: "opacity 500ms" }}>
      <text x={x - 8} y={y + 13} textAnchor="end" fontSize="11" fontWeight="700">
        {name}
      </text>
      <Bar
        x={x}
        y={y}
        unit={unit}
        segs={[
          { n: c, color: TONE.cotton, label: `c ${fmt(c)}`, show },
          { n: v, color: TONE.wage, label: fmt(v), show },
          { n: s, color: TONE.surplus, label: sLabel ? fmt(s) : undefined, show },
        ]}
      />
      <text
        x={x + (c + v + s) * unit + 6}
        y={y + 13}
        fontSize="10"
        fontWeight="600"
        style={{ transition: "x 700ms cubic-bezier(.2,.8,.2,1)" }}
      >
        = {fmt(c + v + s)}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.1 · Two departments
 * ───────────────────────────────────────────────────────────── */
export function TwoDepartments() {
  return (
    <Player
      id="anim-v2-20-1"
      title="20.1 · The whole town in two piles"
      steps={[
        { caption: "Marx splits everything a whole society makes in a year into two big piles. Department I makes means of production: machines, iron, cotton, yarn." },
        { caption: "In Tiny Town, Department I is the Forge and Mr. Moneybags' spinning mill. Marx's numbers: 4,000 of constant capital, 1,000 of wages and 1,000 of surplus-value. A pile worth 6,000." },
        { caption: "Department II makes things people use up: bread, coats, candles. Here that is Mia's bakery and Ava's tailoring: 2,000 + 500 + 500 = 3,000." },
        { caption: "Together, 9,000 in one year. Marx says the numbers could be millions of pounds. For now the owners eat up all their surplus, so nothing grows. That is simple reproduction.", ms: 4600 },
        { caption: "Now the puzzle. The Forge's workers can't eat machines. Mia can't bake on worn-out ovens. Every pile must swap with the right other pile, or the town grinds to a halt.", ms: 4600 },
      ]}
    >
      {(s) => (
        <>
          {/* the two departments */}
          <g transform="translate(95 76)">
            <Shop name="The Forge" fill={DEPT_I} />
          </g>
          <g transform="translate(36 70)">
            <Gear r={10} />
          </g>
          <text x="95" y="108" textAnchor="middle" fontSize="9.5" fontWeight="700">
            Department I
          </text>
          <text x="95" y="120" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
            means of production
          </text>

          <g transform="translate(265 76)">
            <Shop name="Mia & Ava" fill={DEPT_II} />
          </g>
          <g transform="translate(326 66) scale(.6)">
            <Loaf />
          </g>
          <g transform="translate(326 86) scale(.45)">
            <Coat />
          </g>
          <text x="265" y="108" textAnchor="middle" fontSize="9.5" fontWeight="700">
            Department II
          </text>
          <text x="265" y="120" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
            things people use up
          </text>

          {/* the year's piles */}
          <SchemeRow x={40} y={136} unit={0.04} c={4000} v={1000} s={1000} name="I" show={s >= 1} />
          <SchemeRow x={40} y={164} unit={0.04} c={2000} v={500} s={500} name="II" show={s >= 2} />

          <Fade show={s >= 3}>
            <text x="180" y="208" textAnchor="middle" fontSize="11" fontWeight="600">
              one year: 6,000 + 3,000 = 9,000
            </text>
          </Fade>

          {/* the puzzle */}
          <Fade show={s === 4}>
            <g transform="translate(180 30)">
              <ellipse rx="22" ry="14" fill="#fff" stroke="#000" />
              <g transform="scale(.5)">
                <Loaf />
              </g>
            </g>
            <text x="180" y="54" textAnchor="middle" fontSize="7.5">
              Forge needs bread
            </text>
            <g transform="translate(180 76)">
              <ellipse rx="22" ry="13" fill="#fff" stroke="#000" />
              <Gear r={6} />
            </g>
            <text x="180" y="99" textAnchor="middle" fontSize="7.5">
              Mia needs an oven
            </text>
          </Fade>

          <text x="352" y="216" textAnchor="end" fontSize="8" fillOpacity=".5">
            grey c · green v · gold s
          </text>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.2 · The great swap: I(v + s) for IIc
 * ───────────────────────────────────────────────────────────── */
const U = 0.045;
const X0 = 40;

/** A highlighted box over part of a scheme bar. */
function Mark({ x, y, w, color, show, delay = 0 }: { x: number; y: number; w: number; color: string; show: boolean; delay?: number }) {
  return (
    <rect
      x={x - 2}
      y={y - 3}
      width={w + 4}
      height={24}
      fill="none"
      stroke={color}
      strokeWidth="3"
      rx="3"
      style={{ opacity: show ? 1 : 0, transition: `opacity 400ms ease ${show ? delay : 0}ms` }}
    />
  );
}

export function TheGreatSwap() {
  const yI = 56;
  const yII = 150;
  const iv = X0 + 4000 * U; // where I's v starts
  const iEnd = X0 + 6000 * U;
  const iic = X0 + 2000 * U;
  const iiEnd = X0 + 3000 * U;
  return (
    <Player
      id="anim-v2-20-2"
      title="20.2 · Who swaps with whom"
      steps={[
        { caption: "Here are the two piles again. Every part of each pile must find a buyer, or next year cannot start." },
        { caption: "Swap one stays at home. Bakery and tailor workers spend their wages (500), and the owners their surplus (500), on bread and coats from Department II itself." },
        { caption: "Swap two also stays at home. The 4,000 of iron and machines that Department I used up is replaced by other workshops of Department I: the Forge sells to the mill, the mill to the Forge." },
        { caption: "Swap three is the big one. Department I's workers and owners hold 2,000 worth of machines (1,000 v + 1,000 s) but want food and clothes. Department II needs exactly 2,000 of new machines to replace its worn ones. They swap!", ms: 5200 },
        { caption: "So the rule of simple reproduction is: I (v + s) = II c. Here 1,000 + 1,000 = 2,000. When it holds, every pile finds its buyer, exactly.", ms: 4600 },
      ]}
    >
      {(s) => (
        <>
          <SchemeRow x={X0} y={yI} unit={U} c={4000} v={1000} s={1000} name="I" />
          <SchemeRow x={X0} y={yII} unit={U} c={2000} v={500} s={500} name="II" />
          <Fade show={s < 3}>
            <text x={X0} y={yI - 8} fontSize="8.5" fillOpacity=".6">
              Department I: machines, iron, yarn
            </text>
            <text x={X0} y={yII - 8} fontSize="8.5" fillOpacity=".6">
              Department II: bread and coats
            </text>
          </Fade>

          {/* swap one: inside II */}
          <Mark x={iic} y={yII} w={iiEnd - iic} color={DEPT_II} show={s === 1} />
          <Fade show={s === 1} delay={200}>
            <path d={`M${iiEnd - 6},${yII + 22} q-14,26 -34,0`} fill="none" stroke={DEPT_II} strokeWidth="2" markerEnd="url(#v2c20a)" />
            <text x={iiEnd + 26} y={yII + 40} fontSize="9" fill={DEPT_II} fontWeight="600">
              1,000 stays in II
            </text>
          </Fade>

          {/* swap two: inside I */}
          <Mark x={X0} y={yI} w={iv - X0} color={DEPT_I} show={s === 2} />
          <Fade show={s === 2} delay={200}>
            <path d={`M${iv - 20},${yI - 3} q-40,-26 -80,0`} fill="none" stroke={DEPT_I} strokeWidth="2" markerEnd="url(#v2c20b)" />
            <text x={X0 + 100} y={yI - 30} textAnchor="middle" fontSize="9" fill={DEPT_I} fontWeight="600">
              4,000 stays in I
            </text>
          </Fade>

          {/* swap three: across */}
          <Mark x={iv} y={yI} w={iEnd - iv} color="#000" show={s >= 3} />
          <Mark x={X0} y={yII} w={iic - X0} color="#000" show={s >= 3} delay={250} />
          <Fade show={s >= 3} delay={500}>
            <path d={`M${(iv + iEnd) / 2},${yI + 24} C${(iv + iEnd) / 2},${yI + 60} ${(X0 + iic) / 2 + 40},${yII - 40} ${(X0 + iic) / 2},${yII - 6}`} fill="none" stroke="#000" strokeWidth="2" markerEnd="url(#v2c20c)" />
            <path d={`M${(X0 + iic) / 2 - 20},${yII - 6} C${(X0 + iic) / 2 - 20},${yII - 50} ${(iv + iEnd) / 2 - 60},${yI + 50} ${(iv + iEnd) / 2 - 22},${yI + 24}`} fill="none" stroke="#000" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#v2c20c)" />
            <text x="352" y={yI + 56} textAnchor="end" fontSize="9" fontWeight="600">
              machines go down
            </text>
            <text x={X0 + 6} y={yII - 22} fontSize="9" fontWeight="600">
              bread and coats go up
            </text>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="96" y="186" width="168" height="26" fill="#000" />
            <text x="180" y="203" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
              I (v + s) = II c = 2,000
            </text>
          </Fade>

          <defs>
            {[
              ["v2c20a", DEPT_II],
              ["v2c20b", DEPT_I],
              ["v2c20c", "#000"],
            ].map(([id, c]) => (
              <marker key={id} id={id} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill={c} />
              </marker>
            ))}
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 20.3 · The coins come home (money reflux)
 * Marx: Department I pays £1,000 in wages; the workers buy articles of
 * consumption from II; II buys means of production from I with the
 * same £1,000, which is back where it started.
 * ───────────────────────────────────────────────────────────── */
const SPOT = {
  boss: { x: 58, y: 120 },
  workers: { x: 180, y: 52 },
  mia: { x: 304, y: 120 },
};

export function TheCoinsComeHome() {
  return (
    <Player
      id="anim-v2-20-3"
      title="20.3 · The coins come home"
      steps={[
        { caption: "The Ironmaster runs the Forge, in Department I. He starts the year with 1,000 coins for wages." },
        { caption: "He pays his workers 1,000 coins. They have made iron and machines, but they can't eat those." },
        { caption: "So the workers spend the 1,000 at Mia's bakery and Ava's shop, in Department II. Bread and coats go home with them." },
        { caption: "Mia's oven is wearing out. She uses the same 1,000 coins to buy a new one from the Forge." },
        {
          caption: "The 1,000 coins are back with the Ironmaster, ready to pay wages again. Marx's rule: money a capitalist throws into circulation returns to its point of departure.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const at = [SPOT.boss, SPOT.workers, SPOT.mia, SPOT.boss, SPOT.boss][s];
        return (
          <>
            {/* the path the coins travel */}
            <path
              d={`M${SPOT.boss.x + 20},${SPOT.boss.y - 20} Q${SPOT.boss.x + 40},${SPOT.workers.y} ${SPOT.workers.x - 26},${SPOT.workers.y - 4} M${SPOT.workers.x + 26},${SPOT.workers.y - 4} Q${SPOT.mia.x - 40},${SPOT.workers.y} ${SPOT.mia.x - 20},${SPOT.mia.y - 20} M${SPOT.mia.x - 26},${SPOT.mia.y + 6} L${SPOT.boss.x + 26},${SPOT.boss.y + 6}`}
              fill="none"
              stroke="#000"
              strokeOpacity={s === 4 ? 0.6 : 0.15}
              strokeDasharray="4 4"
              style={{ transition: "stroke-opacity 500ms" }}
            />

            <Figure name="Ironmaster" x={SPOT.boss.x} y={206} scale={0.85} />
            <Figure name="worker" x={SPOT.workers.x - 16} y={132} scale={0.6} label={false} />
            <Figure name="worker" x={SPOT.workers.x + 16} y={132} scale={0.6} label={false} />
            <text x={SPOT.workers.x} y="146" textAnchor="middle" fontSize="8.5">
              Forge workers
            </text>
            <Figure who="mia" x={SPOT.mia.x} y={206} scale={0.85} />

            <text x={SPOT.boss.x} y="226" textAnchor="middle" fontSize="7.5" fillOpacity=".55">
              Dept I
            </text>
            <text x={SPOT.mia.x} y="226" textAnchor="middle" fontSize="7.5" fillOpacity=".55">
              Dept II
            </text>

            {/* the goods that move the other way */}
            <Place x={s >= 2 ? SPOT.workers.x + 46 : SPOT.mia.x + 34} y={s >= 2 ? SPOT.workers.y + 50 : 180} scale={0.6}>
              <Loaf />
            </Place>
            <Place x={s >= 3 ? SPOT.mia.x + 34 : SPOT.boss.x + 36} y={s >= 3 ? 156 : 180} scale={0.8}>
              <Gear r={9} />
            </Place>

            {/* the bag of coins */}
            <Place x={at.x} y={at.y} scale={1.25}>
              <MoneyBag label="1,000" />
            </Place>

            <Fade show={s === 4} delay={400}>
              <text x="180" y="186" textAnchor="middle" fontSize="11" fontWeight="700">
                back where it started
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
