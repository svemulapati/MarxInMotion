import type { ChapterContent } from "@/components/ChapterTemplate";
import { FourFieldsOrOne, WhoseIsTheExtra } from "./ch40-animations";

const chapter: ChapterContent = {
  bigQuestion: "What happens to rent when a farmer spends more on the same field instead of renting a new one?",

  story: (
    <>
      <p>
        Grandpa Ned would like to grow more wheat. But every field round Tiny Town is already rented out. There is no
        new land to be had.
      </p>
      <p>
        So he does the next best thing. He spreads extra manure, ploughs twice, buys a better seed drill and hires one
        more farmhand. The same field, more money poured into it. And it works: next harvest, the carts are fuller.
      </p>
      <p>
        Ned is delighted, until he remembers his lease. It ends in three years. Mia asks him: &ldquo;When the Landlord
        sees your fat harvests, what do you think the new rent will be?&rdquo;
      </p>
      <p>Who will end up with the extra that Ned&apos;s extra spending brought in?</p>
    </>
  ),

  guess: (
    <p>
      Is putting four doses of money into one field any different from putting one dose into each of four fields? And
      while Ned&apos;s lease still runs, who do you think keeps the extra harvest?
    </p>
  ),

  struggle: [<FourFieldsOrOne key="a" />],
  reveal: [<WhoseIsTheExtra key="b" />],

  eli5: "A farmer can grow more by spending more money on the same field. Better results on the same land make extra money, just like a better field does. Until the lease ends the farmer keeps it, and after that the landowner takes it as rent.",

  grownUp: (
    <>
      <p>
        <strong>Differential rent II</strong> arises when capitals of different productivity are invested one after
        another in the same land, instead of side by side on different plots. For the formation of surplus-profit it makes
        no difference. Marx&apos;s example: £10 of capital laid out in four portions of £2½, with a price of production of
        £3 for each. Whether they go into four acres of soils A to D, or one after another into a single acre, if they
        yield 1, 2, 3 and 4 quarters, the surplus-profits are the same: £0, £3, £6 and £9.
      </p>
      <p>
        The difference lies in how the surplus-profit turns into rent. Rent is fixed when land is leased. After that, the
        surplus-profit from new investments flows to the tenant for as long as the lease lasts. That is why tenants
        fought for long leases and resisted official agricultural statistics, and why landlords, with more power,
        multiplied &ldquo;tenancies at will&rdquo; that could be cancelled every year.
      </p>
      <p>
        By <strong>intensive cultivation</strong> Marx means nothing more than concentrating capital on the same plot
        instead of spreading it over more land. And he stresses that differential rent I remains the basis and starting
        point of differential rent II.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Rent can grow not only because more or better land is farmed, but because more capital is poured into the land
        already farmed. Either way, the source is the same: surplus-profit from better-than-worst results.
      </p>
      <p>
        Whether the tenant or the landlord ends up with that surplus-profit is settled by the lease, and so by a constant
        tug of war between them.
      </p>
    </>
  ),

  critics: [
    {
      who: "The intensive margin",
      point: (
        <p>
          Mainstream economics has its own version of this idea, called the intensive margin, going back to Ricardo and
          Edward West. Farmers add capital to land until the last dose just pays for itself. Economists agree on the
          mechanism, but explain the resulting rent as the return to scarce land, not as surplus-value.
        </p>
      ),
    },
    {
      who: "Tenant rights",
      point: (
        <p>
          Laws in Britain and Ireland from the 1870s onward gave tenants compensation for improvements when they left
          their farms. Some historians argue these reforms took the sting out of the conflict Marx describes, while
          others say they came only after long struggles of exactly the kind he points to.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Ned puts four doses of £2½ into one acre instead of four acres. If they yield 1, 2, 3 and 4 quarters, how does the surplus-profit compare?",
      options: ["It is the same", "It is zero", "It is four times bigger"],
      answer: 0,
      why: "Marx says it is immaterial for the surplus-profit whether the doses go side by side or one after another.",
    },
    {
      q: "Ned's extra spending raises his harvest halfway through his lease. Who keeps the extra until the lease ends?",
      options: ["The Landlord", "Ned, the tenant", "The farmhands"],
      answer: 1,
      why: "Rent is fixed when the land is leased, so the extra flows to the tenant while the lease lasts.",
    },
    {
      q: "What does Marx mean by intensive cultivation?",
      options: [
        "Farming with lots of noise",
        "Concentrating more capital on the same plot of land",
        "Farming only the richest soil",
      ],
      answer: 1,
      why: "Economically, he says, intensive cultivation just means piling capital onto the same land instead of spreading it out.",
    },
  ],

  remember: [
    "Differential rent II comes from more capital invested in the same land, one dose after another.",
    "For surplus-profit it makes no difference whether doses go side by side or one after another.",
    "During a lease the tenant keeps the extra; at renewal the landlord turns it into rent.",
    "So tenants wanted long leases and landlords wanted leases they could cancel every year.",
    "Differential rent I remains the starting point for differential rent II.",
  ],

  terms: ["differential-rent-ii", "intensive-cultivation"],

  source: (
    <p>
      Covers Volume III, Chapter 40 (&ldquo;Second Form of Differential Rent (Differential Rent II)&rdquo;). Volume III
      was assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894; this site follows the English
      edition hosted on marxists.org. Marx&apos;s own points used here: £10 of capital in portions of £2½ with a price of
      production of £3 yielding 1 to 4 quarters; the tenants&apos; resistance to agricultural statistics (citing Morton);
      rent fixed at leasing; tenancies at will; the definition of intensive cultivation. The 1870s tenant laws in the
      critics section are general history, not from this chapter.
    </p>
  ),
};

export default chapter;
