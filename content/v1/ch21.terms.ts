import type { Term } from "@/lib/glossary";

export const TERMS = {
  "piece-wages": {
    term: "Piece-wages",
    kid: "Being paid for each thing you make, like 1½ pennies for every spool.",
    grownUp:
      "A converted form of time-wages: the worker's time is measured by the quantity of product. Marx calls it the form of wages most in harmony with capitalist production, because it controls quality and intensity by itself.",
    firstSeen: "1-21",
  },
  "sweating-system": {
    term: "Sweating system",
    kid: "When a middleman hands out work, pays the worker less than he gets, and keeps the difference.",
    grownUp:
      "The sub-letting of labour under piece-wages: middlemen between capitalist and worker whose gain comes entirely from the difference between the price the capitalist pays and the part that reaches the worker.",
    firstSeen: "1-21",
  },
} satisfies Record<string, Term>;
