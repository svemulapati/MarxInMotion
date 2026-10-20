import type { ChapterContent } from "@/components/ChapterTemplate";
import { ARailwayThatFeedsNoOne, CapitalAAndCapitalB, WhyTheNumbersDiffer } from "./ch16-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can the same work earn ten times as much, just by selling faster?",

  story: (
    <>
      <p>
        Two bosses meet at Bea&apos;s bank to compare their year. Mr. Moneybags runs a spinning workshop. He sells his
        yarn every five weeks. The other boss is building a ship that will take a whole year to finish.
      </p>
      <p>
        Both pay their workers 100 coins a week. Both work them the same long hours. Both end the year with exactly the
        same pile of surplus-value.
      </p>
      <p>
        Yet when Bea works out how much each one earned on the money he put in, Mr. Moneybags&apos; number is ten times
        bigger. The shipbuilder is furious. &ldquo;My men worked just as hard as his! How can his money earn ten times
        more?&rdquo;
      </p>
      <p>Who is right? Did Mr. Moneybags squeeze his workers harder, or is something else going on?</p>
    </>
  ),

  guess: (
    <p>
      Both bosses pay the same wages and get the same surplus-value in a year. One sells every five weeks, the other
      once a year. Which one needs to put in more money at the start? And does that make his workers any less
      exploited?
    </p>
  ),

  struggle: [<CapitalAAndCapitalB key="a" />, <WhyTheNumbersDiffer key="b" />],
  reveal: [<ARailwayThatFeedsNoOne key="c" />],

  eli5: "If your money comes back quickly, you can use the same coins again and again. So a fast workshop needs only a little money to pay a whole year of wages. That makes its yearly rate look huge, even though its workers are squeezed no harder.",

  grownUp: (
    <>
      <p>
        This chapter looks at the <strong>variable capital</strong> alone, the money for wages. Marx defines the{" "}
        <strong>annual rate of surplus-value</strong>: the surplus-value made in a year divided by the variable capital
        advanced. It equals the ordinary rate of surplus-value for one turnover times the number of turnovers.
      </p>
      <p>
        Capital A advances £500 of variable capital. It turns over every five weeks, ten times a year, so the same £500
        pays £5,000 of wages. At a rate of surplus-value of 100% it makes £5,000 of surplus-value: an annual rate of
        1,000%. Capital B advances £5,000 for the whole year and turns over once. It also pays £100 a week, also at 100%,
        and also makes £5,000. Its annual rate is only 100%.
      </p>
      <p>
        The amount of labour exploited and the degree of exploitation are identical. The 900% gap comes from turnover.
        Economists of the Ricardian school were thrown by puzzles like this, as if circulation had mysterious powers.
        Marx dissolves it: only the capital actually spent on labour-power produces surplus-value. Most of B&apos;s £5,000
        just waits. Put B in A&apos;s conditions, spending its £5,000 in five weeks, and it too makes 1,000% a year.
      </p>
      <p>
        From the point of view of society, long-turnover projects such as railways take labour, means of production and
        means of subsistence out of the market for a year or more while giving nothing back. Demand rises without supply,
        prices rise, workers are drawn in from agriculture and from the reserve army, wages rise for a while, until the
        crash.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Surplus-value comes only from labour-power at work, never from money sitting still. Faster turnover lets the same
        advanced money set more labour in motion over a year, so the yearly figure grows, but that is not the same as
        squeezing each worker harder.
      </p>
      <p>
        And capitalism has no way of planning big, slow projects in advance. A society that planned production
        consciously could reckon beforehand how much labour it can spare for them. In capitalism, Marx says,
        &ldquo;social reason&rdquo; always shows up only <em>post festum</em>: after the party, when the damage is done.
      </p>
    </>
  ),

  critics: [
    {
      who: "The yearly figure is what counts",
      point: (
        <p>
          Investors judge capital by the return per year on money advanced, and fast-turnover businesses really do look
          more profitable on that measure. Critics such as Böhm-Bawerk argued that in Volume III Marx has to let capitals
          with slow turnover earn the same average profit as fast ones, and that this sits uneasily with the idea that
          only labour-power makes surplus-value.
        </p>
      ),
    },
    {
      who: "Can planners calculate it?",
      point: (
        <p>
          Marx&apos;s remark that a planned society would reckon in advance how much labour to put into long projects
          was challenged by Ludwig von Mises (1920) and Friedrich Hayek (1945). They argued that without market prices
          planners cannot know what anything really costs. Supporters of planning, such as Oskar Lange, replied that
          planners could imitate markets; the debate is still alive.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Workshop A advances 500 coins of wages and turns them over 10 times a year at a 100% rate of surplus-value. What is its annual rate?",
      options: ["100%", "500%", "1,000%"],
      answer: 2,
      why: "100% for each turnover × 10 turnovers = 1,000%. Its 500 coins made 5,000 of surplus-value in a year.",
    },
    {
      q: "Workshop B makes the same 5,000 of surplus-value a year but advances 5,000 coins. Are its workers less exploited?",
      options: ["Yes, much less", "No, the hours and the paid/unpaid split are exactly the same", "Yes, ten times less"],
      answer: 1,
      why: "Same wages, same hours, same 100% rate. Only the turnover, and so the money advanced, is different.",
    },
    {
      q: "Why did long railway projects push up the price of bread?",
      options: [
        "Railway workers ate more than others",
        "Their wages bought bread for a year while the railway supplied nothing back",
        "Bakers were greedy",
      ],
      answer: 1,
      why: "Money for bread poured in while no extra means of subsistence came out, so demand rose without supply.",
    },
  ],

  remember: [
    "Annual rate of surplus-value = surplus-value in a year ÷ variable capital advanced.",
    "It equals the rate per turnover × the number of turnovers in a year.",
    "Fast turnover makes the yearly figure big without any extra exploitation.",
    "Only capital actually spent on labour-power makes surplus-value; waiting money makes none.",
    "Long projects like railways take from the market for a long time before giving back.",
  ],

  terms: ["annual-rate-of-surplus-value"],

  source: (
    <p>
      Covers Volume II, Chapter 16 (&ldquo;The Turnover of Variable Capital&rdquo;). Volume II was put together by
      Friedrich Engels from Marx&apos;s manuscripts. Marx&apos;s own numbers, in pounds (shown as coins): capital A with
      £500 of variable capital turned over ten times a year, capital B with £5,000 turned over once, £100 of wages a
      week, a 100% rate of surplus-value, annual rates of 1,000% and 100%, and B placed in A&apos;s conditions making
      £50,000; the railway passage and &ldquo;post festum&rdquo;. The shipbuilder, Bea&apos;s bank and the 50 piles of
      coins are this site&apos;s illustration.
    </p>
  ),
};

export default chapter;
