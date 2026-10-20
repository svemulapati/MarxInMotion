import type { ChapterContent } from "@/components/ChapterTemplate";
import { TheTreeAndThePot, TwoWaysToShare } from "./ch51-animations";

const chapter: ChapterContent = {
  bigQuestion: "Is the way we share things out just how the world has to be?",

  story: (
    <>
      <p>
        Mia is reading an old book about a faraway village long ago. Nobody there was paid wages, and nobody collected rent.
        The villagers worked the fields together, ate their share, and put the rest into a common store.
      </p>
      <p>
        &ldquo;That&apos;s silly,&rdquo; says Mr. Moneybags, looking over her shoulder. &ldquo;Sharing has always been wages,
        profit and rent, really. They just hadn&apos;t worked it out yet.&rdquo;
      </p>
      <p>Mia isn&apos;t so sure. Is our way of sharing the only natural way, or did it begin at some point in history?</p>
    </>
  ),

  guess: (
    <p>
      If the way a society shares its harvest can change, can the way it makes things change too? Or is one fixed forever?
    </p>
  ),

  struggle: [<TwoWaysToShare key="a" />],
  reveal: [<TheTreeAndThePot key="b" />],

  eli5: "Different peoples have shared their work in different ways. Marx says the way we share depends on the way we make things. Both grew up in history, so both can change.",

  grownUp: (
    <>
      <p>
        Wages, profit and rent are <strong>distribution relations</strong>: the forms in which new value is shared among
        the owners of labour-power, capital and land. The common view, Marx says, treats them as natural, and treats older
        ways of sharing as undeveloped versions of the same thing.
      </p>
      <p>
        He allows one true point in this. Every society, from early village communities in India to what he calls the
        communism of the Peruvians, splits its labour into a part consumed by the producers and a surplus serving wider
        social needs. But a more critical thinker, John Stuart Mill, went only halfway: he admitted that distribution changes
        through history but held that the laws of production are unchanging.
      </p>
      <p>
        Marx replies that <strong>production relations</strong> are historical too. Capitalism has two marks from the
        start: it produces commodities, so that even labour-power is bought and sold, and it makes surplus-value the direct
        aim of production. The distribution relations are the other side of these production relations. When the
        contradictions between the productive forces and their social form deepen, he says, the specific historical form
        is discarded and makes way for a higher one.
      </p>
    </>
  ),

  marxSaid: (
    <p>
      The way income is shared in capitalism is not a law of nature. It follows from a particular way of producing, in which
      some own the means of production and others sell their labour-power. That way of producing arose in history and, Marx
      argues, will one day be replaced.
    </p>
  ),

  critics: [
    {
      who: "The calculation argument",
      point: (
        <p>
          Ludwig von Mises (1920) and Friedrich Hayek argued that some features of market economies, such as prices formed in
          exchange, are needed for any large modern economy to calculate rationally. If so, the ways of producing and sharing
          cannot be redesigned as freely as Marx hoped. Defenders reply that planning and markets can be combined, and point
          to debates that continue today.
        </p>
      ),
    },
    {
      who: "Historians of economies",
      point: (
        <p>
          Many historians and anthropologists, such as Karl Polanyi in <em>The Great Transformation</em> (1944), agree with
          Marx that market society is recent and that older societies shared their products in very different ways. They
          differ widely, though, on what should come next.
        </p>
      ),
    },
  ],

  quiz: [
    {
      q: "In the old village commune, where did the surplus go?",
      options: ["To a landlord as rent", "Into a common store for shared needs", "Into a bank"],
      answer: 1,
      why: "Marx notes that older communities also had a surplus, but it served common needs rather than profit, interest and rent.",
    },
    {
      q: "What did John Stuart Mill believe, according to Marx?",
      options: [
        "Sharing and making both change",
        "Sharing changes through history, but the laws of making never change",
        "Nothing ever changes",
      ],
      answer: 1,
      why: "Marx says Mill went halfway: he saw that distribution is historical, but not production.",
    },
    {
      q: "What are capitalism's two marks in this chapter?",
      options: [
        "Everything is made for sale, and the aim is surplus-value",
        "Big cities and railways",
        "Gold coins and banks",
      ],
      answer: 0,
      why: "Commodity production, even of labour-power, and production for surplus-value.",
    },
  ],

  remember: [
    "Every society has a surplus. Who gets it differs from society to society.",
    "Wages, profit and rent are one way of sharing, not the only one.",
    "Marx says the way of sharing follows the way of making, and both are historical.",
    "His claim: when growing powers outgrow the old form, the form gives way to a new one.",
  ],

  terms: ["distribution-relations", "production-relations"],

  source: (
    <p>
      Covers Volume III, Chapter 51 (&ldquo;Distribution Relations and Production Relations&rdquo;), English translation as
      hosted on marxists.org. Volume III was put together by Friedrich Engels from Marx&apos;s manuscripts and published in
      1894. The examples of Indian communities and the Peruvians, the reference to John Stuart Mill, and the two
      characteristic features of capitalist production are Marx&apos;s; the village story and the tree and pot image are this
      site&apos;s.
    </p>
  ),
};

export default chapter;
