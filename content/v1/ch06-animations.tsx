"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, Loaf, Place, Tick } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* Small drawings used only in this chapter. Each is centred on (0, 0). */
const Field = () => (
  <g>
    <rect x="-16" y="-9" width="32" height="18" fill="#9cc77a" stroke="#000" strokeWidth="1" />
    {[-10, -4, 2, 8].map((x) => (
      <line key={x} x1={x} y1="-9" x2={x + 4} y2="9" stroke="#5f8f3e" strokeWidth="1.2" />
    ))}
  </g>
);
const Hammer = () => (
  <g>
    <rect x="-2" y="-6" width="4" height="20" fill="#a06a35" stroke="#000" strokeWidth="1" />
    <rect x="-10" y="-12" width="20" height="8" fill="#777" stroke="#000" strokeWidth="1" />
  </g>
);
const Workshop = () => (
  <g>
    <path d="M-16,12 V-4 L0,-16 L16,-4 V12 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <rect x="-5" y="1" width="10" height="11" fill="#555" />
  </g>
);
const Chain = ({ broken }: { broken: boolean }) => (
  <g fill="none" stroke="#000" strokeWidth="2">
    <ellipse cx="-12" cy="0" rx="8" ry="5" />
    <ellipse cx={broken ? 14 : 0} cy="0" rx="8" ry="5" style={{ transition: `cx ${T}` }} />
    <ellipse cx={broken ? 26 : 12} cy="0" rx="8" ry="5" style={{ transition: `cx ${T}` }} />
  </g>
);
const Calendar = ({ label }: { label: string }) => (
  <g>
    <rect x="-18" y="-16" width="36" height="32" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <rect x="-18" y="-16" width="36" height="9" fill="#d6452f" />
    <text y="10" textAnchor="middle" fontSize="11" fontWeight="700">
      {label}
    </text>
  </g>
);
const Bulb = () => (
  <g>
    <circle r="7" fill="#ffe27a" stroke="#000" strokeWidth="1" />
    <rect x="-3" y="6" width="6" height="4" fill="#999" />
  </g>
);
const Arm = () => (
  <g>
    <path d="M-10,8 Q-12,-6 -2,-8 Q4,-14 8,-6 Q12,4 4,8 Z" fill={CAST.sam.color} stroke="#000" strokeWidth="1" />
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 6.1 · What Sam has to sell (labour-power; free in two senses)
 * ───────────────────────────────────────────────────────────── */
export function WhatSamHasToSell() {
  return (
    <Player
      id="anim-6-1"
      title="6.1 · What Sam has to sell"
      viewBox="0 0 360 230"
      steps={[
        { caption: "This is Sam. Mr. Moneybags is looking for a very special thing to buy. Could Sam have it?" },
        { caption: "Sam has his strength, his skill and his know-how: everything his body and mind can do at work. Marx calls this labour-power." },
        { caption: "Sam is free in one way: nobody owns him. He can choose whom to work for." },
        { caption: "And Sam is free in a second way: free of everything else. He has no field, no tools and no workshop of his own. So to eat, he must sell his labour-power.", ms: 4600 },
        {
          caption: "He sells it only for a day at a time. If he sold it forever, he would be selling himself, and he would be a slave.",
          ms: 4400,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="sam" x={180} y={214} scale={1.1} mood={s === 3 ? "sad" : "happy"} />

          {/* labour-power: what his body and mind can do */}
          <Fade show={s >= 1}>
            <text x="180" y="22" textAnchor="middle" fontSize="11" fontWeight="600">
              labour-power
            </text>
            <text x="180" y="35" textAnchor="middle" fontSize="8.5">
              everything his body and mind can do
            </text>
            <Place x={140} y={112} show={s >= 1} delay={100}>
              <Arm />
              <text y="22" textAnchor="middle" fontSize="8">
                strength
              </text>
            </Place>
            <Place x={180} y={96} show={s >= 1} delay={250}>
              <Bulb />
              <text y="22" textAnchor="middle" fontSize="8">
                know-how
              </text>
            </Place>
            <Place x={220} y={112} show={s >= 1} delay={400}>
              <Hand />
              <text y="22" textAnchor="middle" fontSize="8">
                skill
              </text>
            </Place>
          </Fade>

          {/* free, sense one: no master */}
          <Fade show={s >= 2}>
            <g style={{ opacity: s === 4 ? 0.35 : 1, transition: "opacity 400ms" }}>
              <text x="52" y="62" textAnchor="middle" fontSize="10" fontWeight="600">
                free #1
              </text>
              <g transform="translate(46 88)">
                <Chain broken={s >= 2} />
              </g>
              <text x="52" y="116" textAnchor="middle" fontSize="8.5">
                nobody owns him
              </text>
              <g transform="translate(52 136)">
                <Tick />
              </g>
            </g>
          </Fade>

          {/* free, sense two: nothing else to live on */}
          <Fade show={s >= 3}>
            <g style={{ opacity: s === 4 ? 0.35 : 1, transition: "opacity 400ms" }}>
              <text x="308" y="62" textAnchor="middle" fontSize="10" fontWeight="600">
                free #2
              </text>
              {[
                { y: 86, draw: <Field />, label: "no field" },
                { y: 124, draw: <Hammer />, label: "no tools" },
                { y: 164, draw: <Workshop />, label: "no workshop" },
              ].map((o, i) => (
                <g key={o.label}>
                  <Place x={290} y={o.y} show={s >= 3} delay={i * 200}>
                    {o.draw}
                  </Place>
                  <Fade show={s >= 3} delay={500 + i * 200}>
                    <g transform={`translate(290 ${o.y})`}>
                      <Cross />
                    </g>
                    <text x="314" y={o.y + 4} fontSize="8">
                      {o.label}
                    </text>
                  </Fade>
                </g>
              ))}
            </g>
          </Fade>

          {/* by the day, never forever */}
          <Fade show={s === 4} delay={200}>
            <g transform="translate(70 170)">
              <Calendar label="1 day" />
            </g>
            <text x="70" y="200" textAnchor="middle" fontSize="8.5" fontWeight="600">
              sold by the day
            </text>
            <text x="300" y="196" textAnchor="middle" fontSize="8.5" textDecoration="line-through" fill="#d6452f">
              sold forever
            </text>
            <text x="300" y="208" textAnchor="middle" fontSize="8" fill="#d6452f">
              (that would be slavery)
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

const Hand = () => (
  <g>
    <rect x="-7" y="-4" width="14" height="12" rx="3" fill="#fff" stroke="#000" strokeWidth="1" />
    {[-5, -1.5, 2, 5.5].map((x) => (
      <rect key={x} x={x - 1.5} y="-11" width="3" height="8" rx="1.5" fill="#fff" stroke="#000" strokeWidth="1" />
    ))}
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 6.2 · What a day of Sam's work is worth (value of labour-power)
 * Using the workshop numbers from CONTINUITY.md: 3 coins a day.
 * ───────────────────────────────────────────────────────────── */
const PX_PER_COIN = 36;
const BASE = 200;
const PARTS = [
  { label: "food and drink", coins: 1.2, color: "#d99a00" },
  { label: "a roof over his head", coins: 0.6, color: "#8a5a2b" },
  { label: "clothes and firewood", coins: 0.4, color: "#2f6fd6" },
  { label: "raising his children", coins: 0.5, color: "#2a9d5b" },
  { label: "what counts as normal", coins: 0.3, color: "#7b4bd6" },
];

export function WhatADayIsWorth() {
  const tops = PARTS.reduce<number[]>((acc, p, i) => [...acc, (acc[i - 1] ?? BASE) - p.coins * PX_PER_COIN], []);
  return (
    <Player
      id="anim-6-2"
      title="6.2 · What is a day of Sam's work worth?"
      steps={[
        { caption: "Labour-power is a commodity, so its value is set like any other: by the work it takes to produce it. And Sam is produced by the things that keep him alive. First, food and drink." },
        { caption: "Then a roof over his head." },
        { caption: "Then clothes, and firewood for winter." },
        { caption: "Sam won't work forever, so the price must also raise his children: the next workers." },
        { caption: "Plus whatever counts as normal in Tiny Town, like a cup of tea or a Sunday coat. Marx calls this the historical and moral part: it differs from place to place and time to time.", ms: 4800 },
        { caption: "All together: 3 coins a day. That is the value of a day of Sam's labour-power, and that is his wage.", ms: 4200 },
      ]}
    >
      {(s) => (
        <>
          <Figure who="sam" x={56} y={208} scale={0.9} />
          <line x1="130" y1={BASE} x2="210" y2={BASE} stroke="#000" />

          {PARTS.map((p, i) => {
            const top = tops[i];
            const h = p.coins * PX_PER_COIN;
            return (
              <g key={p.label} style={{ opacity: s >= i ? 1 : 0, transform: `translateY(${s >= i ? 0 : -24}px)`, transition: `all ${T}` }}>
                <rect x="140" y={top} width="60" height={h - 1} fill={p.color} />
                <line x1="202" y1={top + h / 2} x2="214" y2={top + h / 2} stroke="#000" strokeOpacity=".4" />
                <text x="218" y={top + h / 2 + 3.5} fontSize="9.5">
                  {p.label}
                </text>
              </g>
            );
          })}
          <Fade show={s === 0} delay={300}>
            <g transform="translate(170 172) scale(.8)">
              <Loaf />
            </g>
          </Fade>

          <Fade show={s === 5}>
            <path d={`M128,${tops[4]} h-6 v${BASE - tops[4]} h6`} fill="none" stroke="#000" />
            <text x="96" y={tops[4] + 4} textAnchor="middle" fontSize="13" fontWeight="700">
              3 coins
            </text>
            <text x="96" y={tops[4] + 17} textAnchor="middle" fontSize="8.5">
              a day
            </text>
            <g transform="translate(170 30)">
              <Coins n={3} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6.3 · Leaving the market (Eden of rights; the hidden abode)
 * ───────────────────────────────────────────────────────────── */
const WORDS = [
  { w: "Freedom", why: "both choose freely; nobody forces Sam", x: 64, y: 40 },
  { w: "Equality", why: "equal swap: a day's labour-power for 3 coins", x: 164, y: 40 },
  { w: "Property", why: "each sells only what is his own", x: 64, y: 78 },
  { w: "Bentham", why: "each looks out only for himself", x: 164, y: 78 },
];

export function LeavingTheMarket() {
  return (
    <Player
      id="anim-6-3"
      title="6.3 · Leaving the market"
      steps={[
        { caption: "In the market, Sam and Mr. Moneybags strike their deal. Marx calls the market a very Eden of rights, ruled by four things. First, Freedom: both choose freely." },
        { caption: "Equality: each is just an owner, swapping equal for equal. A day of Sam's labour-power for 3 coins." },
        { caption: "Property: each one sells only what is his own." },
        { caption: "And Bentham, Marx's joke about a thinker who said people follow their own interest: each one looks out only for himself." },
        {
          caption: "Then they leave the bright market for the workshop. On the door: “No admittance except on business.” Moneybags strides ahead, smiling. Sam follows slowly, holding back. The secret of the extra money is inside.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the market stall the four words hang over */}
          <g style={{ opacity: s === 4 ? 0.35 : 1, transition: "opacity 600ms" }}>
            <path d="M14,18 H214 L204,8 H24 Z" fill="#d6452f" />
            {WORDS.map((o, i) => (
              <g key={o.w}>
                <rect
                  x={o.x - 46}
                  y={o.y - 14}
                  width="92"
                  height="24"
                  fill={s >= i ? "#000" : "#fff"}
                  stroke="#000"
                  style={{ transition: "fill 400ms" }}
                />
                <text x={o.x} y={o.y + 3} textAnchor="middle" fontSize="11" fontWeight="600" fill={s >= i ? "#fff" : "#000"} style={{ transition: "fill 400ms" }}>
                  {o.w}
                </text>
              </g>
            ))}
            {WORDS.map((o, i) => (
              <Fade key={o.w} show={s === i}>
                <text x="114" y="120" textAnchor="middle" fontSize="9.5">
                  {o.why}
                </text>
              </Fade>
            ))}
          </g>

          {/* the workshop and its sign */}
          <rect x="268" y="66" width="80" height="134" fill="#fff" stroke="#000" strokeWidth="1.5" />
          <rect x="292" y="140" width="32" height="60" fill={s === 4 ? "#222" : "#555"} style={{ transition: "fill 600ms" }} />
          <rect x="274" y="94" width="68" height="30" fill="#fffbe6" stroke="#000" />
          <text x="308" y="106" textAnchor="middle" fontSize="7.5" fontWeight="600">
            No admittance
          </text>
          <text x="308" y="117" textAnchor="middle" fontSize="7.5" fontWeight="600">
            except on business
          </text>
          <text x="308" y="82" textAnchor="middle" fontSize="8">
            workshop
          </text>

          {/* the two walk from the market to the door */}
          <Figure who="moneybags" x={s === 4 ? 236 : 80} y={208} scale={0.85} />
          <Figure who="sam" x={s === 4 ? 186 : 150} y={208} scale={0.85} mood={s === 4 ? "sad" : "happy"} />
          <Fade show={s <= 3}>
            <g transform="translate(115 158)">
              <Coins n={3} label="for one day" />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
