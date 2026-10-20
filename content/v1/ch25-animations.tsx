"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coin, Fade, Place } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** Keyframes used by this chapter's scenes. */
const STYLE = `
@keyframes c25-spin { to { transform: rotate(360deg) } }
@keyframes c25-flow { to { stroke-dashoffset: -16 } }
.c25-spin { animation: c25-spin 1.2s linear infinite; transform-box: fill-box; transform-origin: center; }
.c25-flow { animation: c25-flow 0.8s linear infinite; }
`;

/** A big spinning machine with turning wheels. */
function Machine({ w = 46 }: { w?: number }) {
  return (
    <g>
      <rect x={-w / 2} y="-16" width={w} height="26" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <circle cx={-w / 4} cy="-3" r="7" fill="none" stroke="#000" strokeDasharray="3 2" className="c25-spin" />
      <circle cx={w / 4} cy="-3" r="7" fill="none" stroke="#000" strokeDasharray="3 2" className="c25-spin" />
    </g>
  );
}

/** A tiny worker token, for counting people at a glance. */
function Token({ color = CAST.sam.color }: { color?: string }) {
  return (
    <g>
      <circle cx="0" cy="-15" r="4.5" fill="#fff" stroke="#000" strokeWidth="1" />
      <rect x="-5" y="-10" width="10" height="13" fill={color} />
    </g>
  );
}

/** A stack of coins, n high, standing on (0, 0). */
function Stack({ n }: { n: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <ellipse key={i} cx="0" cy={-i * 5} rx="12" ry="4" fill="#e6b800" stroke="#000" strokeWidth=".8" />
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 25.1 · When the workshop grows (Section 1: with the same mix of
 * machines and workers, accumulation raises the demand for labour;
 * wages may rise, but only within limits)
 * ───────────────────────────────────────────────────────────── */
const SEATS = [
  [45, 120],
  [85, 120],
  [125, 120],
  [165, 120],
  [45, 182],
  [85, 182],
  [125, 182],
  [165, 182],
];

export function WhenTheWorkshopGrows() {
  return (
    <Player
      id="anim-25-1"
      title="25.1 · When the workshop grows"
      steps={[
        { caption: "Mr. Moneybags reinvests his surplus every year. At first he just adds more of the same: twice the spinning wheels need twice the workers." },
        { caption: "Workers are hard to find, so he has to offer more. The daily wage creeps up from 3 coins to 4." },
        { caption: "But every extra coin of wage is a coin less of surplus. Less surplus means less to reinvest, so the workshop grows more slowly." },
        {
          caption: "Hiring slows down, people start waiting for work again, and the wage slips back to 3. Marx says the rise of wages is confined within limits that never threaten the system.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const workers = s === 0 ? 4 : 8;
        const wage = s === 1 || s === 2 ? 4 : 3;
        const reinvest = [70, 70, 34, 56][s];
        return (
          <>
            <style>{STYLE}</style>
            {/* the workshop */}
            <rect x="18" y="44" width="176" height="160" fill="#fff" stroke="#000" strokeWidth="1.2" />
            <text x="106" y="38" textAnchor="middle" fontSize="9.5">
              Mr. Moneybags&apos; workshop
            </text>
            {SEATS.map(([x, y], i) => (
              <Place key={i} x={x} y={y} show={i < workers} delay={i >= 4 ? (i - 4) * 120 : 0}>
                <g transform="scale(.62)">
                  <Figure who={i === 0 ? "sam" : undefined} name={i === 0 ? "Sam" : ""} x={0} y={0} label={i === 0} />
                </g>
              </Place>
            ))}

            {/* the wage */}
            <text x="275" y="62" textAnchor="middle" fontSize="10">
              daily wage
            </text>
            <text
              x="275"
              y="96"
              textAnchor="middle"
              fontSize="30"
              fontWeight={wage > 3 ? 600 : 300}
              fill={wage > 3 ? CAST.sam.color : "#000"}
              style={{ transition: "fill 400ms" }}
            >
              {wage} coins
            </text>

            {/* how much surplus goes back into growth */}
            <text x="275" y="132" textAnchor="middle" fontSize="10">
              surplus reinvested
            </text>
            <rect x="225" y="140" width="100" height="16" fill="#fff" stroke="#000" />
            <rect x="225" y="140" height="16" width={reinvest} fill={TONE.surplus} style={{ transition: `width ${T}` }} />
            <text x="275" y="176" textAnchor="middle" fontSize="9.5" fillOpacity=".7">
              {["growing fast", "growing fast", "growing slowly", "growing again"][s]}
            </text>

            {/* the loop that keeps wages in check */}
            <Fade show={s === 3} delay={300}>
              <text x="275" y="200" textAnchor="middle" fontSize="9.5" fontWeight="600">
                wages up, growth down,
              </text>
              <text x="275" y="212" textAnchor="middle" fontSize="9.5" fontWeight="600">
                wages down again
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 25.2 · More machine, fewer hands per coin (the composition of
 * capital; Marx's own example: 50 : 50 becoming 80 : 20)
 * ───────────────────────────────────────────────────────────── */
const COMP = [
  { total: 100, c: 50, v: 50, workers: 10 },
  { total: 100, c: 80, v: 20, workers: 4 },
  { total: 300, c: 240, v: 60, workers: 12 },
  { total: 300, c: 240, v: 60, workers: 12 },
];
const BAR = { x: 30, w: 300 };

export function MoreMachineFewerHands() {
  return (
    <Player
      id="anim-25-2"
      title="25.2 · More machine, fewer hands per coin"
      steps={[
        { caption: "Mr. Moneybags has 100 coins of capital. Half buys machines and cotton, half pays wages. That pays for 10 workers." },
        { caption: "Machines get bigger and faster. Now 80 of every 100 coins go on machines and cotton, and only 20 on wages. The same 100 coins hire just 4 people. This is Marx's own example: 50 to 50 becoming 80 to 20." , ms: 5200 },
        { caption: "But the workshop keeps growing. With 300 coins, 20 out of every 100 is 60 coins of wages: 12 workers. There are more jobs in all, yet every new coin hires fewer people than before.", ms: 5200 },
        {
          caption: "Marx calls this mix the composition of capital. As machines grow faster than wages, jobs grow more slowly than wealth, and some people are always left over.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const k = COMP[s];
        const unit = BAR.w / k.total;
        return (
          <>
            <style>{STYLE}</style>
            <text x="180" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
              capital: {k.total} coins
            </text>

            {/* constant and variable capital, side by side */}
            <rect x={BAR.x} y="34" height="24" width={k.c * unit} fill={TONE.cotton} stroke="#000" style={{ transition: `width ${T}` }} />
            <rect
              x={BAR.x + k.c * unit}
              y="34"
              height="24"
              width={k.v * unit}
              fill={TONE.wage}
              stroke="#000"
              style={{ transition: `width ${T}, x ${T}` }}
            />
            <text x={BAR.x + 6} y="50" fontSize="9.5">
              machines and cotton: {k.c}
            </text>
            <text x={BAR.x + BAR.w - 4} y="72" textAnchor="end" fontSize="9.5" fill={TONE.wage} fontWeight="600">
              wages: {k.v}
            </text>

            {/* the machines grow */}
            <g transform="translate(95 112)">
              <g style={{ transform: `scale(${s === 0 ? 0.8 : 1.25})`, transition: `transform ${T}` }}>
                <Machine />
              </g>
            </g>
            <text x="95" y="146" textAnchor="middle" fontSize="9">
              {s === 0 ? "small machines" : "big machines"}
            </text>

            {/* one token per worker the wages can pay */}
            {Array.from({ length: 12 }, (_, i) => (
              <Place key={i} x={36 + i * 26} y={186} show={i < k.workers} delay={i * 50}>
                <Token />
              </Place>
            ))}
            <text x="180" y="210" textAnchor="middle" fontSize="10">
              {k.workers} workers
            </text>

            <Fade show={s === 3} delay={300}>
              <rect x="170" y="88" width="170" height="54" fill="#fff" stroke="#000" />
              <text x="255" y="104" textAnchor="middle" fontSize="9.5" fontWeight="600">
                composition of capital
              </text>
              <text x="255" y="119" textAnchor="middle" fontSize="9">
                machines per worker: up
              </text>
              <text x="255" y="133" textAnchor="middle" fontSize="9">
                wage share of capital: down
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 25.3 · The crowd at the gate (the industrial reserve army, its
 * three forms, pauperism, and how it holds wages down)
 * ───────────────────────────────────────────────────────────── */
type Spot = { x: number; y: number };
const INSIDE: Spot[] = [
  { x: 240, y: 112 },
  { x: 285, y: 112 },
  { x: 330, y: 112 },
  { x: 240, y: 186 },
  { x: 285, y: 186 },
  { x: 330, y: 186 },
];
/** Where the three workers pushed out by the machine end up. */
const FLOATING: Spot[] = [
  { x: 32, y: 96 },
  { x: 56, y: 96 },
  { x: 80, y: 96 },
];
const LATENT: Spot[] = [
  { x: 128, y: 96 },
  { x: 152, y: 96 },
];
const STAGNANT: Spot[] = [
  { x: 32, y: 162 },
  { x: 56, y: 162 },
];
const WAITING: Spot[] = [
  { x: 128, y: 162 },
  { x: 152, y: 162 },
];

export function TheCrowdAtTheGate() {
  return (
    <Player
      id="anim-25-3"
      title="25.3 · The crowd at the gate"
      viewBox="0 0 360 240"
      steps={[
        { caption: "Busy times. Inside, Sam and five others are spinning. Outside the gate, only a couple of people are waiting for work." },
        { caption: "A bigger machine arrives. Three workers are no longer needed, and they walk out through the gate. When trade picks up, some will be pulled back in. Marx calls them the floating part." , ms: 5000 },
        { caption: "Out on Grandpa Ned's side of the valley, farms need fewer hands every year. Farm workers drift into town looking for jobs. Marx calls them the latent part." , ms: 4600 },
        { caption: "Others scrape by on odd jobs, a day here and a day there, always on the edge. That is the stagnant part. Together they are the industrial reserve army." , ms: 4600 },
        {
          caption: "Sam asks for 4 coins. Mr. Moneybags just points at the gate. The crowd outside keeps wages down, and makes those inside accept longer, harder days.",
          ms: 4800,
        },
        {
          caption: "Below them all are people who live on charity: some who could still work, poor children, and those too old, sick or injured to work. Marx calls this pauperism, the dead weight of the reserve army.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const out = s >= 1;
        /** The three who leave at step 1 are inside seats 2, 4 and 5. */
        const pos = (i: number): Spot => {
          const leaving = [2, 4, 5].indexOf(i);
          return out && leaving >= 0 ? FLOATING[leaving] : INSIDE[i];
        };
        return (
          <>
            <style>{STYLE}</style>
            {/* the workshop and its gate */}
            <rect x="205" y="50" width="147" height="160" fill="#fff" />
            <path d="M205,128 V50 H352 V210 H205 V198" fill="none" stroke="#000" strokeWidth="1.2" />
            <text x="300" y="224" textAnchor="middle" fontSize="9.5">
              Mr. Moneybags&apos; workshop
            </text>
            <text x="205" y="224" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              gate
            </text>

            {/* the new machine */}
            <Place x={300} y={150} show={out} scale={1.2}>
              <Machine w={60} />
            </Place>

            {/* the workers, three of whom walk out */}
            {INSIDE.map((_, i) => {
              const p = pos(i);
              return (
                <Figure
                  key={i}
                  who={i === 0 ? "sam" : undefined}
                  name={i === 0 ? "Sam" : ""}
                  x={p.x}
                  y={p.y}
                  scale={0.55}
                  label={i === 0}
                  mood={i === 0 && s >= 4 ? "sad" : [2, 4, 5].includes(i) && out ? "sad" : "happy"}
                />
              );
            })}

            {/* Mr. Moneybags appears at step 4 */}
            <Figure who="moneybags" x={330} y={112} scale={0.55} label={false} style={{ opacity: s >= 4 ? 1 : 0, transition: "opacity 400ms" }} />

            {/* the crowd outside */}
            {WAITING.map((p, i) => (
              <Figure key={`w${i}`} name="" x={p.x} y={p.y} scale={0.55} label={false} mood="sleepy" />
            ))}
            {LATENT.map((p, i) => (
              <Figure
                key={`l${i}`}
                name=""
                x={s >= 2 ? p.x : p.x - 140}
                y={p.y}
                scale={0.55}
                label={false}
                mood="sad"
                style={{ opacity: s >= 2 ? 1 : 0, transition: `opacity 400ms, transform ${T}` }}
              />
            ))}
            {STAGNANT.map((p, i) => (
              <Figure
                key={`s${i}`}
                name=""
                x={p.x}
                y={p.y}
                scale={0.55}
                label={false}
                mood="sleepy"
                style={{ opacity: s >= 3 ? 1 : 0, transition: "opacity 500ms" }}
              />
            ))}

            {/* group labels */}
            <Fade show={s >= 1}>
              <text x="56" y="110" textAnchor="middle" fontSize="8.5" fontWeight="600">
                floating
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="140" y="110" textAnchor="middle" fontSize="8.5" fontWeight="600">
                latent
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="44" y="176" textAnchor="middle" fontSize="8.5" fontWeight="600">
                stagnant
              </text>
            </Fade>
            <text x="140" y="176" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              waiting
            </text>
            <Fade show={s >= 3 && s < 4}>
              <text x="96" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
                the industrial reserve army
              </text>
            </Fade>

            {/* the raise that never comes */}
            <Fade show={s === 4} delay={300}>
              <g transform="translate(212 74)">
                <Bubble w={78} lines={["4 coins, please?"]} />
              </g>
              <g transform="translate(250 40)">
                <rect x="-50" y="-16" width="104" height="22" fill="#fff" stroke="#000" />
                <text x="2" y="-2" textAnchor="middle" fontSize="8.5">
                  Plenty more out there.
                </text>
              </g>
              <path d="M205,30 L120,30" stroke="#d6452f" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#c25-point)" />
            </Fade>
            <defs>
              <marker id="c25-point" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#d6452f" />
              </marker>
            </defs>

            {/* pauperism: below the crowd */}
            <Fade show={s === 5}>
              <rect x="14" y="190" width="180" height="44" fill="#ececec" stroke="#000" strokeDasharray="3 3" />
              <Figure name="" x={40} y={226} scale={0.42} label={false} mood="sad" />
              <Figure name="" x={64} y={226} scale={0.42} label={false} mood="sad" />
              <text x="132" y="208" textAnchor="middle" fontSize="9" fontWeight="600">
                pauperism
              </text>
              <text x="132" y="222" textAnchor="middle" fontSize="8.5">
                &ldquo;the dead weight&rdquo;
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 25.4 · Two poles (concentration, centralisation, and wealth and
 * misery growing at opposite ends)
 * ───────────────────────────────────────────────────────────── */
function Building({ label, w = 70, h = 50 }: { label: string; w?: number; h?: number }) {
  return (
    <g>
      <rect x={-w / 2} y={-h} width={w} height={h} fill="#fff" stroke="#000" strokeWidth="1.2" />
      <path d={`M${-w / 2 - 4},${-h} L0,${-h - 16} L${w / 2 + 4},${-h} Z`} fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <text y="14" textAnchor="middle" fontSize="9">
        {label}
      </text>
    </g>
  );
}

export function TwoPoles() {
  return (
    <Player
      id="anim-25-4"
      title="25.4 · Two poles"
      steps={[
        { caption: "Tiny Town has two spinning workshops: Mr. Moneybags' and a smaller rival's. Each grows by reinvesting its own surplus. Marx calls this concentration." },
        {
          caption: "Bigger workshops make yarn cheaper, and in a price war the larger capitals beat the smaller. The rival sells up, and Mr. Moneybags takes over his workshop. Marx calls this centralisation.",
          ms: 5400,
        },
        {
          caption: "Bea the banker speeds it up. Her bank gathers many small savings into one big pot. Marx says the world would still be without railways if it had waited for one capitalist to save enough.",
          ms: 5400,
        },
        {
          caption: "Now look at the whole town. At one end, wealth piles up. At the other end are the crowd at the gate, the overwork and the worry. Marx: accumulation of wealth at one pole is accumulation of misery at the opposite pole.",
          ms: 5800,
        },
        {
          caption: "Marx says the worker's lot must grow worse, “be his payment high or low”. People still argue about what he meant: that workers get poorer, or that they fall further behind the wealth they make.",
          ms: 5800,
        },
      ]}
    >
      {(s) => {
        const poles = s >= 3;
        return (
          <>
            <style>{STYLE}</style>

            {/* the two workshops, then one */}
            <Fade show={!poles}>
              <Place x={110} y={150} scale={s >= 1 ? 1.35 : 1}>
                <Building label="Moneybags" />
              </Place>
              <Place x={s >= 1 ? 110 : 265} y={150} scale={0.8} show={s < 1}>
                <Building label="the rival" />
              </Place>
              <Fade show={s >= 1}>
                <text x="110" y="186" textAnchor="middle" fontSize="9.5" fontWeight="600">
                  now one big workshop
                </text>
              </Fade>
              <Fade show={s === 0}>
                <Place x={110} y={96}>
                  <Stack n={4} />
                </Place>
                <Place x={265} y={108}>
                  <Stack n={2} />
                </Place>
              </Fade>

              {/* Bea's bank pools small savings */}
              <Fade show={s === 2}>
                <Figure who="bea" x={300} y={200} scale={0.7} />
                {[
                  [210, 40],
                  [250, 30],
                  [290, 46],
                  [330, 34],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <g transform={`translate(${x} ${y})`}>
                      <Coin r={6} />
                    </g>
                    <path d={`M${x},${y + 8} L262,96`} stroke="#000" strokeOpacity=".35" strokeDasharray="4 4" className="c25-flow" />
                  </g>
                ))}
                <g transform="translate(262 112)">
                  <Stack n={6} />
                </g>
                <text x="262" y="132" textAnchor="middle" fontSize="9">
                  one big pot
                </text>
                {/* a little railway engine */}
                <g transform="translate(205 150)">
                  <rect x="-14" y="-12" width="28" height="12" fill="#1f1f1f" />
                  <rect x="6" y="-22" width="8" height="10" fill="#1f1f1f" />
                  <circle cx="-7" cy="2" r="4" fill="#fff" stroke="#000" />
                  <circle cx="7" cy="2" r="4" fill="#fff" stroke="#000" />
                  <line x1="-30" y1="7" x2="30" y2="7" stroke="#000" />
                </g>
              </Fade>
            </Fade>

            {/* the two poles */}
            <Fade show={poles} delay={200}>
              <line x1="30" y1="170" x2="330" y2="170" stroke="#000" strokeWidth="1.5" />
              <g transform="translate(70 168)">
                <Stack n={18} />
              </g>
              <Figure who="moneybags" x={110} y={168} scale={0.7} label={false} />
              <text x="80" y="188" textAnchor="middle" fontSize="10" fontWeight="600">
                wealth
              </text>
              {[220, 244, 268, 292, 316].map((x, i) => (
                <Figure key={x} who={i === 2 ? "sam" : undefined} name="" x={x} y={168} scale={0.55} label={false} mood="sad" />
              ))}
              <text x="268" y="188" textAnchor="middle" fontSize="10" fontWeight="600">
                insecurity, overwork
              </text>
              <text x="180" y="210" textAnchor="middle" fontSize="9">
                two ends of the same growth
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <rect x="150" y="20" width="200" height="56" fill="#fff" stroke="#000" />
              <text x="250" y="38" textAnchor="middle" fontSize="9.5" fontWeight="600">
                poorer than before?
              </text>
              <text x="250" y="52" textAnchor="middle" fontSize="9">
                or further behind the wealth
              </text>
              <text x="250" y="65" textAnchor="middle" fontSize="9">
                they help to make?
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
