import type { Term } from "@/lib/glossary";

export const TERMS = {
  usury: {
    term: "Usury",
    kid: "Lending money and charging so much extra that the borrower can hardly ever pay it back.",
    grownUp:
      "Interest-bearing capital in its pre-capitalist form (usurer's capital), lent mainly to spendthrift landowners and to small producers. Marx says it impoverishes production without changing it, and that modern credit developed as a reaction against it.",
    firstSeen: "3-36",
  },
} satisfies Record<string, Term>;
