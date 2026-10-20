import type { Term } from "@/lib/glossary";

export const TERMS = {
  "absolute-rent": {
    term: "Absolute rent",
    kid: "Rent a landlord can charge even for the worst field, just because he owns it and won't let it for free.",
    grownUp:
      "Rent paid on the worst land in use, beyond any differential rent. Marx traces it to farm products being worth more than their price of production (farming uses more labour per unit of capital) and to landed property blocking the usual evening-out of profit. It vanishes if farming's composition of capital reaches the social average.",
    firstSeen: "3-45",
  },
  "monopoly-price": {
    term: "Monopoly price",
    kid: "A price set only by how badly buyers want something and how much they can pay, like a rare wine.",
    grownUp:
      "A price determined by buyers' eagerness and ability to pay, independent of both the price of production and the value of the product. A surplus-profit from a monopoly price on land is converted into rent.",
    firstSeen: "3-45",
  },
} satisfies Record<string, Term>;
