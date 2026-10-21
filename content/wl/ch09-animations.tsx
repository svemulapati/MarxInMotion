"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const SAM = CAST.sam.color;

/* ─────────────────────────────────────────────────────────────
 * 9.1 · March! March!
 * Marx: once a new means of production is general, the capitalist must
 * supply 10, 20, 100 times as much at the same price, and may need a
 * market for 1,000 times as much. The race never rests.
 * ───────────────────────────────────────────────────────────── */
const RACE = [
  { out: 1, label: "old way" },
  { out: 10, label: "10 times as much" },
  { out: 20, label: "20 times" },
  { out: 100, label: "100 times" },
  { out: 1000, label: "a market for 1,000 times?" },
];

export function MarchMarch() {
  return (
    <Player
      id="anim-wl-9-1"
      title="9.1 · March! March!"
      steps={[
        { caption: "Mr. Moneybags gets a new machine. For a while it gives him an edge." },
        { caption: "But competition makes everyone copy it. Now he must sell 10 times as much yarn for the same money." },
        { caption: "So he buys an even bigger machine, and his rivals do the same. 20 times as much." },
        { caption: "Then 100 times. Each machine costs more than the last, so he must sell even more just to pay for it." },
        {
          caption: "Marx says he may need a market for 1,000 times as much. A law shouts in his ear: “March! march!” It gives him no rest.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const r = RACE[s];
        const piles = Math.min(10, Math.max(1, Math.round(Math.log10(r.out) * 3) + 1));
        return (
          <>
            {/* the treadmill */}
            <defs>
              <clipPath id="wlc09-belt-clip">
                <rect x="30" y="150" width="300" height="14" rx="7" />
              </clipPath>
            </defs>
            <rect x="30" y="150" width="300" height="14" rx="7" fill="#d4d4d4" stroke="#000" />
            <g clipPath="url(#wlc09-belt-clip)">
              {Array.from({ length: 12 }, (_, i) => (
                <line key={i} x1={45 + i * 30} y1="150" x2={40 + i * 30} y2="164" stroke="#000" strokeOpacity=".4" className="wlc09-belt" />
              ))}
            </g>
            <Figure who="moneybags" x={180} y={150} scale={0.75} label={false} />

            {/* the growing pile of yarn */}
            {Array.from({ length: piles }, (_, i) => (
              <g key={i} transform={`translate(${60 + (i % 5) * 18} ${118 - Math.floor(i / 5) * 18}) scale(.7)`}>
                <Yarn />
              </g>
            ))}
            <text x="96" y="64" textAnchor="middle" fontSize="10" fontWeight="600">
              {r.label}
            </text>

            {/* the machine gets bigger */}
            <rect
              x={300 - 20 - s * 8}
              y={130 - 20 - s * 8}
              width={40 + s * 16}
              height={20 + s * 8}
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
              style={{ transition: `all ${T}` }}
            />
            <text x="300" y={124 - s * 4} textAnchor="middle" fontSize="8.5" style={{ transition: `y ${T}` }}>
              machine
            </text>

            <Fade show={s >= 4}>
              <text x="180" y="196" textAnchor="middle" fontSize="13" fontWeight="700">
                March! march!
              </text>
            </Fade>
            <style>{`
              @keyframes wlc09-run { from { transform: translateX(0) } to { transform: translateX(-30px) } }
              .wlc09-belt { animation: wlc09-run 1.2s linear infinite; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.2 · One does the work of five
 * Marx: division of labour lets one worker do the work of 5, 10 or 20,
 * so competition among workers grows; skill becomes worthless; the more
 * the worker works, the less wages he receives.
 * ───────────────────────────────────────────────────────────── */
export function OneDoesTheWorkOfFive() {
  return (
    <Player
      id="anim-wl-9-2"
      title="9.2 · One does the work of five"
      steps={[
        { caption: "Before, five spinners each did the whole job, from carding the cotton to winding the yarn." },
        { caption: "Now the job is split into tiny steps, and with a machine one worker can do the work of five. Marx says 5, 10, even 20." },
        { caption: "So four spinners are at the gate, all wanting Sam's job. Workers compete by offering to work for less, or to do more." },
        { caption: "The steps are so simple that anyone can learn them in a day. Sam's skill is now worth nothing, and the wage sinks to the cost of a quick learner." },
        {
          caption: "To keep his pay, Sam works longer and faster. But that only makes more workers spare. Marx: the more he works, the less wages he receives.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const working = s === 0 ? 5 : 1;
        const wage = s >= 3 ? 2 : 3;
        return (
          <>
            {Array.from({ length: 5 }, (_, i) => {
              const atGate = i > 0 && s >= 1;
              const x = atGate ? 250 + ((i - 1) % 2) * 34 : 50 + i * 44;
              const y = atGate ? 110 + Math.floor((i - 1) / 2) * 52 : 120;
              return (
                <Figure
                  key={i}
                  who={i === 0 ? "sam" : undefined}
                  name={i === 0 ? undefined : "spinner"}
                  x={x}
                  y={y}
                  scale={0.62}
                  label={i === 0}
                  mood={atGate ? "sad" : "happy"}
                />
              );
            })}
            <Fade show={s >= 1}>
              <rect x="30" y="140" width="120" height="30" fill="#fff" stroke="#000" />
              <text x="90" y="159" textAnchor="middle" fontSize="9">
                one worker + machine
              </text>
              <text x="267" y="46" textAnchor="middle" fontSize="9.5" fontWeight="600">
                at the gate
              </text>
            </Fade>
            <text x="90" y="40" textAnchor="middle" fontSize="9.5">
              working: {working}
            </text>

            <Fade show={s >= 2}>
              <g transform="translate(90 196)">
                <Coins n={wage} />
              </g>
              <text x="90" y="216" textAnchor="middle" fontSize="9" fill={SAM} fontWeight="600">
                Sam&apos;s wage: {wage} coins
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <text x="267" y="212" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#d6452f">
                more work, lower wages
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.3 · The forest of outstretched arms
 * Marx: small manufacturers and people living on interest are pushed down
 * into the working class, "the forest of outstretched arms, begging for
 * work, grows ever thicker"; and crises ("industrial earthquakes") become
 * more frequent and more violent.
 * ───────────────────────────────────────────────────────────── */
export function ForestOfArms() {
  return (
    <Player
      id="anim-wl-9-3"
      title="9.3 · The forest of outstretched arms"
      steps={[
        { caption: "Meet Mr. Pike, who runs a tiny workshop, and Widow Hart, who lives on the interest from her savings. Neither is rich, but neither works for a boss." },
        { caption: "Mr. Pike can't afford the giant machines. The big workshops undersell him, and his little shop closes." },
        { caption: "As capital piles up, interest rates fall. Widow Hart's savings no longer give her enough to live on." },
        { caption: "Both end up at the workshop gate, next to the spinners who lost their jobs. Marx: the forest of outstretched arms, begging for work, grows ever thicker." },
        {
          caption: "And when too much is made for the markets to buy, a crisis shakes the town, which Marx calls an industrial earthquake. He says such crises grow more frequent and more violent.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const crowd = s >= 3 ? 9 : s >= 1 ? 5 : 3;
        const shake = s >= 4;
        return (
          <g className={shake ? "wlc09-quake" : ""}>
            {/* the big workshop */}
            <rect x="196" y="40" width="140" height="60" fill="#fff" stroke="#000" strokeWidth="2" />
            <polygon points="196,40 220,26 220,40 244,26 244,40 268,26 268,40 292,26 292,40 316,26 316,40" fill="#000" />
            <text x="266" y="76" textAnchor="middle" fontSize="9">
              the big workshops
            </text>

            {/* Mr. Pike's little shop */}
            <g style={{ opacity: s >= 1 ? 0.35 : 1, transition: "opacity 600ms" }}>
              <rect x="30" y="56" width="60" height="44" fill="#fff" stroke="#000" />
              <text x="60" y="82" textAnchor="middle" fontSize="8.5">
                Pike&apos;s shop
              </text>
            </g>
            <Fade show={s >= 1}>
              <text x="60" y="50" textAnchor="middle" fontSize="9" fill="#d6452f" fontWeight="600">
                closed
              </text>
            </Fade>

            {/* Widow Hart's savings */}
            <g transform="translate(150 80)">
              <Coins n={s >= 2 ? 1 : 4} />
            </g>
            <text x="150" y="98" textAnchor="middle" fontSize="8.5">
              {s >= 2 ? "interest: too little" : "interest to live on"}
            </text>

            {/* the crowd at the gate, arms raised */}
            {Array.from({ length: crowd }, (_, i) => {
              const isPike = i === crowd - 2 && s >= 3;
              const isHart = i === crowd - 1 && s >= 3;
              const x = 40 + (i % 9) * 34;
              return (
                <g key={i}>
                  <line x1={x - 8} y1="178" x2={x - 14} y2="158" stroke="#000" strokeWidth="2" />
                  <line x1={x + 8} y1="178" x2={x + 14} y2="158" stroke="#000" strokeWidth="2" />
                  <Figure name={isPike ? "Mr. Pike" : isHart ? "Widow Hart" : ""} x={x} y={200} scale={0.62} label={isPike || isHart} mood="sad" />
                </g>
              );
            })}
            {s < 3 && (
              <>
                <Figure name="Mr. Pike" x={60} y={134} scale={0.5} mood={s >= 1 ? "sad" : "happy"} />
                <Figure name="Widow Hart" x={160} y={134} scale={0.5} mood={s >= 2 ? "sad" : "happy"} />
              </>
            )}
            <Fade show={s >= 3}>
              <text x="180" y="124" textAnchor="middle" fontSize="9.5" fontWeight="600">
                the forest of arms grows thicker
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <text x="266" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#d6452f">
                crisis!
              </text>
            </Fade>
            <style>{`
              @keyframes wlc09-shake { 0%,100% { transform: translateX(0) } 25% { transform: translateX(-2px) } 75% { transform: translateX(2px) } }
              .wlc09-quake { animation: wlc09-shake .25s linear infinite; }
            `}</style>
          </g>
        );
      }}
    </Player>
  );
}
