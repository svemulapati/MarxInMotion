import type { ChapterContent } from "@/components/ChapterTemplate";
import { TicketsOrARoundOfWork, TwoThousandMillionsGoRound } from "./ch06-animations";

const chapter: ChapterContent = {
  bigQuestion: "When money comes back to you, does that always mean something new was made?",

  story: (
    <>
      <p>
        Grandpa Ned pays the Landlord his rent in coins every autumn. And every winter, the Landlord sends his cook to buy
        Ned&apos;s wheat, using, as it happens, much the same coins.
      </p>
      <p>
        &ldquo;Funny,&rdquo; says Ned. &ldquo;The money goes out and comes back. Mr. Moneybags&apos; money goes out and
        comes back too. Are we doing the same thing?&rdquo;
      </p>
      <p>
        On the Old Thinkers&apos; Shelf, Quesnay&apos;s famous chart is pinned up again. In Volume II we met it as a whole.
        This time Marx follows each coin, and asks Ned&apos;s question.
      </p>
    </>
  ),

  guess: (
    <p>
      Ned&apos;s rent money comes back when the Landlord buys his wheat. Mr. Moneybags&apos; money comes back when he sells
      his yarn. Is there any real difference between those two homecomings?
    </p>
  ),

  struggle: [<TwoThousandMillionsGoRound key="a" />],
  reveal: [<TicketsOrARoundOfWork key="b" />],

  eli5: "Money can come home in two ways. Sometimes it is like a ticket you hand out and then cash back, and nothing new gets made. Other times it comes home because things were really made again.",

  grownUp: (
    <>
      <p>
        This chapter is a digression in Marx&apos;s notebooks on François Quesnay&apos;s{" "}
        <em>Tableau Économique</em> (1758). Marx sets out Quesnay&apos;s figures: a gross product of 5,000 millions
        (livres); farmers who pay 2,000 millions as rent; landlords who spend 1,000 millions on food from the farmers
        and 1,000 millions on manufactures from the artisans, Quesnay&apos;s <strong>sterile class</strong>; and artisans
        who spend that 1,000 millions on food from the farmers. The 2,000 millions end where they began.
      </p>
      <p>
        Marx then draws a distinction. When the landlord&apos;s money flows back to the farmer, the return &ldquo;does not
        express reproduction&rdquo;. It is as if the farmer had given the landlord tokens or tickets for his product and
        then redeemed them; if rent were paid in kind, no money would move at all. By contrast, when a producer lays out
        £100 (£80 of materials and £20 to live on while working), makes a product worth £100 and sells it, the return of
        his £100 expresses continuous reproduction: goods were really consumed and made anew. Taxes, Marx adds, are a case
        of the first kind.
      </p>
      <p>
        He also uses the chapter to mock the idea that profit is a reward for &ldquo;advancing&rdquo; wages, since the
        capitalist in fact pays for labour only after he has used it. And he ends by calling the Tableau, for its time,
        &ldquo;an extremely brilliant conception, incontestably the most brilliant&rdquo; political economy had produced.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Money moving in a circle can hide two very different things. Sometimes it only settles a claim, as rent and taxes
        do: the same coins go out and come back, and no new wealth is made by the trip. Sometimes it marks a real cycle of
        production. Quesnay&apos;s great idea was to draw a whole economy as one cycle of reproduction, with money as just
        one phase of it.
      </p>
    </>
  ),

  critics: [
    {
      who: "Economists on Quesnay",
      point: (
        <p>
          Later economists, including Wassily Leontief, who built modern input-output tables, also saw the Tableau as a
          forerunner of their work, so Marx&apos;s high praise is widely shared. Many historians of thought, though, think
          Marx read more into Quesnay&apos;s zigzag than Quesnay meant, and that the Physiocrats&apos; belief that only
          farming makes a surplus weakens the scheme more than Marx allows.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Quesnay's numbers, the farmers pay 2,000 millions of rent. How much of it is back with them at the end?",
      options: ["None", "1,000 millions", "All 2,000 millions"],
      answer: 2,
      why: "1,000 comes back when the landlords buy food, and 1,000 more when the artisans buy food. All 2,000 are home again.",
    },
    {
      q: "Why does Marx say rent coming back to the farmer is like cashing in tickets?",
      options: [
        "Because the landlord buys the farmer's corn with money the farmer gave him",
        "Because the farmer printed paper money",
        "Because tickets are cheaper than coins",
      ],
      answer: 0,
      why: "The landlord pays the farmer with the farmer's own rent money. Nothing new is made in that round trip.",
    },
    {
      q: "Who did Quesnay call the sterile class?",
      options: ["The landlords", "The farmers", "The artisans and manufacturers"],
      answer: 2,
      why: "Quesnay thought only farming produced a surplus, so he called craftsmen and manufacturers sterile.",
    },
  ],

  remember: [
    "In Quesnay's Tableau, 2,000 millions of rent go round and all of it comes back to the farmers.",
    "Marx says money coming home can be just tickets being cashed, as with rent and taxes.",
    "Or it can come home because things were really used up and made again: that is reproduction.",
    "Marx called the Tableau the most brilliant idea political economy had produced up to its time.",
  ],

  terms: ["productive-class"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Chapter 6 (&ldquo;Quesnay&apos;s Tableau Économique (Digression)&rdquo;),
      Progress Publishers edition on marxists.org. The 5,000, 2,000 and 1,000 millions, the tickets, the £80 + £20 = £100
      producer and the taxes are all Marx&apos;s own. Volume II, Chapter 19 on this site introduces the Tableau itself.
      Marx wrote these notebooks in 1861 to 1863; Karl Kautsky first published them (1905 to 1910).
    </p>
  ),
};

export default chapter;
