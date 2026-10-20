import type { Term } from "@/lib/glossary";

export const TERMS = {
  "barton-machinery": {
    term: "Barton's machinery thesis",
    kid: "Money spent on machines doesn't hire anyone, so a richer factory doesn't always mean more jobs.",
    grownUp:
      "John Barton's argument (1817) that the demand for labour depends on circulating, not fixed, capital, so accumulation that goes mainly into machinery need not raise employment. Ricardo adopted it in his chapter “On Machinery”; Marx praised it but recast it as variable versus constant capital.",
    firstSeen: "4-18",
  },
} satisfies Record<string, Term>;
