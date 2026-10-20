import type { ChapterContent } from "@/components/ChapterTemplate";
import { CrashRestartsTheClock, MakingIsNotSelling, TooMuchCapital } from "./ch15-animations";

const chapter: ChapterContent = {
  bigQuestion: "How can a town have empty mills and hungry workers at the same time?",

  story: (
    <>
      <p>
        One winter, something strange happens in Tiny Town. Mr. Moneybags&apos; warehouse is stuffed with yarn nobody is
        buying. Bea&apos;s bank is full of coins nobody wants to borrow. Half the machines in the mill stand silent.
      </p>
      <p>
        And outside the gate, Sam and dozens of others wait in the cold, ready to work, with families who need clothes. The
        machines are there. The cotton is there. The workers are there. The people who need things are there.
      </p>
      <p>
        Grandpa Ned shakes his head. &ldquo;In my day, hunger came from bad harvests. Now the barns are full and people
        still go hungry. What kind of famine is this?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Everything needed to make clothes and feed people is sitting right there in Tiny Town. So why does nobody start the
      machines? Think about what Mr. Moneybags needs before he will run his mill.
    </p>
  ),

  struggle: [<MakingIsNotSelling key="a" />, <TooMuchCapital key="b" />],
  reveal: [<CrashRestartsTheClock key="c" />],

  eli5: "The bosses only run the machines if they can sell for a profit. When they can't, machines stop and workers are sent home, even though people still need things. Then a crash clears things out, and the whole cycle starts again.",

  grownUp: (
    <>
      <p>
        Marx now draws out the contradictions inside the law of the falling rate of profit. First, producing surplus-value
        and <em>realising</em> it are different things. &ldquo;The conditions of direct exploitation, and those of realising
        it, are not identical.&rdquo; Production is limited only by the productive power of society; sale is limited by the
        proportions between branches and by the consumer power of society, which is held down by &ldquo;antagonistic
        conditions of distribution&rdquo; that keep most people&apos;s consumption near a minimum.
      </p>
      <p>
        Second, capital can be over-accumulated. Marx imagines an extreme case of absolute{" "}
        <strong>over-production of capital</strong>: extra capital that produces no more surplus-value, or even less, than
        before, for example when wages rise because every worker is employed. Then part of capital lies idle and part earns a
        lower rate, giving &ldquo;unemployed capital at one pole, and unemployed worker population at the other&rdquo;.
        Over-production of capital always includes over-production of commodities, Marx adds.
      </p>
      <p>
        Third, the way out is a <strong>crisis</strong>. Prices fall, the chain of payments breaks &ldquo;in a hundred
        places&rdquo;, credit collapses, some capital is withdrawn or destroyed, wages are pushed down and bosses rush to new
        machines. Constant capital is cheapened, the rate of profit recovers, and &ldquo;the cycle would run its course
        anew&rdquo;. Crises, Marx says, are &ldquo;but momentary and forcible solutions of the existing contradictions&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capitalism has a built-in drive to develop production without limit, but it only produces when it can make a profit.
        That clash shows up as booms and crashes. Marx sums it up in a famous line: &ldquo;The real barrier of capitalist
        production is capital itself.&rdquo;
      </p>
      <p>
        He also stresses what the crisis reveals. There are not too many necessities for people&apos;s needs, he says:
        &ldquo;Too little is produced to decently and humanely satisfy the wants of the great mass.&rdquo; Things are
        over-produced only compared with what can be sold at a profit.
      </p>
    </>
  ),

  critics: [
    {
      who: "Other explanations of crises",
      point: (
        <p>
          Most economists explain booms and busts without a falling rate of profit: Keynes pointed to swings in spending and
          investment, others to banking panics, money supply or shocks from outside. Even among Marxists there is a long
          debate about whether crises come mainly from falling profitability, from weak demand (underconsumption), or from
          imbalances between branches. Marx&apos;s own chapter mixes these threads, partly because Engels assembled it from
          unfinished notes.
        </p>
      ),
    },
    {
      who: "Capitalism keeps recovering",
      point: (
        <p>
          Critics point out that capitalist economies have recovered from every crisis since Marx&apos;s day and grown far
          richer overall, so crises look more like costly bumps than signs of a final barrier. Marx&apos;s defenders reply
          that this is exactly what the chapter describes: crises restore profitability for a while, at a heavy cost to
          workers, and then the cycle runs again.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why might yarn full of surplus-value never give Mr. Moneybags any profit?",
      options: ["Because the workers did not work", "Because it might not be sold", "Because yarn has no value"],
      answer: 1,
      why: "Marx says the conditions of making surplus-value and of realising it are not identical. Unsold yarn means unrealised profit.",
    },
    {
      q: "What does Marx mean by over-production of capital?",
      options: [
        "So much capital that adding more no longer brings more surplus-value",
        "Too many coins being minted",
        "Factories making too many hats",
      ],
      answer: 0,
      why: "Extra capital that earns no more profit lies idle: unemployed capital at one pole, unemployed workers at the other.",
    },
    {
      q: "How does Marx say a crisis helps the system start again?",
      options: [
        "It destroys and cheapens capital and pushes wages down, so profit can recover",
        "It makes everyone richer at once",
        "It ends capitalism for good",
      ],
      answer: 0,
      why: "Crises are momentary and forcible solutions: capital is destroyed or depreciated, the rate of profit recovers, and the cycle runs again.",
    },
  ],

  remember: [
    "Making surplus-value and selling it are two different things.",
    "Low wages limit what most people can buy, so goods can pile up unsold.",
    "Over-production of capital: idle money at one end, idle workers at the other.",
    "Crises violently clear out capital so that profit can recover, and the cycle starts again.",
    "Marx: the real barrier of capitalist production is capital itself.",
  ],

  terms: ["overproduction-of-capital"],

  source: (
    <p>
      Covers Volume III, Chapter 15 (&ldquo;Exposition of the Internal Contradictions of the Law&rdquo;), the last chapter
      of Part III. Volume III was assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; this
      chapter is among the less finished ones. All quoted phrases are Marx&apos;s; the Tiny Town details and the order of
      the four stations in animation 15.3 are our summary of his description. Quotations follow the International
      Publishers / Progress edition on marxists.org.
    </p>
  ),
};

export default chapter;
