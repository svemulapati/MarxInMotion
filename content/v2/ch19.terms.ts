import type { Term } from "@/lib/glossary";

export const TERMS = {
  "tableau-economique": {
    term: "Tableau Économique",
    kid: "A famous old chart that showed money flowing round between farmers, landowners and artisans, so the country could start again each year.",
    grownUp:
      "François Quesnay's picture (1758) of how the annual product is distributed by circulation so that simple reproduction can go on. Marx calls the physiocrats' system the first systematic conception of capitalist production.",
    firstSeen: "2-19",
  },
  "smiths-dogma": {
    term: "Smith's dogma",
    kid: "Adam Smith's rule that every price is only wages, profit and rent, which forgets the materials and machines used up.",
    grownUp:
      "Smith's doctrine that the price of every commodity, and of the whole annual product, resolves into wages, profit and rent (v + s), leaving out the value of the constant capital consumed.",
    firstSeen: "2-19",
  },
  "net-revenue": {
    term: "Gross and net revenue",
    kid: "All of Ned's harvest (gross), and what is left after keeping back seed and repairs (net).",
    grownUp:
      "Smith's distinction between the whole annual produce and what remains after maintaining fixed and circulating capital. Marx shows it smuggles capital back into a theory that had resolved all value into revenue.",
    firstSeen: "2-19",
  },
} satisfies Record<string, Term>;
