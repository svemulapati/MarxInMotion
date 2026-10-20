import type { Term } from "@/lib/glossary";

export const TERMS = {
  "ricardo-surplus-value": {
    term: "Ricardo's theory of surplus-value",
    kid: "Ricardo's idea that profit is what is left after wages, which Marx said came close to the truth but called the extra by the wrong name.",
    grownUp:
      "Marx's name for Ricardo's account of profit, which in fact analyses relative surplus-value but never treats surplus-value apart from profit and rent, confuses labour with labour-power, and takes the working day as fixed.",
    firstSeen: "4-15",
  },
  "inverse-wages-profit": {
    term: "Wages and profit move inversely",
    kid: "If a fixed pie is shared by two, one slice can only grow when the other shrinks.",
    grownUp:
      "Ricardo's law that, with the value of the product given, wages and profit can only rise or fall in opposite directions. Marx accepts it for surplus-value under a fixed working day, but not when the day is lengthened.",
    firstSeen: "4-15",
  },
} satisfies Record<string, Term>;
