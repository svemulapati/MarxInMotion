"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";
import { Plot, PROFIT, RENT, T, WAGE } from "./ch08-animations";

/* ─────────────────────────────────────────────────────────────
 * 11.1 · What Ricardo saw
 * Ricardo's period 1770 to 1815 with constantly rising wheat
 * prices; Anderson's and Ricardo's three shared assumptions; the
 * English enclosures sweeping away old field boundaries.
 * ───────────────────────────────────────────────────────────── */
const ASSUMPTIONS = [
  "no landowner blocks capital",
  "farming moves to worse land",
  "there is always capital to invest",
];

export function WhatRicardoSaw() {
  return (
    <Player
      id="anim-v4-11-1"
      title="11.1 · What Ricardo saw"
      steps={[
        { caption: "Ricardo's visit. The years he knew best, 1770 to 1815, were years when wheat prices kept rising." },
        { caption: "From what he saw, he built a picture of farming. Marx points out three things it quietly takes for granted." },
        { caption: "To a German landowner like Rodbertus, these sounded odd. At home, old boundaries, customs and village fields tied the land up." },
        { caption: "Marx explains: in England, enclosures had swept the old village fields away and remade farming for capital. England, he says, was 'the most revolutionary country in the world' on the land.", ms: 5000 },
        { caption: "So Ricardo's picture fitted England well. But Marx warns it describes one country's history, not a law for everywhere." },
      ]}
    >
      {(s) => (
        <>
          <Figure name="Ricardo" x={34} y={200} scale={0.6} />

          {/* rising wheat prices, 1770 to 1815 */}
          <g style={{ opacity: s <= 1 ? 1 : 0.2, transition: `opacity ${T}` }}>
            <text x="76" y="28" fontSize="9" fontWeight="600">
              wheat prices, 1770 to 1815
            </text>
            <line x1="76" y1="96" x2="186" y2="96" stroke="#000" strokeOpacity=".4" />
            <path d="M80,90 L100,86 L120,80 L140,70 L160,54 L182,40" fill="none" stroke={RENT} strokeWidth="2.5" />
          </g>

          {/* the three assumptions */}
          <Fade show={s >= 1}>
            {ASSUMPTIONS.map((a, i) => (
              <g key={a} style={{ opacity: s >= 1 ? 1 : 0, transition: `opacity 500ms ease ${i * 250}ms` }}>
                <rect x="200" y={22 + i * 28} width="152" height="22" fill="#fff" stroke="#000" />
                <text x="206" y={37 + i * 28} fontSize="8.5">
                  {i + 1}. {a}
                </text>
              </g>
            ))}
          </Fade>

          {/* old strips, then enclosed fields */}
          <Fade show={s === 2}>
            <text x="190" y="118" textAnchor="middle" fontSize="9" fontWeight="600">
              Germany: old village strips
            </text>
            {Array.from({ length: 7 }, (_, i) => (
              <rect key={i} x={110 + i * 23} y="126" width="19" height="44" fill={i % 2 ? "#c9b27a" : "#b39556"} stroke="#000" strokeWidth=".6" />
            ))}
            <Figure name="Rodbertus" x={326} y={200} scale={0.6} mood="wow" />
          </Fade>
          <Fade show={s >= 3}>
            <text x="190" y="118" textAnchor="middle" fontSize="9" fontWeight="600">
              England: strips swept into big farms
            </text>
            <g transform="translate(150 148)">
              <Plot w={74} h={44} fill="#b39556" />
            </g>
            <g transform="translate(232 148)">
              <Plot w={74} h={44} fill="#c9b27a" />
            </g>
            <rect x="110" y="124" width="162" height="48" fill="none" stroke="#7a4a14" strokeWidth="2" strokeDasharray="2 4" />
          </Fade>
          <Fade show={s === 4}>
            <text x="190" y="190" textAnchor="middle" fontSize="9" fill={RENT} fontWeight="600">
              one country&apos;s history, not a law of nature
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.2 · Extra that melts, extra that stays
 * Differential rent matches the excess profit of a better-than-
 * average capitalist in industry; in industry it is fluid and
 * disappears, in agriculture it is fixed by a lasting natural basis.
 * ───────────────────────────────────────────────────────────── */
export function MeltsOrStays() {
  return (
    <Player
      id="anim-v4-11-2"
      title="11.2 · Extra that melts, extra that stays"
      steps={[
        { caption: "Marx puts Ricardo's differential rent next to something from industry. In Mr. Moneybags' trade, one spinner gets a better machine and makes his yarn more cheaply." },
        { caption: "He still sells at the usual price, so he earns an extra profit on top of the average. But his rivals soon buy the same machine, and his extra melts away." },
        { caption: "Now farming. Grandpa Ned's bottom field is richer than the usual field. He sells his wheat at the usual price too, and earns an extra." },
        { caption: "Nobody can copy a richer soil. The extra does not melt; it stays, year after year, because its basis lies in the land itself." },
        { caption: "So it ends up with the Landlord as differential rent. Marx: in industry the extra is 'fluid' and goes to the capitalist; on the land it becomes 'fixed' and goes to the landowner.", ms: 5200 },
      ]}
      viewBox="0 0 360 230"
    >
      {(s) => (
        <>
          {/* industry row */}
          <text x="14" y="22" fontSize="9" fontWeight="600">
            industry
          </text>
          <rect x="70" y="30" width="60" height="42" fill="#fff" stroke="#000" />
          <text x="100" y="55" textAnchor="middle" fontSize="8.5">
            new machine
          </text>
          <g style={{ opacity: s >= 1 ? 1 : 0, transition: `opacity ${T}` }}>
            <rect x="150" y="52" width="40" height="20" fill={WAGE} stroke="#000" />
            <text x="170" y="65" textAnchor="middle" fontSize="8" fill="#fff">
              average
            </text>
            <rect x="150" y={s === 1 ? 36 : 52} width="40" height={s === 1 ? 16 : 0} fill={PROFIT} stroke="#000" style={{ transition: `all ${T}` }} />
            <Fade show={s === 1}>
              <text x="196" y="47" fontSize="8.5" fontWeight="600">
                extra
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <text x="196" y="47" fontSize="8.5" fill="#d6452f">
                melted: rivals copied
              </text>
            </Fade>
          </g>
          {[0, 1].map((k) => (
            <g key={k} style={{ opacity: s >= 2 ? 1 : 0, transition: `opacity 500ms ease ${k * 150}ms` }}>
              <rect x={300 + k * 30} y="30" width="26" height="42" fill="#fff" stroke="#000" />
              <text x={313 + k * 30} y="55" textAnchor="middle" fontSize="7">
                copy
              </text>
            </g>
          ))}

          <line x1="10" y1="94" x2="350" y2="94" stroke="#000" strokeOpacity=".15" />

          {/* farming row */}
          <text x="14" y="114" fontSize="9" fontWeight="600">
            farming
          </text>
          <g transform="translate(100 140)">
            <Plot w={64} h={40} fill="#8f7340" />
          </g>
          <text x="100" y="172" textAnchor="middle" fontSize="8.5">
            Ned&apos;s rich field
          </text>
          <g style={{ opacity: s >= 2 ? 1 : 0, transition: `opacity ${T}` }}>
            <rect x="150" y="140" width="40" height="20" fill={WAGE} stroke="#000" />
            <text x="170" y="153" textAnchor="middle" fontSize="8" fill="#fff">
              average
            </text>
            <rect x="150" y="124" width="40" height="16" fill={s >= 4 ? RENT : PROFIT} stroke="#000" style={{ transition: `fill ${T}` }} />
            <text x="196" y="135" fontSize="8.5" fontWeight="600">
              {s >= 4 ? "rent" : "extra"}
            </text>
          </g>
          <Fade show={s >= 3}>
            <text x="196" y="122" fontSize="8.5" fill={WAGE}>
              stays: soil can&apos;t be copied
            </text>
          </Fade>
          <Fade show={s === 4}>
            <Figure name="Landlord" x={318} y={196} scale={0.6} />
            <path d="M232,132 C262,128 280,142 300,160" fill="none" stroke={RENT} strokeWidth="1.5" strokeDasharray="3 3" />
          </Fade>
          <Fade show={s >= 2 && s < 4}>
            <Figure who="ned" x={318} y={196} scale={0.6} />
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 11.3 · Original and indestructible?
 * Ricardo: rent is paid "for the use of the original and
 * indestructible powers of the soil". Marx: the soil has no
 * indestructible powers, nor original ones; and Ricardo's denial of
 * absolute rent leaves the worst land rent-free in theory.
 * ───────────────────────────────────────────────────────────── */
export function IndestructiblePowers() {
  return (
    <Player
      id="anim-v4-11-3"
      title="11.3 · Original and indestructible?"
      steps={[
        { caption: "Ricardo's definition: rent is paid to the landlord 'for the use of the original and indestructible powers of the soil'." },
        { caption: "Marx: indestructible? No. Farm a field badly, year after year, and it wears out." },
        { caption: "Original? No again. Today's fields are the product of history and nature: cleared, drained and manured over centuries." },
        { caption: "Then the worst field. Ricardo thinks prices must equal values, so in his picture the worst field in use pays no rent at all." },
        {
          caption: "But no landlord lends even his worst field for nothing. Marx's absolute rent explains why the worst field pays rent too. He works it out fully in Volume III, Chapter 45.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const tired = s === 1;
        return (
          <>
            <rect x="20" y="10" width="320" height="36" fill="#fff" stroke="#000" />
            <text x="180" y="25" textAnchor="middle" fontSize="9">
              Ricardo: rent is paid for the
            </text>
            <text x="180" y="38" textAnchor="middle" fontSize="9" fontWeight="600">
              <tspan fill={s === 2 ? "#d6452f" : "#000"}>&ldquo;original</tspan> and <tspan fill={s === 1 ? "#d6452f" : "#000"}>indestructible</tspan> powers of the soil&rdquo;
            </text>

            {/* the good field: tires out, then shows its history */}
            <g transform="translate(110 112)">
              <Plot w={110} h={56} fill={tired ? "#d8c9a3" : "#8f7340"} />
            </g>
            <Fade show={s === 1}>
              <path d="M70,96 l14,10 l-6,8 l14,10 M120,92 l8,14 l12,4" fill="none" stroke="#7a4a14" strokeWidth="1.5" />
              <text x="110" y="156" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                worn out
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="110" y="156" textAnchor="middle" fontSize="8.5">
                cleared · drained · manured
              </text>
              <text x="110" y="168" textAnchor="middle" fontSize="8" fillOpacity=".6">
                centuries of work
              </text>
            </Fade>

            {/* the worst field */}
            <Fade show={s >= 3}>
              <g transform="translate(262 112)">
                <Plot w={86} h={56} fill="#e6dcc0" />
              </g>
              <text x="262" y="156" textAnchor="middle" fontSize="8.5">
                the worst field in use
              </text>
              <text x="262" y="172" textAnchor="middle" fontSize="9" fontWeight="700" fill={s === 3 ? "#000" : RENT}>
                {s === 3 ? "Ricardo: rent 0" : "Marx: rent above 0"}
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="215" y="80" width="94" height="64" fill="none" stroke="#7a4a14" strokeWidth="2" strokeDasharray="2 4" />
              <Figure name="Landlord" x={334} y={200} scale={0.55} />
            </Fade>
            <Figure name="Ricardo" x={26} y={200} scale={0.55} mood={s === 4 ? "wow" : "happy"} />
          </>
        );
      }}
    </Player>
  );
}
