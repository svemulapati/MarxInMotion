import type { Term } from "@/lib/glossary";

export const TERMS = {
  necker: {
    term: "Necker",
    kid: "A banker who ran France's money and noticed that faster work made the rich richer but not the workers.",
    grownUp:
      "Jacques Necker (1732 to 1804), Genevan banker and French finance minister. Marx credits him with tracing profit and rent to surplus-labour and with describing relative surplus-value, while framing it only as a contrast of rich and poor.",
    firstSeen: "4-5",
  },
} satisfies Record<string, Term>;
