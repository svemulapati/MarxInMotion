import type { Term } from "@/lib/glossary";

export const TERMS = {
  "turnover-time": {
    term: "Turnover time",
    kid: "How long it takes a boss's coins to go out, make goods, get sold, and come home again.",
    grownUp:
      "The time from the advance of capital-value in a given form to its return in the same form: the sum of production time and circulation time.",
    firstSeen: "2-7",
  },
  "number-of-turnovers": {
    term: "Number of turnovers",
    kid: "How many times a year the same coins can go round and come home.",
    grownUp:
      "The year (T) divided by the turnover time of a capital (t): n = T/t. A turnover time of 3 months gives 4 turnovers a year.",
    firstSeen: "2-7",
  },
} satisfies Record<string, Term>;
