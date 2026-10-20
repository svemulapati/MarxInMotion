import type { ChapterContent } from "@/components/ChapterTemplate";
import { ConductorOrBoss, TwelveMasonsAndALadder, WhoGetsTheFreeGift } from "./ch13-animations";

const chapter: ChapterContent = {
  bigQuestion: "Why can twelve people together do more than twelve people apart?",

  story: (
    <>
      <p>
        Business is good, so Mr. Moneybags decides to build a bigger workshop. He hires twelve masons to carry stones up
        to the top of the new wall.
      </p>
      <p>
        At first each mason works alone: pick up a stone, climb the ladder, put it down, climb back down. By evening
        everyone is tired and the pile is small.
      </p>
      <p>
        The next morning Sam, who is helping out, has an idea. &ldquo;Why don&apos;t we stand in a line on the ladder
        and pass the stones up?&rdquo; Nobody has to climb. By lunch the pile is huge.
      </p>
      <p>
        Same people. Same hours. Far more stones. Where did the extra come from? And who gets to keep it?
      </p>
    </>
  ),

  guess: (
    <p>
      The twelve masons work the same 12 hours in both cases. Why does passing stones in a line make so much more? And
      when Mr. Moneybags pays twelve separate wages, is he paying for the extra too?
    </p>
  ),

  struggle: [<TwelveMasonsAndALadder key="a" />],
  reveal: [<WhoGetsTheFreeGift key="b" />, <ConductorOrBoss key="c" />],

  eli5: "When people work together, they can do more than the same people working alone. The boss pays each worker separately, so he gets the extra from teamwork for free. Then he needs to boss everyone around to keep it coming.",

  grownUp: (
    <>
      <p>
        <strong>Co-operation</strong> means many workers working together, to a plan, in the same process or in
        connected ones. Marx says capitalist production really begins when one capitalist employs many workers at once
        in one place.
      </p>
      <p>
        Working together creates a new productive power. Twelve masons in their combined working day of 144 hours make
        far more progress than twelve isolated masons, or one mason working for twelve days. Some jobs, like lifting a
        heavy weight, cannot be done alone at all. Contact with others also spurs people on, and a team can attack a
        job from many sides at once. Just as a cavalry squadron&apos;s power is different from the sum of its riders,
        the <strong>collective worker</strong> is more than the sum of individual workers.
      </p>
      <p>
        The capitalist pays the value of twelve separate labour-powers, not the value of their combined power. So the
        extra power of working together costs capital nothing, and it starts to look like a natural power of capital
        itself. With many workers in one place, someone must direct, supervise and adjust. Marx compares this to an
        orchestra needing a conductor. But under capitalism, direction also means getting the most surplus-value out
        of the workers, and handling their growing resistance. So managers and foremen act as officers and sergeants,
        and Marx calls the form of this control despotic.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Teamwork is a real source of extra wealth, and it comes from the workers&apos; combined labour. Under capitalism
        that extra power appears as the boss&apos;s power, because the boss brings the workers together and pays them
        one by one.
      </p>
      <p>
        Co-operation is the basic form of all capitalist production. The workshops, factories and machines of the next
        chapters are all ways of organising this same combined labour more tightly.
      </p>
    </>
  ),

  critics: [
    {
      who: "Why firms exist",
      point: (
        <p>
          Ronald Coase (1937) argued that firms exist because using the market for every small task is costly, so it
          pays to bring people together under one direction. On this view, the gains from co-ordination are created by
          whoever organises the firm, and paying for them is fair, not a free gift.
        </p>
      ),
    },
    {
      who: "Monitoring teams",
      point: (
        <p>
          Armen Alchian and Harold Demsetz (1972) argued that in team work it is hard to see who did what, so someone
          has to monitor the team. They saw the owner-manager as the person best placed to do that, and the profit as
          the reward for doing it well, rather than a sign of despotic control.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Twelve masons pass stones up in a line instead of each climbing alone. What happens?",
      options: ["Exactly the same amount gets done", "Far more gets done in the same hours", "Less gets done"],
      answer: 1,
      why: "Working together creates a new power that is more than the sum of separate workers.",
    },
    {
      q: "Mr. Moneybags pays twelve separate wages. Does he pay for the extra power of teamwork?",
      options: ["Yes, it is included in the wages", "No, it comes to him for free", "Only if the workers ask"],
      answer: 1,
      why: "He pays for twelve separate labour-powers, not for their combined power. Marx says that power costs capital nothing.",
    },
    {
      q: "Why does Marx compare a big workshop to an orchestra?",
      options: [
        "Because workers sing while they work",
        "Because many people working together need someone to direct them",
        "Because bosses like music",
      ],
      answer: 1,
      why: "A single violinist is their own conductor, but an orchestra needs one. Under capitalism that directing also becomes control.",
    },
  ],

  remember: [
    "Co-operation means many people working together to one plan, in one place.",
    "Working together creates extra power, more than the sum of separate workers.",
    "The boss pays for separate workers, so the extra power of teamwork comes to him for free.",
    "Big workshops need direction, and under capitalism direction becomes control by managers and foremen.",
  ],

  terms: ["co-operation", "collective-worker"],

  source: (
    <p>
      Covers Volume I, Chapter 13 (&ldquo;Co-operation&rdquo;). Marx&apos;s own examples: a dozen masons passing stones
      up a ladder; the collective working day of 144 hours; raising a heavy weight; the cavalry squadron; &ldquo;a single
      violin player is his own conductor; an orchestra requires a separate one&rdquo;; managers and overlookers as
      officers and sergeants; the capitalist paying 100 independent labour-powers but not their combined power. The
      building of a new workshop and Sam&apos;s idea belong to this site.
    </p>
  ),
};

export default chapter;
