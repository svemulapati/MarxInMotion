import type { ChapterContent } from "@/components/ChapterTemplate";
import { AParasiteNotABuilder, TenPerCentToFive, TwoKindsOfBorrower } from "./ch36-animations";

const chapter: ChapterContent = {
  bigQuestion: "Before there were banks, who lent money, and why did everyone hate them?",

  story: (
    <>
      <p>
        Grandpa Ned likes to tell stories by the fire. Tonight he tells one his own grandfather told him, from long
        before Bea opened her bank.
      </p>
      <p>
        &ldquo;In those days,&rdquo; he says, &ldquo;when the harvest failed, a farmer had to go to the moneylender
        in the next valley. He would lend you ten coins, and next year you owed him thirty. The lord up at the castle
        borrowed from him too, for his feasts and his wars.&rdquo;
      </p>
      <p>
        &ldquo;What happened to them?&rdquo; asks Sam. Grandpa Ned pokes the fire. &ldquo;The farmer lost his field.
        The lord lost his castle. And the moneylender? He just sat on a bigger and bigger chest of coins.&rdquo;
      </p>
      <p>So was the old moneylender the same as Bea the banker? Marx says no, and this chapter explains why.</p>
    </>
  ),

  guess: (
    <p>
      The moneylender got rich, but did he build any workshops or invent any better ploughs? What do you think his
      money did to the way people farmed?
    </p>
  ),

  struggle: [<TwoKindsOfBorrower key="a" />, <AParasiteNotABuilder key="b" />],
  reveal: [<TenPerCentToFive key="c" />],

  eli5: "Long ago, moneylenders lent to poor farmers and to rich lords, and charged so much that both lost everything. The moneylender got rich but never made farming any better. Modern banks grew up partly to make borrowing cheaper for trade and work.",

  grownUp: (
    <>
      <p>
        <strong>Usury</strong>, or usurer&apos;s capital, is interest-bearing capital in its old form, from before
        capitalism. Marx says it had two typical forms: lending to &ldquo;extravagant members of the upper classes,
        particularly landowners&rdquo;, and lending to small producers who still owned their tools, the artisan
        &ldquo;but mainly the peasant&rdquo;. Both ruin the borrower, and both pile up large sums of money in a few
        hands.
      </p>
      <p>
        Usury does not change the way things are produced. In Marx&apos;s words, it &ldquo;does not alter the mode of
        production, but attaches itself firmly to it like a parasite and makes it wretched.&rdquo; It can swallow
        everything a peasant produces above bare survival, and so it paralyses the forces of production instead of
        developing them. Marx&apos;s historical example is ancient Rome, where the patricians&apos; usury ruined the
        plebeian small farmers until slave estates replaced them.
      </p>
      <p>
        Usury did play a part in the birth of capitalism, by ruining feudal lords and small producers and gathering
        money into capital. But the <strong>credit system</strong> grew up, Marx says, &ldquo;as a reaction against
        usury&rdquo;. In the Middle Ages the Church forbade lending at interest. Later England capped it: 10 per cent
        under Henry VIII, 8 under James I, 6 under Charles II and 5 under Queen Anne (Marx quotes this from the banker
        Gilbart). Merchants in Venice and Genoa formed credit associations to free trade from the moneylenders. For
        Marx, all this meant one thing: subordinating interest-bearing capital to the needs of industrial and
        commercial capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Lending at interest is far older than capitalism, but its role changed completely. The old usurer sucked
        wealth out of a way of life without changing it. Under capitalism, credit is tamed and put to work serving
        industry, and the rate of interest comes to depend on the rate of profit, not the other way round.
      </p>
      <p>
        Marx warns against simply condemning interest as the church fathers, Luther or early socialists did. The
        modern credit system is not the end of exploitation by lenders; it is that exploitation reorganised to fit
        the needs of capital.
      </p>
    </>
  ),

  critics: [
    {
      who: "Historians of medieval finance",
      point: (
        <p>
          Historians such as Raymond de Roover showed that medieval merchants found many legal ways around the ban on
          interest, for example through bills of exchange, and that much medieval credit was ordinary business
          lending, not ruinous usury. On this view, the picture of a world run by parasitic moneylenders is too dark.
        </p>
      ),
    },
    {
      who: "Economists of small loans",
      point: (
        <p>
          Today, small loans to poor farmers and traders (microfinance) are often defended as a way to help them
          grow. Careful studies, for example by Abhijit Banerjee and Esther Duflo, found the benefits real but usually
          modest, and some borrowers did fall into debt traps, so the evidence partly supports and partly challenges
          Marx&apos;s view.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which two kinds of people did old-style moneylenders mainly lend to, according to Marx?",
      options: [
        "Factory owners and bankers",
        "Spendthrift lords and small producers like peasants",
        "Children and teachers",
      ],
      answer: 1,
      why: "Marx names extravagant landowners and small producers who owned their own tools, mainly peasants.",
    },
    {
      q: "What did usury do to the way people farmed or made things?",
      options: ["It made farming much more modern", "It changed nothing, but made producers poorer", "It invented the factory"],
      answer: 1,
      why: "Marx: it does not alter the mode of production, but clings to it like a parasite and makes it wretched.",
    },
    {
      q: "In England, what was the legal maximum rate of interest under Queen Anne?",
      options: ["10 per cent", "8 per cent", "5 per cent"],
      answer: 2,
      why: "The cap fell from 10 under Henry VIII to 8, then 6, then 5 per cent under Queen Anne.",
    },
  ],

  remember: [
    "Usury is lending at interest in its old form, before capitalism.",
    "It ruined both spendthrift lords and small producers, and piled money up in the lender's chest.",
    "It never changed how things were made. Marx calls it a parasite.",
    "Modern credit grew up against usury, to make lending serve trade and industry.",
  ],

  terms: ["usury"],

  source: (
    <p>
      Covers Volume III, Chapter 36 (&ldquo;Pre-Capitalist Relationships&rdquo;), including its section on interest in
      the Middle Ages. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in
      1894; in his preface Engels says this chapter, unlike its neighbours in Part V, &ldquo;was quite complete&rdquo;.
      The two forms of usury, the parasite image, ancient Rome, Venice and Genoa, and the reaction against usury are
      Marx&apos;s; the sequence of English interest caps is quoted by Marx from the banker Gilbart&apos;s{" "}
      <em>History and Principles of Banking</em>. The grain sacks and the &ldquo;lend 10, owe 30&rdquo; figures are
      example numbers, and Grandpa Ned&apos;s story belongs to this site. English text: the International Publishers
      edition on marxists.org.
    </p>
  ),
};

export default chapter;
