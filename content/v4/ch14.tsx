import type { ChapterContent } from "@/components/ChapterTemplate";
import { FoodAlwaysPaysRent, OneThirdOneTenth } from "./ch14-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why should a wheat field always earn rent, but a stone quarry only sometimes?",

  story: (
    <>
      <p>
        The visitor on the Old Thinkers&apos; Shelf today is Adam Smith, the Scottish thinker who wrote{" "}
        <em>The Wealth of Nations</em> in 1776. He has a rule about rent, and he says it very firmly.
      </p>
      <p>
        &ldquo;A field that grows food always pays rent,&rdquo; says Smith. &ldquo;A quarry, a forest or a mine? Only
        sometimes.&rdquo;
      </p>
      <p>
        Mia, who bakes Tiny Town&apos;s bread, likes the sound of that. &ldquo;Because everyone needs bread?&rdquo; she
        asks. &ldquo;Exactly,&rdquo; says Smith. But Marx, sitting in the corner with his notebook, has written one short
        question in the margin: <em>why?</em>
      </p>
    </>
  ),

  guess: (
    <p>
      Smith says food land always pays rent because food always has buyers. Is that enough to explain rent? What else
      might decide whether a piece of land pays rent?
    </p>
  ),

  struggle: [<FoodAlwaysPaysRent key="a" />],
  reveal: [<OneThirdOneTenth key="b" />],

  eli5: "Adam Smith said land that grows food always pays rent, because people always want food. Marx said Smith never proved that. Rent is paid because somebody owns the land, and Smith mixed up his own explanations.",

  grownUp: (
    <>
      <p>
        <strong>Adam Smith&apos;s theory of rent</strong> starts well: rent is &ldquo;the price paid for the use of
        land&rdquo;, where land means any power of nature, water included. Smith even calls rent &ldquo;naturally a
        monopoly price&rdquo;, and Marx agrees that, as the result of landed property, rent is a monopoly price.
      </p>
      <p>
        Then Smith divides the produce of land into two parts: food, which &ldquo;always affords rent&rdquo;, and other
        products (materials for clothing and lodging, mines, timber) which sometimes do and sometimes do not. His reason
        for food is a theory of population: people multiply in proportion to their food, so food always creates its own
        demand. Marx calls this a physiocratic element: rent is treated as nature&apos;s gift rather than as a result of
        social relations. Why food must &ldquo;always&rdquo; and &ldquo;necessarily&rdquo; pay rent, he says, &ldquo;has
        not been shown&rdquo;.
      </p>
      <p>
        Smith also contradicts himself. Earlier he treats rent as one part that makes up the price. Here he says high or
        low wages and profit are the causes of high or low prices, while high or low rent is the effect of it. Marx notes
        Smith moves from one assertion to its opposite. Smith&apos;s observations on rent shares (about a third of the
        gross produce on farms; a fifth very great and a tenth common in coal mines) and on how metal mines compete
        worldwide are, Marx says, often sharp.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Smith saw many true things about rent but never found its source. Rent is not a reward that food or nature
        hands out by itself. It comes from surplus-value, and landowners can claim it because they own the land.
      </p>
      <p>
        Because Smith had no clear theory of value and surplus-value, his account of rent swings between rent as a cause
        of price and rent as an effect of price.
      </p>
    </>
  ),

  critics: [
    {
      who: "Smith's admirers",
      point: (
        <p>
          Many historians of economics read Smith as gathering real-world observations rather than building one tight
          system. On that reading, his different statements about rent describe different situations, and Marx&apos;s
          charge of contradiction is too strict.
        </p>
      ),
    },
    {
      who: "Modern rent theory",
      point: (
        <p>
          Today economists explain land rent by scarcity and demand, as Smith partly did in his account of clothing and
          lodging materials. They usually see no need for Marx&apos;s link to surplus-value, though they agree that
          ownership of a scarce resource lets its owner collect a payment.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why did Adam Smith think land growing food always pays rent?",
      options: [
        "Because food is heavy to carry",
        "Because people multiply with their food, so food is always in demand",
        "Because the king owns all farms",
      ],
      answer: 1,
      why: "Smith used a theory of population: more food means more people, who create demand for it.",
    },
    {
      q: "According to Smith, what share of a farm's produce is commonly paid as rent?",
      options: ["About a tenth", "About a third", "About half"],
      answer: 1,
      why: "Smith says farm rent is commonly a third of the gross produce, while in coal mines a tenth is the usual rent.",
    },
    {
      q: "What did Marx agree with in Smith's view?",
      options: [
        "That food always pays rent",
        "That rent is a monopoly price, paid because land is owned",
        "That rent has nothing to do with land",
      ],
      answer: 1,
      why: "Marx agreed that, as the result of landed property, rent is a monopoly price. He disagreed with Smith's 'always'.",
    },
  ],

  remember: [
    "Smith: food land always pays rent; other land only sometimes.",
    "His reason: people multiply with their food, so food is always in demand.",
    "Marx: that 'always' was never proved, and it is a leftover from the Physiocrats.",
    "Smith rightly called rent a monopoly price, but swung between rent as cause and rent as effect of price.",
  ],

  terms: ["food-always-affords-rent"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter XIV (&ldquo;Adam Smith&apos;s Theory of Rent&rdquo;), Progress
      Publishers edition on marxists.org. Smith&apos;s phrases quoted by Marx: &ldquo;the price paid for the use of
      land&rdquo;, &ldquo;naturally a monopoly price&rdquo;, &ldquo;always affords rent&rdquo;, wages and profit as causes
      and rent as effect of price, and the rent shares (a third on farms; a fifth very great and a tenth common in coal
      mines). The Wealth of Nations date (1776) is general history. The loaves and people in 14.1 are only pictures.
    </p>
  ),
};

export default chapter;
