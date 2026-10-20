import type { ChapterContent } from "@/components/ChapterTemplate";
import { QuesnaysZigzag, TheSeedCorn, WhatSmithForgot } from "./ch19-animations";

const chapter: ChapterContent = {
  bigQuestion: "Who first tried to draw a whole economy on one page, and what did the great Adam Smith forget?",

  story: (
    <>
      <p>
        Bea the banker is clearing out her shelves, and she lends Leo two very old books. One is a French chart covered
        in zigzag lines, drawn more than a hundred years earlier by a doctor named Quesnay. The other is Adam
        Smith&apos;s famous book, <em>The Wealth of Nations</em>.
      </p>
      <p>
        Leo starts with Smith, who says that the price of every thing is made of just three parts: wages, profit and
        rent. Leo frowns and looks at his loom. &ldquo;Then where is my loom in that? Where is the linen in a
        coat?&rdquo;
      </p>
      <p>
        Grandpa Ned, who has just brought in his harvest, adds his own puzzle. &ldquo;If all my wheat is wages, profit
        and rent, I could eat every sack. So what would I sow next spring?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      The price of a coat includes the linen inside it. The price of the linen includes the loom. Do you think you can
      keep passing the question back forever, or does something get lost along the way?
    </p>
  ),

  struggle: [<QuesnaysZigzag key="a" />, <WhatSmithForgot key="b" />],
  reveal: [<TheSeedCorn key="c" />],

  eli5: "A doctor called Quesnay drew money going round between farmers, landowners and artisans, and Marx liked his picture a lot. Adam Smith said every price is only wages, profit and rent. Marx said Smith forgot the part that must be kept back to replace the seed, tools and materials.",

  grownUp: (
    <>
      <p>
        Before solving the puzzle of social reproduction, Marx reviews earlier attempts. Quesnay&apos;s{" "}
        <strong>Tableau Économique</strong> shows &ldquo;in a few broad outlines&rdquo; how a nation&apos;s annual
        product is distributed by circulation so that simple reproduction can continue. Among Quesnay&apos;s three
        classes, the capitalist farmer is the producer of surplus-value, the landowners merely appropriate it as rent,
        and the artisans exchange with both. Part of the product, the seed and stock, never circulates at all: it stays
        with the farmers to restart production. Quesnay thus &ldquo;strikes upon the main thing&rdquo;, the replacement
        of constant capital, even though he believed only agriculture produced a surplus. Marx calls the physiocrats&apos;
        system &ldquo;the first systematic conception of capitalist production&rdquo;.
      </p>
      <p>
        Adam Smith took over Quesnay&apos;s advances and renamed them fixed and circulating capital, but in the analysis
        of reproduction Marx sees a &ldquo;retrogression&rdquo;. According to <strong>Smith&apos;s dogma</strong>, the
        price of every commodity, and so of the whole annual product, resolves into wages, profit and rent: in
        Marx&apos;s symbols, v + s. When Smith admits that the price of corn also contains the means of production used
        up, he pushes them back again: their price, too, resolves into wages, profit and rent. Marx says his proof
        consists simply in repeating the assertion. If it were true, the whole product could be consumed, and nothing
        would replace the constant capital c.
      </p>
      <p>
        Smith patches the hole with <strong>gross and net revenue</strong>: net revenue is what remains after
        maintaining fixed and circulating capital. Marx shows this smuggles capital back in as a fourth element. Later
        economists mostly followed Smith; Ricardo &ldquo;reproduces the theory of Adam Smith almost verbatim&rdquo;,
        while Storch noticed that the products representing a nation&apos;s capital &ldquo;are not consumable&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Economics went backwards between Quesnay and Smith on this one question. Quesnay, for all his mistakes, saw that
        part of each year&apos;s product has to go back into production. Smith&apos;s rule that every price is only
        wages, profit and rent hid that part, and economists after him inherited the blind spot.
      </p>
      <p>
        To understand how a whole economy reproduces itself, Marx says, you must keep three parts in view: the value
        carried over from used-up means of production (c), the replaced wages (v), and the surplus-value (s).
      </p>
    </>
  ),

  critics: [
    {
      who: "Smith was measuring something else",
      point: (
        <p>
          Modern economists point out that national income, the value added in a year, really is the sum of wages,
          profits and rents, once you net out the materials used up between firms. On this view Smith described net
          income correctly and simply did not focus on gross output. Marx agreed that newly added value is v + s; his
          complaint was that Smith treated it as the whole value of the product.
        </p>
      ),
    },
    {
      who: "Whose heir is Quesnay?",
      point: (
        <p>
          Historians of economics such as Joseph Schumpeter admired Quesnay as a forerunner of the general picture of an
          economy as a system of interlocking flows, later developed in ways that owe nothing to Marx&apos;s value
          theory. Quesnay&apos;s claim that only land produces a surplus is rejected by nearly everyone, Marx included.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which three groups did Quesnay put in his Tableau Économique?",
      options: ["Farmers, landowners and artisans", "Bankers, merchants and kings", "Workers, bosses and the state"],
      answer: 0,
      why: "Money flows between farmers, landowners and artisans so that the next year can begin.",
    },
    {
      q: "What did Adam Smith's rule leave out of the price of everything?",
      options: [
        "The wages of the workers",
        "The value of the materials and machines used up, the constant capital",
        "The rent of the land",
      ],
      answer: 1,
      why: "Smith split every price into wages, profit and rent. Marx says the used-up means of production, c, vanished.",
    },
    {
      q: "Why can't Grandpa Ned eat all 10 sacks of his harvest?",
      options: ["Wheat tastes bad", "He must keep some back as seed to sow next year", "The landlord takes all of it"],
      answer: 1,
      why: "Part of every year's product has to replace what was used up. That part cannot be eaten as revenue.",
    },
  ],

  remember: [
    "Quesnay's Tableau showed money flowing between farmers, landowners and artisans so the country could restart each year.",
    "Marx called the physiocrats' system the first systematic picture of capitalist production.",
    "Smith's dogma: every price is wages, profit and rent. It forgets the constant capital.",
    "Every year's product is c + v + s, and the c must go back into production.",
  ],

  terms: ["tableau-economique", "smiths-dogma", "net-revenue"],

  source: (
    <p>
      Covers Volume II, Chapter 19 (&ldquo;Former Presentations of the Subject&rdquo;): the physiocrats, Adam Smith (his
      general points of view, the resolution of exchange-value into v + s, constant capital, capital and revenue) and
      later economists. From Marx&apos;s text: the Tableau &ldquo;in a few broad outlines&rdquo;; &ldquo;the first
      systematic conception of capitalist production&rdquo;; Smith&apos;s &ldquo;retrogression&rdquo;; gross and net
      revenue; Ricardo &ldquo;almost verbatim&rdquo;; Storch&apos;s &ldquo;not consumable&rdquo;. Engels assembled
      Volume II from Marx&apos;s manuscripts and published it in 1885. The date 1758, the simplified flows of the
      Tableau and Ned&apos;s 10 sacks are this site&apos;s illustrations; Marx analyses the Tableau in full in{" "}
      <em>Theories of Surplus-Value</em>.
    </p>
  ),
};

export default chapter;
