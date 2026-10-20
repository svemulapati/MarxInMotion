import type { ChapterContent } from "@/components/ChapterTemplate";
import { SmithsTwoMinds, TwoMovements } from "./ch10-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is the price a thing settles at the same as its value?",

  story: (
    <>
      <p>
        At the Old Thinkers&apos; Shelf, two of the most famous books sit side by side: Adam Smith&apos;s and David
        Ricardo&apos;s. Sam and Ava have come to settle an argument.
      </p>
      <p>
        Ava&apos;s coats take a lot of sewing, but they sell for about the same as Mr. Moneybags&apos; yarn, which takes
        far less work because of his machines. &ldquo;So value can&apos;t be about work at all,&rdquo; says Sam. &ldquo;It
        must just be whatever price things settle at.&rdquo;
      </p>
      <p>
        Ricardo&apos;s book says value comes from work. Smith&apos;s book says, in one chapter, that profit is taken out of
        what workers make, and in another that a price is simply wages plus profit plus rent, added up.
      </p>
      <p>Who is right? And is the price things settle at really the same thing as their value?</p>
    </>
  ),

  guess: (
    <p>
      Prices go up and down every day. But underneath, do you think things settle around their value, or around
      something else? And could the great thinkers have mixed those two up?
    </p>
  ),

  struggle: [<TwoMovements key="a" />],
  reveal: [<SmithsTwoMinds key="b" />],

  eli5: "Things don't settle at their value: competition makes them settle at a price where every boss gets the same profit. Ricardo mixed that price up with value, and Smith said a price is just wages, profit and rent added up. Marx says profit and rent are really slices of what workers made.",

  grownUp: (
    <>
      <p>
        In this chapter Marx argues that both Ricardo and Smith confused <strong>value</strong> with
        <strong> cost-price</strong>, his word in these notebooks for what Volume III calls the price of production: cost
        plus average profit. Two different movements are at work. First, competition between capitals turns values into
        cost-prices, so that equal capitals earn equal profits; goods from machine-heavy trades sell above their value and
        goods from labour-heavy trades below it. Second, day-to-day market prices rotate around those cost-prices.
      </p>
      <p>
        Ricardo examined the second movement, which he treats as market-price returning to the
        <strong> natural price</strong>. But in his Chapter XXX, Marx notes, he &ldquo;expressly identifies natural price, that
        is, cost-price, with natural value&rdquo;. This error goes back to his first chapter, where he brought in the
        general rate of profit while still explaining value. So he could not see how values are transformed into
        cost-prices, and he identified profit directly with surplus-value.
      </p>
      <p>
        Smith had two minds. In his chapter on wages he starts from the necessary wage and shows &ldquo;the true nature of
        surplus-value&rdquo;, treating profit and rent as deductions. But his theory of natural price rests on the
        &ldquo;false assumption, that the three elements independently determine the value of the commodity&rdquo;.
        Ricardo, Marx says, was right against Smith that it is the average rate of profit, at given wages, which determines
        cost-prices.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Prices are not values, and they are not simply wages, profit and rent added up. Work sets the total value; then
        competition redistributes the surplus-value, so individual prices drift away from individual values. To
        understand capitalism you need both steps, and the great economists before Marx skipped the first.
      </p>
      <p>Marx works this out fully in Volume III, Chapter 9.</p>
    </>
  ),

  critics: [
    {
      who: "Sraffa and Steedman",
      point: (
        <p>
          Piero Sraffa (1960) showed how to work out prices of production directly from the methods of production and the
          wage, without first calculating labour values. Ian Steedman (1977) argued this makes the detour through values
          unnecessary. Marx&apos;s defenders reply that values still explain where profit comes from, even if prices can
          be calculated without them.
        </p>
      ),
    },
    {
      who: "Admirers of Ricardo",
      point: (
        <p>
          Many historians of economics think Ricardo knew prices differ from labour values and treated labour as a good
          approximation, not an exact rule. On that reading he did not confuse the two so much as simplify on purpose.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In these notebooks, what does Marx mean by cost-price?",
      options: ["What the boss paid for wages only", "Cost plus the average profit", "The price on a bad day"],
      answer: 1,
      why: "It is what Volume III calls the price of production: cost plus average profit. Things settle around it, not around their value.",
    },
    {
      q: "Which mix-up does Marx find in Ricardo?",
      options: [
        "He treated the natural price as if it were the value itself",
        "He forgot that prices change",
        "He said work has no value",
      ],
      answer: 0,
      why: "Ricardo called the centre that prices swing around both 'natural price' and 'natural value', hiding how values become cost-prices.",
    },
    {
      q: "What is Smith's 'second mind' about prices?",
      options: [
        "Profit and rent are slices of what labour made",
        "Price is built by adding wages, profit and rent, each with its own natural rate",
        "Price never changes",
      ],
      answer: 1,
      why: "That is the view Marx rejects. Smith's first view, profit and rent as deductions from what labour made, is the one Marx keeps.",
    },
  ],

  remember: [
    "Competition makes goods sell around their cost-price (price of production), not their value.",
    "Market prices then swing up and down around that cost-price.",
    "Ricardo saw the swinging but treated the centre as if it were the value itself.",
    "Smith first saw profit and rent as slices of what labour made, then described price as wages plus profit plus rent.",
    "Marx keeps Smith's first view and adds the missing step from value to cost-price.",
  ],

  terms: ["natural-price"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter X (&ldquo;Ricardo&apos;s and Adam Smith&apos;s Theory of
      Cost-Price (Refutation)&rdquo;), shown here as Volume IV, Chapter 10. The text is Marx&apos;s 1861 to 1863
      manuscript, first edited by Karl Kautsky (1905 to 1910); this site follows the Progress Publishers English edition
      on marxists.org. In these notebooks &ldquo;cost-price&rdquo; means cost plus average profit, what Volume III calls
      the price of production. From the text: the two movements (values into cost-prices; market-prices rotating around
      cost-price); Ricardo identifying natural price with natural value in his Chapter XXX; Smith&apos;s &ldquo;false
      assumption, that the three elements independently determine the value&rdquo;; Smith&apos;s chapter on wages. The
      values 110 and 130 and the cost-price 120 in animation 10.1 are this site&apos;s; animation 10.2 uses the
      workshop&apos;s 6 coins of new value.
    </p>
  ),
};

export default chapter;
