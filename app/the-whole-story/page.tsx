import type { Metadata } from "next";
import Link from "next/link";
import Quiz from "@/components/Quiz";
import SiteBar from "@/components/SiteBar";
import { TheWholeStory } from "@/content/wrap-up-animations";
import { ALL_CHAPTERS, chapterHref, getChapter, getVolume, type VolumeNumber } from "@/lib/kapital";

export const metadata: Metadata = {
  title: "The whole story in one animation · Marx in Motion",
  description: "All four volumes of Capital in one Tiny Town animation, with a map of the big ideas and the strongest objections.",
};

/** The big ideas of each volume, each linked to the chapter that explains it. */
const MAP: { vol: VolumeNumber; ideas: { text: string; ch: number }[] }[] = [
  {
    vol: 1,
    ideas: [
      { text: "Things swap by the hidden work inside them: value.", ch: 1 },
      { text: "Workers sell their ability to work, labour-power.", ch: 6 },
      { text: "Part of every working day is unpaid: surplus-value.", ch: 9 },
      { text: "Growth brings machines and a crowd waiting for work.", ch: 25 },
      { text: "It began when people were pushed off the land.", ch: 27 },
    ],
  },
  {
    vol: 2,
    ideas: [
      { text: "Capital is a circle that must keep moving.", ch: 1 },
      { text: "Some capital moves fast, some slowly.", ch: 8 },
      { text: "The whole town's work has to fit together.", ch: 20 },
    ],
  },
  {
    vol: 3,
    ideas: [
      { text: "Surplus-value shows up as profit on everything spent.", ch: 1 },
      { text: "Competition evens out profit between trades.", ch: 9 },
      { text: "More machines push the rate of profit down.", ch: 13 },
      { text: "Interest is a slice of profit handed to the lender.", ch: 21 },
      { text: "Rent is the landowner's slice.", ch: 39 },
      { text: "Wages, profit and rent look like three springs.", ch: 48 },
    ],
  },
  {
    vol: 4,
    ideas: [
      { text: "Adam Smith saw profit as a deduction from work.", ch: 3 },
      { text: "Ricardo came closest, but mixed profit and surplus-value.", ch: 15 },
      { text: "Say's law and Marx's reply about crises.", ch: 17 },
      { text: "Some readers of Ricardo said workers should keep it all.", ch: 21 },
    ],
  },
];

export default function TheWholeStoryPage() {
  const last = getVolume(4)!.chapters.at(-1)!;
  return (
    <main className="flex-1 overflow-x-clip">
      <SiteBar />

      <header className="px-4 pt-16 pb-12 sm:px-5 sm:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] text-white/50">(Wrap-up) · All four volumes</p>
          <h1 className="mt-4 text-[40px] leading-[0.98] tracking-[-0.035em] sm:text-[64px]">The whole story in one animation</h1>
        </div>
      </header>

      <article className="paper mx-auto max-w-[760px] px-5 pt-8 pb-14 sm:px-10 sm:pt-12">
        <section>
          <p className="label">(Challenge)</p>
          <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">The Big Question</h2>
          <p className="big-question">Can you tell the whole of Capital in one go?</p>
          <div className="prose-kid mt-6">
            <p>
              You have walked through Tiny Town for {ALL_CHAPTERS.length} chapters. You met Leo and his linen, Sam and his long day, Mr.
              Moneybags and his growing workshop, Bea at the bank, Tom in his shop, and Grandpa Ned on the Landlord&apos;s
              field.
            </p>
            <p>
              The two short books at the start, <em>Wage-Labour and Capital</em> and <em>The Communist Manifesto</em>,
              gave you a first taste. Now let&apos;s put the big book together, in one go, from the very first swap to the
              very last thinker on the shelf.
            </p>
          </div>
        </section>

        <section className="pt-10">
          <p className="label">(Watch)</p>
          <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">Sixteen steps, four volumes</h2>
          <TheWholeStory />

          <div className="eli5">
            <span className="label block text-white/50">(Say it like I&apos;m 5)</span>
            <p>
              Marx said that bosses get rich from the part of a worker&apos;s day they don&apos;t pay for. That extra then
              gets shared out as profit, interest and rent. Lots of people agree with parts of this and lots don&apos;t,
              so think it over for yourself.
            </p>
          </div>
        </section>

        <section className="pt-10">
          <p className="label">(Map)</p>
          <h2 className="mb-5 text-[26px] leading-tight tracking-[-0.02em]">The four volumes on one page</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {MAP.map((m) => {
              const v = getVolume(m.vol)!;
              return (
                <div key={m.vol} className="bg-[#f1f1f1] p-4">
                  <span className="label block">(Volume {v.roman}){m.vol === 4 ? " Bonus" : ""}</span>
                  <span className="block text-[18px] leading-tight tracking-[-0.015em]">{v.title}</span>
                  <ol className="mt-3 space-y-1.5">
                    {m.ideas.map((idea) => (
                      <li key={idea.ch} className="grid grid-cols-[44px_1fr] text-[14px] leading-snug">
                        <Link href={chapterHref(getChapter(m.vol, idea.ch)!)} className="text-black/50">
                          Ch. {idea.ch}
                        </Link>
                        <span>{idea.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pt-10">
          <p className="label">(Reveal)</p>
          <h3 className="sub mt-0">What Marx was really saying</h3>
          <div className="prose-adult">
            <p>
              Across all three volumes, Marx makes one long argument. In a society where things are made to be sold, value
              comes from human labour. Workers are paid the value of their labour-power, which is less than the value their
              labour creates. The difference, surplus-value, is the source of profit, interest and rent. Capital is that value
              in motion, forced by competition to grow, and its growth brings machines, crises and a struggle over the
              working day.
            </p>
            <p>
              Marx thought this system was historical, not natural: it had a beginning and, he argued, it would have an end.
              Volume IV shows him working this out by arguing with the economists before him.
            </p>
          </div>

          <h3 className="sub">What critics say</h3>
          <ul className="space-y-4">
            <li className="prose-adult border-l-2 border-black pl-4">
              <span className="label block">(Theory)</span>
              <p>
                Most economists today explain prices by supply, demand and marginal choices, not by labour time, and see
                profit and interest as payment for risk, waiting or organising. Debates over the transformation problem and
                the falling rate of profit continue among Marx&apos;s readers themselves.
              </p>
            </li>
            <li className="prose-adult border-l-2 border-black pl-4">
              <span className="label block">(History)</span>
              <p>
                Living standards in many capitalist countries rose a great deal, and the predicted collapse did not come.
                States that claimed to follow Marx became one-party regimes, with famines and prisons. Marx&apos;s defenders
                reply that he analysed capitalism rather than designing those states, and that crises, inequality and
                concentration of business remain real.
              </p>
            </li>
          </ul>
        </section>

        <section className="pt-10">
          <p className="label">(Reinforce)</p>
          <h3 className="sub mt-0">Quick quiz</h3>
          <Quiz
            questions={[
              {
                q: "In Marx's story, where does the extra in M–C–M′ come from?",
                options: ["Clever buying and selling", "The unpaid part of the working day", "Gold mines"],
                answer: 1,
                why: "Volume I shows the swaps are fair. The extra comes from labour-power working longer than it takes to make its own value.",
              },
              {
                q: "Profit, interest, commercial profit and rent are, for Marx...",
                options: ["Four separate sources of wealth", "Slices of the same surplus-value", "Payments for nature's work"],
                answer: 1,
                why: "Volume III shows the surplus-value made in production being shared out among different owners.",
              },
              {
                q: "What is the bonus Volume IV about?",
                options: ["Marx's plan for the future", "Marx's history of earlier economists", "Engels' life story"],
                answer: 1,
                why: "Theories of Surplus-Value is Marx reading Steuart, Smith, Ricardo, Malthus and others, and showing what they saw and missed.",
              },
            ]}
          />

          <h3 className="sub">Remember this</h3>
          <ol className="space-y-2">
            {[
              "Volume I: value is hidden work, and surplus-value is the unpaid part of the working day.",
              "Volume II: capital is value in motion, and the whole economy has to fit together.",
              "Volume III: surplus-value is shared out as profit, interest and rent, which hides where it came from.",
              "Volume IV: Marx built his ideas by arguing with the economists before him.",
              "Marx's argument is one side of a big debate. Read the critics, and decide for yourself.",
            ].map((r, i) => (
              <li key={i} className="grid grid-cols-[28px_1fr] text-[17px] leading-snug">
                <span className="text-black/40">{i + 1}.</span>
                <span>{r}</span>
              </li>
            ))}
          </ol>

          <p className="mt-8 flex flex-wrap gap-2 text-[14px]">
            <Link href="/glossary" className="bg-black px-4 py-2.5 text-white no-underline">
              Browse all the words
            </Link>
            <Link href="/volume-1/chapter-1" className="px-4 py-2.5 ring-1 ring-black/30">
              Start again from Chapter 1
            </Link>
          </p>
        </section>
      </article>

      <nav className="mx-auto grid max-w-[760px] grid-cols-2 gap-2 px-4 py-6 text-[13px] sm:px-0" aria-label="Chapters">
        <Link href={chapterHref(last)} className="strip block py-2 no-underline">
          <span className="label block">(Previous)</span>
          Vol. IV, Ch. {last.n}: {last.title}
        </Link>
        <Link href="/" className="strip block py-2 text-right no-underline">
          <span className="label block">(Home)</span>
          Back to the start
        </Link>
      </nav>
    </main>
  );
}
