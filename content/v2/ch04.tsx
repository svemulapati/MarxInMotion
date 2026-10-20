import type { ChapterContent } from "@/components/ChapterTemplate";
import { SupplyBiggerThanDemand, ThreeNames, ThreePlacesAtOnce } from "./ch04-animations";

const chapter: ChapterContent = {
  bigQuestion: "How can one workshop be buying, making and selling all at the same time?",

  story: (
    <>
      <p>
        On Monday morning Sam notices three things happening at once. At the back door, a cart is being loaded with last
        week&apos;s yarn for the market. At the front door, Mr. Moneybags is paying for fresh bales of cotton with coins
        from the week before. And in the middle, the spindles hum along as if nothing else were going on.
      </p>
      <p>
        Across the square, Leo&apos;s loom is silent. He has carried his cloth to market, and until he sells it he has no
        money to buy more thread. When Leo goes selling, Leo&apos;s work stops.
      </p>
      <p>Why does Leo&apos;s loom stop when he goes to sell, while Mr. Moneybags&apos; workshop never does?</p>
    </>
  ),

  guess: (
    <p>
      Leo has to stop weaving every time he goes to sell. Mr. Moneybags never has to stop spinning. What do you think he
      has done with his coins that Leo hasn&apos;t?
    </p>
  ),

  struggle: [<ThreePlacesAtOnce key="a" />],
  reveal: [<SupplyBiggerThanDemand key="b" />, <ThreeNames key="c" />],

  eli5: "A big workshop splits its money into parts. While one part is being sold, another is buying cotton and another is being spun, so the work never stops. The boss always sells more value than he bought, because the workers added some.",

  grownUp: (
    <>
      <p>
        In Chapters 1 to 3 Marx followed capital round its circuit three times, starting from a different point each time:
        from money (M&hellip;M&prime;), from production (P&hellip;P) and from the finished goods (C&prime;&hellip;C&prime;).
        In Chapter 4 he puts the three together. They are not three different capitals. They are three ways of looking at
        one movement.
      </p>
      <p>
        A real industrial capital is in all three forms at the same time. Marx&apos;s example is a spinner whose weekly
        product is 10,000 lb of yarn: while this week&apos;s yarn is being turned into money, the money from last
        week&apos;s yarn is already turning back into cotton and coal, and the spindles keep turning. This only works if the
        capital is divided in the right proportions, so that its parts can follow one another round the circle. Marx calls
        continuity the mark of capitalist production. When prices and values change sharply, the circuit is disturbed, and
        a capitalist who cannot adapt may fail.
      </p>
      <p>
        Marx also looks at supply and demand. What a capitalist takes off the market is his capital, c + v. What he puts
        back is his product, c + v + s. With his numbers, 80c + 20v + 20s, the demand is 100 and the supply 120. If the two
        were equal, no surplus-value would have been produced, so the capitalist&apos;s aim is to make the gap as large as
        possible.
      </p>
      <p>
        Finally he criticises the habit of sorting history into <strong>natural economy</strong>, money economy and{" "}
        <strong>credit economy</strong>. Credit is only a later form of money economy, he says, and all three labels look
        at how people exchange instead of how production is organised.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capital is not a pile of money, machines or goods. It is a movement that is always in all three shapes at once, and
        it has to keep moving. The moment any part of it gets stuck, production slows.
      </p>
      <p>
        Because each capitalist puts more value onto the market than he takes off it, the whole system keeps needing buyers
        for that extra. Where the money to buy it comes from is a puzzle Marx returns to later in this volume.
      </p>
    </>
  ),

  critics: [
    {
      who: "Say's law",
      point: (
        <p>
          The French economist Jean-Baptiste Say argued that supply creates its own demand: everyone who sells also buys,
          so a general gap cannot last. On this view the extra value Marx points to is simply spent by capitalists, on
          themselves and on new investment. Marx takes up exactly this question in Chapter 17 and in the reproduction
          schemes, and argues it can go wrong.
        </p>
      ),
    },
    {
      who: "Business economists",
      point: (
        <p>
          Firms today measure this very movement as the &ldquo;cash conversion cycle&rdquo;: how long their money is tied up
          in stock and unpaid bills before it comes back. They agree that capital must keep moving, but they see profit as
          the reward for managing the cycle well, not as a gap made by unpaid labour.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why does Leo's loom stop when he goes to market?",
      options: ["He is lazy", "All his money is tied up in the cloth he is trying to sell", "There is a law against weaving on market day"],
      answer: 1,
      why: "Leo's whole capital goes round in one lump, so while it is cloth waiting to be sold, it cannot be thread on his loom.",
    },
    {
      q: "Mr. Moneybags buys 80 coins of materials and 20 coins of wages, and sells yarn worth 120. Which is bigger?",
      options: ["What he bought", "They are equal", "What he sells, by 20"],
      answer: 2,
      why: "His supply is always bigger than his demand. The gap of 20 is the surplus-value the workers added.",
    },
    {
      q: "What did Marx dislike about sorting economies into natural, money and credit economies?",
      options: [
        "The names were too long",
        "They look at how people swap, not at how the work is organised",
        "He thought credit should be banned",
      ],
      answer: 1,
      why: "Marx thought the real difference between societies lies in who owns the means of production and who works for whom.",
    },
  ],

  remember: [
    "One capital, three shapes: coins, a running workshop, and goods for sale.",
    "A large capital is in all three shapes at once, so production never has to stop.",
    "A capitalist always sells more value than he bought. The difference is surplus-value.",
    "Marx sorts economies by how work is organised, not just by how people swap.",
  ],

  terms: ["natural-economy", "credit-economy"],

  source: (
    <p>
      Covers Volume II, Chapter 4 (&ldquo;The Three Formulas of the Circuit&rdquo;), including Marx&apos;s remarks on
      natural, money and credit economy and on supply and demand. Marx&apos;s own examples: the spinner&apos;s 10,000 lb
      of yarn a week; commodity-capital of 80c + 20v + 20s; the farmer in the Scottish lowlands and the old-fashioned small
      peasant on the Continent. Volume II was put together by Friedrich Engels from Marx&apos;s manuscripts after
      Marx&apos;s death. Leo, the coins and the Tiny Town scenes belong to this site.
    </p>
  ),
};

export default chapter;
