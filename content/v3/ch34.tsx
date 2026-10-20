import type { ChapterContent } from "@/components/ChapterTemplate";
import { LockedDoorsInAStorm, PeelsRule } from "./ch34-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can a law stop money panics by tying paper money to gold?",

  story: (
    <>
      <p>
        Bea the banker comes back from the city with exciting news. Clever men in London have made a new law.
        &ldquo;From now on,&rdquo; she says, &ldquo;the Bank of England can only print notes to match its gold. When
        gold leaves, notes shrink. No more wild booms, no more crashes!&rdquo;
      </p>
      <p>
        Mr. Moneybags likes the sound of that. A few years later, a crisis comes anyway. Gold starts leaving the
        country, and by the new rule the Bank must lend less and less, just when every merchant is begging to borrow.
      </p>
      <p>
        Sam watches the queue outside Bea&apos;s bank grow longer every day. &ldquo;If the law was meant to stop
        panics,&rdquo; he asks, &ldquo;why does it feel like it&apos;s making this one worse?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      If a bank must shrink its notes whenever gold leaves, what happens in a crisis, when gold is leaving and
      everyone needs to borrow at the same time?
    </p>
  ),

  struggle: [<PeelsRule key="a" />],
  reveal: [<LockedDoorsInAStorm key="b" />],

  eli5: "A law said the bank could only print notes to match its gold. In a crisis gold left, so the bank had to lend less just when everyone needed it most. Twice the government had to cancel the rule to stop the panic.",

  grownUp: (
    <>
      <p>
        The <strong>currency principle</strong> was the theory of Lord Overstone, Colonel Torrens and others, built on
        Ricardo&apos;s idea that the quantity of money decides prices. They argued that paper money should be made to
        expand and contract exactly as a purely metallic currency would, so that gold flowing in or out would
        automatically correct prices. Sir Robert Peel turned this into law with the <strong>Bank Act of 1844</strong>
        (with a further Act in 1845 for Scotland).
      </p>
      <p>
        The Act divided the Bank of England into an <strong>issue department</strong>, holding £14 million of mainly
        government securities and all the gold and issuing notes for exactly that total, and a{" "}
        <strong>banking department</strong>, which did the ordinary lending with the notes it held. For every £5 of gold
        that left, a £5 note came back to the issue department and was destroyed.
      </p>
      <p>
        Marx argues that the Act worked backwards. In a crisis gold drains out, so the banking department&apos;s
        reserve shrinks, it lends less and charges more, and merchants rush to hoard notes. The banking department
        could be &ldquo;on the verge of bankruptcy&rdquo; while the issue department still held millions in gold and
        its £14 million of securities. In 1847 interest reached 8 and 9 per cent, and on 25 October 1847 the
        government suspended the Act. After Overstone praised the Act before Parliament in July 1857, it was suspended
        again on 12 November 1857.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        You cannot cure crises by fixing the number of bank-notes, because the amount of money in circulation follows
        trade rather than steering it. By forcing the Bank to shrink credit at the worst moment, the 1844 Act made the
        whole business world hoard notes, in Marx&apos;s words &ldquo;to accelerate and intensify the crisis&rdquo;,
        and drove interest to heights nobody had seen.
      </p>
      <p>
        The deeper point is that a credit economy always needs a backstop of real money in a panic. A rule that locks
        that backstop away just when it is needed has to be broken, as it was in both 1847 and 1857.
      </p>
    </>
  ),

  critics: [
    {
      who: "Defenders of the Bank Act",
      point: (
        <p>
          Supporters argued that the Act protected the gold convertibility of the pound, which gave Britain a stable
          currency for decades. The Act stayed the basis of British note issue for many years, and some historians
          credit the strict gold link with the pound&apos;s strong reputation in the late nineteenth century.
        </p>
      ),
    },
    {
      who: "Modern central banking",
      point: (
        <p>
          Many economists agree with Marx and the Banking School on this point: rigid note rules made panics worse.
          But they draw a different lesson from Marx, namely that a central bank should be free to lend in a panic, as
          Walter Bagehot argued in 1873. Modern central banks do this, which suggests the system can be managed rather
          than doomed.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Under Peel's Bank Act, what happened when £5 of gold left the Bank of England?",
      options: ["A new £5 note was printed", "A £5 note came back and was destroyed", "Nothing at all"],
      answer: 1,
      why: "The rule tied notes to gold: gold out meant notes shrank by the same amount.",
    },
    {
      q: "In the crisis of 1847, what was strange about the two departments?",
      options: [
        "Both were completely empty",
        "The banking department nearly ran out while the issue department still held millions",
        "They swapped buildings",
      ],
      answer: 1,
      why: "The wall between them meant the lending side could run dry while gold and bonds sat locked next door.",
    },
    {
      q: "What did the government do on 25 October 1847 and again on 12 November 1857?",
      options: ["Closed the Bank of England", "Suspended the Bank Act", "Printed gold coins"],
      answer: 1,
      why: "Both times the panic was so bad that the rule had to be lifted, which Marx sees as proof it failed.",
    },
  ],

  remember: [
    "The currency principle said paper money should rise and fall exactly like gold.",
    "Peel's Bank Act of 1844 split the Bank of England into an issue department and a banking department.",
    "In a crisis, gold left and the rule forced the Bank to lend less just when everyone needed money.",
    "Interest hit 8 and 9 per cent in 1847, and the Act was suspended in 1847 and again in 1857.",
  ],

  terms: ["currency-principle", "bank-act-1844"],

  source: (
    <p>
      Covers Volume III, Chapter 34 (&ldquo;The Currency Principle and the English Bank Legislation of 1844&rdquo;).
      Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; Engels says
      he assembled Chapters 33 to 35 from Marx&apos;s notes headed &ldquo;The Confusion&rdquo;, and parts of this
      chapter, including the account of the 1857 suspension, are in Engels&apos; own bracketed words. The £14 million,
      the £5 rule, the 8 and 9 per cent of 1847 and the dates 25 October 1847 and 12 November 1857 are from the text.
      Tiny Town belongs to this site. English text: the International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
