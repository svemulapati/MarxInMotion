import type { Term } from "@/lib/glossary";

export const TERMS = {
  "merchants-capital": {
    term: "Merchant's capital",
    kid: "Money used only for buying and selling, like Tom's shop, never for making things.",
    grownUp:
      "Capital that functions only in the sphere of circulation, M–C–M′. Marx splits it into commercial capital (dealing in commodities) and money-dealing capital (dealing in money). It produces neither value nor surplus-value directly.",
    firstSeen: "3-16",
  },
  "commercial-capital": {
    term: "Commercial capital",
    kid: "A shopkeeper's or wholesaler's money, tied up in buying goods to sell them on.",
    grownUp:
      "Commodity-capital whose conversion into money has become the separate business of a special group of capitalists through the division of labour. It shortens circulation time for industrial capital but creates no value itself.",
    firstSeen: "3-16",
  },
} satisfies Record<string, Term>;
