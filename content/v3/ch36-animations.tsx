"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";
const RED = "#d6452f";

/** A plough, the same old tool whoever owns it. */
function Plough() {
  return (
    <g>
      <path d="M-20,4 L14,4 L22,12" fill="none" stroke="#8a5a2b" strokeWidth="3" strokeLinecap="round" />
      <path d="M-20,4 L-28,-14" stroke="#8a5a2b" strokeWidth="3" strokeLinecap="round" />
      <path d="M14,4 L10,14 L22,14 Z" fill="#888" stroke="#000" strokeWidth=".8" />
    </g>
  );
}

/** A small castle for the lord. */
function Castle() {
  return (
    <g>
      <rect x="-22" y="-20" width="44" height="30" fill="#e8e8e8" stroke="#000" />
      {[-22, -11, 0, 11].map((x) => (
        <rect key={x} x={x} y="-26" width="6" height="6" fill="#e8e8e8" stroke="#000" />
      ))}
      <rect x="-5" y="-2" width="10" height="12" fill="#8a5a2b" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 36.1 · Two kinds of borrower
 * Marx: usury's two forms are lending to "extravagant members of the
 * upper classes, particularly landowners" and to small producers
 * (artisans, "but mainly the peasant"). Both are ruined, and money
 * wealth is concentrated.
 * ───────────────────────────────────────────────────────────── */
export function TwoKindsOfBorrower() {
  return (
    <Player
      id="anim-v3-36-1"
      title="36.1 · Two kinds of borrower"
      steps={[
        { caption: "Long before banks, there was the moneylender. Marx says he lent to two very different kinds of people." },
        { caption: "First, the grand lord in his castle, who spent more than his land brought in, on feasts, clothes and wars." },
        { caption: "Second, the small farmer and the craftsman, who borrowed after a bad harvest, a sick cow or a war." },
        { caption: "Both had to pay back far more than they borrowed. Year after year, the interest ate up what they had." },
        {
          caption: "In the end the lord lost his lands and the farmer lost his field and tools. Their wealth piled up as money in the lender's chest.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const ruined = s >= 4;
        return (
          <>
            {/* the lender in the middle */}
            <Figure name="Moneylender" x={180} y={200} scale={0.85} />
            <g transform="translate(180 128)">
              <rect x="-26" y="-12" width="52" height="24" fill="#8a5a2b" stroke="#000" />
              <rect x="-4" y="-6" width="8" height="10" fill={GOLD} stroke="#000" strokeWidth=".6" />
            </g>
            <rect x="160" y={ruined ? 70 : 104} width="40" height={ruined ? 46 : 12} fill={GOLD} style={{ transition: `all ${T}` }} />

            {/* the lord */}
            <g style={{ opacity: s >= 1 ? 1 : 0.2, transition: "opacity 500ms" }}>
              <g transform="translate(60 70)" style={{ opacity: ruined ? 0.3 : 1, transition: "opacity 500ms" }}>
                <Castle />
              </g>
              <Figure name="Lord" x={60} y={200} scale={0.8} mood={ruined ? "sad" : "happy"} />
              <text x="60" y="110" textAnchor="middle" fontSize="9">
                spends too much
              </text>
            </g>

            {/* the small farmer */}
            <g style={{ opacity: s >= 2 ? 1 : 0.2, transition: "opacity 500ms" }}>
              <g transform="translate(300 76)" style={{ opacity: ruined ? 0.3 : 1, transition: "opacity 500ms" }}>
                <Plough />
              </g>
              <Figure name="Small farmer" x={300} y={200} scale={0.8} mood={ruined ? "sad" : "happy"} />
              <text x="300" y="110" textAnchor="middle" fontSize="9">
                bad harvest
              </text>
            </g>

            {/* loans out, interest back */}
            <Fade show={s >= 3}>
              <path d="M150,150 L90,150" stroke="#000" strokeOpacity=".5" markerEnd="url(#v3c36-arr)" />
              <path d="M210,150 L270,150" stroke="#000" strokeOpacity=".5" markerEnd="url(#v3c36-arr)" />
              <text x="120" y="144" textAnchor="middle" fontSize="8.5">
                lend 10
              </text>
              <text x="240" y="144" textAnchor="middle" fontSize="8.5">
                lend 10
              </text>
              <text x="120" y="164" textAnchor="middle" fontSize="8.5" fill={RED}>
                owe 30
              </text>
              <text x="240" y="164" textAnchor="middle" fontSize="8.5" fill={RED}>
                owe 30
              </text>
            </Fade>
            <defs>
              <marker id="v3c36-arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" fillOpacity=".5" />
              </marker>
            </defs>
            <Fade show={s >= 3}>
              <text x="180" y="30" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                (example numbers)
              </text>
            </Fade>
            <Fade show={ruined} delay={300}>
              <text x="180" y="52" textAnchor="middle" fontSize="10" fontWeight="600">
                land and tools lost, money piled up
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 36.2 · A parasite, not a builder
 * "It does not alter the mode of production, but attaches itself
 * firmly to it like a parasite and makes it wretched." Interest can
 * swallow everything above the bare means of subsistence.
 * ───────────────────────────────────────────────────────────── */
export function AParasiteNotABuilder() {
  return (
    <Player
      id="anim-v3-36-2"
      title="36.2 · A parasite, not a builder"
      steps={[
        { caption: "A small farmer grows ten sacks of grain a year with his old plough. (Example numbers.)" },
        { caption: "He needs six sacks to feed his family and keep his seed. The other four are his extra." },
        { caption: "Now he owes the moneylender. The interest takes all four extra sacks, and sometimes more." },
        {
          caption: "But look: same plough, same field, same way of farming. Marx says usury changes nothing about how things are made. It clings on like a parasite and makes the farmer poorer and poorer.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const sacks = Array.from({ length: 10 }, (_, i) => i);
        return (
          <>
            <Figure name="Small farmer" x={44} y={200} scale={0.85} mood={s >= 2 ? "sad" : "happy"} />
            <g transform="translate(44 120)">
              <Plough />
            </g>
            <text x="44" y="146" textAnchor="middle" fontSize="8.5">
              same old plough
            </text>

            {sacks.map((i) => {
              const needed = i < 6;
              const taken = !needed && s >= 2;
              const x = taken ? 300 + ((i - 6) % 2) * 26 : 108 + (i % 5) * 34;
              const y = taken ? 120 + Math.floor((i - 6) / 2) * 30 : 70 + Math.floor(i / 5) * 40;
              return (
                <g key={i} style={{ transform: `translate(${x}px, ${y}px)`, transition: `transform ${T} ${i * 60}ms` }}>
                  <g>
                    <rect x="-12" y="-14" width="24" height="26" rx="5" fill={s >= 1 && !needed ? GOLD : "#d9c08a"} stroke="#000" strokeWidth=".8" />
                    <text y="4" textAnchor="middle" fontSize="7">
                      grain
                    </text>
                  </g>
                </g>
              );
            })}

            <Fade show={s >= 1}>
              <text x="176" y="146" textAnchor="middle" fontSize="9">
                6 to live on
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <Figure name="Moneylender" x={313} y={210} scale={0.7} />
              <text x="313" y="100" textAnchor="middle" fontSize="9" fill={RED} fontWeight="600">
                interest: all 4
              </text>
            </Fade>
            <Fade show={s === 3} delay={300}>
              <rect x="90" y="166" width="170" height="18" fill="#000" />
              <text x="175" y="179" textAnchor="middle" fontSize="9.5" fill="#fff">
                nothing about the farming changed
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 36.3 · From ten per cent to five
 * Middle Ages: the Church forbade lending at interest. England's legal
 * maximum (Gilbart, quoted by Marx): Henry VIII 10%, James I 8%,
 * Charles II 6%, Queen Anne 5%. Credit associations in Venice and Genoa
 * (12th to 14th centuries). "The credit system develops as a reaction
 * against usury": interest made to serve industrial capital.
 * ───────────────────────────────────────────────────────────── */
const CAPS = [
  { who: "Henry VIII", rate: 10 },
  { who: "James I", rate: 8 },
  { who: "Charles II", rate: 6 },
  { who: "Queen Anne", rate: 5 },
];

export function TenPerCentToFive() {
  return (
    <Player
      id="anim-v3-36-3"
      title="36.3 · From ten per cent to five"
      steps={[
        { caption: "In the Middle Ages, Marx notes, the Church forbade all lending at interest. Moneylenders charged even more, because the law gave them little protection." },
        { caption: "Later, English kings and queens capped interest instead. Under Henry VIII the most a lender could charge was 10 per cent." },
        { caption: "James I cut it to 8 per cent, Charles II to 6, and Queen Anne to 5." },
        { caption: "Meanwhile merchants in Venice and Genoa, and later others, set up banks of their own so they would not depend on old-style moneylenders." },
        {
          caption: "Marx's point: modern credit grew up as a reaction against usury. Its job was to make lending cheap enough to serve trade and industry, not to rule over them.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the Church's ban */}
          <Fade show={s === 0}>
            <g transform="translate(180 92)">
              <path d="M-30,30 L-30,-10 L0,-36 L30,-10 L30,30 Z" fill="#f1f1f1" stroke="#000" />
              <line x1="0" y1="-60" x2="0" y2="-36" stroke="#000" strokeWidth="2" />
              <line x1="-8" y1="-52" x2="8" y2="-52" stroke="#000" strokeWidth="2" />
              <text y="52" textAnchor="middle" fontSize="10" fontWeight="600">
                no interest allowed
              </text>
            </g>
          </Fade>

          {/* the falling legal maximum */}
          {CAPS.map((c, i) => {
            const on = s >= 1 && (i === 0 || s >= 2);
            const x = 50 + i * 80;
            const h = c.rate * 11;
            return (
              <g key={c.who} style={{ opacity: on && s < 3 ? 1 : 0, transition: "opacity 500ms" }}>
                <rect x={x - 18} y={170 - (on ? h : 0)} width="36" height={on ? h : 0} fill={GOLD} style={{ transition: `all ${T} ${i * 120}ms` }} />
                <text x={x} y={164 - h} textAnchor="middle" fontSize="12" fontWeight="700">
                  {c.rate}%
                </text>
                <text x={x} y="186" textAnchor="middle" fontSize="9">
                  {c.who}
                </text>
              </g>
            );
          })}
          <Fade show={s >= 1 && s < 3}>
            <text x="180" y="208" textAnchor="middle" fontSize="9.5" fillOpacity=".7">
              England&apos;s legal maximum rate of interest
            </text>
          </Fade>

          {/* merchant banks */}
          <Fade show={s >= 3}>
            {[
              { x: 110, name: "Venice" },
              { x: 250, name: "Genoa" },
            ].map((b) => (
              <g key={b.name} transform={`translate(${b.x} 64)`}>
                <path d="M-30,-14 L0,-32 L30,-14 Z" fill="#fff" stroke="#000" />
                <rect x="-26" y="-14" width="52" height="30" fill="#fff" stroke="#000" />
                <text y="6" textAnchor="middle" fontSize="9" fontWeight="600">
                  {b.name}
                </text>
                <g transform="translate(0 30)">
                  <Coins n={2} />
                </g>
              </g>
            ))}
          </Fade>
          <Fade show={s === 4} delay={300}>
            <rect x="60" y="120" width="240" height="20" fill="#000" />
            <text x="180" y="134" textAnchor="middle" fontSize="9.5" fill="#fff">
              credit grows up against usury
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
