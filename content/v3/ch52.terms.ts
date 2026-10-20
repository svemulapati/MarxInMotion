import type { Term } from "@/lib/glossary";

export const TERMS = {
  classes: {
    term: "Classes",
    kid: "Big groups of people sorted by what they own: only their work, money and workshops, or land.",
    grownUp:
      "In Chapter 52 Marx names wage-labourers, capitalists and landowners, living on wages, profit and ground-rent, as the three great classes of modern society. He then asks what makes a class, shows that sameness of income cannot be the whole answer, and the manuscript breaks off.",
    firstSeen: "3-52",
  },
  "intermediate-strata": {
    term: "Intermediate strata",
    kid: "In-between people who don't fit neatly into one big group.",
    grownUp:
      "Marx's phrase for middle and intermediate groups which, even in England, blur the lines between the three great classes. He calls this immaterial for his analysis, since the tendency runs towards wage-labour and concentrated capital.",
    firstSeen: "3-52",
  },
} satisfies Record<string, Term>;
