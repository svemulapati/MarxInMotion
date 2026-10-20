import type { Term } from "@/lib/glossary";

export const TERMS = {
  "economy-of-constant-capital": {
    term: "Economy of constant capital",
    kid: "Using fewer machines, buildings and materials for the same work, so the boss's money goes further.",
    grownUp:
      "Any saving in the constant capital needed for a given output, from shared buildings and engines, better machines, recycling waste or cutting spending on safety. With the same surplus-value it raises the rate of profit. Marx stresses that most of it results from the combined, social character of labour.",
    firstSeen: "3-5",
  },
  "excretions-of-production": {
    term: "Excretions of production",
    kid: "Leftovers and waste from making things, like iron filings or old rags.",
    grownUp:
      "Marx's term for industrial waste and by-products. Large-scale industry and chemistry turn more of them back into raw materials, a further economy of constant capital.",
    firstSeen: "3-5",
  },
} satisfies Record<string, Term>;
