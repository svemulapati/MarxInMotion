import type { Term } from "@/lib/glossary";

export const TERMS = {
  "unpaid-labour": {
    term: "Unpaid labour",
    kid: "The hours of work that make value for the boss without costing him anything.",
    grownUp:
      "Marx's popular name for surplus-labour: the part of the working day after the worker has reproduced the value of their labour-power. Formula III: surplus-labour ÷ necessary labour = unpaid labour ÷ paid labour.",
    firstSeen: "1-18",
  },
} satisfies Record<string, Term>;
