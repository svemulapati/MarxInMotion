import type { Term } from "@/lib/glossary";

export const TERMS = {
  "working-day": {
    term: "Working day",
    kid: "How many hours of the day someone works for their boss.",
    grownUp:
      "Necessary labour time plus surplus labour time. It can never shrink to the necessary part alone, and it gets stretched until it meets physical limits (sleep, food) and moral ones (time for family, learning and social life).",
    firstSeen: "1-10",
  },
  "factory-acts": {
    term: "Factory Acts",
    kid: "Laws that said how long people, especially children, could be made to work in factories.",
    grownUp:
      "English laws from 1833 onward that limited the working day in textile mills and later in other trades, first for children and young persons, then for women. Marx calls the legal limit a modest Magna Carta for workers.",
    firstSeen: "1-10",
  },
  "relay-system": {
    term: "Relay system",
    kid: "Swapping teams of workers in and out so the machines can keep running.",
    grownUp:
      "Shift working that keeps the means of production running round the clock. In the 1840s it was also a trick for hiding breaches of the Factory Acts by moving children and young persons between sets.",
    firstSeen: "1-10",
  },
} satisfies Record<string, Term>;
