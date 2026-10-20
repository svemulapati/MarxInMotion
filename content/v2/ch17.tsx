import type { ChapterContent } from "@/components/ChapterTemplate";
import { FiveHundredInSixHundredOut, NedsFirstYear } from "./ch17-animations";

const chapter: ChapterContent = {
  bigQuestion: "If bosses put in 500 coins and want 600 back, where do the extra coins come from?",

  story: (
    <>
      <p>
        One evening Bea the banker is doing sums for the whole of Tiny Town. She adds up every coin the bosses spent on
        cotton, tools and wages this year: 500. Then she adds up the value of everything their workshops made: 600.
      </p>
      <p>
        &ldquo;That&apos;s odd,&rdquo; she says to Tom. &ldquo;If the goods are worth 600, buyers have to pay 600. But
        the bosses only put 500 coins into the town. Where are the other 100 coins supposed to come from?&rdquo;
      </p>
      <p>
        Tom shrugs. &ldquo;They just buy from each other, don&apos;t they?&rdquo; Bea shakes her head. &ldquo;That only
        moves the same coins around. It doesn&apos;t make new ones.&rdquo;
      </p>
      <p>The cleverest economists of Marx&apos;s time could not answer Bea&apos;s question. Can you?</p>
    </>
  ),

  guess: (
    <p>
      The bosses advanced 500 coins as capital and now want to sell goods worth 600. Think about what else the bosses do
      with money during the year, apart from running their workshops. Could that be the answer?
    </p>
  ),

  struggle: [<FiveHundredInSixHundredOut key="a" />],
  reveal: [<NedsFirstYear key="b" />],

  eli5: "Bosses don't only spend money on their workshops, they also spend it on their own food and clothes. That spending puts extra coins into the town. Those same coins come back to them when they sell the extra things their workers made.",

  grownUp: (
    <>
      <p>
        This chapter follows the <strong>circulation of surplus-value</strong>. Take the whole capitalist class as one.
        It advances £500 of circulating capital and throws commodities worth £600 into circulation. How can it keep
        drawing £600 out when it only puts £500 in? Marx notes that neither Thomas Tooke nor anyone else had answered
        this.
      </p>
      <p>
        Answers like &ldquo;A buys from B and B buys from C&rdquo; fail, because they assume the money they are meant to
        explain. Marx&apos;s answer: it is the capitalist class itself that throws in the money that realises the
        surplus-value, but not as capital. It spends it as revenue, on its own consumption.
      </p>
      <p>
        His example is a farmer starting out. He advances £5,000 (£4,000 for means of production, £1,000 for
        labour-power) and also spends £1,000 from his own pocket on living through the first year. At a rate of
        surplus-value of 100% the harvest is worth £6,000. Selling it, he recovers his £5,000 of capital and £1,000 of
        surplus-value, and that last £1,000 is realised with the money he himself put into circulation as a consumer.
        From the second year he lives on surplus-value already made.
      </p>
      <p>
        For the total stock of money to grow, as accumulation needs, new money must come from somewhere: from gold
        production (whose workers are paid in the very gold they dig), from hoards, and above all from credit. Marx
        calls it absurd to think production on today&apos;s scale could run on metal coin alone.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        There is no mystery about where the money for surplus-value comes from. Bosses spend money on their own living
        before their profits arrive, and that spending is what lets their surplus-value turn back into money. The
        money circles round the capitalist class and returns to it.
      </p>
      <p>
        The real puzzle was never about money. It was about where the extra value comes from in the first place, and
        Volume I answered that: from the unpaid labour inside the goods.
      </p>
    </>
  ),

  critics: [
    {
      who: "Rosa Luxemburg",
      point: (
        <p>
          The Marxist economist Rosa Luxemburg (<em>The Accumulation of Capital</em>, 1913) was not satisfied. When
          capital keeps growing, she asked, who buys the ever larger surplus? She concluded that capitalism needs buyers
          outside it, in non-capitalist regions and colonies. Many other Marxists, such as Nikolai Bukharin, replied that
          Marx&apos;s schemes in this volume already show growth without outside buyers.
        </p>
      ),
    },
    {
      who: "Modern money",
      point: (
        <p>
          Today most money is created by banks when they lend, not dug out of gold mines. Economists who stress this
          &ldquo;endogenous money&rdquo; say the question of where the extra money comes from is answered by credit
          expanding with trade. Marx points to credit too, but he still treats gold as the base of money.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "The bosses advance 500 coins and sell goods worth 600. Where does Marx say the extra 100 coins mostly come from?",
      options: [
        "From the workers' savings",
        "From the bosses' own spending on their living",
        "From cheating the buyers",
      ],
      answer: 1,
      why: "The capitalist class throws that money into circulation itself, as revenue spent on consumption, not as capital.",
    },
    {
      q: "Why doesn't 'A buys from B, B buys from C' solve the puzzle?",
      options: [
        "Because it only moves money that is already there",
        "Because A and B are rivals",
        "Because buying is against the rules",
      ],
      answer: 0,
      why: "Marx says such answers assume the very money whose existence they are supposed to explain.",
    },
    {
      q: "Grandpa Ned advances 5,000 and spends 1,000 on living in his first year. He sells his harvest for 6,000. How much of it is surplus-value?",
      options: ["5,000", "1,000", "6,000"],
      answer: 1,
      why: "5,000 replaces his capital; 1,000 is surplus-value, realised with the money he spent as a consumer.",
    },
  ],

  remember: [
    "The capitalist class puts in 500 as capital, but takes out 600 when it sells.",
    "The extra money is thrown in by the bosses themselves, spent on their own living.",
    "That spending comes back to them as the money form of their surplus-value.",
    "For the total money to grow, new gold, hoards and above all credit are needed.",
    "The real puzzle is where extra value comes from, and Volume I answered that.",
  ],

  terms: ["circulation-of-surplus-value"],

  source: (
    <p>
      Covers Volume II, Chapter 17 (&ldquo;The Circulation of Surplus-Value&rdquo;), including its two sections on
      simple reproduction and on accumulation. Volume II was assembled by Friedrich Engels from Marx&apos;s manuscripts.
      Marx&apos;s own numbers, in pounds (shown as coins): the capitalist class advancing £500 and drawing out £600; the
      farmer with £5,000 advanced (£4,000 and £1,000), £1,000 spent on living and £6,000 at sale; the gold producer
      paying wages in the gold produced. Marx names the farmer only as &ldquo;a farmer&rdquo;; here he is Grandpa Ned.
    </p>
  ),
};

export default chapter;
