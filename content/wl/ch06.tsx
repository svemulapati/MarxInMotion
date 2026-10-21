import type { ChapterContent } from "@/components/ChapterTemplate";
import { LittleHouseAndPalace, OneShillingTwoFates } from "./ch06-animations";

const chapter: ChapterContent = {
  bigQuestion: "If the boss and the worker need each other, are they on the same side?",

  story: (
    <>
      <p>
        At the Tiny Town fair, Mr. Moneybags climbs onto a crate and gives a speech. &ldquo;We are all in this
        together!&rdquo; he booms. &ldquo;When my mill does well, I hire more of you and pay you more. When it does
        badly, you lose your jobs. My success is your success!&rdquo;
      </p>
      <p>
        Sam claps, because it sounds true. When the mill was busy last spring, wages did go up. When it was quiet, half
        the spinners were sent home.
      </p>
      <p>
        But on the walk home Sam passes the big new house Mr. Moneybags is building on the hill. It is getting bigger
        much faster than Sam&apos;s little cottage ever will.
      </p>
      <p>Are Sam and Mr. Moneybags really on the same side? Or is there something the speech left out?</p>
    </>
  ),

  guess: (
    <p>
      When the mill does well, does Sam do well too? Does he do as well as Mr. Moneybags? Think about what happens to the
      coins Sam earns, and what happens to the coins Moneybags pays out.
    </p>
  ),

  struggle: [<OneShillingTwoFates key="a" />],
  reveal: [<LittleHouseAndPalace key="b" />],

  eli5: "The boss's money comes back bigger, but the worker's wage gets eaten up, so he must come back tomorrow. They need each other, like a lender and a borrower. Even when wages rise, the boss's share can rise faster.",

  grownUp: (
    <>
      <p>
        In the exchange between capitalist and wage-labourer, the worker gets means of subsistence, and the capitalist
        gets the worker&apos;s productive activity, the power that does not just replace what the worker consumes but
        adds new value. Marx&apos;s example: a farmer pays a day-labourer one shilling, and the day&apos;s work yields
        two shillings&apos; worth of produce. The shilling is consumed &ldquo;reproductively&rdquo; by the farmer and
        &ldquo;unproductively&rdquo; by the worker, whose bread is gone for good, so he must repeat the exchange.
      </p>
      <p>
        So &ldquo;capital presupposes wage-labour; wage-labour presupposes capital.&rdquo; A cotton worker does not
        only produce cotton goods, he produces capital: values that will command his work again. The economists were
        right that the two have a common interest, Marx says, but only in the way a usurer and a borrower do. The
        fastest possible growth of capital is the worker&apos;s best hope for a tolerable life, yet that growth is also
        the growth of capital&apos;s power over him.
      </p>
      <p>
        Even when wages rise, the gap can widen. Marx&apos;s little house beside the palace shows that needs are
        social: we measure them against society, not against the objects themselves. He then separates three measures
        of the wage: the <strong>nominal wage</strong> (the money), the <strong>real wage</strong> (what the money
        buys; his examples are cheap American silver in the 16th century and the bad harvest of 1847), and the{" "}
        <strong>relative wage</strong>, the worker&apos;s share of new value compared with capital&apos;s. <em>Volume I,
        Chapters 20 and 22</em> come back to these.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Workers and capitalists do depend on each other, but that does not make their interests the same. As long as
        the worker remains a wage-labourer, his fortunes depend on capital, and the better capital does, the more its
        power grows over him.
      </p>
      <p>
        A rising wage can still mean falling behind. What counts for Marx is not only how much a worker can buy, but how
        his share compares with the share going to profit.
      </p>
    </>
  ),

  critics: [
    {
      who: "Positive-sum growth",
      point: (
        <p>
          Many economists see employment as a positive-sum deal: both sides gain. For much of the 20th century
          labour&apos;s share of national income in rich countries was fairly stable while real wages rose a great deal
          (it has fallen somewhat since about 1980). On this
          view a widening gap matters less than whether workers are better off in absolute terms, and they mostly are.
        </p>
      ),
    },
    {
      who: "Relative income and happiness",
      point: (
        <p>
          On the other hand, later research supports Marx&apos;s point that people judge their needs against others.
          The economist Richard Easterlin found that, within a country, happiness tracks relative income more than
          absolute income. Critics of Marx accept this but deny it proves exploitation: it can come from comparison
          alone, whatever the source of profits.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's example, the farmer pays one shilling and gets crops worth two. What happens to the labourer's shilling?",
      options: ["It doubles too", "He spends it on food, which is eaten and gone", "He lends it to the farmer"],
      answer: 1,
      why: "For the worker the shilling buys means of subsistence, consumed for good, so he must sell his work again tomorrow.",
    },
    {
      q: "What does Marx's little house next to a palace show?",
      options: [
        "That houses should all be the same size",
        "That our needs are measured against society, so a bigger gap can make us feel poorer even if we have more",
        "That palaces are badly built",
      ],
      answer: 1,
      why: "The little house is fine among little houses. Next to a palace it shrinks to a hut, because needs are social and relative.",
    },
    {
      q: "Sam still gets 3 coins, but a bad harvest makes bread twice as dear. Which wage has fallen?",
      options: ["His nominal wage", "His real wage", "Neither"],
      answer: 1,
      why: "The coins (nominal wage) are the same, but they buy less bread, so his real wage has fallen. Marx's example is the winter of 1847.",
    },
  ],

  remember: [
    "The boss's money comes back bigger; the worker's wage is eaten and gone, so he must work again tomorrow.",
    "Capital needs wage-labour and wage-labour needs capital, like a lender and a borrower.",
    "Our needs are social: a little house shrinks next to a palace.",
    "A wage can be measured three ways: nominal (coins), real (what they buy) and relative (share next to profit).",
  ],

  terms: ["social-needs", "nominal-wage", "real-wage", "relative-wage"],

  source: (
    <p>
      Covers Wage-Labour and Capital, section 6, &ldquo;Relation of wage-labour to capital&rdquo; (lectures of 1847,
      printed 1849; the 1891 edition on marxists.org, revised by Engels). Marx&apos;s own points: the farmer, the
      one-shilling day-labourer and the two shillings&apos; produce; consumed &ldquo;reproductively&rdquo; and
      &ldquo;unproductively&rdquo;; capital and wage-labour presupposing each other; the worker who produces capital;
      the usurer and the borrower; the little house and the palace; American silver in the 16th century; the bad
      harvest of the winter of 1847; nominal, real and relative wages. The day-labourer&apos;s name (Jem), the loaf
      counts and the share bars are this site&apos;s illustrations.
    </p>
  ),
};

export default chapter;
