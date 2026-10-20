import type { Term } from "@/lib/glossary";

export const TERMS = {
  "capitalist-farmer": {
    term: "Capitalist farmer",
    kid: "A farmer who rents land, pays workers, and runs the farm to make money grow.",
    grownUp:
      "A tenant who farms with his own capital, employs wage labourers and pays rent to the landowner out of the surplus-product. In England he grew out of the bailiff over the 14th to 16th centuries.",
    firstSeen: "1-29",
  },
  metayer: {
    term: "Métayer",
    kid: "A 'half-farmer' who shares the seed, animals and harvest with the landowner.",
    grownUp:
      "A sharecropper who advances part of the agricultural stock while the landlord advances the rest, the product being divided by contract. In England this form soon gave way to the farmer proper.",
    firstSeen: "1-29",
  },
  "price-revolution": {
    term: "Price revolution",
    kid: "A long time in the 1500s when almost everything kept getting more expensive.",
    grownUp:
      "The great 16th-century rise in prices. Marx attributes it to the fall in the value of precious metals; with long leases at fixed money rents, it enriched farmers at the expense of landlords and labourers.",
    firstSeen: "1-29",
  },
} satisfies Record<string, Term>;
