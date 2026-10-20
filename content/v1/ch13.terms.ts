import type { Term } from "@/lib/glossary";

export const TERMS = {
  "co-operation": {
    term: "Co-operation",
    kid: "Many people working side by side on one job, under one roof.",
    grownUp:
      "Many workers working together to a plan, in the same or connected processes. It creates a new productive power, the collective power of the mass, and Marx calls it the fundamental form of capitalist production.",
    firstSeen: "1-13",
  },
  "collective-worker": {
    term: "Collective worker",
    kid: "All the workers together, acting like one giant worker.",
    grownUp:
      "The combined labourer formed by co-operation (and later by the division of labour). Its extra productive power is not paid for, so it appears as a power belonging to capital.",
    firstSeen: "1-13",
  },
} satisfies Record<string, Term>;
