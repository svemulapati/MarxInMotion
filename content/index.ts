import type { ChapterContent } from "@/components/ChapterTemplate";
import v1c1 from "./v1/ch01";

/** Written chapters, keyed "vol-n". Must match READY in lib/kapital.ts. */
export const CONTENT: Record<string, ChapterContent> = {
  "1-1": v1c1,
};
