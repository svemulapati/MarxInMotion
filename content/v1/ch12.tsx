import type { ChapterContent } from "@/components/ChapterTemplate";
import { SamsBasketGetsCheaper, TheRaceForTheExtraPenny, TwoRoadsToMoreExtra } from "./ch12-animations";

const chapter: ChapterContent = {
  bigQuestion: "How can a boss get more extra work without making the day any longer?",

  story: (
    <>
      <p>
        Sam still works 12 hours a day in Mr. Moneybags&apos; spinning workshop. In the first 6 hours he makes the value
        of his 3-coin wage. The other 6 hours are extra, and the extra belongs to Mr. Moneybags.
      </p>
      <p>
        Mr. Moneybags wants more. Once he would simply have made the day longer. But Sam is already worn out, and after
        the long fight over the clock the workers won&apos;t give up a single hour more.
      </p>
      <p>
        Then something odd happens. Mia gets a new oven and bread gets cheaper. The tailors speed up and clothes get
        cheaper. Sam is pleased. Mr. Moneybags is even more pleased, and Sam can&apos;t work out why.
      </p>
      <p>Why would cheaper bread make the boss happy?</p>
    </>
  ),

  guess: (
    <p>
      Sam&apos;s day stays exactly 12 hours long. Can the boss still end up with more hours of extra work? What would
      have to change inside the day?
    </p>
  ),

  struggle: [<TwoRoadsToMoreExtra key="a" />, <SamsBasketGetsCheaper key="b" />],
  reveal: [<TheRaceForTheExtraPenny key="c" />],

  eli5: "A boss can get more extra work by making the day longer. Or he can keep the day the same and make the things the worker needs cheaper, so the worker earns his wage back sooner. The second way is called relative surplus-value.",

  grownUp: (
    <>
      <p>
        Marx splits the working day into <strong>necessary labour</strong>, the time it takes to reproduce the value of
        labour-power (Sam&apos;s 6 hours), and <strong>surplus labour</strong> (the other 6). Lengthening the day
        produces <strong>absolute surplus-value</strong>. Shortening the necessary part inside a day of the same length
        produces <strong>relative surplus-value</strong>.
      </p>
      <p>
        How does the necessary part shrink? Not by paying Sam less than his labour-power is worth, which Marx rules out
        here. It shrinks when the value of labour-power itself falls, and that happens when the goods the worker lives
        on get cheaper, because the work that makes them has become more productive. Sam still gets as much bread and
        clothing as before. They just take less of society&apos;s labour to make. Productivity gains in industries
        that make neither necessities nor the tools for them, like silk hats, leave the value of labour-power where it
        was.
      </p>
      <p>
        No single boss sets out to cheapen the working class. Each one chases <strong>extra surplus-value</strong>: a
        new method lets him make goods for less than their social value and sell them a little under the market. The
        bonus lasts only until rivals copy him, which competition forces them to do. When the method becomes general,
        the bonus vanishes and the goods are simply cheaper. Over time, cheaper goods mean a cheaper basket for the
        worker, and a bigger share of the day for capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        From here on, capital does not just stretch the working day. It keeps changing how things are made, because
        every boss is driven to raise productivity in the race for the temporary extra. The total result is that the
        part of the day a worker works for himself shrinks, even when his wage buys the same things.
      </p>
      <p>
        That is why, for Marx, capitalism is so restless with technology. New methods are not chosen to make work
        easier or shorter. They are chosen to make goods cheaper and the extra larger.
      </p>
    </>
  ),

  critics: [
    {
      who: "Rising living standards",
      point: (
        <p>
          Since Marx wrote, productivity gains have gone hand in hand with large rises in real wages and shorter working
          weeks in industrial countries. Critics say workers clearly share in the gains. Marx&apos;s reply is built into
          this chapter: a worker can consume more while his share of the value he creates still falls. Economists
          still argue about how much weight that point deserves.
        </p>
      ),
    },
    {
      who: "Innovation as the engine",
      point: (
        <p>
          Joseph Schumpeter agreed with Marx that innovators earn a temporary extra profit that competition wipes out.
          But he saw that profit as the reward that drives new products and growth, which benefit everyone, rather
          than as a way of squeezing more unpaid work from employees.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Mr. Moneybags makes Sam's day 14 hours instead of 12. What kind of surplus-value is that?",
      options: ["Absolute surplus-value", "Relative surplus-value", "Extra surplus-value"],
      answer: 0,
      why: "Making the day longer gives absolute surplus-value. Relative surplus-value keeps the day the same length.",
    },
    {
      q: "Fancy silk hats suddenly get much cheaper. Does Sam's part of the day shrink?",
      options: ["Yes, everything cheaper helps the boss", "No, because Sam doesn't live on silk hats", "Only on Sundays"],
      answer: 1,
      why: "Only cheaper necessities, or the tools that make them, lower the value of labour-power.",
    },
    {
      q: "Why does Mr. Moneybags' extra penny per spool disappear?",
      options: ["The law bans it", "Rival workshops copy his trick, so spools get cheaper everywhere", "Sam asks for it"],
      answer: 1,
      why: "Extra surplus-value lasts only until the new method becomes general. Then the spools' social value falls too.",
    },
  ],

  remember: [
    "The working day has two parts: necessary labour (for the worker's wage) and surplus labour (for the boss).",
    "A longer day gives absolute surplus-value. A shorter necessary part in the same day gives relative surplus-value.",
    "The necessary part shrinks when the things workers live on get cheaper, even if they still buy just as much.",
    "Each boss chases a temporary extra profit from new methods, and competition makes everyone copy them.",
  ],

  terms: ["absolute-surplus-value", "relative-surplus-value", "extra-surplus-value"],

  source: (
    <p>
      Covers Volume I, Chapter 12 (&ldquo;The Concept of Relative Surplus-Value&rdquo;). Marx&apos;s own points: the
      definitions of absolute and relative surplus-value; only productivity in industries making necessities, or their
      means of production, lowers the value of labour-power; the individual capitalist&apos;s extra surplus-value,
      which &ldquo;vanishes&rdquo; once the new method becomes general. Animation 12.3 uses Marx&apos;s numbers (12
      articles at 12 pence, then 24 at 9 pence, sold at 10). Marx illustrates the shrinking day with 10 necessary hours
      falling to 9; animations 12.1 and 12.2 use this site&apos;s workshop numbers instead (6 hours falling to 4).
    </p>
  ),
};

export default chapter;
