import type { ChapterContent } from "@/components/ChapterTemplate";
import { PaidAndUnpaid, TwoWaysToMeasure } from "./ch18-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is Sam's share of the day big or small?",

  story: (
    <>
      <p>
        Bea the banker is doing sums at her desk. Mr. Moneybags has asked for a loan, and she wants to know how well his
        workshop is doing.
      </p>
      <p>
        &ldquo;Sam works 12 hours,&rdquo; Mr. Moneybags tells her. &ldquo;Six of them make the value of his wage, and
        six make my surplus. So I only take half the day. That&apos;s only 50 percent. Very modest.&rdquo;
      </p>
      <p>
        Sam overhears and frowns. &ldquo;Half the day? For every hour I work for myself, I work one hour for you. That
        sounds like 100 percent to me.&rdquo;
      </p>
      <p>Same 12 hours, same 6 and 6. How can one say 50 and the other say 100? Who is right?</p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags divides his 6 hours by the whole 12-hour day. Sam divides them by the 6 hours he works for himself.
      Which way do you think shows more honestly how much of Sam&apos;s work goes to the boss?
    </p>
  ),

  struggle: [<TwoWaysToMeasure key="a" />],
  reveal: [<PaidAndUnpaid key="b" />],

  eli5: "There are two ways to measure how much of Sam's day goes to Mr. Moneybags. Comparing it with the whole day makes it look smaller than it is. Marx compares it with the hours Sam works for himself, and calls the rest unpaid work.",

  grownUp: (
    <>
      <p>
        Marx restates his measure of the <strong>rate of surplus-value</strong> in three equal ways: surplus-value
        divided by variable capital, surplus-value divided by the value of labour-power, and surplus-labour divided by
        necessary labour. With Sam&apos;s 6 and 6 hours, it is 100%.
      </p>
      <p>
        The classical economists used what Marx calls derivative formulae: surplus-labour divided by the whole working
        day, or surplus-value divided by all the new value created. On the same day these give 50%. Marx says they
        state the real degree of exploitation falsely. Because the surplus is only ever part of the day, these ratios
        can never reach 100%, however hard the worker is squeezed. Lavergne&apos;s estimate that English farm labourers
        kept a quarter of their product looks like 75% one way, but is 300% Marx&apos;s way.
      </p>
      <p>
        The old formulae also paint a false picture of partnership, as if worker and capitalist simply divided a
        product they made together. That hides the real transaction: the capitalist buys labour-power and the worker
        is shut out from the product.
      </p>
      <p>
        Finally, Marx adds a third, popular formula: <strong>unpaid labour</strong> divided by paid labour. It does not
        mean the wage was unfair. The capitalist pays the value of labour-power, and then has the use of it for the
        whole day. In one part of the day the worker replaces that value; in the other, the work comes to the
        capitalist free. Capital, Marx concludes, is not just command over labour, as Adam Smith said, but command over
        unpaid labour. Profit, interest and rent are all forms of it.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        How you measure shapes what you see. Measured against the whole day, the employer&apos;s share always looks
        modest. Measured against the time the worker spends providing for themselves, it shows how long they work for
        someone else for every hour they work for their own keep.
      </p>
      <p>
        The secret of how capital grows, Marx says, is having the use of a certain amount of other people&apos;s unpaid
        labour.
      </p>
    </>
  ),

  critics: [
    {
      who: "A definition, not a discovery",
      point: (
        <p>
          Critics such as Paul Samuelson (1971) argued that the rate of surplus-value only makes sense if value is
          measured in labour time. Without the labour theory of value, the 100% is not something you can observe; it
          follows from how the terms are defined, and prices can be explained without the detour through labour values.
        </p>
      ),
    },
    {
      who: "Nothing is unpaid",
      point: (
        <p>
          Mainstream economists say the worker is paid the market value of what their work adds, and that the rest of
          the product pays for machines, materials, risk and organisation. On this view no hours are &ldquo;unpaid&rdquo;.
          Marx&apos;s reply is built into the chapter: he agrees the wage pays the full value of labour-power, and argues
          the surplus comes from using that labour-power for longer than it takes to replace it.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam works 6 hours for himself and 6 hours of surplus-labour. What is the rate of surplus-value, Marx's way?",
      options: ["50%", "100%", "200%"],
      answer: 1,
      why: "Marx divides surplus-labour by necessary labour: 6 ÷ 6 = 100%.",
    },
    {
      q: "Why does “surplus-labour ÷ whole day” make the employer's share look smaller?",
      options: [
        "It divides by the whole day, so it can never reach 100%",
        "It forgets about the cotton",
        "It counts in shillings instead of hours",
      ],
      answer: 0,
      why: "The surplus is always only part of the day, so dividing by the whole day always gives less than 100%.",
    },
    {
      q: "According to Marx, where does the unpaid part of Sam's day come from?",
      options: [
        "Mr. Moneybags cheating on the wage",
        "Using Sam's labour-power for longer than it takes to replace its value",
        "Sam working too slowly",
      ],
      answer: 1,
      why: "The wage pays the full value of Sam's labour-power. The surplus comes from the hours beyond those needed to replace it.",
    },
  ],

  remember: [
    "Marx's rate of surplus-value compares surplus hours with the worker's own hours: 6 ÷ 6 = 100%.",
    "The older way divides by the whole day (6 ÷ 12 = 50%) and can never reach 100%.",
    "That older way hides how big the employer's share is and makes it look like a partnership.",
    "Surplus-labour can also be called unpaid labour, even though the wage was paid in full.",
    "Profit, interest and rent all come out of that unpaid labour.",
  ],

  terms: ["unpaid-labour"],

  source: (
    <p>
      Covers Volume I, Chapter 18 (Fowkes: &ldquo;Different Formulae for the Rate of Surplus-Value&rdquo;; Moore and
      Aveling: &ldquo;Various Formula for the Rate of Surplus-Value&rdquo;). Marx&apos;s own numbers: a 12-hour day,
      6 hours each way, 3 shillings each, giving 100% by formula I and 50% by formula II; Lavergne&apos;s estimate of
      a quarter to the labourer (300%); formula III, unpaid over paid labour; capital as command over unpaid labour.
      Bea&apos;s loan is this site&apos;s story.
    </p>
  ),
};

export default chapter;
