import type { ChapterContent } from "@/components/ChapterTemplate";
import { CircleBecomesSpiral, TwoSouls, WhoseCoins } from "./ch24-animations";

const chapter: ChapterContent = {
  bigQuestion: "What happens when the extra money is put back to work?",

  story: (
    <>
      <p>
        It has been a good year in Mr. Moneybags&apos; spinning workshop. At the end of it, there is a fat pile of extra
        coins in his strongbox: the surplus-value that Sam and the other spinners made.
      </p>
      <p>
        Last year he spent the whole pile on himself: fine dinners, a new hat, a carriage with shiny wheels. This year
        he stands in front of the pile for a long time. Over in Big River Village, a rival has just bought a bigger
        machine.
      </p>
      <p>
        So Mr. Moneybags keeps a little for himself and spends the rest on more cotton, more spinning wheels and more
        spinners. Next year the workshop is bigger, and so is the pile. The year after, bigger again.
      </p>
      <p>
        Sam watches two new spinners start work on their first morning. Their wages are paid with coins from last
        year&apos;s pile. &ldquo;Wait,&rdquo; Sam thinks. &ldquo;Who made that pile?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags&apos; workshop grows bigger every year. Where do you think the money for the new wheels and the new
      spinners really comes from? From his own pocket, from a bank, or from somewhere else?
    </p>
  ),

  struggle: [<CircleBecomesSpiral key="a" />, <WhoseCoins key="b" />],
  reveal: [<TwoSouls key="c" />],

  eli5: "Mr. Moneybags puts the extra money back into the workshop instead of spending it all. So the workshop grows and grows, like a snowball rolling downhill. And the money for each new part came from the workers' unpaid hours.",

  grownUp: (
    <>
      <p>
        Using surplus-value as capital, turning it back into capital, is what Marx calls{" "}
        <strong>accumulation</strong>. His example: a spinner advances 10,000 (four-fifths on cotton and machinery,
        one-fifth on wages) and, at a rate of surplus-value of 100%, gets 2,000 of surplus-value. He lays that out in the
        same proportions, 1,600 and 400. The new 2,000 brings 400, which brings 80, and so on. The circle of simple
        reproduction becomes a spiral: <strong>reproduction on an expanded scale</strong>. For this to work, the year&apos;s
        surplus product must already contain the extra cotton, machines and food, and the working class supplies the
        extra workers.
      </p>
      <p>
        Then comes Marx&apos;s sharpest point. Grant that the very first capital came from the owner&apos;s own work.
        The additional capital is something else: capitalised surplus-value, made from the start of other people&apos;s
        unpaid labour. Each wage was a fair swap, yet the laws of commodity exchange turn{" "}
        <em>into their very opposite</em>. Owning comes to mean the right to take the unpaid labour of others, and the
        exchange of equivalents becomes only an apparent exchange.
      </p>
      <p>
        Marx corrects Adam Smith and David Ricardo, who said that the part of revenue added to capital is all spent on
        workers. It is not: it splits again into constant capital (cotton, machines) and variable capital (wages).
      </p>
      <p>
        The capitalist divides the surplus between his own <strong>revenue</strong> and new capital. Marx describes a
        &ldquo;Faustian conflict&rdquo; between the passion to accumulate and the wish to enjoy. Some luxury even becomes
        a business necessity, a show of wealth that helps him borrow. But competition turns the laws of capital into
        &ldquo;external coercive laws&rdquo; for each capitalist: he must keep extending his capital just to keep it.
        Marx sums up the classical economists&apos; formula: &ldquo;Accumulation for accumulation&apos;s sake, production
        for production&apos;s sake.&rdquo;
      </p>
      <p>
        Nassau Senior called the saved part a reward for <strong>abstinence</strong>; Marx answers that the capitalist
        grows rich as he squeezes others&apos; labour and makes the workers abstain. How much is accumulated also depends
        on how hard workers are pushed, on productivity, on the free service that machines give while they wear out only
        slowly, and on the size of the capital. Finally, Marx attacks the idea of a fixed <strong>labour fund</strong>,
        a set pot for wages, which he says economists such as Bentham used to argue that workers&apos; share could not
        grow.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Capital grows out of itself, and what it grows from is unpaid labour. Even if a boss started out with money he
        earned honestly, after some years of accumulation the capital that hires workers is made of what earlier workers
        produced and were not paid for. No one has to cheat for this to happen. It follows from the fair-looking rules.
      </p>
      <p>
        The boss is not free to stop, either. Competition forces every capitalist to keep accumulating or fall behind.
        Marx also gives this drive its due: by forcing production for production&apos;s sake, it develops the
        productive powers of society, which he thought could become the basis of a better society later on.
      </p>
    </>
  ),

  critics: [
    {
      who: "Saving is a real sacrifice",
      point: (
        <p>
          Economists from Senior to Eugen von Böhm-Bawerk and Irving Fisher argue that investing means not consuming
          now, and that waiting has a real cost which interest and profit pay for. Today much investment comes from
          ordinary people&apos;s savings, for example pension funds, so the growth of capital is not only bosses
          reinvesting workers&apos; unpaid labour.
        </p>
      ),
    },
    {
      who: "Growth lifts wages too",
      point: (
        <p>
          Mainstream growth theory (Robert Solow, 1956) holds that reinvestment raises productivity, and that over the
          long run this raises real wages. In rich countries real wages have risen many times over since Marx wrote.
          Marx&apos;s defenders reply that he also said accumulation develops productive power. His question was who
          owns and controls the growing capital, and on what terms.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What does “accumulation” mean in Marx's sense?",
      options: ["Saving coins in a chest", "Turning surplus-value back into capital", "Spending the surplus on luxuries"],
      answer: 1,
      why: "A hoard just sits there. Accumulation sends the extra back to work, so it makes still more.",
    },
    {
      q: "In year two, the new spinners are paid with coins that came from...",
      options: ["Mr. Moneybags' own hard work", "Earlier workers' unpaid hours", "A gift from the town"],
      answer: 1,
      why: "The pile that pays them is last year's surplus-value, made in the spinners' unpaid hours.",
    },
    {
      q: "Who said profit was a reward for the boss's “abstinence”?",
      options: ["Nassau Senior", "Adam Smith", "Grandpa Ned"],
      answer: 0,
      why: "Senior put the word “abstinence” in place of capital. Marx mocked it: the workers are the ones going without.",
    },
  ],

  remember: [
    "Accumulation means putting surplus-value back to work as new capital.",
    "The circle of simple reproduction becomes a spiral: the workshop starts again bigger every year.",
    "After a while, the capital is made of other people's unpaid labour, even though every swap was fair.",
    "The boss splits the surplus between his own spending and new capital, and competition pushes him to keep growing.",
    "Senior called saving “abstinence”. Marx said the workers are the ones who really go without.",
  ],

  terms: ["accumulation", "expanded-reproduction", "abstinence-theory", "labour-fund"],

  source: (
    <p>
      Covers Volume I, Chapter 24 (Fowkes: &ldquo;The Transformation of Surplus-Value into Capital&rdquo;; Moore and
      Aveling: &ldquo;Conversion of Surplus-Value into Capital&rdquo;), all five sections: the turn of the laws of
      property into laws of capitalist appropriation; the classical economists&apos; mistake about expanded
      reproduction; the division of surplus-value into capital and revenue, and the abstinence theory; what decides the
      amount of accumulation; and the so-called labour fund. Marx&apos;s own: the spinner&apos;s £10,000, £2,000, £400
      and £80 (shown here as coins); Sismondi&apos;s spiral; &ldquo;Abraham begat Isaac&rdquo;; the Faustian
      conflict; &ldquo;Accumulate, accumulate! That is Moses and the prophets!&rdquo;; Senior&apos;s abstinence. The
      big mill uses Marx&apos;s numbers for this chapter, not the daily workshop numbers of Chapters 7 to 9. Kim, Raj
      and the rival are this site&apos;s.
    </p>
  ),
};

export default chapter;
