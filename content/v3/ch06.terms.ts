import type { Term } from "@/lib/glossary";

export const TERMS = {
  "raw-material-prices": {
    term: "Raw material prices",
    kid: "When cotton or wool gets dearer, the boss's profit rate goes down, even if nothing else changes.",
    grownUp:
      "Other things equal, the rate of profit moves inversely to the price of raw materials: a rise by d turns s/(c + v) into s/((c + d) + v). Because plant and animal materials cannot be multiplied as fast as machinery, their prices swing violently.",
    firstSeen: "3-6",
  },
  "cotton-famine": {
    term: "Cotton famine",
    kid: "The years 1861 to 1865 when almost no cotton reached England's mills, and half the cotton workers lost their jobs.",
    grownUp:
      "The shortage of raw cotton in Lancashire during the American Civil War, which Marx uses as his main example of an interruption of reproduction by the scarcity and dearness of raw material.",
    firstSeen: "3-6",
  },
} satisfies Record<string, Term>;
