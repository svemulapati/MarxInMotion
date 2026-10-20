import type { Term } from "@/lib/glossary";

export const TERMS = {
  "fixed-capital": {
    term: "Fixed capital",
    kid: "Things a boss buys that last for years, like machines and buildings, and give away their value slowly.",
    grownUp:
      "The part of productive capital (instruments of labour) whose value is transferred to the product only gradually, as it wears out, so that part of it stays fixed in the instrument until it must be replaced.",
    firstSeen: "2-8",
  },
  "circulating-capital": {
    term: "Circulating capital",
    kid: "Things a boss buys that get used up all at once, like cotton and wages, and must be bought again each time.",
    grownUp:
      "The part of productive capital (raw and auxiliary materials and the capital laid out on labour-power) whose whole value enters the product and must be renewed each time it turns over.",
    firstSeen: "2-8",
  },
  "wear-and-tear": {
    term: "Wear and tear",
    kid: "The little bit of a machine that gets used up each day, and the value that goes with it.",
    grownUp:
      "The part of the value of fixed capital transferred to the product in proportion to its average loss of use-value through use and the action of the elements.",
    firstSeen: "2-8",
  },
  "reserve-fund": {
    term: "Reserve fund",
    kid: "Money a boss puts aside, bit by bit, to buy a new machine when the old one wears out.",
    grownUp:
      "The money into which the wear and tear of fixed capital is converted as goods are sold, accumulating until the fixed capital must be replaced (also called a sinking fund).",
    firstSeen: "2-8",
  },
  "moral-depreciation": {
    term: "Moral depreciation",
    kid: "When a machine loses value, not because it is worn out, but because newer, cheaper or better machines appear.",
    grownUp:
      "Loss of value of fixed capital through technical progress: the same machine can be reproduced more cheaply, or better machines compete with it, before it is physically worn out.",
    firstSeen: "2-8",
  },
} satisfies Record<string, Term>;
