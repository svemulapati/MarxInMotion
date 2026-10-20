import type { ChapterContent } from "@/components/ChapterTemplate";
import { FasterHandsSmallerRates, PaidBySpool, TheMiddlemansCut } from "./ch21-animations";

const chapter: ChapterContent = {
  bigQuestion: "If Sam is paid for every spool he makes, is he finally paid for everything he makes?",

  story: (
    <>
      <p>
        Mr. Moneybags has another new notice: &ldquo;No more pay by the hour. From now on, 1&frac12; pennies for every
        spool of yarn.&rdquo; Sam is delighted. &ldquo;Now I&apos;m paid for what I make! The faster I go, the more I
        earn. It&apos;s almost like being my own boss.&rdquo;
      </p>
      <p>
        Ava no longer works in the carriage workshop. She sews waistcoats at home now, by candlelight. A man called Mr.
        Grabb brings her the cloth from Mr. Moneybags&apos; shop and pays her for each waistcoat she finishes.
      </p>
      <p>
        Mia isn&apos;t so sure. &ldquo;Paid for each piece sounds like freedom,&rdquo; she says. &ldquo;So why is Ava
        still sewing at midnight?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      If Sam spins faster and earns more, who gains in the end? And when everyone in the workshop gets faster, what do
      you think happens to the pay for each spool?
    </p>
  ),

  struggle: [<PaidBySpool key="a" />],
  reveal: [<TheMiddlemansCut key="b" />, <FasterHandsSmallerRates key="c" />],

  eli5: "Being paid per spool feels like being paid for everything you make, but half of each spool is still unpaid. It also makes workers rush, check their own work and sometimes share their pay with a middleman. When everyone gets faster, the pay for each spool is simply cut.",

  grownUp: (
    <>
      <p>
        Marx calls <strong>piece-wages</strong> &ldquo;nothing else than a converted form&rdquo; of time-wages. With his
        own numbers: a worker makes 24 pieces in 12 hours, each piece adds 3d. of new value, and the worker is paid
        1&frac12;d. a piece, which makes 3s. for the day. Half of every piece is paid and half is not, exactly as half
        of every hour was before. The proof that the form changes nothing essential is that both forms exist side by
        side, even in the same trade and the same city.
      </p>
      <p>
        But the form suits the employer. Quality is checked by the wage itself: a piece below average is not paid in
        full. It gives an exact measure of intensity, so supervision becomes largely unnecessary. It makes it easy to
        put middlemen between capital and worker, whose gain &ldquo;comes entirely from the difference&rdquo; between
        what the capitalist pays and what reaches the worker. In England this was called the{" "}
        <strong>sweating system</strong>. Or the employer pays a head worker by the piece, and the head worker hires
        and pays his own helpers.
      </p>
      <p>
        Each worker now has a personal interest in working harder and longer, which lets the employer raise the normal
        intensity of labour. Individual pay rises above the average while the average itself is pushed down. When
        productivity doubles, the piece rate halves: 48 pieces at &frac34;d. instead of 24 at 1&frac12;d., still 3s.
        That is why Marx concludes that piece-wages are the form of wages most in harmony with capitalist production.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Piece pay does not pay for the product. It measures the worker&apos;s time by the amount of product, and the
        unpaid share stays exactly where it was. What changes is that workers drive themselves, check their own quality,
        and compete with each other, which is why Marx thinks it is the wage-form best suited to capitalism.
      </p>
      <p>
        He also notes that piece rates lead to constant battles, because workers who believe they are paid for their
        product resent rate cuts that are not matched by lower selling prices.
      </p>
    </>
  ),

  critics: [
    {
      who: "Incentive pay can help both sides",
      point: (
        <p>
          The economist Edward Lazear studied a car-glass company that moved its windscreen fitters from hourly pay to
          piece rates in the 1990s. Output per worker rose sharply and average pay rose too. On this view piece rates
          reward effort and skill, and the gains can be shared rather than simply taken by the employer.
        </p>
      ),
    },
    {
      who: "Rarer than Marx expected",
      point: (
        <p>
          Most jobs today are paid by time or by salary, partly because quality and teamwork are hard to measure piece by
          piece. That sits awkwardly with the idea that piece-wages are the natural form for capitalism, though apps that
          pay per delivery or per ride have brought piece pay back, and the debates about them often echo Marx.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam spins 24 spools at 1½ pennies each. How much does he earn?",
      options: ["24 pennies", "36 pennies", "72 pennies"],
      answer: 1,
      why: "24 × 1½ = 36 pennies, which is 3 coins: his old day's pay in a new form.",
    },
    {
      q: "Mr. Moneybags pays 6 pennies a waistcoat, and Mr. Grabb pays Ava 4. Where does Mr. Grabb's money come from?",
      options: ["The gap between the two prices", "Rent that Ava pays him", "Tips from customers"],
      answer: 0,
      why: "The middleman's whole gain is the difference between what the boss pays and what reaches the worker.",
    },
    {
      q: "A new machine doubles Sam's output from 24 to 48 spools a day. What happens to the rate per spool?",
      options: ["It doubles to 3 pennies", "It stays at 1½ pennies", "It halves to ¾ of a penny"],
      answer: 2,
      why: "Each spool now takes half as long, so the rate is halved: 48 × ¾ = 36 pennies, the same day's pay.",
    },
  ],

  remember: [
    "Piece-wages are time-wages in disguise: half of each spool is still unpaid.",
    "Paying by the piece checks speed and quality for the boss.",
    "Middlemen live on the gap between what the boss pays and what the worker gets: the sweating system.",
    "Workers push themselves, and the faster pace soon becomes the new normal.",
    "When productivity rises, the rate per piece is cut.",
  ],

  terms: ["piece-wages", "sweating-system"],

  source: (
    <p>
      Covers Volume I, Chapter 21 (&ldquo;Piece-Wages&rdquo;). Marx&apos;s own: 24 pieces in 12 hours, 3d. of value
      and 1&frac12;d. of wages a piece; both forms side by side (London and country compositors); the waistcoat reckoned
      as &ldquo;an hour&rdquo; at 6d. in London tailoring; the middleman and the &ldquo;sweating system&rdquo;; the head
      worker who hires his own helpers; the 1860 Coventry ribbon-weavers&apos; strike; 48 pieces at &frac34;d. when
      productivity doubles; &ldquo;most in harmony with the capitalist mode of production&rdquo;. Mr. Grabb, Ava&apos;s 4
      pennies and the 28-spool step belong to this site.
    </p>
  ),
};

export default chapter;
