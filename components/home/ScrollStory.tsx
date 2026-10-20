"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * "Capital in one scroll": a pinned stage whose drawing is scrubbed by the
 * reader's scroll position, so the whole argument of Volume I plays forwards
 * and backwards under their thumb. Every shape is drawn in the same white
 * chamfered blocks as the KAPITAL wordmark.
 */
const FRAMES = [
  { head: "A coat is worth twenty yards of linen.", sub: "Two things that look nothing alike balance perfectly. Why?" },
  { head: "Both hold the same hours of human work.", sub: "That hidden amount of work is what Marx calls value." },
  { head: "Money is the one thing everyone measures with.", sub: "Gold became the yardstick for everything else." },
  { head: "Mr. Moneybags buys only to sell for more.", sub: "M–C–M′: 100 coins go round, 110 come back." },
  { head: "His secret purchase is Sam's working day.", sub: "Labour-power costs 3 coins, and it can work for 12 hours." },
  { head: "Six hours pay for Sam. Six hours are the boss's.", sub: "The unpaid half is surplus-value, and nobody cheated." },
  { head: "The extra goes back in. The circle becomes a spiral.", sub: "Accumulate, accumulate! The workshop grows every year." },
  // the last frame is written from `ready` at render time
  { head: "", sub: "" },
];
const N = FRAMES.length;

const WHITE = "#ffffff";
const GOLD = "#e6b800";
const GREEN = "#2a9d5b";
const MUTE = "#8a8a8a";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
/** Progress through frame i, 0..1. */
const local = (p: number, i: number) => clamp(p - i);
/**
 * Opacity of something shown from frame `from` up to (not including) frame
 * `to`. It fades out completely before the next thing fades in, so two
 * frames never sit on top of each other.
 */
const FADE = 0.14;
function vis(p: number, from: number, to: number) {
  const fadeIn = from === 0 ? 1 : clamp((p - from) / FADE);
  const fadeOut = to >= N ? 1 : clamp((to - p) / FADE);
  return Math.min(fadeIn, fadeOut);
}

const WORDS = ["one", "two", "three", "four"];
const ROMAN = ["I", "II", "III", "IV"];

/** The closing frame, from which volumes are fully written. */
function closing(ready: number[]) {
  const names = ready.map((v) => ROMAN[v - 1]);
  const left = 4 - ready.length;
  const which = names.length === 1 ? `Volume ${names[0]}` : `Volumes ${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
  return {
    head: left === 0 ? "All four volumes are ready." : `${which} ${names.length === 1 ? "is" : "are"} ready. ${WORDS[left - 1][0].toUpperCase() + WORDS[left - 1].slice(1)} more to go.`,
    sub: "Every chapter animated, every idea told in Tiny Town.",
  };
}

export default function ScrollStory({ ready }: { ready: number[] }) {
  const frames = [...FRAMES.slice(0, -1), closing(ready)];
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      setP(clamp(-r.top / Math.max(span, 1)) * (N - 0.001));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const frame = Math.min(N - 1, Math.floor(p));

  return (
    <section ref={ref} aria-label="Capital in one scroll" style={{ height: `${N * 85}svh` }} className="relative mt-24 sm:mt-32">
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden px-4 sm:px-5">
        {/* top rail: label, counter, progress */}
        <div className="flex items-center justify-between gap-4 pt-4 text-[13px] sm:pt-5">
          <span className="strip">(Capital in one scroll)</span>
          <span className="flex items-center gap-3">
            <span className="flex gap-1" aria-hidden>
              {FRAMES.map((_, i) => (
                <span key={i} className="block h-[3px] w-4 overflow-hidden bg-white/15 sm:w-7">
                  <span className="block h-full bg-white" style={{ width: `${clamp(p - i) * 100}%` }} />
                </span>
              ))}
            </span>
            <span className="tabular-nums text-white/60">
              {String(frame + 1).padStart(2, "0")}/{String(N).padStart(2, "0")}
            </span>
          </span>
        </div>

        <div className="grid flex-1 grid-rows-[1fr_auto] gap-4 pb-6 lg:grid-cols-[minmax(340px,0.8fr)_1.4fr] lg:grid-rows-1 lg:items-center lg:gap-10">
          {/* the stage */}
          <div className="relative row-start-1 h-full min-h-0 lg:col-start-2 lg:self-stretch">
            <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" role="img" aria-label={frames[frame].head}>
              <Stage p={p} ready={ready} />
            </svg>
          </div>

          {/* captions: stacked in one place, scrubbed in and out */}
          <div className="relative row-start-2 min-h-[150px] lg:col-start-1 lg:row-start-1 lg:min-h-[260px]">
            {frames.map((f, i) => {
              const o = vis(p, i, i + 1);
              return (
                <div
                  key={i}
                  className="absolute inset-x-0 bottom-0 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2"
                  style={{ opacity: o, transform: `translateY(${(1 - o) * (p < i ? 24 : -24)}px)`, pointerEvents: o > 0.5 ? "auto" : "none" }}
                  aria-hidden={o < 0.5}
                >
                  <p className="label mb-2 text-white/40">({String(i + 1).padStart(2, "0")})</p>
                  <h2 className="text-[30px] leading-[1.02] tracking-[-0.03em] sm:text-[44px] lg:text-[52px]">{f.head}</h2>
                  <p className="mt-3 max-w-[440px] text-[15px] leading-snug text-white/60 sm:text-[17px]">{f.sub}</p>
                  {i === N - 1 && (
                    <p className="mt-5 flex flex-wrap gap-2 text-[14px]">
                      <Link href="/volume-1/chapter-1" className="bg-white px-4 py-2.5 text-black no-underline">
                        Start with Chapter 1
                      </Link>
                      <Link href="/introduction" className="px-4 py-2.5 ring-1 ring-white/40">
                        Who was Marx?
                      </Link>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * The drawing. Every element is a pure function of scroll progress p.
 * ───────────────────────────────────────────────────────────── */

/** A chamfered block, the wordmark's basic shape. */
function Block({ x, y, w, h, c = 0, fill = WHITE, opacity = 1 }: { x: number; y: number; w: number; h: number; c?: number; fill?: string; opacity?: number }) {
  const pts = c
    ? `${x + c},${y} ${x + w - c},${y} ${x + w},${y + c} ${x + w},${y + h} ${x},${y + h} ${x},${y + c}`
    : `${x},${y} ${x + w},${y} ${x + w},${y + h} ${x},${y + h}`;
  return <polygon points={pts} fill={fill} opacity={opacity} />;
}

/** A coat built from blocks: two sleeves and a body with a collar notch. */
function CoatShape({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <polygon points="-34,-60 -10,-66 0,-50 10,-66 34,-60 58,4 40,12 34,60 -34,60 -40,12 -58,4" fill={WHITE} />
      <line x1="0" y1="-50" x2="0" y2="60" stroke="#222" strokeWidth="3" />
    </g>
  );
}

function Coin({ x, y, r, rot = 0, label }: { x: number; y: number; r: number; rot?: number; label?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <circle r={r} fill={GOLD} />
      <circle r={r * 0.72} fill="none" stroke="#222" strokeOpacity=".35" strokeWidth={Math.max(1.5, r * 0.05)} />
      {label && (
        <text y={r * 0.18} textAnchor="middle" fontSize={r * 0.5} fontWeight="700" fill="#222">
          {label}
        </text>
      )}
    </g>
  );
}

/** A blocky person: chamfered body and round head; hat for the boss. */
function Person({ x, y, s = 1, fill = WHITE, hat = false }: { x: number; y: number; s?: number; fill?: string; hat?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <polygon points="-22,-60 -12,-70 12,-70 22,-60 22,0 -22,0" fill={fill} stroke={WHITE} strokeWidth={fill === WHITE ? 0 : 3} />
      <circle cx="0" cy="-88" r="16" fill={WHITE} />
      <circle cx="-5" cy="-90" r="2.2" fill="#222" />
      <circle cx="5" cy="-90" r="2.2" fill="#222" />
      {hat && (
        <g fill={WHITE}>
          <rect x="-20" y="-106" width="40" height="5" />
          <rect x="-12" y="-130" width="24" height="25" />
        </g>
      )}
    </g>
  );
}

function Stage({ p, ready }: { p: number; ready: number[] }) {
  /* 1–2 · the balance, then the hidden hours */
  const t0 = ease(local(p, 0));
  const tilt = lerp(-13, 0, t0);
  const rad = (tilt * Math.PI) / 180;
  const piv = { x: 400, y: 360 };
  const L = 250;
  const leftEnd = { x: piv.x - L * Math.cos(rad), y: piv.y - L * Math.sin(rad) };
  const rightEnd = { x: piv.x + L * Math.cos(rad), y: piv.y + L * Math.sin(rad) };
  const balanceVis = vis(p, 0, 2);
  const rolls = Math.round(lerp(1, 4, clamp(local(p, 0) * 1.4)));
  const t1 = ease(local(p, 1));

  /* 3 · money rolls in */
  const t2 = ease(local(p, 2));
  const coinX = lerp(900, 400, t2);

  /* 4 · the circle M–C–M′ */
  const t3 = local(p, 3);
  const counter = t3 > 0.82 ? 110 : 100;

  /* 5–6 · Sam's day, then the split */
  const t4 = ease(local(p, 4));
  const t5 = local(p, 5);
  const barX = 120;
  const barW = 560;
  const barY = 330;
  const greenW = barW * 0.5 * ease(clamp(t5 * 2));
  const goldW = barW * 0.5 * ease(clamp(t5 * 2 - 1));

  /* 7 · the spiral */
  const t6 = local(p, 6);
  const spiral = spiralPath(400, 300, 230, 3.2);
  const capital = [100, 110, 121, 133, 146, 161][Math.min(5, Math.floor(t6 * 6))];

  /* 8 · four volumes */
  const t7 = ease(local(p, 7));

  return (
    <g>
      {/* ── 01–02 balance ───────────────────────────── */}
      <g opacity={balanceVis}>
        <polygon points={`${piv.x},${piv.y + 6} ${piv.x - 40},${piv.y + 150} ${piv.x + 40},${piv.y + 150}`} fill={WHITE} />
        <line x1={leftEnd.x} y1={leftEnd.y} x2={rightEnd.x} y2={rightEnd.y} stroke={WHITE} strokeWidth="12" />
        <CoatShape x={leftEnd.x} y={leftEnd.y - 72} s={0.95} />
        {Array.from({ length: 4 }, (_, i) => (
          <g key={i} opacity={i < rolls ? 1 : 0}>
            <Block x={rightEnd.x - 70 + (i % 2) * 72} y={rightEnd.y - 46 - Math.floor(i / 2) * 44} w={66} h={38} c={8} />
          </g>
        ))}
        <text x={leftEnd.x} y={leftEnd.y + 46} textAnchor="middle" fontSize="24" fill={MUTE}>
          1 coat
        </text>
        <text x={rightEnd.x} y={rightEnd.y + 46} textAnchor="middle" fontSize="24" fill={MUTE}>
          20 yards of linen
        </text>

        {/* the hidden hours */}
        <g opacity={vis(p, 1, 2)}>
          {[leftEnd.x, rightEnd.x].map((cx, k) => (
            <g key={k} transform={`translate(${cx} 90)`}>
              <circle r="56" fill="none" stroke={WHITE} strokeWidth="6" />
              {Array.from({ length: 12 }, (_, h) => (
                <line key={h} x1="0" y1="-44" x2="0" y2="-50" stroke={WHITE} strokeWidth="3" transform={`rotate(${h * 30})`} />
              ))}
              <path d={arc(0, 0, 40, 0, 300 * t1)} fill={GOLD} opacity=".9" />
              <line x1="0" y1="0" x2="0" y2="-42" stroke={WHITE} strokeWidth="5" strokeLinecap="round" transform={`rotate(${300 * t1})`} />
              <text y="92" textAnchor="middle" fontSize="26" fontWeight="600" fill={WHITE}>
                {Math.round(10 * t1)} hours
              </text>
            </g>
          ))}
          <text x="400" y="104" textAnchor="middle" fontSize="64" fill={WHITE} opacity={t1}>
            =
          </text>
        </g>
      </g>

      {/* ── 03 money ───────────────────────────────── */}
      <g opacity={vis(p, 2, 3)}>
        <Coin x={coinX} y={290} r={130} rot={(coinX - 400) * -0.6} label="Au" />
        {[
          { a: -150, label: "coat" },
          { a: -90, label: "linen" },
          { a: -30, label: "bread" },
          { a: 30, label: "tea" },
          { a: 90, label: "corn" },
          { a: 150, label: "a Bible" },
        ].map((o, i) => {
          const r = lerp(330, 235, t2);
          const ax = 400 + r * Math.cos((o.a * Math.PI) / 180);
          const ay = 290 + r * Math.sin((o.a * Math.PI) / 180) * 0.9;
          return (
            <g key={o.label} opacity={clamp(t2 * 2 - i * 0.12)}>
              <line x1={ax} y1={ay} x2={lerp(ax, 400, 0.45)} y2={lerp(ay, 290, 0.45)} stroke={WHITE} strokeOpacity=".35" strokeWidth="2" strokeDasharray="6 6" />
              <Block x={ax - 46} y={ay - 18} w={92} h={36} c={8} />
              <text x={ax} y={ay + 7} textAnchor="middle" fontSize="18" fill="#222">
                {o.label}
              </text>
            </g>
          );
        })}
      </g>

      {/* ── 04 the circle ──────────────────────────── */}
      <g opacity={vis(p, 3, 4)}>
        <circle
          cx="400"
          cy="290"
          r="175"
          fill="none"
          stroke={WHITE}
          strokeWidth="10"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - ease(clamp(t3 * 1.2))}
          transform="rotate(-90 400 290)"
        />
        <Coin x={400} y={115} r={46} label="M" />
        <g opacity={clamp(t3 * 3 - 0.7)}>
          <Block x={510} y={348} w={120} h={70} c={14} />
          <text x="570" y="392" textAnchor="middle" fontSize="30" fontWeight="700" fill="#222">
            C
          </text>
        </g>
        <g opacity={clamp(t3 * 3 - 1.6)}>
          <Coin x={248} y={383} r={lerp(46, 56, clamp(t3 * 5 - 4))} label={"M′"} />
        </g>
        <text x="400" y="306" textAnchor="middle" fontSize="72" fontWeight="300" fill={counter === 110 ? GOLD : WHITE}>
          {counter}
        </text>
        <text x="400" y="342" textAnchor="middle" fontSize="24" fill={MUTE}>
          coins
        </text>
        <Person x={100} y={560} s={1.1} hat fill="#111" />
      </g>

      {/* ── 05–06 Sam's day ───────────────────────── */}
      <g opacity={vis(p, 4, 6)}>
        <Person x={barX - 10} y={250} s={1.15} fill={GREEN} />
        <Coin x={barX + 90} y={200} r={22} />
        <Coin x={barX + 140} y={200} r={22} />
        <Coin x={barX + 190} y={200} r={22} />
        <text x={barX + 230} y={208} fontSize="26" fill={MUTE}>
          buys the whole day
        </text>
        <Block x={barX} y={barY} w={barW * t4} h={90} c={0} fill="#3a3a3a" />
        <Block x={barX} y={barY} w={greenW} h={90} fill={GREEN} />
        <Block x={barX + barW * 0.5} y={barY} w={goldW} h={90} fill={GOLD} />
        {Array.from({ length: 13 }, (_, h) => (
          <g key={h} opacity={clamp(t4 * 13 - h)}>
            <line x1={barX + (barW / 12) * h} y1={barY + 100} x2={barX + (barW / 12) * h} y2={barY + 112} stroke={WHITE} strokeWidth="3" />
            {h % 3 === 0 && (
              <text x={barX + (barW / 12) * h} y={barY + 138} textAnchor="middle" fontSize="24" fill={MUTE}>
                {h}h
              </text>
            )}
          </g>
        ))}
        <g opacity={clamp(t5 * 3)}>
          <text x={barX + barW * 0.25} y={barY + 56} textAnchor="middle" fontSize="28" fontWeight="600" fill={WHITE}>
            paid
          </text>
        </g>
        <g opacity={clamp(t5 * 3 - 1.5)}>
          <text x={barX + barW * 0.75} y={barY + 56} textAnchor="middle" fontSize="28" fontWeight="600" fill="#222">
            unpaid
          </text>
          <text x={barX + barW * 0.75} y={barY + 190} textAnchor="middle" fontSize="24" fill={GOLD}>
            surplus-value: 3 coins
          </text>
        </g>
        <g opacity={clamp(t5 * 3)}>
          <text x={barX + barW * 0.25} y={barY + 190} textAnchor="middle" fontSize="24" fill={GREEN}>
            Sam&apos;s wage: 3 coins
          </text>
        </g>
      </g>

      {/* ── 07 the spiral ──────────────────────────── */}
      <g opacity={vis(p, 6, 7)}>
        <path
          d={spiral}
          fill="none"
          stroke={GOLD}
          strokeWidth="9"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1 - ease(clamp(t6 * 1.15))}
        />
        {Array.from({ length: 6 }, (_, i) => (
          <g key={i} opacity={clamp(t6 * 6 - i)}>
            <Block x={664 + (i % 2) * 66} y={500 - Math.floor(i / 2) * 58} w={60} h={52} c={9} />
          </g>
        ))}
        <circle cx="400" cy="296" r="78" fill="#222" />
        <text x="400" y="318" textAnchor="middle" fontSize="80" fontWeight="300" fill={WHITE}>
          {capital}
        </text>
        <text x="792" y="582" textAnchor="end" fontSize="24" fill={MUTE}>
          the workshop grows
        </text>
      </g>

      {/* ── 08 four volumes ─────────────────────────── */}
      <g opacity={vis(p, 7, N)}>
        {["I", "II", "III", "IV"].map((r, i) => {
          const done = ready.includes(i + 1);
          const y = lerp(80, 0, ease(clamp(t7 * 2 - i * 0.25)));
          return (
            <g key={r} transform={`translate(${70 + i * 172} ${120 + y})`}>
              <polygon
                points="0,30 30,0 150,0 150,330 0,330"
                fill={done ? WHITE : "none"}
                stroke={WHITE}
                strokeWidth="4"
                opacity={clamp(t7 * 2 - i * 0.25)}
              />
              <text x="75" y="210" textAnchor="middle" fontSize="88" fontWeight="300" fill={done ? "#222" : WHITE} opacity={clamp(t7 * 2 - i * 0.25)}>
                {r}
              </text>
              <text x="75" y="372" textAnchor="middle" fontSize="18" fill={MUTE} opacity={clamp(t7 * 2 - i * 0.25)}>
                {done ? "ready to read" : i === 3 ? "bonus" : "coming soon"}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
}

/** A filled pie wedge from angle a to b (degrees, 0 = 12 o'clock). */
function arc(cx: number, cy: number, r: number, a: number, b: number) {
  if (b - a < 0.5) return "";
  const pt = (deg: number) => [cx + r * Math.sin((deg * Math.PI) / 180), cy - r * Math.cos((deg * Math.PI) / 180)];
  const [x1, y1] = pt(a);
  const [x2, y2] = pt(b);
  return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${b - a > 180 ? 1 : 0} 1 ${x2},${y2} Z`;
}

/** An outward Archimedean spiral, as a polyline path. */
function spiralPath(cx: number, cy: number, maxR: number, turns: number) {
  const steps = 260;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * 2 * Math.PI;
    const r = 18 + (maxR - 18) * t;
    d += `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a) * 0.82).toFixed(1)}`;
  }
  return d;
}
