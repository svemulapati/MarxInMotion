import type { ChapterContent } from "@/components/ChapterTemplate";
import { AStrangeThingToSell, MoneyForHire, TheLongestCircle } from "./ch21-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why would someone pay you extra just to borrow your money for a while?",

  story: (
    <>
      <p>
        Mr. Moneybags wants to double the size of his mill, but he doesn&apos;t have enough coins. So one morning he puts on
        his best hat and visits Bea the banker.
      </p>
      <p>
        &ldquo;Lend me 100 coins for a year,&rdquo; he says, &ldquo;and I&apos;ll give you back 105.&rdquo; Bea agrees at once.
        She shakes his hand, and the coins go off to the mill.
      </p>
      <p>
        Sam is baffled when he hears about it. &ldquo;Bea doesn&apos;t spin, or weave, or even carry the yarn. She just sits
        and waits. Where do her extra 5 coins come from? And why would Moneybags happily pay them?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Moneybags pays 5 coins just to use Bea&apos;s money for a year. What could 100 coins do in his hands that they
      couldn&apos;t do in Bea&apos;s vault? Hold your answer, then press play.
    </p>
  ),

  struggle: [<MoneyForHire key="a" />, <TheLongestCircle key="b" />],
  reveal: [<AStrangeThingToSell key="c" />],

  eli5: "In a workshop, money can be used to make more money. So people will pay to borrow it, and that payment is called interest. The interest is really a small share of the profit that the workers' extra work made.",

  grownUp: (
    <>
      <p>
        Under capitalism, a sum of money gains a second use-value. Besides buying things, it can work as capital and
        bring in profit. Marx&apos;s example: if the average rate of profit is 20%, then whoever owns £100 owns the power to
        make £120 out of it. That makes money-capital a commodity, but a commodity &ldquo;sui generis&rdquo;, one of a
        special kind.
      </p>
      <p>
        When the owner lends the £100 for a year to someone who uses it as capital, the borrower may pay, say, £5 out of
        the £20 profit. That £5 is <strong>interest</strong>: just another name for a part of the profit handed over to
        the owner of the capital. Capital lent out this way is <strong>interest-bearing capital</strong>.
      </p>
      <p>
        Its path is M&ndash;M&ndash;C&ndash;M&prime;&ndash;M&prime;. The first M&ndash;M is the loan and the last M&prime;&ndash;M&prime; is
        repayment with interest. Neither is a sale: the lender doesn&apos;t receive an equivalent when the money leaves, and
        gets the same sum back later with an addition. What is &ldquo;sold&rdquo; is the money&apos;s use as capital. Calling
        interest the price of money-capital is, Marx says, &ldquo;an irrational form of price&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Lending money looks like a deal between two capitalists, the lender and the user, with nothing to do with
        workers. But the only reason the borrowed money comes back bigger is that it was used to buy labour-power and
        extract surplus-value. Interest is a share of that surplus-value.
      </p>
      <p>
        Marx rejects the idea that interest is fair by &ldquo;natural justice&rdquo;. Transactions are &ldquo;just&rdquo; in
        whatever way fits the system of production they belong to.
      </p>
    </>
  ),

  critics: [
    {
      who: "Interest as the price of waiting",
      point: (
        <p>
          Eugen von Böhm-Bawerk and Irving Fisher argued that interest exists because people prefer goods now to goods
          later, and because investment takes time. On this view a lender is paid for waiting and for risk, and interest
          would exist even in a world without wage labour.
        </p>
      ),
    },
    {
      who: "Lending without profit",
      point: (
        <p>
          Critics also point out that people borrow to buy homes or food, not only to run workshops, and still pay
          interest. Marx knew this and discusses such loans later (Chapter 36 on usury), but critics argue it shows
          interest is not only a slice of industrial profit.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's example, 100 coins used as capital make 20 profit, and the borrower pays 5 to the lender. What is the 5?",
      options: ["Rent", "Interest: a part of the profit", "A wage for the lender's work"],
      answer: 1,
      why: "Interest is just another name for the part of the profit paid to the owner of the money.",
    },
    {
      q: "Which path does interest-bearing capital follow?",
      options: ["C–M–C", "M–C–M′", "M–M–C–M′–M′"],
      answer: 2,
      why: "A loan at the start (M–M), the usual circle in the middle, and repayment with interest at the end.",
    },
    {
      q: "What does Bea really sell when she lends 100 coins?",
      options: ["The coins themselves, for good", "The coins' use as capital: their power to make profit", "Her own labour"],
      answer: 1,
      why: "She gets the same coins back. What she gave up for a year was their power to work as capital.",
    },
  ],

  remember: [
    "Under capitalism, money has a second use: it can work as capital and make profit.",
    "Lent out, it becomes interest-bearing capital, a very strange kind of commodity.",
    "Interest is a part of the profit, paid to the owner of the money.",
    "The path is M–M–C–M′–M′: lend, use, sell, repay with interest.",
  ],

  terms: ["interest-bearing-capital", "interest"],

  source: (
    <p>
      Covers Volume III, Chapter 21 (&ldquo;Interest-Bearing Capital&rdquo;), checked against the International
      Publishers edition on marxists.org. Volume III was assembled by Engels from Marx&apos;s manuscripts and
      published in 1894. Chapters 21 to 36 make up Part V, which Engels found the hardest to edit (&ldquo;no finished draft&rdquo;), though he says Chapters 21 to 24 were &ldquo;in the main, complete&rdquo;. Marx&apos;s own example: an average rate of profit of 20%, £100 yielding £20, and £5 paid as
      interest, shown here as coins. Also his: the &ldquo;sui generis&rdquo; commodity, the path M&ndash;M&ndash;C&ndash;M&prime;&ndash;M&prime;,
      interest as &ldquo;an irrational form of price&rdquo;, and his reply to Gilbart&apos;s &ldquo;natural justice&rdquo;.
      Ava&apos;s 5-coin coat is this site&apos;s own.
    </p>
  ),
};

export default chapter;
