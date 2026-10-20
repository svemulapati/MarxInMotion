import type { Term } from "@/lib/glossary";

export const TERMS = {
  "gross-product": {
    term: "Gross product",
    kid: "Everything a town makes in a year, including the part needed to replace what got used up.",
    grownUp:
      "The total reproduced product of the year. Its value equals the constant capital consumed plus the variable capital plus the surplus-value (c + v + s).",
    firstSeen: "3-49",
  },
  "gross-income": {
    term: "Gross income and net income",
    kid: "Gross income is everything people can live on (wages, profit, rent). Net income is only the boss's and landlord's part.",
    grownUp:
      "Marx's distinction in Chapter 49: gross income is what is left of the product after replacing constant capital, that is wages + profit + rent (v + s). Net income is the surplus-value alone, shared between capitalist and landlord.",
    firstSeen: "3-49",
  },
} satisfies Record<string, Term>;
