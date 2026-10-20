import type { ChapterContent } from "@/components/ChapterTemplate";
import { ConstantAndVariable, OldValueNewValue, TheWheelThatWearsOut } from "./ch08-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why can't the cotton and the spindle make Mr. Moneybags richer?",

  story: (
    <>
      <p>
        Mr. Moneybags has learned his lesson from last week: the extra comes from the workshop. But now he has a new idea.
        &ldquo;If the workshop makes the extra,&rdquo; he thinks, &ldquo;then surely more cotton, a fancier spindle, a big
        new spinning wheel will make even more!&rdquo;
      </p>
      <p>
        Sam keeps spinning and says nothing. Leo, passing by on his way home to his own loom, laughs. &ldquo;My loom
        doesn&apos;t make value on its own, Mr. Moneybags. When I&apos;m asleep, it just sits there.&rdquo;
      </p>
      <p>
        Mr. Moneybags frowns. The cotton is in the yarn. The spindle is wearing down into the yarn. So where does each
        part of the yarn&apos;s value really come from?
      </p>
    </>
  ),

  guess: (
    <p>
      The yarn is worth 30 coins. Some of that value came from the cotton, some from the worn spindle, and some from Sam.
      Which of the three do you think can make <em>more</em> value than it cost?
    </p>
  ),

  struggle: [<OldValueNewValue key="a" />, <TheWheelThatWearsOut key="b" />],
  reveal: [<ConstantAndVariable key="c" />],

  eli5: "The cotton and the spindle only pass on the value they already had, like water poured from one cup into another. Only Sam's work adds new value. So the money spent on Sam is the part that grows.",

  grownUp: (
    <>
      <p>
        The parts of the labour process play different roles in forming value. The <strong>means of production</strong>{" "}
        (cotton, spindle, machines) do not create value. Their value is transferred to the product, and it is transferred
        only as their use-value is used up. Cotton passes on all its value at once; a spindle or a machine passes on its
        value bit by bit as it wears out. Marx&apos;s example is a machine worth £1,000 that lasts 1,000 days and so
        hands on a thousandth of its value each day. A machine never transfers more value than it loses.
      </p>
      <p>
        The worker does two things at once with one single act. By spinning, Sam preserves the old value of the cotton
        and spindle, carrying it into the yarn, and by working for a certain time he adds new value. Marx calls this
        preserving of old value a gift of nature that costs the worker nothing but is very useful to the capitalist.
      </p>
      <p>
        So the capital Mr. Moneybags advances falls into two parts. The part spent on means of production comes back
        unchanged in size: <strong>constant capital</strong> (c, here 24 coins). The part spent on labour-power reproduces
        its own value and adds a surplus on top: <strong>variable capital</strong> (v, here 3 coins that come back as 6).
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Only living labour creates new value. Machines and materials, however clever or costly, only pass on the value
        that was already in them. So all of the surplus-value comes from the part of capital spent on workers.
      </p>
      <p>
        This split, constant and variable, is the key to the rest of Capital. Later Marx uses it to explain why owners
        replace workers with machines, and why that may squeeze profits over time.
      </p>
    </>
  ),

  critics: [
    {
      who: "Machines are productive too",
      point: (
        <p>
          Most economists treat machines and equipment as genuinely productive. A factory full of modern machines turns
          out vastly more than one without them, so, they argue, it is odd to say machines add no new value. Marx&apos;s
          defenders reply that machines add enormous amounts of useful things (use-value), but that value in Marx&apos;s
          sense measures human labour time, which is a different question.
        </p>
      ),
    },
    {
      who: "The Sraffian critique",
      point: (
        <p>
          Economists following Piero Sraffa, such as Ian Steedman (<em>Marx after Sraffa</em>, 1977), argue that prices
          and profits can be worked out directly from technology and wages, so labour values are an unnecessary detour.
          In some cases, such as when one process makes several products at once, they show labour values can even
          come out as strange or negative numbers.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "A spinning wheel worth 100 coins lasts 100 days. How much value does it pass into each day's yarn?",
      options: ["100 coins", "1 coin", "Nothing at all"],
      answer: 1,
      why: "It wears out a hundredth each day, so it hands on a hundredth of its value: 1 coin.",
    },
    {
      q: "Why is the money spent on cotton and spindles called constant capital?",
      options: ["It never changes owner", "Its value comes out the same size it went in", "It is spent every day"],
      answer: 1,
      why: "Means of production only pass on the value they had. They never make it bigger.",
    },
    {
      q: "Which part of Mr. Moneybags' 27 coins grows during the day?",
      options: ["The 20 coins of cotton", "The 4 coins of spindle wear", "The 3 coins spent on Sam's labour-power"],
      answer: 2,
      why: "The 3 coins of variable capital come back as 6, because Sam's work creates new value.",
    },
  ],

  remember: [
    "Materials and tools never create new value. They only pass on the value they already had.",
    "Tools and machines pass their value on bit by bit, as they wear out, and never more than they lose.",
    "One act of work both keeps the old value and adds new value.",
    "Constant capital (c) comes out the same size. Variable capital (v) comes out bigger.",
  ],

  terms: ["constant-capital", "variable-capital"],

  source: (
    <p>
      Covers Volume I, Chapter 8 (&ldquo;Constant Capital and Variable Capital&rdquo;). From the text: the cotton and
      spindle whose values reappear in the yarn; the worker who preserves old value and adds new by one and the same
      act, &ldquo;a gift of Nature which costs the labourer nothing&rdquo;; the machine worth £1,000 that wears out in
      1,000 days; means of production never transfer more value than they lose. The 100-coin spinning wheel is this
      site&apos;s version of Marx&apos;s machine.
    </p>
  ),
};

export default chapter;
