import type { ChapterContent } from "@/components/ChapterTemplate";
import { DearerCotton, MachinesFastCottonSlow, TheCottonFamine } from "./ch06-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why can a bad cotton harvest far away shut down a mill in Tiny Town?",

  story: (
    <>
      <p>
        One spring, Tom the shopkeeper comes back from the harbour looking grim. &ldquo;No cotton ships this month,&rdquo;
        he says. &ldquo;There&apos;s a war across the ocean, and the cotton fields are empty.&rdquo;
      </p>
      <p>
        The little cotton that does arrive costs twice as much. Mr. Moneybags grumbles over his ledger: his rate of
        profit has shrunk, though Sam spins exactly as fast as before. A few weeks later the mill goes on short time.
        Then the spindles stop altogether.
      </p>
      <p>
        Sam is home every day now, with no wage. The machines are fine. Sam is fine. Only the cotton is missing. How can
        one missing thing stop everything?
      </p>
    </>
  ),

  guess: (
    <p>
      Cotton is part of the boss&apos;s constant capital. If its price doubles while the surplus-value stays the same,
      what happens to the rate of profit? And why might cotton run short more easily than machines do?
    </p>
  ),

  struggle: [<DearerCotton key="a" />, <MachinesFastCottonSlow key="b" />],
  reveal: [<TheCottonFamine key="c" />],

  eli5: "When the cotton a mill needs gets dearer, the boss's profit rate falls, even if nothing else changes. Machines can be built fast, but cotton only grows once a year, so it keeps running short and its price jumps. In the cotton famine of 1861, half the cotton workers lost their jobs.",

  grownUp: (
    <>
      <p>
        Raw materials are a large part of constant capital, and their whole value enters the product at once. If their
        price rises by an amount d, the rate of profit s/(c + v) becomes s/((c + d) + v), so, other things equal,
        <strong> the rate of profit falls and rises inversely to the price of raw material</strong>. Marx notes how
        important cheap raw materials are for industrial countries, and why cutting import duties on raw materials
        mattered so much to them.
      </p>
      <p>
        Price swings also revalue capital already held. A rise in raw material prices appreciates stocks on hand and can
        tie up more capital just to keep production going; a fall depreciates them and releases capital. Marx says these
        phenomena only fully develop with credit and competition on the world market.
      </p>
      <p>
        Machinery, coal and ore can be multiplied quickly, but plant and animal materials follow natural time periods.
        So in times of rapid accumulation there is a <strong>relative over-production of machinery</strong> and a{" "}
        <strong>relative under-production of raw materials</strong>. Prices shoot up; this brings materials from farther
        away, more production a year later, substitutes and more use of waste; demand then falls and prices crash. The
        violent swings cause interruptions and even catastrophes in reproduction.
      </p>
      <p>
        Marx illustrates this with years of factory inspectors&apos; reports from 1845 onwards, ending with the{" "}
        <strong>cotton famine</strong> of 1861 to 1865 during the American Civil War. In October 1862, of the cotton
        workers of Lancashire and Cheshire, 11.3% worked full time, 38% short time and 50.7% were unemployed.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capitalist production does not plan its own inputs. Each capitalist expands his machinery when profits are good,
        without anyone checking whether nature can supply the cotton to feed it. The result is lurching booms and
        shortages that fall hardest on the workers.
      </p>
      <p>
        Marx adds that during shortages capitalists band together to regulate supply, and then forget all about it once
        prices fall. Engels, in a note, says the later trusts and cartels did not change this underlying instability.
      </p>
    </>
  ),

  critics: [
    {
      who: "Prices are signals",
      point: (
        <p>
          Economists in the tradition of Friedrich Hayek argue that soaring cotton prices did exactly what prices should:
          they told the world cotton was scarce and called forth new supplies from India, Egypt and Brazil. On this view
          the famine was caused by war and blockade, not by any flaw in capitalism.
        </p>
      ),
    },
    {
      who: "Commodity cycles are not unique to capitalism",
      point: (
        <p>
          Others note that harvest failures and famines also struck non-capitalist societies, and that modern futures
          markets and storage have softened raw material swings. Marx&apos;s supporters reply that his point was the gap
          between fast-growing machinery and slow-growing raw materials, which markets can dampen but not remove.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Cotton doubles in price but Sam makes the same surplus-value. What happens to the rate of profit?",
      options: ["It rises", "It falls", "It stays the same"],
      answer: 1,
      why: "The same surplus-value is now divided by a bigger capital, so the rate of profit falls.",
    },
    {
      q: "Why do raw materials like cotton run short more easily than machines?",
      options: [
        "Because farmers are lazy",
        "Because plants grow at nature's pace, while machines can be built quickly",
        "Because cotton is heavy",
      ],
      answer: 1,
      why: "Marx says plant and animal materials follow natural time periods and can't be suddenly multiplied like machines.",
    },
    {
      q: "In October 1862, about what share of Lancashire and Cheshire's cotton workers had no work at all?",
      options: ["About a tenth", "About a third", "About half"],
      answer: 2,
      why: "The factory inspectors counted 50.7% unemployed, almost 180,000 people.",
    },
  ],

  remember: [
    "Dearer raw materials mean a lower rate of profit, other things equal.",
    "Price swings also make the stocks a boss holds worth more or less.",
    "Machines multiply fast; cotton, wool and grain grow at nature's pace.",
    "So machines race ahead of raw materials, and prices swing violently.",
    "In the cotton famine of 1861 to 1865, half of Lancashire's cotton workers lost their jobs.",
  ],

  terms: ["raw-material-prices", "cotton-famine"],

  source: (
    <p>
      Covers Volume III, Chapter 6 (&ldquo;The Effect of Price Fluctuations&rdquo;), from the Institute of
      Marxism-Leninism edition (International Publishers) on marxists.org. Volume III was assembled and edited by
      Friedrich Engels from Marx&apos;s manuscripts and published in 1894. From the text: the formula s/((c + d) + v); the
      over-production of machinery and under-production of raw materials; Surat cotton&apos;s 25% waste; the 1862 figures
      of 40,146, 134,767 and 179,721 workers. The doubling of cotton from 20 to 40 coins in animation 6.1 is this
      site&apos;s example.
    </p>
  ),
};

export default chapter;
