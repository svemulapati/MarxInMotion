import type { ChapterContent } from "@/components/ChapterTemplate";
import { SameLoomNewBoss, TheSagoIsland, TwoTeachers } from "./ch16-animations";

const chapter: ChapterContent = {
  bigQuestion: "Who counts as a “productive” worker?",

  story: (
    <>
      <p>
        Mia is reading the Tiny Town newspaper. &ldquo;Mr. Moneybags says his new school is very productive,&rdquo; she
        reads out. &ldquo;Is it more productive than the town school?&rdquo;
      </p>
      <p>
        Grandpa Ned scratches his head. &ldquo;Both schools teach reading and sums. The teachers work just as hard. How
        can one be more productive than the other?&rdquo;
      </p>
      <p>
        Leo has a puzzle of his own. When he started working for Mr. Moneybags he used his old hand loom, just like at
        home. Now there is a whole factory of machine looms. Has he been working for a boss all along, or did something
        change?
      </p>
      <p>And far away, on an island where food grows on trees, an islander wonders why anyone would work all week at all.</p>
    </>
  ),

  guess: (
    <p>
      If two teachers teach the same lesson equally well, can one be more &ldquo;productive&rdquo; than the other? What
      might Mr. Moneybags mean by productive?
    </p>
  ),

  struggle: [<TwoTeachers key="a" />, <SameLoomNewBoss key="b" />],
  reveal: [<TheSagoIsland key="c" />],

  eli5: "For a boss, a productive worker is one who makes him extra money, even a teacher. Bosses get extra by making the day longer or by making the work faster. Nature can give people spare time, but it does not decide who gets that time.",

  grownUp: (
    <>
      <p>
        This short chapter pulls Parts Three and Four together. First, <strong>productive labour</strong>. In the
        simple labour process, any work that makes a useful product is productive. As production becomes social, the
        idea widens: you can be part of a collective worker without touching the product yourself. But capitalism also
        narrows it. Under capital, productive means producing <strong>surplus-value</strong>. Marx&apos;s example is a
        schoolmaster who enriches the owner of a &ldquo;teaching factory&rdquo;: it makes no difference that the owner put
        his capital into a school instead of a sausage factory. To be a productive worker, Marx adds, is not a piece of
        luck but a misfortune.
      </p>
      <p>
        Second, the two ways to get surplus-value. <strong>Absolute surplus-value</strong> comes from making the day
        longer. For that, <strong>formal subsumption</strong> is enough: workers come under capital&apos;s command, but
        they keep working the old way, like Leo at his hand loom. <strong>Relative surplus-value</strong> comes from
        shortening the time it takes to pay back the wage, which needs <strong>real subsumption</strong>: capital remakes
        the work itself with co-operation, division of labour and machines. Seen one way the two are the same thing (both
        raise surplus labour against necessary labour); seen another, they are very different.
      </p>
      <p>
        Third, the &ldquo;natural basis&rdquo; of surplus-value. People can only work for others if their own needs take
        less than all their time, so a fertile nature makes surplus labour possible. Marx&apos;s example is an islander
        who could feed himself on wild sago with 12 hours of work a week. But nature does not explain why, under
        capitalism, he might have to work six days to keep the product of one. That takes history, and compulsion.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        &ldquo;Productive&rdquo; is not a compliment from nature. Under capitalism, it means useful to capital. A teacher,
        a singer or a cook becomes productive in this sense the moment someone makes a profit from them.
      </p>
      <p>
        And there is nothing magic or natural about surplus. Human work has become productive enough to feed more than
        the worker, through a long history. Who gets that surplus is a social question, not a fact of nature.
      </p>
    </>
  ),

  critics: [
    {
      who: "Too narrow a test",
      point: (
        <p>
          Modern economics, and the national accounts that measure a country&apos;s output, count all paid work that
          people value, including teachers, nurses and civil servants, as adding to production. Many critics, and even
          some Marxists, find the line between productive and unproductive labour hard to draw in practice and of
          doubtful use.
        </p>
      ),
    },
    {
      who: "Choice, not force",
      point: (
        <p>
          Liberal economists argue that the islander might choose to work more hours if wage work let him buy things
          he wants, like tools, cloth or medicine. On this view extra work for an employer can be a free trade of
          leisure for goods, not something that needs compulsion to explain.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Two teachers give the same lesson. Which is “productive” in Marx's special sense?",
      options: ["The one paid by the town", "The one whose school makes a profit for its owner", "Neither, teachers make nothing"],
      answer: 1,
      why: "Under capital, productive means producing surplus-value. Marx's schoolmaster in a teaching factory is his own example.",
    },
    {
      q: "Leo now works for Mr. Moneybags, but on his old hand loom, in the old way. What is that called?",
      options: ["Formal subsumption", "Real subsumption", "A holiday"],
      answer: 0,
      why: "The boss is new but the work is the same. Real subsumption comes when capital changes the work itself.",
    },
    {
      q: "The sago islander needs just 12 hours of work a week. What does Marx say explains why, under capitalism, he might work six days?",
      options: ["Sago trees grow slowly", "History and compulsion, not nature", "The islander is lazy"],
      answer: 1,
      why: "Nature makes spare time possible. It takes history, and force, to make someone hand that time to another.",
    },
  ],

  remember: [
    "Under capitalism, productive labour means labour that makes surplus-value, not just useful labour.",
    "Formal subsumption: a new boss, the same old work. It is enough for absolute surplus-value (a longer day).",
    "Real subsumption: capital changes the work itself. It goes with relative surplus-value (a faster payback of the wage).",
    "Nature makes surplus labour possible, but history decides who takes it.",
  ],

  terms: ["productive-labour", "formal-subsumption", "real-subsumption"],

  source: (
    <p>
      Covers Volume I, Chapter 16 (&ldquo;Absolute and Relative Surplus-Value&rdquo;). Marx&apos;s own material: the
      collective labourer, the schoolmaster in a &ldquo;teaching factory&rdquo; instead of a sausage factory,
      &ldquo;not a piece of luck, but a misfortune&rdquo;, formal and real subsumption (Moore and Aveling say
      &ldquo;subjection&rdquo;; Fowkes says &ldquo;subsumption&rdquo;), and the sago-cutter of the eastern islands with
      300 lb per tree and 12 hours a week. The teachers, fees and hours in the animations are invented.
    </p>
  ),
};

export default chapter;
