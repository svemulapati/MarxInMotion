import type { Term } from "@/lib/glossary";

export const TERMS = {
  manufacture: {
    term: "Manufacture",
    kid: "A big workshop where one job is split between many hand workers, before machines took over.",
    grownUp:
      "The form of capitalist production based on handicraft labour divided among detail labourers in one workshop. Marx dates its period from the middle of the 16th century to the last third of the 18th.",
    firstSeen: "1-14",
  },
  "detail-labourer": {
    term: "Detail labourer",
    kid: "A worker who does one small step of a job, over and over.",
    grownUp:
      "A worker confined for life to one partial operation, whose skill becomes one-sided. Manufacture also creates a class of unskilled labourers, for whom the cost of apprenticeship vanishes.",
    firstSeen: "1-14",
  },
  "division-of-labour": {
    term: "Division of labour",
    kid: "Splitting one big job into many small jobs done by different people.",
    grownUp:
      "Marx separates the social division of labour, between independent producers linked only by the market, from the division inside the workshop, planned under one capitalist's authority: \"anarchy\" outside, \"despotism\" inside.",
    firstSeen: "1-14",
  },
} satisfies Record<string, Term>;
