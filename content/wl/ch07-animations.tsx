"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Loaf } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const SAM = CAST.sam.color;
const GOLD = "#e6b800";
const OLD = "#bdbdbd";

/** A horizontal stack of coloured segments, each `w` wide, with labels. */
function Stack({ x, y, parts, h = 26 }: { x: number; y: number; h?: number; parts: { w: number; fill: string; label: string; ink?: string }[] }) {
  // each segment starts where the ones before it end
  const lefts = parts.map((_, i) => x + parts.slice(0, i).reduce((sum, q) => sum + q.w, 0));
  return (
    <g>
      {parts.map((p, i) => {
        const left = lefts[i];
        return (
          <g key={p.label}>
            <rect x={left} y={y} width={p.w} height={h} fill={p.fill} style={{ transition: `all ${T}` }} />
            {p.w > 44 && (
              <text x={left + p.w / 2} y={y + h / 2 + 3.5} textAnchor="middle" fontSize="9" fill={p.ink ?? "#000"} fontWeight="600" style={{ transition: `x ${T}` }}>
                {p.label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.1 · The yarn's price, cut in three
 * Marx: the selling price splits into (1) replacing materials and wear,
 * (2) replacing wages, (3) profit. Parts 2 and 3 both come out of the
 * new value the worker adds. Tiny Town uses the workshop numbers.
 * ───────────────────────────────────────────────────────────── */
export function YarnCutInThree() {
  const U = 9.5; // px per coin
  return (
    <Player
      id="anim-wl-7-1"
      title="7.1 · The yarn's price, cut in three"
      steps={[
        { caption: "Mr. Moneybags sells a day's yarn for 30 coins. He thinks of the money as three piles." },
        { caption: "Pile one, 24 coins, pays back the cotton and the wear on the spindles. That value was already there before Sam started work." },
        { caption: "Pile two, 3 coins, pays back the wage he gave Sam." },
        { caption: "Pile three, 3 coins, is left over. That is his profit." },
        {
          caption: "Look where piles two and three come from: both are new value, made by Sam's work that day. So wage and profit are two slices of the same 6 coins.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(40 52)">
            <Yarn />
          </g>
          <text x="40" y="82" textAnchor="middle" fontSize="9">
            a day&apos;s yarn
          </text>
          <text x="40" y="94" textAnchor="middle" fontSize="9" fontWeight="600">
            30 coins
          </text>

          <Stack
            x={70}
            y={46}
            parts={[
              { w: s >= 1 ? 24 * U : 0, fill: OLD, label: "materials and wear: 24" },
              { w: s >= 2 ? 3 * U : 0, fill: SAM, label: "wage 3", ink: "#fff" },
              { w: s >= 3 ? 3 * U : 0, fill: GOLD, label: "profit 3" },
            ]}
          />

          {/* labels for the two narrow slices, under the bar */}
          <Fade show={s >= 2 && s < 4}>
            <text x={70 + 25.5 * U} y="88" textAnchor="middle" fontSize="8.5" fill={SAM} fontWeight="600">
              wage 3
            </text>
          </Fade>
          <Fade show={s === 3}>
            <text x={70 + 28.5 * U} y="100" textAnchor="middle" fontSize="8.5" fill="#8a6d00" fontWeight="600">
              profit 3
            </text>
          </Fade>

          {/* old value vs new value braces */}
          <Fade show={s >= 4}>
            <path d={`M70,80 v6 h${24 * U} v-6`} fill="none" stroke="#000" strokeOpacity=".5" />
            <text x={70 + 12 * U} y="100" textAnchor="middle" fontSize="9">
              old value, only passed on
            </text>
            <path d={`M${70 + 24 * U},80 v6 h${6 * U} v-6`} fill="none" stroke="#000" />
            <text x={70 + 30 * U} y="100" textAnchor="end" fontSize="9" fontWeight="600">
              new value: 6
            </text>
          </Fade>

          <Figure who="sam" x={110} y={200} scale={0.8} />
          <Figure who="moneybags" x={250} y={200} scale={0.8} />
          <Fade show={s >= 2}>
            <g transform="translate(150 160)">
              <Coins n={3} />
            </g>
          </Fade>
          <Fade show={s >= 3}>
            <g transform="translate(212 160)">
              <Coins n={3} />
            </g>
          </Fade>
          <Fade show={s >= 4}>
            <text x="180" y="132" textAnchor="middle" fontSize="10" fontWeight="600">
              two slices of what Sam made
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.2 · More bread, a smaller share
 * Marx's example: all means of subsistence fall by 2/3 in price, the
 * day's wage falls by only 1/3, from 3 shillings to 2. The worker can buy
 * more, yet the capitalist's profit has risen by one shilling.
 * ───────────────────────────────────────────────────────────── */
export function MoreBreadSmallerShare() {
  const after = (s: number) => s >= 2;
  return (
    <Player
      id="anim-wl-7-2"
      title="7.2 · More bread, a smaller share"
      steps={[
        { caption: "Sam's wage is 3 coins a day. A loaf costs 1 coin, so his wage buys 3 loaves." },
        { caption: "Then everything Sam needs gets much cheaper: prices fall by two-thirds. A loaf now costs a third of a coin." },
        { caption: "Sam's wage falls too, but only by a third: from 3 coins to 2. Two coins now buy 6 loaves. Sam is better off than before!" },
        { caption: "But look at the 6 coins of new value Sam makes each day. It used to split 3 and 3. Now it splits 2 and 4." },
        {
          caption: "Sam eats more, yet his share has shrunk and the boss's has grown by a coin. Marx calls the share the relative wage: it can fall while the real wage rises.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const wage = after(s) ? 2 : 3;
        const loaves = after(s) ? 6 : 3;
        return (
          <>
            {/* the shop shelf */}
            <rect x="20" y="34" width="190" height="78" fill="#fff" stroke="#000" />
            <text x="115" y="48" textAnchor="middle" fontSize="9">
              what Sam&apos;s wage buys
            </text>
            {Array.from({ length: 6 }, (_, i) => (
              <g key={i} transform={`translate(${44 + (i % 3) * 64} ${70 + Math.floor(i / 3) * 26}) scale(.62)`} style={{ opacity: i < loaves ? 1 : 0, transition: "opacity 500ms" }}>
                <Loaf />
              </g>
            ))}
            <text x="245" y="58" fontSize="9">
              a loaf costs
            </text>
            <text x="245" y="74" fontSize="13" fontWeight="600">
              {s >= 1 ? "⅓ coin" : "1 coin"}
            </text>
            <text x="245" y="96" fontSize="9">
              Sam&apos;s wage
            </text>
            <text x="245" y="112" fontSize="13" fontWeight="600" fill={SAM}>
              {wage} coins
            </text>

            <Fade show={s >= 1 && s < 3}>
              <text x="180" y="148" textAnchor="middle" fontSize="10">
                {s === 1 ? "everything Sam needs: −⅔" : "his wage: −⅓ (3 → 2)"}
              </text>
            </Fade>

            {/* the day's new value */}
            <Fade show={s >= 3}>
              <text x="20" y="150" fontSize="9">
                the new value Sam makes in a day: 6 coins
              </text>
              <Stack
                x={20}
                y={158}
                h={24}
                parts={[
                  { w: wage * 50, fill: SAM, label: `Sam ${wage}`, ink: "#fff" },
                  { w: (6 - wage) * 50, fill: GOLD, label: `boss ${6 - wage}` },
                ]}
              />
              <text x="20" y="200" fontSize="9" fillOpacity=".6">
                before: 3 and 3
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <text x="340" y="200" textAnchor="end" fontSize="10" fontWeight="600">
                more loaves, smaller slice
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.3 · Two ends of one rope
 * The general law: wages and profit stand in inverse proportion.
 * And Marx's spinning-machine example: 100 lb of yarn an hour instead of
 * 50 brings no more exchange value in the long run.
 * ───────────────────────────────────────────────────────────── */
export function TwoEndsOfOneRope() {
  const splits = [
    [3, 3],
    [4, 2],
    [2, 4],
    [2, 4],
    [2, 4],
  ];
  return (
    <Player
      id="anim-wl-7-3"
      title="7.3 · Two ends of one rope"
      steps={[
        { caption: "Here is Marx's general law. The new value is one rope. Sam holds one end, Mr. Moneybags the other." },
        { caption: "If Sam's wage rises, the boss's profit must fall by the same amount. 4 and 2." },
        { caption: "If the wage falls, profit rises. 2 and 4. Marx: they stand in inverse proportion." },
        { caption: "Can the boss beat the rule with a new spinning machine? It makes 100 pounds of yarn an hour instead of 50." },
        {
          caption: "Soon everyone has the machine and yarn costs half as much to make. 100 pounds then swap for what 50 pounds did before. More things, but not more value, so the rope stays the same length.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const [w, p] = splits[s];
        const mid = 40 + w * 46.7;
        return (
          <>
            <Figure who="sam" x={22} y={110} scale={0.7} label={false} />
            <Figure who="moneybags" x={338} y={110} scale={0.7} label={false} />
            <line x1="40" y1="80" x2="320" y2="80" stroke="#8a6d00" strokeWidth="5" strokeLinecap="round" />
            <rect x="40" y="70" width={mid - 40} height="20" fill={SAM} opacity=".85" style={{ transition: `width ${T}` }} />
            <rect x={mid} y="70" width={320 - mid} height="20" fill={GOLD} opacity=".9" style={{ transition: `all ${T}` }} />
            <text x={(40 + mid) / 2} y="84" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700" style={{ transition: `x ${T}` }}>
              wage {w}
            </text>
            <text x={(mid + 320) / 2} y="84" textAnchor="middle" fontSize="10" fontWeight="700" style={{ transition: `x ${T}` }}>
              profit {p}
            </text>
            <text x="180" y="58" textAnchor="middle" fontSize="9">
              the new value: always 6 coins
            </text>

            {/* the machine */}
            <Fade show={s >= 3}>
              {[0, 1].map((k) => (
                <g key={k} transform={`translate(${110 + k * 140} 150)`}>
                  <text y="-14" textAnchor="middle" fontSize="9" fontWeight="600">
                    {k === 0 ? "old way: 50 lb an hour" : "machine: 100 lb an hour"}
                  </text>
                  {Array.from({ length: k === 0 ? 2 : 4 }, (_, i) => (
                    <g key={i} transform={`translate(${(i - (k === 0 ? 0.5 : 1.5)) * 22} 10) scale(.7)`}>
                      <Yarn />
                    </g>
                  ))}
                </g>
              ))}
            </Fade>
            <Fade show={s >= 4}>
              <text x="180" y="200" textAnchor="middle" fontSize="10" fontWeight="600">
                twice the yarn, the same value
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
