import type { Term } from "@/lib/glossary";

export const TERMS = {
  "department-i": {
    term: "Department I",
    kid: "All the workshops that make things used for making other things: machines, iron, tools, cotton.",
    grownUp:
      "Marx's name for the branches of social production that make means of production, whose products enter productive consumption.",
    firstSeen: "2-20",
  },
  "department-ii": {
    term: "Department II",
    kid: "All the workshops that make things people use up: bread, coats, candles.",
    grownUp:
      "The branches of social production that make articles of consumption, which enter the individual consumption of workers and capitalists. Marx splits it into necessities and luxuries.",
    firstSeen: "2-20",
  },
  "reproduction-scheme": {
    term: "Reproduction scheme",
    kid: "Marx's number puzzle that shows how a whole town's year of work can be swapped so next year can start again.",
    grownUp:
      "A table of the annual social product split into Departments I and II, each as c + v + s, used to show the exchanges that let total social capital be replaced. In simple reproduction it requires I(v + s) = IIc.",
    firstSeen: "2-20",
  },
  "luxury-goods": {
    term: "Articles of luxury",
    kid: "Fancy things that only the owners can afford, like silk hats.",
    grownUp:
      "The part of Department II consumed only by the capitalist class and paid for out of surplus-value. Jobs in luxury trades depend on how capitalists spend their revenue.",
    firstSeen: "2-20",
  },
  "money-reflux": {
    term: "Reflux of money",
    kid: "When coins a boss spends travel around town and come back to him.",
    grownUp:
      "Marx's law that money advanced by a capitalist to circulation returns to its point of departure when reproduction proceeds normally, as when wages paid by Department I come back via Department II's purchases of means of production.",
    firstSeen: "2-20",
  },
} satisfies Record<string, Term>;
