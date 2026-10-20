import type { ChapterContent } from "@/components/ChapterTemplate";
import { NotEssential, RamsaysPiles } from "./ch22-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can you find the right answer and still call it by the wrong name?",

  story: (
    <>
      <p>
        On the Old Thinkers&apos; Shelf sits a neat book from 1836 by George Ramsay, a scholar from Cambridge. Clerk Pim likes it
        at once, because it sorts everything into tidy piles.
      </p>
      <p>
        Pim tries it out on Mr. Moneybags&apos; workshop. Spindles in one pile. Cotton in the same pile. Sam&apos;s wages in a
        pile all by themselves. &ldquo;That&apos;s odd,&rdquo; says Pim. &ldquo;Everyone else puts the cotton with the wages.&rdquo;
      </p>
      <p>
        Then Pim reads further, and frowns. &ldquo;Ramsay says the wage pile only exists because workers are poor. Is he saying
        the boss is not really needed?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Why might it matter whether cotton is sorted with the machines or with the wages? Think about which of the three makes
      new value.
    </p>
  ),

  struggle: [<RamsaysPiles key="a" />],
  reveal: [<NotEssential key="b" />],

  eli5: "Ramsay sorted a workshop's costs into things and wages, almost exactly the way Marx later did. He even said a boss paying wages ahead is only needed because workers are poor. Marx thought he was very close to the truth but didn't go all the way.",

  grownUp: (
    <>
      <p>
        George Ramsay&apos;s <em>An Essay on the Distribution of Wealth</em> (Edinburgh, 1836) brings us back to the
        professional economists. Marx credits him with a real advance: he in fact makes the distinction between{" "}
        <strong>constant capital</strong> and <strong>variable capital</strong>. He keeps the old names, fixed and circulating,
        but defines fixed capital to include raw materials, seed, manure and fuel as well as machines, and circulating capital
        as nothing but the means of subsistence advanced to workers. That is <strong>Ramsay&apos;s distinction</strong>: really
        constant versus variable, wrongly labelled.
      </p>
      <p>
        From this Ramsay draws a striking conclusion. Fixed capital is needed for production in any society. But circulating
        capital, the wage advance, is &ldquo;a convenience rendered necessary by the deplorable poverty of the mass of the
        people&rdquo;. Labour is a condition of production; wage-labour is not. Marx says that here political economy itself
        declares capital, in this sense, to be not absolute but an &ldquo;accidental&rdquo;, historical condition of
        production, though Ramsay does not draw the full consequences.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      Ramsay nearly found Marx&apos;s own key distinction: between what passes on its value (machines and materials) and what
      buys the labour that adds new value (wages). And by noticing that the wage advance depends on workers&apos; poverty, he
      hinted that the capitalist form of production is historical rather than natural.
    </p>
  ),

  critics: [
    {
      who: "Modern accounting and economics",
      point: (
        <p>
          Today firms and economists still sort capital mainly by how long it lasts (fixed versus working capital), because
          that matters for finance and depreciation. Most economists see no special role for wages as the only source of new
          value, so they do not treat Ramsay&apos;s split as a discovery.
        </p>
      ),
    },
    {
      who: "Admirers of Ramsay",
      point: (
        <p>
          Some historians of economics agree with Marx that Ramsay was an original thinker who has been unfairly forgotten.
          They note he also wrote on profit and the role of the entrepreneur in ways later economists developed, quite apart
          from Marx&apos;s reading of him.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Where did Ramsay put the cotton?",
      options: ["With Sam's wages", "In his fixed capital pile, with the machines", "He left it out"],
      answer: 1,
      why: "Ramsay's fixed capital included raw materials too, so his piles were really things versus wages.",
    },
    {
      q: "Which of Marx's ideas did Ramsay come close to?",
      options: ["The trinity formula", "Constant and variable capital", "World money"],
      answer: 1,
      why: "Things that pass on their value, and wages that buy value-making labour.",
    },
    {
      q: "Why, according to Ramsay, are wages advanced by a capitalist at all?",
      options: ["Because machines need wages", "Because of the poverty of the mass of the people", "Because the law says so"],
      answer: 1,
      why: "He called the wage advance a convenience made necessary by workers' poverty, not something production itself needs.",
    },
  ],

  remember: [
    "Ramsay (1836) put machines AND materials in one pile, and wages alone in the other.",
    "That is Marx's constant and variable capital, under old names.",
    "Ramsay said the wage advance exists only because workers are poor.",
    "Marx: so even an economist hints that capital is historical, not eternal.",
  ],

  terms: ["ramsays-distinction"],

  source: (
    <p>
      Covers Volume IV (Theories of Surplus-Value, Part III), Chapter 22 (&ldquo;Ramsay&rdquo;), Progress Publishers edition
      as hosted on marxists.org. Marx&apos;s source: George Ramsay, <em>An Essay on the Distribution of Wealth</em>, Edinburgh,
      1836. Quoted phrases: &ldquo;the seed of the agriculturist, and the raw material of the manufacturer&rdquo;; &ldquo;a
      convenience rendered necessary by the deplorable poverty of the mass of the people&rdquo;; capital as an
      &ldquo;accidental&rdquo; historical condition. Ramsay&apos;s views on surplus-value and profit, also in the chapter, are not
      animated. Clerk Pim and the workshop numbers are this site&apos;s. Theories of Surplus-Value is not part of Capital proper;
      Karl Kautsky first edited it (1905 to 1910).
    </p>
  ),
};

export default chapter;
