import type { Term } from "@/lib/glossary";

export const TERMS = {
  "bill-of-exchange": {
    term: "Bill of exchange",
    kid: "A written promise to pay a sum on a certain day, which can be passed on like money until then.",
    grownUp:
      "A promissory note with a fixed date of payment. Endorsed from hand to hand, bills settle debts without coin and, Marx says, form the actual money of commerce and the basis of credit-money such as bank-notes.",
    firstSeen: "3-25",
  },
  "credit-system": {
    term: "Credit system",
    kid: "All the ways people buy now and pay later, and the banks that lend and borrow in the middle.",
    grownUp:
      "Commercial credit between producers and merchants, plus bank credit, in which bankers concentrate the loanable money-capital of society and become the general managers of lending and borrowing.",
    firstSeen: "3-25",
  },
  discounting: {
    term: "Discounting",
    kid: "When a bank pays you now for a promise that is due later, and keeps a little for itself.",
    grownUp:
      "Buying a bill of exchange before it falls due, deducting interest for the time it still has to run. For Marx the essential business of the banker.",
    firstSeen: "3-25",
  },
  "accommodation-bill": {
    term: "Accommodation bill",
    kid: "A promise written just to pay off an earlier promise, with nothing real behind it.",
    grownUp:
      "A bill drawn not for any sale of goods but to raise money, often to take up another bill falling due. Marx's sources call the capital raised this way fictitious.",
    firstSeen: "3-25",
  },
} satisfies Record<string, Term>;
