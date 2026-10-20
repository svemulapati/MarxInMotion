import type { ChapterContent } from "@/components/ChapterTemplate";
import { DoesTomAddValue, TomBuysTheBatch } from "./ch16-animations";

const chapter: ChapterContent = {
  bigQuestion: "Tom never spins a single thread. So how can his shop be a business that makes money?",

  story: (
    <>
      <p>
        Tom has kept the shop on the corner of the square for years. Lately his business has grown. Every month he buys a
        whole cartload of yarn from Mr. Moneybags, stacks it on his shelves, and sells it bit by bit to tailors and
        weavers.
      </p>
      <p>
        Sam watches him one afternoon. &ldquo;Tom, you don&apos;t spin anything. You don&apos;t weave anything. You just buy
        yarn and sell the same yarn again. Where does your money come from?&rdquo;
      </p>
      <p>
        Tom laughs. &ldquo;I add a little to the price, of course!&rdquo; But Sam has read Volume I. If prices only reflect
        value, and Tom adds nothing to the yarn, how can a bigger price be fair? And if everyone just added a little on
        top, wouldn&apos;t they all cancel out?
      </p>
    </>
  ),

  guess: (
    <p>
      Does Tom make the yarn worth more by putting it on his shelves? If not, why would Mr. Moneybags happily sell to him
      instead of selling the yarn himself?
    </p>
  ),

  struggle: [<TomBuysTheBatch key="a" />],
  reveal: [<DoesTomAddValue key="b" />],

  eli5: "Tom buys yarn from the mill and sells it on to the people who need it. He does not make the yarn worth more. But by buying the whole batch at once, he helps the mill get its money back faster.",

  grownUp: (
    <>
      <p>
        Volume III, Part IV turns to <strong>merchant&apos;s capital</strong>. It comes in two kinds: commercial capital,
        which deals in commodities (this chapter), and money-dealing capital (Chapter 19). Marx says that when the job of
        turning commodity-capital into money becomes the separate business of a special group of capitalists, by a division
        of labour, then commodity-capital becomes <strong>commercial capital</strong>.
      </p>
      <p>
        Marx&apos;s example: a dealer with £3,000 buys 30,000 yards of linen from a manufacturer at 2s. a yard and sells it
        on. The manufacturer has been paid, so for him the sale is done; but the linen itself still waits on the market for
        its final buyer. The merchant&apos;s circuit is M&ndash;C&ndash;M&prime;: buy to sell for more, with the same goods
        changing hands twice.
      </p>
      <p>
        Transport, storage and packing can continue production inside circulation (as Volume II showed), so Marx strips
        them away to find commercial capital in pure form. Pure buying and selling, he concludes, &ldquo;does not create
        either value or surplus-value, at least not directly&rdquo;. Indirectly it can help: by shortening circulation time,
        expanding the market and freeing industrial capital from tying up money in unsold stock, it raises the rate of
        profit of industrial capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Shops and wholesalers are useful, even necessary, but they do not make goods more valuable. They speed up the
        journey from maker to user. So any profit a merchant makes cannot come from creating new value; it must be a share
        of value created somewhere else. Chapter 17 explains which share, and how Tom gets it.
      </p>
    </>
  ),

  critics: [
    {
      who: "Selling is productive",
      point: (
        <p>
          Most economists today count trade and retail as productive like any other industry: they create value by putting
          goods where and when people want them, and they appear in national accounts as part of output. To them, the line
          Marx draws between producing value and merely realising it is artificial. Marx&apos;s defenders answer that he
          does count transport and storage as productive, and draws the line only around pure buying and selling.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why does Mr. Moneybags like selling his whole batch to Tom?",
      options: ["Tom pays more than the yarn is worth", "He gets his money back at once and can keep the mill running", "Tom improves the yarn"],
      answer: 1,
      why: "Tom's money turns the yarn into coins straight away, so the mill does not have to wait for customers one by one.",
    },
    {
      q: "Does Tom make the yarn worth more by stocking and selling it?",
      options: ["Yes, it doubles in value", "No, pure buying and selling creates no value", "Only on market days"],
      answer: 1,
      why: "Marx says merchant's capital creates neither value nor surplus-value directly. The yarn is still worth 30.",
    },
    {
      q: "How can a merchant still help raise the rate of profit?",
      options: ["By shortening the time money waits as unsold goods", "By lowering the quality of goods", "By printing money"],
      answer: 0,
      why: "Less money stuck in circulation means more of the capital is working in production.",
    },
  ],

  remember: [
    "Merchant's capital is capital that only buys and sells: M–C–M′.",
    "When selling becomes a separate business, commodity-capital becomes commercial capital.",
    "Pure buying and selling creates no value, though transport and storage can.",
    "The merchant helps industry indirectly by speeding up circulation.",
  ],

  terms: ["commercial-capital", "merchants-capital"],

  source: (
    <p>
      Covers Volume III, Chapter 16 (&ldquo;Commercial Capital&rdquo;), the first chapter of Part IV. Volume III was
      assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894. Marx&apos;s own example uses a
      linen dealer with £3,000 buying 30,000 yards at 2s.; Tiny Town uses Mr. Moneybags&apos; yarn and the 30-coin skein
      from earlier chapters instead. Quotations follow the International Publishers / Progress edition on marxists.org.
    </p>
  ),
};

export default chapter;
