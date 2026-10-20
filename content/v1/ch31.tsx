import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheSlowRoadAndTheFastRoad, TreasureThatFloatedHome, WhoPaysTheKingsDebt } from "./ch31-animations";

const chapter: ChapterContent = {
  bigQuestion: "Where did the very first big fortunes come from?",

  story: (
    <>
      <p>
        At the Tiny Town fair, Mr. Moneybags likes to tell how his family got rich. &ldquo;My great-grandfather saved
        every penny,&rdquo; he says. &ldquo;Coin by coin, year by year. That is how fortunes are made.&rdquo;
      </p>
      <p>
        Bea the banker has a cupboard full of very old account books. That evening she shows Sam and Mia some of the
        pages. There are entries for ships sailing to faraway lands, for loans to the king, for taxes, and for gold that
        came back across the sea.
      </p>
      <p>
        &ldquo;Saving was part of it,&rdquo; Bea says quietly. &ldquo;But it was not most of it. Some of these pages are
        hard to read, because of what they are about.&rdquo;
      </p>
      <p>So how were the first great fortunes really made? Slowly, by saving, or quickly, some other way?</p>
    </>
  ),

  guess: (
    <p>
      Could a fortune big enough to build hundreds of factories come from saving alone? If not, where else might the
      money have come from, and who helped speed things up?
    </p>
  ),

  struggle: [<TheSlowRoadAndTheFastRoad key="a" />],
  reveal: [<TreasureThatFloatedHome key="b" />, <WhoPaysTheKingsDebt key="c" />],

  eli5: "A few people became rich very fast by taking treasure and people from faraway lands, and by lending to kings. Governments helped them with debts, taxes and laws. Marx says capitalism started with force, not just with saving.",

  grownUp: (
    <>
      <p>
        Some industrial capitalists grew slowly out of guild-masters, independent artisans or even wage labourers. But
        this &ldquo;snail&apos;s pace&rdquo; did not fit the world market that opened after the great discoveries at the
        end of the fifteenth century. Money capital built up by usury and trade had been held back by feudal rules in
        the country and guild rules in the towns. As those fell away, Marx says, the main moments of primitive
        accumulation followed: the looting of gold and silver in the Americas, the enslavement and destruction of the
        peoples there, the conquest and plunder of the East Indies, and the slave trade from Africa.
      </p>
      <p>
        In England at the end of the seventeenth century these methods were combined into a system: the{" "}
        <strong>colonial system</strong>, the <strong>national debt</strong>, modern taxation and{" "}
        <strong>protectionism</strong>. All of them used the power of the state to speed up the change from the old
        feudal way of producing to the capitalist one. The national debt, for example, let money lent to the state turn
        into easily traded bonds and steady interest, paid out of taxes that fell hardest on everyday necessities. The
        Bank of England, founded in 1694, began by lending to the government at 8 per cent. Protective tariffs were,
        in Marx&apos;s words, an artificial means of &ldquo;manufacturing manufacturers&rdquo;.
      </p>
      <p>
        Marx also describes how the first water-powered mills filled up: thousands of children, aged about 7 to 14, were
        sent from the workhouses of London and other cities to work in the mills of the north, often in terrible
        conditions and through the night. He ends the chapter with a sentence that many readers remember: if money comes
        into the world with a bloodstain on one cheek, capital comes &ldquo;dripping from head to foot, from every pore,
        with blood and dirt&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The fairy tale that the first capitalists simply saved harder than everyone else leaves out most of the story.
        Large fortunes were made fast, by conquest, slavery, plunder and state power, and then turned into capital at
        home. The state was not a neutral referee: its debts, taxes and tariffs pushed wealth towards a few and pushed
        many small producers into wage work.
      </p>
      <p>
        &ldquo;Force,&rdquo; Marx writes, &ldquo;is the midwife of every old society pregnant with a new one.&rdquo; He
        does not say force created the whole system on its own, but that it sped up a change that was already under way.
      </p>
    </>
  ),

  critics: [
    {
      who: "How much did slavery pay for industry?",
      point: (
        <p>
          In <em>Capitalism and Slavery</em> (1944), Eric Williams argued, close to Marx, that profits from the slave
          trade and plantations helped finance Britain&apos;s industrial revolution. Historians such as Stanley Engerman
          and Roger Anstey later estimated that those profits were too small a share of British investment to have been
          decisive. Others, such as Joseph Inikori, reply that Atlantic trade mattered through the markets and raw
          materials it created. Nobody in this debate denies the cruelty; they disagree about how much it explains.
        </p>
      ),
    },
    {
      who: "Was the periphery peripheral?",
      point: (
        <p>
          The economic historian Patrick O&apos;Brien (1982) argued that trade with colonies was too small to explain
          Europe&apos;s growth, and that home farming, technology and institutions mattered far more. Kenneth Pomeranz
          (2000) answered that coal and the resources of the New World were crucial to why Britain, rather than China,
          industrialised first. The size of the colonies&apos; contribution is still argued over today.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why was the “slow road” of saving not enough, according to Marx?",
      options: [
        "Saving was against the law",
        "It went at a snail's pace, too slowly for the new world market",
        "Nobody knew how to save",
      ],
      answer: 1,
      why: "Marx says some capitalists did grow slowly, but the world market that opened after the 1400s needed far faster ways.",
    },
    {
      q: "Which of these is NOT one of the four levers Marx names?",
      options: ["The national debt", "Protection for home industry", "A tax on capitalists' profits"],
      answer: 2,
      why: "His four are colonies, the national debt, heavy taxes (mostly on necessities) and protection. Taxes fell mostly on ordinary people.",
    },
    {
      q: "How did the national debt help lenders get richer?",
      options: [
        "They earned interest, paid out of everyone's taxes",
        "The king gave them his crown",
        "They had to work in the bank",
      ],
      answer: 0,
      why: "The government paid interest every year, and raised the money through taxes, especially on everyday things like food.",
    },
  ],

  remember: [
    "Some capitalists grew slowly by saving, but most early fortunes were made much faster.",
    "Colonies, the slave trade and plunder sent treasure back to Europe, where it became capital.",
    "The state helped with four levers: colonies, national debt, heavy taxes and protection.",
    "Marx: force is the midwife of a new society, and capital came into the world “dripping... with blood and dirt”.",
  ],

  terms: ["colonial-system", "national-debt", "protectionism"],

  source: (
    <p>
      Covers Volume I, Chapter 31 (&ldquo;The Genesis of the Industrial Capitalist&rdquo;). Marx&apos;s own points: the
      snail&apos;s pace of the gradual road; usurer&apos;s and merchant&apos;s capital; gold and silver in America, the
      East Indies and the slave trade; the colonial system, national debt, taxation and protection combined in England
      at the end of the seventeenth century; the Bank of England (1694) lending at 8%; workhouse children aged 7 to 13
      or 14 sent to northern mills (quoting Fielden); Liverpool&apos;s slave ships, 15 in 1730 to 132 in 1792;
      &ldquo;force is the midwife&rdquo;; &ldquo;dripping... with blood and dirt&rdquo;. Bea&apos;s account books and
      Mr. Moneybags&apos; family story belong to this site.
    </p>
  ),
};

export default chapter;
