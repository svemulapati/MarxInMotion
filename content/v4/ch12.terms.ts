import type { Term } from "@/lib/glossary";

export const TERMS = {
  "rent-tables": {
    term: "Marx's rent tables",
    kid: "Tables of make-believe coal mines that Marx used to test what happens to rent when things change.",
    grownUp:
      "The Tables A to E in Theories of Surplus-Value, Chapter XII, where equal capitals in mines of unequal productivity show how absolute and differential rent combine as demand, prices and the set of mines in use change.",
    firstSeen: "4-12",
  },
  "descending-series": {
    term: "Ascending and descending series",
    kid: "Whether farming or mining moves to better land over time, or to worse land.",
    grownUp:
      "The order in which lands or mines of different quality come into use. Ricardo assumed only the descending series (from better to worse); Marx showed that rent arises in the ascending series too, and in mixed cases.",
    firstSeen: "4-12",
  },
} satisfies Record<string, Term>;
