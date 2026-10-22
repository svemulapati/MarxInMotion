import type { ChapterContent } from "@/components/ChapterTemplate";
import { ForestOfArms, MarchMarch, OneDoesTheWorkOfFive } from "./ch09-animations";

const chapter: ChapterContent = {
  bigQuestion: "When the workshops race to grow bigger and faster, what happens to the people in Tiny Town?",

  story: (
    <>
      <p>
        Every month the workshops of Tiny Town buy bigger machines. Mr. Moneybags can hardly keep up: as soon as he has
        the newest one, his rivals have it too, and he needs an even newer one.
      </p>
      <p>
        Down the lane, Mr. Pike has run a tiny workshop all his life. He can&apos;t afford the giant machines. Widow Hart
        has always lived on the interest from her savings, but each year it pays her less. And every morning there are
        more people at the workshop gate, hoping for a day&apos;s work.
      </p>
      <p>Sam asks Grandpa Ned: &ldquo;If we make so much more than before, why are there more people without work?&rdquo;</p>
    </>
  ),

  guess: (
    <p>
      When one worker with a machine can do the work of five, what happens to the other four? And what happens to a small
      shop when the big workshops can sell much cheaper?
    </p>
  ),

  struggle: [<MarchMarch key="a" />, <OneDoesTheWorkOfFive key="b" />],
  reveal: [<ForestOfArms key="c" />],

  eli5: "Bosses must keep buying bigger machines because their rivals do. Then one worker can do the work of five, so more people wait at the gate and pay goes down. Small shopkeepers get pushed down to work for a wage too, and every so often the whole town has a crash.",

  grownUp: (
    <>
      <p>
        Marx now follows the race of competition to its effects. Division of labour brings more division of labour,
        machinery more machinery, large-scale work, work on a still larger scale. Once a new method is general, a
        capitalist must supply 10, 20 or 100 times as much at the same price, and may need a market for 1,000 times as
        much. Competition, he says, turns every weapon a capitalist forges against himself, and a law constantly shouts
        in his ear: &ldquo;March! march!&rdquo; This is the restless growth and <strong>concentration of capital</strong>.
      </p>
      <p>
        For workers, <strong>division of labour</strong> lets one worker do the work of 5, 10 or 20, so it multiplies the
        competition among workers. Work becomes simple and monotonous, skill loses its value, and since wages tend to the
        cost of producing a worker, they sink. To keep his pay the worker works longer or harder, and so competes against
        himself as a member of his class: &ldquo;the more he works, the less wages he receives.&rdquo;{" "}
        <strong>Machinery</strong> does the same on a larger scale, replacing skilled workers with unskilled, men with
        women and adults with children, throwing workers on the streets. Marx doubts the economists&apos; promise that
        displaced workers find jobs as good as the ones they lost.
      </p>
      <p>
        Meanwhile small manufacturers and people living on interest are pushed down into the working class: &ldquo;the
        forest of outstretched arms, begging for work, grows ever thicker&rdquo;. And as production races ahead and
        credit is stretched, crises, his &ldquo;industrial earthquakes&rdquo;, grow more frequent and more violent. You
        will see all of this worked out in Volume I, Chapters 14, 15 and 25, where the crowd at the gate gets its name:
        the industrial reserve army.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Under competition, rising productivity does not lighten the load. It speeds up a race in which machines and
        division of labour make workers easier to replace, pull more people into the working class, and make crises
        sharper. Rapid growth of capital is still the &ldquo;most favorable condition&rdquo; for wage-labour, Marx says
        with bitter irony, because it is the only way workers get hired at all.
      </p>
    </>
  ),

  critics: [
    {
      who: "Machines make new jobs",
      point: (
        <p>
          Economists have long argued that machinery creates more jobs than it destroys, by cheapening goods, raising
          demand and opening new industries. Over two centuries, employment in industrial countries grew enormously
          alongside mechanisation. Critics of that view, then and now, reply that the new jobs often go to different
          people, in different places, at different pay, which is close to the point Marx makes here.
        </p>
      ),
    },
    {
      who: "Small businesses survive",
      point: (
        <p>
          Eduard Bernstein, a socialist, argued in 1899 that small firms were not disappearing as fast as Marx expected,
          and a large share of people still work in small businesses today. Defenders reply that giant firms dominate
          output and that many small businesses survive as suppliers to them.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why must Mr. Moneybags keep buying bigger machines?",
      options: ["He likes machines", "Rivals copy every improvement, so he must find a new one to stay ahead", "The law tells him to"],
      answer: 1,
      why: "Competition makes each new method general, and then prices fall. To keep an edge he must improve again: “March! march!”",
    },
    {
      q: "One worker with a machine can now do the work of five. What does Marx say happens to wages?",
      options: ["They go up", "They sink, because more workers compete and skill is worth less", "They stay exactly the same"],
      answer: 1,
      why: "More workers compete for fewer places, and simpler work costs less to learn, so wages sink.",
    },
    {
      q: "What happens to Mr. Pike and Widow Hart?",
      options: ["They become rich bosses", "They are pushed down into the working class", "They move to the countryside"],
      answer: 1,
      why: "Small manufacturers are undersold and small savers earn less interest, so they join the crowd looking for work.",
    },
  ],

  remember: [
    "Competition is a race: every new machine is copied, so the next one must come.",
    "Division of labour and machines let one worker do the work of many, so workers compete harder and wages sink.",
    "Small business people get pushed into the working class: the forest of arms grows thicker.",
    "Marx says crises, his industrial earthquakes, grow more frequent and more violent.",
    "That is the end of Wage-Labour and Capital. Next comes the Manifesto, where Marx and Engels say what workers should do about it.",
  ],

  terms: ["industrial-war", "division-of-labour", "machinery", "industrial-reserve-army"],

  source: (
    <p>
      Covers Wage-Labour and Capital, Chapter 9 (&ldquo;Effect of Capitalist Competition on the Capitalist Class, the
      Middle Class and the Working Class&rdquo;), in Engels&apos; 1891 edition. Marx&apos;s own words and examples:
      &ldquo;March! march!&rdquo;; 10, 20, 100 and 1,000 times as much; one worker doing the work of 5, 10 or 20;
      &ldquo;the more he works, the less wages he receives&rdquo;; one man replaced by three children and one woman;
      &ldquo;the forest of outstretched arms, begging for work&rdquo;; &ldquo;industrial earthquakes&rdquo;. Mr. Pike and
      Widow Hart are this site&apos;s characters. The series was never finished: the Neue Rheinische Zeitung was
      suppressed on 19 May 1849, and Engels wrote in 1891 that no manuscript of a continuation was found among
      Marx&apos;s papers.
    </p>
  ),
};

export default chapter;
