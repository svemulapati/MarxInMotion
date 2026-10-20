import type { Term } from "@/lib/glossary";

export const TERMS = {
  physiocrats: {
    term: "Physiocrats",
    kid: "A group of French thinkers who believed only farming makes extra wealth, as a gift of nature.",
    grownUp:
      "The school of François Quesnay (1694 to 1774) and his followers, who held that only agriculture yields a net product (a surplus). Marx credits them with the first analysis of capital's reproduction while rejecting their view of the surplus as a gift of nature.",
    firstSeen: "2-10",
  },
  avances: {
    term: "Original and annual advances",
    kid: "Quesnay's two piles: things a farm uses for years, and things it uses up every year.",
    grownUp:
      "Quesnay's avances primitives (buildings, implements, cattle, replaced over many years) and avances annuelles (seed, wages, replaced each year). Marx sees in them the first correct form of the later distinction between fixed and circulating capital.",
    firstSeen: "2-10",
  },
} satisfies Record<string, Term>;
