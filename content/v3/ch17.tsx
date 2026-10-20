import type { ChapterContent } from "@/components/ChapterTemplate";
import { TomsShopAssistant, WhereTomsSliceComesFrom } from "./ch17-animations";

const chapter: ChapterContent = {
  bigQuestion: "If Tom adds no value to the yarn, where does his profit come from?",

  story: (
    <>
      <p>
        Last chapter Sam asked Tom where his money came from, and Tom said, &ldquo;I add a little to the price.&rdquo; Sam
        has been thinking about it ever since.
      </p>
      <p>
        &ldquo;If you add a little on top, and Mia adds a little on top, and Ava adds a little on top,&rdquo; he says,
        &ldquo;then everyone pays more to everyone else and nobody is any richer. That trick can&apos;t work for the whole
        town.&rdquo;
      </p>
      <p>
        Tom scratches his head. He knows he really does end each year with more coins than he started with. So if not by
        adding on top, how?
      </p>
    </>
  ),

  guess: (
    <p>
      Suppose Tom sells the yarn at exactly what it is worth. Could he still make a profit? Think about the price he might
      pay Mr. Moneybags for it.
    </p>
  ),

  struggle: [<WhereTomsSliceComesFrom key="a" />],
  reveal: [<TomsShopAssistant key="b" />],

  eli5: "Tom gets his profit by buying yarn from the mill a little cheaper than it is worth, then selling it at its full worth. So his profit is a slice of the extra the mill workers made. His clerk's unpaid hours help him grab a bigger slice.",

  grownUp: (
    <>
      <p>
        Since merchant&apos;s capital produces no surplus-value, its profit must be a portion of the surplus-value produced
        by industrial capital. Marx asks how it gets that portion. The obvious answer, a nominal extra charge on top of value,
        is &ldquo;just an illusion&rdquo; when we look at all commodities together.
      </p>
      <p>
        His numbers: total industrial capital 720c + 180v = 900, with a rate of surplus-value of 100%, gives a product worth
        1,080 and a rate of profit of 20%. Now add 100 of merchant&apos;s capital, which demands the same rate. The 180 of
        surplus-value must cover 1,000 of capital, so the general rate is 18%. Industrialists sell to merchants at 900 + 162 =
        1,062; merchants sell at 1,062 + 18 = 1,080, which is the value. The merchant buys below value and sells at value,
        so <strong>commercial profit</strong> is a share of surplus-value, not a mark-up above it. Merchant&apos;s capital
        enters into forming the general rate of profit and lowers it.
      </p>
      <p>
        Marx then looks at commercial costs: offices, paper, postage and the wages of clerks. These are pure costs of
        circulation that create no value. Yet the clerk is a wage-worker whose day is partly unpaid, and that unpaid labour
        &ldquo;while it does not create surplus-value, enables him to appropriate surplus-value&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The merchant&apos;s profit is real, but it is a transfer, not a creation. Shops and traders get a slice of the
        surplus-value made by workers in production, in proportion to the capital they put in, so the general rate of profit
        is a little lower than it would be without them. And the clerks and shop workers, though they make no value, are
        exploited too: their unpaid hours are what lets the merchant claim his slice.
      </p>
    </>
  ),

  critics: [
    {
      who: "Who counts as productive?",
      point: (
        <p>
          Critics say the split between workers who create value (in mills) and workers who only help capture it (in shops
          and offices) is hard to draw and looks stranger as economies come to be dominated by services. Modern national
          accounts treat retail and wholesale margins as value added. Marxist scholars still debate where the line falls,
          and some (for example Anwar Shaikh and Ertuğrul Tonak in 1994) have tried to measure economies with it.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's example, the goods are worth 1,080. At what price do the mills sell them to the merchants?",
      options: ["1,080", "1,062", "1,100"],
      answer: 1,
      why: "The mills get their costs of 900 plus 18% profit, which is 162: a total of 1,062.",
    },
    {
      q: "The merchant sells at 1,080. Is he selling above the value of the goods?",
      options: ["Yes, he adds a mark-up", "No, 1,080 is exactly their value", "He sells below value"],
      answer: 1,
      why: "He bought below value and sells at value. His 18 is a share of the 180 of surplus-value.",
    },
    {
      q: "Why does adding merchant's capital lower the average rate of profit from 20% to 18%?",
      options: [
        "The same 180 of surplus-value now has to cover 1,000 of capital instead of 900",
        "Merchants destroy some of the goods",
        "Workers get paid more",
      ],
      answer: 0,
      why: "180 ÷ 900 is 20%, but 180 ÷ 1,000 is 18%. Merchant's capital shares in the surplus without adding to it.",
    },
  ],

  remember: [
    "Merchant's profit is a slice of the surplus-value made in production.",
    "The merchant buys below value and sells at value, not above it.",
    "Merchant's capital takes part in setting the average rate of profit, and lowers it a little.",
    "Shop clerks make no value, but their unpaid hours help the merchant capture his share.",
  ],

  terms: ["commercial-profit"],

  source: (
    <p>
      Covers Volume III, Chapter 17 (&ldquo;Commercial Profit&rdquo;). Volume III was assembled by Friedrich Engels from
      Marx&apos;s manuscripts and published in 1894. The 720c + 180v, 1,080, 18% and 1,062 figures are Marx&apos;s own;
      Lily the clerk and her hours in animation 17.2 are invented. Quotations follow the International Publishers /
      Progress edition on marxists.org.
    </p>
  ),
};

export default chapter;
