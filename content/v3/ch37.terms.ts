import type { Term } from "@/lib/glossary";

export const TERMS = {
  "ground-rent": {
    term: "Ground-rent",
    kid: "Money a farmer pays a landowner every year just for the right to use the land.",
    grownUp:
      "The economic form of landed property under capitalism: the part of surplus-value the capitalist tenant hands to the landowner for the use of land. Marx distinguishes it from interest on capital sunk in the land.",
    firstSeen: "3-37",
  },
  "landed-property": {
    term: "Landed property",
    kid: "Owning a piece of land, so that you can stop other people from using it.",
    grownUp:
      "Ownership of land as a monopoly over a portion of the earth. Under capitalism it loses its feudal political ties and becomes a purely economic claim, realised as ground-rent.",
    firstSeen: "3-37",
  },
  "terre-capital": {
    term: "Terre-capital (land-capital)",
    kid: "Money a farmer spends to make land better, like digging drains or spreading manure.",
    grownUp:
      "Capital fixed in the land through improvements such as drainage, irrigation or buildings. It belongs to fixed capital; interest on it can be added to the rent, so the landowner gains when leases are renewed.",
    firstSeen: "3-37",
  },
} satisfies Record<string, Term>;
