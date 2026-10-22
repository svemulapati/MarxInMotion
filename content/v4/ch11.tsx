import type { ChapterContent } from "@/components/ChapterTemplate";
import { IndestructiblePowers, MeltsOrStays, WhatRicardoSaw } from "./ch11-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is rent really a payment for the soil's magic powers?",

  story: (
    <>
      <p>
        Grandpa Ned has one more question for the Old Thinkers&apos; Shelf. His lease is up, and the Landlord&apos;s new
        letter says the rent is &ldquo;for the natural goodness of the soil, which never runs out&rdquo;.
      </p>
      <p>
        Ned snorts. He has spent thirty years draining that bottom field, carting manure onto it, and pulling stones out
        of it. And his stony top field, the worst one he has, still costs him rent, even though the books say the worst
        field should pay none.
      </p>
      <p>
        The phrase in the letter comes from David Ricardo, the most famous writer on rent. So Ned pulls down
        Ricardo&apos;s book, and Marx&apos;s notes on it.
      </p>
      <p>What did Ricardo get right about rent, and what did he get wrong?</p>
    </>
  ),

  guess: (
    <p>
      If a field is rich because people worked on it for centuries, is its richness really &ldquo;natural&rdquo;? And why
      might a landlord charge rent even for the very worst field?
    </p>
  ),

  struggle: [<WhatRicardoSaw key="a" />, <MeltsOrStays key="b" />],
  reveal: [<IndestructiblePowers key="c" />],

  eli5: "Ricardo saw that better fields pay more rent, because a rich field earns extra that nobody can copy. Marx agreed, but said soil is not magic or everlasting: people made fields good, and fields can wear out. And landlords charge rent even for the worst field.",

  grownUp: (
    <>
      <p>
        Marx starts with history. Ricardo was concerned above all with 1770 to 1815, a period &ldquo;during which wheat
        prices were constantly rising&rdquo;. He and Anderson shared three assumptions that sound strange on the
        continent: that no <strong>landed property</strong> shackles investment in land; that cultivation spreads from
        better land to worse (absolutely for Ricardo, only relatively for Anderson, who thought worse land can be made
        better); and that capital is always available for agriculture. Marx explains them by England&apos;s history: its
        enclosures and the way capitalist farming had ruthlessly swept away the old village fields, which makes England
        &ldquo;the most revolutionary country in the world&rdquo; on the land.
      </p>
      <p>
        Then theory. Ricardo&apos;s <strong>differential rent</strong> corresponds exactly to the excess profit that any
        capitalist with better-than-average conditions makes in industry. The difference is that in industry such excess
        profits are &ldquo;fluid&rdquo; and disappear again, while on the land they become fixed, because of their lasting
        natural basis, and fall to the landowner.
      </p>
      <p>
        Finally, Ricardo&apos;s definition. Rent, he wrote, is paid &ldquo;for the use of the original and indestructible
        powers of the soil&rdquo;. Marx calls this poor: the soil has no indestructible powers, and no original ones
        either, since land is &ldquo;the product of an historical and natural process&rdquo;. And because Ricardo assumed
        values must equal average prices, he denied <strong>absolute rent</strong>, leaving the worst land rent-free in
        theory. Marx&apos;s own answer is in Chapter 8 of this volume and in Volume III, Chapter 45.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Ricardo was right that differential rent comes from differences between fields, and right that it is a
        surplus-profit rather than a gift. But he dressed rent up as payment for natural, everlasting powers, which hides
        the history of the land and the labour sunk into it.
      </p>
      <p>
        And by leaving out absolute rent, he missed that landed property itself, the right to keep land closed, lets
        landowners take a share even from the worst field.
      </p>
    </>
  ),

  critics: [
    {
      who: "Henry Carey and settlement history",
      point: (
        <p>
          The American economist Henry Carey argued that settlers often began on light, easy upland soils and moved later
          to rich but heavy valley land, the reverse of Ricardo&apos;s order. Marx thought this missed the point: land is
          &ldquo;most fertile&rdquo; only under the methods of its time, and rent theory does not depend on the order in
          which fields are taken up. Historians still debate how far either pattern of settlement holds.
        </p>
      ),
    },
    {
      who: "Modern rent theory",
      point: (
        <p>
          Economists today keep Ricardo&apos;s core idea as &ldquo;economic rent&rdquo;: income from something in fixed
          supply. They drop the talk of indestructible powers, but most also reject absolute rent, explaining rent on the
          poorest land by scarcity and competition for land rather than by a landlord&apos;s monopoly over surplus-value.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Which years shaped Ricardo's view of rent?",
      options: ["1650 to 1700, when prices fell", "1770 to 1815, when wheat prices kept rising", "1850 to 1900"],
      answer: 1,
      why: "Ricardo wrote from the experience of 1770 to 1815, when wheat prices were constantly rising.",
    },
    {
      q: "Why does a better spinner's extra profit melt away, while a rich field's extra stays?",
      options: [
        "Rivals can copy a machine, but nobody can copy a richer soil",
        "Spinners are lazier than farmers",
        "The law protects spinners",
      ],
      answer: 0,
      why: "In industry the extra is 'fluid'. On the land it has a lasting natural basis, so it becomes fixed and goes to the landowner.",
    },
    {
      q: "What did Marx object to in Ricardo's 'original and indestructible powers of the soil'?",
      options: [
        "Soil can wear out, and fields are shaped by centuries of history and work",
        "Soil has no powers at all",
        "Rent should be paid in gold",
      ],
      answer: 0,
      why: "Marx says the soil has no indestructible powers and no original ones: it is the product of a historical and natural process.",
    },
  ],

  remember: [
    "Ricardo's theory of rent grew out of 1770 to 1815, when wheat prices kept rising.",
    "It took for granted English conditions, where enclosures had swept away old village fields.",
    "Differential rent is like a better capitalist's extra profit, except that on the land it is fixed instead of melting away.",
    "Marx rejected the idea of 'original and indestructible powers': land wears out, and people made it what it is.",
    "Ricardo said the worst field pays no rent; Marx's absolute rent explains why it does.",
  ],

  terms: ["indestructible-powers"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter XI (&ldquo;Ricardo&apos;s Theory of Rent&rdquo;), shown here as
      Volume IV, Chapter 11, together with Chapter IX&apos;s section on Ricardo&apos;s denial of absolute rent. The text
      is Marx&apos;s 1861 to 1863 manuscript, first edited by Karl Kautsky (1905 to 1910); this site follows the Progress
      Publishers English edition on marxists.org. From the text: the period 1770 to 1815 with &ldquo;constantly
      rising&rdquo; wheat prices; the three assumptions shared by Anderson and Ricardo; England as &ldquo;the most
      revolutionary country in the world&rdquo;; differential rent as excess profit that is fluid in industry and fixed
      on the land; Ricardo&apos;s &ldquo;original and indestructible powers of the soil&rdquo; and Marx&apos;s reply.
      Ned&apos;s thirty years of draining and the Landlord&apos;s letter are this site&apos;s story.
    </p>
  ),
};

export default chapter;
