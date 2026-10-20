import type { Term } from "@/lib/glossary";

export const TERMS = {
  "profit-rate-formula": {
    term: "p′ = s′ × v/C",
    kid: "The recipe for the profit rate: how hard workers are squeezed, times how much of the capital goes on wages.",
    grownUp:
      "Marx's equation linking the rate of profit p′ to the rate of surplus-value s′: p′ = s′(v/C), or p′ : s′ = v : C. The rate of profit depends on the rate of surplus-value and on the value-composition of capital.",
    firstSeen: "3-3",
  },
} satisfies Record<string, Term>;
