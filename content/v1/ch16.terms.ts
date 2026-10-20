import type { Term } from "@/lib/glossary";

export const TERMS = {
  "productive-labour": {
    term: "Productive labour",
    kid: "In Marx's special sense: work that makes extra money for a boss, not just work that is useful.",
    grownUp:
      "Under capitalism, labour that produces surplus-value for capital. A schoolmaster employed in a 'teaching factory' for profit is productive in this sense; the same teacher paid from public funds is not. Marx calls being productive in this sense a misfortune, not luck.",
    firstSeen: "1-16",
  },
  "formal-subsumption": {
    term: "Formal subsumption",
    kid: "Working for a boss, but still in the same old way you always worked.",
    grownUp:
      "Labour brought under capital's command without the labour process itself being changed. It is enough for producing absolute surplus-value. (Moore and Aveling: \"formal subjection\".)",
    firstSeen: "1-16",
  },
  "real-subsumption": {
    term: "Real subsumption",
    kid: "When the boss changes how the work itself is done, with factories and machines.",
    grownUp:
      "Capital's transformation of the labour process itself, through co-operation, division of labour and machinery. It goes together with relative surplus-value. (Moore and Aveling: \"real subjection\".)",
    firstSeen: "1-16",
  },
} satisfies Record<string, Term>;
