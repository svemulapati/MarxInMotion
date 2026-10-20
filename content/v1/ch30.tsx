import type { ChapterContent } from "@/components/ChapterTemplate";
import { BuyersAreBorn, TheFlaxWithANewSoul } from "./ch30-animations";

const chapter: ChapterContent = {
  bigQuestion: "When families stopped making their own things, who did they start buying from?",

  story: (
    <>
      <p>
        Sam&apos;s great-grandmother never bought a shirt in her life. She grew flax in the corner of the family field,
        spun it on a wheel by the fire, and wove it into linen. The bread came from the family&apos;s own grain, and the
        candles from their own tallow.
      </p>
      <p>
        Then the fences went up around the land, and the family was pushed off it. They walked into Tiny Town with
        nothing but their hands.
      </p>
      <p>
        Sam&apos;s mum still remembers what her grandmother said about it. &ldquo;Back home we hardly needed a coin all
        year. In town we needed coins for everything: for bread, for a shirt, even for a candle to see by.&rdquo;
      </p>
      <p>
        Grandpa Ned&apos;s farm, meanwhile, grows more wheat than ever, with fewer hands. He sells all of it. So who buys
        it? And why did the mills suddenly have so many customers?
      </p>
    </>
  ),

  guess: (
    <p>
      If a family makes its own bread and clothes, does it need a shop? So what happens to the shops when thousands of
      families can no longer make anything for themselves?
    </p>
  ),

  struggle: [<TheFlaxWithANewSoul key="a" />],
  reveal: [<BuyersAreBorn key="b" />],

  eli5: "When families were pushed off their land, they could not make their own food and clothes any more. So they had to buy them, with wages from a boss. That turned them into workers and shoppers at the same time.",

  grownUp: (
    <>
      <p>
        Chapter 30 follows what happened to everything the expropriated peasants left behind. Fewer people worked the
        land, but it produced as much or more, because of better methods and harder work. The food that used to feed the
        peasant now became part of <strong>variable capital</strong>: the worker must buy it back with wages from the
        industrial capitalist. Raw materials like flax became part of <strong>constant capital</strong>.
      </p>
      <p>
        Marx&apos;s example is the flax of Westphalia, in Prussia, which peasants once spun at home. After the peasants
        are driven off, the same flax goes to large spinning and weaving works. &ldquo;Not a fibre of it is
        changed,&rdquo; but it is now the capital of one master, and the extra labour in it becomes profit for a few
        capitalists instead of extra income for many families. The spindles and looms, once scattered over the country,
        are now crowded into a few great buildings.
      </p>
      <p>
        The same events created the <strong>home market</strong>. Yarn, linen and coarse woollens, once made in every
        peasant home for its own use, became goods made in workshops and sold to the countryside. The destruction of
        rural domestic industry, Marx says, is what gives a country&apos;s internal market the size that capitalist
        production needs. The manufacturing period only half managed this; modern industry, with machinery, finally
        tore spinning and weaving out of the countryside and won the whole home market for industrial capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Pushing people off the land did two jobs at once. It created workers who had to sell their labour-power, and it
        created customers who had to buy what they used to make. The worker and the market for the factory&apos;s goods
        are born in the same moment.
      </p>
      <p>
        Big factories and big farms hide where they came from. Looking at them, you do not see the many small producers
        who were swept together to make them. Marx says the French had a good name for early factories: workshops
        &ldquo;thrown into one&rdquo;, just as fields were thrown into one.
      </p>
    </>
  ),

  critics: [
    {
      who: "Historians of enclosure",
      point: (
        <p>
          Historians such as J. D. Chambers (1953) argued that enclosure did not simply drive people into the towns:
          rural population kept growing, and much of the new industrial workforce came from a rising population rather
          than from evictions. Others, like Robert Allen, accept that small farmers lost out but date and measure the
          change differently. Most agree the shift happened; they argue about how violent it was and how much it
          mattered.
        </p>
      ),
    },
    {
      who: "The “industrious revolution”",
      point: (
        <p>
          The historian Jan de Vries (2008) argued that many households chose to buy more from the market and to work
          more hours for money, because they wanted new goods like sugar, tea and cotton cloth. On this view the home
          market grew from the demand side too, not only because people were forced off the land.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's flax example, what changed about the flax when it went to the big mill?",
      options: ["Its fibres became stronger", "Who owned it, and who the extra work in it was for", "Nothing at all"],
      answer: 1,
      why: "The flax itself was exactly the same. What changed was its social role: it became one owner's capital, and the extra work in it became his profit.",
    },
    {
      q: "Why did families driven into town become shoppers?",
      options: [
        "They had more money than before",
        "They had no land or tools left to make their own food and clothes",
        "Shops were new and exciting",
      ],
      answer: 1,
      why: "Without land or tools, everything they needed had to be bought with wages.",
    },
    {
      q: "What does Marx call the market created inside a country when home-making disappears?",
      options: ["The world market", "The home market", "The stock market"],
      answer: 1,
      why: "The home market: many scattered households turned into one big market for factory goods.",
    },
  ],

  remember: [
    "Pushing peasants off the land freed their food and raw materials to become capital.",
    "The same flax, in a new owner's hands, carries a “new social soul”: it becomes capital.",
    "Families who could no longer make things had to buy them, so workers and customers were born together.",
    "Destroying home spinning and weaving gave industry its home market; machines finished the job.",
  ],

  terms: ["home-market"],

  source: (
    <p>
      Covers Volume I, Chapter 30 (Fowkes: &ldquo;Impact of the Agricultural Revolution on Industry. The Creation of a
      Home Market for Industrial Capital&rdquo;; Moore and Aveling: &ldquo;Reaction of the Agricultural Revolution on
      Industry. Creation of the Home-Market for Industrial Capital&rdquo;). Marx&apos;s own points: food and raw
      materials become elements of variable and constant capital; the Westphalian flax spinners of Frederick II&apos;s
      time; Mirabeau&apos;s <em>manufactures réunies</em>; the destruction of rural domestic industry creates the home
      market; modern industry completes it. Sam&apos;s great-grandparents and their candles belong to this site.
    </p>
  ),
};

export default chapter;
