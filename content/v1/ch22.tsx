import type { ChapterContent } from "@/components/ChapterTemplate";
import { CheapWagesDearYarn, SpindlesPerSpinner } from "./ch22-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can a worker who earns more be cheaper for the boss?",

  story: (
    <>
      <p>
        A traveller arrives in Tiny Town from Far Valley, many days&apos; ride over the mountains. Over supper at
        Mia&apos;s bakery he tells everyone that spinners in Far Valley earn only half of Sam&apos;s wage, and work even
        longer days.
      </p>
      <p>
        Mr. Moneybags nearly drops his spoon. &ldquo;Half the wage! I should move my whole workshop to Far Valley
        tomorrow.&rdquo;
      </p>
      <p>
        Tom the shopkeeper, who buys yarn from both places, shakes his head. &ldquo;I wouldn&apos;t be so sure. Far Valley
        yarn isn&apos;t cheap at all. Their spinners work with a handful of old spindles. Sam minds a whole machine.&rdquo;
      </p>
      <p>Sam earns more, and Jan in Far Valley earns less. So whose work is really cheaper for a boss?</p>
    </>
  ),

  guess: (
    <p>
      Sam earns 3 coins a day and Jan earns 1½. Before you press play, think: what else would you need to know to tell
      which of them is cheaper to employ?
    </p>
  ),

  struggle: [<CheapWagesDearYarn key="a" />],
  reveal: [<SpindlesPerSpinner key="b" />],

  eli5: "To compare wages in two countries, you have to look at how much each worker makes, not just how many coins they get. Sam earns more than Jan but makes much more yarn, so his work is cheaper for the boss. A bigger wage does not always mean a bigger share.",

  grownUp: (
    <>
      <p>
        Marx says that comparing wages between countries means bringing in everything that sets the value of
        labour-power: the price and range of the necessities of life, the cost of training, how much women and children
        work, and the productivity, length and intensity of the working day. First reduce every day-wage to the same
        length of day. Then, since only pay by the piece measures productivity and intensity, compare what each worker
        actually produces.
      </p>
      <p>
        Inside one country, there is an average intensity of work, and only work faster than that average counts as
        extra value. Between countries the averages differ. On the world market, more intense national labour makes more
        value in the same time, and more <em>productive</em> national labour counts as more intense too (as long as
        competition does not force its prices down to its value). So money goes less far in the more developed country,
        and its <strong>nominal wages</strong> are higher. That does not prove its real wages are higher.
      </p>
      <p>
        And even when the daily wage is higher, the <strong>relative wage</strong>, the price of labour compared with
        the surplus-value and the value of the product, can be lower. That is the Tiny Town and Far Valley story, and it
        is what Marx finds in the reports: J. W. Cowell of the 1833 Factory Commission, and Factory Inspector Alexander
        Redgrave in 1866, with his table of spindles per worker. Marx ends by mocking the American economist Henry
        Carey, who claimed wages everywhere rise and fall with productivity.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        High wages in a rich country do not mean its workers keep a bigger share of what they make. Where machines and
        methods are more advanced, each hour of work produces more, so a boss can pay more coins and still keep more for
        himself.
      </p>
      <p>
        That is why national wages can only be compared properly by looking at the whole working day and its product,
        not at the number of coins in a pay packet.
      </p>
    </>
  ),

  critics: [
    {
      who: "Mainstream trade economists",
      point: (
        <p>
          Today&apos;s economists also compare countries by &ldquo;unit labour costs&rdquo;, the wage per unit of output,
          so they agree with the observation in this chapter. But they explain higher wages in productive countries as
          the reward for producing more (an idea worked out by Béla Balassa and Paul Samuelson in 1964), not as a sign
          that workers there are more exploited.
        </p>
      ),
    },
    {
      who: "The unequal exchange debate",
      point: (
        <p>
          Some later Marxists, such as Arghiri Emmanuel (<em>Unequal Exchange</em>, 1969), argued that trade between
          high-wage and low-wage nations quietly moves value from poor countries to rich ones, something Marx only hints
          at here. Others, such as Charles Bettelheim, disagreed sharply. The chapter is short, and people still argue
          about what follows from it.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam earns 3 coins a day and spins 20 lb of yarn. Jan earns 1½ coins and spins 5 lb. Whose wage costs the boss less for each pound of yarn?",
      options: ["Jan's", "Sam's", "They cost the same"],
      answer: 1,
      why: "3 ÷ 20 is 0.15 coin a pound; 1½ ÷ 5 is 0.30. Sam's higher wage is cheaper for every pound he spins.",
    },
    {
      q: "In Marx's table, how many spindles did one person mind in Great Britain, compared with France?",
      options: ["74 against 14", "14 against 74", "About the same"],
      answer: 0,
      why: "A British spinner minded 74 spindles, a French one 14, so the same hours turned far more cotton into yarn.",
    },
    {
      q: "Do higher money wages in a richer country prove that its workers keep a bigger share of what they make?",
      options: ["Yes, always", "No: the boss's share can still be bigger", "Only if prices are lower there"],
      answer: 1,
      why: "Marx shows the relative wage, compared with surplus-value and the product, can be lower where the daily wage is higher.",
    },
  ],

  remember: [
    "To compare wages between countries, compare the same length of day and how much each worker produces.",
    "On the world market, more productive and more intense work counts as more value in the same hours.",
    "Nominal wages can be higher in a richer country without real wages being higher.",
    "A higher daily wage can still mean labour is cheaper for the boss: the relative wage is lower.",
  ],

  terms: ["relative-wage"],

  source: (
    <p>
      Covers Volume I, Chapter 22 (Fowkes: &ldquo;National Differences in Wages&rdquo;; Moore and Aveling: &ldquo;National
      Differences of Wages&rdquo;). From Marx&apos;s text: the factors to compare; national averages of intensity on the
      world market; Cowell&apos;s finding of 1833; Redgrave&apos;s report of 31 October 1866, the Oldenburg factory (wages
      &ldquo;in many cases 50%&rdquo; lower, work from 5.30 a.m. to 8 p.m.), his table of spindles per person, and the
      mule of 2,200 spindles making 220 lb a day; the railway builders; Henry Carey. Far Valley, Jan, and the wages,
      hours and pounds of yarn in animation 22.1 are made up for this site.
    </p>
  ),
};

export default chapter;
