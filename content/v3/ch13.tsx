import type { ChapterContent } from "@/components/ChapterTemplate";
import { CheaperYarnMoreOfIt, SameSqueezeSmallerRate, SmallerSliceBiggerPie } from "./ch13-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does Mr. Moneybags earn less on every coin, even though his mill keeps getting bigger?",

  story: (
    <>
      <p>
        Ten years have passed in Tiny Town. Mr. Moneybags&apos; mill is enormous now. Where Sam once turned one spinning
        wheel, he watches a whole row of machines, and the yarn pours out faster than anyone can count.
      </p>
      <p>
        Every year, Mr. Moneybags sits down with Bea at the bank to do his sums. Every year his pile of profit is bigger.
        And every year Bea frowns at the same number. &ldquo;Your profit is growing,&rdquo; she says, &ldquo;but you had
        to put in so much more money to get it. On each coin you put in, you are earning less than last year.&rdquo;
      </p>
      <p>
        Mr. Moneybags is baffled. He pays Sam the same. Sam works just as hard. Nobody is slacking. So where is the
        shrinking coming from?
      </p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags squeezes his workers exactly as hard every year, but keeps buying more and more machines. If profit
      only comes from the workers&apos; unpaid hours, what happens to the profit on each coin he puts in?
    </p>
  ),

  struggle: [<SameSqueezeSmallerRate key="a" />, <SmallerSliceBiggerPie key="b" />],
  reveal: [<CheaperYarnMoreOfIt key="c" />],

  eli5: "Only the workers' extra hours make profit, but the boss keeps adding more and more machines. So the same profit gets shared over a bigger and bigger pile of money. Each coin earns a little less, even though the whole pile of profit can still grow.",

  grownUp: (
    <>
      <p>
        In Volume I, Marx showed that new value, and with it surplus-value, comes only from living labour, the{" "}
        <strong>variable capital</strong>. Machines and materials, the <strong>constant capital</strong>, only pass their
        own value on. The rate of profit, though, measures surplus-value against the whole capital advanced, c + v.
      </p>
      <p>
        Marx starts with a table. Keep wages at 100 and surplus-value at 100, a rate of surplus-value of 100%. Let constant
        capital grow from 50 to 100, 200, 300 and 400, and the rate of profit falls from 66⅔% to 50%, 33⅓%, 25% and 20%.
        Exploitation has not eased at all. The surplus is simply measured against more and more capital.
      </p>
      <p>
        Capitalism, Marx argues, pushes in exactly this direction. Competition makes every boss raise productivity, which
        means more machines and materials per worker: a rising <strong>composition of capital</strong>. Across the
        whole economy the result is a <strong>falling rate of profit</strong>. Marx calls this the expression, peculiar to
        capitalism, of rising productivity.
      </p>
      <p>
        It is a &ldquo;double-edged law&rdquo;. In his second example, workers grow from 2 million to 3 million and the
        mass of surplus-value from 2 to 3 million, while constant capital jumps from 4 to 15 million. The rate of profit
        halves, from 33⅓% to 16⅔%, but the total profit grows by half. Each single commodity holds less labour and gets
        cheaper, so the profit per piece shrinks while the number of pieces soars.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capitalism gets richer and more productive by replacing workers with machines. But profit comes only from the
        workers. So the very success of the system squeezes the return on each coin invested. Marx says the law is &ldquo;of
        great importance to capitalist production&rdquo;, a mystery that economists since Adam Smith had tried and failed
        to solve.
      </p>
      <p>
        He called it a <em>tendency</em>, not a fixed rule. The next chapter is about everything that slows the fall
        down, and Chapter 15 about what happens when the pressure builds.
      </p>
    </>
  ),

  critics: [
    {
      who: "Okishio's theorem",
      point: (
        <p>
          In 1961 the Japanese economist Nobuo Okishio showed mathematically that a boss will only adopt a new machine if it
          cuts his costs at current prices, and that if real wages stay the same, such a change can never lower the general
          rate of profit; it raises it. Many economists take this as a refutation of Marx&apos;s law. Some Marxist
          economists reply that Okishio&apos;s model is static, while real capitalism moves through time with fixed capital
          locked in, so the theorem does not settle the matter.
        </p>
      ),
    },
    {
      who: "The evidence",
      point: (
        <p>
          Economists still argue about whether profit rates have really fallen over the long run. Some studies of the
          United States and Britain find a long decline since the 1950s or 1960s, others find recoveries that undercut the
          idea of a steady fall, and the answer changes with how profit and capital are measured. Critics also note that
          a cheaper machine can raise output without raising the value of capital per worker much at all.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Wages 100, surplus-value 100. Machines and materials grow from 100 to 300. What happens to the rate of profit?",
      options: ["It stays at 50%", "It falls from 50% to 25%", "It rises, because there are more machines"],
      answer: 1,
      why: "100 ÷ (100 + 100) is 50%. 100 ÷ (300 + 100) is 25%. The same surplus is measured against a bigger capital.",
    },
    {
      q: "In Marx's example the rate of profit halves. What happens to the total amount of profit?",
      options: ["It halves too", "It grows by half, from 2 to 3 million", "It disappears"],
      answer: 1,
      why: "More workers are employed, so more surplus-value is made in total, even though each coin of capital earns less.",
    },
    {
      q: "Why does Marx call this a tendency rather than a fixed law?",
      options: [
        "Because other forces work against it and slow it down",
        "Because it only happens on Tuesdays",
        "Because profit never really falls",
      ],
      answer: 0,
      why: "Marx says counteracting influences push the other way, so the fall shows itself only as a tendency. That is the next chapter.",
    },
  ],

  remember: [
    "Profit is measured against everything the boss puts in: machines, materials and wages.",
    "Only living labour makes new value, but capitalism keeps adding more machines per worker.",
    "So the same rate of exploitation shows up as a falling rate of profit.",
    "The rate can fall while the total mass of profit still grows: a double-edged law.",
    "Marx calls it a tendency, because other forces push against it.",
  ],

  terms: ["falling-rate-of-profit"],

  source: (
    <p>
      Covers Volume III, Chapter 13 (&ldquo;The Law as Such&rdquo;), the first chapter of Part III, &ldquo;The Law of the
      Tendency of the Rate of Profit to Fall&rdquo;. Volume III was assembled by Friedrich Engels from Marx&apos;s
      manuscripts and published in 1894. The table of falling rates (66⅔% down to 20%) and the 2 to 3 million worker
      example are Marx&apos;s own; the skein counts in animation 13.3 are invented. Quotations follow the International
      Publishers / Progress edition on marxists.org.
    </p>
  ),
};

export default chapter;
