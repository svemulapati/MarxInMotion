import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheFirstPush, TwoStories } from "./ch26-animations";

const chapter: ChapterContent = {
  bigQuestion: "How did Mr. Moneybags get his money, and why does Sam have nothing?",

  story: (
    <>
      <p>
        One winter evening Sam sits by Grandpa Ned&apos;s fire. He has been thinking about everything that happens in the
        workshop. &ldquo;Every day I make more than I am paid,&rdquo; he says, &ldquo;and Mr. Moneybags gets richer. But
        how did it start? Where did he get his first coins? And why did I start out with nothing?&rdquo;
      </p>
      <p>
        Mr. Moneybags, passing by, puts his head round the door. &ldquo;Easy,&rdquo; he says. &ldquo;Long ago my
        great-grandfather worked hard and saved. Yours was lazy and spent everything.&rdquo; Then he goes on his way,
        whistling.
      </p>
      <p>
        Grandpa Ned pokes the fire for a long time. &ldquo;That&apos;s one story,&rdquo; he says at last. &ldquo;I know a
        different one. It begins with your great-grandparents, Bess and Will, and a field outside town that everybody
        shared.&rdquo;
      </p>
      <p>Which story is true? That is the question of the last part of Volume I.</p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags says the rich got rich by saving and the poor got poor by being lazy. Can you think of any other way
      a few people might end up owning all the land and tools, while everyone else owns nothing?
    </p>
  ),

  struggle: [<TheFirstPush key="a" />],
  reveal: [<TwoStories key="b" />],

  eli5: "Before bosses could hire workers, someone had to have money and tools, and lots of people had to have nothing. Marx says this did not happen because some were lazy. It happened when people were pushed off the land they lived on.",

  grownUp: (
    <>
      <p>
        Everything so far turns in a circle. Capital makes surplus-value, and surplus-value is turned into more capital.
        But the circle takes two things for granted: owners of money and means of production on one side, and{" "}
        <strong>free workers</strong> on the other, free in the double sense from Chapter 6. The circle cannot produce
        its own starting point. So there must have been a <strong>primitive accumulation</strong> (Adam Smith called it
        &ldquo;previous accumulation&rdquo;) that came before capitalist accumulation and made it possible.
      </p>
      <p>
        Political economists told this beginning as a moral story: a diligent, frugal elite saved, and lazy rascals
        spent. Marx says it plays the same role as original sin in theology, and calls it a nursery tale. In real
        history, he says, &ldquo;conquest, enslavement, robbery, murder, briefly force&rdquo; played the great part.
      </p>
      <p>
        For Marx, primitive accumulation is simply the historical process of separating producers from their means of
        production. It has two faces. Workers were set free from <strong>serfdom</strong> and from the rules of the{" "}
        guilds, and that is the face historians like to show. But they also lost their land, their tools and the old
        guarantees of feudal life, and only then did they have to sell themselves. Marx dates the capitalist era from the
        16th century and takes England as the classic example, because there the driving of peasants off the land, the
        basis of the whole process, happened most completely.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The split between people who own the means of production and people who own only their ability to work is not
        natural, and it is not the reward of saving and the punishment of laziness. It was made, in history, mostly by
        force. Once capitalism is up and running, it keeps reproducing that split by itself, but somebody first had to
        create it.
      </p>
      <p>The next chapters tell that history, using England as the main example.</p>
    </>
  ),

  critics: [
    {
      who: "Saving and enterprise",
      point: (
        <p>
          Many economic historians accept that force played a part, but argue that most early capital was built up more
          quietly: merchants, craftsmen and farmers saving and reinvesting over generations, and new methods raising
          output. On this view plunder explains some fortunes, but steady accumulation and rising productivity explain
          most of the growth.
        </p>
      ),
    },
    {
      who: "The transition debate",
      point: (
        <p>
          Historians still argue over what ended feudalism. Some, such as M. M. Postan and Emmanuel Le Roy Ladurie, gave
          the main role to population changes like the Black Death. Robert Brenner (1976) argued instead that class
          relations in the countryside decided the outcome, a view closer to Marx&apos;s. The debate shows the story is
          less settled than either side&apos;s simple version.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why can't the circle of capital explain its own beginning?",
      options: [
        "Because coins wear out",
        "Because it needs a boss with money and workers with nothing before it can start",
        "Because Marx forgot to explain it",
      ],
      answer: 1,
      why: "Capital makes surplus-value and surplus-value makes capital, but both need owners and property-less workers to exist first.",
    },
    {
      q: "What does Marx call the story of the hard-working savers and the lazy spenders?",
      options: ["A nursery tale", "A scientific law", "A true history"],
      answer: 0,
      why: "He says it is told like the story of original sin, and that real history was made mostly by force.",
    },
    {
      q: "Workers in this history were 'freed' in two ways. Which pair is right?",
      options: [
        "Freed from paying rent, and freed from hard work",
        "Freed from the lord and the guilds, and freed of their land and tools",
        "Freed from the town, and freed from money",
      ],
      answer: 1,
      why: "They stopped being serfs, which was a gain, but they also lost everything they could have lived on.",
    },
  ],

  remember: [
    "Capital needs a starting point it cannot make itself: owners with money and workers with nothing.",
    "Marx calls how that starting point came about primitive accumulation.",
    "The 'savers and spenders' story is, for Marx, a nursery tale. History shows force instead.",
    "Workers were freed from serfdom and guilds, and at the same time freed of their land and tools.",
  ],

  terms: ["primitive-accumulation", "serfdom"],

  source: (
    <p>
      Covers Volume I, Chapter 26 (&ldquo;The Secret of Primitive Accumulation&rdquo;), the opening of Part Eight.
      Marx&apos;s own points: the vicious circle; Smith&apos;s &ldquo;previous accumulation&rdquo;; the comparison with
      original sin and the &ldquo;diligent&rdquo; elite versus &ldquo;lazy rascals&rdquo;; history written &ldquo;in
      letters of blood and fire&rdquo;; the capitalist era dating from the 16th century; England as the classic case.
      Bess and Will, Sam&apos;s great-grandparents, belong to this site.
    </p>
  ),
};

export default chapter;
