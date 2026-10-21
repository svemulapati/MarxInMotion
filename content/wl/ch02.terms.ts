import type { Term } from "@/lib/glossary";

export const TERMS = {
  "wage-labour": {
    term: "Wage-labour",
    kid: "Working for someone else in return for money, because you own nothing else to live on.",
    grownUp:
      "Labour performed by workers who sell their labour-power to an employer for a wage. Marx contrasts it with slavery (the person is sold) and serfdom (part of the produce is handed over), and sees it as the defining relation of capitalism.",
    firstSeen: "5-2",
  },
  "life-activity": {
    term: "Life-activity",
    kid: "Your own doing and making, which for a wage-worker becomes just a way to get paid.",
    grownUp:
      "Marx's phrase in Wage-Labour and Capital for working as the active expression of a person's life. Because the worker sells it, work becomes only a means to survive: life, Marx says, seems to begin where the work stops.",
    firstSeen: "5-2",
  },
} satisfies Record<string, Term>;
