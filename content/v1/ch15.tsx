import type { ChapterContent } from "@/components/ChapterTemplate";
import { LeoAgainstTheMachineLoom, LongerFullerFaster, WhatAMachineIsMadeOf } from "./ch15-animations";

const chapter: ChapterContent = {
  bigQuestion: "If machines can do the work, why didn't they make work easier?",

  story: (
    <>
      <p>
        One morning a huge iron machine is rolled into Mr. Moneybags&apos; spinning workshop. It hisses and clanks, and a
        tall chimney is built beside it. Everyone in Tiny Town comes to look.
      </p>
      <p>
        Sam is excited. &ldquo;This machine can spin more yarn in an hour than I can in a week,&rdquo; he tells Mia.
        &ldquo;Surely now I can go home early.&rdquo;
      </p>
      <p>
        Across town, Leo is worried. A new factory is going up, full of machine looms. Leo still weaves by hand, the way
        his father did.
      </p>
      <p>
        A month later, Sam is working longer than ever. Leo can barely sell his cloth. Even Sam&apos;s little brother now
        works at the mill. How can a machine that does so much work leave people working harder?
      </p>
    </>
  ),

  guess: (
    <p>
      A machine can do the work of many hands. So who do you think decides how it is used? And if you owned the
      machine, would you let it stand still while your workers went home early?
    </p>
  ),

  struggle: [<WhatAMachineIsMadeOf key="a" />, <LongerFullerFaster key="b" />],
  reveal: [<LeoAgainstTheMachineLoom key="c" />],

  eli5: "Machines can do lots of work, but the boss who owns them wants them to make money. So workers ended up working longer and faster, and whole families went to the factory. Machines themselves were not the enemy, but the way they were used hurt workers.",

  grownUp: (
    <>
      <p>
        Marx opens with a line from John Stuart Mill: it is questionable whether all the inventions so far have
        lightened anyone&apos;s daily toil. Marx&apos;s answer is that machinery was never meant to. Under capital it is
        a way to make goods cheaper, so the worker&apos;s wage is paid back in fewer hours, and more of the day is
        surplus. It is a means for producing <strong>relative surplus-value</strong>.
      </p>
      <p>
        <strong>Machinery</strong> has three parts: a motor, a transmitting mechanism, and the working machine that
        holds the tools. The working machine is the revolutionary part. A person has two hands; a machine can work
        dozens of spindles at once. Like all constant capital, a machine <strong>creates no new value</strong>. It hands
        its own value to the product as it wears out.
      </p>
      <p>
        Marx then shows three effects on workers. Because machines need less strength, capital draws in women and
        children, and the value of a man&apos;s labour-power is spread over his whole family: four people do four
        days&apos; labour for not much more than one wage. Because a machine wears out, and also loses value as newer
        machines appear (what Marx calls moral depreciation), the owner wants it running as long as possible, so the
        day gets longer. And when the law shortened the day, as the Ten Hours&apos; Act of 1847 did, capital raised the{" "}
        <strong>intensity of labour</strong> instead: faster machines, fewer gaps.
      </p>
      <p>
        In the <strong>factory system</strong> the worker becomes, in Marx&apos;s phrase, a living appendage of a
        lifeless mechanism. Machines also throw people out of work. The English hand-loom weavers sank over decades;
        in 1838 they and their families still numbered 800,000. Some workers, the <strong>Luddites</strong>, smashed
        machines. Marx says it took time and experience before workers learned to attack not the machines but the way
        capital used them.
      </p>
      <p>
        Economists of Marx&apos;s day argued that displaced workers would be compensated, because the money once spent
        on their wages would be &ldquo;set free&rdquo; to employ them elsewhere. Marx disagrees with his own example: a
        carpet maker sacks 50 of his 100 workers and spends £1,500 on machinery. That money is not set free. It is
        locked up in the machine. Finally, Marx looks at the Factory Acts. Their health and education clauses were weak,
        but he saw in them the first sign of a future where every child combines learning with productive work.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Machines could make work lighter and shorter for everyone. Under capitalism they do the opposite, because they
        belong to someone whose aim is surplus-value. The problem is not the machine. It is who owns it, and what for.
      </p>
      <p>
        That is why Marx praises the machines&apos; power while attacking how they are used. He also thought the
        factory&apos;s ever-changing technology would one day need workers with many skills rather than one, and that
        the Factory Acts, weak as they were, pointed toward society taking control of how machines are used.
      </p>
    </>
  ),

  critics: [
    {
      who: "Machines made us richer",
      point: (
        <p>
          Economists point out that in industrial countries real wages rose and working hours fell a great deal after
          Marx wrote, and that new industries created more jobs than machines destroyed. On this view the compensation
          Marx doubted did happen, though slowly. Marx&apos;s defenders reply that the gains came largely through the
          workers&apos; struggles and the factory laws he describes.
        </p>
      ),
    },
    {
      who: "Why Britain built machines",
      point: (
        <p>
          The economic historian Robert C. Allen argues that Britain mechanised first because its wages were high and
          its coal cheap, so machines saved costly labour. On this view inventions were driven by prices and knowledge,
          not mainly by a wish to lengthen the day or squeeze workers harder.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What are the three parts of a fully developed machine?",
      options: ["A motor, a transmitting mechanism and a working machine", "Wheels, bells and whistles", "A worker, a boss and a buyer"],
      answer: 0,
      why: "The motor makes the power, the belts and shafts carry it, and the working machine holds the tools.",
    },
    {
      q: "Does a machine create new value, according to Marx?",
      options: ["Yes, more than any worker", "No, it passes on its own value bit by bit as it wears out", "Only when it runs at night"],
      answer: 1,
      why: "Like all constant capital, a machine only transfers its own value. New value comes from work.",
    },
    {
      q: "What lesson does Marx say workers learned after the Luddites?",
      options: [
        "To fight the way capital used machines, not the machines themselves",
        "To build their own steam engines",
        "That machines were too heavy to break",
      ],
      answer: 0,
      why: "Marx says it took time and experience before workers aimed at the way machines were employed, not at the machines.",
    },
  ],

  remember: [
    "A machine has a motor, a transmitting mechanism and a working machine that holds many tools at once.",
    "Machines pass on their own value but create no new value. New value still comes from work.",
    "Under capital, machines made days longer, brought whole families into the factory, and made work faster.",
    "Machines threw hand-loom weavers like Leo out of work. Marx blames how machines were used, not the machines.",
  ],

  terms: ["machinery", "factory-system", "intensity-of-labour", "luddites"],

  source: (
    <p>
      Covers Volume I, Chapter 15 (Fowkes: &ldquo;Machinery and Large-Scale Industry&rdquo;; Moore and Aveling:
      &ldquo;Machinery and Modern Industry&rdquo;), with its ten sections: the development of machinery, the value it
      transfers, its effects on the worker, the factory, the strife between worker and machine, compensation theory,
      repulsion and attraction of workers, the revolution in manufacture and domestic industry, the Factory Acts, and
      agriculture. Marx&apos;s own material: Mill&apos;s remark, the three parts of a machine, the family of four, moral
      depreciation, the Ten Hours&apos; Act of 1847, the 800,000 hand-loom weavers of 1838, the Luddites, and the £1,500
      carpet-factory example. Leo&apos;s pay and the cloth prices in the animation are invented.
    </p>
  ),
};

export default chapter;
