"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade } from "@/components/anim/Things";

const GOLD = "#e6b800";
const GREEN = "#2a9d5b";
const T = "800ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 6.1 · Two thousand millions go round
 * Quesnay's numbers as Marx sets them out: gross product 5,000 millions
 * (livres); the farmers pay 2,000 millions rent; the landlords buy
 * 1,000 millions of food from the farmers and 1,000 millions of
 * manufactures from the "sterile class", which buys 1,000 millions of
 * food from the farmers. All 2,000 millions are back with the farmers.
 * ───────────────────────────────────────────────────────────── */
const SPOT = {
  farmer: { x: 70, y: 170, label: "farmers" },
  lord: { x: 180, y: 70, label: "landlords" },
  sterile: { x: 290, y: 170, label: "artisans" },
};
type Spot = keyof typeof SPOT;

/** Where each 1,000-million bag sits after each step. */
const BAGS: [Spot, Spot][] = [
  ["farmer", "farmer"],
  ["lord", "lord"],
  ["farmer", "lord"],
  ["farmer", "sterile"],
  ["farmer", "farmer"],
];

export function TwoThousandMillionsGoRound() {
  return (
    <Player
      id="anim-v4-6-1"
      title="6.1 · Two thousand millions go round"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Back to Quesnay's Tableau (see Volume II, Chapter 19). This time Marx follows the money step by step, with Quesnay's own numbers in millions of livres. The farmers start with 2,000 in money." },
        { caption: "Step one: the farmers pay all 2,000 to the landlords as rent." },
        { caption: "Step two: the landlords buy 1,000 of food from the farmers. Half the money is already back home." },
        { caption: "Step three: the landlords spend the other 1,000 on goods from the artisans, whom Quesnay called the sterile class." },
        {
          caption: "Step four: the artisans buy 1,000 of food from the farmers. Now all 2,000 are back with the farmers, ready to pay next year's rent.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the triangle of paths */}
          <path d="M90,160 L170,86 M190,86 L270,160 M110,182 L250,182" stroke="#000" strokeOpacity=".2" strokeWidth="2" strokeDasharray="4 4" />
          {(Object.keys(SPOT) as Spot[]).map((k) => (
            <g key={k}>
              <Figure name={SPOT[k].label} x={SPOT[k].x} y={SPOT[k].y - 4} scale={0.7} />
            </g>
          ))}

          {/* the two bags of 1,000 */}
          {BAGS[s].map((spot, i) => {
            const p = SPOT[spot];
            return (
              <g key={i} style={{ transform: spot === "lord" ? `translate(${p.x + (i ? 44 : -44)}px, ${p.y - 26}px)` : `translate(${p.x + (i ? 24 : -24)}px, ${p.y - 74}px)`, transition: `transform ${T}` }}>
                <circle r="15" fill={GOLD} stroke="#000" />
                <text y="4" textAnchor="middle" fontSize="8.5" fontWeight="700">
                  1,000
                </text>
              </g>
            );
          })}

          <text x="180" y="18" textAnchor="middle" fontSize="9" fillOpacity=".6">
            millions of livres, Quesnay&apos;s numbers
          </text>
          <Fade show={s === 4}>
            <text x="180" y="214" textAnchor="middle" fontSize="10" fontWeight="600" fill={GREEN}>
              all 2,000 back with the farmers
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6.2 · Tickets, or a round of work?
 * Marx: the money flowing back to the farmer from the landlord "does not
 * express reproduction": it is as if the farmer gave the landlord tokens
 * or tickets for his corn and then redeemed them. Contrast Marx's own
 * producer: £80 of materials + £20 of labour = £100 product, sold for
 * £100, which flows back because the goods were really used up and made
 * again. Taxes are another case of the ticket kind.
 * ───────────────────────────────────────────────────────────── */
export function TicketsOrARoundOfWork() {
  return (
    <Player
      id="anim-v4-6-2"
      title="6.2 · Tickets, or a round of work?"
      viewBox="0 0 360 230"
      steps={[
        { caption: "In both cases money comes home. But Marx says there are two quite different kinds of homecoming." },
        { caption: "The farmer and the landlord: the farmer pays rent in money, then the landlord spends it on the farmer's own corn. It is as if the farmer had handed out tickets for his corn, and then cashed them back." },
        { caption: "Nothing new is made in that round trip. If the rent were paid in corn, no money would move at all." },
        { caption: "Now a maker, in Marx's own numbers: he spends £100, £80 on materials and £20 to live on while he works. He makes something worth £100 and sells it." },
        {
          caption: "His £100 comes home too, but this time because things were really used up and made again. That return is a round of production. Marx says taxes work like the first kind: tickets, not production.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const ticket = s <= 2;
        return (
          <>
            <line x1="180" y1="20" x2="180" y2="210" stroke="#000" strokeOpacity=".12" />
            <text x="90" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fillOpacity={ticket ? 1 : 0.35}>
              tickets
            </text>
            <text x="270" y="22" textAnchor="middle" fontSize="10" fontWeight="600" fillOpacity={ticket ? 0.35 : 1}>
              a round of work
            </text>

            {/* left: farmer and landlord, tickets */}
            <g opacity={ticket ? 1 : 0.35} style={{ transition: "opacity 500ms" }}>
              <Figure name="farmer" x={46} y={190} scale={0.7} />
              <Figure name="landlord" x={140} y={190} scale={0.7} />
              <Fade show={s >= 1}>
                <path d="M64,120 Q93,92 122,120" fill="none" stroke="#000" markerEnd="url(#v4c06a)" />
                <path d="M122,140 Q93,168 64,140" fill="none" stroke="#000" markerEnd="url(#v4c06a)" />
                <g transform="translate(93 96)">
                  <rect x="-18" y="-8" width="36" height="16" fill="#fffbe6" stroke="#000" strokeWidth=".8" />
                  <text y="4" textAnchor="middle" fontSize="7.5">
                    ticket
                  </text>
                </g>
                <text x="93" y="170" textAnchor="middle" fontSize="8.5">
                  cashed in for corn
                </text>
              </Fade>
              <Fade show={s === 2}>
                <text x="93" y="60" textAnchor="middle" fontSize="9" fontWeight="600">
                  nothing new made
                </text>
              </Fade>
            </g>

            {/* right: the maker's £100 */}
            <g opacity={ticket ? 0.35 : 1} style={{ transition: "opacity 500ms" }}>
              <Figure name="maker" x={226} y={190} scale={0.7} />
              <Fade show={s >= 3}>
                <g transform="translate(300 64)">
                  <rect x="-40" y="-10" width="64" height="18" fill="#cfcfcf" stroke="#000" strokeWidth=".6" />
                  <text x="-8" y="3" textAnchor="middle" fontSize="8">
                    £80 materials
                  </text>
                  <rect x="24" y="-10" width="16" height="18" fill={GREEN} stroke="#000" strokeWidth=".6" />
                  <text x="32" y="22" textAnchor="middle" fontSize="8">
                    £20
                  </text>
                </g>
                <text x="290" y="110" textAnchor="middle" fontSize="9">
                  makes it: worth £100
                </text>
              </Fade>
              <Fade show={s === 4}>
                <g transform="translate(290 140)">
                  <Coins n={4} />
                </g>
                <text x="290" y="166" textAnchor="middle" fontSize="9" fontWeight="600" fill={GREEN}>
                  £100 home: made again
                </text>
              </Fade>
            </g>
            <defs>
              <marker id="v4c06a" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" />
              </marker>
            </defs>
          </>
        );
      }}
    </Player>
  );
}
