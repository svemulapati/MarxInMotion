import type { Term } from "@/lib/glossary";

export const TERMS = {
  "rate-of-profit": {
    term: "Rate of profit",
    kid: "How big the extra is compared with everything the boss spent.",
    grownUp:
      "Surplus-value measured against the total capital advanced: p′ = s/C = s/(c + v). It is always smaller than the rate of surplus-value s/v, because the total capital is bigger than the variable capital alone.",
    firstSeen: "3-2",
  },
} satisfies Record<string, Term>;
