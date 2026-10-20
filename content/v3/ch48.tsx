import type { ChapterContent } from "@/components/ChapterTemplate";
import { NecessityAndFreedom, OnePie, ThreeSprings } from "./ch48-animations";

const chapter: ChapterContent = {
  bigQuestion: "Does money grow money, does land grow rent, and does work grow wages, each all by itself?",

  story: (
    <>
      <p>
        It is the last day of the year in Tiny Town, and everyone is counting. Mr. Moneybags counts his profit. Bea the
        banker counts the interest he paid her. The Landlord counts the rent Grandpa Ned paid for his fields. Sam counts his
        wages.
      </p>
      <p>
        &ldquo;My money worked hard this year,&rdquo; says Bea. &ldquo;My land gave a fine crop of rent,&rdquo; says the
        Landlord. &ldquo;And my work was paid in full,&rdquo; says Sam, a little unsure.
      </p>
      <p>
        It sounds like three springs, each bubbling up its own water. But Sam remembers the long hours in the workshop and
        wonders: are there really three springs, or is it all one?
      </p>
    </>
  ),

  guess: (
    <p>
      Can a pile of coins in a chest make more coins on its own? Can a field pay rent if nobody plants it? Where do you think
      profit, interest and rent really come from?
    </p>
  ),

  struggle: [<ThreeSprings key="a" />],
  reveal: [<OnePie key="b" />, <NecessityAndFreedom key="c" />],

  eli5: "It looks like money, land and work each make their own kind of income. Marx says all of it was really made by people working. And the less time we must spend working, the more time we have to be free.",

  grownUp: (
    <>
      <p>
        Chapter 48 is about the <strong>trinity formula</strong>: capital, profit (or interest); land, ground-rent; labour,
        wages. To the people inside the system, these look like three independent sources, each yielding its own revenue.
        Marx says the formula &ldquo;comprises all the secrets&rdquo; of how the production process appears on the surface.
      </p>
      <p>
        He argues the three supposed sources are not even alike. Capital is a social relation, land is a piece of nature,
        and &ldquo;labour&rdquo; in general is an abstraction. The pairing of each with an income is what he calls an
        &ldquo;enchanted, perverted, topsy-turvy world,&rdquo; in which Monsieur le Capital and Madame la Terre walk about
        as if things themselves had social powers. In fact, all three revenues are parts of one value created by labour:
        wages pay for labour-power, and profit, interest and rent are slices of surplus-value.
      </p>
      <p>
        Marx credits classical economists like Ricardo with seeing through much of this illusion, and accuses{" "}
        <strong>vulgar economy</strong> of simply tidying up and defending the businessman&apos;s view. &ldquo;All science
        would be superfluous,&rdquo; he writes, if appearance and essence directly coincided.
      </p>
      <p>
        The chapter also holds his best-known lines about the future. Material production, he says, always remains a{" "}
        <strong>realm of necessity</strong>. Freedom there can only mean the associated producers regulating their exchange
        with nature rationally, with the least effort and in conditions worthy of human beings. Beyond it begins the{" "}
        <strong>realm of freedom</strong>, human development as an end in itself, and &ldquo;the shortening of the
        working-day is its basic prerequisite.&rdquo;
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Profit, interest, rent and wages look like rewards paid by three separate helpers of production. Marx says this is
        how things appear, not how they work: all income comes out of the new value made by people&apos;s labour, and what the
        owners receive is the unpaid part of it.
      </p>
      <p>
        He also sketches a hope rather than a blueprint: that work which must be done could be organised in common and kept
        short, leaving people far more time for a life of their own.
      </p>
    </>
  ),

  critics: [
    {
      who: "Marginal productivity theory",
      point: (
        <p>
          John Bates Clark (<em>The Distribution of Wealth</em>, 1899) argued that in competitive markets each factor of
          production, labour, capital and land, is paid according to what its last unit adds to output. On this view the
          three incomes really do come from three productive contributions, and the trinity is not an illusion. Marx&apos;s
          defenders reply that machines and land help make things but do not by themselves explain who owns the result.
        </p>
      ),
    },
    {
      who: "The capital controversy",
      point: (
        <p>
          In the 1950s and 1960s economists in Cambridge, England (Joan Robinson, Piero Sraffa) attacked the idea of
          measuring &ldquo;capital&rdquo; as one productive quantity, and economists in Cambridge, Massachusetts defended it.
          Paul Samuelson conceded the main logical point in 1966, but most modern economics still uses
          factor-payment models because economists find them useful.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What is Marx's “trinity formula”?",
      options: [
        "Capital gives profit, land gives rent, labour gives wages",
        "Three rules for setting prices",
        "A recipe for making yarn",
      ],
      answer: 0,
      why: "It is the everyday idea that three separate sources each produce their own kind of income.",
    },
    {
      q: "In Tiny Town, where do Bea's interest and the Landlord's rent really come from, according to Marx?",
      options: ["From the coins and the field themselves", "From the surplus made in Sam's unpaid hours", "From the government"],
      answer: 1,
      why: "Marx says interest and rent are slices of surplus-value, the pie made in hours of work that were not paid for.",
    },
    {
      q: "What does Marx call the basic prerequisite for the realm of freedom?",
      options: ["More machines", "Higher prices", "A shorter working day"],
      answer: 2,
      why: "“The shortening of the working-day is its basic prerequisite.”",
    },
  ],

  remember: [
    "The trinity formula: capital brings profit, land brings rent, labour brings wages. It looks natural.",
    "Marx says it is an illusion: all four incomes come out of the value made by work.",
    "Profit, interest and rent are slices of one pie: the unpaid part of the working day.",
    "Work we must do to live is the realm of necessity. Free time for its own sake is the realm of freedom.",
    "For Marx, a shorter working day is the first step towards more freedom.",
  ],

  terms: ["trinity-formula", "vulgar-economy", "realm-of-freedom"],

  source: (
    <p>
      Covers Volume III, Chapter 48 (&ldquo;The Trinity Formula&rdquo;), English translation from the Institute of
      Marxism-Leninism (Progress Publishers / International Publishers) as hosted on marxists.org. Volume III was put
      together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; Engels notes that this chapter is
      assembled from fragments found in different parts of the manuscript, and one fragment breaks off mid-sentence. The
      phrases quoted (&ldquo;comprises all the secrets&rdquo;, &ldquo;enchanted, perverted, topsy-turvy world&rdquo;,
      &ldquo;all science would be superfluous&rdquo;, and the realm of freedom passage) are Marx&apos;s. The coin split in
      animation 48.2 is made up.
    </p>
  ),
};

export default chapter;
