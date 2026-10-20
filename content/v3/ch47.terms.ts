import type { Term } from "@/lib/glossary";

export const TERMS = {
  "labour-rent": {
    term: "Labour rent",
    kid: "Paying for land with days of work on the lord's fields.",
    grownUp:
      "The simplest form of ground-rent: the direct producer works part of the week on his own holding with his own tools and part on the lord's estate without pay. Rent and surplus-labour are identical and visible, and are extracted by non-economic compulsion.",
    firstSeen: "3-47",
  },
  "rent-in-kind": {
    term: "Rent in kind",
    kid: "Paying for land by handing over part of the harvest, like sacks of grain.",
    grownUp:
      "Ground-rent paid as a surplus product rather than as labour. The producer works his own land and is driven to the surplus by legal obligation rather than direct supervision; it is still the whole of his surplus-labour.",
    firstSeen: "3-47",
  },
  "money-rent": {
    term: "Money rent",
    kid: "Paying for land with coins after selling some of your crop.",
    grownUp:
      "Pre-capitalist ground-rent paid as the price of the surplus product. It presupposes trade, towns and money circulation, turns custom into contract, and leads either to peasant freehold or to rent paid by capitalist tenant farmers.",
    firstSeen: "3-47",
  },
  "peasant-proprietorship": {
    term: "Peasant proprietorship",
    kid: "A small farmer owning the little plot he works himself, so he pays no rent.",
    grownUp:
      "Free ownership of land parcels by the cultivators. No rent is paid as such; the peasant farms as long as the price covers the wage he pays himself, often under mortgage. Marx sees it as a basis of personal independence but unable to apply science or cooperation on a large scale.",
    firstSeen: "3-47",
  },
} satisfies Record<string, Term>;
