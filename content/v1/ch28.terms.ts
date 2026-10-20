import type { Term } from "@/lib/glossary";

export const TERMS = {
  "bloody-legislation": {
    term: "Bloody legislation",
    kid: "Cruel old laws that punished people for being poor and having no work.",
    grownUp:
      "Marx's name for the laws against vagabondage from the end of the 15th century (in England from Henry VIII to Elizabeth and beyond), which disciplined the expropriated into wage labour by whipping, branding, enslavement and execution.",
    firstSeen: "1-28",
  },
  vagabond: {
    term: "Vagabond",
    kid: "Someone with no home or job who wanders from place to place.",
    grownUp:
      "In Tudor law, an able-bodied person without work or a master. The expropriated peasantry was largely turned into vagabonds and then treated as voluntary criminals.",
    firstSeen: "1-28",
  },
  "statute-of-labourers": {
    term: "Statute of Labourers",
    kid: "An old English law that set the most a worker could be paid.",
    grownUp:
      "The English law of 1349 (under Edward III) fixing maximum wages, with no minimum, and punishing workers who took more. Marx sees it as the start of state legislation to force wages down.",
    firstSeen: "1-28",
  },
} satisfies Record<string, Term>;
