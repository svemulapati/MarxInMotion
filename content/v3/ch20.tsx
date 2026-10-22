import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheOldestKindOfCapital, TwoRoadsOutOfTheOldWorld } from "./ch20-animations";

const chapter: ChapterContent = {
  bigQuestion: "Merchants are older than factories, so why don't merchants run the world any more?",

  story: (
    <>
      <p>
        Grandpa Ned loves telling stories about the old days. &ldquo;Before there was any mill in Tiny Town,&rdquo; he
        says, &ldquo;there were ships. Merchants sailed from the Spice Coast to the Cloth Hills and back. They never
        grew a thing or wove a thread, and they were the richest people anywhere.&rdquo;
      </p>
      <p>
        Tom the shopkeeper is listening, and he likes this story very much. &ldquo;So buying and selling is the real way
        to get rich!&rdquo; he says.
      </p>
      <p>
        Ned shakes his head. &ldquo;Then why is the richest man in Tiny Town today Mr. Moneybags, who owns a mill, and not
        a merchant like you?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Merchants were rich for thousands of years. Then factory owners took the lead. What do you think changed? Did
      trade make the factories, or did the factories change trade?
    </p>
  ),

  struggle: [<TheOldestKindOfCapital key="a" />],
  reveal: [<TwoRoadsOutOfTheOldWorld key="b" />],

  eli5: "Merchants buying cheap and selling dear are much older than factories. For a long time they grew rich by standing between faraway peoples, and often by force. Once factories arrived, making things became the boss and trade had to follow.",

  grownUp: (
    <>
      <p>
        Commerce, and merchant&apos;s capital itself, is older than the capitalist mode of production. Marx calls it
        &ldquo;historically the oldest free state of existence of capital&rdquo;. It only needs money and goods to
        circulate; it does not care how the goods were made, whether by peasants, guild craftsmen or slaves.
      </p>
      <p>
        Marx states a law: the independent development of merchant&apos;s capital is <em>inversely</em> proportional to the
        development of capitalist production. It flourished most in the <strong>carrying trade</strong> of the
        Venetians, Genoese and Dutch, who profited by standing between less developed peoples and exploiting both. In
        that setting commercial profit often came from out-bargaining and cheating, and where merchant&apos;s capital
        dominated it was tied to &ldquo;plundering, piracy, kidnapping slaves, and colonial conquest&rdquo;.
      </p>
      <p>
        The 16th and 17th centuries&apos; world market helped bring down feudalism, but the outcome depended on what was
        already growing at home. Under modern industry, Marx says, &ldquo;it is not commerce ... which revolutionises
        industry, but industry which constantly revolutionises commerce&rdquo;. Holland, the ruling trading nation,
        declined as merchant&apos;s capital became subordinate to industrial capital, as in England.
      </p>
      <p>
        There were two ways out of feudalism. Either the producer becomes merchant and capitalist, &ldquo;the really
        revolutionising path&rdquo;; or the merchant takes control of production, like the English clothier who sold wool to
        weavers and bought their cloth. The second way keeps the old methods in place and &ldquo;only worsens the condition
        of the direct producers&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Trade by itself does not create capitalism. Merchants can get rich for centuries without changing how anything
        is made. Capitalism really starts when production itself is reorganised around wage labour and profit.
      </p>
      <p>
        Once that happens, the merchant becomes the junior partner. His profit becomes a share of the surplus-value made
        in industry, which is what Chapters 16 to 18 described.
      </p>
    </>
  ),

  critics: [
    {
      who: "Trade-led historians",
      point: (
        <p>
          Historians in the tradition of Adam Smith, and later writers such as Henri Pirenne, gave trade and towns a
          leading role in breaking up feudalism. In the 1950s the &ldquo;transition debate&rdquo; between Paul Sweezy,
          who stressed trade, and Maurice Dobb, who stressed changes on the land, showed that even Marxists disagree
          about how much trade mattered.
        </p>
      ),
    },
    {
      who: "Merchants as builders",
      point: (
        <p>
          Some economic historians argue that merchant houses and trading companies helped build banking, insurance and
          shipping that industry later relied on. They see merchants less as parasites and more as early organisers of
          markets, while agreeing that colonial trade involved great violence.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which came first in history, according to Marx?",
      options: ["Factories", "Merchant's capital", "Banks with paper money"],
      answer: 1,
      why: "Marx calls merchant's capital the oldest free form of capital, far older than capitalist production.",
    },
    {
      q: "What is the carrying trade?",
      options: [
        "Carrying bricks to build a mill",
        "Buying goods from one people and selling them to another, profiting from both",
        "A trade union",
      ],
      answer: 1,
      why: "The Venetians, Genoese and Dutch grew rich standing in the middle between faraway peoples.",
    },
    {
      q: "Tom sells Leo wool and buys back his cloth. What does Marx say this road does?",
      options: [
        "It quickly builds big factories",
        "It keeps the old ways and makes the weavers poorer",
        "It makes Leo a capitalist",
      ],
      answer: 1,
      why: "The merchant's road does not change how things are made. The producer's road is “the really revolutionising path”.",
    },
  ],

  remember: [
    "Merchant's capital is the oldest form of capital: buy cheap, sell dear.",
    "It flourished most where production was least developed, in the carrying trade, and was often tied to force and plunder.",
    "Under modern industry, industry drives trade. Holland the trader fell behind England the industrial nation.",
    "Of the two roads out of feudalism, Marx calls the producer becoming a capitalist “the really revolutionising path”.",
  ],

  terms: ["carrying-trade"],

  source: (
    <p>
      Covers Volume III, Chapter 20 (&ldquo;Historical Facts about Merchant&apos;s Capital&rdquo;), checked against the
      International Publishers edition on marxists.org. Volume III was assembled by Engels from Marx&apos;s
      manuscripts and published in 1894. Marx&apos;s own examples: the Venetians, Genoese and Dutch carrying trade;
      Carthage, Rome and the Portuguese; England and Holland; the English 17th-century clothier; &ldquo;the really
      revolutionising path&rdquo;. The Spice Coast and Cloth Hills are this site&apos;s own.
    </p>
  ),
};

export default chapter;
