import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheMoneyChangersTable, WhereNellsFeeComesFrom } from "./ch19-animations";

const chapter: ChapterContent = {
  bigQuestion: "If someone only counts and moves other people's money, where does their pay come from?",

  story: (
    <>
      <p>
        Tiny Town&apos;s market has grown busy. Traders come from Big River and from the coast, and every one of them
        carries a different kind of coin. Nobody knows what a strange copper coin is worth.
      </p>
      <p>
        So Old Nell sets up a little table with a pair of scales. She weighs each strange coin, works out how much
        silver or gold is inside, and swaps it for Tiny Town coins. Soon Mr. Moneybags asks her to do his paying and
        collecting too, because he is tired of counting coins all day.
      </p>
      <p>
        Nell works as hard as anyone in town. But Sam, passing her table, notices something. &ldquo;You never make any
        yarn, or bread, or coats,&rdquo; he says. &ldquo;So who pays you, and with what?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      Nell doesn&apos;t make anything new. She only weighs, counts and moves coins. Do you think her work adds value to
      the yarn she helps Mr. Moneybags get paid for? If not, where could her fee come from?
    </p>
  ),

  struggle: [<TheMoneyChangersTable key="a" />],
  reveal: [<WhereNellsFeeComesFrom key="b" />],

  eli5: "A money-changer swaps coins, keeps money safe and pays bills for other people. Her work is useful, but it makes nothing new. Her pay is a small slice of the extra that workers made in the workshops.",

  grownUp: (
    <>
      <p>
        In Volume II Marx showed that capital keeps changing shape between money, things for production, and goods to
        sell. Some of the jobs connected with money are purely technical: paying out and receiving, keeping cash safe,
        balancing accounts, changing one country&apos;s coins into another&apos;s. When a special group of capitalists
        does these jobs for everyone else, Marx calls their capital <strong>money-dealing capital</strong>.
      </p>
      <p>
        Marx says money-changing and the trade in gold and silver were the original forms of the money trade. They
        grew out of money&apos;s two jobs: as money inside one country and as world money between countries. The work is
        a cost of circulation, like the bookkeeping in Volume II, Chapter 6: it is needed, but it creates no value.
      </p>
      <p>
        Because one dealer does this for the whole class, the work is concentrated and done on a large scale, which
        saves money for the industrial and commercial capitalists. The money-dealer advances money and gets back more,
        so the general formula M&ndash;M&prime; appears here too. But Marx is clear about the source: the money-dealers&apos;
        profit is &ldquo;a deduction from the surplus-value&rdquo; produced elsewhere.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Handling money is a real job and a real business, but it is a business about moving value that already exists.
        Whoever does it lives on a share of the surplus-value made in production.
      </p>
      <p>
        This chapter is a stepping stone. The next big step, from Chapter 21 on, is lending money as capital, where the
        money-dealer becomes a banker who charges interest.
      </p>
    </>
  ),

  critics: [
    {
      who: "Banking as a productive service",
      point: (
        <p>
          Most economists today count payment services, clearing and bookkeeping as productive services that add value,
          just like making goods. National accounts measure the output of banks and payment companies. On this view
          Nell&apos;s fee is the price of a useful service, not a slice cut from someone else&apos;s output.
        </p>
      ),
    },
    {
      who: "Transaction costs",
      point: (
        <p>
          Economists who study transaction costs, such as Ronald Coase, argue that lowering the cost of exchange raises
          total output, because people can specialise and trade more. Marx agrees the money-dealer saves costs, but he
          still says the saving comes out of surplus-value. His defenders reply that saving costs is not the same as
          creating value.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What does Old Nell do at her table?",
      options: ["She spins yarn", "She swaps coins, keeps money safe and makes payments for others", "She bakes bread"],
      answer: 1,
      why: "That is money-dealing: the technical work of handling money for the whole town.",
    },
    {
      q: "Does Nell's work add value to the yarn?",
      options: ["Yes, a lot", "No, it is a useful cost of circulation that creates no value", "Only on market days"],
      answer: 1,
      why: "Counting and moving money is needed, but no new value comes out of it. Marx calls it a cost of circulation.",
    },
    {
      q: "So where does Nell's fee come from?",
      options: ["From the metal in the coins", "From a slice of the surplus-value made in the workshops", "From thin air"],
      answer: 1,
      why: "Marx says the money-dealer's profit is a deduction from the surplus-value produced by workers.",
    },
  ],

  remember: [
    "Money-dealing is the business of handling money for others: changing coins, keeping cash, paying and collecting, balancing accounts.",
    "Money-changing and the gold and silver trade were its oldest forms.",
    "One money-dealer working for everyone is cheaper than every boss doing it alone.",
    "The work is useful but creates no value. The dealer's profit is a slice of surplus-value made elsewhere.",
  ],

  terms: ["money-dealing-capital", "bullion-trade"],

  source: (
    <p>
      Covers Volume III, Chapter 19 (&ldquo;Money-Dealing Capital&rdquo;), checked against the International
      Publishers edition on marxists.org. Volume III was assembled by Engels from Marx&apos;s manuscripts and
      published in 1894. Marx&apos;s own points: the purely technical movements of money as a separate business; money-changing
      and the bullion trade as its original forms; concentration on a large scale; the money-dealers&apos; profit as
      &ldquo;a deduction from the surplus-value&rdquo;. The Amsterdam bank of 1609 comes from a source Marx quotes in a
      footnote. Old Nell, the travellers and all the numbers in Nell&apos;s book are this site&apos;s own.
    </p>
  ),
};

export default chapter;
