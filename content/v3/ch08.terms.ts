import type { Term } from "@/lib/glossary";

export const TERMS = {
  "technical-composition": {
    term: "Technical composition of capital",
    kid: "How many workers there are compared with how many machines and materials they use.",
    grownUp:
      "The physical proportion between the mass of means of production and the quantity of labour-power needed to set it in motion, at a given level of productivity. Marx calls it the real basis of the organic composition.",
    firstSeen: "3-8",
  },
  "value-composition": {
    term: "Value composition of capital",
    kid: "The same mix, counted in coins: how many coins go on machines and materials, and how many on wages.",
    grownUp:
      "The ratio of constant to variable capital measured in value. It can differ between branches with the same technical composition (copper work versus iron work) because the means of production differ in price.",
    firstSeen: "3-8",
  },
} satisfies Record<string, Term>;
