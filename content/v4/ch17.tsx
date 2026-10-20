import type { ChapterContent } from "@/components/ChapterTemplate";
import { HalvesComeApart, SaysBalance, WantingIsNotPaying } from "./ch17-animations";

const chapter: ChapterContent = {
  bigQuestion: "How can a town have too much of everything and still have people going without?",

  story: (
    <>
      <p>
        It is a strange winter in Tiny Town. Mr. Moneybags&apos; warehouse is stuffed with coats and yarn. Ava has a whole
        rail of coats nobody has bought. And yet Sam&apos;s little sister shivers on the way to school.
      </p>
      <p>
        Back at the library, two books on the Old Thinkers&apos; Shelf are arguing. One is by Jean-Baptiste Say, a French
        economist, and the other by David Ricardo. &ldquo;Too much of everything? Impossible,&rdquo; they say together.
        &ldquo;Everybody who sells is also a buyer. The market always clears.&rdquo;
      </p>
      <p>
        Sam looks out of the window at the full warehouse and his cold sister. &ldquo;Then what is happening out
        there?&rdquo; he asks.
      </p>
    </>
  ),

  guess: (
    <p>
      If Leo sells his linen for coins, does he have to spend those coins straight away? What might happen to Ava and Mia
      if lots of people decide to hold on to their coins at the same time?
    </p>
  ),

  struggle: [<SaysBalance key="a" />],
  reveal: [<HalvesComeApart key="b" />, <WantingIsNotPaying key="c" />],

  eli5: "Say and Ricardo thought every seller is also a buyer, so things can never pile up unsold. Marx said money lets people sell now and buy later, so the chain can break. And workers who need things often can't pay, so warehouses fill while people go without.",

  grownUp: (
    <>
      <p>
        This long chapter of the <strong>bonus volume</strong> starts from Ricardo&apos;s theory of accumulation and
        becomes Marx&apos;s most sustained discussion of economic crises anywhere in his writings.
      </p>
      <p>
        Ricardo adopted from Say and James Mill the idea now called <strong>Say&apos;s law</strong>: products are exchanged
        for products, so every supply is at the same time a demand. Mill spoke of a &ldquo;metaphysical equilibrium of
        sellers and buyers&rdquo;. From this Ricardo concluded that a <strong>general glut</strong>, an over-production of
        all commodities at once, is impossible, and that any amount of capital can be employed productively in a country.
        Particular goods may be over-supplied, but only because others are under-supplied.
      </p>
      <p>
        Marx answers in steps. First, the argument treats capitalism as if it were barter. With money, the sale (C&ndash;M)
        and the purchase (M&ndash;C) are separate acts that can come apart in time and place. That separation, he says,
        contains the <em>possibility</em> of crisis. &ldquo;Crisis is nothing but the forcible assertion of the unity of
        phases of the production process which have become independent of each other.&rdquo; Money as a means of payment,
        with chains of debts, widens the gap.
      </p>
      <p>
        Second, what turns possibility into recurring fact is the nature of capitalist production. Production expands to
        the limit set by capital and the capitalists&apos; drive to enlarge it, not by consumption, while the mass of the
        population can expand their consumption only &ldquo;within very narrow limits&rdquo;. Over-production, Marx
        stresses, has nothing to do with absolute needs: it concerns only &ldquo;demand that is backed by ability to pay.&rdquo;
        Crises are where all the contradictions of the system come to the surface.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Gluts of everything at once are not a mistake in the sums but something built into an economy run on money and
        profit. The very things that make capitalism dynamic, money that lets you sell without buying straight away, and
        bosses racing to produce more, also make it lurch into crises again and again.
      </p>
      <p>
        Marx leaves no single neat &ldquo;crisis theory&rdquo; here; he lays out several pressures that work together. Later
        readers have built different theories (about under-consumption, disproportion, or falling profit) on these pages.
      </p>
    </>
  ),

  critics: [
    {
      who: "Keynes and his followers",
      point: (
        <p>
          John Maynard Keynes (<em>General Theory</em>, 1936) also rejected Say&apos;s law, arguing that people can hold
          on to money and that total demand can fall short of what the economy could produce. Keynesians agree with Marx
          that general gluts are possible, but they think governments and central banks can manage demand and soften
          crises, rather than that crises are built in for good.
        </p>
      ),
    },
    {
      who: "Defenders of Say",
      point: (
        <p>
          Economists in the classical and later the &ldquo;new classical&rdquo; tradition reply that Say&apos;s law holds
          in the long run: prices, wages and interest rates adjust until goods are bought. On this view slumps come from
          shocks or bad policy, such as mistakes with money, rather than from the market itself. How quickly markets
          really adjust is still one of the biggest arguments in economics.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What does Say's law claim?",
      options: ["Prices always rise", "Every sale is also a purchase, so there can be no glut of everything", "Banks cause crises"],
      answer: 1,
      why: "Say, James Mill and Ricardo held that supply creates its own demand, so a general glut is impossible.",
    },
    {
      q: "What does money change, according to Marx?",
      options: [
        "Nothing at all",
        "Selling and buying become two separate steps that can come apart",
        "It makes everyone richer",
      ],
      answer: 1,
      why: "With money you can sell now and buy later, or not at all. That split is where the possibility of crisis begins.",
    },
    {
      q: "Why can coats pile up while Sam's family is cold?",
      options: [
        "Sam's family doesn't need coats",
        "Need is not demand: the family has no money to back their wants",
        "The coats are the wrong colour",
      ],
      answer: 1,
      why: "Marx says over-production is about “demand that is backed by ability to pay”, not about what people need.",
    },
  ],

  remember: [
    "Say's law: every seller is also a buyer, so there can never be too much of everything. Ricardo agreed.",
    "Marx: with money, selling and buying are two separate steps, and they can come apart.",
    "A crisis is the painful moment when steps that drifted apart are forced back together.",
    "Workers' buying power is kept within narrow limits while production races ahead.",
    "Need is not demand: warehouses can be full while people go without.",
  ],

  terms: ["says-law", "general-glut"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter 17 (&ldquo;Ricardo&apos;s Theory of Accumulation and a Critique
      of it. (The Very Nature of Capital Leads to Crises)&rdquo;), Progress Publishers translation on marxists.org. These
      are Marx&apos;s 1861 to 1863 notebooks, first edited by Karl Kautsky. Quoted phrases (&ldquo;metaphysical
      equilibrium of sellers and buyers&rdquo;, &ldquo;Crisis is nothing but the forcible assertion of the unity&rdquo;,
      &ldquo;within very narrow limits&rdquo;, &ldquo;demand that is backed by ability to pay&rdquo;) are from the
      chapter; Mill&apos;s phrase is quoted there by Marx. The chapter also covers accumulation and fixed capital,
      which are left out here for clarity.
    </p>
  ),
};

export default chapter;
