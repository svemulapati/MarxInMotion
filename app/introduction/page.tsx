import type { Metadata } from "next";
import Link from "next/link";
import SiteBar from "@/components/SiteBar";
import { MarxsLife, MeetTinyTown } from "@/content/intro-animations";
import { GLOSSARY } from "@/lib/glossary";
import { VOLUMES, chapterHref } from "@/lib/kapital";

export const metadata: Metadata = {
  title: "Who was Karl Marx? · Marx in Motion",
  description: "Who Karl Marx was, why Capital still matters, and how this site explains it chapter by chapter.",
};

const BUILT = [
  { slug: "wage-labour-and-capital", year: "1849", who: "Marx's lectures to workers in Brussels, printed as newspaper articles", note: "A short warm-up" },
  { slug: "communist-manifesto", year: "1848", who: "Written by Marx and Engels for the Communist League", note: "The famous pamphlet" },
  { roman: "I", year: "1867", who: "Published by Marx himself", note: "33 chapters in English editions" },
  { roman: "II", year: "1885", who: "Put together by Engels from Marx's notes", note: "21 chapters" },
  { roman: "III", year: "1894", who: "Put together by Engels from Marx's notes", note: "52 chapters" },
  { roman: "IV", year: "1905 to 1910", who: "Marx's notes, first edited by Karl Kautsky", note: "Theories of Surplus-Value" },
];

export default function IntroductionPage() {
  const first = VOLUMES[0].chapters[0];
  return (
    <main className="flex-1 overflow-x-clip">
      <SiteBar />

      <header className="px-4 pt-16 pb-12 sm:px-5 sm:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] text-white/50">(Introduction)</p>
          <h1 className="mt-4 text-[40px] leading-[0.98] tracking-[-0.035em] sm:text-[64px]">
            Who was Karl Marx, and why does this book matter?
          </h1>
        </div>
      </header>

      <article className="paper mx-auto max-w-[760px] px-5 pt-8 pb-14 sm:px-10 sm:pt-12">
        <section>
          <p className="label">(Challenge)</p>
          <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">The Big Question</h2>
          <p className="big-question">Why would someone spend twenty years writing one giant book about money and work?</p>
          <div className="prose-kid mt-6">
            <p>
              Imagine a town where some people work very hard all day and stay poor, while others own the workshops and
              get richer every year. You might ask: where does the extra money come from? Is it fair? Will it always be
              like this?
            </p>
            <p>
              A man named Karl Marx asked those questions about the world he lived in, more than 150 years ago. He spent
              most of his life looking for the answers, and he wrote them down in a very long book called{" "}
              <em>Capital</em> (in German, <em>Das Kapital</em>).
            </p>
          </div>
        </section>

        <section className="pt-10">
          <p className="label">(Struggle)</p>
          <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">Marx&apos;s life, step by step</h2>
          <MarxsLife />
          <div className="prose-kid">
            <p>
              Marx lived when factories were new. Steam engines and machine looms were changing everything. Many
              families left farms for cities, and children as young as eight worked long hours in mills. Marx wanted to
              understand the rules of this new world, the way a scientist studies the rules of nature.
            </p>
          </div>
        </section>

        <section className="pt-10">
          <p className="label">(Reveal)</p>
          <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">Why the book matters</h2>
          <div className="prose-adult">
            <p>
              <em>Capital</em> tries to explain how capitalism works from the inside: what gives things their value,
              where profit comes from, why owners keep investing, why machines replace workers, and why the economy
              keeps swinging between booms and crashes. Its subtitle is &ldquo;A Critique of Political Economy&rdquo;,
              because Marx was arguing with the great economists before him, such as Adam Smith and David Ricardo.
            </p>
            <p>
              It became one of the most influential books ever written. It inspired workers&apos; movements, political
              parties and revolutions, and governments that called themselves Marxist. It has also been criticised from
              many sides, by economists who think its theory of value is wrong, and by people who point to what
              happened in countries that claimed to follow it. Both the influence and the criticism are part of the
              story.
            </p>
            <p>
              <strong>This site explains Marx&apos;s argument. It does not ask you to agree with it.</strong> Every
              chapter ends with &ldquo;What critics say&rdquo;, so you can see the strongest objections next to the
              ideas themselves.
            </p>
          </div>

          <h3 className="sub">Meet Tiny Town</h3>
          <div className="prose-kid">
            <p>
              Big ideas are easier to see in a small place. So every chapter happens in Tiny Town, with the same
              neighbours, and each idea builds on the last.
            </p>
          </div>
          <MeetTinyTown />

          <div className="eli5">
            <span className="label block text-white/50">(Say it like I&apos;m 5)</span>
            <p>
              Karl Marx wrote a giant book about why some people get rich and others stay poor. He thought the secret
              was hidden inside work. We are going to look for that secret together, in a tiny town.
            </p>
          </div>
        </section>

        <section className="pt-10">
          <p className="label">(Reinforce)</p>
          <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">How the book is built</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {BUILT.map((b) => (
              <div key={b.slug ?? b.roman} className="bg-[#f1f1f1] p-4">
                <span className="label block">({VOLUMES.find((v) => (b.slug ? v.slug === b.slug : v.roman === b.roman))!.label})</span>
                <span className="block text-[22px] leading-tight tracking-[-0.02em]">
                  {VOLUMES.find((v) => (b.slug ? v.slug === b.slug : v.roman === b.roman))!.title}
                </span>
                <span className="mt-2 block text-[14px] leading-snug text-black/70">
                  {b.year}. {b.who}. {b.note}.
                </span>
              </div>
            ))}
          </div>
          <div className="prose-adult mt-6">
            <p>
              Marx finished only Volume I. <strong>Volumes II and III were assembled by Friedrich Engels</strong> from
              Marx&apos;s manuscripts after his death, so they are rougher and sometimes unfinished. The bonus
              &ldquo;Volume IV&rdquo;, <em>Theories of Surplus-Value</em>, is a critical history of the economists who
              came before Marx. Marx planned something like it, but it is not part of <em>Capital</em> proper, and we
              treat it as a bonus.
            </p>
            <p>
              <strong>Chapter numbers differ between editions.</strong> For Volume I we follow the Penguin edition
              translated by Ben Fowkes (33 chapters in 8 parts). The older English translation by Samuel Moore and
              Edward Aveling uses the same numbers with different titles, while German editions group the same material
              into 25 chapters. For Volumes II and III we follow the standard English editions. Each chapter page says
              which part of the original it covers.
            </p>
          </div>

          <h3 className="sub">How every chapter works</h3>
          <ol className="grid gap-2 sm:grid-cols-2">
            {[
              ["Challenge", "A Big Question and a Tiny Town story that sets up a puzzle."],
              ["Struggle", "Make a guess, then watch animations that work through it."],
              ["Reveal", "The answer, first for a five-year-old, then for grown-ups, then in Marx's own terms."],
              ["Reinforce", "What critics say, a quick quiz, a recap, and the new words."],
            ].map(([k, v], i) => (
              <li key={k} className="grid grid-cols-[28px_1fr] border-t border-black/15 pt-2 text-[16px] leading-snug">
                <span className="text-black/40">{i + 1}.</span>
                <span>
                  <strong className="font-medium">{k}.</strong> {v}
                </span>
              </li>
            ))}
          </ol>

          <h3 className="sub">Two words to start with</h3>
          <dl className="grid gap-3 sm:grid-cols-2">
            {(["capital", "political-economy"] as const).map((id) => (
              <div key={id} className="bg-[#f1f1f1] p-3">
                <dt className="text-[15px] font-medium">{GLOSSARY[id].term}</dt>
                <dd className="mt-1 text-[14px] leading-snug text-black/70">{GLOSSARY[id].kid}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      <nav className="mx-auto grid max-w-[760px] grid-cols-2 gap-2 px-4 py-6 text-[13px] sm:px-0" aria-label="Chapters">
        <Link href="/" className="strip block py-2 no-underline">
          <span className="label block">(Previous)</span>
          Home
        </Link>
        <Link href={chapterHref(first)} className="strip block py-2 text-right no-underline">
          <span className="label block">(Next)</span>
          {VOLUMES[0].short}, Ch. {first.n}: {first.title}
        </Link>
      </nav>
    </main>
  );
}
