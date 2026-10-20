import type { Term } from "@/lib/glossary";

export const TERMS = {
  "cost-price": {
    term: "Cost-price",
    kid: "Everything the boss paid out to make a thing, all added up in one pile.",
    grownUp:
      "The part of a commodity's value that replaces the capital spent on it, constant plus variable capital (k = c + v). Lumping c and v together hides the fact that only the variable part creates new value.",
    firstSeen: "3-1",
  },
  profit: {
    term: "Profit",
    kid: "The extra the boss gets back on top of everything he spent.",
    grownUp:
      "Surplus-value seen as the offspring of the whole capital advanced rather than of the variable capital alone. In Part I of Volume III profit and surplus-value are equal in size; profit is the same thing in a form that hides its origin.",
    firstSeen: "3-1",
  },
} satisfies Record<string, Term>;
