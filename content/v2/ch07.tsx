import type { ChapterContent } from "@/components/ChapterTemplate";
import { OneTripRound, TripsInAYear } from "./ch07-animations";

const chapter: ChapterContent = {
  bigQuestion: "How long until Mr. Moneybags gets his coins back, so he can send them out again?",

  story: (
    <>
      <p>
        Every Monday Mr. Moneybags sends coins out of his purse. Some buy cotton, some pay Sam. Then he waits. The cotton
        has to be spun, the yarn has to reach the shops, and somebody has to buy it. Only then do the coins come home,
        with a little extra.
      </p>
      <p>
        One evening he sits with Grandpa Ned and asks him how often his money comes home. Ned laughs. &ldquo;Once a
        year, when the wheat is sold. You city people are always in a hurry.&rdquo;
      </p>
      <p>
        Mr. Moneybags counts on his fingers. His coins seem to come home every three months. That means they can go out
        and come back four times while Ned&apos;s go round only once. He starts to wonder: does the speed of the trip
        matter?
      </p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags&apos; coins take three months to come home. Grandpa Ned&apos;s take a year. If both send out the same
      number of coins, whose coins can go round more often? Why might that matter to a boss who wants more?
    </p>
  ),

  struggle: [<OneTripRound key="a" />],
  reveal: [<TripsInAYear key="b" />],

  eli5: "Coins sent out by a boss take a trip and come home. How long one trip takes is the turnover time. The faster the trips, the more times the same coins can come back with extra.",

  grownUp: (
    <>
      <p>
        Part One of Volume II followed one trip of capital: money buys means of production and labour-power, the goods
        are made, and they are sold for more money. Chapter 7 opens Part Two by asking how that trip repeats. When a
        circuit is not a one-off act but a regular, repeated process, Marx calls it the{" "}
        <strong>turnover</strong> of capital.
      </p>
      <p>
        The <strong>turnover time</strong> is the whole time from advancing capital-value in one form until it comes
        back in that same form: <em>production time plus circulation time</em>. It is, Marx says, the period for which
        the capitalist must advance his capital in order to get it back with surplus-value.
      </p>
      <p>
        Just as the working day is the natural unit for measuring labour-power, the year is the natural unit for measuring
        turnovers, because the main crops of the temperate zone, where capitalism grew up, are annual. Marx writes the
        year as T, the turnover time of a given capital as t, and the <strong>number of turnovers</strong> as n, so{" "}
        <strong>n = T/t</strong>. A turnover time of 3 months gives 4 turnovers a year; 18 months gives only two-thirds
        of one.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capital is not a pile of things but value on the move, and it has to keep moving. Each trip is only one period in
        a capital&apos;s life; it must be repeated, again and again, if the value is to stay capital and keep making
        surplus-value.
      </p>
      <p>
        How fast it goes round differs from trade to trade, and that speed will turn out to matter a great deal. The
        coming chapters show how the time a capital spends away from production shapes how much capital a boss must
        advance, and how much surplus-value the same coins bring in over a year.
      </p>
    </>
  ),

  critics: [
    {
      who: "Waiting as a cost",
      point: (
        <p>
          Austrian economists such as Eugen von Böhm-Bawerk argued that longer, more &ldquo;roundabout&rdquo; ways of
          producing are often more productive, and that the time capital is tied up deserves a reward of its own
          (interest). Marx agrees that time ties capital up, but he denies that the waiting itself creates any value. The
          two sides disagree about whether time can be a source of value or only a cost that must be covered.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What makes up the turnover time of a capital?",
      options: ["Only the hours of work", "Production time plus circulation time", "The time it takes to count the coins"],
      answer: 1,
      why: "A turnover lasts from sending the coins out until they come home in the same form: making the goods and selling them.",
    },
    {
      q: "Mr. Moneybags' coins come home every 3 months. How many turnovers is that in a year?",
      options: ["3", "4", "12"],
      answer: 1,
      why: "n = T/t: 12 months divided by 3 months is 4 turnovers.",
    },
    {
      q: "Why does Marx measure turnovers in years?",
      options: [
        "Because bosses only count their money once a year",
        "Because the most important crops of the temperate lands ripen once a year",
        "Because coins wear out after a year",
      ],
      answer: 1,
      why: "Marx says the year is the natural unit, just as the working day is for labour-power, because the main crops are annual.",
    },
  ],

  remember: [
    "A turnover is one repeated trip of capital: out as money, home again as money.",
    "Turnover time = production time + circulation time.",
    "The year is the measuring stick. Number of turnovers n = T/t.",
    "A capital must keep going round, or it stops being capital.",
  ],

  terms: ["turnover-time", "number-of-turnovers"],

  source: (
    <p>
      Covers Volume II, Chapter 7 (&ldquo;The Turnover Time and the Number of Turnovers&rdquo;), the opening of Part
      Two. Volume II was put together by Friedrich Engels from Marx&apos;s manuscripts after Marx died. From the text:
      turnover time as the sum of production time and circulation time; the year as the natural unit, compared with the
      working day, because the main crops are annual; n = T/t with Marx&apos;s own examples of 3 months (4 turnovers)
      and 18 months (two-thirds). The English edition on marxists.org writes the formula with T and t. Mr.
      Moneybags&apos; 13-week trip is this site&apos;s illustration.
    </p>
  ),
};

export default chapter;
