import type { Term } from "@/lib/glossary";

export const TERMS = {
  "historical-forms-of-rent": {
    term: "Historical forms of rent",
    kid: "The different ways rent was paid over time: in days of work, in grain, in a share of the harvest, and in money.",
    grownUp:
      "Richard Jones's sequence of labour (serf) rents, produce rents, metayer rents, ryot rents and modern farmer's rent, each tied to a definite form of labour. Marx praised it as a rare historical sense among English economists.",
    firstSeen: "4-24",
  },
  "economical-structure-of-nations": {
    term: "Economical structure of nations",
    kid: "How a whole country organises its work, which changes over history.",
    grownUp:
      "Richard Jones's phrase for the way a nation's production and classes are arranged at a given stage. Marx valued it because it treats capitalist relations as one historical stage, not an eternal order.",
    firstSeen: "4-24",
  },
} satisfies Record<string, Term>;
