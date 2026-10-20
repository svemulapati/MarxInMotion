"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Fade, Loaf, Tag } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const SAM = CAST.sam.color;
const BOSS = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 12.1 · Two roads to more extra work (absolute vs relative)
 * ───────────────────────────────────────────────────────────── */
const X0 = 30;
const PX = 20; // px per hour

/** One working day drawn as a bar: Sam's part, then the boss's part. */
function DayBar({ y, mine, extra, h = 30, show = true }: { y: number; mine: number; extra: number; h?: number; show?: boolean }) {
  return (
    <g style={{ opacity: show ? 1 : 0, transition: "opacity 500ms" }}>
      <rect x={X0} y={y} height={h} width={mine * PX} fill={SAM} style={{ transition: `width ${T}` }} />
      <rect x={X0 + mine * PX} y={y} height={h} width={extra * PX} fill={BOSS} style={{ transition: `all ${T}` }} />
      <text x={X0 + (mine * PX) / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600" style={{ transition: `x ${T}` }}>
        {mine} h for Sam
      </text>
      <text x={X0 + mine * PX + (extra * PX) / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="10" fontWeight="600" style={{ transition: `x ${T}` }}>
        {extra} h extra
      </text>
    </g>
  );
}

export function TwoRoadsToMoreExtra() {
  return (
    <Player
      id="anim-12-1"
      title="12.1 · Two roads to more extra work"
      steps={[
        { caption: "Sam's day is 12 hours. In the first 6 he makes the value of his 3-coin wage. The other 6 are extra, for Mr. Moneybags." },
        { caption: "Road one: make the day longer. Stretch it to 14 hours and the extra grows to 8. Marx calls this absolute surplus-value." },
        { caption: "But a day can't stretch forever. People must sleep, and laws step in to limit the hours. So the boss needs another road." },
        { caption: "Road two: keep 12 hours, but make Sam's needs cheaper. If everything he lives on costs 2 coins instead of 3, he earns it back in 4 hours. Now 8 hours are extra." },
        { caption: "Same extra, two roads. A longer day is absolute surplus-value. A cheaper worker inside the same day is relative surplus-value.", ms: 4600 },
      ]}
    >
      {(s) => {
        const mine = s >= 3 ? 4 : 6;
        const extra = s === 1 ? 8 : s >= 3 ? 8 : 6;
        return (
          <>
            {/* hour ruler */}
            {Array.from({ length: 15 }, (_, h) => (
              <g key={h} style={{ opacity: s === 4 ? 0 : 1, transition: "opacity 400ms" }}>
                <line x1={X0 + h * PX} y1="128" x2={X0 + h * PX} y2={h % 2 ? 131 : 134} stroke="#000" strokeOpacity=".4" />
                {h % 2 === 0 && (
                  <text x={X0 + h * PX} y="146" textAnchor="middle" fontSize="8" fillOpacity=".55">
                    {h}h
                  </text>
                )}
              </g>
            ))}

            <DayBar y={92} mine={mine} extra={extra} show={s < 4} />

            {/* the stop sign at 12 hours */}
            <Fade show={s === 2}>
              <line x1={X0 + 12 * PX} y1="72" x2={X0 + 12 * PX} y2="132" stroke="#d6452f" strokeWidth="3" />
              <text x={X0 + 12 * PX} y="64" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
                stop: sleep, laws
              </text>
            </Fade>

            {/* road labels */}
            <Fade show={s === 1}>
              <text x="180" y="44" textAnchor="middle" fontSize="12" fontWeight="600">
                road one: a longer day
              </text>
              <text x="180" y="60" textAnchor="middle" fontSize="10">
                absolute surplus-value
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="44" textAnchor="middle" fontSize="12" fontWeight="600">
                road two: a cheaper worker
              </text>
              <text x="180" y="60" textAnchor="middle" fontSize="10">
                Sam&apos;s needs now cost 2 coins, not 3
              </text>
              <text x={X0 + 2 * PX} y="186" textAnchor="middle" fontSize="9.5">
                ← Sam&apos;s part shrinks
              </text>
            </Fade>
            <Fade show={s === 0}>
              <text x="180" y="52" textAnchor="middle" fontSize="12" fontWeight="600">
                a 12-hour day
              </text>
            </Fade>

            {/* side by side at the end */}
            <Fade show={s === 4} delay={200}>
              <text x={X0} y="36" fontSize="10" fontWeight="600">
                absolute: 14-hour day
              </text>
              <DayBar y={44} mine={6} extra={8} h={26} />
              <text x={X0} y="122" fontSize="10" fontWeight="600">
                relative: 12-hour day, cheaper needs
              </text>
              <DayBar y={130} mine={4} extra={8} h={26} />
              <text x="180" y="196" textAnchor="middle" fontSize="11" fontWeight="600">
                the same 8 hours of extra work
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12.2 · Sam's basket gets cheaper (why only necessities count)
 * ───────────────────────────────────────────────────────────── */
const House = () => (
  <g>
    <polygon points="-18,-2 0,-18 18,-2" fill="#8a5a2b" stroke="#000" strokeWidth="1.2" />
    <rect x="-14" y="-2" width="28" height="20" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <rect x="-4" y="6" width="8" height="12" fill="#8a5a2b" />
  </g>
);

const SilkHat = () => (
  <g>
    <rect x="-16" y="6" width="32" height="4" fill="#7b4bd6" stroke="#000" />
    <rect x="-10" y="-14" width="20" height="21" fill="#7b4bd6" stroke="#000" />
    <rect x="-10" y="0" width="20" height="3" fill="#e6b800" />
  </g>
);

/** Coin amounts in halves, written the way a child would say them. */
const fmt = (n: number) => {
  const whole = Math.floor(n);
  const half = n - whole === 0.5 ? "½" : "";
  if (!whole) return `${half} coin`;
  return `${whole}${half} coin${n === 1 ? "" : "s"}`;
};

export function SamsBasketGetsCheaper() {
  return (
    <Player
      id="anim-12-2"
      title="12.2 · Sam's basket gets cheaper"
      steps={[
        { caption: "Everything Sam needs for one day costs 3 coins: bread, clothes, and a roof. To earn 3 coins of value takes him 6 hours." },
        { caption: "Mia gets a better oven and bakes twice as much bread in an hour. So a day's bread is now worth only half a coin." },
        { caption: "The tailors find a quicker way to sew. A day's share of clothes now costs half a coin too." },
        { caption: "Sam can buy just as much as before, but his basket costs 2 coins. Now he makes his wage back in 4 hours, not 6. The rest of his day is extra for the boss.", ms: 4800 },
        { caption: "But if fancy silk hats get cheaper, nothing changes. Sam never buys one. Marx says only cheaper necessities, or the tools that make them, shrink the worker's part of the day.", ms: 5000 },
      ]}
    >
      {(s) => {
        const bread = s >= 1 ? 0.5 : 1;
        const clothes = s >= 2 ? 0.5 : 1;
        const total = bread + clothes + 1;
        const hours = total * 2;
        const items = [
          { draw: <Loaf />, price: bread, x: 70, who: "Mia's bread" },
          { draw: <g transform="scale(.8)"><Coat /></g>, price: clothes, x: 180, who: "clothes" },
          { draw: <House />, price: 1, x: 290, who: "a roof" },
        ];
        return (
          <>
            <rect x="20" y="18" width="320" height="108" fill="#fff" stroke="#000" strokeOpacity=".2" />
            <text x="30" y="32" fontSize="9" fillOpacity=".6">
              Sam&apos;s basket for one day
            </text>
            {items.map((it) => (
              <g key={it.who}>
                <g transform={`translate(${it.x} 62)`}>{it.draw}</g>
                <text x={it.x} y="94" textAnchor="middle" fontSize="9" fillOpacity=".6">
                  {it.who}
                </text>
                <g transform={`translate(${it.x + 2} 110)`}>
                  <Tag text={fmt(it.price)} />
                </g>
              </g>
            ))}

            <text x="30" y="150" fontSize="11">
              basket: <tspan fontWeight="700">{fmt(total)}</tspan> = Sam&apos;s part of the day:
            </text>
            <rect x="30" y="160" height="20" width={hours * 20} fill={SAM} style={{ transition: `width ${T}` }} />
            <rect x={30 + hours * 20} y="160" height="20" width={(12 - hours) * 20} fill={BOSS} style={{ transition: `all ${T}` }} />
            <text x={30 + hours * 10} y="174" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600" style={{ transition: `x ${T}` }}>
              {hours} h
            </text>
            <text x={30 + hours * 20 + ((12 - hours) * 20) / 2} y="174" textAnchor="middle" fontSize="10" fontWeight="600" style={{ transition: `x ${T}` }}>
              {12 - hours} h extra
            </text>
            <text x="30" y="196" fontSize="8.5" fillOpacity=".55">
              same 12-hour day
            </text>

            {/* the luxury that changes nothing */}
            <Fade show={s === 4}>
              <rect x="246" y="186" width="104" height="32" fill="#fff" stroke="#7b4bd6" />
              <g transform="translate(266 202) scale(.6)">
                <SilkHat />
              </g>
              <text x="282" y="200" fontSize="8.5">
                silk hat: cheaper!
              </text>
              <text x="282" y="212" fontSize="8.5" fill="#d6452f">
                not in the basket
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12.3 · The race for the extra penny (extra surplus-value)
 * Marx's own numbers: 12 articles a day at 1 shilling (12d) each,
 * 6d of materials + 6d of new value; doubled output gives 24 at 9d;
 * sold at 10d, an extra penny each, until everyone copies.
 * ───────────────────────────────────────────────────────────── */
function PriceTag({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-30,-8 L22,-8 L30,0 L22,8 L-30,8 Z" fill="#fff" stroke="#000" strokeWidth="1" />
      <circle cx="22" cy="0" r="1.5" fill="#000" />
      <text x="-4" y="3.5" textAnchor="middle" fontSize="9">
        {text}
      </text>
    </g>
  );
}

function Spools({ x, n }: { x: number; n: number }) {
  return (
    <g>
      {Array.from({ length: 24 }, (_, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        return (
          <g key={i} style={{ opacity: i < n ? 1 : 0, transition: `opacity 300ms ease ${i < n ? (i % 12) * 40 : 0}ms` }}>
            <rect x={x + col * 22} y={66 + row * 20} width="14" height="14" rx="2" fill="#f4ead2" stroke="#000" strokeWidth=".8" />
            <line x1={x + col * 22 + 2} y1={66 + row * 20 + 5} x2={x + col * 22 + 12} y2={66 + row * 20 + 5} stroke={SAM} strokeWidth="1.2" />
            <line x1={x + col * 22 + 2} y1={66 + row * 20 + 9} x2={x + col * 22 + 12} y2={66 + row * 20 + 9} stroke={SAM} strokeWidth="1.2" />
          </g>
        );
      })}
    </g>
  );
}

export function TheRaceForTheExtraPenny() {
  return (
    <Player
      id="anim-12-3"
      title="12.3 · The race for the extra penny"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Marx's own numbers. Every workshop makes 12 spools in a 12-hour day. Each spool is worth 12 pennies: 6 for the cotton, 6 for the work." },
        { caption: "Mr. Moneybags finds a trick that doubles his output: 24 spools a day. The day's work is now spread over twice as many spools, so each one is really worth only 9 pennies." },
        { caption: "Everyone else still charges 12 pennies. He sells at 10: cheaper than the rest, but a penny more than his spools are really worth. That extra penny is extra surplus-value.", ms: 5000 },
        { caption: "The rival workshop sees this and copies the trick. Now everybody makes 24 spools, and spools are worth 9 pennies everywhere." },
        { caption: "The extra penny is gone, so the hunt for the next trick begins. Meanwhile spools, then shirts, get cheaper, and Sam's basket with them. That is how relative surplus-value spreads.", ms: 5200 },
      ]}
    >
      {(s) => {
        const mineN = s >= 1 ? 24 : 12;
        const rivalN = s >= 3 ? 24 : 12;
        const minePrice = s === 0 ? 12 : s >= 3 ? 9 : 10;
        const rivalPrice = s >= 3 ? 9 : 12;
        return (
          <>
            <Figure who="moneybags" x={30} y={60} scale={0.55} label={false} />
            <text x="94" y="26" textAnchor="middle" fontSize="11" fontWeight="600">
              Mr. Moneybags
            </text>
            <Figure name="Rival" x={198} y={60} scale={0.55} label={false} />
            <text x="270" y="26" textAnchor="middle" fontSize="11" fontWeight="600">
              the rival workshop
            </text>
            <text x="94" y="42" textAnchor="middle" fontSize="9.5">
              {mineN} spools a day
            </text>
            <text x="270" y="42" textAnchor="middle" fontSize="9.5">
              {rivalN} spools a day
            </text>
            <Spools x={30} n={mineN} />
            <Spools x={206} n={rivalN} />

            {/* prices */}
            <PriceTag x={94} y={162} text={`${minePrice} pennies`} />
            <PriceTag x={270} y={162} text={`${rivalPrice} pennies`} />
            <Fade show={s >= 1 && s <= 2}>
              <text x="94" y="184" textAnchor="middle" fontSize="9">
                really worth 9 each
              </text>
            </Fade>
            <Fade show={s === 2} delay={400}>
              <text x="94" y="200" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b38f00">
                +1 penny a spool
              </text>
              <text x="94" y="214" textAnchor="middle" fontSize="9">
                extra surplus-value
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="270" y="184" textAnchor="middle" fontSize="9">
                copied the trick
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <text x="94" y="200" textAnchor="middle" fontSize="11" fontWeight="700" fill="#d6452f">
                extra: 0
              </text>
              <text x="180" y="226" textAnchor="middle" fontSize="9.5" fontWeight="600">
                cheaper spools → cheaper shirts → a cheaper basket for Sam
              </text>
            </Fade>
            <line x1="180" y1="18" x2="180" y2="190" stroke="#000" strokeOpacity=".12" />
          </>
        );
      }}
    </Player>
  );
}
