import type { Term } from "@/lib/glossary";

export const TERMS = {
  "circulation-time": {
    term: "Circulation time",
    kid: "The time capital spends being sold and bought, when nothing new is being made.",
    grownUp:
      "The time capital spends in the sphere of circulation, as commodity-capital being sold (C′–M′) and as money-capital buying means of production and labour-power (M–C). It creates no value or surplus-value, so it limits the time capital can work in production.",
    firstSeen: "2-5",
  },
  "perishable-commodity": {
    term: "Perishable commodity",
    kid: "Something that spoils if it is not sold and used quickly, like bread.",
    grownUp:
      "A commodity whose use-value decays, setting an absolute limit to its circulation time and narrowing the market it can reach, unless transport improves or production is concentrated near a dense population.",
    firstSeen: "2-5",
  },
} satisfies Record<string, Term>;
