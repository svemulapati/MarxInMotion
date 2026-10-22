import type { ChapterContent } from "@/components/ChapterTemplate";
import { PaidBeforeTheCloth, SlaveSerfWorker, WhatSamReallySells } from "./ch02-animations";

const chapter: ChapterContent = {
  bigQuestion: "When Sam gets paid, what exactly is he being paid for?",

  story: (
    <>
      <p>
        It is Saturday in Tiny Town, and the workers line up outside Mr. Moneybags&apos; workshop to get their pay.
        Sam counts his coins: 3 for each day of the week.
      </p>
      <p>
        On the walk home Sam meets his friends. &ldquo;What do you get?&rdquo; he asks. One says 3 coins a day for
        spinning. Another gets paid for each yard of cloth she weaves. They all get different amounts, but they all
        agree on one thing: wages are what the boss pays you for your work.
      </p>
      <p>
        Grandpa Ned overhears and scratches his chin. &ldquo;For your work?&rdquo; he says. &ldquo;Are you sure that
        is what you sold him?&rdquo;
      </p>
      <p>What else could Sam have sold?</p>
    </>
  ),

  guess: (
    <p>
      Sam&apos;s 3 coins arrive at the end of the week, before Mr. Moneybags has sold anything Sam made. So are the
      coins really Sam&apos;s share of what he made? And if not, what are they?
    </p>
  ),

  struggle: [<WhatSamReallySells key="a" />, <PaidBeforeTheCloth key="b" />],
  reveal: [<SlaveSerfWorker key="c" />],

  eli5: "Sam doesn't sell his work, he sells his ability to work for a day. His wage is the price of that, paid from money the boss already has. Sam is free, but he has to sell his time to some boss in order to live.",

  grownUp: (
    <>
      <p>
        Workers say that wages are the money a capitalist pays for a certain time of work or a certain amount of work.
        Marx calls this &ldquo;merely an illusion&rdquo;: what workers actually sell is their{" "}
        <strong>labour-power</strong>, their ability to work, for a day, a week or a month. Labour-power is a commodity
        like sugar, except that sugar is measured by the scales and labour-power by the clock. Wages are simply the price
        of this commodity. (This wording is Engels&apos; 1891 edition; the 1849 original said workers sell their
        &ldquo;labour&rdquo;. See Chapter 0.)
      </p>
      <p>
        Wages are also not the worker&apos;s share of what he makes. Marx&apos;s weaver is paid long before the cloth is
        sold, out of money the capitalist already has, just as the capitalist bought the loom and the yarn. Whether the
        cloth sells well, badly or not at all does not change the weaver&apos;s wage.
      </p>
      <p>
        Why does the worker sell? To live. His own <strong>life-activity</strong> becomes only a means of existence:
        what he produces for himself is not the silk, the gold or the palace, but his wages. And this is new in history.
        The slave was sold once and for all; the serf handed over part of his produce; the free{" "}
        <strong>wage-labourer</strong> sells his own hours, &ldquo;by fractions&rdquo;, to the owner of the tools and
        materials. He can leave one employer, but not the whole capitalist class, without giving up his existence.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        A wage looks like a fair swap of money for work, but it is really the sale of a person&apos;s ability to work to
        someone who owns everything needed to use it. Being free to choose a boss is real freedom, Marx says, but it
        comes with a catch: the worker is not free to choose no boss at all.
      </p>
      <p>
        These ideas come back in full in <em>Capital</em>, Volume I: labour-power in Chapter 6, and the wage-form in
        Chapter 19.
      </p>
    </>
  ),

  critics: [
    {
      who: "The free-market view",
      point: (
        <p>
          Many economists see a wage as a voluntary deal between two sides who both gain: the worker gets a sure income
          now, the employer takes the risk that the goods may not sell. They argue that this risk-taking, not hidden
          unfairness, explains why wages are paid in advance and why the employer keeps what is left.
        </p>
      ),
    },
    {
      who: "Comparing with slavery and serfdom",
      point: (
        <p>
          Critics say the comparison is unfair: unlike a slave or serf, a worker can quit, change jobs, join a union,
          save, or start a business, and many do. Marx&apos;s defenders reply that he himself stressed this freedom, but
          that most people still have to work for some employer to live.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "According to Marx, what does Sam actually sell to Mr. Moneybags?",
      options: ["His work, piece by piece", "His labour-power, his ability to work for a day", "Himself, once and for all"],
      answer: 1,
      why: "Marx says selling 'labour' is only how it looks: the worker sells his labour-power for a period of time.",
    },
    {
      q: "Sam's wage comes from...",
      options: [
        "His share of the money from the cloth once it is sold",
        "Money the boss already had, before the cloth is sold",
        "The bank",
      ],
      answer: 1,
      why: "Marx's weaver is paid long before the cloth is sold, out of the capitalist's existing money.",
    },
    {
      q: "What makes a wage-worker different from a slave?",
      options: [
        "He is owned by his boss for life",
        "He belongs to a piece of land",
        "Nobody owns him, but he must sell his working hours to live",
      ],
      answer: 2,
      why: "The slave was sold once and for all; the wage-worker is free but sells his hours day by day.",
    },
  ],

  remember: [
    "A wage is the price of labour-power: the ability to work for a day or a week.",
    "Labour-power is measured by the clock, the way sugar is measured by the scales.",
    "Wages are paid from the boss's existing money, not as a share of what the worker made.",
    "A slave is sold once; a serf gives a share; a wage-worker sells his hours, day after day.",
  ],

  terms: ["wage-labour", "life-activity", "labour-power", "serfdom"],

  source: (
    <p>
      Covers &ldquo;What Are Wages? How Are They Determined?&rdquo; in Wage-Labour and Capital (marxists.org,
      Engels&apos; 1891 text). Marx&apos;s own examples: workers getting &ldquo;two shillings a day&rdquo;, 20 pounds of
      sugar, the weaver whose cloth sells for 20 shillings, the silk, gold and palace, the silk-worm, and the slave,
      serf and free labourer. The site uses its usual 3-coin wage instead of Marx&apos;s 2 shillings, and gives
      Marx&apos;s weaver&apos;s job to Sam.
    </p>
  ),
};

export default chapter;
