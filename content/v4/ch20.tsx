import type { ChapterContent } from "@/components/ChapterTemplate";
import { TwoCracks, WineInTheCellar } from "./ch20-animations";

const chapter: ChapterContent = {
  bigQuestion: "What happens when a great idea has two holes in it?",

  story: (
    <>
      <p>
        On the Old Thinkers&apos; Shelf in Tiny Town&apos;s library, one book is a little battered: the ideas of David Ricardo.
        A whole crowd of his followers have scribbled in its margins.
      </p>
      <p>
        Sam takes it down. &ldquo;Ricardo says everything is worth the labour it takes to make it,&rdquo; he reads. &ldquo;So why
        does my day make 6 coins of value when I&apos;m only paid 3?&rdquo;
      </p>
      <p>
        Grandpa Ned, who keeps cider in his cellar, has his own puzzle. &ldquo;My cider sits there a whole year with nobody
        touching it. Then it sells for more. Who did the work?&rdquo;
      </p>
      <p>Ricardo&apos;s followers had answers. Were they good ones?</p>
    </>
  ),

  guess: (
    <p>
      If a theory has two holes in it, what is better: patch them with clever new meanings for old words, or go back and
      rebuild the part that is broken?
    </p>
  ),

  struggle: [<TwoCracks key="a" />],
  reveal: [<WineInTheCellar key="b" />],

  eli5: "Ricardo had a big idea about work and value, but it had two holes. His followers tried to cover the holes with clever words instead of fixing them. Marx says that is how the whole school slowly fell apart.",

  grownUp: (
    <>
      <p>
        This chapter follows Ricardo&apos;s followers: Robert Torrens, James Mill, John Ramsay McCulloch and their critics,
        such as Samuel Bailey. Marx calls it the <strong>disintegration of the Ricardian school</strong>. Ricardo himself, he
        says, let new ideas grow &ldquo;amid the manure&rdquo; of contradictions. His followers wanted neat, logical
        consistency, and that is where the trouble began.
      </p>
      <p>
        Marx sums up the problem at the end: the school &ldquo;declines at two points&rdquo;. First, the exchange between
        capital and labour: if the worker is paid the full value of his labour, where does profit come from? Second, the
        general rate of profit: capitals of equal size earn equal profits even when they employ very different amounts of
        labour. Ricardo&apos;s followers mixed up <strong>surplus-value</strong> with profit and values with prices, so they
        could not solve either.
      </p>
      <p>
        James Mill, the first to set Ricardo out systematically, tried to rescue the rule with examples like wine ageing in a
        cellar, where he treated the passing of time as if it were labour. Bailey pointed out that nobody worked on the wine at
        all. Marx&apos;s own solutions come elsewhere in <em>Capital</em>: the worker sells <strong>labour-power</strong>, not
        labour, and individual prices drift from values while the total surplus-value is shared out as average profit.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      A theory can be great and still contain contradictions. Ricardo&apos;s were real and fruitful. When his followers tried
      to explain them away with word games, instead of discovering the steps that connect the law of value to everyday
      prices and profits, the school turned into what Marx calls scholasticism.
    </p>
  ),

  critics: [
    {
      who: "Samuel Bailey and later economists",
      point: (
        <p>
          Bailey argued that value is simply a ratio between things exchanged, not an amount of labour stored inside them.
          Many later economists agreed and dropped the labour theory altogether, explaining prices by supply, demand and
          choices at the margin. To them, the &ldquo;two cracks&rdquo; showed the theory was wrong, not that it needed
          Marx&apos;s repairs.
        </p>
      ),
    },
    {
      who: "Historians of economics",
      point: (
        <p>
          Some historians think &ldquo;disintegration&rdquo; is too harsh. Ricardo&apos;s followers were working on real
          puzzles, such as capital and time, that economists kept debating for another century. Marx&apos;s defenders reply
          that his account explains why those puzzles were hard to solve with Ricardo&apos;s tools.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Marx says the Ricardian school declined at two points. Which pair?",
      options: [
        "Exchange between capital and labour, and the general rate of profit",
        "Money and banking",
        "Rent and taxes",
      ],
      answer: 0,
      why: "Those are Marx's own two points: wages versus the law of value, and equal profits on equal capitals.",
    },
    {
      q: "James Mill said wine stored in a cellar gains value because...",
      options: ["the cellar is warm", "the time it spends ageing counts as labour", "the landlord charges rent"],
      answer: 1,
      why: "Mill stretched the word labour to cover time. Bailey replied that nobody had touched the wine at all.",
    },
    {
      q: "Where does Marx find the real answer to the wages puzzle?",
      options: ["In the wine itself", "In labour-power: the worker sells his ability to work", "In the price of gold"],
      answer: 1,
      why: "Sam is paid the value of his labour-power (3 coins), but his labour creates more (6 coins). That is Volume I, Chapter 6.",
    },
  ],

  remember: [
    "Ricardo's followers tried to make his labour theory neat and consistent.",
    "Marx says the school declined at two points: wages, and the general rate of profit.",
    "James Mill's wine in the cellar treated time as if it were labour; Bailey showed nobody worked on it.",
    "Marx's own answers are labour-power (Volume I) and average profit (Volume III).",
  ],

  terms: ["ricardian-school"],

  source: (
    <p>
      Covers Volume IV (Theories of Surplus-Value, Part III), Chapter 20 (&ldquo;Disintegration of the Ricardian
      School&rdquo;), Progress Publishers edition as hosted on marxists.org. Marx&apos;s points used: Mill as the first to
      present Ricardo systematically; the &ldquo;manure&rdquo; of contradictions; the wine &ldquo;increased in value
      one-tenth by being kept a year&rdquo; (Mill, quoted by Bailey); Bailey&apos;s reply that nobody had &ldquo;approached
      the wine&rdquo;; the conclusion that the school &ldquo;declines at two points&rdquo;. Grandpa Ned&apos;s cider, Sam&apos;s
      3 and 6 coins and the two workshops are this site&apos;s. Theories of Surplus-Value is not part of Capital proper; it was
      first edited by Karl Kautsky (1905 to 1910).
    </p>
  ),
};

export default chapter;
