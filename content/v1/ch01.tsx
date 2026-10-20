import type { ChapterContent } from "@/components/ChapterTemplate";
import { HowMoneyWasBorn, SlowLeoAndTheMachineLoom, TwoFacesOfACoat, WhatThePriceTagHides } from "./ch01-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why is one coat worth the same as a big roll of cloth?",

  story: (
    <>
      <p>
        Tiny Town is a small place with a river, a bakery and a market square. Leo the weaver spends his days at his
        loom, making long rolls of linen cloth. Across the square, Ava the tailor sews coats.
      </p>
      <p>
        Winter is coming. Leo needs a coat, and Ava needs cloth for her next coats. So they meet in the market to swap.
        But how much cloth is one coat worth?
      </p>
      <p>
        Leo offers 5 yards. Ava laughs. &ldquo;That took you hardly any time at all!&rdquo; Ava asks for 100 yards. Now
        Leo gasps. &ldquo;That would take me weeks!&rdquo;
      </p>
      <p>
        Mia the baker has been listening from her stall. &ldquo;You two are both counting something,&rdquo; she says.
        &ldquo;You just haven&apos;t noticed what it is.&rdquo;
      </p>
      <p>What are they counting? That is the puzzle of this chapter, and it is the very first puzzle in Marx&apos;s whole book.</p>
    </>
  ),

  guess: (
    <p>
      When Leo and Ava argue about how much cloth a coat is worth, what do you think they are really comparing? How
      heavy things are? How pretty they are? Or something else? Hold your guess in your head, then press play.
    </p>
  ),

  struggle: [<TwoFacesOfACoat key="a" />, <SlowLeoAndTheMachineLoom key="b" />],
  reveal: [<HowMoneyWasBorn key="c" />, <WhatThePriceTagHides key="d" />],

  eli5: "Things people make are useful, and they can also be swapped. When we swap them, we are secretly comparing how much work went into each one. Money is the thing everyone agreed to use for that comparing.",

  grownUp: (
    <>
      <p>
        Marx starts Capital with the <strong>commodity</strong>: a product made to be exchanged rather than used by the
        person who made it. He starts here because in a capitalist society, wealth mostly shows up as a huge pile of
        things for sale.
      </p>
      <p>
        A commodity has two sides. Its <strong>use-value</strong> is its usefulness: the coat keeping Leo warm. Its{" "}
        <strong>exchange-value</strong> is the rate at which it swaps for other things: 1 coat for 20 yards of linen.
        Behind exchange-value Marx finds <strong>value</strong>, which he measures by{" "}
        <strong>socially necessary labour time</strong>: the time it takes to make the thing under normal conditions,
        with average skill and the usual tools. That is why Slow Leo&apos;s extra hours do not count, and why the machine
        loom lowers the value of every roll in town.
      </p>
      <p>
        Work has two sides too. <strong>Concrete labour</strong> is the particular job, sewing or weaving, and it makes
        the use-value. <strong>Abstract labour</strong> is work counted only as human effort over time, and it makes the
        value. That is how a coat and some cloth can be compared at all.
      </p>
      <p>
        Next Marx traces the <strong>value-form</strong>, the ways value gets expressed: the simple form (20 yards of
        linen = 1 coat), the expanded form, the general form, and finally the <strong>money form</strong>, where one
        commodity, gold, becomes the measure for all the others and their values show up as prices.
      </p>
      <p>
        Last comes the <strong>fetishism of commodities</strong>. Because people who make things meet each other only
        through buying and selling, the relations between their kinds of work look like relations between things. Value
        seems to live inside Mia&apos;s loaf, like a natural property, when it really comes from the work of Grandpa Ned
        and Mia.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        In a society where things are made to be sold, what decides how much things are worth, over the long run, is
        how much of society&apos;s working time it takes to make them. Money and prices do not float free of that. They
        are how that hidden work gets measured and compared.
      </p>
      <p>
        Two limits matter. A thing has to be useful to have value: work spent on something nobody can use is wasted and
        makes no value. And a thing can be useful without having value, like air or wild fruit, because no work went
        into making it. Marx also knew that everyday prices rise and fall with supply and demand. His claim in this
        chapter is about what sits underneath those ups and downs.
      </p>
    </>
  ),

  critics: [
    {
      who: "The marginalist economists",
      point: (
        <p>
          From the 1870s, economists such as Carl Menger and William Stanley Jevons argued that prices come from how
          much people want one more unit of a thing, and how scarce it is, not from hours of work. A rare old painting
          or a fine wine sells for far more than the work in it. Most economists today explain prices with supply,
          demand and these &ldquo;marginal&rdquo; choices rather than with labour time.
        </p>
      ),
    },
    {
      who: "The measuring problem",
      point: (
        <p>
          Critics such as Eugen von Böhm-Bawerk asked how an hour of a surgeon&apos;s work compares with an hour of a
          porter&apos;s. Marx says skilled work counts as a multiple of simple work, but critics argue there is no way to
          find that multiple without already looking at prices, which makes the argument go in a circle. Marx&apos;s
          defenders reply that markets do this comparing in practice, behind everyone&apos;s backs, which is exactly his
          point.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Ava's coat keeps Leo warm. What does Marx call that side of the coat?",
      options: ["Its exchange-value", "Its use-value", "Its price"],
      answer: 1,
      why: "Use-value is what a thing is good for. Keeping warm is what a coat is good for.",
    },
    {
      q: "Slow Leo takes 20 hours to weave a roll that other weavers make in 10. How much value is in his roll?",
      options: ["20 hours' worth", "10 hours' worth", "30 hours' worth"],
      answer: 1,
      why: "Only socially necessary labour time counts: the usual time, with the usual tools. Dawdling adds nothing.",
    },
    {
      q: "Leo spends a whole week weaving cloth so full of holes that nobody can use it. How much value does it have?",
      options: ["A week's worth", "Half a week's worth", "None at all"],
      answer: 2,
      why: "Marx says that if a thing is useless, the work in it is wasted too, and it creates no value.",
    },
  ],

  remember: [
    "Every commodity has two faces: its use-value (what it is good for) and its exchange-value (what it swaps for).",
    "Hiding behind every swap is value: the usual amount of work it takes to make the thing.",
    "Money grew out of swapping. Gold became the one thing everything else is measured in, and that measure is a price.",
    "Price tags make it look as if value lives inside things. Marx says it comes from people's work, and called this illusion commodity fetishism.",
  ],

  terms: [
    "commodity",
    "use-value",
    "exchange-value",
    "value",
    "socially-necessary-labour-time",
    "concrete-labour",
    "abstract-labour",
    "money-commodity",
    "commodity-fetishism",
  ],

  source: (
    <p>
      Covers Volume I, Chapter 1 (Fowkes: &ldquo;The Commodity&rdquo;; Moore and Aveling: &ldquo;Commodities&rdquo;),
      all four sections: the two factors of the commodity, the dual character of labour, the value-form, and the
      fetishism of the commodity. The linen, coat, tea, coffee, corn and gold examples and the English power-loom
      example are Marx&apos;s own. The hours, the Tiny Town people, and the &ldquo;sack&rdquo; of corn (Marx says a
      &ldquo;quarter&rdquo;, an old grain measure) belong to this site.
    </p>
  ),
};

export default chapter;
