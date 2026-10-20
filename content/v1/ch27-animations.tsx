"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cow, Fade, Place, Tag } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* Small drawings used only in this chapter. Each is centred on (0, 0). */
const Sheep = () => (
  <g>
    <ellipse rx="11" ry="7" fill="#fff" stroke="#000" strokeWidth="1" />
    <ellipse cx="11" cy="-3" rx="4" ry="3.5" fill="#333" />
    <line x1="-6" y1="6" x2="-6" y2="11" stroke="#000" strokeWidth="1.5" />
    <line x1="5" y1="6" x2="5" y2="11" stroke="#000" strokeWidth="1.5" />
  </g>
);
const Cottage = () => (
  <g>
    <path d="M-16,10 V-4 L0,-16 L16,-4 V10 Z" fill="#f3e3b3" stroke="#000" strokeWidth="1.1" />
    <path d="M-19,-3 L0,-19 L19,-3" fill="none" stroke="#8a5a2b" strokeWidth="3" />
    <rect x="-4" y="0" width="8" height="10" fill="#8a5a2b" />
  </g>
);
const Goose = () => (
  <g>
    <ellipse rx="7" ry="5" fill="#fff" stroke="#000" strokeWidth="1" />
    <path d="M5,-2 Q8,-12 11,-11" fill="none" stroke="#000" strokeWidth="2" />
    <path d="M11,-11 l4,1" stroke="#e8a33d" strokeWidth="2" />
  </g>
);
const Firewood = () => (
  <g stroke="#000" strokeWidth=".8" fill="#a06a35">
    <rect x="-12" y="-2" width="24" height="5" rx="2" />
    <rect x="-10" y="-7" width="20" height="5" rx="2" />
    <rect x="-7" y="-12" width="14" height="5" rx="2" />
  </g>
);
const Strips = () => (
  <g>
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={-28 + i * 14} y="-10" width="13" height="20" fill={i % 2 ? "#b7d48f" : "#d9c27a"} stroke="#000" strokeWidth=".6" />
    ))}
  </g>
);

/* ─────────────────────────────────────────────────────────────
 * 27.1 · The common land (Sam's great-grandparents are driven off)
 * ───────────────────────────────────────────────────────────── */
export function TheCommonLand() {
  return (
    <Player
      id="anim-27-1"
      title="27.1 · The common land"
      steps={[
        {
          caption: "Long ago, Sam's great-grandparents Bess and Will farmed a strip of field. Like everyone in the village, they shared the common land: grass for their cow, a pond for their goose, and wood for the fire.",
          ms: 5000,
        },
        { caption: "Then wool begins to sell for a high price. The Lord of the Manor does the sums: sheep would pay him better than people." },
        { caption: "He puts a fence around the common. The cow has nowhere to graze and there is no more firewood. Sheep move in." },
        { caption: "Their strip of field is turned into sheep pasture too. A few shepherds can mind a field that once fed many families. Bess and Will have to leave." },
        {
          caption: "They walk to town with nothing but their hands: free to work for anyone, and forced to. Their great-grandson is Sam.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const fenced = s >= 2;
        const gone = s >= 3;
        return (
          <>
            {/* the common */}
            <rect x="150" y="40" width="196" height="112" fill="#cfe5b0" stroke="#000" strokeOpacity=".15" />
            <text x="248" y="54" textAnchor="middle" fontSize="9" fillOpacity=".6">
              {fenced ? "the Lord's pasture" : "the common, shared by all"}
            </text>
            <ellipse cx="306" cy="128" rx="22" ry="9" fill="#9ccbe8" />

            {/* village life on the common */}
            <Place x={200} y={110} scale={0.8} show={!fenced}>
              <Cow />
            </Place>
            <Place x={306} y={120} show={!fenced}>
              <Goose />
            </Place>
            <Place x={250} y={90} show={!fenced}>
              <Firewood />
            </Place>

            {/* sheep arrive */}
            {[
              [190, 90],
              [230, 120],
              [270, 90],
              [205, 136],
              [255, 134],
              [320, 105],
            ].map(([x, y], i) => (
              <Place key={i} x={x} y={y} show={fenced} delay={i * 120}>
                <Sheep />
              </Place>
            ))}

            {/* the fence */}
            <rect
              x="150"
              y="40"
              width="196"
              height="112"
              fill="none"
              stroke="#5a3a1a"
              strokeWidth="3"
              strokeDasharray="10 4"
              style={{ opacity: fenced ? 1 : 0, transition: "opacity 600ms" }}
            />

            {/* the family's strip and cottage */}
            <g style={{ opacity: gone ? 0.25 : 1, transition: "opacity 600ms" }}>
              <g transform="translate(70 70)">
                <Cottage />
              </g>
              <g transform="translate(70 112)">
                <Strips />
              </g>
            </g>
            <Place x={70} y={112} show={gone}>
              <Sheep />
            </Place>

            {/* the Lord and the price of wool */}
            <Fade show={s >= 1 && s <= 3}>
              <Figure name="Lord of the Manor" x={322} y={208} scale={0.7} />
              <g transform="translate(280 194)">
                <Tag text="wool: dear" />
              </g>
            </Fade>

            {/* Bess and Will */}
            <g style={{ transform: `translateX(${s === 4 ? 200 : 0}px)`, transition: `transform 1200ms cubic-bezier(.4,0,.2,1)` }}>
              <Figure name="Bess" x={46} y={208} scale={0.7} mood={s >= 2 ? "sad" : "happy"} />
              <Figure name="Will" x={84} y={208} scale={0.7} mood={s >= 2 ? "sad" : "happy"} />
            </g>
            <Fade show={s === 4} delay={900}>
              <text x="276" y="30" textAnchor="middle" fontSize="10" fontWeight="600">
                to town, with nothing
              </text>
              <g transform="translate(336 208)">
                <line x1="0" y1="0" x2="0" y2="-40" stroke="#5a3a1a" strokeWidth="2.5" />
                <path d="M-14,-46 h26 l7,7 l-7,7 h-26 Z" fill="#fff" stroke="#000" />
                <text x="-1" y="-36" textAnchor="middle" fontSize="6.5">
                  Tiny Town
                </text>
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 27.2 · Sheep that eat people (England, 1489 to 1831)
 * ───────────────────────────────────────────────────────────── */
const STOPS = [
  { year: "1489", head: "Fields become pasture", line: "Francis Bacon notes enclosures growing", sub: "more frequent; a few herdsmen replace many" },
  { year: "1516", head: "“Sheep eat men”", line: "Thomas More, in Utopia: the sheep", sub: "have become so greedy they swallow people" },
  { year: "1530s", head: "Church lands taken", line: "monasteries closed, their lands handed", sub: "to royal favourites; tenants driven out" },
  { year: "1750", head: "Small farmers gone", line: "by about now the yeomanry,", sub: "England's independent peasants, had vanished" },
  { year: "1801–31", head: "Enclosure by law", line: "Acts of Parliament give the landlords", sub: "3,511,770 acres of common land" },
];
const sx = (i: number) => 40 + i * 70;

export function SheepThatEatPeople() {
  return (
    <Player
      id="anim-27-2"
      title="27.2 · Sheep that eat people"
      steps={[
        { caption: "In England it began in the late 1400s. The philosopher Francis Bacon wrote that by 1489 farmland was more and more often turned into pasture for sheep, which a few herdsmen could look after." },
        { caption: "In 1516 Thomas More wrote that English sheep, once so gentle, had become so greedy that they were eating up the people." },
        { caption: "Next, the Church lost its huge lands. Many were given away to royal favourites, and the people who lived on them were pushed out." },
        { caption: "By about 1750, Marx says, England's independent small farmers, the yeomanry, had disappeared." },
        {
          caption: "Then Parliament itself joined in. Between 1801 and 1831, Acts of Enclosure handed 3,511,770 acres of common land to landlords, without a penny paid to the people who used it.",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {/* villagers' houses disappear as the sheep advance */}
          {Array.from({ length: 10 }, (_, i) => (
            <g key={i}>
              <g transform={`translate(${30 + i * 33} 52) scale(.55)`} style={{ opacity: i < 10 - s * 2 ? 1 : 0, transition: "opacity 600ms" }}>
                <Cottage />
              </g>
              <g transform={`translate(${30 + i * 33} 52)`} style={{ opacity: i < 10 - s * 2 ? 0 : 1, transition: "opacity 600ms 300ms" }}>
                <Sheep />
              </g>
            </g>
          ))}

          {/* the card for this stop */}
          {STOPS.map((st, i) => (
            <Fade key={st.year} show={s === i} delay={200}>
              <text x="180" y="92" textAnchor="middle" fontSize="14" fontWeight="600">
                {st.head}
              </text>
              <text x="180" y="110" textAnchor="middle" fontSize="10">
                {st.line}
              </text>
              <text x="180" y="124" textAnchor="middle" fontSize="10">
                {st.sub}
              </text>
            </Fade>
          ))}

          {/* the timeline */}
          <line x1={sx(0)} y1="170" x2={sx(4)} y2="170" stroke="#000" strokeWidth="2" />
          {STOPS.map((st, i) => (
            <g key={st.year}>
              <circle
                cx={sx(i)}
                cy="170"
                r={i === s ? 6 : 4}
                fill={i <= s ? "#000" : "#fff"}
                stroke="#000"
                strokeWidth="1.5"
                style={{ transition: `all ${T}` }}
              />
              <text x={sx(i)} y="192" textAnchor="middle" fontSize="9" fillOpacity={i === s ? 1 : 0.45}>
                {st.year}
              </text>
            </g>
          ))}
          <text x="180" y="214" textAnchor="middle" fontSize="9" fillOpacity=".55">
            houses become sheep-walks
          </text>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 27.3 · The Sutherland clearance (Scotland, 1814 to 1820)
 * Marx's figures: 15,000 people (about 3,000 families), 794,000 acres,
 * 6,000 acres on the shore, 29 sheep farms, 131,000 sheep by 1835.
 * ───────────────────────────────────────────────────────────── */
export function TheSutherlandClearance() {
  const houses = Array.from({ length: 30 }, (_, i) => [70 + (i % 10) * 24, 60 + Math.floor(i / 10) * 26]);
  return (
    <Player
      id="anim-27-3"
      title="27.3 · The Sutherland clearance"
      steps={[
        {
          caption: "In the Scottish Highlands, 15,000 people, about 3,000 families, lived on land their clan had used for as long as anyone could remember. (Each house here stands for 500 people.)",
          ms: 5000,
        },
        { caption: "From 1814 to 1820 the Duchess of Sutherland had them all driven out and their villages pulled down, to turn the land over to sheep." },
        {
          caption: "She kept 794,000 acres. The people were given 6,000 acres on the sea-shore: about 2 acres a family. Compare the two squares.",
          ms: 4800,
        },
        { caption: "The land became 29 huge sheep farms. By 1835, 131,000 sheep lived where 15,000 people had." },
        {
          caption: "Marx calls this the clearing of estates: sweeping people off the land. Later, he adds, some of the sheep-walks were turned into deer forests for hunting.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the glen and the sea */}
          <path d="M0,150 Q90,30 180,60 Q270,30 360,150 Z" fill="#cfe5b0" />
          <rect x="0" y="186" width="360" height="34" fill="#9ccbe8" />
          <rect x="0" y="176" width="360" height="12" fill="#e8d9a8" />
          <text x="350" y="212" textAnchor="end" fontSize="8.5" fillOpacity=".6">
            the sea-shore
          </text>

          {/* the clan's houses, cleared */}
          {houses.map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y}) scale(.5)`} style={{ opacity: s === 0 ? 1 : 0.12, transition: `opacity 500ms ${i * 25}ms` }}>
              <Cottage />
            </g>
          ))}

          {/* the people pushed to the shore */}
          {Array.from({ length: 30 }, (_, i) => {
            const [hx, hy] = houses[i];
            const onShore = s >= 1;
            return (
              <circle
                key={i}
                r="3"
                fill="#9a9a9a"
                stroke="#000"
                strokeWidth=".6"
                style={{
                  transform: `translate(${onShore ? 20 + i * 11 : hx}px, ${onShore ? 181 : hy + 10}px)`,
                  transition: `transform 1100ms cubic-bezier(.4,0,.2,1) ${i * 20}ms`,
                }}
              />
            );
          })}

          {/* acres compared: square areas to scale */}
          <Fade show={s === 2} delay={300}>
            <rect x="88" y="44" width="115" height="115" fill="#fff" fillOpacity=".85" stroke="#000" />
            <text x="145" y="98" textAnchor="middle" fontSize="10" fontWeight="600">
              794,000 acres
            </text>
            <text x="145" y="112" textAnchor="middle" fontSize="9">
              kept by the Duchess
            </text>
            <rect x="222" y="149" width="10" height="10" fill="#d6452f" stroke="#000" />
            <text x="238" y="152" fontSize="10" fontWeight="600">
              6,000 acres
            </text>
            <text x="238" y="164" fontSize="9">
              for 15,000 people
            </text>
          </Fade>

          {/* sheep take over */}
          {Array.from({ length: 13 }, (_, i) => (
            <Place key={i} x={70 + (i % 7) * 36 + (i >= 7 ? 18 : 0)} y={80 + Math.floor(i / 7) * 40} show={s >= 3} delay={i * 80} scale={0.9}>
              <Sheep />
            </Place>
          ))}
          <Fade show={s >= 3} delay={600}>
            <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              131,000 sheep, 29 sheep farms
            </text>
            <text x="180" y="166" textAnchor="middle" fontSize="8.5" fillOpacity=".7">
              each sheep here stands for about 10,000
            </text>
          </Fade>
          <Fade show={s === 4} delay={300}>
            <text x="180" y="24" textAnchor="middle" fontSize="11" fill="#d6452f" fontWeight="600">
              the clearing of estates
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
