import type { ChapterContent } from "@/components/ChapterTemplate";
import { EightyDoTheWorkOfAHundred, OneClassFixedOneGrowing } from "./ch05-animations";

const chapter: ChapterContent = {
  bigQuestion: "When machines make work faster, who gets the time that is saved?",

  story: (
    <>
      <p>
        Back at the Old Thinkers&apos; Shelf, Sam pulls down a slim book by Jacques Necker. Necker was a Swiss banker who
        looked after the money of the King of France.
      </p>
      <p>
        Sam reads aloud: long ago it took a hundred workers to make what eighty make today. &ldquo;So everyone works less
        now?&rdquo; he asks hopefully.
      </p>
      <p>
        Grandpa Ned, browsing the farming books nearby, laughs gently. &ldquo;Read on, lad. See where the other twenty
        went.&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Better tools mean eighty people can do the work of a hundred. Guess what happens to the twenty, and whether the
      eighty get paid more.
    </p>
  ),

  struggle: [<EightyDoTheWorkOfAHundred key="a" />],
  reveal: [<OneClassFixedOneGrowing key="b" />],

  eli5: "Necker noticed that when work gets faster, workers still get paid only enough to live. The saved time goes into making fine things for rich people. Over many years the rich pile up more and more, and the gap grows.",

  grownUp: (
    <>
      <p>
        Jacques Necker (1732 to 1804) was a Genevan banker and France&apos;s finance minister. In books of 1775 and 1784
        he argued that improved tools let fewer workers produce the necessities, while wages stay at &ldquo;the simple
        necessities of life&rdquo;. The labour freed up goes into luxury goods for the owners, and because many luxuries
        are durable they accumulate &ldquo;from century to century&rdquo; in one class&apos;s hands.
      </p>
      <p>
        Marx praises Necker for tracing the wealth of the non-working classes, profit and rent, &ldquo;entirely to
        surplus-labour&rdquo;. He also notes that Necker is really describing <strong>relative surplus-value</strong>:
        not a longer working day, but a shorter time needed to produce the worker&apos;s own keep, so that more of the day
        is worked for the employer unpaid. Necker&apos;s limit, says Marx, is that he tells it as an antithesis of
        poverty and wealth, of luxury and need, rather than as the turning of labour into capital and the accumulation of
        capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Necker, a banker and minister, had already seen something important: that machines and better methods do not, by
        themselves, make workers better off when their pay is pinned to what they need to live. The time saved goes to
        whoever owns the tools.
      </p>
      <p>
        Marx keeps that insight and goes deeper. For him the key is not just luxury for the rich, but surplus-labour turned
        into more capital, which then shapes the whole of production.
      </p>
    </>
  ),

  critics: [
    {
      who: "Rising real wages",
      point: (
        <p>
          Since Necker&apos;s time, wages in industrial countries have risen far above bare subsistence, and many former
          luxuries became everyday goods. Critics say this shows productivity gains do reach workers over time. Defenders of
          the Necker and Marx view reply that wages rose mostly where workers organised and won laws, not automatically.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Necker's example, better tools mean eighty workers do the work of a hundred. What happens to the other twenty?",
      options: ["They retire happily", "They make luxuries for the rich", "They become owners"],
      answer: 1,
      why: "Necker says they must find other work, and their products add to the pleasures and luxuries of the rich.",
    },
    {
      q: "What does Necker say happens to the workers' pay when work gets faster?",
      options: ["It doubles", "It stays at what they need to live", "It disappears"],
      answer: 1,
      why: "For trades anyone can learn, Necker says pay stays tied to the necessary price of subsistence.",
    },
    {
      q: "What does Marx say Necker got right?",
      options: [
        "That profit and rent come from workers' surplus-labour",
        "That luxury comes from having more gold coins",
        "That rich and poor will always be equal",
      ],
      answer: 0,
      why: "Marx credits Necker with tracing profit and rent entirely to surplus-labour, while noting Necker framed it only as rich against poor.",
    },
  ],

  remember: [
    "Necker, a banker and French finance minister, saw that faster work did not raise workers' pay.",
    "The labour saved went into luxuries for the owners, and lasting luxuries piled up over generations.",
    "Marx credits Necker with seeing that profit and rent come from surplus-labour.",
    "But Marx says the deeper story is not just rich and poor: it is surplus turning into capital.",
  ],

  terms: ["necker"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Chapter 5 (&ldquo;Necker&rdquo;), Progress Publishers edition on marxists.org.
      Necker&apos;s hundred thousand and eighty thousand workers and his line about working today or dying tomorrow are
      quoted by Marx from Necker&apos;s Œuvres. The ten figures, Sam and Grandpa Ned are this site&apos;s. Marx wrote these
      notebooks in 1861 to 1863; Karl Kautsky first published them (1905 to 1910).
    </p>
  ),
};

export default chapter;
