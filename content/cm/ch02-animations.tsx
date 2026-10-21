"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, Place, Tick } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const GREEN = "#2a9d5b";
const RED = "#d6452f";
const AMBER = "#d99a00";

/** Ava's sewing basket: the property of a small producer who works for herself. */
export const Basket = () => (
  <g>
    <path d="M-20,-4 L20,-4 L15,16 L-15,16 Z" fill="#c98a3a" stroke="#000" strokeWidth="1.2" />
    <path d="M-14,-4 Q0,-24 14,-4" fill="none" stroke="#000" strokeWidth="1.5" />
    <path d="M-14,4 L14,4 M-12,10 L12,10" stroke="#7a4a14" strokeWidth="1" />
    <line x1="6" y1="-14" x2="18" y2="-26" stroke="#555" strokeWidth="1.2" />
    <circle cx="-6" cy="-8" r="4" fill={CAST.ava.color} stroke="#000" strokeWidth=".8" />
  </g>
);

/** A small workshop with a chimney: capital that hires others. */
export const Workshop = () => (
  <g>
    <rect x="-28" y="-14" width="56" height="30" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <polygon points="-28,-14 -14,-24 -14,-14 0,-24 0,-14 14,-24 14,-14 28,-24 28,-14" fill="#000" />
    <rect x="16" y="-36" width="7" height="14" fill="#000" />
    <rect x="-20" y="-4" width="10" height="9" fill="#d4d4d4" stroke="#000" strokeWidth=".8" />
    <rect x="-4" y="-4" width="10" height="9" fill="#d4d4d4" stroke="#000" strokeWidth=".8" />
    <rect x="12" y="2" width="9" height="14" fill="#000" fillOpacity=".7" />
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 2.1 · Whose property? (the property Marx and Engels said they would abolish)
 * ───────────────────────────────────────────────────────────── */
const COLS = [
  { who: "ava" as const, x: 60, label: "her own basket" },
  { who: "sam" as const, x: 180, label: "a week's wages" },
  { who: "moneybags" as const, x: 300, label: "a workshop" },
];

export function WhoseProperty() {
  return (
    <Player
      id="anim-cm-2-1"
      title="2.1 · Whose property?"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Three neighbours, three kinds of property. Ava has her own sewing basket. Sam has his week's wages. Mr. Moneybags has a workshop." },
        {
          caption: "Ava's basket is property she worked for herself. Marx and Engels said communists had no need to abolish it, because big industry was already crushing small makers like her.",
          ms: 4600,
        },
        {
          caption: "Sam's wages buy food and rent and leave nothing over. They said they did not want to take that either, only to end a life lived 'merely to increase capital'.",
          ms: 4600,
        },
        {
          caption: "The workshop is different. It is capital: property that hires other people. This, they said, is the private property they meant to abolish.",
          ms: 4600,
        },
        {
          caption: "Their summary: nobody would lose the power to own what society makes, only 'the power to subjugate the labour of others'. Critics answer that this line is much harder to draw in real life.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="0" y1="186" x2="360" y2="186" stroke="#000" strokeOpacity=".15" />
          {COLS.map((c, i) => {
            const on = s === i + 1 || s === 4;
            const dim = s >= 1 && s <= 3 && s !== i + 1;
            return (
              <g key={c.who} style={{ opacity: dim ? 0.35 : 1, transition: "opacity 500ms" }}>
                <Place x={c.x} y={78} scale={on && s !== 4 ? 1.25 : 1}>
                  {c.who === "ava" ? <Basket /> : c.who === "sam" ? <Coins n={3} /> : <Workshop />}
                </Place>
                <text x={c.x} y="112" textAnchor="middle" fontSize="9.5">
                  {c.label}
                </text>
                <Figure who={c.who} x={c.x} y={176} scale={0.8} mood={c.who === "ava" && s >= 1 ? "sad" : "happy"} />
              </g>
            );
          })}

          {/* their verdict on each kind */}
          <Fade show={s >= 1}>
            <g transform="translate(60 34)">
              <rect x="-50" y="-10" width="100" height="18" fill="#fff" stroke={AMBER} />
              <text y="3" textAnchor="middle" fontSize="8.5" fill="#000">
                no need: already crushed
              </text>
            </g>
          </Fade>
          <Fade show={s >= 2}>
            <g transform="translate(180 34)">
              <rect x="-50" y="-10" width="100" height="18" fill="#fff" stroke={GREEN} />
              <g transform="translate(-38 -1) scale(.8)">
                <Tick />
              </g>
              <text x="6" y="3" textAnchor="middle" fontSize="8.5">
                not to be taken
              </text>
            </g>
          </Fade>
          <Fade show={s >= 3}>
            <g transform="translate(300 34)">
              <rect x="-50" y="-10" width="100" height="18" fill="#fff" stroke={RED} />
              <g transform="translate(-38 -1) scale(.8)">
                <Cross />
              </g>
              <text x="6" y="3" textAnchor="middle" fontSize="8.5">
                to be abolished
              </text>
            </g>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <rect x="40" y="196" width="280" height="26" fill="#000" />
            <text x="180" y="213" textAnchor="middle" fontSize="9.5" fill="#fff">
              their claim: end the power to command others&apos; work
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.2 · Four fears, four answers (the objections they reply to)
 * ───────────────────────────────────────────────────────────── */
const CARDS = [
  {
    fear: "Nobody will work!",
    reply: ["Their answer: today the", "people who work get little,", "and those who get a lot", "do not work."],
    x: 12,
    y: 26,
  },
  {
    fear: "Freedom will be lost!",
    reply: ["Their answer: the 'freedom'", "people mean is mostly", "freedom to buy and sell", "in a market."],
    x: 184,
    y: 26,
  },
  {
    fear: "Families will be broken!",
    reply: ["Their answer: factories", "already break poor families.", "They want free schools and", "no child factory work."],
    x: 12,
    y: 124,
  },
  {
    fear: "Countries will vanish!",
    reply: ["Their answer: 'The working", "men have no country.'", "Workers everywhere share", "the same problems."],
    x: 184,
    y: 124,
  },
];

export function FourFears() {
  return (
    <Player
      id="anim-cm-2-2"
      title="2.2 · Four fears, four answers"
      viewBox="0 0 360 230"
      steps={[
        { caption: "People had four big fears about communism. Marx and Engels answer each one in turn. These are their answers, not settled facts." },
        { caption: "Fear one: if nobody owns businesses, nobody will bother to work. They reply that under the present system, those who work get little and those who get a lot don't work." },
        { caption: "Fear two: freedom will be lost. They reply that the 'freedom' meant is mostly the freedom to buy and sell, which they do want to end." },
        {
          caption: "Fear three: the family will be destroyed. They reply that factories already tear working families apart, and they want free schooling and an end to child factory work.",
          ms: 4600,
        },
        { caption: "Fear four: countries will vanish. They reply: 'The working men have no country.' Workers everywhere, they say, share the same problems." },
        {
          caption: "Some readers find these answers sharp. Others find that they dodge the real worry: what happens to freedom when all capital is in one state's hands? The critics below take that up.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {CARDS.map((c, i) => {
            const open = s >= i + 1;
            const now = s === i + 1;
            return (
              <g key={c.fear}>
                <rect
                  x={c.x}
                  y={c.y}
                  width="164"
                  height="90"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth={now ? 2.5 : 1}
                  style={{ transition: "stroke-width 300ms" }}
                />
                <rect x={c.x} y={c.y} width="164" height="22" fill={open ? "#000" : RED} style={{ transition: "fill 400ms" }} />
                <text x={c.x + 82} y={c.y + 15} textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
                  {c.fear}
                </text>
                <Fade show={open}>
                  {c.reply.map((line, k) => (
                    <text key={k} x={c.x + 9} y={c.y + 38 + k * 12} fontSize="8.5">
                      {line}
                    </text>
                  ))}
                </Fade>
                <Fade show={!open}>
                  <text x={c.x + 82} y={c.y + 60} textAnchor="middle" fontSize="20" fillOpacity=".25">
                    ?
                  </text>
                </Fade>
              </g>
            );
          })}
          <Fade show={s === 5}>
            <rect x="60" y="216" width="240" height="12" fill="#fff" />
            <text x="180" y="225" textAnchor="middle" fontSize="8.5" fillOpacity=".7">
              their answers, set beside the critics below
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.3 · The ten measures, then and now
 * ───────────────────────────────────────────────────────────── */
type Fate = "common" | "partly" | "opposed" | "unclear";
const MEASURES: { n: number; text: string; fate: Fate }[] = [
  { n: 1, text: "No private land; rents for public use", fate: "opposed" },
  { n: 2, text: "Heavy graduated income tax", fate: "common" },
  { n: 3, text: "No inheritance at all", fate: "opposed" },
  { n: 4, text: "Seize emigrants' and rebels' property", fate: "opposed" },
  { n: 5, text: "One state bank holds all credit", fate: "partly" },
  { n: 6, text: "State runs transport and messages", fate: "partly" },
  { n: 7, text: "More state factories; farm to a plan", fate: "partly" },
  { n: 8, text: "Everyone must work; 'industrial armies'", fate: "opposed" },
  { n: 9, text: "Join farming and industry, town and country", fate: "unclear" },
  { n: 10, text: "Free school for all; no child factory work", fate: "common" },
];
const FATE_COLOR: Record<Fate, string> = { common: GREEN, partly: AMBER, opposed: RED, unclear: "#9a9a9a" };
/** Which fates are coloured in by each step. */
const SHOWN: Fate[][] = [[], ["common"], ["common", "partly"], ["common", "partly", "opposed"], ["common", "partly", "opposed", "unclear"]];

export function TenMeasures() {
  return (
    <Player
      id="anim-cm-2-3"
      title="2.3 · The ten measures, then and now"
      viewBox="0 0 360 236"
      steps={[
        {
          caption: "The chapter ends with ten measures that Marx and Engels said would fit 'most advanced countries'. They called them 'despotic inroads on the rights of property'. Here they are, in short.",
          ms: 5200,
        },
        {
          caption: "Two became ordinary in many countries, usually voted in by parties that were not communist at all: a graduated income tax, and free schooling with no child factory work.",
          ms: 5000,
        },
        {
          caption: "Some arrived partly or in other forms: central banks (but not one bank holding all credit), state railways and post offices, some state-owned industry.",
          ms: 5000,
        },
        {
          caption: "Others are still widely opposed: no private land, no inheritance, seizing emigrants' property, compulsory labour armies. Where states did try such steps, critics point to great harm.",
          ms: 5200,
        },
        {
          caption: "Marx and Engels themselves wrote in 1872 that this passage would be 'very differently worded today'. They did not want it read as a fixed recipe.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          {MEASURES.map((m, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const x = 8 + col * 176;
            const y = 8 + row * 34;
            const shown = SHOWN[Math.min(s, 4)].includes(m.fate);
            const color = FATE_COLOR[m.fate];
            return (
              <g key={m.n}>
                <rect
                  x={x}
                  y={y}
                  width="168"
                  height="28"
                  fill={shown ? color : "#fff"}
                  fillOpacity={shown ? 0.18 : 1}
                  stroke={shown ? color : "#000"}
                  strokeOpacity={shown ? 1 : 0.4}
                  strokeWidth={shown ? 2 : 1}
                  style={{ transition: "all 500ms" }}
                />
                <text x={x + 7} y={y + 18} fontSize="10" fontWeight="700">
                  {m.n}
                </text>
                <text x={x + 22} y={y + 18} fontSize="8">
                  {m.text}
                </text>
              </g>
            );
          })}

          {/* legend */}
          <g transform="translate(8 186)">
            {(
              [
                ["common", "became common"],
                ["partly", "partly / other forms"],
                ["opposed", "still widely opposed"],
                ["unclear", "hard to judge"],
              ] as [Fate, string][]
            ).map(([f, label], i) => (
              <Fade key={f} show={SHOWN[Math.min(s, 4)].includes(f)}>
                <g transform={`translate(${(i % 2) * 176} ${Math.floor(i / 2) * 16})`}>
                  <rect width="10" height="10" fill={FATE_COLOR[f]} />
                  <text x="15" y="9" fontSize="8.5">
                    {label}
                  </text>
                </g>
              </Fade>
            ))}
          </g>
          <Fade show={s === 4} delay={300}>
            <rect x="8" y="218" width="344" height="16" fill="#000" />
            <text x="180" y="229" textAnchor="middle" fontSize="8.5" fill="#fff">
              1872, the authors: &quot;very differently worded today&quot;
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
