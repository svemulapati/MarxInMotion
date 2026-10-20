import type { ChapterContent } from "@/components/ChapterTemplate";
import { DownhillOrUphill, FourFieldsOnePrice, NearAndFar } from "./ch39-animations";

const chapter: ChapterContent = {
  bigQuestion: "Two farmers do the same work with the same money. Why does one pay rent and the other pay none?",

  story: (
    <>
      <p>
        Grandpa Ned rents a field of dark, rich soil down by the river. His neighbour Pete rents a stony field up on the
        hill. Each of them spends exactly the same on seed, tools and farmhands&apos; wages.
      </p>
      <p>
        At harvest, Ned&apos;s field fills four carts. Pete&apos;s fills one. At the market both sell their wheat for the
        very same price, because a sack of wheat is a sack of wheat.
      </p>
      <p>
        That evening the Landlord comes for his rent. From Pete he asks nothing extra. From Ned he takes a whole heap of
        coins. &ldquo;That&apos;s not fair!&rdquo; says Ned. &ldquo;I worked no less hard than Pete!&rdquo;
      </p>
      <p>Why does the Landlord charge Ned so much more? And why does Pete&apos;s stony field get off free?</p>
    </>
  ),

  guess: (
    <p>
      If all wheat sells at one price, which field do you think decides what that price is: the richest one or the
      poorest one that is still being farmed? And what happens to the extra on the richer fields?
    </p>
  ),

  struggle: [<FourFieldsOnePrice key="a" />, <DownhillOrUphill key="b" />],
  reveal: [<NearAndFar key="c" />],

  eli5: "All wheat sells at one price, and that price is set by the poorest field anyone still bothers to farm. Richer fields grow more for the same work, so they have money left over. The landowners take that leftover as rent.",

  grownUp: (
    <>
      <p>
        <strong>Differential rent I</strong> comes from equal capitals giving unequal results on equal areas of land. Its
        two causes are fertility and location, and they may pull in opposite directions.
      </p>
      <p>
        Marx&apos;s Table I: four kinds of soil, A to D. On each, a capital of 50 shillings is laid out. A yields 1 quarter
        of wheat, B 2, C 3 and D 4. The price of a quarter is 60 shillings, which is the price of production on the{" "}
        <strong>worst soil</strong> in cultivation, A: its 50 shillings of capital plus an average profit of 10 (20%). So A
        pays no differential rent. B, C and D sell their wheat at the same 60 shillings and make surplus-profits of 60, 120
        and 180 shillings, which become rent: 6 quarters, or 360 shillings, in all.
      </p>
      <p>
        Ricardo had assumed that cultivation always spreads from better land to worse. Marx shows the sequence can run
        downward (the price climbing from 15 to 20, 30 and finally 60 shillings as C, B and A are added), upward, or in
        zigzags. Rent depends on the differences between soils, not on a law that farming must get worse. Where the
        better soils fetch the extra, Marx says the market price is a &ldquo;false social value&rdquo;: society pays for
        its wheat as if all of it came from the worst soil.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The market price of farm produce is set by the conditions of production on the worst land that still has to be
        farmed to meet demand. Every better piece of land earns a surplus-profit over that, and landownership turns the
        surplus-profit into rent.
      </p>
      <p>
        So differential rent does not make food dearer. It is the result of the price, not its cause. The landlord simply
        pockets the gap between the best and the worst.
      </p>
    </>
  ),

  critics: [
    {
      who: "Marginal productivity theory",
      point: (
        <p>
          Later economists, such as John Bates Clark around 1900, generalised the Ricardian idea. Land, labour and capital
          are each paid their marginal product, and rent is simply what land contributes at the margin. On this view rent
          is a fair price for a productive input, not a slice of workers&apos; surplus-value.
        </p>
      ),
    },
    {
      who: "Historians of farming",
      point: (
        <p>
          Some historians note that real rents were set by bargaining, custom and long leases as much as by fertility, and
          that the neat sequence of soils rarely appears in records. Marx would agree that real cases are messier: he says
          his model isolates differential rent from other influences on purpose.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which soil sets the price of wheat in Marx's Table I?",
      options: ["The richest soil, D", "The worst soil still farmed, A", "An average of all four"],
      answer: 1,
      why: "The price must cover the costs and average profit on the worst land that is needed, so A sets it at 60 shillings.",
    },
    {
      q: "On soil C, 50 shillings grow 3 quarters that sell at 60 shillings each. How much rent does C pay?",
      options: ["60 shillings", "120 shillings", "180 shillings"],
      answer: 1,
      why: "180 in, minus the 50 capital and 10 profit, leaves 120 shillings of surplus-profit, which becomes rent.",
    },
    {
      q: "What did Marx say about Ricardo's idea that farming always moves from better land to worse?",
      options: [
        "He agreed completely",
        "He said the order can go either way, and rent still comes from the differences",
        "He said there is no such thing as rent",
      ],
      answer: 1,
      why: "Marx shows the sequence can be descending, ascending or zigzag. What matters is the difference between soils.",
    },
  ],

  remember: [
    "Equal money on unequal land gives unequal harvests.",
    "Wheat sells at one price, set by the worst land that still has to be farmed.",
    "Better land earns surplus-profit, and the landowner takes it as rent.",
    "The worst land in use pays no differential rent.",
    "Fertility and location are the two causes, and they can pull in opposite directions.",
  ],

  terms: ["differential-rent-i", "worst-soil"],

  source: (
    <p>
      Covers Volume III, Chapter 39 (&ldquo;First Form of Differential Rent (Differential Rent I)&rdquo;). Volume III was
      assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; this site follows the English
      edition hosted on marxists.org. Marx&apos;s own figures: Table I (soils A to D, 50 shillings each, 1 to 4 quarters,
      60 shillings a quarter, rents of 0, 60, 120 and 180 shillings, total 6 quarters or 360 shillings); the descending
      sequence with prices of 15, 20, 30 and 60 shillings and D&apos;s rent per quarter of 5, 15 and 45 shillings. The
      chapter also covers further tables (II and III) and the &ldquo;false social value&rdquo;; the Near Field and Far
      Field numbers in animation 39.3 are made up.
    </p>
  ),
};

export default chapter;
