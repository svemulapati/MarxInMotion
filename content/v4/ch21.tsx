import type { ChapterContent } from "@/components/ChapterTemplate";
import { DoesTheSpindleWork, KeepTheLoom, SixHoursNotTwelve } from "./ch21-animations";

const chapter: ChapterContent = {
  bigQuestion: "If work makes all the value, why don't workers keep it all?",

  story: (
    <>
      <p>
        A new row of thin, worn books has appeared on the Old Thinkers&apos; Shelf. They were written in the 1820s, not by
        professors, but by people angry about how workers lived. One has no author&apos;s name on it at all.
      </p>
      <p>
        Sam reads them on his day off and grows more and more excited. &ldquo;They use Ricardo&apos;s own rule!&rdquo; he tells
        Mia. &ldquo;If labour makes the value, then the profit, the rent and the interest are all made by us.&rdquo;
      </p>
      <p>
        Mia frowns. &ldquo;So what do they want? To get rid of Mr. Moneybags? Or to get rid of his machines too?&rdquo;
      </p>
      <p>The writers didn&apos;t all agree. Neither did Marx, entirely, with any of them.</p>
    </>
  ),

  guess: (
    <p>
      If a spindle was made by someone&apos;s past work, does the spindle help make the yarn, or only the person spinning it?
      Hold your answer while you watch.
    </p>
  ),

  struggle: [<SixHoursNotTwelve key="a" />, <DoesTheSpindleWork key="b" />],
  reveal: [<KeepTheLoom key="c" />],

  eli5: "Some writers used Ricardo's rule to say workers make all the value, so profit is their unpaid work. One said a country is rich when people only need to work six hours, not twelve. Marx liked their boldness but thought they got some things wrong.",

  grownUp: (
    <>
      <p>
        Marx calls this group the <strong>opposition to the economists</strong>, built on Ricardo&apos;s theory. Later
        historians call them the <strong>Ricardian socialists</strong>. They took the labour theory of value and drew a
        conclusion Ricardo never drew: if labour creates value, then profit, rent and interest are all the surplus labour of the
        workers.
      </p>
      <p>
        The anonymous pamphlet of 1821, <em>The Source and Remedy of the National Difficulties</em>, says this bluntly. It
        adds that a nation is really rich when only six hours instead of twelve are worked: &ldquo;wealth is disposable time,
        and nothing more&rdquo;. Marx calls it an important advance on Ricardo. Thomas Hodgskin&apos;s <em>Labour Defended
        against the Claims of Capital</em> (1825) argued that capital is unproductive: what produces is living labour, the
        &ldquo;coexisting&rdquo; work of many people together, so <strong>labour&apos;s whole product</strong> belongs to
        the workers. Piercy Ravenstone saw capital as the surplus product taken from workers.
      </p>
      <p>
        Marx praises them for seeing <strong>surplus labour</strong> behind every form of income. His criticism is that they
        confuse the contradictory <em>form</em> in which modern industry grew with its <em>content</em>. Hodgskin underrates
        the importance of past labour stored in machines. Ravenstone was ready to sacrifice machines, science and luxury to be
        rid of capital. Marx wanted to keep those fruits and change the social form.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      These early socialist writers were right that profit, rent and interest come from workers&apos; surplus labour, and the
      pamphlet&apos;s idea of wealth as free time is one Marx admired. But the machines, science and skill that grew under
      capitalism are real gains. The task, as Marx saw it, is not to throw them away but to change who owns and directs them.
    </p>
  ),

  critics: [
    {
      who: "Mainstream economists",
      point: (
        <p>
          Most economists reject the starting point: they see capital as genuinely productive, since machines let the same
          workers make far more, and they treat profit and interest as payment for supplying capital and bearing risk. On that
          view &ldquo;labour&apos;s whole product&rdquo; is not a meaningful claim.
        </p>
      ),
    },
    {
      who: "Historians of socialism",
      point: (
        <p>
          Historians such as Noel Thompson have questioned the label &ldquo;Ricardian socialists&rdquo;, since Hodgskin and
          others drew as much on older ideas of natural rights as on Ricardo. Hodgskin himself was closer to a free-market
          radical than to later socialists. Marx&apos;s reading picks out what led towards his own theory.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What did the 1821 pamphlet say real wealth is?",
      options: ["Gold in the bank", "Disposable time: free time for living", "Big factories"],
      answer: 1,
      why: "“Wealth is disposable time, and nothing more”: a nation is rich when six hours, not twelve, need to be worked.",
    },
    {
      q: "What did Hodgskin argue about capital?",
      options: ["It is the only thing that produces", "It is unproductive; living labour makes things", "It should be doubled"],
      answer: 1,
      why: "His 1825 book was called Labour Defended against the Claims of Capital.",
    },
    {
      q: "What was Marx's main criticism of Ravenstone?",
      options: [
        "He was too fond of bankers",
        "He would give up machines and science to get rid of capital",
        "He wrote too much about rent",
      ],
      answer: 1,
      why: "Marx says he confused the form in which industry grew with its content, and would sacrifice its fruits.",
    },
  ],

  remember: [
    "Some writers of the 1820s used Ricardo's labour theory against capital.",
    "They said profit, rent and interest are all workers' surplus labour.",
    "The 1821 pamphlet: a nation is rich when six hours, not twelve, are worked. Wealth is free time.",
    "Marx praised them, but said tools are stored-up work, and modern industry's fruits are worth keeping.",
  ],

  terms: ["ricardian-socialists", "labours-whole-product", "disposable-time"],

  source: (
    <p>
      Covers Volume IV (Theories of Surplus-Value, Part III), Chapter 21 (&ldquo;Opposition to the Economists, Based on the
      Ricardian Theory&rdquo;), Progress Publishers edition as hosted on marxists.org. Marx&apos;s sources used: the
      anonymous pamphlet <em>The Source and Remedy of the National Difficulties</em> (London, 1821); Piercy Ravenstone; Thomas
      Hodgskin, <em>Labour Defended against the Claims of Capital</em> (1825). The chapter also covers Bray (1839), not
      animated here. &ldquo;Ricardian socialists&rdquo; is a later historians&apos; label, not Marx&apos;s. Sam&apos;s day,
      the spindle and Mia are this site&apos;s. Theories of Surplus-Value is not part of Capital proper; Karl Kautsky first
      edited it (1905 to 1910).
    </p>
  ),
};

export default chapter;
