import type { ChapterContent } from "@/components/ChapterTemplate";
import { OvertimeAndTheRace, SamePayCheaperHours, ShortWeeksHurt } from "./ch20-animations";

const chapter: ChapterContent = {
  bigQuestion: "If Sam is paid by the hour, does working longer make him better off?",

  story: (
    <>
      <p>
        One Monday a notice appears on the workshop door: &ldquo;From today, pay by the hour. 3 pennies an hour.&rdquo;
        Sam does the sums. Twelve pennies make a coin, so 12 hours at 3 pennies is 36 pennies, his usual 3 coins.
        Nothing seems to have changed.
      </p>
      <p>
        But things do change. In busy weeks there are rush orders, and the days get longer and longer. In slow weeks Mr.
        Moneybags sends Sam home at lunchtime with half a day&apos;s pay.
      </p>
      <p>
        Across the square, a new bakery has opened. Its bread is cheaper than Mia&apos;s, and its bakers work from
        evening until the next afternoon. Mia can&apos;t understand how they manage it.
      </p>
      <p>Is being paid by the hour good for Sam, or bad? And what does it have to do with Mia&apos;s bread?</p>
    </>
  ),

  guess: (
    <p>
      If Sam&apos;s day gets longer but his pay for the day stays the same, what happens to the price of each hour? And
      on a slow day, when he is sent home early, who still gets their share?
    </p>
  ),

  struggle: [<SamePayCheaperHours key="a" />, <ShortWeeksHurt key="b" />],
  reveal: [<OvertimeAndTheRace key="c" />],

  eli5: "Being paid by the hour sounds fair, but the price of an hour can quietly fall. When there is little work, Sam earns too little to live, and when there is lots, he has to work very long days. Low pay per hour and long days keep pushing each other.",

  grownUp: (
    <>
      <p>
        <strong>Time-wages</strong> are the simplest form the wage takes: so much a day, a week, or an hour. Marx
        separates the total a worker takes home, the <strong>nominal wage</strong>, from the{" "}
        <strong>price of labour</strong>, the money paid for one hour. That price is the daily value of labour-power
        divided by the hours in the working day: 3 shillings over 12 hours is 3 pence an hour. So the day&apos;s pay can
        stay the same while the price of labour falls: 3&#8535;d. an hour for a 10-hour day, 3d. for 12 hours,
        2&#8534;d. for 15.
      </p>
      <p>
        Paying by the hour lets the employer drop the fixed day altogether. If Sam is used for only 6 or 8 hours, he
        gets 1s. 6d. or 2s., not enough to live on, though half of every hour he worked still went to the employer.
        Marx calls the 1860 revolt of London building workers against this &ldquo;hour system&rdquo; perfectly
        rational, and says a legal limit to the working day ends the worst of it.
      </p>
      <p>
        Many trades treat the first 10 hours or so as the normal day and pay a little extra for overtime. But the normal
        price is often so low that the worker must do overtime to earn enough, and even an overtime hour at 4d. still
        contains unpaid labour. Marx finds a general rule: the longer the working day in a trade, the lower the wages. A
        low price for an hour pushes days longer; longer days then let employers cut the price again. Competing masters
        pass the unpaid hours on to buyers as cheaper goods, as London bakers who got 18 hours of work for 12
        hours&apos; wages told Parliament.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        The day&apos;s pay is a poor guide to how a worker is doing. What matters is how much is paid for each hour, and
        how many hours there are. Under hourly pay, the employer can stretch the day when trade is good and cut it when
        trade is bad, and in both cases keep his share of every hour.
      </p>
      <p>
        Because low pay and long hours feed each other, Marx thinks only a legal limit on the working day can stop the
        slide.
      </p>
    </>
  ),

  critics: [
    {
      who: "The case for flexibility",
      point: (
        <p>
          Supporters of hourly pay argue it lets firms match work to demand without firing people, and suits the many
          workers, such as students and parents, who want fewer or more varied hours. They see flexible hours as a
          choice that benefits both sides, not only as a squeeze.
        </p>
      ),
    },
    {
      who: "What happened next",
      point: (
        <p>
          In rich countries, real pay per hour has risen many times over since Marx wrote, while the normal working week
          has fallen from around 60 hours to around 40. Critics say the slide Marx describes did not last. His defenders
          reply that it was stopped largely by the legal limits and unions Marx himself argued for.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Sam's day grows from 12 to 15 hours, still for 3 coins. What happens to the price of one hour?",
      options: ["It rises", "It stays the same", "It falls"],
      answer: 2,
      why: "The same 36 pennies are spread over more hours, so each hour gets cheaper: from 3 pennies to 2⅖.",
    },
    {
      q: "Sam is paid 3 pennies an hour but only gets 6 hours of work. Why is that so bad for him?",
      options: [
        "He earns only half his living, but the boss still keeps half of every hour he worked",
        "He is paid double",
        "Nothing changes for him",
      ],
      answer: 0,
      why: "Half of each hour goes to the boss. With only 6 hours, Sam gets just 18 pennies, half of what he needs.",
    },
    {
      q: "A factory inspector compared 20 years of wages. Where did wages rise?",
      options: ["In factories with 14 to 15-hour days", "In factories under the 10-hour law", "Nowhere at all"],
      answer: 1,
      why: "From 1839 to 1859, wages rose under the 10-hour law and fell where the days were longest.",
    },
  ],

  remember: [
    "The price of an hour = the day's pay ÷ the hours worked.",
    "The day's pay can stay the same while every hour gets cheaper.",
    "Paid by the hour, a worker can be under-worked as well as over-worked, and the boss keeps his share either way.",
    "Overtime pay still contains unpaid labour.",
    "Marx: the longer the working days in a trade, the lower the wages.",
  ],

  terms: ["time-wages", "price-of-labour", "nominal-wage"],

  source: (
    <p>
      Covers Volume I, Chapter 20 (&ldquo;Time-Wages&rdquo;). Marx&apos;s own: 3 shillings over 12 hours is 3d. an hour;
      3&#8535;d., 3d. and 2&#8534;d. for 10, 12 and 15-hour days; 6 or 8 hours paying 1s. 6d. or 2s.; the 1860 revolt of
      London building workers; the normal day and overtime; an overtime hour at 4d. against 3d.; factory inspector
      Redgrave&apos;s comparison of 1839 to 1859; the London bakers who got 18 hours&apos; work for 12 hours&apos;
      wages. The 10 regular hours plus 2 overtime hours in animation 20.3, and the new bakery, belong to this site.
    </p>
  ),
};

export default chapter;
