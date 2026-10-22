import type { ChapterContent } from "@/components/ChapterTemplate";
import { OneLongJob, WhoCanBuildLong, YarnOrLocomotive } from "./ch12-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does building a train need far more money than spinning yarn?",

  story: (
    <>
      <p>
        A new workshop has opened at the edge of Tiny Town: the Forge, run by a man everyone calls the Ironmaster. His
        workshop is the same size as Mr. Moneybags&apos; spinning mill. His workers work the same long days. He even
        spends the same amount each week.
      </p>
      <p>
        But the Ironmaster builds locomotives, and a locomotive takes three months to finish. Every Saturday Mr.
        Moneybags sells a pile of yarn and has his money back. Every Saturday the Ironmaster pays his workers and buys
        more iron, and has nothing to sell but a half-built engine.
      </p>
      <p>
        &ldquo;We spend the same,&rdquo; the Ironmaster grumbles to Bea at the bank, &ldquo;so why do I always need so much
        more money than he does?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Both workshops spend 10 coins a week. The mill sells its yarn every week; the Forge sells one locomotive every
      twelve weeks. How many coins does each owner need to keep going, before any money comes back?
    </p>
  ),

  struggle: [<YarnOrLocomotive key="a" />, <OneLongJob key="b" />],
  reveal: [<WhoCanBuildLong key="c" />],

  eli5: "Some things are finished every day, like yarn, and some take months, like a train. The longer you wait to sell, the more money you have to keep paying in before any comes back. So long jobs need bigger bosses, or borrowed money.",

  grownUp: (
    <>
      <p>
        Marx compares a cotton-spinning mill with a locomotive works: same capital, same composition, same ten-hour
        working day. The only difference is how long it takes to finish a product. He calls the number of connected
        working days needed to complete one product the <strong>working period</strong>. A locomotive might take 100
        working days, a single connected job of 1,000 working hours; a warship a year or more; grain about a year; timber
        from twelve to a hundred years.
      </p>
      <p>
        A long working period slows the turnover of capital, but it does something else too. Fresh wages and materials
        must be paid in every week while the half-made product stays locked in production. So the locomotive builder
        needs twelve times as much circulating capital as the spinner, even though their weekly outlays are equal. Fixed
        capital is different: the machinery works on either way, passing its value into the product in small or large
        doses.
      </p>
      <p>
        Long working periods also make crises more damaging. A spinning mill simply stops making tomorrow&apos;s yarn; an
        interrupted ship or railway leaves labour and materials wasted. For these reasons, Marx says, very long jobs
        such as roads and canals were at first done at public expense. They become capitalist business only when capital
        is highly concentrated and the credit system lets a capitalist work with other people&apos;s money, like the
        London builders of the 1850s who built whole streets on borrowed money and were ruined when a crisis cut off
        their loans.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        How long it takes to make something is not just an engineering fact. It decides how much capital you need, how
        risky the business is, and who can do it at all.
      </p>
      <p>
        Machines and big teams can shorten a working period, but usually only by tying up even more capital at once. So
        long working periods push production towards the largest capitals, and towards credit.
      </p>
    </>
  ),

  critics: [
    {
      who: "Private canals and turnpikes",
      point: (
        <p>
          Economic historians note that in eighteenth-century Britain many canals and toll roads were built by private
          capital, through joint-stock companies and wealthy individuals such as the Duke of Bridgewater, whose canal
          opened in 1761. That seems to come earlier than Marx&apos;s picture of long works being left to the state until
          capital and credit were highly developed.
        </p>
      ),
    },
    {
      who: "Waiting has a price",
      point: (
        <p>
          Mainstream economists fully agree that long projects tie up more capital. But they explain the extra return on
          such projects as interest: a payment for waiting and for risk. On their view, the Forge earns more on its
          capital because its owner&apos;s money is locked up longer, not because of anything hidden in the work.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Both workshops spend 10 coins a week. The mill sells yarn weekly; the locomotive takes 12 weeks. How much does the Forge need before money comes back?",
      options: ["10 coins", "60 coins", "120 coins"],
      answer: 2,
      why: "It pays 10 coins every week for 12 weeks before the locomotive is paid for: twelve times what the spinner needs.",
    },
    {
      q: "What does Marx call the run of connected working days needed to finish one product?",
      options: ["A working day", "A working period", "A holiday"],
      answer: 1,
      why: "A working day is one day of work. A working period is all the connected days needed for one finished product.",
    },
    {
      q: "Why did long jobs like whole streets of houses become capitalist business only later?",
      options: [
        "Because bricks were invented later",
        "Because they need very big capitals, or credit to use other people's money",
        "Because builders were lazy before",
      ],
      answer: 1,
      why: "A long working period ties up huge sums. Only concentrated capital, or credit, can carry that.",
    },
  ],

  remember: [
    "A working period is the number of connected working days needed to finish one product.",
    "A long working period means fresh capital must be paid in week after week before anything comes back.",
    "A crisis hurts long jobs most: half a ship or half a train cannot be sold.",
    "Long jobs pull production towards the biggest capitals and towards credit.",
  ],

  terms: ["working-period", "speculative-building"],

  source: (
    <p>
      Covers Volume II, Chapter 12 (&ldquo;The Working Period&rdquo;), from the manuscripts Engels edited into Volume II.
      Marx&apos;s own examples: the cotton-spinning mill and the locomotive works with equal ten-hour days, three months
      for a locomotive and &ldquo;twelve times as much circulating capital&rdquo;, 100 working days making 1,000
      working-hours, the warship, grain, cattle and timber, and the London builder&apos;s evidence to the Select Committee
      on Bank Acts, 1857 (100 to 200 houses, twenty to fifty times his resources, sold at auction for half their cost).
      The Forge, the Ironmaster and the 10 coins a week are this site&apos;s.
    </p>
  ),
};

export default chapter;
