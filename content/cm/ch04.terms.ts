import type { Term } from "@/lib/glossary";

export const TERMS = {
  chartists: {
    term: "Chartists",
    kid: "English workers in the 1830s and 1840s who campaigned for working men to get the vote.",
    grownUp:
      "The British working-class movement behind the People's Charter (1838), which demanded votes for all men and other democratic reforms. The Manifesto names them as the workers' party communists supported in England.",
    firstSeen: "6-4",
  },
  "workers-of-all-countries-unite": {
    term: "Working Men of All Countries, Unite!",
    kid: "The Manifesto's last line, asking workers everywhere to stand together.",
    grownUp:
      "The closing words of the 1888 English translation approved by Engels. The German original is \"Proletarier aller Länder, vereinigt euch!\" (more literally, \"Proletarians of all countries, unite!\"); \"Workers of the world, unite!\" is a later popularisation.",
    firstSeen: "6-4",
  },
} satisfies Record<string, Term>;
