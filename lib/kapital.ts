/**
 * The shape of Das Kapital: three volumes, each split into parts, each part a
 * run of chapters. Chapter numbers follow the standard English editions
 * (Vol. I: 33 chapters, Vol. II: 21, Vol. III: 52).
 */
export interface Part {
  n: number;
  title: string;
  /** First and last chapter in this part, inclusive. */
  chapters: [number, number];
}

export interface Volume {
  n: 1 | 2 | 3;
  roman: "I" | "II" | "III";
  title: string;
  /** One line a child could repeat back. */
  kidLine: string;
  parts: Part[];
}

export const VOLUMES: Volume[] = [
  {
    n: 1,
    roman: "I",
    title: "The Process of Production of Capital",
    kidLine: "Where does the extra money come from when things get made?",
    parts: [
      { n: 1, title: "Commodities and Money", chapters: [1, 3] },
      { n: 2, title: "Money Becomes Capital", chapters: [4, 6] },
      { n: 3, title: "Absolute Surplus-Value", chapters: [7, 11] },
      { n: 4, title: "Relative Surplus-Value", chapters: [12, 15] },
      { n: 5, title: "Absolute and Relative Surplus-Value", chapters: [16, 18] },
      { n: 6, title: "Wages", chapters: [19, 22] },
      { n: 7, title: "The Accumulation of Capital", chapters: [23, 25] },
      { n: 8, title: "So-Called Primitive Accumulation", chapters: [26, 33] },
    ],
  },
  {
    n: 2,
    roman: "II",
    title: "The Process of Circulation of Capital",
    kidLine: "How does money travel around and come back bigger?",
    parts: [
      { n: 1, title: "The Circuits of Capital", chapters: [1, 6] },
      { n: 2, title: "The Turnover of Capital", chapters: [7, 17] },
      { n: 3, title: "Reproduction of the Total Social Capital", chapters: [18, 21] },
    ],
  },
  {
    n: 3,
    roman: "III",
    title: "The Process of Capitalist Production as a Whole",
    kidLine: "Who gets which slice of the pie, and why does it shrink?",
    parts: [
      { n: 1, title: "Surplus-Value Becomes Profit", chapters: [1, 7] },
      { n: 2, title: "Profit Becomes Average Profit", chapters: [8, 12] },
      { n: 3, title: "The Falling Rate of Profit", chapters: [13, 15] },
      { n: 4, title: "Merchant's Capital", chapters: [16, 20] },
      { n: 5, title: "Interest and Credit", chapters: [21, 36] },
      { n: 6, title: "Ground-Rent", chapters: [37, 47] },
      { n: 7, title: "Revenues and Their Sources", chapters: [48, 52] },
    ],
  },
];

export const chapterCount = (v: Volume) => v.parts.at(-1)!.chapters[1];

export const TOTAL_CHAPTERS = VOLUMES.reduce((sum, v) => sum + chapterCount(v), 0);
