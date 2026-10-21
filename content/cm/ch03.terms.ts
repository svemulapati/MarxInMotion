import type { Term } from "@/lib/glossary";

export const TERMS = {
  "utopian-socialism": {
    term: "Utopian socialism",
    kid: "Plans for a perfect, fair community, drawn up by thinkers who hoped a good example would win everyone over.",
    grownUp:
      "The Manifesto's name (\"critical-utopian socialism and communism\") for Saint-Simon, Fourier and Owen: valuable as criticism of society, Marx and Engels said, but relying on invented plans and appeals to all classes instead of workers' own political action.",
    firstSeen: "6-3",
  },
  "petty-bourgeois-socialism": {
    term: "Petty-bourgeois socialism",
    kid: "Socialism from the point of view of small shopkeepers and farmers, who wanted the old ways back.",
    grownUp:
      "In the Manifesto, the school headed by Sismondi: acute in showing the effects of machinery, crises and the ruin of small producers, but aiming to restore guilds and patriarchal farming, so \"both reactionary and Utopian\".",
    firstSeen: "6-3",
  },
  "bourgeois-socialism": {
    term: "Bourgeois socialism",
    kid: "Helping workers with reforms while keeping owners and workers just as they are.",
    grownUp:
      "The Manifesto's \"conservative or bourgeois socialism\": reformers who want to redress social grievances in order to secure bourgeois society, \"a bourgeoisie without a proletariat\". Proudhon is its example.",
    firstSeen: "6-3",
  },
} satisfies Record<string, Term>;
