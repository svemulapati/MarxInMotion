import type { ChapterContent } from "@/components/ChapterTemplate";
import { InterestGoesTheOtherWay, SoundestBeforeTheCrash } from "./ch30-animations";

const chapter: ChapterContent = {
  bigQuestion: "When money is scarce, is the town really poorer?",

  story: (
    <>
      <p>
        It is the best summer anyone in Tiny Town can remember. New mills are going up, a second railway is planned, and
        every boss has a stack of bills that all seem to get paid on time.
      </p>
      <p>
        At a grand dinner, the cleverest bankers raise their glasses. &ldquo;Business has never been so sound!&rdquo; Bea
        clinks her glass too, but she is quietly counting her gold.
      </p>
      <p>
        A month later, a ship arrives with bad news from across the sea. Suddenly nobody can pay anybody. Mills stand
        silent, full of yarn no one will buy, and Bea has almost nothing left to lend.
      </p>
      <p>
        The mills, the machines and the workers are all still there. So what exactly has run out?
      </p>
    </>
  ),

  guess: (
    <p>
      When do you think borrowing is cheapest: in a boom, or just after a crash? And when is it most expensive? Make a
      guess, then watch the lines.
    </p>
  ),

  struggle: [<InterestGoesTheOtherWay key="a" />],
  reveal: [<SoundestBeforeTheCrash key="b" />],

  eli5: "After a crash there is lots of money to lend but nobody wants to borrow, and in a crash everybody needs money and nobody will lend. Paper promises can make business look healthiest right before it falls. Marx thought the deepest problem was that most people cannot afford to buy all that gets made.",

  grownUp: (
    <>
      <p>
        Marx asks two questions. Does a pile-up of money-capital (a &ldquo;plethora&rdquo;) show real accumulation of
        capital? And does a shortage of money show a shortage of real capital? He starts from the papers of the last two
        chapters: government bonds and shares are paper duplicates of capital already spent or of real capital that does
        not change hands when they do.
      </p>
      <p>
        The base of the credit system is <strong>commercial credit</strong>, the bills capitalists give each other. Its
        limits are the wealth of the businesses and how fast their money flows back. In prosperity it stretches, partly by
        bills drawn on bills and goods bought only to make bills, so that business looks almost too sound on the eve of a
        crash, as the bank directors told Parliament a month before the crisis of August 1857.
      </p>
      <p>
        Over the cycle, interest is low after a crisis, low but rising in recovery, average in the boom when borrowers
        without capital appear, and highest in the crisis, when idle industrial capital sits beside an almost complete
        absence of loan capital. So loan capital moves opposite to industrial capital. A real lack of productive capital
        happens only with general crop failures; otherwise crises come from over-production pushed by credit. The ultimate
        reason, Marx writes, is &ldquo;the poverty and restricted consumption of the masses&rdquo; set against production
        expanding as if society&apos;s power to consume had no limit.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Money piling up in banks is not the same as a society growing richer, and money vanishing in a panic is not the
        same as a society becoming poorer. The money market moves on its own rhythm, often opposite to real production.
      </p>
      <p>
        Behind the money panics Marx sees a deeper mismatch: capitalism builds the power to make far more than the people
        who do the work can afford to buy, and credit lets that gap grow until it snaps.
      </p>
    </>
  ),

  critics: [
    {
      who: "Hyman Minsky",
      point: (
        <p>
          The American economist Hyman Minsky (<em>Stabilizing an Unstable Economy</em>, 1986) argued, in a way many see
          as close to Marx here, that long periods of calm encourage riskier borrowing until the system becomes fragile and
          a crash follows. Unlike Marx, he thought careful central banking and government spending could keep capitalism
          working.
        </p>
      ),
    },
    {
      who: "Other theories of crisis",
      point: (
        <p>
          Many economists reject the idea that crises come from workers being too poor to buy. Milton Friedman and Anna
          Schwartz (1963) blamed the worst depression on mistakes in managing the money supply; others point to shocks
          from outside. Even among Marxists, &ldquo;underconsumption&rdquo; is disputed, and some stress the falling rate of
          profit instead.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "According to Marx, when is interest usually highest?",
      options: ["Right after a crash", "In the middle of a crisis", "In the boom"],
      answer: 1,
      why: "In the crisis credit stops and everyone needs money to pay debts, so interest shoots to its maximum.",
    },
    {
      q: "Why did business look so sound just before the 1857 crisis?",
      options: [
        "Bills were being paid with new bills, so trouble stayed hidden",
        "Everyone had stopped borrowing",
        "There were no banks yet",
      ],
      answer: 0,
      why: "Paper kept paper alive. Payments seemed to arrive on time right up until they suddenly didn't.",
    },
    {
      q: "What does Marx call the ultimate reason for real crises?",
      options: [
        "Bad weather every year",
        "The poverty and limited buying power of most people, against production that races ahead",
        "Bankers being lazy",
      ],
      answer: 1,
      why: "He thought production grows as if people could buy without limit, while most people's buying power stays small.",
    },
  ],

  remember: [
    "Lots of money in the bank is not the same as a richer town.",
    "Interest is low after a crash and highest in the middle of a crisis.",
    "Credit lets paper keep paper alive, so booms look safest just before they break.",
    "Marx blamed crises, at bottom, on making more than most people can afford to buy.",
  ],

  terms: ["commercial-credit", "plethora-of-capital"],

  source: (
    <p>
      Covers Volume III, Chapter 30 (&ldquo;Money-Capital and Real Capital. I&rdquo;), in the Moscow translation on
      marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894.
      Engels says the &ldquo;real difficulty&rdquo; of Part V began here: this chapter &ldquo;was put together by means of
      transpositions and excisions&rdquo;, and much of it quotes parliamentary reports. From the text: the reports on the
      Bank Acts of 1857 and 1858; the crisis of August 1857 starting in the United States; &ldquo;the poverty and restricted
      consumption of the masses&rdquo;. The shapes of the two curves in 30.1 and the dinner party are this site&apos;s
      illustration.
    </p>
  ),
};

export default chapter;
