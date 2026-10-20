import type { Term } from "@/lib/glossary";

export const TERMS = {
  "average-rate-of-profit": {
    term: "Average (general) rate of profit",
    kid: "The same slice of profit for every 100 coins of capital, whatever the business.",
    grownUp:
      "The rate formed when competition equalises the different rates of profit of different branches: total surplus-value divided by total social capital. It depends on the organic compositions of the branches and on how much capital each holds.",
    firstSeen: "3-9",
  },
  "price-of-production": {
    term: "Price of production",
    kid: "What a thing sells for once every boss gets the average profit: its costs plus the usual slice.",
    grownUp:
      "Cost-price plus the average profit on the capital advanced (k + kp'). It is the centre around which market prices move in developed capitalism, and it differs from value except in branches of average composition.",
    firstSeen: "3-9",
  },
  "transformation-problem": {
    term: "Transformation problem",
    kid: "A long argument about whether Marx's sums from values to prices really add up.",
    grownUp:
      "The debate, begun by Böhm-Bawerk and Bortkiewicz, over whether values can be consistently turned into prices of production while keeping both of Marx's totals (sum of prices = sum of values, total profit = total surplus-value) once inputs are also priced at prices of production.",
    firstSeen: "3-9",
  },
} satisfies Record<string, Term>;
