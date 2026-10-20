import type { ChapterContent } from "@/components/ChapterTemplate";
import { AGiftOfNature, AnOldCoatOverANewHeart, FromTheMarketToTheField } from "./ch02-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is farming the only work that makes something extra?",

  story: (
    <>
      <p>
        The next book on the Old Thinkers&apos; Shelf is a thick one, and a whole group climbs out of it: a French
        doctor called François Quesnay and his followers, who called themselves the Physiocrats. The name means
        &ldquo;rule of nature&rdquo;.
      </p>
      <p>
        They don&apos;t go to the market at all. They march straight past Tom&apos;s shop and out to Grandpa Ned&apos;s
        fields. &ldquo;Here,&rdquo; says Quesnay, pointing at the wheat. &ldquo;This is where wealth comes from. Plant a
        little seed and nature gives you back much more.&rdquo;
      </p>
      <p>
        Leo the weaver has followed them out. &ldquo;And my cloth?&rdquo; he asks. Quesnay shakes his head kindly.
        &ldquo;Your cloth is worth the flax and the bread you ate while weaving. Not a crumb more. Your work is
        sterile.&rdquo;
      </p>
      <p>Leo is offended. Is Quesnay right that only the soil makes something extra?</p>
    </>
  ),

  guess: (
    <p>
      Grandpa Ned&apos;s farmhand eats 10 sacks of grain in a year and grows 15. Where do you think the 5 extra sacks
      really come from: the soil, or something about the work? And could Leo&apos;s weaving leave an extra too?
    </p>
  ),

  struggle: [<FromTheMarketToTheField key="a" />, <AGiftOfNature key="b" />],
  reveal: [<AnOldCoatOverANewHeart key="c" />],

  eli5: "The Physiocrats found that the extra is made where things are made, on the farm, not in the market. But they thought the soil gave it as a present. Marx said the extra comes from people working longer than they need to feed themselves, in any kind of work.",

  grownUp: (
    <>
      <p>
        Marx calls the analysis of capital, within the bourgeois horizon, &ldquo;essentially the work of the
        Physiocrats&rdquo;, which makes them &ldquo;the true fathers of modern political economy&rdquo;. Their great step
        was to move the search for surplus-value from the sphere of circulation into the sphere of direct production.
      </p>
      <p>
        They took the value of labour-power as a fixed quantity, the minimum of wages or <em>strict nécessaire</em>, and
        saw that the agricultural labourer reproduces more than this minimum. They called the excess the{" "}
        <strong>net product</strong>. From this they drew a correct principle: only labour that creates a surplus-value
        is productive.
      </p>
      <p>
        But because they did not understand value as social labour, they saw the surplus as a{" "}
        <strong>gift of nature</strong>, a larger quantity of organic matter. So agricultural labour was the only
        productive labour, manufacturing workers formed a <strong>sterile class</strong> who merely add the value of
        what they consume, and rent was the only form of surplus-value. Profit on capital, for them, was a kind of
        higher wage.
      </p>
      <p>
        Marx finds the system full of contradiction: a bourgeois reproduction of the feudal system. It praised landed
        property, yet demanded <strong>laissez faire</strong>, free competition, the end of guilds and state interference,
        and a single tax on the rent of land. Turgot, its most developed thinker and a minister of France, abolished the
        guilds by an edict of February 1776, revoked three months later, and tried to introduce the single tax. In his
        writings the &ldquo;gift of nature&rdquo; begins to appear as surplus-labour, which the labourer must yield up
        because he has been separated from the land.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The Physiocrats got the most important thing right: the extra is made in production, not by clever selling. Where
        they went wrong was in who makes it. The soil does not make value. Human work does. On the farm, a day&apos;s
        labour can feed more than the labourer, and the part he gives up is surplus labour.
      </p>
      <p>
        Once you see that, the &ldquo;sterile&rdquo; weaver is no different. If Leo works longer than it takes to earn
        his keep, his work leaves an extra too, and in Mr. Moneybags&apos; workshop it goes to the boss as profit.
      </p>
    </>
  ),

  critics: [
    {
      who: "Marginalist economists",
      point: (
        <p>
          Later economists rejected both the Physiocrats&apos; and Marx&apos;s way of locating the extra. In marginal
          productivity theory, land, capital and labour each contribute to output, so a farm&apos;s surplus partly reflects
          the productivity of the land itself, which is roughly what the Physiocrats sensed. On this view there is no
          single source of the extra to find.
        </p>
      ),
    },
    {
      who: "Historians of the Physiocrats",
      point: (
        <p>
          Historians such as Ronald Meek, who admired Marx&apos;s reading, still warn against seeing the Physiocrats only
          as early versions of Marx. Their idea of the net product grew out of the needs of a French farming kingdom in
          the 1750s and 1760s: taxes, grain prices and the state&apos;s debts. Read in that setting, their belief that
          only farming yields a surplus was a policy argument as much as a theory.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why does Marx call the Physiocrats \"the true fathers of modern political economy\"?",
      options: [
        "They invented money",
        "They moved the search for the extra from buying and selling into production",
        "They proved that factories make everything",
      ],
      answer: 1,
      why: "They were the first to look for surplus-value where things are made, not in the market.",
    },
    {
      q: "Why did the Physiocrats call Leo's weaving \"sterile\"?",
      options: [
        "His cloth was badly made",
        "They thought his cloth was worth only the flax plus the food he ate, with nothing extra",
        "Weavers never got paid",
      ],
      answer: 1,
      why: "For them only farming, helped by nature, added an extra. Manufacture just passed on what was used up.",
    },
    {
      q: "What does Marx say the farm's extra really is?",
      options: ["A gift from the soil", "Surplus labour: work beyond what the worker needs to live", "Profit from selling high"],
      answer: 1,
      why: "A day of farm work can feed more than the worker. The extra is extra work, and any kind of work can make it.",
    },
  ],

  remember: [
    "The Physiocrats looked for the extra in production, on the farm, not in the market.",
    "A farmhand on the bare minimum grows more than he eats. They called the extra the net product.",
    "They thought it was nature's gift, so only farming was productive and rent was the only extra.",
    "Marx: the extra is surplus labour, and the weaver or spinner makes it too.",
    "Turgot, the most developed Physiocrat, saw that the worker hands over the extra because he no longer has land of his own.",
  ],

  terms: ["net-product", "sterile-class", "laissez-faire"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part I, Chapter 2 (&ldquo;The Physiocrats&rdquo;), checked against the Progress
      Publishers edition on marxists.org. Marx wrote these notebooks in 1861 to 1863; Karl Kautsky first edited them (1905
      to 1910). Marx&apos;s own points: the Physiocrats as &ldquo;the true fathers of modern political economy&rdquo;;
      the minimum of wages and the <em>strict nécessaire</em>; surplus-value as a &ldquo;gift of nature&rdquo;; rent as
      the only form of surplus-value; the sterile class; the feudal semblance and bourgeois essence; laissez faire,
      laissez aller; Turgot, the edict of February 1776 revoked three months later, and the single tax. Quesnay&apos;s
      Tableau Économique is covered in Volume II, Chapter 19. Quesnay as a court doctor is general history (Marx calls
      him &ldquo;Dr. Quesnay&rdquo;). The 10 and 15 sack figures are this site&apos;s own.
    </p>
  ),
};

export default chapter;
