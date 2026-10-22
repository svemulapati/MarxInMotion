"use client";

import { useState } from "react";

export interface QuizQuestion {
  q: string;
  options: string[];
  /** Index into options. */
  answer: number;
  /** Shown after any pick: why the right answer is right. */
  why: string;
}

/** A small stable hash, so the order is the same on the server and in the browser. */
function hash(text: string) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Moves the right answer to a position picked from the question text, and
 * shifts it by one for each question, so neighbouring questions never put
 * the answer in the same place. The other options keep their order.
 */
function arrange(q: QuizQuestion, qi: number): QuizQuestion {
  const n = q.options.length;
  const target = (hash(q.q) + qi) % n;
  const others = q.options.filter((_, i) => i !== q.answer);
  const options = [...others.slice(0, target), q.options[q.answer], ...others.slice(target)];
  return { ...q, options, answer: target };
}

/** Three questions, instant feedback on each pick, and a score at the end. */
export default function Quiz({ questions: given }: { questions: QuizQuestion[] }) {
  const questions = given.map(arrange);
  const [picks, setPicks] = useState<(number | null)[]>(() => questions.map(() => null));
  const answered = picks.filter((p) => p !== null).length;
  const score = picks.filter((p, i) => p === questions[i].answer).length;

  return (
    <div className="space-y-6">
      {questions.map((qq, qi) => {
        const pick = picks[qi];
        const done = pick !== null;
        return (
          <fieldset key={qi} className="border-t border-black/15 pt-4">
            <legend className="mb-3 grid grid-cols-[28px_1fr] text-[17px] leading-snug">
              <span className="text-black/40">{qi + 1}.</span>
              <span>{qq.q}</span>
            </legend>
            <div className="grid gap-2 pl-7">
              {qq.options.map((opt, oi) => {
                const right = oi === qq.answer;
                const chosen = pick === oi;
                const tone = !done
                  ? "bg-[#f1f1f1] hover:bg-[#e4e4e4]"
                  : right
                    ? "bg-[#2a9d5b] text-white"
                    : chosen
                      ? "bg-[#d6452f] text-white"
                      : "bg-[#f1f1f1] text-black/40";
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={done}
                    onClick={() => setPicks((p) => p.map((v, i) => (i === qi ? oi : v)))}
                    className={`px-3 py-2.5 text-left text-[15px] leading-snug transition-colors ${tone}`}
                  >
                    {done && right ? "✓ " : done && chosen ? "✗ " : ""}
                    {opt}
                  </button>
                );
              })}
            </div>
            {done && (
              <p className="mt-3 pl-7 text-[15px] leading-snug" role="status">
                <strong>{pick === qq.answer ? "Yes!" : "Not quite."}</strong> {qq.why}
              </p>
            )}
          </fieldset>
        );
      })}
      {answered === questions.length && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-black px-4 py-3 text-white">
          <span>
            You got {score} out of {questions.length}.{" "}
            {score === questions.length ? "You really get it." : "Have another look at the animations above."}
          </span>
          <button type="button" className="underline" onClick={() => setPicks(questions.map(() => null))}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
