import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheStuckSwap, WhyGold } from "./ch02-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why did people start using money at all?",

  story: (
    <>
      <p>
        Long ago, the families of Tiny Town simply shared what they made. Nobody swapped inside a family. Swapping began
        at the edge of town, on the days traders came over the hill from Big River Village. Bit by bit, the habit spread
        inside Tiny Town too.
      </p>
      <p>
        Now it is market day. Ava has carried her best coat to the square. A coat can&apos;t walk to market by itself, and
        it certainly can&apos;t haggle, so Ava has to do the talking. Mia has brought bread. Leo has brought linen.
      </p>
      <p>
        Everyone has something good, and everyone needs something. It should be easy. But by lunchtime, nobody has
        swapped anything, and all three are grumpy.
      </p>
      <p>What went wrong? And what would fix it?</p>
    </>
  ),

  guess: (
    <p>
      Ava, Mia and Leo each have something useful. Why might they still go home empty-handed? What is the one change
      that would get every swap moving?
    </p>
  ),

  struggle: [<TheStuckSwap key="a" />],
  reveal: [<WhyGold key="b" />],

  eli5: "Swapping gets stuck when you don't want what the other person has. So everyone agreed to take one thing in every swap, and gold won. That one thing is money.",

  grownUp: (
    <>
      <p>
        Marx starts with a plain fact: commodities can&apos;t go to market on their own. Their owners have to do it, and
        they have to treat each other as owners who agree to a swap. Marx says the legal side of this, the contract,
        just mirrors the economic relation underneath.
      </p>
      <p>
        To its owner, a commodity is not useful. Ava doesn&apos;t need another coat. It is useful only to others. So
        every owner faces a tangle: they want their coat to go only for the particular thing they need (bread), yet they
        also want it to count as value against anything at all. Every owner wants their own goods to be the measure for
        everything else, and they can&apos;t all be. The stuck swap in the animation is a picture of that tangle.
      </p>
      <p>
        The way out is a <strong>general equivalent</strong>: one commodity that all the owners, acting together,
        set apart to measure all the others. When that role settles on one commodity for good, it becomes money.
        Herding peoples were the first to develop a money-thing, Marx notes, often cattle. In the end gold and silver
        won, because every piece is alike and they can be divided and joined again at will.
      </p>
      <p>
        Money&apos;s use-value is doubled. Gold is still useful as gold (for jewellery, or filling teeth), and it gains a
        new use: being money. But money is still a commodity, and its value is set like any other: by the work it takes
        to dig it up. The <strong>money fetish</strong> is the commodity fetish again, only brighter. Gold seems to have
        its power by nature, when its role comes from how people relate to each other.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Money is not a clever invention someone thought up, and it is not just a symbol. It grows out of swapping itself,
        as soon as swapping becomes everyday. Once things are made to be exchanged, people need one thing to measure all
        the others, and gold took the job because of what it is made of.
      </p>
      <p>
        Marx says the hard part is not seeing that money is a commodity. The hard part is seeing how, why and by what
        means a commodity becomes money. And because money&apos;s job comes from how people deal with each other, it ends
        up looking magical.
      </p>
    </>
  ),

  critics: [
    {
      who: "Historians of money",
      point: (
        <p>
          Anthropologists such as Caroline Humphrey and David Graeber (<em>Debt: The First 5,000 Years</em>, 2011) found
          little evidence that whole economies ever ran on barter before money. In early societies they see credit and
          debt records first. Marx&apos;s idea that exchange began where communities met is closer to their view than
          Adam Smith&apos;s barter story, but they still doubt that money grew out of swapping goods.
        </p>
      ),
    },
    {
      who: "The state theory of money",
      point: (
        <p>
          Georg Friedrich Knapp (1905), and later Modern Monetary Theory, argue that money is whatever the state accepts
          when you pay taxes. On this view money&apos;s value doesn&apos;t come from being a commodity like gold at all,
          and today&apos;s money, which is not tied to gold, seems to back them up.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why can't Ava, Mia and Leo just swap their goods?",
      options: ["Their goods are useless", "Nobody has the thing the other person wants", "Swapping is against the rules"],
      answer: 1,
      why: "Each thing is useful, just not to the person it is offered to. That tangle is why people needed one thing everybody accepts.",
    },
    {
      q: "Which of these is NOT a reason gold became money?",
      options: ["Every piece is alike", "It can be split and joined again", "It is the best metal for making tools"],
      answer: 2,
      why: "Gold is far too soft for tools! It won because every piece is alike, it splits and joins easily, and it keeps.",
    },
    {
      q: "Where does Marx say swapping first began?",
      options: ["Inside families", "Where one community met another", "In banks"],
      answer: 1,
      why: "Marx says exchange first began at the edges, where communities met, and only later spread inside them.",
    },
  ],

  remember: [
    "Things can't take themselves to market. Their owners have to agree to swap.",
    "Swaps get stuck when nobody wants what you have, so people settle on one thing everyone takes: the general equivalent.",
    "Gold and silver won because every piece is alike and they can be split and joined again.",
    "Money is still a commodity. Its own value comes from the work of mining it.",
  ],

  terms: ["general-equivalent", "money-fetish"],

  source: (
    <p>
      Covers Volume I, Chapter 2 (Fowkes: &ldquo;The Process of Exchange&rdquo;; Moore and Aveling: &ldquo;Exchange&rdquo;).
      Marx&apos;s own points: commodities need guardians to take them to market; exchange begins where communities meet;
      nomadic peoples first develop the money-form; precious metals are uniform and divisible; money&apos;s use-value is
      doubled. The three-way stuck swap and the cow, bread and gold tests are this site&apos;s illustrations, not
      Marx&apos;s examples.
    </p>
  ),
};

export default chapter;
