import type { ChapterContent } from "@/components/ChapterTemplate";
import { SeedWheatAndBakersWheat, WhereDidTheCottonGo } from "./ch11-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is wheat in a field the same kind of thing as wheat in a bakery?",

  story: (
    <>
      <p>
        On market day, Grandpa Ned and Mia buy two sacks of wheat from the same cart. Mia carries hers to the bakery.
        Ned carries his to the field.
      </p>
      <p>
        A week later Mia has turned her wheat into bread, sold it, and has her coins back. Ned&apos;s wheat is under the
        ground. He won&apos;t see a coin from it until next summer.
      </p>
      <p>
        Clerk Pim, still sorting Mr. Moneybags&apos; capital, has found a third book, by an English economist called
        David Ricardo. &ldquo;Ricardo says Ned&apos;s wheat is a kind of fixed capital,&rdquo; Pim reports, &ldquo;because
        it comes back so slowly. Like a machine.&rdquo;
      </p>
      <p>Ned laughs. &ldquo;My wheat is nothing like my plough. Is it?&rdquo;</p>
    </>
  ),

  guess: (
    <p>
      Ned&apos;s plough lasts for many years. His seed wheat is gone after one sowing. Which matters more for sorting
      them: how long they take to pay back, or how they hand their value on to the harvest?
    </p>
  ),

  struggle: [<WhereDidTheCottonGo key="a" />],
  reveal: [<SeedWheatAndBakersWheat key="b" />],

  eli5: "Ricardo sorted capital into tools and wages, and the cotton fell out of both piles. He also called slow-growing seed wheat a kind of fixed capital, like a machine. Marx says what matters is how each thing hands on its value, and that Sam's work is the only part that makes new value.",

  grownUp: (
    <>
      <p>
        David Ricardo was sharper than Adam Smith about value and surplus-value, Marx says, but he took over
        Smith&apos;s muddle. Ricardo split capital into the part invested &ldquo;in tools, machinery, and buildings&rdquo;
        and the part &ldquo;that is to support labour&rdquo;. That quietly treats <strong>fixed capital</strong> as if it
        meant constant capital, and <strong>circulating capital</strong> as if it meant wages. Raw materials, like the
        cotton, fit neither pile, so they &ldquo;vanish&rdquo; from Ricardo&apos;s sight.
      </p>
      <p>
        Marx keeps the two distinctions apart. Fixed and circulating is about <em>circulation</em>: does a thing pass its
        value to the product bit by bit (a machine) or all at once (cotton, wages)? Constant and variable is about{" "}
        <em>making value</em>: does a thing only pass on old value (machine and cotton) or create new value (labour-power)?
        Mixing them up, he argues, hides the source of surplus-value, which is why the confusion was repeated
        &ldquo;parrotlike&rdquo; by later economists for a century.
      </p>
      <p>
        Ricardo&apos;s own example shows the slip. He called a farmer&apos;s seed wheat &ldquo;comparatively a fixed
        capital&rdquo; next to a baker&apos;s wheat, because it comes back after a year instead of a week. Marx answers
        that both hand over their whole value at once, so both are circulating; the farmer&apos;s is just slow. On the way,
        Marx turns a common phrase upside down: the capitalist does not &ldquo;advance&rdquo; wages, because the worker
        is paid after working. It is the worker who advances his labour to the capitalist.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Two different questions had been squeezed into one. How fast does money come back? And which part of the money
        grows? Only the second explains profit, and Ricardo&apos;s sorting answers the first while pretending to answer
        the second.
      </p>
      <p>
        And the everyday talk of bosses &ldquo;advancing&rdquo; wages gets things backwards. Workers hand over a week or a
        month of work before they are paid for it.
      </p>
    </>
  ),

  critics: [
    {
      who: "Ricardo's defenders",
      point: (
        <p>
          Piero Sraffa, who edited Ricardo&apos;s collected works, and others point out that Ricardo brought in fixed and
          circulating capital for one specific job: showing how a rise in wages changes relative prices when industries
          use more or less durable capital. For that job, durability really matters, and Marx himself takes the problem
          up in Volume III.
        </p>
      ),
    },
    {
      who: "Who carries the risk?",
      point: (
        <p>
          Mainstream economists see paying wages after the work as a matter of contract, not a hidden loan. They note
          that the employer usually carries the risk that the product will not sell, and pays the wage either way. Some
          do agree that unpaid wages are a real form of credit from workers, which is why many countries put them first
          in line when a firm goes bust.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Ricardo sorted capital into tools and machinery, and “capital to support labour”. What fell out of both piles?",
      options: ["The machine", "The raw materials, like cotton", "Sam's wages"],
      answer: 1,
      why: "Cotton is neither a tool nor a wage, so in Ricardo's sorting it simply vanishes from sight.",
    },
    {
      q: "Ned's seed wheat comes back only after a year. Is it fixed capital?",
      options: [
        "Yes, because it is slow",
        "No: it hands its whole value to the harvest at once, so it is circulating capital that happens to be slow",
        "Only in winter",
      ],
      answer: 1,
      why: "Fixed capital, like the plough, hands on its value a little at a time. Slow is not the same as fixed.",
    },
    {
      q: "Sam works all week and is paid on Saturday. Who is advancing what to whom?",
      options: ["Mr. Moneybags advances wages to Sam", "Sam advances a week of labour to Mr. Moneybags", "Nobody advances anything"],
      answer: 1,
      why: "Marx points out that the worker works first and is paid after, so the worker is the one giving credit.",
    },
  ],

  remember: [
    "Ricardo copied Smith's muddle of fixed and circulating with constant and variable capital.",
    "In his sorting the raw materials vanish, because they are neither tools nor wages.",
    "Fixed or circulating depends on how value passes into the product, not on how slowly it comes back.",
    "The worker advances labour to the capitalist, because wages are paid after the work is done.",
  ],

  terms: ["capital-to-support-labour"],

  source: (
    <p>
      Covers Volume II, Chapter 11 (&ldquo;Theories of Fixed and Circulating Capital. Ricardo&rdquo;), from the
      manuscripts Engels edited into Volume II. Marx&apos;s own points: Ricardo&apos;s &ldquo;capital that is to support
      labour&rdquo;, raw material vanishing from his sight, the confusion repeated &ldquo;parrotlike&rdquo; for a century,
      the labourer advancing his labour to the capitalist, and Ricardo&apos;s example of the farmer&apos;s seed wheat as
      &ldquo;comparatively a fixed capital&rdquo; beside the baker&apos;s wheat. The coins and timings in the animations are
      this site&apos;s.
    </p>
  ),
};

export default chapter;
