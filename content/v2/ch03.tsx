import type { ChapterContent } from "@/components/ChapterTemplate";
import { EveryonesCotton, StartWithTheYarn } from "./ch03-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why would anyone start the story with a pile of yarn?",

  story: (
    <>
      <p>
        Leo watched the coins. Sam watched the workshop. Now Tom the shopkeeper, who spends his days among goods, says:
        &ldquo;You both started in the wrong place. Start with what&apos;s on my shelves.&rdquo;
      </p>
      <p>
        He points at a stack of Mr. Moneybags&apos; yarn. &ldquo;This yarn will be sold. The money will buy cotton, the
        cotton will be spun, and in a week there will be yarn on my shelf again.&rdquo;
      </p>
      <p>
        Then he points around the square. &ldquo;And where did the cotton come from? Someone else&apos;s shelf. Where
        will the yarn go? Into someone else&apos;s workshop. Where do Mia&apos;s loaves go? Into everybody&apos;s
        tummies.&rdquo;
      </p>
      <p>Is every workshop in Tiny Town secretly part of one giant circle?</p>
    </>
  ),

  guess: (
    <p>
      Leo&apos;s circle began with coins and Sam&apos;s with the workshop. Tom&apos;s begins with finished yarn. What is
      already inside that yarn that the other two circles did not start with?
    </p>
  ),

  struggle: [<StartWithTheYarn key="a" />],
  reveal: [<EveryonesCotton key="b" />],

  eli5: "This time the circle starts and ends with a pile of finished goods. The pile already has the boss's extra hidden inside it. And everyone's goods are someone else's supplies or someone's dinner, so all the circles in town are joined up.",

  grownUp: (
    <>
      <p>
        The circuit of <strong>commodity-capital</strong> is C&prime;&ndash;M&prime;&ndash;C&hellip;P&hellip;C&prime;.
        It differs from the other two in one striking way: it opens not with plain capital-value but with capital-value
        already enlarged in commodity form. The yarn on Tom&apos;s shelf holds both the 27 coins of capital and the 3
        coins of surplus-value, so this circuit includes from the start the movement of surplus-value as well as of
        capital.
      </p>
      <p>
        It also points outward. Part of what each capitalist buys (Marx gives coal and machinery as examples) is the
        commodity-capital of other capitalists: the mine-owner, the machine-maker. And the circuit can only keep going if
        the whole product is consumed, either productively by other businesses or individually by workers spending their
        wages and capitalists spending the surplus they do not reinvest.
      </p>
      <p>
        That makes C&prime;&hellip;C&prime; the natural form for looking at the movement of the whole of society&apos;s
        capital at once. Marx praises the French economist Fran&ccedil;ois Quesnay, whose <em>Tableau
        &Eacute;conomique</em> was built on exactly this form. Part Three of Volume II returns to it.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        No capital goes round on its own. Every workshop&apos;s finished goods are some other workshop&apos;s supplies or
        some family&apos;s food and clothes, so the circles of all the individual capitals are linked into one great
        movement of social capital.
      </p>
      <p>
        Because this circle starts with goods that already contain surplus-value, it shows that consumption, by workers
        and by capitalists, is not outside capital&apos;s movement but a condition of it: if the goods are not bought and
        used up, the circle stops.
      </p>
    </>
  ),

  critics: [
    {
      who: "Consumers in charge",
      point: (
        <p>
          Many economists turn the picture round: in a market, they argue, it is consumers&apos; wants that steer what
          gets produced (&ldquo;consumer sovereignty&rdquo;). Marx&apos;s circuit treats consumption mainly as something
          capital needs in order to keep moving. Critics say this gets the priorities backwards; Marx&apos;s readers
          reply that what people can buy depends on what they are paid.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What does the circuit of commodity-capital start with?",
      options: ["Coins", "A working workshop", "Finished goods that already contain surplus-value"],
      answer: 2,
      why: "C′ is the finished product, worth 30 coins in Tiny Town: 27 of capital plus 3 of surplus-value.",
    },
    {
      q: "Mr. Moneybags' spindles came from the Forge. What were they for the Forge?",
      options: ["Its commodity-capital, its finished product", "Its wages", "Its surplus-value only"],
      answer: 0,
      why: "One capitalist's finished goods are another capitalist's means of production. Marx's examples are coal and machinery.",
    },
    {
      q: "Why must Mia's bread and Ava's coats be bought and used up for the circle to keep turning?",
      options: [
        "Because shops like being empty",
        "Because if the goods are not sold, the money to start the next round never comes back",
        "Because bread goes stale",
      ],
      answer: 1,
      why: "Consumption, by workers and capitalists alike, is a condition of the circuit: unsold goods stop it.",
    },
  ],

  remember: [
    "The circuit of commodity-capital is C′–M′–C…P…C′.",
    "It starts with goods that already hold surplus-value.",
    "Every capitalist's finished goods are someone else's supplies or someone's food and clothes.",
    "So the circle needs all the goods to be consumed, and it shows the whole of society's capital moving together.",
  ],

  terms: ["commodity-capital"],

  source: (
    <p>
      Covers Volume II, Chapter 3 (&ldquo;The Circuit of Commodity-Capital&rdquo;). Volume II was assembled and edited
      by Engels from Marx&apos;s manuscripts. Marx&apos;s own examples are coal and machinery as the commodity-capital of
      the mine-owner and the machine-maker, and his remark that this circuit is the groundwork of Quesnay&apos;s{" "}
      <em>Tableau &Eacute;conomique</em>. The cotton farm, weaving mill and Forge are Tiny Town&apos;s stand-ins.
    </p>
  ),
};

export default chapter;
