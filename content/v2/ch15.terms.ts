import type { Term } from "@/lib/glossary";

export const TERMS = {
  "additional-capital": {
    term: "Additional capital",
    kid: "Extra money a business keeps so it can carry on working while its goods are still being sold.",
    grownUp:
      "Capital advanced beyond what one working period needs, so that production continues during the circulation period. It is to the total capital as the circulation period is to the turnover period.",
    firstSeen: "2-15",
  },
  "released-capital": {
    term: "Released capital",
    kid: "Money that comes back to a business before it is needed, so for a while it has nothing to do.",
    grownUp:
      "Money-capital set free by the mechanism of turnover (or by falling prices of materials and labour) that is not needed to keep production going. It flows to the money market and forms one of the foundations of credit.",
    firstSeen: "2-15",
  },
} satisfies Record<string, Term>;
