import type { ChapterContent } from "@/components/ChapterTemplate";
import { CloseOnTheMap, TheLongRoadToIndia } from "./ch14-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does it matter how far away your customers live?",

  story: (
    <>
      <p>
        Mr. Moneybags has found new buyers for his yarn, in a country far across the sea. They pay well. He is very
        pleased with himself.
      </p>
      <p>
        Then the months go by. The yarn is on a ship. Then it is in a faraway shop. Then the money is on a ship coming
        back. All that time, Sam and the other spinners still need wages every Saturday, and the cotton bin is getting
        empty.
      </p>
      <p>
        Meanwhile, two villages near Tiny Town are arguing about a new railway. One village is going to be on the line.
        The other is not. &ldquo;We are closer to the market than they are!&rdquo; says a spinner from the village left
        off the line. &ldquo;How can a railway make us farther away?&rdquo;
      </p>
      <p>What does distance have to do with how fast money grows?</p>
    </>
  ),

  guess: (
    <p>
      Yarn sent across the sea earns good money, but it takes many months to come back as coins. Do you think that is a
      problem for Mr. Moneybags, even if nobody cheats and everything sells? Why?
    </p>
  ),

  struggle: [<TheLongRoadToIndia key="a" />],
  reveal: [<CloseOnTheMap key="b" />],

  eli5: "Things take time to travel to the people who buy them, and money takes time to come back. While capital is travelling, it cannot make anything new. So the closer and faster the market, the faster money can grow.",

  grownUp: (
    <>
      <p>
        The time it takes capital to go round, its turnover time, is its production time plus its{" "}
        <strong>time of circulation</strong>. Circulation time has two halves. The <strong>selling time</strong> is how
        long capital stays stuck as goods waiting to be sold. The <strong>buying time</strong> is how long it stays as
        money before it is turned back into cotton, tools and labour-power.
      </p>
      <p>
        The biggest steady cause of long selling times is the distance to the market. Marx&apos;s example: goods shipped
        to India take about four months; even if they are paid for on arrival, the money needs another four months to
        come back. That is eight months before the capital can start again. Marx says differences like these underlie
        the different terms of credit, and that overseas trade was one of the sources of the credit system.
      </p>
      <p>
        Better ships and railways shorten the trip, but they do not shorten it equally everywhere. A railway can make a
        far town &ldquo;nearer&rdquo; in time than a close town with no station, so some places of production rise and
        others decline. And the same progress pushes capitalists to sell in ever more distant markets: the world market.
        More and more of society&apos;s capital is always on the road.
      </p>
      <p>
        Buying time matters too. Where raw materials come to market only now and then, like the great London wool
        auctions every three months, a business must buy a large stock at once, and keep a lot of money ready for it.
        So some of every capital is always waiting as money.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capital only grows while it is producing. Every day it spends travelling as goods or waiting as money is a day
        it is not making anything new. So capitalism has a built-in drive to shrink that time: faster transport, closer
        markets, quicker payment.
      </p>
      <p>
        But the same drive also stretches the market across the whole world, so a growing share of all capital is
        always in transit. Transport changes the map of production itself, making some towns boom and others fade.
      </p>
    </>
  ),

  critics: [
    {
      who: "Waiting is worth paying for",
      point: (
        <p>
          Economists such as Eugen von Böhm-Bawerk argued that time itself has value: money tied up for eight months
          should earn more than money tied up for a week, and interest rewards that waiting. On this view the longer
          voyage does not just delay value, it is part of why profits exist. Marx rejects this: for him time in
          circulation creates no new value, it only delays it.
        </p>
      ),
    },
    {
      who: "Business already knew this",
      point: (
        <p>
          Some critics say this chapter states what merchants and accountants already practised: get paid faster, keep
          stock low, sell close to home. Defenders reply that Marx&apos;s point is not the advice but the consequence: a
          system driven to shrink circulation time also drives the spread of credit and of a world market.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Yarn takes 4 months to reach India and the money takes 4 months to come back. How long before the capital can start working again?",
      options: ["4 months", "8 months", "1 month"],
      answer: 1,
      why: "Marx's own example: 4 months out as goods plus 4 months back as money makes 8 months.",
    },
    {
      q: "What are the two halves of the time of circulation?",
      options: ["Selling time and buying time", "Sleeping time and working time", "Summer and winter"],
      answer: 0,
      why: "Selling time turns goods back into money; buying time turns money back into the things production needs.",
    },
    {
      q: "Hollow is closer to the market than Ford, but only Ford has a railway. Which is now 'nearer' for selling?",
      options: ["Hollow, because it is closer on the map", "Ford, because the train gets there faster", "Neither"],
      answer: 1,
      why: "What counts for capital is time, not miles. Railways can make a far town nearer than a close one.",
    },
  ],

  remember: [
    "Turnover time = production time + time of circulation.",
    "Time of circulation = selling time (as goods) + buying time (as money).",
    "The farther the market, the longer capital is stuck on the road and cannot produce.",
    "Faster transport shrinks the trip, but also pulls in markets farther away: the world market.",
    "Railways and ships change which towns rise and which fade.",
  ],

  terms: ["selling-time", "buying-time"],

  source: (
    <p>
      Covers Volume II, Chapter 14 (&ldquo;The Time of Circulation&rdquo;). Volume II was put together by Friedrich
      Engels from Marx&apos;s manuscripts after Marx&apos;s death. Marx&apos;s own examples: goods shipped to India in
      about four months with four more for the money to return; the London Economist of 1866 on bills for the India and
      China trade; railways changing the relative distance of places; breweries in big towns; London wool auctions every
      three months; Engels&apos; note that the Suez Canal later &ldquo;revolutionized all this&rdquo;. The towns of
      Hollow and Ford and their travel times are this site&apos;s illustration.
    </p>
  ),
};

export default chapter;
