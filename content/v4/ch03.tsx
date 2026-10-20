import type { ChapterContent } from "@/components/ChapterTemplate";
import { DidTheRuleBreak, TheFirstCutAndTheSecond, TwoRulersForValue } from "./ch03-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is a thing worth the work that went into it, or the work it can buy?",

  story: (
    <>
      <p>
        The most famous book on the Old Thinkers&apos; Shelf is a big one with a plain cover: <em>The Wealth of
        Nations</em>, by Adam Smith, from 1776. When Smith climbs down, the whole town gathers to listen.
      </p>
      <p>
        &ldquo;Labour,&rdquo; says Smith, &ldquo;is the real measure of value.&rdquo; Ava and Leo cheer. &ldquo;Exactly!
        My coat took 10 hours, his linen took 10 hours, so we swap one for one.&rdquo;
      </p>
      <p>
        Then Sam steps forward. &ldquo;I work 12 hours for Mr. Moneybags. But my 3 coins only buy things that took 6
        hours to make. So is my work worth 12 hours, or 6?&rdquo;
      </p>
      <p>Smith opens his mouth, closes it, and turns a page. Even the great Adam Smith has to think about that one.</p>
    </>
  ),

  guess: (
    <p>
      Sam gives 12 hours of work and gets back goods that took 6 hours to make. Has the fair rule of swapping, equal
      work for equal work, been broken? Or is something else going on?
    </p>
  ),

  struggle: [<TwoRulersForValue key="a" />, <TheFirstCutAndTheSecond key="b" />],
  reveal: [<DidTheRuleBreak key="c" />],

  eli5: "Adam Smith said work measures value, but he mixed up the work in a thing with the work it can buy. He saw that the landlord and the boss each take a slice of what the worker made. Marx said that is exactly where the extra comes from, and no rule was broken to get it.",

  grownUp: (
    <>
      <p>
        Marx finds two different definitions of value in Smith. In one, value is determined by the quantity of labour
        contained in a commodity. In the other, it is the quantity of living labour the commodity can buy, or{" "}
        <strong>labour commanded</strong>: in Smith&apos;s words, &ldquo;the quantity of labour which it enables him to
        purchase or command&rdquo;. In a world of producers swapping their own goods the two coincide. Once capital
        employs wage-labour they split apart, and measuring by labour commanded really means measuring by wages, which
        change like any other value.
      </p>
      <p>
        Yet Smith also sees something true. In the &ldquo;original state of things&rdquo; the whole produce of labour
        belongs to the labourer. Then, he writes, the landlord&apos;s rent &ldquo;makes the first deduction from the
        produce of the labour which is employed upon land&rdquo;, and profit &ldquo;makes a second deduction&rdquo;; the
        same holds &ldquo;in all arts and manufactures&rdquo;. Marx treats these <strong>deductions</strong> as
        Smith&apos;s real grasp of the origin of surplus-value: profit is a deduction from the value the workers add.
      </p>
      <p>
        Marx calls it &ldquo;Adam Smith&apos;s great merit&rdquo; that he senses a flaw: with capital and landed property
        the law of value seems to change into its opposite, more labour exchanged for less. His weakness is that the
        contradiction &ldquo;shakes his confidence in the general law&rdquo;. Smith then slides into treating wages,
        profit and rent as &ldquo;the three original sources&rdquo; of value, and leaves out the constant capital in the
        price (the dogma met in Volume II, Chapter 19). The question of productive and unproductive labour follows in the
        next chapter.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Smith was right that rent and profit are slices cut from what the workers make. He was wrong to think that this
        meant the fair rule of exchange had broken. The worker sells his labour-power at its value. The boss then uses it
        for longer than it takes to replace that value, and the difference is surplus-value.
      </p>
      <p>
        So the extra comes from inside production, with no cheating at the till. Smith came closer to seeing this than
        anyone before him, and then backed away from it.
      </p>
    </>
  ),

  critics: [
    {
      who: "Smith scholars",
      point: (
        <p>
          Many readers of Smith argue there is no muddle at all. Labour commanded, they say, was Smith&apos;s way of
          measuring real wealth and comparing it across times and places, not a theory of what causes prices. His
          labour-contained account fitted only the &ldquo;early and rude state&rdquo;, and he deliberately moved to a
          cost-of-production view for modern societies.
        </p>
      ),
    },
    {
      who: "Later mainstream economics",
      point: (
        <p>
          Economists after the 1870s mostly dropped labour as the measure of value altogether. They kept something closer
          to Smith&apos;s later view, in which prices reflect the costs of all the inputs together with demand. On that
          view, the &ldquo;deductions&rdquo; are simply payments for land and capital, which also help to produce the
          output.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What are Adam Smith's two rulers for value?",
      options: [
        "Gold and silver",
        "The labour put into a thing, and the labour it can buy (command)",
        "Supply and demand",
      ],
      answer: 1,
      why: "Smith swaps between labour contained and labour commanded. They agree only when makers swap their own goods.",
    },
    {
      q: "In Smith's story, what is the landlord's rent?",
      options: [
        "A reward for making the soil",
        "The first deduction from what the worker produced",
        "A tax paid to the king",
      ],
      answer: 1,
      why: "Smith: rent makes the first deduction from the produce of labour, and profit makes a second.",
    },
    {
      q: "Sam is paid 3 coins and works 12 hours. Did the fair rule of exchange break?",
      options: [
        "Yes, Moneybags cheated him",
        "No: Sam sold his labour-power at its value, and its use made more",
        "Yes, the rule only works in the old days",
      ],
      answer: 1,
      why: "Marx's answer to Smith's puzzle: the price of labour-power is fair, and the extra comes from using it longer.",
    },
  ],

  remember: [
    "Smith said labour measures value, but swapped between the work in a thing and the work it can buy.",
    "His best idea: rent and profit are deductions, slices cut from what the worker made.",
    "Smith felt the rule of fair exchange seemed to break once there were bosses and landlords.",
    "Marx: it never broke. Labour-power is bought at its value, and its use creates more.",
  ],

  terms: ["labour-commanded", "deduction-theory"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part I, Chapter 3 (&ldquo;Adam Smith&rdquo;), mainly sections 1 to 3, checked
      against the Progress Publishers edition on marxists.org. Marx wrote these notebooks in 1861 to 1863; Karl Kautsky
      first edited them (1905 to 1910). Marx&apos;s own points: Smith&apos;s two definitions of value and labour
      &ldquo;to purchase or command&rdquo;; the &ldquo;original state of things&rdquo;; rent as the &ldquo;first
      deduction&rdquo; and profit as &ldquo;a second deduction&rdquo;; &ldquo;Adam Smith&apos;s great merit&rdquo; and
      the contradiction that &ldquo;shakes his confidence in the general law&rdquo;; &ldquo;three original sources&rdquo;.
      The chapter text on marxists.org dates the Wealth of Nations to 1775 in one aside; it was published in 1776, which
      the page uses. The sack figures in 3.2 are this site&apos;s own; 3.1 and 3.3 use the workshop numbers (12-hour day,
      3-coin wage).
    </p>
  ),
};

export default chapter;
