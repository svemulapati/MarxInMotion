import type { Term } from "@/lib/glossary";

export const TERMS = {
  "labour-commanded": {
    term: "Labour commanded",
    kid: "How much work a thing can buy, as opposed to how much work went into it.",
    grownUp:
      "Adam Smith's second measure of value: the quantity of labour a commodity \"enables him to purchase or command\". Marx shows it amounts to measuring by wages, a measure that itself changes, and that it parts company with labour contained as soon as capital employs wage-labour.",
    firstSeen: "4-3",
  },
  "deduction-theory": {
    term: "Profit and rent as deductions",
    kid: "Smith's idea that the landlord and the boss each cut a slice out of what the worker made.",
    grownUp:
      "Smith's view that rent \"makes the first deduction\" and profit \"a second deduction\" from the produce of labour. Marx treats this as Smith's real discovery of the origin of surplus-value, which Smith then muddled by treating wages, profit and rent as separate sources of value.",
    firstSeen: "4-3",
  },
} satisfies Record<string, Term>;
