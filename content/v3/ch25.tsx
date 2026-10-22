import type { ChapterContent } from "@/components/ChapterTemplate";
import { OnePromiseThreePayments, PaperForWind } from "./ch25-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can a piece of paper do the job of money?",

  story: (
    <>
      <p>
        Tom&apos;s shop is busy, but his coins are all tied up in stock. When Mr. Moneybags offers him a new batch of yarn,
        Tom has an idea. He takes a sheet of paper and writes: &ldquo;I will pay 30 coins in three months. Signed,
        Tom.&rdquo;
      </p>
      <p>
        Mr. Moneybags frowns at it. Then he smiles. He doesn&apos;t need coins today either. He needs cotton. So he signs
        the back of Tom&apos;s paper and pays the cotton dealer with it.
      </p>
      <p>
        By the end of the week the same sheet of paper has paid for yarn, cotton and a machine part, and not a single coin
        has moved. Over at her bank, Bea the banker is watching closely.
      </p>
      <p>Is this paper money? And what happens if one day nobody trusts it?</p>
    </>
  ),

  guess: (
    <p>
      Tom&apos;s promise has paid three people without any coins. What do you think has to be true for that to work? And
      what might happen if lots of people start writing promises with nothing real behind them?
    </p>
  ),

  struggle: [<OnePromiseThreePayments key="a" />],
  reveal: [<PaperForWind key="b" />],

  eli5: "Grown-ups often pay with a promise instead of coins, and the promise can be passed along to pay other people. Banks collect everyone's spare money and lend it out by buying these promises. It works while people trust the promises, and wobbles when they don't.",

  grownUp: (
    <>
      <p>
        Marx says a full account of credit is beyond his plan; he picks out only what matters for capitalism in general.
        He starts from Volume I: money as a <strong>means of payment</strong> already creates creditors and debtors. With
        trade, this grows into <strong>commercial credit</strong>. Goods are sold not for money but for a written promise
        to pay on a date, which Marx calls a <strong>bill of exchange</strong>. Passed on by endorsement, bills pay many
        debts before they fall due, and in the end cancel against each other. They are the real money of trade, and the
        base on which bank-notes rest.
      </p>
      <p>
        The other side of the <strong>credit system</strong> is banking. A bank gathers the reserve funds of businesses,
        the deposits of the rich, and the small savings of everyone else, turning many little sums into one money power.
        It lends by <strong>discounting</strong> bills and by advances against securities and goods. Its profit comes from
        borrowing at a lower rate of interest than it lends at. A bank-note, Marx says, is just a draft on a banker that
        anyone can hold.
      </p>
      <p>
        Most of the chapter is evidence from British inquiries into the crisis of 1847. Witnesses describe{" "}
        <strong>accommodation bills</strong> drawn only to pay other bills, merchants in the East India trade shipping
        goods just to raise money on them, and banks that could not tell good paper from empty paper until the crash.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Credit grows naturally out of trade: once things are bought now and paid later, promises begin to circulate as
        money. Banks then gather society&apos;s idle money and hand it to whoever will use it as capital.
      </p>
      <p>
        That makes the whole system faster and bigger, but it also builds a tall tower of paper on a small base of real
        money. In good times nobody can tell which paper stands for real goods and which stands for nothing, and in a
        crisis the difference suddenly matters.
      </p>
    </>
  ),

  critics: [
    {
      who: "Mainstream banking theory",
      point: (
        <p>
          Most economists see banks and credit as useful middlemen that move savings to the people best able to use them,
          letting firms grow faster than their own cash would allow. On this view the risks Marx describes are real but
          can be managed by regulation, deposit insurance and a central bank willing to lend in a panic.
        </p>
      ),
    },
    {
      who: "A changed world of money",
      point: (
        <p>
          Bills of exchange have almost vanished from everyday business. Today most money is bank deposits, created when
          banks lend. Some readers say this makes Marx&apos;s 1840s picture out of date; others reply that it confirms his
          point that credit, not gold, has become the money of trade.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Tom pays Mr. Moneybags with a signed promise to pay in three months. What is that paper called?",
      options: ["A bank-note", "A bill of exchange", "A share"],
      answer: 1,
      why: "A bill of exchange is a written promise to pay on a set date. It can be passed on to pay other debts.",
    },
    {
      q: "Bea pays Mr. Moneybags 29 coins today for a bill worth 30 coins in three months. What is she doing?",
      options: ["Discounting the bill", "Cheating him", "Printing money"],
      answer: 0,
      why: "Discounting means paying now for a promise due later and keeping the difference as interest.",
    },
    {
      q: "What made accommodation bills dangerous?",
      options: [
        "They were written in pencil",
        "They had no real sale of goods behind them",
        "Only banks could use them",
      ],
      answer: 1,
      why: "They were written just to raise money or pay off older bills. When trust broke, there was nothing behind them.",
    },
  ],

  remember: [
    "In trade, goods are often sold for a promise to pay later: a bill of exchange.",
    "Bills pass from hand to hand and settle many debts before any coin moves.",
    "Banks gather small savings into big piles and lend them by discounting bills.",
    "Paper with real goods behind it and paper with nothing behind it look the same until a crisis.",
  ],

  terms: ["bill-of-exchange", "credit-system", "discounting", "accommodation-bill"],

  source: (
    <p>
      Covers Volume III, Chapter 25 (&ldquo;Credit and Fictitious Capital&rdquo;), in the International Publishers edition on marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894.
      Engels writes that Part V gave him the most trouble, and that this chapter needed &ldquo;a sifting of the
      references&rdquo;; much of it is quotations from 1840s and 1850s parliamentary reports. Figures from the text:
      Leatham&apos;s £528,493,842 of bills in 1839; the Liverpool banker&apos;s &ldquo;drawn for produce or for
      wind&rdquo;. Tom&apos;s bill, the cotton dealer, the 29 coins and the 2% and 4% rates are this site&apos;s
      illustration.
    </p>
  ),
};

export default chapter;
