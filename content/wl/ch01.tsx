import type { ChapterContent } from "@/components/ChapterTemplate";
import { APlanInThreeParts, UnderTheHeadlines } from "./ch01-animations";

const chapter: ChapterContent = {
  bigQuestion: "What is going on underneath all the fighting in the news?",

  story: (
    <>
      <p>
        Imagine Sam in 1849, reading the newspaper every morning before work. Every day there is more news: fighting in
        Paris, a city captured in Vienna, kings and soldiers in Berlin, uprisings in Hungary and Italy.
      </p>
      <p>
        One morning Sam puts the paper down. &ldquo;I read about battles every day,&rdquo; he says to Mia at the bakery.
        &ldquo;But nobody tells me why my wage is so small, or why Mr. Moneybags keeps getting richer. What has all this
        fighting got to do with me?&rdquo;
      </p>
      <p>
        That same week, the paper prints something new on its front page. The editor, Karl Marx, writes that it is time
        to stop and look underneath the news, at the plain facts of work and money.
      </p>
      <p>What could be underneath all those battles?</p>
    </>
  ),

  guess: (
    <p>
      Think of a house. You see the walls and the roof, but what holds it all up? If the news is the house, what do you
      think the ground underneath might be?
    </p>
  ),

  struggle: [<UnderTheHeadlines key="a" />],
  reveal: [<APlanInThreeParts key="b" />],

  eli5: "The newspaper had been full of battles, and readers asked why they were happening. Marx said the answer lies underneath, in who owns things and who works for wages. He promised to explain it in simple words that workers could understand.",

  grownUp: (
    <>
      <p>
        In this short opening, written for the Neue Rheinische Zeitung in April 1849, Marx answers readers who had
        complained that the paper never described the economic conditions behind the political struggles of 1848. Until
        then, he says, the paper had followed the conflicts themselves: the June fighting in Paris, the fall of Vienna,
        the events in Berlin, and the defeats in Poland, Italy and Hungary.
      </p>
      <p>
        Now he turns to the economic foundation &ldquo;upon which is founded the existence of the capitalist class and
        its class rule&rdquo;. He plans three parts: the relation of wage-labour to capital; the ruin of the middle
        classes and peasants; and the commercial domination of Europe by England, the leader of the{" "}
        <strong>world market</strong>. Only the first part was ever printed.
      </p>
      <p>
        He also promises to write &ldquo;as simply and popularly as possible&rdquo;, assuming no knowledge of political
        economy: &ldquo;We wish to be understood by the workers.&rdquo;
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Politics and wars do not float in the air. They rest on how a society produces and shares its wealth. To
        understand why people fight, you have to understand who owns the means of production and who must work for
        wages. This idea runs through all of Marx&apos;s later work, including <em>Capital</em>.
      </p>
    </>
  ),

  critics: [
    {
      who: "Historians",
      point: (
        <p>
          Many historians agree that economics matters, but argue that the revolutions of 1848 also grew from
          nationalism, demands for voting rights and free speech, religion, and bad harvests. They warn that treating
          politics as resting on economics alone can leave out ideas and choices that changed what happened.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why did Marx stop to write about economics in April 1849?",
      options: [
        "Readers asked what lay underneath all the political fighting",
        "The paper ran out of news",
        "He was asked to by the King of Prussia",
      ],
      answer: 0,
      why: "Marx says readers had complained that the paper never described the economic conditions behind the struggles.",
    },
    {
      q: "How many parts did Marx plan, and how many got printed?",
      options: ["Two planned, two printed", "Three planned, only one printed", "Ten planned, five printed"],
      answer: 1,
      why: "He planned three parts, but the paper closed after the first was printed.",
    },
    {
      q: "Who did Marx want to understand him?",
      options: ["Bankers", "Other professors", "Workers, with no economics needed"],
      answer: 2,
      why: "He promised to write as simply as possible: 'We wish to be understood by the workers.'",
    },
  ],

  remember: [
    "Marx's paper had reported the battles of 1848; readers asked what lay underneath them.",
    "Marx's answer: the economic ground of society, who owns things and who works for wages.",
    "He planned three parts, but only the first, Wage-Labour and Capital, was printed.",
    "He wrote it in simple words for workers.",
  ],

  terms: ["world-market", "political-economy", "capital"],

  source: (
    <p>
      Covers the &ldquo;Preliminary&rdquo; section of Wage-Labour and Capital (marxists.org). The three planned parts,
      the list of 1848 events, &ldquo;despot of the world market&rdquo; and &ldquo;We wish to be understood by the
      workers&rdquo; are Marx&apos;s own. Sam and Mia reading the paper belong to this site. The ideas here return in{" "}
      <em>Capital</em>, Volume I, Chapter 1 onward.
    </p>
  ),
};

export default chapter;
