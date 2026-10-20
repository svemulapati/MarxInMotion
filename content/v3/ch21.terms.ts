import type { Term } from "@/lib/glossary";

export const TERMS = {
  "interest-bearing-capital": {
    term: "Interest-bearing capital",
    kid: "Money lent to someone who uses it to make a profit, and who pays a bit extra back.",
    grownUp:
      "Money-capital lent out as a commodity whose use-value is its power to produce profit. Its movement is M–M–C–M′–M′: loan, use as capital, repayment with interest.",
    firstSeen: "3-21",
  },
  interest: {
    term: "Interest",
    kid: "The extra you pay back for borrowing money.",
    grownUp:
      "The part of profit that the functioning capitalist pays to the owner of the money-capital he borrowed. Marx calls it an irrational form of price, since it is not the value of anything.",
    firstSeen: "3-21",
  },
} satisfies Record<string, Term>;
