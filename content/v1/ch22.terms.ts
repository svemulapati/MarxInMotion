import type { Term } from "@/lib/glossary";

export const TERMS = {
  "nominal-wage": {
    term: "Nominal wage",
    kid: "How many coins a worker is paid, before you ask what the coins can buy.",
    grownUp:
      "The wage expressed in money. Because money is worth relatively less in a more developed country, nominal wages there are higher without proving that real wages are.",
    firstSeen: "1-22",
  },
  "relative-wage": {
    term: "Relative wage",
    kid: "How big the worker's pay is compared with what the boss keeps and what the work makes.",
    grownUp:
      "The price of labour compared with surplus-value and with the value of the product. Marx shows it can be higher in a poorer nation even where the daily wage is lower.",
    firstSeen: "1-22",
  },
} satisfies Record<string, Term>;
