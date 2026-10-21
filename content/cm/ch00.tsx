import type { ChapterContent } from "@/components/ChapterTemplate";
import { ForgottenThenEverywhere, MarxOnTheMove, WhyItWasWritten } from "./ch00-animations";

const chapter: ChapterContent = {
  bigQuestion: "How did a thin pamphlet become one of the most argued-over books in the world?",

  story: (
    <>
      <p>
        Long before Tiny Town&apos;s big book, there was a small one. It was only a few dozen pages, printed in London in
        1848, in German.
      </p>
      <p>
        At first almost nobody read it. Its writers were chased from country to country. Its friends were put on trial. For
        more than twenty years it looked as if it would be forgotten.
      </p>
      <p>
        Then it came back, and it never went away. Today it has been printed in more languages than almost any other
        political booklet. Some people have loved it. Some governments banned it. Others built whole states in its name, with
        terrible results. Before we read what it says, let&apos;s find out where it came from.
      </p>
    </>
  ),

  guess: (
    <p>
      Why do you think a government might be afraid of a small booklet? And why might the same booklet be loved by some
      people and feared by others?
    </p>
  ),

  struggle: [<WhyItWasWritten key="a" />, <MarxOnTheMove key="b" />],
  reveal: [<ForgottenThenEverywhere key="c" />],

  eli5: "A small secret group asked Marx and Engels to write down what they wanted, and in 1848 they made a short booklet. It said workers should join together and change the world, which frightened many governments, so Marx was pushed out of country after country until he settled in London. The booklet was nearly forgotten, then spread around the world, and people still argue about it today.",

  grownUp: (
    <>
      <p>
        <strong>Why it was written.</strong> The <strong>Communist League</strong> was a small association of workers and
        exiles, mostly German at first, and, as Engels later put it, unavoidably a secret society under the conditions of the
        time. At its congress in London in November 1847 it commissioned Marx and Engels to write a detailed theoretical and
        practical programme. Engels had already drafted two versions in question-and-answer form (the second is known as
        the <em>Principles of Communism</em>); in a letter of late November 1847 he suggested dropping the catechism form and
        calling it a &ldquo;Communist Manifesto&rdquo;. Marx wrote the text in German in January 1848, and the manuscript
        was sent to a London printer a few weeks before the Paris revolution of 24 February 1848.
      </p>
      <p>
        <strong>Why it mattered.</strong> The Manifesto packed a whole view of history into a few pages: history as the
        history of class struggles; the modern bourgeoisie as a revolutionary force that had built a world market; the
        working class, the proletariat, as the force that would replace it. It ended with a programme and a slogan,
        &ldquo;Working Men of All Countries, Unite!&rdquo;. It appeared just as revolutions swept Europe in 1848, though it
        had little to do with starting them.
      </p>
      <p>
        <strong>Why it was controversial.</strong> It summed up the communists&apos; theory as the &ldquo;abolition of
        private property&rdquo; (meaning, it says, bourgeois property in the means of production, not personal belongings),
        and it openly declared that its aims could be reached only by the &ldquo;forcible overthrow&rdquo; of existing
        social conditions. Governments treated communists as dangerous. Prussian police arrested the League&apos;s leaders in
        Cologne; after eighteen months in prison they were tried in the <strong>Cologne Communist Trial</strong> (4 October
        to 12 November 1852), and seven were sentenced to three to six years in a fortress. The League then dissolved itself.
      </p>
      <p>
        <strong>What happened next.</strong> For two decades the Manifesto was little read. Interest returned after the
        Paris Commune of 1871, and in 1872 it was read out as evidence at a treason trial of German socialist leaders in
        Leipzig, which put it back in print. In their preface to the 1872 German edition, Marx and Engels said the principles were still
        correct but some details, especially the practical programme and Section IV, were &ldquo;antiquated&rdquo;.
        Translations multiplied, and by 1890 Engels called it the most widely circulated, most international product of all
        socialist literature. In the twentieth century it was printed by the million by Communist parties and by states that
        claimed to follow Marx, several of which became one-party dictatorships responsible for famines, purges and prison
        camps. Others, including many non-Marxists, have read its pages on the world market as a strikingly early picture of
        globalisation.
      </p>
      <p>
        <strong>Why Marx had to leave.</strong> At the Prussian government&apos;s request, France expelled Marx in 1845. He
        moved to Brussels, where the Manifesto was written. When the February 1848 revolution stirred unrest in Belgium, the
        Belgian government arrested and deported him. He returned to Paris, then went to Cologne, where he edited the{" "}
        <em>Neue Rheinische Zeitung</em> from 1 June 1848. After the 1849 risings were crushed, Prussia banished him on 16
        May 1849, and the paper&apos;s last issue, on 19 May, was printed in red ink. Banished from Paris again after the
        demonstration of 13 June 1849, he moved to London that summer and lived there until his death in 1883.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Marx and Engels did not think they were inventing an ideal. They believed they were describing where history was
        already heading: capitalism had created huge new powers of production and a growing class of wage workers, and those
        workers, by organising, would take political power and end class rule.
      </p>
      <p>
        They also saw the Manifesto as a document of its time. They refused to rewrite it, calling it a historical document
        they no longer had any right to alter, and added prefaces instead.
      </p>
    </>
  ),

  critics: [
    {
      who: "The historical record",
      point: (
        <p>
          Critics such as Karl Popper and Leszek Kołakowski argue that the Manifesto&apos;s certainty about where history
          must go, and its call for revolution and the abolition of private property, helped justify the one-party states of
          the twentieth century, from the Soviet Union to Cambodia, with their purges, famines and camps. Defenders reply that
          Marx and Engels described no such state, and that later rulers chose those policies themselves.
        </p>
      ),
    },
    {
      who: "Admirers who are not Marxists",
      point: (
        <p>
          Many writers who reject its politics still praise its picture of capitalism: the world market, constant change,
          &ldquo;all that is solid melts into air&rdquo; (the title of Marshall Berman&apos;s 1982 book). Others answer that
          its forecasts went wrong in rich countries, where the middle classes grew, workers won votes and rising wages, and
          no revolution came.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Who asked Marx and Engels to write the Manifesto?",
      options: ["The King of Prussia", "The Communist League, a small workers' association", "A London newspaper"],
      answer: 1,
      why: "At its London congress in November 1847, the Communist League asked them to write its programme.",
    },
    {
      q: "Why did Marx have to leave Belgium in 1848?",
      options: [
        "He wanted to see London",
        "The government feared the Paris revolution would spread, and deported him",
        "He ran out of money",
      ],
      answer: 1,
      why: "When the February 1848 revolution broke out in Paris, Belgium's government arrested and deported him.",
    },
    {
      q: "What happened to the Manifesto in the first twenty years?",
      options: ["It sold millions at once", "It was little read, then revived after 1871", "It was never printed"],
      answer: 1,
      why: "After the 1852 Cologne trial it seemed forgotten. Interest returned after the Paris Commune of 1871.",
    },
  ],

  remember: [
    "The Communist League asked Marx and Engels to write its programme in November 1847. It appeared in February 1848.",
    "It said history is a story of class struggles, and that workers of all countries should unite.",
    "Its call to abolish private property and overthrow existing conditions by force made it feared by governments.",
    "Marx was expelled from Paris, Brussels and Prussia, then Paris again, and settled in London in 1849.",
    "Nearly forgotten at first, it became one of the most widely read and most argued-over political texts in the world.",
  ],

  terms: ["communist-league"],

  source: (
    <p>
      The Communist Manifesto, the story of the book. Facts are from the prefaces by Marx and Engels (1872, 1882) and by
      Engels (1883, 1888, 1890, 1892, 1893), Engels&apos; 1877 biography of Marx, Lenin&apos;s 1914 biographical sketch,
      and the marxists.org introduction to the <em>Principles of Communism</em>. The 1872 Leipzig trial, the month of
      Marx&apos;s arrival in London, and the twentieth-century history are general history, not from these texts. Marx and
      Engels both signed the Manifesto; Engels said its basic idea belonged to Marx.
    </p>
  ),
};

export default chapter;
