import type { Term } from "@/lib/glossary";

export const TERMS = {
  bourgeoisie: {
    term: "Bourgeoisie",
    kid: "The people who own the big workshops, machines and land, and hire others to work for them.",
    grownUp:
      "In Engels' 1888 note to the Manifesto, the class of modern capitalists, owners of the means of social production and employers of wage labour. The Manifesto credits it with a \"most revolutionary part\" in history.",
    firstSeen: "6-1",
  },
  proletariat: {
    term: "Proletariat",
    kid: "The people who own no workshop or land, so they must work for a wage to live.",
    grownUp:
      "In Engels' 1888 note, the class of modern wage labourers who, having no means of production of their own, are reduced to selling their labour-power in order to live.",
    firstSeen: "6-1",
  },
  "class-struggle": {
    term: "Class struggle",
    kid: "The pulling and pushing between groups who own things and groups who work for them.",
    grownUp:
      "The conflict between classes with opposed interests, which the Manifesto calls the moving force of all written history: freeman and slave, lord and serf, and in modern times bourgeoisie and proletariat.",
    firstSeen: "6-1",
  },
  "world-market": {
    term: "World market",
    kid: "Buying and selling that stretches all around the world, so cotton, cloth and tea cross oceans.",
    grownUp:
      "The global network of trade that, the Manifesto argues, modern industry created, giving production and consumption in every country a \"cosmopolitan character\". Later readers often see these pages as an early account of globalisation.",
    firstSeen: "6-1",
  },
} satisfies Record<string, Term>;
