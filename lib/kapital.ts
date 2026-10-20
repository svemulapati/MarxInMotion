/**
 * The shape of Capital. Volume I follows the Penguin/Fowkes numbering
 * (33 chapters, 8 parts); Volumes II and III follow the standard English
 * editions (Lasker; International Publishers) as hosted on marxists.org;
 * "Volume IV" is Theories of Surplus-Value (Progress Publishers).
 * Verified against the marxists.org tables of contents on 2026-10-20.
 */
export type Status = "ready" | "soon";

export interface Chapter {
  vol: VolumeNumber;
  n: number;
  title: string;
  status: Status;
}

export interface Part {
  n: number;
  title: string;
  /** First and last chapter in this part, inclusive. */
  chapters: [number, number];
}

export type VolumeNumber = 1 | 2 | 3 | 4;

export interface Volume {
  n: VolumeNumber;
  roman: "I" | "II" | "III" | "IV";
  word: "One" | "Two" | "Three" | "Four";
  title: string;
  /** One line a child could repeat back. */
  kidLine: string;
  parts: Part[];
  chapters: Chapter[];
}

/** Chapters that have been written. Everything else renders as "soon". */
/** Chapter keys from..to of one volume, e.g. span(2, 1, 6) = "2-1".."2-6". */
const span = (vol: number, from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => `${vol}-${from + i}`);

const READY = new Set<string>([...span(1, 1, 33)]);

const make = (vol: VolumeNumber, titles: string[]): Chapter[] =>
  titles.map((title, i) => ({ vol, n: i + 1, title, status: READY.has(`${vol}-${i + 1}`) ? "ready" : "soon" }));

export const VOLUMES: Volume[] = [
  {
    n: 1,
    roman: "I",
    word: "One",
    title: "The Process of Production of Capital",
    kidLine: "Where does the extra money come from when things get made?",
    parts: [
      { n: 1, title: "Commodities and Money", chapters: [1, 3] },
      { n: 2, title: "The Transformation of Money into Capital", chapters: [4, 6] },
      { n: 3, title: "The Production of Absolute Surplus-Value", chapters: [7, 11] },
      { n: 4, title: "The Production of Relative Surplus-Value", chapters: [12, 15] },
      { n: 5, title: "The Production of Absolute and Relative Surplus-Value", chapters: [16, 18] },
      { n: 6, title: "Wages", chapters: [19, 22] },
      { n: 7, title: "The Process of Accumulation of Capital", chapters: [23, 25] },
      { n: 8, title: "So-Called Primitive Accumulation", chapters: [26, 33] },
    ],
    chapters: make(1, [
      "The Commodity",
      "The Process of Exchange",
      "Money, or the Circulation of Commodities",
      "The General Formula for Capital",
      "Contradictions in the General Formula",
      "The Sale and Purchase of Labour-Power",
      "The Labour Process and the Valorization Process",
      "Constant Capital and Variable Capital",
      "The Rate of Surplus-Value",
      "The Working Day",
      "The Rate and Mass of Surplus-Value",
      "The Concept of Relative Surplus-Value",
      "Co-operation",
      "The Division of Labour and Manufacture",
      "Machinery and Large-Scale Industry",
      "Absolute and Relative Surplus-Value",
      "Changes of Magnitude in the Price of Labour-Power and in Surplus-Value",
      "Different Formulae for the Rate of Surplus-Value",
      "The Transformation of the Value (and Respectively the Price) of Labour-Power into Wages",
      "Time-Wages",
      "Piece-Wages",
      "National Differences in Wages",
      "Simple Reproduction",
      "The Transformation of Surplus-Value into Capital",
      "The General Law of Capitalist Accumulation",
      "The Secret of Primitive Accumulation",
      "The Expropriation of the Agricultural Population from the Land",
      "Bloody Legislation against the Expropriated, from the End of the Fifteenth Century. The Forcing Down of Wages by Act of Parliament",
      "The Genesis of the Capitalist Farmer",
      "Impact of the Agricultural Revolution on Industry. The Creation of a Home Market for Industrial Capital",
      "The Genesis of the Industrial Capitalist",
      "The Historical Tendency of Capitalist Accumulation",
      "The Modern Theory of Colonization",
    ]),
  },
  {
    n: 2,
    roman: "II",
    word: "Two",
    title: "The Process of Circulation of Capital",
    kidLine: "How does money travel around and come back bigger?",
    parts: [
      { n: 1, title: "The Metamorphoses of Capital and their Circuits", chapters: [1, 6] },
      { n: 2, title: "The Turnover of Capital", chapters: [7, 17] },
      { n: 3, title: "The Reproduction and Circulation of the Aggregate Social Capital", chapters: [18, 21] },
    ],
    chapters: make(2, [
      "The Circuit of Money-Capital",
      "The Circuit of Productive Capital",
      "The Circuit of Commodity-Capital",
      "The Three Formulas of the Circuit",
      "The Time of Circulation",
      "The Costs of Circulation",
      "The Turnover Time and Number of Turnovers",
      "Fixed Capital and Circulating Capital",
      "The Aggregate Turnover of the Capital Advanced. Cycles of Turnover",
      "Theories of Fixed and Circulating Capital. The Physiocrats and Adam Smith",
      "Theories of Fixed and Circulating Capital. Ricardo",
      "The Working Period",
      "The Time of Production",
      "The Time of Circulation",
      "Effect of Turnover Time on Magnitude of Advanced Capital",
      "The Turnover of Variable Capital",
      "The Circulation of Surplus-Value",
      "Introduction",
      "Former Presentations of the Subject",
      "Simple Reproduction",
      "Accumulation and Reproduction on an Expanded Scale",
    ]),
  },
  {
    n: 3,
    roman: "III",
    word: "Three",
    title: "The Process of Capitalist Production as a Whole",
    kidLine: "Who gets which slice of the pie, and why does it shrink?",
    parts: [
      { n: 1, title: "The Conversion of Surplus-Value into Profit and of the Rate of Surplus-Value into the Rate of Profit", chapters: [1, 7] },
      { n: 2, title: "Conversion of Profit into Average Profit", chapters: [8, 12] },
      { n: 3, title: "The Law of the Tendency of the Rate of Profit to Fall", chapters: [13, 15] },
      { n: 4, title: "Conversion of Commodity-Capital and Money-Capital into Commercial Capital and Money-Dealing Capital (Merchant's Capital)", chapters: [16, 20] },
      { n: 5, title: "Division of Profit into Interest and Profit of Enterprise. Interest-Bearing Capital", chapters: [21, 36] },
      { n: 6, title: "Transformation of Surplus-Profit into Ground-Rent", chapters: [37, 47] },
      { n: 7, title: "Revenues and their Sources", chapters: [48, 52] },
    ],
    chapters: make(3, [
      "Cost-Price and Profit",
      "The Rate of Profit",
      "The Relation of the Rate of Profit to the Rate of Surplus-Value",
      "The Effect of the Turnover on the Rate of Profit",
      "Economy in the Employment of Constant Capital",
      "The Effect of Price Fluctuations",
      "Supplementary Remarks",
      "Different Compositions of Capitals in Different Branches of Production and Resulting Differences in Rates of Profit",
      "Formation of a General Rate of Profit (Average Rate of Profit) and Transformation of the Values of Commodities into Prices of Production",
      "Equalisation of the General Rate of Profit Through Competition. Market-Prices and Market-Values. Surplus-Profit",
      "Effects of General Wage Fluctuations on Prices of Production",
      "Supplementary Remarks",
      "The Law as Such",
      "Counteracting Influences",
      "Exposition of the Internal Contradictions of the Law",
      "Commercial Capital",
      "Commercial Profit",
      "The Turnover of Merchant's Capital",
      "Money-Dealing Capital",
      "Historical Facts about Merchant's Capital",
      "Interest-Bearing Capital",
      "Division of Profit. Rate of Interest. Natural Rate of Interest",
      "Interest and Profit of Enterprise",
      "Externalisation of the Relations of Capital in the Form of Interest-Bearing Capital",
      "Credit and Fictitious Capital",
      "Accumulation of Money-Capital. Its Influence on the Interest Rate",
      "The Role of Credit in Capitalist Production",
      "Medium of Circulation and Capital; Views of Tooke and Fullarton",
      "Component Parts of Bank Capital",
      "Money-Capital and Real Capital. I",
      "Money-Capital and Real Capital. II",
      "Money-Capital and Real Capital. III",
      "The Medium of Circulation in the Credit System",
      "The Currency Principle and the English Bank Legislation of 1844",
      "Precious Metal and Rate of Exchange",
      "Pre-Capitalist Relationships",
      "Introduction",
      "Differential Rent: General Remarks",
      "First Form of Differential Rent (Differential Rent I)",
      "Second Form of Differential Rent (Differential Rent II)",
      "Differential Rent II. First Case: Constant Price of Production",
      "Differential Rent II. Second Case: Falling Price of Production",
      "Differential Rent II. Third Case: Rising Price of Production",
      "Differential Rent Also on the Worst Cultivated Soil",
      "Absolute Ground-Rent",
      "Building Site Rent. Rent in Mining. Price of Land",
      "Genesis of Capitalist Ground-Rent",
      "The Trinity Formula",
      "Concerning the Analysis of the Process of Production",
      "Illusions Created by Competition",
      "Distribution Relations and Production Relations",
      "Classes",
    ]),
  },
  {
    n: 4,
    roman: "IV",
    word: "Four",
    title: "Theories of Surplus-Value",
    kidLine: "What did the thinkers before Marx get right, and what did they miss?",
    parts: [
      { n: 1, title: "Part I", chapters: [1, 7] },
      { n: 2, title: "Part II", chapters: [8, 18] },
      { n: 3, title: "Part III", chapters: [19, 24] },
    ],
    chapters: make(4, [
      "Sir James Steuart",
      "The Physiocrats",
      "Adam Smith",
      "Theories of Productive and Unproductive Labour",
      "Necker",
      "Quesnay's Tableau Économique",
      "Linguet",
      "Herr Rodbertus. New Theory of Rent",
      "Notes on the History of the Discovery of the So-Called Ricardian Law of Rent",
      "Ricardo's and Adam Smith's Theory of Cost-Price",
      "Ricardo's Theory of Rent",
      "Tables of Differential Rent and Comment",
      "Ricardo's Theory of Rent (Conclusion)",
      "Adam Smith's Theory of Rent",
      "Ricardo's Theory of Surplus-Value",
      "Ricardo's Theory of Profit",
      "Ricardo's Theory of Accumulation and a Critique of it",
      "Ricardo's Miscellanea. John Barton",
      "Thomas Robert Malthus",
      "Disintegration of the Ricardian School",
      "Opposition to the Economists",
      "Ramsay",
      "Cherbuliez",
      "Richard Jones",
    ]),
  },
];

export const chapterCount = (v: Volume) => v.chapters.length;

/** Volumes I to III: Capital proper. Volume IV is the bonus. */
export const CAPITAL = VOLUMES.filter((v) => v.n !== 4);

export const TOTAL_CHAPTERS = CAPITAL.reduce((sum, v) => sum + chapterCount(v), 0);

export const ALL_CHAPTERS: Chapter[] = VOLUMES.flatMap((v) => v.chapters);

export const READY_CHAPTERS = ALL_CHAPTERS.filter((c) => c.status === "ready");

export const chapterKey = (c: Pick<Chapter, "vol" | "n">) => `${c.vol}-${c.n}`;

export const chapterHref = (c: Pick<Chapter, "vol" | "n">) => `/volume-${c.vol}/chapter-${c.n}`;

export const getVolume = (n: number) => VOLUMES.find((v) => v.n === n);

export const getChapter = (vol: number, n: number) => getVolume(vol)?.chapters.find((c) => c.n === n);

export const partOf = (c: Chapter) =>
  getVolume(c.vol)!.parts.find((p) => c.n >= p.chapters[0] && c.n <= p.chapters[1])!;

/** The nearest READY chapters before and after, in reading order. */
export function neighbours(c: Chapter) {
  const i = READY_CHAPTERS.findIndex((x) => x.vol === c.vol && x.n === c.n);
  return { prev: READY_CHAPTERS[i - 1], next: READY_CHAPTERS[i + 1] };
}
