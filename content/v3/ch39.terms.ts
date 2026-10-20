import type { Term } from "@/lib/glossary";

export const TERMS = {
  "differential-rent-i": {
    term: "Differential rent I",
    kid: "Extra rent from land that grows more, or lies closer to market, than the poorest land still farmed.",
    grownUp:
      "Differential rent arising from the unequal results of equal capitals invested side by side on plots of equal size, because of differences in fertility and location. It equals the surplus-profit over the price of production on the worst soil.",
    firstSeen: "3-39",
  },
  "worst-soil": {
    term: "Worst soil",
    kid: "The poorest land that people still need to farm. Its costs set the price of wheat for everyone.",
    grownUp:
      "The least productive land that must be cultivated to meet demand. Its price of production regulates the market price of the produce, so it pays no differential rent (Marx's soil A).",
    firstSeen: "3-39",
  },
} satisfies Record<string, Term>;
