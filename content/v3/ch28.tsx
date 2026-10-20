import type { ChapterContent } from "@/components/ChapterTemplate";
import { GoodTimesBadTimes, OneNoteTwoJobs } from "./ch28-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is a coin in a worker's pocket different from a coin in a boss's till?",

  story: (
    <>
      <p>
        On Saturday Mr. Moneybags pays Sam his wages with a crisp 5-coin note. On Sunday Sam buys bread with it at
        Mia&apos;s bakery. On Monday Mia puts it in Bea&apos;s bank, and by Tuesday Mr. Moneybags has taken it out again to
        pay next week&apos;s wages.
      </p>
      <p>
        A visiting professor watches all this and announces: &ldquo;When the note is in Sam&apos;s pocket, it is mere
        currency. When it is in the boss&apos;s hands, it is capital. Two different kinds of money!&rdquo;
      </p>
      <p>Sam turns the note over. It looks exactly the same as it did yesterday. Is the professor right?</p>
    </>
  ),

  guess: (
    <p>
      If the very same note can pass from boss to worker to baker to bank, what do you think changes along the way: the
      note itself, or what each person is using it for?
    </p>
  ),

  struggle: [<OneNoteTwoJobs key="a" />],
  reveal: [<GoodTimesBadTimes key="b" />],

  eli5: "The same note can be spending money for one person and business money for another. It doesn't change, only the job it is doing changes. And in bad times the hard part is not wanting a loan but getting one.",

  grownUp: (
    <>
      <p>
        The banking writers Thomas Tooke and John Fullarton divided money into &ldquo;currency&rdquo; and
        &ldquo;capital&rdquo;. Marx says they mix several different things together. Money that passes between consumers
        and shopkeepers carries out the spending of <strong>revenue</strong>; money that passes between capitalists
        transfers capital. But both are acts of buying and paying, and the same note moves from one sphere to the other,
        as the 5-coin note does in Tiny Town. The real difference is between the money-form of revenue and the
        money-form of capital, not between currency and capital.
      </p>
      <p>
        Marx then follows how the two flows change over the business cycle. In prosperity, more wages and more spending
        mean more money in the retail sphere, while money flows back to capitalists smoothly. In a depression the
        spending sphere shrinks, but capitalists suddenly need money as a means of payment to meet debts.
      </p>
      <p>
        Fullarton thought the mark of a depression was a strong demand for loans. Marx replies that the demand for loans
        is high in good times too. What distinguishes the periods is that in prosperity the demand is easily met, while
        in a depression it meets great difficulties.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Money doesn&apos;t come in two different materials, one for workers and one for bosses. What makes money capital
        is the social role it plays: whether it is laid out to bring back more, or spent to live.
      </p>
      <p>
        And credit behaves very differently in booms and busts. When everyone is being paid on time, lending is easy. When
        payments stall, everyone needs money at once to settle debts, and that is exactly when it becomes hardest to get.
      </p>
    </>
  ),

  critics: [
    {
      who: "Modern money statistics",
      point: (
        <p>
          Today&apos;s central banks measure money by how easily it can be spent (cash, current accounts, savings), not by
          whether it serves as revenue or capital. Critics say Marx&apos;s distinction is hard to measure in practice;
          defenders reply that it explains why the same amount of money can mean very different things in a boom and a
          crisis.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam spends his wage at Mia's bakery. For Sam, what is that money?",
      options: ["Capital", "Revenue: money to live on", "A bill of exchange"],
      answer: 1,
      why: "Money spent to live on is revenue. For Mia, the same note then helps replace her capital.",
    },
    {
      q: "What does Marx say Tooke and Fullarton got wrong?",
      options: [
        "They thought there were two kinds of money, currency and capital, when it is the same money doing different jobs",
        "They forgot that gold is yellow",
        "They said banks don't exist",
      ],
      answer: 0,
      why: "The same note passes back and forth. What differs is whether it is spent as revenue or laid out as capital.",
    },
    {
      q: "According to Marx, what really changes for borrowers in bad times?",
      options: ["They stop wanting loans", "Loans become hard to get just when debts fall due", "Interest disappears"],
      answer: 1,
      why: "People want loans in good times too. In a depression the difference is how hard it becomes to get them.",
    },
  ],

  remember: [
    "The same note can be revenue for one person and capital for another.",
    "Marx: the difference is the job money does, not two kinds of money.",
    "In good times, money flows back smoothly and loans are easy.",
    "In bad times, everyone needs money to pay debts, and lending dries up.",
  ],

  terms: ["banking-school", "revenue-and-capital"],

  source: (
    <p>
      Covers Volume III, Chapter 28 (&ldquo;Medium of Circulation and Capital; Views of Tooke and Fullarton&rdquo;), in
      the Moscow translation on marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts
      and published in 1894; Engels says this chapter &ldquo;had to be re-arranged in places&rdquo;. Fullarton&apos;s
      phrase &ldquo;A demand for capital on loan and a demand for additional circulation are quite distinct things&rdquo;
      is quoted in the text. The 5-coin note, the professor and the bank window are this site&apos;s illustration;
      &ldquo;Banking School&rdquo; is historians&apos; name for Tooke and Fullarton, not Marx&apos;s.
    </p>
  ),
};

export default chapter;
