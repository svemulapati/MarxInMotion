import type { Term } from "@/lib/glossary";

export const TERMS = {
  "constant-capital": {
    term: "Constant capital (c)",
    kid: "Money spent on materials and tools. Its value comes out the same size it went in.",
    grownUp:
      "The part of capital laid out on means of production (raw materials, auxiliary materials, instruments). Its value is transferred to the product but does not change in magnitude.",
    firstSeen: "1-8",
  },
  "variable-capital": {
    term: "Variable capital (v)",
    kid: "Money spent on paying workers. It is the part that comes back bigger.",
    grownUp:
      "The part of capital laid out on labour-power. It reproduces its own value and produces a surplus-value on top, so its magnitude varies.",
    firstSeen: "1-8",
  },
} satisfies Record<string, Term>;
