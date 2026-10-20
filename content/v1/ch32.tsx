import type { ChapterContent } from "@/components/ChapterTemplate";
import { OneCapitalistKillsMany, ThreeKindsOfOwning, WhatHappenedNext } from "./ch32-animations";

const chapter: ChapterContent = {
  bigQuestion: "Where did Marx think the whole story was heading?",

  story: (
    <>
      <p>
        It is a cold evening, and half of Tiny Town is squeezed into Grandpa Ned&apos;s kitchen. Sam has just finished
        another twelve-hour day. Leo is mending a chair, because nobody buys his cloth any more. Mia has brought bread.
      </p>
      <p>
        &ldquo;Will it always be like this?&rdquo; Sam asks. &ldquo;Bigger workshops, fewer bosses, and the rest of us
        working for them?&rdquo;
      </p>
      <p>
        Grandpa Ned pokes the fire. &ldquo;Marx had an answer to that. He thought he could see where the story was
        going. Some people think he was right, and a great many think he was wrong. Let&apos;s hear what he said, and
        then what the others say.&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Think back over Volume I: small owners pushed off their land, workshops growing, machines, more and more workers
      in one place. If that kept going for a hundred years, what do you think would happen? Then compare your guess with
      Marx&apos;s, and with what actually happened.
    </p>
  ),

  struggle: [<ThreeKindsOfOwning key="a" />, <OneCapitalistKillsMany key="b" />],
  reveal: [<WhatHappenedNext key="c" />],

  eli5: "First, people owned their own tools. Then a few bosses came to own almost everything. Marx guessed the workers would one day own it all together, but many people think his guess was wrong.",

  grownUp: (
    <>
      <p>
        This short chapter sums up the whole of Volume I as a story with three stages. First comes{" "}
        <strong>private property based on the owner&apos;s own labour</strong>: the peasant&apos;s field, the
        artisan&apos;s tools. It allows some freedom, but it keeps production small and scattered; to keep it forever,
        Marx says (quoting Pecqueur), would be to &ldquo;decree universal mediocrity&rdquo;.
      </p>
      <p>
        Second, this petty property is destroyed by the expropriation described in Part Eight, and replaced by{" "}
        <strong>capitalist private property</strong>, which rests on the labour of others. Then a new kind of
        expropriation begins: capitalists expropriate each other through the{" "}
        <strong>centralisation of capital</strong>. &ldquo;One capitalist always kills many.&rdquo; Along with this grow
        co-operation, the use of science, the world market, and, Marx says, the misery and the revolt of a working class
        that is disciplined, united and organised by capitalist production itself.
      </p>
      <p>
        Third, Marx predicts that centralisation and socialised labour reach a point where they no longer fit their
        capitalist shell. &ldquo;The knell of capitalist private property sounds. The{" "}
        <strong>expropriators are expropriated</strong>.&rdquo; He calls this the{" "}
        <strong>negation of the negation</strong>: not a return to small private property, but individual property
        based on co-operation and on holding the land and the means of production in common. He adds that this change
        would be far quicker and less violent than the first, because it would be the many expropriating a few
        usurpers, not a few expropriating the many.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Marx argued that capitalism has a direction built into it. The same forces that made it, gathering tools and
        workers into fewer and bigger hands, would also create the conditions for something after it: huge teamwork, and
        a large, organised working class.
      </p>
      <p>
        This is a prediction, and Marx presents it with great confidence, comparing it to a law of nature. On this site
        we treat it as his argument, to be weighed, not as a fact. The animation &ldquo;What happened next?&rdquo; and
        the critics below show why people still disagree about it.
      </p>
    </>
  ),

  critics: [
    {
      who: "The prediction did not come true",
      point: (
        <p>
          From Eduard Bernstein (1899) onwards, critics noted that in rich countries workers&apos; living standards rose
          and the middle classes grew, while unions, the vote and welfare states reformed capitalism instead of ending
          it. The philosopher Karl Popper (<em>The Open Society and Its Enemies</em>, 1945) argued that history has no
          laws that let anyone predict its end. And the states that claimed to follow Marx, such as the Soviet Union and
          Mao&apos;s China, became one-party dictatorships marked by famine and repression, and most abandoned planned
          economies.
        </p>
      ),
    },
    {
      who: "Defenders reply",
      point: (
        <p>
          Marx&apos;s defenders answer that he described a long-run tendency, not a date, and that some of it has held
          up: the concentration of industries in a few giant firms, recurring crises such as 2008, and great inequality
          of wealth. Many also argue that the one-party states of the twentieth century were very far from the
          workers&apos; self-government Marx had in mind. Critics reply that a prediction which can always be postponed
          is hard to test.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What is the first kind of owning in Marx's story?",
      options: [
        "Workers owning the tools they work with",
        "Big companies owning everything",
        "The state owning all the land",
      ],
      answer: 0,
      why: "The peasant owns the field, the artisan owns the tools: property based on the owner's own work.",
    },
    {
      q: "What does “one capitalist always kills many” mean?",
      options: [
        "Bosses fight duels",
        "Big firms win the competition and swallow smaller ones",
        "Capitalists make their workers ill",
      ],
      answer: 1,
      why: "That is the centralisation of capital: fewer and bigger owners as competition goes on.",
    },
    {
      q: "Which statement is fair?",
      options: [
        "Marx's prediction came true everywhere",
        "Marx's prediction has been tested and argued about, and many think it was wrong",
        "Nobody has ever criticised Marx",
      ],
      answer: 1,
      why: "It was a forecast. Critics point to rising living standards and to the record of states that claimed his name; defenders point to concentration and crises.",
    },
  ],

  remember: [
    "Marx tells history in three kinds of owning: your own tools, then capitalist property, then (he predicted) common property.",
    "Capitalists also swallow each other: “one capitalist always kills many”.",
    "His prediction: “the expropriators are expropriated”, the “negation of the negation”.",
    "It is a forecast to weigh, not a fact. Critics and defenders still argue about it.",
  ],

  terms: ["expropriation-of-the-expropriators", "negation-of-the-negation"],

  source: (
    <p>
      Covers Volume I, Chapter 32 (Fowkes: &ldquo;The Historical Tendency of Capitalist Accumulation&rdquo;; Moore and
      Aveling: &ldquo;Historical Tendency of Capitalist Accumulation&rdquo;). Marx&apos;s own phrases: Pecqueur&apos;s
      &ldquo;universal mediocrity&rdquo;; &ldquo;One capitalist always kills many&rdquo;; &ldquo;The knell of capitalist
      private property sounds. The expropriators are expropriated.&rdquo;; &ldquo;the negation of negation&rdquo;. The
      evening in Grandpa Ned&apos;s kitchen and the eight workshops belong to this site. The critics and defenders are
      summarised in our own words.
    </p>
  ),
};

export default chapter;
