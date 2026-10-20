import type { Term } from "@/lib/glossary";

export const TERMS = {
  "labour-power": {
    term: "Labour-power",
    kid: "Everything a person's body and mind can do at work.",
    grownUp:
      "The capacity for labour: the mental and physical capabilities a person uses in producing any use-value. Under capitalism it is sold as a commodity, by the day or the week.",
    firstSeen: "1-6",
  },
  "free-worker": {
    term: "Free worker",
    kid: "Someone nobody owns, who also owns nothing to live on, so they must work for someone else.",
    grownUp:
      "A worker “free in the double sense”: legally free to sell their labour-power, and free of (lacking) any means of production, so that they have to sell it.",
    firstSeen: "1-6",
  },
  "value-of-labour-power": {
    term: "Value of labour-power",
    kid: "What it costs to keep a worker and their family living and working: their wage.",
    grownUp:
      "The value of the means of subsistence needed to maintain and reproduce the worker, including children and training, with a historical and moral element that varies by place and time.",
    firstSeen: "1-6",
  },
  "means-of-subsistence": {
    term: "Means of subsistence",
    kid: "The things people need to live: food, a home, clothes, warmth.",
    grownUp:
      "The goods a worker consumes to maintain and renew their capacity to work. Their value determines the value of labour-power.",
    firstSeen: "1-6",
  },
} satisfies Record<string, Term>;
