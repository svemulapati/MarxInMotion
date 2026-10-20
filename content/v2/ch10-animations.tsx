"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Corn, Cow, Cross, Fade, Loaf, Place, Tick } from "@/components/anim/Things";
import { Cotton } from "@/components/anim/Workshop";

/** A barn: the farmer's longest-lasting advance. */
export function Barn() {
  return (
    <g>
      <rect x="-18" y="-10" width="36" height="24" fill="#c0503a" stroke="#000" strokeWidth="1.1" />
      <path d="M-22,-10 L0,-26 L22,-10 Z" fill="#8a3324" stroke="#000" strokeWidth="1.1" />
      <rect x="-6" y="0" width="12" height="14" fill="#fff" stroke="#000" strokeWidth="1" />
    </g>
  );
}

/** A plough. */
export function Plough() {
  return (
    <g fill="none" stroke="#000" strokeWidth="1.6" strokeLinecap="round">
      <path d="M-18,-12 L6,6" />
      <path d="M-20,-14 L-12,-16" />
      <path d="M2,4 L16,6 L8,12 Z" fill="#9a9a9a" />
    </g>
  );
}

/** A sack of seed (or grain). */
export function Sack({ label = "SEED" }: { label?: string }) {
  return (
    <g>
      <path d="M-11,-12 Q0,-17 11,-12 L13,13 Q0,16 -13,13 Z" fill="#e8d7a8" stroke="#000" strokeWidth="1.1" />
      <path d="M-6,-14 L0,-19 L6,-14" fill="none" stroke="#000" strokeWidth="1" />
      <text y="4" textAnchor="middle" fontSize="6.5" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

/** A spinning machine: a frame with a row of spindles. */
export function Machine() {
  return (
    <g>
      <rect x="-24" y="-16" width="48" height="30" fill="#fff" stroke="#000" strokeWidth="1.2" />
      {[-15, -5, 5, 15].map((x) => (
        <g key={x}>
          <line x1={x} y1="-12" x2={x} y2="8" stroke="#6b4a2b" strokeWidth="2" />
          <ellipse cx={x} cy="-2" rx="3" ry="4.5" fill="#f3e3b3" stroke="#000" strokeWidth=".7" />
        </g>
      ))}
      <line x1="-24" y1="14" x2="-24" y2="20" stroke="#000" strokeWidth="1.5" />
      <line x1="24" y1="14" x2="24" y2="20" stroke="#000" strokeWidth="1.5" />
    </g>
  );
}

/** A labelled pile: a dashed box with a heading. */
function Pile({ x, y, w, h, title, sub, show = true, tone = "#000" }: { x: number; y: number; w: number; h: number; title: string; sub?: string; show?: boolean; tone?: string }) {
  return (
    <Fade show={show}>
      <rect x={x} y={y} width={w} height={h} fill="#fff" fillOpacity=".55" stroke={tone} strokeDasharray="4 3" />
      <text x={x + 6} y={y + 12} fontSize="9" fontWeight="600" fill={tone}>
        {title}
      </text>
      {sub && (
        <text x={x + 6} y={y + 23} fontSize="7.5" fillOpacity=".6">
          {sub}
        </text>
      )}
    </Fade>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10.1 · Quesnay's two piles (avances primitives and avances annuelles)
 * ───────────────────────────────────────────────────────────── */
export function QuesnaysTwoPiles() {
  return (
    <Player
      id="anim-v2-10-1"
      title="10.1 · Quesnay's two piles"
      steps={[
        { caption: "Long ago a French doctor, François Quesnay, studied farms like Grandpa Ned's. Here is everything Ned has put into his farm." },
        { caption: "Quesnay sorted it into two piles. The barn, the plough and the cattle last for years. He called them the original advances." },
        { caption: "The seed and the farmhands' wages are used up within the year. He called them the annual advances. Their value comes back with each harvest." },
        { caption: "At harvest there is more wheat than Ned put in. Quesnay and his followers, the Physiocrats, thought this extra was a gift of nature, made only on the land.", ms: 4600 },
        { caption: "Marx says the sorting was right: it is about how the value of each thing comes back, slowly or all at once. But Quesnay only saw it on farms, and nature is not where the extra comes from.", ms: 5200 },
      ]}
    >
      {(s) => {
        const sorted = s >= 1;
        const annual = s >= 2;
        return (
          <>
            <Pile x={8} y={118} w={168} h={94} title="original advances" sub="last for years, paid back slowly" show={sorted} />
            <Pile x={184} y={118} w={168} h={94} title="annual advances" sub="used up each year, paid back at once" show={annual} />

            <Place x={sorted ? 42 : 36} y={sorted ? 180 : 66}>
              <Barn />
            </Place>
            <Place x={sorted ? 92 : 92} y={sorted ? 182 : 66}>
              <Plough />
            </Place>
            <Place x={sorted ? 142 : 150} y={sorted ? 180 : 66} scale={0.85}>
              <Cow />
            </Place>
            <Place x={annual ? 228 : 214} y={annual ? 180 : 66}>
              <Sack />
            </Place>
            <Place x={annual ? 296 : 272} y={annual ? 184 : 70}>
              <Coins n={3} label="farmhands' wages" />
            </Place>
            <Figure who="ned" x={332} y={98} scale={0.62} style={{ opacity: s <= 2 ? 1 : 0, transition: "opacity 500ms" }} />

            {/* the harvest and Quesnay's answer */}
            <Fade show={s === 3}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <g key={i} transform={`translate(${96 + i * 26} 54)`}>
                  <Corn />
                </g>
              ))}
              <circle cx="300" cy="44" r="13" fill="#f2c94c" stroke="#000" strokeWidth="1" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <line key={a} x1="300" y1="25" x2="300" y2="20" stroke="#000" strokeWidth="1.2" transform={`rotate(${a} 300 44)`} />
              ))}
              <text x="160" y="92" textAnchor="middle" fontSize="9.5" fontWeight="600">
                the extra: a gift of nature?
              </text>
              <text x="160" y="104" textAnchor="middle" fontSize="8">
                Physiocrats: only the land makes a surplus
              </text>
            </Fade>

            {/* Marx's verdict */}
            <Fade show={s === 4}>
              <g transform="translate(26 38)">
                <Tick />
              </g>
              <text x="40" y="42" fontSize="9">
                right way to sort: how value comes back
              </text>
              <g transform="translate(26 64)">
                <Cross />
              </g>
              <text x="40" y="68" fontSize="9">
                but only for farms
              </text>
              <g transform="translate(26 90)">
                <Cross />
              </g>
              <text x="40" y="94" fontSize="9">
                and nature is not the source of the extra
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 10.2 · Two ways to sort a workshop (fixed/circulating vs constant/variable)
 * ───────────────────────────────────────────────────────────── */
export function TwoWaysToSort() {
  return (
    <Player
      id="anim-v2-10-2"
      title="10.2 · Two ways to sort a workshop"
      viewBox="0 0 360 224"
      steps={[
        { caption: "Mr. Moneybags' workshop has three parts: a spinning machine that lasts for years, cotton used up every day, and Sam, paid 3 coins a day." },
        {
          caption: "Adam Smith sorted every workshop into two piles. Fixed capital: the machine. Circulating capital: the cotton and Sam's wage together, because both are paid back at once when the yarn is sold.",
          ms: 5200,
        },
        { caption: "Marx sorts the same workshop another way. Constant capital: the machine and the cotton, which only pass on their value. Variable capital: Sam, the one part that makes new value.", ms: 5200 },
        { caption: "Look at Smith's piles. Sam sits with the cotton, as if he were just another material. The one part that grows is hidden.", ms: 4400 },
        {
          caption: "It gets worse. Smith counted the bread Sam eats instead of Sam's labour-power, and even called a farmer's oxen productive labourers. Marx says this buried the secret of surplus-value.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const split = s >= 1;
        const marx = s >= 2;
        const worse = s === 4;
        return (
          <>
            {/* column headings */}
            <Fade show={split}>
              <text x="88" y="16" textAnchor="middle" fontSize="10" fontWeight="700">
                Adam Smith&apos;s piles
              </text>
            </Fade>
            <Fade show={marx}>
              <text x="272" y="16" textAnchor="middle" fontSize="10" fontWeight="700">
                Marx&apos;s piles
              </text>
              <line x1="180" y1="6" x2="180" y2="218" stroke="#000" strokeOpacity=".12" />
            </Fade>

            <Pile x={6} y={24} w={164} h={78} title="fixed" sub="the machine" show={split} />
            <Pile x={6} y={110} w={164} h={106} title="circulating" sub="cotton and wages" show={split} />
            <Pile x={190} y={24} w={164} h={78} title="constant" sub="only passes on its value" show={marx} />
            <Pile x={190} y={110} w={164} h={106} title="variable" sub="makes new value" show={marx} tone="#b38f00" />

            {/* Smith's version */}
            <Place x={split ? 88 : 70} y={split ? 74 : 92}>
              <Machine />
            </Place>
            <Place x={split ? 52 : 180} y={split ? 176 : 98}>
              <Cotton />
            </Place>
            <g style={{ opacity: worse ? 0 : 1, transition: "opacity 500ms" }}>
              <Figure who="sam" x={split ? 128 : 290} y={split ? 200 : 132} scale={0.7} />
            </g>
            <Fade show={worse}>
              <Place x={124} y={186} show={worse}>
                <Loaf />
              </Place>
              <text x="124" y="208" textAnchor="middle" fontSize="7.5">
                Sam&apos;s bread?
              </text>
              <Place x={130} y={142} scale={0.6} show={worse} delay={300}>
                <Cow />
              </Place>
              <text x="130" y="162" textAnchor="middle" fontSize="7">
                oxen, &ldquo;productive&rdquo;?
              </text>
            </Fade>
            <Fade show={s === 3}>
              <rect x="18" y="99" width="140" height="13" fill="#f1f1f1" />
              <text x="88" y="109" textAnchor="middle" fontSize="8.5" fill="#d6452f" fontWeight="600">
                Sam mixed in with the cotton
              </text>
            </Fade>

            {/* Marx's version */}
            <Fade show={marx} delay={200}>
              <g transform="translate(240 72)">
                <Machine />
              </g>
              <g transform="translate(310 74)">
                <Cotton />
              </g>
              <Figure who="sam" x={248} y={200} scale={0.7} />
              <text x="306" y="166" textAnchor="middle" fontSize="13" fontWeight="700" fill="#b38f00">
                +3
              </text>
              <text x="306" y="180" textAnchor="middle" fontSize="8">
                extra a day
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
