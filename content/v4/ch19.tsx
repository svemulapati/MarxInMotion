import type { ChapterContent } from "@/components/ChapterTemplate";
import { BuyersWhoNeverSell, MalthusPriceTag } from "./ch19-animations";

const chapter: ChapterContent = {
  bigQuestion: "Does a town need some people who spend lots but make nothing, just to keep the shops busy?",

  story: (
    <>
      <p>
        At the Tiny Town fair, the Landlord arrives in a smart carriage and buys silk ribbons, wine, a clock and three new
        coats, all in one afternoon. The shopkeepers bow and smile. Tom whispers, &ldquo;Thank goodness for him. Without
        people like that, half my stock would never sell.&rdquo;
      </p>
      <p>
        The next book on the Old Thinkers&apos; Shelf nods in agreement. It belongs to Thomas Robert Malthus, a clergyman
        who taught economics and was Ricardo&apos;s friend and fiercest rival. &ldquo;Exactly,&rdquo; says Malthus.
        &ldquo;A country needs rich people who spend, or its goods will pile up unsold.&rdquo;
      </p>
      <p>Sam frowns. The Landlord didn&apos;t make anything. Where did all his money come from?</p>
    </>
  ),

  guess: (
    <p>
      If Mr. Moneybags sells his yarn for 30 coins, where do you think the extra 3 coins come from: from adding a bit
      onto the price, or from somewhere inside the workshop? And if the Landlord&apos;s money comes from rent, is he
      really adding anything when he spends it?
    </p>
  ),

  struggle: [<MalthusPriceTag key="a" />],
  reveal: [<BuyersWhoNeverSell key="b" />],

  eli5: "Malthus thought profit is an extra added onto the price, and that rich people who only spend are needed to buy the extra goods. Marx said profit is made in the hours workers aren't paid for, and the big spenders only spend money they took from others first. But Malthus was right to worry that sometimes there isn't enough buying.",

  grownUp: (
    <>
      <p>
        This chapter of the <strong>bonus volume</strong> examines Thomas Robert Malthus, best known for his theory of
        population, here as an economist and opponent of Ricardo in works such as his <em>Principles of Political
        Economy</em> (1820).
      </p>
      <p>
        Marx says Malthus started from &ldquo;a correct surmise&rdquo;: he sensed the unsolved difficulty in how
        Ricardo&apos;s labour theory explained profit. But his own solution treated profit as a{" "}
        <strong>nominal surcharge</strong> added to the cost of production when goods are sold, a return to the old idea of
        profit from selling dear. If every capitalist adds a surcharge, they simply cheat one another and nothing is
        gained overall, the same problem Volume I, Chapter 5 sets out.
      </p>
      <p>
        So Malthus needed &ldquo;buyers who are not sellers&rdquo;: a third class that buys without selling, paying the
        surcharge without passing it on. Marx lists them as &ldquo;landlords, pensioners, sinecurists, priests,
        etc.&rdquo; and their servants. Malthus called them <strong>unproductive consumers</strong>, and argued that their
        spending protects the economy from gluts. Marx objects that their money comes from rent and taxes, that is, from a
        share of surplus-value taken from capitalists and workers in the first place.
      </p>
      <p>
        Marx is unusually harsh: he accuses Malthus of plagiarism in his population theory and of speaking for the
        landlords. Yet he concedes that Malthus &ldquo;presented a certain theoretical, speculative interest&rdquo;, and
        unlike Ricardo, Malthus took seriously the possibility of general gluts.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Profit is not a mark-up added at the till, so no special class of big spenders is needed to make profit possible.
        The surplus is made in production, in unpaid labour. Spending by landlords and officials only moves around value
        that workers created.
      </p>
      <p>
        At the same time Marx and Malthus agree on one thing against Ricardo and Say: there can be too little demand to
        buy everything produced. They disagree completely about why, and about whose spending should fix it.
      </p>
    </>
  ),

  critics: [
    {
      who: "Keynes on Malthus",
      point: (
        <p>
          John Maynard Keynes admired Malthus, writing that it would have been better for the world if economics had
          followed Malthus rather than Ricardo, because Malthus understood &ldquo;effective demand&rdquo;. In
          Keynes&apos;s view, spending of all kinds, including government spending, can lift an economy out of a slump. He
          did not share Malthus&apos;s praise of idle landlords, but he defended the idea that demand matters.
        </p>
      ),
    },
    {
      who: "On Marx's tone",
      point: (
        <p>
          Historians of economic thought often say Marx is unfair to Malthus here. The charge of plagiarism is disputed,
          and Malthus&apos;s population theory, whatever its faults, raised real questions about food and growth. Some
          readers also note that Marx&apos;s own crisis theory has things in common with Malthus&apos;s worry about gluts.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "How did Malthus explain profit?",
      options: ["As unpaid labour", "As an extra added on top of the cost when goods are sold", "As a gift from nature"],
      answer: 1,
      why: "Marx calls Malthus's idea a “nominal surcharge” added to the cost of production.",
    },
    {
      q: "Who were Malthus's “unproductive consumers”?",
      options: [
        "Factory workers",
        "People like landlords, pensioners and priests who buy but never sell",
        "Farmers who grow too little",
      ],
      answer: 1,
      why: "Marx calls them “buyers who are not sellers”: landlords, pensioners, sinecurists, priests and their servants.",
    },
    {
      q: "What was Marx's main objection to relying on them?",
      options: [
        "They don't like yarn",
        "Their money comes from rents and taxes taken from others first",
        "There are too many of them",
      ],
      answer: 1,
      why: "They spend a share of surplus-value they already took, so they add no new buying power of their own.",
    },
  ],

  remember: [
    "Malthus saw profit as a surcharge added onto the cost when goods are sold.",
    "If every boss adds a surcharge, they just cheat each other, so Malthus needed buyers who never sell.",
    "His “unproductive consumers”: landlords, pensioners, priests and their servants.",
    "Marx: their money comes from rents and taxes, so they only hand back what was taken.",
    "Malthus was right to worry about demand falling short, which Keynes later praised.",
  ],

  terms: ["unproductive-consumers", "nominal-surcharge"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part III, Chapter 19 (&ldquo;Thomas Robert Malthus&rdquo;), Progress Publishers
      translation on marxists.org; Marx&apos;s 1861 to 1863 notebooks, first edited by Karl Kautsky. Quoted phrases
      (&ldquo;a correct surmise&rdquo;, &ldquo;nominal surcharge&rdquo;, &ldquo;buyers who are not sellers&rdquo;,
      &ldquo;landlords, pensioners, sinecurists, priests, etc.&rdquo;, &ldquo;a certain theoretical, speculative
      interest&rdquo;) are from the chapter. Marx dates Malthus&apos;s <em>Principles</em> &ldquo;1820 or
      thereabout&rdquo;. The 27 and 30 coin figures are the site&apos;s workshop numbers. Keynes&apos;s praise of Malthus
      is from his <em>Essays in Biography</em> (1933), general history rather than Marx.
    </p>
  ),
};

export default chapter;
