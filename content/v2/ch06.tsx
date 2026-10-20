import type { ChapterContent } from "@/components/ChapterTemplate";
import { BusyButNotMaking, FreshYarnOldYarn, TheCarter } from "./ch06-animations";

const chapter: ChapterContent = {
  bigQuestion: "Clerk Pim works hard all day. Does his work make the yarn worth more?",

  story: (
    <>
      <p>
        Mr. Moneybags&apos; business has grown. He has hired Clerk Pim to sit at a desk and keep the books. He has built a
        store for yarn that is waiting to be sold. And he pays a carter to haul yarn down the long road to the city.
      </p>
      <p>
        At lunch Sam asks Pim what he makes all day. &ldquo;I make the numbers right!&rdquo; says Pim, a little hurt.
        The carter, eating his bread on the step, says he moves things. The storeman says he keeps things dry.
      </p>
      <p>All three work hard. All three are paid. But do they all make the yarn worth more, the way Sam&apos;s spinning does?</p>
    </>
  ),

  guess: (
    <p>
      Clerk Pim, the storeman and the carter all work hard. Which of them do you think adds value to the yarn, and which
      only help it get sold?
    </p>
  ),

  struggle: [<BusyButNotMaking key="a" />, <FreshYarnOldYarn key="b" />],
  reveal: [<TheCarter key="c" />],

  eli5: "Counting money and haggling over prices are needed, but they don't make the yarn worth more. Keeping a normal stock adds a little, while a pile nobody buys is just a loss. Carrying yarn to where people need it is real work, and it does add value.",

  grownUp: (
    <>
      <p>
        Marx sorts the <strong>costs of circulation</strong> into three kinds. First come the genuine costs of circulation,
        which arise only because commodities must be turned into money and money back into commodities. The time spent
        buying and selling creates no value. A selling agent works as hard as anyone, &ldquo;just as another does by
        spinning or making pills&rdquo;, and a good one saves time for many producers, but his labour adds nothing to the
        value of what is sold. The same goes for bookkeeping, with its pens, ink and desks, and for the gold and silver
        locked up as money. Marx calls these <strong>faux frais</strong>: necessary costs that must be paid out of
        surplus-value. He adds that bookkeeping becomes more necessary as production becomes more social, even more so in
        collective production than under capitalism.
      </p>
      <p>
        Second come <strong>costs of storage</strong>. Some stock is a condition of circulation: buyers need to find goods
        when they come. The costs of keeping such a normal supply enter, to a certain extent, into the value of the goods.
        But when goods pile up because they cannot be sold, the costs are losses. The buyer, Marx says, would laugh in the
        seller&apos;s face and point to fresh goods next door.
      </p>
      <p>
        Third comes the <strong>transport industry</strong>. Moving goods to where they are used is a continuation of
        production inside circulation. It adds value, by passing on the wear of carts and railways and by new labour. The
        value it adds rises with distance and falls as transport becomes more productive. Where only the title of ownership
        changes hands and the goods stay put, nothing is added.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Not everything that costs money creates value. The work of turning goods into money and back, such as counting,
        haggling and keeping cash, is necessary in a market economy, but it is paid for out of surplus-value. Work that
        changes where a useful thing is, or keeps a necessary stock from spoiling, is different: it carries production on
        and adds value.
      </p>
    </>
  ),

  critics: [
    {
      who: "Services count",
      point: (
        <p>
          Modern national accounts, the figures behind a country&apos;s GDP, count accounting, shops and banking as output
          like any other. Most economists see no meaningful line between &ldquo;productive&rdquo; and
          &ldquo;unproductive&rdquo; work: if people willingly pay for a service, it has added value.
        </p>
      ),
    },
    {
      who: "Where to draw the line",
      point: (
        <p>
          Even writers who follow Marx disagree about which jobs fall on which side. Isaak Rubin in the 1920s, and Anwar
          Shaikh and Ertuğrul Tonak in their 1994 book <em>Measuring the Wealth of Nations</em>, tried to sort real
          economies this way, and their results are still argued over.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Clerk Pim keeps the workshop's books. What does Marx say his work adds to the value of the yarn?",
      options: ["Nothing new, though the work is necessary", "Twice the value of the cotton", "Exactly his wage"],
      answer: 0,
      why: "Bookkeeping is a cost of circulation, a faux frais. It has to be paid for out of surplus-value.",
    },
    {
      q: "Mr. Moneybags' yarn sat unsold for six months. Can he charge more because storing it cost him?",
      options: [
        "Yes, storing always adds value",
        "No, those costs are losses: the buyer can get fresh yarn next door",
        "Only if it rained a lot",
      ],
      answer: 1,
      why: "Only the costs of a normal stock can enter the value. An unsold pile is a loss, and no buyer will pay for it.",
    },
    {
      q: "Why does the carter add value when traders swapping papers do not?",
      options: [
        "The carter moves the yarn to where it can be used; the traders only change who owns it",
        "The carter works outdoors",
        "Traders are paid less",
      ],
      answer: 0,
      why: "Marx treats transport as production carried on into circulation. Changing the owner moves nothing.",
    },
  ],

  remember: [
    "Buying, selling and bookkeeping are necessary but make no new value. Marx calls them faux frais.",
    "Their cost comes out of surplus-value.",
    "Keeping a normal stock can add some value; an unsold pile is just a loss.",
    "Transport is production carried on into circulation. It adds value, more over long distances and less as transport gets better.",
  ],

  terms: ["costs-of-circulation", "faux-frais", "costs-of-storage", "transport-industry"],

  source: (
    <p>
      Covers Volume II, Chapter 6 (&ldquo;The Costs of Circulation&rdquo;): the genuine costs of circulation (time of
      purchase and sale, bookkeeping, money), costs of storage, and costs of transportation. Marx&apos;s own points: the
      selling agent who works &ldquo;just as another does by spinning or making pills&rdquo;; bookkeeping growing more
      necessary as production becomes social; the buyer who would laugh in the face of a seller of stale goods; transport as
      &ldquo;a continuation of a process of production&rdquo;. Volume II was edited by Engels from Marx&apos;s manuscripts.
      Clerk Pim, the carter, the storeman and all coin figures belong to this site.
    </p>
  ),
};

export default chapter;
