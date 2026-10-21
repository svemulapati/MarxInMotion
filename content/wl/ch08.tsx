import type { ChapterContent } from "@/components/ChapterTemplate";
import { FivePerCentThirtyPerCent, HalfAYardAWholeYard } from "./ch08-animations";

const chapter: ChapterContent = {
  bigQuestion: "When the boss does well and Sam gets a rise, are they on the same side?",

  story: (
    <>
      <p>
        Business is booming. Mr. Moneybags has a new machine, more orders than ever, and he gives Sam a small rise. At the
        workshop gate he makes a speech: &ldquo;When I grow, you grow! We are all in this together.&rdquo;
      </p>
      <p>
        Sam is pleased with the extra coin. But old Jem, who used to spin next to him before the new machine came, is not
        at the gate any more. And across the square, the rival workshop has just bought the same machine, and its owner
        looks worried.
      </p>
      <p>Is Mr. Moneybags right? If the workshop grows, does everyone win together?</p>
    </>
  ),

  guess: (
    <p>
      Suppose in a good year Sam&apos;s wage goes up a little and the boss&apos;s profit goes up a lot. Who is better off?
      Who is gaining ground? And what happens when the boss buys a machine that does twice the work?
    </p>
  ),

  struggle: [<FivePerCentThirtyPerCent key="a" />],
  reveal: [<HalfAYardAWholeYard key="b" />],

  eli5: "When the workshop grows, Sam's pay can go up a little while the boss's money goes up a lot. So Sam is better off but further behind. And the bosses race each other with new machines, which never stops.",

  grownUp: (
    <>
      <p>
        Marx concludes that the interests of capital and wage-labour are <strong>diametrically opposed</strong>, even in
        the best case for workers. A rapid growth of capital means a rapid growth of profits, and profits can grow fast
        only if the relative wage falls. Real and nominal wages may rise at the same time, but not as fast as profit. His
        example: if in good years wages rise 5 per cent while profits rise 30 per cent, the relative wage has fallen. The
        worker&apos;s material position improves &ldquo;at the cost of his social position&rdquo;, and the gap between
        worker and capitalist widens. Chapter 6 made the same point with a little house that shrinks to a hut when a
        palace goes up next door.
      </p>
      <p>
        So when people say the worker has an interest in the rapid growth of capital, Marx says this only means: the
        faster he enlarges someone else&apos;s wealth, the larger the crumbs that fall to him, and the more firmly he is
        bound. He calls it forging &ldquo;golden chains&rdquo;.
      </p>
      <p>
        Then he asks how the growth of capital affects wages. Growth brings <strong>competition</strong> between capitals.
        To win, a capitalist must sell cheaper, so he must produce cheaper, by more <strong>division of labour</strong>{" "}
        and more <strong>machinery</strong>. Marx&apos;s example: one capitalist weaves a whole yard of linen in the time
        his rivals weave half. He undersells them only a little, not by half, and pockets an extra profit. But rivals
        copy him, the price falls below even the new cost, and the battle begins again. Volume I, Chapter 12 calls this
        temporary gain extra surplus-value, and Chapter 25 follows its effect on workers.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Growth does not unite workers and owners. Even when everyone&apos;s income rises, the owners&apos; grows faster,
        and with it their power over the people who work for them. Workers can gain in what they consume and lose in
        where they stand.
      </p>
      <p>
        And competition is a treadmill. No capitalist can stop improving production, because every advantage is quickly
        copied and turned into a lower price for all.
      </p>
    </>
  ),

  critics: [
    {
      who: "Absolute gains matter most",
      point: (
        <p>
          Many economists and philosophers argue that what counts for a person&apos;s life is how much they can buy and
          do, not their share compared with a rich owner. On this view a worker whose wage rises 5 per cent is simply
          better off, and widening gaps matter only if they cause other harms. Marx&apos;s defenders answer that relative
          position shapes power, bargaining and dignity, which is the point of his little house beside a palace.
        </p>
      ),
    },
    {
      who: "Shared interests",
      point: (
        <p>
          Others point to real common ground: when a firm grows, jobs are safer and wages can rise, and today many workers
          own shares through pension funds. Supporters of Marx reply that these links do not remove the conflict over how
          new value is split, which shows up in every wage negotiation.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In a boom, wages rise 5 per cent and profits rise 30 per cent. What happens to the relative wage?",
      options: ["It rises", "It falls", "It stays the same"],
      answer: 1,
      why: "Sam is better off, but his share compared with the boss's shrinks. That is a fall in the relative wage.",
    },
    {
      q: "Mr. Moneybags weaves a whole yard in the time his rivals weave half. Why doesn't he sell at half their price?",
      options: ["He would lose money", "He only needs to be a little cheaper to win customers, and keeps the rest as extra profit", "The law forbids it"],
      answer: 1,
      why: "A small cut is enough to take customers from rivals. Selling at half price would give away his extra profit.",
    },
    {
      q: "What happens once every workshop has the new machine?",
      options: ["Everyone keeps the extra profit", "The price falls below even the new cost, and the race starts again", "Prices go up"],
      answer: 1,
      why: "When the method is general, the advantage disappears, the price drops, and capitalists look for the next improvement.",
    },
  ],

  remember: [
    "Even in good years, profits can grow faster than wages, so the relative wage falls.",
    "A worker can be better off and further behind at the same time.",
    "Marx: a rise in pay that binds workers ever closer to capital is a golden chain.",
    "Competition forces every capitalist to add division of labour and machines.",
    "A new method gives an extra profit only until rivals copy it.",
  ],

  terms: ["golden-chains", "relative-wage", "extra-surplus-value"],

  source: (
    <p>
      Covers Wage-Labour and Capital, Chapter 8 (&ldquo;The Interests of Capital and Wage-Labour are Diametrically
      Opposed. Effect of Growth of Productive Capital on Wages&rdquo;), from Marx&apos;s 1847 lectures as printed in 1849,
      in Engels&apos; revised 1891 edition. Marx&apos;s own examples: wages up 5 per cent while profits rise 30 per cent;
      &ldquo;golden chains&rdquo;; the capitalist who weaves a whole yard of linen while rivals weave half a yard. The
      starting bar heights (100 each) and all coin prices for linen are made up for this site.
    </p>
  ),
};

export default chapter;
