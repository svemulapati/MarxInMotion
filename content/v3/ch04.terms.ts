import type { Term } from "@/lib/glossary";

export const TERMS = {
  "annual-rate-of-profit": {
    term: "Annual rate of profit",
    kid: "How much the boss's money grows in a whole year, counting how many times it goes round.",
    grownUp:
      "The surplus-value of a year divided by the total capital advanced. With n turnovers of the variable capital a year it is p′ = s′n × v/C, so a shorter turnover time raises it.",
    firstSeen: "3-4",
  },
} satisfies Record<string, Term>;
