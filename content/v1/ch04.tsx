import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheMiserAndTheCapitalist, TwoKindsOfCircle } from "./ch04-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why would anyone buy something just to sell it again?",

  story: (
    <>
      <p>
        One day a stranger arrives in Tiny Town with a fat bag of 100 coins. His name is Mr. Moneybags. He doesn&apos;t
        want a coat. He doesn&apos;t want bread. He doesn&apos;t want a Bible.
      </p>
      <p>
        He buys all of Leo&apos;s linen, loads it on a cart, and gets ready to sell it in the next town. Mia is puzzled.
        &ldquo;If you sell it for what you paid, what was the point?&rdquo; Mr. Moneybags smiles. &ldquo;Who said I would
        sell it for what I paid?&rdquo;
      </p>
      <p>
        Down the lane lives Old Silas, the town miser. He loves money too, maybe even more than Mr. Moneybags. But he
        keeps every coin locked in a chest under his bed.
      </p>
      <p>Two men who love money. Only one of them will end up with more. Which one, and why?</p>
    </>
  ),

  guess: (
    <p>
      Leo goes round his circle to get a coat. What does Mr. Moneybags want at the end of his circle? And which do you
      think grows faster: money locked in a chest, or money kept moving?
    </p>
  ),

  struggle: [<TwoKindsOfCircle key="a" />],
  reveal: [<TheMiserAndTheCapitalist key="b" />],

  eli5: "Most people sell things so they can buy other things they need. Mr. Moneybags buys things only to sell them for more money. The extra is called surplus-value, and chasing it never ends.",

  grownUp: (
    <>
      <p>
        Marx compares two circuits. <strong>C&ndash;M&ndash;C</strong>, selling in order to buy, starts and ends with
        commodities that are worth the same but are useful in different ways. Its aim is a use-value, so it ends when Leo
        wears his coat.
      </p>
      <p>
        <strong>M&ndash;C&ndash;M</strong>, buying in order to sell, starts and ends with money. Money is money, so the
        only difference there can be is in amount. The circuit only makes sense as{" "}
        <strong>M&ndash;C&ndash;M&prime;</strong>, where M&prime; is M plus an increase. Marx calls that increase{" "}
        <strong>surplus-value</strong>, and money that moves this way is capital. Here money is not spent. It is
        advanced, and it flows back.
      </p>
      <p>
        Because the end of each round is just a bigger sum of money, which could always be bigger still, the movement
        has no limit. The person who serves this movement is the <strong>capitalist</strong>. His aim is not any useful
        thing, and not even one single profit, but the endless process of profit-making. Marx sees the same formula in
        the merchant who buys to sell dearer, and in the lender whose money simply grows (M&ndash;M&prime;).
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capital is not a pile of money or a thing at all. It is a movement: value that goes out into the world and comes
        back bigger, again and again. Once that movement becomes the goal, there is no point at which there is enough.
      </p>
      <p>
        The formula leaves a puzzle that drives the next chapters. If things are swapped at their fair values, buying
        and selling should never make anyone richer overall. So where does the extra come from?
      </p>
    </>
  ),

  critics: [
    {
      who: "Profit as a reward",
      point: (
        <p>
          Most economists see profit as payment for something real: waiting instead of spending (Nassau Senior&apos;s
          &ldquo;abstinence&rdquo;, which Marx mocks later in the book), taking risks, organising a business, or the
          productivity of machines and tools (John Bates Clark). On these views, M&prime; being bigger than M is no
          mystery that needs a special explanation.
        </p>
      ),
    },
    {
      who: "Time preference",
      point: (
        <p>
          The Austrian economist Eugen von Böhm-Bawerk argued that people value things now more than the same things
          later. So money invested or lent today should come back larger tomorrow, and the extra comes from waiting
          and choice rather than from any hidden source in work.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Leo sells linen so he can buy a coat. Which circle is that?",
      options: ["C–M–C", "M–C–M′", "M–M′"],
      answer: 0,
      why: "He starts with a thing and ends with a different useful thing: commodity, money, commodity.",
    },
    {
      q: "Why would M–C–M make no sense if exactly 100 coins came back?",
      options: ["Coins wear out", "You would end with exactly what you started with", "Linen is too heavy to carry"],
      answer: 1,
      why: "Money is all the same stuff, so the only point of the circle is to end with more of it.",
    },
    {
      q: "What is the difference between Old Silas and Mr. Moneybags?",
      options: [
        "Silas keeps his money out of the market; Moneybags keeps throwing it back in",
        "Silas is richer",
        "There is no difference",
      ],
      answer: 0,
      why: "A hoard never grows. Capital grows only by staying on the move.",
    },
  ],

  remember: [
    "C–M–C: sell in order to buy. The goal is a useful thing, and the circle ends.",
    "M–C–M′: buy in order to sell for more. The goal is more money, and the circle never ends.",
    "The extra (M′ minus M) is surplus-value. Money that grows this way is capital.",
    "A miser hoards money. A capitalist keeps it moving.",
    "Puzzle for next time: if everything swaps at a fair value, where does the extra come from?",
  ],

  terms: ["general-formula", "surplus-value", "capitalist"],

  source: (
    <p>
      Covers Volume I, Chapter 4 (&ldquo;The General Formula for Capital&rdquo;). Marx&apos;s own points: the two
      circuits C&ndash;M&ndash;C and M&ndash;C&ndash;M; the increment he calls surplus-value; that the circulation of
      capital has no limits; the miser and the capitalist (quoted in animation 4.2); merchant and interest-bearing
      capital. Mr. Moneybags is Marx&apos;s character, though Marx first names him at the end of Chapter 5. Old Silas
      belongs to this site.
    </p>
  ),
};

export default chapter;
