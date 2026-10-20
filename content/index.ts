import type { ChapterContent } from "@/components/ChapterTemplate";
import v1c1 from "./v1/ch01";
import v1c2 from "./v1/ch02";
import v1c3 from "./v1/ch03";
import v1c4 from "./v1/ch04";

/** Written chapters, keyed "vol-n". Must match READY in lib/kapital.ts. */
export const CONTENT: Record<string, ChapterContent> = {
  "1-1": v1c1,
  "1-2": v1c2,
  "1-3": v1c3,
  "1-4": v1c4,
};
