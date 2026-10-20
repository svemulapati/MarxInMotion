import type { Term } from "@/lib/glossary";

export const TERMS = {
  "absolute-surplus-value": {
    term: "Absolute surplus-value",
    kid: "Extra work squeezed out by making the working day longer.",
    grownUp: "Surplus-value produced by prolonging the working day beyond the necessary labour time.",
    firstSeen: "1-12",
  },
  "relative-surplus-value": {
    term: "Relative surplus-value",
    kid: "Extra work squeezed out by making the worker's needs cheaper, so less of the day goes to earning his wage.",
    grownUp:
      "Surplus-value that comes from shortening the necessary labour time, when higher productivity cheapens the means of subsistence. A day of fixed length then holds more surplus labour.",
    firstSeen: "1-12",
  },
  "extra-surplus-value": {
    term: "Extra surplus-value",
    kid: "The bonus a boss gets for a while when his new trick makes things cheaper than everyone else's.",
    grownUp:
      "The surplus-value a capitalist gains when his method pushes the individual value of his product below its social value. It vanishes once the new method becomes general.",
    firstSeen: "1-12",
  },
} satisfies Record<string, Term>;
