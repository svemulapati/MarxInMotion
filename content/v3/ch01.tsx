import type { ChapterContent } from "@/components/ChapterTemplate";
import { ProfitBelowValue, TheBosssLedger, TwoKindsOfCost } from "./ch01-animations";

const chapter: ChapterContent = {
  bigQuestion: "If the boss buys everything at a fair price, why does he think his money made the extra?",

  story: (
    <>
      <p>
        Volume III begins on a Saturday night. Mr. Moneybags sits at his desk with a big ledger, adding up the week.
        Sam is sweeping the floor, and Bea the banker has dropped by for a cup of tea.
      </p>
      <p>
        &ldquo;Cotton, spindles, wages,&rdquo; mutters Mr. Moneybags, writing them all in one column. &ldquo;That is what
        I spent. And here is what the yarn sold for. The difference is my profit. My money did well this week!&rdquo;
      </p>
      <p>
        Sam leans on his broom. &ldquo;Your money did well? I was the one spinning for twelve hours.&rdquo; Mr. Moneybags
        laughs. &ldquo;Nonsense, Sam. Every coin I spent helped. The cotton, the spindles and your wage all earned their
        share.&rdquo;
      </p>
      <p>
        Bea says nothing, but she raises an eyebrow. Who is right? And why does the ledger make it so hard to tell?
      </p>
    </>
  ),

  guess: (
    <p>
      In Volume I we split the boss&apos;s spending into two very different parts: the cotton and spindles, which only
      pass on their value, and Sam&apos;s wage, which buys new value. What happens to that difference when the boss adds
      everything into one number?
    </p>
  ),

  struggle: [<TheBosssLedger key="a" />, <TwoKindsOfCost key="b" />],
  reveal: [<ProfitBelowValue key="c" />],

  eli5: "The boss adds up everything he spent into one pile and calls the extra his profit. That pile hides the fact that only the workers made the extra. So it looks as if all his money grew, not just the part he paid to Sam.",

  grownUp: (
    <>
      <p>
        Volumes I and II looked beneath the surface. Volume III climbs back up, step by step, towards the forms things
        take in everyday business life and competition. Chapter 1 takes the first step.
      </p>
      <p>
        The value of a commodity is C = c + v + s. Subtract the surplus-value and what remains replaces what the
        capitalist spent: Marx calls it the <strong>cost-price</strong>, k = c + v. So the value becomes C = k + s.
        Marx&apos;s example: £400 of constant capital, £100 of variable capital and £100 of surplus-value give a product
        worth £600 with a cost-price of £500.
      </p>
      <p>
        What the commodity costs the capitalist (£500) and what it actually costs to produce (£600 of labour) are two
        different sizes. The £100 difference costs the capitalist nothing, Marx says, because it costs the labourer
        unpaid labour. In the cost-price the difference between constant and variable capital disappears. The wage looks
        like just another expense, like cotton, and so the surplus-value seems to spring from the whole capital
        advanced. Seen that way, surplus-value takes the form of <strong>profit</strong>: C = k + p.
      </p>
      <p>
        A practical consequence: because cost-price is below value, a commodity can be sold below its value and still
        yield a profit. Marx&apos;s figures: sold for £510 to £590 instead of £600, it brings a profit of £10 to £90.
        This gap is what competition between capitals will later play with.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Profit is not a second, separate thing on top of surplus-value. In Part I of Volume III it is exactly the same
        amount, only seen from the boss&apos;s chair. Marx calls it a &ldquo;mystified form&rdquo;, but a necessary one:
        every capitalist really does experience his costs as one pile and his gain as the fruit of the whole.
      </p>
      <p>
        That is the start of a long story in Volume III. The further the analysis goes, the more the source of the extra,
        unpaid labour, gets hidden behind profit, interest and rent.
      </p>
    </>
  ),

  critics: [
    {
      who: "Business sees costs correctly",
      point: (
        <p>
          Most economists say the boss&apos;s ledger is not an illusion at all. Every input, machines and materials as
          well as labour, helps produce the output, and a firm rightly counts them all as costs. In their view profit is
          a return on all the capital tied up, which is why investors compare returns on total capital, not on wages
          alone.
        </p>
      ),
    },
    {
      who: "A different source of profit",
      point: (
        <p>
          Other schools explain profit without unpaid labour: as a reward for risk (Frank Knight, 1921), for innovation
          (Joseph Schumpeter), or for waiting. Marx&apos;s defenders reply that these describe how profits are shared out,
          not where the extra value first comes from.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Mr. Moneybags spends 24 coins on cotton and spindles and 3 on Sam's wage. What is the cost-price?",
      options: ["24 coins", "27 coins", "30 coins"],
      answer: 1,
      why: "Cost-price is everything the boss paid out: 24 + 3 = 27.",
    },
    {
      q: "Why does profit seem to come from all of the boss's money?",
      options: [
        "Because cotton really makes new value",
        "Because in one lump you can no longer see that only the wage bought new value",
        "Because Sam is paid too much",
      ],
      answer: 1,
      why: "The cost-price mixes constant and variable capital, so the extra looks like the fruit of the whole pile.",
    },
    {
      q: "Goods with a cost-price of 500 and a value of 600 are sold for 550. What happens?",
      options: ["The seller makes a loss", "The seller makes a profit of 50", "The seller makes a profit of 100"],
      answer: 1,
      why: "Any price above the cost-price brings some profit, even below value: 550 - 500 = 50.",
    },
  ],

  remember: [
    "Cost-price = everything the boss spent: c + v.",
    "What things cost the boss is less than what they cost to make; the gap is the workers' unpaid labour.",
    "In one cost pile, the special role of wages disappears.",
    "So surplus-value shows up as profit: the extra the whole capital seems to earn.",
    "Things can be sold below value and still make a profit.",
  ],

  terms: ["cost-price", "profit"],

  source: (
    <p>
      Covers Volume III, Chapter 1 (&ldquo;Cost-Price and Profit&rdquo;), from the Institute of Marxism-Leninism edition
      (International Publishers) on marxists.org. Volume III was assembled and edited by Friedrich Engels from
      Marx&apos;s manuscripts and published in 1894; Engels says this chapter was built from two revised drafts of about
      eight pages each. Marx&apos;s own numbers: £400c + £100v + £100s = £600, cost-price £500, and sales at £510 to £590
      giving profits of £10 to £90. The workshop figures (24 + 3 + 3 = 30) and the Saturday-night ledger are this
      site&apos;s.
    </p>
  ),
};

export default chapter;
