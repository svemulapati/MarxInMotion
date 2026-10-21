import type { ChapterContent } from "@/components/ChapterTemplate";
import { WageOnAString, WearingOut } from "./ch04-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does Sam get 3 coins a day, and not 30, or 1?",

  story: (
    <>
      <p>
        Every evening Sam stands in line at Mr. Moneybags&apos; window and holds out his hand. Three coins. Always
        three, give or take.
      </p>
      <p>
        One winter a crowd of farm boys arrives in Tiny Town looking for work. Suddenly the coins in Sam&apos;s hand
        shrink to two. The next summer half the town goes off to the harvest, and Moneybags is so short of hands that
        he offers four.
      </p>
      <p>
        But the wage never runs away for long. It always drifts back to about three, as if something were tugging it
        home. Sam asks his friend Mia: &ldquo;Who decided it should be three?&rdquo; Mia thinks about her ovens and her
        bread, which also go up and down in price but always settle in the same place. &ldquo;Maybe the same thing
        that decides the price of my bread,&rdquo; she says.
      </p>
      <p>What is pulling Sam&apos;s wage back home?</p>
    </>
  ),

  guess: (
    <p>
      When there are lots of people looking for work, what happens to wages? And when the crowd goes away? Now the
      harder one: if wages swing up and down, what keeps them from swinging off to nothing, or to a fortune?
    </p>
  ),

  struggle: [<WageOnAString key="a" />],
  reveal: [<WearingOut key="b" />],

  eli5: "A wage is the price of a day of work, so it goes up and down like other prices. Underneath, it keeps coming back to what it costs to keep the worker and his family alive. Marx calls that the minimum of wages.",

  grownUp: (
    <>
      <p>
        In these lectures Marx applies to wages the same rule he gave for every commodity in the chapter before: day to
        day, prices rise and fall with supply and demand, with the competition between buyers and sellers. For wages,
        that is the competition between capitalists, who buy labour-power, and workers, who sell it.
      </p>
      <p>
        But inside those swings, the price is set by the <strong>cost of production</strong>, the labour time needed
        to make the thing. The cost of producing labour-power is the cost of keeping the worker as a worker: his{" "}
        <strong>means of subsistence</strong>, plus his education and training. Where little training is needed, the
        wage comes down to the price of the bare necessities.
      </p>
      <p>
        Marx then borrows the factory owner&apos;s way of counting. A machine costing 1,000 shillings that lasts 10
        years adds 100 shillings a year to costs, so it can be replaced. In the same way the worker &ldquo;wears
        out&rdquo;, so the wage must also cover raising new workers. Marx calls the result, the cost of the existence
        and propagation of the worker, the <strong>minimum of wages</strong>. It holds for the working class as a whole,
        not for every individual: millions, he says, do not get enough.
      </p>
      <p>
        <em>Volume I, Chapter 6</em> works this out in full as the <strong>value of labour-power</strong>, and adds a
        &ldquo;historical and moral element&rdquo;: what counts as a normal living depends on the time and place.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Wages are not a reward set by kindness, or by how much a worker&apos;s output is worth. They are the price of a
        commodity, labour-power, and like other prices they are pulled towards its cost of production. For most workers
        that means the cost of staying alive and raising children.
      </p>
      <p>
        This chapter is still a sketch. Marx wrote it in 1847, and it treats the minimum as fairly fixed. In his later
        work he lets the normal standard of living change over time, and in the very next chapters of these lectures he
        shows how wages also depend on profits.
      </p>
    </>
  ),

  critics: [
    {
      who: "Wages rose far above subsistence",
      point: (
        <p>
          In the century after Marx wrote, real wages in industrial countries rose several times over. Critics say this
          shows wages are not tied to a bare minimum. Most economists explain wages instead by what a worker adds to
          output (the marginal product of labour) and by skills and bargaining. Marx&apos;s defenders point to his later
          idea of a &ldquo;historical and moral element&rdquo;, which lets the minimum rise as society changes.
        </p>
      ),
    },
    {
      who: "An old idea Marx shared",
      point: (
        <p>
          The pull of wages towards subsistence was not only Marx&apos;s idea. Ricardo and Malthus held versions of it,
          and the German socialist Ferdinand Lassalle called it an &ldquo;iron law of wages&rdquo;. Later Marx and
          Engels criticised Lassalle&apos;s rigid version, so even Marx&apos;s own camp did not treat the minimum as an
          unbreakable law.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "A crowd of people arrives looking for work, and there are no new jobs. What happens to wages for a while?",
      options: ["They go up", "They go down", "They stay exactly the same"],
      answer: 1,
      why: "More sellers of labour-power than buyers pushes the price down, just like too many loaves pushes down the price of bread.",
    },
    {
      q: "In Marx's example, a 1,000-shilling machine lasts 10 years. How much does the owner set aside each year to replace it?",
      options: ["10 shillings", "100 shillings", "1,000 shillings"],
      answer: 1,
      why: "1,000 shillings spread over 10 years is 100 a year. Marx says the cost of raising the next worker is counted the same way.",
    },
    {
      q: "Why does Marx say the minimum of wages holds for the working class, not for each person?",
      options: [
        "Because every single worker always gets exactly enough",
        "Because many individual workers get less than they need, even though the class as a whole is kept going",
        "Because the class has no wages",
      ],
      answer: 1,
      why: "Marx says millions of workers do not receive enough to live and raise a family, yet the wages of the class adjust to the minimum.",
    },
  ],

  remember: [
    "A wage is the price of labour-power, so it swings with supply and demand.",
    "Underneath the swings sits the cost of keeping the worker: food, home, clothes, training.",
    "That cost includes raising the next generation of workers, just as a machine's cost includes replacing it.",
    "Marx calls this the minimum of wages. Volume I, Chapter 6 develops it as the value of labour-power.",
  ],

  terms: ["minimum-of-wages", "value-of-labour-power", "means-of-subsistence"],

  source: (
    <p>
      Covers Wage-Labour and Capital, section 4, &ldquo;By what are wages determined?&rdquo;, from the lectures Marx
      gave in Brussels in December 1847 and printed in the Neue Rheinische Zeitung in April 1849. We follow the 1891
      edition on marxists.org, in which Engels changed &ldquo;labour&rdquo; to &ldquo;labour-power&rdquo; to match
      Marx&apos;s later work (he says so in his introduction). Marx&apos;s own points: wages follow the same laws as
      other prices; the cost of production of labour-power is the cost of maintenance and training; the 1,000-shilling
      machine worn out in 10 years; the cost of &ldquo;existence and propagation&rdquo;; the minimum of wages holding
      for the class, not the individual. The 3-coin wage and its 2 + 1 split, and the 2 and 4 coin swings, are this
      site&apos;s made-up numbers.
    </p>
  ),
};

export default chapter;
