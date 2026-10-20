import type { Term } from "@/lib/glossary";

export const TERMS = {
  "production-time": {
    term: "Production time",
    kid: "The whole time something takes to be made, including the waiting, like wheat growing under the snow.",
    grownUp:
      "The whole time capital is held in the sphere of production. It includes working time and also pauses in which the product is left to natural processes (fermenting, drying, growing), so it can be much longer than working time and lengthens the turnover.",
    firstSeen: "2-13",
  },
  "rural-domestic-industry": {
    term: "Rural domestic industry",
    kid: "Weaving, tanning or shoemaking that farm families did at home in the long winter months.",
    grownUp:
      "Subsidiary manufacture carried on by peasant households in the seasons when field work stops. Marx sees in the gap between production time and working time its natural basis, and in it the point where capital first enters, as the merchant.",
    firstSeen: "2-13",
  },
} satisfies Record<string, Term>;
