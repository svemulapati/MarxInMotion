import type { ChapterContent } from "@/components/ChapterTemplate";
import { EveryoneAddsTen, HicRhodus, TheSwindle } from "./ch05-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can you get richer just by buying and selling?",

  story: (
    <>
      <p>
        Mr. Moneybags is determined to turn his 100 coins into more. He spends a whole week in Tiny Town&apos;s market
        trying every trick he knows.
      </p>
      <p>
        On Monday he adds a little extra to all his prices. On Tuesday he notices that Tom has done exactly the same, so
        everything he buys costs more too. On Wednesday he talks Tom into a bad swap and goes home grinning. But Tom is
        poorer by just as much as Moneybags is richer, and the town as a whole has not gained a single coin.
      </p>
      <p>
        On Saturday evening Grandpa Ned finds him counting coins on the church steps. &ldquo;You can shuffle money around
        all you like,&rdquo; says Ned. &ldquo;But you can&apos;t grow a field by swapping it. Something has to be
        made.&rdquo;
      </p>
      <p>Is Ned right? Is there any way to get richer in the market, if everybody plays fair?</p>
    </>
  ),

  guess: (
    <p>
      If every seller in Tiny Town adds 10 coins to every price, who ends up richer? And if Moneybags cheats Tom, is
      Tiny Town as a whole any richer than before?
    </p>
  ),

  struggle: [<EveryoneAddsTen key="a" />, <TheSwindle key="b" />],
  reveal: [<HicRhodus key="c" />],

  eli5: "Fair swaps can't make you richer, because you give and get the same. Cheating only moves money from one pocket to another. So the extra money must come from somewhere else.",

  grownUp: (
    <>
      <p>
        Chapter 4 ended with a puzzle: how does M become M&prime;? Chapter 5 shows that the answer cannot be found in the{" "}
        <strong>sphere of circulation</strong>, the world of buying and selling, taken on its own.
      </p>
      <p>
        If things swap at their values, an <strong>exchange of equivalents</strong>, then nobody gains in value. Each
        side may get something more useful to them, but the values are equal. What if sellers had a special privilege to
        sell 10 per cent above value? Then everyone gains 10 as a seller and loses 10 as a buyer, and nothing changes.
        What if one person cheats another, as when Moneybags gets corn worth 50 for cider worth 40? Then value moves from
        Tom to Moneybags, but the total stays 90. Marx says the capitalist class as a whole cannot get rich by
        over-reaching each other.
      </p>
      <p>
        Nor can value grow outside circulation by itself. A producer can add value by adding work, turning leather into
        boots (or cloth into a coat), but the leather doesn&apos;t grow in value by itself. So Moneybags is set a
        three-part test: buy at value, sell at value, and still end up with more. Marx ends with an old Latin dare,{" "}
        <em>Hic Rhodus, hic salta!</em>: here is the problem, jump here.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Profit can&apos;t be explained by buying cheap and selling dear. For one person that works, but for the whole
        group of buyers and sellers the gains and losses cancel out. If profit happens across a whole society, year after
        year, it needs a source that adds new value instead of moving old value around.
      </p>
      <p>
        Marx also notes that merchants and moneylenders are older than capitalism, and that their profits look like
        cheating from this angle. He promises to explain them later, as offshoots of the main source.
      </p>
    </>
  ),

  critics: [
    {
      who: "Gains from trade",
      point: (
        <p>
          Most economists say voluntary trade makes both sides better off, because each person values what they get
          more than what they give up. If value is about what people want, rather than hours of work, then trade itself
          creates value. Marx would agree both sides can gain in usefulness, but he is asking about value measured in
          work, which a swap cannot increase.
        </p>
      ),
    },
    {
      who: "The merchant's service",
      point: (
        <p>
          Economists such as Israel Kirzner argue that spotting a price gap, buying where something is cheap and selling
          where it is wanted, is a real service that moves goods to people who need them, and profit is its reward.
          Marx deals with merchant profit later, in Volume III, as a share of value made elsewhere.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Everyone in Tiny Town adds 10 per cent to their prices. Who gets richer?",
      options: ["Every seller", "Nobody: you win as a seller and lose as a buyer", "Only Mr. Moneybags"],
      answer: 1,
      why: "Everyone is both a seller and a buyer. The extra you charge is cancelled by the extra you pay.",
    },
    {
      q: "Moneybags swaps cider worth 40 for Tom's corn worth 50. What happens to Tiny Town's total value?",
      options: ["It grows by 10", "It stays at 90; it just moves around", "It shrinks"],
      answer: 1,
      why: "Moneybags' gain is exactly Tom's loss. Cheating moves value, it does not make it.",
    },
    {
      q: "What does Marx's puzzle ask Moneybags to do?",
      options: ["Cheat more cleverly", "Buy and sell at fair value, and still end up with more", "Hide his money in a chest"],
      answer: 1,
      why: "That is the whole puzzle: no tricks allowed, and yet more money must come out than went in.",
    },
  ],

  remember: [
    "Fair swaps can't make anyone richer in value: equal goes for equal.",
    "Raising every price helps nobody. What you gain selling, you lose buying.",
    "Cheating only moves value from one pocket to another. The total stays the same.",
    "So the extra must come from something Moneybags buys and then uses. That is the next chapter.",
  ],

  terms: ["sphere-of-circulation", "exchange-of-equivalents"],

  source: (
    <p>
      Covers Volume I, Chapter 5 (&ldquo;Contradictions in the General Formula&rdquo;; Moore and Aveling:
      &ldquo;Contradictions in the General Formula of Capital&rdquo;). Marx&apos;s own examples: the seller&apos;s
      &ldquo;privilege&rdquo; of selling 10 per cent above value; A selling wine worth £40 for corn worth £50, with the
      total staying £90 (cider here); leather made into boots; and the closing &ldquo;Hic Rhodus, hic salta!&rdquo;.
      This is also where Marx first names &ldquo;our friend, Moneybags&rdquo;. Ava&apos;s coat stands in for the boots.
    </p>
  ),
};

export default chapter;
