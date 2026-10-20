import type { ChapterContent } from "@/components/ChapterTemplate";
import { MachinesDoubleLife, OxForPloughing, WhatStaysWhatFlows } from "./ch08-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does the cotton have to be bought again every day, but the spinning machine only every few years?",

  story: (
    <>
      <p>
        Clerk Pim keeps Mr. Moneybags&apos; books, and today he is puzzled. &ldquo;Sir, every single day we pay for
        cotton, and every week we pay Sam. But the spinning machine we bought years ago, and we have not paid for it
        since. Is the machine free now?&rdquo;
      </p>
      <p>
        &ldquo;Free!&rdquo; snorts Mr. Moneybags. &ldquo;That machine cost a fortune. One day it will wear out, and then I
        will need a fortune again to buy a new one.&rdquo;
      </p>
      <p>
        Pim scratches his head. The cotton disappears into the yarn every day. The machine stays put, humming away. Yet
        both are part of the boss&apos;s capital. How does the machine&apos;s cost get back into his purse?
      </p>
    </>
  ),

  guess: (
    <p>
      The cotton goes into the yarn completely, every day. The machine stays in the workshop for years. How do you think
      the machine&apos;s value gets into the yarn, and back into Mr. Moneybags&apos; purse?
    </p>
  ),

  struggle: [<WhatStaysWhatFlows key="a" />, <MachinesDoubleLife key="b" />],
  reveal: [<OxForPloughing key="c" />],

  eli5: "Some things a boss buys get used up all at once, like cotton, and must be bought again and again. Others, like a machine, last for years and give away their value slowly, a little each day. Marx calls the first kind circulating capital and the second kind fixed capital.",

  grownUp: (
    <>
      <p>
        Instruments of labour, such as buildings and machines, keep their own shape while they work. They pass on value
        to the product only as fast as they wear out, so a part of the capital-value stays <em>fixed</em> in them until
        they are worn out. Marx calls this part <strong>fixed capital</strong>. Raw materials, auxiliary materials like
        coal, and the money laid out on labour-power hand on their whole value to each product and must be renewed every
        time: <strong>circulating capital</strong>.
      </p>
      <p>
        The fixed capital&apos;s value therefore lives a double life. The part lost through{" "}
        <strong>wear and tear</strong> circulates with the goods and drips back as money, building up a{" "}
        <strong>reserve fund</strong>; the rest stays in the machine. Marx&apos;s example is a machine worth £10,000 that
        lasts ten years: its turnover takes ten years, while the circulating capital turns over many times. Two machines
        of equal value, one lasting five years and one ten, hand on value at twice and once the rate. Machines also need
        repairs, and they can lose value early when cheaper or better ones appear, which Marx calls{" "}
        <strong>moral depreciation</strong>.
      </p>
      <p>
        Two warnings. First, whether something is fixed depends on how its value circulates, not on what it is: an ox
        pulling a plough is fixed capital, an ox fattened for beef is circulating; a moving locomotive is fixed, seed
        lying in the ground for a year is not. Second, fixed and circulating is a different split from constant and
        variable: cotton is constant capital yet circulating. Only productive capital divides this way; money-capital
        and commodity-capital are not &ldquo;circulating capital&rdquo; in this sense.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Marx says the economists before him, from Adam Smith on, muddled two different questions. Fixed versus
        circulating is about <em>how value travels back</em> to the capitalist. Constant versus variable is about{" "}
        <em>where new value comes from</em>. Mixing them up hides the fact that only the part spent on labour-power
        creates surplus-value, because wages get lumped in with cotton.
      </p>
      <p>
        He also shows how big fixed capital makes capital lumpier and slower: large sums are thrown into the market all
        at once and come back only bit by bit, over many years. That slow rhythm will matter for crises.
      </p>
    </>
  ),

  critics: [
    {
      who: "Depreciation by prices",
      point: (
        <p>
          Piero Sraffa (1960) and others treat an ageing machine as a kind of by-product that comes out of each year&apos;s
          production. On this view how fast a machine loses value is not fixed by its physical wear at all: it depends on
          prices and the rate of profit, so the &ldquo;slice of value&rdquo; it passes on each year can vary a lot.
          Marx&apos;s supporters reply that his averages describe the normal case well enough.
        </p>
      ),
    },
    {
      who: "Accountants' view",
      point: (
        <p>
          Modern accounting and most economists value a machine by the income it is expected to earn in the future, not
          by the labour it took to make. They agree with Marx&apos;s mechanics, that the machine&apos;s cost is recovered
          slowly through sales, but not with his claim that only labour creates the value being recovered.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which of these is fixed capital in Mr. Moneybags' workshop?",
      options: ["The cotton", "Sam's wage", "The spinning machine"],
      answer: 2,
      why: "The machine keeps its shape for years and hands on its value bit by bit. Cotton and wages go out whole every time.",
    },
    {
      q: "Is Sam's wage constant or variable, fixed or circulating?",
      options: ["Constant and fixed", "Variable and circulating", "Variable and fixed"],
      answer: 1,
      why: "It is variable because labour-power makes new value, and circulating because it is paid out whole and renewed each week.",
    },
    {
      q: "An ox pulls Grandpa Ned's plough for years. Another ox is fattened for beef. Which ox is fixed capital?",
      options: ["The one that pulls the plough", "The one fattened for beef", "Both, because they are both oxen"],
      answer: 0,
      why: "What counts is how its value travels: the working ox passes on value bit by bit, the beef ox all at once.",
    },
  ],

  remember: [
    "Fixed capital (like a machine) stays put and gives away its value slowly, through wear and tear.",
    "Circulating capital (like cotton and wages) gives away all its value every time and must be renewed.",
    "A machine's value lives a double life: part still in the machine, part back as money in a fund.",
    "Better machines can make old ones lose value early. Marx calls this moral depreciation.",
    "Fixed and circulating is a different sorting from constant and variable.",
  ],

  terms: ["fixed-capital", "circulating-capital", "wear-and-tear", "moral-depreciation"],

  source: (
    <p>
      Covers Volume II, Chapter 8 (&ldquo;Fixed Capital and Circulating Capital&rdquo;), assembled by Engels from
      Marx&apos;s manuscripts. From the text: instruments of labour fixing capital-value; two machines of equal value
      lasting five and ten years; the machine worth £10,000 lasting ten years and its money reserve fund; the ox as
      beast of toil versus the ox that is eaten; the locomotive and ship that move yet are fixed; seeds that are not
      fixed capital; the confusion of fixed and circulating with constant and variable; repairs; and moral depreciation,
      with Lardner&apos;s cars and locomotives costing £30,000 after ten years instead of £40,000. The daily figures in
      animation 8.1 come from this site&apos;s workshop; Clerk Pim is a one-off character.
    </p>
  ),
};

export default chapter;
