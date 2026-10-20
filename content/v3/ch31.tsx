import type { ChapterContent } from "@/components/ChapterTemplate";
import { GoldFromFarAway, TwoPilesMoveApart } from "./ch31-animations";

const chapter: ChapterContent = {
  bigQuestion: "If the bank is stuffed with money, does that mean the town is doing well?",

  story: (
    <>
      <p>
        It is a quiet winter after a bad crash. Half of Tiny Town&apos;s workshops have shut their doors. Mr. Moneybags
        has stopped his spinning machines and put his spare coins in Bea&apos;s bank, where they sit and wait.
      </p>
      <p>
        Bea&apos;s vault is fuller than it has ever been. She offers loans for almost nothing, but hardly anybody comes
        to borrow.
      </p>
      <p>
        Tom the shopkeeper peeks in at the shining piles. &ldquo;Look at all that money!&rdquo; he says. &ldquo;Tiny Town
        must be richer than ever.&rdquo; Sam, who has had no work for six weeks, is not so sure.
      </p>
      <p>Who is right? Does a full bank mean a busy town?</p>
    </>
  ),

  guess: (
    <p>
      When do you think Bea&apos;s vault is fullest: when every workshop is humming, or just after a crash when
      many have stopped? And when will borrowing cost the most?
    </p>
  ),

  struggle: [<TwoPilesMoveApart key="a" />],
  reveal: [<GoldFromFarAway key="b" />],

  eli5: "Money waiting in a bank is not the same as work being done in a workshop. Often the bank is fullest just when the workshops are emptiest. So a big pile of money to lend can hide a town that is standing still.",

  grownUp: (
    <>
      <p>
        This chapter carries on a question from Chapter 30: does piling up <strong>loan capital</strong>, money
        waiting to be lent, go together with <strong>real accumulation</strong>, the growth of the workshops, machines
        and work itself? Marx&apos;s answer is: not necessarily, and sometimes the opposite.
      </p>
      <p>
        He points to two phases of the industrial cycle when loan capital piles up. First, just after a crisis, when
        production has shrunk: money that used to work in the workshops now lies idle and waits to be lent. Second,
        when business recovers and runs smoothly: firms pay each other quickly and lean on each other&apos;s credit,
        so they can borrow at very low interest. In the first case, Marx says, the heap of loanable money expresses a{" "}
        <strong>stagnation</strong> of industrial capital.
      </p>
      <p>
        Loan capital can also swell for reasons that have nothing to do with production. Marx&apos;s example is the
        new gold from Australia and California in 1852 and 1853, which was deposited in the Bank of England and
        exchanged for notes. More money became available to lend, yet not a single extra spindle was turning. In the
        story, that is Bea&apos;s bulging vault next to Mr. Moneybags&apos; unchanged workshop.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        You cannot read the health of production off the size of the money market. Money and real capital have their
        own movements, and in a crisis they pull apart sharply: money to lend is plentiful when nobody wants to
        invest, and scarce exactly when everybody needs it.
      </p>
      <p>
        Marx is also warning against a common illusion: that a society gets richer simply because more money is
        sitting in banks. For him, wealth grows only when more is actually produced.
      </p>
    </>
  ),

  critics: [
    {
      who: "Monetarists",
      point: (
        <p>
          Milton Friedman and Anna Schwartz (<em>A Monetary History of the United States</em>, 1963) argued that
          changes in the amount of money often come first and push production up or down, rather than simply
          following it. On their view, money is not just a passive mirror of the real economy.
        </p>
      ),
    },
    {
      who: "Financial-cycle economists",
      point: (
        <p>
          Hyman Minsky and later researchers agree with Marx that credit and real investment can drift far apart,
          but they model the swings with expectations and debt levels rather than labour values. Many economists
          today accept the pattern Marx describes without accepting his theory of where profit comes from.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Just after a crash, when many workshops have stopped, how full is Bea's vault likely to be?",
      options: ["Nearly empty", "Very full, with cheap loans", "Exactly the same as always"],
      answer: 1,
      why: "Idle money from stopped workshops ends up waiting to be lent, so the vault fills while work shrinks.",
    },
    {
      q: "When is interest at its highest, according to Marx?",
      options: ["Just after a crash", "During the crisis itself", "In calm, steady times"],
      answer: 1,
      why: "In the crisis everyone needs money at once and there is little to lend, so interest shoots up.",
    },
    {
      q: "In 1852 and 1853, new gold from Australia and California went into the Bank of England. What did it change?",
      options: [
        "It built many new workshops overnight",
        "It made more money available to lend, without more production",
        "It stopped all trade",
      ],
      answer: 1,
      why: "Marx's point: money to lend can grow for reasons that have nothing to do with real capital growing.",
    },
  ],

  remember: [
    "Loan capital is money waiting to be lent. Real capital is workshops, machines and work.",
    "The two often move apart: a full bank can sit next to idle workshops.",
    "Interest is low after a crash and highest during the crisis itself.",
    "New gold from abroad can swell the money to lend without one extra spindle turning.",
  ],

  terms: ["plethora-of-loan-capital"],

  source: (
    <p>
      Covers Volume III, Chapter 31 (&ldquo;Money-Capital and Real Capital. II&rdquo;), sections 1 and 2, on the
      transformation of money and revenue into loan capital. Volume III was put together by Friedrich Engels from
      Marx&apos;s manuscripts and published in 1894; Engels writes in his preface that Part V gave him the greatest
      difficulty, though this chapter &ldquo;possessed greater continuity&rdquo; than its neighbours. The two phases of
      the cycle and the Australian and Californian gold of 1852 and 1853 are Marx&apos;s own; the bar heights in 31.1
      are this site&apos;s illustration, and Bea and Tiny Town belong to this site. English text: the International
      Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
