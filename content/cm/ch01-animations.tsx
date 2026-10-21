"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Coins, Fade, Linen, Place } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 1.1 · Two sides, again and again (the history of class struggles)
 * ───────────────────────────────────────────────────────────── */
const PAIRS = [
  { era: "ancient Rome", top: "patrician", bottom: "plebeian" },
  { era: "the Middle Ages", top: "lord", bottom: "serf" },
  { era: "the old towns", top: "guild-master", bottom: "journeyman" },
  { era: "Tiny Town today", top: "bourgeois", bottom: "proletarian" },
];

export function TwoSidesAgainAndAgain() {
  return (
    <Player
      id="anim-cm-1-1"
      title="1.1 · Two sides, again and again"
      steps={[
        { caption: "The Manifesto opens with a ghost: “A spectre is haunting Europe”, the spectre of communism, which kings, popes and police all fear." },
        { caption: "Then its big claim: “The history of all hitherto existing society is the history of class struggles.” In ancient Rome, rich patricians stood against poor plebeians." },
        { caption: "In the Middle Ages, lords against serfs. In the old towns, guild-masters against the journeymen who worked for them." },
        { caption: "Today, say Marx and Engels, it is simpler: two big camps. The bourgeoisie owns the workshops. The proletariat owns nothing but its work." },
        {
          caption: "In Tiny Town that means Mr. Moneybags and Sam. (Engels later added a note: “all history” meant all written history, since older, shared ways of living were then hardly known.)",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const shown = s === 0 ? -1 : s === 1 ? 0 : s === 2 ? 2 : 3;
        return (
          <>
            {/* the spectre */}
            <Fade show={s === 0}>
              <g transform="translate(180 110)" className="cmc01-float">
                <path d="M-30,30 C-30,-40 30,-40 30,30 L20,20 L10,30 L0,20 L-10,30 L-20,20 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
                <circle cx="-9" cy="-6" r="3" />
                <circle cx="9" cy="-6" r="3" />
              </g>
              {["Pope", "Tsar", "Police spy"].map((w, i) => (
                <Figure key={w} name={w} x={70 + i * 110} y={200} scale={0.55} mood="wow" />
              ))}
            </Fade>

            {/* pairs through history */}
            {PAIRS.map((p, i) => {
              const on = i <= shown;
              const x = 52 + i * 85;
              const isToday = i === 3;
              return (
                <g key={p.era} style={{ opacity: on ? 1 : 0, transition: "opacity 500ms" }}>
                  <text x={x} y="40" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
                    {p.era}
                  </text>
                  {isToday ? (
                    <>
                      <Figure who="moneybags" x={x} y={112} scale={0.6} label={false} />
                      <Figure who="sam" x={x} y={190} scale={0.6} label={false} />
                    </>
                  ) : (
                    <>
                      <Figure name="" label={false} x={x} y={112} scale={0.6} />
                      <Figure name="" label={false} x={x} y={190} scale={0.6} mood="sad" />
                    </>
                  )}
                  <text x={x} y="124" textAnchor="middle" fontSize="8.5" fontWeight="600">
                    {p.top}
                  </text>
                  <text x={x} y="202" textAnchor="middle" fontSize="8.5" fontWeight="600">
                    {p.bottom}
                  </text>
                  <path d={`M${x - 6},140 L${x + 6},146 M${x + 6},140 L${x - 6},146`} stroke="#c0392b" strokeWidth="2" />
                </g>
              );
            })}
            <Fade show={s >= 3}>
              <rect x="220" y="44" width="1" height="170" fill="#000" fillOpacity=".15" />
            </Fade>
            <style>{`
              @keyframes cmc01-float { 0%, 100% { transform: translate(180px, 110px); } 50% { transform: translate(180px, 102px); } }
              .cmc01-float { animation: cmc01-float 2.4s ease-in-out infinite; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.2 · What the bourgeoisie built (and the sorcerer's problem)
 * ───────────────────────────────────────────────────────────── */
export function WhatTheBourgeoisieBuilt() {
  return (
    <Player
      id="anim-cm-1-2"
      title="1.2 · What the bourgeoisie built"
      steps={[
        { caption: "Here the Manifesto surprises many readers: it praises the bourgeoisie. It calls it “most revolutionary”. It swept away lords, guilds and old ways." },
        { caption: "Ships, railways and a world market: Tiny Town's yarn now sails to far countries, and cotton comes from the other side of the world." },
        { caption: "In “scarce one hundred years”, they write, it created more productive power than all earlier generations together. Everything keeps changing: “All that is solid melts into air.”" },
        { caption: "But it is like a sorcerer who has called up powers he can't control. Every few years there is a crisis: too much has been made, and workshops close." },
        {
          caption: "Marx and Engels' conclusion: the old order's “fetters” were burst once, when lords gave way to bosses. They predict the same will happen again. That is a forecast, and the critics below argue it did not come true.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the mill grows */}
          {[0, 1, 2].map((i) => (
            <g key={i} style={{ opacity: s >= i ? 1 : 0, transition: "opacity 500ms" }}>
              <rect x={30 + i * 44} y={150 - i * 22} width="40" height={40 + i * 22} fill="#fff" stroke="#000" />
              <polygon points={`${30 + i * 44},${150 - i * 22} ${43 + i * 44},${140 - i * 22} ${43 + i * 44},${150 - i * 22} ${56 + i * 44},${140 - i * 22} ${56 + i * 44},${150 - i * 22} ${70 + i * 44},${140 - i * 22} ${70 + i * 44},${150 - i * 22}`} fill="#000" />
            </g>
          ))}
          <Figure who="moneybags" x={190} y={190} scale={0.7} />

          {/* the world market */}
          <Fade show={s >= 1}>
            <path d="M210,70 C260,40 300,40 345,70" fill="none" stroke="#5b7fa6" strokeDasharray="4 3" />
            <g className="cmc01-sail">
              <path d="M0,0 h22 l-4,7 h-14 Z M10,0 V-14 L20,-2 Z" fill="#000" />
            </g>
            <text x="278" y="88" textAnchor="middle" fontSize="8.5">
              the world market
            </text>
            <line x1="215" y1="120" x2="345" y2="120" stroke="#000" strokeWidth="2" />
            {Array.from({ length: 9 }, (_, i) => (
              <line key={i} x1={220 + i * 15} y1="116" x2={220 + i * 15} y2="124" stroke="#000" />
            ))}
            <text x="280" y="138" textAnchor="middle" fontSize="8.5">
              railways
            </text>
          </Fade>

          {/* everything melts */}
          <Fade show={s === 2}>
            <text x="180" y="30" textAnchor="middle" fontSize="12" fontWeight="600">
              &ldquo;All that is solid melts into air&rdquo;
            </text>
          </Fade>

          {/* the crisis */}
          <Fade show={s >= 3}>
            {Array.from({ length: 5 }, (_, i) => (
              <g key={i} transform={`translate(${42 + i * 24} 200) scale(.5)`}>
                <Linen />
              </g>
            ))}
            <text x="100" y="216" textAnchor="middle" fontSize="8.5" fill="#c0392b">
              unsold: a crisis
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="212" y="150" width="140" height="40" fill="#fff" stroke="#000" />
            <text x="282" y="166" textAnchor="middle" fontSize="8.5">
              their forecast: this order
            </text>
            <text x="282" y="180" textAnchor="middle" fontSize="8.5">
              will be burst too
            </text>
          </Fade>
          <style>{`
            @keyframes cmc01-sail { from { transform: translate(214px, 62px); } to { transform: translate(322px, 62px); } }
            .cmc01-sail { animation: cmc01-sail 4s ease-in-out infinite alternate; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.3 · Sinking into the crowd (the growth of the proletariat)
 * ───────────────────────────────────────────────────────────── */
export function SinkingIntoTheCrowd() {
  return (
    <Player
      id="anim-cm-1-3"
      title="1.3 · Sinking into the crowd"
      viewBox="0 0 360 236"
      steps={[
        { caption: "Ava used to sew coats in her own little shop, and old Master Hal ran the town's tailors' guild. They are in the middle: not rich bosses, not wage workers." },
        { caption: "The Manifesto says people like them get squeezed. Big workshops make coats cheaper, and the small shop can't keep up." },
        { caption: "So, it says, they “sink gradually into the proletariat”. Ava now works for a wage in a big workshop. The worker becomes “an appendage of the machine”." },
        { caption: "The workers then join together: first in one workshop, then in unions across the town, helped by railways that link workers in different places." },
        {
          caption: "Marx and Engels end the chapter with a prediction: the bourgeoisie produces “its own grave-diggers”. Critics point out that in rich countries the middle grew instead, and the prediction did not come true.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const middleY = s <= 1 ? 110 : 186;
        return (
          <>
            {/* three levels */}
            <line x1="20" y1="72" x2="340" y2="72" stroke="#000" strokeOpacity=".15" />
            <line x1="20" y1="148" x2="340" y2="148" stroke="#000" strokeOpacity=".15" />
            <text x="24" y="66" fontSize="8" fillOpacity=".55">
              owners of big workshops
            </text>
            <text x="24" y="142" fontSize="8" fillOpacity=".55">
              small owners in the middle
            </text>
            <text x="24" y="230" fontSize="8" fillOpacity=".55">
              wage workers
            </text>

            <Figure who="moneybags" x={300} y={66} scale={0.55} label={false} />

            {/* Ava and Master Hal */}
            <g style={{ transform: `translate(${s <= 1 ? 120 : 210}px, ${middleY}px)`, transition: `transform ${T}` }}>
              <Figure who="ava" x={0} y={0} scale={0.6} mood={s >= 1 && s <= 2 ? "sad" : "happy"} />
            </g>
            <g style={{ transform: `translate(${s <= 1 ? 190 : 240}px, ${middleY}px)`, transition: `transform ${T} 150ms` }}>
              <Figure name="Master Hal" x={0} y={0} scale={0.6} mood={s >= 1 && s <= 2 ? "sad" : "happy"} />
            </g>
            <Fade show={s <= 1}>
              <Place x={150} y={90} scale={0.5}>
                <Coat />
              </Place>
            </Fade>
            <Fade show={s === 1}>
              <g transform="translate(300 100)">
                <Coins n={2} label="cheaper coats" />
              </g>
            </Fade>

            {/* the crowd of workers */}
            {[0, 1, 2, 3].map((i) => (
              <Figure key={i} who={i === 0 ? "sam" : undefined} name="" label={false} x={60 + i * 32} y={186} scale={0.6} />
            ))}

            {/* joining together */}
            <Fade show={s >= 3}>
              <path d="M44,154 C120,140 200,140 262,154" fill="none" stroke="#2a9d5b" strokeWidth="2.5" />
              <text x="150" y="134" textAnchor="middle" fontSize="9" fontWeight="600" fill="#2a9d5b">
                joining together
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="150" y="10" width="200" height="34" fill="#fff" stroke="#000" />
              <text x="250" y="24" textAnchor="middle" fontSize="8.5">
                their prediction, not a fact:
              </text>
              <text x="250" y="37" textAnchor="middle" fontSize="8.5">
                &ldquo;its own grave-diggers&rdquo;
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
