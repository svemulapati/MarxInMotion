"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Coins, Fade, Jug, Loaf, Place } from "@/components/anim/Things";
import { Bar, Cotton, Spindle, TONE, Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const CAPITAL = "#b38f00";
const REVENUE = CAST.sam.color;

/* ─────────────────────────────────────────────────────────────
 * 18.1 · One workshop, or the whole town
 * Volume II so far followed one circle. Part Three widens the view:
 * every workshop's circuit is a fraction of the social capital, and
 * their circuits intertwine and need one another.
 * ───────────────────────────────────────────────────────────── */
const NODES = [
  { id: "forge", label: "the Forge", x: 78, y: 60 },
  { id: "mill", label: "the mill", x: 282, y: 60 },
  { id: "bakery", label: "Mia's bakery", x: 78, y: 166 },
  { id: "tailor", label: "Ava's tailoring", x: 282, y: 166 },
] as const;

/** A small circuit: a ring with an arrowhead, "M…M′" inside. */
function Ring({ r = 26, label = "M … M′" }: { r?: number; label?: string }) {
  return (
    <g>
      <circle r={r} fill="#fff" stroke="#000" strokeWidth="1.4" />
      <circle r={r - 7} fill="none" stroke="#000" strokeOpacity=".35" strokeDasharray="4 3" />
      <path d={`M${r - 7},-3 l4,6 l4,-6 Z`} fill="#000" fillOpacity=".5" />
      <text y="3" textAnchor="middle" fontSize={r > 40 ? 13 : 7.5} fontWeight="600">
        {label}
      </text>
    </g>
  );
}

function Flow({ d, color, show, delay = 0, dash }: { d: string; color: string; show: boolean; delay?: number; dash?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeDasharray={dash ? "5 4" : undefined}
      markerEnd={color === CAPITAL ? "url(#v2c18-cap)" : "url(#v2c18-rev)"}
      style={{ opacity: show ? 1 : 0, transition: `opacity 500ms ease ${show ? delay : 0}ms` }}
    />
  );
}

export function OneWorkshopOrTheTown() {
  return (
    <Player
      id="anim-v2-18-1"
      title="18.1 · One workshop, or the whole town"
      steps={[
        { caption: "So far Volume II has followed one circle: Mr. Moneybags' coins buy, the mill produces, the yarn is sold, and more coins come back." },
        { caption: "But Tiny Town has many workshops. The Forge, the mill, Mia's bakery and Ava's tailoring each run a circle of their own." },
        {
          caption: "And the circles need each other. The Forge sells machines to the mill and ovens to the bakery. The mill sells yarn to Ava. One workshop's selling is another's buying.",
          ms: 4600,
        },
        {
          caption: "Money also leaves the circles of capital. Sam spends his wage on bread and coats, and the bosses spend their surplus on dinners. Marx calls money spent like this revenue.",
          ms: 4600,
        },
        {
          caption: "Put every circle together and you get one great circle: the social capital. Each workshop is only a fraction of it, just as each boss is one member of a class.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <defs>
            <marker id="v2c18-cap" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={CAPITAL} />
            </marker>
            <marker id="v2c18-rev" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={REVENUE} />
            </marker>
          </defs>

          {/* the social capital: everything at once */}
          <ellipse
            cx="180"
            cy="114"
            rx="172"
            ry="104"
            fill="none"
            stroke="#000"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            style={{ opacity: s === 4 ? 1 : 0, transition: "opacity 600ms" }}
          />
          <Fade show={s === 4} delay={300}>
            <rect x="122" y="104" width="116" height="20" fill="#fff" stroke="#000" />
            <text x="180" y="118" textAnchor="middle" fontSize="10" fontWeight="700">
              the social capital
            </text>
          </Fade>

          {/* capital flows between workshops */}
          <Flow d="M108,60 L250,60" color={CAPITAL} show={s >= 2} />
          <Flow d="M78,90 L78,136" color={CAPITAL} show={s >= 2} delay={250} />
          <Flow d="M282,90 L282,136" color={CAPITAL} show={s >= 2} delay={500} />
          <Fade show={s >= 2} delay={300}>
            <text x="180" y="54" textAnchor="middle" fontSize="8.5" fill={CAPITAL}>
              machines
            </text>
            <text x="72" y="116" textAnchor="end" fontSize="8.5" fill={CAPITAL}>
              ovens
            </text>
            <text x="288" y="116" fontSize="8.5" fill={CAPITAL}>
              yarn
            </text>
          </Fade>

          {/* revenue: wages and surplus spent on things to consume */}
          <Flow d="M258,78 Q180,110 104,152" color={REVENUE} show={s === 3} dash />
          <Flow d="M102,78 Q180,112 256,150" color={REVENUE} show={s === 3} delay={250} dash />
          <Fade show={s === 3} delay={300}>
            <g transform="translate(180 132)">
              <rect x="-50" y="-11" width="100" height="22" fill="#fff" stroke={REVENUE} />
              <text y="-1" textAnchor="middle" fontSize="8" fill={REVENUE} fontWeight="600">
                wages and surplus
              </text>
              <text y="8" textAnchor="middle" fontSize="8" fill={REVENUE}>
                spent on bread, coats
              </text>
            </g>
          </Fade>

          {/* the other three workshops */}
          {NODES.filter((n) => n.id !== "mill").map((n, i) => (
            <Place key={n.id} x={n.x} y={n.y} show={s >= 1} delay={i * 150}>
              <Ring />
              <text y="40" textAnchor="middle" fontSize="9">
                {n.label}
              </text>
            </Place>
          ))}

          {/* Moneybags' circle: big on its own, then one node among many */}
          <Place x={s === 0 ? 180 : 282} y={s === 0 ? 112 : 60} scale={s === 0 ? 1 : 0.5}>
            <Ring r={52} label={"M–C…P…C′–M′"} />
            <text y={s === 0 ? 70 : 80} textAnchor="middle" fontSize={s === 0 ? 10 : 18} style={{ transition: `all ${T}` }}>
              {s === 0 ? "Mr. Moneybags' mill" : "the mill"}
            </text>
          </Place>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 18.2 · Replaced twice: in value and in kind
 * A day's yarn from the workshop (CONTINUITY.md): 20 lb, 30 coins,
 * c 24, v 3, s 3. The product must come back as the right coins AND
 * as the right things.
 * ───────────────────────────────────────────────────────────── */
export function ReplacedTwice() {
  const UNIT = 7;
  return (
    <Player
      id="anim-v2-18-2"
      title="18.2 · Replaced twice: in value and in kind"
      viewBox="0 0 360 230"
      steps={[
        { caption: "At the end of a day the mill has 20 lb of yarn worth 30 coins: 24 for cotton and machine wear, 3 for Sam's wage, and 3 of surplus-value." },
        { caption: "First it must be replaced in value. Sell the yarn, and 30 coins come back. That part is easy to picture." },
        {
          caption: "But the mill cannot spin with coins. The 24 coins must turn back into real cotton and real machine parts, things someone else must already have made.",
          ms: 4600,
        },
        {
          caption: "And Sam cannot eat yarn. His 3 coins must find bread and clothes on sale. Mr. Moneybags' 3 coins must find his dinner.",
          ms: 4400,
        },
        {
          caption: "So everything the town makes in a year must be replaced twice: in value, so the coins add up, and in kind, so the right things exist. How that can work is the puzzle of Part Three.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const barX = 75;
        return (
          <>
            {/* the day's yarn */}
            {Array.from({ length: 6 }, (_, i) => (
              <Place key={i} x={44 + (i % 2) * 30} y={40 + Math.floor(i / 2) * 22} scale={0.9}>
                <Yarn />
              </Place>
            ))}
            <text x="59" y="112" textAnchor="middle" fontSize="9">
              20 lb of yarn
            </text>

            <text x={barX + 105} y="22" textAnchor="middle" fontSize="10" fontWeight="600">
              a day&apos;s yarn: 30 coins
            </text>
            <Bar
              x={barX + 30}
              y={30}
              unit={UNIT}
              segs={[
                { n: 24, color: TONE.cotton, label: "c 24" },
                { n: 3, color: TONE.wage, label: "v" },
                { n: 3, color: TONE.surplus, label: "s" },
              ]}
            />

            {/* in value */}
            <Fade show={s >= 1}>
              <g transform={`translate(${barX + 135} 66)`}>
                <Coins n={5} />
                <text y="20" textAnchor="middle" fontSize="9">
                  30 coins back
                </text>
              </g>
            </Fade>

            {/* in kind: constant capital */}
            <Fade show={s >= 2}>
              <path d={`M${barX + 114},50 L${barX + 114},110 L150,140`} fill="none" stroke="#777" strokeDasharray="4 3" />
              <Place x={130} y={156} scale={0.85} show={s >= 2}>
                <Cotton />
              </Place>
              <Place x={168} y={156} scale={0.8} show={s >= 2} delay={150}>
                <Spindle />
              </Place>
              <text x="149" y="192" textAnchor="middle" fontSize="8.5">
                new cotton, machine parts
              </text>
            </Fade>

            {/* in kind: wage and surplus */}
            <Fade show={s >= 3}>
              <path d={`M${barX + 199},50 L${barX + 199},110 L250,140`} fill="none" stroke={TONE.wage} strokeDasharray="4 3" />
              <path d={`M${barX + 220},50 L${barX + 220},100 L318,140`} fill="none" stroke={TONE.surplus} strokeDasharray="4 3" />
              <Place x={238} y={156} scale={0.8} show={s >= 3}>
                <Loaf />
              </Place>
              <Place x={270} y={156} scale={0.55} show={s >= 3} delay={150}>
                <Coat />
              </Place>
              <text x="254" y="192" textAnchor="middle" fontSize="8.5" fill={TONE.wage}>
                Sam&apos;s bread, clothes
              </text>
              <Place x={322} y={156} scale={0.85} show={s >= 3} delay={300}>
                <Jug />
              </Place>
              <text x="322" y="192" textAnchor="middle" fontSize="8.5" fill={CAPITAL}>
                a dinner
              </text>
            </Fade>

            <Fade show={s === 4} delay={300}>
              <rect x="40" y="203" width="280" height="22" fill="#000" />
              <text x="180" y="218" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                in value: the coins add up · in kind: the right things exist
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 18.3 · The first push and the long wait
 * Money-capital as primus motor; long working periods need large money
 * advances, which credit and stock companies supply; Marx's aside that
 * under socialised production money-capital disappears (vouchers that
 * "are not money" and "do not circulate").
 * ───────────────────────────────────────────────────────────── */
export function FirstPushLongWait() {
  return (
    <Player
      id="anim-v2-18-3"
      title="18.3 · The first push and the long wait"
      steps={[
        { caption: "Every business starts as money. Marx calls money-capital the first push, using the Latin primus motor, that sets the wheel turning." },
        { caption: "And it has to push again and again: cotton, wages and repairs are bought over and over, so money must keep coming round." },
        {
          caption: "Some jobs take years before anything can be sold, like building a railway. All that time, coins go out and nothing comes back.",
          ms: 4400,
        },
        {
          caption: "No single boss has that much to wait with. Banks and companies that pool many people's money, like Bea's bank, break that barrier. Marx adds that they also bring disturbances to the money market.",
          ms: 5200,
        },
        {
          caption: "Marx makes one aside. If society planned production together, money-capital would disappear. Workers might get paper vouchers for their hours of work, which, he says, are not money and do not circulate.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the wheel of production */}
          <g transform="translate(110 100)" style={{ opacity: s <= 1 ? 1 : 0, transition: "opacity 500ms" }}>
            <g className={s === 1 ? "v2c18-spin" : s === 0 ? "v2c18-nudge" : ""}>
              <circle r="44" fill="none" stroke="#000" strokeWidth="3" />
              {Array.from({ length: 8 }, (_, i) => (
                <line key={i} x1="0" y1="0" x2="0" y2="-44" stroke="#000" strokeWidth="2" transform={`rotate(${i * 45})`} />
              ))}
              <circle r="6" fill="#000" />
            </g>
            <text y="64" textAnchor="middle" fontSize="9">
              production
            </text>
          </g>
          <Place x={s === 0 ? 40 : 52} y={100} show={s <= 1}>
            <Coins n={3} />
            <text y="-14" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={CAPITAL}>
              money-capital
            </text>
          </Place>
          <Fade show={s === 1}>
            {[0, 1, 2].map((i) => (
              <g key={i} className="v2c18-orbit" style={{ animationDelay: `${i * 700}ms` }}>
                <circle cx="110" cy="44" r="5" fill="#e6b800" stroke="#000" />
              </g>
            ))}
            <text x="250" y="80" fontSize="9.5">
              cotton, wages, repairs:
            </text>
            <text x="250" y="94" fontSize="9.5">
              bought again and again
            </text>
          </Fade>

          {/* the long job */}
          <Fade show={s >= 2 && s <= 3}>
            <text x="180" y="22" textAnchor="middle" fontSize="10" fontWeight="600">
              a railway: years of work before any fare is paid
            </text>
            {[1, 2, 3, 4].map((y, i) => (
              <g key={y}>
                <rect x={40 + i * 72} y="36" width="64" height="30" fill="#fff" stroke="#000" />
                <text x={72 + i * 72} y="55" textAnchor="middle" fontSize="9">
                  year {y}
                </text>
                <g transform={`translate(${72 + i * 72} 84)`}>
                  <g className="v2c18-drop" style={{ animationDelay: `${i * 400}ms` }}>
                    <Coins n={2} />
                  </g>
                </g>
              </g>
            ))}
            <text x="180" y="112" textAnchor="middle" fontSize="9.5" fill="#d6452f">
              coins out, nothing back yet
            </text>
          </Fade>

          {/* credit: many small purses into one */}
          <Fade show={s === 3} delay={300}>
            <Figure who="bea" x={180} y={206} scale={0.75} />
            {[60, 100, 260, 300].map((x, i) => (
              <g key={x}>
                <circle cx={x} cy={170} r="7" fill="#e6b800" stroke="#000" />
                <path d={`M${x},162 Q${(x + 180) / 2},${130 - i * 2} 180,140`} fill="none" stroke="#000" strokeOpacity=".35" strokeDasharray="3 3" />
              </g>
            ))}
            <text x="180" y="132" textAnchor="middle" fontSize="9" fontWeight="600">
              many savings, one big pot
            </text>
          </Fade>

          {/* Marx's aside: vouchers */}
          <Fade show={s === 4} delay={200}>
            <g transform="translate(130 110)">
              <rect x="-50" y="-30" width="100" height="60" fill="#fffbe6" stroke="#000" />
              <text y="-8" textAnchor="middle" fontSize="9" fillOpacity=".6">
                voucher
              </text>
              <text y="12" textAnchor="middle" fontSize="16" fontWeight="700">
                8 hours
              </text>
            </g>
            <g transform="translate(260 110)">
              <circle r="24" fill="#e6b800" stroke="#000" opacity=".5" />
              <path d="M-26,-26 L26,26" stroke="#d6452f" strokeWidth="4" />
              <text y="44" textAnchor="middle" fontSize="9">
                no money-capital
              </text>
            </g>
            <text x="130" y="160" textAnchor="middle" fontSize="9">
              not money; it does not circulate
            </text>
            <text x="180" y="200" textAnchor="middle" fontSize="9" fillOpacity=".6">
              Marx&apos;s aside, not a plan he spelled out here
            </text>
          </Fade>

          <style>{`
            @keyframes v2c18-spin { to { transform: rotate(360deg); } }
            @keyframes v2c18-nudge { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(25deg); } }
            .v2c18-spin { animation: v2c18-spin 2.4s linear infinite; }
            .v2c18-nudge { animation: v2c18-nudge 1.6s ease-in-out infinite; }
            @keyframes v2c18-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            .v2c18-orbit { transform-origin: 110px 100px; animation: v2c18-orbit 2.1s linear infinite; }
            @keyframes v2c18-drop { 0% { transform: translateY(-14px); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateY(10px); opacity: 0; } }
            .v2c18-drop { animation: v2c18-drop 1.6s ease-in infinite; }
          `}</style>
        </>
      )}
    </Player>
  );
}
