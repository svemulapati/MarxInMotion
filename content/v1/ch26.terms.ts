import type { Term } from "@/lib/glossary";

export const TERMS = {
  "primitive-accumulation": {
    term: "Primitive accumulation",
    kid: "How, long ago, a few people came to own the land and tools while most people were left with nothing.",
    grownUp:
      "The historical process that separated producers from their means of production, creating at once capitalists and property-less wage-workers. It is the starting point of capitalist accumulation, not its result.",
    firstSeen: "1-26",
  },
  serfdom: {
    term: "Serfdom",
    kid: "When farm workers belonged to a lord's land and could not just leave.",
    grownUp:
      "The feudal condition in which the producer was tied to the soil and owed labour or dues to a lord. Its end freed workers to sell their labour-power, but in England it had largely disappeared by the late 14th century.",
    firstSeen: "1-26",
  },
} satisfies Record<string, Term>;
