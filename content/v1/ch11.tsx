import type { ChapterContent } from "@/components/ChapterTemplate";
import { FewerWorkersLongerDays, HowBigMustABossBe, OneWorkerOrAHundred } from "./ch11-animations";

const chapter: ChapterContent = {
  bigQuestion: "Does a boss get richer by working people longer, or by hiring more of them?",

  story: (
    <>
      <p>
        Mr. Moneybags&apos; spinning workshop is doing well, and now he wants it to do better. He sits down with a pencil
        and two ideas.
      </p>
      <p>
        Idea one: keep his few spinners and make every day longer. Idea two: hire many more spinners like Sam. Which
        one brings in more surplus-value?
      </p>
      <p>
        Across town, Leo is weaving alone, as always. Tom asks him, &ldquo;Why don&apos;t you hire some helpers and become
        a boss too?&rdquo; Leo laughs. &ldquo;With two helpers I&apos;d still be stuck at the loom. You need a lot more
        than that before you stop working yourself.&rdquo;
      </p>
      <p>How many people does it take to turn a worker into a capitalist? Let&apos;s count.</p>
    </>
  ),

  guess: (
    <p>
      If Mr. Moneybags had only 100 spinners, could he make as much surplus-value as a rival with 500, just by making
      his 100 work much longer days? Make a guess, then press play.
    </p>
  ),

  struggle: [<OneWorkerOrAHundred key="a" />, <FewerWorkersLongerDays key="b" />],
  reveal: [<HowBigMustABossBe key="c" />],

  eli5: "Each worker makes a little surplus-value, so more workers make more. Making a few people work longer only goes so far, because a day has only 24 hours. And you need quite a lot of workers before the boss can stop working himself.",

  grownUp: (
    <>
      <p>
        Marx sets out three laws. First, the <strong>mass of surplus-value</strong> equals the variable capital advanced
        (the wages) multiplied by the rate of surplus-value. With Sam&apos;s numbers, 100 workers cost 300 coins and,
        at 100%, bring in 300 coins of surplus-value.
      </p>
      <p>
        Second, a boss with fewer workers can make up for it by raising the rate, for example with longer days, but only
        up to a hard ceiling: no worker can produce more than a full 24 hours of value. Marx&apos;s own example: 500
        workers on a 12-hour day make 1,500 shillings of surplus-value, while 100 workers on an 18-hour day make only 600,
        and could never reach even 1,200.
      </p>
      <p>
        Third, with the rate and the value of labour-power fixed, the mass of surplus-value rises and falls with the
        variable capital alone, however much is spent on machines and materials. Marx admits this law &ldquo;clearly
        contradicts all experience based on appearance&rdquo;: a cotton spinner with many machines and few workers does
        not pocket less profit than a baker with many workers. He promises to solve that puzzle later, and does so in
        Volume III.
      </p>
      <p>
        Finally, not every sum of money can become capital. There is a minimum. A master with only a couple of helpers
        must still work beside them: Marx calls him a <strong>small master</strong>. Medieval guilds tried to keep
        masters small by capping how many workers each could employ. Past a certain size, a change in amount becomes a
        change in kind, an idea Marx takes from Hegel. Inside the workshop, capital becomes command over labour, and
        &ldquo;the means of production&rdquo; start to &ldquo;employ the labourer&rdquo; instead of the other way round.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The surplus-value a capitalist gets depends on how many workers he sets to work and how hard he exploits each of
        them. Since the day has a natural ceiling, the surest road to more is more workers, which takes more capital.
      </p>
      <p>
        That is why being a capitalist is not just having some money. It means having enough to command other
        people&apos;s labour on a large scale, so that the owner&apos;s job becomes directing and supervising rather than
        working.
      </p>
    </>
  ),

  critics: [
    {
      who: "Profit without many workers",
      point: (
        <p>
          Critics point to businesses that make huge profits with very few workers, from power stations to software
          companies. If surplus-value comes only from wage labour, this looks hard to explain. Marx saw the problem
          himself (the spinner and the baker) and answered it in Volume III with an average rate of profit shared out
          across industries. Critics such as Böhm-Bawerk argued that this answer contradicts the labour theory of value
          it was meant to rescue.
        </p>
      ),
    },
    {
      who: "Small masters are here to stay",
      point: (
        <p>
          Marx treats the small master as a halfway stage on the road to big capital. Critics note that small businesses,
          where owners work alongside a few employees, are still a large part of every modern economy, more than 150 years
          later.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Each of Mr. Moneybags' spinners is paid 3 coins and makes 3 coins of surplus-value. How much surplus-value do 50 spinners make?",
      options: ["3 coins", "50 coins", "150 coins"],
      answer: 2,
      why: "50 workers × 3 coins each = 150 coins. Mass of surplus-value = wages (150 coins) × rate (100%).",
    },
    {
      q: "Why can't 100 workers on very long days match 500 workers on 12-hour days?",
      options: [
        "Because 100 workers are lazier",
        "Because a day has only 24 hours, so each worker can only make so much",
        "Because the law forbids it",
      ],
      answer: 1,
      why: "Even working all 24 hours for no wage, 100 people make at most 1,200 coins of value, less than the 1,500 coins of surplus from 500 workers.",
    },
    {
      q: "What does Marx call an owner who has too few workers to stop working himself?",
      options: ["A small master", "A miser", "A banker"],
      answer: 0,
      why: "He is a hybrid between capitalist and worker. Only past a minimum size can the owner live off surplus-value and still grow.",
    },
  ],

  remember: [
    "Mass of surplus-value = money spent on wages × rate of surplus-value.",
    "Fewer workers can be made up for by longer days, but only up to the 24-hour ceiling.",
    "So more surplus-value mostly needs more workers, and that needs more capital.",
    "A small master still works himself. A capitalist only directs others.",
    "Past a certain size, more money becomes something different in kind: capital.",
  ],

  terms: ["mass-of-surplus-value", "small-master"],

  source: (
    <p>
      Covers Volume I, Chapter 11 (Fowkes: &ldquo;The Rate and Mass of Surplus-Value&rdquo;; Moore and Aveling:
      &ldquo;Rate and Mass of Surplus-Value&rdquo;). Marx&apos;s own examples: 1,500 shillings from 500 workers against
      600 from 100 workers on an 18-hour day; the worker who needs 8 hours for himself, the master who needs 2 helpers to
      live like a worker and 8 times the minimum capital to live twice as well and accumulate half; the spinner and the
      baker. The workshop numbers (3 coins of wage and of surplus per worker) are this site&apos;s, following Marx&apos;s
      Chapters 7 to 9.
    </p>
  ),
};

export default chapter;
