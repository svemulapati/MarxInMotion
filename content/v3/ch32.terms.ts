import type { Term } from "@/lib/glossary";

export const TERMS = {
  "monetary-crisis": {
    term: "Monetary crisis",
    kid: "A scary time when nobody trusts promises to pay and everyone wants real money at once.",
    grownUp:
      "The phase of a crisis in which credit collapses and money becomes the only accepted means of payment, so interest soars and commodity prices fall together. Marx sees it as the surface form of a deeper crisis in production and trade.",
    firstSeen: "3-32",
  },
} satisfies Record<string, Term>;
