import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheMoneyThatWaits, TwoRoads, WatchTheWorkshop } from "./ch02-animations";

const chapter: ChapterContent = {
  bigQuestion: "What if you watch the workshop instead of the money?",

  story: (
    <>
      <p>
        Leo has followed the coins. Now Sam suggests a different game. &ldquo;Don&apos;t watch the purse,&rdquo; he
        says. &ldquo;Watch the workshop. That&apos;s where I am all day.&rdquo;
      </p>
      <p>
        So in the morning Leo stands by the spinning wheels. They hum all day. In the evening the yarn goes out of the
        door, coins come in, and by the next morning there is fresh cotton on the bench and Sam is back at his wheel. To Leo, the
        whole business of selling and buying looks like a quick pit stop between two working days.
      </p>
      <p>
        Then he notices something else. Of the evening&apos;s 30 coins, Mr. Moneybags only sends 27 back into the
        workshop. The other 3 go somewhere else. Some days they go on cakes from Mia&apos;s bakery. Some days they go
        into a chest that never seems to be opened.
      </p>
      <p>Why would a man who loves money lock it away where it cannot grow?</p>
    </>
  ),

  guess: (
    <p>
      Mr. Moneybags drops his 3 extra coins into a chest every day and does nothing with them. Is that money capital or
      not? What might he be waiting for?
    </p>
  ),

  struggle: [<WatchTheWorkshop key="a" />, <TwoRoads key="b" />],
  reveal: [<TheMoneyThatWaits key="c" />],

  eli5: "If you watch the workshop instead of the coins, the buying and selling is only a short stop between two days of work. The extra coins either get spent on the boss or saved until there are enough to make the workshop bigger. Saved coins are asleep until then.",

  grownUp: (
    <>
      <p>
        The circuit of <strong>productive capital</strong> is P&hellip;C&prime;&ndash;M&prime;&ndash;C&hellip;P. Here
        production is the start and the finish, and the whole of circulation shows up only as a link between two rounds
        of production. This form highlights capital as a process that keeps <em>reproducing</em> itself, and
        reproducing surplus-value, day after day.
      </p>
      <p>
        Once the yarn is sold, its value splits. The capital-value (27 coins in Tiny Town) goes round again, through
        C&ndash;M&ndash;C, buying cotton and labour-power. The surplus-value (3 coins) can follow its own road,
        c&ndash;m&ndash;c, into the capitalist&apos;s personal spending. If all of it is spent, the next round is the same
        size: simple reproduction. If it is put back to work, the next round is larger, and Marx writes P&hellip;P&prime;.
      </p>
      <p>
        But surplus-value usually cannot be put to work straight away. A new machine has a minimum price, so the money
        must pile up first. While it waits, it is a hoard: <strong>latent money-capital</strong>, capital that cannot act
        as capital as long as it stays money. Such hoards also serve as a <strong>reserve fund</strong>, smoothing over
        disturbances such as a sudden rise in the price of cotton, so the circuit does not have to stop.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Seen from the workshop, capitalism is a machine for reproducing itself: the same relation between owner and
        worker, and the same production of surplus-value, renewed again and again, with buying and selling only a
        connecting link.
      </p>
      <p>
        Hoarding, which looked like the opposite of capital in Volume I, turns out to be part of accumulation. Money has
        to gather into large enough lumps before it can buy new means of production, so idle money is built into the
        way capital grows.
      </p>
    </>
  ),

  critics: [
    {
      who: "Saving as a choice",
      point: (
        <p>
          Mainstream economics treats saving up for an investment as an ordinary choice between spending now and earning
          more later, made by households and firms alike. On this view there is nothing special about the
          capitalist&apos;s chest: it is the same decision anyone makes when they save for something big.
        </p>
      ),
    },
    {
      who: "Credit first",
      point: (
        <p>
          Joseph Schumpeter and later economists argued that firms rarely wait to save up: banks lend them money to
          invest before any surplus has been saved, so credit, not hoarding, drives growth. Marx himself turns to credit
          later (Volume III), and his defenders say the hoard is a first step in the argument, not the last word.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In the circuit P…P, how does buying and selling look?",
      options: ["Like the main event", "Like a short pit stop between two rounds of production", "It does not happen at all"],
      answer: 1,
      why: "Starting and ending with production, the whole of circulation appears only as a connecting link.",
    },
    {
      q: "Mr. Moneybags spends all 3 coins of surplus on cakes every day. What happens to his workshop?",
      options: ["It grows every day", "It stays the same size: simple reproduction", "It shrinks"],
      answer: 1,
      why: "The 27 coins of capital go round again unchanged, so the next day starts at the same scale.",
    },
    {
      q: "He saves 3 coins a day towards a 12-coin machine. What are the coins in the chest called while he waits?",
      options: ["Productive capital", "Latent money-capital", "Wages"],
      answer: 1,
      why: "They are capital in waiting: they cannot act as capital until there are enough to buy the machine.",
    },
  ],

  remember: [
    "The circuit of productive capital is P…C′–M′–C…P.",
    "Seen from the workshop, buying and selling are just a link between two rounds of production.",
    "The sold yarn splits: capital-value goes round again, surplus-value can be spent or saved.",
    "All spent: simple reproduction. Put back to work: the workshop grows (P…P′).",
    "Saved money waiting to be big enough is latent money-capital; it can also be a reserve fund.",
  ],

  terms: ["productive-capital", "latent-money-capital", "reserve-fund"],

  source: (
    <p>
      Covers Volume II, Chapter 2 (&ldquo;The Circuit of Productive Capital&rdquo;): simple reproduction, accumulation
      and reproduction on an extended scale, accumulation of money, and the reserve fund. Volume II was assembled and
      edited by Engels from Marx&apos;s manuscripts; at one point the text records Marx&apos;s own note that a topic
      &ldquo;belongs to the last part of Book Two.&rdquo; The 12-coin machine and the four days of saving are this
      site&apos;s invented numbers.
    </p>
  ),
};

export default chapter;
