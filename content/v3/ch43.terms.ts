import type { Term } from "@/lib/glossary";

export const TERMS = {
  "corn-laws": {
    term: "Corn Laws",
    kid: "Taxes on grain brought in from abroad, which kept bread dear and helped landlords collect high rents.",
    grownUp:
      "British duties on imported grain, repealed in 1846. Engels notes that repeal did not ruin the landlords at first: farmers were made to invest more capital per acre, and rents rose. Later, cheap grain from the Americas, Russia and India brought rents down.",
    firstSeen: "3-43",
  },
} satisfies Record<string, Term>;
