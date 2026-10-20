import type { Term } from "@/lib/glossary";

export const TERMS = {
  accumulation: {
    term: "Accumulation of capital",
    kid: "Putting the extra money back into the business, so it makes even more next time.",
    grownUp:
      "The employment of surplus-value as capital, or its reconversion into capital. Part of the surplus is laid out on extra means of production and extra labour-power, so capital grows from its own offspring.",
    firstSeen: "1-24",
  },
  "expanded-reproduction": {
    term: "Reproduction on an expanded scale",
    kid: "When a workshop doesn't just start again each year, but starts again bigger.",
    grownUp:
      "Reproduction on a progressively increasing scale: because part of the surplus-value is added to capital, the circle of simple reproduction turns into a spiral (Marx borrows the image from Sismondi).",
    firstSeen: "1-24",
  },
  "abstinence-theory": {
    term: "Abstinence theory",
    kid: "The idea that profit is a reward for the boss not spending all his money on himself.",
    grownUp:
      "Nassau Senior's doctrine from the 1830s, which put the word “abstinence” in place of capital and treated profit as payment for the capitalist's self-denial. Marx called it a flattering phrase in place of an economic category.",
    firstSeen: "1-24",
  },
  "labour-fund": {
    term: "Labour fund",
    kid: "The old idea that there is a fixed pot of money for wages, and it can never get bigger.",
    grownUp:
      "The classical notion (Bentham, Malthus, James Mill, McCulloch) that the part of social wealth available for wages is a fixed amount. Marx argues capital is elastic, and that the dogma was used to say workers' share could not be raised.",
    firstSeen: "1-24",
  },
} satisfies Record<string, Term>;
