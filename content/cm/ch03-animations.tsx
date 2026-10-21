"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Fade, Place } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * 3.1 · Five kinds of "socialism" (how Marx and Engels sort their rivals)
 * ───────────────────────────────────────────────────────────── */
const SPEAKERS = [
  { name: "Old Lord", slogan: ["Things were better", "in the old days!"], verdict: ["wants the", "past back"] },
  { name: "Sismondi", slogan: ["Bring back the guilds", "and the small farms!"], verdict: ["sees problems,", "looks back"] },
  { name: "Philosopher", slogan: ["Truth! Humanity!", "Man in general!"], verdict: ["fine words,", "no struggle"] },
  { name: "Mr. Kindly", slogan: ["Help the poor, but", "change nothing big!"], verdict: ["helps, but keeps", "the boss on top"] },
  { name: "Owen", slogan: ["Build a perfect", "village by example!"], verdict: ["good criticism,", "dream plans"] },
];
const SX = (i: number) => 36 + i * 72;

export function FiveSocialisms() {
  return (
    <Player
      id="anim-cm-3-1"
      title={"3.1 · Five kinds of “socialism”"}
      viewBox="0 0 360 230"
      steps={[
        { caption: "In 1847 many writers called themselves socialists. Marx and Engels sort them into groups, and they criticise almost all of them." },
        {
          caption: "Feudal socialism: old aristocrats who attack the new factory owners while siding against workers in practice. Marx and Engels say they want the past back. Christian socialism, they add, goes hand in hand with it.",
          ms: 5200,
        },
        {
          caption: "Petty-bourgeois socialism, led by Sismondi: sharp about machines, crises and the ruin of small farmers and shopkeepers, but its answer is to bring back the guilds and the old ways.",
          ms: 5200,
        },
        {
          caption: "German or “true” socialism: philosophers who turned French ideas into talk about “Human Nature” and “Man in general”, with no class struggle at all.",
          ms: 5000,
        },
        {
          caption: "Conservative or bourgeois socialism: reformers who want to fix the worst problems while keeping owners and workers as they are. Marx and Engels give Proudhon's book as an example.",
          ms: 5000,
        },
        {
          caption: "Critical-utopian socialism: Saint-Simon, Fourier and Owen. Marx and Engels praise their criticism of society, but call their plans for perfect communities castles in the air.",
          ms: 5200,
        },
        {
          caption: "Their own view: change would come from workers organising as a class, not from good plans or kind owners. Most of these rivals strongly disagreed with that, as the critics below show.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const active = s >= 1 && s <= 5 ? s - 1 : -1;
        return (
          <>
            {/* the slogan of whoever is speaking */}
            {SPEAKERS.map((sp, i) => (
              <Fade key={sp.name} show={active === i}>
                <rect x="70" y="14" width="220" height="40" fill="#fff" stroke="#000" />
                <path d={`M${Math.min(Math.max(SX(i), 90), 270) - 6},54 L${SX(i)},74 L${Math.min(Math.max(SX(i), 90), 270) + 6},54 Z`} fill="#fff" stroke="#000" />
                <rect x={Math.min(Math.max(SX(i), 90), 270) - 5} y="52" width="10" height="3" fill="#fff" />
                <text x="180" y="30" textAnchor="middle" fontSize="11">
                  {sp.slogan[0]}
                </text>
                <text x="180" y="45" textAnchor="middle" fontSize="11">
                  {sp.slogan[1]}
                </text>
              </Fade>
            ))}

            {SPEAKERS.map((sp, i) => {
              const seen = s > i + 1 || s === 6;
              const now = active === i;
              return (
                <g key={sp.name} style={{ opacity: s === 0 || now || seen ? 1 : 0.35, transition: "opacity 400ms" }}>
                  <Figure name={sp.name} x={SX(i)} y={150} scale={now ? 0.95 : 0.8} mood={now ? "wow" : "happy"} label={false} />
                  <text x={SX(i)} y="166" textAnchor="middle" fontSize="8.5">
                    {sp.name}
                  </text>
                  <Fade show={seen}>
                    <rect x={SX(i) - 34} y="176" width="68" height="28" fill="#f1f1f1" />
                    {sp.verdict.map((line, k) => (
                      <text key={k} x={SX(i)} y={188 + k * 10} textAnchor="middle" fontSize="7.5">
                        {line}
                      </text>
                    ))}
                  </Fade>
                </g>
              );
            })}

            <Fade show={s === 6} delay={300}>
              <rect x="40" y="210" width="280" height="18" fill="#000" />
              <text x="180" y="222" textAnchor="middle" fontSize="9" fill="#fff">
                their answer: workers organising as a class
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.2 · The perfect village (critical-utopian socialism)
 * ───────────────────────────────────────────────────────────── */
function Village({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-60" y="-6" width="120" height="44" fill="#e7f0dc" stroke="#000" strokeOpacity=".4" />
      {[-42, -14, 14, 42].map((hx, i) => (
        <g key={hx} transform={`translate(${hx} ${i % 2 ? 22 : 10})`}>
          <rect x="-9" y="-6" width="18" height="14" fill="#fff" stroke="#000" />
          <polygon points="-11,-6 0,-15 11,-6" fill="#c2407f" />
        </g>
      ))}
      <circle cx="0" cy="28" r="5" fill="#2a9d5b" />
    </g>
  );
}

export function ThePerfectVillage() {
  return (
    <Player
      id="anim-cm-3-2"
      title="3.2 · The perfect village"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Before Marx, three thinkers drew plans for a fairer world: Henri de Saint-Simon, Charles Fourier and Robert Owen." },
        {
          caption: "Owen built model communities he called “Home Colonies”. Fourier planned great shared buildings called phalanstères. Étienne Cabet dreamed of a land called Icaria.",
          ms: 4800,
        },
        {
          caption: "They asked everyone, even the rich, to join in and pay for it, hoping a good example would win the whole world over.",
        },
        {
          caption: "Marx and Engels praised their attack on the old society, calling their writings full of “the most valuable materials” for teaching workers.",
          ms: 4600,
        },
        {
          caption: "But they called the plans Utopian: “castles in the air”. No plan drawn up by a clever inventor, they said, could replace workers organising themselves. Critics reply that some of these ideas, like co-operatives, worked and lasted.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {["Saint-Simon", "Fourier", "Owen"].map((n, i) => (
            <g key={n}>
              <Figure name={n} x={52 + i * 50} y={196} scale={0.75} />
              <Fade show={s === 0}>
                <g transform={`translate(${52 + i * 50} 120)`}>
                  <rect x="-14" y="-10" width="28" height="20" fill="#fffbe6" stroke="#000" />
                  <path d="M-8,-3 h16 M-8,3 h12" stroke="#000" strokeOpacity=".5" />
                </g>
              </Fade>
            </g>
          ))}

          {/* the planned village, later a castle in the clouds */}
          <g style={{ transform: `translateY(${s === 4 ? -36 : 0}px)`, opacity: s >= 1 ? 1 : 0, transition: "transform 900ms ease, opacity 500ms" }}>
            <Village x={262} y={96} />
            <text x="262" y="78" textAnchor="middle" fontSize="9">
              {s >= 1 ? "Home Colonies, phalanstères, Icaria" : ""}
            </text>
          </g>
          <Fade show={s === 4}>
            {[
              [212, 108],
              [240, 114],
              [272, 112],
              [306, 108],
            ].map(([cx, cy], i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="22" ry="10" fill="#fff" stroke="#000" strokeOpacity=".3" />
            ))}
            <text x="262" y="138" textAnchor="middle" fontSize="9.5" fontWeight="600">
              castles in the air?
            </text>
          </Fade>

          {/* asking the rich to pay */}
          <Fade show={s === 2}>
            <Figure who="moneybags" x={318} y={196} scale={0.75} />
            <Place x={290} y={170} show={s === 2}>
              <Coins n={3} />
            </Place>
            <path d="M296,160 C290,150 280,146 270,140" fill="none" stroke="#000" strokeOpacity=".4" strokeDasharray="3 3" />
          </Fade>

          <Fade show={s === 3}>
            <rect x="196" y="164" width="150" height="30" fill="#fff" stroke="#2a9d5b" />
            <text x="271" y="177" textAnchor="middle" fontSize="8.5">
              praised: their criticism
            </text>
            <text x="271" y="188" textAnchor="middle" fontSize="8.5">
              of the old society
            </text>
          </Fade>
          <Fade show={s === 4} delay={300}>
            <rect x="196" y="164" width="150" height="30" fill="#fff" stroke="#d6452f" />
            <text x="271" y="177" textAnchor="middle" fontSize="8.5">
              doubted: change from
            </text>
            <text x="271" y="188" textAnchor="middle" fontSize="8.5">
              clever plans and good examples
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
