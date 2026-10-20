"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade, Place } from "@/components/anim/Things";
import { Bank, Bill, Share } from "./ch25-animations";

const GOLD = "#e6b800";
const RED = "#d6452f";
const GREEN = "#2a9d5b";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A plain workshop shed with a label, centred on its base. */
function Shed({ label, w = 70 }: { label: string; w?: number }) {
  return (
    <g>
      <path d={`M${-w / 2},0 V-34 l${w / 6},-12 v12 l${w / 6},-12 v12 l${w / 6},-12 v12 H${w / 2} V0 Z`} fill="#fff" stroke="#000" strokeWidth="1.2" />
      <text y="12" textAnchor="middle" fontSize="8">
        {label}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 27.1 · Three jobs credit does
 * Marx's list: I. equalising the rate of profit; II. reducing the costs of
 * circulation (less money, paper for gold, faster phases); and the other
 * side: buying and selling kept apart, "a basis for speculation".
 * ───────────────────────────────────────────────────────────── */
export function ThreeJobsCreditDoes() {
  return (
    <Player
      id="anim-v3-27-1"
      title="27.1 · Three jobs credit does"
      steps={[
        { caption: "Job one: moving capital. Hat-making is earning more than spinning this year, so Bea lends to the hat-makers. Spare money flows to wherever profit is higher, and profits even out. (The rates are made up.)" },
        { caption: "Job two: saving money itself. Bills and cheques cancel each other out at the bank, so the town needs far fewer gold coins to do the same trade." },
        { caption: "Job three: speed. With credit, Mr. Moneybags can buy cotton before his yarn is sold. His workshop turns faster and makes more in a year." },
        {
          caption: "But there is a catch. Credit lets buying and selling drift further apart. People buy now hoping to sell dear later. Marx says this is the ground speculation grows on.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(180 92)">
            <Bank w={76} />
          </g>
          <Figure who="bea" x={180} y={150} scale={0.6} label={false} />

          {/* job one: capital flows to higher profit */}
          <Fade show={s === 0}>
            <g transform="translate(60 200)">
              <Shed label="spinning: 8%" />
            </g>
            <g transform="translate(300 200)">
              <Shed label="hats: 14%" />
            </g>
            {[0, 1, 2].map((i) => (
              <g key={i} className="v3c27-flow" style={{ animationDelay: `${i * 500}ms` }}>
                <Coin r={6} />
              </g>
            ))}
            <text x="180" y="178" textAnchor="middle" fontSize="8.5">
              spare money goes where profit is higher
            </text>
          </Fade>

          {/* job two: fewer coins */}
          <Fade show={s === 1}>
            {Array.from({ length: 10 }, (_, i) => (
              <g key={i} transform={`translate(${40 + i * 13} 188)`} style={{ opacity: i < 3 ? 1 : 0.15 }}>
                <Coin r={6} />
              </g>
            ))}
            <text x="98" y="210" textAnchor="middle" fontSize="8.5">
              coins needed: far fewer
            </text>
            <g transform="translate(250 184)">
              <Bill amount="30" due="to Tom" />
            </g>
            <g transform="translate(320 184)">
              <Bill amount="30" due="from Tom" />
            </g>
            <text x="285" y="214" textAnchor="middle" fontSize="8.5">
              bills cancel out
            </text>
          </Fade>

          {/* job three: faster turns */}
          <Fade show={s >= 2}>
            <g transform="translate(180 186)">
              <circle r="22" fill="none" stroke="#000" strokeWidth="1.5" strokeDasharray="6 4" className={s === 2 ? "v3c27-spin" : ""} />
              <text y="3" textAnchor="middle" fontSize="8">
                the circuit
              </text>
            </g>
            <text x="212" y="190" fontSize="8.5" fill={GREEN}>
              {s === 2 ? "turns faster" : ""}
            </text>
          </Fade>
          <Fade show={s === 3}>
            <Figure name="speculator" x={300} y={204} scale={0.7} />
            <g transform="translate(300 128)">
              <rect x="-50" y="-16" width="100" height="30" fill="#fff" stroke="#000" />
              <text y="-3" textAnchor="middle" fontSize="8.5">
                buy now on credit,
              </text>
              <text y="9" textAnchor="middle" fontSize="8.5">
                sell dear later?
              </text>
            </g>
            <text x="70" y="140" textAnchor="middle" fontSize="9" fill={RED}>
              buying and selling
            </text>
            <text x="70" y="153" textAnchor="middle" fontSize="9" fill={RED}>
              drift apart
            </text>
          </Fade>

          <style>{`
            @keyframes v3c27-flow { 0% { transform: translate(60px, 150px); opacity: 0 } 15% { opacity: 1 } 50% { transform: translate(180px, 110px) } 85% { opacity: 1 } 100% { transform: translate(300px, 150px); opacity: 0 } }
            .v3c27-flow { animation: v3c27-flow 2.2s ease-in-out infinite; }
            @keyframes v3c27-spin { to { transform: rotate(360deg) } }
            .v3c27-spin { transform-box: fill-box; transform-origin: center; animation: v3c27-spin 1.2s linear infinite; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 27.2 · Owners who don't run it, a manager who doesn't own it
 * Stock companies: "the abolition of capital as private property within the
 * framework of capitalist production itself". Engels' insert: the United
 * Alkali Trust (30+ plants, £5m fixed + £1m floating = £6m).
 * ───────────────────────────────────────────────────────────── */
const OWNERS = [
  { who: "mia" as const, x: 40 },
  { who: "tom" as const, x: 90 },
  { who: "bea" as const, x: 140 },
];

export function OwnersAndManagers() {
  return (
    <Player
      id="anim-v3-27-2"
      title="27.2 · Owners who don't run it"
      steps={[
        { caption: "A railway costs far more than any one boss could ever save. So a company is formed, and lots of people each buy a piece of it, called a share." },
        { caption: "Mia, Tom and Bea are now owners. But they never set foot in the railway. They just collect their share of the profit each year, called a dividend." },
        { caption: "The railway is run by a hired manager, paid a salary like a skilled worker. He runs it, but he doesn't own it." },
        { caption: "Marx is amazed. The owners do no work at all, and the work is done by people who own nothing. He calls this the abolition of capital as private property, inside capitalism itself." },
        {
          caption: "Engels later added a real case: in Britain, more than thirty chemical works were merged into one giant company worth about 6 million pounds. Many owners, one management.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the railway */}
          <line x1="190" y1="120" x2="350" y2="120" stroke="#000" strokeWidth="2" />
          {Array.from({ length: 9 }, (_, i) => (
            <line key={i} x1={194 + i * 18} y1="116" x2={194 + i * 18} y2="124" stroke="#000" strokeWidth="2" />
          ))}
          <g transform="translate(270 104)">
            <rect x="-26" y="-14" width="40" height="18" fill="#333" />
            <rect x="14" y="-22" width="12" height="26" fill="#333" />
            <circle cx="-16" cy="6" r="5" fill="#000" />
            <circle cx="16" cy="6" r="5" fill="#000" />
          </g>
          <text x="270" y="140" textAnchor="middle" fontSize="8.5">
            the railway company
          </text>

          {/* shares go out to owners */}
          {OWNERS.map((o, i) => (
            <g key={o.who}>
              <Figure who={o.who} x={o.x} y={208} scale={0.7} />
              <Place x={s >= 1 ? o.x : 270} y={s >= 1 ? 128 : 100} scale={0.7} show={s >= 0} delay={i * 150}>
                <Share />
              </Place>
            </g>
          ))}

          {/* dividends */}
          <Fade show={s >= 1 && s <= 3}>
            {OWNERS.map((o, i) => (
              <g key={o.who} className="v3c27-div" style={{ ["--x" as string]: `${o.x - 270}px`, animationDelay: `${i * 300}ms` }}>
                <g transform="translate(270 80)">
                  <Coin r={6} />
                </g>
              </g>
            ))}
            <text x="90" y="104" textAnchor="middle" fontSize="8.5" fill={GOLD}>
              dividends
            </text>
          </Fade>

          {/* the manager */}
          <Fade show={s >= 2}>
            <Figure name="manager" x={250} y={208} scale={0.8} />
            <g transform="translate(212 170)">
              <Coin r={6} />
            </g>
            <text x="212" y="156" textAnchor="middle" fontSize="8">
              salary
            </text>
            <Figure name="railway workers" x={318} y={208} scale={0.7} />
          </Fade>

          <Fade show={s === 3} delay={300}>
            <rect x="20" y="20" width="320" height="40" fill="#000" />
            <text x="180" y="36" textAnchor="middle" fontSize="9" fill="#fff">
              owners who don&apos;t work, workers who don&apos;t own
            </text>
            <text x="180" y="50" textAnchor="middle" fontSize="8.5" fill="#fff" fillOpacity=".7">
              capital stops being one person&apos;s private property
            </text>
          </Fade>

          <Fade show={s === 4}>
            <g transform="translate(90 50)">
              {Array.from({ length: 10 }, (_, i) => (
                <rect key={i} x={-60 + (i % 5) * 24} y={Math.floor(i / 5) * 16} width="18" height="12" fill="#fff" stroke="#000" />
              ))}
              <text x="0" y="44" textAnchor="middle" fontSize="8">
                30+ chemical works
              </text>
            </g>
            <path d="M160,62 L200,62" stroke="#000" strokeWidth="1.5" markerEnd="url(#v3c27-a)" />
            <g transform="translate(270 70)">
              <rect x="-50" y="-22" width="100" height="36" fill="#fff" stroke="#000" strokeWidth="2" />
              <text y="-6" textAnchor="middle" fontSize="8.5" fontWeight="700">
                one company
              </text>
              <text y="7" textAnchor="middle" fontSize="8">
                about £6 million
              </text>
            </g>
          </Fade>
          <defs>
            <marker id="v3c27-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
          <style>{`
            @keyframes v3c27-div { from { transform: none; opacity: 0 } 20% { opacity: 1 } to { transform: translate(var(--x), 50px); opacity: 0 } }
            .v3c27-div { animation: v3c27-div 2s ease-in infinite; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 27.3 · Sharks, and a new sprout
 * "the little fish are swallowed by the sharks"; co-operative factories as
 * "the first sprouts of the new"; both are "transitional forms"; credit's
 * spokesmen are a mixture of "swindler and prophet".
 * ───────────────────────────────────────────────────────────── */
export function SharksAndASprout() {
  return (
    <Player
      id="anim-v3-27-3"
      title="27.3 · Sharks, and a new sprout"
      steps={[
        { caption: "Once ownership is just paper, the papers can be bought and sold on the stock exchange. Prices jump about, and gambling on them starts to look like a way to get rich." },
        { caption: "Marx says that there the little fish are swallowed by the sharks. Every boom and every crash leaves the shares in fewer and bigger hands." },
        { caption: "Credit also lets bosses use other people's money. They push production far past what the market can take, and the crash comes faster and harder." },
        { caption: "But Marx sees something else growing. Sam and the other spinners pool their savings and run a workshop together. No boss: they are their own capitalist." },
        {
          caption: "Marx calls both the giant companies and the workers' co-operatives transitional forms, pointing beyond capitalism. Credit, he says, is part swindler and part prophet.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the stock exchange pond */}
          <g style={{ opacity: s <= 2 ? 1 : 0.15, transition: "opacity 500ms" }}>
            <rect x="20" y="40" width="200" height="110" rx="10" fill="#d8e8f5" />
            <text x="120" y="34" textAnchor="middle" fontSize="9" fontWeight="600">
              the stock exchange
            </text>
            {[0, 1, 2, 3, 4].map((i) => (
              <g
                key={i}
                style={{
                  transform: `translate(${50 + i * 34}px, ${80 + (i % 2) * 34}px)`,
                  opacity: s >= 1 && i > 0 ? 0 : 1,
                  transition: `opacity 500ms ease ${i * 200}ms`,
                }}
              >
                <path d="M-8,0 Q0,-6 8,0 Q0,6 -8,0 Z M8,0 L13,-4 L13,4 Z" fill={GOLD} stroke="#000" strokeWidth=".8" />
              </g>
            ))}
            <g style={{ transform: `translate(${s >= 1 ? 170 : 200}px, ${s >= 1 ? 96 : 130}px) scale(${s >= 1 ? 1.4 : 1})`, transition: `transform ${T}` }}>
              <path d="M-22,0 Q0,-12 22,0 Q0,12 -22,0 Z M22,0 L32,-9 L32,9 Z M-6,-9 L0,-18 L6,-9 Z" fill="#6b7a8a" stroke="#000" strokeWidth="1" />
              <circle cx="-12" cy="-2" r="1.6" fill="#fff" />
            </g>
          </g>

          {/* boom and crash */}
          <Fade show={s === 2}>
            <path d="M240,170 L270,130 L300,90 L320,60 L330,170" fill="none" stroke={RED} strokeWidth="3" />
            <text x="290" y="190" textAnchor="middle" fontSize="9" fill={RED}>
              pushed past the limit
            </text>
          </Fade>

          {/* the co-operative */}
          <Fade show={s >= 3}>
            <g transform="translate(250 150)">
              <Shed label="the spinners' co-operative" w={110} />
            </g>
            {[0, 1, 2].map((i) => (
              <Figure key={i} who={i === 1 ? "sam" : undefined} name={i === 1 ? undefined : "spinner"} x={212 + i * 38} y={204} scale={0.62} />
            ))}
            <path d="M250,62 C246,74 254,84 250,96" stroke={GREEN} strokeWidth="2" fill="none" />
            <path d="M250,78 C240,68 230,72 228,62 C240,60 248,66 250,78 Z" fill={GREEN} />
            <path d="M250,72 C260,62 270,66 272,56 C260,54 252,60 250,72 Z" fill={GREEN} />
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="20" y="168" width="170" height="44" fill="#000" />
            <text x="105" y="185" textAnchor="middle" fontSize="9" fill="#fff">
              both: transitional forms
            </text>
            <text x="105" y="200" textAnchor="middle" fontSize="8.5" fill="#fff" fillOpacity=".7">
              credit: &ldquo;swindler and prophet&rdquo;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
