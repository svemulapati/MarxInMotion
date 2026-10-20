import type { Term } from "@/lib/glossary";

export const TERMS = {
  "joint-stock-company": {
    term: "Joint-stock company",
    kid: "A business owned by many people who each hold a piece of it called a share, and run by a hired manager.",
    grownUp:
      "A company whose capital is raised by selling shares. For Marx it separates ownership from management, turns owners into mere money-capitalists drawing dividends, and so abolishes capital as private property within capitalist production itself.",
    firstSeen: "3-27",
  },
  speculation: {
    term: "Speculation",
    kid: "Buying something only because you hope to sell it later for more.",
    grownUp:
      "Buying and selling for gain on price movements rather than for use or production. Credit, by keeping purchase and sale apart and letting people trade with others' money, gives it room to grow.",
    firstSeen: "3-27",
  },
  "co-operative-factory": {
    term: "Co-operative factory",
    kid: "A workshop owned and run by the people who work in it, with no boss above them.",
    grownUp:
      "A factory owned by its workers. Marx calls co-operatives the first sprouts of a new mode of production inside the old, in which the workers become their own capitalist, though still bound by the market.",
    firstSeen: "3-27",
  },
} satisfies Record<string, Term>;
