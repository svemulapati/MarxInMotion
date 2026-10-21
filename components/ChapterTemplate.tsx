import Link from "next/link";
import type { ReactNode } from "react";
import Quiz, { type QuizQuestion } from "@/components/Quiz";
import SiteBar from "@/components/SiteBar";
import { GLOSSARY, type TermId } from "@/lib/glossary";
import { chapterHref, getVolume, neighbours, partOf, type Chapter } from "@/lib/kapital";

/** Everything a chapter page must contain. The template enforces the counts. */
export interface ChapterContent {
  bigQuestion: string;
  /** The Tiny Town story that sets up the puzzle. */
  story: ReactNode;
  /** A question to guess at before watching. */
  guess: ReactNode;
  /** Animations that work through the puzzle. */
  struggle: ReactNode[];
  /** Animations that show the answer. */
  reveal: ReactNode[];
  /** Three sentences at most. */
  eli5: string;
  grownUp: ReactNode;
  marxSaid: ReactNode;
  critics: { who: string; point: ReactNode }[];
  quiz: QuizQuestion[];
  remember: string[];
  terms: TermId[];
  /** Which sections of the original the chapter covers, and any edition notes. */
  source: ReactNode;
}

function validate(key: string, c: ChapterContent) {
  const problems: string[] = [];
  if (c.struggle.length + c.reveal.length < 2) problems.push("needs at least two animations");
  // "Mr." and friends end a word, not a sentence
  const sentences = c.eli5.split(/(?<!\b(?:Mr|Mrs|Ms|Dr|St|vs)\.)(?<=[.!?])\s+/).filter(Boolean).length;
  if (sentences > 3) problems.push(`"Say it like I'm 5" has ${sentences} sentences (max 3)`);
  if (c.quiz.length !== 3) problems.push(`quiz has ${c.quiz.length} questions (needs 3)`);
  c.quiz.forEach((q, i) => {
    if (q.answer < 0 || q.answer >= q.options.length) problems.push(`quiz question ${i + 1} has no valid answer`);
  });
  if (c.critics.length < 1 || c.critics.length > 2) problems.push("needs one or two critics");
  if (c.terms.length === 0) problems.push("introduces no glossary terms");
  if (problems.length) throw new Error(`Chapter ${key}: ${problems.join("; ")}`);
}

export default function ChapterTemplate({ chapter, content }: { chapter: Chapter; content: ChapterContent }) {
  validate(`${chapter.vol}-${chapter.n}`, content);
  const vol = getVolume(chapter.vol)!;
  const part = partOf(chapter);
  const { prev, next } = neighbours(chapter);

  return (
    <main className="flex-1 overflow-x-clip">
      <SiteBar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="px-4 pt-16 pb-12 sm:px-5 sm:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] text-white/50">
            {vol.kind === "prelude" ? `(${vol.label}) · ${vol.title}` : `(${vol.label}) · Part ${part.n}: ${part.title}`}
          </p>
          <div className="mt-4 flex items-end gap-4">
            <span className="chapter-no">{chapter.n}</span>
            <span className="label pb-3 text-white/50">(Chapter)</span>
          </div>
          <h1 className="mt-4 text-[34px] leading-[1.02] tracking-[-0.03em] sm:text-[52px]">{chapter.title}</h1>
        </div>
      </header>

      <article className="paper mx-auto max-w-[760px] px-5 pt-8 pb-14 sm:px-10 sm:pt-12">
        {vol.kind === "prelude" && chapter.n > 0 && (
          <p className="mb-8 border-l-2 border-black bg-[#f1f1f1] px-4 py-3 text-[14px] leading-snug">
            <span className="label block">(Prelude)</span>
            {vol.title} is a short book Marx wrote before <em>Capital</em>. Read it as a warm-up: the big ideas
            come back, worked out in full, in Volume I. Chapter 0 tells the story of the book.
          </p>
        )}
        {chapter.vol === 4 && (
          <p className="mb-8 border-l-2 border-black bg-[#f1f1f1] px-4 py-3 text-[14px] leading-snug">
            <span className="label block">(Bonus volume)</span>
            Theories of Surplus-Value is Marx&apos;s critical history of the economists who came before him. It is
            often called &ldquo;Volume IV&rdquo;, but it is not part of <em>Capital</em> proper: Marx left it as
            notebooks, and Karl Kautsky first edited it (1905 to 1910).
          </p>
        )}
        {/* ── Challenge ─────────────────────────────────── */}
        <Section id="challenge" label="Challenge" title="The Big Question">
          <p className="big-question">{content.bigQuestion}</p>
          <h3 className="sub">A story from Tiny Town</h3>
          <div className="prose-kid">{content.story}</div>
        </Section>

        {/* ── Struggle ──────────────────────────────────── */}
        <Section id="struggle" label="Struggle" title="Work it out">
          <div className="guess">
            <span className="label block">(Guess first)</span>
            {content.guess}
          </div>
          {content.struggle}
        </Section>

        {/* ── Reveal ────────────────────────────────────── */}
        <Section id="reveal" label="Reveal" title="Here is the answer">
          {content.reveal}

          <div className="eli5">
            <span className="label block text-white/50">(Say it like I&apos;m 5)</span>
            <p>{content.eli5}</p>
          </div>

          <h3 className="sub">Now the grown-up version</h3>
          <div className="prose-adult">{content.grownUp}</div>

          <h3 className="sub">What Marx was really saying</h3>
          <div className="prose-adult">{content.marxSaid}</div>
        </Section>

        {/* ── Reinforce ─────────────────────────────────── */}
        <Section id="reinforce" label="Reinforce" title="Make it stick">
          <h3 className="sub mt-0">What critics say</h3>
          <ul className="space-y-4">
            {content.critics.map((c) => (
              <li key={c.who} className="prose-adult border-l-2 border-black pl-4">
                <span className="label block">({c.who})</span>
                {c.point}
              </li>
            ))}
          </ul>

          <h3 className="sub">Quick quiz</h3>
          <Quiz questions={content.quiz} />

          <h3 className="sub">Remember this</h3>
          <ol className="space-y-2">
            {content.remember.map((r, i) => (
              <li key={i} className="grid grid-cols-[28px_1fr] text-[17px] leading-snug">
                <span className="text-black/40">{i + 1}.</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>

          <h3 className="sub">New words</h3>
          <dl className="grid gap-3 sm:grid-cols-2">
            {content.terms.map((id) => (
              <div key={id} id={`term-${id}`} className="bg-[#f1f1f1] p-3">
                <dt className="text-[15px] font-medium">{GLOSSARY[id].term}</dt>
                <dd className="mt-1 text-[14px] leading-snug text-black/70">{GLOSSARY[id].kid}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[14px]">
            <Link href="/glossary">See every word in the glossary</Link>
          </p>
        </Section>

        <aside className="mt-12 border-t border-black/15 pt-4 text-[13px] leading-snug text-black/55">
          <span className="label block">(Source)</span>
          {content.source}
        </aside>
      </article>

      {/* ── Previous / next ──────────────────────────────── */}
      <nav className="mx-auto grid max-w-[760px] grid-cols-2 gap-2 px-4 py-6 text-[13px] sm:px-0" aria-label="Chapters">
        {prev ? (
          <Link href={chapterHref(prev)} className="strip block py-2 no-underline">
            <span className="label block">(Previous)</span>
            {getVolume(prev.vol)!.short}, Ch. {prev.n}: {prev.title}
          </Link>
        ) : (
          <Link href="/introduction" className="strip block py-2 no-underline">
            <span className="label block">(Previous)</span>
            Introduction: Who was Karl Marx?
          </Link>
        )}
        {next ? (
          <Link href={chapterHref(next)} className="strip block py-2 text-right no-underline">
            <span className="label block">(Next)</span>
            {getVolume(next.vol)!.short}, Ch. {next.n}: {next.title}
          </Link>
        ) : (
          <Link href="/the-whole-story" className="strip block py-2 text-right no-underline">
            <span className="label block">(Next)</span>
            Wrap-up: the whole story in one animation
          </Link>
        )}
      </nav>
    </main>
  );
}

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6 pt-10 first:pt-0">
      <p className="label">({label})</p>
      <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">{title}</h2>
      {children}
    </section>
  );
}
