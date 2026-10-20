import type { ChapterContent } from "@/components/ChapterTemplate";
import { LeavingTheMarket, WhatADayIsWorth, WhatSamHasToSell } from "./ch06-animations";

const chapter: ChapterContent = {
  bigQuestion: "What does Sam sell when he goes to work?",

  story: (
    <>
      <p>
        Sam lives at the bottom of the hill in Tiny Town. He has no field like Grandpa Ned, no loom like Leo and no
        oven like Mia. What he does have is two strong arms, quick hands, and a head full of good ideas.
      </p>
      <p>
        Mr. Moneybags has worked out the answer to last week&apos;s puzzle. He needs to buy something special:
        something that makes new value when it is used. He looks all over the market, and then he sees Sam.
      </p>
      <p>
        &ldquo;I don&apos;t want to buy <em>you</em>,&rdquo; says Moneybags. &ldquo;I want to buy a day of what you can
        do. Three coins.&rdquo; Sam thinks about his empty cupboard at home. He has nothing else to sell. &ldquo;Paid
        when?&rdquo; he asks. &ldquo;At the end of the week,&rdquo; says Moneybags.
      </p>
      <p>They shake hands. What exactly did Sam just sell, and why is it worth 3 coins?</p>
    </>
  ),

  guess: (
    <p>
      Sam is not selling a coat or a loaf or a roll of cloth. So what is he selling? And what do you think decides how
      much a day of it is worth?
    </p>
  ),

  struggle: [<WhatSamHasToSell key="a" />, <WhatADayIsWorth key="b" />],
  reveal: [<LeavingTheMarket key="c" />],

  eli5: "Sam doesn't sell himself, he sells a day of what he can do. A day of it costs as much as Sam needs to live and keep working. Mr. Moneybags buys it because Sam's work can make more than it costs.",

  grownUp: (
    <>
      <p>
        The special commodity Moneybags needs is <strong>labour-power</strong>: the mental and physical abilities a
        person uses whenever they make anything useful. Its use is work itself, and work creates value. So this is a
        commodity whose use creates value.
      </p>
      <p>
        For labour-power to be on sale, Marx says, the owner of money must find a <strong>free worker</strong>,
        &ldquo;free in the double sense&rdquo;. Free as a person, so he can sell his labour-power as his own property,
        and only for a set time (selling it forever would make him a slave). And free of everything else: no land, no
        tools, nothing to live on, so he has to sell it. This situation is not natural. Marx stresses it is the result
        of a long history, which he tells at the end of Volume I.
      </p>
      <p>
        The <strong>value of labour-power</strong> is set like any commodity&apos;s, by the labour time needed to
        produce it. In practice that means the value of the <strong>means of subsistence</strong> that keep the worker
        going: food, housing, clothing, fuel, enough to raise children who will replace him, and some training. Unlike
        other commodities it includes a &ldquo;historical and moral element&rdquo;: what counts as a normal living
        depends on the country and the era. In Tiny Town it comes to 3 coins a day.
      </p>
      <p>
        Wages are usually paid after the work is done, so the worker &ldquo;gives credit to the capitalist&rdquo;. Then
        Marx leaves the market, which he mocks as &ldquo;a very Eden of the innate rights of man&rdquo; ruled by
        Freedom, Equality, Property and Bentham, and follows the two into the &ldquo;hidden abode of production&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The deal between Sam and Moneybags is fair by the rules of the market. Sam gets the full value of what he sells.
        The trick, if there is one, is not in the deal. It is in the difference between what labour-power costs and what
        it can produce once it is put to work.
      </p>
      <p>
        Marx also wants us to see that the market only looks like a world of free and equal people. Behind it is a
        split between people who own the means to make a living and people who own only their ability to work.
      </p>
    </>
  ),

  critics: [
    {
      who: "Wages and productivity",
      point: (
        <p>
          Many economists say wages are set by what a worker adds to output (the &ldquo;marginal product&rdquo;), not by
          the cost of staying alive. They point out that wages in rich countries have risen far above subsistence.
          Marx&apos;s defenders reply that his &ldquo;historical and moral element&rdquo; already allows the normal
          standard of living to rise over time.
        </p>
      ),
    },
    {
      who: "A free contract",
      point: (
        <p>
          Philosophers such as Robert Nozick argue that a deal both sides freely agree to is fair, and that calling the
          worker &ldquo;forced&rdquo; stretches the word: workers can choose between employers, save, or start their
          own businesses. Marx would answer that the choice to sell labour-power at all is shaped by having nothing
          else to live on.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What does Sam actually sell to Mr. Moneybags?",
      options: ["Himself", "His ability to work, a day at a time", "His tools"],
      answer: 1,
      why: "He sells his labour-power for a set time. He keeps owning himself.",
    },
    {
      q: "Why must Sam sell his labour-power only for a limited time?",
      options: ["Because days are short", "If he sold it forever, he would be a slave", "Because Moneybags is poor"],
      answer: 1,
      why: "Selling it once and for all would mean selling himself. Marx says he would turn from a free man into a slave.",
    },
    {
      q: "What decides the value of a day of Sam's labour-power?",
      options: [
        "How hard he works that day",
        "What it costs to keep him and his family living and working",
        "How kind the boss feels",
      ],
      answer: 1,
      why: "Its value is the value of the means of subsistence, plus what counts as normal where Sam lives.",
    },
  ],

  remember: [
    "Labour-power is everything a person's body and mind can do at work.",
    "The worker is free twice over: free to sell his labour-power, and free of any other way to live.",
    "Its value is the cost of the things that keep workers going, including their children, plus what counts as normal.",
    "Workers lend their work first. Wages come afterwards.",
    "Now we leave the noisy market and follow Sam into the workshop.",
  ],

  terms: ["labour-power", "free-worker", "value-of-labour-power", "means-of-subsistence"],

  source: (
    <p>
      Covers Volume I, Chapter 6 (Fowkes: &ldquo;The Sale and Purchase of Labour-Power&rdquo;; Moore and Aveling:
      &ldquo;The Buying and Selling of Labour-Power&rdquo;). Marx&apos;s own points: labour-power as the aggregate of
      mental and physical capabilities; sale only for a definite period; the worker free in the double sense; the cost
      of children and of training; the historical and moral element; the worker giving credit to the capitalist; the
      Eden of Freedom, Equality, Property and Bentham; the sign &ldquo;No admittance except on business&rdquo;. The
      3-coin day and its breakdown are this site&apos;s numbers (see CONTINUITY.md).
    </p>
  ),
};

export default chapter;
