import type { TermId } from "@/lib/glossary";

/**
 * Families of ideas that belong together, often across volumes. Every term
 * in a family lists the others as "See also", so links run both ways.
 */
const FAMILIES: TermId[][] = [
  // value, from labour to prices
  ["value", "socially-necessary-labour-time", "abstract-labour", "concrete-labour"],
  ["value", "price", "price-of-production", "transformation-problem", "market-value", "regulating-price"],
  ["use-value", "exchange-value", "value", "commodity"],
  ["commodity-fetishism", "money-fetish", "trinity-formula", "profit-illusion", "m-m-prime"],
  // money
  ["money-commodity", "general-equivalent", "world-money", "means-of-circulation", "means-of-payment"],
  ["hoarding", "latent-money-capital", "reserve-fund", "plethora-of-capital", "loanable-money-capital"],
  ["means-of-payment", "credit-system", "bill-of-exchange", "monetary-crisis", "commercial-credit"],
  // capital and surplus-value
  ["c-m-c", "general-formula", "circuit-of-capital", "metamorphosis-of-capital"],
  ["money-capital", "productive-capital", "commodity-capital", "industrial-capital"],
  ["surplus-value", "rate-of-surplus-value", "annual-rate-of-surplus-value", "mass-of-surplus-value", "unpaid-labour"],
  ["surplus-value", "profit", "interest", "ground-rent", "trinity-formula"],
  ["necessary-labour-time", "surplus-labour-time", "working-day", "unpaid-labour", "wage-form"],
  ["absolute-surplus-value", "relative-surplus-value", "extra-surplus-value", "productivity-of-labour"],
  ["labour-power", "value-of-labour-power", "free-worker", "means-of-subsistence"],
  // capital's parts
  ["constant-capital", "variable-capital", "composition-of-capital", "technical-composition", "value-composition"],
  ["constant-capital", "fixed-capital", "circulating-capital", "ramsays-distinction", "smiths-dogma"],
  ["fixed-capital", "wear-and-tear", "moral-depreciation", "turnover-cycle", "reserve-fund"],
  ["turnover-time", "number-of-turnovers", "circulation-time", "production-time", "working-period"],
  ["annual-rate-of-profit", "turnover-time", "annual-rate-of-surplus-value", "merchants-turnover"],
  // profit
  ["cost-price", "profit", "rate-of-profit", "profit-rate-formula", "average-rate-of-profit"],
  ["average-rate-of-profit", "price-of-production", "surplus-profit", "natural-price"],
  ["falling-rate-of-profit", "counteracting-influences", "composition-of-capital", "diminishing-returns"],
  ["overproduction-of-capital", "general-glut", "says-law", "monetary-crisis", "turnover-cycle"],
  // accumulation and labour
  ["simple-reproduction", "expanded-reproduction", "accumulation", "reproduction-scheme"],
  ["reproduction-scheme", "department-i", "department-ii", "balance-condition", "tableau-economique"],
  ["industrial-reserve-army", "relative-surplus-population", "pauperism", "machinery"],
  ["concentration-of-capital", "centralisation-of-capital", "joint-stock-company"],
  ["co-operation", "collective-worker", "division-of-labour", "detail-labourer", "manufacture"],
  ["machinery", "factory-system", "intensity-of-labour", "luddites", "barton-machinery"],
  ["productive-labour", "unproductive-labour", "faux-frais", "costs-of-circulation"],
  ["time-wages", "piece-wages", "nominal-wage", "real-wage", "relative-wage", "price-of-labour"],
  // merchants and money
  ["merchants-capital", "commercial-capital", "money-dealing-capital", "commercial-profit"],
  ["interest-bearing-capital", "interest", "rate-of-interest", "profit-of-enterprise", "usury"],
  ["fictitious-capital", "capitalisation", "price-of-land", "bank-capital", "speculation"],
  ["bank-of-england", "bank-act-1844", "currency-principle", "bank-note", "metal-reserve"],
  // land and rent
  ["ground-rent", "differential-rent", "absolute-rent", "landed-property", "worst-soil"],
  ["differential-rent-i", "differential-rent-ii", "intensive-cultivation", "anderson-law", "rent-tables"],
  ["absolute-rent", "monopoly-price", "rodbertus-rent", "building-site-rent", "mining-rent"],
  ["labour-rent", "rent-in-kind", "money-rent", "historical-forms-of-rent", "corvee", "metayer"],
  ["primitive-accumulation", "enclosure", "common-land", "clearing-of-estates", "capitalist-farmer"],
  // the economists
  ["physiocrats", "tableau-economique", "net-product", "sterile-class", "productive-class", "avances"],
  ["smiths-dogma", "deduction-theory", "labour-commanded", "productive-labour"],
  ["ricardo-surplus-value", "inverse-wages-profit", "ricardian-school", "ricardian-socialists"],
  ["vulgar-economy", "trinity-formula", "says-law", "abstinence-theory"],
  // classes and the future
  ["classes", "intermediate-strata", "distribution-relations", "production-relations"],
  ["realm-of-freedom", "disposable-time", "working-day", "co-operative-factory"],
  ["expropriation-of-the-expropriators", "negation-of-the-negation", "co-operative-factory"],
];

export function relatedTo(id: string): string[] {
  const out = new Set<string>();
  for (const fam of FAMILIES) if (fam.includes(id as TermId)) fam.forEach((t) => t !== id && out.add(t));
  return [...out];
}

export const RELATED_FAMILIES = FAMILIES;
