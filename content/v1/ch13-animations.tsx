"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";

const STYLE = `
@keyframes c13-climb {
  0% { transform: translate(52px, 196px); }
  45% { transform: translate(236px, 56px); }
  55% { transform: translate(236px, 56px); }
  100% { transform: translate(52px, 196px); }
}
@keyframes c13-pass {
  from { transform: translate(52px, 188px); }
  to { transform: translate(246px, 40px); }
}
@keyframes c13-wave {
  0%, 100% { transform: rotate(-25deg); }
  50% { transform: rotate(25deg); }
}
`;

/* ─────────────────────────────────────────────────────────────
 * 13.1 · Twelve masons and a ladder (the combined working day)
 * Marx: a dozen masons passing stones up a ladder; 12 people's
 * 144 hours together make far more than 12 isolated men.
 * ───────────────────────────────────────────────────────────── */
const Stone = () => <rect x="-5" y="-4" width="10" height="8" fill="#a3a3a3" stroke="#000" strokeWidth=".8" />;
const LADDER = { x1: 40, y1: 208, x2: 250, y2: 44 };
const along = (t: number): [number, number] => [LADDER.x1 + (LADDER.x2 - LADDER.x1) * t, LADDER.y1 + (LADDER.y2 - LADDER.y1) * t];

function Pile({ n }: { n: number }) {
  return (
    <g>
      {Array.from({ length: 18 }, (_, i) => {
        const row = Math.floor(i / 6);
        return (
          <g key={i} transform={`translate(${268 + (i % 6) * 12 + row * 6} ${38 - row * 9})`} style={{ opacity: i < n ? 1 : 0, transition: `opacity 300ms ease ${i * 60}ms` }}>
            <Stone />
          </g>
        );
      })}
    </g>
  );
}

export function TwelveMasonsAndALadder() {
  return (
    <Player
      id="anim-13-1"
      title="13.1 · Twelve masons and a ladder"
      steps={[
        { caption: "Mr. Moneybags is building a new workshop. One mason carries a stone up the ladder, comes all the way down, and climbs up again." },
        { caption: "Hire twelve masons who each work alone, and you get twelve times as much. Twelve people working 12 hours is 144 hours of work." },
        { caption: "Now line the same twelve up on the ladder and let them pass stones from hand to hand. Nobody climbs at all. The stones fly up." },
        { caption: "Same 12 people, same 144 hours, far more stones on top. Marx says working together creates a new power that is more than the sum of the parts.", ms: 4600 },
        { caption: "Some jobs can only happen together. One person cannot lift a huge log, however long he tries. Many hands lift it at once.", ms: 4200 },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>

          <Fade show={s <= 3}>
            {/* the wall being built and its top */}
            <rect x="256" y="44" width="96" height="164" fill="#d9d9d9" stroke="#000" strokeOpacity=".3" />
            {/* the ladder */}
            {[-6, 6].map((d) => (
              <line key={d} x1={LADDER.x1 + d} y1={LADDER.y1 + d} x2={LADDER.x2 + d} y2={LADDER.y2 + d} stroke="#8a5a2b" strokeWidth="2.5" />
            ))}
            {Array.from({ length: 14 }, (_, i) => {
              const [x, y] = along((i + 0.5) / 14);
              return <line key={i} x1={x - 6} y1={y - 6} x2={x + 6} y2={y + 6} stroke="#8a5a2b" strokeWidth="2" />;
            })}
            <Pile n={s === 0 ? 2 : s === 1 ? 6 : 18} />

            {/* step 0: one mason climbing up and down */}
            {s === 0 && (
              <g style={{ animation: "c13-climb 4s ease-in-out infinite" }}>
                <Figure name="" x={0} y={0} scale={0.42} label={false} />
                <g transform="translate(8 -20)">
                  <Stone />
                </g>
              </g>
            )}

            {/* step 1: twelve masons, each on their own */}
            <Fade show={s === 1}>
              <rect x="14" y="18" width="200" height="40" fill="#fff" stroke="#000" strokeOpacity=".2" />
              <text x="114" y="34" textAnchor="middle" fontSize="10.5" fontWeight="600">
                12 masons, each climbing alone
              </text>
              <text x="114" y="49" textAnchor="middle" fontSize="9.5">
                12 people × 12 hours = 144 hours
              </text>
            </Fade>
            {s === 1 && (
              <g style={{ animation: "c13-climb 4s ease-in-out infinite" }}>
                <Figure name="" x={0} y={0} scale={0.42} label={false} />
              </g>
            )}

            {/* steps 2 and 3: a chain of twelve passing stones */}
            <Fade show={s >= 2}>
              {Array.from({ length: 12 }, (_, i) => {
                const [x, y] = along((i + 0.5) / 12);
                return <Figure key={i} who={i === 4 ? "sam" : undefined} name="" x={x + 10} y={y + 12} scale={0.32} label={false} />;
              })}
              {s >= 2 &&
                Array.from({ length: 6 }, (_, i) => (
                  <g key={i} style={{ animation: `c13-pass 2.4s linear infinite`, animationDelay: `${-i * 0.4}s` }}>
                    <Stone />
                  </g>
                ))}
            </Fade>

            {/* the comparison */}
            <Fade show={s === 3} delay={200}>
              <rect x="8" y="10" width="176" height="66" fill="#fff" stroke="#000" strokeOpacity=".2" />
              <text x="18" y="28" fontSize="9">
                apart (144 hours)
              </text>
              <rect x="100" y="20" width="30" height="10" fill="#a3a3a3" />
              <text x="18" y="50" fontSize="9">
                together (144 hours)
              </text>
              <rect x="100" y="42" width="30" height="10" fill="#a3a3a3" />
              <rect x="130" y="42" width="46" height="10" fill={GOLD} style={{ transition: `width ${T}` }} />
              <text x="96" y="68" textAnchor="middle" fontSize="8.5" fontWeight="600">
                the extra power of working together
              </text>
            </Fade>
          </Fade>

          {/* step 4: the heavy log */}
          <Fade show={s === 4} delay={200}>
            <text x="90" y="40" textAnchor="middle" fontSize="10.5" fontWeight="600">
              alone
            </text>
            <rect x="34" y="150" width="112" height="16" rx="8" fill="#8a5a2b" stroke="#000" />
            <Figure name="" x={90} y={208} scale={0.6} mood="sad" label={false} />
            <text x="90" y="70" textAnchor="middle" fontSize="20">
              ✗
            </text>

            <text x="270" y="40" textAnchor="middle" fontSize="10.5" fontWeight="600">
              together
            </text>
            <rect x="200" y="96" width="140" height="16" rx="8" fill="#8a5a2b" stroke="#000" />
            {[214, 242, 270, 298, 326].map((x, i) => (
              <Figure key={x} who={i === 2 ? "sam" : undefined} name="" x={x} y={170} scale={0.55} label={false} />
            ))}
            <text x="270" y="200" textAnchor="middle" fontSize="9.5">
              lifted at once
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.2 · Who gets the free gift? (co-operation costs capital nothing)
 * ───────────────────────────────────────────────────────────── */
const WORKERS = Array.from({ length: 12 }, (_, i) => 108 + i * 21);

export function WhoGetsTheFreeGift() {
  return (
    <Player
      id="anim-13-2"
      title="13.2 · Who gets the free gift?"
      steps={[
        { caption: "Mr. Moneybags hires twelve workers, Sam among them. He makes twelve separate deals and pays each one a day's wage: 3 coins each." },
        { caption: "Working apart, twelve people make this much." },
        { caption: "Put to work together, the same twelve make much more. The extra comes from working as one big team." },
        { caption: "But Mr. Moneybags paid for twelve separate workers, not for their teamwork. The extra power of working together goes to him for free.", ms: 4600 },
        { caption: "Because it costs him nothing, it even looks like his own power, the power of capital. Marx says it really belongs to the workers' combined labour.", ms: 4600 },
      ]}
    >
      {(s) => (
        <>
          <Figure who="moneybags" x={44} y={150} scale={0.85} />
          {/* a crown: the gift looks like the boss's own power */}
          <Fade show={s === 4}>
            <path d="M32,74 L32,62 L38,68 L44,58 L50,68 L56,62 L56,74 Z" fill={GOLD} stroke="#000" />
          </Fade>

          {WORKERS.map((x, i) => (
            <g key={x}>
              <Figure who={i === 3 ? "sam" : undefined} name="" x={x} y={208} scale={0.4} label={false} />
              <Fade show={s === 0} delay={i * 60}>
                <g transform={`translate(${x} 166)`}>
                  <Coin r={5} />
                </g>
              </Fade>
            </g>
          ))}
          <Fade show={s === 0}>
            <text x="224" y="150" textAnchor="middle" fontSize="10">
              12 separate wages: 36 coins
            </text>
          </Fade>

          {/* what they make */}
          <Fade show={s >= 1}>
            <text x="108" y="44" fontSize="9.5">
              what the twelve make in a day
            </text>
            <rect x="108" y="52" height="20" width="120" fill="#a3a3a3" />
            <text x="168" y="66" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
              apart
            </text>
          </Fade>
          <rect x="228" y="52" height="20" width={s >= 2 ? 104 : 0} fill={GOLD} style={{ transition: `width ${T}` }} />
          <Fade show={s >= 2} delay={300}>
            <text x="280" y="66" textAnchor="middle" fontSize="9" fontWeight="600">
              + together
            </text>
          </Fade>

          {/* the gift flows to the boss */}
          <Fade show={s >= 3}>
            <path d="M280,76 C260,110 140,110 72,100" fill="none" stroke="#b38f00" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#c13-arr)" />
            <text x="190" y="124" textAnchor="middle" fontSize="10" fontWeight="600">
              paid for? no. a free gift
            </text>
          </Fade>
          <Fade show={s === 4} delay={300}>
            <text x="190" y="140" textAnchor="middle" fontSize="9.5">
              it looks like the power of capital
            </text>
          </Fade>
          <defs>
            <marker id="c13-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#b38f00" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.3 · Conductor or boss? (direction becomes a function of capital)
 * Marx: "A single violin player is his own conductor; an orchestra
 * requires a separate one." Managers and foremen are capital's
 * officers and sergeants.
 * ───────────────────────────────────────────────────────────── */
const Violin = () => (
  <g>
    <ellipse cx="0" cy="4" rx="6" ry="8" fill="#a0522d" stroke="#000" strokeWidth=".8" />
    <rect x="-1.2" y="-14" width="2.4" height="12" fill="#000" />
  </g>
);

function Baton({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g style={{ animation: "c13-wave 1s ease-in-out infinite", transformOrigin: "0 0" }}>
        <line x1="0" y1="0" x2="0" y2="-18" stroke="#000" strokeWidth="2" />
      </g>
    </g>
  );
}

export function ConductorOrBoss() {
  const band = [70, 120, 170, 220, 270, 320];
  return (
    <Player
      id="anim-13-3"
      title="13.3 · Conductor or boss?"
      steps={[
        { caption: "A violinist playing alone needs nobody to keep time. Marx says a single player is their own conductor." },
        { caption: "An orchestra is different. Many players need a conductor to keep them together." },
        { caption: "A big workshop needs direction too: someone has to plan who does what, and when." },
        { caption: "But Mr. Moneybags' direction has a second job: to make every hour he paid for turn into as much work as possible. Managers and foremen give orders in his name, like officers and sergeants in an army.", ms: 5200 },
        { caption: "The more workers there are, the more they push back, and the more control the boss adds. Marx says that in its form, this control is despotic: one person's rule.", ms: 5000 },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>

          {/* scene one: the solo violinist */}
          <Fade show={s === 0}>
            <Figure name="Violinist" x={180} y={200} />
            <g transform="translate(198 160)">
              <Violin />
            </g>
            {[[140, 90], [214, 76], [236, 104]].map(([x, y]) => (
              <text key={x} x={x} y={y} fontSize="18" className="twinkle">
                ♪
              </text>
            ))}
            <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              one player: her own conductor
            </text>
          </Fade>

          {/* scene two: the orchestra */}
          <Fade show={s === 1}>
            {band.map((x) => (
              <g key={x}>
                <Figure name="" x={x} y={208} scale={0.55} label={false} />
                <g transform={`translate(${x + 10} 184)`}>
                  <Violin />
                </g>
              </g>
            ))}
            <Figure name="Conductor" x={195} y={130} scale={0.7} />
            <Baton x={207} y={100} />
            <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
              many players: a conductor is needed
            </text>
          </Fade>

          {/* scene three: the workshop */}
          <Fade show={s >= 2}>
            {band.map((x, i) => (
              <Figure key={x} who={i === 2 ? "sam" : undefined} name="" x={x} y={208} scale={0.55} label={false} mood={s >= 3 ? "sad" : "happy"} />
            ))}
            <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
              {s === 2 ? "a big workshop: someone plans the work" : s === 3 ? "the boss's command" : "more workers, more pushback, more control"}
            </text>
          </Fade>
          <Fade show={s === 2}>
            <Figure name="Planner" x={190} y={128} scale={0.7} />
          </Fade>
          <Fade show={s >= 3}>
            <Figure who="moneybags" x={180} y={110} scale={0.6} label={false} />
            <Figure name="" x={86} y={140} scale={0.5} label={false} />
            <Figure name="" x={276} y={140} scale={0.5} label={false} />
            <text x="86" y="156" textAnchor="middle" fontSize="8.5">
              manager (officer)
            </text>
            <text x="276" y="156" textAnchor="middle" fontSize="8.5">
              foreman (sergeant)
            </text>
            <text x="180" y="124" textAnchor="middle" fontSize="8.5">
              Mr. Moneybags
            </text>
          </Fade>
          <Fade show={s === 4} delay={300}>
            {band.map((x) => (
              <text key={x} x={x} y="170" textAnchor="middle" fontSize="12" fontWeight="700" fill="#d6452f">
                !
              </text>
            ))}
            <text x="180" y="48" textAnchor="middle" fontSize="9.5">
              Marx: control that is &ldquo;despotic&rdquo; in form
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
