import type { Term } from "@/lib/glossary";

export const TERMS = {
  "rate-of-exchange": {
    term: "Rate of exchange",
    kid: "How much of one country's money you must pay to get another country's money.",
    grownUp:
      "The price of one currency in terms of another. In Marx's time, when a country's payments abroad exceeded what it was owed, its rate turned against it until gold was shipped instead of bills; the rate was called the barometer of international gold movements.",
    firstSeen: "3-35",
  },
  "metal-reserve": {
    term: "Metal reserve",
    kid: "The pile of gold a central bank keeps, which all the paper money and promises depend on.",
    grownUp:
      "The central bank's hoard of precious metal, serving as world money, as a reserve for domestic coin, and as security for bank-notes. Marx calls it the pivot of the bank, as the bank is the pivot of the credit system.",
    firstSeen: "3-35",
  },
} satisfies Record<string, Term>;
