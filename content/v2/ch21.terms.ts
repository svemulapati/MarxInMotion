import type { Term } from "@/lib/glossary";

export const TERMS = {
  "potential-money-capital": {
    term: "Potential money-capital",
    kid: "Money saved up in a chest, waiting until there is enough to grow the business.",
    grownUp:
      "Surplus-value hoarded in money form until it is large enough to function as additional capital. While it waits it is not yet capital at work, which Marx calls latent or potential money-capital.",
    firstSeen: "2-21",
  },
  "balance-condition": {
    term: "Balance condition",
    kid: "The rule that what the machine-makers want to buy must match what the bread-makers want to sell, or goods pile up.",
    grownUp:
      "The proportion between departments needed for reproduction to proceed: I(v + s) = IIc for simple reproduction, I(v + s) greater than IIc for accumulation. Marx stresses that nothing in capitalism guarantees it.",
    firstSeen: "2-21",
  },
} satisfies Record<string, Term>;
