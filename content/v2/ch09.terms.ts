import type { Term } from "@/lib/glossary";

export const TERMS = {
  "aggregate-turnover": {
    term: "Aggregate turnover",
    kid: "The average speed of all a boss's money, mixing the fast money with the slow.",
    grownUp:
      "The average turnover of the various parts of an advanced capital, computed by reducing fixed and circulating capital to their money form.",
    firstSeen: "2-9",
  },
  "turnover-cycle": {
    term: "Turnover cycle",
    kid: "The long rhythm, about ten years in Marx's day, set by how long machines and buildings last.",
    grownUp:
      "The cycle of connected turnovers lasting as long as the life of the fixed capital, which Marx calls a material basis for periodic crises.",
    firstSeen: "2-9",
  },
} satisfies Record<string, Term>;
