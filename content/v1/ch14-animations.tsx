"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Cross, Fade, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";

const STYLE = `
@keyframes c14-flow {
  from { transform: translateX(0); opacity: 0; }
  8% { opacity: 1; }
  92% { opacity: 1; }
  to { transform: translateX(268px); opacity: 0; }
}
@keyframes c14-tap {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}
`;

/* ─────────────────────────────────────────────────────────────
 * 14.1 · Two roads into the workshop (the two origins of manufacture)
 * Marx: the carriage (wheelwrights, harness-makers, tailors, ...)
 * and the needle (one Nuremberg needlemaker doing perhaps 20
 * operations; in England, 20 needlemakers each doing one).
 * ───────────────────────────────────────────────────────────── */
const Carriage = () => (
  <g>
    <rect x="-24" y="-16" width="48" height="22" rx="4" fill="#7b4bd6" stroke="#000" strokeWidth="1.2" />
    <rect x="-16" y="-12" width="12" height="9" fill="#cfe0f7" stroke="#000" strokeWidth=".8" />
    <rect x="4" y="-12" width="12" height="9" fill="#cfe0f7" stroke="#000" strokeWidth=".8" />
    {[-14, 14].map((x) => (
      <g key={x}>
        <circle cx={x} cy="12" r="8" fill="#fff" stroke="#000" strokeWidth="1.2" />
        <circle cx={x} cy="12" r="1.5" fill="#000" />
      </g>
    ))}
  </g>
);

const CRAFTS = [
  { job: "wheelwright", ring: [60, 70], hall: [62, 196] },
  { job: "harness-maker", ring: [180, 44], hall: [109, 196] },
  { job: "tailor (Ava)", ring: [300, 70], hall: [156, 196], ava: true },
  { job: "upholsterer", ring: [60, 160], hall: [203, 196] },
  { job: "glazier", ring: [180, 196], hall: [250, 196] },
  { job: "painter", ring: [300, 160], hall: [297, 196] },
];

const Needle = () => (
  <g>
    <line x1="-9" y1="0" x2="9" y2="0" stroke="#555" strokeWidth="1.6" />
    <ellipse cx="-6" cy="0" rx="2" ry="1" fill="none" stroke="#555" strokeWidth=".8" />
  </g>
);

export function TwoRoadsIntoTheWorkshop() {
  return (
    <Player
      id="anim-14-1"
      title="14.1 · Two roads into the workshop"
      steps={[
        { caption: "Road one, Marx's own example: a carriage. It used to be made by craftspeople all over town: a wheelwright, a harness-maker, a tailor, an upholsterer, a glazier, a painter." },
        { caption: "Mr. Moneybags gathers them all into one carriage workshop. Now they work into each other's hands, one carriage after another." },
        { caption: "Soon each one does nothing but carriage work. Ava used to sew whole coats. Now she sews carriage cushions all day, and slowly loses the knack of making a coat. Marx says this happened to the tailor too.", ms: 5200 },
        { caption: "Road two, also Marx's: needles. In old Nuremberg, one needlemaker did perhaps 20 different steps, one after another, to make a needle." },
        { caption: "In England, 20 needlemakers soon sat side by side, each doing just one of those 20 steps. Both roads end in the same place: a workshop of detail workers.", ms: 4800 },
      ]}
    >
      {(s) => {
        const carriageScene = s <= 2;
        return (
          <>
            <style>{STYLE}</style>
            {/* road one: the carriage */}
            <Fade show={carriageScene}>
              <Fade show={s >= 1}>
                <rect x="34" y="128" width="292" height="92" fill="#fff" stroke="#000" strokeOpacity=".3" />
                <text x="180" y="142" textAnchor="middle" fontSize="9.5" fontWeight="600">
                  Mr. Moneybags&apos; carriage workshop
                </text>
              </Fade>
              <Place x={180} y={s === 0 ? 116 : 78} scale={s === 0 ? 1 : 1.2}>
                <Carriage />
              </Place>
              {CRAFTS.map((c) => {
                const [x, y] = s === 0 ? c.ring : c.hall;
                return (
                  <g key={c.job}>
                    <Figure
                      who={c.ava ? "ava" : undefined}
                      name=""
                      x={x}
                      y={y}
                      scale={0.5}
                      label={false}
                      mood={c.ava && s === 2 ? "sad" : "happy"}
                    />
                    <text x={x} y={y + 10} textAnchor="middle" fontSize="7.5" style={{ transition: `all ${T}` }}>
                      {c.job}
                    </text>
                  </g>
                );
              })}
              <Fade show={s === 2} delay={300}>
                <g transform="translate(262 98)">
                  <circle r="20" fill="#fff" stroke="#000" />
                  <g transform="scale(.5)">
                    <Coat />
                  </g>
                  <g transform="translate(10 -10)">
                    <Cross />
                  </g>
                </g>              </Fade>
            </Fade>

            {/* road two: the needle */}
            <Fade show={!carriageScene}>
              <text x="180" y="28" textAnchor="middle" fontSize="11" fontWeight="600">
                {s === 3 ? "Nuremberg: one needlemaker, about 20 steps" : "England: 20 needlemakers, one step each"}
              </text>
              {/* one maker cycling through 20 steps */}
              <Fade show={s === 3}>
                <Figure name="" x={180} y={214} scale={0.7} label={false} />
                {Array.from({ length: 20 }, (_, i) => {
                  const a = (i / 20) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <g key={i} transform={`translate(${180 + Math.cos(a) * 64} ${98 + Math.sin(a) * 44})`}>
                      <circle r="7" fill="#fff" stroke="#000" strokeWidth=".8" className="twinkle" style={{ animationDelay: `${i * 0.12}s`, animationDuration: "2.4s" }} />
                      <text y="3" textAnchor="middle" fontSize="6.5">
                        {i + 1}
                      </text>
                    </g>
                  );
                })}
              </Fade>
              {/* twenty makers in a row */}
              <Fade show={s === 4}>
                {Array.from({ length: 20 }, (_, i) => {
                  const x = 22 + (i % 10) * 35;
                  const y = i < 10 ? 112 : 196;
                  return (
                    <g key={i}>
                      <Figure who={i === 6 ? "sam" : undefined} name="" x={x} y={y} scale={0.38} label={false} />
                      <text x={x} y={y + 10} textAnchor="middle" fontSize="7">
                        step {i + 1}
                      </text>
                    </g>
                  );
                })}
                {[0, 1, 2].map((k) => (
                  <g key={k} style={{ animation: "c14-flow 3s linear infinite", animationDelay: `${k}s` }}>
                    <g transform="translate(46 64)">
                      <Needle />
                    </g>
                  </g>
                ))}
              </Fade>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14.2 · The needle's journey (serial manufacture and its ladder)
 * Marx: the wire passes through the hands of 72, sometimes 92,
 * detail workers. Shown here as five stations.
 * ───────────────────────────────────────────────────────────── */
const STATIONS = [
  { job: "cut", skill: false },
  { job: "straighten", skill: false },
  { job: "point", skill: true, sam: true },
  { job: "punch eye", skill: true },
  { job: "polish", skill: false },
];
const SX = (i: number) => 52 + i * 64;

export function TheNeedlesJourney() {
  return (
    <Player
      id="anim-14-2"
      title="14.2 · The needle's journey"
      steps={[
        { caption: "Making a needle by yourself means doing every step: cut the wire, straighten it, sharpen the point, punch the eye, polish. One needle, then start again." },
        { caption: "Now split the steps between five workers in a line. Each needle passes from hand to hand. Marx says real needle wire went through 72, sometimes 92, pairs of hands." },
        { caption: "Because nobody switches tasks, and each gets very quick at one move, the line makes far more needles in the same hours." },
        { caption: "But look at Sam. All day, every day, he only sharpens points. One tiny move, again and again." },
        { caption: "The steps aren't all equally hard. A few need long training and get higher pay. Many need almost none. For those, the cost of learning a trade vanishes, so labour-power gets cheaper. Marx calls this a hierarchy of labour-powers.", ms: 5600 },
      ]}
    >
      {(s) => {
        const line = s >= 1;
        return (
          <>
            <style>{STYLE}</style>

            {/* one maker doing it all */}
            <Fade show={!line}>
              <Figure name="Needlemaker" x={80} y={196} />
              {STATIONS.map((st, i) => (
                <g key={st.job} transform={`translate(${150 + (i % 3) * 66} ${i < 3 ? 70 : 128})`}>
                  <rect x="-28" y="-14" width="56" height="28" fill="#fff" stroke="#000" strokeOpacity=".4" />
                  <text y="4" textAnchor="middle" fontSize="9">
                    {i + 1}. {st.job}
                  </text>
                </g>
              ))}
              <text x="250" y="184" textAnchor="middle" fontSize="10">
                every step, one person
              </text>
            </Fade>

            {/* the line */}
            <Fade show={line}>
              <line x1="24" y1="96" x2="336" y2="96" stroke="#000" strokeOpacity=".25" strokeWidth="6" />
              {STATIONS.map((st, i) => {
                const lit = s === 3 ? !!st.sam : true;
                return (
                  <g key={st.job} style={{ opacity: lit ? 1 : 0.3, transition: "opacity 500ms" }}>
                    <g style={st.sam && s === 3 ? { animation: "c14-tap .5s ease-in-out infinite" } : undefined}>
                      <Figure who={st.sam ? "sam" : undefined} name="" x={SX(i)} y={150} scale={0.6} label={false} />
                    </g>
                    <text x={SX(i)} y="166" textAnchor="middle" fontSize="9">
                      {st.job}
                    </text>
                  </g>
                );
              })}
              {s >= 1 &&
                Array.from({ length: 6 }, (_, k) => (
                  <g key={k} style={{ animation: "c14-flow 3s linear infinite", animationDelay: `${-k * 0.5}s` }}>
                    <g transform="translate(36 96)">
                      <Needle />
                    </g>
                  </g>
                ))}
            </Fade>

            {/* output */}
            <Fade show={s === 2}>
              <text x="24" y="190" fontSize="9.5">
                one maker
              </text>
              <rect x="96" y="182" width="30" height="10" fill="#a3a3a3" />
              <text x="24" y="208" fontSize="9.5">
                a line of five
              </text>
              <rect x="96" y="200" width="200" height="10" fill={GOLD} style={{ transition: `width ${T}` }} />
              <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
                same hours, far more needles
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
                Sam: sharpen, sharpen, sharpen
              </text>
            </Fade>

            {/* the hierarchy of labour-powers */}
            <Fade show={s === 4}>
              <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
                a ladder of skills and wages
              </text>
              {STATIONS.map((st, i) => (
                <g key={st.job}>
                  <rect
                    x={SX(i) - 14}
                    y={st.skill ? 38 : 64}
                    width="28"
                    height={st.skill ? 22 : 8}
                    fill={st.skill ? GOLD : "#a3a3a3"}
                  />
                </g>
              ))}
              <text x="24" y="190" fontSize="9.5">
                <tspan fill="#b38f00" fontWeight="700">skilled</tspan>: long training, higher wage
              </text>
              <text x="24" y="206" fontSize="9.5">
                <tspan fontWeight="700">unskilled</tspan>: no training needed, lower wage
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14.3 · Ava becomes a fragment (the cost to the worker, and two
 * kinds of division of labour)
 * ───────────────────────────────────────────────────────────── */
const SKILLS = [
  { label: "measure", icon: "📏", x: 70, y: 64 },
  { label: "design", icon: "✏️", x: 130, y: 36 },
  { label: "cut", icon: "✂️", x: 230, y: 36 },
  { label: "fit", icon: "🪞", x: 290, y: 64 },
  { label: "sew", icon: "🧵", x: 180, y: 96 },
];

export function AvaBecomesAFragment() {
  return (
    <Player
      id="anim-14-3"
      title="14.3 · Ava becomes a fragment"
      steps={[
        { caption: "As a tailor, Ava could do it all: design a coat, measure, cut, sew and fit it. She understood the whole job." },
        { caption: "In the carriage workshop she only sews cushion seams. One skill, used all day." },
        { caption: "Without practice, her other skills fade. Marx says this kind of work turns a person into a fragment of a worker, strong at one move and weak at everything else.", ms: 4800 },
        { caption: "The knowledge of the whole job now lives in the workshop as a whole, the collective worker, and the workshop belongs to Mr. Moneybags.", ms: 4600 },
        { caption: "Two kinds of division of labour. In the town, independent makers are linked only by buying and selling, and nobody plans the whole. In the workshop, one boss plans every move. Marx: anarchy outside, despotism inside.", ms: 5600 },
      ]}
    >
      {(s) => (
        <>
          <Fade show={s <= 3}>
            <Figure who="ava" x={180} y={204} mood={s === 2 ? "sad" : "happy"} />
            {SKILLS.map((k) => {
              const on = s === 0 || k.label === "sew";
              const faded = s >= 2 && !on;
              return (
                <g key={k.label} style={{ opacity: faded ? 0.15 : on ? 1 : 0.45, transition: "opacity 700ms" }}>
                  <line x1="180" y1="150" x2={k.x} y2={k.y + 14} stroke={CAST.ava.color} strokeOpacity={on ? 0.6 : 0.2} />
                  <circle cx={k.x} cy={k.y} r="17" fill="#fff" stroke={on ? CAST.ava.color : "#000"} strokeWidth={on ? 2 : 1} />
                  <text x={k.x} y={k.y + 5} textAnchor="middle" fontSize="14">
                    {k.icon}
                  </text>
                  <text x={k.x} y={k.y + 28} textAnchor="middle" fontSize="8.5">
                    {k.label}
                  </text>
                </g>
              );
            })}
            <Fade show={s === 1}>
              <text x="296" y="150" textAnchor="middle" fontSize="9.5" fontWeight="600">
                cushion seams,
              </text>
              <text x="296" y="162" textAnchor="middle" fontSize="9.5" fontWeight="600">
                all day
              </text>
            </Fade>
            <Fade show={s === 3}>
              <rect x="244" y="118" width="108" height="50" fill="#fff" stroke="#000" strokeOpacity=".3" />
              <text x="298" y="134" textAnchor="middle" fontSize="8.5" fontWeight="600">
                the whole job lives in
              </text>
              <text x="298" y="146" textAnchor="middle" fontSize="8.5" fontWeight="600">
                the workshop
              </text>
              <text x="298" y="160" textAnchor="middle" fontSize="8.5">
                owned by Mr. Moneybags
              </text>
            </Fade>
          </Fade>

          {/* the town versus the workshop */}
          <Fade show={s === 4} delay={200}>
            <text x="90" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
              in the town
            </text>
            <text x="90" y="38" textAnchor="middle" fontSize="9">
              linked by the market, no plan
            </text>
            {[[40, 100], [130, 86], [70, 170], [146, 168], [100, 128]].map(([x, y], i) => (
              <Figure key={i} who={(["leo", "mia", "ned", "tom", "ava"] as const)[i]} x={x} y={y} scale={0.42} label={false} />
            ))}
            {[[40, 100, 130, 86], [130, 86, 146, 168], [70, 170, 100, 128], [40, 100, 70, 170]].map(([a, b, c, d], i) => (
              <line key={i} x1={a} y1={b - 20} x2={c} y2={d - 20} stroke="#000" strokeOpacity=".25" strokeDasharray="3 3" />
            ))}
            <text x="90" y="206" textAnchor="middle" fontSize="10" fontWeight="600">
              &ldquo;anarchy&rdquo;
            </text>

            <line x1="180" y1="16" x2="180" y2="214" stroke="#000" strokeOpacity=".12" />

            <text x="270" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
              in the workshop
            </text>
            <text x="270" y="38" textAnchor="middle" fontSize="9">
              one boss plans every move
            </text>
            <Figure who="moneybags" x={270} y={100} scale={0.5} label={false} />
            {[210, 240, 270, 300, 330].map((x) => (
              <g key={x}>
                <Figure name="" x={x} y={176} scale={0.38} label={false} />
                <line x1="270" y1="104" x2={x} y2="146" stroke="#000" strokeOpacity=".35" />
              </g>
            ))}
            <text x="270" y="206" textAnchor="middle" fontSize="10" fontWeight="600">
              &ldquo;despotism&rdquo;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
