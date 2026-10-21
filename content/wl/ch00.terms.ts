import type { Term } from "@/lib/glossary";

export const TERMS = {
  "german-workers-society": {
    term: "German Workers' Society (Brussels)",
    kid: "A club in Brussels for German workers living far from home, where Marx gave talks.",
    grownUp:
      "An educational society for German working-class refugees, founded in Brussels in August 1847 on Marx's and Engels' initiative. Marx's lectures there in December 1847 became Wage-Labour and Capital.",
    firstSeen: "5-0",
  },
  "neue-rheinische-zeitung": {
    term: "Neue Rheinische Zeitung",
    kid: "The daily newspaper Marx ran in Cologne during the revolution of 1848 and 1849.",
    grownUp:
      "A daily paper published in Cologne from June 1, 1848 to May 19, 1849, with Marx as editor-in-chief and Engels as an editor. It printed Wage-Labour and Capital in April 1849 and closed when Prussia expelled Marx; its last issue was printed in red.",
    firstSeen: "5-0",
  },
  "labour-into-labour-power": {
    term: "Engels' 1891 edit",
    kid: "When Engels changed one word in Marx's old text, from \"labour\" to \"labour-power\", to match Marx's later ideas.",
    grownUp:
      "In his 1891 edition of Wage-Labour and Capital, Engels replaced the claim that workers sell their labour with the claim that they sell their labour-power, and said openly in his introduction that the text was now \"not as Marx wrote it in 1849\".",
    firstSeen: "5-0",
  },
} satisfies Record<string, Term>;
