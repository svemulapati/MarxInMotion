import type { Term } from "@/lib/glossary";

export const TERMS = {
  "says-law": {
    term: "Say's law",
    kid: "The idea that everyone who sells something is also buying something, so things can never pile up unsold.",
    grownUp:
      "The doctrine, from Jean-Baptiste Say and James Mill and adopted by Ricardo, that products exchange for products, so supply creates its own demand and a general glut is impossible. Marx rejected it because money separates sale from purchase; Keynes later rejected it too.",
    firstSeen: "4-17",
  },
  "general-glut": {
    term: "General glut",
    kid: "Too much of almost everything at once: full shops and warehouses that nobody can buy from.",
    grownUp:
      "Over-production of commodities across the economy, not just in one trade. Say and Ricardo held it impossible; Marx argued it is the form crises take, since over-production concerns demand backed by ability to pay, not people's needs.",
    firstSeen: "4-17",
  },
} satisfies Record<string, Term>;
