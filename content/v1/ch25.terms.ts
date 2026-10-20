import type { Term } from "@/lib/glossary";

export const TERMS = {
  "composition-of-capital": {
    term: "Composition of capital",
    kid: "The mix of what the boss spends: how much goes on machines and materials, and how much on wages.",
    grownUp:
      "Technically, the mass of means of production compared with the labour that uses them; in value, constant compared with variable capital. The value composition, insofar as it mirrors the technical one, Marx calls the organic composition. It rises as productivity grows.",
    firstSeen: "1-25",
  },
  "concentration-of-capital": {
    term: "Concentration of capital",
    kid: "A business growing bigger by putting its own profits back in.",
    grownUp:
      "Growth of individual capitals through accumulation itself: more means of production and more command over labour gathered in the same hands, out of their own surplus-value.",
    firstSeen: "1-25",
  },
  "centralisation-of-capital": {
    term: "Centralisation of capital",
    kid: "Big businesses swallowing up smaller ones.",
    grownUp:
      "The joining of capitals already formed into fewer, larger ones, through competition (the larger beat the smaller) and credit, including joint-stock companies. It changes how capital is distributed and can raise its scale far faster than accumulation.",
    firstSeen: "1-25",
  },
  "relative-surplus-population": {
    term: "Relative surplus population",
    kid: "People left without work, not because there are too many people, but because the work needs fewer of them.",
    grownUp:
      "A working population made surplus relative to capital's need for it, because variable capital grows more slowly than total capital. Marx sets it against the idea of an absolute surplus of people.",
    firstSeen: "1-25",
  },
  "industrial-reserve-army": {
    term: "Industrial reserve army",
    kid: "The crowd of people waiting at the gate for work.",
    grownUp:
      "The relative surplus population seen as a reserve at capital's disposal: drawn in during booms, pushed out in crises, and keeping wages within limits. It has floating, latent and stagnant forms.",
    firstSeen: "1-25",
  },
  pauperism: {
    term: "Pauperism",
    kid: "Being so poor you need help just to survive, often because you are too old, sick or hurt to work.",
    grownUp:
      "The lowest layer of the relative surplus population, in three groups: paupers still able to work, orphans and pauper children, and those unable to work (the old, the sick, the victims of industry). Marx calls it the hospital of the active labour-army and the dead weight of the reserve army.",
    firstSeen: "1-25",
  },
} satisfies Record<string, Term>;
