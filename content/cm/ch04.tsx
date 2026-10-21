import type { ChapterContent } from "@/components/ChapterTemplate";
import { PartnersEverywhere, TheLastLines } from "./ch04-animations";

const chapter: ChapterContent = {
  bigQuestion: "Who did the communists want to team up with, and how does the Manifesto end?",

  story: (
    <>
      <p>
        It is late in Tiny Town&apos;s square. Most people have gone home. Sam is still reading the last page of the
        pamphlet by lamplight.
      </p>
      <p>
        This part is very short. It lists groups in other countries that the communists would work with, like a list of
        friends in faraway towns. Then it ends with three sentences so famous that people still paint them on walls today.
      </p>
      <p>
        Mr. Moneybags reads the last lines over Sam&apos;s shoulder and turns pale. Grandpa Ned frowns: &ldquo;That&apos;s a
        call to fight.&rdquo; Sam reads them again and doesn&apos;t say anything at all.
      </p>
      <p>Why did a few short lines make so many people so excited, and so many others so afraid?</p>
    </>
  ),

  guess: (
    <p>
      If you were writing a pamphlet in 1848 and wanted workers in many countries to join you, which groups would you try
      to team up with? And how would you end it, so nobody could forget it?
    </p>
  ),

  struggle: [<PartnersEverywhere key="a" />],
  reveal: [<TheLastLines key="b" />],

  eli5: "In the last part, Marx and Engels named the groups they would work with in each country. Then they said openly that they wanted a revolution, and that workers had nothing to lose but their chains. The very last line asks workers of all countries to unite.",

  grownUp: (
    <>
      <p>
        Section IV applies the Manifesto to the politics of early 1848. In England the communists back the{" "}
        <strong>Chartists</strong>, in America the Agrarian Reformers, in France the Social-Democrats (Engels later
        explained these were the party of Ledru-Rollin and Louis Blanc), in Switzerland the Radicals, and in Poland the
        party of agrarian revolution behind the Cracow insurrection of 1846.
      </p>
      <p>
        Germany gets most attention. The communists would fight alongside the bourgeoisie &ldquo;whenever it acts in a
        revolutionary way&rdquo; against absolute monarchy and the landed gentry, while teaching workers that their
        interests are opposed to the bourgeoisie&apos;s, because they expected the German bourgeois revolution to be
        &ldquo;but the prelude to an immediately following proletarian revolution&rdquo;. In every movement, they say, they
        bring forward &ldquo;the property question&rdquo;.
      </p>
      <p>
        The ending is a declaration: communists &ldquo;disdain to conceal their views and aims&rdquo;, which can be
        attained &ldquo;only by the forcible overthrow of all existing social conditions&rdquo;. It closes with{" "}
        <strong>&ldquo;Working Men of All Countries, Unite!&rdquo;</strong> In their 1872 preface the authors said this
        section, though correct &ldquo;in principle&rdquo;, was &ldquo;in practice are antiquated&rdquo;, since most of these
        parties had vanished.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Marx and Engels argued that workers in different countries share one cause, and that communists should support any
        movement against the existing order while always pressing the question of who owns the means of production. They
        did not pretend this could happen gently: they openly predicted, and called for, a revolution.
      </p>
      <p>
        Their prediction for Germany did not come true: the revolutions of 1848 were defeated within about a year. The
        authors later treated the Manifesto as a historical document, while still holding its general principles to be
        correct.
      </p>
    </>
  ),

  critics: [
    {
      who: "Karl Popper and the case for reform",
      point: (
        <p>
          Karl Popper (<em>The Open Society and Its Enemies</em>, 1945) argued that calls for the overthrow of a whole
          society rest on the false belief that history has a fixed direction, and that violent revolution tends to bring
          new tyranny. He argued for step-by-step reform that can be tested and reversed through democratic institutions.
        </p>
      ),
    },
    {
      who: "Socialists who chose the ballot box",
      point: (
        <p>
          Eduard Bernstein, a socialist who had known Engels, argued in 1899 that workers&apos; lives were improving and
          that parties could win change through elections and unions instead of revolution. Many socialist and labour
          parties followed that road. Supporters of the Manifesto reply that it was written for a time when most workers
          could not vote at all, and that it backed the Chartists&apos; fight for the vote.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which group did the Manifesto support in England?",
      options: ["The Chartists", "The landed aristocracy", "The Agrarian Reformers"],
      answer: 0,
      why: "The Chartists were campaigning for working men's right to vote. The Agrarian Reformers were in America.",
    },
    {
      q: "Why would the communists back the German bourgeoisie for a while?",
      options: [
        "They agreed with it about everything",
        "To fight the king and the old lords, expecting a workers' revolution to follow",
        "Because the bourgeoisie paid them",
      ],
      answer: 1,
      why: "They supported it against absolute monarchy, while warning workers that its interests were opposed to theirs.",
    },
    {
      q: "What is the Manifesto's famous last line in the 1888 English edition?",
      options: ["“Let the ruling classes tremble”", "“Working Men of All Countries, Unite!”", "“Workers of the world, relax!”"],
      answer: 1,
      why: "That is the translation Engels approved. “Workers of the world, unite!” is a later popular version.",
    },
  ],

  remember: [
    "Section IV lists the groups communists would work with in 1848, country by country.",
    "In Germany they would back the bourgeoisie against the king, but only for now.",
    "The Manifesto openly calls for revolution, which is one reason it was feared and banned.",
    "It ends: “Working Men of All Countries, Unite!”",
    "That's the whole Manifesto, a short call to action. Next comes the long, careful book behind it: Volume I of Capital, starting with a single coat and some linen.",
  ],

  terms: ["chartists", "workers-of-all-countries-unite", "classes"],

  source: (
    <p>
      Covers Section IV, &ldquo;Position of the Communists in Relation to the Various Existing Opposition Parties&rdquo;,
      of the <em>Manifesto of the Communist Party</em> by Marx and Engels (1848), in the 1888 English translation by
      Samuel Moore in cooperation with Engels, as on marxists.org, with Engels&apos; 1888 note on the French
      Social-Democrats and the marxists.org note on the German wording of the last line. The 1872 remarks come from the
      authors&apos; joint preface. The Chartists&apos; aim, the fate of the 1848 revolutions, Popper and Bernstein are
      general history.
    </p>
  ),
};

export default chapter;
