"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export interface Step {
  caption: string;
  /** How long this step holds before the next one, in ms. */
  ms?: number;
}

const DEFAULT_MS = 3200;

/**
 * Step-by-step animation stage shared by every chapter. The scene is a render
 * function of the current step; each scene animates its own elements with CSS
 * transitions keyed on that step. Starts playing the first time it scrolls
 * into view (never when the reader prefers reduced motion), stops on the last
 * step, and can be paused, replayed, or stepped by hand.
 */
export default function Player({
  id,
  title,
  steps,
  children,
  viewBox = "0 0 360 220",
}: {
  id: string;
  title: string;
  steps: Step[];
  children: (step: number) => ReactNode;
  viewBox?: string;
}) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [run, setRun] = useState(0); // bumps on replay so the progress bar restarts
  const ref = useRef<HTMLElement>(null);
  const last = steps.length - 1;
  const ms = steps[step].ms ?? DEFAULT_MS;

  // autoplay once, when at least half of the stage is on screen
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPlaying(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      if (step >= last) setPlaying(false);
      else setStep(step + 1);
    }, ms);
    return () => clearTimeout(t);
  }, [playing, step, last, ms]);

  const go = (s: number) => {
    setPlaying(false);
    setStep(Math.max(0, Math.min(last, s)));
    setRun((r) => r + 1);
  };
  const replay = () => {
    setStep(0);
    setRun((r) => r + 1);
    setPlaying(true);
  };
  const toggle = () => {
    if (playing) return setPlaying(false);
    if (step >= last) return replay();
    setPlaying(true);
  };

  const ended = !playing && step === last;

  return (
    <figure ref={ref} id={id} className="anim my-10 scroll-mt-6 bg-white text-black ring-1 ring-black/10">
      <figcaption className="flex items-baseline justify-between gap-4 px-4 pt-3 pb-2">
        <span>
          <span className="label block">(Animation)</span>
          <span className="text-[15px] leading-tight">{title}</span>
        </span>
        <span className="text-[12px] tabular-nums text-black/40">
          {step + 1}/{steps.length}
        </span>
      </figcaption>

      <div className="relative bg-[#f1f1f1]">
        <svg viewBox={viewBox} className="anim-stage block h-auto w-full" role="img" aria-label={`${title}. ${steps[step].caption}`}>
          {children(step)}
        </svg>
        {/* progress through the current step */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-black/5">
          <div
            key={`${run}-${step}`}
            className="h-full origin-left bg-black"
            style={{
              animation: `step-progress ${ms}ms linear forwards`,
              animationPlayState: playing ? "running" : "paused",
              transform: ended ? "scaleX(1)" : undefined,
            }}
          />
        </div>
      </div>

      <p className="min-h-[4.5em] px-4 pt-3 text-[16px] leading-snug" aria-live="polite">
        {steps[step].caption}
      </p>

      <div className="flex flex-wrap items-center gap-2 px-4 pt-1 pb-4">
        <button type="button" onClick={toggle} className="ctl ctl-primary" aria-label={playing ? "Pause" : ended ? "Replay" : "Play"}>
          {playing ? <PauseIcon /> : ended ? <ReplayIcon /> : <PlayIcon />}
          <span>{playing ? "Pause" : ended ? "Replay" : "Play"}</span>
        </button>
        <button type="button" onClick={replay} className="ctl" aria-label="Replay from the start">
          <ReplayIcon />
        </button>
        <button type="button" onClick={() => go(step - 1)} disabled={step === 0} className="ctl" aria-label="Previous step">
          ‹
        </button>
        <button type="button" onClick={() => go(step + 1)} disabled={step === last} className="ctl" aria-label="Next step">
          ›
        </button>
        <span className={`ml-auto flex flex-wrap items-center justify-end ${steps.length > 8 ? "gap-0.5" : "gap-1.5"}`}>
          {steps.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to step ${i + 1}`}
              aria-current={i === step}
              className="grid h-6 w-4 place-items-center"
            >
              <span className={`block h-2 rounded-full transition-all duration-300 ${i === step ? "w-4 bg-black" : "w-2 bg-black/20"}`} />
            </button>
          ))}
        </span>
      </div>
    </figure>
  );
}

const PlayIcon = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
    <path d="M2 1 L11 6 L2 11 Z" fill="currentColor" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
    <rect x="2" y="1" width="3" height="10" fill="currentColor" />
    <rect x="7" y="1" width="3" height="10" fill="currentColor" />
  </svg>
);
const ReplayIcon = () => (
  <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden>
    <path d="M6 1.5 A4.5 4.5 0 1 1 1.5 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6 0 L8.5 1.6 L6 3.2 Z" fill="currentColor" />
  </svg>
);
