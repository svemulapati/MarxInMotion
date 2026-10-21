import type { ChapterContent } from "@/components/ChapterTemplate";
import { SeeSawAroundTheCost, ThreeTugsOfWar } from "./ch03-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why do prices go up and down, and what do they keep coming back to?",

  story: (
    <>
      <p>
        Wages are the price of labour-power. So to understand wages, Marx says, we first need to understand prices. And
        in Tiny Town, prices never sit still.
      </p>
      <p>
        One week a ship full of cotton is late, and the price of cotton jumps. Every spinner in town rushes to buy what
        little there is. The next month three ships arrive at once, the warehouses overflow, and the cotton sellers
        practically beg people to take it.
      </p>
      <p>
        Tom the shopkeeper sighs. &ldquo;Up, down, up, down. Is there any sense to it?&rdquo; Mr. Moneybags taps his
        ledger. &ldquo;I know what I paid to make my yarn,&rdquo; he says. &ldquo;Anything above that is profit.
        Anything below is a loss.&rdquo;
      </p>
      <p>So is there a hidden level that prices keep swinging around?</p>
    </>
  ),

  guess: (
    <p>
      If there are only a few bales of cotton and lots of people want them, what happens to the price? And if lots of
      new workshops start spinning yarn because it pays so well, what do you think happens next?
    </p>
  ),

  struggle: [<ThreeTugsOfWar key="a" />],
  reveal: [<SeeSawAroundTheCost key="b" />],

  eli5: "When lots of people want something and there isn't much of it, the price goes up; when there's too much, it goes down. High prices bring more makers, low prices drive them away, so prices swing back and forth. On average they settle at what it costs to make the thing, which really means the work it took.",

  grownUp: (
    <>
      <p>
        Marx first answers the everyday way: the price of a commodity is set by competition, by the relation of{" "}
        <strong>supply and demand</strong>. This competition is <strong>threefold</strong>: sellers compete among
        themselves and push prices down; buyers compete among themselves and push them up; and buyers and sellers
        struggle against each other, with victory going to the camp less divided. His example: 100 bales of cotton on
        the market and buyers for 1,000. The buyers fight each other, the sellers stand together, and the price rises.
      </p>
      <p>
        But supply and demand only explain movement. Marx asks what the movement is measured against, and answers with
        the businessman&apos;s own yardstick: the <strong>cost of production</strong>. When a price rises well above
        cost, capital floods into that branch until overproduction pushes the price below cost; then capital flees until
        the price rises again. Over a period, the ups and downs balance out, so commodities exchange, on average, at
        their cost of production. And since cost of production is raw materials, wear of tools and direct labour, it
        comes down to <strong>labour-time</strong>.
      </p>
      <p>
        Marx adds a sharp twist: economists call the average the law and the swings an accident, but it is exactly
        through these devastating swings, which shake society &ldquo;like an earthquake&rdquo;, that the law asserts
        itself.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Under all the noise of the market there is an order: prices are pulled back, again and again, toward the
        labour-time needed to make things. But this order is not calm. It works only through booms and busts, through
        capital rushing in and out, and the people caught in those swings pay the price.
      </p>
      <p>
        <em>Capital</em> develops this much further: value and price in Volume I, Chapters 1 to 3, and the prices that
        markets actually settle around in Volume III, Chapters 9 and 10.
      </p>
    </>
  ),

  critics: [
    {
      who: "Marginalist economists",
      point: (
        <p>
          Economists since the 1870s explain prices through supply and demand all the way down: demand reflects how
          much buyers value one more unit, supply reflects costs at the margin. On this view there is no need for a
          hidden level of labour-time; costs themselves are just prices of inputs, set the same way.
        </p>
      ),
    },
    {
      who: "On booms and busts",
      point: (
        <p>
          Many economists agree that capital moves toward high profits and that this evens out prices, but see the
          movement as mostly smooth and self-correcting rather than an earthquake. Others, including many who are not
          Marxists, agree with Marx that these swings can be large and painful.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "There are 100 bales of cotton and buyers who want 1,000. What happens to the price?",
      options: ["It goes up", "It goes down", "It stays exactly the same"],
      answer: 0,
      why: "The buyers compete with each other for the few bales, while the sellers have no reason to cut prices.",
    },
    {
      q: "Yarn sells far above its cost. What happens next, according to Marx?",
      options: [
        "Nothing; it stays high forever",
        "Capital rushes into spinning, more yarn is made, and the price falls",
        "The government sets a new price",
      ],
      answer: 1,
      why: "High prices draw capital into the branch until overproduction pushes the price down again.",
    },
    {
      q: "On average, what does a price settle at?",
      options: ["Whatever the richest buyer will pay", "Its cost of production, which comes down to labour-time", "Its weight in gold"],
      answer: 1,
      why: "The ups and downs cancel out, so over time things exchange at their cost of production.",
    },
  ],

  remember: [
    "Prices are set by competition: sellers against sellers, buyers against buyers, and buyers against sellers.",
    "Scarcity pushes prices up; a glut pushes them down.",
    "Capital rushes into high-price trades and out of low-price ones, so prices swing around the cost of production.",
    "On average, things sell at their cost of production, which comes down to the work it took to make them.",
  ],

  terms: ["supply-and-demand", "threefold-competition", "cost-of-production", "price"],

  source: (
    <p>
      Covers &ldquo;By What Is the Price of a Commodity Determined?&rdquo; in Wage-Labour and Capital (marxists.org).
      Marx&apos;s own examples: 100 bales of cotton with buyers for 1,000, silk rising from two to three shillings, and
      the citizen whose profit on 100 pounds is 110, 120, 130 or 200. Tiny Town&apos;s late ship, Tom and the yarn
      see-saw are this site&apos;s illustrations.
    </p>
  ),
};

export default chapter;
