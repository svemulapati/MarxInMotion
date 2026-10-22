"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Chest, Coins, Cross, Fade, Place } from "@/components/anim/Things";
import { Cotton, Spindle, TONE, Yarn } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * The circuit drawn as a track of five stations, shared by Volume II,
 * Chapters 1 to 3. Each chapter starts the same track at a different
 * station. Workshop numbers follow CONTINUITY.md: 27 coins in, 30 out.
 * ───────────────────────────────────────────────────────────── */

export type StationId = "M" | "C" | "P" | "C2" | "M2";

const LABEL: Record<StationId, string> = { M: "M", C: "C", P: "P", C2: "C′", M2: "M′" };

/** A small gear, for the workshop at work. */
export function Gear({ r = 12, spin = false }: { r?: number; spin?: boolean }) {
  const teeth = 8;
  return (
    <g className={spin ? "v2c01-spin" : ""}>
      {Array.from({ length: teeth }, (_, i) => (
        <rect key={i} x={-2.5} y={-r - 4} width={5} height={6} fill="#555" transform={`rotate(${(i * 360) / teeth})`} />
      ))}
      <circle r={r} fill="#777" stroke="#000" strokeWidth="1" />
      <circle r={r * 0.35} fill="#f1f1f1" stroke="#000" strokeWidth="1" />
    </g>
  );
}

/** What sits inside each station circle. */
export function StationIcon({ id }: { id: StationId }) {
  if (id === "M") return <Coins n={3} />;
  if (id === "M2")
    return (
      <g>
        <Coins n={3} />
        <g transform="translate(0 -8)">
          <circle r="4" fill={TONE.surplus} stroke="#000" strokeWidth=".8" />
        </g>
      </g>
    );
  if (id === "C")
    return (
      <g>
        <g transform="translate(-7 2) scale(.55)">
          <Cotton />
        </g>
        <g transform="translate(9 0) scale(.5)">
          <Spindle />
        </g>
      </g>
    );
  if (id === "P") return <Gear spin />;
  return (
    <g>
      <g transform="scale(.85)">
        <Yarn />
      </g>
      <rect x="-12" y="9" width="21" height="4" fill="#bbb" />
      <rect x="9" y="9" width="3" height="4" fill={TONE.surplus} />
    </g>
  );
}

export const TRACK_X = [36, 108, 180, 252, 324];
export const TRACK_Y = 96;
const R = 24;

/** Is the hop between two stations an act of circulation (solid) or production (dots)? */
const isCirculation = (a: StationId, b: StationId) => !(a === "C" && b === "P") && !(a === "P" && b === "C2");

/**
 * The five-station track. `order` is where the circuit starts; `active` is
 * the station being explained (-1 for none); `dim` greys out stations.
 */
export function Track({
  order,
  active,
  subs,
  dim = [],
  loop = false,
}: {
  order: StationId[];
  active: number;
  subs: string[];
  dim?: number[];
  loop?: boolean;
}) {
  return (
    <g>
      {/* hops */}
      {order.slice(0, -1).map((a, i) => {
        const b = order[i + 1];
        const x1 = TRACK_X[i] + R + 3;
        const x2 = TRACK_X[i + 1] - R - 5;
        const circ = isCirculation(a, b);
        return (
          <g key={i}>
            <line
              x1={x1}
              y1={TRACK_Y}
              x2={x2}
              y2={TRACK_Y}
              stroke="#000"
              strokeWidth="1.6"
              strokeDasharray={circ ? undefined : "2 4"}
              strokeLinecap="round"
              markerEnd={circ ? "url(#v2-arrow)" : undefined}
            />
          </g>
        );
      })}
      {/* the way home */}
      <path
        d={`M${TRACK_X[4]},${TRACK_Y + R + 22} Q${TRACK_X[4]},170 180,170 Q${TRACK_X[0]},170 ${TRACK_X[0]},${TRACK_Y + R + 26}`}
        fill="none"
        stroke={loop ? TONE.surplus : "#000"}
        strokeOpacity={loop ? 1 : 0.25}
        strokeWidth={loop ? 2.5 : 1.2}
        markerEnd="url(#v2-arrow)"
        style={{ transition: "stroke 500ms, stroke-width 500ms, stroke-opacity 500ms" }}
      />
      <text x="180" y="184" textAnchor="middle" fontSize="8.5" fillOpacity={loop ? 1 : 0.5}>
        and round again
      </text>

      {/* stations */}
      {order.map((id, i) => {
        const on = i === active;
        const faded = dim.includes(i);
        return (
          <g key={i} style={{ opacity: faded ? 0.3 : 1, transition: "opacity 500ms" }}>
            <text x={TRACK_X[i]} y={TRACK_Y - R - 9} textAnchor="middle" fontSize="13" fontWeight="700">
              {LABEL[id]}
            </text>
            <circle
              cx={TRACK_X[i]}
              cy={TRACK_Y}
              r={R}
              fill="#fff"
              stroke={on ? "#000" : "#999"}
              strokeWidth={on ? 3 : 1.2}
              style={{ transition: "stroke-width 300ms" }}
            />
            <g transform={`translate(${TRACK_X[i]} ${TRACK_Y})`}>
              <StationIcon id={id} />
            </g>
            <text x={TRACK_X[i]} y={TRACK_Y + R + 12} textAnchor="middle" fontSize="8" fillOpacity=".7">
              {subs[i]}
            </text>
          </g>
        );
      })}

      <defs>
        <marker id="v2-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" />
        </marker>
      </defs>
      <style>{`
        @keyframes v2c01-spin { to { transform: rotate(360deg); } }
        .v2c01-spin { animation: v2c01-spin 4s linear infinite; transform-box: fill-box; transform-origin: center; }
      `}</style>
    </g>
  );
}

/** A caption band under the track. */
export function Note({ show, children, color = "#000", delay = 300 }: { show: boolean; children: React.ReactNode; color?: string; delay?: number }) {
  return (
    <Fade show={show} delay={delay}>
      <text x="180" y="212" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={color}>
        {children}
      </text>
    </Fade>
  );
}

const MONEY_ORDER: StationId[] = ["M", "C", "P", "C2", "M2"];
const MONEY_SUBS = ["27 coins", "cotton, spindle, Sam", "the workshop", "20 lb yarn: 30", "30 coins"];

/* ─────────────────────────────────────────────────────────────
 * 1.1 · Three stages, three costumes
 * ───────────────────────────────────────────────────────────── */
export function ThreeCostumes() {
  return (
    <Player
      id="anim-v2-1-1"
      title="1.1 · Three stages, three costumes"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Morning. Mr. Moneybags has 27 coins. In this form his capital is money-capital, written M." },
        { caption: "Stage one, buying (M–C): 24 coins for cotton and spindle wear, 3 coins for a day of Sam's labour-power." },
        { caption: "Stage two, production (P). The coins are gone. Now the capital is cotton, spindles and Sam at work: productive capital. The dots mean buying and selling have stopped while work goes on." , ms: 4600 },
        { caption: "Out comes 20 lb of yarn worth 30 coins: commodity-capital, written C′. It already holds 3 coins of surplus-value." },
        { caption: "Stage three, selling (C′–M′). The yarn turns back into money: 30 coins, written M′. The capital is home, bigger, and ready to go round again." , ms: 4600 },
        {
          caption: "Same value all the way round, in three costumes: money, productive, commodity. Marx says these are not three kinds of capital, just three forms one capital takes in turn.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const active = [0, 1, 2, 3, 4, -1][s];
        return (
          <>
            <Track order={MONEY_ORDER} active={active} subs={MONEY_SUBS} loop={s >= 4} />
            {/* the costume names, gathered at the end */}
            <Fade show={s === 5}>
              {[
                { x: 60, y: 22, t: "money-capital" },
                { x: 180, y: 34, t: "productive capital" },
                { x: 300, y: 22, t: "commodity-capital" },
              ].map((c) => (
                <g key={c.t} transform={`translate(${c.x} ${c.y})`}>
                  <rect x="-40" y="-11" width="80" height="16" rx="8" fill="#000" />
                  <text y="0.5" textAnchor="middle" fontSize="8" fill="#fff">
                    {c.t}
                  </text>
                </g>
              ))}
            </Fade>
            <Note show={s === 2}>buying and selling paused: work goes on</Note>
            <Note show={s === 3}>27 coins of old value + 3 of surplus-value</Note>
            <Note show={s === 4} color="#9a7a00">
              27 went out, 30 came home
            </Note>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.2 · Two shopping lists (M–C splits into M–L and M–MP)
 * ───────────────────────────────────────────────────────────── */
export function TwoShoppingLists() {
  return (
    <Player
      id="anim-v2-1-2"
      title="1.2 · Two shopping lists"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Mr. Moneybags sets off with 27 coins. His shopping splits into two lists." },
        { caption: "List one: 24 coins for things to work with, cotton and the wear on the spindles. Marx writes M–MP, money for means of production." },
        { caption: "List two: 3 coins for a day of Sam's labour-power. Marx writes M–L." },
        {
          caption: "The two lists must fit together. One day of Sam's spinning uses 20 lb of cotton, no more and no less. Marx's own mill: 50 spinners paid £50 a week need £372 of cotton and machines.",
          ms: 5200,
        },
        {
          caption: "List two is the strange one. It only works if Sam has nothing to sell except his work. Marx says the class relation is already there the moment money meets labour-power.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="moneybags" x={180} y={78} scale={0.8} label={false} />
          <Place x={180} y={92}>
            <Coins n={3} label="27 coins" />
          </Place>

          {/* list one */}
          <Fade show={s >= 1}>
            <path d="M160,112 C120,130 95,140 80,150" fill="none" stroke="#000" strokeWidth="1.4" markerEnd="url(#v2-arrow12)" />
            <text x="112" y="124" textAnchor="end" fontSize="9" fontWeight="600">
              24 coins
            </text>
            <g transform="translate(55 172)">
              <Cotton />
            </g>
            <g transform="translate(88 170) scale(.8)">
              <Spindle />
            </g>
            <text x="70" y="204" textAnchor="middle" fontSize="9">
              M–MP: things to work with
            </text>
          </Fade>

          {/* list two */}
          <Fade show={s >= 2}>
            <path d="M200,112 C240,130 265,140 280,150" fill="none" stroke="#000" strokeWidth="1.4" markerEnd="url(#v2-arrow12)" />
            <text x="250" y="124" fontSize="9" fontWeight="600">
              3 coins
            </text>
            <Figure who="sam" x={290} y={196} scale={0.62} label={false} mood={s === 4 ? "sad" : "happy"} />
            <text x="290" y="212" textAnchor="middle" fontSize="9">
              M–L: Sam&apos;s day
            </text>
          </Fade>

          {/* they must fit */}
          <Fade show={s === 3} delay={200}>
            <g transform="translate(180 150)">
              <rect x="-46" y="-14" width="92" height="28" rx="4" fill="#fff" stroke="#000" />
              <text y="-2" textAnchor="middle" fontSize="8.5" fontWeight="600">
                1 day of Sam
              </text>
              <text y="9" textAnchor="middle" fontSize="8.5">
                = 20 lb of cotton
              </text>
            </g>
          </Fade>

          {/* the class relation */}
          <Fade show={s === 4} delay={200}>
            <g transform="translate(180 150)">
              <rect x="-58" y="-16" width="116" height="32" rx="4" fill="#000" />
              <text y="-3" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                Sam owns no workshop,
              </text>
              <text y="9" textAnchor="middle" fontSize="8.5" fill="#fff">
                only his ability to work
              </text>
            </g>
          </Fade>

          <defs>
            <marker id="v2-arrow12" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#000" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1.3 · When the circuit stops
 * ───────────────────────────────────────────────────────────── */
export function WhenTheCircuitStops() {
  return (
    <Player
      id="anim-v2-1-3"
      title="1.3 · When the circuit stops"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Capital only works while it keeps moving from stage to stage without a break." },
        { caption: "Stuck at buying: if no cotton can be had, the coins just sit. Marx says money-capital freezes into a hoard." },
        { caption: "Stuck in production: the spindles stand still on one side, and Sam has no work on the other." },
        { caption: "Stuck at selling: nobody buys the yarn. Piles of unsold goods block everything behind them." },
        {
          caption: "Because M…M′ starts and ends in money, it shows the goal most plainly: money-making. Production looks like a “necessary evil” on the way, and Marx says nations catch fevers of trying to make money without it.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <Track order={MONEY_ORDER} active={-1} subs={MONEY_SUBS} dim={s === 1 ? [1, 2, 3, 4] : s === 2 ? [2] : s === 3 ? [4] : []} loop={s === 0} />

          {/* a token running round while all is well */}
          {s === 0 && (
            <g className="v2c01-run">
              <circle r="5" fill={TONE.surplus} stroke="#000" />
            </g>
          )}

          {/* 1: the hoard */}
          <Fade show={s === 1}>
            <g transform="translate(36 150)">
              <Chest />
            </g>
            <g transform={`translate(72 ${TRACK_Y})`}>
              <Cross />
            </g>
          </Fade>
          <Fade show={s === 2}>
            <g transform={`translate(${TRACK_X[2]} ${TRACK_Y - 1})`}>
              <Cross />
            </g>
            <Figure who="sam" x={150} y={56} scale={0.42} mood="sad" label={false} />
            <text x="164" y="44" fontSize="8.5">
              Sam: no work today
            </text>
          </Fade>
          <Fade show={s === 3}>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} transform={`translate(${236 + (i % 3) * 16} ${168 - Math.floor(i / 3) * 12})`}>
                <Yarn />
              </g>
            ))}
            <g transform={`translate(${(TRACK_X[3] + TRACK_X[4]) / 2} ${TRACK_Y})`}>
              <Cross />
            </g>
            <text x="300" y="200" textAnchor="middle" fontSize="8.5">
              unsold yarn
            </text>
          </Fade>
          <Note show={s === 4} color="#9a7a00">
            money → money: the goal in plain sight
          </Note>

          <style>{`
            @keyframes v2c01-run {
              0% { transform: translate(36px, 96px); }
              20% { transform: translate(108px, 96px); }
              40% { transform: translate(180px, 96px); }
              60% { transform: translate(252px, 96px); }
              75% { transform: translate(324px, 96px); }
              88% { transform: translate(180px, 170px); }
              100% { transform: translate(36px, 96px); }
            }
            .v2c01-run { animation: v2c01-run 4s linear infinite; }
          `}</style>
        </>
      )}
    </Player>
  );
}
