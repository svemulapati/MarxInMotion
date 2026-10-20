import type { ChapterContent } from "@/components/ChapterTemplate";
import { MoreCapitalMoreRent, RentFollowsDifferences } from "./ch43-animations";

const chapter: ChapterContent = {
  bigQuestion: "If farmers pour more and more money into the land, who ends up richer?",

  story: (
    <>
      <p>
        The valley outside Tiny Town has five wheat fields, A to E. Grandpa Ned farms one of them, and his neighbours farm
        the rest. None of them owns a single field. Every year they all pay rent to the Landlord up on the hill.
      </p>
      <p>
        This year the town is hungry for more bread. So the farmers try something new. Instead of farming more fields,
        they put more into the same ones: more seed, more manure, deeper ploughing, better drains.
      </p>
      <p>
        &ldquo;All that money is ours,&rdquo; says Ned, wiping his boots. &ldquo;So the extra wheat should be ours too,
        shouldn&apos;t it?&rdquo;
      </p>
      <p>
        The Landlord smiles and says nothing. He is already writing next year&apos;s rents.
      </p>
    </>
  ),

  guess: (
    <p>
      Field E grows 18 bushels and field A grows 10. Do you think field E pays rent because it grows a lot, or because it
      grows more than field A? And when the farmers invest more money in the land, will the rents go up, down, or stay the
      same?
    </p>
  ),

  struggle: [<RentFollowsDifferences key="a" />],
  reveal: [<MoreCapitalMoreRent key="b" />],

  eli5: "A good field pays rent only because it grows more than the worst field. When farmers spend more on the land, the good fields usually grow even further ahead. So most of the time the landlord's rent goes up, even though the farmers paid for the improvements.",

  grownUp: (
    <>
      <p>
        This chapter finishes Marx&apos;s study of <strong>differential rent II</strong>: the extra rent that comes from
        investing more capital in the same land, rather than from farming more land. The two earlier chapters took the
        cases where the price of production stays the same or falls. Here the price of production <em>rises</em>, which
        happens when extra grain can only be had at a higher cost.
      </p>
      <p>
        Marx left only the title. Engels wrote the chapter from the manuscripts and then drew up thirteen new tables to
        show what the whole theory adds up to. His first finding: rents follow the <em>differences</em> in yield between
        each field and the worst, rent-free field that sets the price. Fields of 10, 12, 14, 16 and 18 bushels at 6
        shillings a bushel pay rents of 0, 12, 24, 36 and 48 shillings, and they would pay the same if every field grew
        ten bushels more or less.
      </p>
      <p>
        His second finding: when a second dose of capital goes into the land, the total rent rises in ten of the thirteen
        cases, often doubling or more. It stays the same only when the worst field is pushed out of use and the next one
        becomes the rent-free field. So the capital that tenant farmers like Ned sink into the soil tends to swell the{" "}
        <strong>rent</strong> that flows to the landowner. Engels uses this to explain why English landlords grew richer
        after the <strong>Corn Laws</strong> were repealed in 1846, and why cheap overseas grain later made rents fall.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        As farming improves and more capital is invested, a bigger and bigger share of society&apos;s surplus is paid as
        rent to landowners, who did none of the work and took none of the risk. Engels calls it a tribute paid by society
        to the big landowners.
      </p>
      <p>
        That tribute is not fixed by nature. It rises and falls with competition: when new, cheap land enters the world
        market, the worst European fields drop out and rents fall.
      </p>
    </>
  ),

  critics: [
    {
      who: "Rising farm productivity",
      point: (
        <p>
          Ricardo and Malthus expected rents to swallow a growing share of income as more food was squeezed from the land.
          Over the twentieth century the opposite happened in rich countries: farm output rose enormously, food got cheaper,
          and land rent became a small share of national income. Critics say the theory overstates how much landowners can
          capture; defenders reply that Engels himself showed rents falling once cheap land came into competition.
        </p>
      ),
    },
    {
      who: "Rent as a price for scarce land",
      point: (
        <p>
          Most economists today treat rent as the price of a scarce input, set by what one more acre adds to output. On
          that view the landlord&apos;s income is not a tribute but a signal that steers land to its best use. Marx and
          Engels would answer that the land is scarce, but the right to collect its rent is a social arrangement.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Field A grows 10 bushels and field D grows 16. Wheat sells for 6 shillings a bushel. What rent does field D pay?",
      options: ["16 × 6 = 96 shillings", "(16 − 10) × 6 = 36 shillings", "Nothing, because rent is only paid on A"],
      answer: 1,
      why: "Rent comes from the difference between a field and the worst one in use: 6 extra bushels at 6 shillings each.",
    },
    {
      q: "Farmers put a second dose of capital into the land. What usually happens to the total rent, in Engels' tables?",
      options: ["It falls", "It rises, often doubling or more", "It always stays exactly the same"],
      answer: 1,
      why: "In ten of his thirteen cases the total rent rises. It stays the same only when the worst field drops out.",
    },
    {
      q: "Who wrote most of this chapter?",
      options: ["Marx, in full", "Engels, from Marx's manuscripts, because Marx left only the title", "Adam Smith"],
      answer: 1,
      why: "Engels says the third case had not been worked out in the manuscript, so he filled the gap himself.",
    },
  ],

  remember: [
    "The worst field in use sets the price and pays no differential rent.",
    "Every better field pays rent equal to how much more it grows than the worst one.",
    "Money that tenant farmers sink into the land usually ends up raising the landlord's rent.",
    "Cheap grain from new lands far away can push rents down again.",
  ],

  terms: ["corn-laws"],

  source: (
    <p>
      Covers Volume III, Chapter 43 (&ldquo;Differential Rent II. Third Case: Rising Price of Production&rdquo;, with
      Engels&apos; results). Volume III was assembled by Friedrich Engels from Marx&apos;s manuscripts and published in
      1894; for this chapter Marx left only the title, and the text, Tables XI to XXIV and the conclusions are
      Engels&apos;. The bushel and shilling figures (yields of 10 to 18 bushels, 6 shillings a bushel, rents totalling
      120, then 240, 330, 380, 450, 581¼ and 150 shillings), the 1846 repeal of the English corn duties, the rise in
      investment from £8 to £12 an acre, and the competition of the prairies, the pampas, Russia and India all come from
      Engels&apos; text. Checked against the International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
