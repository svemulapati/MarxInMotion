import type { ChapterContent } from "@/components/ChapterTemplate";
import { BiggerOrSmaller, SameSurplusDifferentProfit } from "./ch07-animations";

const chapter: ChapterContent = {
  bigQuestion: "If the boss runs his workshop cleverly, is his profit really his own?",

  story: (
    <>
      <p>
        A new workshop has opened across the river from Mr. Moneybags&apos; mill. It belongs to a boss called Mr. Fenn,
        and he runs it badly. He buys cotton when it is dear. His machines are old and waste half the thread.
      </p>
      <p>
        Both workshops pay their spinners the same wages. Both spinners work the same long days. At the end of the year,
        both bosses have the same pile of surplus-value. But when Bea the banker works out each boss&apos;s rate of
        profit, Mr. Moneybags comes out ahead.
      </p>
      <p>
        Mr. Moneybags puffs out his chest at the market. &ldquo;You see? My profit comes from my brains. I buy well, I
        waste nothing. It has nothing to do with Sam!&rdquo;
      </p>
      <p>Sam frowns. Is Mr. Moneybags right? Where does his profit really come from?</p>
    </>
  ),

  guess: (
    <p>
      Two workshops get exactly the same surplus out of their workers. One needs fewer coins of machines and cotton than
      the other. Which one has the higher rate of profit? Does that make the clever boss the source of the profit?
    </p>
  ),

  struggle: [<SameSurplusDifferentProfit key="a" />],
  reveal: [<BiggerOrSmaller key="b" />],

  eli5: "A clever boss who wastes nothing can make the same surplus look like a bigger profit. That makes him think his profit comes from his own brains. But the surplus itself still comes from the workers' unpaid hours.",

  grownUp: (
    <>
      <p>
        This short chapter closes Part One of Volume III with a few extra remarks. Marx assumes, as in the whole of
        Part One, that the profit of each business equals the surplus-value made in it. Even so, he says, the capitalist
        will never see his profit as unpaid labour, and he gives reasons.
      </p>
      <p>
        First, in the rush of buying and selling he forgets production: profit seems to appear when goods are sold.
        (Engels notes that Marx left a blank here, meaning to say more.) Second, the same surplus-value can show up as
        a bigger or smaller <strong>rate of profit</strong> depending on cheap materials, good machines, little waste and
        smart management. Marx&apos;s example: £1,000 of surplus-value from £1,000 of wages, with £9,000 of constant
        capital in A (10%) and £11,000 in B (8⅓%). Because his own skill really does change the rate, the capitalist
        concludes that his profit comes from his own activity. Marx calls this the root of a lasting illusion.
      </p>
      <p>
        Marx also shows that the mere size of a capital does not change its rate of profit. At 20%, capitals of 1,000,
        2,000 and 500 make 200, 400 and 100. The rate changes only if the <strong>composition of capital</strong>{" "}
        changes, the mix of constant and variable capital, or if the value of what the capital is made of rises or
        falls. A change in the value of gold changes only the money names of capital and profit, not their ratio.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Good management is real and it matters: it decides how big a slice of capital a given surplus-value looks like.
        But it cannot create the surplus. That still comes from labour that is not paid for.
      </p>
      <p>
        Because the capitalist&apos;s skill does change his rate of profit, he honestly comes to believe his profit is
        his own creation. Marx thinks this is one of the ways capitalism hides where profit comes from.
      </p>
    </>
  ),

  critics: [
    {
      who: "Entrepreneurship economists",
      point: (
        <p>
          Joseph Schumpeter (1911) and later Israel Kirzner (1973) argued that profit really is earned by the
          entrepreneur: by spotting chances others miss, organising production and introducing new methods. On this
          view Mr. Moneybags&apos; brains are not an illusion but a genuine source of profit, and a badly run firm
          rightly earns less. Marx would reply that this explains which boss gets the profit, not where the surplus
          comes from.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Workshops A and B get the same 1,000 coins of surplus-value. A needs less money for machines and cotton. Which has the higher rate of profit?",
      options: ["A, because the same surplus sits on less capital", "B, because it spends more", "They are the same"],
      answer: 0,
      why: "1,000 on 10,000 is 10%; 1,000 on 12,000 is only 8⅓%. The same surplus looks bigger next to a smaller capital.",
    },
    {
      q: "A capital of 1,000 makes 200 profit. It doubles to 2,000 with the same mix of machines and wages. What happens to the rate of profit?",
      options: ["It doubles to 40%", "It stays at 20%", "It falls to 10%"],
      answer: 1,
      why: "Profit doubles to 400 too, so the rate stays 20%. Only a change in the mix changes the rate.",
    },
    {
      q: "Why does Mr. Moneybags think his profit comes from his own cleverness?",
      options: [
        "Because his skill really does change how big his rate of profit is",
        "Because he works longer than Sam",
        "Because Bea told him so",
      ],
      answer: 0,
      why: "His skill changes the rate, so it feels like the source. Marx says the surplus itself still comes from unpaid labour.",
    },
  ],

  remember: [
    "The same surplus-value can look like a bigger or smaller rate of profit.",
    "Cheap materials, good machines and little waste raise the rate of profit.",
    "Making a capital bigger or smaller does not change its rate, unless the mix of machines and wages changes.",
    "Because his skill changes the rate, the boss believes his profit is his own creation.",
  ],

  terms: ["profit-illusion"],

  source: (
    <p>
      Covers Volume III, Chapter 7 (&ldquo;Supplementary Remarks&rdquo;), the last chapter of Part One. Volume III
      was assembled by Engels from Marx&apos;s manuscripts and published in 1894; here Engels notes a blank where Marx
      meant to say more. Text checked against the marxists.org edition (Institute of Marxism-Leninism, 1959). Marx&apos;s
      own numbers: £1,000 wages and £1,000 surplus-value with £9,000 or £11,000 of constant capital (10% and 8⅓%), and
      capitals of 1,000, 2,000 and 500 at 20%. Mr. Fenn, the badly run rival, belongs to this site.
    </p>
  ),
};

export default chapter;
