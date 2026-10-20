import type { Term } from "@/lib/glossary";

export const TERMS = {
  "distribution-relations": {
    term: "Distribution relations",
    kid: "The rules for who gets which part of what everyone made.",
    grownUp:
      "The relations under which newly produced value is shared among the owners of labour-power, capital and land as wages, profit and rent. Marx argues they are the other side of production relations, not natural laws.",
    firstSeen: "3-51",
  },
  "production-relations": {
    term: "Production relations",
    kid: "Who owns the tools and who does the work, and how they deal with each other while making things.",
    grownUp:
      "The social relations people enter into in producing, such as capital and wage-labour. Marx holds that they have a specific, historical and transitory character, like the distribution relations that go with them.",
    firstSeen: "3-51",
  },
} satisfies Record<string, Term>;
