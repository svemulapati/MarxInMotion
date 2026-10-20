import type { Term } from "@/lib/glossary";

export const TERMS = {
  "food-always-affords-rent": {
    term: "Food always affords rent",
    kid: "Adam Smith's rule that a field growing food always earns rent, because people always want food.",
    grownUp:
      "Adam Smith's claim (Wealth of Nations, Book I, Chapter XI) that land producing human food always yields rent, because food creates its own demand as population grows. Marx calls it unproven and a physiocratic remnant in Smith's theory.",
    firstSeen: "4-14",
  },
} satisfies Record<string, Term>;
