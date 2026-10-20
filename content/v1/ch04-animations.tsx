"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Chest, Coat, Coins, Fade, Linen, Place, Tick } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * 4.1 · Two kinds of circle (C–M–C versus M–C–M′)
 * ───────────────────────────────────────────────────────────── */
const C = { x: 205, y: 112, r: 66 };
const at = (deg: number): [number, number] => [C.x + C.r * Math.cos((deg * Math.PI) / 180), C.y + C.r * Math.sin((deg * Math.PI) / 180)];
const NODE = { top: at(-90), right: at(30), left: at(150) };
/** Arcs between the three stops, leaving a gap around each one. */
const ARCS = [
  [-72, 12],
  [48, 132],
  [168, 252],
].map(([a, b]) => {
  const [x1, y1] = at(a);
  const [x2, y2] = at(b);
  return `M${x1.toFixed(1)},${y1.toFixed(1)} A${C.r},${C.r} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)}`;
});

function Stop({ at: [x, y], show, label, children }: { at: [number, number]; show: boolean; label: string; children: React.ReactNode }) {
  return (
    <Place x={x} y={y} show={show}>
      <circle r="24" fill="#fff" stroke="#000" />
      {children}
      <text y="38" textAnchor="middle" fontSize="9.5">
        {label}
      </text>
    </Place>
  );
}

export function TwoKindsOfCircle() {
  return (
    <Player
      id="anim-4-1"
      title="4.1 · Two kinds of circle"
      steps={[
        { caption: "Leo's circle: he sells linen, gets money, and buys a coat. He starts with a useful thing and ends with a different useful thing. Marx writes it C–M–C." },
        { caption: "Leo's circle has a natural end. He wears the coat, and he is done." },
        { caption: "Now meet Mr. Moneybags. He starts with 100 coins, buys linen, and sells the linen again. Marx writes this circle M–C–M." },
        { caption: "But wait. If he gets back exactly 100 coins, why bother? He ends with the same thing he started with." },
        {
          caption: "It only makes sense if more comes back: 110 coins. Marx writes M–C–M′, and he calls the extra 10 surplus-value.",
          ms: 4800,
        },
      ]}
    >
      {(s) => {
        const leo = s <= 1;
        return (
          <>
            {ARCS.map((d, i) => (
              <path key={i} d={d} fill="none" stroke="#000" strokeWidth="1.5" markerEnd="url(#circ)" />
            ))}
            <defs>
              <marker id="circ" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>

            {/* who is going round */}
            <Figure who="leo" x={52} y={200} style={{ opacity: leo ? 1 : 0, transition: "opacity 500ms" }} />
            <Figure who="moneybags" x={52} y={200} mood={s === 3 ? "sad" : "happy"} style={{ opacity: leo ? 0 : 1, transition: "opacity 500ms" }} />

            {/* Leo's stops */}
            <Stop at={NODE.top} show={leo} label="linen (C)">
              <Linen />
            </Stop>
            <Stop at={NODE.right} show={leo} label="2 coins (M)">
              <Coins n={2} />
            </Stop>
            <Stop at={NODE.left} show={leo} label="coat (C)">
              <g transform="scale(.75)">
                <Coat />
              </g>
            </Stop>
            <Fade show={s === 1}>
              <g transform={`translate(${NODE.left[0] - 22} ${NODE.left[1] - 20})`}>
                <Tick />
              </g>
              <text x={NODE.left[0]} y={NODE.left[1] + 52} textAnchor="middle" fontSize="9.5" fontWeight="600">
                the end: wear it!
              </text>
            </Fade>

            {/* Moneybags' stops */}
            <Stop at={NODE.top} show={!leo} label="100 coins (M)">
              <Coins n={3} />
            </Stop>
            <Stop at={NODE.right} show={!leo} label="linen (C)">
              <Linen />
            </Stop>
            <Stop at={NODE.left} show={!leo} label={s === 4 ? "110 coins (M′)" : "100 coins (M)"}>
              <Coins n={s === 4 ? 4 : 3} />
            </Stop>

            {/* the name of the circle */}
            <text x={C.x} y={C.y + 5} textAnchor="middle" fontSize="13" fontWeight="600">
              {leo ? "C – M – C" : s === 4 ? "M – C – M′" : "M – C – M"}
            </text>
            <Fade show={s === 3}>
              <text x={C.x} y={C.y + 40} textAnchor="middle" fontSize="26" fontWeight="300">
                ?
              </text>
            </Fade>
            <Fade show={s === 4} delay={300}>
              <text x={NODE.left[0] - 30} y={NODE.left[1] - 22} textAnchor="middle" fontSize="13" fontWeight="700" fill="#b38f00">
                +10
              </text>
              <text x={C.x} y={C.y + 24} textAnchor="middle" fontSize="9.5">
                surplus-value
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.2 · The miser and the capitalist (the circle that never stops)
 * ───────────────────────────────────────────────────────────── */
const MONEYBAGS = [100, 100, 110, 121, 133];

export function TheMiserAndTheCapitalist() {
  return (
    <Player
      id="anim-4-2"
      title="4.2 · The miser and the capitalist"
      steps={[
        { caption: "Old Silas and Mr. Moneybags both want more money. Each starts with 100 coins." },
        { caption: "Silas locks his coins in a chest to keep them safe. Year after year, he still has 100. Money kept out of the market never grows." },
        { caption: "Mr. Moneybags does the opposite. He throws his coins back into the market: buy, sell, and 110 comes back." },
        { caption: "Then he sends all 110 round again, and 121 comes back. The circle never stops, because there is always more to chase." },
        {
          caption: "In Marx's words: “the miser is merely a capitalist gone mad, the capitalist is a rational miser.” Next chapter's puzzle: where does the extra really come from?",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="180" y1="20" x2="180" y2="200" stroke="#000" strokeOpacity=".12" />

          {/* the miser */}
          <Figure name="Old Silas" x={60} y={205} mood={s >= 1 ? "sleepy" : "happy"} />
          <g transform="translate(118 170)">
            <Chest open={s === 0} />
          </g>
          <text x="90" y="56" textAnchor="middle" fontSize="28" fontWeight="300">
            100
          </text>
          <Fade show={s >= 1}>
            <text x="90" y="76" textAnchor="middle" fontSize="9.5">
              year after year, still 100
            </text>
          </Fade>
          <text x="90" y="104" textAnchor="middle" fontSize="9.5" fillOpacity=".55">
            a hoard: money kept out
          </text>

          {/* the capitalist */}
          <Figure who="moneybags" x={232} y={205} />
          <g transform="translate(302 160)">
            <circle r="30" fill="none" stroke="#000" strokeDasharray="5 4" className={s >= 2 ? "spin-gear" : ""} style={{ animationDuration: "6s" }} />
            <text y="-4" textAnchor="middle" fontSize="9.5">
              buy, then
            </text>
            <text y="9" textAnchor="middle" fontSize="9.5">
              sell again
            </text>
          </g>
          <text
            x="270"
            y="56"
            textAnchor="middle"
            fontSize="28"
            fontWeight={s >= 2 ? 500 : 300}
            fill={s >= 2 ? "#b38f00" : "#000"}
            style={{ transition: "fill 400ms" }}
          >
            {MONEYBAGS[s]}
          </text>
          <Fade show={s >= 2}>
            <text x="270" y="76" textAnchor="middle" fontSize="9.5">
              round {s - 1}: {MONEYBAGS[s - 1]} became {MONEYBAGS[s]}
            </text>
          </Fade>
          <text x="270" y="104" textAnchor="middle" fontSize="9.5" fillOpacity=".55">
            capital: money kept moving
          </text>
        </>
      )}
    </Player>
  );
}
