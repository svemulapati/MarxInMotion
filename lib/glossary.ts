/**
 * The running glossary. Each chapter lists the terms it introduces; the
 * glossary page shows every term with a link back to where it first appears.
 */
import { TERMS as V1C05 } from "@/content/v1/ch05.terms";
import { TERMS as V1C06 } from "@/content/v1/ch06.terms";
import { TERMS as V1C07 } from "@/content/v1/ch07.terms";
import { TERMS as V1C08 } from "@/content/v1/ch08.terms";
import { TERMS as V1C09 } from "@/content/v1/ch09.terms";
import { TERMS as V1C10 } from "@/content/v1/ch10.terms";
import { TERMS as V1C11 } from "@/content/v1/ch11.terms";
import { TERMS as V1C12 } from "@/content/v1/ch12.terms";
import { TERMS as V1C13 } from "@/content/v1/ch13.terms";
import { TERMS as V1C14 } from "@/content/v1/ch14.terms";
import { TERMS as V1C15 } from "@/content/v1/ch15.terms";
import { TERMS as V1C16 } from "@/content/v1/ch16.terms";
import { TERMS as V1C17 } from "@/content/v1/ch17.terms";
import { TERMS as V1C18 } from "@/content/v1/ch18.terms";
import { TERMS as V1C19 } from "@/content/v1/ch19.terms";
import { TERMS as V1C20 } from "@/content/v1/ch20.terms";
import { TERMS as V1C21 } from "@/content/v1/ch21.terms";
import { TERMS as V1C22 } from "@/content/v1/ch22.terms";
import { TERMS as V1C23 } from "@/content/v1/ch23.terms";
import { TERMS as V1C24 } from "@/content/v1/ch24.terms";
import { TERMS as V1C25 } from "@/content/v1/ch25.terms";
import { TERMS as V1C26 } from "@/content/v1/ch26.terms";
import { TERMS as V1C27 } from "@/content/v1/ch27.terms";
import { TERMS as V1C28 } from "@/content/v1/ch28.terms";
import { TERMS as V1C29 } from "@/content/v1/ch29.terms";
import { TERMS as V1C30 } from "@/content/v1/ch30.terms";
import { TERMS as V1C31 } from "@/content/v1/ch31.terms";
import { TERMS as V1C32 } from "@/content/v1/ch32.terms";
import { TERMS as V1C33 } from "@/content/v1/ch33.terms";

export interface Term {
  term: string;
  /** Kid-level meaning, one sentence. */
  kid: string;
  /** Grown-up meaning, in Marx's sense. */
  grownUp: string;
  /** Chapter key ("vol-n") or "intro" where the term first appears. */
  firstSeen: string;
}

const CORE = {
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
  "general-equivalent": {
    term: "General equivalent",
    kid: "The one thing that every other thing gets measured against.",
    grownUp:
      "A commodity set apart, by the common action of all commodity owners, to express the values of all the others. When the role settles on gold, it becomes money.",
    firstSeen: "1-2",
  },
  "money-fetish": {
    term: "Money fetish",
    kid: "Thinking money is magic all by itself, instead of a way of comparing people's work.",
    grownUp:
      "The fetishism of commodities in its most dazzling form: money seems to be valuable by nature, which hides that it is a commodity whose special role comes from social relations.",
    firstSeen: "1-2",
  },
  price: {
    term: "Price",
    kid: "How much money a thing is worth, written on its tag.",
    grownUp:
      "The money-name of the value in a commodity. It is ideal (a price tag needs no actual gold), and a price can drift above or below value.",
    firstSeen: "1-3",
  },
  "c-m-c": {
    term: "C\u2013M\u2013C (selling in order to buy)",
    kid: "Swap your thing for money, then swap the money for the thing you need.",
    grownUp:
      "The simple circulation of commodities: commodity to money (sale), money to commodity (purchase). Its aim is a different use-value, so the circuit ends in consumption.",
    firstSeen: "1-3",
  },
  "means-of-circulation": {
    term: "Means of circulation",
    kid: "Money as the go-between that passes from hand to hand.",
    grownUp:
      "Money's function in carrying out the sales and purchases of commodities, during which it keeps moving away from its starting point.",
    firstSeen: "1-3",
  },
  "velocity-of-money": {
    term: "Velocity of money",
    kid: "How many times a coin changes hands in a day.",
    grownUp:
      "The number of moves a piece of money makes in a given time. Marx's rule: the money needed for circulation equals the sum of prices divided by the number of moves.",
    firstSeen: "1-3",
  },
  hoarding: {
    term: "Hoarding",
    kid: "Keeping money out of use, locked away in a chest.",
    grownUp:
      "Withdrawing money from circulation to keep it as a store of value. Hoards also act as reservoirs that release or soak up money as trade grows or shrinks.",
    firstSeen: "1-3",
  },
  "means-of-payment": {
    term: "Means of payment",
    kid: "Money paid later, to keep a promise for something you already got.",
    grownUp:
      "Money's function when the sale and the payment are separated in time, so the buyer becomes a debtor. Chains of such payments make monetary crises possible.",
    firstSeen: "1-3",
  },
  "world-money": {
    term: "World money",
    kid: "Gold used for paying between countries.",
    grownUp:
      "Money in trade between nations, where it drops its local forms (coins, paper notes) and works as plain bullion.",
    firstSeen: "1-3",
  },
  "general-formula": {
    term: "M\u2013C\u2013M\u2032 (the general formula for capital)",
    kid: "Start with money, buy things, then sell them for more money.",
    grownUp:
      "The circuit of money as capital: buying in order to sell dearer, where M\u2032 = M + \u0394M. It fits industrial and merchant capital, and in shortened form (M\u2013M\u2032) interest-bearing capital.",
    firstSeen: "1-4",
  },
  "surplus-value": {
    term: "Surplus-value",
    kid: "The extra money that comes back after going round the circle.",
    grownUp:
      "The increase over the value first advanced (\u0394M). Explaining where it comes from is the puzzle of Part Two of Volume I.",
    firstSeen: "1-4",
  },
  capitalist: {
    term: "Capitalist",
    kid: "Someone who uses money to make more money, again and again.",
    grownUp:
      "For Marx, capital in human form: the conscious bearer of capital's endless movement, whose aim is the unlimited growth of value rather than any useful thing.",
    firstSeen: "1-4",
  },
} satisfies Record<string, Term>;

/**
 * Chapters from Volume I, Chapter 5 on keep their new terms next to their
 * content, in content/vN/chNN.terms.ts, and are merged in here.
 */
export const GLOSSARY = {
  ...CORE,
  ...V1C05,
  ...V1C06,
  ...V1C07,
  ...V1C08,
  ...V1C09,
  ...V1C10,
  ...V1C11,
  ...V1C12,
  ...V1C13,
  ...V1C14,
  ...V1C15,
  ...V1C16,
  ...V1C17,
  ...V1C18,
  ...V1C19,
  ...V1C20,
  ...V1C21,
  ...V1C22,
  ...V1C23,
  ...V1C24,
  ...V1C25,
  ...V1C26,
  ...V1C27,
  ...V1C28,
  ...V1C29,
  ...V1C30,
  ...V1C31,
  ...V1C32,
  ...V1C33,
};

export type TermId = keyof typeof GLOSSARY;

export const GLOSSARY_LIST = (Object.entries(GLOSSARY) as [TermId, Term][])
  .map(([id, t]) => ({ id, ...t }))
  .sort((a, b) => a.term.localeCompare(b.term));
