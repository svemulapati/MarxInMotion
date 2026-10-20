import type { ChapterContent } from "@/components/ChapterTemplate";
import { RightUpsideDown, SmallerShare } from "./ch23-animations";

const chapter: ChapterContent = {
  bigQuestion: "How can “you own what you make” end with workers owning nothing they make?",

  story: (
    <>
      <p>
        Today&apos;s book on the Old Thinkers&apos; Shelf is French, from 1841, with a short title: <em>Rich or Poor</em>. Its
        author is Antoine Cherbuliez, from Switzerland.
      </p>
      <p>
        Mia reads the first rule aloud and nods. &ldquo;A worker owns what her own work makes. Of course! My bread is mine.&rdquo;
      </p>
      <p>
        Then she turns the page, and her face falls. &ldquo;Wait. By the same rule, Sam&apos;s yarn belongs to Mr. Moneybags?
        How did that happen?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      If Mr. Moneybags supplies the cotton, the spindles and Sam&apos;s food, and Sam does all the spinning, who should own the
      yarn? Is there more than one fair answer?
    </p>
  ),

  struggle: [<RightUpsideDown key="a" />],
  reveal: [<SmallerShare key="b" />],

  eli5: "Cherbuliez said workers own what they make, then said the boss owns everything because he paid for the materials. Marx said that is a rule turned upside down. Cherbuliez also saw that machines grow faster than wages, so fewer workers are needed.",

  grownUp: (
    <>
      <p>
        Antoine-Elisée Cherbuliez&apos;s <em>Richesse ou pauvreté</em> (Paris, 1841, first published in Geneva as{" "}
        <em>Riche ou pauvre</em>) draws mostly on Sismondi. Marx even wonders whether he deserves a section of his own.
      </p>
      <p>
        Cherbuliez&apos;s <strong>law of appropriation</strong> starts from &ldquo;the exclusive right of every worker to the
        product of his labour&rdquo;. But once a capitalist provides the raw materials and the means of subsistence, he says, the
        products belong exclusively to the capitalist, and this is an inescapable result of the same law. Marx answers that
        this is really a law of &ldquo;expropriation&rdquo;, not &ldquo;appropriation&rdquo;. The propertyless worker is not a
        natural starting point but a product of history and of capitalist production. Volume I, Chapter 24 makes the same point:
        the law of property based on commodity production turns into its opposite.
      </p>
      <p>
        Cherbuliez also sees that as capital accumulates, the part spent on machinery and materials grows faster than the part
        spent on wages. So the demand for labour falls relatively, and a part of the working population becomes redundant.
        Marx agrees with this observation, which anticipates his own law of accumulation (Volume I, Chapter 25), but calls
        Cherbuliez an eclectic who combines mutually exclusive ideas of Ricardo and Sismondi.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      Cherbuliez saw two important things: that &ldquo;you own what you make&rdquo; turns into the boss owning everything once
      workers have nothing of their own, and that machines crowd out workers relatively as capital grows. But he presented the
      first as a natural law, when Marx sees it as a historical result.
    </p>
  ),

  critics: [
    {
      who: "Defenders of the property rule",
      point: (
        <p>
          Many economists and philosophers argue there is no contradiction: Sam agreed to a wage in advance, and Mr. Moneybags
          bought the right to the yarn by supplying everything else and taking the risk of selling it. A free contract, on this
          view, is a fair way to share a joint product.
        </p>
      ),
    },
    {
      who: "Economic historians",
      point: (
        <p>
          Critics point out that over the long run the number of workers employed has grown hugely alongside machinery, even if
          the wage share of capital fell in some periods. They see Cherbuliez&apos;s and Marx&apos;s &ldquo;relative
          redundancy&rdquo; as real in particular trades but not as a general fate.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Cherbuliez's rule starts with...",
      options: ["The boss owns everything", "Every worker has a right to the product of his own labour", "Nobody owns anything"],
      answer: 1,
      why: "That is his starting principle, which he then says leads to the capitalist owning everything.",
    },
    {
      q: "What does Marx call Cherbuliez's law of appropriation?",
      options: ["A law of expropriation", "A law of gravity", "A law of rent"],
      answer: 0,
      why: "A rule that ends with workers owning nothing they make is, Marx says, really a law of expropriation.",
    },
    {
      q: "As the workshop grows, which part of the capital grows faster in Cherbuliez's account?",
      options: ["Wages", "Machinery and materials", "Neither"],
      answer: 1,
      why: "So the share going to wages falls, and fewer workers are needed relative to the capital.",
    },
  ],

  remember: [
    "Cherbuliez (1841) began: a worker owns what his labour makes.",
    "He ended: once the boss supplies materials and food, the boss owns the whole product.",
    "Marx: that is a law of expropriation, a result of history, not a natural law.",
    "Cherbuliez also saw machines growing faster than wages, so workers are needed relatively less.",
  ],

  terms: ["law-of-appropriation"],

  source: (
    <p>
      Covers Volume IV (Theories of Surplus-Value, Part III), Chapter 23 (&ldquo;Cherbuliez&rdquo;), Progress Publishers
      edition as hosted on marxists.org. Marx&apos;s source: Cherbuliez, <em>Richesse ou pauvreté</em>, Paris, 1841 (reprint of
      the Geneva edition, <em>Riche ou pauvre</em>). Quoted phrases: &ldquo;the exclusive right of every worker to the product
      of his labour&rdquo;; a law of &ldquo;expropriation&rdquo; not of &ldquo;appropriation&rdquo;. The numbers in 23.2 are
      made up and labelled. Theories of Surplus-Value is not part of Capital proper; Karl Kautsky first edited it (1905 to
      1910).
    </p>
  ),
};

export default chapter;
