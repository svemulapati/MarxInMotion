import type { ChapterContent } from "@/components/ChapterTemplate";
import { ThreeCostumes, TwoShoppingLists, WhenTheCircuitStops } from "./ch01-animations";

const chapter: ChapterContent = {
  bigQuestion: "Where are Mr. Moneybags' coins on Wednesday?",

  story: (
    <>
      <p>
        In Volume I we watched Mr. Moneybags&apos; workshop make value. Now we follow his capital as it travels. Every
        Monday morning he counts 27 coins on his desk. Every Saturday evening he counts 30. Leo, who is curious, asks a
        simple question: &ldquo;Where are your coins on Wednesday?&rdquo;
      </p>
      <p>
        Mr. Moneybags opens his purse. It is empty. &ldquo;Gone,&rdquo; he says. &ldquo;But I am not any poorer.&rdquo;
      </p>
      <p>
        Leo looks around the workshop. There is a heap of cotton, spinning wheels humming, and Sam hard at work. By Friday
        there is a stack of fresh yarn. Somehow the 27 coins have turned into all of this, and by Saturday they will
        turn back into coins, more of them than before.
      </p>
      <p>So where was the money on Wednesday? To answer, Marx follows capital round a whole circle.</p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags&apos; purse is empty on Wednesday, yet he says he is not poorer. In what shapes could his 27 coins
      be hiding? Count how many different shapes you think there are before you press play.
    </p>
  ),

  struggle: [<ThreeCostumes key="a" />, <TwoShoppingLists key="b" />],
  reveal: [<WhenTheCircuitStops key="c" />],

  eli5: "Mr. Moneybags' capital goes round in a circle and keeps changing its costume. First it is coins, then it is a busy workshop, then it is a pile of yarn, and then it is coins again, a few more than before. It only works if it never stops moving.",

  grownUp: (
    <>
      <p>
        Volume II opens with the <strong>circuit of capital</strong>. Marx writes it M&ndash;C&hellip;P&hellip;C&prime;&ndash;M&prime;
        and splits it into three stages. In the first, the capitalist is a buyer: money becomes commodities (M&ndash;C). In
        the second, he is a producer: the commodities he bought are used up in production (P), and the result is a
        commodity worth more than what went into it. In the third, he is a seller again: the goods turn back into money
        (C&prime;&ndash;M&prime;). The dots show where circulation is interrupted by production.
      </p>
      <p>
        At each stage the same capital-value wears a different form. As coins it is <strong>money-capital</strong>; as
        cotton, spindles and Sam at work it is productive capital; as finished yarn it is commodity-capital. Marx is
        firm that these are not three kinds of capital run by three kinds of business. They are the forms that one{" "}
        <strong>industrial capital</strong> takes in turn, its <strong>metamorphosis</strong>.
      </p>
      <p>
        The first purchase splits in two. M&ndash;MP buys the means of production (cotton, wear on the spindles);
        M&ndash;L buys labour-power. The two must fit in a fixed proportion set by the technique: Marx&apos;s mill pays 50
        spinners &pound;50 a week and so needs &pound;372 of means of production. Tiny Town&apos;s workshop uses our usual
        numbers: 24 coins plus 3 coins in, yarn worth 30 out. M&ndash;L looks like any other purchase, but Marx says the
        class relation between capitalist and wage-labourer is already present in it: someone must have nothing to sell
        but labour-power.
      </p>
      <p>
        Capital works only while it keeps moving. If it sticks at buying, money freezes into a hoard. If it sticks in
        production, machines stand idle while workers have nothing to do. If it sticks at selling, unsold goods pile up
        and clog everything behind them.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capital is not a pile of things but a movement. The same value keeps changing shape, money into a working
        workshop into goods and back into money, and it grows only while the round trip continues.
      </p>
      <p>
        The money form M&hellip;M&prime; shows the motive of the whole system most plainly: money-making. Production
        appears as a &ldquo;necessary evil&rdquo; on the way, which is why, Marx says, capitalist nations are seized by
        periodic fevers of trying to make money without producing anything.
      </p>
    </>
  ),

  critics: [
    {
      who: "The accountant's view",
      point: (
        <p>
          Business schools teach almost the same loop under another name: the cash conversion cycle, from cash to stock
          to sales and back to cash. Critics say this shows the circuit is simply a good description of how any firm
          handles its working money, and that it needs no theory of exploitation. Marx&apos;s defenders reply that the
          description is shared, but the question of where the extra comes from is not.
        </p>
      ),
    },
    {
      who: "Readers of the manuscripts",
      point: (
        <p>
          Volume II was put together by Engels from several of Marx&apos;s drafts, and this chapter alone stitches
          together four of them. Since the original manuscripts were published in full in the scholarly MEGA edition,
          some scholars argue Engels smoothed over open questions and changed emphasis, so the book can seem more
          finished than Marx left it. Others think his edit was faithful.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "On Wednesday Mr. Moneybags' purse is empty. In which form is his capital?",
      options: ["Money-capital", "Productive capital: cotton, spindles and Sam at work", "It has vanished"],
      answer: 1,
      why: "Mid-week the capital is busy in the workshop. That is productive capital, P.",
    },
    {
      q: "What does C′ stand for in the circuit?",
      options: ["The cotton he buys", "The finished yarn, worth more than what went in", "The coins he ends with"],
      answer: 1,
      why: "C′ is commodity-capital: the finished goods, already holding surplus-value, waiting to be sold.",
    },
    {
      q: "Nobody buys the yarn this week. What happens to the circuit?",
      options: [
        "Nothing, the workshop carries on as usual",
        "It gets stuck at selling, and unsold piles block the next round",
        "The yarn turns into money anyway",
      ],
      answer: 1,
      why: "Capital only works while it keeps moving. Stuck at C′–M′, there is no money to buy the next week's cotton and labour.",
    },
  ],

  remember: [
    "Capital goes round a circuit: M–C…P…C′–M′.",
    "Three stages: buying, production, selling. The dots mean production interrupts the buying and selling.",
    "Three costumes: money-capital, productive capital, commodity-capital. One capital, three forms.",
    "The first purchase splits in two: means of production (M–MP) and labour-power (M–L).",
    "If the circuit stops anywhere, capital stops working.",
  ],

  terms: ["circuit-of-capital", "money-capital", "industrial-capital", "metamorphosis-of-capital"],

  source: (
    <p>
      Covers Volume II, Chapter 1 (&ldquo;The Circuit of Money-Capital&rdquo;): the three stages, the circuit as a
      whole. Volume II was assembled and edited by Engels after Marx&apos;s death; his notes show this chapter was put
      together from Marx&apos;s Manuscripts II, VII, VI and V. Marx&apos;s own figures are 10,000 lb of yarn made from
      &pound;372 of means of production and &pound;50 of labour-power, worth &pound;500 with &pound;78 of surplus-value;
      Tiny Town uses the smaller workshop numbers from Volume I (27 coins in, 30 out).
    </p>
  ),
};

export default chapter;
