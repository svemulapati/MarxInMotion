import type { ChapterContent } from "@/components/ChapterTemplate";
import { DoesRentMakeBreadDear, RicardosEmptyCountry } from "./ch13-animations";

const chapter: ChapterContent = {
  bigQuestion: "Does the poorest field in town really pay no rent at all?",

  story: (
    <>
      <p>
        Today the visitor on the Old Thinkers&apos; Shelf is David Ricardo, the English stockbroker who became the most famous economist of his day. He
        tells the children a story about a brand-new country with endless good land and hardly anyone living there.
      </p>
      <p>
        &ldquo;In such a place,&rdquo; says Ricardo, &ldquo;nobody pays rent. Why pay for land when there is plenty for
        free? Rent only starts when people must farm worse fields. And the very worst field farmed always pays
        nothing.&rdquo;
      </p>
      <p>
        Grandpa Ned scratches his head. &ldquo;I rent the stoniest field in Tiny Town,&rdquo; he says. &ldquo;And the
        Landlord still sends me a bill every year.&rdquo;
      </p>
      <p>Who is right, Ricardo or Grandpa Ned?</p>
    </>
  ),

  guess: (
    <p>
      In Ricardo&apos;s story, the land belongs to nobody. In Tiny Town, every field has an owner. Do you think that
      changes whether the worst field pays rent? And could rent ever make bread dearer?
    </p>
  ),

  struggle: [<RicardosEmptyCountry key="a" />],
  reveal: [<DoesRentMakeBreadDear key="b" />],

  eli5: "Ricardo said the worst field pays no rent, but his story only works where nobody owns the land. Where a landowner owns every field, he wants rent even for the worst one. That rent can make bread dearer.",

  grownUp: (
    <>
      <p>
        This chapter finishes Marx&apos;s look at <strong>Ricardo&apos;s theory of rent</strong>. Ricardo starts from a
        &ldquo;new country&rdquo; where land is abundant and &ldquo;not yet appropriated&rdquo;. In his example, three
        sorts of land with equal capital give 100, 90 and 80 quarters of corn. When No. 2 must be farmed, No. 1 pays 10
        quarters of rent. The price is set on the last land farmed, which pays no rent.
      </p>
      <p>
        Marx&apos;s first objection: Ricardo assumes there is no landed property, then forgets the assumption and treats
        his result as a law for all countries. In old Europe, land was owned long before capitalism. Where it is owned,
        even the worst land pays <strong>absolute rent</strong>, and the move to new land depends on its situation as
        well as its fertility, not only on going from better to worse.
      </p>
      <p>
        His second objection is to Ricardo&apos;s line that &ldquo;corn is not high because a rent is paid&rdquo;. For
        differential rent Marx agrees: it is the effect of the price. But absolute rent lets farm produce sell at its
        value, above its price of production, so landed property does raise the price. Marx also criticises
        Ricardo&apos;s view of farm improvements, which misses changes in the make-up of agricultural capital.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Rent is not just a gift of nature that appears when farming gets harder. It is also a claim that landowners can
        make because they own the land. That claim can push up the price of food, even on the worst land.
      </p>
      <p>
        Ricardo&apos;s theory explains differential rent well. Where it goes wrong is in denying absolute rent and in
        assuming that farming must always move to poorer land.
      </p>
    </>
  ),

  critics: [
    {
      who: "Defenders of Ricardo",
      point: (
        <p>
          Many economists argue that the worst land in use earns almost no rent in practice, because landowners compete
          to let it and would rather take a little than nothing. On this view Marx&apos;s absolute rent is small or
          temporary, and Ricardo&apos;s margin is a good guide.
        </p>
      ),
    },
    {
      who: "Supporters of Marx's point",
      point: (
        <p>
          Others note that farmland almost never rents for nothing, even at the margin, and that land taxes and land
          prices show ownership itself commands a payment. Henry George built a whole movement on the idea that
          landowners capture value they did not create.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In Ricardo's story, why does nobody pay rent at first?",
      options: ["The farmers are too poor", "There is plenty of good land that nobody owns", "The king forbids it"],
      answer: 1,
      why: "Ricardo assumes abundant land 'not yet appropriated': nobody pays for what anyone can take for free.",
    },
    {
      q: "What does Marx say Ricardo forgot?",
      options: [
        "That wheat needs rain",
        "That in real countries the land is already owned, so even the worst field pays rent",
        "That farmers pay wages",
      ],
      answer: 1,
      why: "Marx says Ricardo began by assuming no landed property and then forgot that assumption.",
    },
    {
      q: "Which kind of rent, according to Marx, really pushes the price of food up?",
      options: ["Differential rent", "Absolute rent", "Neither"],
      answer: 1,
      why: "Differential rent is an effect of the price. Absolute rent lets the produce sell at its full value, above cost plus profit.",
    },
  ],

  remember: [
    "Ricardo's story starts in an empty country where nobody owns the land.",
    "In his example, fields grow 100, 90 and 80 sacks, and the better ones pay the difference as rent.",
    "Marx: once land is owned, even the worst field pays rent.",
    "Differential rent follows the price; absolute rent pushes the price up.",
  ],

  terms: ["colonial-theory-of-rent"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter XIII (&ldquo;Ricardo&apos;s Theory of Rent
      (Conclusion)&rdquo;), Progress Publishers edition on marxists.org. Ricardo&apos;s own example of three lands
      giving 100, 90 and 80 quarters, with No. 1 paying 10 quarters when No. 2 is farmed, and his line &ldquo;Corn is not
      high because a rent is paid&rdquo;, are quoted by Marx. The next step in 13.1 (No. 1 paying 20 and No. 2 paying 10
      when No. 3 is farmed) completes Ricardo&apos;s example from his <em>Principles</em>, Chapter II; it is not quoted in
      this chapter. The 6 and 7 coin prices in 13.2 are made up.
    </p>
  ),
};

export default chapter;
