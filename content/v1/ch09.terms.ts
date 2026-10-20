import type { Term } from "@/lib/glossary";

export const TERMS = {
  "rate-of-surplus-value": {
    term: "Rate of surplus-value (s/v)",
    kid: "How big the boss's extra is compared with the worker's wage. 3 coins extra on a 3-coin wage is 100%.",
    grownUp:
      "Surplus-value divided by variable capital, equal to surplus labour divided by necessary labour. Marx calls it an exact expression for the degree of exploitation of labour-power by capital.",
    firstSeen: "1-9",
  },
  "necessary-labour-time": {
    term: "Necessary labour time",
    kid: "The part of the working day in which a worker makes as much value as their own wage.",
    grownUp:
      "The portion of the working day in which the worker reproduces the value of his labour-power. (In Chapter 1 the phrase meant something else: the socially necessary time to make any commodity.)",
    firstSeen: "1-9",
  },
  "surplus-labour-time": {
    term: "Surplus labour time",
    kid: "The rest of the working day, when the worker makes extra value for the boss and is not paid for it.",
    grownUp:
      "The portion of the working day beyond necessary labour time, in which the worker produces surplus-value for the capitalist.",
    firstSeen: "1-9",
  },
} satisfies Record<string, Term>;
