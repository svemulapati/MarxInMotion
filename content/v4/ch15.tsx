import type { ChapterContent } from "@/components/ChapterTemplate";
import { OnePieTwoSlices, ProfitIsNotSurplusValue, TheDayThatStretches } from "./ch15-animations";

const chapter: ChapterContent = {
  bigQuestion: "Ricardo knew that work makes value. So why didn't he find surplus-value first?",

  story: (
    <>
      <p>
        David Ricardo is back on the Old Thinkers&apos; Shelf, and this time Marx is clearly pleased to see him. Of all
        the old economists, Ricardo came closest to Marx&apos;s own ideas.
      </p>
      <p>
        &ldquo;The value of a thing,&rdquo; says Ricardo, &ldquo;comes from the work it takes to make it. And what the
        workers make is split between wages and profit. If one gets more, the other gets less.&rdquo;
      </p>
      <p>
        Sam nods. That sounds a lot like what he learned in Volume I. Mr. Moneybags frowns: he does not like talk about
        his profit coming out of Sam&apos;s work. But Marx says Ricardo still missed something important. What?
      </p>
    </>
  ),

  guess: (
    <p>
      Ricardo says wages and profit share a fixed amount of value. Can you think of a way that both Sam&apos;s wage and
      Mr. Moneybags&apos; extra could grow at the same time?
    </p>
  ),

  struggle: [<OnePieTwoSlices key="a" />, <ProfitIsNotSurplusValue key="b" />],
  reveal: [<TheDayThatStretches key="c" />],

  eli5: "Ricardo saw that work makes value and that wages and profit share it, so one grows when the other shrinks. But he called the extra 'profit' and thought the working day was a fixed size. Marx showed the day can stretch, and that a worker sells his ability to work, not his work.",

  grownUp: (
    <>
      <p>
        <strong>Ricardo&apos;s theory of surplus-value</strong> is really a theory of profit. Marx opens with the charge:
        &ldquo;Nowhere does Ricardo consider surplus-value separately&rdquo; from its forms, profit and rent. Profit and
        surplus-value are the same only when all the capital advanced is spent on wages. Because Ricardo ignores this,
        Marx says, he confuses value with cost-price, gets rent wrong, and misreads why the rate of profit rises and falls.
      </p>
      <p>
        Ricardo also speaks of the &ldquo;value of labour&rdquo; and its &ldquo;natural price&rdquo;: what workers need to
        subsist and perpetuate their race. Marx says the thing actually sold is <strong>labour-power</strong>, and the
        value it produces can exceed its own value. Ricardo never explains the exchange of labour for capital, and he
        treats the working day as a fixed magnitude, so he leaves out absolute surplus-value. Marx&apos;s own example: if
        necessary labour is 10 hours and surplus labour 2, and the day grows by 2 2/5 hours, the worker can get 2 more
        hours and the capitalist 2/5 more, so both rise in the same proportion.
      </p>
      <p>
        What Ricardo did analyse is relative surplus-value, under the name of profit. In his account the value of the
        product is fixed, so wages and profit move in inverse proportion, and the movement of wages comes first. Marx
        calls Ricardo&apos;s attention to <strong>relative wages</strong>, the worker&apos;s share rather than the goods
        he can buy, &ldquo;one of Ricardo&apos;s great merits&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Ricardo got within touching distance of the secret of profit. He saw that value comes from labour and that
        profit rises when wages fall. But because he never asked where the surplus comes from, he could not see that the
        working day can be stretched, or that the worker sells his capacity to work.
      </p>
      <p>
        Marx credits Ricardo with real scientific progress, and builds on it, while saying the missing pieces are
        exactly what Capital supplies.
      </p>
    </>
  ),

  critics: [
    {
      who: "Ricardo's modern readers",
      point: (
        <p>
          Piero Sraffa, who edited Ricardo&apos;s works, and later &ldquo;neo-Ricardian&rdquo; economists argued that
          Ricardo&apos;s inverse link between wages and profit can be stated precisely without labour values at all. On
          their reading, Marx&apos;s extra layer of surplus-value is not needed to explain prices and profits.
        </p>
      ),
    },
    {
      who: "Mainstream economics",
      point: (
        <p>
          Most economists today do not see profit as unpaid labour. They explain wages by workers&apos; productivity and
          profit by the return to capital and risk, and treat longer hours as a bargain over pay rather than as surplus
          labour. Marx&apos;s supporters reply that this hides who controls the working day.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What did Ricardo get right, according to Marx?",
      options: [
        "That profit comes from clever machines",
        "That value comes from labour, and the worker's share (relative wages) matters",
        "That rent makes everyone richer",
      ],
      answer: 1,
      why: "Marx praises Ricardo's labour theory of value and his study of relative wages as great merits.",
    },
    {
      q: "Mr. Moneybags has 24 coins of materials, 3 of wages and 3 of surplus. Why are 100% and 11% both right?",
      options: [
        "One is a mistake",
        "100% compares the surplus with wages; 11% compares it with all the capital",
        "Prices changed in between",
      ],
      answer: 1,
      why: "The rate of surplus-value is 3 ÷ 3; the rate of profit is 3 ÷ 27. Ricardo did not keep the two apart.",
    },
    {
      q: "How can Sam's wage and the boss's surplus both rise at once?",
      options: ["If the working day gets longer", "If bread gets dearer", "They never can"],
      answer: 0,
      why: "Marx says the working day is elastic. Stretch it, and both parts can grow. Ricardo assumed it was fixed.",
    },
  ],

  remember: [
    "Ricardo: value comes from labour, and wages and profit share it.",
    "Marx: Ricardo never looked at surplus-value on its own; he always called it profit.",
    "Profit equals surplus-value only when all the capital is wages.",
    "The working day is elastic, so wages and surplus can rise together.",
    "Workers sell their labour-power, not their labour.",
  ],

  terms: ["ricardo-surplus-value", "inverse-wages-profit"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter XV (&ldquo;Ricardo&apos;s Theory of Surplus-Value&rdquo;),
      Progress Publishers edition on marxists.org. Quoted or checked in the text: &ldquo;Nowhere does Ricardo consider
      surplus-value separately&rdquo;; the &ldquo;natural price of labour&rdquo;; the working day regarded &ldquo;as a
      given magnitude&rdquo; and Marx&apos;s &ldquo;elastic&rdquo; reply, with his 10 + 2 hours example; Ricardo&apos;s
      ten-shillings-to-eight example; relative wages as &ldquo;one of Ricardo&apos;s great merits&rdquo;. The 24 / 3 / 3
      workshop numbers follow this site&apos;s Volume I; the 14-hour day with 3½ coins each in 15.3 is made up.
    </p>
  ),
};

export default chapter;
