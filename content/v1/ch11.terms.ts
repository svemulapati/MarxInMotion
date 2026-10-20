import type { Term } from "@/lib/glossary";

export const TERMS = {
  "mass-of-surplus-value": {
    term: "Mass of surplus-value",
    kid: "All the extra value a boss gets from all his workers, added together.",
    grownUp:
      "The total surplus-value produced: the variable capital advanced multiplied by the rate of surplus-value, or the surplus-value per worker times the number of workers.",
    firstSeen: "1-11",
  },
  "small-master": {
    term: "Small master",
    kid: "A boss who still has to work beside his helpers because he has too few of them.",
    grownUp:
      "Marx's name for a hybrid of capitalist and worker: an owner whose capital is below the minimum needed to live off surplus-value and still accumulate, so he must take part in the work himself.",
    firstSeen: "1-11",
  },
} satisfies Record<string, Term>;
