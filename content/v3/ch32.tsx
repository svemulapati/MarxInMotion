import type { ChapterContent } from "@/components/ChapterTemplate";
import { BorrowToBuyBorrowToPay, OnlyMoneyWillDo } from "./ch32-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does everybody suddenly want real coins when times get scary?",

  story: (
    <>
      <p>
        For months, Tiny Town has been buying and selling on promises. Tom gives Mr. Moneybags a note saying he will
        pay for the yarn next month. Mr. Moneybags hands the same kind of note to the Forge. Hardly anyone touches a
        coin.
      </p>
      <p>
        Then a rider gallops in with news: a great trading house in the city has gone bust. By lunchtime, the
        Ironmaster is at Mr. Moneybags&apos; door. &ldquo;No more notes,&rdquo; he says. &ldquo;Coins, today.&rdquo;
      </p>
      <p>
        Mr. Moneybags has a whole storeroom of yarn, but yarn is not coins. He runs to Bea&apos;s bank and finds a long
        queue already outside.
      </p>
      <p>Why does a town full of goods suddenly feel poor? And why does borrowing cost so much on the worst day?</p>
    </>
  ),

  guess: (
    <p>
      When things are calm, people borrow to buy cotton and machines. What do you think they are borrowing for in a
      crisis? And what happens to the price of yarn when everyone needs coins at once?
    </p>
  ),

  struggle: [<BorrowToBuyBorrowToPay key="a" />],
  reveal: [<OnlyMoneyWillDo key="b" />],

  eli5: "Most of the time people pay each other with promises. When a scare comes, nobody trusts promises and everyone wants real money at once. So they sell their things cheaply and borrowing becomes very expensive.",

  grownUp: (
    <>
      <p>
        Chapter 32 finishes Marx&apos;s look at <strong>money-capital and real capital</strong>. He stresses again that
        piling up loanable money is a different process from real accumulation: money becomes loan capital simply by
        being lent or deposited, and one deposit can turn into a loan somewhere else almost at once.
      </p>
      <p>
        The heart of the chapter is the crisis. In good times, people borrow in order to buy: cotton, machines, more
        workers. In a crisis, Marx says, &ldquo;everyone borrows only for the purpose of paying&rdquo;, to settle debts
        already made. Demand for loans and the <strong>rate of interest</strong> hit their maximum exactly when profit
        has all but disappeared.
      </p>
      <p>
        When credit stops, money &ldquo;suddenly stands as the only means of payment&rdquo;. Bills and promises that
        worked as money yesterday are refused today. To get cash, everyone sells, so commodities lose value all at
        once. Marx elsewhere calls this the sudden change of the credit system into a{" "}
        <strong>monetary system</strong>. In the story, that is the Ironmaster refusing notes and Mr. Moneybags&apos;
        yarn selling for half its worth.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        A credit system lets the economy run far ahead of the gold and coins that actually exist. That works while
        everyone trusts everyone. In a crisis the whole web of promises has to be turned back into real money at once,
        which is impossible, so the scramble for cash itself deepens the crash.
      </p>
      <p>
        For Marx, the high interest and falling prices of a crisis are symptoms, not the deepest cause: the crisis
        starts in production and trade, and the money panic is how it shows on the surface.
      </p>
    </>
  ),

  critics: [
    {
      who: "Lender-of-last-resort economists",
      point: (
        <p>
          Walter Bagehot (<em>Lombard Street</em>, 1873) argued that a central bank should lend freely in a panic, at
          a high rate, against good security. Modern central banks do this, and many economists, including Ben
          Bernanke, argue it can stop the scramble for cash Marx describes from turning into a collapse.
        </p>
      ),
    },
    {
      who: "Mainstream theorists of crises",
      point: (
        <p>
          Some economists see bank panics as starting in finance itself, through self-fulfilling runs (Diamond and
          Dybvig, 1983), rather than in production as Marx argues. On this view, a sound bank can fail just because
          people fear it will.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In a crisis, what does Marx say people borrow money for?",
      options: ["To buy new machines", "Only to pay debts they already owe", "To go on holiday"],
      answer: 1,
      why: "When goods won't sell but bills fall due, people borrow just to pay what they owe.",
    },
    {
      q: "When is the rate of interest at its highest?",
      options: ["In the middle of the crisis", "Just after the crisis, when things are quiet", "In steady, calm times"],
      answer: 0,
      why: "Everyone needs money at once and few will lend, so interest peaks in the crisis itself.",
    },
    {
      q: "Why do prices of yarn and other goods fall so fast in a crisis?",
      options: [
        "Because yarn suddenly became useless",
        "Because everyone sells at any price to get real money",
        "Because the government lowers them",
      ],
      answer: 1,
      why: "When only money can pay debts, people dump their goods to get it, so prices tumble together.",
    },
  ],

  remember: [
    "Money waiting to be lent is not the same as workshops growing.",
    "In good times people borrow to buy. In a crisis they borrow only to pay.",
    "Interest is highest in the crisis, just when profit has vanished.",
    "When trust in promises breaks, money becomes the only thing that can pay, and prices fall together.",
  ],

  terms: ["monetary-crisis"],

  source: (
    <p>
      Covers Volume III, Chapter 32 (&ldquo;Money-Capital and Real Capital. III&rdquo;). Volume III was put
      together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; Part V was the least finished
      part, and this chapter includes Engels&apos; own bracketed notes. The phrases &ldquo;everyone borrows only for the
      purpose of paying&rdquo; and money as &ldquo;the only means of payment&rdquo; are Marx&apos;s; &ldquo;the sudden
      change of the credit system into a monetary system&rdquo; is from Chapter 33. The yarn prices in 32.2 are example
      numbers, and Tiny Town belongs to this site. English text: the International Publishers edition on
      marxists.org.
    </p>
  ),
};

export default chapter;
