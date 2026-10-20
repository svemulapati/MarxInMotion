import type { ChapterContent } from "@/components/ChapterTemplate";
import { FiveTripsSameProfit, ThePileUpNobodySees } from "./ch18-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does a busy shop add only a tiny bit to each price, while a slow one adds a lot?",

  story: (
    <>
      <p>
        Tom has a rival now. Across the square, old Mr. Crane runs a dusty shop that sells fine silk thread. A spool sits
        on his shelf for months before anyone buys it, and when someone does, Mr. Crane charges far more than he paid.
      </p>
      <p>
        Tom&apos;s yarn flies off his shelves every few weeks, and he adds only a few pennies to each skein. &ldquo;Crane
        must be getting rich,&rdquo; Tom grumbles. &ldquo;Look how much he adds on!&rdquo;
      </p>
      <p>
        But when Bea compares their books at the end of the year, both have earned almost exactly the same profit on the
        money they put in. How can that be?
      </p>
    </>
  ),

  guess: (
    <p>
      Tom sells his whole stock five times a year. Mr. Crane sells his once. If both want the same yearly profit on 100
      coins, which of them must add more to each price?
    </p>
  ),

  struggle: [<FiveTripsSameProfit key="a" />],
  reveal: [<ThePileUpNobodySees key="b" />],

  eli5: "A shopkeeper who sells his stock many times a year adds only a little to each price, because he earns it again and again. A slow shop must add more each time. And when merchants keep buying from each other, unsold goods can pile up until there is a crash.",

  grownUp: (
    <>
      <p>
        The turnover of merchant&apos;s capital is just M&ndash;C, C&ndash;M repeated: buy, sell, buy again. Unlike
        industrial capital, its turnover contains no production. Its speed depends on how fast industry produces and how fast
        consumers buy.
      </p>
      <p>
        Marx&apos;s example: with an average annual rate of 15%, a merchant with £100 who turns it over once a year sells at
        115. If he turns it over five times, he sells goods that cost 100 at 103, five times, so goods worth 500 sell for 515,
        still a profit of 15. If quick turnover brought a bigger yearly profit, merchant&apos;s capital would earn more than
        the general rate, which competition rules out. So the amount added to each price is in inverse proportion to the
        number of turnovers. &ldquo;Small profits and quick returns&rdquo; looks to the shopkeeper like a principle, but it
        follows from this law.
      </p>
      <p>
        Because merchant&apos;s capital is independent, it can run ahead of real consumption, buying on credit and creating
        a &ldquo;fictitious demand&rdquo;. At &ldquo;some particular imperceptible point&rdquo; goods lie unsold. That is why
        crises tend to break out first in wholesale trade and in banking rather than in retail, which deals with final
        consumption.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        A merchant&apos;s yearly profit is set by the general rate of profit on his capital, not by how much he adds to any
        one item. And merchant capital has a dangerous independence: it can pile up stock and credit far beyond what people
        are really buying, until the connection is &ldquo;violently restored through a crisis&rdquo;.
      </p>
    </>
  ),

  critics: [
    {
      who: "Profits are not that equal",
      point: (
        <p>
          Critics note that real shops and wholesalers do not all earn the same rate: brands, location, monopoly power and
          risk all make margins differ widely, and supermarkets that turn stock over fast are often among the most profitable
          businesses. Marx would reply that he is describing an average tendency enforced by competition, not every single
          shop, but the evidence for profit rates actually evening out is debated.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "The average rate is 15% a year. Tom has 100 coins and sells out five times a year. What does he add to each batch?",
      options: ["15 coins each time", "3 coins each time", "75 coins each time"],
      answer: 1,
      why: "Five trips at 3 coins each give 15 for the year: the same 15% on his 100.",
    },
    {
      q: "Why can't the quick shop earn a bigger yearly rate than everyone else for long?",
      options: [
        "Competition would push it back to the general rate of profit",
        "The law forbids quick shops",
        "Customers refuse to shop there",
      ],
      answer: 0,
      why: "Marx says a higher rate from fast turnover would conflict with the general rate of profit, so the mark-up per item shrinks instead.",
    },
    {
      q: "Where does Marx say crises tend to break out first?",
      options: ["In small shops selling to the public", "In wholesale trade and banking", "On farms"],
      answer: 1,
      why: "Merchants can keep buying from each other on credit after final demand stops, so the pile-up and the crash start in wholesale and banking.",
    },
  ],

  remember: [
    "A merchant's yearly profit follows the general rate of profit on his capital.",
    "The faster his money turns over, the less he adds to each price: small profits, quick returns.",
    "Merchants buying from merchants can create a fictitious demand.",
    "Crises tend to break out first in wholesale trade and banking.",
  ],

  terms: ["merchants-turnover"],

  source: (
    <p>
      Covers Volume III, Chapter 18 (&ldquo;The Turnover of Merchant&apos;s Capital. Prices&rdquo;), the last chapter in
      Part IV on commercial capital. Volume III was assembled by Friedrich Engels from Marx&apos;s manuscripts and
      published in 1894. The 15%, £100, 115, 103 and 515 figures are Marx&apos;s own; Mr. Crane and the chain of four
      traders in animation 18.2 are our illustrations of his description. Quotations follow the International
      Publishers / Progress edition on marxists.org.
    </p>
  ),
};

export default chapter;
