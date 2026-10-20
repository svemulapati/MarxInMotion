import type { Term } from "@/lib/glossary";

export const TERMS = {
  "simple-reproduction": {
    term: "Simple reproduction",
    kid: "When the boss spends all the extra on himself, so the workshop starts again each year at the same size.",
    grownUp:
      "Production repeated on the same scale because the capitalist consumes the whole surplus-value as revenue. Marx shows that repetition alone turns every capital, in value, into capitalised surplus-value and reproduces the capital relation itself.",
    firstSeen: "1-23",
  },
  "productive-consumption": {
    term: "Productive consumption",
    kid: "Using things up to make something new, like Sam using up cotton to make yarn.",
    grownUp:
      "The worker's consumption of means of production during work, which is at the same time the capitalist's consumption of the labour-power he bought.",
    firstSeen: "1-23",
  },
  "individual-consumption": {
    term: "Individual consumption",
    kid: "Using things up to live, like Sam eating bread and paying rent.",
    grownUp:
      "The worker's spending of his wage on means of subsistence. It keeps him alive and, from the standpoint of the whole society, reproduces labour-power for capital.",
    firstSeen: "1-23",
  },
} satisfies Record<string, Term>;
