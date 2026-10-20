"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade, IOU, Place, Tag } from "@/components/anim/Things";
import { Bar, TONE, Yarn } from "@/components/anim/Workshop";

/** An open ledger with lines of sums. */
const Ledger = () => (
  <g>
    <path d="M-20,-12 L0,-9 L20,-12 L20,12 L0,15 L-20,12 Z" fill="#fff" stroke="#000" strokeWidth="1.1" />
    <line x1="0" y1="-9" x2="0" y2="15" stroke="#000" strokeWidth=".8" />
    {[-5, 0, 5].map((y) => (
      <g key={y}>
        <line x1="-16" y1={y} x2="-4" y2={y + 0.5} stroke="#000" strokeOpacity=".45" />
        <line x1="4" y1={y + 0.5} x2="16" y2={y} stroke="#000" strokeOpacity=".45" />
      </g>
    ))}
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 6.1 · Busy, but not making value
 * Marx: book-keeping, buying and selling are necessary but create no value;
 * such costs are faux frais, paid out of surplus-value. Workshop numbers
 * from CONTINUITY.md; Pim's 1-coin wage is made up.
 * ───────────────────────────────────────────────────────────── */
const U = 8.5;

export function BusyButNotMaking() {
  return (
    <Player
      id="anim-v2-6-1"
      title="6.1 · Busy, but not making value"
      steps={[
        { caption: "Sam's 12-hour day makes yarn worth 30 coins: 24 for the cotton and spindle wear, 3 for his wage, 3 of surplus-value." },
        { caption: "Mr. Moneybags hires Clerk Pim to keep the books: what was bought, what was sold, who owes what. Pim works hard all day, with pens, ink and a desk." },
        { caption: "But the yarn is still worth 30. Pages of sums don't spin any cotton. Pim's work is needed, yet it adds no new value to the yarn." },
        { caption: "So Pim's pay has to come out of the surplus-value. If Pim earns 1 coin, Mr. Moneybags keeps only 2. (Pim's coin is a made-up number.)" },
        {
          caption: "Marx calls these costs faux frais, French for 'false costs': necessary for buying, selling and counting, but a deduction from surplus-value. Bookkeeping grows more necessary the bigger production gets.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="sam" x={36} y={92} scale={0.7} />
          <text x="66" y="40" fontSize="10" fontWeight="600">
            a day of yarn
          </text>
          <Bar
            x={66}
            y={48}
            unit={U}
            segs={[
              { n: 24, color: TONE.cotton, label: "24 cotton, spindle" },
              { n: 3, color: TONE.wage, label: "3" },
              { n: s >= 3 ? 2 : 3, color: TONE.surplus, label: s >= 3 ? "2" : "3" },
              { n: 1, color: "#9a9a9a", label: "1", show: s >= 3 },
            ]}
          />
          <text x={66 + 30 * U + 6} y="61" fontSize="10" fontWeight="600">
            30
          </text>
          <Fade show={s >= 3}>
            <text x={66 + 28.5 * U} y="82" textAnchor="middle" fontSize="8" fill="#555">
              Pim&apos;s pay
            </text>
          </Fade>

          {/* Pim at his desk */}
          <Fade show={s >= 1}>
            <Figure name="Clerk Pim" x={110} y={200} scale={0.75} mood={s >= 2 ? "sleepy" : "happy"} />
            <rect x="132" y="160" width="86" height="6" fill="#8a5a2b" />
            <line x1="140" y1="166" x2="140" y2="200" stroke="#8a5a2b" strokeWidth="3" />
            <line x1="210" y1="166" x2="210" y2="200" stroke="#8a5a2b" strokeWidth="3" />
            <g transform="translate(172 146)">
              <Ledger />
            </g>
          </Fade>
          <Fade show={s === 2}>
            <text x="272" y="140" textAnchor="middle" fontSize="20" fontWeight="300">
              + 0
            </text>
            <text x="272" y="156" textAnchor="middle" fontSize="8.5">
              new value from the books
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="236" y="120" width="116" height="52" fill="#000" />
            <text x="294" y="140" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="600">
              faux frais
            </text>
            <text x="294" y="156" textAnchor="middle" fontSize="8.5" fill="#fff" fillOpacity=".8">
              needed, but no value
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6.2 · Fresh yarn, old yarn
 * Marx: a normal stock is a condition of circulation and its keeping-costs
 * enter the value "to a certain extent"; stock piled up because it cannot
 * be sold is a loss, and the buyer would "laugh in his face".
 * ───────────────────────────────────────────────────────────── */
export function FreshYarnOldYarn() {
  const pile = (n: number) => Array.from({ length: n }, (_, i) => ({ x: 70 + (i % 6) * 22, y: 150 - Math.floor(i / 6) * 16 }));
  return (
    <Player
      id="anim-v2-6-2"
      title="6.2 · Fresh yarn, old yarn"
      steps={[
        { caption: "A shop needs some yarn on the shelf, so that weavers find it when they come in. Marx calls this a normal stock: without it, buying and selling could not flow." },
        { caption: "Keeping that stock dry and safe takes a roof and some work. Marx says these costs can enter the value of the yarn, up to a point." },
        { caption: "But one year nobody buys. Mr. Moneybags' yarn piles up in the store for six months, getting dusty." },
        {
          caption: "He tells a buyer: “Storing this cost me extra, so pay more!” Marx imagines the buyer laughing in his face: “Too bad for you! Next door is yarn made the day before yesterday.”",
          ms: 5600,
        },
        { caption: "So the costs of goods that pile up because they will not sell add no value. They are simply losses." },
      ]}
    >
      {(s) => {
        const n = s >= 2 ? 18 : 4;
        return (
          <>
            {/* the store */}
            <path d="M40,96 L127,62 L214,96" fill="#fff" stroke="#000" strokeWidth="1.2" />
            <rect x="48" y="96" width="158" height="78" fill="#fff" stroke="#000" strokeWidth="1.2" />
            <text x="127" y="88" textAnchor="middle" fontSize="9">
              the store
            </text>
            {pile(18).map((p, i) => (
              <Place key={i} x={p.x} y={p.y} scale={0.8} show={i < n} delay={i * 40}>
                <g style={{ opacity: s >= 2 && i < n ? 0.75 : 1, filter: s >= 2 ? "sepia(.6)" : "none", transition: "opacity 500ms" }}>
                  <Yarn />
                </g>
              </Place>
            ))}
            <Fade show={s === 1}>
              <Figure name="storeman" x={230} y={174} scale={0.6} />
              <g transform="translate(286 118)">
                <Tag text="+ a bit" />
              </g>
              <text x="286" y="138" textAnchor="middle" fontSize="8" fillOpacity=".7">
                normal keeping costs
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="127" y="196" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#a0522d">
                six months unsold
              </text>
            </Fade>

            {/* the exchange */}
            <Fade show={s >= 3}>
              <Figure who="moneybags" x={240} y={200} scale={0.7} mood={s >= 3 ? "sad" : "happy"} />
              <Figure name="buyer" x={322} y={200} scale={0.7} mood="wow" />
              <g transform="translate(216 140)">
                <Bubble w={84} lines={["Storing it cost", "me! Pay more!"]} />
              </g>
            </Fade>
            <Fade show={s >= 3} delay={1600}>
              <g transform="translate(262 92)">
                <Bubble w={94} lines={["Too bad for you!", "Next door is fresh."]} />
              </g>
            </Fade>
            <Fade show={s === 4}>
              <rect x="40" y="200" width="160" height="20" fill="#000" />
              <text x="120" y="214" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
                unsold pile: a loss, not value
              </text>
            </Fade>
            <Fade show={s === 0}>
              <text x="127" y="196" textAnchor="middle" fontSize="9.5" fontWeight="600">
                a normal stock
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6.3 · The carter adds value
 * Marx: transport is "a continuation of a process of production within the
 * process of circulation"; it adds value by transferring the wear of the
 * means of transport and by the labour performed. Where only the title of
 * ownership changes hands, nothing moves and no value is added. The value
 * added rises with distance and falls as transport becomes more productive.
 * The 2 coins of transport value are made up.
 * ───────────────────────────────────────────────────────────── */
export function TheCarter() {
  return (
    <Player
      id="anim-v2-6-3"
      title="6.3 · The carter adds value"
      viewBox="0 0 360 230"
      steps={[
        { caption: "The yarn is in Tiny Town, worth 30 coins. But the weavers who need it live in the city, far down the road. Yarn nobody can reach is no use to anyone." },
        { caption: "The carter loads it up and drives. His cart wears down a little, and his day of work is real work, just like spinning." },
        {
          caption: "In the city the yarn is worth 32. Marx says transport is production carried on inside circulation: it adds value, because a thing is only useful where it gets used. (The 2 coins are made up.)",
          ms: 5400,
        },
        { caption: "Compare two traders who sell the same store of yarn back and forth. The yarn never moves, only the paper saying who owns it. That adds no value at all." },
        {
          caption: "A railway carries far more for far less work, so it adds less value per mile. Marx: the value transport adds grows with the distance, and shrinks as transport gets more productive.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const x = s === 0 ? 96 : s === 1 ? 184 : 288;
        return (
          <>
            {/* the road and the two ends */}
            <line x1="40" y1="120" x2="320" y2="120" stroke="#000" strokeOpacity=".25" strokeWidth="6" />
            <g transform="translate(40 120)">
              <rect x="-24" y="-30" width="30" height="24" fill="#fff" stroke="#000" />
              <text x="-9" y="10" textAnchor="middle" fontSize="8">
                Tiny Town
              </text>
            </g>
            <g transform="translate(322 120)">
              <rect x="-2" y="-44" width="14" height="38" fill="#fff" stroke="#000" />
              <rect x="12" y="-32" width="14" height="26" fill="#fff" stroke="#000" />
              <text x="12" y="10" textAnchor="middle" fontSize="8">
                the city
              </text>
            </g>

            {/* cart with yarn, driven by the carter */}
            <g style={{ opacity: s <= 2 ? 1 : 0, transition: "opacity 500ms" }}>
              <g style={{ transform: `translate(${x}px, 104px)`, transition: "transform 1400ms cubic-bezier(.4,0,.2,1)" }}>
                <rect x="-22" y="-14" width="44" height="16" fill="#c8a06a" stroke="#000" />
                <circle cx="-12" cy="5" r="6" fill="#fff" stroke="#000" strokeWidth="1.5" />
                <circle cx="12" cy="5" r="6" fill="#fff" stroke="#000" strokeWidth="1.5" />
                <g transform="translate(-6 -22) scale(.7)">
                  <Yarn />
                </g>
                <g transform="translate(10 -22) scale(.7)">
                  <Yarn />
                </g>
              </g>
              <Figure name="carter" x={x - 32} y={118} scale={0.55} style={{ transition: "transform 1400ms cubic-bezier(.4,0,.2,1)" }} />
            </g>

            {/* the yarn's value */}
            <text x="40" y="158" fontSize="9.5" fontWeight="600">
              value of the yarn
            </text>
            <Bar
              x={40}
              y={166}
              unit={8}
              segs={[
                { n: 30, color: TONE.cotton, label: "30 made in the workshop" },
                { n: 0.5, color: "#a9a9a9", show: s >= 2 && s !== 3 },
                { n: 1.5, color: TONE.wage, show: s >= 2 && s !== 3 },
              ]}
            />
            <Fade show={s === 2 || s === 4}>
              <text x={40 + 32 * 8 + 6} y="179" fontSize="10" fontWeight="600">
                32
              </text>
              <text x={40 + 30 * 8} y="198" fontSize="8" textAnchor="middle" fillOpacity=".7">
                cart wear + carter&apos;s work
              </text>
            </Fade>

            {/* the paper trade */}
            <Fade show={s === 3}>
              <Figure name="trader" x={130} y={98} scale={0.6} />
              <Figure name="trader" x={230} y={98} scale={0.6} />
              <g transform="translate(180 54)">
                <IOU text="title" />
              </g>
              <path d="M150,58 Q180,36 210,58" fill="none" stroke="#000" strokeOpacity=".4" strokeDasharray="3 3" />
              <path d="M210,70 Q180,92 150,70" fill="none" stroke="#000" strokeOpacity=".4" strokeDasharray="3 3" />
              <text x="180" y="212" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#d6452f">
                only the title moves: + 0
              </text>
            </Fade>

            {/* the railway */}
            <Fade show={s === 4}>
              <line x1="40" y1="84" x2="320" y2="84" stroke="#000" strokeWidth="3" strokeDasharray="12 5" />
              <g transform="translate(210 70)">
                <rect x="-26" y="-12" width="52" height="16" fill="#222" />
                <rect x="20" y="-22" width="8" height="10" fill="#222" />
                <circle cx="-14" cy="6" r="5" fill="#fff" stroke="#000" />
                <circle cx="14" cy="6" r="5" fill="#fff" stroke="#000" />
              </g>
              <text x="210" y="40" textAnchor="middle" fontSize="8.5" fontWeight="600">
                railway: less work per mile
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
