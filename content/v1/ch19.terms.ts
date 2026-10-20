import type { Term } from "@/lib/glossary";

export const TERMS = {
  "wage-form": {
    term: "Wage-form",
    kid: "Being paid “for the day”, which makes the whole day look paid, even the part that isn't.",
    grownUp:
      "The form in which the value of labour-power appears as the value or price of labour itself. It wipes out every trace of the division of the working day into paid and unpaid labour, so all labour appears as paid.",
    firstSeen: "1-19",
  },
  corvee: {
    term: "Corvée",
    kid: "An old system where peasants had to work some days on their lord's land for free.",
    grownUp:
      "Unpaid forced labour owed to a lord. Marx uses it as a contrast: in the corvée, labour for oneself and surplus labour for the lord are visibly separate in place and time.",
    firstSeen: "1-19",
  },
} satisfies Record<string, Term>;
