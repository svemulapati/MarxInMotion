import type { Term } from "@/lib/glossary";

export const TERMS = {
  "unproductive-consumers": {
    term: "Unproductive consumers",
    kid: "People who buy lots of things but don't make or sell anything, like a rich landlord.",
    grownUp:
      "Malthus's name for a class of buyers who are not sellers (landlords, officials, clergy and their servants), whose spending he thought necessary to absorb the surplus and prevent gluts. Marx objected that their means of purchase come from rent and taxes, a share of surplus-value taken from others.",
    firstSeen: "4-19",
  },
  "nominal-surcharge": {
    term: "Nominal surcharge",
    kid: "Thinking profit is just an extra bit stuck onto the price when you sell.",
    grownUp:
      "Marx's term for Malthus's view of profit as an addition to the cost of production made in the act of sale. Marx argued that such surcharges cancel out between capitalists and cannot explain surplus-value, which arises in production.",
    firstSeen: "4-19",
  },
} satisfies Record<string, Term>;
