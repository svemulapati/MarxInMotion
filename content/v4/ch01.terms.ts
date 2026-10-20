import type { Term } from "@/lib/glossary";

export const TERMS = {
  "profit-upon-alienation": {
    term: "Profit upon alienation",
    kid: "Profit from selling a thing for more than it is really worth.",
    grownUp:
      "Sir James Steuart's name for the excess of a commodity's price over its \"real value\", gained in the act of selling. Steuart saw that it only moves wealth from buyer to seller; Marx adds that it can never explain surplus-value for society as a whole.",
    firstSeen: "4-1",
  },
  "positive-profit": {
    term: "Positive profit",
    kid: "Steuart's name for the extra that comes from more work and cleverness, making the whole town richer.",
    grownUp:
      "Steuart's term for profit that \"implies no loss to any body\" and swells the public good. Marx reads it as Steuart's word for a greater mass of useful things, quite distinct from the capitalist's profit, which Steuart still explained by selling above value.",
    firstSeen: "4-1",
  },
  "mercantile-system": {
    term: "Mercantile system",
    kid: "An old idea that a country gets rich by selling abroad for more than it buys, and piling up gold.",
    grownUp:
      "The doctrine of the monetary and mercantile writers before the Physiocrats, who located profit in exchange, especially foreign trade settled in gold and silver. Marx calls Steuart its rational, scientific expression.",
    firstSeen: "4-1",
  },
} satisfies Record<string, Term>;
