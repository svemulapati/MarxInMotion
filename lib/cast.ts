/**
 * The people of Tiny Town. The same cast appears in every chapter so each idea
 * builds on the last. Mr. Moneybags is Marx's own character: Capital calls him
 * "our friend Moneybags" when money first sets out to become capital.
 */
export type CastId = "leo" | "ava" | "mia" | "sam" | "moneybags" | "ned" | "bea" | "tom";

export interface CastMember {
  id: CastId;
  name: string;
  job: string;
  color: string;
  /** What this person helps explain across the site. */
  teaches: string;
  hat?: "top" | "chef" | "cap" | "straw";
}

export const CAST: Record<CastId, CastMember> = {
  leo: {
    id: "leo",
    name: "Leo",
    job: "the weaver",
    color: "#2f6fd6",
    teaches: "weaves linen cloth, so he helps us see what makes things worth something",
    hat: "cap",
  },
  ava: {
    id: "ava",
    name: "Ava",
    job: "the tailor",
    color: "#d6452f",
    teaches: "sews coats and swaps them, so she shows us how trading works",
  },
  mia: {
    id: "mia",
    name: "Mia",
    job: "the baker",
    color: "#d99a00",
    teaches: "bakes bread before sunrise, so she reminds us there is always work behind a price",
    hat: "chef",
  },
  sam: {
    id: "sam",
    name: "Sam",
    job: "the worker",
    color: "#2a9d5b",
    teaches: "owns nothing but his two hands, so he shows us what it means to work for a wage",
  },
  moneybags: {
    id: "moneybags",
    name: "Mr. Moneybags",
    job: "the boss",
    color: "#1f1f1f",
    teaches: "has money and wants more of it, so he shows us how money becomes capital",
    hat: "top",
  },
  ned: {
    id: "ned",
    name: "Grandpa Ned",
    job: "the farmer",
    color: "#8a5a2b",
    teaches: "grows wheat on land he does not own, so he helps us understand rent",
    hat: "straw",
  },
  bea: {
    id: "bea",
    name: "Bea",
    job: "the banker",
    color: "#7b4bd6",
    teaches: "lends money and charges interest, so she helps us understand credit",
  },
  tom: {
    id: "tom",
    name: "Tom",
    job: "the shopkeeper",
    color: "#c2407f",
    teaches: "buys to sell again, so he helps us understand the merchant's share",
  },
};

export const CAST_LIST = Object.values(CAST);
