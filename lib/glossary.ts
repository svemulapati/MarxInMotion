/**
 * The running glossary. Each chapter lists the terms it introduces; the
 * glossary page shows every term with a link back to where it first appears.
 */
export interface Term {
  term: string;
  /** Kid-level meaning, one sentence. */
  kid: string;
  /** Grown-up meaning, in Marx's sense. */
  grownUp: string;
  /** Chapter key ("vol-n") or "intro" where the term first appears. */
  firstSeen: string;
}

export const GLOSSARY = {
  "political-economy": {
    term: "Political economy",
    kid: "The old name for the study of how people make, swap and share things.",
    grownUp:
      "The science of production and distribution as practised by Adam Smith, David Ricardo and others. Capital's subtitle is \"A Critique of Political Economy\".",
    firstSeen: "intro",
  },
  capital: {
    term: "Capital",
    kid: "Money that is used to make more money.",
    grownUp:
      "For Marx, not a pile of money or machines as such, but value that grows by passing through production, where it employs wage labour.",
    firstSeen: "intro",
  },
  commodity: {
    term: "Commodity",
    kid: "Something made to be swapped or sold, not just used by the person who made it.",
    grownUp:
      "A product of labour made for exchange. It has a use-value and a value, and in capitalism it is the basic form that wealth takes.",
    firstSeen: "1-1",
  },
  "use-value": {
    term: "Use-value",
    kid: "What a thing is good for: a coat keeps you warm.",
    grownUp:
      "The usefulness of a thing, which comes from its physical properties and is realised when it is used or consumed.",
    firstSeen: "1-1",
  },
  "exchange-value": {
    term: "Exchange-value",
    kid: "How much of other things you can swap it for: one coat for 20 yards of cloth.",
    grownUp:
      "The ratio in which one commodity exchanges for others. Marx treats it as the outward form in which value shows itself.",
    firstSeen: "1-1",
  },
  value: {
    term: "Value",
    kid: "The hidden amount of human work inside a thing, which is what swapping secretly compares.",
    grownUp:
      "The socially necessary labour time embodied in a commodity. It is a social property, visible only when commodities are exchanged.",
    firstSeen: "1-1",
  },
  "socially-necessary-labour-time": {
    term: "Socially necessary labour time",
    kid: "How long a job takes an ordinary worker with ordinary tools, not the slowest or the fastest.",
    grownUp:
      "The labour time needed to produce an article under the normal conditions of production, with the average skill and intensity of the time.",
    firstSeen: "1-1",
  },
  "concrete-labour": {
    term: "Concrete labour",
    kid: "The special kind of work: sewing, weaving, baking.",
    grownUp: "Labour considered as a particular useful activity. It creates use-values.",
    firstSeen: "1-1",
  },
  "abstract-labour": {
    term: "Abstract labour",
    kid: "Work counted only as time spent, no matter what kind of work it was.",
    grownUp:
      "Labour considered simply as the expenditure of human labour-power in general. It is the substance of value.",
    firstSeen: "1-1",
  },
  "money-commodity": {
    term: "Money",
    kid: "The one thing everybody agrees to use for measuring and swapping everything else.",
    grownUp:
      "The commodity (historically gold) that is set apart as the general equivalent, so that all other commodities express their values in it as prices.",
    firstSeen: "1-1",
  },
  "commodity-fetishism": {
    term: "Fetishism of commodities",
    kid: "When we forget the people behind things and think prices come from the things themselves.",
    grownUp:
      "The way relations between people's labours appear as relations between things, so that value looks like a natural property of products.",
    firstSeen: "1-1",
  },
} satisfies Record<string, Term>;

export type TermId = keyof typeof GLOSSARY;

export const GLOSSARY_LIST = (Object.entries(GLOSSARY) as [TermId, Term][])
  .map(([id, t]) => ({ id, ...t }))
  .sort((a, b) => a.term.localeCompare(b.term));
