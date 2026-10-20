import type { ChapterContent } from "@/components/ChapterTemplate";
import { MoreMachineFewerHands, TheCrowdAtTheGate, TwoPoles, WhenTheWorkshopGrows } from "./ch25-animations";

const chapter: ChapterContent = {
  bigQuestion: "If the workshop keeps getting bigger, why is there always a crowd waiting at the gate?",

  story: (
    <>
      <p>
        Years have passed. Mr. Moneybags has put his surplus back into the workshop again and again, and it has grown
        and grown. It now fills half a street. You might think that a bigger workshop means work for everybody in Tiny
        Town.
      </p>
      <p>
        But every morning there is a crowd at the gate. Some of them used to work inside, until a new machine did their
        job. Some have walked in from the farms near Grandpa Ned&apos;s, where fewer hands are needed each harvest. Some
        get a day&apos;s work here and there, and never know about tomorrow.
      </p>
      <p>
        One day Sam asks for a raise. Mr. Moneybags doesn&apos;t even argue. He just nods towards the gate.
      </p>
      <p>
        How can a town get richer every year and still have more people with no work? Is it bad luck? Is it because
        there are too many people? Marx thought it was something else.
      </p>
    </>
  ),

  guess: (
    <p>
      When Mr. Moneybags buys a bigger machine, does he need more workers or fewer? And why might he quite like having
      a crowd of people waiting at his gate?
    </p>
  ),

  struggle: [<WhenTheWorkshopGrows key="a" />, <MoreMachineFewerHands key="b" />],
  reveal: [<TheCrowdAtTheGate key="c" />, <TwoPoles key="d" />],

  eli5: "As the boss gets richer, he spends more on machines and less on people. So there are always people without work waiting at the gate. Their waiting keeps everyone's pay down, while the boss's pile keeps growing.",

  grownUp: (
    <>
      <p>
        Marx starts with the <strong>composition of capital</strong>. Looked at as things, it is the mass of machines
        and materials compared with the number of workers who use them: the technical composition. Looked at as value,
        it is constant capital compared with variable capital: the value composition. When the second mirrors the first,
        Marx calls it the organic composition. In 25.2 it moves from 50 : 50 to 80 : 20, his own example.
      </p>
      <p>
        If the composition stayed the same, growth would raise the demand for labour, and wages could rise. But a rise
        in wages eats into surplus-value, slows accumulation, and so slows the demand for labour again. Marx says the
        rise of wages is &ldquo;confined within limits&rdquo; that keep the system intact. Higher pay only lengthens and
        loosens what he calls the &ldquo;golden chain&rdquo;.
      </p>
      <p>
        In fact the composition rises, because productivity rises. Variable capital still grows, but it shrinks as a
        share of the whole. Capitals also grow by <strong>concentration</strong>, reinvesting their own surplus, and much
        faster by <strong>centralisation</strong>: the larger capitals beat the smaller and swallow them, helped by credit
        and joint-stock companies. The world, Marx jokes, would still be without railways if it had waited for one
        capitalist to save up for one.
      </p>
      <p>
        The result is a <strong>relative surplus population</strong>: people who are surplus not because there are too
        many of them, but because capital needs relatively fewer of them. This <strong>industrial reserve army</strong>{" "}
        is both a product of accumulation and its lever. It can be thrown into new industries in a boom and pushed out
        in a crisis, and its size, not the total population, regulates the general movement of wages. It has three
        forms: floating (pushed out and pulled back by modern industry), latent (on the land, waiting to move to town)
        and stagnant (irregular, poorly paid work). Below them lies <strong>pauperism</strong>, &ldquo;the hospital of
        the active labour-army and the dead weight of the industrial reserve army&rdquo;.
      </p>
      <p>
        Marx then fills the chapter with evidence: England from 1846 to 1866, badly paid trades, farm labourers, and
        Ireland, whose population fell from 8,222,664 in 1841 to about 5½ million in 1866. If misery came from too many
        people, he argues, Ireland should have been cured. Instead he finds wages just as low and the surplus
        population as great as before.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Unemployment is not an accident, and it is not caused by workers having too many children, as Malthus and
        others suggested. Capital itself keeps making people surplus, because it keeps replacing workers with machines
        faster than it grows. And that crowd is useful to capital: it keeps wages in check and gives the boss people to
        hire when business booms.
      </p>
      <p>
        So the same process that piles up wealth at one end piles up insecurity, overwork and poverty at the other. Marx
        calls this the absolute general law of capitalist accumulation, and he adds at once that, like every law, it is
        changed in practice by many circumstances.
      </p>
    </>
  ),

  critics: [
    {
      who: "Wages kept rising",
      point: (
        <p>
          In the countries Marx studied, real wages have risen many times over since 1867, working weeks have got
          shorter, and most people are far better off than the workers he described. Critics say this refutes any idea
          that workers must get poorer as capital grows. Many readers of Marx reply that he meant relative poverty: the
          worker&apos;s share and security falling behind the wealth around them. Others point to poorer parts of the
          world, where his picture still looks close to the truth.
        </p>
      ),
    },
    {
      who: "Machines and jobs",
      point: (
        <p>
          Since the Luddites, people have feared that machines would leave most people with no work. Instead, new
          industries kept appearing, and in rich countries unemployment has gone up and down without a steady upward
          trend. Still, many economists agree with part of Marx&apos;s mechanism: when unemployment is low, wages tend to
          rise faster, and when it is high, they rise more slowly (the &ldquo;Phillips curve&rdquo;, first described in
          1958). The disagreement is over whether the reserve army must keep growing.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Mr. Moneybags' capital grows from 100 to 300 coins, but he now spends 80 of every 100 on machines. What happens to the number of workers?",
      options: [
        "It falls to zero",
        "It can still rise, but workers become a smaller share of the capital",
        "It must triple, like the capital",
      ],
      answer: 1,
      why: "In 25.2 the workforce grows from 10 to 12, but the capital grew three times over. Jobs grow more slowly than wealth.",
    },
    {
      q: "Why does a crowd at the gate help Mr. Moneybags?",
      options: ["They buy more of his yarn", "Workers inside think twice before asking for more pay", "They pay him rent"],
      answer: 1,
      why: "Marx says the size of the reserve army regulates wages. The crowd outside presses on the workers inside.",
    },
    {
      q: "Farm workers near Grandpa Ned's leave the fields because the farms need fewer hands. Which part of the reserve army is that?",
      options: ["The floating part", "The latent part", "The stagnant part"],
      answer: 1,
      why: "Marx calls the people on the land, always about to move to town, the latent part of the surplus population.",
    },
  ],

  remember: [
    "As capital grows, more of it goes on machines and materials and less, as a share, on wages.",
    "So jobs grow more slowly than wealth, and some people are always left over: the industrial reserve army.",
    "The reserve army has three forms (floating, latent, stagnant), with pauperism below them.",
    "Its size keeps wages within limits, and lets capital hire fast in booms and fire in crises.",
    "Big capitals also swallow small ones (centralisation), helped by credit.",
    "Marx: wealth at one pole, misery at the other. Readers still debate whether he meant absolute or relative poverty.",
  ],

  terms: [
    "composition-of-capital",
    "concentration-of-capital",
    "centralisation-of-capital",
    "relative-surplus-population",
    "industrial-reserve-army",
    "pauperism",
  ],

  source: (
    <p>
      Covers Volume I, Chapter 25 (&ldquo;The General Law of Capitalist Accumulation&rdquo;), all five sections: the
      demand for labour with an unchanged composition; the relative fall of variable capital, with concentration and
      centralisation; the reserve army; the forms of the surplus population and the general law; and Marx&apos;s
      illustrations (England 1846 to 1866, the agricultural labourers, Ireland). Marx&apos;s own: the 50 : 50 to 80 : 20
      example, the railway remark, the three forms, &ldquo;the dead weight&rdquo;, the Irish population figures and
      &ldquo;be his payment high or low&rdquo;. The wage of 4 coins, the workshop sizes and the worker counts are this
      site&apos;s.
    </p>
  ),
};

export default chapter;
