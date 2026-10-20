import type { ChapterContent } from "@/components/ChapterTemplate";
import { AboveBelowOrOnTheLine, FiveWorkshops, SharingThePot } from "./ch09-animations";

const chapter: ChapterContent = {
  bigQuestion: "If labour makes all the new value, why does every boss earn about the same profit?",

  story: (
    <>
      <p>
        Last chapter left Tiny Town with a puzzle. The tailoring workshop, full of people, makes six times as much
        surplus-value as Mr. Moneybags&apos; machine-filled mill. Yet every boss in town seems to earn about the same
        profit on each 100 coins.
      </p>
      <p>
        Bea the banker has a theory. &ldquo;Imagine every boss in town drops his surplus into one big pot at the end of
        the year,&rdquo; she says. &ldquo;Then the pot is shared out, 100 coins at a time, fair and square, like a
        club sharing its takings.&rdquo;
      </p>
      <p>
        &ldquo;Nobody would agree to that!&rdquo; laughs Mr. Moneybags. &ldquo;Nobody has to agree,&rdquo; says Bea.
        &ldquo;Competition does it for you.&rdquo;
      </p>
      <p>How could competition share out the surplus? And who gains and who loses when it does?</p>
    </>
  ),

  guess: (
    <p>
      Five businesses each put in 100 coins and make 20, 30, 40, 15 and 5 coins of surplus-value. If they all ended up
      with the same profit, what would it be? Would any of them be selling their goods for more than they are worth?
    </p>
  ),

  struggle: [<FiveWorkshops key="a" />, <SharingThePot key="b" />],
  reveal: [<AboveBelowOrOnTheLine key="c" />],

  eli5: "All the surplus made in the whole town is shared out like a pot, an equal slice for every 100 coins of capital. So machine-heavy workshops get more profit than their own workers made, and labour-heavy ones get less. Prices move away from values, but in total they still add up the same.",

  grownUp: (
    <>
      <p>
        Marx takes five capitals of 100 with different organic compositions (80c + 20v, 70c + 30v, 60c + 40v, 85c + 15v
        and 95c + 5v) and a rate of surplus-value of 100%. Selling at value would give rates of profit of 20, 30, 40, 15
        and 5%. Together the 500 make 110 of surplus-value, an average composition of 78c + 22v and an{" "}
        <strong>average rate of profit</strong> of 22%.
      </p>
      <p>
        Competition, by moving capital toward the most profitable branches, tends to give every 100 of capital this
        average. Each commodity then sells at its cost-price plus the average profit: its{" "}
        <strong>price of production</strong>. In Marx&apos;s table the values 90, 111, 131, 70 and 20 become prices of
        92, 103, 113, 77 and 37. Some sell 26 above value, others 26 below, so the deviations cancel. The sum of prices
        equals the sum of values (422), and total profit equals total surplus-value (110).
      </p>
      <p>
        Capitals of higher composition than the social average (more constant capital) sell above value; lower
        composition below; average composition at value. The capitalists, Marx says, are like shareholders in one
        great company, each drawing profit in proportion to his capital rather than to the labour he employs. This is
        why profit seems to come from capital as such.
      </p>
      <p>
        Marx himself notes a loose end: the inputs a capitalist buys are also bought at prices of production, not at
        values, so cost-prices are modified too. He says the totals still hold for society as a whole, but leaves the
        detail aside. That loose end became the famous <strong>transformation problem</strong>.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Prices are not values, and they are not supposed to be. Competition turns values into prices of production
        that give every capital the same rate of profit. But this only shares out a total that labour has already
        created: across the whole economy, total profit is total surplus-value.
      </p>
      <p>
        That sharing hides the source. A boss who employs few workers still gets the average profit, so it looks as
        if capital itself, not labour, earns it.
      </p>
    </>
  ),

  critics: [
    {
      who: "The transformation problem",
      point: (
        <p>
          Böhm-Bawerk (1896) said Volume III abandons Volume I. Ladislaus von Bortkiewicz (1907) showed that once the
          inputs are also priced at prices of production, Marx&apos;s two totals (prices = values and profits =
          surplus-value) cannot in general both hold at once. Paul Samuelson (1971) went further, calling the labour
          values an unnecessary detour: you can work out prices directly.
        </p>
      ),
    },
    {
      who: "The defenders",
      point: (
        <p>
          Some Marxist economists reply that the problem comes from how the numbers are set up. The &ldquo;New
          Interpretation&rdquo; (Duménil and Foley, around 1980) and the &ldquo;temporal single-system&rdquo; reading
          (Kliman, Freeman and others) define value and the value of money so that both totals hold. The debate is
          still open, and the site leaves it for readers to judge.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Five capitals of 100 make 110 coins of surplus-value between them. What is the average rate of profit?",
      options: ["11%", "22%", "110%"],
      answer: 1,
      why: "110 coins on 500 coins of capital is 22 for every 100.",
    },
    {
      q: "Mr. Moneybags' mill has more machines than the town average. Compared with its value, its price of production is...",
      options: ["Higher", "Lower", "Exactly the same"],
      answer: 0,
      why: "Its own workers made less surplus than the average 22 per 100, but it still gets the average profit, so it sells above value.",
    },
    {
      q: "What stays the same when values turn into prices of production, for the economy as a whole?",
      options: [
        "Each single price stays equal to its value",
        "Total prices equal total values, and total profit equals total surplus-value",
        "Every business keeps exactly the surplus its own workers made",
      ],
      answer: 1,
      why: "Single prices move away from values, but in Marx's table the ups and downs cancel: 422 = 422 and 110 = 110.",
    },
  ],

  remember: [
    "Selling at value would give every trade a different rate of profit.",
    "Competition shares out all the surplus-value: each 100 of capital gets the average profit.",
    "Price of production = cost-price + average profit.",
    "Machine-heavy trades sell above value, labour-heavy trades below; in total it balances.",
    "Because profit follows the size of capital, it looks as if capital itself makes profit.",
  ],

  terms: ["average-rate-of-profit", "price-of-production", "transformation-problem"],

  source: (
    <p>
      Covers Volume III, Chapter 9. Volume III was assembled by Engels from Marx&apos;s manuscripts and published in
      1894. Text checked against the marxists.org edition (Institute of Marxism-Leninism, 1959). All five capitals,
      their values, cost-prices, prices of production and deviations are copied from Marx&apos;s tables, as are the
      three-capital comparison (80c + 20v, 90c + 10v, 70c + 30v at 20%) and the image of capitalists as shareholders.
      Bea&apos;s &ldquo;pot&rdquo; is this site&apos;s picture of what Marx calls the uniform distribution of
      surplus-value.
    </p>
  ),
};

export default chapter;
