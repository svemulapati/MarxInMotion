import type { ChapterContent } from "@/components/ChapterTemplate";
import { TwoWaysAPriceChanges, UpsideDown } from "./ch12-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does the boss think his profit comes from his prices, and not from his workers?",

  story: (
    <>
      <p>
        Mr. Moneybags has started shipping yarn across the sea. Every evening he sits with Clerk Pim and works out his
        prices, line by line.
      </p>
      <p>
        &ldquo;Add a bit for the storms,&rdquo; he says. &ldquo;Ships sink. Add a bit because the yarn takes months to
        sell over there. Add a bit for my excellent management. There! Every coin of my profit has a good reason.&rdquo;
      </p>
      <p>
        Clerk Pim nods and writes it all down. But Sam, sweeping the floor, wonders aloud: &ldquo;If every boss adds a
        bit for this and a bit for that, where does the extra money actually come from?&rdquo;
      </p>
      <p>Mr. Moneybags has no answer. Does Sam have a point?</p>
    </>
  ),

  guess: (
    <p>
      A batch of yarn costs 200 coins to make and the average rate of profit is 20%. What is its price of production?
      Can you think of two different things that could change that price?
    </p>
  ),

  struggle: [<TwoWaysAPriceChanges key="a" />],
  reveal: [<UpsideDown key="b" />],

  eli5: "A price changes only if the usual profit changes or the work needed to make the thing changes. Bosses add bits to their prices for risk or slow selling and think each bit makes profit. Really those bits just decide how big a share of the workers' surplus each boss gets.",

  grownUp: (
    <>
      <p>
        These supplementary remarks close Part Two. First, Marx lists the only two causes that can change a price of
        production (k + kp&prime;): a change in the general rate of profit, or a change in the commodity&apos;s own
        value. With k = 200 and p&prime; = 20% the price is 240. Every change in prices of production goes back, in the
        last analysis, to changes in value, either of this commodity or of others.
      </p>
      <p>
        Second, a commodity of average composition sells at a price of production equal to its value, so a rise or fall
        in wages changes only its profit, not its price.
      </p>
      <p>
        Third, the capitalist&apos;s <strong>grounds for compensation</strong>. Once average prices settle, capitalists
        build regular extras into their calculations: higher prices for slow turnover, for risky trades such as
        shipping (later paid as insurance), and so on. Competition, Marx says, shows average profits, wage effects on
        prices and swinging market prices, but not the values underneath, so &ldquo;everything appears reversed in
        competition&rdquo;. The capitalist believes these additions create his profit, when they merely share out
        among capitalists the &ldquo;common loot&rdquo;, the total surplus-value.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        What competition shows on the surface is the reverse of what happens underneath. On the surface, profit seems
        to come from a capital&apos;s size, its risks and its speed. Underneath, it is a share of the surplus-value
        made by the whole working class.
      </p>
      <p>
        The extras capitalists add for risk and delay are real in their accounts, but they only settle who gets which
        slice, not where the pie comes from.
      </p>
    </>
  ),

  critics: [
    {
      who: "Profit as a reward for uncertainty",
      point: (
        <p>
          Frank Knight, in <em>Risk, Uncertainty and Profit</em> (1921), argued that true profit is the reward for
          bearing uncertainty that cannot be insured. On this view the boss who ships yarn across stormy seas really
          does earn his profit by taking a chance others will not. Marx would answer that the reward must still come
          out of something produced, and that he locates it in surplus labour.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "A batch of yarn costs 200 coins and the average rate of profit is 20%. What is its price of production?",
      options: ["220", "240", "200"],
      answer: 1,
      why: "Cost-price plus 20% of it: 200 + 40 = 240.",
    },
    {
      q: "Which of these can change the price of production of yarn?",
      options: [
        "Only the boss deciding to charge more",
        "A change in the average rate of profit, or a change in the work needed to make yarn",
        "Only the weather",
      ],
      answer: 1,
      why: "Marx says those are the only two causes, and both go back to changes in value somewhere.",
    },
    {
      q: "Mr. Moneybags adds a bit to his price for the risk of shipping. What does Marx say this really does?",
      options: [
        "It creates new value out of the risk",
        "It decides how big a share of the total surplus-value he gets",
        "It lowers his profit",
      ],
      answer: 1,
      why: "Grounds for compensation only share out the \"common loot\" among capitalists.",
    },
  ],

  remember: [
    "Price of production = cost-price + cost-price × average rate of profit.",
    "It changes only if the average rate of profit changes or the commodity's value changes.",
    "Bosses add extras for risk and slow sales, called grounds for compensation.",
    "In competition everything looks upside down: profit seems to come from prices, not from labour.",
  ],

  terms: ["grounds-for-compensation"],

  source: (
    <p>
      Covers Volume III, Chapter 12, the end of Part Two. Volume III was assembled by Engels from Marx&apos;s manuscripts
      and published in 1894. Text checked against the marxists.org edition (Institute of Marxism-Leninism, 1959).
      Marx&apos;s own: the two causes of change, k = 200 at 20% giving 240, shipping and insurance as grounds for
      compensation, &ldquo;everything appears reversed in competition&rdquo; and &ldquo;the common loot&rdquo;. The
      15% and 180-coin cases in 12.1, and the amounts added in 12.2, are this site&apos;s examples.
    </p>
  ),
};

export default chapter;
