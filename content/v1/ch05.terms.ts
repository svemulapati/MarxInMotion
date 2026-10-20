import type { Term } from "@/lib/glossary";

export const TERMS = {
  "sphere-of-circulation": {
    term: "Sphere of circulation",
    kid: "The whole world of buying and selling: the market.",
    grownUp:
      "The realm of commodity exchange, where things change hands as sales and purchases. Marx shows it cannot by itself create surplus-value.",
    firstSeen: "1-5",
  },
  "exchange-of-equivalents": {
    term: "Exchange of equivalents",
    kid: "A fair swap: you give and get the same amount of value.",
    grownUp:
      "Exchange of commodities at their values. Each side may gain in usefulness, but neither gains in value, so it cannot explain surplus-value.",
    firstSeen: "1-5",
  },
} satisfies Record<string, Term>;
