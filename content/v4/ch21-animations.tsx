"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Coins, Cross, Fade, Tick } from "@/components/anim/Things";
import { Spindle, TONE } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";
import { Shelf } from "./ch20-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 21.1 · Six hours instead of twelve (the 1821 pamphlet)
 * ───────────────────────────────────────────────────────────── */
const HX = 30;
const HW = 25; // px per hour

export function SixHoursNotTwelve() {
  return (
    <Player
      id="anim-v4-21-1"
      viewBox="0 0 360 236"
      title="21.1 · Six hours instead of twelve"
      steps={[
        { caption: "In 1821 a short pamphlet appeared with no author's name on it. Marx calls it an important advance on Ricardo." },
        { caption: "Here is Sam's 12-hour day. The first 6 hours make his wage." },
        { caption: "The pamphlet says the rest, the profit, the rent and the interest, is all the same thing: the workers' surplus labour." },
        { caption: "Then it says something new. A nation is truly rich when only six hours, not twelve, need to be worked." },
        {
          caption: "“Wealth is disposable time, and nothing more.” Real wealth, it says, is free time for living, not a pile of interest.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const day = s >= 3 ? 6 : 12;
        return (
          <>
            <Shelf x={250} y={14} lit={4} label="anonymous, 1821" />

            {/* the day */}
            <text x={HX} y="96" fontSize="8.5" fillOpacity=".6">
              Sam&apos;s working day
            </text>
            <rect x={HX} y="104" width={HW * 12} height="30" fill="#efefef" stroke="#000" strokeWidth=".6" />
            <rect x={HX} y="104" width={HW * 6} height="30" fill={TONE.wage} style={{ opacity: s >= 1 ? 1 : 0.2, transition: "opacity 500ms" }} />
            <text x={HX + HW * 3} y="123" textAnchor="middle" fontSize="9" fill="#fff" style={{ opacity: s >= 1 ? 1 : 0, transition: "opacity 500ms" }}>
              wage: 6 h
            </text>
            <rect
              x={HX + HW * 6}
              y="104"
              height="30"
              width={(day - 6) * HW}
              fill={TONE.surplus}
              style={{ opacity: s >= 2 ? 1 : 0, transition: `width ${T}, opacity 500ms` }}
            />
            <g style={{ opacity: s === 2 ? 1 : 0, transition: "opacity 400ms" }}>
              {["profit", "rent", "interest"].map((l, i) => (
                <text key={l} x={HX + HW * 7 + i * 50} y="123" fontSize="8.5" fontWeight="600">
                  {l}
                </text>
              ))}
              <text x={HX + HW * 9} y="148" textAnchor="middle" fontSize="8">
                all surplus labour
              </text>
            </g>
            <Fade show={s >= 3}>
              <text x={HX + HW * 9} y="123" textAnchor="middle" fontSize="9" fontWeight="600">
                free time
              </text>
            </Fade>
            {[0, 6, 12].map((h) => (
              <text key={h} x={HX + h * HW} y="158" textAnchor="middle" fontSize="8" fillOpacity=".5">
                {h}h
              </text>
            ))}

            <Figure who="sam" x={60} y={210} scale={0.75} mood={s >= 3 ? "happy" : "sleepy"} />
            <Fade show={s === 4}>
              <g transform="translate(78 194)">
                <Bubble w={150} lines={["wealth is disposable time,", "and nothing more"]} />
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.2 · Does the spindle make anything? (Hodgskin, 1825)
 * ───────────────────────────────────────────────────────────── */
export function DoesTheSpindleWork() {
  return (
    <Player
      id="anim-v4-21-2"
      viewBox="0 0 360 236"
      title="21.2 · Does the spindle make anything?"
      steps={[
        { caption: "In 1825 Thomas Hodgskin wrote Labour Defended against the Claims of Capital. He took Ricardo's rule and turned it on the bosses." },
        { caption: "Look at the spindle, he says. It is only past labour: somebody made it once. On its own it spins nothing." },
        { caption: "What really makes the yarn is living labour, many workers working together at the same time." },
        { caption: "So, Hodgskin argued, capital is not productive at all. Workers should keep what their labour makes." },
        {
          caption: "Marx praised this as a bold conclusion from Ricardo. But he thought Hodgskin made past labour, the tools and machines, sound too unimportant.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          <Shelf x={250} y={14} lit={5} label="Hodgskin, 1825" />
          <Figure name="Hodgskin" x={290} y={210} scale={0.8} />

          {/* spindle alone */}
          <g transform="translate(70 100)">
            <g transform="scale(1.6)">
              <Spindle />
            </g>
            <text y="46" textAnchor="middle" fontSize="8.5">
              the spindle
            </text>
            <Fade show={s >= 1}>
              <text y="58" textAnchor="middle" fontSize="8" fillOpacity=".6">
                past labour
              </text>
              <g transform="translate(26 -20)">
                <Cross />
              </g>
            </Fade>
          </g>

          {/* living labour */}
          <g style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 600ms" }}>
            {[0, 1, 2].map((i) => (
              <Figure key={i} who={i === 1 ? "sam" : undefined} name={i === 1 ? undefined : "worker"} x={140 + i * 36} y={196} scale={0.62} label={i === 1} />
            ))}
            <text x="176" y="96" textAnchor="middle" fontSize="8.5">
              living labour, together
            </text>
            <g transform="translate(176 112)">
              <Tick />
            </g>
          </g>

          <Fade show={s >= 3}>
            <g transform="translate(150 54)">
              <rect width="86" height="28" fill={CAST.sam.color} />
              <text x="43" y="12" textAnchor="middle" fontSize="7.5" fill="#fff">
                workers keep
              </text>
              <text x="43" y="23" textAnchor="middle" fontSize="7.5" fill="#fff" fontWeight="600">
                what they make
              </text>
            </g>
          </Fade>

          <Fade show={s === 4}>
            <Figure name="Marx" x={24} y={210} scale={0.7} />
            <g transform="translate(34 206)">
              <Bubble w={90} lines={["tools are work", "too, stored up"]} />
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 21.3 · Keep the loom, change the owner (Marx on Ravenstone)
 * ───────────────────────────────────────────────────────────── */
export function KeepTheLoom() {
  return (
    <Player
      id="anim-v4-21-3"
      title="21.3 · Keep the machine, or smash it?"
      steps={[
        { caption: "Piercy Ravenstone, another critic of the 1820s, also said capital was just the workers' surplus product." },
        { caption: "But he went further. Without capital, he thought, people would still have plenty of bread and clothes, just no machines and no luxuries. He was ready to give those up." },
        { caption: "The economists said the opposite: keep the machines, and keep the boss in charge of them, because the results are so good." },
        {
          caption: "Marx says both sides confused two things: the machines and skills a society has built, and who owns and controls them. Ravenstone would throw away the fruits to be rid of the conflict.",
          ms: 5200,
        },
        {
          caption: "Marx's own view: keep the fruits of modern industry, but change who controls them. Whether that can be done well is exactly what his critics dispute.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the machine and the boss */}
          <g transform="translate(180 120)">
            <rect x="-40" y="-26" width="80" height="44" fill="#fff" stroke="#000" strokeWidth="1.3" />
            <circle cx="-18" cy="-4" r="11" fill="none" stroke="#000" strokeWidth="1.3" strokeDasharray="3 2" />
            <circle cx="12" cy="-4" r="8" fill="none" stroke="#000" strokeWidth="1.3" strokeDasharray="3 2" />
            <text y="32" textAnchor="middle" fontSize="8">
              modern machines
            </text>
            <Fade show={s === 1}>
              <g transform="translate(36 -30)">
                <Cross />
              </g>
            </Fade>
          </g>
          <g style={{ opacity: s >= 4 ? 0.2 : 1, transition: "opacity 600ms" }}>
            <Figure who="moneybags" x={250} y={150} scale={0.7} label={s < 4} />
          </g>

          {/* labels */}
          <Fade show={s >= 1}>
            <Figure name="Ravenstone" x={46} y={208} scale={0.72} />
            <text x="46" y="128" textAnchor="middle" fontSize="8" fontWeight="600">
              throw it all
            </text>
            <text x="46" y="140" textAnchor="middle" fontSize="8" fontWeight="600">
              away
            </text>
          </Fade>
          <Fade show={s >= 2}>
            <Figure name="economist" x={320} y={208} scale={0.72} />
            <text x="320" y="128" textAnchor="middle" fontSize="8" fontWeight="600">
              keep it all,
            </text>
            <text x="320" y="140" textAnchor="middle" fontSize="8" fontWeight="600">
              boss included
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <text x="180" y="40" textAnchor="middle" fontSize="9">
              the fruits (machines, skills)
            </text>
            <text x="180" y="54" textAnchor="middle" fontSize="9">
              are not the same as who owns them
            </text>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(150 186)">
              <Coins n={3} />
            </g>
            <Figure who="sam" x={210} y={208} scale={0.66} />
            <text x="180" y="78" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#2a9d5b">
              Marx: keep the fruits, change the owner
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
