"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Clock, Coat, Coffee, Corn, Fade, Gold, Linen, Loaf, Place, Tag, Tea } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 1.1 · Two faces of a coat (use-value, exchange-value, value)
 * ───────────────────────────────────────────────────────────── */
export function TwoFacesOfACoat() {
  return (
    <Player
      id="anim-1-1"
      title="1.1 · The two faces of a coat"
      steps={[
        { caption: "Ava has sewn a coat. Look closely: every coat has two faces." },
        { caption: "Face one: the coat is useful. It keeps Leo warm in the snow. Marx calls this its use-value." },
        { caption: "Face two: the coat can be swapped. One coat trades for 20 yards of Leo's linen. That is its exchange-value." },
        { caption: "But a coat and a roll of cloth look nothing alike. One is for wearing, one is for sewing. So what makes them equal?" },
        { caption: "The hidden thing they share is human work. Both took about 10 hours to make. Marx calls this hidden amount value.", ms: 4200 },
      ]}
    >
      {(s) => {
        const coatX = s === 0 ? 180 : s === 1 ? 90 : 230;
        const coatY = s <= 1 ? 105 : 150;
        const tilt = s >= 2 ? 0 : -10;
        return (
          <>
            {/* ground */}
            <line x1="0" y1="196" x2="360" y2="196" stroke="#000" strokeOpacity=".15" />

            {/* Ava, proud of her work */}
            <Figure who="ava" x={s === 0 ? 105 : 40} y={192} mood="happy" style={{ opacity: s <= 1 ? 1 : 0.25 }} />

            {/* face one: warmth around the coat, snow, Leo */}
            <Fade show={s === 1}>
              {[[150, 40], [190, 70], [230, 30], [270, 80], [310, 50], [250, 120]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke="#000" strokeOpacity=".3" className="snow" style={{ animationDelay: `${i * 300}ms` }} />
              ))}
              <path d="M58,70 q-10,35 0,70 M122,70 q10,35 0,70" stroke={CAST.ava.color} strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <Figure who="leo" x={175} y={192} mood="happy" />
              <text x="90" y="38" textAnchor="middle" fontSize="11" fontWeight="600">
                Useful!
              </text>
              <text x="90" y="52" textAnchor="middle" fontSize="9">
                use-value
              </text>
            </Fade>

            {/* face two: the seesaw */}
            <Fade show={s >= 2}>
              <polygon points="270,170 260,196 280,196" fill="#000" />
              <g style={{ transformOrigin: "270px 168px", transform: `rotate(${tilt}deg)`, transition: `transform ${T} 400ms` }}>
                <line x1="200" y1="168" x2="340" y2="168" stroke="#000" strokeWidth="3" />
              </g>
              {/* right pan: four rolls of linen, 5 yards each */}
              {[0, 1, 2, 3].map((i) => (
                <Place key={i} x={310 + (i % 2) * 22 - 11} y={154 - Math.floor(i / 2) * 18} show={s >= 2} delay={150 * i}>
                  <Linen />
                </Place>
              ))}
              <text x="310" y="210" textAnchor="middle" fontSize="9">
                20 yards of linen
              </text>
              <text x="230" y="210" textAnchor="middle" fontSize="9">
                1 coat
              </text>
            </Fade>

            {/* the coat itself moves between scenes */}
            <Place x={coatX} y={coatY} scale={s >= 2 ? 0.75 : 1.3}>
              <Coat />
            </Place>

            {/* the question, then the answer */}
            <Fade show={s === 3}>
              <text x="270" y="70" textAnchor="middle" fontSize="40" fontWeight="300">
                ?
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <Place x={230} y={50} show={s >= 4}>
                <Clock hours="10 hours" color={CAST.ava.color} />
              </Place>
              <Place x={310} y={50} show={s >= 4} delay={200}>
                <Clock hours="10 hours" color={CAST.leo.color} />
              </Place>
              <text x="270" y="56" textAnchor="middle" fontSize="20" fontWeight="600">
                =
              </text>
              <text x="90" y="80" textAnchor="middle" fontSize="11" fontWeight="600">
                Value =
              </text>
              <text x="90" y="94" textAnchor="middle" fontSize="11">
                hours of human work
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.2 · Slow Leo and the machine loom (socially necessary labour time)
 * ───────────────────────────────────────────────────────────── */
const PX_PER_HOUR = 11.5;
const BAR_X = 92;

export function SlowLeoAndTheMachineLoom() {
  return (
    <Player
      id="anim-1-2"
      title="1.2 · Slow Leo and the machine loom"
      steps={[
        { caption: "In Tiny Town, most weavers take 10 hours to weave one roll of linen." },
        { caption: "One day Leo is sleepy and dawdles. His roll takes him 20 hours. Is his roll now worth twice as much?" },
        { caption: "No! Buyers only count the usual time, 10 hours. Leo's extra hours are wasted. Marx calls the usual time socially necessary labour time.", ms: 4200 },
        { caption: "Then a machine loom comes to town. With it, a roll takes only 5 hours." },
        { caption: "Leo still weaves by hand, so his roll takes 10 hours. But now every roll is worth just 5. Marx used this very example: power-looms in England cut weaving time roughly in half.", ms: 5000 },
      ]}
    >
      {(s) => {
        const usual = s >= 3 ? 5 : 10;
        const leoHours = s === 1 || s === 2 ? 20 : 10;
        const rows = [
          { name: "Leo", who: "leo" as const, hours: leoHours, y: 62 },
          { name: "Kim", hours: usual, y: 124 },
          { name: "Raj", hours: usual, y: 186 },
        ];
        const lineX = BAR_X + usual * PX_PER_HOUR;
        return (
          <>
            {rows.map((r) => {
              const counted = Math.min(r.hours, usual);
              const wasted = r.hours - counted;
              const showWaste = s >= 2 && wasted > 0;
              return (
                <g key={r.name}>
                  <Figure
                    who={r.who}
                    name={r.name}
                    x={44}
                    y={r.y}
                    scale={0.72}
                    mood={r.who && (s === 1 || s === 2) ? "sleepy" : r.who && s === 4 ? "sad" : "happy"}
                  />
                  {/* the hours it actually took */}
                  <rect
                    x={BAR_X}
                    y={r.y - 32}
                    height="18"
                    width={r.hours * PX_PER_HOUR}
                    fill={r.who ? CAST.leo.color : "#9a9a9a"}
                    style={{ transition: `width ${T}` }}
                  />
                  {/* the part nobody pays for */}
                  <rect
                    x={BAR_X + counted * PX_PER_HOUR}
                    y={r.y - 32}
                    height="18"
                    width={wasted * PX_PER_HOUR}
                    fill="url(#hatch)"
                    style={{ opacity: showWaste ? 1 : 0, transition: `opacity 500ms ease 300ms, x ${T}, width ${T}` }}
                  />
                  <text
                    x={BAR_X + r.hours * PX_PER_HOUR + 5}
                    y={r.y - 19}
                    fontSize="9"
                    style={{ transition: `x ${T}` }}
                  >
                    {r.hours} h
                  </text>
                  {r.who && (
                    <Fade show={showWaste}>
                      <text x={BAR_X + counted * PX_PER_HOUR + 6} y={r.y - 39} fontSize="8.5" fill="#d6452f">
                        not counted
                      </text>
                    </Fade>
                  )}
                </g>
              );
            })}

            <defs>
              <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="6" height="6" fill="#fff" />
                <line x1="0" y1="0" x2="0" y2="6" stroke="#d6452f" strokeWidth="2" />
              </pattern>
            </defs>

            {/* the usual time: the yardstick buyers use */}
            <Fade show={s >= 2}>
              <line x1={lineX} y1="14" x2={lineX} y2="186" stroke="#000" strokeWidth="1.5" strokeDasharray="4 3" style={{ transition: `all ${T}` }} />
              <text x={lineX} y="10" textAnchor="middle" fontSize="9" fontWeight="600" style={{ transition: `x ${T}` }}>
                usual time: {usual} h
              </text>
            </Fade>

            {/* the machine loom arrives */}
            <Fade show={s >= 3}>
              <g transform="translate(300 150)">
                <rect x="-26" y="-22" width="52" height="34" fill="#fff" stroke="#000" strokeWidth="1.2" />
                <circle cx="-12" cy="-5" r="8" fill="none" stroke="#000" strokeWidth="1.2" className="spin-gear" />
                <circle cx="10" cy="-5" r="6" fill="none" stroke="#000" strokeWidth="1.2" className="spin-gear" />
                <text y="24" textAnchor="middle" fontSize="8.5">
                  machine loom
                </text>
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.3 · How money was born (the value-form, from swap to price)
 * ───────────────────────────────────────────────────────────── */
type Thing = "linen" | "coat" | "tea" | "coffee" | "corn";
const ICON: Record<Thing, React.ReactNode> = {
  linen: <Linen />,
  coat: <Coat />,
  tea: <Tea />,
  coffee: <Coffee />,
  corn: <Corn />,
};
const AMOUNT: Record<Thing, string> = {
  linen: "20 yards of linen",
  coat: "1 coat",
  tea: "10 lb of tea",
  coffee: "40 lb of coffee",
  corn: "1 sack of corn",
};

/** Where each thing sits at step k: [x, y, scale]; scale 0 means hidden. */
function layout(k: number, t: Thing): [number, number, number] {
  const i = OTHERS.indexOf(t);
  if (k === 0) return t === "linen" ? [110, 110, 1.2] : t === "coat" ? [250, 110, 1.2] : [250, 110, 0];
  if (k === 1) return t === "linen" ? [70, 115, 1.2] : [210, 30 + i * 56, 0.9];
  if (k === 2) return t === "linen" ? [290, 115, 1.4] : [130, 30 + i * 56, 0.9];
  return t === "linen" ? [130, 206, 0.8] : [130, 22 + i * 46, 0.8];
}
const OTHERS: Thing[] = ["coat", "tea", "coffee", "corn"];
const ALL: Thing[] = ["linen", ...OTHERS];

export function HowMoneyWasBorn() {
  return (
    <Player
      id="anim-1-3"
      title="1.3 · How money was born"
      steps={[
        { caption: "It starts with one simple swap: 20 yards of linen for 1 coat." },
        { caption: "Then Leo finds his linen can be swapped for lots of things: a coat, some tea, some coffee, a sack of corn." },
        { caption: "Now turn it around. Everyone starts measuring everything against one thing. Here, that thing is linen." },
        {
          caption: "Over a long time, people settle on one special thing for measuring: gold. Now every swap goes through gold, and how much gold something is worth is its price. That is money.",
          ms: 5200,
        },
      ]}
      viewBox="0 0 360 230"
    >
      {(s) => (
        <>
          {/* spokes: one set per step, so they fade instead of stretching */}
          {[1, 2, 3].map((k) => (
            <Fade key={k} show={s === k} delay={450}>
              {ALL.filter((t) => k === 3 || t !== "linen").map((t) => {
                const [x, y] = layout(k, t);
                return k === 1 ? (
                  <line key={t} x1={95} y1={115} x2={x - 25} y2={y} stroke="#000" strokeOpacity=".35" />
                ) : (
                  <line key={t} x1={x + 25} y1={y} x2={262} y2={115} stroke="#000" strokeOpacity=".35" />
                );
              })}
            </Fade>
          ))}

          {ALL.map((t) => {
            const [x, y, sc] = layout(s, t);
            const side = s === 1 && t !== "linen" ? "right" : s >= 2 && !(s === 2 && t === "linen") ? "left" : "below";
            return (
              <Place key={t} x={x} y={y} scale={sc || 0.5} show={sc > 0}>
                {ICON[t]}
                <text
                  x={side === "right" ? 30 : side === "left" ? -30 : 0}
                  y={side === "below" ? 32 : 4}
                  textAnchor={side === "right" ? "start" : side === "left" ? "end" : "middle"}
                  fontSize="10"
                  style={{ transition: "all 300ms" }}
                >
                  {AMOUNT[t]}
                </text>
              </Place>
            );
          })}

          <Fade show={s === 0}>
            <text x="180" y="117" textAnchor="middle" fontSize="22">
              =
            </text>
          </Fade>

          {/* gold takes over the middle */}
          <Place x={290} y={115} scale={1.6} show={s === 3} delay={300}>
            <Gold label="2 oz" />
          </Place>
          <Fade show={s === 3} delay={700}>
            <text x="290" y="160" textAnchor="middle" fontSize="10" fontWeight="600">
              each = 2 ounces of gold
            </text>
            <text x="290" y="174" textAnchor="middle" fontSize="9">
              that is its price
            </text>
          </Fade>

          {/* Marx's own names for the four stages */}
          <text x="350" y="224" textAnchor="end" fontSize="9" fillOpacity=".5">
            {["simple form", "expanded form", "general form", "money form"][s]}
          </text>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.4 · What the price tag hides (the fetishism of commodities)
 * ───────────────────────────────────────────────────────────── */
export function WhatThePriceTagHides() {
  return (
    <Player
      id="anim-1-4"
      title="1.4 · What the price tag hides"
      steps={[
        { caption: "In Mia's shop window, a loaf of bread sits with a price tag: 1 coin." },
        { caption: "Sam says: \"Bread costs 1 coin. That's just what bread is.\" It looks as if the price lives inside the bread, like magic." },
        { caption: "Pull back the curtain. Behind the loaf are people: Grandpa Ned grew the wheat, and Mia got up at 4 in the morning to bake.", ms: 4200 },
        {
          caption: "So when bread swaps for linen or coats, really people's work is being swapped. We only see things trading with things. Marx calls this the fetishism of commodities.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the people behind the loaf (behind the curtain) */}
          <Fade show={s >= 2}>
            <Figure who="ned" x={52} y={150} scale={0.85} />
            <Place x={88} y={128} scale={0.9}>
              <Corn />
            </Place>
            <Figure who="mia" x={308} y={150} scale={0.85} />
            <g transform="translate(272 128)">
              <rect x="-14" y="-12" width="28" height="22" fill="#333" />
              <path d="M-8,4 q8,-14 16,0" fill="#ff8a3d" className="flicker" />
            </g>
            <g transform="translate(330 36)">
              <path d="M0,-10 a10,10 0 1,0 8,16 a8,8 0 1,1 -8,-16" fill="#e8d36a" stroke="#000" strokeWidth=".8" />
              <text x="-16" y="22" fontSize="8.5">
                4 a.m.
              </text>
            </g>
            <path d="M100,120 C130,110 150,108 160,104" stroke={CAST.ned.color} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
            <path d="M260,120 C230,110 210,108 200,104" stroke={CAST.mia.color} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          </Fade>

          {/* curtain over the background, slides off at step 2 */}
          <rect
            x="0"
            y="0"
            width="360"
            height="196"
            fill="#d9d9d9"
            style={{ transform: `translateY(${s >= 2 ? -200 : 0}px)`, transition: `transform 900ms cubic-bezier(.6,0,.2,1)` }}
          />

          {/* the shop window and the loaf */}
          <rect x="130" y="56" width="100" height="80" fill="#fff" stroke="#000" strokeWidth="1.5" />
          <text x="180" y="50" textAnchor="middle" fontSize="9">
            Mia&apos;s Bakery
          </text>
          <Place x={180} y={104} scale={1.2}>
            <Loaf />
          </Place>
          <Place x={206} y={78}>
            <Tag text="1 coin" />
          </Place>

          {/* magic sparkle: the price seems to come from the bread */}
          <Fade show={s === 1}>
            {[[148, 70], [214, 120], [160, 128], [222, 64]].map(([x, y], i) => (
              <path
                key={i}
                d={`M${x},${y - 5} L${x + 1.5},${y - 1.5} L${x + 5},${y} L${x + 1.5},${y + 1.5} L${x},${y + 5} L${x - 1.5},${y + 1.5} L${x - 5},${y} L${x - 1.5},${y - 1.5} Z`}
                fill="#e6b800"
                className="twinkle"
                style={{ animationDelay: `${i * 250}ms` }}
              />
            ))}
          </Fade>

          {/* Sam, the shopper */}
          <Figure who="sam" x={180} y={196} scale={0.75} mood={s === 1 ? "wow" : "happy"} style={{ opacity: s >= 2 ? 0 : 1, transition: "opacity 500ms" }} />
          <Fade show={s === 1}>
            <g transform="translate(196 150)">
              <Bubble w={120} lines={["Bread costs 1 coin.", "That's just what bread is!"]} />
            </g>
          </Fade>

          {/* work swapping with work */}
          <Fade show={s >= 3} delay={300}>
            <Place x={60} y={196} scale={0.8}>
              <Linen />
            </Place>
            <Place x={300} y={196} scale={0.6}>
              <Coat />
            </Place>
            <path d="M80,190 C120,170 150,160 170,140" stroke="#000" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
            <path d="M285,190 C250,170 215,160 192,140" stroke="#000" strokeWidth="1" fill="none" markerEnd="url(#arr)" />
            <text x="180" y="196" textAnchor="middle" fontSize="10" fontWeight="600">
              work swaps for work
            </text>
          </Fade>
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}
