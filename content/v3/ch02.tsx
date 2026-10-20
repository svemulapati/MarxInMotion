import type { ChapterContent } from "@/components/ChapterTemplate";
import { EveryCoinSeemsToSprout, TwoRulers } from "./ch02-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is the boss's extra big or small? It depends on what you compare it with.",

  story: (
    <>
      <p>
        On Monday morning Sam and Mr. Moneybags argue at the workshop door. Sam has done his sums. &ldquo;For every coin
        you pay me, I make you another coin for free. That is a hundred per cent!&rdquo;
      </p>
      <p>
        Mr. Moneybags is outraged. &ldquo;A hundred per cent? Rubbish. I spent 27 coins this week and made 3. That is
        barely eleven per cent. I am hardly getting rich.&rdquo;
      </p>
      <p>
        Mia, passing with a tray of bread, stops to listen. Both of them counted the same 3 coins. Both of them did the
        arithmetic right. So how can one say 100 and the other say 11?
      </p>
    </>
  ),

  guess: (
    <p>
      Sam divides the 3 coins by his wage. Mr. Moneybags divides them by everything he spent. Which number do you think
      the boss cares about when he decides where to put his money? And which one tells you how hard Sam is squeezed?
    </p>
  ),

  struggle: [<TwoRulers key="a" />],
  reveal: [<EveryCoinSeemsToSprout key="b" />],

  eli5: "The same 3 coins look big next to Sam's wage and small next to all the boss spent. The boss only looks at the small number. That number hides how much of Sam's day is unpaid.",

  grownUp: (
    <>
      <p>
        The general formula of capital is M&ndash;C&ndash;M&prime;: value thrown into circulation to bring back more.
        What interests the capitalist is the size of that extra compared with the whole capital he advanced. Marx defines
        the <strong>rate of profit</strong> as p&prime; = s/C = s/(c + v), as distinct from the rate of surplus-value s/v.
        They are, in his words, two different measurements of the same entity.
      </p>
      <p>
        In our workshop, s = 3, v = 3 and C = 27. The rate of surplus-value is 100%; the rate of profit is about 11%.
        Because C is always larger than v, the rate of profit is always smaller than the rate of surplus-value.
      </p>
      <p>
        The rate of profit is natural for the capitalist: it measures how far his whole capital has grown. But by
        relating the surplus to all parts of the capital equally, it makes them all look like sources of the extra. Marx
        calls profit a converted form of surplus-value, one in which its origin and secret are &ldquo;obscured and
        extinguished&rdquo;. The relation of capital to labour turns into a relation of capital to itself.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The rate of profit is real, and it is what moves capitalists: where to invest, which branch to leave. But it
        measures the right thing in a misleading way. It treats the cotton, the machines and the wages as equal partners
        in making the extra, when only the purchase of labour-power adds new value.
      </p>
      <p>
        Marx warns that the further we follow capital, the more mysterious its relations become. Profit is only the first
        disguise. Interest and rent are still to come.
      </p>
    </>
  ),

  critics: [
    {
      who: "The rate of profit is the true measure",
      point: (
        <p>
          Mainstream economists treat the return on total capital as the meaningful number, because capital in every form
          could have been used elsewhere. On this view s/v measures nothing real, since a firm cannot make yarn with
          wages alone. Marx&apos;s defenders reply that he never denied the rate of profit guides investment; he only
          claimed it hides where the surplus comes from.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "The workshop makes 3 coins of surplus-value. Wages are 3 coins and total spending is 27. What is the rate of profit?",
      options: ["100%", "About 11%", "27%"],
      answer: 1,
      why: "Rate of profit = surplus-value ÷ total capital = 3 ÷ 27, about 11%.",
    },
    {
      q: "Why is the rate of profit always smaller than the rate of surplus-value?",
      options: [
        "Because bosses hide some profit",
        "Because the total capital is always bigger than the wages alone",
        "Because surplus-value shrinks when it becomes profit",
      ],
      answer: 1,
      why: "The same surplus is divided by a bigger number: c + v instead of v.",
    },
    {
      q: "In the boss's eyes, which of his costs helped make the extra?",
      options: ["Only the wages", "Every coin he spent", "Only the cotton"],
      answer: 1,
      why: "The rate of profit relates the extra to all his capital, so every part seems to have earned its share.",
    },
  ],

  remember: [
    "Rate of surplus-value = s ÷ v. It shows how much of the worker's day is unpaid.",
    "Rate of profit = s ÷ (c + v). It shows how much the whole capital grew.",
    "They measure the same surplus with two different rulers.",
    "The rate of profit is always the smaller of the two.",
    "Profit makes every part of capital look like a source of the extra.",
  ],

  terms: ["rate-of-profit"],

  source: (
    <p>
      Covers Volume III, Chapter 2 (&ldquo;The Rate of Profit&rdquo;), from the Institute of Marxism-Leninism edition
      (International Publishers) on marxists.org. Volume III was assembled and edited by Friedrich Engels from
      Marx&apos;s manuscripts and published in 1894; Engels says this chapter comes from the main manuscript. The formula
      s/C = s/(c + v) and the quoted phrase are Marx&apos;s. The workshop figures (s 3, v 3, C 27) are this site&apos;s,
      following Volume I.
    </p>
  ),
};

export default chapter;
