import type { ChapterContent } from "@/components/ChapterTemplate";
import { MrPeelsEmptyBed, TheSufficientPrice } from "./ch33-animations";

const chapter: ChapterContent = {
  bigQuestion: "What happens to a boss when every worker can get free land?",

  story: (
    <>
      <p>
        Mr. Moneybags reads a poster on the town hall wall: &ldquo;A new colony across the sea! Wide land, free for the
        taking!&rdquo; His eyes light up. A whole new place, with no rival workshops at all.
      </p>
      <p>
        He spends a fortune on a ship. He fills it with money, tools, seeds and food, and he hires 300 workers to come
        with him and work in his new workshop. Sam waves him off from the harbour, glad to be staying home.
      </p>
      <p>
        Months later, a letter arrives in Tiny Town. Mia reads it out loud in the bakery, and everyone laughs, then goes
        quiet. Mr. Moneybags is all alone. His workers have every one of them gone off to farm land of their own. By spring he is back home in Tiny Town,
        poorer and a little wiser.
      </p>
      <p>How can a man with a fortune in money and tools end up with nobody to work for him?</p>
    </>
  ),

  guess: (
    <p>
      If you could walk five minutes down the road and get a farm of your own, for free, would you work twelve hours a
      day for Mr. Moneybags? So what does a boss need, besides money and tools, to be a boss?
    </p>
  ),

  struggle: [<MrPeelsEmptyBed key="a" />],
  reveal: [<TheSufficientPrice key="b" />],

  eli5: "Money and tools only make you a boss if other people have to work for you. In a land where everyone could get a free farm, nobody had to. So a clever planner suggested putting a high price on the land.",

  grownUp: (
    <>
      <p>
        Volume I ends in the colonies, where, Marx says, the truth about capital is easier to see. In Europe primitive
        accumulation is mostly over, and economists talk as if capitalist property and the small producer&apos;s own
        property were the same thing. In a free colony, where most land is still public and any settler can turn some
        of it into a farm, the two clash openly.
      </p>
      <p>
        Marx credits the English writer E. G. Wakefield with discovering this. Wakefield tells of a Mr. Peel who took
        means of subsistence and production worth £50,000 to the Swan River in Western Australia, along with 300 working
        people, and was then &ldquo;left without a servant to make his bed or fetch him water from the river&rdquo;. From
        such stories Wakefield learned that money, food and machines do not make a man a capitalist unless there is also
        a wage-worker who must sell his labour-power. In Marx&apos;s words, capital is &ldquo;not a thing, but a social
        relation between persons, established by the instrumentality of things&rdquo;.
      </p>
      <p>
        Wakefield&apos;s cure was <strong>systematic colonisation</strong>: the government should put an artificial,
        &ldquo;sufficient price&rdquo; on the land, high enough that newcomers must work for wages for years before they
        can buy a farm, and use the money from land sales to bring more workers from Europe. Marx calls this price a
        ransom the worker pays for leave to retire to the land. He notes that the British government tried the method for
        years, that it failed, and that the stream of emigrants simply turned towards the United States.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The colonies prove the point of the whole of Part Eight: capitalist production needs workers who have been
        separated from the land and from their own means of production. Where people can easily become independent
        producers, capital cannot find enough wage-workers, wages stay high, and the boss has no hold over anyone.
      </p>
      <p>
        So, Marx concludes, capitalist private property has as its basic condition the destruction of property earned by
        one&apos;s own work: in other words, the expropriation of the worker.
      </p>
    </>
  ),

  critics: [
    {
      who: "Whose free land?",
      point: (
        <p>
          Historians point out that the &ldquo;empty&rdquo; land of the colonies was not empty at all. Around the Swan
          River, for example, it was the country of the Noongar people. Wakefield&apos;s plans largely ignored them, and
          Marx&apos;s chapter, which treats colonies as &ldquo;virgin soils&rdquo; settled by free migrants, says little
          about them either, even though he describes the dispossession of native peoples elsewhere in Part Eight.
        </p>
      ),
    },
    {
      who: "Ordinary supply and demand",
      point: (
        <p>
          Many economists see nothing special in the colonies&apos; story: where workers are scarce and land is cheap,
          wages are high, exactly as supply and demand predict. And Wakefield&apos;s ideas were not a simple failure
          everywhere. South Australia was founded in 1836 on his land-price principles and grew, though the colony also
          ran into debt in its early years.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why was Mr. Peel left without anyone to make his bed?",
      options: [
        "His workers fell ill on the voyage",
        "With free land everywhere, his workers went off to farm for themselves",
        "He forgot to bring any workers",
      ],
      answer: 1,
      why: "Nobody needed to work for him, because anyone could get land and work for themselves.",
    },
    {
      q: "What did Wakefield's “sufficient price” do?",
      options: [
        "It made land free for everyone",
        "It made land too dear to buy at once, so newcomers had to work for wages first",
        "It paid workers more",
      ],
      answer: 1,
      why: "The high price kept workers in wage work for years, and the money brought over more workers.",
    },
    {
      q: "What is the big lesson Marx draws from the colonies?",
      options: [
        "Capital is just a pile of money and tools",
        "Capital is a relation between people: it needs workers who have no other way to live",
        "Colonies are always rich",
      ],
      answer: 1,
      why: "Money and tools become capital only when there are wage-workers who must sell their labour-power.",
    },
  ],

  remember: [
    "In a land with free land, workers soon become independent farmers, and bosses run short of hands.",
    "Mr. Peel brought £50,000 of goods and 300 workers, and was left with nobody to make his bed.",
    "Wakefield's “systematic colonisation” put a high price on land to keep workers working for wages.",
    "Marx: capital is not a thing but a relation between people, and it rests on the worker being cut off from the land.",
    "That is the end of Volume I, the story of how surplus-value is made. Well done for getting here! Volume II follows the money as it travels round and comes back bigger.",
  ],

  terms: ["systematic-colonisation"],

  source: (
    <p>
      Covers Volume I, Chapter 33 (Fowkes: &ldquo;The Modern Theory of Colonization&rdquo;; Moore and Aveling: &ldquo;The
      Modern Theory of Colonisation&rdquo;). Marx&apos;s own points: E. G. Wakefield&apos;s <em>England and America</em>;
      Mr. Peel at the Swan River with £50,000 of goods and 300 working people (the figure in the Moore and Aveling
      translation on marxists.org; some editions give 3,000); capital as a social relation; the &ldquo;sufficient
      price&rdquo;; the failure of the scheme and emigration to the United States. Mr. Moneybags&apos; voyage and the
      letter read out in Mia&apos;s bakery belong to this site.
    </p>
  ),
};

export default chapter;
