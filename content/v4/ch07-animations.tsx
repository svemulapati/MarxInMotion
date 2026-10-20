"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Loaf } from "@/components/anim/Things";
import { Shelf } from "./ch04-animations";

const RED = "#d6452f";

/* ─────────────────────────────────────────────────────────────
 * 7.1 · Free to go hungry
 * Linguet (Théorie des lois civiles, 1767), quoted by Marx: the
 * day-labourer is "free" but "they have one [master], and the most
 * terrible... need"; easily replaced, "a drop of the water of a great
 * river"; "They live only by hiring out their arms... Is that to be free?"
 * ───────────────────────────────────────────────────────────── */
export function FreeToGoHungry() {
  return (
    <Player
      id="anim-v4-7-1"
      title="7.1 · Free to go hungry"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Simon Linguet, a French lawyer, wrote in 1767. Everyone around him praised the new freedom of the worker. He was not impressed." },
        { caption: "Picture Sam on market morning. Nobody owns him. He can work for whoever he likes. That is his freedom." },
        { caption: "But Sam owns no field and no tools. If nobody hires him today, there is no bread tonight." },
        { caption: "And there are many workers and few bosses. If Sam goes, another takes his place at once, like one drop in a big river." },
        {
          caption: "Linguet's sharp point: people say these workers have no master. They do, he says, and the hardest one of all: need.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <Shelf x={326} y={60} label="1767" />
          <Figure who="sam" x={90} y={180} scale={0.9} mood={s >= 2 ? "sad" : "happy"} />

          <Fade show={s === 1}>
            <text x="90" y="52" textAnchor="middle" fontSize="11" fontWeight="600">
              free!
            </text>
            <text x="90" y="66" textAnchor="middle" fontSize="9" fillOpacity=".6">
              no owner, can choose any boss
            </text>
          </Fade>

          {/* no bread without a job */}
          <Fade show={s >= 2}>
            <g transform="translate(180 110)" opacity={0.35}>
              <Loaf />
            </g>
            <line x1="160" y1="96" x2="200" y2="124" stroke={RED} strokeWidth="3" />
            <text x="180" y="146" textAnchor="middle" fontSize="9">
              no hire, no bread
            </text>
          </Fade>

          {/* the crowd waiting */}
          <Fade show={s >= 3}>
            {Array.from({ length: 6 }, (_, i) => (
              <Figure key={i} name="" label={false} x={170 + i * 26} y={210} scale={0.5} />
            ))}
            <text x="235" y="168" textAnchor="middle" fontSize="9">
              many waiting for work
            </text>
          </Fade>

          {/* need, the master */}
          <Fade show={s === 4}>
            <g transform="translate(200 40)">
              <rect x="-80" y="-14" width="160" height="28" fill="#000" />
              <text y="4" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="600">
                the master called need
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 7.2 · Chains of the same metal
 * Linguet: the chains of slaves and labourers "are made of the same
 * material and only differently coloured... both are equally forged by
 * necessity". He provocatively defended "Asiatic" slavery against wage
 * labour; Marx: "Linguet however is not a socialist"; his polemic is
 * "half-seriously, half-ironically" given a reactionary appearance; his
 * line "l'esprit des lois, c'est la propriété" shows his depth.
 * ───────────────────────────────────────────────────────────── */
export function ChainsOfTheSameMetal() {
  return (
    <Player
      id="anim-v4-7-2"
      title="7.2 · Chains of the same metal"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Linguet drew a harsh picture. On one side, the chains of slavery: heavy, dark, plain for all to see." },
        { caption: "On the other side, the worker's chains: they look light and bright. Nobody sees them at all." },
        { caption: "Put them on a scale, Linguet said, and they weigh the same. Both are made by necessity." },
        { caption: "Then he went too far, on purpose. He claimed old-fashioned slavery was even better, because a master at least fed what he had paid for. Marx says he wrote this half seriously, half ironically." },
        {
          caption: "Marx says plainly that Linguet was no socialist, and that his praise of slavery was half ironic. What Marx keeps is Linguet's insight: a worker with nothing but his hands is not as free as he looks.",
          ms: 5800,
        },
      ]}
    >
      {(s) => {
        const tilt = s >= 2 ? 0 : -8;
        return (
          <>
            {/* the scale */}
            <polygon points="180,140 168,170 192,170" fill="#000" />
            <g style={{ transformOrigin: "180px 138px", transform: `rotate(${tilt}deg)`, transition: "transform 900ms cubic-bezier(.2,.8,.2,1)" }}>
              <line x1="80" y1="138" x2="280" y2="138" stroke="#000" strokeWidth="3" />
              {/* left: dark chain */}
              <g transform="translate(100 128)">
                {[0, 1, 2].map((i) => (
                  <ellipse key={i} cx={i * 16 - 16} cy="0" rx="9" ry="6" fill="none" stroke="#222" strokeWidth="4" />
                ))}
              </g>
              {/* right: light chain, invisible at first */}
              <g transform="translate(260 128)" opacity={s >= 1 ? 1 : 0} style={{ transition: "opacity 600ms" }}>
                {[0, 1, 2].map((i) => (
                  <ellipse key={i} cx={i * 16 - 16} cy="0" rx="9" ry="6" fill="none" stroke="#d9b84a" strokeWidth="4" />
                ))}
              </g>
            </g>
            <text x="100" y="196" textAnchor="middle" fontSize="9">
              the slave&apos;s chain
            </text>
            <text x="260" y="196" textAnchor="middle" fontSize="9" opacity={s >= 1 ? 1 : 0}>
              the worker&apos;s chain
            </text>

            <Fade show={s === 2}>
              <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
                same weight
              </text>
              <text x="180" y="56" textAnchor="middle" fontSize="9" fillOpacity=".7">
                both made by necessity
              </text>
            </Fade>
            <Fade show={s === 3}>
              <g transform="translate(180 46)">
                <rect x="-120" y="-16" width="240" height="32" fill="#fff" stroke={RED} />
                <text y="-2" textAnchor="middle" fontSize="9">
                  Linguet&apos;s shock tactic: slavery &ldquo;better&rdquo;?
                </text>
                <text y="11" textAnchor="middle" fontSize="9" fillOpacity=".7">
                  half serious, half ironic, says Marx
                </text>
              </g>
            </Fade>
            <Fade show={s === 4}>
              <Figure name="Marx" x={330} y={90} scale={0.6} />
              <g transform="translate(160 46)">
                <rect x="-130" y="-16" width="260" height="32" fill="#000" />
                <text y="-2" textAnchor="middle" fontSize="9" fill="#fff">
                  no socialist, and the slavery praise half ironic,
                </text>
                <text y="11" textAnchor="middle" fontSize="9" fill="#fff">
                  but the worker&apos;s freedom has a hidden catch
                </text>
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
