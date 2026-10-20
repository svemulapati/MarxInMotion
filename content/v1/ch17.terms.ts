import type { Term } from "@/lib/glossary";

export const TERMS = {
  "productivity-of-labour": {
    term: "Productivity of labour",
    kid: "How much gets made in an hour of work. A new oven makes the baker more productive.",
    grownUp:
      "The quantity of product a given amount of labour yields in a given time, which depends on the conditions of production. Rising productivity spreads the same value over more products, so each one is worth less.",
    firstSeen: "1-17",
  },
  "real-wage": {
    term: "Real wage",
    kid: "What a wage can actually buy, not just how many coins it is.",
    grownUp:
      "The wage measured in the necessaries it buys rather than in money. Marx notes that between 1799 and 1815 English money wages rose while real wages fell.",
    firstSeen: "1-17",
  },
} satisfies Record<string, Term>;
