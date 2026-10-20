import type { ChapterContent } from "@/components/ChapterTemplate";
import { CheaperWheatSameRent, SoilADropsOut } from "./ch42-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can wheat get cheaper and the landlords still collect as much rent?",

  story: (
    <>
      <p>
        Grandpa Ned and the other tenants have been pouring money into the good fields by the river. The harvests are so
        big now that the town has more wheat than it needs.
      </p>
      <p>
        Nobody bothers ploughing the stony field on the hill any more. Without it, wheat at the market gets much cheaper.
        Mia is thrilled: her flour costs half what it did.
      </p>
      <p>
        &ldquo;Bad news for the Landlord,&rdquo; says Sam. &ldquo;Cheaper wheat means less rent.&rdquo; But at the end of
        the year the Landlord is still smiling in his carriage. Tom the shopkeeper whispers: &ldquo;He&apos;s getting just
        as much as before.&rdquo;
      </p>
      <p>How can that be, if wheat now costs half as much?</p>
    </>
  ),

  guess: (
    <p>
      When the worst field stops being farmed, what happens to the price of wheat? And if farmers pour more capital into
      the best fields, could rent fall, stay the same, or even rise?
    </p>
  ),

  struggle: [<SoilADropsOut key="a" />],
  reveal: [<CheaperWheatSameRent key="b" />],

  eli5: "When the good fields grow enough, nobody farms the worst field any more, so wheat gets cheaper. Cheaper wheat makes rents smaller at first. But if farmers pour lots more money into the best fields, the landlords can end up with just as much rent as before.",

  grownUp: (
    <>
      <p>
        Chapter 42 is Marx&apos;s second case of differential rent II: a falling price of production. Additional capital
        on the better soils can raise output so much that the worst soil is no longer needed. Then a better soil becomes
        the <strong>regulating soil</strong> and the price falls.
      </p>
      <p>
        Starting from Table II (20 quarters at £3, rent £36), suppose 18 quarters meet demand. Soil A drops out; B, with
        its price of production of 30 shillings (£1½) a quarter, now regulates. Marx&apos;s Table IV: B pays no rent, C pays
        £3 and D £6, total £9, though output only fell from 20 to 18 quarters. A new differential rent I has formed, with B
        playing the part A used to play.
      </p>
      <p>
        But the outcome depends on how the extra capital is spread. In Table IVd far more capital goes into D (£12½,
        yielding 20 quarters). Total rent is back to £18, the same as in Table I, though wheat is half the price. Per acre,
        D&apos;s rent in grain and money is higher than ever. As a share of the product, rent has fallen: £18 was more than
        half of a £30 product, and is now less than half of a £45 one. Rent can rise, stay level or fall when prices fall;
        what decides it is the differences between the soils.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Many economists of Marx&apos;s day assumed rent could only rise if food got dearer, because ever worse land had to be farmed.
        Marx shows that rent per acre, and even total rent, can hold steady or grow while prices fall, if capital pours
        into the better land.
      </p>
      <p>Cheap food and high rents are not opposites. Both can come from the same flood of capital into agriculture.</p>
    </>
  ),

  critics: [
    {
      who: "The great depression in farming",
      point: (
        <p>
          From the 1870s cheap grain from America and Russia flooded into Europe, and British farm rents fell sharply for
          two decades. Critics note that falling prices hit landlords hard in practice. Defenders reply that this matches
          Marx&apos;s own point: what happens to rent depends on how capital and soils change, not on prices alone.
        </p>
      ),
    },
    {
      who: "Editors' corrections",
      point: (
        <p>
          The tables in this chapter come from unfinished manuscripts, and editors of later editions found slips in
          Marx&apos;s arithmetic. For example, the English text says the rate of surplus-profit falls &ldquo;to
          one-third&rdquo;, while an editor&apos;s note says the 1894 German edition reads &ldquo;one-half&rdquo;. Readers
          have to check the numbers rather than take them on trust.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "The town needs only 18 quarters, and soil A drops out. Which soil now sets the price of wheat?",
      options: ["Soil B", "Soil D", "No soil at all"],
      answer: 0,
      why: "B is now the worst soil in use, so its price of production, 30 shillings a quarter, regulates the market.",
    },
    {
      q: "In Marx's Table IV, what happens to total rent when A drops out?",
      options: ["It rises from £36 to £45", "It stays £36", "It falls from £36 to £9"],
      answer: 2,
      why: "At the lower price only C (£3) and D (£6) pay rent, so the total falls to £9.",
    },
    {
      q: "In Table IVd much more capital goes into soil D. Wheat is half the price of Table I. What is the total rent?",
      options: ["£9", "£18, the same as Table I", "£36"],
      answer: 1,
      why: "D's 20 quarters give 10 quarters of rent (£15), plus C's £3: £18, though it is now a smaller share of the harvest.",
    },
  ],

  remember: [
    "Extra capital on good land can make the worst land unnecessary.",
    "Then a better soil becomes the regulating soil, and the price falls.",
    "At first rents shrink: in Marx's table, from £36 to £9.",
    "But if capital pours into the best land, rent can climb back up, here to £18 at half the price.",
    "Cheaper food and steady rents can go together; the differences between soils decide.",
  ],

  terms: ["regulating-soil"],

  source: (
    <p>
      Covers Volume III, Chapter 42 (&ldquo;Differential Rent II. Second Case: Falling Price of Production&rdquo;). Volume
      III was assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; this site follows the
      English edition hosted on marxists.org, whose editors add notes where the 1894 German edition differs. Marx&apos;s
      own figures: Table II (20 quarters, rent £36); Table IV (A drops out, B regulates at £1½, rents £0, £3, £6, total
      £9, 18 quarters); Table IVd (D with £12½ of capital and 20 quarters, total rent £18, product £45). The farming
      depression of the 1870s in the critics section is general history, not from this chapter.
    </p>
  ),
};

export default chapter;
