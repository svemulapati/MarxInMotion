import type { Term } from "@/lib/glossary";

export const TERMS = {
  "currency-principle": {
    term: "Currency principle",
    kid: "The idea that paper money should grow and shrink exactly as gold does, to keep prices steady.",
    grownUp:
      "The doctrine of Overstone, Torrens and the Currency School, based on Ricardo's quantity theory: the note issue should vary exactly with the gold reserve. Marx argues it misunderstood money and made crises worse.",
    firstSeen: "3-34",
  },
  "bank-act-1844": {
    term: "Bank Act of 1844",
    kid: "A law that let the Bank of England print notes only to match its gold, plus a fixed amount of bonds.",
    grownUp:
      "Sir Robert Peel's Act splitting the Bank of England into an issue department (£14 million in securities plus all the gold, with notes issued to that total) and a banking department. It was suspended in the crises of 1847 and 1857.",
    firstSeen: "3-34",
  },
} satisfies Record<string, Term>;
