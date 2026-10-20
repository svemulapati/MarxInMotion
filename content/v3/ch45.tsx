import type { ChapterContent } from "@/components/ChapterTemplate";
import { MoreHandsMoreValue, NotForNothing, RentOrPriceFirst } from "./ch45-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why would anyone pay rent for the very worst field?",

  story: (
    <>
      <p>
        Up to now we have said that the worst field in use pays no rent. It only just covers the farmer&apos;s costs and a
        normal profit, so there is nothing left over for a landlord.
      </p>
      <p>
        But walk past field A on the edge of Tiny Town. It is empty, and there is a padlock on the gate. Tiny Town needs
        more wheat, and Grandpa Ned would happily farm it. &ldquo;At today&apos;s prices it would pay me well enough,&rdquo;
        he says, &ldquo;as long as I don&apos;t have to pay rent.&rdquo;
      </p>
      <p>
        The Landlord looks at the padlock, then at Ned. &ldquo;Who said anything about no rent?&rdquo;
      </p>
    </>
  ),

  guess: (
    <p>
      The Landlord would rather keep field A empty than let it for nothing. If the town really needs the wheat, what has to
      happen to the price of wheat before anyone farms field A?
    </p>
  ),

  struggle: [<NotForNothing key="a" />, <MoreHandsMoreValue key="b" />],
  reveal: [<RentOrPriceFirst key="c" />],

  eli5: "A landlord won't let even his worst field for free, so wheat has to get dearer before anyone farms it. Farms use lots of workers, so their wheat holds extra value, and the landlord's fence lets him keep some of it. Marx calls this absolute rent.",

  grownUp: (
    <>
      <p>
        Differential rent comes from the gap between better fields and the worst one. Marx now asks whether the worst field
        really pays nothing. His answer: owning land does not create rent by itself, but it gives the owner the power to
        keep land out of use until it pays him something. So when more land is needed, the market price must rise above the
        price of production on the worst soil, P, to P + r. That r is <strong>absolute rent</strong>. The differential
        rents on better fields (d, 2d, 3d) are unchanged.
      </p>
      <p>
        Where does r come from without cheating anyone? From the <strong>organic composition of capital</strong>. Marx
        assumes farming uses more workers for each coin of machines and materials than industry does. With industry at
        85c + 15v and farming at 75c + 25v, and a 100% rate of surplus-value, the farm&apos;s product is worth 125 but the
        average price of production is 120. In other branches, competition would share that extra 5 out. Landed property
        blocks the sharing, so all or part of it can be kept as rent.
      </p>
      <p>
        That makes absolute rent the <em>cause</em> of the higher price, not its effect. The price normally lands between
        the price of production and the value. If farming became as machine-heavy as industry, absolute rent would vanish.
        Anything beyond value would be a <strong>monopoly price</strong>, set only by buyers&apos; desire and ability to pay.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Landowners do not just pocket the luck of good soil. Their ownership itself is a barrier that forces everyone else
        to pay more for food, and they take a slice of the value that farm workers create.
      </p>
      <p>
        This is not a law of nature. It depends on how much living labour farming uses compared with industry, and Marx
        expected it to shrink as farming became more mechanised.
      </p>
    </>
  ),

  critics: [
    {
      who: "No such thing as absolute rent",
      point: (
        <p>
          Ricardo held that the worst land in use pays no rent at all, and most economists since have explained any rent on
          poor land by its other uses, such as grazing or building, rather than by a special kind of rent. Some Marxist
          economists have also argued that Marx&apos;s case depends on assumptions about value and prices that are hard to
          test.
        </p>
      ),
    },
    {
      who: "Farming changed",
      point: (
        <p>
          Today farming in rich countries uses huge machines and very few workers, often more capital per worker than
          industry. By Marx&apos;s own reasoning, absolute rent should then have disappeared. Critics see this as a theory
          tied to its time; defenders reply that Marx predicted exactly this, and that landowners can still charge for the
          poorest land through monopoly.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Why does the worst field A start paying rent in this chapter?",
      options: [
        "Its soil improves",
        "The landlord refuses to let it for nothing, so the price must rise",
        "The farmer offers to pay extra",
      ],
      answer: 1,
      why: "Ownership is a barrier. The price of wheat must rise until even field A can pay a rent.",
    },
    {
      q: "Mill: 85c + 15v. Farm: 75c + 25v. Same 100% rate of surplus-value. Which product is worth more?",
      options: ["The mill's, 115", "The farm's, 125", "They are worth the same"],
      answer: 1,
      why: "The farm uses more workers, so it makes more new value: 25 of surplus-value instead of 15.",
    },
    {
      q: "For absolute rent, which way round does Marx say it works?",
      options: ["Dear food causes rent", "Rent causes dearer food", "Rent and food prices are unrelated"],
      answer: 1,
      why: "The landowner's barrier pushes the price above the price of production. The rent comes first.",
    },
  ],

  remember: [
    "Owning land gives the power to keep it empty until it pays.",
    "So even the worst field can pay a rent: Marx calls it absolute rent.",
    "It comes from farm products being worth more than their price of production, because farms use more workers.",
    "Here the rent pushes up the price, not the other way round.",
    "A price above value, set only by what buyers will pay, is a monopoly price.",
  ],

  terms: ["absolute-rent", "monopoly-price"],

  source: (
    <p>
      Covers Volume III, Chapter 45 (&ldquo;Absolute Ground-Rent&rdquo;). Volume III was assembled by Friedrich Engels
      from Marx&apos;s manuscripts and published in 1894. The P and P + r argument, the remark (after Fourier) that a good
      share of land always stays uncultivated, the compositions 85c + 15v and 75c + 25v with prices of 115, 125 and 120,
      the idea that rent here causes the price rise, and the disappearance of absolute rent if farming&apos;s composition
      rose to the average are Marx&apos;s. The padlocked gate and the rare wine are this site&apos;s pictures. Checked
      against the International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
