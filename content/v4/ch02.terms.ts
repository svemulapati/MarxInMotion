import type { Term } from "@/lib/glossary";

export const TERMS = {
  "net-product": {
    term: "Net product",
    kid: "The extra harvest left over after the farm workers have eaten what they need.",
    grownUp:
      "The Physiocrats' produit net: the excess of agricultural output over the means of production and the labourer's minimum of subsistence. Marx reads it as surplus-value seen in the form of the use-values it appears in, and paid to landowners as rent.",
    firstSeen: "4-2",
  },
  "sterile-class": {
    term: "Sterile class",
    kid: "The Physiocrats' name for craftspeople and traders, who they thought made nothing extra.",
    grownUp:
      "Quesnay's term for everyone working outside agriculture. Because manufacture only adds the value of the materials plus the workers' upkeep, the Physiocrats held that it yields no surplus. Marx answers that surplus labour, not nature, is the source of the extra, in any branch.",
    firstSeen: "4-2",
  },
  "laissez-faire": {
    term: "Laissez faire",
    kid: "French for \"let it be\": leave business alone and let people trade freely.",
    grownUp:
      "The Physiocrats' slogan (\"laissez faire, laissez aller\") for free competition and the removal of state interference, guilds and monopolies. Marx notes that this school, for all its feudal look, overthrew Colbertism and cleared the way for capitalist industry.",
    firstSeen: "4-2",
  },
} satisfies Record<string, Term>;
