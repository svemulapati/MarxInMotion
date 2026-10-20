import type { ChapterContent } from "@/components/ChapterTemplate";
import { SteamAndWaterfall, WhatIsAWaterfallWorth } from "./ch38-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does a mill beside a waterfall earn more than a mill with a steam engine?",

  story: (
    <>
      <p>
        Mr. Moneybags runs his spinning machines on a big steam engine. Every week a cart of coal arrives, and every week
        he pays for it.
      </p>
      <p>
        Up the river, a rival has built his mill right beside a waterfall. The falling water turns his wheel for free. His
        goods cost less to make, yet he sells them at exactly the same price as everybody else.
      </p>
      <p>
        &ldquo;I&apos;ll build one too!&rdquo; says Mr. Moneybags. But there is no other waterfall for miles. And the land
        with the waterfall on it belongs to the Landlord, who has just written to the rival: &ldquo;Your lease is up. The new
        rent is higher.&rdquo;
      </p>
      <p>Why can the Landlord ask for more? What exactly is he selling?</p>
    </>
  ),

  guess: (
    <p>
      The waterfall mill makes the same goods for less and sells them at the same price. So it earns more than the others.
      Who do you think ends up keeping that extra: the mill owner, the workers, or the person who owns the waterfall?
    </p>
  ),

  struggle: [<SteamAndWaterfall key="a" />],
  reveal: [<WhatIsAWaterfallWorth key="b" />],

  eli5: "The waterfall mill makes things more cheaply but sells them at the same price, so it earns extra. Nobody can build another waterfall, so the person who owns it can ask for that extra as rent. Rent like this comes from one place being better than another.",

  grownUp: (
    <>
      <p>
        Marx explains <strong>differential rent</strong> first with an example from industry, not farming. Most factories
        in a country run on steam. A batch of goods costs them 100, and the price of production, cost plus the average
        profit of 15%, is 115. A few factories run on natural waterfalls, so their cost is only 90. They still sell at the
        regulating market price of 115, so they make 25: the average 15 plus a surplus-profit of 10.
      </p>
      <p>
        Surplus-profit from a better machine or method soon disappears, because rivals copy it. This one does not. The
        waterfall is a force of nature that capital cannot create. It exists only in certain places, tied to the land, so
        it can be monopolised. Whoever owns that land can claim the 10 as ground-rent. The rent does not raise the price
        of the goods; it is the difference between the individual price of production of the favoured mill and the
        general price of production.
      </p>
      <p>
        Marx adds that the waterfall is only the natural basis of the surplus-profit, not its source. And the price of a
        waterfall is an &ldquo;irrational expression&rdquo;: it has no value, because no labour made it. Its price is
        just capitalised rent. At 5% interest, a rent of £10 a year is treated as interest on £200.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Differential rent is not created by the land or the landlord. It is surplus-profit that some capitals earn because
        they work in unusually good natural conditions, which others cannot reproduce. Owning those conditions lets the
        landowner take that surplus-profit as rent.
      </p>
      <p>What is true for the waterfall, Marx says, is true on the whole for farming and mining, where it matters most.</p>
    </>
  ),

  critics: [
    {
      who: "David Ricardo",
      point: (
        <p>
          The idea that rent comes from differences between better and worse natural conditions goes back to Ricardo and
          other economists of the early 1800s. Marx builds on it. Where he differs is in tying rent to surplus-value made
          by workers; for Ricardo, rent was simply the extra yield of better land, without that link.
        </p>
      ),
    },
    {
      who: "Economic rent today",
      point: (
        <p>
          Modern economists call any income from a resource in fixed supply &ldquo;economic rent&rdquo;: a scarce
          location, a licence, a patent, a famous name. They agree it is not a reward for effort, but they do not treat it
          as a slice of surplus-value. For them it is simply the price of a scarce thing.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Steam mills sell a batch at 115. The waterfall mill makes the same batch for 90. What does it sell for?",
      options: ["90", "105", "115"],
      answer: 2,
      why: "It sells at the same market price as everyone else, which is set by the steam mills.",
    },
    {
      q: "Why can't the steam mills just copy the waterfall mill?",
      options: [
        "Waterfalls are against the law",
        "A waterfall is a force of nature that capital cannot make, found only in certain places",
        "The workers refuse",
      ],
      answer: 1,
      why: "A machine can be bought, but a waterfall cannot be built. That is what lets its owner keep the extra as rent.",
    },
    {
      q: "A waterfall brings 10 rent a year, and interest is 5%. What price does Marx say it sells for?",
      options: ["10", "100", "200"],
      answer: 2,
      why: "10 is 5% of 200. The price is the rent capitalised, even though the waterfall itself has no value.",
    },
  ],

  remember: [
    "Goods of one kind sell at one market price, set by the usual way of making them.",
    "A producer with better natural conditions makes them more cheaply and earns surplus-profit.",
    "If those conditions can't be copied and are tied to land, the landowner can take the surplus-profit as rent.",
    "This is differential rent: rent from the difference between better and usual conditions.",
    "A waterfall has a price but no value; its price is just its rent turned into a lump sum.",
  ],

  terms: ["differential-rent"],

  source: (
    <p>
      Covers Volume III, Chapter 38 (&ldquo;Differential Rent: General Remarks&rdquo;). Volume III was assembled by
      Friedrich Engels from Marx&apos;s manuscripts and published in 1894; this site follows the English edition hosted on
      marxists.org. Marx&apos;s own numbers: steam-driven cost 100 and price of production 115 (15% profit); water-driven
      cost 90, profit 25, surplus-profit 10; a waterfall rent of £10 a year capitalised at 5% as £200; a new method
      cutting the steam cost from £100 to £90. The rival mill owner and the Landlord&apos;s letter are this site&apos;s
      story.
    </p>
  ),
};

export default chapter;
