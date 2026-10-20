import type { ChapterContent } from "@/components/ChapterTemplate";
import { FirstPushLongWait, OneWorkshopOrTheTown, ReplacedTwice } from "./ch18-animations";

const chapter: ChapterContent = {
  bigQuestion: "How does a whole town of workshops keep itself going, year after year, when nobody plans it?",

  story: (
    <>
      <p>
        Tiny Town has grown. At the top of the hill the Ironmaster runs the Forge, making machines and ovens. Mr.
        Moneybags runs his spinning mill. Mia bakes bread and Ava sews coats. Every one of them minds only their own
        shop, their own coins and their own customers.
      </p>
      <p>
        At the end of the year Grandpa Ned sits on the bench in the square and scratches his head. &ldquo;The mill
        needs a new machine from the Forge. The Forge&apos;s workers need bread. Mia needs a new oven. Sam needs a coat.
        Nobody sat down and planned any of this. So how does it all fit together?&rdquo;
      </p>
      <p>That is the question of the last part of Volume II. This chapter sets it up.</p>
    </>
  ),

  guess: (
    <p>
      When Mr. Moneybags sells his yarn and gets his coins back, is his workshop safe for next year? Or does something
      else have to happen first, somewhere else in the town?
    </p>
  ),

  struggle: [<OneWorkshopOrTheTown key="a" />, <ReplacedTwice key="b" />],
  reveal: [<FirstPushLongWait key="c" />],

  eli5: "Every workshop needs things that other workshops make, so all the circles of money are tangled together into one big circle. At the end of the year the town must get back the right number of coins and also the right things. Money gives the first push, and long jobs need lots of money waiting for a long time.",

  grownUp: (
    <>
      <p>
        Parts One and Two of Volume II followed a single capital: its circuit M&ndash;C&hellip;P&hellip;C&prime;&ndash;M&prime;
        and its turnover. But Marx stresses that every individual capital is only a fraction, &ldquo;endowed with
        individual life&rdquo;, of the aggregate <strong>social capital</strong>, just as every capitalist is one member
        of the capitalist class. The circuits of individual capitals &ldquo;intertwine, presuppose and necessitate one
        another&rdquo;, and their tangle is the movement of the social capital.
      </p>
      <p>
        That total movement contains more than capital buying from capital. Workers spend their wages on means of
        subsistence, and capitalists spend surplus-value on their own consumption. Money spent this way is{" "}
        <strong>revenue</strong>, not capital, yet the spending of wages is essential to the circulation of capital.
        Volume I simply assumed that the capitalist sells at value and finds the means of production he needs on the
        market. Part Three asks how the whole annual product can be replaced both <strong>in value</strong> and{" "}
        <strong>in kind</strong>.
      </p>
      <p>
        On money-capital, Marx makes two points. It is the <em>primus motor</em>, the first push of every business and
        its continual motor. But the scale of production is elastic: the same money can set more work in motion through
        longer or more intense labour, free natural forces, science and co-operation. Long projects need large money
        advances for a long time, a barrier broken by the credit system and stock companies, which also cause and suffer
        disturbances in the money market.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        No single boss decides how much of each thing the town makes, yet the town has to reproduce itself every year.
        To see how that can happen, Marx stops looking at one capital and looks at all of them at once, including the
        money workers and bosses spend on living.
      </p>
      <p>
        He also notes, in passing, that the need for money-capital comes from the capitalist form of production. In a
        society that planned production in common, he says, money-capital would disappear, and producers might receive
        paper vouchers for their labour-time that &ldquo;are not money&rdquo; and &ldquo;do not circulate&rdquo;. He gives
        this as an aside, not a worked-out plan.
      </p>
    </>
  ),

  critics: [
    {
      who: "Flows without labour value",
      point: (
        <p>
          Modern national accounts trace the same flows between industries and households, and Wassily Leontief&apos;s
          input-output tables, which drew on Quesnay&apos;s idea of a tableau, do it in great detail. Critics say this shows the
          flows can be studied in prices alone, without Marx&apos;s theory of value. Defenders reply that Marx&apos;s
          question was what those flows reveal about who works and who receives.
        </p>
      ),
    },
    {
      who: "Can vouchers replace money?",
      point: (
        <p>
          In the 1920s Ludwig von Mises and Friedrich Hayek argued that without money prices a planned economy cannot
          tell which uses of labour and materials are worthwhile. Socialist economists such as Oskar Lange replied that
          planners could imitate a market. The debate, set off partly by asides like this one, is still argued over.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What does Marx mean by the social capital?",
      options: [
        "The town's bank account",
        "All the individual capitals of a society taken together, tangled into one movement",
        "Money owned by the government",
      ],
      answer: 1,
      why: "Each workshop's capital is one fraction. Their circuits need each other and together make one big circuit.",
    },
    {
      q: "Sam spends his wage on bread. In Marx's words, is that money capital or revenue?",
      options: ["Capital", "Revenue", "Neither"],
      answer: 1,
      why: "Money spent on living, by workers or by bosses, is revenue. Money advanced again to produce is capital.",
    },
    {
      q: "Why must the mill's product be replaced in kind, not only in value?",
      options: [
        "Because coins are heavy",
        "Because the mill needs real cotton and machine parts, and Sam needs real bread, which someone must have made",
        "Because yarn never sells",
      ],
      answer: 1,
      why: "The coins have to add up, and the right things have to exist. Part Three asks how both can happen at once.",
    },
  ],

  remember: [
    "Each workshop's circuit is a fraction of the social capital. The circuits are tangled together and need each other.",
    "Money spent on living is revenue. Money advanced to produce more is capital.",
    "The year's product must be replaced twice: in value and in kind.",
    "Money-capital is the first push. Long jobs need big money advances, which credit supplies.",
  ],

  terms: ["social-capital", "revenue", "replacement-in-kind"],

  source: (
    <p>
      Covers Volume II, Chapter 18 (&ldquo;Introduction&rdquo; to Part Three), both sections: the subject investigated
      and the role of money-capital. From Marx&apos;s text: individual capitals as fractions &ldquo;endowed with
      individual life&rdquo; of the aggregate social capital; circuits that &ldquo;intertwine, presuppose and necessitate
      one another&rdquo;; money-capital as <em>primus motor</em>; the elasticity of production; the credit system and
      stock companies; the vouchers that &ldquo;are not money&rdquo; and &ldquo;do not circulate&rdquo;. Volume II was
      edited and published by Engels in 1885 from Marx&apos;s manuscripts; Engels notes that section II comes from
      Manuscript II. The yarn numbers follow the workshop used since Volume I, Chapter 7; the railway is this
      site&apos;s example of a long working period.
    </p>
  ),
};

export default chapter;
