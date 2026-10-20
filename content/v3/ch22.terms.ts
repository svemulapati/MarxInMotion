import type { Term } from "@/lib/glossary";

export const TERMS = {
  "rate-of-interest": {
    term: "Rate of interest",
    kid: "How much extra you pay each year for borrowing money, as a share of what you borrowed.",
    grownUp:
      "The ratio of interest to the money-capital lent. Its upper limit is the rate of profit; it has no natural level and is settled by competition between lenders and borrowers, custom and legal tradition.",
    firstSeen: "3-22",
  },
  "money-market": {
    term: "Money market",
    kid: "The place where people with money to lend meet people who want to borrow it.",
    grownUp:
      "The market for loanable money-capital, where the rate of interest appears each day as a single, definite, quoted number.",
    firstSeen: "3-22",
  },
} satisfies Record<string, Term>;
