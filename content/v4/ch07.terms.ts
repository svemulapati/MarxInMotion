import type { Term } from "@/lib/glossary";

export const TERMS = {
  linguet: {
    term: "Linguet",
    kid: "A French lawyer who said a worker with nothing but his hands is not really free, because he must work to eat.",
    grownUp:
      "Simon-Nicolas-Henri Linguet (1736 to 1794), author of Théorie des lois civiles (1767). Marx quotes his early critique of the 'freedom' of the wage-labourer, while noting that Linguet was no socialist and gave his attack a half-ironic reactionary form.",
    firstSeen: "4-7",
  },
  "wage-slavery": {
    term: "Wage-slavery",
    kid: "A sharp name for having to work for a boss because you own nothing else, even though nobody owns you.",
    grownUp:
      "A polemical term for the dependence of workers who must sell their labour-power to live. Linguet's comparison of the labourer's and the slave's chains is an early form of the idea; critics reject the comparison as overstated.",
    firstSeen: "4-7",
  },
} satisfies Record<string, Term>;
