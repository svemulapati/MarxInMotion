import type { ChapterContent } from "@/components/ChapterTemplate";
import { ChainsOfTheSameMetal, FreeToGoHungry } from "./ch07-animations";

const chapter: ChapterContent = {
  bigQuestion: "If nobody owns you, are you really free?",

  story: (
    <>
      <p>
        Sam has a day off and wanders back to the Old Thinkers&apos; Shelf. A small, fierce book catches his eye. It was
        written in 1767 by Simon Linguet, a French lawyer who loved to argue.
      </p>
      <p>
        Everyone in Linguet&apos;s time was proud that workers were now free: free to choose a boss, free to leave.
        Linguet asked an awkward question. &ldquo;Free to do what, if you have no field and no tools?&rdquo;
      </p>
      <p>
        Sam thinks about market mornings, when he waits to be hired. He has never thought of himself as unfree. But he has
        never had a choice about working, either.
      </p>
    </>
  ),

  guess: (
    <p>
      Sam can work for any boss he likes. But he owns nothing except his hands. Is there anything he is not free to
      choose?
    </p>
  ),

  struggle: [<FreeToGoHungry key="a" />],
  reveal: [<ChainsOfTheSameMetal key="b" />],

  eli5: "Linguet said a worker who owns nothing is free from any one master, but not free from needing food. So he must work for someone, on their terms. His freedom has a hidden catch.",

  grownUp: (
    <>
      <p>
        Simon-Nicolas-Henri Linguet&apos;s <em>Théorie des lois civiles</em> (1767) attacked the Enlightenment&apos;s
        praise of the free labourer. Marx quotes him at length. The rich, says Linguet, have taken possession of all the
        conditions of production, so the poor must labour to increase others&apos; wealth in order to live. The day-labourer
        is bound to no one, but &ldquo;no one is bound to him&rdquo;; he is hired at the cheapest price and dismissed
        &ldquo;with the coldest indifference&rdquo;. They have no master? &ldquo;They have one, and the most terrible
        &hellip; need.&rdquo; Workers&apos; chains and slaves&apos; chains are &ldquo;both equally forged by
        necessity&rdquo;.
      </p>
      <p>
        Linguet went further and defended &ldquo;Asiatic&rdquo; slavery against wage-labour, arguing that a slave at least
        had a price and was therefore cared for. Marx stresses that &ldquo;Linguet however is not a socialist&rdquo;: his
        polemic is given, &ldquo;half-seriously, half-ironically&rdquo;, a reactionary appearance. What impresses Marx is
        Linguet&apos;s depth, shown in his reply to Montesquieu that the spirit of the laws is property. Linguet&apos;s
        phrase for the wage-labourer&apos;s condition is a forerunner of what later writers called{" "}
        <strong>wage-slavery</strong>.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Being free of any one master is not the same as being free. A worker who owns no means of production must sell his
        labour to someone in order to live. That dull compulsion, Linguet saw early on, is a kind of dependence even when
        nobody holds a whip.
      </p>
      <p>
        Marx normally leaves socialist writers out of these notebooks. He includes Linguet, who was not a socialist, and
        whose opponents were the economists of his own day, the Physiocrats.
      </p>
    </>
  ),

  critics: [
    {
      who: "Defenders of free labour",
      point: (
        <p>
          Liberal economists reply that the comparison with slavery is badly overstated. A wage-worker can quit, bargain,
          save, organise and change trade; a slave can do none of these. Over time, they argue, the freedom to choose
          employers drove wages up and opened paths out of poverty that slavery never allowed.
        </p>
      ),
    },
    {
      who: "Historians of slavery",
      point: (
        <p>
          Historians also warn that comparing wage-labour with chattel slavery, as Linguet did, can play down the horrors of
          slavery, which included ownership of people, separation of families and violence. Many readers who accept
          Linguet&apos;s point about need still reject his comparison.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Linguet says the day-labourer has no master. Then what does he say is his master?",
      options: ["The king", "Need", "The church"],
      answer: 1,
      why: "Linguet: they have a master, and the most terrible of all, need.",
    },
    {
      q: "Why does Linguet say the free worker is easily treated badly?",
      options: [
        "Because there are many workers and each can be replaced at once",
        "Because workers are paid in gold",
        "Because the law protects them too much",
      ],
      answer: 0,
      why: "He compares a worker to one drop in a great river: if one goes, another takes his place.",
    },
    {
      q: "What does Marx say about Linguet's praise of slavery?",
      options: [
        "That Linguet was a socialist",
        "That it was half serious, half ironic, and Linguet was no socialist",
        "That Linguet was right in every way",
      ],
      answer: 1,
      why: "Marx says Linguet is not a socialist and gives his attack a reactionary look, half seriously and half ironically.",
    },
  ],

  remember: [
    "Linguet (1767) asked what freedom means for a worker who owns nothing but his hands.",
    "His answer: such a worker has no single master, but the hardest master of all, need.",
    "He provocatively compared the worker's chains with a slave's; Marx says this was half ironic and Linguet was no socialist.",
    "Critics answer that wage-workers can quit, bargain and organise, and that slavery was far worse.",
  ],

  terms: ["linguet", "wage-slavery"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Chapter 7 (&ldquo;Linguet&rdquo;), Progress Publishers edition on marxists.org.
      Linguet&apos;s lines about need as master, the drop in the river and the chains forged by necessity are quoted by
      Marx from <em>Théorie des lois civiles</em> (London, 1767). Sam&apos;s market morning and the drawings are this
      site&apos;s. Marx wrote these notebooks in 1861 to 1863; Karl Kautsky first published them (1905 to 1910).
    </p>
  ),
};

export default chapter;
