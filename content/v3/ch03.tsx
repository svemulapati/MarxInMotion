import type { ChapterContent } from "@/components/ChapterTemplate";
import { OppositeDirections, SameSqueezeDifferentMix, TheRecipe } from "./ch03-animations";

const chapter: ChapterContent = {
  bigQuestion: "If workers are squeezed harder, must the boss's profit rate go up?",

  story: (
    <>
      <p>
        Bea the banker is deciding whom to lend to. She invites Mr. Moneybags and the owner of the tailoring workshop on the square, where Ava sews, and asks
        each one: &ldquo;How much extra do your workers make for you?&rdquo;
      </p>
      <p>
        The tailoring workshop is full of people with needles and very few machines. Mr. Moneybags&apos; mill is full of
        machines with only a few workers. Mr. Moneybags boasts that his workers are squeezed harder than anyone&apos;s.
      </p>
      <p>
        Then Bea works out each one&apos;s rate of profit, and frowns. The mill, with the harder squeeze, earns less on
        each coin than the tailoring workshop. &ldquo;How can that be?&rdquo; says Mr. Moneybags. &ldquo;My workers
        give me more than theirs!&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      The rate of profit compares the extra with the whole capital. If one boss spends most of his money on machines and
      another spends most on wages, who do you think gets the bigger rate of profit, even if their workers are squeezed
      just as hard?
    </p>
  ),

  struggle: [<TheRecipe key="a" />, <SameSqueezeDifferentMix key="b" />],
  reveal: [<OppositeDirections key="c" />],

  eli5: "The profit rate depends on two things: how hard workers are squeezed, and how much of the boss's money goes on wages. Machines don't make extra, so a boss with lots of machines can squeeze harder and still get a smaller profit rate. The two numbers can even move in opposite directions.",

  grownUp: (
    <>
      <p>
        This chapter is mostly arithmetic. With s&prime; the rate of surplus-value and p&prime; the rate of profit, Marx
        shows that p&prime; = s&prime; &times; v/C, or p&prime; : s&prime; = v : C: the rate of profit is to the rate of
        surplus-value as the variable capital is to the total capital. Since v is always smaller than C, p&prime; is
        always smaller than s&prime;.
      </p>
      <p>
        He then works through every case, holding one factor still while the other moves. With 80c + 20v, surplus-values
        of 10, 20 and 40 give rates of surplus-value of 50%, 100% and 200%, and rates of profit of 10%, 20% and 40%. With
        the rate of surplus-value fixed at 100% and the total capital at 15,000, moving from 12,000c + 3,000v to 13,000c +
        2,000v cuts the rate of profit from 20% to 13&#8531;%.
      </p>
      <p>
        The striking result: from 80c + 20v + 20s to 90c + 10v + 15s, the rate of surplus-value rises from 100% to 150%
        while the rate of profit falls from 20% to 15%. Marx concludes that the rate of profit depends on two main
        factors, the rate of surplus-value and the <strong>value-composition of capital</strong>, and that a rising,
        falling or steady rate of profit can go with a rising, falling or steady rate of surplus-value.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        You cannot read the degree of exploitation off the rate of profit. A business with a high profit rate may squeeze
        its workers less than one with a low profit rate, if the second has far more machinery. The rate of profit mixes
        two different things together.
      </p>
      <p>
        That matters for what comes next. Part II will ask how different industries, with very different mixes of
        machines and workers, can all earn similar rates of profit; and Part III will ask what happens when machines keep
        growing faster than wages.
      </p>
    </>
  ),

  critics: [
    {
      who: "An unfinished calculation",
      point: (
        <p>
          This chapter was not finished by Marx. Engels says he compiled it from a summary of Marx&apos;s equations made
          by the mathematician Samuel Moore, and left out Marx&apos;s detailed calculations of the gap between the two
          rates. Some scholars of the original manuscripts argue that Engels&apos; tidy version makes the argument look
          more complete than Marx left it.
        </p>
      ),
    },
    {
      who: "Values cannot be seen",
      point: (
        <p>
          Critics point out that c, v and s are measured in labour values that nobody observes directly. Firms see
          prices, costs and returns. So, they argue, these equations cannot be tested on real accounts. Defenders reply
          that national statistics on wages, capital and profits can be used to estimate them approximately.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "A capital is 80 machines + 20 wages, and the workers make 20 of surplus-value. What is the rate of profit?",
      options: ["100%", "20%", "80%"],
      answer: 1,
      why: "Rate of profit = 20 ÷ 100 = 20%. The rate of surplus-value is 20 ÷ 20 = 100%.",
    },
    {
      q: "Two capitals squeeze their workers equally hard. One spends more on machines. Which has the lower profit rate?",
      options: ["The one with more machines", "The one with more wages", "They are always the same"],
      answer: 0,
      why: "Fewer wages for the same total capital means less surplus-value, so a lower rate of profit.",
    },
    {
      q: "From 80c + 20v + 20s to 90c + 10v + 15s, what happens?",
      options: [
        "Both rates rise",
        "Exploitation rises, but the rate of profit falls",
        "Both rates fall",
      ],
      answer: 1,
      why: "s′ goes from 100% to 150%, but p′ goes from 20% to 15%.",
    },
  ],

  remember: [
    "Rate of profit = rate of surplus-value × (wages ÷ whole capital).",
    "It depends on two things: the squeeze, and the mix of machines and wages.",
    "More machines with the same squeeze means a lower rate of profit.",
    "The profit rate can fall even while exploitation rises.",
    "So the profit rate alone never tells you how hard workers are squeezed.",
  ],

  terms: ["profit-rate-formula"],

  source: (
    <p>
      Covers Volume III, Chapter 3 (&ldquo;The Relation of the Rate of Profit to the Rate of Surplus-Value&rdquo;), from
      the Institute of Marxism-Leninism edition (International Publishers) on marxists.org. Volume III was assembled and
      edited by Friedrich Engels from Marx&apos;s manuscripts and published in 1894. Engels says he compiled this chapter
      from Samuel Moore&apos;s summary of a notebook of Marx&apos;s equations from the 1870s, and omitted Marx&apos;s
      detailed calculations of the difference between the two rates. All the numbers (80c + 20v with 10, 20 and 40s;
      15,000 split 12,000 + 3,000 and 13,000 + 2,000; 90c + 10v + 15s) are Marx&apos;s.
    </p>
  ),
};

export default chapter;
