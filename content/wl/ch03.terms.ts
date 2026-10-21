import type { Term } from "@/lib/glossary";

export const TERMS = {
  "supply-and-demand": {
    term: "Supply and demand",
    kid: "How much of something is for sale, compared with how much people want to buy.",
    grownUp:
      "The relation between the quantity of a commodity offered and the quantity sought. In Wage-Labour and Capital it explains why market prices rise and fall, but not the level around which they move.",
    firstSeen: "5-3",
  },
  "threefold-competition": {
    term: "Threefold competition",
    kid: "Three tugs of war at the market: sellers against sellers, buyers against buyers, and buyers against sellers.",
    grownUp:
      "Marx's account of how competition sets prices: competition among sellers pushes prices down, competition among buyers pushes them up, and the struggle between the two camps is won by the side less divided among itself.",
    firstSeen: "5-3",
  },
  "cost-of-production": {
    term: "Cost of production",
    kid: "What it takes to make a thing. In the end, the hours of work that went into it.",
    grownUp:
      "In Wage-Labour and Capital, the level around which prices swing: raw materials, wear of tools and direct labour, all of which come down to labour-time. Marx later refined this into value (Capital, Vol. I) and price of production (Vol. III).",
    firstSeen: "5-3",
  },
} satisfies Record<string, Term>;
