import type { ChapterContent } from "@/components/ChapterTemplate";
import { WagesDown, WagesUp } from "./ch11-animations";

const chapter: ChapterContent = {
  bigQuestion: "If workers win a pay rise, does everything just get dearer?",

  story: (
    <>
      <p>
        After a long strike, the workers of Tiny Town win a pay rise: a quarter more, in every workshop. Sam can hardly
        believe it.
      </p>
      <p>
        Mr. Moneybags is furious. &ldquo;Fine,&rdquo; he snaps, &ldquo;then I&apos;ll just put up my prices, and so
        will everyone else. Your pay rise will vanish in the shops.&rdquo;
      </p>
      <p>
        But a month later something odd has happened. Coats from the tailoring workshop have indeed got dearer. Yet
        yarn from Mr. Moneybags&apos; own mill has got cheaper, and bread is the same price as before.
      </p>
      <p>How can one pay rise push some prices up, some down, and leave others alone?</p>
    </>
  ),

  guess: (
    <p>
      Three workshops all sell at 120. One spends half its money on wages, one spends very little, one is average. If
      every wage rises by a quarter, which workshop&apos;s price do you think goes up, which goes down, and which stays
      put?
    </p>
  ),

  struggle: [<WagesUp key="a" />],
  reveal: [<WagesDown key="b" />],

  eli5: "When wages go up, bosses' profits go down. Goods made mostly by hand get a bit dearer, goods made mostly by machine get a bit cheaper, and average goods stay the same. So a pay rise does not just vanish in higher prices.",

  grownUp: (
    <>
      <p>
        Marx asks how a general rise or fall of wages affects prices of production. He takes an average social capital
        of 80c + 20v with a 20% rate of profit. If wages rise by 25%, the same labour costs 25 instead of 20. It still
        creates 40 of new value, so profit falls to 15. The new average rate of profit is 15 on 105, or 14 2/7%. The
        price of the average capital stays at 120, equal to its value.
      </p>
      <p>
        For a capital of <strong>lower composition</strong> (50c + 50v) the wage bill rises to 62½. At the new average
        rate its price of production rises from 120 to 128 4/7. For a capital of <strong>higher composition</strong>{" "}
        (92c + 8v) costs rise only to 102, and its price falls to 116 4/7. Prices rise in one case and fall in the
        other, so the sum of prices stays equal to the sum of values. Profit falls by the same amount everywhere.
      </p>
      <p>
        A general fall of wages by a quarter works in reverse: the average rate rises to 26 6/19%, labour-heavy prices
        fall (to 110 10/19) and machine-heavy prices rise (to 123 15/19). Marx notes that Ricardo only examined the
        case of a rise, and missed this one.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        A general wage rise comes out of profits, not out of the buyer&apos;s pocket. It changes relative prices because
        of how profits are evened out, but it does not raise prices in general.
      </p>
      <p>
        This was also a practical argument. Some people in Marx&apos;s day told workers that pay rises were pointless
        because prices would simply follow. Marx had argued against that view in a talk to workers in 1865, and this
        chapter shows why it is wrong.
      </p>
    </>
  ),

  critics: [
    {
      who: "Sraffa and the Sraffians",
      point: (
        <p>
          Piero Sraffa&apos;s <em>Production of Commodities by Means of Commodities</em> (1960) agrees that relative
          prices change with wages in this way, and solves the problem Ricardo struggled with. But Ian Steedman, in{" "}
          <em>Marx after Sraffa</em> (1977), argued that prices and profits can be worked out directly from technology
          and the wage, so labour values add nothing. Marxists reply that this leaves out where profit comes from.
        </p>
      ),
    },
    {
      who: "Modern inflation",
      point: (
        <p>
          Many economists today think wage rises can feed general inflation when money and credit expand alongside
          them, the so-called wage-price spiral. Others find such spirals rare. Marx&apos;s model assumes a fixed value
          of money, so it cannot settle that debate.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Wages rise by a quarter. What happens to the price of goods from a workshop of average composition?",
      options: ["It rises by a quarter", "It stays the same", "It falls"],
      answer: 1,
      why: "Its wage rise is paid for out of profit, and its price of production stays equal to its value: 120.",
    },
    {
      q: "After the same pay rise, which workshop's price goes up?",
      options: ["The machine-heavy mill", "The labour-heavy tailoring workshop", "Neither"],
      answer: 1,
      why: "Its wage bill jumps most, so it needs a higher price to earn the new average profit: 128 4/7.",
    },
    {
      q: "What does a general wage rise do to the average rate of profit?",
      options: ["It lowers it", "It raises it", "Nothing"],
      answer: 0,
      why: "In Marx's example it falls from 20% to 14 2/7%. The rise comes out of profit.",
    },
  ],

  remember: [
    "A general pay rise lowers profit everywhere.",
    "Labour-heavy goods get dearer, machine-heavy goods get cheaper, average goods stay the same.",
    "In total, prices still add up to values.",
    "A general pay cut does the opposite, which Ricardo never worked out.",
  ],

  terms: ["higher-composition", "lower-composition"],

  source: (
    <p>
      Covers Volume III, Chapter 11. Volume III was assembled by Engels from Marx&apos;s manuscripts and published in
      1894. Text checked against the marxists.org edition (Institute of Marxism-Leninism, 1959). All numbers are
      Marx&apos;s: 80c + 20v at 20%; wages up 25% giving 14 2/7%, prices 120, 128 4/7 and 116 4/7; wages down a
      quarter giving 26 6/19%, prices 110 10/19 and 123 15/19. The 1865 talk mentioned is Marx&apos;s{" "}
      <em>Value, Price and Profit</em>. The strike in the story belongs to this site.
    </p>
  ),
};

export default chapter;
