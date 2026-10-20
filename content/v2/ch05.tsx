import type { ChapterContent } from "@/components/ChapterTemplate";
import { BreadThatWontWait, TheClockOfOneRound } from "./ch05-animations";

const chapter: ChapterContent = {
  bigQuestion: "Does Mr. Moneybags make money while his yarn sits waiting to be sold?",

  story: (
    <>
      <p>
        Mr. Moneybags has noticed something odd. His yarn sits in the shop for weeks before anyone buys it, yet in the end
        it sells at a good price. &ldquo;Waiting must be making me money,&rdquo; he says, rubbing his hands.
      </p>
      <p>
        Grandpa Ned chuckles. His wheat has been growing in the field all winter without anyone lifting a finger, and he
        knows it will be worth far more in summer than the seed was in autumn. Is the waiting doing the work?
      </p>
      <p>
        Mia has the opposite problem. Her bread has to be sold today. If it waits until tomorrow, it is worth almost
        nothing at all.
      </p>
      <p>So does time make value, or does it eat it?</p>
    </>
  ),

  guess: (
    <p>
      If Mr. Moneybags&apos; yarn sits unsold for three weeks instead of one, does he end up richer, poorer or the same?
      Think about what his workshop could have been doing with that money in the meantime.
    </p>
  ),

  struggle: [<TheClockOfOneRound key="a" />],
  reveal: [<BreadThatWontWait key="b" />],

  eli5: "Capital spends part of its time being made into things and part being sold and bought. Only the making part, when people actually work, adds new value. The longer things wait to be sold, the less often the money can go round, and bread can hardly wait at all.",

  grownUp: (
    <>
      <p>
        The whole time a capital needs to go round its circuit is its <strong>time of production</strong> plus its{" "}
        <strong>circulation time</strong>. Production time is longer than working time. It includes nights when the
        machines stand still, stocks of cotton and coal waiting in the mill (Marx calls them fallow capital), and natural
        processes that go on without anyone working: grain after it is sown, wine fermenting in the cellar, hides in the
        tannery. Only the time of actual labour creates value and surplus-value, which is why capitalists try to shrink the
        gap, for example with night work.
      </p>
      <p>
        Production and circulation exclude each other. While capital is being sold or bought, it produces neither goods
        nor surplus-value. So circulation time is a negative limit on production: the closer it gets to zero, the more the
        same capital can work. Economists, Marx says, mistake this negative effect for a positive one and imagine that
        circulation is a mysterious source of value.
      </p>
      <p>
        Selling (C&prime;&ndash;M&prime;) is usually the hardest and longest part, because it is where the surplus-value is
        realised. Buying can take time too, if materials come from far away. And there is a hard limit: a{" "}
        <strong>perishable commodity</strong> spoils, and with its use-value it loses its value. The more perishable a
        thing is, the smaller its market, unless better transport or a crowded town widens it, as with large breweries and
        dairies.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Time on its own makes no value. Waiting, storing and selling are necessary, but only the hours of human work in
        production create value. A capitalist gains from selling faster, not because selling creates anything, but because
        his money gets back to the workshop sooner and can set people to work again.
      </p>
    </>
  ),

  critics: [
    {
      who: "Time preference",
      point: (
        <p>
          Austrian economists such as Eugen von Böhm-Bawerk argued that time itself has value. Wine that ages or a forest
          that grows becomes worth more with no extra work, and people prefer goods now to goods later, so waiting earns a
          reward. Marx answers in this chapter that the months of waiting create no value; the labour that sowed the grain
          or pressed the wine does. Critics reply that prices plainly do reward the waiting.
        </p>
      ),
    },
    {
      who: "Operations managers",
      point: (
        <p>
          Modern firms work hard to cut stock and selling time, as in the just-in-time production made famous by Toyota.
          They agree with Marx that idle stock and slow sales cost money, but they explain the gain as efficiency and lower
          costs, not as more time for workers to create surplus-value.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Grandpa Ned's wheat grows all winter with nobody working on it. How does Marx describe that?",
      options: ["Circulation time", "Production time that is longer than working time", "Overtime"],
      answer: 1,
      why: "The wheat is still in production while it grows, but no one is working, so no new value is being added.",
    },
    {
      q: "While yarn waits in a shop to be sold, how much new value is being made?",
      options: ["None", "A little every day", "Twice as much as in the workshop"],
      answer: 0,
      why: "Circulation time makes no value. It only holds up the money from going back into production.",
    },
    {
      q: "Why is bread harder to sell far away than linen?",
      options: [
        "Bread is heavier",
        "Bread spoils, so it can only travel a short way before it must be eaten",
        "Nobody likes bread in the city",
      ],
      answer: 1,
      why: "A perishable thing has only a short time to be sold, so its market is small unless transport gets faster.",
    },
  ],

  remember: [
    "The time for one round = production time + circulation time.",
    "Only the hours people actually work make new value. Nights, waiting stock and growing wheat do not.",
    "Circulation time makes no value and limits how much the same capital can produce.",
    "Perishable things must be sold fast, so their market stays small unless transport improves.",
  ],

  terms: ["circulation-time", "perishable-commodity"],

  source: (
    <p>
      Covers Volume II, Chapter 5 (&ldquo;The Time of Circulation&rdquo;). Marx&apos;s own examples: grain after sowing,
      wine fermenting in the cellar and tanneries; cotton and coal held in a spinning mill as &ldquo;fallow capital&rdquo;;
      large breweries and dairies. Engels notes that this chapter begins Marx&apos;s Manuscript IV; Volume II as a whole
      was edited by Engels from Marx&apos;s drafts. The wheat, the bread and all the round numbers belong to this site.
    </p>
  ),
};

export default chapter;
