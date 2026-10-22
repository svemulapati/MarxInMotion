import type { ChapterContent } from "@/components/ChapterTemplate";
import { HowBigIsBeasSlice, InterestThroughBoomAndCrash } from "./ch22-animations";

const chapter: ChapterContent = {
  bigQuestion: "Who decides how much extra you pay to borrow money?",

  story: (
    <>
      <p>
        Mr. Moneybags and Bea are arguing in the bank. &ldquo;Five coins of interest is far too much,&rdquo; he grumbles.
        &ldquo;Three would be fair.&rdquo; Bea folds her arms. &ldquo;Seven would be fair, and you know it.&rdquo;
      </p>
      <p>
        Sam has come in to change a coin and can&apos;t help laughing. &ldquo;Why don&apos;t you just look up the right
        number?&rdquo; he asks. &ldquo;Isn&apos;t there a proper price for borrowing, like there&apos;s a usual price for
        bread?&rdquo;
      </p>
      <p>Both of them stop and stare at him. Nobody has ever found that number. Is there one?</p>
    </>
  ),

  guess: (
    <p>
      Moneybags and Bea are splitting a profit that is already made. Is there a &ldquo;right&rdquo; size for Bea&apos;s
      share, fixed by something deep, like hours of work? Or is it settled some other way?
    </p>
  ),

  struggle: [<HowBigIsBeasSlice key="a" />],
  reveal: [<InterestThroughBoomAndCrash key="b" />],

  eli5: "Interest is a slice of the profit, and there is no rule that says how big the slice must be. Lenders and borrowers pull back and forth, and habit plays a part too. When times are good it is cheap to borrow, and in a crash it gets very dear.",

  grownUp: (
    <>
      <p>
        Since <strong>interest</strong> is a part of profit, the profit itself is its upper limit: if interest took it
        all, the functioning capitalist would keep nothing. The lower limit is &ldquo;altogether indeterminable&rdquo;; it
        can fall to almost nothing.
      </p>
      <p>
        Between those limits, the <strong>rate of interest</strong> is set by competition between lenders and borrowers.
        Unlike wages or profit, it has no deeper value to swing around. Marx says there is &ldquo;no such thing as a natural
        rate of interest&rdquo;, and he agrees with the economist Joseph Massie that only competition can decide it.
        Customs and legal tradition also play their part.
      </p>
      <p>
        Over the industrial cycle the rate moves in a pattern: a low rate in prosperity, rising rates as the boom turns,
        and a peak in crisis. Marx&apos;s figures for England: 4½% in spring 1842, 2% in 1843, 1½% that September, then 8%
        and more in the crisis of 1847. Over the long run he also expects the rate to tend to fall, as the number of
        rentiers grows and the credit system gathers society&apos;s savings into big pools of loanable money.
      </p>
      <p>
        Oddly, the rate of interest looks more fixed and solid than the average rate of profit, because it is quoted
        every day as one clear number on the <strong>money market</strong>.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The split between interest and profit is a split of surplus-value between two kinds of capitalist. Because it is
        decided by competition and custom rather than by labour time, it has no natural level. Economists who search for
        one are looking for something that isn&apos;t there.
      </p>
    </>
  ),

  critics: [
    {
      who: "Wicksell's natural rate",
      point: (
        <p>
          The Swedish economist Knut Wicksell (1898) argued that there <em>is</em> a natural rate of interest: the rate at
          which saving equals investment and prices stay stable. Central banks today still talk about a
          &ldquo;neutral&rdquo; rate, though they admit it can&apos;t be seen directly and must be estimated.
        </p>
      ),
    },
    {
      who: "Central banks",
      point: (
        <p>
          Today interest rates are steered by central banks, not only by the tug-of-war between lenders and borrowers.
          Some read this as support for Marx&apos;s view that the rate is set by institutions and custom; others say it
          shows rates can be managed in ways Marx did not foresee.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What is the most interest could ever be, according to Marx?",
      options: ["Twice the profit", "The whole profit", "Exactly 5%"],
      answer: 1,
      why: "Interest is a part of profit, so it can't be bigger than the profit itself.",
    },
    {
      q: "Is there a natural rate of interest?",
      options: ["Yes, set by labour time", "No, it is set by competition and custom", "Yes, always 5%"],
      answer: 1,
      why: "Marx says there is no such thing. It is settled between lenders and borrowers, with custom playing a part.",
    },
    {
      q: "In Marx's figures, when was interest highest?",
      options: ["In the boom of 1843", "In the crisis of 1847", "In spring 1842"],
      answer: 1,
      why: "In a crisis firms must borrow at any cost to pay their bills. In 1847 the rate hit 8% and higher.",
    },
  ],

  remember: [
    "Interest is a slice of profit. Its top limit is the whole profit; it has no fixed bottom.",
    "There is no natural rate of interest. Competition and custom settle it.",
    "Interest is low in booms and highest in crises, when money is borrowed at any cost.",
  ],

  terms: ["rate-of-interest", "money-market"],

  source: (
    <p>
      Covers Volume III, Chapter 22 (&ldquo;Division of Profit. Rate of Interest. Natural Rate of Interest&rdquo;),
      checked against the International Publishers edition on marxists.org. Volume III was assembled by Engels
      from Marx&apos;s manuscripts and published in 1894. Chapters 21 to 36 make up Part V, which Engels found the hardest to edit (&ldquo;no finished draft&rdquo;), though he says Chapters 21 to 24 were &ldquo;in the main, complete&rdquo;. Marx&apos;s own points and figures: profit as the upper limit; the
      lower limit &ldquo;altogether indeterminable&rdquo;; no natural rate of interest (with Massie); customs and legal
      tradition; 4½% (1842), 2% and 1½% (1843), 8% and higher (1847, citing Gilbart). The slice sizes in 22.1 are
      made up.
    </p>
  ),
};

export default chapter;
