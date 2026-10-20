import type { ChapterContent } from "@/components/ChapterTemplate";
import { BailiffToFarmer, TheLongLease } from "./ch29-animations";

const chapter: ChapterContent = {
  bigQuestion: "Where did the first bosses of the countryside come from?",

  story: (
    <>
      <p>
        Sam has one more question for Grandpa Ned. &ldquo;If the land was taken from people like Bess and Will, who ended
        up farming it? The Lord of the Manor never picked up a spade in his life.&rdquo;
      </p>
      <p>
        Ned laughs. &ldquo;My own family, partly. My great-great-great-grandfather Hob started out as the lord&apos;s
        bailiff. He was a serf himself, you know. He just looked after the lord&apos;s fields.&rdquo;
      </p>
      <p>
        &ldquo;Bit by bit, over two hundred years, Hob&apos;s family went from running the land for the lord to renting
        it with their own money and hiring men to work it. And then something odd happened in the 1500s that made the
        farmers rich almost overnight, while the lord and the farmhands got poorer.&rdquo;
      </p>
      <p>How can one person get richer while both the landlord and the workers get poorer?</p>
    </>
  ),

  guess: (
    <p>
      Hob signs a lease that fixes his rent for a very long time. Then, year after year, prices go up. Who do you think
      gains from that, and who loses?
    </p>
  ),

  struggle: [<BailiffToFarmer key="a" />],
  reveal: [<TheLongLease key="b" />],

  eli5: "Over many years, the men who ran farms for lords became farmers who rented the land and paid workers. When prices went up but their rent stayed the same, they got rich. Both the landlords and the farm workers lost out.",

  grownUp: (
    <>
      <p>
        Expropriating the peasants directly created only great landowners. So where did capitalists come from? In the
        countryside, Marx says, we can watch the <strong>capitalist farmer</strong> grow slowly over centuries. In
        England his first form is the bailiff, himself a serf. In the second half of the 14th century he is replaced by a
        farmer whom the landlord supplies with seed, cattle and implements. Soon he becomes a <strong>métayer</strong>,
        a half-farmer: he advances part of the stock, the landlord the rest, and they divide the product by contract.
        That form quickly disappears in England, giving way to the farmer proper, who makes his own capital grow by
        employing wage labourers and pays part of the surplus-product to the landlord as rent.
      </p>
      <p>
        The agricultural revolution from the last third of the 15th century enriched him as fast as it impoverished the
        country people. Taking over the common lands let him enlarge his herds almost for nothing. Then, in the 16th
        century, came the <strong>price revolution</strong>: the value of gold and silver, and so of money, kept falling.
        Leases often ran for 99 years at a rent fixed in the old money. Corn, wool and meat rose in price, swelling the
        farmer&apos;s takings, while the real value of his rent shrank and money wages lagged behind prices. Farmers
        thus grew rich &ldquo;at the expense both of their labourers and their landlords&rdquo;, and by the end of the
        16th century England had a class of wealthy capitalist farmers.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The first capitalists of the countryside were not lords and not rich investors from outside. They grew out of
        the people who managed farms, step by step, as more of the stock came into their own hands and they began to
        hire others for wages.
      </p>
      <p>
        Their sudden wealth in the 1500s came partly from luck: rising prices and long, fixed rents. But it came at a
        cost to someone else: the landlords lost part of their income, and the labourers lost part of their wages.
      </p>
    </>
  ),

  critics: [
    {
      who: "What caused the price rise?",
      point: (
        <p>
          Marx explains the 16th-century inflation by a fall in the value of precious metals, a view later linked by
          Earl J. Hamilton (1934) to American silver. Many historians now think population growth, which raised demand
          for food and land, mattered as much or more. The windfall to farmers may have had several causes.
        </p>
      ),
    },
    {
      who: "When the agricultural revolution happened",
      point: (
        <p>
          Historians such as Mark Overton (<em>Agricultural Revolution in England</em>, 1996) date the big rise in
          farm output to roughly 1750 to 1850, much later than the 16th century. They also stress new crops, rotations
          and better methods, so that tenant farmers&apos; gains came from improving the land as well as from fixed rents.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "What was the first form of the English farmer, according to Marx?",
      options: ["A rich merchant from town", "The bailiff, who was himself a serf", "A banker"],
      answer: 1,
      why: "The bailiff ran the lord's land for him. Over time his role grew into that of a farmer renting the land.",
    },
    {
      q: "Hob's rent is fixed for 99 years, and prices double. What happens to the landlord?",
      options: [
        "He gets twice as much",
        "He gets the same number of coins, but they buy only half as much",
        "He gets nothing at all",
      ],
      answer: 1,
      why: "The rent was set in the old money, so as money lost value, the landlord's real income fell.",
    },
    {
      q: "Why did the farmhands lose out when prices rose?",
      options: [
        "Their wages rose more slowly than the prices of the things they bought",
        "They were not allowed to buy corn",
        "Their wages were paid in corn",
      ],
      answer: 0,
      why: "Marx says money wages rose, but not in proportion to the fall in the value of money.",
    },
  ],

  remember: [
    "The capitalist farmer grew slowly out of the lord's bailiff, over about two centuries.",
    "Bailiff, then farmer with the lord's stock, then half-farmer, then farmer proper paying rent.",
    "In the 1500s money lost value and prices rose, but long leases kept rents fixed.",
    "Farmers grew rich at the expense of both their labourers and their landlords.",
    "Grandpa Ned is a tenant farmer of this kind: he rents land and pays the landlord.",
  ],

  terms: ["capitalist-farmer", "metayer", "price-revolution"],

  source: (
    <p>
      Covers Volume I, Chapter 29 (&ldquo;The Genesis of the Capitalist Farmer&rdquo;). Marx&apos;s own points: the
      bailiff as a serf; the farmer supplied with seed, cattle and implements in the second half of the 14th century;
      the métayer; the farmer proper paying rent; leases often of 99 years; the fall in the value of precious metals; the
      quoted phrase on labourers and landlords. The coin figures in animation 29.2 are made up to show the idea, and the
      dates on the staircase are approximate. Hob is this site&apos;s invention.
    </p>
  ),
};

export default chapter;
