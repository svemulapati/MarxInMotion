import type { ChapterContent } from "@/components/ChapterTemplate";
import { DrPricesPenny, MoneyThatGrowsOnTrees, TheCeilingPriceForgot } from "./ch24-animations";

const chapter: ChapterContent = {
  bigQuestion: "Does money really grow by itself if you just leave it in the bank?",

  story: (
    <>
      <p>
        Mia has saved 20 coins from her bakery, and she puts them in Bea&apos;s bank. A year later there are 21. &ldquo;Look!&rdquo;
        she tells Sam. &ldquo;My coins had a baby coin while they slept!&rdquo;
      </p>
      <p>
        Sam laughs, but then he wonders. Bea never wove or spun anything. The coins sat in a chest. Yet they grew, the same
        way Grandpa Ned&apos;s pear tree grows pears.
      </p>
      <p>
        &ldquo;If money grows by itself,&rdquo; says Mia, &ldquo;I could leave it there forever and be the richest person in
        the world!&rdquo; Could she?
      </p>
    </>
  ),

  guess: (
    <p>
      Mia&apos;s coins grew while they &ldquo;slept&rdquo;. Did they really grow by themselves? And if money in a bank grew
      by itself forever, what would happen after a thousand years?
    </p>
  ),

  struggle: [<MoneyThatGrowsOnTrees key="a" />, <DrPricesPenny key="b" />],
  reveal: [<TheCeilingPriceForgot key="c" />],

  eli5: "When money earns interest, it looks as if money grows by itself, like pears on a tree. But the extra really comes from people's work somewhere else. Because there is only so much work in the world, money can't grow forever.",

  grownUp: (
    <>
      <p>
        In interest-bearing capital, Marx says, the relations of capital take &ldquo;their most externalised and most
        fetish-like form&rdquo;. The full circuit M&ndash;C&ndash;M&prime; at least shows a process, buying and selling and
        production. Interest shrinks it to <strong>M&ndash;M&prime;</strong>: money creating more money, with nothing in
        between.
      </p>
      <p>
        So it seems to be a property of money to yield interest, &ldquo;much as it is an attribute of pear-trees to bear
        pears&rdquo;. Capital appears as a thing that is its own source of increase, the &ldquo;automatic fetish&rdquo;. It
        no longer bears &ldquo;the birth-marks of its origin&rdquo; in surplus labour.
      </p>
      <p>
        Marx&apos;s example of this illusion is Dr. Richard Price and <strong>compound interest</strong>: a penny lent at 5%
        compound interest from the birth of Christ would by Price&apos;s time be worth more than 150 million earths of solid
        gold, against 7 shillings 4½ pence at simple interest. Prime Minister Pitt built his sinking-fund laws on the
        idea, starting in 1786. Marx replies that &ldquo;the identity of surplus-value and surplus-labour imposes a
        qualitative limit upon the accumulation of capital&rdquo;: the total working day, productivity and the population.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Interest makes capital look like a magic thing that breeds by itself, cut off from work and from the people who
        do it. That is the capital fetish at its height.
      </p>
      <p>
        Behind every coin of interest is surplus-value from production. Because surplus-value comes from labour, there is
        a real limit to how fast capital can grow, whatever the sums on paper say.
      </p>
    </>
  ),

  critics: [
    {
      who: "Interest as time and productivity",
      point: (
        <p>
          Mainstream economists say capital does grow, in a real sense: tools, machines and knowledge make labour more
          productive over time, and interest reflects that plus people&apos;s preference for having things sooner. Growth
          has carried on for two centuries with technology, not just more working days, pushing the ceiling up.
        </p>
      ),
    },
    {
      who: "Agreement on Price",
      point: (
        <p>
          Most economists agree with Marx that Price&apos;s sum was a fantasy: no economy can sustain compound growth of
          wealth forever, and Pitt&apos;s sinking fund was later abandoned. They explain the limit by real growth rates
          rather than by labour, but the warning about magical compound interest is widely shared.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What does Marx compare money that bears interest to?",
      options: ["A miser's chest", "A pear tree bearing pears", "A spinning wheel"],
      answer: 1,
      why: "Interest makes it look as natural for money to grow as for pear-trees to bear pears.",
    },
    {
      q: "What was Dr. Price's famous sum about?",
      options: ["Cotton prices", "A penny growing by compound interest for about 1,770 years", "The length of the working day"],
      answer: 1,
      why: "He claimed a penny at 5% compound interest from the year 1 would exceed 150 million earths of solid gold.",
    },
    {
      q: "Why, for Marx, can't capital grow by compound interest forever?",
      options: [
        "Banks close on Sundays",
        "Interest comes from surplus labour, and work is limited by the working day and the population",
        "Gold runs out",
      ],
      answer: 1,
      why: "Surplus-value is surplus labour, so it has a real, qualitative limit.",
    },
  ],

  remember: [
    "With interest, capital looks like M–M′: money making money, with nothing in between.",
    "It seems as natural as pears on a pear tree. Marx calls it the “automatic fetish”.",
    "Dr. Price's compound-interest penny shows the illusion; Pitt even built policy on it in 1786.",
    "Interest really comes from surplus labour, so it has a real limit.",
  ],

  terms: ["m-m-prime", "compound-interest"],

  source: (
    <p>
      Covers Volume III, Chapter 24 (&ldquo;Externalisation of the Relations of Capital in the Form of Interest-Bearing
      Capital&rdquo;), checked against the International Publishers edition on marxists.org. Volume III was
      assembled by Engels from Marx&apos;s manuscripts and published in 1894. Chapters 21 to 36 make up Part V, which Engels found the hardest to edit (&ldquo;no finished draft&rdquo;), though he says Chapters 21 to 24 were &ldquo;in the main, complete&rdquo;. Marx&apos;s own words and examples:
      &ldquo;most fetish-like form&rdquo;, the pear-trees, the &ldquo;automatic fetish&rdquo;, Dr. Price&apos;s penny (150
      million earths of gold; 7s 4½d at simple interest), Pitt and the sinking fund of 1786, and the &ldquo;qualitative
      limit&rdquo;. The shape of the curves and Mia&apos;s 20 coins are this site&apos;s own.
    </p>
  ),
};

export default chapter;
