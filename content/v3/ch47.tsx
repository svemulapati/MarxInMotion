import type { ChapterContent } from "@/components/ChapterTemplate";
import { HalvesAndSmallPlots, ThreeOldWays, TwoRoads } from "./ch47-animations";

const chapter: ChapterContent = {
  bigQuestion: "How did paying for land turn into the rent Grandpa Ned pays today?",

  story: (
    <>
      <p>
        One rainy evening Grandpa Ned opens an old wooden chest in his barn. Inside are papers going back hundreds of years:
        the story of his family and the land.
      </p>
      <p>
        The oldest page is a list of days: &ldquo;three days on our strip, three days on the lord&apos;s field.&rdquo; A
        later one lists sacks of grain sent up to the manor. Later still come receipts for coins. And the newest is a
        printed lease, signed by Ned&apos;s grandfather, with a rent in pounds.
      </p>
      <p>
        &ldquo;Funny,&rdquo; says Ned. &ldquo;My family always paid the owner of the land. But the way we paid kept
        changing.&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      A peasant who works three days a week for the lord, one who hands over sacks of grain, and Ned, who pays rent in
      coins out of his profits. Which of them do you think is giving away the biggest share of what they produce?
    </p>
  ),

  struggle: [<ThreeOldWays key="a" />, <TwoRoads key="b" />],
  reveal: [<HalvesAndSmallPlots key="c" />],

  eli5: "Long ago peasants paid for land with days of work, then with sacks of grain, then with coins. Later some peasants became owners of tiny farms, and others became farmers who hire workers and pay rent out of their profits. Only in that last kind is rent the extra left over after the farmer's profit.",

  grownUp: (
    <>
      <p>
        Marx ends his study of ground-rent by tracing where capitalist rent came from. In the earliest form,{" "}
        <strong>labour rent</strong>, the peasant works his own land with his own tools for part of the week and the
        lord&apos;s estate for the rest. Rent and surplus-labour are identical and visible, and the lord can only extract
        it by non-economic pressure: personal dependence and bondage.
      </p>
      <p>
        In <strong>rent in kind</strong> the peasant hands over a surplus product instead, driven &ldquo;through legal
        enactment rather than the whip&rdquo;. In <strong>money rent</strong> he hands over its price, which presupposes
        trade, towns and money circulation. Money rent turns custom into contract and leads two ways: to{" "}
        <strong>peasant proprietorship</strong>, or to rent paid by a capitalist tenant farmer. Better-off peasants who
        hire day-labourers become a &ldquo;nursery school&rdquo; for capitalist tenants, helped in 16th-century England by
        falling money values under long leases. Only then is rent an excess over average profit rather than the whole
        surplus.
      </p>
      <p>
        Two in-between forms remain. In the <strong>métayer system</strong> (share-cropping) landlord and farmer each supply
        part of the working capital and split the product. The small peasant owner pays no rent but farms down to the wage
        he pays himself, often borrowing on mortgage. Marx thinks this form was undone by the loss of home industry and
        common land, soil exhaustion and competition from big farms.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Rent is not one timeless thing. Under feudalism it was the main way a lord took the surplus from those who worked
        the land, by force and custom. Under capitalism, the farmer takes the surplus from his workers first, and the
        landlord gets only the part left above normal profit.
      </p>
      <p>
        Small peasant farming gives personal independence, but Marx argues it cannot use science, machines or teamwork on a
        large scale, and that it is squeezed by mortgages, taxes and competition.
      </p>
    </>
  ),

  critics: [
    {
      who: "The family farm survived",
      point: (
        <p>
          Marx expected small farms to give way. The Russian economist Alexander Chayanov argued in the 1920s that peasant
          households follow their own logic, balancing work against family needs, and can last a long time. In many
          countries family-run farms, now highly mechanised, still produce most of the food.
        </p>
      ),
    },
    {
      who: "A neat sequence?",
      point: (
        <p>
          Historians point out that labour rent, rent in kind and money rent often existed side by side, and that the move
          from one to another went backwards as well as forwards. Marx himself mentions relapses under the Roman Empire and
          survivals in pre-revolutionary France, so he did not claim the steps were tidy.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "A peasant works three days on his own strip and three days on the lord's field for nothing. What kind of rent is that?",
      options: ["Money rent", "Labour rent", "Capitalist rent"],
      answer: 1,
      why: "He pays in days of work. Here the unpaid surplus-labour is visible as whole days.",
    },
    {
      q: "Under capitalist farming, what is rent?",
      options: [
        "The whole surplus the workers make",
        "The part left over above the farmer's normal profit",
        "A share of the harvest split in half",
      ],
      answer: 1,
      why: "The capitalist farmer takes the surplus first and expects average profit; rent is only the excess above that.",
    },
    {
      q: "Why does Marx say grain from small peasant plots can be cheap?",
      options: [
        "Because small farms are the most productive",
        "Because the peasants keep farming even when they earn a very low wage",
        "Because the government pays for it",
      ],
      answer: 1,
      why: "He calls the low price a result of the producers' poverty, not of their labour productivity.",
    },
  ],

  remember: [
    "Feudal rent came in three forms: days of work, products, then money.",
    "In those forms, rent was the whole of the peasant's surplus.",
    "Money rent led either to peasant ownership or to capitalist tenant farmers like Ned.",
    "Capitalist rent is only the excess above the farmer's normal profit.",
    "Share-cropping and small peasant plots sit in between.",
  ],

  terms: ["labour-rent", "rent-in-kind", "money-rent", "peasant-proprietorship"],

  source: (
    <p>
      Covers Volume III, Chapter 47 (&ldquo;Genesis of Capitalist Ground-Rent&rdquo;), sections I to V: introductory
      remarks, labour rent, rent in kind, money rent, and métayage and peasant proprietorship. Volume III was assembled by
      Friedrich Engels from Marx&apos;s manuscripts and published in 1894. The phrases &ldquo;through legal enactment
      rather than the whip&rdquo;, the &ldquo;nursery school for capitalist tenants&rdquo;, the 16th-century depreciation
      of money under long leases, and the low grain price as &ldquo;a result of the producers&apos; poverty&rdquo; are
      Marx&apos;s. The three-day week, the chest of papers and the drawings are this site&apos;s illustrations; Hob comes
      from Volume I, Chapter 29. Checked against the International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
