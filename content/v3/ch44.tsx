import type { ChapterContent } from "@/components/ChapterTemplate";
import { NaturesFreeGift, TheExtraQuarter } from "./ch44-animations";

const chapter: ChapterContent = {
  bigQuestion: "Can even the worst field in the valley earn its owner a rent?",

  story: (
    <>
      <p>
        Field A is the poorest field in the valley. Its soil is thin and stony, and for years the farmer who works it has
        paid the Landlord nothing at all. &ldquo;It barely pays for itself,&rdquo; the farmer says. &ldquo;Who would charge
        rent for that?&rdquo;
      </p>
      <p>
        Then Tiny Town grows. Mia&apos;s bakery needs more flour, and the price of wheat starts to climb. Grandpa Ned, on
        the better field B, decides to put more money into his land to grow one extra quarter of wheat.
      </p>
      <p>
        A few weeks later the Landlord rides down to field A with a new lease in his hand. This time there is a number on
        it.
      </p>
    </>
  ),

  guess: (
    <p>
      Nobody has changed anything on field A. Its soil is just as thin as before. So why might it suddenly be able to pay
      rent? Think about what happens to the price of wheat.
    </p>
  ),

  struggle: [<TheExtraQuarter key="a" />],
  reveal: [<NaturesFreeGift key="b" />],

  eli5: "When the town needs more wheat and the cheapest way to grow it costs more, the price of all wheat goes up. Then even the worst field earns a little extra, and the landlord takes it as rent. Good soil is a free gift of nature, but the landlord still gets paid for it.",

  grownUp: (
    <>
      <p>
        Usually the worst field in use sets the price of production and pays no differential rent. Marx shows this can
        change once farmers invest more capital in the same land (<strong>differential rent II</strong>). Suppose more
        grain is needed and the cheapest way to get it is a second dose of capital on the better field B, at £3½ a quarter,
        rather than a second dose on A at £3¾ or a new, worse field at £4. Then £3½ becomes the regulating price, and field
        A, which still produces at £3, now yields a surplus-profit. That surplus is paid as rent.
      </p>
      <p>
        So the price can be regulated by a better soil, and every cultivated field can pay rent. Engels notes in brackets
        that Marx&apos;s figures need adjusting, but that the example still shows how this works.
      </p>
      <p>
        The chapter ends with notes on nature&apos;s contribution. Forces like a stream that drains a field cost nothing,
        so they enter no price: they are a <strong>free gift of nature</strong> to capital, which then looks like the
        productiveness of capital itself. A &ldquo;permanent improvement&rdquo; such as drainage gives one field, at a
        cost, what another has by nature. While it is being paid off, part of the rent is really interest; once it is paid
        off, the extra yield is plain differential rent.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Rent does not need bad land to be free. As soon as more output has to be squeezed out at a higher cost, the price
        of all the grain rises, and every owner of land, even poor land, can claim a share of the extra.
      </p>
      <p>
        Nature&apos;s help is free, but under capitalism it shows up as a money income for whoever owns the piece of nature
        in question. It is the extra productivity that earns rent, whether nature or a farmer&apos;s money supplied it.
      </p>
    </>
  ),

  critics: [
    {
      who: "Price set at the margin",
      point: (
        <p>
          Modern economists agree that the price of a crop is set by the cost of the last, most expensive unit that the
          market needs. They explain the landowner&apos;s share by the scarcity of good land, without any labour theory of
          value. Marx&apos;s defenders reply that the scarcity explains how big the rent is, but not why a landowner, rather
          than the farmer, is entitled to it.
        </p>
      ),
    },
    {
      who: "Who keeps the improvements",
      point: (
        <p>
          Marx says tenants&apos; improvements end up raising the landlord&apos;s rent. Critics point out that from the 1870s
          and 1880s, British law began to give tenant farmers compensation for improvements they left behind, and that
          long leases and owner-farming soften the problem a great deal.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "One extra quarter of wheat could cost £3¾ on field A, £4 on a new worse field, or £3½ on field B. Which way is chosen?",
      options: ["Field A", "The new worse field", "Field B, because it is cheapest"],
      answer: 2,
      why: "The extra wheat is grown where it costs least, and its cost, £3½, then sets the price for all wheat.",
    },
    {
      q: "Why does field A start paying rent?",
      options: [
        "Its soil got better",
        "The price of wheat rose above what it costs to grow on A",
        "The farmer asked to pay more",
      ],
      answer: 1,
      why: "A still grows wheat for £3 a quarter, but now it sells for £3½. The extra £½ becomes rent.",
    },
    {
      q: "A stream drains one field for free. What does Marx call that?",
      options: ["Fixed capital", "A free gift of nature", "Absolute rent"],
      answer: 1,
      why: "Natural forces cost nothing and enter no price, yet they make capital look more productive.",
    },
  ],

  remember: [
    "The cheapest way to grow the last bit of grain the town needs sets the price for all grain.",
    "If that way is a second investment on a better field, even the worst field can pay rent.",
    "Natural advantages are free gifts of nature, but their owner still collects rent on them.",
    "Once an improvement is paid off, the extra yield it brings is ordinary differential rent.",
  ],

  terms: ["free-gift-of-nature"],

  source: (
    <p>
      Covers Volume III, Chapter 44 (&ldquo;Differential Rent Also on the Worst Cultivated Soil&rdquo;). Volume III was
      assembled by Friedrich Engels from Marx&apos;s manuscripts and published in 1894. The soils A to D, the price of £3 a
      quarter, the rival costs of £3¾, £4 and £3½, and the rents before (0, £4½, £10½, £16½) and after (£½, £6¼, £13¼,
      £20¼) are Marx&apos;s; Engels&apos; bracketed note says the figures are not quite correctly calculated. The closing
      notes on permanent improvements come from a notebook &ldquo;begun in mid-February 1876&rdquo;. The two fields and
      the stream are this site&apos;s illustration. Checked against the International Publishers edition on marxists.org.
    </p>
  ),
};

export default chapter;
