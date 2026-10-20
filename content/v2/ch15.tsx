import type { ChapterContent } from "@/components/ChapterTemplate";
import { MoneyThatWaits, TheThreeWeekGap, TwoCapitalsThatCross } from "./ch15-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does a workshop need more money than it spends in a week?",

  story: (
    <>
      <p>
        Mr. Moneybags has a big order: a mountain of yarn that takes nine weeks to spin. Every Saturday he pays out 100
        coins for cotton and wages. After nine weeks, the yarn is done and sent off to be sold.
      </p>
      <p>
        On Monday of week ten, Sam turns up for work. The cotton bin is empty and so is the cash box. &ldquo;The money
        for the yarn won&apos;t be back for three weeks,&rdquo; says Mr. Moneybags. &ldquo;Come back then.&rdquo;
      </p>
      <p>
        Sam goes home without a wage. Mr. Moneybags sits in a silent workshop, his machines doing nothing. He frowns.
        There must be a better way.
      </p>
      <p>How much money does a business really need, if its goods take time to sell?</p>
    </>
  ),

  guess: (
    <p>
      If nine weeks of work cost 900 coins, and selling takes three more weeks, how much money would Mr. Moneybags need
      to keep the workshop running every single week? More than 900, or less? Guess, then watch.
    </p>
  ),

  struggle: [<TheThreeWeekGap key="a" />, <TwoCapitalsThatCross key="b" />],
  reveal: [<MoneyThatWaits key="c" />],

  eli5: "Goods take time to sell, so a workshop needs extra money to keep working while it waits. When selling gets quicker or things get cheaper, some of that money is no longer needed. That spare money goes to the bank, where others borrow it.",

  grownUp: (
    <>
      <p>
        Marx&apos;s example: a working period of nine weeks, with £100 a week laid out on wages and materials, so £900 in
        all, followed by a <strong>circulation period</strong> of three weeks. The turnover period is twelve weeks. If
        nothing else is done, production stops for three weeks in every twelve.
      </p>
      <p>
        There are two ways out. The business can shrink, spreading £900 over twelve weeks at £75 a week. Or it can
        advance <strong>additional capital</strong>: £300 that starts the next working period while the first batch is
        being sold. The additional capital is to the whole £1,200 as the circulation period is to the turnover period:
        three weeks out of twelve, one quarter.
      </p>
      <p>
        The two capitals soon cross. When the £900 returns in week 13, the second working period is already a third
        done, so only £600 of it is needed and £300 is <strong>released</strong>, ready to play the role that the
        additional capital played. Only when the working period and the circulation period are equal (Marx&apos;s five
        and five weeks) do capital I and capital II take neat turns.
      </p>
      <p>
        If circulation speeds up (Marx&apos;s third example: six weeks of work, circulation cut from three weeks to two),
        £800 does the work of £900 and £100 is set free. If the prices of materials and labour halve, half the capital
        is set free. Released money-capital ends up on the money market. Marx says it must form one of the foundations
        of the credit system.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Because goods take time to sell, a large part of any business&apos;s capital must always be held as money or
        stuck as unsold goods, not working in production. How much depends on the rhythm of working time and selling
        time, not just on how much is spent each week.
      </p>
      <p>
        The rhythm also keeps throwing spare money out of businesses and pulling it back in. That flow of idle money is
        the raw material of banks and credit. It moves even when prices and the amount of money in the country do not
        change at all.
      </p>
    </>
  ),

  critics: [
    {
      who: "Engels himself",
      point: (
        <p>
          Engels, who edited this volume, added a note admitting the chapter was hard to prepare. Marx, he wrote, did
          not have the knack of commercial arithmetic and &ldquo;got so tangled up in his computations of turnovers&rdquo;
          that parts were incorrect, so Engels kept only the simplest correct tables. He also thought Marx gave the
          &ldquo;release&rdquo; of money-capital more importance than it deserved, while agreeing that a big share of
          capital must always be held as money.
        </p>
      ),
    },
    {
      who: "Ordinary business finance",
      point: (
        <p>
          Modern accountants call this working capital and the cash cycle, and handle it without any labour theory of
          value. Critics say the chapter adds little to business practice. Defenders answer that Marx&apos;s interest is
          not in managing one firm but in how these gaps, added up across society, feed the money market and credit.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Work takes 9 weeks at 100 coins a week, and selling takes 3 weeks. How much extra money keeps the workshop running without a break?",
      options: ["100 coins", "300 coins", "900 coins"],
      answer: 1,
      why: "Three weeks of selling need three weeks of spending covered: 3 × 100 = 300 coins, a quarter of the 1,200.",
    },
    {
      q: "In week 13 the 900 coins come home, but only 600 are needed. What happens to the other 300?",
      options: ["They are lost", "They are set free, ready to carry the work through the next selling time", "They go to Sam as a bonus"],
      answer: 1,
      why: "Marx calls this capital released or set free: it takes over the role the additional capital played.",
    },
    {
      q: "Selling speeds up from 3 weeks to 2. Where does the money that is no longer needed usually go?",
      options: ["Under the boss's bed", "Into the money market, where it can be lent", "Back to the cotton farmers"],
      answer: 1,
      why: "Marx says money set free by turnover flows to the money market and forms one of the foundations of credit.",
    },
  ],

  remember: [
    "While goods are being sold, the workshop needs extra money to keep working.",
    "Additional capital ÷ total capital = circulation time ÷ turnover time.",
    "When money comes home before it is needed, part of it is released, or set free.",
    "Faster selling or cheaper materials set money free; slower selling ties more up.",
    "Released money flows to the money market and becomes a basis of credit.",
  ],

  terms: ["additional-capital", "released-capital"],

  source: (
    <p>
      Covers Volume II, Chapter 15 (&ldquo;Effect of Turnover Time on Magnitude of Advanced Capital&rdquo;). Volume II was
      assembled by Friedrich Engels from Marx&apos;s manuscripts; this chapter contains Engels&apos; long note on
      Marx&apos;s arithmetic. Marx&apos;s own numbers, in pounds (shown as coins): a 9-week working period at £100 a week
      with 3 weeks of circulation and £300 of additional capital; the 5 + 5 week case; 6 weeks of work with circulation
      cut from 3 weeks to 2, so £800 does the work of £900; prices halving so £450 replaces £900. The workshop scenes and
      Bea&apos;s bank belong to this site.
    </p>
  ),
};

export default chapter;
