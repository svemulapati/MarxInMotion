import type { ChapterContent } from "@/components/ChapterTemplate";
import { OwnersAndManagers, SharksAndASprout, ThreeJobsCreditDoes } from "./ch27-animations";

const chapter: ChapterContent = {
  bigQuestion: "Who owns a business when nobody who works there owns it?",

  story: (
    <>
      <p>
        Tiny Town wants a railway to the city. It will cost more coins than Mr. Moneybags could save in a lifetime. So Bea
        has an idea: sell the railway in little pieces.
      </p>
      <p>
        Mia buys a piece. So does Tom, and so does Bea herself. A man from the city is hired to run the trains, and a
        crowd of workers lay the track. A year later the first train puffs into town.
      </p>
      <p>
        At the opening party Sam looks around, puzzled. The people who own the railway have never touched it. The man who
        runs it doesn&apos;t own it. And the people who built it own nothing at all.
      </p>
      <p>So who is the boss here? And is this still the same kind of business as Mr. Moneybags&apos; workshop?</p>
    </>
  ),

  guess: (
    <p>
      Credit lets people use money that isn&apos;t theirs. What good things might that make possible? And what risks
      might come with it?
    </p>
  ),

  struggle: [<ThreeJobsCreditDoes key="a" />, <OwnersAndManagers key="b" />],
  reveal: [<SharksAndASprout key="c" />],

  eli5: "Borrowing lets businesses grow much bigger and faster than anyone's own savings would allow. Big companies end up owned by many people who never work there, and run by managers who don't own them. Marx thought this showed capitalism was already turning into something else, for better and for worse.",

  grownUp: (
    <>
      <p>
        This short chapter, which Engels says came almost straight from Marx&apos;s manuscript, sums up what the{" "}
        <strong>credit system</strong> does. First, it lets capital move to wherever profits are higher, which is how
        profit rates even out across branches. Second, it cuts the costs of circulation: money is saved because debts
        cancel, money moves faster, and paper replaces gold, while the phases of buying and selling speed up. The other
        side is that buying and selling can be kept further apart, which is a basis for <strong>speculation</strong>.
      </p>
      <p>
        Third, credit makes <strong>joint-stock companies</strong> possible. Production grows to a scale no single
        capital could reach. The working capitalist becomes a mere manager of other people&apos;s capital, and the owner
        becomes a mere money-capitalist whose profit arrives as something like interest. Marx calls this &ldquo;the
        abolition of capital as private property within the framework of capitalist production itself&rdquo;. It also
        breeds a new financial aristocracy of promoters, speculators and nominal directors.
      </p>
      <p>
        Fourth, credit gives the individual capitalist command over other people&apos;s capital, so the old excuses that
        capital comes from saving and abstinence lose their meaning. The stock exchange concentrates ownership, and the{" "}
        <strong>co-operative factories</strong> of workers show a new form growing inside the old. Both, Marx says, are
        transitional forms. Credit speeds up the growth of production and the world market, and it speeds up crises too.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Credit is capitalism&apos;s accelerator. It makes production more social than ever, with giant enterprises owned
        by thousands and run by employees, while the gains still go to private owners.
      </p>
      <p>
        Marx reads this as a sign of transition. In the big companies ownership has already come apart from work; in
        co-operatives, workers already run production themselves. He thought credit both speeds up progress and makes
        crashes more violent, which is why its great promoters were, in his phrase, a mixture of swindler and prophet.
      </p>
    </>
  ),

  critics: [
    {
      who: "Berle and Means",
      point: (
        <p>
          In <em>The Modern Corporation and Private Property</em> (1932), Adolf Berle and Gardiner Means also found
          ownership splitting from control in big companies. But they saw the rise of a managerial class, not a step
          toward workers&apos; ownership, and joint-stock companies have stayed the main form of big business for 150
          years since Marx wrote.
        </p>
      ),
    },
    {
      who: "The record of co-operatives",
      point: (
        <p>
          Worker co-operatives exist and some thrive, such as Mondragon in Spain, but they remain a small share of most
          economies. Critics say this shows they struggle to raise capital and grow; supporters reply that the rules of
          finance are built around investor-owned firms.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which of these is one of the jobs Marx says credit does?",
      options: [
        "Moving capital to where profits are higher",
        "Making every worker rich",
        "Stopping all crises",
      ],
      answer: 0,
      why: "Credit lets spare money flow to the branches with higher profits, which helps even out profit rates.",
    },
    {
      q: "In a joint-stock company, who usually runs the business day to day?",
      options: ["The shareholders", "A hired manager", "The customers"],
      answer: 1,
      why: "The owners hold shares and take dividends; a salaried manager does the running.",
    },
    {
      q: "What did Marx think stock companies and workers' co-operatives had in common?",
      options: [
        "Both were illegal",
        "Both were transitional forms pointing beyond capitalism",
        "Both were run by Bea",
      ],
      answer: 1,
      why: "Marx saw both as signs that production was becoming social, though one stayed capitalist and the other was run by workers.",
    },
  ],

  remember: [
    "Credit moves capital, saves money and speeds up the circuit.",
    "It also lets buying and selling drift apart, which feeds speculation.",
    "In joint-stock companies the owners don't work there and the manager doesn't own it.",
    "Marx saw big companies and workers' co-operatives as two different signs of change.",
    "Credit speeds up growth, and it speeds up crises too.",
  ],

  terms: ["joint-stock-company", "speculation", "co-operative-factory"],

  source: (
    <p>
      Covers Volume III, Chapter 27 (&ldquo;The Role of Credit in Capitalist Production&rdquo;), in the International Publishers edition on marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in 1894;
      Engels says this chapter could be taken &ldquo;almost completely from the original manuscript&rdquo;. The bracketed
      note on cartels and the United Alkali Trust (about £5 million of fixed capital and £1 million of floating capital)
      is Engels&apos; own addition. The railway company, the hat-makers&apos; rate and the spinners&apos; co-operative
      are this site&apos;s illustration.
    </p>
  ),
};

export default chapter;
