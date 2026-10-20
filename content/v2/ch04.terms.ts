import type { Term } from "@/lib/glossary";

export const TERMS = {
  "natural-economy": {
    term: "Natural economy",
    kid: "A way of living where families make most of what they need themselves and rarely buy or sell.",
    grownUp:
      "Production mainly for one's own use, with little exchange. Marx criticises setting it against money and credit economy, because those labels sort societies by how they exchange rather than by how they produce.",
    firstSeen: "2-4",
  },
  "credit-economy": {
    term: "Credit economy",
    kid: "Buying and selling on promises to pay later, instead of with coins on the spot.",
    grownUp:
      "Exchange carried on largely through credit. Marx treats it as merely a developed form of the money economy, corresponding to a later stage of capitalist production, not a separate system.",
    firstSeen: "2-4",
  },
} satisfies Record<string, Term>;
