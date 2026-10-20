import type { ChapterContent } from "@/components/ChapterTemplate";
import { InvisibleThreads, LastWeekPaysThisWeek, WhereDidTheFirstCoinsGo } from "./ch23-animations";

const chapter: ChapterContent = {
  bigQuestion: "Whose money really pays Sam's wage?",

  story: (
    <>
      <p>
        Years go by in Tiny Town. Mr. Moneybags&apos; workshop stays exactly the same size. Every year it brings him
        extra coins, and every year he spends them all on himself: fine dinners, a shiny carriage, a taller hat.
      </p>
      <p>
        Every Saturday he counts out Sam&apos;s wage and says, &ldquo;There you are, my boy. Fed out of my own
        pocket.&rdquo; And Sam, a little embarrassed, says thank you.
      </p>
      <p>
        One evening Grandpa Ned leans on the workshop fence. &ldquo;Five years you&apos;ve been eating your profits,
        Moneybags. How much of your own first 100 coins is still in this workshop?&rdquo; Mr. Moneybags laughs.
        &ldquo;All of it, of course! Look, the workshop is as big as ever.&rdquo;
      </p>
      <p>Who is right? And who is really feeding whom?</p>
    </>
  ),

  guess: (
    <p>
      Sam works all week and is paid on Saturday. Mr. Moneybags eats his surplus-value every year but keeps the workshop
      the same size. Guess first: whose coins pay Sam, and what has happened to Moneybags&apos; own savings after five
      years?
    </p>
  ),

  struggle: [<LastWeekPaysThisWeek key="a" />, <WhereDidTheFirstCoinsGo key="b" />],
  reveal: [<InvisibleThreads key="c" />],

  eli5: "Sam is paid on Saturday for work he already did, so his own work pays his wage. After a few years, everything in the workshop has been made by the workers, even though the boss thinks it is still his savings. And because Sam's wage is always spent, he has to come back to work every Monday.",

  grownUp: (
    <>
      <p>
        Every society that keeps going must produce again and again, so every process of production is also a process
        of <strong>reproduction</strong>. When the capitalist spends all his surplus-value on himself and production
        just repeats on the same scale, Marx calls it <strong>simple reproduction</strong>. Repetition alone changes how
        things look.
      </p>
      <p>
        First, wages. The worker is paid only after he has worked, so the variable capital is a part of his own product
        coming back to him. As a class, capitalists hand workers money that works like order-notes on goods the workers
        made themselves. Marx imagines a peasant who works 3 days on his own land and 3 days for his lord. If the lord
        takes the land, the peasant works the same 6 days, but now his own 3 days&apos; worth reaches him as
        &ldquo;wages&rdquo; advanced by the lord.
      </p>
      <p>
        Second, the capital itself. If a capital of £1,000 brings £200 of surplus-value a year and all of it is consumed,
        after 5 years the capitalist has eaten the value of his original capital. Whatever value is left is nothing but
        capitalised surplus-value, the unpaid labour of others, however the capital first began.
      </p>
      <p>
        Third, the worker. He consumes in two ways. His <strong>productive consumption</strong> uses up cotton and
        spindles for the capitalist. His <strong>individual consumption</strong>, eating and sleeping, keeps him alive,
        but it also reproduces him as labour-power for capital, like oil for a machine. His wage is spent, so he must
        return to the market. &ldquo;The Roman slave was held by fetters: the wage labourer is bound to his owner by
        invisible threads.&rdquo; England even banned the emigration of skilled machine-makers until 1815, and during the
        cotton famine of 1863 the manufacturer Edmund Potter argued against helping unemployed workers emigrate.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Seen as a process that repeats, capitalism does not only make yarn and coats. It keeps making two kinds of
        people: owners who hold the means of production, and workers who own only their ability to work. What began as a
        starting point, workers separated from the tools of production, becomes the result, renewed every single week.
      </p>
      <p>
        So the worker is not fed by the capitalist&apos;s savings. He is paid out of what he made last week, and even a
        capital that started as honest savings becomes, in value, the product of unpaid work after enough years.
      </p>
    </>
  ),

  critics: [
    {
      who: "An accounting trick?",
      point: (
        <p>
          Critics say the claim that the original capital &ldquo;disappears&rdquo; is a matter of labels. The capitalist
          spent the profit and kept the workshop, so it makes no difference which coins we say he ate. Marx expected this
          reply: he says he is talking about value, not physical coins or machines, and that after enough years the value
          in the business equals the surplus-value taken, whatever the owner believes.
        </p>
      ),
    },
    {
      who: "Waiting is a real service",
      point: (
        <p>
          Economists from the wage-fund theorists to Eugen von Böhm-Bawerk argued that the employer really does advance
          wages, because workers are paid before the product is sold, sometimes months before. Paying people while they
          wait is a service that earns a return. Marx answers that, looked at week after week and class by class,
          workers are paid out of what they produced earlier.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Mr. Moneybags put 100 coins into his workshop. Each year it brings 20 coins of surplus-value, and he eats all 20. After how many years has he eaten as much as he put in?",
      options: ["2 years", "5 years", "20 years"],
      answer: 1,
      why: "100 ÷ 20 = 5. Marx's own example: £1,000 of capital and £200 a year, gone in value after 5 years.",
    },
    {
      q: "According to Marx, what really pays Sam's wage this week?",
      options: ["Mr. Moneybags' savings", "The value of Sam's own work from last week", "A loan from Bea's bank"],
      answer: 1,
      why: "Sam is paid after he works. The money comes from selling what workers like Sam already made.",
    },
    {
      q: "No chain holds Sam. Why does he come back to the workshop every Monday?",
      options: [
        "He signed a contract for life",
        "His wage is spent, and he has nothing else to live from but selling his labour-power",
        "A law forces him to",
      ],
      answer: 1,
      why: "That is Marx's “invisible thread”: he can change bosses, but he must keep selling his labour-power to one of them.",
    },
  ],

  remember: [
    "Every production is also reproduction. If the boss eats all the surplus-value, it is simple reproduction.",
    "Sam is paid after he works, so his own past work pays his wage.",
    "Capital ÷ surplus eaten per year = the years until the boss has eaten his whole first capital.",
    "The worker's eating and sleeping keep him alive, and also keep him ready for capital.",
    "A slave is held by chains; a wage worker by invisible threads.",
  ],

  terms: ["simple-reproduction", "productive-consumption", "individual-consumption"],

  source: (
    <p>
      Covers Volume I, Chapter 23 (&ldquo;Simple Reproduction&rdquo;), the first chapter of Part Seven. From Marx&apos;s
      text: production as reproduction; wages paid out of the worker&apos;s product and the &ldquo;order-notes&rdquo;; the
      peasant and his lord; £1,000 and £200 over 5 years (or 10 years if half is eaten); productive and individual
      consumption; the Roman slave&apos;s fetters and the &ldquo;invisible threads&rdquo;; the ban on emigrating mechanics
      until 1815; Edmund Potter&apos;s letter to The Times of 24 March 1863. The 100 coins and 20 coins a year scale
      Marx&apos;s ratio down; the six-day week of 36 coins of new value and an 18-coin wage follows the workshop numbers
      used since Chapter 7.
    </p>
  ),
};

export default chapter;
