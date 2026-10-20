import type { ChapterContent } from "@/components/ChapterTemplate";
import { ABakersNight, HowLongIsADay, TheFightOverTheClock } from "./ch10-animations";

const chapter: ChapterContent = {
  bigQuestion: "How long should a working day be, and who gets to decide?",

  story: (
    <>
      <p>
        Sam has worked in Mr. Moneybags&apos; spinning workshop for a while now: 12 hours a day, every day. One evening
        Mr. Moneybags pins up a notice. &ldquo;Busy season. From tomorrow, the day is 15 hours.&rdquo;
      </p>
      <p>
        Sam goes to see him. &ldquo;I sold you a day of my work,&rdquo; he says, &ldquo;not my health. If you wear me out,
        I won&apos;t last.&rdquo; Mr. Moneybags shrugs. &ldquo;I paid for your day. A day is mine to use as I like.&rdquo;
      </p>
      <p>
        On her way home, Mia hears about it and shivers. When she was young she was a baker&apos;s helper in the big city,
        and nobody there limited the day at all. She remembers starting at 11 at night and still carrying bread round the
        streets the next afternoon.
      </p>
      <p>Both Sam and Mr. Moneybags think they are being fair. So who is right? And how does anyone settle it?</p>
    </>
  ),

  guess: (
    <p>
      Who do you think should decide how long Sam works: Sam, Mr. Moneybags, or someone else? And what might happen if
      nobody sets a limit at all?
    </p>
  ),

  struggle: [<HowLongIsADay key="a" />, <ABakersNight key="b" />],
  reveal: [<TheFightOverTheClock key="c" />],

  eli5: "A boss wants the working day to be as long as possible, because the extra hours make his profit. Workers need time to sleep, eat and live. After a long fight, laws were made to limit the working day.",

  grownUp: (
    <>
      <p>
        The <strong>working day</strong> is necessary labour time (the 6 hours that replace Sam&apos;s wage) plus surplus
        labour time (the hours that make surplus-value). It can never shrink to the necessary part alone, or there would
        be no surplus-value. How long it can stretch depends on physical limits, such as sleep and food, and on moral ones:
        time for family, learning and social life. Marx describes capital as &ldquo;dead labour&rdquo; that, like a
        vampire, lives by sucking living labour, so it always pushes against those limits.
      </p>
      <p>
        Here the rules of fair exchange give no answer. The capitalist has bought a day and wants to use it fully. The
        worker has sold a day and wants to sell it again tomorrow, so he needs it to be a normal one. Marx calls this
        &ldquo;right against right&rdquo;, and says that between equal rights, force decides.
      </p>
      <p>
        Capital did not invent surplus labour. Slaves, serfs and peasants all did it. Marx compares the{" "}
        <em>corvée</em> in the Danubian lands, where the law said a peasant owed the landlord 14 days&apos; labour a year
        but defined a &ldquo;day&rdquo; so cleverly that the 14 really meant 42, with English factories. In the corvée the surplus labour is plain to
        see. In wage labour it hides inside the paid day.
      </p>
      <p>
        Marx then walks through trades with no legal limit, from potteries and match-making to the London bakers and the
        dressmaker Mary Anne Walkley, who died in 1863 at 20 after working 26½ hours without a break. Machines that stand
        idle at night are wasted capital, so owners added night shifts and the <strong>relay system</strong>. Finally he
        tells the history of the law: from 1349 to the 1600s, statutes pushed the day longer; from 1833, the{" "}
        <strong>Factory Acts</strong> pulled it back, step by step, enforced by inspectors like Leonard Horner. After the
        American Civil War the demand for an 8-hour day spread fast.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The length of the working day is not settled by economics alone, because both buyer and seller have a fair claim
        under the rules of exchange. It is settled by struggle. Marx calls the normal working day the product of
        &ldquo;a protracted civil war&rdquo;, more or less hidden, between the capitalist class and the working class.
      </p>
      <p>
        Left to itself, he argues, capital stretches the day even when it shortens workers&apos; lives, the way a greedy
        farmer robs the soil of its goodness. Each owner hopes the damage will fall on someone else. Limits came only
        when society, pushed by the workers themselves, forced them through by law.
      </p>
    </>
  ),

  critics: [
    {
      who: "The optimists",
      point: (
        <p>
          In the long debate over living standards in the Industrial Revolution, historians such as R. M. Hartwell argued
          that most workers&apos; lives were getting better, not worse. They also point out that the parliamentary reports
          Marx quotes were gathered to make the case for reform, so they collect the worst cases rather than typical ones.
        </p>
      ),
    },
    {
      who: "Hours fell because pay rose",
      point: (
        <p>
          Many economists argue that working hours fell mainly because machines made work more productive and wages rose,
          so families could afford more free time and to keep children out of work. Clark Nardinelli (1990) argued that
          child labour was already falling for these reasons before the laws bit. Marx&apos;s defenders reply that the
          bitter fight over every Act, which Marx documents in detail, shows the laws mattered.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why can't the working day shrink to just the 6 hours that pay Sam's wage?",
      options: [
        "Because there would be no surplus-value left for Mr. Moneybags",
        "Because the clock only goes up to 12",
        "Because Sam likes long days",
      ],
      answer: 0,
      why: "The hours beyond the necessary 6 are the whole point for the capitalist. Without them there is no surplus-value.",
    },
    {
      q: "Mr. Moneybags says the day is his to use. Sam says it is only one day of his life. What does Marx say?",
      options: ["Mr. Moneybags is right", "Sam is right", "Both have a fair claim, so force decides"],
      answer: 2,
      why: "Marx calls it right against right. The rules of exchange cannot settle it, so the outcome depends on struggle.",
    },
    {
      q: "What did the Ten Hours' Act of 1847 do?",
      options: [
        "Banned all work at night",
        "Limited teenagers and women in mills to 10 hours a day from 1848",
        "Gave everyone an 8-hour day",
      ],
      answer: 1,
      why: "After years of campaigning, it limited young persons and women in the mills to 10 hours from 1848. The 8-hour day was still only a demand in 1866.",
    },
  ],

  remember: [
    "The working day = necessary labour (pays the wage) + surplus labour (makes surplus-value).",
    "It has limits: the body needs sleep and food, and people need time to live.",
    "Buyer and seller both have a fair claim, so Marx says force decides: right against right.",
    "Where no law stepped in, like the London bakehouses, days ran on through the night.",
    "Old laws stretched the day; from 1833 the Factory Acts, won by struggle, began to shorten it.",
  ],

  terms: ["working-day", "factory-acts", "relay-system"],

  source: (
    <p>
      Covers Volume I, Chapter 10 (&ldquo;The Working Day&rdquo;), all seven sections: the limits of the day; the greed
      for surplus labour (manufacturer and boyar); trades without legal limits; day and night work and the relay system;
      the laws lengthening the day from the 14th to the 17th century; the English Factory Acts from 1833 to 1864; and
      their effect in other countries. The bakers&apos; night follows the 1862 to 1863 reports Marx quotes (temperatures
      there are given as 75 to over 90 degrees Fahrenheit). Mia&apos;s memory of the big city is this site&apos;s story.
    </p>
  ),
};

export default chapter;
