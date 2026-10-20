import type { ChapterContent } from "@/components/ChapterTemplate";
import { ThreeGreatClasses, WhatMakesAClass } from "./ch52-animations";

const chapter: ChapterContent = {
  bigQuestion: "What makes a group of people a class?",

  story: (
    <>
      <p>
        On a quiet evening, everyone in Tiny Town gathers in the square. Sam stands with the other workers. Mr. Moneybags
        and the other bosses stand near the workshops. The Landlord stands by the gate to his fields.
      </p>
      <p>
        Tom the shopkeeper, Clerk Pim and the doctor wander between them, not quite sure where to stand. &ldquo;Which group
        am I in?&rdquo; asks Tom.
      </p>
      <p>
        It is a good question. Marx asked it too, on the very last page of <em>Capital</em>. And then the page ran out.
      </p>
    </>
  ),

  guess: (
    <p>
      Is a class just a group of people who earn their money the same way? Or is there more to it? Try to think of a group
      that earns money in one way but doesn&apos;t feel like a class.
    </p>
  ),

  struggle: [<ThreeGreatClasses key="a" />],
  reveal: [<WhatMakesAClass key="b" />],

  eli5: "Marx says modern society has three big groups: workers, bosses and landowners. He started to explain what makes a group a class. But he never finished, and the page just stops.",

  grownUp: (
    <>
      <p>
        The last chapter of Volume III is barely a page long. Owners of labour-power, owners of capital and landowners,
        living on wages, profit and ground-rent, are the three big <strong>classes</strong> of modern society, Marx writes.
        Even in England, the most developed case, the lines are blurred by middle and <strong>intermediate strata</strong>,
        though he calls this immaterial for his analysis. The trend of capitalist development, he says, is to separate the
        means of production from labour and concentrate them, turning labour into wage-labour and the means of production
        into capital.
      </p>
      <p>
        Then he asks what constitutes a class. The first answer, identity of revenues and their sources, does not hold up:
        by that rule physicians and officials would be two classes, and landowners would split into owners of vineyards,
        farms, forests, mines and fisheries. Then comes Engels&apos; note: &ldquo;Here the manuscript breaks off.&rdquo;
      </p>
      <p>
        So <em>Capital</em> ends not with a conclusion but with an open question. Readers have drawn the answer from the rest
        of the book: for Marx, classes are defined above all by their relation to the means of production, by who owns them
        and who must work for those who do.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      Capitalist society is built around three great classes, defined by what they own and how they get their income. The
      details are messy and in-between groups exist, but the main tendency is towards more people working for wages under
      larger and larger concentrations of capital. What exactly makes a class, Marx never finished explaining.
    </p>
  ),

  critics: [
    {
      who: "Max Weber",
      point: (
        <p>
          The German sociologist Max Weber, writing in the early 1900s, defined class by people&apos;s chances in the market,
          including skills and education, not only by ownership. He also added status and political power as separate kinds
          of social ranking. Many sociologists since have mixed Marx&apos;s and Weber&apos;s ideas.
        </p>
      ),
    },
    {
      who: "The new middle class",
      point: (
        <p>
          In the twentieth century managers, engineers, teachers and other professionals grew in number. Writers from Eduard
          Bernstein to later sociologists argued that this &ldquo;new middle class&rdquo; does not fit Marx&apos;s
          three-class picture. Marxists such as Erik Olin Wright replied by describing &ldquo;contradictory class
          locations&rdquo; between workers and owners.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which are Marx's three great classes?",
      options: [
        "Wage-labourers, capitalists and landowners",
        "Farmers, bakers and tailors",
        "Children, parents and grandparents",
      ],
      answer: 0,
      why: "They live on wages, profit and ground-rent respectively.",
    },
    {
      q: "Why does Marx doubt that the same kind of income is enough to make a class?",
      options: [
        "Because then doctors and officials would be classes too",
        "Because nobody has an income",
        "Because classes don't exist",
      ],
      answer: 0,
      why: "By that rule every occupation, and every kind of landowner, would be its own class.",
    },
    {
      q: "How does Capital, Volume III end?",
      options: ["With a long summary", "With a happy ending", "The manuscript breaks off mid-thought"],
      answer: 2,
      why: "Engels printed the note: “Here the manuscript breaks off.”",
    },
  ],

  remember: [
    "Marx names three great classes: wage-labourers, capitalists and landowners.",
    "In-between groups blur the lines, but he thinks the main trend is towards more wage-work.",
    "Sharing the same kind of income is not enough to make a class.",
    "Volume III stops mid-question: “Here the manuscript breaks off.”",
    "That is the whole of Capital, from one coat and some linen to the classes of a whole society. Thank you for coming this far with Tiny Town!",
    "Next, the bonus Volume IV, Theories of Surplus-Value: Marx arguing with the economists who came before him.",
  ],

  terms: ["classes", "intermediate-strata"],

  source: (
    <p>
      Covers Volume III, Chapter 52 (&ldquo;Classes&rdquo;), the whole of it, English translation as hosted on
      marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; the
      chapter ends with Engels&apos; note &ldquo;[Here the manuscript breaks off.]&rdquo; The examples of physicians,
      officials and owners of vineyards, farms, forests, mines and fisheries are Marx&apos;s; Tom, Clerk Pim and the doctor
      in the square are this site&apos;s.
    </p>
  ),
};

export default chapter;
