import type { ChapterContent } from "@/components/ChapterTemplate";
import { RentForStandingRoom, WhatIsAFieldWorth } from "./ch46-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why does an empty patch of ground in a busy town cost so much?",

  story: (
    <>
      <p>
        Twenty years ago the field behind Tom&apos;s shop was just a muddy paddock with a goat in it. Then the mill grew,
        the railway came, and Tiny Town filled up with families looking for somewhere to live.
      </p>
      <p>
        Now that same paddock is the most wanted ground in town. Nobody has planted anything on it. Nobody has built
        anything on it. Yet the Landlord who owns it is asking more for it every year.
      </p>
      <p>
        &ldquo;What did he do to make it worth more?&rdquo; asks Sam. Tom shrugs. &ldquo;Nothing. The town grew around
        it.&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      The Landlord did no work on the paddock, and it grows nothing. So where do you think its rising price comes from?
      And if he sold it, how would anyone work out what it is worth?
    </p>
  ),

  struggle: [<RentForStandingRoom key="a" />],
  reveal: [<WhatIsAFieldWorth key="b" />],

  eli5: "In a growing town, everyone needs a spot to live and work, so the owner of the ground can charge more and more without doing anything. The price of land is just its yearly rent turned into one big lump. Marx thought owning the earth would one day seem as strange as owning a person.",

  grownUp: (
    <>
      <p>
        Wherever natural forces can be monopolised, rent appears: waterfalls, rich mines, fishing waters, or a well-placed
        building plot. <strong>Building-site rent</strong> is ruled mainly by location, and it rises with population and
        with all the fixed capital (railways, docks, factories) built around it. The owner is completely passive. A London
        builder told Parliament in 1857 that his real profit came not from the houses but from the &ldquo;improved
        ground-rents&rdquo;; and at the end of a lease, often 99 years, the land and buildings returned to the landlord.
      </p>
      <p>
        <strong>Mining rent</strong> is set like farm rent: rich mines pay it, the poorest pay none. Marx separates rent
        caused by a <strong>monopoly price</strong> (a rare vineyard) from rent that causes a monopoly price.
      </p>
      <p>
        The <strong>price of land</strong> is capitalised rent: the sum which, lent at the going interest rate, would
        bring in the same income. So land prices can rise when interest falls, even with no change in rent. The buyer
        feels he simply earns interest on his money, which hides that he has bought a title to part of other people&apos;s
        surplus-labour.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Landowners collect a tribute from the rest of society just for permission to live and work on the earth, and that
        tribute grows as society grows. Buying land does not make this fair; it only passes the title along.
      </p>
      <p>
        Marx goes further: from the standpoint of a future society, private ownership of the globe will look as absurd as
        one person owning another. Even whole nations only use the earth and should hand it on improved.
      </p>
    </>
  ),

  critics: [
    {
      who: "Henry George",
      point: (
        <p>
          In <em>Progress and Poverty</em> (1879) the American writer Henry George agreed that rising land values are
          created by the community, not the owner. But instead of ending private land ownership he proposed a single tax on
          the value of land, leaving buildings and enterprise untaxed. Many economists of all schools still think a land
          value tax is fair and efficient.
        </p>
      ),
    },
    {
      who: "Urban economics",
      point: (
        <p>
          Modern urban economists explain city land prices by location, transport costs and expected future rents. They
          point out that buyers do take risks: land prices can crash, as they did in many property slumps. Marx&apos;s
          defenders reply that the risk is real but the income still comes from others&apos; work, not from the land.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "A field brings £200 rent a year and interest is 5%. What is its price?",
      options: ["£200", "£1,000", "£4,000"],
      answer: 2,
      why: "£4,000 lent at 5% earns £200 a year, so the field sells for £4,000: twenty years of rent.",
    },
    {
      q: "Interest falls from 5% to 4%. The rent stays at £200. What happens to the price of the field?",
      options: ["It falls", "It rises to £5,000", "It stays the same"],
      answer: 1,
      why: "At 4% you need £5,000 to earn £200, so the same rent is now worth more as a lump sum.",
    },
    {
      q: "According to the London builder Marx quotes, where did his real profit come from?",
      options: ["Building the houses", "The improved ground-rents", "Selling bricks"],
      answer: 1,
      why: "He said he scarcely looked at the profit on the buildings; his gain was the extra ground-rent of £100 or £150 a year.",
    },
  ],

  remember: [
    "In growing towns, land rents rise because of the town's growth, not the owner's work.",
    "Mines pay rent the same way farms do: rich ones pay, the poorest pay none.",
    "The price of land is its rent turned into a lump sum at the going rate of interest.",
    "Buying land only passes on the right to collect rent; it doesn't create it.",
  ],

  terms: ["building-site-rent", "mining-rent", "price-of-land"],

  source: (
    <p>
      Covers Volume III, Chapter 46 (&ldquo;Building Site Rent. Rent in Mining. Price of Land&rdquo;). Volume III was
      assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894. The testimony of the London building
      speculator Edward Capps to the 1857 Select Committee on Bank Acts (£300 a year rising to £400 or £450), the 99-year
      leases, Adam Smith on Scottish coal mines, the rare vineyard and the passage on owning the globe are Marx&apos;s. The
      worked price of £200 rent at 5% (£4,000) and 4% (£5,000) is Marx&apos;s own example from Chapter 37, used here because
      Chapter 46 states the rule without figures. Checked against the International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
