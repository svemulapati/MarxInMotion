import type { Term } from "@/lib/glossary";

export const TERMS = {
  "money-dealing-capital": {
    term: "Money-dealing capital",
    kid: "Money used by people whose job is handling other people's money: changing coins, keeping cash and making payments.",
    grownUp:
      "Capital that specialises in the purely technical movements of money for industrial and commercial capital (paying, receiving, safekeeping, balancing accounts, exchanging currencies). Its profit is a deduction from surplus-value.",
    firstSeen: "3-19",
  },
  "bullion-trade": {
    term: "Bullion trade",
    kid: "Buying and selling plain gold and silver, the metal that coins are made of.",
    grownUp:
      "Trade in gold and silver as commodities. With money-changing, Marx calls it one of the original forms of the money trade, arising from money's role as world money.",
    firstSeen: "3-19",
  },
} satisfies Record<string, Term>;
