import type { ChapterContent } from "@/components/ChapterTemplate";
import { FourFears, TenMeasures, WhoseProperty } from "./ch02-animations";

const chapter: ChapterContent = {
  bigQuestion: "What did the communists say they wanted, and why were so many people afraid of it?",

  story: (
    <>
      <p>
        The pamphlet from London has been read aloud in Tiny Town&apos;s square. The next evening the square is full again,
        and this time everyone is worried.
      </p>
      <p>
        Ava holds her sewing basket tight. &ldquo;Will they take this?&rdquo; Mr. Moneybags points at his workshop:
        &ldquo;They want mine, that&apos;s for sure.&rdquo; Mia asks about the children&apos;s schooling. Grandpa Ned
        wants to know what happens to families. Sam stays quiet. He owns almost nothing to lose.
      </p>
      <p>
        The second part of the pamphlet answers them one by one. It is short, sharp and very sure of itself. Some people
        in the square nod along. Others get angrier with every line.
      </p>
      <p>What exactly did the communists say they wanted to change, and what did they say they would leave alone?</p>
    </>
  ),

  guess: (
    <p>
      Ava&apos;s basket, Sam&apos;s wages, Mr. Moneybags&apos; workshop: which of these do you think the pamphlet says it
      wants to abolish? And can you think of anything on its list of plans that your own country does today?
    </p>
  ),

  struggle: [<WhoseProperty key="a" />, <FourFears key="b" />],
  reveal: [<TenMeasures key="c" />],

  eli5: "Marx and Engels said they didn't want to take people's own things, only the businesses that make money from other people's work. People feared this meant losing freedom, family and country, and they answered each fear. Then they listed ten plans, and some of them, like free school, later happened in many countries.",

  grownUp: (
    <>
      <p>
        Section II opens by saying the communists are not a separate party against other workers&apos; parties. They
        claim only to push for the shared interests of all workers, across nations. Their immediate aim, they write, is
        the &ldquo;formation of the proletariat into a class&rdquo;, the overthrow of the bourgeoisie&apos;s rule, and
        the winning of political power by the working class.
      </p>
      <p>
        The core of the chapter is <strong>property</strong>. Marx and Engels say communism&apos;s distinguishing aim is
        &ldquo;the abolition of bourgeois property&rdquo;, which they sum up as the{" "}
        <strong>abolition of private property</strong> in this sense. They separate it from the small property of
        artisans and peasants, which they say industry is already destroying, and from the wage a worker spends to live.
        What they target is <strong>capital</strong>: property that, in their argument, can only grow by employing
        wage-labour. They add that private property already does not exist &ldquo;for nine-tenths of the
        population&rdquo;.
      </p>
      <p>
        They then answer objections: that nobody will work, that freedom, culture and the family will be destroyed, and
        that nations will be abolished. Along the way comes one of their best-known claims: &ldquo;The ruling ideas of
        each age have ever been the ideas of its ruling class.&rdquo;
      </p>
      <p>
        The first step, they write, is to raise the working class to ruling class, &ldquo;to win the battle of
        democracy&rdquo;, then to take capital &ldquo;by degrees&rdquo; into the hands of the state, using
        &ldquo;despotic inroads on the rights of property&rdquo;. Then come the <strong>ten measures</strong>, and a
        prediction that once classes disappear, public power loses its political character, leaving &ldquo;an
        association, in which the free development of each is the condition for the free development of all&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Marx and Engels argued that the property worth fighting over is not your coat or your savings but ownership of
        the things everyone needs to work with: land, factories, machines and money used as capital. Whoever owns those,
        they said, can live off other people&apos;s work. Put that ownership in common hands, and in their view
        exploitation, and in the end classes and the state as a tool of one class, would disappear.
      </p>
      <p>
        It is a plan and a prophecy, not a description of anything that had happened. Readers still argue about how to
        fit together its two sides: &ldquo;win the battle of democracy&rdquo; on one hand, &ldquo;despotic
        inroads&rdquo; on the other. The authors themselves said in 1872 that the measures should not be stressed and
        would be worded very differently.
      </p>
    </>
  ),

  critics: [
    {
      who: "Defenders of private property",
      point: (
        <p>
          Ludwig von Mises (<em>Socialism</em>, 1922) argued that if the state owns all the means of production, there
          are no market prices for them, so planners cannot work out which uses are wasteful. Friedrich Hayek (
          <em>The Road to Serfdom</em>, 1944) argued that putting all capital in the state&apos;s hands concentrates
          power, and that the freedom to buy, sell and own is bound up with freedom of speech and of choosing your work.
          On this view the line between &ldquo;personal&rdquo; and &ldquo;bourgeois&rdquo; property cannot hold.
        </p>
      ),
    },
    {
      who: "The historical record",
      point: (
        <p>
          Governments that claimed to follow the Manifesto took land, banks and industry into state hands. In the Soviet
          Union, forced collectivisation of farms was followed by the famine of 1932 and 1933, in which millions died, and
          these states became one-party regimes without free elections. Defenders reply that Marx and Engels spoke of
          winning &ldquo;the battle of democracy&rdquo; and of the free development of each, and point out that measures
          such as a graduated income tax, free schooling and an end to child factory labour were later adopted by
          democracies.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which kind of property did Marx and Engels say communists meant to abolish?",
      options: ["Ava's own sewing basket", "Sam's wages that he spends on food", "Capital: property that hires other people"],
      answer: 2,
      why: "They said small makers' property was already being crushed by industry and wages left nothing over. Their target was capital.",
    },
    {
      q: "Which of the ten measures later became ordinary in many countries?",
      options: ["Abolishing all inheritance", "Free schooling for all children", "Industrial armies"],
      answer: 1,
      why: "Free public schooling, like a graduated income tax, spread widely, usually through parties that were not communist.",
    },
    {
      q: "What did Marx and Engels write about the ten measures in 1872?",
      options: ["They were perfect and should never change", "They would be very differently worded today", "They had never written them"],
      answer: 1,
      why: "Their 1872 preface says no special stress should be laid on them and that the passage would be very differently worded.",
    },
  ],

  remember: [
    "Marx and Engels said communists had no separate interests from workers as a whole.",
    "The property they meant to abolish was capital, not people's own things.",
    "They answered four fears: about work, freedom, the family and the nation.",
    "Their ten measures mix ideas that later became common, like free schools, with ideas still widely opposed, like ending inheritance.",
    "In 1872 they said the measures would be worded very differently.",
  ],

  terms: ["abolition-of-private-property", "ten-measures", "free-development-of-each", "capital"],

  source: (
    <p>
      Covers Section II, &ldquo;Proletarians and Communists&rdquo;, of the <em>Manifesto of the Communist Party</em> by
      Karl Marx and Frederick Engels (written late 1847, published February 1848), in the 1888 English translation by
      Samuel Moore in cooperation with Engels, as on marxists.org. The 1872 remark comes from Marx and Engels&apos; joint
      preface to the German edition of that year. The Tiny Town scenes and the sorting of the ten measures into
      &ldquo;became common&rdquo; and &ldquo;still widely opposed&rdquo; are this site&apos;s summary, not the
      authors&apos;.
    </p>
  ),
};

export default chapter;
