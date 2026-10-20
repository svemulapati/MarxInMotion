import type { Term } from "@/lib/glossary";

export const TERMS = {
  "labour-process": {
    term: "Labour process",
    kid: "Making something useful: a person, some material and a tool, working together to a plan.",
    grownUp:
      "Purposeful human activity that transforms an object of labour with instruments of labour into a use-value. It is common to every form of society.",
    firstSeen: "1-7",
  },
  "means-of-production": {
    term: "Means of production",
    kid: "The materials and tools you need to make something, like cotton and a spindle.",
    grownUp:
      "The objects of labour (raw materials) and instruments of labour (tools, machines, buildings) used in production. Under capitalism they are owned by the capitalist.",
    firstSeen: "1-7",
  },
  valorization: {
    term: "Valorization",
    kid: "Making value grow: putting 27 coins into a workshop and getting 30 coins out.",
    grownUp:
      "The production process seen as the creation of surplus-value: labour-power working beyond the point where it has replaced its own value. Moore and Aveling translate it as \"the process of producing surplus-value\".",
    firstSeen: "1-7",
  },
} satisfies Record<string, Term>;
