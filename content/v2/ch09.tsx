import type { ChapterContent } from "@/components/ChapterTemplate";
import { MoreTurnedOver, TenYearHeartbeat } from "./ch09-animations";

const chapter: ChapterContent = {
  bigQuestion: "If some of the boss's money goes round five times a year and some only once in ten years, how fast does all of it go round?",

  story: (
    <>
      <p>
        At the end of the year Clerk Pim adds up the books. The money for cotton and wages went out and came home again
        and again, five times this year. The money tied up in the mill and its machines came home only a tenth of the way.
      </p>
      <p>
        Pim gets a strange answer. More money has flowed round in a year than Mr. Moneybags ever put in! &ldquo;Are we
        richer than we thought?&rdquo; he asks. Mr. Moneybags shakes his head. &ldquo;No, Pim. The same coins just went
        round more than once.&rdquo;
      </p>
      <p>
        Then Grandpa Ned tells him something odd. &ldquo;Every ten years or so the whole town goes through hard times, and
        afterwards everybody buys new machines at once.&rdquo; Could the lives of the machines and the hard times be
        connected?
      </p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags put in £100,000. Could more than £100,000 flow through his business in one year without him getting
      any richer? And why might hard times come round every ten years or so?
    </p>
  ),

  struggle: [<MoreTurnedOver key="a" />],
  reveal: [<TenYearHeartbeat key="b" />],

  eli5: "A boss's quick money and slow money go round at different speeds, so Marx works out an average speed. The same coins can go round several times, so more money flows through than was put in. The slow money tied up in machines sets a long rhythm, and Marx thinks hard times follow that rhythm.",

  grownUp: (
    <>
      <p>
        The <strong>aggregate turnover</strong> of an advanced capital is the average turnover of its parts. Because
        fixed and circulating capital differ in kind as well as speed, Marx puts them all into money terms: a £10,000
        machine lasting ten years returns £1,000 a year as money, just like circulating capital does.
      </p>
      <p>
        His example: £80,000 fixed capital lasting ten years and £20,000 circulating capital turned over five times a
        year. In one year £8,000 + £100,000 = £108,000 is turned over, more than the £100,000 advanced. Yet the advance
        itself has not grown. What returns to be sent out again is the £20,000 and the £8,000 of wear, while the machines,
        now worth £72,000, keep working for nine more years.
      </p>
      <p>
        So the capital passes through a <strong>turnover cycle</strong> as long as the life of its fixed capital. As
        fixed capital grows in size and durability, this cycle stretches to many years, in Marx&apos;s day about ten;
        at the same time constant technical change and moral depreciation shorten it. This cycle, Marx argues, is a{" "}
        <em>material basis</em> for periodic crises: business goes through depression, medium activity, a rush and
        crisis, and a crisis is the starting point of large new investment.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The long lives of machines and buildings tie capital to a rhythm of many years. When many firms replace their
        equipment together after a crisis, their new investment starts a fresh cycle, which helps explain why booms and
        slumps come round in waves.
      </p>
      <p>
        Marx is careful: this is a material basis, not the full cause, and he says he is not concerned with the exact
        number of years.
      </p>
    </>
  ),

  critics: [
    {
      who: "Business-cycle researchers",
      point: (
        <p>
          Economists did find a cycle of roughly seven to eleven years in the 1800s, named after Clément Juglar. But
          later research found replacement waves too weak and irregular to drive cycles on their own, and twentieth-century
          slumps came at uneven intervals, driven by credit, demand and policy. Marx&apos;s defenders reply that he called
          fixed capital only a material basis, not the whole cause.
        </p>
      ),
    },
    {
      who: "Expectations first",
      point: (
        <p>
          John Maynard Keynes argued that swings in investment depend mostly on businesspeople&apos;s expectations and
          confidence, which can change quickly, rather than on how long machines physically last. Many economists today
          share that view, though Keynes too stressed how long-lived capital makes investment lumpy.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's example, how much capital is turned over in one year?",
      options: ["£100,000", "£108,000", "£80,000"],
      answer: 1,
      why: "The circulating £20,000 goes round five times (£100,000) and the fixed capital returns £8,000: £108,000 in all.",
    },
    {
      q: "Does turning over £108,000 mean the capitalist advanced more than £100,000?",
      options: ["Yes, he must have added £8,000", "No, the same money just went round more than once", "Yes, because machines create money"],
      answer: 1,
      why: "The advance is still £100,000. The circulating part simply went round five times.",
    },
    {
      q: "What does Marx say the long life of fixed capital gives to periodic crises?",
      options: ["Nothing at all", "A material basis", "A complete explanation"],
      answer: 1,
      why: "He calls the cycle of turnovers tied to fixed capital a material basis for crises, one ingredient among others.",
    },
  ],

  remember: [
    "The whole capital's turnover is an average of fast and slow parts.",
    "More can be turned over in a year than was advanced, because the same money goes round several times.",
    "The life of fixed capital sets a turnover cycle of many years, about ten in Marx's day.",
    "Marx sees that cycle as a material basis for crises that come back again and again.",
  ],

  terms: ["aggregate-turnover", "turnover-cycle"],

  source: (
    <p>
      Covers Volume II, Chapter 9 (&ldquo;The Aggregate Turnover of Advanced Capital, Cycles of Turnover&rdquo;),
      assembled by Engels from Marx&apos;s manuscripts. From the text: reducing fixed and circulating capital to money
      to find an average; the £10,000 machine returning £1,000 a year; £80,000 fixed and £20,000 circulating turned over
      five times, giving £108,000; the machines left worth £72,000 for nine more years; the roughly ten-year cycle as
      &ldquo;a material basis for the periodic crises&rdquo;, with depression, medium activity, precipitancy and
      crisis; a crisis as the starting point of large new investments. The shape of the business wave in animation 9.2
      is drawn for illustration only.
    </p>
  ),
};

export default chapter;
