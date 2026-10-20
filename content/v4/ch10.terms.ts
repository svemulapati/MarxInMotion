import type { Term } from "@/lib/glossary";

export const TERMS = {
  "natural-price": {
    term: "Natural price",
    kid: "The old economists' name for the price things settle around, once the day's ups and downs even out.",
    grownUp:
      "Smith's and Ricardo's term for the centre around which market prices rotate. Marx argues it is really the cost-price (price of production: cost plus average profit), and that Ricardo wrongly identified it with value itself.",
    firstSeen: "4-10",
  },
} satisfies Record<string, Term>;
