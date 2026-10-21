import type { ChapterContent } from "@/components/ChapterTemplate";
import { MoreBreadSmallerShare, TwoEndsOfOneRope, YarnCutInThree } from "./ch07-animations";

const chapter: ChapterContent = {
  bigQuestion: "If Sam can buy more bread than before, is he catching up with Mr. Moneybags?",

  story: (
    <>
      <p>
        It is a lucky year in Tiny Town. New mills and new roads have made bread, cloth and candles much cheaper. Sam
        walks home from the market with a full basket and a grin. &ldquo;Six loaves!&rdquo; he tells Mia. &ldquo;I used to
        get three.&rdquo;
      </p>
      <p>
        Mia frowns. &ldquo;But didn&apos;t Mr. Moneybags cut your wage this spring?&rdquo; Sam nods. &ldquo;From 3 coins to
        2. But everything is so cheap that I&apos;m still better off.&rdquo;
      </p>
      <p>
        That evening Sam walks past the big house on the hill. Mr. Moneybags is having a new wing built, with tall
        windows and a garden. Sam looks at his basket, then at the new wing, and wonders: if I am doing better, why does
        it feel like he is running away from me?
      </p>
    </>
  ),

  guess: (
    <p>
      Sam&apos;s day makes the same 6 coins of new value as before. His wage went down from 3 to 2, but he can buy twice
      as much. Is he gaining on Mr. Moneybags, or falling behind? Can both be true at once?
    </p>
  ),

  struggle: [<YarnCutInThree key="a" />, <MoreBreadSmallerShare key="b" />],
  reveal: [<TwoEndsOfOneRope key="c" />],

  eli5: "Sam's wage and the boss's profit are two parts of the same pile that Sam's work makes. If one part grows, the other must shrink. So Sam can buy more bread and still get a smaller share of the pile.",

  grownUp: (
    <>
      <p>
        Marx starts from the selling price of what the worker makes. From the capitalist&apos;s side it falls into three
        parts: replacing the raw materials and the wear of tools and machines, replacing the wages, and a surplus left
        over, the profit. The first part only passes on value that already existed. Wages and profit are both taken out
        of the <strong>new value</strong> the worker adds. So, to compare them, we can treat them as two shares of the
        worker&apos;s product.
      </p>
      <p>
        That is why Marx separates kinds of wages. The <strong>nominal wage</strong> is the number of coins. The{" "}
        <strong>real wage</strong> is what those coins buy. The <strong>relative wage</strong> is the worker&apos;s share
        compared with the capitalist&apos;s. His own example: if all necessaries fall by two-thirds in price and the
        day&apos;s wage falls by only one-third, from 3 shillings to 2, the worker can buy more than before, yet the
        capitalist&apos;s profit has risen by a shilling. The real wage has risen while the relative wage has fallen.
      </p>
      <p>
        Hence his general law: wages and profit stand in <strong>inverse proportion</strong>. Profit rises as wages fall
        and falls as they rise. What about profits from cheating other capitalists, or from new machines? Marx answers
        that cheating among capitalists evens out, and that machines yield more products, not more exchange value: if a
        spinning machine makes 100 pounds of yarn an hour instead of 50, in the long run those 100 pounds exchange for no
        more than the 50 used to. You will meet this law worked out in full in Volume I, Chapters 17 and 18.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        A rising standard of living does not by itself mean that workers are catching up. What matters for the balance of
        power is the share. When profits grow faster than wages, the gap between worker and capitalist widens, and so
        does the capitalist&apos;s command over other people&apos;s labour, even while workers eat better.
      </p>
      <p>
        In Marx&apos;s words, the distribution of social wealth between capital and labour becomes &ldquo;still more
        unequal&rdquo;, and the power of the capitalist class over the working class grows.
      </p>
    </>
  ),

  critics: [
    {
      who: "Not a fixed pie",
      point: (
        <p>
          Many economists reject the idea of one fixed pile split between two sides. In their view, rising productivity
          makes the whole pile grow, so wages and profits can both rise for long stretches, and both did in industrial
          countries over the following century. Marx&apos;s defenders reply that his law is about shares of the new value,
          and that a growing pile is exactly the case he describes: more for the worker, a smaller share.
        </p>
      ),
    },
    {
      who: "Shares that stay put",
      point: (
        <p>
          Nicholas Kaldor (1961) listed a steady wage share as one of the stylised facts of growth: for long periods,
          wages did not lose ground to profits. Since about 1980, though, the wage share has fallen in many countries, so
          the question Marx raised here is still argued over.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Mr. Moneybags sells a day's yarn for 30 coins. Which parts come from the new value Sam's work adds that day?",
      options: ["The 24 coins for cotton and wear", "The wage and the profit", "All 30 coins"],
      answer: 1,
      why: "The 24 coins only pass on old value. The 3 coins of wage and 3 of profit are both new value made by Sam's work.",
    },
    {
      q: "Prices fall by two-thirds and Sam's wage falls from 3 coins to 2. What happened to his real wage and his relative wage?",
      options: ["Both fell", "Real wage rose, relative wage fell", "Both rose"],
      answer: 1,
      why: "He can buy twice as much bread, so his real wage rose. But his share of the 6 coins fell from 3 to 2: his relative wage fell.",
    },
    {
      q: "What is Marx's general law for wages and profit?",
      options: ["They always rise together", "They stand in inverse proportion", "They have nothing to do with each other"],
      answer: 1,
      why: "They are two shares of the same new value, so when one rises the other falls.",
    },
  ],

  remember: [
    "The price of a product replaces old value (materials and wear) and adds new value made by the worker.",
    "Wages and profit are two slices of that new value.",
    "Nominal wage is the coins, real wage is what they buy, relative wage is the worker's share.",
    "Wages and profit stand in inverse proportion: one rises as the other falls.",
    "A worker can eat better and still fall further behind.",
  ],

  terms: ["nominal-wage", "real-wage", "relative-wage", "inverse-wages-profit"],

  source: (
    <p>
      Covers Wage-Labour and Capital, Chapter 7 (&ldquo;The General Law that Determines the Rise and Fall of Wages and
      Profits&rdquo;), from Marx&apos;s 1847 Brussels lectures, printed in the Neue Rheinische Zeitung in April 1849, in
      the 1891 edition revised by Engels (who changed &ldquo;labour&rdquo; to &ldquo;labour-power&rdquo; where Marx meant
      the ability to work). Marx&apos;s own examples: the three parts of the selling price; necessaries falling by
      two-thirds while wages fall by one-third, from 3 shillings to 2; the spinning machine making 100 pounds instead of
      50. The 30-coin yarn, the loaves and Sam&apos;s basket are this site&apos;s story, using the workshop numbers from
      Volume I.
    </p>
  ),
};

export default chapter;
