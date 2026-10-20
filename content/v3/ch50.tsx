import type { ChapterContent } from "@/components/ChapterTemplate";
import { CakeOrBlocks, WhenWagesRise } from "./ch50-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is a price built by stacking up wages, profit and rent, or is a value cut up into them?",

  story: (
    <>
      <p>
        Tom the shopkeeper is working out a price for a new bolt of cloth. He takes a pencil. &ldquo;The cloth cost me this
        much, the workers cost that much, I need my usual profit, and the rent is due,&rdquo; he mutters. He adds the numbers
        and writes the total on the tag.
      </p>
      <p>
        Mia watches him. &ldquo;So the price is made from all those bits?&rdquo; &ldquo;Of course,&rdquo; says Tom.
        &ldquo;Everyone knows a price is just costs plus profit.&rdquo;
      </p>
      <p>Is Tom right? Or is he only seeing the last step of a much longer story?</p>
    </>
  ),

  guess: (
    <p>
      If workers all over town win higher wages, will every price go up? Or could something else have to shrink instead?
    </p>
  ),

  struggle: [<CakeOrBlocks key="a" />],
  reveal: [<WhenWagesRise key="b" />],

  eli5: "To a shopkeeper, a price looks like building blocks stacked up: wages, profit and rent. Marx says it is really one cake made by work, cut into pieces. If one piece gets bigger, another must get smaller.",

  grownUp: (
    <>
      <p>
        Marx uses a simple example. A commodity is worth 300: 200 is the value of the means of production consumed, passed
        on, and 100 is new value. Wages (x), profit (y) and rent (z) must share it: x + y + z always equals 100. The value
        comes first and is then split.
      </p>
      <p>
        To industrialists, merchants, bankers and vulgar economists, Marx says, it looks the other way round. Wages are fixed
        by contract before anything is made, so they appear as a given part of the cost-price. A normal rate of profit and a
        normal rent also look like fixed amounts. So the <strong>regulating price</strong> seems to be the sum of three
        independent magnitudes, rather than a value that is divided.
      </p>
      <p>
        Competition strengthens the illusion. A general rise in wages lowers the general rate of profit, so the two move in
        opposite directions. It also changes prices of production, raising some and lowering others, depending on how much
        machinery each trade uses. In some trades, prices really do rise when wages rise. Because each share moves by its own
        rules, the shares look like separate building blocks.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      Prices look like costs plus a mark-up, and businesses really do set prices that way. Marx argues that this is the
      surface. Underneath, the new value made by labour is a fixed amount, and wages, profit and rent are fighting over
      shares of it. What one share gains, another loses.
    </p>
  ),

  critics: [
    {
      who: "Mainstream price theory",
      point: (
        <p>
          Most economists since the marginalist revolution explain prices by supply and demand, with wages, profit and rent
          as prices of factors of production. On this view there is no value &ldquo;before&rdquo; the sharing, so the
          cake-or-blocks question does not arise. Supporters of Marx reply that this leaves unexplained where the new value
          being paid out comes from.
        </p>
      ),
    },
    {
      who: "Mark-up pricing",
      point: (
        <p>
          Studies of how firms actually set prices, from Hall and Hitch (1939) onwards, found that many add a mark-up to
          costs, much as Tom does. Some economists, such as Michał Kalecki, built theories of income shares on this practice,
          partly agreeing with Marx that wages and profits pull against each other.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's example, a commodity is worth 300 and 200 is passed on from the means of production. How much do wages, profit and rent share?",
      options: ["300", "200", "100"],
      answer: 2,
      why: "Only the new value, 100, can be shared: x + y + z = 100.",
    },
    {
      q: "Wages rise from 50 to 60 and the new value stays 100. What happens to profit and rent together?",
      options: ["They also rise", "They fall from 50 to 40", "Nothing"],
      answer: 1,
      why: "If one slice of a fixed cake grows, the others must shrink.",
    },
    {
      q: "Why does a price look like blocks stacked up?",
      options: [
        "Because wages are fixed by contract in advance and profit and rent look like fixed amounts too",
        "Because shopkeepers cannot do sums",
        "Because the government sets all prices",
      ],
      answer: 0,
      why: "Each share seems given before the goods are made, so their sum looks like the cause of the price.",
    },
  ],

  remember: [
    "A commodity's value = old value passed on + new value made by work.",
    "Wages, profit and rent share the new value: x + y + z stays the same.",
    "To business people, a price looks like costs plus profit stacked up.",
    "Marx says that is upside down: the value comes first, then it is cut up.",
  ],

  terms: ["regulating-price"],

  source: (
    <p>
      Covers Volume III, Chapter 50 (&ldquo;Illusions Created by Competition&rdquo;), English translation as hosted on
      marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894. The
      300 = 200 + 100 example and x + y + z are Marx&apos;s own; the split 50 / 30 / 20 and the wage rise to 60 are made
      up. Marx&apos;s point that a general wage rise moves the rate of profit the opposite way and raises some prices while
      lowering others is from this chapter.
    </p>
  ),
};

export default chapter;
