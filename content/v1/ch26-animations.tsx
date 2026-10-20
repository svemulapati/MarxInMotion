"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, Place, Tick } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * 26.1 · The circle needs a first push
 * Capital makes surplus-value, surplus-value makes more capital; but the
 * circle takes for granted a boss with money and workers with nothing.
 * ───────────────────────────────────────────────────────────── */
const C = { x: 180, y: 112, r: 58 };
const at = (deg: number): [number, number] => [C.x + C.r * Math.cos((deg * Math.PI) / 180), C.y + C.r * Math.sin((deg * Math.PI) / 180)];
const ARCS = [
  [-72, 12],
  [48, 132],
  [168, 252],
].map(([a, b]) => {
  const [x1, y1] = at(a);
  const [x2, y2] = at(b);
  return `M${x1.toFixed(1)},${y1.toFixed(1)} A${C.r},${C.r} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)}`;
});
const STOPS = [
  { deg: -90, label: "capital" },
  { deg: 30, label: "surplus-value" },
  { deg: 150, label: "more capital" },
];

export function TheFirstPush() {
  return (
    <Player
      id="anim-26-1"
      title="26.1 · The circle needs a first push"
      steps={[
        { caption: "We have seen the circle many times: capital puts Sam to work, and his unpaid hours make surplus-value." },
        { caption: "Surplus-value is turned into more capital, which makes more surplus-value. Round and round it goes." },
        {
          caption: "But the circle needs two things before it can start: a boss who already has money and tools, and workers who have nothing to sell but their labour-power.",
          ms: 4600,
        },
        { caption: "So where did they come from? The circle cannot explain its own beginning. Marx calls this a vicious circle." },
        {
          caption: "There must have been a first push, before the circle began. Marx calls it primitive accumulation: the story of how the first bosses and the first property-less workers came to be.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{`
            @keyframes c26-orbit { to { transform: rotate(360deg); } }
            .c26-orbit { transform-origin: ${C.x}px ${C.y}px; animation: c26-orbit 3.2s linear infinite; }
          `}</style>

          <g style={{ opacity: s === 3 ? 0.35 : 1, transition: "opacity 500ms" }}>
            {ARCS.map((d, i) => (
              <path key={i} d={d} fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#c26-arr)" />
            ))}
            {STOPS.map((st) => {
              const [x, y] = at(st.deg);
              return (
                <g key={st.label} transform={`translate(${x} ${y})`}>
                  <rect x="-40" y="-11" width="80" height="22" rx="11" fill="#fff" stroke="#000" />
                  <text y="4" textAnchor="middle" fontSize="9.5">
                    {st.label}
                  </text>
                </g>
              );
            })}
            {s >= 1 && s <= 2 && (
              <g className="c26-orbit">
                <circle cx={C.x} cy={C.y - C.r} r="5" fill="#e6b800" stroke="#000" />
              </g>
            )}
          </g>
          <defs>
            <marker id="c26-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>

          {/* the two things the circle takes for granted */}
          <Fade show={s >= 2}>
            <Figure who="moneybags" x={42} y={205} scale={0.8} />
            <g transform="translate(42 120)">
              <Coins n={3} label="money, tools" />
            </g>
            <Figure who="sam" x={318} y={205} scale={0.8} mood={s >= 3 ? "sad" : "happy"} />
            <text x="318" y="120" textAnchor="middle" fontSize="8.5">
              only his
            </text>
            <text x="318" y="131" textAnchor="middle" fontSize="8.5">
              two hands
            </text>
          </Fade>

          <Fade show={s === 3}>
            <text x={C.x} y={C.y + 12} textAnchor="middle" fontSize="36" fontWeight="300">
              ?
            </text>
          </Fade>

          {/* the first push, from outside the circle */}
          <Fade show={s === 4} delay={200}>
            <path d={`M${C.x},206 L${C.x},${C.y + 24}`} stroke="#d6452f" strokeWidth="2.5" markerEnd="url(#c26-push)" />
            <text x={C.x} y={C.y + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
              the first push
            </text>
            <text x={C.x + 6} y="214" fontSize="8.5" fill="#d6452f">
              history
            </text>
            <defs>
              <marker id="c26-push" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#d6452f" />
              </marker>
            </defs>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 26.2 · Two stories (the "nursery tale" against the history book)
 * ───────────────────────────────────────────────────────────── */
const PageBook = ({ title, red = false }: { title: string; red?: boolean }) => (
  <g>
    <rect x="20" y="22" width="320" height="150" fill="#fffdf6" stroke="#000" strokeWidth="1.2" />
    <line x1="180" y1="22" x2="180" y2="172" stroke="#000" strokeOpacity=".25" />
    <text x="180" y="16" textAnchor="middle" fontSize="10" fontWeight="600" fill={red ? "#b3261e" : "#000"}>
      {title}
    </text>
  </g>
);

export function TwoStories() {
  return (
    <Player
      id="anim-26-2"
      title="26.2 · Two stories"
      viewBox="0 0 360 225"
      steps={[
        {
          caption: "Mr. Moneybags has a storybook. Long ago, it says, there were two kinds of people: busy savers, and lazy spenders.",
        },
        {
          caption: "The savers piled up wealth. The spenders ended up with nothing to sell but their own skins. That, says the book, is why some are rich and some are poor.",
          ms: 4600,
        },
        {
          caption: "Marx calls this a nursery tale. It works like the old story of Adam and the apple: one long-ago fault is supposed to explain everything that came after.",
          ms: 4600,
        },
        {
          caption: "Now the history book. Yes, workers were freed: from the lord who owned them as serfs, and from the strict rules of the guilds.",
        },
        {
          caption: "But they were also freed of their land, their tools and the old protections of village life. Marx says the history of how this happened is written “in letters of blood and fire”.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const tale = s <= 2;
        return (
          <>
            {/* the storybook */}
            <Fade show={tale}>
              <PageBook title="Mr. Moneybags' storybook" />
              <Figure name="the savers" x={90} y={150} scale={0.8} />
              <Place x={90} y={58} show={s >= 1}>
                <Coins n={5} />
              </Place>
              <Figure name="the spenders" x={270} y={150} scale={0.8} mood={s >= 1 ? "sad" : "happy"} />
              <Fade show={s >= 1}>
                <text x="270" y="60" textAnchor="middle" fontSize="9">
                  nothing left
                </text>
                <text x="270" y="72" textAnchor="middle" fontSize="9">
                  but their skins
                </text>
              </Fade>
              <Figure who="moneybags" x={180} y={214} scale={0.62} />
              {/* Marx's verdict, stamped across the page */}
              <g
                transform="translate(180 100) rotate(-12)"
                style={{ opacity: s === 2 ? 1 : 0, transition: "opacity 400ms" }}
              >
                <rect x="-70" y="-16" width="140" height="32" fill="#fff" stroke="#d6452f" strokeWidth="2.5" />
                <text y="6" textAnchor="middle" fontSize="15" fontWeight="700" fill="#d6452f" letterSpacing="1">
                  NURSERY TALE
                </text>
              </g>
            </Fade>

            {/* the history book */}
            <Fade show={!tale} delay={200}>
              <PageBook title={s === 4 ? "written in letters of blood and fire" : "the history book"} red={s === 4} />
              <text x="100" y="42" textAnchor="middle" fontSize="10" fontWeight="600">
                freed from
              </text>
              <text x="260" y="42" textAnchor="middle" fontSize="10" fontWeight="600" style={{ opacity: s === 4 ? 1 : 0.25 }}>
                freed of
              </text>
              {["the lord (serfdom)", "guild rules"].map((t, i) => (
                <g key={t} transform={`translate(44 ${70 + i * 30})`}>
                  <Tick />
                  <text x="14" y="4" fontSize="9.5">
                    {t}
                  </text>
                </g>
              ))}
              {["their land", "their tools", "old protections"].map((t, i) => (
                <Fade key={t} show={s === 4} delay={300 + i * 250}>
                  <g transform={`translate(206 ${70 + i * 30})`}>
                    <Cross />
                    <text x="14" y="4" fontSize="9.5">
                      {t}
                    </text>
                  </g>
                </Fade>
              ))}
              <Figure name="a freed serf" x={180} y={214} scale={0.62} mood={s === 4 ? "sad" : "happy"} />
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
