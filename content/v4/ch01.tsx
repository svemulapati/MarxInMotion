import type { ChapterContent } from "@/components/ChapterTemplate";
import { ProfitFromHandingItOver, WhereSteuartStopped } from "./ch01-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can a boss get rich just by selling things for more than they are worth?",

  story: (
    <>
      <p>
        Tiny Town has a small library, and on its top shelf sit the old thinkers: the people who tried to explain money
        and work before Marx. In this bonus volume, one of them climbs down off the shelf in every chapter and explains
        their idea to the town. Then we hear what Marx thought of it.
      </p>
      <p>
        The first visitor is Sir James Steuart, a Scottish gentleman in a long coat. Mr. Moneybags likes him at once.
        &ldquo;At last,&rdquo; says Moneybags, &ldquo;someone who understands business. Profit is simple. You buy at one
        price and sell at a higher one.&rdquo;
      </p>
      <p>
        Steuart nods. Then he says something odd. &ldquo;Yes. But when you sell high to Tom, Tom is poorer by exactly
        what you gained. The town as a whole is no richer.&rdquo;
      </p>
      <p>Moneybags frowns. If the town is no richer, where does all the extra in the town come from?</p>
    </>
  ),

  guess: (
    <p>
      If every seller in Tiny Town sold everything a little above its real value, would the town as a whole end up
      richer? And if every seller sold at exactly the real value, would any boss make a profit at all?
    </p>
  ),

  struggle: [<ProfitFromHandingItOver key="a" />],
  reveal: [<WhereSteuartStopped key="b" />],

  eli5: "Steuart thought a boss's profit comes from selling things for more than they are worth. He saw that this only moves money from the buyer to the seller. Marx said the real extra must be made somewhere else.",

  grownUp: (
    <>
      <p>
        Marx opens <em>Theories of Surplus-Value</em> with a general observation: all economists before him made the same
        error of studying surplus-value not in its pure form but only in its particular forms,{" "}
        <strong>profit</strong> and <strong>rent</strong>. The rest of the book follows each thinker to see how close
        they came.
      </p>
      <p>
        Sir James Steuart, whose <em>Principles of Political Economy</em> appeared in 1767, splits a price into two parts:
        the &ldquo;real value&rdquo; of the thing and the <strong>profit upon alienation</strong>, the gain from selling it.
        He also separates <strong>positive profit</strong>, which &ldquo;implies no loss to any body&rdquo; and comes
        from more labour, industry or ingenuity, from <strong>relative profit</strong>, which is just &ldquo;a vibration
        of the balance of wealth between parties&rdquo;.
      </p>
      <p>
        Marx gives Steuart credit for refusing the old illusion of the <strong>mercantile system</strong> that selling
        above value creates new wealth. But Steuart still explains each capitalist&apos;s profit as profit upon
        alienation. On that view, Marx points out, if all commodities were sold at their value, no profit would exist.
        Steuart&apos;s positive profit is really just a larger mass of useful things, not capitalists&apos; profit.
      </p>
      <p>
        Steuart&apos;s lasting service, in Marx&apos;s eyes, lies elsewhere: he studied how the conditions of production
        were separated from the labourers, especially in agriculture, so that labour-power could face capital on the
        market. That is the history Volume I told in Part 8.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        You cannot explain where the extra in a whole society comes from by pointing at buying and selling. When one
        person sells above value, another buys above value, and the gains cancel out. Steuart understood that, which
        made him the clearest of the old merchant-minded writers. But he did not take the next step and look for the
        extra in production itself.
      </p>
      <p>
        His idea of profit as &ldquo;a vibration of the balance of wealth&rdquo; is still useful, Marx says, for
        understanding how surplus-value, once made, gets shared out as profit, interest and rent. That is Volume
        III&apos;s story.
      </p>
    </>
  ),

  critics: [
    {
      who: "Historians of economic thought",
      point: (
        <p>
          Many historians, such as Joseph Schumpeter in his <em>History of Economic Analysis</em> (1954), read Steuart
          less as a voice of the old merchant errors and more as an early thinker about demand, employment and what
          governments can do in an economy. On that reading, profit upon alienation is a small part of a much larger and
          more modern book than Marx&apos;s summary suggests.
        </p>
      ),
    },
    {
      who: "Gains from trade",
      point: (
        <p>
          Most economists stress that a fair swap can leave both sides better off, because each gets something they
          value more than what they gave. Trade, they say, moves goods to where they are most wanted, which is a real
          gain even when no extra value is &ldquo;made&rdquo;. Marx&apos;s defenders reply that this is about usefulness,
          not value, and that his point concerns where the extra value comes from.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Mr. Moneybags sells yarn worth 30 coins to Tom for 33. What happens to Tiny Town's total wealth?",
      options: ["It grows by 3", "It stays the same: Moneybags gains 3, Tom loses 3", "It shrinks by 3"],
      answer: 1,
      why: "Steuart saw this himself. Selling above value only moves wealth from one person to another, a vibration of the balance.",
    },
    {
      q: "According to Marx, what mistake did every economist before him share?",
      options: [
        "They ignored money",
        "They only studied surplus-value in its costumes, as profit or rent",
        "They thought workers were paid too much",
      ],
      answer: 1,
      why: "Marx's general observation: they never examined surplus-value on its own, only in the forms of profit and rent.",
    },
    {
      q: "What does Marx praise Steuart for?",
      options: [
        "Proving that selling high creates wealth",
        "Studying how country people were separated from the land, the birth of capital",
        "Inventing the Tableau Économique",
      ],
      answer: 1,
      why: "Marx credits Steuart for showing how the conditions of production were separated from the labourers, above all in agriculture.",
    },
  ],

  remember: [
    "Bonus Volume IV is Marx's history of the thinkers before him, read off the Old Thinkers' Shelf.",
    "Steuart split a price into real value plus profit upon alienation, the gain from selling.",
    "Selling above value only moves wealth around. The town as a whole is no richer.",
    "So if everything sold at its value, Steuart's theory leaves no profit at all. The extra must be made in production.",
  ],

  terms: ["profit-upon-alienation", "positive-profit", "mercantile-system"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part I, Chapter 1 (&ldquo;Sir James Steuart&rdquo;), with Marx&apos;s opening
      &ldquo;General Observation&rdquo;, checked against the Progress Publishers edition on marxists.org. Marx wrote these
      notebooks in 1861 to 1863; Karl Kautsky first edited them (1905 to 1910). Marx&apos;s own points: the general
      observation; real value plus profit upon alienation; positive and relative profit and &ldquo;a vibration of the
      balance of wealth between parties&rdquo;; that if all commodities sold at their value no profit would exist; Steuart
      as the rational expression of the monetary and mercantile systems; his study of the separation of labourers from
      the conditions of production. The 30 and 33 coin figures and the library framing are this site&apos;s own.
    </p>
  ),
};

export default chapter;
