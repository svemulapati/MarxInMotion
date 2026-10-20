import type { ChapterContent } from "@/components/ChapterTemplate";
import { ACeilingNeverAFloor, PunishedForBeingPoor } from "./ch28-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why were people punished for not having a job?",

  story: (
    <>
      <p>
        When Bess and Will reached the town, they were not the only ones. Families from every village around were
        arriving on the same road, all looking for work.
      </p>
      <p>
        The few workshops took a handful of people. Will was not one of them. For weeks he walked from town to town,
        asking at every door. When the food ran out, he begged.
      </p>
      <p>
        One day a constable stopped him. &ldquo;A strong man like you, begging?&rdquo; he said. &ldquo;That&apos;s
        against the law. You&apos;re a vagabond.&rdquo; Will tried to explain that the fields he used to work were full
        of sheep now. The constable didn&apos;t want to hear it.
      </p>
      <p>Is it fair to punish someone for having no work, if their work was taken away?</p>
    </>
  ),

  guess: (
    <p>
      Thousands of people have been pushed off the land, and the workshops can only take a few. If you were making the
      laws, what would you do about all the people with no work? What do you think the lawmakers of the time did?
    </p>
  ),

  struggle: [<PunishedForBeingPoor key="a" />],
  reveal: [<ACeilingNeverAFloor key="b" />],

  eli5: "People who lost their land often could not find work, and the law punished them very harshly for it. Other laws kept wages low and stopped workers from joining together. Later, hunger alone was enough to make people take any job.",

  grownUp: (
    <>
      <p>
        The people driven from the land could not all be absorbed by the young manufactures as fast as they were thrown
        out, and they could not suddenly adapt to a new way of life. Many became beggars, robbers and vagabonds,
        &ldquo;partly from inclination, in most cases from stress of circumstances&rdquo;, as Marx puts it. Across
        Western Europe, at the end of the 15th century and through the 16th, a <strong>bloody legislation</strong>{" "}
        against vagabondage followed. It treated them as voluntary criminals.
      </p>
      <p>
        In England, a law of 1530 under Henry VIII gave licences to old beggars unable to work, while sturdy vagabonds
        were to be whipped and sent back to their birthplace to &ldquo;put themselves to labour&rdquo;; a later statute
        added the cutting of half an ear for a second arrest and execution for a third. A statute of 1547 under Edward
        VI made a person who refused to work the slave of whoever denounced them. Under Elizabeth, in 1572, unlicensed
        beggars over 14 were to be flogged and branded unless someone took them into service for two years, with death
        for repeated offences.
      </p>
      <p>
        At the same time, the state held wages down. The <strong>Statute of Labourers</strong> of 1349 fixed a maximum
        wage, never a minimum, and taking higher wages was punished more severely than paying them. Workers combining to
        raise wages was treated as a crime from the 14th century until 1825, when the laws against trade unions fell, in
        part. Once capitalist production stands on its own feet, Marx says, open force is needed only now and then. The
        &ldquo;dull compulsion of economic relations&rdquo; does the rest.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The habit of turning up for work every day, for wages, under someone else&apos;s orders, was not natural to
        people who had always worked their own land. It had to be taught, and in the early centuries the state taught it
        with the whip, the branding iron and the gallows, while also keeping wages low by law.
      </p>
      <p>
        Today, Marx says, no whip is needed: people without land or tools must sell their labour-power or go hungry.
        But that quiet pressure grew out of a very loud and violent beginning.
      </p>
    </>
  ),

  critics: [
    {
      who: "How the laws were used",
      point: (
        <p>
          Historians such as C. S. L. Davies (1966) showed that the harshest law, the 1547 slavery statute, was hardly
          enforced and was repealed within about two years. Many vagrancy laws were applied unevenly, and local
          officials often ignored their worst clauses. Marx lists the laws as written, which can make them seem more
          effective than they were.
        </p>
      ),
    },
    {
      who: "The Poor Laws",
      point: (
        <p>
          Others point out that Tudor England also built one of Europe&apos;s first systems of public relief: the
          Elizabethan Poor Law of 1601 made each parish responsible for the old, the sick and the unemployed. On this
          view the state did not only punish the poor; it also, slowly, began to support them.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why did so many people become beggars after being driven off the land?",
      options: [
        "They all wanted to stop working",
        "The workshops could take only a few, so most had no other way to live",
        "Begging paid better than farming",
      ],
      answer: 1,
      why: "Marx says a few chose it, but most were forced into it by circumstances.",
    },
    {
      q: "What did the Statute of Labourers of 1349 fix?",
      options: ["A lowest wage", "A highest wage, but no lowest", "The length of the working day only"],
      answer: 1,
      why: "The law set a ceiling on wages, never a floor, and punished workers who took more.",
    },
    {
      q: "What does Marx mean by 'the dull compulsion of economic relations'?",
      options: [
        "Boring meetings about money",
        "People without land or tools are pushed to work by need, without anyone using force",
        "A new law against laziness",
      ],
      answer: 1,
      why: "Once people own nothing else, the need to eat is enough to send them to the workshop.",
    },
  ],

  remember: [
    "The people driven off the land could not all find work in the new workshops.",
    "Harsh laws punished them as if being poor were a crime: whipping, branding, even slavery or death.",
    "Wage laws set a highest wage but never a lowest one.",
    "Workers joining together was a crime from the 14th century until 1825.",
    "Later, need alone was enough to make people work: Marx's 'dull compulsion'.",
  ],

  terms: ["bloody-legislation", "vagabond", "statute-of-labourers"],

  source: (
    <p>
      Covers Volume I, Chapter 28 (Fowkes: &ldquo;Bloody Legislation against the Expropriated, from the End of the
      Fifteenth Century. The Forcing Down of Wages by Act of Parliament&rdquo;). Marx&apos;s own facts: the 1530 and 27
      Henry VIII statutes; Edward VI, 1547; Elizabeth, 1572; the Statute of Labourers, 1349; higher wages punished more
      in the taker than the giver; combinations a crime until 1825; &ldquo;grotesquely terrible&rdquo; laws; &ldquo;the
      dull compulsion of economic relations&rdquo;. Will&apos;s story belongs to this site.
    </p>
  ),
};

export default chapter;
