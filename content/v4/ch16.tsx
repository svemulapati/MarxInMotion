import type { ChapterContent } from "@/components/ChapterTemplate";
import { BiggerMachines, PoorerFields } from "./ch16-animations";

const chapter: ChapterContent = {
  bigQuestion: "If a country gets richer, why do bosses earn a smaller and smaller share on every coin they put in?",

  story: (
    <>
      <p>
        One rainy afternoon Grandpa Ned takes Sam to the town library. On the top shelf sits a row of dusty books by old
        thinkers, people who tried to understand money and work long before Marx. Ned calls it the Old Thinkers&apos; Shelf.
      </p>
      <p>
        Today a tall, careful-looking book falls open by itself: <em>David Ricardo</em>. Ricardo was a rich London
        stockbroker who became one of the cleverest economists of his time. &ldquo;I noticed something,&rdquo; he says.
        &ldquo;As a country grows, its bosses earn less and less on every pound they invest. I think I know why.&rdquo;
      </p>
      <p>
        Mr. Moneybags, who happens to be borrowing a book, stops to listen. He has noticed the same thing. But is
        Ricardo&apos;s reason the right one?
      </p>
    </>
  ),

  guess: (
    <p>
      Ricardo blames the fields: the more mouths there are, the poorer the land we must farm. Can you think of anything
      happening inside Mr. Moneybags&apos; workshop that could also make his profit rate fall?
    </p>
  ),

  struggle: [<PoorerFields key="a" />],
  reveal: [<BiggerMachines key="b" />],

  eli5: "Ricardo thought profits shrink because poor fields make bread dear, so bosses must pay more in wages. Marx said the real reason is that bosses buy more and more machines. Sam is squeezed just as hard, but the extra is spread over a much bigger pile.",

  grownUp: (
    <>
      <p>
        This chapter belongs to the <strong>bonus volume</strong>, Marx&apos;s notebooks on earlier economists. Here he
        reads David Ricardo&apos;s <em>Principles of Political Economy</em> (1817) on profit.
      </p>
      <p>
        Ricardo&apos;s argument goes like this. As population grows, worse land must be cultivated, so it takes more labour
        to grow each quarter of corn. Food gets dearer, money wages must rise to keep workers alive, and since prices of
        manufactured goods do not rise with them, profit is squeezed. At the same time the owners of better land collect
        more <strong>differential rent</strong>. Ricardo&apos;s own example: goods worth £720, wages rising from £240 to
        £274 5s., profit falling from £480 to £445 15s. Marx notes that in such passages Ricardo actually separates the
        amount of profit from the rate of profit, which his theory elsewhere runs together.
      </p>
      <p>
        Marx agrees that the rate of profit tends to fall (the law he sets out in Volume III). But he rejects the cause. In
        his view, as productivity rises, capitalists spend ever more on machinery and materials (constant capital) relative
        to wages (variable capital). Even if the rate of surplus-value stays the same or rises, the rate of profit, which
        is measured against the whole capital, falls. It falls, he writes, &ldquo;not because labour becomes less
        productive, but because it becomes more productive.&rdquo;
      </p>
      <p>
        He sums up Ricardo&apos;s two &ldquo;false presuppositions&rdquo;: that rent exists and grows because agriculture
        becomes less productive, and that the rate of profit equals the rate of surplus-value, so it can only move when
        wages move.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Ricardo spotted a real tendency but blamed nature for it. Marx moves the cause inside capitalism itself: the race
        to mechanise, which makes each worker more productive, also makes the capital that must earn a profit swell faster
        than the surplus it can squeeze out.
      </p>
      <p>
        For Marx this matters because it turns the falling rate of profit from a fact about soil into a contradiction of the
        system: the very success of capitalism in raising productivity creates pressure on its own profitability.
      </p>
    </>
  ),

  critics: [
    {
      who: "Ricardo's defenders",
      point: (
        <p>
          Many economists think Ricardo&apos;s mechanism was real in his own time: Britain&apos;s Corn Laws kept grain
          dear, and rising food costs did press on wages and profits. Repealing those laws in 1846 was partly argued on
          Ricardian grounds. Later, imports of cheap grain and better farming showed that the &ldquo;stingy soil&rdquo;
          could be escaped, which weakens his theory but also shows it was about a real pressure.
        </p>
      ),
    },
    {
      who: "Critics of both",
      point: (
        <p>
          Economists such as Nobuo Okishio (1961) argued that a capitalist will only adopt a new machine if it lowers
          costs at current prices, and that this cannot by itself lower the general rate of profit. If that is right,
          neither Ricardo&apos;s soil nor Marx&apos;s machines guarantee a falling rate. Marx&apos;s defenders reply that
          competition forces firms into choices that hurt profits overall, and they still debate the long-run data.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "According to Ricardo, why do profit rates fall as a country grows?",
      options: ["Bosses get lazy", "Poorer land makes food dear, so wages rise and eat into profit", "Machines wear out faster"],
      answer: 1,
      why: "Ricardo blamed diminishing returns on the land: dearer food means higher money wages and more rent.",
    },
    {
      q: "In Marx's version, how hard is Sam squeezed when the machines grow?",
      options: ["Just as hard as before, or harder", "Much less than before", "Not at all"],
      answer: 0,
      why: "Marx says the rate of profit can fall even while the rate of surplus-value stays the same or rises.",
    },
    {
      q: "What, for Marx, finally makes the profit rate fall?",
      options: ["Labour becoming less productive", "Labour becoming more productive, with far more machines per worker", "Rising rent alone"],
      answer: 1,
      why: "“Not because labour becomes less productive, but because it becomes more productive.”",
    },
  ],

  remember: [
    "Ricardo saw profit rates fall and blamed poorer land, dearer food and rising rent.",
    "Ricardo's own example: goods worth £720, wages up from £240 to £274 5s., profit down from £480 to £445 15s.",
    "Marx agreed the rate falls, but said the cause is more machines per worker, not stingy soil.",
    "Marx's two charges: Ricardo explained rent wrongly, and mixed up the rate of profit with the rate of surplus-value.",
  ],

  terms: ["diminishing-returns"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter 16 (&ldquo;Ricardo&apos;s Theory of Profit&rdquo;), in the
      Progress Publishers translation (three parts) hosted on marxists.org. These are Marx&apos;s 1861 to 1863
      notebooks, first edited by Karl Kautsky. Ricardo&apos;s £720, £240 to £274 5s. and £480 to £445 15s. figures are
      quoted by Marx from the <em>Principles</em>; the quoted phrases about labour becoming &ldquo;more productive&rdquo;
      and the &ldquo;two false presuppositions&rdquo; are Marx&apos;s. The doubling of machines in animation 16.2 is made up.
    </p>
  ),
};

export default chapter;
