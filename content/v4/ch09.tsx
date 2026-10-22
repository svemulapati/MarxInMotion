import type { ChapterContent } from "@/components/ChapterTemplate";
import { WheatPrices, WhoSaidItFirst } from "./ch09-animations";

const chapter: ChapterContent = {
  bigQuestion: "Who really discovered the law of rent, and why does it matter?",

  story: (
    <>
      <p>
        Grandpa Ned is back at the Old Thinkers&apos; Shelf. This time he is looking for the person who first explained
        why his rich bottom field pays more rent than his stony top field.
      </p>
      <p>
        The librarian points to a book with a famous name on the spine: &ldquo;The Ricardian law of rent. David Ricardo,
        of course.&rdquo; But tucked behind it is a thin, older book by a Scottish farmer called James Anderson. It says
        much the same thing, forty years earlier.
      </p>
      <p>
        &ldquo;Then why is it named after Ricardo?&rdquo; asks Ned. And why does a third book, by a clergyman called
        Malthus, use the same idea to argue that the poor will always go hungry?
      </p>
      <p>Who got there first? And does it matter what each of them did with the idea?</p>
    </>
  ),

  guess: (
    <p>
      If a farmer, a stockbroker and a clergyman all explain the same idea, does it matter who said it first? Could the
      same idea be used to argue for very different things?
    </p>
  ),

  struggle: [<WhoSaidItFirst key="a" />],
  reveal: [<WheatPrices key="b" />],

  eli5: "A farmer called Anderson explained rent long before Ricardo did, but Ricardo got the fame. Marx said Malthus copied Anderson and used the idea to side with landlords. Old price tables show bread did not always get dearer, just as Anderson said.",

  grownUp: (
    <>
      <p>
        The so-called <strong>Ricardian law of rent</strong>, that better land pays rent because the price of corn is set
        by the costs on the last and worst land in use, was first stated by <strong>James Anderson</strong>, a practical
        farmer, in a work on the corn laws in 1777. There it came in only in passing, and Marx says it went &ldquo;entirely&rdquo; unnoticed until 1815, when Edward West
        and Thomas Malthus both published works on rent. Ricardo, in the preface to his <em>Principles</em>, treated West
        and Malthus as the originators; Marx thinks Ricardo did not know Anderson, but that Malthus did.
      </p>
      <p>
        Marx&apos;s charge against Malthus is sharp. He calls him a &ldquo;plagiarist by profession&rdquo;, who used
        Anderson&apos;s theory to prop up his population theory and to serve the landlords. Anderson, by contrast, was
        &ldquo;a decided enemy of the theory of population&rdquo;: he held that land can be improved without end. He
        explained the rise in corn prices after 1750 by legislation, not by poorer land.
      </p>
      <p>
        Marx contrasts this with Ricardo. Ricardo wanted &ldquo;production for the sake of production&rdquo;, which Marx
        reads as the development of human productive powers, and followed his logic wherever it led, against landlords,
        workers or capitalists. Marx calls this &ldquo;scientific honesty&rdquo;. The chapter ends with a table of English
        wheat prices from 1641 to 1859, which shows long periods of falling as well as rising prices.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Ideas have histories, and who uses an idea, and for what, tells you something about it. The same theory of rent
        served Anderson as a farmer arguing for the corn laws and for improving the land, Ricardo as an honest scientist of industry, and Malthus,
        Marx says, as a defender of the landed rich.
      </p>
      <p>
        On the facts, Marx sides with Anderson: rent arises from differences between fields, but farming does not have
        to run downhill to ever worse land. Land can be made better.
      </p>
    </>
  ),

  critics: [
    {
      who: "Defenders of Malthus",
      point: (
        <p>
          Many historians think the plagiarism charge is too harsh. Several writers reached the rent theory on their own
          around 1815, and Malthus and Ricardo were friends who argued openly. Later economists such as John Maynard
          Keynes admired Malthus as an original thinker, not a copyist.
        </p>
      ),
    },
    {
      who: "Economists on long-run prices",
      point: (
        <p>
          Most economists agree with Marx and Anderson here: better methods kept food from getting dearer over the long
          run, and Ricardo&apos;s gloomy forecast did not come true. They usually credit new farming methods and cheap
          imports rather than Marx&apos;s wider theory.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Who first explained the law of rent that is named after Ricardo?",
      options: ["Thomas Malthus", "James Anderson", "Adam Smith"],
      answer: 1,
      why: "Anderson, a practical farmer, explained it in 1777, about forty years before Ricardo.",
    },
    {
      q: "What did Anderson believe about land, unlike Malthus?",
      options: ["Land can be improved, so food need not keep getting dearer", "Land always gets worse", "Land has no value"],
      answer: 0,
      why: "Anderson was against Malthus's theory of population. He argued that land can be improved year after year.",
    },
    {
      q: "What does Marx's table of wheat prices from 1641 to 1859 show?",
      options: ["Prices always rose", "Prices always fell", "Prices rose and fell over long periods"],
      answer: 2,
      why: "Prices fell in the early 1700s, rose again, shot up after 1800 and fell back. 'Ever dearer' is not a law of nature.",
    },
  ],

  remember: [
    "James Anderson, a Scottish farmer, explained differential rent in 1777.",
    "West and Malthus wrote on rent in 1815, and Ricardo made the idea famous.",
    "Marx accused Malthus of using Anderson without credit to defend landlords.",
    "Marx praised Ricardo's scientific honesty: he followed his logic even against powerful interests.",
    "Wheat prices rose and fell over the centuries, so food need not always get dearer.",
  ],

  terms: ["anderson-law"],

  source: (
    <p>
      Covers Theories of Surplus-Value, Part II, Chapter IX (&ldquo;Notes on the History of the Discovery of the
      So-Called Ricardian Law of Rent&rdquo;), shown here as Volume IV, Chapter 9. The text is Marx&apos;s 1861 to 1863
      manuscript, first edited by Karl Kautsky (1905 to 1910); this site follows the Progress Publishers English edition
      on marxists.org. From the text: Anderson&apos;s Enquiry into the Nature of the Corn Laws (1777) and A Calm
      Investigation (1801); West&apos;s and Malthus&apos;s works of 1815; Ricardo naming West and Malthus in his preface;
      &ldquo;plagiarist by profession&rdquo;; &ldquo;scientific honesty&rdquo;; &ldquo;production for the sake of
      production&rdquo;; the table of wheat prices 1641 to 1859. The half-century averages in animation 9.2 are rounded
      to whole shillings. The 1817 date of Ricardo&apos;s Principles is general history.
    </p>
  ),
};

export default chapter;
