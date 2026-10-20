import type { ChapterContent } from "@/components/ChapterTemplate";
import { BartonsMuslin, RicardoChangesHisMind } from "./ch18-animations";

const chapter: ChapterContent = {
  bigQuestion: "When a factory buys a new machine, do workers lose their jobs for good, or do they find new ones?",

  story: (
    <>
      <p>
        Mr. Moneybags has bought a big new spinning machine. Three spinners have been told not to come back on Monday.
        Leo, who remembers what the power loom did to hand weavers, is angry. &ldquo;Machines eat jobs!&rdquo;
      </p>
      <p>
        In the library, Ricardo&apos;s book on the Old Thinkers&apos; Shelf looks a little embarrassed. &ldquo;I used to say
        that never happens,&rdquo; he admits. &ldquo;The money the boss saves gets spent somewhere, and that hires people
        back. But then I read a small book by a man called John Barton, and I changed my mind.&rdquo;
      </p>
      <p>Changed his mind? A famous economist? Sam wants to know what made him do it.</p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags has £20,000. If he spends more of it on machines and buildings, how much is left over to pay
      workers? What do you think happens to the people that money used to pay?
    </p>
  ),

  struggle: [<RicardoChangesHisMind key="a" />],
  reveal: [<BartonsMuslin key="b" />],

  eli5: "Ricardo first thought machines never cost workers their jobs in the end. Then he saw that money spent on machines is money not spent on wages, so some workers are no longer needed. Barton noticed this first, and Marx praised them both for being honest about it.",

  grownUp: (
    <>
      <p>
        This chapter of the <strong>bonus volume</strong> collects Marx&apos;s notes on two loose ends in Ricardo:
        gross versus net revenue, and machinery.
      </p>
      <p>
        On revenue, Ricardo argued that what matters to a nation is its <strong>net revenue</strong> (profit and rent),
        not its gross product. A country could be richer in net revenue while feeding fewer workers. Marx says Ricardo
        expressed these tendencies of capitalism &ldquo;consistently and ruthlessly&rdquo;, which is why philanthropists
        howled at him.
      </p>
      <p>
        On machinery, Ricardo at first held that machines benefit every class: displaced workers would be re-employed by
        the capital set free. In a chapter added to the third edition of his <em>Principles</em>, &ldquo;On
        Machinery&rdquo;, he reversed himself. His example: £20,000 of capital, £7,000 fixed and £13,000 circulating; after
        half the workforce builds a machine worth £7,500, only £5,500 remains to employ labour, so labour formerly paid by
        £7,500 &ldquo;would become redundant&rdquo;. Marx says this change of mind &ldquo;bears witness to his honesty&rdquo;.
      </p>
      <p>
        Ricardo credited John Barton (<em>Observations on the Circumstances which Influence the Condition of the Labouring
        Classes of Society</em>, 1817). Barton held that &ldquo;the demand for labour depends on the increasing of
        circulating, and not of fixed capital&rdquo;, and that as industry develops fixed capital grows much faster. Marx
        gives Barton &ldquo;very great merit&rdquo; as the first to see that the parts of capital do not grow evenly. But he
        corrects the categories: raw materials are circulating capital yet employ no one. The real division is between
        variable capital (wages) and constant capital, the basis of what Marx calls the rising{" "}
        <strong>composition of capital</strong> in Volume I.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Accumulation does not raise the demand for workers in step with the growth of capital. As more and more is spent
        on machines and materials, a smaller share goes on wages, so capital can grow while the number of jobs grows slowly
        or even shrinks. That is one root of the unemployed crowd at the factory gate.
      </p>
      <p>
        Marx admires Ricardo and Barton for seeing this honestly, but says they treated it as a technical fact instead of
        recognising it as part of capital&apos;s power over labour.
      </p>
    </>
  ),

  critics: [
    {
      who: "The compensation view",
      point: (
        <p>
          Many economists since Ricardo&apos;s time argue that machinery creates jobs elsewhere: cheaper goods leave
          people more to spend, new industries arise to make and run machines, and over the long run employment has grown
          along with mechanisation. Economic historians note that in two centuries of industry, total employment rose
          even as particular trades, like hand-loom weaving, were wiped out.
        </p>
      ),
    },
    {
      who: "Modern support for Barton",
      point: (
        <p>
          Some economists today take the Ricardo&ndash;Barton worry seriously again. Studies of automation by Daron
          Acemoglu and Pascual Restrepo (from 2017) find that robots can reduce employment and wages in the places that
          adopt them, while debate continues over whether new kinds of work make up for it overall.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What did Ricardo change his mind about?",
      options: ["Whether rent exists", "Whether machines can throw workers out of work", "Whether money is gold"],
      answer: 1,
      why: "In his chapter “On Machinery” he admitted machines can make some labour redundant.",
    },
    {
      q: "In Ricardo's example, after the machine is built, how much is left to pay workers?",
      options: ["£13,000", "£7,500", "£5,500"],
      answer: 2,
      why: "Only £5,500 remains, so the labour once paid by the other £7,500 is no longer employed.",
    },
    {
      q: "What did Marx add to Barton's idea?",
      options: [
        "That machines always create more jobs",
        "That the real split is wages versus everything else, since raw materials hire no one either",
        "That Barton was wrong about muslin",
      ],
      answer: 1,
      why: "Barton split capital into fixed and circulating. Marx said the split that matters is variable (wages) versus constant.",
    },
  ],

  remember: [
    "Ricardo first said machines never hurt workers in the end. Later he honestly changed his mind.",
    "His example: £20,000 of capital; after a £7,500 machine, only £5,500 is left to pay workers.",
    "Barton (1817): jobs depend on the part of capital that pays workers, not on machines.",
    "Marx praised both, and sharpened the idea: wages (variable capital) shrink as a share of growing capital.",
  ],

  terms: ["barton-machinery"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter 18 (&ldquo;Ricardo&apos;s Miscellanea. John Barton&rdquo;),
      Progress Publishers translation on marxists.org; Marx&apos;s 1861 to 1863 notebooks, first edited by Karl Kautsky.
      Ricardo&apos;s £20,000 / £7,000 / £13,000 / £7,500 / £5,500 example and Barton&apos;s muslin comparison are quoted by
      Marx; &ldquo;consistently and ruthlessly&rdquo;, &ldquo;bears witness to his honesty&rdquo; and &ldquo;very great
      merit&rdquo; are Marx&apos;s words. The date of Ricardo&apos;s third edition (1821) is general history.
    </p>
  ),
};

export default chapter;
