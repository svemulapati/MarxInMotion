import type { ChapterContent } from "@/components/ChapterTemplate";
import { MachineOrCapital, NewClothesSameCapital, PastWorkAndLivingWork } from "./ch05-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is a machine capital, all by itself?",

  story: (
    <>
      <p>
        A travelling fair comes to Tiny Town, and in one of its tents stands an old spinning machine with a rope around
        it and a sign: &ldquo;Please do not touch.&rdquo; Mr. Moneybags walks past and sniffs. &ldquo;Capital,&rdquo; he
        says. &ldquo;Machines, tools, cotton, coins. That&apos;s all capital is.&rdquo;
      </p>
      <p>
        Leo the weaver has a machine just like it in his cottage. He spins his own yarn on it, weaves the yarn into
        cloth and sells the cloth himself. He has never thought of it as capital. It is just his machine.
      </p>
      <p>
        And in Moneybags&apos; mill there is a third one, worked all day by Sam for 3 coins, while the yarn and the
        money from selling it belong to Moneybags.
      </p>
      <p>Three machines, exactly alike. Are they all capital? Only one? Or none?</p>
    </>
  ),

  guess: (
    <p>
      If you moved the machine from Moneybags&apos; mill into a museum, would it still be capital? What do you think
      makes the difference: the machine itself, or the people around it?
    </p>
  ),

  struggle: [<MachineOrCapital key="a" />, <NewClothesSameCapital key="b" />],
  reveal: [<PastWorkAndLivingWork key="c" />],

  eli5: "A machine is just a machine until someone owns it and pays other people to work it. Capital is old work that grows by using new work. It needs people who have nothing to sell but their work.",

  grownUp: (
    <>
      <p>
        The economists of Marx&apos;s day defined capital as raw materials, instruments of labour and means of
        subsistence used to produce more of the same: in other words, <strong>accumulated labour</strong> used as a
        means for new production. Marx says that definition describes things, not capital.
      </p>
      <p>
        His comparison is pointed. A person, he says, only becomes a slave within certain social relations; it is not
        part of who they are. In the same way a cotton-spinning machine only becomes capital under certain conditions.
        Torn out of them it is no more capital than gold by itself is money. People produce by working with and for one
        another, inside <strong>relations of production</strong> that change as the means of production change (his
        example: the invention of firearms reorganised armies). Ancient, feudal and capitalist society are different
        sets of such relations.
      </p>
      <p>
        Capital is also a sum of <strong>exchange-values</strong>. Its body can change from wool to cotton to
        railway shares while it stays the same capital. But not every sum of values is capital. A sum of values becomes
        capital when, as the power of one part of society, it keeps itself and grows by exchanging with living
        labour-power. That needs &ldquo;a class which possesses nothing but the ability to work&rdquo;.
      </p>
      <p>
        So capital is not past labour helping living labour. It is living labour serving past labour, keeping its value
        and making it larger. <em>Volume I, Chapters 4 to 6</em> and <em>Volume II, Chapter 1</em> develop this.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capital is a social relation dressed up as a thing. We see machines, warehouses and bank balances, and it is
        easy to think they make wealth by themselves. Marx says they only act as capital because some people own them
        and others, who own nothing else, must work them for a wage.
      </p>
      <p>
        That relation is historical. It has not always existed, and Marx expected it would not last forever.
      </p>
    </>
  ),

  critics: [
    {
      who: "Capital as productive tools",
      point: (
        <p>
          Most economists use &ldquo;capital&rdquo; to mean produced means of production (machines, buildings,
          equipment) that make workers more productive, whoever owns them. On this view a machine in a worker
          co-operative or a state factory is just as much capital as one in a private mill, so the ownership relation
          is not what makes it capital. Marx would reply that this definition hides who controls the machine and who
          gets what it produces.
        </p>
      ),
    },
    {
      who: "Saving and waiting",
      point: (
        <p>
          Writers in the Austrian school, such as Eugen von Böhm-Bawerk, saw capital as the result of people putting off
          consumption to build &ldquo;roundabout&rdquo; methods of production, which then yield more. Capital, on this
          view, grows from saving and time, not from one class serving another.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Leo spins yarn on his own machine for his own weaving, and sells the cloth himself. Is his machine capital, in Marx's sense?",
      options: ["Yes, every machine is capital", "No, it is his own tool; nobody is hired to make it grow", "Only on market days"],
      answer: 1,
      why: "For Marx a machine becomes capital only inside a relation where it is owned by one person and worked by others for a wage.",
    },
    {
      q: "Mr. Moneybags swaps 100 coins of wool for 100 coins of cotton. What happens to his capital?",
      options: ["It doubles", "It stays the same, it just wears a new body", "It disappears"],
      answer: 1,
      why: "Capital is a sum of exchange-values. Its body can change while its value stays the same.",
    },
    {
      q: "What does Marx say a pile of things needs before it can act as capital?",
      options: [
        "A very large warehouse",
        "A class of people who own nothing but their ability to work",
        "A gold coin on top",
      ],
      answer: 1,
      why: "Capital keeps and grows its value by exchanging with living labour-power, which needs people with nothing else to sell.",
    },
  ],

  remember: [
    "The old economists said capital is tools, materials and food used to make more. Marx said that describes things, not capital.",
    "A machine is only capital in certain relations between people, just as gold is only money in certain conditions.",
    "Capital is a sum of values that can change its body: wool, cotton, ships.",
    "Capital means past work ruling living work, and it needs people who have only their work to sell.",
  ],

  terms: ["accumulated-labour", "capital", "production-relations", "exchange-value"],

  source: (
    <p>
      Covers Wage-Labour and Capital, section 5, &ldquo;The nature and growth of capital&rdquo; (lectures of 1847,
      printed 1849; the 1891 edition on marxists.org, revised by Engels). Marx&apos;s own points: the economists&apos;
      definition of capital as accumulated labour; his comparison with slavery and with gold and money; the firearm
      reshaping armies; ancient, feudal and bourgeois society as totalities of relations of production; capital as a sum
      of exchange-values whose body can change (cotton for wool, rice for wheat, steamships for railroads); &ldquo;a
      class which possesses nothing but the ability to work&rdquo;; living labour serving accumulated labour. Marx&apos;s
      slavery comparison is retold in our own words. The museum, Leo&apos;s cottage and the 100-coin wool are this
      site&apos;s illustrations.
    </p>
  ),
};

export default chapter;
