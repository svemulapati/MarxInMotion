"use client";

import Player from "@/components/anim/Player";
import { Fade } from "@/components/anim/Things";

/* ─────────────────────────────────────────────────────────────
 * 4.1 · Partners in every country (the alliances of Section IV)
 * ───────────────────────────────────────────────────────────── */
const COUNTRIES = [
  { place: "England", partner: "the Chartists", note: "workers asking for the vote", step: 1, x: 8, y: 14 },
  { place: "America", partner: "the Agrarian Reformers", note: "land for working families", step: 1, x: 184, y: 14 },
  { place: "France", partner: "the Social-Democrats", note: "against conservatives", step: 2, x: 8, y: 74 },
  { place: "Switzerland", partner: "the Radicals", note: "a mixed party, watched closely", step: 2, x: 184, y: 74 },
  { place: "Poland", partner: "the agrarian revolutionaries", note: "the Cracow rising of 1846", step: 3, x: 8, y: 134 },
  { place: "Germany", partner: "the bourgeoisie, for now", note: "against the king and the lords", step: 4, x: 184, y: 134 },
];

export function PartnersEverywhere() {
  return (
    <Player
      id="anim-cm-4-1"
      title="4.1 · Partners in every country"
      viewBox="0 0 360 226"
      steps={[
        { caption: "The last section is short. It says which groups the communists would work with, country by country, in 1848." },
        { caption: "In England, the Chartists, who were campaigning for working men's right to vote. In America, the Agrarian Reformers, who wanted land for working families." },
        { caption: "In France, the Social-Democrats, against the conservatives. In Switzerland, the Radicals, though Marx and Engels note that party was a mix of very different people." },
        { caption: "In Poland, the party that wanted a revolution on the land as the first step to national freedom, the one behind the Cracow rising of 1846." },
        {
          caption: "In Germany, they would even back the bourgeoisie against the king and the old lords, but only for now: they expected a workers' revolution to follow straight after.",
          ms: 4800,
        },
        {
          caption: "In every movement, they say, communists put the property question first. By 1872, the authors admitted that most of these parties had disappeared and this section was out of date in practice.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {COUNTRIES.map((c) => {
            const on = s === c.step;
            const shown = s >= c.step;
            return (
              <g key={c.place} style={{ opacity: shown ? 1 : 0.25, transition: "opacity 500ms" }}>
                <rect x={c.x} y={c.y} width="168" height="52" fill="#fff" stroke="#000" strokeWidth={on ? 2.5 : 1} />
                <rect x={c.x} y={c.y} width="168" height="16" fill={on ? "#000" : "#e4e4e4"} />
                <text x={c.x + 8} y={c.y + 12} fontSize="9.5" fontWeight="600" fill={on ? "#fff" : "#000"}>
                  {c.place}
                </text>
                <text x={c.x + 8} y={c.y + 30} fontSize="9.5">
                  {c.partner}
                </text>
                <text x={c.x + 8} y={c.y + 44} fontSize="8" fillOpacity=".6">
                  {c.note}
                </text>
              </g>
            );
          })}
          <Fade show={s === 5}>
            <rect x="8" y="194" width="344" height="28" fill="#000" />
            <text x="180" y="206" textAnchor="middle" fontSize="9" fill="#fff">
              always first: who owns what (the property question)
            </text>
            <text x="180" y="217" textAnchor="middle" fontSize="8" fill="#fff" fillOpacity=".7">
              1872: &quot;in practice are antiquated&quot;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.2 · The last lines
 * ───────────────────────────────────────────────────────────── */
const LINES = [
  { text: "They do not hide their aims.", step: 0, big: false },
  { text: "“forcible overthrow of all existing", step: 1, big: false },
  { text: "social conditions”", step: 1, big: false },
  { text: "“nothing to lose but their chains”", step: 2, big: false },
  { text: "“They have a world to win.”", step: 2, big: false },
  { text: "Working Men of All Countries, Unite!", step: 3, big: true },
];

export function TheLastLines() {
  return (
    <Player
      id="anim-cm-4-2"
      title="4.2 · The last lines"
      viewBox="0 0 360 226"
      steps={[
        { caption: "The Manifesto ends without hiding anything. Marx and Engels write that communists “disdain to conceal their views and aims”." },
        {
          caption: "They say their aims can only be reached by “the forcible overthrow of all existing social conditions”. Lines like this are a big reason the book was feared and banned.",
          ms: 4800,
        },
        { caption: "Then come the famous words: the workers have “nothing to lose but their chains. They have a world to win.”" },
        {
          caption: "And the last line: “Working Men of All Countries, Unite!” In German it reads “Proletarier aller Länder, vereinigt euch!” The popular “Workers of the world, unite!” is a later rewording.",
          ms: 5400,
        },
        {
          caption: "Twenty-four years later, Marx and Engels wrote that the Manifesto had become “a historical document” which they had no right to alter. Readers have argued about it ever since.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the page */}
          <rect x="60" y="10" width="240" height="178" fill="#fffbe6" stroke="#000" />
          <text x="180" y="28" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
            Manifesto of the Communist Party, 1848
          </text>
          {LINES.map((l, i) => (
            <Fade key={i} show={s >= l.step} delay={l.step === s ? 200 * (i % 2) : 0}>
              <text
                x="180"
                y={l.big ? 168 : 52 + i * 20 + (i >= 3 ? 8 : 0)}
                textAnchor="middle"
                fontSize={l.big ? 12.5 : 10}
                fontWeight={l.big ? 700 : 400}
              >
                {l.text}
              </text>
            </Fade>
          ))}
          <Fade show={s >= 3}>
            <text x="180" y="182" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
              Proletarier aller Länder, vereinigt euch!
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="40" y="196" width="280" height="26" fill="#000" />
            <text x="180" y="213" textAnchor="middle" fontSize="9.5" fill="#fff">
              1872: now &quot;a historical document&quot;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
