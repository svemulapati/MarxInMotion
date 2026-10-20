import type { Term } from "@/lib/glossary";

export const TERMS = {
  "working-period": {
    term: "Working period",
    kid: "All the working days joined together that it takes to finish one thing, like a train.",
    grownUp:
      "The number of connected working days required to produce one finished product (a locomotive, a ship, a building). A longer working period slows turnover and requires more circulating capital to be advanced before any returns.",
    firstSeen: "2-12",
  },
  "speculative-building": {
    term: "Speculative building",
    kid: "Building lots of houses first, with borrowed money, and hoping someone will buy them later.",
    grownUp:
      "Building for the market rather than to order, typically on credit. Marx cites London builders of the 1850s who built 100 to 200 houses at a time on mortgages far exceeding their own capital, and who collapsed when a crisis cut off the advances.",
    firstSeen: "2-12",
  },
} satisfies Record<string, Term>;
