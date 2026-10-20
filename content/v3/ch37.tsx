import type { ChapterContent } from "@/components/ChapterTemplate";
import { ThreePeopleOneField, WhoKeepsTheDrains } from "./ch37-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does Grandpa Ned pay money just to be allowed to farm a field?",

  story: (
    <>
      <p>
        Grandpa Ned is a farmer, but he does not own a single field. The fields round Tiny Town belong to the Landlord, who
        lives far away in the city and visits once a year in a shiny carriage.
      </p>
      <p>
        Every year Ned pays the Landlord a heap of coins. Ned buys the seed. Ned pays the farmhands. Ned mends the fences.
        The Landlord does not lift a finger, and still the coins arrive at his door.
      </p>
      <p>
        Sam watches the Landlord&apos;s carriage roll away. &ldquo;What is he being paid for?&rdquo; he asks. Ned scratches
        his head. &ldquo;For the land, I suppose. But nobody made the land.&rdquo;
      </p>
      <p>Volume III has already shared the town&apos;s surplus between bosses, shopkeepers and bankers. Now there is one more hand reaching for a slice.</p>
    </>
  ),

  guess: (
    <p>
      Nobody worked to make the field, so it has no value of its own. Where do you think the Landlord&apos;s coins come
      from? From the soil? From Ned&apos;s pocket? Or from somewhere else?
    </p>
  ),

  struggle: [<ThreePeopleOneField key="a" />],
  reveal: [<WhoKeepsTheDrains key="b" />],

  eli5: "The Landlord owns the field, so Ned has to pay him to use it. That payment is called rent. It comes out of the extra the farmhands make, just like the boss's profit.",

  grownUp: (
    <>
      <p>
        Part VI of Volume III turns to <strong>ground-rent</strong>: the payment a capitalist farmer makes to a landowner
        for the right to use land. Marx studies it in the shape it takes in capitalist England. The land is owned by a
        landlord, farmed by a capitalist tenant who brings the capital, and worked by wage-labourers. Here all three
        classes, wage-labourers, industrial capitalists and landowners, stand side by side.
      </p>
      <p>
        Under capitalism <strong>landed property</strong> sheds its old feudal duties and becomes a purely economic claim.
        A landowner, Marx says, could spend his whole life in Constantinople while his estates lay in Scotland. Rent is
        the form in which owning land is &ldquo;realised economically&rdquo;.
      </p>
      <p>
        Real rent payments mix in other things. When a tenant drains or manures the land, that capital sunk in the soil,
        which Marx calls <strong>terre-capital</strong>, belongs to fixed capital. Interest on it can become part of the
        rent: at the end of the lease the landlord raises the rent, and so pockets the tenant&apos;s improvements. Building
        leases in England, often for 99 years, worked the same way. Rent proper is something else: a slice of
        surplus-value. And the &ldquo;price&rdquo; of land is just rent capitalised at the rate of interest. A rent of
        £200 a year is &ldquo;worth&rdquo; £4,000 when interest is 5%, and £5,000 when it falls to 4%.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Land is not made by labour, so it has no value. Rent is not paid for something the landowner produces. It is a
        share of the surplus-value created by wage-labourers, which landownership lets its holder claim, because he can
        shut others out of a piece of the planet.
      </p>
      <p>
        The next chapters ask exactly how a slice of surplus-value gets turned into rent, starting with the case where one
        piece of land is simply better than another.
      </p>
    </>
  ),

  critics: [
    {
      who: "Henry George",
      point: (
        <p>
          The American writer Henry George (<em>Progress and Poverty</em>, 1879) agreed that landowners collect income
          they did not earn. But he drew a different conclusion: tax land values heavily and leave capital and wages alone.
          Marx thought this missed the main point, which for him was the profit taken from wage-labour.
        </p>
      ),
    },
    {
      who: "Mainstream economics",
      point: (
        <p>
          Most economists treat land as one input among others and rent as its market price, set by supply and demand like
          any other. On this view a landowner is paid because the land is useful and scarce, not because rent is carved out
          of the workers&apos; surplus.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Marx's picture of capitalist farming, who brings the money for seed, tools and wages?",
      options: ["The Landlord", "The tenant farmer, like Ned", "The farmhands"],
      answer: 1,
      why: "The tenant is a capitalist. He advances the capital and pays the landowner rent for the use of the land.",
    },
    {
      q: "Ned digs drains in a field he rents. What often happens when his lease runs out?",
      options: [
        "The Landlord pays him back in full",
        "The Landlord raises the rent, so he earns from Ned's drains",
        "The drains are dug up again",
      ],
      answer: 1,
      why: "The improvements stay in the land, and the land belongs to the Landlord, who charges for them in the new rent.",
    },
    {
      q: "A field brings its owner £200 rent a year, and interest is 5%. What will it sell for?",
      options: ["£200", "£1,000", "£4,000"],
      answer: 2,
      why: "£200 is 5% of £4,000. The price of land is just the rent turned into a lump sum at the going rate of interest.",
    },
  ],

  remember: [
    "In capitalist farming three classes meet: the landowner, the capitalist tenant and the wage-labourers.",
    "Rent is what the tenant pays the landowner for the right to use the land.",
    "Capital sunk into land (drains, manure) ends up earning rent for the landowner when the lease runs out.",
    "Land has no value of its own; its price is its rent turned into a lump sum.",
    "Rent is a slice of surplus-value, the same pie that profit and interest come from.",
  ],

  terms: ["ground-rent", "landed-property", "terre-capital"],

  source: (
    <p>
      Covers Volume III, Chapter 37 (&ldquo;Introduction&rdquo;) of Part VI, &ldquo;Transformation of Surplus-Profit into
      Ground-Rent&rdquo;. Volume III was assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894;
      this site follows the English edition hosted on marxists.org (Institute of Marxism-Leninism, 1959). Marx&apos;s own
      points used here: the three classes; the landowner in Constantinople with estates in Scotland;
      &ldquo;terre-capital&rdquo;; the tenant&apos;s improvements passing to the landlord; 99-year building leases;
      James Anderson; rent of £200 capitalised at 5% (£4,000) and 4% (£5,000). The drains, the lease timeline and
      the bar lengths in the animations are this site&apos;s illustrations.
    </p>
  ),
};

export default chapter;
