import type { ChapterContent } from "@/components/ChapterTemplate";
import { OneRoofForMany, SavingOnSafety, WasteIntoWealth } from "./ch05-animations";

const chapter: ChapterContent = {
  bigQuestion: "How can a boss raise his profit rate without paying his workers a penny less?",

  story: (
    <>
      <p>
        Mr. Moneybags has bought out four small rival workshops and moved everyone into one big mill. Now there is one
        roof instead of five, one steam engine instead of five, one stove instead of five. He rubs his hands: &ldquo;Look
        at all I&apos;ve saved!&rdquo;
      </p>
      <p>
        He saves in other ways too. The cotton waste is sold to a rag dealer. The windows stay shut to save coal. The
        broken railing on the stairs can wait another year.
      </p>
      <p>
        Sam&apos;s wage hasn&apos;t changed, and nor have his hours. Yet the boss&apos;s rate of profit is up. Is this
        just good management, or is something else going on?
      </p>
    </>
  ),

  guess: (
    <p>
      The rate of profit is surplus-value divided by the whole capital. If the boss can make the same yarn with fewer
      roofs, engines and stoves, which part of that fraction gets smaller? What might he be tempted to save on that he
      shouldn&apos;t?
    </p>
  ),

  struggle: [<OneRoofForMany key="a" />, <WasteIntoWealth key="b" />],
  reveal: [<SavingOnSafety key="c" />],

  eli5: "If the boss can do the same work with fewer machines, buildings and materials, the same extra counts for more. Many of those savings come from lots of people working together. Some of them come from skimping on the workers' safety.",

  grownUp: (
    <>
      <p>
        With a given rate of surplus-value, the rate of profit depends on the value of the constant capital. Anything that
        makes the means of production cheaper, or uses them more sparingly, raises the rate of profit. Marx calls this
        the <strong>economy in the use of constant capital</strong>.
      </p>
      <p>
        Much of it comes from production on a large scale: shared buildings, heating, lighting and steam power, and
        engines that do not grow dearer in proportion to the number of machines they drive. Marx quotes a report by
        factory inspector Leonard Horner, citing the engineer James Nasmyth: the best engines used only 3&frac12; to 4
        lbs of coal per horse-power per hour, where most cotton-mill engines used 8 to 12. Another source is turning the <strong>excretions of production</strong>{" "}
        back into materials: iron filings, woollen rags made into shoddy, gas-tar made into aniline dyes. Rising raw
        material prices spur this.
      </p>
      <p>
        Marx insists these savings are mostly the fruit of the combined labour of many workers, and of progress in the
        industries that make machines and materials. Yet the capitalist sees them as his own achievement, entirely
        separate from his workers.
      </p>
      <p>
        The same drive cuts spending on the workers&apos; conditions: crowded, airless workrooms, unfenced machinery, and
        coal mines without proper ventilation or drainage. Official reports counted 8,466 miners killed in the ten years
        1852 to 1861, about 15 a week around 1860, and admitted the real figure was higher.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capitalist production is very economical with materials, but extremely wasteful with people. In Marx&apos;s
        words it squanders human lives, &ldquo;not only blood and flesh, but also nerve and brain&rdquo;. What the
        individual capitalist saves, society may lose.
      </p>
      <p>
        And the gains of working together on a large scale do not go to the people working together. They show up as a
        higher rate of profit for the owner.
      </p>
    </>
  ),

  critics: [
    {
      who: "Economies of scale are ordinary efficiency",
      point: (
        <p>
          Most economists see shared buildings, better engines and recycling as plain efficiency that makes goods cheaper
          for everyone, workers included. Competition, they argue, passes most of the savings on to buyers as lower
          prices, rather than leaving them as extra profit.
        </p>
      ),
    },
    {
      who: "Safety improved under capitalism",
      point: (
        <p>
          Historians note that mine and factory deaths in Britain fell sharply from the late nineteenth century, through
          inspection laws, unions and better technology, while capitalism continued. Marx&apos;s supporters reply that
          those laws were won against employers&apos; resistance, which is exactly the pressure he described.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Five workshops move under one roof and share one engine. Wages and surplus-value stay the same. What happens to the rate of profit?",
      options: ["It falls", "It rises", "It stays the same"],
      answer: 1,
      why: "The same surplus-value is divided by a smaller constant capital, so the rate of profit rises.",
    },
    {
      q: "According to Marx, where do most of these savings really come from?",
      options: ["The boss's genius", "Many workers working together, and progress in other industries", "Luck"],
      answer: 1,
      why: "Marx says the saving appears as a product of the social nature of labour, though the capitalist sees it as his own.",
    },
    {
      q: "What did Marx mean by capitalism squandering human lives?",
      options: [
        "Workers were paid too much",
        "Bosses saved on safety and working conditions, and people died",
        "Factories were too big",
      ],
      answer: 1,
      why: "Saving on ventilation, drainage and safety in mines and workshops cost many lives, as official reports showed.",
    },
  ],

  remember: [
    "Less constant capital for the same surplus-value means a higher rate of profit.",
    "Big workshops share roofs, engines and stoves, and reuse their waste.",
    "Marx: these savings come mainly from working together, but the boss pockets them.",
    "Some 'savings' come from skimping on workers' safety.",
    "Capitalism is careful with materials and careless with lives, Marx argued.",
  ],

  terms: ["economy-of-constant-capital", "excretions-of-production"],

  source: (
    <p>
      Covers Volume III, Chapter 5 (&ldquo;Economy in the Employment of Constant Capital&rdquo;), from the Institute of
      Marxism-Leninism edition (International Publishers) on marxists.org. Volume III was assembled and edited by
      Friedrich Engels from Marx&apos;s manuscripts and published in 1894. From the text: Horner quoting Nasmyth on engines using 3&frac12;
      to 4 lbs of coal per horse-power per hour against 8 to 12; iron filings, shoddy, gas-tar into aniline dyes; the
      Thames; 8,466 colliery deaths 1852 to 1861 and about 15 a week around 1860. The five workshops and the numbers in
      animation 5.1 are made up to show the idea.
    </p>
  ),
};

export default chapter;
