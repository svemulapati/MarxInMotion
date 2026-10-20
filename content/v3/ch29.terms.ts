import type { Term } from "@/lib/glossary";

export const TERMS = {
  "bank-capital": {
    term: "Bank capital",
    kid: "Everything a bank holds: some cash, and lots of papers that promise money later.",
    grownUp:
      "In Marx's breakdown: cash (gold or notes) and securities, namely bills of exchange plus public securities, shares and mortgages; divided by source into the banker's own invested capital and borrowed capital (deposits and, for issuing banks, notes).",
    firstSeen: "3-29",
  },
  "fictitious-capital": {
    term: "Fictitious capital",
    kid: "Paper that people count as money, even though the money behind it has already been spent or is only hoped for.",
    grownUp:
      "Titles to future income treated as capital: government bonds whose principal was long ago spent, and shares whose market price moves independently of the real capital they claim on. Marx calls them paper duplicates of real capital, or of none at all.",
    firstSeen: "3-29",
  },
  capitalisation: {
    term: "Capitalisation",
    kid: "Working out what a promise of money every year is worth today, using the interest rate.",
    grownUp:
      "Treating any regular income as interest on an imaginary capital at the going rate (an income of £100 at 5% counts as £2,000). The price of such a title moves inversely with the rate of interest.",
    firstSeen: "3-29",
  },
} satisfies Record<string, Term>;
