import type { ChapterContent } from "@/components/ChapterTemplate";
import { DoubleTheDose, GoodDosesPoorDoses } from "./ch41-animations";

const chapter: ChapterContent = {
  bigQuestion: "If every farmer spends twice as much and wheat stays the same price, what happens to rent?",

  story: (
    <>
      <p>
        It has been a good year in Tiny Town. Every tenant farmer, Grandpa Ned included, decides to put twice as much
        money into his fields: twice the manure, twice the seed, twice the farmhands.
      </p>
      <p>
        The poorest field, the stony one on the hill, still has to be farmed, and its wheat still costs the same to grow.
        So the price of a sack at the market does not budge.
      </p>
      <p>
        Bea the banker does the sums for the Landlord. She looks up, surprised. &ldquo;Your rents have doubled,&rdquo;
        she says. &ldquo;And you didn&apos;t do a thing.&rdquo;
      </p>
      <p>Did Bea get her sums right? And would it always work out like that?</p>
    </>
  ),

  guess: (
    <p>
      If every extra sack of money grows just as much wheat as the first one, what happens to the extra on the good
      fields? And what if the extra money grows less than the first, or no more than the stony field does?
    </p>
  ),

  struggle: [<DoubleTheDose key="a" />],
  reveal: [<GoodDosesPoorDoses key="b" />],

  eli5: "When farmers put more money into their fields and wheat keeps the same price, the good fields make even more extra. If the extra money works as well as before, the rent grows just as fast. If the extra money only does as well as the poorest field, the rent stays the same.",

  grownUp: (
    <>
      <p>
        Chapters 41 to 43 work through <strong>differential rent II</strong> case by case. Here the price of production
        stays constant: the worst soil A still regulates the market price, at £3 a quarter.
      </p>
      <p>
        Case I: if the additional capital on the better soils yields only as much as the same capital on A, it earns only
        the average profit and no surplus-profit, so rent does not change. It is as if more acres of soil A had been
        added. Case II: if output rises in proportion to the capital on every soil, rent rises in proportion too.
        Marx&apos;s Table II doubles the capital per acre from £2½ to £5; output goes from 10 to 20 quarters, the rent in
        grain from 6 to 12 quarters and the money rent from £18 to £36. The rate of surplus-profit on each soil (120%,
        240%, 360% on B, C and D) stays the same.
      </p>
      <p>
        Case III: if the extra capital still makes surplus-profit but at a decreasing rate, rent rises, but less than the
        capital. In his Table III the second doses on B, C and D yield 1½, 2 and 3½ quarters, and the rents become £4½, £9
        and £16½. Case IV: if the extra capital yields more than the first, as with improvements, the rent per acre rises
        faster than the capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        With a constant price, rent on any piece of land depends on how much better each investment does than the
        investment on the worst soil. Rent can grow just from more capital being poured into the land, without any change
        in the price of food.
      </p>
      <p>Behind every case is the same rule: only the surplus-profit over the regulating price becomes rent.</p>
    </>
  ),

  critics: [
    {
      who: "Diminishing returns",
      point: (
        <p>
          Economists since Ricardo and West have stressed that extra doses of capital on the same land usually yield less
          and less. On that view Marx&apos;s Case III is the normal case, and Cases II and IV are exceptions. Marx did not
          deny diminishing returns, but he refused to treat them as a law of nature that always holds.
        </p>
      ),
    },
    {
      who: "Too many tables",
      point: (
        <p>
          Even sympathetic readers find these chapters hard going: page after page of tables that Marx left as draft
          manuscripts. Some argue the cases add little to the simple point of Chapter 39; others value them as an early,
          careful study of how investment and land quality interact.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Every farmer doubles his capital, output doubles on every soil, and the price stays £3 a quarter. What happens to the total rent of £18?",
      options: ["It stays £18", "It becomes £36", "It falls to £9"],
      answer: 1,
      why: "Marx's Table II: twice the capital on every soil, twice the output, and twice the rent.",
    },
    {
      q: "In Case I, the extra capital on soil C grows no more than the same capital on soil A. What happens to C's rent?",
      options: ["It doesn't change", "It doubles", "It disappears"],
      answer: 0,
      why: "That dose earns only the average profit and no surplus-profit, so there is nothing extra to turn into rent.",
    },
    {
      q: "Which soil keeps setting the price of wheat in this chapter?",
      options: ["Soil D, the richest", "Soil A, the worst still farmed", "Whichever soil gets the most capital"],
      answer: 1,
      why: "This chapter assumes a constant price of production, still regulated by the capital on soil A.",
    },
  ],

  remember: [
    "Here the price stays fixed, still set by the worst soil, A.",
    "Extra capital that does no better than soil A adds nothing to rent.",
    "Extra capital that does as well as the first doubles the rent when it doubles the capital.",
    "Extra capital that does less well still raises rent, but more slowly.",
    "Only the surplus-profit over the regulating price ever becomes rent.",
  ],

  terms: ["rent-bearing-soil"],

  source: (
    <p>
      Covers Volume III, Chapter 41 (&ldquo;Differential Rent II. First Case: Constant Price of Production&rdquo;). Volume
      III was assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; this site follows the
      English edition hosted on marxists.org. Marx&apos;s own figures: Table I (£2½ per acre, £3 a quarter, rents £0, £3,
      £6, £9, total £18); Table II (£5 per acre, 2, 4, 6, 8 quarters, rents £0, £6, £12, £18, total £36); Table III
      (second doses yielding 1½, 2 and 3½ quarters). In the marxists.org Table II, soil B&apos;s proceeds are printed as
      &ldquo;2&rdquo; where the arithmetic needs £12. Case IV&apos;s bars in animation 41.2 are made up.
    </p>
  ),
};

export default chapter;
