import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheCoinsComeHome, TheGreatSwap, TwoDepartments } from "./ch20-animations";

const chapter: ChapterContent = {
  bigQuestion: "How does a whole town manage to start all over again every year?",

  story: (
    <>
      <p>
        It is New Year&apos;s morning in Tiny Town. The Forge has made a whole year&apos;s worth of iron and machines.
        Mia&apos;s bakery has baked a mountain of bread, and Ava has sewn a rack of coats.
      </p>
      <p>
        Leo stands in the square and frowns. The Forge workers can&apos;t eat iron. Mia&apos;s oven is cracked, and
        she can&apos;t bake a new one. Ava&apos;s needles are worn out. Everybody has made something, and everybody
        needs something they didn&apos;t make.
      </p>
      <p>
        &ldquo;So how does the town ever get going again?&rdquo; Leo asks Grandpa Ned. &ldquo;Who swaps with whom? And
        where do all the coins go?&rdquo;
      </p>
      <p>Grandpa Ned scratches his head. Marx spent a whole chapter on exactly this question.</p>
    </>
  ),

  guess: (
    <p>
      The Forge makes machines. Mia makes bread. If the Forge workers need bread and Mia needs a new oven, what has to
      be true about the size of the two piles for every swap to work out?
    </p>
  ),

  struggle: [<TwoDepartments key="a" />, <TheGreatSwap key="b" />],
  reveal: [<TheCoinsComeHome key="c" />],

  eli5: "Some workshops make machines and some make bread. The machine-makers need bread and the bread-makers need new machines, so they swap. If the swap balances, the whole town can do it all again next year.",

  grownUp: (
    <>
      <p>
        Marx now looks at the whole of society&apos;s capital at once. He sorts the year&apos;s product into{" "}
        <strong>Department I</strong>, which makes means of production, and <strong>Department II</strong>, which
        makes articles of consumption. Each department&apos;s product is c + v + s. His{" "}
        <strong>reproduction scheme</strong> for <em>simple reproduction</em>, where all surplus-value is spent on
        consumption, is: I. 4,000c + 1,000v + 1,000s = 6,000; II. 2,000c + 500v + 500s = 3,000. The rate of
        surplus-value is 100 per cent, and the figures &ldquo;may indicate millions&rdquo; of pounds.
      </p>
      <p>
        Three great exchanges clear the whole product. Inside II, its own wages and surplus-value (500v + 500s) buy
        its own consumer goods. Inside I, the 4,000c is replaced by mutual exchange among capitalists of I. Across the
        two, the big exchange: I (1,000v + 1,000s), which exists as machines, swaps for II&apos;s 2,000c, which exists
        as consumer goods. So simple reproduction needs <strong>I(v + s) = IIc</strong>.
      </p>
      <p>
        Marx follows the money too. Department I pays £1,000 in wages; its workers buy consumer goods from II; II buys
        means of production from I with the same £1,000, which is back where it started. This is the{" "}
        <strong>reflux of money</strong>: money a capitalist advances to circulation returns to its point of
        departure. He also splits II into necessities and <strong>articles of luxury</strong>; the luxury workers keep
        their jobs only because capitalists spend their revenue on luxuries.
      </p>
      <p>
        Two harder sections follow. Machines wear out unevenly, so some years far more fixed capital must be replaced
        than others; even with no growth this can bring &ldquo;a crisis of over-production&rdquo;. And the gold used as
        money must itself be mined and replaced. The chapter ends by mocking the economist Destutt de Tracy, who
        thought profit came from capitalists selling their goods for more than they paid out in wages.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        A capitalist economy is not a pile of separate businesses. It is one big web of swaps between the makers of
        machines and the makers of things people consume. For the economy just to repeat itself, the two departments
        must stand in exact proportion: I(v + s) = IIc.
      </p>
      <p>
        Nobody plans that proportion. It has to come out right through millions of separate sales, and Marx shows how
        easily it can come out wrong, for example when a burst of worn-out machines all need replacing in the same
        year. Under capitalism, he says, a surplus that would simply be useful &ldquo;is an evil&rdquo;.
      </p>
    </>
  ),

  critics: [
    {
      who: "The model builders",
      point: (
        <p>
          Many economists, including critics of Marx, see these schemes as a real breakthrough: one of the first
          attempts to show how the whole economy fits together sector by sector. Michał Kalecki built models with
          departments like Marx&apos;s, and today&apos;s input-output tables, developed by Wassily Leontief, also trace
          how each sector buys from the others.
        </p>
      ),
    },
    {
      who: "Too simple to test",
      point: (
        <p>
          Others point out that the schemes count everything in labour values rather than market prices, and leave
          out foreign trade, government and the many industries that sell to both departments at once. So they show
          what balance would look like, critics say, but cannot tell us how often a real economy reaches it.
          Marx&apos;s defenders reply that showing the conditions was the whole point.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which department is Mia's bakery in?",
      options: ["Department I", "Department II", "Neither"],
      answer: 1,
      why: "Bread is eaten, not used to make other things, so the bakery belongs to Department II.",
    },
    {
      q: "In simple reproduction, I(v + s) must equal what?",
      options: ["I c", "II c", "II s"],
      answer: 1,
      why: "Department I's 1,000 v + 1,000 s are swapped for Department II's 2,000 c: 2,000 = 2,000.",
    },
    {
      q: "The Forge pays 1,000 coins in wages. The workers buy bread, and Mia buys a new oven from the Forge. Where are the coins now?",
      options: ["With Mia", "With the workers", "Back with the Ironmaster"],
      answer: 2,
      why: "Money advanced to circulation returns to its point of departure. The same 1,000 coins come home.",
    },
  ],

  remember: [
    "Marx splits a society's yearly product into Department I (things for making things) and Department II (things people use up).",
    "Each department's product is c + v + s. In Marx's example, 6,000 and 3,000.",
    "Some swaps stay inside a department. The big one crosses over: I(v + s) for II c.",
    "With no growth, the two must match exactly: 2,000 = 2,000.",
    "Coins a capitalist throws into circulation come back to him when all goes well.",
  ],

  terms: ["department-i", "department-ii", "reproduction-scheme", "luxury-goods", "money-reflux"],

  source: (
    <p>
      Covers Volume II, Chapter 20 (&ldquo;Simple Reproduction&rdquo;), all thirteen sections, including the exchange
      I(v + s) against IIc, necessities and luxuries, the money flowing back to its starting point, the replacement of
      fixed capital, the reproduction of the money material, and Destutt de Tracy. Volume II was put together by
      Friedrich Engels from Marx&apos;s manuscripts after Marx&apos;s death. The scheme&apos;s numbers and the £1,000
      round trip are Marx&apos;s own; the Forge, the Ironmaster, Mia and Ava are this site&apos;s.
    </p>
  ),
};

export default chapter;
