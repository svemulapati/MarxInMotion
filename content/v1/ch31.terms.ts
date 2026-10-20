import type { Term } from "@/lib/glossary";

export const TERMS = {
  "colonial-system": {
    term: "Colonial system",
    kid: "Rich countries taking over faraway lands and their people to grab their gold, crops and markets.",
    grownUp:
      "For Marx, one of the main levers of primitive accumulation: conquest, plunder and enslavement abroad, plus monopoly markets for the home country's goods, whose loot was turned into capital at home.",
    firstSeen: "1-31",
  },
  "national-debt": {
    term: "National debt",
    kid: "Money a government borrows and pays interest on, using everybody's taxes.",
    grownUp:
      "Public credit, which Marx calls one of the most powerful levers of primitive accumulation: it turns money lent to the state into interest-bearing bonds, breeds financiers and banks, and requires ever heavier taxes, mostly on necessities.",
    firstSeen: "1-31",
  },
  protectionism: {
    term: "Protection",
    kid: "Taxes on goods from other countries, so that home factories can sell more.",
    grownUp:
      "The system of protective duties and export premiums that Marx calls an artificial means of \"manufacturing manufacturers\", expropriating independent producers and capitalising national wealth.",
    firstSeen: "1-31",
  },
} satisfies Record<string, Term>;
