import type { ChapterContent } from "@/components/ChapterTemplate";
import { FasterRoundFatterRate, ThreeCapitalsOneRate } from "./ch04-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can a boss earn more in a year just by getting his money back faster?",

  story: (
    <>
      <p>
        Tom the shopkeeper brings news from the harbour. &ldquo;They&apos;ve opened a canal far away, and the new steamships
        go through it. Yarn that used to take a year to reach the East and get paid for now takes a few months.&rdquo;
      </p>
      <p>
        Mr. Moneybags does a little dance. He hasn&apos;t hired a single extra worker. He hasn&apos;t made Sam work a
        minute longer. Yet he is sure he will earn more this year than last.
      </p>
      <p>
        Sam scratches his head. &ldquo;If I&apos;m not working harder, where does the extra come from?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Remember Volume II: money that is stuck on a ship or in a shed cannot pay any wages. If the trip gets shorter, how
      much of the boss&apos;s money is stuck at any moment? What does that do to his yearly rate of profit?
    </p>
  ),

  struggle: [<ThreeCapitalsOneRate key="a" />],
  reveal: [<FasterRoundFatterRate key="b" />],

  eli5: "Money that is stuck on a ship or in a shed can't pay anyone to work. When money comes back faster, less of it is stuck and more of it puts people to work. So a boss can earn more in a year without squeezing anyone harder.",

  grownUp: (
    <>
      <p>
        Marx left only a title for this chapter, so Friedrich Engels wrote it himself and put the whole of it in
        brackets. It applies Volume II&apos;s lessons about turnover to the rate of profit.
      </p>
      <p>
        Because turnover takes time, part of every capital is always idle: as money, as stocks of materials, as unsold
        goods, or as debts owed to the firm. The shorter the turnover, the smaller this idle part and the larger the
        surplus-value produced in a year. Since the rate of profit relates that yearly surplus-value to the total
        capital, any shortening of the turnover raises it.
      </p>
      <p>
        For the year, the formula becomes <strong>p&prime; = s&prime;n &times; v/C</strong>, where n is the number of
        turnovers of the variable capital. Engels gives three capitals of 11,000 built very differently. Capital I has
        500 of variable capital turned over ten times, II has 1,000 turned over five times, III has 5,000 turned over
        once. Each produces 5,000 of surplus-value a year, and each has an annual rate of profit of 45 5/11%.
      </p>
      <p>
        The chief ways to shorten production time are new technologies (Engels names the Bessemer and Siemens steel
        processes, and alizarin dye replacing madder). The chief way to shorten circulation time is better transport:
        railways, steamships, the telegraph and the Suez Canal. A shipment to East Asia that took at least twelve months
        in 1847 took almost as many weeks by Engels&apos; time.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The extra yearly profit from faster turnover does not come from thin air. The same capital simply sets more
        labour in motion over the year, because less of it sits idle. The workers produce the surplus; faster turnover
        lets the capitalist collect it more often.
      </p>
      <p>
        Engels also tests the formula on a real cotton mill from Volume I (10,000 spindles, one week of April 1871). He
        finds an annual rate of profit of about 33%, which he calls abnormally high, explained by unusually cheap cotton
        and dear yarn at that moment.
      </p>
    </>
  ),

  critics: [
    {
      who: "Engels, not Marx",
      point: (
        <p>
          Because this chapter is entirely Engels&apos; work, some scholars treat it with caution as evidence of
          Marx&apos;s own views. Editors of the complete original manuscripts (the MEGA project) have shown how much
          Engels shaped Volume III, and readers still argue about whether his additions clarify or change Marx&apos;s
          ideas.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why does a shorter turnover raise the yearly rate of profit?",
      options: [
        "Because workers work longer hours",
        "Because less capital sits idle, so more of it sets labour to work in a year",
        "Because prices rise",
      ],
      answer: 1,
      why: "Idle capital makes no surplus-value. The less of it there is, the more surplus-value the same capital makes each year.",
    },
    {
      q: "In Engels' example, capital I turns its 500 of wages over 10 times a year. How much does it pay in wages over the year?",
      options: ["500", "5,000", "11,000"],
      answer: 1,
      why: "500 × 10 = 5,000, the same as capital III's 5,000 turned over once.",
    },
    {
      q: "Who wrote this chapter?",
      options: ["Marx", "Engels, from Marx's title", "Samuel Moore"],
      answer: 1,
      why: "Marx left only the title. Engels wrote the chapter and marked it in brackets.",
    },
  ],

  remember: [
    "Part of every capital is always stuck: waiting as money, stock or unsold goods.",
    "The faster the turnover, the less is stuck and the more surplus-value a year.",
    "Yearly rate of profit = s′ × n × v/C.",
    "Faster transport and faster processes raise the rate of profit without any harder squeeze.",
    "This chapter was written by Engels.",
  ],

  terms: ["annual-rate-of-profit"],

  source: (
    <p>
      Covers Volume III, Chapter 4 (&ldquo;The Effect of the Turnover on the Rate of Profit&rdquo;), from the Institute
      of Marxism-Leninism edition (International Publishers) on marxists.org. Volume III was assembled and edited by
      Friedrich Engels from Marx&apos;s manuscripts and published in 1894. Engels states in his preface that only the
      title of this chapter existed and that he wrote it himself. The three capitals of 11,000, the 1847 East Asia
      shipment, madder and alizarin, and the 1871 spinnery are Engels&apos; examples. The shares of &ldquo;working&rdquo;
      and &ldquo;stuck&rdquo; capital in animation 4.2 are made up to show the idea.
    </p>
  ),
};

export default chapter;
