import type { ChapterContent } from "@/components/ChapterTemplate";
import { SixBrakes, TenTimesTheCotton } from "./ch14-animations";

const chapter: ChapterContent = {
  bigQuestion: "If the rate of profit keeps falling, why hasn't it fallen all the way to zero?",

  story: (
    <>
      <p>
        Bea has drawn a chart for Mr. Moneybags. If last chapter&apos;s law worked on its own, his rate of profit would be
        sliding down a steep hill, year after year. &ldquo;By now,&rdquo; she says, &ldquo;you should be earning almost
        nothing on each coin.&rdquo;
      </p>
      <p>
        But Mr. Moneybags is not earning almost nothing. His rate has fallen, yes, but slowly, and some years it even
        goes up a little. Something is pushing back against the slide, like brakes on a cart rolling downhill.
      </p>
      <p>What could those brakes be? Some of them might be good news for Mr. Moneybags, and bad news for Sam.</p>
    </>
  ),

  guess: (
    <p>
      Think about everything that could make a coin of capital earn more. Could it come from the workers? From the
      machines? From far away? See how many brakes you can name before you press play.
    </p>
  ),

  struggle: [<SixBrakes key="a" />],
  reveal: [<TenTimesTheCotton key="b" />],

  eli5: "Lots of things push against the falling rate of profit. Bosses make people work harder, pay them less, and buy cheaper machines and cotton. So the rate falls slowly and bumpily, not straight down.",

  grownUp: (
    <>
      <p>
        Marx asks why the fall is so much slower than his law alone would suggest. His answer: there are{" "}
        <strong>counteracting influences</strong> that &ldquo;cross and annul&rdquo; the effect of the general law and
        give it &ldquo;merely the characteristic of a tendency&rdquo;. He lists six.
      </p>
      <p>
        <strong>1. Increasing intensity of exploitation.</strong> Longer and more intense working days raise the rate of
        surplus-value. <strong>2. Wages pushed below the value of labour-power.</strong> Marx mentions this only in passing,
        as a matter of competition, yet calls it one of the most important checks. <strong>3. Cheapening of the elements of
        constant capital.</strong> The value of constant capital does not grow as fast as its mass: a factory spinner works
        up vastly more cotton than a spinner at a wheel, but its value has not grown in the same proportion. The
        depreciation of existing machinery works the same way.
      </p>
      <p>
        <strong>4. Relative over-population.</strong> The reserve army of the unemployed keeps labour cheap and lets old,
        labour-heavy branches survive. <strong>5. Foreign trade.</strong> It cheapens raw materials and necessities and can
        yield higher profits in colonial trade. <strong>6. The increase of stock capital.</strong> Large capitals in, for
        example, railways yield only interest or dividends and do not enter into the levelling of the average rate; if they
        did, the rate would be lower still.
      </p>
      <p>
        Marx stresses a twist: the same causes that make the rate fall also slow its fall. Rising productivity is behind
        both the rising composition of capital and the cheapening of its elements.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The fall in the rate of profit is real, but it is a pressure rather than a straight line down. The system fights
        back, and mostly it fights back at the workers&apos; expense: longer hours, harder work, lower wages and a crowd of
        unemployed waiting to replace anyone who complains.
      </p>
      <p>
        So when you look at real numbers you should not expect a smooth slide. You should expect a tug of war, which
        Chapter 15 says sometimes breaks out into a crisis.
      </p>
    </>
  ),

  critics: [
    {
      who: "A law nobody can test?",
      point: (
        <p>
          Critics from Paul Sweezy to later economists have argued that once you allow six counteracting forces, any
          movement in profit rates can be explained after the fact. If profits fall, the law is working; if they rise, the
          brakes are. That, they say, makes the law hard or impossible to test. Supporters reply that Marx gives a definite
          long-run direction and a mechanism, and that economics is full of tendencies that hold only other things being
          equal.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why does Marx call the fall in the rate of profit a tendency?",
      options: ["Because it never happens", "Because counteracting influences slow it down and can even reverse it for a while", "Because Engels added it later"],
      answer: 1,
      why: "Marx says the counteracting forces cross and annul the general law, so it shows up only as a tendency.",
    },
    {
      q: "Sam works up ten times more cotton than his grandmother did. Is the cotton ten times more valuable?",
      options: ["Yes, exactly ten times", "No, the value grows much less than the amount", "It has no value at all"],
      answer: 1,
      why: "Machines also cheapen cotton and machines themselves, so the value of constant capital grows more slowly than its size.",
    },
    {
      q: "Which of these is NOT one of Marx's six counteracting influences?",
      options: ["Pushing wages below the value of labour-power", "Foreign trade", "Bosses deciding to share profits with workers"],
      answer: 2,
      why: "Marx's six are: harder work, wages below value, cheaper constant capital, the reserve army, foreign trade, and stock capital.",
    },
  ],

  remember: [
    "The rate of profit falls as a tendency, not in a straight line.",
    "Six brakes push back: harder work, low wages, cheaper means of production, the reserve army, foreign trade and stock capital.",
    "Many of the brakes work at the workers' expense.",
    "The same rising productivity that pushes the rate down also holds it up.",
  ],

  terms: ["counteracting-influences"],

  source: (
    <p>
      Covers Volume III, Chapter 14 (&ldquo;Counteracting Influences&rdquo;), all six sections. Volume III was assembled
      by Friedrich Engels from Marx&apos;s manuscripts and published in 1894. The six influences, their order and the
      spinner example are Marx&apos;s own; the ×10 and ×3 in animation 14.2 are invented. Quotations follow the
      International Publishers / Progress edition on marxists.org.
    </p>
  ),
};

export default chapter;
