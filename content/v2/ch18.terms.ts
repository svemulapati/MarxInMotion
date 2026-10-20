import type { Term } from "@/lib/glossary";

export const TERMS = {
  "social-capital": {
    term: "Social capital",
    kid: "All the workshops of a whole country, counted together as one big moving circle.",
    grownUp:
      "The aggregate capital of a society. Every individual capital is a fraction of it; their circuits intertwine, presuppose and necessitate one another, and together form its movement.",
    firstSeen: "2-18",
  },
  revenue: {
    term: "Revenue",
    kid: "Money spent on things to live on, like Sam's wage spent on bread or the boss's profit spent on dinner.",
    grownUp:
      "Income spent on individual consumption: wages spent by workers and surplus-value spent by capitalists, as opposed to money advanced again as capital.",
    firstSeen: "2-18",
  },
  "replacement-in-kind": {
    term: "Replacement in value and in kind",
    kid: "Getting back not just the right number of coins but the right things: cotton for the mill, bread for Sam.",
    grownUp:
      "The two conditions of social reproduction: the year's product must be sold so its value returns (in value), and it must exist in the material forms needed to restart production and feed consumption (in kind).",
    firstSeen: "2-18",
  },
} satisfies Record<string, Term>;
