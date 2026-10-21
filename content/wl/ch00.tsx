import type { ChapterContent } from "@/components/ChapterTemplate";
import { FromLectureToNewspaper, OneChangedWord, RoadOfExile } from "./ch00-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why did a talk about wages get its writer chased out of three countries?",

  story: (
    <>
      <p>
        Before Tiny Town, before the big book called <em>Capital</em>, there was a cold room in Brussels. It is
        December 1847. A group of German workers has come to Belgium to find jobs. After work they meet in their club,
        the German Workers&apos; Society, to learn things nobody taught them at school.
      </p>
      <p>
        One evening a young man with a big black beard stands up to speak. His name is Karl Marx. He is not a factory
        worker, but he has spent years reading about money and work. Tonight he wants to answer a question every worker
        in the room cares about: why does working all day for a wage still leave you poor, while the boss gets richer?
      </p>
      <p>
        Marx doesn&apos;t know it yet, but over the next two years he will be ordered out of Belgium, then out of
        Prussia, then out of France. His talk will end up on the front page of a newspaper the government is trying to
        shut down.
      </p>
      <p>How can a talk about wages be so dangerous? Let&apos;s follow the story of this little book.</p>
    </>
  ),

  guess: (
    <p>
      Why do you think a government might want to stop people reading a talk about wages? And what would you do if you
      kept being told to leave the country you lived in?
    </p>
  ),

  struggle: [<FromLectureToNewspaper key="a" />, <RoadOfExile key="b" />],
  reveal: [<OneChangedWord key="c" />],

  eli5: "Marx gave talks to workers to explain why wages keep them poor while bosses get rich. Rulers who were scared of revolution kept pushing him out of their countries, until he settled in London. His talks became a little book that is still read today.",

  grownUp: (
    <>
      <p>
        <strong>Why it was written.</strong> In the second half of December 1847 Marx gave a series of lectures on
        political economy to the <strong>German Workers&apos; Society</strong> in Brussels, a club for German
        working-class refugees that he and Engels had helped set up that August. He wanted workers to understand the
        economic relations behind their lives. When he later printed the lectures, he promised to explain things
        &ldquo;as simply and popularly as possible&rdquo; and to assume no knowledge of economics at all: &ldquo;We wish
        to be understood by the workers.&rdquo;
      </p>
      <p>
        <strong>Why it mattered.</strong> It is Marx&apos;s first attempt, in plain language, to explain the relation
        between wage-labour and capital: that wages are the price of something the worker sells, that capital is
        accumulated labour used to buy more living labour, and that the interests of workers and capitalists pull in
        opposite directions. These ideas come back, worked out much more carefully, in <em>Capital</em> twenty years
        later. Because it is short and clear, it became one of the most widely used introductions to Marx&apos;s
        economics.
      </p>
      <p>
        <strong>How it became controversial.</strong> The lectures were printed in April 1849 as front-page articles
        in the <strong>Neue Rheinische Zeitung</strong>, the daily paper Marx edited in Cologne during the revolution of
        1848 and 1849. The Prussian authorities treated the paper as a danger: they suspended it, put Marx on trial twice
        in February 1849 (a jury acquitted him both times), and finally expelled him. Decades later the text stirred a
        second, quieter argument. In 1891 Engels changed its central claim, that workers sell their
        &ldquo;labour&rdquo;, to say that they sell their <strong>labour-power</strong>, and he said openly that the
        pamphlet was now &ldquo;not as Marx wrote it in 1849&rdquo;.
      </p>
      <p>
        <strong>What happened to it afterwards.</strong> The series stopped unfinished: the paper&apos;s last issue
        appeared on May 19, 1849, and no manuscript of the rest was ever found. The articles were later reprinted as a
        pamphlet in several editions (the last before 1891 in Zurich in 1884), and Engels&apos; 1891 edition was printed
        in 10,000 copies for workers. It has since been translated into many languages.
      </p>
      <p>
        <strong>Why Marx had to leave.</strong> Marx was expelled again and again. France ordered him out in January
        1845 under pressure from the Prussian government; he gave up his Prussian citizenship that December. In March
        1848, as revolution spread from Paris, the King of Belgium ordered him out within 24 hours. After a year running
        the paper in Cologne, Prussia expelled him in May 1849 on the excuse that he was no longer a Prussian subject.
        Back in Paris, the French government ordered him out once more in August 1849, and he moved to London, where he
        lived for the rest of his life.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The book&apos;s big claim is that the wage looks like a fair price for work, but hides an unequal relationship.
        The worker owns nothing except the ability to work, so he must sell it to those who own the tools and materials.
        What he gets back is enough to live on; what he makes is worth more, and the difference builds up the capital
        that employs him.
      </p>
      <p>
        Marx saw this as an argument workers should hear, not just professors, which is exactly why it was printed in a
        newspaper during a revolution, and why governments that feared revolution saw both the paper and its editor as a
        threat.
      </p>
    </>
  ),

  critics: [
    {
      who: "On Engels' edit",
      point: (
        <p>
          Some scholars argue that Engels&apos; 1891 changes read Marx&apos;s later theory back into an earlier,
          rougher text, so readers of the popular edition never see how Marx&apos;s ideas actually developed. Others
          defend Engels: he announced every change in his introduction, the original wording stayed in circulation, and
          the complete works now print the 1849 text unaltered.
        </p>
      ),
    },
    {
      who: "On the argument",
      point: (
        <p>
          Most economists today say wages track how much a worker adds to production, and they point out that real
          wages in industrial countries rose many times over after 1849, which they see as evidence against the
          book&apos;s gloomy picture. Marx&apos;s defenders reply that the book is about who controls the product and
          how the gap between owners and workers grows, not only about wages going up or down.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Who were Marx's first listeners for Wage-Labour and Capital?",
      options: ["Professors at a university", "German workers at a club in Brussels", "The King of Belgium's court"],
      answer: 1,
      why: "Marx gave the lectures to the German Workers' Society in Brussels in December 1847.",
    },
    {
      q: "Why did the articles stop before the end?",
      options: [
        "Marx got bored of the subject",
        "The newspaper was shut down when Prussia expelled Marx in May 1849",
        "Engels lost the manuscript",
      ],
      answer: 1,
      why: "The Neue Rheinische Zeitung printed its last issue on May 19, 1849, and the series was never continued.",
    },
    {
      q: "What did Engels change in his 1891 edition?",
      options: [
        "He said workers sell their labour-power, not their labour",
        "He added a whole new chapter on banks",
        "He took Marx's name off the cover",
      ],
      answer: 0,
      why: "Engels changed one key idea to match Marx's later work, and said openly that he had done so.",
    },
  ],

  remember: [
    "Wage-Labour and Capital began as lectures Marx gave to German workers in Brussels in December 1847.",
    "It was printed in April 1849 in the Neue Rheinische Zeitung, a paper the Prussian government wanted gone.",
    "The series stopped when the paper closed on May 19, 1849, and was never finished.",
    "Marx was ordered out of France (1845), Belgium (1848), Prussia (1849) and France again (1849), and settled in London.",
    "In 1891 Engels changed 'labour' to 'labour-power' and told readers so.",
  ],

  terms: ["german-workers-society", "neue-rheinische-zeitung", "labour-into-labour-power", "labour-power"],

  source: (
    <p>
      Covers the story of Wage-Labour and Capital, using Engels&apos; 1891 introduction (marxists.org), Engels&apos;
      1869 biographical sketch of Marx, and the Progress Publishers chronology <em>Karl Marx: His Life and Work</em> on
      marxists.org. Engels&apos; introduction says the articles began on April 4th, 1849; the chronology dates them
      April 5 to 8 and 11. The 3-shilling, 12-hour, 6-shilling example in animation 0.3 is Engels&apos; own, from the
      1891 introduction. Marx&apos;s promise to be &ldquo;understood by the workers&rdquo; is from the
      book&apos;s Preliminary section. &ldquo;Translated into many languages&rdquo; is general knowledge, not from
      these sources.
    </p>
  ),
};

export default chapter;
