import type { Term } from "@/lib/glossary";

export const TERMS = {
  "profit-of-enterprise": {
    term: "Profit of enterprise",
    kid: "The part of the profit a boss keeps after paying interest, which he thinks of as his reward for running things.",
    grownUp:
      "The portion of gross profit left to the functioning capitalist after interest. Once lending is general it appears as the fruit of capital in use, as opposed to interest, the fruit of capital as property.",
    firstSeen: "3-23",
  },
  "wages-of-superintendence": {
    term: "Wages of superintendence",
    kid: "Pay for watching over and organising other people's work.",
    grownUp:
      "The form in which profit of enterprise appears to the capitalist: as a higher wage for the labour of management. Marx separates productive co-ordination from supervision arising out of the antagonism between capital and labour.",
    firstSeen: "3-23",
  },
} satisfies Record<string, Term>;
