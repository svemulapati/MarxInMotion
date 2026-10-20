"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Place } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

const STYLE = `
@keyframes c32-ring { 0%, 100% { transform: rotate(-14deg) } 50% { transform: rotate(14deg) } }
.c32-ring { animation: c32-ring 0.8s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 0%; }
`;

/** A small tool for each independent producer. */
function Tool({ kind }: { kind: "hoe" | "loom" | "hammer" | "wheel" }) {
  if (kind === "hoe")
    return (
      <g stroke="#8a5a2b" strokeWidth="2.5">
        <line x1="0" y1="-14" x2="0" y2="12" />
        <line x1="-6" y1="12" x2="6" y2="12" stroke="#555" />
      </g>
    );
  if (kind === "loom")
    return (
      <g>
        <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="#8a5a2b" strokeWidth="2" />
        {[-5, 0, 5].map((x) => (
          <line key={x} x1={x} y1="-9" x2={x} y2="9" stroke="#2f6fd6" />
        ))}
      </g>
    );
  if (kind === "hammer")
    return (
      <g>
        <line x1="0" y1="-4" x2="0" y2="12" stroke="#8a5a2b" strokeWidth="2.5" />
        <rect x="-8" y="-10" width="16" height="7" fill="#555" />
      </g>
    );
  return (
    <g>
      <circle r="9" fill="none" stroke="#8a5a2b" strokeWidth="2" />
      <line x1="-9" y1="0" x2="9" y2="0" stroke="#8a5a2b" />
      <line x1="0" y1="-9" x2="0" y2="9" stroke="#8a5a2b" />
    </g>
  );
}

/** A big factory, centred on its base. */
function BigWorks({ w = 120 }: { w?: number }) {
  return (
    <g>
      <rect x={-w / 2} y="-46" width={w} height="46" fill="#d9d9d9" stroke="#000" strokeWidth="1.2" />
      <path
        d={`M${-w / 2},-46 ${Array.from({ length: Math.floor(w / 24) }, (_, i) => `L${-w / 2 + i * 24 + 12},-58 L${-w / 2 + i * 24 + 12},-46 L${-w / 2 + (i + 1) * 24},-46`).join(" ")}`}
        fill="#d9d9d9"
        stroke="#000"
        strokeWidth="1"
      />
    </g>
  );
}

/** A bell. */
function Bell() {
  return (
    <g className="c32-ring">
      <line x1="0" y1="-6" x2="0" y2="0" stroke="#000" strokeWidth="2" />
      <path d="M-14,26 Q-14,2 0,2 Q14,2 14,26 Z" fill="#e6b800" stroke="#000" strokeWidth="1.2" />
      <circle cx="0" cy="29" r="3" fill="#000" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 32.1 · Three kinds of owning (Marx's "negation of the negation")
 * ───────────────────────────────────────────────────────────── */
const OWNERS = [
  { name: "farmer", tool: "hoe" as const },
  { name: "weaver", tool: "loom" as const },
  { name: "smith", tool: "hammer" as const },
  { name: "spinner", tool: "wheel" as const },
];

export function ThreeKindsOfOwning() {
  return (
    <Player
      id="anim-32-1"
      title="32.1 · Three kinds of owning"
      steps={[
        {
          caption: "First kind: each worker owns the tools they work with. A farmer owns her field, a weaver his loom. Marx says this is free, but small: no big teamwork, no machines, what he calls “universal mediocrity”.",
          ms: 5200,
        },
        {
          caption: "Second kind: those small owners are pushed out. Their fields and tools become the big property of a few, and they become wage workers. Marx calls this the first “negation”.",
          ms: 4800,
        },
        { caption: "Inside the big workshops, the workers grow in number. Marx says the factory itself teaches them to work together and to organise." },
        {
          caption: "Marx's prediction: at last the system bursts. “The knell of capitalist private property sounds. The expropriators are expropriated.”",
          ms: 5000,
        },
        {
          caption: "The third kind, he predicted, would be common ownership of the land and the means of production, built on the teamwork capitalism created. He called it the “negation of the negation”. This was his forecast, not a description of what has happened.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          <style>{STYLE}</style>
          {/* stage labels */}
          {["1. own tools", "2. capitalist property", "3. common property?"].map((l, i) => {
            const on = (i === 0 && s === 0) || (i === 1 && s >= 1 && s <= 3) || (i === 2 && s === 4);
            return (
              <text key={l} x={60 + i * 120} y="20" textAnchor="middle" fontSize="9.5" fontWeight={on ? 700 : 400} fillOpacity={on ? 1 : 0.35}>
                {l}
              </text>
            );
          })}

          {/* the small owners and their tools */}
          {OWNERS.map((o, i) => {
            const x = s === 0 ? 50 + i * 86 : 110 + i * 46;
            const y = s === 0 ? 196 : 200;
            return (
              <g key={o.name}>
                <Figure name={o.name} x={x} y={y} scale={s === 0 ? 0.75 : 0.6} mood={s === 1 ? "sad" : "happy"} />
                <Place x={s === 0 ? x + 24 : 180} y={s === 0 ? 172 : 86} scale={s === 0 ? 1 : 0.6} show={s === 0}>
                  <Tool kind={o.tool} />
                </Place>
              </g>
            );
          })}

          {/* the big works and its owner */}
          <Place x={180} y={150} show={s >= 1 && s <= 3}>
            <BigWorks w={144} />
            <text y="-24" textAnchor="middle" fontSize="9">
              {s === 1 ? "tools gathered in one place" : "one big workshop"}
            </text>
          </Place>
          <g style={{ opacity: s >= 1 && s <= 3 ? 1 : 0, transition: "opacity 500ms" }}>
            <Figure who="moneybags" x={312} y={150} scale={0.7} />
          </g>

          {/* the workers grow and organise */}
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i} style={{ opacity: s >= 2 && s <= 3 ? 1 : 0, transition: `opacity 500ms ${i * 120}ms` }}>
              <Figure name="" x={34 + i * 18 + (i > 2 ? 230 : 0)} y={200} scale={0.45} label={false} />
            </g>
          ))}
          <Fade show={s === 2}>
            <text x="180" y="54" textAnchor="middle" fontSize="9.5" fontWeight="600">
              more workers, more organised
            </text>
          </Fade>

          {/* the knell */}
          <Fade show={s === 3}>
            <g transform="translate(180 40)">
              <Bell />
            </g>
            <text x="64" y="58" textAnchor="middle" fontSize="8.5" fontWeight="600">
              Marx&apos;s prediction
            </text>
          </Fade>

          {/* common property */}
          <Fade show={s === 4}>
            <rect x="96" y="96" width="168" height="54" fill="#fff" stroke="#000" strokeDasharray="5 4" />
            <text x="180" y="116" textAnchor="middle" fontSize="9.5" fontWeight="600">
              land and tools held in common
            </text>
            <text x="180" y="132" textAnchor="middle" fontSize="8.5">
              worked together by the workers
            </text>
            <text x="180" y="144" textAnchor="middle" fontSize="8" fillOpacity=".55">
              (a forecast, not a fact)
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 32.2 · One capitalist kills many (centralisation)
 * ───────────────────────────────────────────────────────────── */
const ROUNDS = [
  { owners: 8, workers: 3 },
  { owners: 4, workers: 7 },
  { owners: 2, workers: 15 },
  { owners: 1, workers: 30 },
];

export function OneCapitalistKillsMany() {
  return (
    <Player
      id="anim-32-2"
      title="32.2 · One capitalist kills many"
      steps={[
        { caption: "Picture eight small workshops in a town, each with its own boss and a few workers." },
        { caption: "The bigger, cheaper ones win the price race. Losers sell up or shut. Now there are four bosses, each with more workers." },
        { caption: "Then two. Marx puts it bluntly: “One capitalist always kills many.” He calls this the centralisation of capital." },
        {
          caption: "In the end one giant workshop stands where eight did. Fewer and fewer owners; more and more workers, using science, machines and teamwork on a huge scale.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const r = ROUNDS[s];
        const w = 300 / r.owners;
        return (
          <>
            {Array.from({ length: 8 }, (_, i) => {
              const alive = i < r.owners;
              return (
                <g
                  key={i}
                  style={{
                    transform: `translate(${alive ? 30 + i * w + w / 2 : 30 + i * 37.5 + 18}px, 112px) scale(${alive ? 1 : 0.6})`,
                    opacity: alive ? 1 : 0,
                    transition: `transform ${T}, opacity 500ms`,
                  }}
                >
                  <rect x={-(w - 8) / 2} y="-44" width={w - 8} height="44" fill="#d9d9d9" stroke="#000" style={{ transition: `all ${T}` }} />
                  <rect x="-6" y="-60" width="12" height="16" fill="#000" />
                  <rect x="-10" y="-62" width="20" height="3" fill="#000" />
                </g>
              );
            })}
            <text x="18" y="146" fontSize="10">
              bosses: <tspan fontWeight="700">{r.owners}</tspan>
            </text>
            <text x="342" y="146" textAnchor="end" fontSize="10">
              workers each: <tspan fontWeight="700">{r.workers}</tspan>
            </text>

            {/* the crowd of workers grows */}
            {Array.from({ length: 30 }, (_, i) => (
              <circle
                key={i}
                cx={30 + (i % 15) * 20}
                cy={170 + Math.floor(i / 15) * 22}
                r="6"
                fill="#2a9d5b"
                style={{ opacity: i < r.workers ? 1 : 0.08, transition: `opacity 400ms ${i * 20}ms` }}
              />
            ))}

            <Fade show={s === 2}>
              <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
                &ldquo;One capitalist always kills many&rdquo;
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="30" textAnchor="middle" fontSize="11" fontWeight="600">
                centralisation of capital
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 32.3 · What happened next? (both sides, fairly)
 * ───────────────────────────────────────────────────────────── */
const CRITICS = [
  { at: 1, year: "1899", text: ["Bernstein: workers' lives are", "improving; small firms survive"] },
  { at: 2, year: "1900s", text: ["Rich countries: wages, health,", "schools rise; reforms, not collapse"] },
  { at: 3, year: "1917 to 1991", text: ["States claiming Marx: one-party", "rule, famines, prisons; most gave up"] },
];
const SUPPORT = [
  { at: 4, year: "today", text: ["Giant firms keep swallowing", "smaller ones; wealth very unequal"] },
  { at: 4, year: "2008", text: ["Crises still happen: Marx", "described a tendency, not a date"] },
];

export function WhatHappenedNext() {
  return (
    <Player
      id="anim-32-3"
      title="32.3 · What happened next?"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Marx made his prediction in 1867. People have argued about it ever since. Here are both sides, so you can weigh them yourself." },
        { caption: "In 1899 Eduard Bernstein, himself a socialist, argued that workers' lives were getting better and that small businesses were not disappearing, so the big collapse might never come." },
        { caption: "In the 1900s, wages, health and schooling rose a great deal in rich countries. Unions, votes and welfare changed capitalism instead of ending it." },
        {
          caption: "Governments that claimed to follow Marx, like the Soviet Union (1917 to 1991) and Mao's China, became one-party states. Millions died in famines and many were jailed. Most later gave up their planned economies.",
          ms: 5600,
        },
        {
          caption: "Supporters reply: giant companies still swallow smaller ones, wealth is very unequal, and crises like 2008 still happen. They say Marx described a tendency, not a timetable, and that those states were not what he had in mind.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          <text x="90" y="22" textAnchor="middle" fontSize="10" fontWeight="700">
            critics point to
          </text>
          <text x="270" y="22" textAnchor="middle" fontSize="10" fontWeight="700">
            supporters point to
          </text>
          <line x1="180" y1="12" x2="180" y2="216" stroke="#000" strokeOpacity=".15" />

          <Fade show={s === 0}>
            <text x="180" y="110" textAnchor="middle" fontSize="12" fontWeight="600">
              1867: the prediction
            </text>
          </Fade>

          {CRITICS.map((c, i) => (
            <Place key={c.year} x={90} y={56 + i * 58} show={s >= c.at}>
              <rect x="-82" y="-22" width="164" height="48" fill="#fff" stroke="#000" />
              <text x="-74" y="-8" fontSize="8.5" fontWeight="700">
                {c.year}
              </text>
              {c.text.map((t, k) => (
                <text key={k} x="-74" y={6 + k * 11} fontSize="8.2">
                  {t}
                </text>
              ))}
            </Place>
          ))}
          {SUPPORT.map((c, i) => (
            <Place key={c.year} x={270} y={56 + i * 58} show={s >= c.at} delay={i * 250}>
              <rect x="-82" y="-22" width="164" height="48" fill="#fff" stroke="#000" />
              <text x="-74" y="-8" fontSize="8.5" fontWeight="700">
                {c.year}
              </text>
              {c.text.map((t, k) => (
                <text key={k} x="-74" y={6 + k * 11} fontSize="8.2">
                  {t}
                </text>
              ))}
            </Place>
          ))}

          <Fade show={s === 4} delay={600}>
            <text x="180" y="224" textAnchor="middle" fontSize="9" fontWeight="600">
              weigh both sides
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
