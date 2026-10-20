import type { Term } from "@/lib/glossary";

export const TERMS = {
  "bank-note": {
    term: "Bank-note",
    kid: "A paper promise from a bank that people use like money.",
    grownUp:
      "A bank's promissory note payable to the bearer, which circulates as credit-money. Marx argues that in ordinary times the needs of trade, not the bank, decide how many notes are in circulation.",
    firstSeen: "3-33",
  },
  "bank-of-england": {
    term: "Bank of England",
    kid: "England's big central bank, which looked after the country's gold and printed its main bank-notes.",
    grownUp:
      "The central bank of Britain. In Marx's day it held the country's main gold reserve and issued the only notes accepted everywhere in England, which made it the pivot of the whole credit system.",
    firstSeen: "3-33",
  },
} satisfies Record<string, Term>;
