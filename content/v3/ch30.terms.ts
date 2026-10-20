import type { Term } from "@/lib/glossary";

export const TERMS = {
  "commercial-credit": {
    term: "Commercial credit",
    kid: "When businesses let each other buy now and pay later.",
    grownUp:
      "The credit capitalists engaged in production and trade give one another, represented by bills of exchange. Marx calls it the basis of the credit system; it expands with prosperity and stops suddenly in a crisis.",
    firstSeen: "3-30",
  },
  "plethora-of-capital": {
    term: "Plethora of money-capital",
    kid: "Too much spare money sitting in banks with nobody wanting to borrow it.",
    grownUp:
      "An abundance of loanable money-capital, typical just after a crisis, which shows stagnant industry rather than real wealth. Marx asks how far it expresses real accumulation and finds the two often move apart.",
    firstSeen: "3-30",
  },
} satisfies Record<string, Term>;
