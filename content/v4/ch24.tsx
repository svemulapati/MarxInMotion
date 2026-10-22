import type { ChapterContent } from "@/components/ChapterTemplate";
import { NotForever, RentHasAHistory } from "./ch24-animations";

const chapter: ChapterContent = {
  bigQuestion: "Has rent always been paid the same way?",

  story: (
    <>
      <p>
        The last book on the Old Thinkers&apos; Shelf belongs to Richard Jones, an English clergyman who taught economics. Grandpa
        Ned takes it down, because it is about rent, and rent is something he knows all about.
      </p>
      <p>
        &ldquo;Every quarter I pay the Landlord in coins,&rdquo; says Ned. &ldquo;I always thought rent was just like that.&rdquo;
      </p>
      <p>
        But Jones&apos;s book is full of other people: serfs who paid in days of work, peasants who paid in grain, share-croppers
        who handed over half the harvest. Ned&apos;s own great-great-great-grandfather, Hob, began as a serf on a lord&apos;s land. Rent, it turns out, has a
        history.
      </p>
    </>
  ),

  guess: (
    <p>
      If rent was once paid in days of work, then in grain, then in coins, what might that tell you about the way people
      worked at each time? Could today&apos;s way change too?
    </p>
  ),

  struggle: [<RentHasAHistory key="a" />],
  reveal: [<NotForever key="b" />],

  eli5: "Richard Jones showed that people paid rent in different ways at different times: in work, in grain, and later in money. He also thought the way we work today might not last forever. Marx liked him for looking at history instead of pretending things never change.",

  grownUp: (
    <>
      <p>
        Richard Jones&apos;s <em>An Essay on the Distribution of Wealth, and on the Sources of Taxation</em> (London, 1831)
        studied rent historically. Marx says it shows what English economists had lacked since Sir James Steuart: &ldquo;a
        sense of the historical differences in modes of production&rdquo;. Jones examines labour rents or serf rents, the change
        to produce rents, metayer rents and ryot rents, and finds that each form of rent, each form of landed property,
        corresponds to a definite form of labour. These <strong>historical forms of rent</strong> end in modern farmer&apos;s
        rent, where a capitalist farmer pays the landowner out of surplus-profit. Marx also credits Jones with seeing that, once
        rent exists, its growth comes mainly from more agricultural capital being invested.
      </p>
      <p>
        In later lectures (1833, 1852) Jones spoke of the &ldquo;economical structure of nations&rdquo;. He showed workers being
        transferred from customers who pay them out of their revenues to employers with capital. And he suggested that a state
        of things may come where labourers and owners of capital are the same people. Marx says Jones by no means regards
        capitalist relations as eternal, and understood their transitory historical necessity more deeply than Ramsay. Marx
        also notes Jones&apos;s mistakes, including confusion about the &ldquo;labour fund&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      Ways of producing, and the incomes that go with them, change through history. Rent paid in labour, in produce and in
      money each belongs to a different social order. Jones saw this, and saw that capitalism too is one stage among others,
      which is why Marx ends his history of the economists with him.
    </p>
  ),

  critics: [
    {
      who: "Historians of economics",
      point: (
        <p>
          Jones is often counted as an early inspiration for the historical school of economics, which studied economies case
          by case. Critics of that school, in the &ldquo;battle of methods&rdquo; of the 1880s, argued that economics needs
          general theory, not only history. Even Marx notes Jones&apos;s historical and philological blunders.
        </p>
      ),
    },
    {
      who: "Economists on rent",
      point: (
        <p>
          Many economists accept that rent took different forms in history, but still use one general theory of rent today:
          payment for the use of a scarce resource. On that view the forms change but the economics underneath does not, which
          is the opposite emphasis from Jones and Marx.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What did Marx praise most in Richard Jones?",
      options: [
        "His sense of the historical differences in ways of producing",
        "His love of gold",
        "His defence of Ricardo's every word",
      ],
      answer: 0,
      why: "Marx says it was missing in English economists since Sir James Steuart.",
    },
    {
      q: "Which is the oldest form of rent in Jones's list?",
      options: ["Farmer's money rent", "Labour rent: days of work for the lord", "Ground-rent on a building plot"],
      answer: 1,
      why: "Labour rents or serf rents came first; money rent paid by a capitalist farmer like Ned came last.",
    },
    {
      q: "What did Jones suggest might happen one day?",
      options: [
        "Rent would be paid in days of work again",
        "Workers and owners of capital might be the same people",
        "Nobody would work at all",
      ],
      answer: 1,
      why: "He wrote that a state of things may hereafter exist where labourers and owners of capital are identical.",
    },
  ],

  remember: [
    "Rent has a history: days of work, then produce, then a share of the harvest, then money.",
    "Each form of rent goes with a different way of working.",
    "Jones saw that the way we work today is one stage among many, not eternal.",
    "That closes the bonus volume and the Old Thinkers' Shelf. Thank you for reading all four volumes with Tiny Town!",
    "Next comes the wrap-up: the whole story in one animation.",
  ],

  terms: ["historical-forms-of-rent", "economical-structure-of-nations"],

  source: (
    <p>
      Covers Volume IV (Theories of Surplus-Value, Part III), Chapter 24 (&ldquo;Richard Jones&rdquo;), Progress Publishers
      edition as hosted on marxists.org. Marx&apos;s sources: Jones, <em>An Essay on the Distribution of Wealth</em> (London,
      1831); <em>An Introductory Lecture on Political Economy</em> (London, 1833); <em>Text-book of Lectures on the Political
      Economy of Nations</em> (Hertford, 1852). Quoted phrases: &ldquo;a sense of the historical differences in modes of
      production&rdquo;; &ldquo;economical structure of nations&rdquo;. Ned, Hob and the coins are this site&apos;s.
      Theories of Surplus-Value is not part of Capital proper; Karl Kautsky first edited it (1905 to 1910).
    </p>
  ),
};

export default chapter;
