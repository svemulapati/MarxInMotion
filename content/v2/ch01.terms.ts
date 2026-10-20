import type { Term } from "@/lib/glossary";

export const TERMS = {
  "circuit-of-capital": {
    term: "Circuit of capital",
    kid: "The round trip capital makes: money, then things and workers, then goods, then more money.",
    grownUp:
      "The movement M–C…P…C′–M′, in which capital passes through three stages (buying, production, selling) and returns to its starting form enlarged by surplus-value, ready to begin again.",
    firstSeen: "2-1",
  },
  "money-capital": {
    term: "Money-capital",
    kid: "Capital while it is still coins, waiting to buy what the workshop needs.",
    grownUp:
      "Capital in its money form, at the start and end of the circuit. It can do only what money does (buy and pay), but because it buys labour-power for production it functions as capital.",
    firstSeen: "2-1",
  },
  "industrial-capital": {
    term: "Industrial capital",
    kid: "Capital that goes all the way round: buying, making things, and selling them.",
    grownUp:
      "Capital that passes through all three forms (money, productive and commodity-capital) in turn. Marx uses “industrial” for any branch run on a capitalist basis, including farming.",
    firstSeen: "2-1",
  },
  "metamorphosis-of-capital": {
    term: "Metamorphosis of capital",
    kid: "Capital changing its costume: from coins, to a working workshop, to goods, and back to coins.",
    grownUp:
      "The changes of form capital-value undergoes in its circuit. The forms are not separate kinds of capital but functional forms of one capital, each taken on and then shed.",
    firstSeen: "2-1",
  },
} satisfies Record<string, Term>;
