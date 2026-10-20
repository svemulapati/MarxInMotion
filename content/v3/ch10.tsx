import type { ChapterContent } from "@/components/ChapterTemplate";
import { CapitalOnTheMove, TheSwingingPrice, ThreeOvensOnePrice } from "./ch10-animations";

const chapter: ChapterContent = {
  bigQuestion: "Who decides what a loaf of bread costs: the baker, the buyer, or something deeper?",

  story: (
    <>
      <p>
        Tiny Town now has several bakeries. Mia has bought a shiny new oven that bakes a batch two hours faster than
        anyone else&apos;s. At the other end of town, old Mr. Crust is still using an oven his grandfather built.
      </p>
      <p>
        Yet on market day every loaf of the same kind sells for the same price. Mia is delighted: she makes more than
        her neighbours. Mr. Crust grumbles that he works longest and earns least.
      </p>
      <p>
        Meanwhile Mr. Moneybags is thinking of closing his spinning room. &ldquo;Coats pay better than yarn,&rdquo; he
        tells Tom. &ldquo;Everyone says so.&rdquo; Tom just smiles. &ldquo;Everyone says so,&rdquo; he replies,
        &ldquo;so everyone will do it.&rdquo;
      </p>
      <p>What sets the price of bread? And why can&apos;t one trade stay more profitable than the rest for long?</p>
    </>
  ),

  guess: (
    <p>
      Mia bakes her bread in 8 hours, most bakers in 10, Mr. Crust in 12. If every loaf sells for one price, how many
      hours does that price count? And what happens to coat prices if half the town&apos;s bosses start making coats?
    </p>
  ),

  struggle: [<CapitalOnTheMove key="a" />, <ThreeOvensOnePrice key="b" />],
  reveal: [<TheSwingingPrice key="c" />],

  eli5: "Bosses move their money to whichever trade pays most, until every trade pays about the same. Things of the same kind sell for one price, set by how long they take in the usual workshop, so the best workshops earn extra. Supply and demand only push prices a little above or below that level.",

  grownUp: (
    <>
      <p>
        This is the longest chapter in Part Two. It explains how competition actually produces the average rate of
        profit. Capital, Marx writes, withdraws from spheres with a low rate of profit and invades those with a high
        one. This &ldquo;incessant outflow and influx&rdquo; changes supply in each branch until prices yield the same
        average profit everywhere, turning values into prices of production.
      </p>
      <p>
        Within one branch, producers work under different conditions, so their goods have different individual
        values. But goods of the same kind sell at one price. The <strong>market-value</strong> is the value of goods
        produced under the average conditions of the branch, at least when most of the supply comes from those
        conditions. Producers with better conditions realise a <strong>surplus-profit</strong>; those with worse ones
        cannot realise all the surplus-value they produced.
      </p>
      <p>
        <strong>Market-prices</strong> swing above and below market-value as supply and demand change. When supply and
        demand balance, Marx says, they cease to explain anything; what remains is the value they balance around. And
        supply and demand themselves depend on prices and values. Marx also notes that values come first historically:
        where producers own their own tools, goods exchange roughly at their values. Prices of production need a
        developed capitalism.
      </p>
      <p>
        Finally, because every capitalist shares in the total surplus-value, each has an interest in the exploitation
        of the whole working class, not only his own workers. Hence his phrase that capitalists form a &ldquo;veritable
        freemason society&rdquo; against the working class, while fighting each other in competition.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Supply and demand are real, but they only explain the swings of prices, not the level they swing around.
        Behind the level lies the labour time needed under average conditions, turned into prices of production by
        capital rushing from trade to trade.
      </p>
      <p>
        That rush is also why bosses who compete fiercely still share one interest: the bigger the total surplus
        squeezed out of all workers, the bigger everyone&apos;s average profit.
      </p>
    </>
  ),

  critics: [
    {
      who: "The marginalist view",
      point: (
        <p>
          Economists in the tradition of Jevons, Menger, Walras and Alfred Marshall explain the level of prices, not
          just their swings, by supply and demand: by what buyers will pay for one more unit and what it costs to
          produce one more unit. On this view there is no deeper &ldquo;centre&rdquo; than the point where supply meets
          demand. Marx&apos;s supporters reply that the marginal cost of production itself rests on labour and means
          of production, which brings the question back.
        </p>
      ),
    },
    {
      who: "Does capital really even out?",
      point: (
        <p>
          Studies of real economies find profit rates differing between industries for long periods, because of
          monopolies, patents, brands and the difficulty of moving machines. Some Marxists, such as Anwar Shaikh,
          answer that what evens out is the rate on new investment at the margin, not the average for every firm.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Coats pay 30% and yarn pays 10%. What happens next, according to Marx?",
      options: [
        "Nothing; coats always pay more",
        "Capital moves into coats until both trades earn about the same average",
        "The government sets new prices",
      ],
      answer: 1,
      why: "More coat-makers mean cheaper coats and lower coat profits; fewer spinners mean dearer yarn and higher yarn profits.",
    },
    {
      q: "Mia bakes in 8 hours, most bakers in 10. Her bread sells at the usual market-value. What does she get?",
      options: ["A surplus-profit", "A loss", "Exactly the same as everyone else"],
      answer: 0,
      why: "Her batch took less time than the market-value counts, so she pockets the difference.",
    },
    {
      q: "When supply and demand are exactly equal, what does Marx say they explain about the price?",
      options: ["Everything", "Nothing; the price then sits at the market-value", "Only the price of bread"],
      answer: 1,
      why: "Balanced supply and demand cancel out. What is left is the value the price swings around.",
    },
  ],

  remember: [
    "Capital rushes out of low-profit trades and into high-profit ones, which evens profits out.",
    "Goods of the same kind sell for one market price, based on average conditions: the market-value.",
    "The best producers earn a surplus-profit; the worst lose part of their surplus.",
    "Supply and demand explain the swings of prices, not the level they swing around.",
    "Rival bosses all gain from a higher rate of exploitation: against workers they act as one club.",
  ],

  terms: ["market-value", "market-price", "surplus-profit"],

  source: (
    <p>
      Covers Volume III, Chapter 10. Volume III was assembled by Engels from Marx&apos;s manuscripts and published in
      1894. Text checked against the marxists.org edition (Institute of Marxism-Leninism, 1959). Marx&apos;s own ideas
      and phrases: capital that &ldquo;withdraws from a sphere with a low rate of profit&rdquo;; market-value as the
      value under average conditions; surplus-profit for the most favourable producers; supply and demand balancing
      and ceasing to explain; capitalists as a &ldquo;freemason society&rdquo;. The yarn and coat rates, the bakers&apos;
      hours, and Mr. Crust belong to this site.
    </p>
  ),
};

export default chapter;
