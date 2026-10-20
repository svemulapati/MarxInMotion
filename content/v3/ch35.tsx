import type { ChapterContent } from "@/components/ChapterTemplate";
import { FaithAndGold, TheBarometer } from "./ch35-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does gold sail from one country to another, and why do bankers panic when it leaves?",

  story: (
    <>
      <p>
        Tom the shopkeeper has started selling Mr. Moneybags&apos; yarn to merchants in Germany, and buying German
        toys to sell in Tiny Town. Most of the time nobody sends any real money across the sea. Bills of exchange,
        paper promises, cancel each other out.
      </p>
      <p>
        But this year Tiny Town has bought far more German toys than Germany has bought yarn. Tom finds that German
        money has become expensive to buy. Then he hears the strangest news: ships are carrying real gold out of
        England.
      </p>
      <p>
        Bea the banker is worried. &ldquo;When gold leaves,&rdquo; she says, &ldquo;the big bank in London raises
        interest, and then everyone in Tiny Town has to pay more to borrow.&rdquo;
      </p>
      <p>Why should toys and yarn far away change what Mr. Moneybags pays for a loan at home?</p>
    </>
  ),

  guess: (
    <p>
      If a country owes other countries more than they owe it, what do you think happens to the price of foreign
      money? And when would it make sense to send real gold instead of paper?
    </p>
  ),

  struggle: [<TheBarometer key="a" />],
  reveal: [<FaithAndGold key="b" />],

  eli5: "Countries pay each other mostly with paper promises. When one country owes too much, foreign money gets dearer, and real gold has to be shipped out. Banks then raise interest, because all that paper depends on a small pile of gold.",

  grownUp: (
    <>
      <p>
        The chapter has two parts. The first follows the <strong>movement of the gold reserve</strong>. The Bank of
        England&apos;s metal is at once an international reserve, a reserve for coins at home, and a security for
        bank-notes. Gold flows out in particular phases of the industrial cycle, and Marx says a drain of metal is
        usually &ldquo;a premonition that conditions are again approaching a crisis&rdquo;.
      </p>
      <p>
        The second part is about the <strong>rate of exchange</strong>, the price of one country&apos;s money in
        another&apos;s. A bracketed passage by Engels explains the mechanism. If England has more payments to make to
        Germany than Germany to England, the price of marks rises in London, until it pays to send gold instead of
        bills. If the outflow is large, the Bank of England protects its reserve, mainly by raising the rate of
        interest. That is why the rate of exchange is called the <strong>barometer</strong> of international gold
        movements.
      </p>
      <p>
        Behind all this stands Marx&apos;s picture of the credit system as a vast structure of paper resting on a
        small metal base: &ldquo;the central bank is the pivot of the credit system. And the metal reserve, in turn,
        is the pivot of the bank.&rdquo; He jokes that the monetary system is &ldquo;essentially a Catholic
        institution, the credit system essentially Protestant&rdquo;: credit lives by faith, but it never really
        leaves its golden foundation.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        However far credit grows, it rests on real money. In good times the paper seems to stand by itself. In a
        crisis everyone wants to turn it into gold at once, and the small reserve at the bottom decides whether the
        whole structure holds.
      </p>
      <p>
        Because countries settle their accounts with each other in gold, a crisis in trade abroad can reach into
        every town through the rate of interest. That is how far-off toys and yarn change the cost of Mr.
        Moneybags&apos; loan.
      </p>
    </>
  ),

  critics: [
    {
      who: "The end of the gold standard",
      point: (
        <p>
          Since the early 1970s no major currency has been tied to gold, and exchange rates mostly float. Critics say
          this shows money does not need a metal base at all. Defenders of Marx reply that central banks still defend
          their currencies with interest rates and reserves, much as the Bank of England did in his day.
        </p>
      ),
    },
    {
      who: "Modern exchange-rate economics",
      point: (
        <p>
          Most economists today think exchange rates are driven less by trade balances than by flows of capital and
          by expectations about interest rates and inflation. On that view the trade-debt story in this chapter is
          only part of the picture.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What is the rate of exchange?",
      options: ["The interest a bank charges", "The price of one country's money in another country's money", "The speed of trade ships"],
      answer: 1,
      why: "It is what one currency costs in terms of another, for example how many pounds buy a mark.",
    },
    {
      q: "When England owes Germany more than Germany owes England, what happens to the price of marks in London?",
      options: ["It rises", "It falls", "It stays the same"],
      answer: 0,
      why: "More people want marks than there are marks to pay with, so their price goes up until gold is shipped instead.",
    },
    {
      q: "Why does Marx call credit “essentially Protestant” and money “essentially Catholic”?",
      options: [
        "Because banks were run by churches",
        "Because credit works on faith, while money always goes back to the real thing, gold",
        "Because gold was found in Rome",
      ],
      answer: 1,
      why: "It is a joke: paper credit lives on belief, but in a crisis everyone returns to gold.",
    },
  ],

  remember: [
    "Countries mostly settle up with paper promises that cancel each other out.",
    "The rate of exchange is the price of one country's money in another's.",
    "When a country owes too much abroad, gold flows out and the central bank raises interest.",
    "All the paper of credit rests on a small reserve of gold. A drain of gold often warns that a crisis is near.",
  ],

  terms: ["rate-of-exchange", "metal-reserve"],

  source: (
    <p>
      Covers Volume III, Chapter 35 (&ldquo;Precious Metal and Rate of Exchange&rdquo;): the movement of the gold
      reserve, and the rate of exchange, including the exchange with Asia. Volume III was put together by Friedrich
      Engels from Marx&apos;s manuscripts and published in 1894; Engels says he assembled Chapters 33 to 35 from
      Marx&apos;s notes headed &ldquo;The Confusion&rdquo;, and the England-and-Germany explanation of the rate of
      exchange is Engels&apos; own bracketed passage. The Catholic and Protestant joke, the &ldquo;pivot&rdquo; and the
      &ldquo;premonition&rdquo; of crisis are Marx&apos;s. The prices in 35.1 are example numbers, and Tom, Bea and the
      toys belong to this site. English text: the International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
