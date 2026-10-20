import type { ChapterContent } from "@/components/ChapterTemplate";
import { HowManyNotes, OneNoteManyJobs } from "./ch33-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can a bank just print more notes whenever it likes?",

  story: (
    <>
      <p>
        Bea the banker has a new idea. She keeps her reserve at the great Bank of England in the city, and she has
        heard the Bank can print paper notes. &ldquo;If they printed more,&rdquo; she says, &ldquo;wouldn&apos;t
        everyone have more money to spend?&rdquo;
      </p>
      <p>
        Grandpa Ned is doubtful. &ldquo;I only carry as many notes as I need for market,&rdquo; he says. &ldquo;Give
        me more and I&apos;ll just put them back in your bank.&rdquo;
      </p>
      <p>
        Then Bea notices something else. One morning she lends a £500 note to a merchant. By evening the same note
        has come back to her as somebody else&apos;s deposit, ready to be lent again.
      </p>
      <p>So who really decides how many notes are in people&apos;s pockets? And how much work can one note do?</p>
    </>
  ),

  guess: (
    <p>
      If the Bank printed lots of extra notes on an ordinary day, where do you think they would end up? And on a day
      of panic, would people want more notes than usual or fewer?
    </p>
  ),

  struggle: [<OneNoteManyJobs key="a" />],
  reveal: [<HowManyNotes key="b" />],

  eli5: "One bank-note can pay a bill, sit in a bank and be lent out again, all in one day. The number of notes people carry depends on how much buying and selling they do. In a panic everyone wants extra notes, and that is exactly when they are hardest to get.",

  grownUp: (
    <>
      <p>
        This chapter is about the <strong>medium of circulation</strong> when credit is well developed, and above all
        about the <strong>bank-note</strong>. Marx first shows how credit lets money circulate faster. In his example
        a £500 note pays a bill, becomes a deposit, is lent to discount another bill, becomes a deposit again and is
        advanced to a bill-broker, all on the same day. The more money passes through deposits and loans, the less
        of it is needed, and in the clearing house bills are simply set against each other.
      </p>
      <p>
        Who decides how many notes circulate? Marx sides with the bankers who testified to Parliament: the quantity
        is set by the needs of trade, and &ldquo;every superfluous note wends its way back immediately to the
        issuer&rdquo;. The Governor of the <strong>Bank of England</strong> told the 1858 committee that in ordinary
        times the public wanted about £20 million in notes. Marx adds that total notes in circulation actually fell
        between 1844 and 1857 while trade more than doubled.
      </p>
      <p>
        A panic changes everything. A banker named Wright testified that in an alarm &ldquo;the country requires twice
        as much circulation as in ordinary times&rdquo;, because bankers and others hoard notes. Yet the Bank Act of
        1844 forced the Bank to shrink its notes just then. Marx calls this &ldquo;the sudden change of the credit
        system into a monetary system during crises&rdquo;.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        In normal times a bank cannot simply pump extra notes into the economy; trade decides how many it uses and
        sends the rest back. Credit makes a small amount of money do a great deal of work, which is efficient, but it
        also means the system rests on trust that can vanish overnight.
      </p>
      <p>
        When it does, the demand for money doubles at the very moment the law and the banks hold it back. That is
        why, for Marx, the money panic is built into a credit economy.
      </p>
    </>
  ),

  critics: [
    {
      who: "The Currency School and later monetarists",
      point: (
        <p>
          Marx&apos;s opponents in the 1840s, the Currency School, held that issuing too many notes raises prices,
          and that strict rules on the note issue prevent booms and busts. Monetarists in the twentieth century made a
          similar case that central banks can and do change the money supply, with real effects on prices.
        </p>
      ),
    },
    {
      who: "Endogenous-money economists",
      point: (
        <p>
          Many economists today, including the Bank of England in a 2014 bulletin, describe money as created mainly
          when banks make loans, in response to borrowers&apos; demand. That is close to the &ldquo;needs of
          trade&rdquo; view Marx adopted from the Banking School, though they reach it without his theory of value.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's example, how many jobs does one £500 note do in a single day?",
      options: ["Just one payment", "Several: a payment, deposits and loans", "None, it stays in a drawer"],
      answer: 1,
      why: "It pays a bill, becomes a deposit, is lent out, becomes a deposit again and is lent again.",
    },
    {
      q: "On an ordinary day, what happens to extra notes nobody needs?",
      options: ["People spend them on luxuries", "They flow straight back to the bank", "They are thrown away"],
      answer: 1,
      why: "Marx: every superfluous note wends its way back to the issuer, so trade decides how many are out.",
    },
    {
      q: "In a panic, how much circulation did the banker Wright say the country needs?",
      options: ["Half as much as usual", "The same as usual", "Twice as much as usual"],
      answer: 2,
      why: "In an alarm people hoard notes, so the country wants about twice as many, just when they are scarce.",
    },
  ],

  remember: [
    "Credit lets one note do many jobs in a day, so less money is needed.",
    "In ordinary times, trade decides how many notes circulate. Spare ones go back to the bank.",
    "In a panic, people hoard notes and the country wants about twice as many.",
    "When notes run short in a crisis, credit suddenly turns back into a hunt for money.",
  ],

  terms: ["bank-note", "bank-of-england"],

  source: (
    <p>
      Covers Volume III, Chapter 33 (&ldquo;The Medium of Circulation in the Credit System&rdquo;). Volume III was put
      together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894. Engels explains in his preface
      that he built Chapters 33 to 35 out of a long section of Marx&apos;s notes headed &ldquo;The Confusion&rdquo;,
      mostly extracts from parliamentary reports, adding passages of his own for continuity; so this chapter is
      heavy with 1840s and 1850s testimony. The £500 note, the £20 million, Wright&apos;s &ldquo;twice as much&rdquo;
      and the figures for 1844 to 1857 are from the text. Bea and Grandpa Ned belong to this site. English text: the
      International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
