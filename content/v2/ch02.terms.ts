import type { Term } from "@/lib/glossary";

export const TERMS = {
  "productive-capital": {
    term: "Productive capital",
    kid: "Capital while it is a working workshop: the cotton, the machines and the workers busy at them.",
    grownUp:
      "Capital in the form of means of production and labour-power combined in the process of production (P). Only in this form does capital create surplus-value.",
    firstSeen: "2-2",
  },
  "latent-money-capital": {
    term: "Latent money-capital",
    kid: "Saved-up money that will become capital later, once there is enough of it.",
    grownUp:
      "Surplus-value held as a hoard until it reaches the minimum size needed to act as additional capital. It is capital only in waiting, since it cannot function while it stays money.",
    firstSeen: "2-2",
  },
  "reserve-fund": {
    term: "Reserve fund",
    kid: "Money kept aside so the business can keep going when something goes wrong.",
    grownUp:
      "A money hoard used to bridge disturbances in the circuit, for example when prices of materials rise or sales are delayed, so that production need not stop.",
    firstSeen: "2-2",
  },
} satisfies Record<string, Term>;
