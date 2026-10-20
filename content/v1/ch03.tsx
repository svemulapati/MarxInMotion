import type { ChapterContent } from "@/components/ChapterTemplate";
import { HowManyCoins, LinenToBible, TheBrokenChain } from "./ch03-animations";

const chapter: ChapterContent = {
  bigQuestion: "What does money actually do all day?",

  story: (
    <>
      <p>
        Tiny Town uses gold coins now. One morning Leo decides to follow two coins around for a whole day, like a
        detective.
      </p>
      <p>
        The first thing he notices is in Tom&apos;s shop. Every tag says a price, &ldquo;2 coins&rdquo;, but there are no
        coins on the tags. The prices are just written down. Then he notices the coins themselves never sit still. They
        go from Ava to him, from him to Tom, from Tom to Grandpa Ned.
      </p>
      <p>
        At the end of the day, Ava says something new: &ldquo;Can I have the linen now and pay you on Friday?&rdquo; Leo
        agrees. Now the money hasn&apos;t moved at all, but he has already handed over his linen.
      </p>
      <p>Money seems to have many different jobs. How many? And could any of them go wrong?</p>
    </>
  ),

  guess: (
    <p>
      If Leo&apos;s two coins pass through four people&apos;s hands in one day, does Tiny Town need more coins than it
      has, fewer, or just enough? And what do you think happens if someone promises to pay on Friday and then
      can&apos;t?
    </p>
  ),

  struggle: [<LinenToBible key="a" />, <HowManyCoins key="b" />],
  reveal: [<TheBrokenChain key="c" />],

  eli5: "Money measures how much things are worth, and it carries things from hand to hand. Coins keep travelling while the things they buy get used up at home. When people buy now and pay later, one broken promise can knock over the next.",

  grownUp: (
    <>
      <p>
        Marx lists money&apos;s jobs one by one. First, it is the <strong>measure of value</strong>: gold lets every
        commodity show its value as a <strong>price</strong>. A price is imaginary money. Tom&apos;s tag needs no real
        gold on it. Prices can also drift away from values, and even things nobody made, like honour or a conscience,
        can be given a price.
      </p>
      <p>
        Second, money is the <strong>means of circulation</strong>. Leo&apos;s day follows the pattern{" "}
        <strong>C&ndash;M&ndash;C</strong>: linen, money, Bible. The first half, selling, is the risky part. Marx calls
        it the commodity&apos;s <em>salto mortale</em>, its daring somersault. Because selling and buying can now
        happen at different times and places, a crisis becomes possible. The goods drop out to be used, but the money
        keeps moving. How much money is needed? The total of all prices divided by the number of times each coin moves
        (the <strong>velocity of money</strong>). Marx insists that prices decide how much money is needed, not the
        other way round. Worn coins, and later paper notes, can stand in for gold as symbols.
      </p>
      <p>
        Third, money as money. It can be taken out of circulation and kept: <strong>hoarding</strong>. It can settle a
        debt after the goods have already moved: <strong>means of payment</strong>. Then a chain of debts can snap,
        which is what Marx calls a monetary crisis. And between countries it travels as plain gold:{" "}
        <strong>world money</strong>.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Money is not a neutral tool that sits on top of the economy. Once selling and buying come apart, and once
        payments are tied together in chains of credit, things can break down even when every single person did their
        job well. A coat that won&apos;t sell can bring down people who never met the tailor.
      </p>
      <p>
        Marx is careful here. In this chapter he only shows that crises are <em>possible</em>. Why they actually
        happen, again and again, is something he explains much later in the book.
      </p>
    </>
  ),

  critics: [
    {
      who: "The quantity theory",
      point: (
        <p>
          David Hume, and later Milton Friedman, argued the causes run the other way: put more money into an economy and
          prices rise. Marx argued against Hume in this very chapter. Today economists still disagree. Many accept
          Hume&apos;s direction in the long run, while others (post-Keynesians) agree with Marx that the amount of money
          adjusts to what trade needs.
        </p>
      ),
    },
    {
      who: "Gold is gone",
      point: (
        <p>
          Since 1971 no major currency has been tied to gold. Critics say this undermines Marx&apos;s idea that money
          must be a commodity at bottom. His defenders reply that his account of paper symbols and credit chains
          describes today&apos;s money better than his gold examples suggest.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Tom's price tag says “2 coins”. Does the tag need real gold on it to work?",
      options: ["Yes, two coins glued on", "No, a price only imagines the money", "Only on market days"],
      answer: 1,
      why: "A price is money in our heads. It measures value without any gold being there.",
    },
    {
      q: "Four things sell today for 2 coins each, and each coin changes hands 4 times. How many coins does Tiny Town need?",
      options: ["8 coins", "4 coins", "2 coins"],
      answer: 2,
      why: "8 coins of prices divided by 4 moves is 2 coins. That is Marx's own example.",
    },
    {
      q: "Ava can't pay Leo on Friday. Why does that hurt Grandpa Ned, who never sold her anything?",
      options: [
        "Ned sold Ava some wheat",
        "Leo needed Ava's money to pay Mia, who needed it to pay Ned",
        "Ned owns the bank",
      ],
      answer: 1,
      why: "The same coins were meant to settle every promise in the chain. When the first payment fails, the next ones fail too.",
    },
  ],

  remember: [
    "A price is money in your head. It measures value without any gold on the tag.",
    "Selling is the risky part. Marx calls it the commodity's somersault.",
    "Things leave the market to be used. Money stays in it and keeps travelling.",
    "Money needed = total prices ÷ how often each coin moves.",
    "When goods are bought on promises, one unpaid debt can topple a whole chain.",
  ],

  terms: ["price", "c-m-c", "means-of-circulation", "velocity-of-money", "hoarding", "means-of-payment", "world-money"],

  source: (
    <p>
      Covers Volume I, Chapter 3 (&ldquo;Money, or the Circulation of Commodities&rdquo;), all three sections: the
      measure of values; the means of circulation; and money (hoarding, means of payment, world money). Marx&apos;s own
      examples: the weaver sells linen for £2 and buys a family Bible, and the Bible seller spends the £2 on brandy
      (cider here); the quantity rule with £8 of prices and four moves of the coins. Both translations keep Marx&apos;s
      phrase <em>salto mortale</em>.
    </p>
  ),
};

export default chapter;
