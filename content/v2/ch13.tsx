import type { ChapterContent } from "@/components/ChapterTemplate";
import { HurryingNature, NedsYear, WinterWork } from "./ch13-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can your money be busy even when nobody is working?",

  story: (
    <>
      <p>
        It is a frosty January morning. Mr. Moneybags passes Grandpa Ned&apos;s field and sees Ned sitting on his fence,
        drinking tea. &ldquo;Lazy,&rdquo; mutters Mr. Moneybags. &ldquo;My mill runs every day.&rdquo;
      </p>
      <p>
        &ldquo;Lazy?&rdquo; laughs Ned. &ldquo;My wheat is working hard under the snow. I sowed it in October and I paid
        for the seed and my helpers then. I can&apos;t sell a single grain until July. There&apos;s nothing for me to do
        in the field till then, but my money is stuck out there all the same.&rdquo;
      </p>
      <p>
        Mr. Moneybags stops. His money comes back every week. Ned&apos;s comes back once a year, and for most of that year
        nobody is working on it at all.
      </p>
    </>
  ),

  guess: (
    <p>
      Ned works on his wheat for a few weeks, but he waits nine months to sell it. Which matters for how long his money
      is tied up: the weeks of work, or the whole nine months?
    </p>
  ),

  struggle: [<NedsYear key="a" />],
  reveal: [<HurryingNature key="b" />, <WinterWork key="c" />],

  eli5: "Some things keep getting made even while nobody works on them, like wheat growing under the snow or wine resting in a barrel. All that waiting time, the farmer's money is stuck. People invent machines to hurry nature along, but the machines cost more money too.",

  grownUp: (
    <>
      <p>
        Working time is always <strong>production time</strong>, but not all production time is working time. In many
        trades the unfinished product must be left to natural processes: grape juice ferments and rests, pottery dries,
        linen bleaches, winter grain needs about nine months to ripen, a forest about a hundred years to grow. During these
        pauses labour stops or nearly stops, yet the capital is still locked in production. So the turnover period grows
        with the whole production time, not just with the working time.
      </p>
      <p>
        Where the gap is not fixed by nature once and for all, capital tries to shrink it: chemical instead of
        grass bleaching, better drying, an air-pump that cut tanning from six to eighteen months down to one and a half to
        two, and the steel revolution from puddling to the Bessemer process. But these shortcuts usually need a larger
        investment of fixed capital.
      </p>
      <p>
        In agriculture the gap is huge, and it has social effects. Field work in some northern regions is possible on only
        130 to 150 days a year, so peasants filled the winter with domestic industries, weaving, tanning and making shoes.
        That gave the merchant a way in, supplying the yarn and taking the cloth. When capitalist industry later pulled
        manufacture away from the farm, the rural labourer was left more dependent on casual jobs. And forestry, with its
        turnover of a century or more, Marx calls an industry of little attraction to private capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Nature has its own clock, and capital has to wait for it. That waiting ties money up without adding any work,
        which is why capital is always trying to speed nature up, and why trades that cannot be sped up behave differently.
      </p>
      <p>
        Marx adds that the costs of this fall unevenly. For capital, differences in turnover are evened out in the end;
        for the farm worker, the empty winter months are simply lost earnings.
      </p>
    </>
  ),

  critics: [
    {
      who: "Time itself is productive",
      point: (
        <p>
          Eugen von Böhm-Bawerk and the Austrian school pointed to exactly these cases, wine that improves with age and
          trees that grow while no one works, as proof that waiting adds value. On their view, the extra worth of aged
          wine is a reward for time, not something that only labour can create.
        </p>
      ),
    },
    {
      who: "Forests and private owners",
      point: (
        <p>
          In 1849 the German forester Martin Faustmann worked out how a private owner should decide when to cut trees,
          taking into account the long wait. Many economists argue that owners with secure property rights do look after
          slow-growing forests, and that forests suffer most where nobody owns them, not where capital does.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Ned works on his wheat for a few weeks, but it takes about nine months from sowing to harvest. What is the nine months called?",
      options: ["Working time", "Production time", "Holiday time"],
      answer: 1,
      why: "Production time is the whole time capital is locked in production. Working time is only the part when people are actually working.",
    },
    {
      q: "Which of these is an example of production time with almost no work?",
      options: ["Spinning yarn on a machine", "Grape juice fermenting into wine", "Selling bread in a shop"],
      answer: 1,
      why: "While wine ferments and rests, nature does the work and labour waits, but the capital is still tied up.",
    },
    {
      q: "What usually happens when capital finds a faster way, like the air-pump for tanning?",
      options: [
        "It needs more machines and bigger works: more fixed capital",
        "It needs no money at all",
        "The leather gets worse",
      ],
      answer: 0,
      why: "Marx notes that shortening production time usually means a larger investment in fixed capital.",
    },
  ],

  remember: [
    "Production time is the whole time capital spends in production; working time is only part of it.",
    "Wheat growing, wine resting and timber growing all tie up capital while almost no one works.",
    "Capital tries to hurry nature with machines and chemistry, but that costs more fixed capital.",
    "Long empty seasons in farming once gave rise to home industries, and a way in for the merchant.",
  ],

  terms: ["production-time", "rural-domestic-industry"],

  source: (
    <p>
      Covers Volume II, Chapter 13 (&ldquo;The Time of Production&rdquo;), from the manuscripts Engels edited into
      Volume II. Marx&apos;s own examples: wine fermenting, pottery drying, bleaching, winter grain needing about nine
      months, timber about a hundred years, tanning cut from six to eighteen months to one and a half to two months with an
      air-pump, puddling (about 1780) to the Bessemer process, and northern Russia&apos;s 130 to 150 days of field labour
      with its village weavers, tanners and shoemakers. Grandpa Ned&apos;s field and Tom&apos;s visit are this site&apos;s.
    </p>
  ),
};

export default chapter;
