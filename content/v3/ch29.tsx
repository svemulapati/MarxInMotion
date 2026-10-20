import type { ChapterContent } from "@/components/ChapterTemplate";
import { HowAPromiseGetsAPrice, InsideBeasVault } from "./ch29-animations";

const chapter: ChapterContent = {
  bigQuestion: "What is really inside a bank's vault?",

  story: (
    <>
      <p>
        Bea is the richest person in Tiny Town, or so everyone says. Her book lists thousands of coins of deposits, piles
        of bills, government bonds and railway shares.
      </p>
      <p>
        One morning Sam is sent to the bank with a message and the vault door is open. He peeks in. There is a pile of
        gold, yes, but it is much smaller than he expected. Most of the shelves are full of paper.
      </p>
      <p>
        &ldquo;Where is everyone&apos;s money?&rdquo; Sam whispers. Bea laughs. &ldquo;Working, of course. Out in the
        town.&rdquo;
      </p>
      <p>So how much of Bea&apos;s fortune is real, and how much is promises?</p>
    </>
  ),

  guess: (
    <p>
      A promise to pay 5 coins every year: how much do you think someone would pay for it today? Would the answer change
      if interest rates went up?
    </p>
  ),

  struggle: [<InsideBeasVault key="a" />],
  reveal: [<HowAPromiseGetsAPrice key="b" />],

  eli5: "A bank holds a little real money and a lot of paper promises. People put prices on those promises, and the prices jump up and down with interest rates. When the prices fall, the promises shrink, even though the railways and fields are still there.",

  grownUp: (
    <>
      <p>
        Marx lists the parts of <strong>bank capital</strong>: cash in gold or notes, and securities. The securities are
        bills of exchange, whose discounting is the banker&apos;s core business, and public securities such as government
        bonds, treasury notes and shares of all kinds, plus mortgages. By source, it splits into the banker&apos;s own
        capital and borrowed capital: deposits, and notes for banks that issue them.
      </p>
      <p>
        Much of this is <strong>fictitious capital</strong>. A government bond is a claim on future taxes for money the
        state has already spent; the capital behind it no longer exists. A railway share is a claim on part of the
        railway&apos;s future surplus-value, but the railway itself does not exist twice. These papers become commodities
        with their own prices, set by <strong>capitalisation</strong>: any regular income is treated as interest on an
        imaginary sum at the going rate. Marx&apos;s examples: £100 a year at 5% counts as £2,000; a £100 share paying 10%
        sells for £200 while interest is 5%; if interest rises from 5% to 10%, a £5 income is worth only £50.
      </p>
      <p>
        So when money is tight, these papers fall twice: because interest rises, and because everyone sells them for cash.
        By 23 October 1847 English public stocks and canal and railway shares had lost about £114.75 million. Unless real
        production stopped, Marx says, the nation was not a cent poorer: the bubble of nominal money-capital had burst. Even
        deposits are mostly claims on the banker, lent out again, so with credit &ldquo;all capital seems to double
        itself&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        A huge part of what counts as wealth in a capitalist economy is not machines or goods but claims on future income,
        priced by the rate of interest. Their prices can soar or collapse while the real workshops and railways stay
        exactly the same.
      </p>
      <p>
        That gives the illusion that money grows by itself, cut off from the work that actually produces the income these
        papers claim.
      </p>
    </>
  ),

  critics: [
    {
      who: "Asset pricing in modern finance",
      point: (
        <p>
          Marx&apos;s rule for pricing an income by the interest rate is the same present-value idea Irving Fisher set out
          in <em>The Nature of Capital and Income</em> (1906), and it is standard in finance today. But most economists do
          not call these claims &ldquo;fictitious&rdquo;: they see share and bond markets as real tools that steer savings
          toward productive uses.
        </p>
      ),
    },
    {
      who: "Bank safety",
      point: (
        <p>
          Bankers reply that lending out most deposits is how banks fund the economy, and that reserves, regulation,
          deposit insurance and a central bank lending in emergencies keep the system safe. Critics of banks answer that
          crises from 1847 to 2008 show the danger Marx pointed to.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "The government borrowed 100 coins and spent them, and gave a bond paying 5 a year. Why does Marx call that bond fictitious capital?",
      options: [
        "Because it is printed on cheap paper",
        "Because the 100 coins it stands for were spent long ago",
        "Because the government never pays",
      ],
      answer: 1,
      why: "The bond is a claim on future taxes. The capital it seems to represent no longer exists.",
    },
    {
      q: "A promise of 5 coins a year is priced at 100 when interest is 5%. What happens to its price if interest rises to 10%?",
      options: ["It rises to 200", "It stays at 100", "It falls to 50"],
      answer: 2,
      why: "5 coins a year at 10% counts as 50. Paper prices move opposite to the interest rate.",
    },
    {
      q: "In 1847 English bonds and shares fell by about 114 million pounds. What did Marx say about that?",
      options: [
        "The nation lost 114 million pounds of real wealth",
        "Unless real production stopped, the nation was not a cent poorer",
        "It never happened",
      ],
      answer: 1,
      why: "The railways and canals were still there. What burst was a bubble of paper prices.",
    },
  ],

  remember: [
    "A bank holds cash plus papers: bills, bonds and shares.",
    "Deposits are mostly lent out again, so the same money can be counted twice.",
    "Bonds and shares are claims on future income, priced by the interest rate.",
    "When interest rises, paper prices fall, even if nothing real has changed.",
    "Marx calls such paper fictitious capital.",
  ],

  terms: ["bank-capital", "fictitious-capital", "capitalisation"],

  source: (
    <p>
      Covers Volume III, Chapter 29 (&ldquo;Component Parts of Bank Capital&rdquo;), in the Moscow translation on
      marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894;
      Engels says this chapter could be taken &ldquo;almost completely from the original manuscript&rdquo;. Marx&apos;s
      own figures: £100 at 5%; £100 a year capitalised at £2,000; the £100 share paying 10% worth £200; the £5 income worth
      £50 at 10%; the £114,752,225 fall by 23 October 1847 (from the Bank of England governor&apos;s evidence; Chapter 25
      quotes a slightly different total, £114,762,325). The war, Tom, Mia and Bea&apos;s book are this site&apos;s
      illustration.
    </p>
  ),
};

export default chapter;
