import type { ChapterContent } from "@/components/ChapterTemplate";
import { IronOrCopper, TheMillAndTheTailor } from "./ch08-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why would a workshop full of people make more profit than one full of machines?",

  story: (
    <>
      <p>
        Tiny Town has grown. Mr. Moneybags&apos; mill hums with machines and has only a few workers to mind them. On
        the square there is a big tailoring workshop where Ava sews with hundreds of others, almost everything done by
        hand.
      </p>
      <p>
        One evening the two bosses compare notes. Each put in the same pile of coins. Each pays the same wage and works
        people the same long hours. &ldquo;So we must earn the same profit,&rdquo; says Mr. Moneybags.
      </p>
      <p>
        But when Bea adds up the books, the tailoring workshop has made six times as much surplus-value as the mill.
        Mr. Moneybags goes pale. &ldquo;All my lovely machines, and they make me less?&rdquo;
      </p>
      <p>Can that be right? And if it is, why don&apos;t we see it in real life?</p>
    </>
  ),

  guess: (
    <p>
      Both bosses put in 700 coins. The mill spends most of it on machines, the tailoring workshop most of it on wages.
      If both exploit their workers equally, which one makes more surplus-value? Why?
    </p>
  ),

  struggle: [<TheMillAndTheTailor key="a" />],
  reveal: [<IronOrCopper key="b" />],

  eli5: "Only people make new value, machines just pass on their own. So a workshop that spends its coins on many workers makes more surplus than one that spends them on machines. That gives different businesses very different profit rates.",

  grownUp: (
    <>
      <p>
        Part Two of Volume III asks how one general rate of profit forms across a whole country. Marx starts by
        assuming the rate of surplus-value and the working day are the same everywhere, and asks what happens when the{" "}
        <strong>composition of capital</strong> differs between branches.
      </p>
      <p>
        Composition has two sides. The <strong>technical composition</strong> is the physical mix: how many workers
        handle how much machinery and material. The <strong>value composition</strong> is the same mix measured in
        money, constant against variable capital. Marx calls the value composition, insofar as it reflects the
        technical one, the organic composition. Iron and copper work may need the same people and the same weight of
        metal, yet copper&apos;s higher price gives a different value composition: £100 of wages moving £200 or £400
        of constant capital, at 33⅓% or 20%.
      </p>
      <p>
        Since only living labour creates surplus-value, equal capitals with different compositions set different
        amounts of labour in motion and so produce different amounts of surplus-value. Marx&apos;s example: 600c + 100v
        against 100c + 600v, both 700. At 100%, the first makes 100 (14 2/7%), the second 600 (85 5/7%). If 90c + 10v
        made as much as 10c + 90v, he says, value would have to come from somewhere other than labour. Differences in
        turnover add further differences; the split into fixed and circulating capital does not, by itself.
      </p>
      <p>
        Then comes the twist. In real life such differences in profit rates &ldquo;do not exist&rdquo;: capital
        everywhere earns roughly the same rate. So it looks as if the theory of value contradicts reality. Chapter 9
        shows how Marx resolves this.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        If goods sold at their values, businesses that use many workers would earn far more per coin than businesses
        that use many machines. That follows directly from the idea that only labour creates new value.
      </p>
      <p>
        Marx admits openly that this is not what we see: profit rates tend to be equal. He states the puzzle
        honestly here and promises to solve it, rather than hiding it.
      </p>
    </>
  ),

  critics: [
    {
      who: "Böhm-Bawerk's challenge",
      point: (
        <p>
          The Austrian economist Eugen von Böhm-Bawerk, in <em>Karl Marx and the Close of His System</em> (1896),
          seized on exactly this puzzle. If machine-heavy and labour-heavy businesses earn the same profit rate in
          reality, he argued, then goods do not sell at their labour values, and Volume III contradicts Volume I.
          Marx&apos;s defenders reply that Marx never claimed individual prices equal values in capitalism, and that
          the next chapter is his answer.
        </p>
      ),
    },
    {
      who: "Testing with data",
      point: (
        <p>
          Some economists since the 1980s, such as Anwar Shaikh, have compared industry prices with estimated labour
          values and report that they line up closely. Others reply that such tests are built in a way that makes a
          close fit almost certain, so they prove less than they seem.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Two capitals of 700. One is 600c + 100v, the other 100c + 600v. Both exploit workers at 100%. Which makes more surplus-value?",
      options: ["The machine-heavy one", "The labour-heavy one, six times more", "They make the same"],
      answer: 1,
      why: "Surplus-value comes from living labour. 600 of wages sets six times as many workers in motion as 100.",
    },
    {
      q: "The Forge and the coppersmith use the same workers and the same weight of metal, but copper costs more. What is different?",
      options: ["The technical composition", "The value composition", "The rate of surplus-value"],
      answer: 1,
      why: "The physical mix is the same; only the money values differ. That changes the value composition and so the rate of profit.",
    },
    {
      q: "What puzzle does Marx admit at the end of this chapter?",
      options: [
        "That workers in different trades work different hours",
        "That in reality profit rates tend to be equal, even though compositions differ",
        "That machines create value after all",
      ],
      answer: 1,
      why: "Selling at values would give very different profit rates. In reality they even out, and Chapter 9 explains how.",
    },
  ],

  remember: [
    "Only living workers create new value; machines pass on the value they already have.",
    "Equal capitals with more wages and fewer machines produce more surplus-value.",
    "Technical composition is the physical mix; value composition is that mix measured in money.",
    "If goods sold at their values, profit rates would differ hugely between trades. In reality they don't, and that is the puzzle.",
  ],

  terms: ["technical-composition", "value-composition"],

  source: (
    <p>
      Covers Volume III, Chapter 8, the opening of Part Two. Volume III was assembled by Engels from Marx&apos;s
      manuscripts and published in 1894. Text checked against the marxists.org edition (Institute of Marxism-Leninism,
      1959). Marx&apos;s own numbers: equal capitals of 700 as 600c + 100v and 100c + 600v (14 2/7% and 85 5/7%); £100
      of wages moving £200 or £400 of constant capital (33⅓% and 20%); and the copper and iron example. Tiny Town&apos;s
      mill, tailoring workshop and coppersmith belong to this site.
    </p>
  ),
};

export default chapter;
