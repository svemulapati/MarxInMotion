import type { ChapterContent } from "@/components/ChapterTemplate";
import { SamsDayCutInTwo, SeniorsLastHour, TwentyPoundsOfYarn } from "./ch09-animations";

const chapter: ChapterContent = {
  bigQuestion: "How much of Sam's day is spent working for himself, and how much for the boss?",

  story: (
    <>
      <p>
        Sam has been doing sums on the back of an envelope. &ldquo;My wage is 3 coins a day,&rdquo; he says.
        &ldquo;And in 12 hours I make 6 coins of new value. So at some point in the day, I stop working for me and start
        working for Mr. Moneybags. When exactly?&rdquo;
      </p>
      <p>
        Meanwhile, the workshop owners of the big towns are worried. People are asking for shorter working days. So the
        owners hire a clever professor from the university to prove that a shorter day would ruin them.
      </p>
      <p>
        The professor arrives with a thick pamphlet full of numbers. His answer: all the profit is made in the very last
        hour of the day. Take that hour away, and every workshop goes bust.
      </p>
      <p>Is he right? Sam&apos;s envelope says something quite different.</p>
    </>
  ),

  guess: (
    <p>
      Sam&apos;s day is 12 hours and his wage takes 6 hours of work to make. If the day were cut to 11 hours, would Mr.
      Moneybags&apos; extra disappear completely, shrink a bit, or stay the same?
    </p>
  ),

  struggle: [<SamsDayCutInTwo key="a" />, <TwentyPoundsOfYarn key="b" />],
  reveal: [<SeniorsLastHour key="c" />],

  eli5: "Sam works the first 6 hours for himself and the next 6 hours for Mr. Moneybags. Marx measures this by comparing the extra money with Sam's wage: 3 coins to 3 coins is 100%. A professor said all the profit came in the last hour, but Marx showed his sums were wrong.",

  grownUp: (
    <>
      <p>
        The working day has two parts. In the <strong>necessary labour time</strong> the worker produces value equal to
        the value of his labour-power (Sam&apos;s first 6 hours, 3 coins). In the{" "}
        <strong>surplus labour time</strong> he goes on working and produces surplus-value for the capitalist (the next 6
        hours, another 3 coins).
      </p>
      <p>
        The <strong>rate of surplus-value</strong> is s/v: surplus-value divided by variable capital. Here 3/3 = 100%,
        which is the same as surplus labour divided by necessary labour (6 h / 6 h). Marx calls it an exact expression for
        the degree of exploitation of labour-power by capital. Constant capital is left out on purpose, because its value
        only reappears in the product. Measuring the surplus against all the capital (3/27, about 11%) would hide what is
        going on.
      </p>
      <p>
        Marx then shows the product can be split the same way: of the 20 lb of yarn worth 30 coins, 16 lb stand for the
        constant capital, 2 lb for the wage and 2 lb for the surplus-value. But that is a way of dividing the product,
        not the working day. Nassau Senior mixed the two up in 1836 (his pamphlet came out in 1837), when he argued that the whole net profit of an
        11½-hour mill day came from the last hour. Using the owners&apos; own figures, Marx shows the workers made their
        wages in 5¾ hours and the profit in the other 5¾. Cut an hour, and the surplus labour falls to 4¾ hours: a lower
        rate, about 82%, but no ruin.
      </p>
      <p>
        Marx also notes that surplus labour is not new. Slave societies and feudal lords took it too. What differs from
        one kind of society to another is only the way it is taken from the people who do the work.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Every working day under capitalism contains unpaid time. The wage looks like payment for the whole day, but it
        only matches the value made in part of it. The rate of surplus-value tells you how the day is divided between
        the worker and the owner.
      </p>
      <p>
        And arguments that shorter hours would destroy all profit, like Senior&apos;s, rest on confused sums. Shorter hours
        shrink the surplus. They do not wipe it out.
      </p>
    </>
  ),

  critics: [
    {
      who: "Wages match what work adds",
      point: (
        <p>
          Mainstream economists say that in competitive markets a worker is paid roughly the value of what one more hour
          of their work adds to output (their marginal product). On this view there is no unpaid half of the day, and the
          owner&apos;s share pays for capital, risk and organising, not for unpaid labour.
        </p>
      ),
    },
    {
      who: "You can't see the split",
      point: (
        <p>
          Critics point out that nobody can watch the moment Sam &ldquo;starts working for the boss&rdquo;. The split
          between necessary and surplus labour time is worked out from Marx&apos;s value theory, so if you reject that
          theory, the split disappears with it. Marx&apos;s defenders point to what came next: after Britain&apos;s Ten Hours Act of
          1847, the cotton mills went on making profits, as Marx describes in Chapter 10.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam's wage is made in the first 6 hours of his 12-hour day. What does Marx call the other 6 hours?",
      options: ["Necessary labour time", "Surplus labour time", "Overtime"],
      answer: 1,
      why: "The hours beyond those needed to make his wage are surplus labour time. Their value goes to Mr. Moneybags.",
    },
    {
      q: "Surplus-value is 3 coins and variable capital is 3 coins. What is the rate of surplus-value?",
      options: ["11%", "50%", "100%"],
      answer: 2,
      why: "s ÷ v = 3 ÷ 3 = 100%. Marx leaves the 24 coins of constant capital out, because they only pass through.",
    },
    {
      q: "Professor Senior said cutting one hour from the day would wipe out all profit. What did Marx show?",
      options: [
        "He was right: profit would vanish",
        "Profit would shrink, but not vanish",
        "Profit would grow",
      ],
      answer: 1,
      why: "By the owners' own figures, the surplus would fall from 5¾ hours to 4¾. Smaller, not gone. Marx called the claim “all bosh”.",
    },
  ],

  remember: [
    "Necessary labour time makes the worker's wage. Surplus labour time makes the boss's surplus-value.",
    "Rate of surplus-value = s ÷ v. In Sam's case, 3 ÷ 3 = 100%.",
    "Constant capital is left out of this measure, because its value only passes through.",
    "Splitting the product into parts is not the same as splitting the day into parts.",
    "Senior's “last hour” was wrong: shorter days shrink the surplus, they don't destroy it.",
  ],

  terms: ["rate-of-surplus-value", "necessary-labour-time", "surplus-labour-time"],

  source: (
    <p>
      Covers Volume I, Chapter 9 (&ldquo;The Rate of Surplus-Value&rdquo;), all four sections: the degree of
      exploitation; the product split into proportional parts (20 lb of yarn: 16 lb for constant capital, 2 lb each for
      variable capital and surplus-value); Senior&apos;s &ldquo;last hour&rdquo; (from his 1837 <em>Letters on the
      Factory Act</em>, with its 23 half-hours); and surplus-produce. Marx&apos;s figures for Senior: wages and profit of
      5¾ hours each, surplus falling to 4¾ hours, a rate of 82 14/23%. The Tiny Town professor stands in for Senior.
    </p>
  ),
};

export default chapter;
