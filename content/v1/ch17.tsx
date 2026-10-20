import type { ChapterContent } from "@/components/ChapterTemplate";
import { DearerBreadLongerDays, TheFixedPie, ThreeDials } from "./ch17-animations";

const chapter: ChapterContent = {
  bigQuestion: "If Sam's wage goes up, does Mr. Moneybags' share have to go down?",

  story: (
    <>
      <p>
        It is a good year in Tiny Town. Mia has a new oven that bakes twice as many loaves with the same work, and bread
        gets cheaper. Sam is pleased: his coins stretch further at the market.
      </p>
      <p>
        Mr. Moneybags is pleased too, but for a different reason. He has noticed that when bread is cheap, he can pay
        Sam a little less and Sam still eats as well as before. And in the bad years, when bread is dear, Mr. Moneybags
        grumbles and talks about making the working day longer.
      </p>
      <p>
        Sam starts to wonder. His day of work is always 12 hours. Why do his wage and the boss&apos;s profit seem to
        pull against each other like two ends of a rope? And what decides who wins?
      </p>
    </>
  ),

  guess: (
    <p>
      Sam&apos;s 12-hour day makes the same 6 coins of new value every day. If his wage goes up from 3 coins to 4, what
      do you think happens to Mr. Moneybags&apos; part? And what other things could change how the day is shared?
    </p>
  ),

  struggle: [<TheFixedPie key="a" />, <ThreeDials key="b" />],
  reveal: [<DearerBreadLongerDays key="c" />],

  eli5: "Sam's day makes the same pile of value, so if his share gets bigger, Mr. Moneybags' share gets smaller. When the things Sam needs get cheaper to make, Mr. Moneybags' share grows. Making things faster could also let everyone work fewer hours.",

  grownUp: (
    <>
      <p>
        Marx says three things decide how big the value of labour-power and the surplus-value are compared with each
        other: the <strong>length of the working day</strong>, the <strong>intensity of labour</strong> (how much work
        is packed into each hour), and the <strong>productivity of labour</strong> (how much each hour of work turns
        out). He takes them one at a time.
      </p>
      <p>
        <strong>Productivity changes, length and intensity fixed.</strong> A 12-hour day always creates the same value,
        Marx&apos;s 6 shillings, however much is produced. So the value of labour-power and surplus-value move in
        opposite directions: 3 and 3 can become 2 and 4, or 4 and 2, never both up. Productivity drives it: only if the
        things workers live on get cheaper to make can surplus-value rise this way. That is the fixed pie in the first
        animation. Even so, a worker can end up with <em>more</em> bread while their wage is worth less, because each
        loaf is cheaper; the gap between worker and capitalist still widens.
      </p>
      <p>
        <strong>Intensity changes.</strong> More intense work packs more labour into the same hours, so the day creates
        more value (Marx: 8 shillings instead of 6). Now wage and surplus-value can rise together, though a higher wage
        may not make up for the extra wear on the worker.
      </p>
      <p>
        <strong>Length changes.</strong> A longer day at the same wage raises surplus-value. A shorter day, with nothing
        else changed, lowers it. Marx adds that in reality shorter days come together with more productive and more
        intense work.
      </p>
      <p>
        <strong>Changes together.</strong> If bread gets dearer, necessary labour grows (6 hours to 8), but lengthening
        the day to 14 or 16 hours keeps or even raises surplus-value. Marx says this happened in England from 1799 to
        1815: money wages rose, <strong>real wages</strong> fell, and longer, harder days made surplus-value grow. In the
        other direction, rising productivity shrinks the necessary part of the day, which is what makes a shorter day
        possible.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Inside a fixed working day, what the worker gets and what the employer gets come out of the same new value, so
        they pull against each other. Who gains from cheaper goods, longer days or harder work is not settled by nature.
        It depends, as Marx puts it, on the pressure of capital on one side and the resistance of workers on the other.
      </p>
      <p>
        He also points to what productivity could make possible. The more productive work becomes, the shorter the
        working day could be. But under capitalism, he writes, spare time for one class is bought by turning the whole
        lifetime of the masses into labour time.
      </p>
    </>
  ),

  critics: [
    {
      who: "The record of real wages",
      point: (
        <p>
          In industrial countries, rising productivity over the following 150 years brought large rises in real wages
          and much shorter working weeks. Critics read this as evidence that workers do share in productivity gains.
          Marx&apos;s defenders reply that his claim here is about shares, not misery: he says outright that workers
          can get more goods while their share of new value falls.
        </p>
      ),
    },
    {
      who: "Stable shares",
      point: (
        <p>
          Economists such as Nicholas Kaldor (1961) noted that for long stretches the share of income going to wages
          stayed roughly steady, rather than being squeezed as productivity rose. Since about 1980, though, the wage
          share has fallen in many countries, so the argument is very much alive.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam's 12-hour day makes 6 coins of new value. If his wage rises from 3 coins to 4, what happens to the surplus-value?",
      options: ["It rises to 4", "It falls to 2", "It stays at 3"],
      answer: 1,
      why: "The day still makes 6 coins. If Sam's part goes up by 1, the other part must go down by 1.",
    },
    {
      q: "Mia's new oven makes bread cheaper, so Sam needs only 4 hours to cover his needs. How much surplus-value does his 12-hour day make now?",
      options: ["2 coins", "3 coins", "4 coins"],
      answer: 2,
      why: "4 hours replace his wage (2 coins); the other 8 hours make 4 coins of surplus-value.",
    },
    {
      q: "What does Marx say makes a shorter working day possible?",
      options: ["Rising productivity of labour", "Higher prices", "More coins in circulation"],
      answer: 0,
      why: "When work is more productive, the part of the day a worker needs for themselves shrinks, so the whole day could be shorter.",
    },
  ],

  remember: [
    "Three dials set how the day is shared: its length, how hard the work is, and how productive it is.",
    "With length and intensity fixed, the day makes a fixed pie: wage and surplus-value move in opposite directions.",
    "Cheaper necessaries raise surplus-value; dearer ones lower it, unless the day is made longer.",
    "Harder or longer work makes more value, so both slices can grow, at the cost of the worker's strength.",
    "Rising productivity is what could make a much shorter working day possible.",
  ],

  terms: ["productivity-of-labour", "real-wage"],

  source: (
    <p>
      Covers Volume I, Chapter 17 (Fowkes: &ldquo;Changes of Magnitude in the Price of Labour-Power and in
      Surplus-Value&rdquo;), all four sections. Marx&apos;s own numbers: a 12-hour day creating 6 shillings, split 3 and
      3; 4 hours or 8 hours of necessary labour; intensified labour creating 8 shillings with both parts rising from 3
      to 4; a day lengthened to 14 and 16 hours when necessary labour rises to 8 hours; England, 1799 to 1815. Mia&apos;s
      oven and the bad harvest are this site&apos;s story. Marx&apos;s final sentence, about spare time for one class,
      is paraphrased in &ldquo;What Marx was really saying&rdquo;.
    </p>
  ),
};

export default chapter;
