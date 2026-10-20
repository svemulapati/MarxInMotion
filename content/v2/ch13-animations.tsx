"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Corn, Fade, Linen, Place } from "@/components/anim/Things";
import { Sack } from "./ch10-animations";

const STYLE = `
@keyframes v2c13-snow { from { transform: translateY(-10px); opacity: 0 } 30% { opacity: 1 } to { transform: translateY(46px); opacity: 0 } }
.v2c13-snow { animation: v2c13-snow 2.6s linear infinite; }
`;

/** A wine barrel. */
function Barrel() {
  return (
    <g>
      <path d="M-12,-15 Q-17,0 -12,15 L12,15 Q17,0 12,-15 Z" fill="#a0612f" stroke="#000" strokeWidth="1.1" />
      <line x1="-15" y1="-6" x2="15" y2="-6" stroke="#000" strokeWidth="1.4" />
      <line x1="-15" y1="6" x2="15" y2="6" stroke="#000" strokeWidth="1.4" />
      <circle cx="0" cy="0" r="2" fill="#5b2a6e" />
    </g>
  );
}

/** One small wheat plant; `h` 0 to 1 is how grown it is. */
function Sprout({ h }: { h: number }) {
  return (
    <g style={{ transform: `scaleY(${0.15 + h * 0.85})`, transformBox: "fill-box", transformOrigin: "50% 100%", transition: "transform 900ms ease" }}>
      <line x1="0" y1="0" x2="0" y2="-22" stroke="#6b8f3a" strokeWidth="2" />
      <ellipse cx="0" cy="-26" rx="3" ry="6" fill={h > 0.9 ? "#e8c35a" : "#8bb35a"} stroke="#000" strokeWidth=".6" />
    </g>
  );
}

const MONTHS = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const MX = (m: number) => 38 + m * 31;

/* ─────────────────────────────────────────────────────────────
 * 13.1 · Ned's year (production time is longer than working time)
 * Marx: winter grain needs about nine months to mature, and labour is
 * almost entirely suspended between sowing and harvest.
 * ───────────────────────────────────────────────────────────── */
export function NedsYear() {
  return (
    <Player
      id="anim-v2-13-1"
      title="13.1 · Ned's year"
      viewBox="0 0 360 226"
      steps={[
        { caption: "October. Grandpa Ned sows his winter wheat. He pays for the seed and for his helpers now. This is work." },
        {
          caption: "All winter and spring the wheat grows by itself. Ned hardly works in the field at all, but his money is still tied up in it.",
          ms: 4600,
        },
        { caption: "July. Harvest. Work again, and only now can the wheat be sold and the money come back." },
        {
          caption: "So Ned's wheat spent about nine months being produced, but only a few weeks being worked on. Marx calls the whole time production time. Working time is only part of it.",
          ms: 5600,
        },
        {
          caption: "It happens in many trades. Grape juice must ferment and rest to become wine. Pots must dry. An oak takes about a hundred years. All that time, the capital waits.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const grown = s === 0 ? 0 : s === 1 ? 0.6 : 1;
        const summary = s >= 3;
        return (
          <>
            <style>{STYLE}</style>

            {/* the field */}
            <Fade show={s <= 3}>
              <rect x="20" y="96" width="320" height="10" fill="#8a5a2b" opacity=".5" />
              {Array.from({ length: 14 }, (_, i) => (
                <g key={i} transform={`translate(${34 + i * 22} 96)`}>
                  <Sprout h={grown} />
                </g>
              ))}
              <Figure who="ned" x={s === 1 ? 328 : 36} y={90} scale={0.62} mood={s === 1 ? "sleepy" : "happy"} />
              <Fade show={s === 0}>
                <g transform="translate(110 62)">
                  <Sack />
                </g>
                <g transform="translate(200 52)">
                  <Coins n={2} label="seed and wages, paid now" />
                </g>
              </Fade>
              <Fade show={s === 1}>
                {[[60, 20], [120, 34], [180, 16], [240, 30], [300, 22]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke="#000" strokeOpacity=".3" className="v2c13-snow" style={{ animationDelay: `${i * 400}ms` }} />
                ))}
                <text x="180" y="62" textAnchor="middle" fontSize="9" fontWeight="600">
                  nature is working; Ned is not
                </text>
              </Fade>
              <Fade show={s === 2}>
                <g transform="translate(290 30)">
                  <Coins n={3} label="money back at last" />
                </g>
              </Fade>
            </Fade>

            {/* the timeline */}
            <g opacity={s <= 3 ? 1 : 0} style={{ transition: "opacity 500ms" }}>
              {MONTHS.map((m, i) => (
                <text key={m} x={MX(i) + 15} y="186" textAnchor="middle" fontSize="7.5" fillOpacity=".55">
                  {m}
                </text>
              ))}
              <rect x={MX(0)} y="140" width={MX(10) - MX(0)} height="14" fill="#fff" stroke="#000" strokeWidth=".8" />
              {/* production time: the whole span */}
              <Fade show={summary}>
                <rect x={MX(0)} y="140" width={MX(10) - MX(0)} height="14" fill="url(#v2c13-grow-hatch)" />
                <text x={MX(5)} y="134" textAnchor="middle" fontSize="8.5" fontWeight="600">
                  production time: about nine months
                </text>
              </Fade>
              {/* working time: sowing and harvest */}
              <rect x={MX(0)} y="158" width="22" height="12" fill="#2a9d5b" opacity={s >= 0 ? 1 : 0} />
              <rect x={MX(9)} y="158" width="26" height="12" fill="#2a9d5b" opacity={s >= 2 ? 1 : 0} style={{ transition: "opacity 500ms" }} />
              <Fade show={summary}>
                <text x={MX(5)} y="168" textAnchor="middle" fontSize="8.5" fill="#2a9d5b" fontWeight="600">
                  working time: a few weeks
                </text>
              </Fade>
              <defs>
                <pattern id="v2c13-grow-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="6" height="6" fill="#e9f3dd" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#6b8f3a" strokeWidth="2" />
                </pattern>
              </defs>
            </g>

            {/* other trades */}
            <Fade show={s === 4}>
              {[
                { x: 60, label: "wine", time: "ferments, then rests", draw: <Barrel /> },
                { x: 140, label: "pots", time: "must dry", draw: <path d="M-10,-14 h20 q4,14 -2,26 h-16 q-6,-12 -2,-26 Z" fill="#c98a5a" stroke="#000" strokeWidth="1" /> },
                { x: 220, label: "wheat", time: "about 9 months", draw: <Corn /> },
                {
                  x: 300,
                  label: "an oak",
                  time: "about 100 years",
                  draw: (
                    <g>
                      <rect x="-3" y="0" width="6" height="16" fill="#6b4a2b" />
                      <circle cx="0" cy="-8" r="15" fill="#4f8a3a" stroke="#000" strokeWidth="1" />
                    </g>
                  ),
                },
              ].map((t, i) => (
                <g key={t.label}>
                  <Place x={t.x} y={90} show={s === 4} delay={i * 150}>
                    {t.draw}
                  </Place>
                  <text x={t.x} y="132" textAnchor="middle" fontSize="9" fontWeight="600">
                    {t.label}
                  </text>
                  <text x={t.x} y="145" textAnchor="middle" fontSize="8">
                    {t.time}
                  </text>
                </g>
              ))}
              <text x="180" y="190" textAnchor="middle" fontSize="9.5" fontWeight="600">
                nature works, labour waits, capital is tied up
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.2 · Hurrying nature (shortening production time)
 * Marx's examples: tanning from 6-18 months to 1½-2 months with an
 * air-pump; chemical bleaching instead of bleaching on the green;
 * puddling (about 1780) to the Bessemer process.
 * ───────────────────────────────────────────────────────────── */
const MONTH_PX = 14;

export function HurryingNature() {
  return (
    <Player
      id="anim-v2-13-2"
      title="13.2 · Hurrying nature"
      viewBox="0 0 360 214"
      steps={[
        { caption: "Tanning leather the old way: hides soaked in pits of tree bark for six to eighteen months while the tannin slowly sank in." },
        { caption: "With a new air-pump, the same job took only one and a half to two months. The capital comes back many times faster." },
        { caption: "Linen used to be bleached by laying it out on the grass in the sun, a slow job left to nature. Chemical bleaching did it far faster." },
        {
          caption: "But every shortcut needs more machines and bigger works. Marx's grandest example is steel: from puddling around 1780 to the Bessemer process. Production time fell enormously, but fixed capital grew just as much.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="14" y="22" fontSize="9" fontWeight="600">
            tanning a hide
          </text>
          <text x="14" y="44" fontSize="8">
            old pits
          </text>
          <rect x="90" y="34" width={18 * MONTH_PX} height="14" fill="none" stroke="#000" strokeDasharray="3 2" strokeWidth=".8" />
          <rect x="90" y="34" width={6 * MONTH_PX} height="14" fill="#8a5a2b" />
          <rect x={90 + 6 * MONTH_PX} y="34" width={12 * MONTH_PX} height="14" fill="#8a5a2b" opacity=".4" />
          <text x={86 + 18 * MONTH_PX} y="44" fontSize="8" textAnchor="end" fontWeight="600">
            6 to 18 months
          </text>

          <Fade show={s >= 1}>
            <text x="14" y="70" fontSize="8">
              air-pump
            </text>
            <rect x="90" y="60" width={2 * MONTH_PX} height="14" fill="#2a9d5b" style={{ transition: "width 700ms" }} />
            <text x={96 + 2 * MONTH_PX} y="71" fontSize="8" fontWeight="600" fill="#2a9d5b">
              1½ to 2 months
            </text>
          </Fade>

          <Fade show={s >= 2}>
            <text x="14" y="104" fontSize="9" fontWeight="600">
              bleaching linen
            </text>
            <rect x="90" y="112" width="120" height="20" fill="#8bc34a" opacity=".6" />
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${112 + i * 38} 122) scale(.8)`}>
                <Linen />
              </g>
            ))}
            <text x="150" y="146" textAnchor="middle" fontSize="8">
              on the grass: slow
            </text>
            <rect x="240" y="112" width="34" height="20" fill="#cfe3ff" stroke="#000" strokeWidth=".8" />
            <text x="257" y="146" textAnchor="middle" fontSize="8" fill="#2a9d5b" fontWeight="600">
              chemicals: fast
            </text>
          </Fade>

          <Fade show={s >= 3}>
            <line x1="14" y1="160" x2="346" y2="160" stroke="#000" strokeOpacity=".12" />
            <text x="14" y="178" fontSize="9" fontWeight="600">
              steel
            </text>
            <text x="60" y="178" fontSize="8">
              puddling (about 1780) → Bessemer process
            </text>
            <text x="14" y="198" fontSize="8.5">
              production time
            </text>
            <rect x="110" y="190" width="30" height="10" fill="#2a9d5b" />
            <text x="146" y="198" fontSize="8" fill="#2a9d5b">
              far shorter
            </text>
            <text x="200" y="198" fontSize="8.5">
              machines
            </text>
            <rect x="246" y="190" width="90" height="10" fill="#555" />
            <text x="291" y="208" textAnchor="middle" fontSize="8">
              far bigger
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.3 · What farm families do in winter (rural domestic industry)
 * Marx's example: in parts of northern Russia field work is possible
 * only 130 to 150 days a year, so villages weave, tan and make shoes.
 * ───────────────────────────────────────────────────────────── */
export function WinterWork() {
  return (
    <Player
      id="anim-v2-13-3"
      title="13.3 · What farm families do in winter"
      viewBox="0 0 360 214"
      steps={[
        { caption: "Field work can only happen in part of the year. In parts of northern Russia, Marx notes, it was possible on only 130 to 150 days." },
        { caption: "So for months the farm families have nothing to do in the fields. In the long winter they weave, tan leather and make shoes at home." },
        {
          caption: "Then a merchant arrives. Tom brings the yarn and takes away the finished cloth. Capital first reaches the village in the shape of the merchant.",
          ms: 5000,
        },
        {
          caption: "Later the factories take the weaving away altogether. The farm worker is left with odd jobs between seasons, and Marx says his condition gets worse.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const field = 140 / 365;
        return (
          <>
            {/* the year */}
            <text x="14" y="22" fontSize="9" fontWeight="600">
              a year in the north
            </text>
            <rect x="14" y="30" width="332" height="16" fill="#cfe3ff" stroke="#000" strokeWidth=".8" />
            <rect x={14 + 332 * 0.33} y="30" width={332 * field} height="16" fill="#8bc34a" />
            <text x={14 + 332 * (0.33 + field / 2)} y="42" textAnchor="middle" fontSize="8" fontWeight="600">
              field work: 130 to 150 days
            </text>
            <text x="60" y="42" textAnchor="middle" fontSize="8">
              winter
            </text>
            <text x="300" y="42" textAnchor="middle" fontSize="8">
              winter
            </text>

            {/* the cottage */}
            <g transform="translate(110 130)">
              <rect x="-40" y="-26" width="80" height="50" fill="#fff" stroke="#000" strokeWidth="1.1" />
              <path d="M-48,-26 L0,-56 L48,-26 Z" fill="#cfcfcf" stroke="#000" strokeWidth="1.1" />
            </g>
            <Figure name="farm family" x={92} y={152} scale={0.55} mood={s === 3 ? "sad" : "happy"} />
            <Fade show={s >= 1 && s < 3}>
              <g transform="translate(130 138)">
                <rect x="-12" y="-10" width="24" height="20" fill="none" stroke="#6b4a2b" strokeWidth="2" />
                {[-6, 0, 6].map((x) => (
                  <line key={x} x1={x} y1="-10" x2={x} y2="10" stroke="#2f6fd6" strokeWidth="1" />
                ))}
              </g>
              <text x="110" y="176" textAnchor="middle" fontSize="8">
                weaving at home in winter
              </text>
            </Fade>

            {/* the merchant */}
            <Figure who="tom" x={250} y={152} scale={0.6} style={{ opacity: s === 2 ? 1 : 0, transition: "opacity 500ms" }} />
            <Fade show={s === 2}>
              <path d="M228,112 C200,100 180,104 160,112" stroke="#000" strokeWidth="1" fill="none" markerEnd="url(#v2c13-arr)" />
              <text x="196" y="96" textAnchor="middle" fontSize="8">
                yarn in
              </text>
              <path d="M160,150 C185,166 210,166 232,152" stroke="#000" strokeWidth="1" fill="none" markerEnd="url(#v2c13-arr)" />
              <g transform="translate(196 178) scale(.7)">
                <Linen />
              </g>
              <text x="196" y="196" textAnchor="middle" fontSize="8">
                cloth out, to Tom
              </text>
            </Fade>

            {/* the factory takes over */}
            <Fade show={s === 3}>
              <g transform="translate(270 130)">
                <path d="M-30,24 L-30,-6 L-16,-16 L-16,-6 L-2,-16 L-2,-6 L12,-16 L12,24 Z" fill="#fff" stroke="#000" strokeWidth="1.1" />
                <rect x="16" y="-34" width="8" height="58" fill="#fff" stroke="#000" strokeWidth="1.1" />
              </g>
              <text x="270" y="172" textAnchor="middle" fontSize="8">
                the weaving moves here
              </text>
              <text x="110" y="196" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                left with odd jobs
              </text>
            </Fade>
            <defs>
              <marker id="v2c13-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>
          </>
        );
      }}
    </Player>
  );
}
