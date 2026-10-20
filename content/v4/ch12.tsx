import type { ChapterContent } from "@/components/ChapterTemplate";
import { ARicherMineOpens, ThreeMinesOnePrice } from "./ch12-animations";

const chapter: ChapterContent = {
  bigQuestion: "If a richer mine is found and coal gets cheaper, should the landowners get less rent?",

  story: (
    <>
      <p>
        Today the Old Thinkers&apos; Shelf in the Tiny Town library has a strange visitor: a stack of tables full of
        numbers, in Marx&apos;s own handwriting. Sam turns the pages. &ldquo;Coal mines,&rdquo; he says. &ldquo;Lots and
        lots of coal mines.&rdquo;
      </p>
      <p>
        Outside, there is news. Miners have found a rich new seam of coal behind the hill. Coal will be cheaper this
        winter. Grandpa Ned is pleased. &ldquo;Cheaper coal and better mines,&rdquo; he says. &ldquo;The landowners who
        own the old pits will surely get less rent now.&rdquo;
      </p>
      <p>
        That is what the famous economist David Ricardo would have said too. But Marx filled page after page with tables
        to test it. Was Ned right?
      </p>
    </>
  ),

  guess: (
    <p>
      A new, richer mine opens. Coal gets cheaper, the worst pit closes, and less money is spent on mining overall. Do
      you think the landowners&apos; total rent goes up, goes down, or stays the same?
    </p>
  ),

  struggle: [<ThreeMinesOnePrice key="a" />],
  reveal: [<ARicherMineOpens key="b" />],

  eli5: "Marx made tables of coal mines to see what happens to rent when things change. He found that coal can get cheaper and the landowners can still get more rent. So rent does not follow one simple rule.",

  grownUp: (
    <>
      <p>
        This chapter is mostly Marx&apos;s own tables, labelled A to E. He uses coal mines (he says a quarter of wheat
        could always be put in place of a ton of coal) to show how <strong>absolute rent</strong> and{" "}
        <strong>differential rent</strong> combine. In every table each class of mine gets the same capital and has the
        same make-up of capital, so each yields the same absolute rent, £10 on £100.
      </p>
      <p>
        Table A: three mines, I, II and III, each with £100, dig 60, 65 and 75 tons. The town needs 200 tons, so the
        worst mine, I, sets the market value at £2 a ton. Rents: £10 on I, £20 on II, £40 on III. That is £30 of absolute
        rent and £40 of differential rent, £70 in all. Marx sums up: absolute rent is the excess of value over cost-price;
        differential rent is the excess of market-value over a mine&apos;s individual value.
      </p>
      <p>
        Table B: a richer mine, IV, opens. Mine I shuts, half the capital leaves II, and II now sets a lower price of
        £1 11/13 a ton. Yet total rent rises to £94 3/13, on £250 instead of £300. The tables also follow the{" "}
        <strong>ascending and descending series</strong>: whether cultivation (or mining) moves to better or to worse
        land. Ricardo saw only the descending case, from better to worse. Marx shows the general law of rent covers
        &ldquo;a great multiplicity of combinations&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Rent has two layers. Absolute rent comes from landed property itself, because the product of land or mine can
        sell at its full value. Differential rent comes from the differences between better and worse land or mines.
      </p>
      <p>
        Once you separate the two, you can see that rent can rise when production moves to better land as well as to
        worse land. Ricardo&apos;s idea that rent only appears because farming is forced onto ever poorer soil is one
        case among many, not the law itself.
      </p>
    </>
  ),

  critics: [
    {
      who: "Ricardo's defenders",
      point: (
        <p>
          Ricardo&apos;s followers would say his descending story was a simplification, not a claim that nothing else
          could happen, and that his rule (rent is the difference from the margin) still explains Marx&apos;s tables.
          The real disagreement is over absolute rent: whether even the worst land or mine pays rent at all.
        </p>
      ),
    },
    {
      who: "Modern economics",
      point: (
        <p>
          Today economists treat rent on mines and land as a return to a scarce resource, set by supply and demand at the
          margin. Many agree with Marx that the margin can move either way, but most do not use his split into absolute
          and differential rent, which depends on his labour theory of value.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's Table A, which mine sets the price of coal?",
      options: ["Mine III, the richest", "Mine I, the hardest one the town still needs", "An average of all three"],
      answer: 1,
      why: "The town needs mine I's coal too, so the price must be what a ton from mine I is worth: £2.",
    },
    {
      q: "A richer mine opens and coal gets cheaper. What happened to total rent in Marx's Table B?",
      options: ["It fell to zero", "It went up, from £70 to £94 3/13", "It stayed exactly the same"],
      answer: 1,
      why: "Even with cheaper coal and less capital in mining, the better mines earned more differential rent.",
    },
    {
      q: "What is absolute rent, according to Marx?",
      options: [
        "The extra a better mine earns over a worse one",
        "The value of the product over its cost-price, which every mine yields",
        "A tax paid to the town",
      ],
      answer: 1,
      why: "Absolute rent is the gap between value and cost-price. Differential rent is the extra from being better than the worst.",
    },
  ],

  remember: [
    "Marx tested his theory of rent with tables of coal mines.",
    "The hardest mine still needed sets the price.",
    "Absolute rent: value over cost-price. Differential rent: market price over a mine's own value.",
    "Coal can get cheaper while total rent goes up.",
    "Rent can grow whether production moves to better land or to worse.",
  ],

  terms: ["rent-tables", "descending-series"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter XII (&ldquo;Tables of Differential Rent and Comment&rdquo;), as
      published by Progress Publishers and hosted on marxists.org. Marx&apos;s own figures: Table A (mines I, II, III with
      £100 each, 60, 65 and 75 tons, £2 a ton, rents of £10, £20, £40, total £70); Table B (mine IV with 92½ tons, II
      reduced to £50 and 32½ tons, price £1 11/13, rents £5, £28 6/13, £60 10/13, total £94 3/13 on £250). In the
      marxists.org table A, mine III&apos;s tonnage is printed as 70 and mine II&apos;s differential rent as 13; Marx&apos;s
      own text and totals give 75 tons and £10, which the page uses. Tables C, D and E and the later sections are not
      animated.
    </p>
  ),
};

export default chapter;
