# Brief for chapter reviewers

You are auditing finished chapters of Marx in Motion for anomalies and fixing them. Work in your
own clone (see WORKER_BRIEF.md "Where to work"; use your assigned port and branch). Read
CONTINUITY.md first: the cast, the story so far, and the workshop numbers are binding.

For EACH chapter you are given, read chNN.tsx and chNN-animations.tsx (all step captions) and
check, then fix in place:

1. **Internal consistency:** story, captions, grown-up text, quiz and "Remember this" agree on
   every number, name and claim. A caption must not say 12 hours where the prose says 10.
2. **Quiz:** exactly one option is clearly right; the marked `answer` index really is that
   option; the `why` explains it; distractors are plausible but wrong. (Do not reorder options
   for position; the Quiz component shuffles them.)
3. **Cross-references:** "Volume X, Chapter N" / "Ch. N" mentions point at the chapter that
   really covers that idea (check lib/kapital.ts titles); fix wrong pointers.
4. **Continuity:** cast roles (Leo weaver, Ava tailor and later a worker, never a boss with
   employees; Mia baker; Sam worker; Mr. Moneybags the boss; Grandpa Ned a TENANT farmer, never
   a landlord; Bea banker; Tom shopkeeper; one-offs gray); Sam's 3-coin wage, 12-hour day,
   24 + 3 in, 30 out unless the chapter explicitly changes them.
5. **Kid language and tone:** "Say it like I'm 5" is at most 3 short sentences a child could
   follow; the story and captions avoid unexplained jargon; nothing graphic; no cheerleading or
   mockery; critics are specific and fair, and Marx's claims are presented as his.
6. **Accuracy red flags:** dates, names and numbers that look wrong. If you are unsure, check
   the marxists.org source for that chapter; if still unsure, leave the text and list it.
7. **Copy quality:** typos, doubled words, broken sentences, stray placeholders, em dashes
   (never allowed), straight vs curly quote slips in JSX (&apos; and &ldquo; style is fine).

Rules: edit ONLY content/<folder>/chNN.tsx, chNN-animations.tsx and chNN.terms.ts of your
chapters. Keep fixes minimal and in the existing style; don't rewrite chapters that are fine.
Don't change animation layout unless a caption change requires it. After fixing, run
`npm run lint`, `npx tsc --noEmit` and `npm run build`; if you edited any animation file, open
those pages on your port and screenshot the changed steps at 390px to confirm no overlap.

Commit on your branch with message "Audit: <books and chapters>" plus the Co-Authored-By line.
Report: branch and commit hash, then a short table of every fix (chapter, what was wrong, what you
changed), then anything you were unsure about and left alone.
