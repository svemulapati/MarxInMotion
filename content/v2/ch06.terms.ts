import type { Term } from "@/lib/glossary";

export const TERMS = {
  "costs-of-circulation": {
    term: "Costs of circulation",
    kid: "What it costs to sell, buy, count, store and move things, on top of making them.",
    grownUp:
      "Expenses arising in the sphere of circulation. Those that come purely from changing commodities into money and back (buying and selling time, bookkeeping, the money material) add no value; costs of storage partly, and costs of transport fully, belong to production carried on into circulation.",
    firstSeen: "2-6",
  },
  "faux-frais": {
    term: "Faux frais",
    kid: "French for “false costs”: work that has to be done but makes nothing new, so it is paid for out of the boss's extra.",
    grownUp:
      "Necessary but unproductive expenses of capitalist production, such as the costs of buying, selling and bookkeeping. They must be replaced out of the surplus-product and are a deduction from surplus-value.",
    firstSeen: "2-6",
  },
  "costs-of-storage": {
    term: "Costs of storage",
    kid: "What it costs to keep goods safe while they wait to be sold.",
    grownUp:
      "Costs of keeping a commodity-supply. For a normal supply, which circulation needs, they enter to a certain extent into value; when goods pile up because they cannot be sold, the costs are losses, not value.",
    firstSeen: "2-6",
  },
  "transport-industry": {
    term: "Transport industry",
    kid: "Carrying things to where people need them. It is real work, and it adds value.",
    grownUp:
      "For Marx, an independent branch of production that appears as a continuation of production within circulation. It adds value by passing on the wear of the means of transport and by new labour; the value added rises with distance and falls as transport becomes more productive.",
    firstSeen: "2-6",
  },
} satisfies Record<string, Term>;
