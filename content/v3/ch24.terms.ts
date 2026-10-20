import type { Term } from "@/lib/glossary";

export const TERMS = {
  "m-m-prime": {
    term: "M–M′ (money making money)",
    kid: "Money that seems to turn into more money all by itself, with nothing made in between.",
    grownUp:
      "The form of interest-bearing capital, where the circuit M–C–M′ shrinks to its two ends. Marx calls it the most externalised, fetish-like form of capital: an “automatic fetish”.",
    firstSeen: "3-24",
  },
  "compound-interest": {
    term: "Compound interest",
    kid: "When the interest you earn starts earning interest too, so the pile grows faster and faster.",
    grownUp:
      "Interest added to the principal so that it bears interest in turn. Marx uses Dr. Price's compound-interest fantasy to show the illusion of capital growing by itself, ignoring the limits set by surplus labour.",
    firstSeen: "3-24",
  },
} satisfies Record<string, Term>;
