import type { Term } from "@/lib/glossary";

export const TERMS = {
  "trinity-formula": {
    term: "Trinity formula",
    kid: "The idea that money makes profit, land makes rent and work makes wages, each all by itself.",
    grownUp:
      "Marx's name for the everyday picture capital, profit (or interest); land, ground-rent; labour, wages, in which three separate sources each seem to produce their own income. He argues that all three revenues are parts of the value created by labour.",
    firstSeen: "3-48",
  },
  "vulgar-economy": {
    term: "Vulgar economy",
    kid: "Economics that just repeats how things look to business people, without asking what is underneath.",
    grownUp:
      "Marx's term for economists who systematise the everyday notions of the agents of capitalist production. He contrasts it with classical political economy (Smith, Ricardo), which tried to find the inner connection behind appearances.",
    firstSeen: "3-48",
  },
  "realm-of-freedom": {
    term: "Realm of necessity and realm of freedom",
    kid: "The work we must do to live, and the free time we can spend on things we love.",
    grownUp:
      "In Chapter 48 Marx says material production always remains a realm of necessity, best run by the associated producers rationally and with the least effort. The realm of freedom, human development as an end in itself, lies beyond it, and the shortening of the working day is its basic prerequisite.",
    firstSeen: "3-48",
  },
} satisfies Record<string, Term>;
