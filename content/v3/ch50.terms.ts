import type { Term } from "@/lib/glossary";

export const TERMS = {
  "regulating-price": {
    term: "Regulating price",
    kid: "The price that market prices keep bouncing around, like a ball on a string.",
    grownUp:
      "The price around which market prices fluctuate (also called natural or necessary price). Marx argues it is wrongly explained as the sum of wages, profit and rent fixed independently, when those are really shares of a value already created.",
    firstSeen: "3-50",
  },
} satisfies Record<string, Term>;
