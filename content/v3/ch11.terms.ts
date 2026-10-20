import type { Term } from "@/lib/glossary";

export const TERMS = {
  "higher-composition": {
    term: "Capital of higher composition",
    kid: "A business that uses more machines, and fewer workers, than the average business.",
    grownUp:
      "A capital whose share of constant capital is above the social average (for an average of 80c + 20v, say 90c + 10v). Its price of production lies above the value of its product.",
    firstSeen: "3-11",
  },
  "lower-composition": {
    term: "Capital of lower composition",
    kid: "A business that uses more workers, and fewer machines, than the average business.",
    grownUp:
      "A capital whose share of variable capital is above the social average (say 70c + 30v against 80c + 20v). Its price of production lies below the value of its product.",
    firstSeen: "3-11",
  },
} satisfies Record<string, Term>;
