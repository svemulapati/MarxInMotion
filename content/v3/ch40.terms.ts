import type { Term } from "@/lib/glossary";

export const TERMS = {
  "differential-rent-ii": {
    term: "Differential rent II",
    kid: "Extra rent that comes from pouring more money and work into the same field, so it grows more.",
    grownUp:
      "Differential rent arising from successive investments of capital of differing productivity on the same land. Its basis and starting point is differential rent I; while a lease runs, the surplus-profit goes to the tenant.",
    firstSeen: "3-40",
  },
  "intensive-cultivation": {
    term: "Intensive cultivation",
    kid: "Growing more on the same land by putting more money and work into it.",
    grownUp:
      "In Marx's economic sense, the concentration of capital on the same plot rather than its distribution over several adjoining pieces of land.",
    firstSeen: "3-40",
  },
} satisfies Record<string, Term>;
