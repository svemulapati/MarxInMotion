import type { ChapterContent } from "@/components/ChapterTemplate";
import { OverstonesRiddle, ThePriceOfBorrowing } from "./ch26-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does borrowing money suddenly cost more?",

  story: (
    <>
      <p>
        For years Bea&apos;s bank has been stuffed with spare coins. Bosses borrow cheaply and everyone is cheerful.
      </p>
      <p>
        Then the rain ruins the harvest. Tiny Town has to buy corn from far away, and the gold to pay for it leaves
        Bea&apos;s vault by the cartload. At the same time every boss in town seems to need a loan at once.
      </p>
      <p>
        Bea raises her interest, then raises it again. Mr. Moneybags storms in. &ldquo;Why should borrowing cost three
        times as much as last winter? My yarn isn&apos;t selling any better!&rdquo;
      </p>
      <p>Bea shrugs. Is she just being greedy, or is something bigger going on?</p>
    </>
  ),

  guess: (
    <p>
      What do you think happens to the price of borrowing when there is less spare money in the bank and more people
      want to borrow it? Does it have to follow how much profit the bosses are making?
    </p>
  ),

  struggle: [<ThePriceOfBorrowing key="a" />],
  reveal: [<OverstonesRiddle key="b" />],

  eli5: "Interest is the price you pay to borrow money. When there is little spare money and lots of people want it, the price goes up. In 1847 it went up even though the bosses were making less money.",

  grownUp: (
    <>
      <p>
        This chapter is mostly evidence from the British inquiries into the crisis of 1847, with Marx&apos;s comments in
        between. The question is what moves the rate of interest. Marx&apos;s answer is the supply of{" "}
        <strong>loanable money-capital</strong> against the demand for it.
      </p>
      <p>
        In 1847 a crop failure forced large imports of food, paid for in gold; England sent at least £9 million abroad.
        Dear corn and cotton, unsold sugar, railway speculation and overstocked foreign markets pushed up the demand for
        loans. The Bank
        of England&apos;s rate climbed from 3 to 3½% in January to 7 to 10% in November. Profits and prices meanwhile fell.
        So interest and profit can move in opposite directions.
      </p>
      <p>
        Marx mocks the banker Lord Overstone (Samuel Jones Loyd), who told Parliament that interest rose because
        &ldquo;the value of capital&rdquo; rose. To a lender, the value of money-capital simply <em>is</em> the rate of
        interest, so the explanation goes round in a circle. Overstone also wanted to show that the 1847 crisis had
        nothing to do with the bank law he had inspired; Marx thinks the fear of exhausting the Bank&apos;s reserve made the
        panic worse.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The price of borrowing is not a natural fact and not a reward that tracks profits. It is set by how much spare
        money lenders hold and how badly businesses need it, and it jumps around most violently in a crisis.
      </p>
      <p>
        Those swings hurt producers but can suit the people who deal in money. Marx quotes the banker Samuel Gurney
        admitting exactly that.
      </p>
    </>
  ),

  critics: [
    {
      who: "Keynes and liquidity",
      point: (
        <p>
          John Maynard Keynes (1936) also saw interest as a monetary price, set by how much people want to hold cash
          rather than by profits, which is close to Marx here. But he drew a different lesson: a central bank can and
          should manage it, which is what modern central banks do with their policy rate.
        </p>
      ),
    },
    {
      who: "Interest as a reward",
      point: (
        <p>
          Economists such as Irving Fisher explained the long-run rate of interest by people&apos;s willingness to wait
          and by how productive investment is. On that view the 1847 jumps were short-term disturbances, and over time
          interest does follow the returns on real capital.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's account, what mainly sets the rate of interest?",
      options: [
        "The supply of loanable money against the demand for loans",
        "The kindness of bankers",
        "The weather",
      ],
      answer: 0,
      why: "Interest is the price of borrowing, set by how much money is offered to lend and how much is wanted.",
    },
    {
      q: "What happened to interest and profits in England in 1847?",
      options: ["Both rose", "Interest rose while profits fell", "Both fell"],
      answer: 1,
      why: "Marx shows they moved in opposite directions: borrowing got dearer just as business got worse.",
    },
    {
      q: "Why did Marx laugh at Lord Overstone's explanation?",
      options: [
        "He spoke too quietly",
        "Saying interest rose because the value of money-capital rose means interest rose because interest rose",
        "He blamed the weather",
      ],
      answer: 1,
      why: "For a lender the value of money-capital is the rate of interest, so the explanation goes round in a circle.",
    },
  ],

  remember: [
    "Interest is the price of borrowing money-capital.",
    "Less spare money and more borrowers push that price up.",
    "In 1847 interest climbed from about 3% to as much as 10% while profits fell.",
    "Big swings in interest can hurt producers and help those who deal in money.",
  ],

  terms: ["loanable-money-capital"],

  source: (
    <p>
      Covers Volume III, Chapter 26 (&ldquo;Accumulation of Money-Capital. Its Influence on the Interest Rate&rdquo;), in
      the Moscow translation on marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts
      and published in 1894; Engels says this chapter needed &ldquo;a sifting of the references&rdquo;, and most of it
      quotes the parliamentary reports of 1847 to 1858. Figures from the text: the 1847 bank rate by month; at least £9
      million of gold paid abroad for food in 1847; Overstone&apos;s &ldquo;value of capital&rdquo;; Gurney&apos;s
      &ldquo;advantageous to dealers in money&rdquo;. The &ldquo;high&rdquo; and &ldquo;low&rdquo; labels and the
      shapes of the profit and interest lines are this site&apos;s illustration.
    </p>
  ),
};

export default chapter;
