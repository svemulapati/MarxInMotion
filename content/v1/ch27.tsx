import type { ChapterContent } from "@/components/ChapterTemplate";
import { SheepThatEatPeople, TheCommonLand, TheSutherlandClearance } from "./ch27-animations";

const chapter: ChapterContent = {
  bigQuestion: "Where did all the people with nothing come from?",

  story: (
    <>
      <p>
        Grandpa Ned tells the rest of the story. Long ago, outside Tiny Town, there was a village. Sam&apos;s
        great-grandparents, Bess and Will, had a cottage there and a strip of field. They were poor, but they were never
        without food.
      </p>
      <p>
        Beyond the fields lay the common: land that belonged to nobody in particular and was used by everybody. Bess kept
        a cow on the grass and a goose by the pond. Will gathered firewood under the trees. It was not a lot, but it was
        enough to get through a winter.
      </p>
      <p>
        Then the price of wool went up, and the Lord of the Manor began to think about sheep. &ldquo;And one spring
        morning,&rdquo; says Ned, &ldquo;there was a fence.&rdquo;
      </p>
      <p>What do you think happened to Bess and Will?</p>
    </>
  ),

  guess: (
    <p>
      If the common land is fenced off and filled with sheep, what can a family like Bess and Will&apos;s still do to
      live? Where might they go, and what would they have to sell when they got there?
    </p>
  ),

  struggle: [<TheCommonLand key="a" />],
  reveal: [<SheepThatEatPeople key="b" />, <TheSutherlandClearance key="c" />],

  eli5: "Long ago, families lived off land they shared. Rich landowners fenced it in for sheep and pushed the families out. With no land left, they had to go to town and work for wages.",

  grownUp: (
    <>
      <p>
        In England, Marx says, serfdom had practically disappeared by the end of the 14th century. Most people were free
        peasant proprietors who also had rights on the <strong>common land</strong>. The first big push against them
        came in the last third of the 15th century, when the rise of the Flemish wool industry made wool dear. Great
        lords turned arable land into sheep-walks and turned people out. Francis Bacon noted enclosures growing more
        frequent around 1489, and Thomas More wrote in <em>Utopia</em> that English sheep had begun to devour men.
      </p>
      <p>
        The Reformation added a second push. The Church owned a great part of England&apos;s land; when the monasteries
        were suppressed, their estates were largely given to royal favourites or sold cheaply, and the people living on
        them were driven out. By about 1750 the <strong>yeomanry</strong>, the class of independent small farmers, had
        disappeared, and by the 1790s so had the last trace of the labourers&apos; common land.
      </p>
      <p>
        In the 18th and 19th centuries the process became legal. Acts of Parliament for the{" "}
        <strong>enclosure</strong> of commons were, in Marx&apos;s words, decrees by which the landlords granted themselves
        the people&apos;s land. Between 1801 and 1831, 3,511,770 acres were taken this way. The last stage was the{" "}
        <strong>clearing of estates</strong>, seen most starkly in the Scottish Highlands: from 1814 to 1820 the
        Duchess of Sutherland had 15,000 people driven from 794,000 acres, which became 29 sheep farms holding 131,000
        sheep by 1835.
      </p>
      <p>
        The result, for Marx, is the same everywhere: land becomes capital in the hands of a few, and the people who
        worked it become free workers in the double sense, ready for the towns and their workshops.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The large class of people with nothing to sell but their labour-power did not appear naturally. Over about three
        centuries, in England, ordinary country people were pushed off the land they had lived on, by lords, by the
        Church&apos;s new owners, and finally by Parliament itself. That pushing created both the big estates and the
        workers who would soon fill the factories.
      </p>
      <p>
        Marx tells this as a story of theft dressed up in law, and he does not hide his anger. His evidence is drawn from
        official records, historians and writers of the time.
      </p>
    </>
  ),

  critics: [
    {
      who: "Historians of enclosure",
      point: (
        <p>
          J. D. Chambers and G. E. Mingay (<em>The Agricultural Revolution 1750&ndash;1880</em>, 1966) argued that
          parliamentary enclosure often needed more farm labour, not less, and that the country population kept
          growing; on this view the factories&apos; workers came mainly from population growth, not from eviction.
          Others, such as J. M. Neeson (<em>Commoners</em>, 1993), have argued back that common rights mattered a great
          deal to poor families, much as Marx said.
        </p>
      ),
    },
    {
      who: "Enclosure and productivity",
      point: (
        <p>
          Many economic historians see enclosure as part of farming becoming more productive: fields could be managed as
          one unit, with new crops and rotations, feeding a fast-growing population. Some, such as Gregory Clark, argue
          that common rights were worth less to the poor than Marx suggests. The debate is about how much enclosure
          helped output, and who received the gains.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What made English lords start turning fields into sheep pasture in the late 1400s?",
      options: ["A new law against farming", "Wool became valuable, because the Flemish wool industry was booming", "Too many sheep needed homes"],
      answer: 1,
      why: "Marx says the rise of the Flemish wool trade, and the rising price of wool, gave the direct push.",
    },
    {
      q: "What was the common land?",
      options: [
        "Land owned by one rich family",
        "Land that the whole village could use for grazing, water and firewood",
        "Land nobody was allowed to enter",
      ],
      answer: 1,
      why: "Common rights let poor families keep a cow or a goose and gather fuel, which helped them survive.",
    },
    {
      q: "In the Sutherland clearance, what replaced the 15,000 people who were driven out?",
      options: ["A new town", "131,000 sheep on 29 farms", "A factory"],
      answer: 1,
      why: "By 1835 the land held 131,000 sheep. The people were given about 2 acres a family on the sea-shore.",
    },
  ],

  remember: [
    "Most English country people were once small farmers who also shared the common land.",
    "From the late 1400s, lords fenced land for sheep and drove people off it.",
    "The Church's lands, seized at the Reformation, went to new owners who cleared them too.",
    "Later, Acts of Parliament enclosed the commons by law: 3,511,770 acres from 1801 to 1831.",
    "Driven off the land, people had to sell their labour-power to survive.",
  ],

  terms: ["enclosure", "common-land", "yeomanry", "clearing-of-estates"],

  source: (
    <p>
      Covers Volume I, Chapter 27 (&ldquo;The Expropriation of the Agricultural Population from the Land&rdquo;).
      Marx&apos;s own facts: serfdom gone by the late 14th century; the Flemish wool trade; Bacon on 1489; More&apos;s
      sheep; the suppression of the monasteries; the yeomanry gone by about 1750; 3,511,770 acres enclosed 1801 to 1831;
      the Sutherland clearance (15,000 people, about 3,000 families, 794,000 acres, 6,000 acres on the shore, 29 farms,
      131,000 sheep by 1835). The 1516 date of <em>Utopia</em> and the 1530s date of the dissolution are added from
      general history. Bess, Will and the Lord of the Manor belong to this site.
    </p>
  ),
};

export default chapter;
