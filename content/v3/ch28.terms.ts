import type { Term } from "@/lib/glossary";

export const TERMS = {
  "banking-school": {
    term: "Banking School",
    kid: "A group of old bankers and writers who argued about how much money a country needs and what it does.",
    grownUp:
      "Thomas Tooke, John Fullarton and others, who held that the issue of bank-notes follows the needs of trade. Marx shares some of their criticism of the rival Currency School, but rejects their split between currency and capital.",
    firstSeen: "3-28",
  },
  "revenue-and-capital": {
    term: "Money as revenue and as capital",
    kid: "The same coin can be money to live on for one person and money to make more money for another.",
    grownUp:
      "Marx's correction to Tooke: money circulating between consumers and shops realises revenue, money passing between capitalists transfers capital. The difference lies in its function for the people involved, not in two kinds of money.",
    firstSeen: "3-28",
  },
} satisfies Record<string, Term>;
