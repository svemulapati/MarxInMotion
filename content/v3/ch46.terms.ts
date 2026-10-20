import type { Term } from "@/lib/glossary";

export const TERMS = {
  "building-site-rent": {
    term: "Building-site rent",
    kid: "Rent paid just for a spot of ground to build on, which goes up as a town gets busier.",
    grownUp:
      "Rent on land used as space for buildings rather than for its soil. Marx stresses the power of location, the complete passiveness of the owner, and how growing population and new fixed capital (railways, docks, factories) keep raising it.",
    firstSeen: "3-46",
  },
  "mining-rent": {
    term: "Mining rent",
    kid: "Rent paid to the owner of the ground for the right to dig out coal or metal.",
    grownUp:
      "Rent on mines, determined in the same way as agricultural rent: richer mines yield a surplus-profit that the landowner takes as rent, while the poorest yield none.",
    firstSeen: "3-46",
  },
  "price-of-land": {
    term: "Price of land",
    kid: "What a field sells for: its yearly rent turned into one big lump of money.",
    grownUp:
      "Capitalised rent: the sum which, at the current rate of interest, would yield an income equal to the rent. It can rise because rent rises or because interest falls. The purchase transfers a title to rent; it does not create it.",
    firstSeen: "3-46",
  },
} satisfies Record<string, Term>;
