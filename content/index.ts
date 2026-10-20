import type { ChapterContent } from "@/components/ChapterTemplate";
import v1c1 from "./v1/ch01";
import v1c2 from "./v1/ch02";
import v1c3 from "./v1/ch03";
import v1c4 from "./v1/ch04";
import v1c5 from "./v1/ch05";
import v1c6 from "./v1/ch06";
import v1c7 from "./v1/ch07";
import v1c8 from "./v1/ch08";
import v1c9 from "./v1/ch09";
import v1c10 from "./v1/ch10";
import v1c11 from "./v1/ch11";
import v1c12 from "./v1/ch12";
import v1c13 from "./v1/ch13";
import v1c14 from "./v1/ch14";
import v1c15 from "./v1/ch15";
import v1c16 from "./v1/ch16";
import v1c17 from "./v1/ch17";
import v1c18 from "./v1/ch18";

/** Written chapters, keyed "vol-n". Must match READY in lib/kapital.ts. */
export const CONTENT: Record<string, ChapterContent> = {
  "1-1": v1c1,
  "1-2": v1c2,
  "1-3": v1c3,
  "1-4": v1c4,
  "1-5": v1c5,
  "1-6": v1c6,
  "1-7": v1c7,
  "1-8": v1c8,
  "1-9": v1c9,
  "1-10": v1c10,
  "1-11": v1c11,
  "1-12": v1c12,
  "1-13": v1c13,
  "1-14": v1c14,
  "1-15": v1c15,
  "1-16": v1c16,
  "1-17": v1c17,
  "1-18": v1c18,
};
