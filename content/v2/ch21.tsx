import type { ChapterContent } from "@/components/ChapterTemplate";
import { SavingUpToGrow, TheBalance, TheFirstIllustration } from "./ch21-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can a whole town keep growing bigger every year without tripping over itself?",

  story: (
    <>
      <p>
        Mr. Moneybags is not happy just to start again each year. He wants a bigger spinning mill. The Ironmaster wants
        a second furnace. Mia dreams of a bakery with three ovens.
      </p>
      <p>
        But a new furnace costs far more than one year&apos;s extra coins. So the Ironmaster starts saving. For three
        whole years he sells his iron and locks the coins away. Then, one spring, he spends the lot at once.
      </p>
      <p>
        That year, Tiny Town grows. The next year it grows again. Grandpa Ned watches the carts of new machines roll past
        and asks a sharp question: &ldquo;If everybody makes more, who is going to buy it all?&rdquo;
      </p>
      <p>Marx tried to answer Ned with a set of numbers. They are the last pages of Volume II.</p>
    </>
  ),

  guess: (
    <p>
      If the machine-makers grow faster than the bread-makers, what do you think happens? And if the bread-makers grow
      faster than the machine-makers? Does anyone in Tiny Town make sure the two keep in step?
    </p>
  ),

  struggle: [<SavingUpToGrow key="a" />, <TheFirstIllustration key="b" />],
  reveal: [<TheBalance key="c" />],

  eli5: "To grow, owners put part of their extra money back into more machines and more workers. Then the two kinds of workshop must grow in step, or things go unsold. Nobody is in charge of keeping them in step.",

  grownUp: (
    <>
      <p>
        Now Marx drops the idea that owners eat all their surplus-value. In <em>reproduction on an expanded scale</em>,
        part of the surplus is turned into new capital. But a new forge is lumpy and expensive, so surplus-value is
        first hoarded as <strong>potential money-capital</strong>. Across the economy some capitalists are hoarding,
        selling without buying, while others are expanding, buying without selling. The two flows must roughly
        match, and the process, Marx says, &ldquo;offers ever so many occasions for running abnormally&rdquo;.
      </p>
      <p>
        His <strong>first illustration</strong> starts from I. 4,000c + 1,000v + 1,000s and II. 1,500c + 750v + 750s,
        still 9,000 in all. Department I accumulates half its surplus: 400 as extra constant capital and 100 as extra
        variable capital. Department II buys the 100 of extra means of production and hires 50 more workers. Next
        year the product is 6,600 + 3,200 = 9,800, then 10,780, 11,858, 13,043, 14,348. In five years the capital
        grows from 7,250 to 11,566, as 100 to 160. A <strong>second illustration</strong> repeats the exercise with a
        higher share of constant capital (I. 5,000c + 1,000v + 1,000s; II. 1,430c + 285v + 285s).
      </p>
      <p>
        The key <strong>balance condition</strong> changes. With accumulation, I(v + s) must be greater than IIc,
        because Department I keeps part of its own product as new means of production. Marx works through what
        happens when I(v + ½s) is equal to, bigger than, or smaller than IIc. If IIc grows bigger than I(v + s),
        there is over-production in Department II that can be settled only by &ldquo;a great crash&rdquo;.
      </p>
      <p>
        Marx never finished this chapter. Engels printed the manuscript as Marx left it, and Volume II ends in the
        middle of a discussion of hoarding with three short words: &ldquo;They hoard it.&rdquo;
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capitalist growth is possible on paper: the numbers can be made to work year after year. But they only work if
        the two departments keep exactly the right proportions, and if savers and spenders keep roughly in step.
      </p>
      <p>
        In a planned economy someone could arrange that. Under capitalism, millions of separate owners each decide
        alone, so there are always chances for the balance to slip, for goods to go unsold, and for a crisis to
        follow.
      </p>
    </>
  ),

  critics: [
    {
      who: "Rosa Luxemburg",
      point: (
        <p>
          In <em>The Accumulation of Capital</em> (1913), the Marxist Rosa Luxemburg argued that Marx&apos;s schemes
          dodge a real problem: who buys the extra goods each year? She thought capitalism needed buyers outside it,
          such as peasants and colonies. Other Marxists, including Otto Bauer and Nikolai Bukharin, replied that
          capitalists themselves are the extra buyers when they invest. The argument still goes on.
        </p>
      ),
    },
    {
      who: "The optimistic readers",
      point: (
        <p>
          The Russian economist Mikhail Tugan-Baranovsky read the same schemes the opposite way in the 1890s: if the
          proportions can be kept, capitalism can grow without limit, even while workers&apos; consumption stays small.
          Later growth economists also found steady growth possible in models like these, while others note that
          Marx&apos;s own numbers jump about between illustrations, which makes them hard to read as a forecast.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "The Ironmaster sells his iron but buys nothing new, so coins pile up in his chest. What does Marx call that money?",
      options: ["Wages", "Potential money-capital", "Rent"],
      answer: 1,
      why: "It is surplus-value waiting until there is enough of it to work as new capital.",
    },
    {
      q: "In Marx's growing town, Department I's owners eat half their surplus. What happens to the other half?",
      options: ["It is thrown away", "It buys more machines and hires more workers", "It is given to Department II"],
      answer: 1,
      why: "400 becomes extra constant capital and 100 extra variable capital, so next year Department I makes more.",
    },
    {
      q: "What does Marx say happens if Department II builds more than Department I can buy?",
      options: ["Nothing changes", "Over-production, settled only by a great crash", "Department I starts baking bread"],
      answer: 1,
      why: "Goods in Department II pile up unsold. Marx says it can be adjusted only by a great crash.",
    },
  ],

  remember: [
    "To grow, I(v + s) must be bigger than II c, because Department I keeps part of its own product as new machines.",
    "Owners save up in hoards before they spend. Across the town, savers and spenders must roughly match.",
    "In Marx's first illustration, the town's capital grows from 7,250 to 11,566 in five years.",
    "Nothing guarantees the balance. Marx sees “ever so many occasions for running abnormally”.",
    "That is the end of Volume II: we followed capital round and round as it moves. Volume III asks how the surplus-value is shared out as profit, interest and rent.",
  ],

  terms: ["potential-money-capital", "balance-condition"],

  source: (
    <p>
      Covers Volume II, Chapter 21 (&ldquo;Accumulation and Reproduction on an Expanded Scale&rdquo;): accumulation in
      Departments I and II, the schematic presentation with Marx&apos;s first and second illustrations (all numbers
      copied from the text), and the supplementary remarks. Volume II was put together by Friedrich Engels from
      Marx&apos;s manuscripts; this last chapter is unfinished and stops in the middle of a point about hoarding. The
      marxists.org text prints one line of the first illustration as &ldquo;1,600c + 800v + 800v&rdquo;, where the
      sums require 800s; the animation uses 800s.
    </p>
  ),
};

export default chapter;
