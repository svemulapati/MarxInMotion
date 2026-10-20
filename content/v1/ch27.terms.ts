import type { Term } from "@/lib/glossary";

export const TERMS = {
  enclosure: {
    term: "Enclosure",
    kid: "Fencing off land that a whole village used to share, so it belongs to one owner.",
    grownUp:
      "The conversion of open fields and common land into private holdings, from the 15th century by force and later by Acts of Parliament. For Marx it was a central method of separating peasants from the soil.",
    firstSeen: "1-27",
  },
  "common-land": {
    term: "Common land",
    kid: "Land that everyone in a village could use, for grazing animals or gathering firewood.",
    grownUp:
      "Land over which villagers held customary rights of use (pasture, fuel, water). Losing these rights removed a vital support of the poor and pushed them towards wage labour.",
    firstSeen: "1-27",
  },
  yeomanry: {
    term: "Yeomanry",
    kid: "England's independent small farmers, who worked their own land.",
    grownUp:
      "The class of independent peasant proprietors, still more numerous than tenant farmers in the late 17th century. Marx says they had disappeared by about 1750.",
    firstSeen: "1-27",
  },
  "clearing-of-estates": {
    term: "Clearing of estates",
    kid: "Driving all the people off a piece of land so it can be used for sheep or hunting.",
    grownUp:
      "Marx's name for the last stage of expropriation, sweeping the inhabitants off whole estates, seen most completely in the Scottish Highlands (for example the Sutherland clearance of 1814 to 1820).",
    firstSeen: "1-27",
  },
} satisfies Record<string, Term>;
