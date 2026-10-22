import type { ChapterContent } from "@/components/ChapterTemplate";
import { QuesnaysTwoPiles, TwoWaysToSort } from "./ch10-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can sorting things into the wrong piles hide a secret?",

  story: (
    <>
      <p>
        Clerk Pim has a new job. Mr. Moneybags wants every coin in the workshop sorted into piles, the way the famous
        economists do it. Pim finds two old books on the shelf in Tiny Town&apos;s library.
      </p>
      <p>
        The first is by a French doctor, François Quesnay, who wrote about farms. Grandpa Ned reads it over Pim&apos;s
        shoulder and nods. &ldquo;He sorts my farm the way I would: the things that last for years, and the things I use
        up every season.&rdquo;
      </p>
      <p>
        The second is by a Scottish professor, Adam Smith, who sorts every kind of business. Pim follows Smith&apos;s
        rules. The machine goes in one pile. The cotton and Sam&apos;s wages go together in the other.
      </p>
      <p>
        Sam looks at the piles and frowns. &ldquo;So I&apos;m in the same pile as the cotton? But the cotton doesn&apos;t
        do anything. I&apos;m the one who works!&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Sam has a point. If you were sorting Mr. Moneybags&apos; workshop to find out where the extra money comes from,
      which things would you put together, and which would you keep apart?
    </p>
  ),

  struggle: [<QuesnaysTwoPiles key="a" />],
  reveal: [<TwoWaysToSort key="b" />],

  eli5: "Quesnay sorted a farm into things that last for years and things used up every year. Adam Smith used the same idea for every business, but he put Sam in the same pile as the cotton. That hid the one part that makes the extra money.",

  grownUp: (
    <>
      <p>
        This chapter, like the next, is about the economists who came before Marx. The <strong>Physiocrats</strong>,
        led by François Quesnay, split the farmer&apos;s capital into <strong>original advances</strong> (buildings,
        implements, cattle, replaced only over many years) and <strong>annual advances</strong> (seed, wages, replaced
        every year). Marx praises this. Quesnay saw the split inside productive capital, and saw that it comes from the
        way each part passes its value into the product and is replaced: piecemeal, or all at once. But he applied it
        only to farming, because the Physiocrats believed only agriculture produced a surplus, as a gift of nature.
      </p>
      <p>
        Adam Smith generalised Quesnay&apos;s split into <strong>fixed</strong> and <strong>circulating capital</strong>{" "}
        for every business. Marx says that generalising was his only progress, and that his working-out was &ldquo;far
        inferior&rdquo; to Quesnay&apos;s. Smith muddled circulating capital with capital in circulation (goods and money
        on the market), even using a merchant as his example. Worse, by putting wages in the same pile as raw materials,
        he hid the distinction that matters for surplus-value: <strong>constant capital</strong> (machine and cotton,
        which only pass on their value) against <strong>variable capital</strong> (labour-power, which creates new value).
        He even listed the workers&apos; means of subsistence instead of their labour-power, and called the farmer&apos;s
        labouring cattle &ldquo;productive labourers&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        How you sort capital decides what you can see. Sorted by how fast it comes back (fixed or circulating), a
        worker&apos;s wage looks just like cotton. Sorted by what it does (constant or variable), the wage is the only part
        that grows.
      </p>
      <p>
        Marx argues that Smith&apos;s muddle became the textbook way of seeing a business, and that it buried the
        question of where profit comes from. The difference between constant and variable capital, Marx says, is
        &ldquo;buried&rdquo; beneath the difference between fixed and circulating.
      </p>
    </>
  ),

  critics: [
    {
      who: "Different questions",
      point: (
        <p>
          Historians of economic thought point out that Smith split capital into fixed and circulating for practical
          reasons: how a business finances itself and how fast money returns. He was not trying to answer Marx&apos;s
          question about the source of surplus-value, so judging his categories by that test may be unfair.
        </p>
      ),
    },
    {
      who: "Quesnay's admirers",
      point: (
        <p>
          Many economists honour Quesnay for a different reason: his picture of money and goods flowing between classes
          is seen as an ancestor of modern input-output analysis, which won Wassily Leontief a Nobel prize. Marx admired
          that side of Quesnay too, and returns to it in Chapter 19.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which two piles did Quesnay sort a farmer's capital into?",
      options: ["Rich and poor", "Things that last for years, and things used up every year", "Money and goods"],
      answer: 1,
      why: "Original advances (barn, plough, cattle) last for years; annual advances (seed, wages) are used up within the year.",
    },
    {
      q: "In Adam Smith's piles, which part of the workshop sits in the same pile as Sam's wage?",
      options: ["The spinning machine", "The cotton", "Mr. Moneybags' coat"],
      answer: 1,
      why: "Both the cotton and the wage are paid back all at once when the yarn is sold, so Smith calls both circulating.",
    },
    {
      q: "Why does Marx say Smith's sorting hides the secret of profit?",
      options: [
        "Because it puts labour-power, the only part that makes new value, in with raw materials",
        "Because it forgets about the machine",
        "Because Smith never wrote about workshops",
      ],
      answer: 0,
      why: "Sorted by speed of return, the wage looks like cotton. Sorted by what each part does, only labour-power creates more value than it costs.",
    },
  ],

  remember: [
    "Quesnay split a farmer's capital into original advances (lasting years) and annual advances (used up yearly).",
    "The Physiocrats thought only farming made a surplus, as a gift of nature.",
    "Adam Smith turned Quesnay's split into fixed and circulating capital for every business.",
    "Putting wages in the same pile as raw materials hides the difference between constant and variable capital.",
  ],

  terms: ["physiocrats", "avances"],

  source: (
    <p>
      Covers Volume II, Chapter 10 (&ldquo;Theories of Fixed and Circulating Capital. The Physiocrats and Adam
      Smith&rdquo;). Volume II was put together by Frederick Engels from Marx&apos;s manuscripts after Marx&apos;s death.
      Marx&apos;s own points: Quesnay&apos;s <em>avances primitives</em> and <em>avances annuelles</em>, Smith&apos;s
      &ldquo;only progress&rdquo; being the generalisation of the categories, his merchant example, his listing of
      means of subsistence instead of labour-power, and his line that the farmer&apos;s &ldquo;labouring cattle are
      productive labourers&rdquo;. Clerk Pim, Grandpa Ned&apos;s farm and the workshop figures are this site&apos;s.
    </p>
  ),
};

export default chapter;
