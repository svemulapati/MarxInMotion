import type { ChapterContent } from "@/components/ChapterTemplate";
import { ThreeWaysToWork, WhyItLooksFair, WorthThreeMakesSix } from "./ch19-animations";

const chapter: ChapterContent = {
  bigQuestion: "When Sam gets paid for his day, is he really paid for all of it?",

  story: (
    <>
      <p>
        It is Saturday evening. Mr. Moneybags counts 3 coins into Sam&apos;s hand. &ldquo;Your pay for the day,&rdquo; he
        says, &ldquo;times six days.&rdquo; Sam walks home feeling fairly treated. He worked, he was paid, nobody cheated
        him.
      </p>
      <p>
        At the bakery Mia is closing up. &ldquo;My great-grandmother,&rdquo; she says, &ldquo;worked three days a week on
        her own little field, and three days on the lord&apos;s field for nothing. She hated it, but at least she knew
        exactly which days were for him.&rdquo;
      </p>
      <p>
        Sam laughs. &ldquo;Lucky me. Nobody makes me work for free.&rdquo; Then he stops. He remembers working out
        that only the first 6 of his 12 hours make the value of his wage. So where is the line in his day? Why can&apos;t he
        see it?
      </p>
    </>
  ),

  guess: (
    <p>
      Mia&apos;s great-grandmother could see which days were for the lord. Sam can&apos;t see any such line in his day.
      Do you think the line has gone away, or is something hiding it?
    </p>
  ),

  struggle: [<ThreeWaysToWork key="a" />, <WorthThreeMakesSix key="b" />],
  reveal: [<WhyItLooksFair key="c" />],

  eli5: "Sam is paid “for the day”, so his whole day looks paid. But only the first half of the day makes his wage, and the second half goes to the boss. The wage hides that line, like a tablecloth hides the crack in a table.",

  grownUp: (
    <>
      <p>
        Everyday talk calls the wage &ldquo;the price of labour&rdquo; or &ldquo;the value of labour&rdquo;. Marx says the
        phrase makes no sense. Labour is what creates value, so it has no value of its own; asking for &ldquo;the value
        of labour&rdquo; is, he says, as imaginary as asking for the value of the earth. What Sam sells is his{" "}
        <strong>labour-power</strong>, his ability to work for a day. With Marx&apos;s own numbers, a 12-hour day of
        labour-power is worth 3 shillings (6 hours&apos; worth of value), while the labour it performs creates 6.
      </p>
      <p>
        The <strong>wage-form</strong> turns &ldquo;the value of a day&apos;s labour-power&rdquo; into &ldquo;the value
        of a day&apos;s labour&rdquo;, and in doing so it wipes out every trace of the split between necessary and
        surplus labour. All labour appears as paid. Compare the <strong>corvée</strong>, where the peasant&apos;s work
        for himself and his forced work for the lord were separate in place and time, and slavery, where even the work
        that fed the slave looked like work for the master. With the slave, ownership hides the paid part; with the
        wage-worker, money hides the unpaid part.
      </p>
      <p>
        The illusion is not a trick anyone plays. It grows out of everyday facts: wages are paid after the work is
        done; they rise with longer hours (but so does the cost of hiring a machine for a week instead of a day); and
        better or faster workers earn more. To the worker, 12 hours are simply how he gets his 3 shillings. To the
        capitalist, profit seems to come from buying cheap and selling dear.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The wage is the form in which exploitation becomes invisible. Because the whole day looks paid, both worker and
        boss honestly believe the deal is an exchange of equals, and so the wage-form is the basis of everyday ideas of
        fairness and freedom at work.
      </p>
      <p>
        Marx is not saying anyone is lying. He says the appearance comes from the relations themselves, and that it
        shows the very opposite of what is going on underneath.
      </p>
    </>
  ),

  critics: [
    {
      who: "Marginal productivity",
      point: (
        <p>
          In the mainstream view, developed by John Bates Clark (<em>The Distribution of Wealth</em>, 1899), competitive
          markets tend to pay each worker roughly the extra output their work adds. Then the wage really does pay for
          the work done, and there is no hidden unpaid half. Marx&apos;s unpaid hours follow from his labour theory of
          value; reject that theory and the hidden line disappears.
        </p>
      ),
    },
    {
      who: "Market power",
      point: (
        <p>
          Since Joan Robinson&apos;s work in 1933, economists have studied employers who face little competition for
          workers. They can pay less than the work adds. This partly echoes Marx&apos;s intuition, but it explains the
          gap by bargaining power, which differs from job to job, rather than by a law built into every wage.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam is paid 3 coins “for the day”. According to Marx, what did Mr. Moneybags actually buy?",
      options: ["Sam's labour", "Sam's labour-power for a day", "Sam's yarn"],
      answer: 1,
      why: "Moneybags bought Sam's ability to work for a day. Using it, Sam's work creates more value than it costs.",
    },
    {
      q: "In which system could anyone see which work was for the master?",
      options: ["Wage work", "Slavery", "The corvée"],
      answer: 2,
      why: "In the corvée, work for yourself and work for the lord happened on different days and different fields.",
    },
    {
      q: "Why does Marx call “the value of labour” a strange phrase?",
      options: [
        "Labour creates value but has none of its own; what is sold is labour-power",
        "Because labour should be free",
        "Because coins can't measure anything",
      ],
      answer: 0,
      why: "Value is measured by labour, so asking for labour's own value goes round in a circle. The thing with a value is labour-power.",
    },
  ],

  remember: [
    "The wage is called “the price of labour”, but what Sam sells is his labour-power.",
    "Sam's day of work makes 6 coins; his labour-power costs 3. The wage hides the gap.",
    "In the corvée you could see the unpaid work. For the slave, all work looked unpaid. With wages, all work looks paid.",
    "Being paid after the work, paid more for longer days, paid more for being quicker: real facts that make the wage look like pay for all of the work.",
  ],

  terms: ["wage-form", "corvee"],

  source: (
    <p>
      Covers Volume I, Chapter 19 (Fowkes: &ldquo;The Transformation of the Value (and Respectively the Price) of
      Labour-Power into Wages&rdquo;; Moore and Aveling: &ldquo;...(and Respective Price)...&rdquo;). Marx&apos;s own:
      the 12-hour day, 3 shillings, 6 hours; &ldquo;as imaginary as the value of the earth&rdquo;; the corvée, slavery
      and wage-labour compared; wages paid after the work; the machine hired by the day or the week; individual
      differences in pay. Mia&apos;s great-grandmother, the loom-hire prices and the fast spinner&apos;s pay in 19.3
      belong to this site.
    </p>
  ),
};

export default chapter;
