import type { ChapterContent } from "@/components/ChapterTemplate";
import { BossOrConductor, SameCoinsTwoNames } from "./ch23-animations";

const chapter: ChapterContent = {
  bigQuestion: "If the boss works hard running the mill, is his profit just his wages?",

  story: (
    <>
      <p>
        Mr. Moneybags has paid back Bea&apos;s loan, and now he runs the mill on his own money. One evening he sits at his
        desk and writes in his book: &ldquo;Interest on my money: 5 coins. My pay for all my hard work: 15 coins.&rdquo;
      </p>
      <p>
        Sam peers over his shoulder. &ldquo;Interest? But you didn&apos;t borrow anything this year. Who are you paying
        interest to?&rdquo; &ldquo;To myself,&rdquo; says Moneybags proudly. &ldquo;And the rest is my wage. I work harder
        than anybody here.&rdquo;
      </p>
      <p>Sam goes home puzzled. Can a boss pay himself interest? And is profit really just a big wage?</p>
    </>
  ),

  guess: (
    <p>
      Moneybags splits his profit into &ldquo;interest&rdquo; and &ldquo;my wage&rdquo;. Do you think that split is
      real, or a way of seeing things? Is running a mill the same kind of work as spinning?
    </p>
  ),

  struggle: [<SameCoinsTwoNames key="a" />],
  reveal: [<BossOrConductor key="b" />],

  eli5: "Once people lend money for interest, every boss sees his profit as two parts: interest for owning money, and the rest for running the business. That second part starts to look like a wage for hard work. Marx says organising work is a real job, but the profit really comes from the workers' unpaid hours.",

  grownUp: (
    <>
      <p>
        When an industrial capitalist borrows, the gross profit is divided between the lender (interest) and the user,
        whose share Marx calls <strong>profit of enterprise</strong>. At first this is only a split in amounts. Marx asks
        why it becomes a split in <em>kinds</em>, so that even a capitalist using his own money counts part of his
        profit as interest. The answer: once interest-bearing capital is widespread, all capital can bring in interest, so
        interest appears as the fruit of owning capital as such, and profit of enterprise as the fruit of using it.
      </p>
      <p>
        This hides the source. Interest seems to come from ownership alone; profit of enterprise seems to come from the
        capitalist&apos;s own work. He comes to see it as <strong>wages of superintendence</strong>, &ldquo;higher than a common
        labourer&apos;s&rdquo;, because the work is more complicated and because he pays them to himself.
      </p>
      <p>
        Marx agrees that supervision has a double nature. Any large co-operative work needs a co-ordinating will,
        &ldquo;much as that of an orchestra conductor&rdquo;, which is productive. But under capitalism supervision also
        arises from the antagonism between labourer and owner. Co-operative factories, where managers are paid by the
        workers, show the capitalist is redundant as a functionary in production; and as a class of trained managers
        grows, wages of management fall like other skilled wages.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Splitting profit into interest and profit of enterprise makes the boss look like a hard-working employee and the
        lender look like someone paid for owning a thing. Both images hide that the whole profit is surplus-value, made by
        the workers&apos; unpaid labour.
      </p>
      <p>
        The work of co-ordinating production is real, but it does not need an owner to do it. A conductor need not own
        the instruments.
      </p>
    </>
  ),

  critics: [
    {
      who: "Entrepreneurship",
      point: (
        <p>
          Joseph Schumpeter and Frank Knight argued that profit rewards something special: bringing in new methods and
          products, and bearing uncertainty that cannot be insured. On this view the entrepreneur&apos;s profit is not a
          disguised share of workers&apos; output but the reward for a distinct contribution.
        </p>
      ),
    },
    {
      who: "Co-operatives in practice",
      point: (
        <p>
          Worker co-operatives such as Mondragon in Spain show that firms can run without outside owners, as Marx says.
          But they remain a small share of most economies, and critics argue that raising capital and taking risks is
          harder without owners who stand to gain.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Moneybags uses only his own money. Why does he still count 5 coins as “interest”?",
      options: [
        "He owes Bea money",
        "He could have lent the money for interest, so he treats part of his profit as the reward for owning it",
        "The law makes him",
      ],
      answer: 1,
      why: "Once lending is common, every sum of capital can earn interest, so interest looks like the fruit of ownership itself.",
    },
    {
      q: "What does Marx compare useful co-ordinating work to?",
      options: ["A pear tree", "An orchestra conductor", "A miser's chest"],
      answer: 1,
      why: "Big shared work needs co-ordination, like an orchestra needs a conductor. That part of management is productive.",
    },
    {
      q: "What do co-operative factories show, according to Marx?",
      options: [
        "That workers can't manage anything",
        "That the owner is not needed to run production; a manager can be paid a wage",
        "That profit is always zero",
      ],
      answer: 1,
      why: "In co-operative factories the manager is paid by the workers, so the capitalist owner turns out to be redundant as a functionary.",
    },
  ],

  remember: [
    "Profit splits into interest (for owning capital) and profit of enterprise (for using it).",
    "Once lending is common, even bosses using their own money make that split.",
    "Profit of enterprise comes to look like a wage for management: wages of superintendence.",
    "Co-ordinating work is real, like a conductor's, but it doesn't need an owner to do it.",
  ],

  terms: ["profit-of-enterprise", "wages-of-superintendence"],

  source: (
    <p>
      Covers Volume III, Chapter 23 (&ldquo;Interest and Profit of Enterprise&rdquo;), checked against the
      International Publishers / Progress edition on marxists.org. Volume III was assembled by Engels from Marx&apos;s
      manuscripts and published in 1894. Marx&apos;s own points: the quantitative division becoming a qualitative one;
      wages of superintendence &ldquo;higher than a common labourer&apos;s&rdquo;; the double nature of supervision; the
      orchestra conductor; co-operative factories; the falling wages of management. The 100, 20, 5 and 15 coin figures
      reuse Marx&apos;s Chapter 21 example.
    </p>
  ),
};

export default chapter;
