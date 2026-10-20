import type { ChapterContent } from "@/components/ChapterTemplate";
import { SameCookTwoKitchens, SmithsTwoRulers, WhyTheWordStung } from "./ch04-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is a singer a worker? Is a cook? Who decides which work counts?",

  story: (
    <>
      <p>
        On a rainy afternoon Sam and Mia shelter in the Tiny Town library. On the dusty top shelf, the Old Thinkers&apos;
        Shelf, Mia finds a thick book by Adam Smith, a Scottish thinker from long ago.
      </p>
      <p>
        &ldquo;Listen to this,&rdquo; she says. &ldquo;Smith says some workers are productive and some are not. Kings,
        soldiers, lawyers, doctors, singers: all unproductive!&rdquo;
      </p>
      <p>
        Sam frowns. &ldquo;But the doctor fixed my arm. That&apos;s useful.&rdquo; Mia shrugs. &ldquo;And Rosa cooks at
        the Inn on weekdays and at Mr. Moneybags&apos; house on Sundays. Same chops. Is she productive on Monday and not on
        Sunday?&rdquo;
      </p>
      <p>That is the puzzle Marx spends a very long chapter untangling.</p>
    </>
  ),

  guess: (
    <p>
      Rosa cooks the same chops at the Inn and at Mr. Moneybags&apos; house. What could possibly make her work count
      differently in the two kitchens? Think about who pays her, and what they do with the chops.
    </p>
  ),

  struggle: [<SmithsTwoRulers key="a" />, <SameCookTwoKitchens key="b" />],
  reveal: [<WhyTheWordStung key="c" />],

  eli5: "Marx says work is productive for capital when a boss pays for it to make a profit. The same cooking can make a profit at an inn and none at home. It is not about being useful, it is about who pays and why.",

  grownUp: (
    <>
      <p>
        This is the longest chapter in the bonus volume. Marx finds that Adam Smith &ldquo;jumbled together&rdquo; two
        definitions of <strong>productive labour</strong>. The first, which Marx calls &ldquo;the correct
        definition&rdquo;, is labour exchanged against capital: wage-labour that reproduces its own wage and adds a
        surplus-value for the capitalist. The second is labour that &ldquo;fixes and realises itself&rdquo; in a lasting,
        &ldquo;vendible commodity&rdquo;, as opposed to services that vanish as they are performed.
      </p>
      <p>
        The two rulers often agree, but not always. Marx&apos;s own test cases: an actor, or even a clown, hired by an
        entrepreneur who makes a profit from him is a productive labourer; a jobbing tailor who comes to a capitalist&apos;s
        house to patch his trousers is not, because he is paid out of <strong>revenue</strong> (money spent on enjoyment),
        not out of capital. Likewise a cook in a public hotel is productive for the hotel&apos;s owner, while the same cook
        working as a servant is <strong>unproductive labour</strong>. &ldquo;The same labour can be productive&rdquo; or
        unproductive depending on whether it is bought as capital or as consumption.
      </p>
      <p>
        Marx then surveys the critics of Smith: Germain Garnier (Smith&apos;s French translator), Lauderdale, Say, Storch,
        Destutt de Tracy, Senior and others. Most argued that any useful service is productive. Marx thinks they confused
        usefulness with productivity for capital, and that their real aim was to flatter the professions. He notes that
        political economy in its early days, like the young bourgeoisie, was &ldquo;severely critical&rdquo; of the costly
        state, the army and the church, before it made its peace with them.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Whether work counts as productive is not a fact about the work itself, about sweat or about the thing produced. It
        is a fact about the social relation it happens in. Under capitalism, productive means producing surplus-value for
        capital. That is not praise, and unproductive is not an insult: Marx says elsewhere it is no piece of luck to be a
        productive worker in this sense.
      </p>
      <p>
        So a singer, a teacher or a cook can be either, depending on who pays them and why. This lets Marx keep his theory
        of where profit comes from clear, even as services spread.
      </p>
    </>
  ),

  critics: [
    {
      who: "Modern national accounts",
      point: (
        <p>
          Today&apos;s statistics follow the writers Marx criticised: any work that is paid for and produces something
          people want, from haircuts to concerts, counts as part of national output. Economists say that is simpler and
          avoids the hard job of deciding which services feed profit. Marx&apos;s defenders reply that national accounts
          answer a different question, how much is produced, not where profit comes from.
        </p>
      ),
    },
    {
      who: "Where to draw the line",
      point: (
        <p>
          Even many Marxists find the line hard to draw in practice. Is a clerk in a profitable bank productive? A nurse in
          a private hospital? Scholars have argued about this for a century, and measuring economies with Marx&apos;s
          categories gives quite different answers depending on where the line goes.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Adam Smith gave two different rules for productive labour. Which one does Marx keep?",
      options: [
        "Work that leaves behind a thing you can sell",
        "Work paid out of capital that brings back a profit",
        "Work that is useful to somebody",
      ],
      answer: 1,
      why: "Marx calls the first of Smith's rules, labour exchanged against capital to make a surplus, the correct definition.",
    },
    {
      q: "Rosa cooks chops at the Inn on Monday and at Mr. Moneybags' house on Sunday. On which day is her work productive in Marx's sense?",
      options: ["Monday at the Inn", "Sunday at the house", "Both days, because the chops are the same"],
      answer: 0,
      why: "At the Inn her wage is capital and her work makes a profit. At the house she is paid from spending money and nothing comes back.",
    },
    {
      q: "Smith called doctors and singers unproductive. What did Marx say his critics got wrong?",
      options: [
        "They thought doctors were useless",
        "They mixed up being useful with being productive for capital",
        "They forgot that singers are paid",
      ],
      answer: 1,
      why: "Nobody denied a doctor is useful. The question is only whether the work produces surplus-value for a capitalist.",
    },
  ],

  remember: [
    "Adam Smith mixed two rules for productive labour. Marx keeps one: work that makes a profit for capital.",
    "The same work can be productive or unproductive. It depends on whether it is bought with capital or with spending money.",
    "An actor in a theatre company can be productive; a tailor mending your trousers at home is not.",
    "Useful and productive are different questions. Calling work unproductive is not calling it worthless.",
  ],

  terms: ["unproductive-labour"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Chapter 4 (&ldquo;Theories of Productive and Unproductive Labour&rdquo;), in the
      Progress Publishers edition (three parts, 1963 to 1971) on marxists.org. Marx&apos;s own examples are the
      actor or clown, the jobbing tailor, the hotel cook and Senior&apos;s remark about Moses. Rosa, the Tiny Town Inn and
      the coins are this site&apos;s illustrations. Marx wrote these notebooks in 1861 to 1863; Karl Kautsky first
      published them (1905 to 1910). Vol. I, Ch. 16 on this site covers the same idea from Capital itself.
    </p>
  ),
};

export default chapter;
