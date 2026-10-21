import type { ChapterContent } from "@/components/ChapterTemplate";
import { FiveSocialisms, ThePerfectVillage } from "./ch03-animations";

const chapter: ChapterContent = {
  bigQuestion: "If lots of people wanted to help workers, why did Marx and Engels argue with almost all of them?",

  story: (
    <>
      <p>
        News of the pamphlet spreads, and soon Tiny Town&apos;s square is crowded with speakers, each standing on a box
        with a plan.
      </p>
      <p>
        An old lord in a velvet coat says everything was better before the factories came. Tom the shopkeeper agrees: bring
        back the old craft guilds! A philosopher talks beautifully about Humanity. A kind gentleman hands out soup and
        says nothing else needs to change. And a dreamer unrolls a drawing of a perfect village where everyone shares.
      </p>
      <p>
        Every one of them says they are on the workers&apos; side. Sam is confused. &ldquo;If they all want to help, why
        does the pamphlet argue with them?&rdquo;
      </p>
      <p>That is the question of this chapter.</p>
    </>
  ),

  guess: (
    <p>
      Look at the speakers: the lord who misses the old days, the shopkeeper who wants the guilds back, the kind gentleman
      with soup, the dreamer with a perfect village. What do you think Marx and Engels might find wrong with each of them?
    </p>
  ),

  struggle: [<FiveSocialisms key="a" />],
  reveal: [<ThePerfectVillage key="b" />],

  eli5: "In 1848 lots of people called themselves socialists and had different plans. Marx and Engels said most of them either wanted to go back to the old days, or wanted to help workers without changing who owns the factories. They liked the dreamers' criticism but said their perfect villages were castles in the air.",

  grownUp: (
    <>
      <p>
        Section III is a survey of the socialist and communist writing of the time, up to 1847. Marx and Engels sort it
        into three families, and criticise each.
      </p>
      <p>
        <strong>Reactionary socialism</strong> comes in three kinds. Feudal socialism is the aristocracy attacking the
        bourgeoisie in the name of the poor while siding against the workers in practice; Christian socialism, they say,
        goes with it. <strong>Petty-bourgeois socialism</strong>, headed by Sismondi, analysed machinery, crises and the ruin
        of small producers &ldquo;with great acuteness&rdquo;, but its positive aims looked back to guilds and patriarchal
        farming. German or &ldquo;True&rdquo; socialism turned French ideas into philosophy about &ldquo;Human
        Nature&rdquo; with no class struggle at all.
      </p>
      <p>
        <strong>Conservative or bourgeois socialism</strong> wants to redress grievances so as to keep bourgeois society
        going: &ldquo;a bourgeoisie without a proletariat&rdquo;. Proudhon&apos;s <em>Philosophy of Poverty</em> is their
        example.
      </p>
      <p>
        <strong>Critical-utopian socialism</strong> (Saint-Simon, Fourier, Owen) saw class antagonism early and attacked
        every principle of existing society, which Marx and Engels value. But it relied on inventors&apos; plans, appeals
        to all classes and model communities rather than on workers&apos; own political action, and its followers became
        sects. This is why the Manifesto&apos;s own approach, which leans on history and class struggle, is sometimes called
        &ldquo;scientific&rdquo; socialism, a label Engels made popular later.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Wanting to help workers is not enough, Marx and Engels argued. You have to ask what a plan does to the relation
        between owners and workers. If it tries to turn the clock back, it fails; if it leaves that relation alone, it only
        smooths it over; if it waits for the rich to be convinced by a good example, it waits forever.
      </p>
      <p>
        Behind the sharp tone sits one claim: real change comes from workers organising as a class, out of the conditions
        that factories themselves create. The authors later admitted, in 1872, that this criticism stopped at 1847 and was
        out of date.
      </p>
    </>
  ),

  critics: [
    {
      who: "Co-operators and historians of utopian socialism",
      point: (
        <p>
          Some of the &ldquo;utopian&rdquo; ideas worked. Owen&apos;s schools and his campaign against child labour
          influenced factory reform, and the co-operative movement (the Rochdale Pioneers opened their store in 1844) grew
          into businesses still owned by their members today. Historians also note that Marx and Engels&apos; picture of
          their rivals is a polemic: it gives one side of a lively debate, and the writers they mocked often argued back
          with care.
        </p>
      ),
    },
    {
      who: "Proudhon and the anarchists",
      point: (
        <p>
          Pierre-Joseph Proudhon, and later Mikhail Bakunin, argued that putting all capital in the hands of a state, even
          a workers&apos; state, would create a new ruling group and a new tyranny. They preferred free associations of
          producers. Many later readers, looking at the twentieth century, think this warning deserved a fairer hearing
          than the Manifesto gives it.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What did Marx and Engels say was wrong with petty-bourgeois socialism?",
      options: ["It ignored machines and crises", "It saw the problems clearly but wanted to bring back guilds and old ways", "It wanted factories run by the state"],
      answer: 1,
      why: "They praised its sharp analysis of machinery and crises, but said its positive aims looked backwards.",
    },
    {
      q: "Which thinkers did they call critical-utopian socialists?",
      options: ["Saint-Simon, Fourier and Owen", "Adam Smith and David Ricardo", "Sismondi and Proudhon"],
      answer: 0,
      why: "Saint-Simon, Fourier and Owen drew plans for perfect communities, like Owen's “Home Colonies”.",
    },
    {
      q: "What did Marx and Engels like about the utopian socialists?",
      options: ["Their plans for model villages", "Their criticism of existing society", "Their appeals to the rich"],
      answer: 1,
      why: "They called those writings full of “the most valuable materials” for teaching workers, while rejecting the plans.",
    },
  ],

  remember: [
    "In 1847 there were many kinds of socialism, and the Manifesto argues with almost all of them.",
    "Reactionary socialisms (feudal, petty-bourgeois, “true”) looked back or floated above real struggles, in their view.",
    "Bourgeois socialism wanted reforms that kept owners and workers as they were.",
    "The utopians (Saint-Simon, Fourier, Owen) were praised for their criticism and doubted for their plans.",
    "Their own claim: change comes from workers organising as a class.",
  ],

  terms: ["utopian-socialism", "petty-bourgeois-socialism", "bourgeois-socialism"],

  source: (
    <p>
      Covers Section III, &ldquo;Socialist and Communist Literature&rdquo;, of the <em>Manifesto of the Communist
      Party</em> by Marx and Engels (1848), in the 1888 English translation by Samuel Moore in cooperation with Engels, as
      on marxists.org, including Engels&apos; notes of 1888 and 1890 on phalanstères, Home Colonies and Icaria. The 1872
      remark comes from the authors&apos; joint preface of that year. The Tiny Town speakers, Old Lord and Mr. Kindly are
      this site&apos;s inventions; the Rochdale date and the later anarchist debate are general history, not the
      Manifesto.
    </p>
  ),
};

export default chapter;
