import type { ChapterContent } from "@/components/ChapterTemplate";
import { GrossAndNet, IncomeForOne } from "./ch49-animations";

const chapter: ChapterContent = {
  bigQuestion: "Could a whole town spend everything it made this year and still keep going?",

  story: (
    <>
      <p>
        After a good year, Tiny Town holds a feast. Mr. Moneybags is in a generous mood. &ldquo;Everything we made this year
        is somebody&apos;s income,&rdquo; he says. &ldquo;Wages for the workers, profit for me, rent for the Landlord. Let&apos;s
        enjoy it all!&rdquo;
      </p>
      <p>
        Grandpa Ned puts down his cup. &ldquo;If I ate every sack of wheat,&rdquo; he says, &ldquo;what would I plant in the
        spring?&rdquo;
      </p>
      <p>Everyone goes quiet. Is the whole year&apos;s product really just income? Or is some of it something else?</p>
    </>
  ),

  guess: (
    <p>
      When the weaving mill buys Mr. Moneybags&apos; yarn, is the yarn income or is it a cost? Does the answer change depending
      on who you ask?
    </p>
  ),

  struggle: [<IncomeForOne key="a" />],
  reveal: [<GrossAndNet key="b" />],

  eli5: "Part of what a town makes each year must go back into making things, like seed for next year's wheat. Only the rest can be wages, profit and rent. If you spend it all, there is nothing left to work with.",

  grownUp: (
    <>
      <p>
        Chapter 49 goes back to a mistake Marx has chased since Volume II: the dogma, running through political economy
        since Adam Smith, that the value of commodities finally resolves itself completely into wages, profit and rent.
        Trace the cotton back to the farmer and the spindle back to the smith, the argument goes, and every coin ends up as
        someone&apos;s income.
      </p>
      <p>
        Marx agrees that what is income for one person can be capital for another. The spinner&apos;s profit is inside the
        yarn, and for the weaver all of that yarn is raw material. But for society as a whole, the year&apos;s product still
        splits into c + v + s. The part equal to the constant capital used up must replace it, or production cannot carry on
        at the same scale.
      </p>
      <p>
        So he separates the <strong>gross product</strong> (everything reproduced, c + v + s), the{" "}
        <strong>gross income</strong> (wages + profit + rent, v + s) and the <strong>net income</strong> (the surplus-value
        alone). He calls the idea, found in the French economist Say, that the whole gross output could be the nation&apos;s
        net income &ldquo;the absurd dogma&rdquo; carried down since Smith.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      A society can only spend its new value. Everything it made also contains old value, from the materials and machines
      used up, and that part has to go back into production. Economists who say everything resolves into income lose sight
      of this, and so cannot explain how an economy reproduces itself year after year.
    </p>
  ),

  critics: [
    {
      who: "National accounts",
      point: (
        <p>
          Modern national income accounting, built in the 1930s and 1940s by Simon Kuznets, Richard Stone and others, also
          separates intermediate goods and depreciation from final income, so in this narrow point it agrees with
          Marx&apos;s criticism of Smith. But it counts profit and rent as payments for productive services, not as slices of
          unpaid labour.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "The weaving mill buys 30 coins of yarn. For the mill, what is that yarn?",
      options: ["Its income", "A cost: raw material, part of its capital", "A gift"],
      answer: 1,
      why: "What is income for the spinner can be capital for the next buyer. Marx agrees with this much.",
    },
    {
      q: "In a year worth 300, with 200 to replace what was used up, how much is the gross income?",
      options: ["300", "100", "50"],
      answer: 1,
      why: "Gross income is wages + profit + rent, the new value: 300 minus 200 is 100.",
    },
    {
      q: "Why does Marx call it absurd to treat the whole year's product as income?",
      options: [
        "Because income taxes are too high",
        "Because part of it must replace the materials and machines used up",
        "Because prices always fall",
      ],
      answer: 1,
      why: "Eat everything, as Grandpa Ned said, and there is nothing to plant next spring.",
    },
  ],

  remember: [
    "The year's whole product is c + v + s, not just wages, profit and rent.",
    "Income for one person can be capital for another, like yarn for the weaver.",
    "Gross income is wages, profit and rent. Net income is only the surplus.",
    "The used-up part must go back into production, or next year cannot start.",
  ],

  terms: ["gross-product", "gross-income"],

  source: (
    <p>
      Covers Volume III, Chapter 49 (&ldquo;Concerning the Analysis of the Process of Production&rdquo;), English
      translation as hosted on marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and
      published in 1894. The spinner and weaver example, the distinction between gross and net income, and the criticism of
      Say and of the dogma since Adam Smith are Marx&apos;s; the yarn figures follow this site&apos;s workshop numbers and the
      300 coin year in animation 49.2 is made up.
    </p>
  ),
};

export default chapter;
