import type { ChapterContent } from "@/components/ChapterTemplate";
import { HostileBrothers, RodbertusSums } from "./ch08-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does a landlord get rent even for the poorest field?",

  story: (
    <>
      <p>
        On a rainy afternoon, Grandpa Ned goes to the town library to get out of the wet. On the top shelf sits a row of
        dusty books by people who studied money and work long before Marx. Tiny Town calls it the Old Thinkers&apos;
        Shelf.
      </p>
      <p>
        Ned pulls down a thick letter from 1851. Its author, a Prussian landowner called Rodbertus, seems to step right off
        the page. &ldquo;I know why you pay rent,&rdquo; he says. &ldquo;Farmers never count the cost of their own seed.
        That makes farming look extra profitable, and the extra goes to the landlord.&rdquo;
      </p>
      <p>
        Ned frowns. He saves his best wheat for seed every year. He could have sold it. Surely it costs him something?
      </p>
      <p>
        So why does the Landlord get rent, even for Ned&apos;s worst, stoniest field? Is Rodbertus right, or is something
        else going on?
      </p>
    </>
  ),

  guess: (
    <p>
      Rodbertus says rent comes from farmers forgetting to count their seed. If Ned counted his seed properly, would rent
      disappear? Or does the Landlord&apos;s ownership of the land matter more than the farmer&apos;s sums?
    </p>
  ),

  struggle: [<RodbertusSums key="a" />],
  reveal: [<HostileBrothers key="b" />],

  eli5: "Rodbertus thought farms earn extra because farmers forget to count their seed, but seed costs something too. Marx thought farms earn extra because they still use lots of people's work and few machines. The landlord's fence lets him keep that extra as rent.",

  grownUp: (
    <>
      <p>
        This chapter is a long digression in Marx&apos;s notebooks, prompted by <strong>Rodbertus&apos;s theory of
        rent</strong> in his third letter to von Kirchmann (Berlin, 1851). Rodbertus argued that agriculture has no
        outlay on raw material, because the farmer does not reckon his seed and fodder as costs. With the same
        surplus-value spread over a smaller capital, the farm&apos;s rate of profit comes out higher than industry&apos;s,
        and the excess forms rent. In Rodbertus&apos;s own scheme, 50 on 200 gives 25% against industry&apos;s 50 on
        300, or 16⅔%.
      </p>
      <p>
        Marx calls this a miscalculation. Seed and fodder have value and enter the farmer&apos;s costs; and if Rodbertus
        counts raw material as coming into industry from outside, he must equally count the machines, tools and buildings
        that come into agriculture from industry.
      </p>
      <p>
        Then Marx develops his own idea, the one he later works out as <strong>absolute rent</strong> in Volume III,
        Chapter 45. Competition does not sell goods at their values. It turns values into average prices, so that equal
        capitals get equal profits; capitalists share the surplus-value, Marx says, like &ldquo;hostile brothers&rdquo;
        dividing loot. Agriculture, where &ldquo;manual labour is still relatively dominant&rdquo;, has more variable
        capital for each 100 of capital, so its products contain more surplus-value than the average. Private ownership of
        land lets the landowner stop that excess from being shared out: the product sells at its value, above its average
        price, and the difference becomes rent. Marx stresses this is &ldquo;a historical difference which can
        disappear&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Rent is not created by soil, and not by a farmer&apos;s bad bookkeeping. It is surplus-value made by farm workers.
        What lets the landowner take part of it is ownership: the right to shut land away unless a rent is paid.
      </p>
      <p>
        Marx credits Rodbertus with one real insight buried in his errors: that farm products may sell at their full
        value, above the prices of production that competition imposes elsewhere. Marx keeps that kernel and throws the
        rest away.
      </p>
    </>
  ),

  critics: [
    {
      who: "Later economists",
      point: (
        <p>
          Most economists today do not explain rent with labour values at all. They see rent as the price of a scarce
          resource, set by what the land adds to output. On that view there is no special &ldquo;absolute rent&rdquo;,
          and modern farming, among the most machine-heavy industries there is, hardly fits a picture of agriculture as
          the home of hand labour. Marx himself said the difference might disappear.
        </p>
      ),
    },
    {
      who: "Rodbertus's admirers",
      point: (
        <p>
          Rodbertus was respected in his time as an early writer on social reform. After Marx&apos;s death some of his
          admirers claimed Marx had borrowed his ideas from Rodbertus; Engels answered them in his 1885 preface to Volume
          II. Historians still read Rodbertus as an original, if conservative, thinker.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What did Rodbertus say farmers forget to count?",
      options: ["Their wages", "Their seed and fodder", "Their rent"],
      answer: 1,
      why: "He said seed and fodder come from the farm itself, so farmers treat them as free. Marx says they cost something like any raw material.",
    },
    {
      q: "In Rodbertus's sums, why does the farm's rate of profit come out higher than the mill's?",
      options: [
        "The same surplus-value is spread over a smaller capital",
        "Farm workers are paid more",
        "Wheat is always dear",
      ],
      answer: 0,
      why: "50 on 200 is 25%, while 50 on 300 is 16⅔%. Leave out the seed and the farm's capital looks smaller.",
    },
    {
      q: "In Marx's own explanation, what lets the landlord keep the farm's extra surplus-value?",
      options: ["The farmer's mistake", "Owning the land, so it can be shut away unless rent is paid", "A law against machines"],
      answer: 1,
      why: "Private ownership of land acts like a fence: it stops the farm's extra from being shared out with other trades.",
    },
  ],

  remember: [
    "Rodbertus said rent comes from farmers not counting the cost of seed and fodder.",
    "Marx said that was a miscalculation: seed and fodder have value too.",
    "Competition shares surplus-value out between trades by size of capital.",
    "Where farming still uses more hands than machines, it makes extra surplus-value, and owning land lets the landlord keep that extra as rent.",
    "Marx called this a historical difference that could disappear.",
  ],

  terms: ["rodbertus-rent"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter VIII (&ldquo;Herr Rodbertus. New Theory of Rent.
      (Digression)&rdquo;), shown here as Volume IV, Chapter 8. The text is Marx&apos;s 1861 to 1863 manuscript, first
      edited by Karl Kautsky (1905 to 1910); this site follows the Progress Publishers English edition in three parts, as
      hosted on marxists.org. From the text: Rodbertus&apos;s third letter to von Kirchmann (Berlin, 1851); his scheme of
      100 machinery, 100 wages and 50 surplus-value in agriculture against raw materials taken as 100 in industry
      (25% against 16⅔%); the &ldquo;hostile brothers&rdquo;; &ldquo;manual labour is still relatively dominant&rdquo;;
      &ldquo;a historical difference which can disappear&rdquo;. The numbers in animation 8.2 (20, 30, 40) are this
      site&apos;s.
    </p>
  ),
};

export default chapter;
