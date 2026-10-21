import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChapterTemplate from "@/components/ChapterTemplate";
import { CONTENT } from "@/content";
import { READY_CHAPTERS, chapterKey, getChapter, getVolume, getVolumeBySlug } from "@/lib/kapital";

type Params = { volume: string; chapter: string };

export function generateStaticParams(): Params[] {
  return READY_CHAPTERS.map((c) => ({ volume: getVolume(c.vol)!.slug, chapter: `chapter-${c.n}` }));
}

function resolve({ volume, chapter }: Params) {
  const vol = getVolumeBySlug(volume)?.n ?? -1;
  const n = Number(/^chapter-(\d+)$/.exec(chapter)?.[1]);
  const c = getChapter(vol, n);
  const content = c && CONTENT[chapterKey(c)];
  return c && c.status === "ready" && content ? { chapter: c, content } : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const r = resolve(await params);
  if (!r) return {};
  return {
    title: `${getVolume(r.chapter.vol)!.short}, Ch. ${r.chapter.n}: ${r.chapter.title} · Marx in Motion`,
    description: r.content.bigQuestion,
  };
}

export default async function ChapterPage({ params }: { params: Promise<Params> }) {
  const r = resolve(await params);
  if (!r) notFound();
  return <ChapterTemplate chapter={r.chapter} content={r.content} />;
}
