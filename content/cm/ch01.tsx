import type { ChapterContent } from "@/components/ChapterTemplate";
import { SinkingIntoTheCrowd, TwoSidesAgainAndAgain, WhatTheBourgeoisieBuilt } from "./ch01-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is history really a story of two sides pulling against each other?",

  story: (
    <>
      <p>
        Sam has found an old pamphlet in the attic. On the first page there is a ghost. &ldquo;A spectre is haunting
        Europe,&rdquo; it says.
      </p>
      <p>
        He reads it aloud in Mia&apos;s bakery. The pamphlet says that all through history people have been split into two
        sides: those who own and command, and those who work for them. Today, it says, the two sides are the owners of the
        big workshops and the people who work for a wage.
      </p>
      <p>
        Mr. Moneybags, buying a loaf, frowns. &ldquo;That&apos;s about me, isn&apos;t it?&rdquo; Sam turns the page.
        &ldquo;Funny thing,&rdquo; he says. &ldquo;It says your kind changed the whole world. It almost sounds like it
        admires you.&rdquo;
      </p>
      <p>Admires him, and warns him. What does this strange pamphlet really say?</p>
    </>
  ),

  guess: (
    <p>
      Can you think of times in history when one group gave orders and another group did the work? Do you think it is always
      just two sides, or are there people in the middle?
    </p>
  ),

  struggle: [<TwoSidesAgainAndAgain key="a" />, <WhatTheBourgeoisieBuilt key="b" />],
  reveal: [<SinkingIntoTheCrowd key="c" />],

  eli5: "Marx and Engels said that history has always had people who own and command, and people who work for them. They said today's owners, the bourgeoisie, changed the world faster than anyone before. They believed the workers would one day join together and take over, but that was their prediction, and many people think it did not come true.",

  grownUp: (
    <>
      <p>
        The opening preamble pictures communism as a &ldquo;spectre&rdquo; that all the powers of old Europe, from the Pope
        and the Tsar to Metternich, Guizot and the German police, have united to exorcise. The Manifesto, it says, will
        answer the nursery tale with the communists&apos; own views.
      </p>
      <p>
        Section I begins: &ldquo;The history of all hitherto existing society is the history of class struggles.&rdquo;
        Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman have always stood in
        opposition. The modern age has &ldquo;simplified class antagonisms&rdquo; into two great camps: the{" "}
        <strong>bourgeoisie</strong>, the owners of the means of production who employ wage labour, and the{" "}
        <strong>proletariat</strong>, the wage workers who must sell their labour-power to live (definitions from
        Engels&apos; 1888 notes).
      </p>
      <p>
        The bourgeoisie, it says, &ldquo;has played a most revolutionary part&rdquo;. It broke feudal ties, replaced them
        with &ldquo;naked, shameless, direct, brutal exploitation&rdquo;, created a <strong>world market</strong>, linked
        every nation through trade, and in &ldquo;scarce one hundred years&rdquo; built more productive power than all
        earlier generations. Constant change is its mark: &ldquo;All that is solid melts into air.&rdquo; Yet it is
        &ldquo;like the sorcerer&rdquo; who cannot control the powers he has called up, as recurring commercial crises of
        overproduction show. The state, it adds, is &ldquo;but a committee for managing the common affairs of the whole
        bourgeoisie&rdquo;.
      </p>
      <p>
        Meanwhile the proletariat grows. The worker becomes &ldquo;an appendage of the machine&rdquo;. Small traders,
        shopkeepers, handicraftsmen and peasants &ldquo;sink gradually into the proletariat&rdquo;. Workers begin to form
        combinations (trade unions), and the real fruit of their battles is &ldquo;the ever expanding union of the
        workers&rdquo;, helped by railways and modern communications. The chapter ends with its most famous prediction: the
        bourgeoisie produces &ldquo;its own grave-diggers&rdquo;, and its fall is &ldquo;inevitable&rdquo;. This is the{" "}
        <strong>class struggle</strong> at the centre of the whole Manifesto.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        History moves through conflicts between classes, and the economic way a society produces shapes everything else.
        Capitalism is not an evil to be wished away: it has been a hugely creative force, and Marx and Engels wanted to show
        its achievements as clearly as its costs.
      </p>
      <p>
        But they argued that the same system creates its own problems (crises, insecurity, a growing class of wage workers)
        and the people who will replace it. That last part is a prediction, written in 1848, and it is the part most
        disputed.
      </p>
    </>
  ),

  critics: [
    {
      who: "More than two classes",
      point: (
        <p>
          Sociologists from Max Weber onward argue that society did not split into two camps. In rich countries, the middle
          classes of managers, professionals, small business owners and public employees grew. Wages and living standards
          rose, and workers gained votes and welfare states rather than making a revolution. Marx&apos;s defenders reply
          that most people still live by selling their work.
        </p>
      ),
    },
    {
      who: "Praise for the description",
      point: (
        <p>
          Even many opponents admire the chapter&apos;s picture of a restless, world-spanning capitalism; Marshall
          Berman&apos;s 1982 book <em>All That Is Solid Melts Into Air</em> takes its title from it. Economists add that the
          crises it describes are real, but that growth after each one has outrun the Manifesto&apos;s expectation of
          deepening poverty.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What do Marx and Engels say the history of all societies has been?",
      options: ["A history of kings", "A history of class struggles", "A history of inventions"],
      answer: 1,
      why: "That is the famous first line of Section I.",
    },
    {
      q: "What does the Manifesto say about the bourgeoisie's achievements?",
      options: [
        "It achieved nothing",
        "It changed the world faster than all earlier generations, building a world market",
        "It only made things worse",
      ],
      answer: 1,
      why: "Surprisingly, the Manifesto praises the bourgeoisie as “most revolutionary” before warning about crises.",
    },
    {
      q: "Is “the bourgeoisie produces its own grave-diggers” a fact or a prediction?",
      options: ["A proven fact", "A prediction that many argue did not come true", "A joke"],
      answer: 1,
      why: "It was Marx and Engels' forecast in 1848. Critics point to growing middle classes and rising living standards.",
    },
  ],

  remember: [
    "The Manifesto opens with communism as a “spectre” feared by all the powers of old Europe.",
    "“The history of all hitherto existing society is the history of class struggles.”",
    "Bourgeoisie: owners of the means of production. Proletariat: people who live by selling their work.",
    "Marx and Engels praised the bourgeoisie for building a world market and huge new productive powers.",
    "They predicted that workers would unite and replace it, a forecast that remains hotly disputed.",
  ],

  terms: ["bourgeoisie", "proletariat", "class-struggle", "world-market", "classes"],

  source: (
    <p>
      The Communist Manifesto (1848), the preamble and Section I, &ldquo;Bourgeois and Proletarians&rdquo;, in the 1888
      English translation by Samuel Moore, edited by Engels, as on marxists.org. The definitions of bourgeoisie and
      proletariat and the note on &ldquo;written history&rdquo; are Engels&apos; notes to the 1888 edition. Master Hal is a
      one-off character invented for this page.
    </p>
  ),
};

export default chapter;
