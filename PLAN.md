# Marx in Motion: build plan

Capital explained chapter by chapter, with animations, in words a five-year-old can follow.
Standalone site and repo. It shares nothing with LiveStack; the animation approach was studied
there and recreated here.

## Stack

Next.js 16 (App Router, every page prerendered static) + Tailwind 4 + TypeScript, on Vercel.

The brief defaulted to Astro. We stayed on Next.js because the site was already scaffolded and
deployed on it, and because the LiveStack animation style is React components with state, which
carry over directly. Astro would need the same React components as islands, so it would add a
second framework without changing what readers see.

## Folder structure

```
app/
  page.tsx                    home: wordmark, volume cards, full contents
  introduction/page.tsx       "Who was Karl Marx and why does this book matter"
  glossary/page.tsx           every term, kid + grown-up meaning, first-seen link
  [volume]/[chapter]/page.tsx /volume-1/chapter-1 ... (only READY chapters are built)
components/
  ChapterTemplate.tsx         the fixed chapter layout; validates each chapter at build
  Quiz.tsx                    3 questions, instant feedback, score, try again
  anim/Player.tsx             step player: play, pause, replay, prev/next, step dots, captions
  anim/Figure.tsx             a Tiny Town person (cast colour, hat, mood)
  anim/Things.tsx             drawn objects (coat, linen, gold, loaf, clock, tag...) + Place/Fade
content/
  index.ts                    registry of written chapters
  intro-animations.tsx
  v1/ch01.tsx                 a chapter's words (server component)
  v1/ch01-animations.tsx      its animations (client component)
lib/
  kapital.ts                  every volume, part and chapter title + which are ready
  cast.ts                     the recurring Tiny Town cast
  glossary.ts                 the running glossary
scripts/progress.mjs          regenerates PROGRESS.md from lib/kapital.ts
NOTES.md                      details to check, for the author's review
```

## Chapter template

Every chapter is a `ChapterContent` object; the template renders it in the order
Challenge, Struggle, Reveal, Reinforce:

1. **Challenge**: Big Question (one line) and a Tiny Town story that sets up the puzzle.
2. **Struggle**: "Guess first", then animations that work through the puzzle.
3. **Reveal**: animations with the answer, "Say it like I'm 5" (max 3 sentences),
   "Now the grown-up version", "What Marx was really saying".
4. **Reinforce**: "What critics say" (1 or 2), 3-question quiz, "Remember this",
   new glossary words, source note, previous/next links.

The build fails if a chapter has fewer than 2 animations, more than 3 sentences in the
five-year-old version, a quiz that is not exactly 3 questions, no critics, or a glossary
term that does not exist.

## Animation approach

Recreated from LiveStack's diagrams: hand-written SVG scenes, no animation library. Each
animation is a list of steps (caption + duration) and a scene drawn as a function of the
current step. Elements move between steps with CSS transitions (`Place`, `Fade`, `Figure`),
small loops (snow, gears, sparkles) are CSS keyframes. The `Player` adds the controls,
autoplays once when half on screen, never autoplays under `prefers-reduced-motion`, and
announces captions to screen readers. Scenes use a 360-unit-wide viewBox so text stays
readable on a phone.

## Build order

- **Phase 1**: shell, home, chapter template, shared animation components, glossary,
  introduction. Done, together with Volume I Chapter 1 as the first chapter.
- **Phase 2**: rest of Volume I (chapters 2 to 33).
- **Phase 3**: Volume II.
- **Phase 4**: Volume III.
- **Phase 5**: Volume IV (Theories of Surplus-Value), the "whole story in one animation"
  wrap-up, cross-volume glossary review.

After each phase: build, check every page and every animation step in a real browser at
phone and desktop widths, update PROGRESS.md, commit, deploy, stop for review.
