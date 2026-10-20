import type { ChapterContent } from "@/components/ChapterTemplate";
import { AvaBecomesAFragment, TheNeedlesJourney, TwoRoadsIntoTheWorkshop } from "./ch14-animations";

const chapter: ChapterContent = {
  bigQuestion: "What happens when one job is chopped into lots of tiny jobs?",

  story: (
    <>
      <p>
        Mr. Moneybags has a new plan: carriages. Rich people in the next town want them, and a carriage needs many
        crafts. So he invites the wheelwright, the harness-maker, the upholsterer, the glazier, the painter and Ava the
        tailor to work under one roof.
      </p>
      <p>
        At first Ava enjoys it. The pay is steady, and the work is easy: she sews the cushions for every carriage. Day
        after day, only cushions.
      </p>
      <p>
        One evening her friend Leo asks her to make him a new winter coat, the way she used to. Ava picks up her
        scissors and stops. She can&apos;t quite remember how to cut the sleeves.
      </p>
      <p>The workshop makes carriages faster than ever. So why does Ava feel like she has lost something?</p>
    </>
  ),

  guess: (
    <p>
      If one person does every step of a job, and five people each do one step, which makes more? And what might happen
      to a person who does only one tiny step, all day, for years?
    </p>
  ),

  struggle: [<TwoRoadsIntoTheWorkshop key="a" />, <TheNeedlesJourney key="b" />],
  reveal: [<AvaBecomesAFragment key="c" />],

  eli5: "When a big job is split into tiny steps, a team of workers can make things much faster. But each worker does only one little step, over and over, and forgets the rest. The whole skill ends up belonging to the boss's workshop instead of to the people.",

  grownUp: (
    <>
      <p>
        <strong>Manufacture</strong> is co-operation based on the <strong>division of labour</strong>, and Marx dates
        its heyday from the middle of the 16th century to the last third of the 18th. It arises in two ways. Workers of
        different crafts are gathered to make one product, as with the carriage, and each soon forgets their old
        trade. Or many workers of the same craft are gathered and the craft is broken up, as with needles: one
        Nuremberg needlemaker doing perhaps 20 operations becomes 20 English needlemakers doing one each.
      </p>
      <p>
        The result is the <strong>detail labourer</strong>, who performs one operation for life. Marx describes two
        forms: heterogeneous manufacture, where separate parts are made and then assembled (a watch), and serial
        manufacture, where the product passes through a chain of steps (needle wire through 72 or even 92 pairs of
        hands). Productivity rises because nobody switches tasks and every move is practised to perfection.
      </p>
      <p>
        Manufacture creates a hierarchy of labour-powers with a matching scale of wages, and a new class of unskilled
        workers for whom the cost of learning a trade vanishes. That lowers the value of labour-power, so it is one
        more way of producing relative surplus-value. Marx also stresses the human cost: the worker becomes a fragment,
        and the knowledge of the whole process now belongs to the workshop, which belongs to capital. Finally, he
        contrasts the division of labour in society, where independent producers are linked only by the market, with
        the division inside the workshop, planned by one authority.
      </p>
    </>
  ),

  marxSaid: (
    <>
      <p>
        Splitting work into tiny pieces really does make it more productive, and Marx admires that power. But under
        capitalism the gain is organised to increase surplus-value, and it is paid for by the workers, who are narrowed
        down to a single move while the understanding of the whole passes to the owner.
      </p>
      <p>
        He also notices an odd pair: the same people who praise the boss&apos;s total planning inside the workshop
        attack any idea of planning the economy as a whole, while society outside the workshop is left to the
        unplanned market.
      </p>
    </>
  ),

  critics: [
    {
      who: "Adam Smith and specialisation",
      point: (
        <p>
          Adam Smith opened <em>The Wealth of Nations</em> by praising the division of labour as the main source of
          growing wealth. Most economists still agree that specialisation is what makes modern living standards
          possible. Smith himself also worried that a life of a few simple operations would dull workers&apos; minds,
          and Marx quotes him on that very point.
        </p>
      ),
    },
    {
      who: "Modern management",
      point: (
        <p>
          Later research on work, for example on Toyota-style lean production, found that factories often do better
          when workers rotate tasks, solve problems in teams and learn several skills. Critics say this shows
          capitalism can reverse the narrowing Marx described. Others reply that it partly proves his point that narrow
          detail work wastes human ability.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "Mr. Moneybags gathers a wheelwright, a glazier, a painter and Ava the tailor to build carriages. What happens to Ava's old skill over time?",
      options: ["It gets better", "She slowly loses it, through lack of practice", "Nothing changes"],
      answer: 1,
      why: "Marx says the tailor in the carriage workshop gradually loses the ability to carry on his old trade.",
    },
    {
      q: "Why does a line of detail workers make more needles than one person doing every step?",
      options: [
        "Because nobody switches tasks and each gets very fast at one move",
        "Because the needles are smaller",
        "Because they work longer hours",
      ],
      answer: 0,
      why: "The productivity gain comes from the division of labour itself, in the same hours.",
    },
    {
      q: "According to Marx, how is work divided in the town compared with inside the workshop?",
      options: [
        "Both are planned by the boss",
        "The town is linked only by the market, while the workshop is planned by one boss",
        "Neither has any division of labour",
      ],
      answer: 1,
      why: "Marx calls it anarchy in the social division of labour and despotism in the workshop.",
    },
  ],

  remember: [
    "Manufacture splits one craft into many small steps, each done by a different worker.",
    "It grows by gathering different crafts under one roof (the carriage) or by breaking one craft apart (the needle).",
    "Detail work raises productivity, and creates a ladder of skilled and unskilled jobs.",
    "Workers become fragments, while the knowledge of the whole job belongs to the boss's workshop.",
    "The town is linked by the market with no plan. The workshop is planned by one boss.",
  ],

  terms: ["manufacture", "detail-labourer", "division-of-labour"],

  source: (
    <p>
      Covers Volume I, Chapter 14 (Fowkes: &ldquo;The Division of Labour and Manufacture&rdquo;), all five sections.
      Marx&apos;s own examples: the carriage made by wheelwrights, harness-makers, tailors, upholsterers, glaziers and
      others, with the tailor losing his old trade; the Nuremberg needlemaker&apos;s perhaps 20 operations and 20
      English needlemakers; needle wire through 72 or 92 detail workers; the watch; the hierarchy of labour-powers and
      unskilled labour; &ldquo;anarchy&rdquo; and &ldquo;despotism&rdquo;; Adam Smith on simple operations dulling the
      mind. Marx does not discuss Smith&apos;s famous pin factory directly here. Ava&apos;s story and the five-station
      needle line belong to this site.
    </p>
  ),
};

export default chapter;
