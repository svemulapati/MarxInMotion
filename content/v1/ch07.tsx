import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheBeeAndTheArchitect, TheSixHourDay, TheTrickSucceeds } from "./ch07-animations";

const chapter: ChapterContent = {
  bigQuestion: "Where does the extra money finally come from?",

  story: (
    <>
      <p>
        It is Monday morning in Mr. Moneybags&apos; new spinning workshop. He has bought everything he needs: a sack of
        cotton, a good spindle, and a day of Sam&apos;s work.
      </p>
      <p>
        Sam rolls up his sleeves and starts to spin. The fluffy cotton slowly turns into long, strong yarn. Mr. Moneybags
        rubs his hands. Tonight he will sell the yarn, and surely he will end up with more money than he started with.
      </p>
      <p>
        At lunchtime, after 6 hours, he does his sums. And he gets a nasty surprise. The yarn is worth exactly what he
        paid. Not one coin more.
      </p>
      <p>
        So is the whole plan a flop? Or has he forgotten something about what he bought when he bought Sam&apos;s day?
      </p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags paid a fair price for the cotton, the spindle and Sam&apos;s day. Nobody cheated. So how could he
      possibly end up with more value than he paid for? Look at what Sam can do in a day, and at what a day of Sam costs.
    </p>
  ),

  struggle: [<TheBeeAndTheArchitect key="a" />, <TheSixHourDay key="b" />],
  reveal: [<TheTrickSucceeds key="c" />],

  eli5: "Sam needs 3 coins a day to live, and 6 hours of work are enough to make that much. But Mr. Moneybags bought Sam's whole day, so Sam works 12 hours. The value Sam makes in the extra hours is the boss's extra money.",

  grownUp: (
    <>
      <p>
        Marx first looks at work in general, the <strong>labour process</strong>. It has three parts: purposeful
        activity (the work itself), the object of labour (the cotton), and the instruments of labour (the spindle).
        Together, the object and the instruments are the <strong>means of production</strong>. What makes human work
        special is the plan: like an architect, Sam pictures the result before he starts, which no bee can do.
      </p>
      <p>
        When the capitalist buys labour-power, the labour process gets two new features. Sam works under Mr.
        Moneybags&apos; control, and the product belongs to Mr. Moneybags, not to Sam.
      </p>
      <p>
        Then Marx looks at the same process as making value, the <strong>valorization process</strong>. In a 6-hour
        day, the yarn (15 coins) is worth exactly what was paid out: 10 coins of cotton, 2 of spindle wear and 3 for
        labour-power. No surplus. But the value of a day&apos;s labour-power (3 coins, the cost of a day&apos;s food,
        rent and clothes) is one thing, and the value that labour-power can create in a day is another. Sam works 12
        hours: 20 coins of cotton and 4 of spindle wear carry over, Sam adds 6 coins of new value, and the yarn is worth
        30. Paid out: 27. The extra 3 coins are <strong>surplus-value</strong>.
      </p>
      <p>
        Every exchange was fair. That is Marx&apos;s point: surplus-value arises in production, not by cheating in the
        market, because labour-power is the one commodity whose use creates more value than it costs.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Profit does not come from buying cheap and selling dear. It comes from the workshop. The worker is paid the full
        value of his labour-power, yet he works longer than the time needed to make that value. The difference is
        surplus-value, and it goes to the person who owns the means of production.
      </p>
      <p>
        Marx stresses that this happens with every rule of fair exchange kept. That is why he calls it a
        &ldquo;trick&rdquo;: nothing looks wrong on the surface, yet value flows one way.
      </p>
    </>
  ),

  critics: [
    {
      who: "The productivity view",
      point: (
        <p>
          Neoclassical economists, starting with John Bates Clark around 1900, argue that every input to production is
          productive: machines, materials and good management as well as labour. In a competitive market, they say, each
          is paid roughly what it adds. On this view the 3 extra coins are the return on Mr. Moneybags&apos; cotton,
          spindle and organising, not value taken from Sam.
        </p>
      ),
    },
    {
      who: "The free contract view",
      point: (
        <p>
          Philosophers such as Robert Nozick (<em>Anarchy, State, and Utopia</em>, 1974) argue that if Sam freely agrees
          to the deal and could choose otherwise, calling it exploitation is unfair. Marx&apos;s reply, coming in later
          chapters, is that a worker with nothing to sell but his labour-power is not really free to refuse.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which of these is NOT one of the three parts of every labour process?",
      options: ["The work itself", "The thing worked on, like cotton", "The price of the product"],
      answer: 2,
      why: "The three parts are the work, the object (cotton) and the tools (spindle). Price has nothing to do with it.",
    },
    {
      q: "When Sam works only 6 hours, how much surplus-value does Mr. Moneybags get?",
      options: ["None: 15 coins in, 15 coins out", "3 coins", "6 coins"],
      answer: 0,
      why: "In 6 hours Sam only adds as much new value as his wage. The yarn is worth exactly what was paid.",
    },
    {
      q: "Why does the 12-hour day give Mr. Moneybags 3 extra coins, even though nobody cheated?",
      options: [
        "He sold the yarn for more than it was worth",
        "Sam's labour-power costs 3 coins, but in 12 hours it creates 6 coins of new value",
        "The spindle made the extra value",
      ],
      answer: 1,
      why: "The gap between what labour-power costs and the value it creates is where surplus-value comes from.",
    },
  ],

  remember: [
    "Every labour process has three parts: the work, the material, and the tools.",
    "Unlike a bee, a person plans the result in their head first.",
    "Under capitalism the boss directs the work and owns the product.",
    "A day of labour-power costs 3 coins, but it can create 6 coins of new value in a 12-hour day.",
    "27 coins in, 30 coins out: the extra 3 coins are surplus-value, and every exchange was fair.",
  ],

  terms: ["labour-process", "means-of-production", "valorization"],

  source: (
    <p>
      Covers Volume I, Chapter 7 (Fowkes: &ldquo;The Labour Process and the Valorization Process&rdquo;; Moore and
      Aveling: &ldquo;The Labour-Process and the Process of Producing Surplus-Value&rdquo;), both sections. The numbers
      are Marx&apos;s own (shillings shown as coins): 10 lb of cotton for 10 shillings, 2 shillings of spindle wear, a
      3-shilling day of labour-power, the 6-hour day that yields no surplus, and the 12-hour day where 27 shillings
      become 30. The bee and the architect, the capitalist&apos;s excuses and his &ldquo;hearty laugh&rdquo;, and
      &ldquo;the trick has at last succeeded&rdquo; are also from the text.
    </p>
  ),
};

export default chapter;
