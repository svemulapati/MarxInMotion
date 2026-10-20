import type { Term } from "@/lib/glossary";

export const TERMS = {
  "selling-time": {
    term: "Selling time",
    kid: "How long finished goods wait, travelling and sitting in shops, before someone pays for them.",
    grownUp:
      "The first part of the time of circulation, during which capital exists as commodity-capital. Its length depends above all on the distance to the market.",
    firstSeen: "2-14",
  },
  "buying-time": {
    term: "Buying time",
    kid: "How long money waits before it is turned back into cotton, tools and workers.",
    grownUp:
      "The second part of the time of circulation, during which capital exists as money-capital before being reconverted into the elements of productive capital.",
    firstSeen: "2-14",
  },
} satisfies Record<string, Term>;
