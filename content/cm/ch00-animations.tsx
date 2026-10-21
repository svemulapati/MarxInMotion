"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Place } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** A small printed pamphlet, the Manifesto's red-and-black cover. */
export function Pamphlet({ title = "Manifesto" }: { title?: string }) {
  return (
    <g>
      <rect x="-14" y="-19" width="28" height="38" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <rect x="-14" y="-19" width="28" height="9" fill="#c0392b" />
      <line x1="-9" y1="-1" x2="9" y2="-1" stroke="#000" strokeOpacity=".5" />
      <line x1="-9" y1="4" x2="9" y2="4" stroke="#000" strokeOpacity=".5" />
      <line x1="-9" y1="9" x2="5" y2="9" stroke="#000" strokeOpacity=".5" />
      <text y="28" textAnchor="middle" fontSize="7">
        {title}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 0.1 · Why it was written
 * ───────────────────────────────────────────────────────────── */
export function WhyItWasWritten() {
  return (
    <Player
      id="anim-cm-0-1"
      title="0.1 · Why it was written"
      steps={[
        { caption: "1847. A small group of workers called the Communist League meets in London. It has to meet in secret, because groups like it are not allowed in much of Europe." },
        { caption: "In November 1847 the League asks two members, Karl Marx and Friedrich Engels, to write down what the League believes and what it wants." },
        { caption: "Engels has already tried. His draft is a list of questions and answers, like a quiz. He writes to Marx: let's drop the question form and call it a manifesto." },
        { caption: "Marx writes it out in German in Brussels in January 1848, building on Engels' draft. It is short enough to read in an evening." },
        {
          caption: "The manuscript goes to a printer in London. The little German pamphlet comes out in February 1848, just weeks before revolutions break out across Europe.",
          ms: 4600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the secret meeting room */}
          <Fade show={s <= 1}>
            <rect x="30" y="40" width="300" height="168" fill="#fff" stroke="#000" />
            <text x="45" y="58" fontSize="9" fillOpacity=".6">
              London, November 1847 · a meeting behind closed doors
            </text>
            <rect x="90" y="120" width="180" height="16" fill="#8a5a2b" />
            {[0, 1, 2, 3, 4].map((i) => (
              <Figure key={i} name="" label={false} x={105 + i * 38} y={176} scale={0.55} />
            ))}
          </Fade>
          <Fade show={s === 1}>
            <Figure name="Marx" x={300} y={182} scale={0.65} />
            <Figure name="Engels" x={60} y={182} scale={0.65} />
            <text x="180" y="100" textAnchor="middle" fontSize="11" fontWeight="600">
              &ldquo;Write our programme!&rdquo;
            </text>
          </Fade>

          {/* Engels' quiz-style draft */}
          <Fade show={s === 2}>
            <Figure name="Engels" x={70} y={196} scale={0.8} />
            <g transform="translate(130 50)">
              <rect width="90" height="110" fill="#fffbe6" stroke="#000" />
              <text x="8" y="18" fontSize="8" fontWeight="600">
                Q1. What is…?
              </text>
              <text x="8" y="32" fontSize="8">
                A. …
              </text>
              <text x="8" y="50" fontSize="8" fontWeight="600">
                Q2. What is…?
              </text>
              <text x="8" y="64" fontSize="8">
                A. …
              </text>
              <text x="45" y="100" textAnchor="middle" fontSize="8" fillOpacity=".6">
                a quiz-style draft
              </text>
            </g>
            <path d="M228,105 L268,105" stroke="#000" markerEnd="url(#cm0-arr)" />
            <g transform="translate(300 100)">
              <Pamphlet />
            </g>
          </Fade>

          {/* Marx writing in Brussels */}
          <Fade show={s === 3}>
            <Figure name="Marx" x={120} y={196} />
            <rect x="160" y="140" width="130" height="10" fill="#8a5a2b" />
            <g transform="translate(225 118)">
              <rect x="-22" y="-14" width="44" height="28" fill="#fff" stroke="#000" />
              <path d="M-14,-4 h28 M-14,2 h28 M-14,8 h18" stroke="#000" strokeOpacity=".5" />
            </g>
            <text x="225" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
              Brussels, January 1848
            </text>
          </Fade>

          {/* printed in London, Europe catches fire */}
          <Fade show={s === 4}>
            <Place x={90} y={110} scale={1.4}>
              <Pamphlet />
            </Place>
            <text x="90" y="170" textAnchor="middle" fontSize="10" fontWeight="600">
              London, February 1848
            </text>
            {[
              ["Paris", 215, 90],
              ["Vienna", 300, 120],
              ["Berlin", 270, 70],
              ["Milan", 240, 160],
            ].map(([city, x, y], i) => (
              <g key={city as string} transform={`translate(${x} ${y})`}>
                <path d="M0,-12 C6,-4 6,2 0,6 C-6,2 -6,-4 0,-12 Z" fill="#e67e22" className="cm0-flicker" style={{ animationDelay: `${i * 150}ms` }} />
                <text y="20" textAnchor="middle" fontSize="8.5">
                  {city as string}
                </text>
              </g>
            ))}
            <text x="260" y="205" textAnchor="middle" fontSize="9.5">
              1848: revolutions across Europe
            </text>
          </Fade>

          <defs>
            <marker id="cm0-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
          <style>{`
            @keyframes cmc00-flicker { 0%, 100% { opacity: 1; } 50% { opacity: .55; } }
            .cm0-flicker { animation: cmc00-flicker .9s ease-in-out infinite; }
          `}</style>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 0.2 · Marx on the move (why he had to leave)
 * Stylised map, not to scale.
 * ───────────────────────────────────────────────────────────── */
const CITY = {
  London: [70, 62],
  Brussels: [160, 98],
  Cologne: [238, 92],
  Paris: [130, 168],
} as const;
type City = keyof typeof CITY;

const STOPS: { at: City; year: string; why: string }[] = [
  { at: "Paris", year: "1845", why: "expelled from France" },
  { at: "Brussels", year: "1845 to 1848", why: "arrested and deported" },
  { at: "Paris", year: "March 1848", why: "invited back" },
  { at: "Cologne", year: "1848 to 1849", why: "banished from Germany" },
  { at: "Paris", year: "June 1849", why: "banished again" },
  { at: "London", year: "from August 1849", why: "home for good" },
];

export function MarxOnTheMove() {
  return (
    <Player
      id="anim-cm-0-2"
      title="0.2 · Marx on the move"
      steps={[
        { caption: "Marx was born in Germany, but his writing angered the Prussian government. He moved to Paris. In 1845, at Prussia's request, France expelled him." },
        { caption: "He moved to Brussels in Belgium. That is where he and Engels wrote the Manifesto." },
        { caption: "In February 1848 revolution broke out in Paris. Belgium's government feared it would spread, so it arrested Marx and deported him. France's new government invited him back to Paris." },
        { caption: "When revolution reached Germany, Marx went to Cologne and ran a daily paper, the Neue Rheinische Zeitung, from June 1848." },
        { caption: "When the uprisings were crushed, Prussia banished him in May 1849. The paper's last issue was printed in red ink." },
        {
          caption: "He went back to Paris, but was banished again after a protest in June 1849. So he crossed to London, and lived there for the rest of his life, often very poor.",
          ms: 5200,
        },
      ]}
      viewBox="0 0 360 230"
    >
      {(s) => {
        const stop = STOPS[s];
        const [x, y] = CITY[stop.at];
        const path = STOPS.slice(0, s + 1).map((st) => CITY[st.at]);
        return (
          <>
            {/* sea and coast, very roughly */}
            <path d="M0,0 H120 C110,40 100,70 112,96 C80,120 60,140 0,150 Z" fill="#dce9f5" />
            <text x="40" y="118" fontSize="8" fill="#5b7fa6">
              the sea
            </text>
            <text x="350" y="222" textAnchor="end" fontSize="7.5" fillOpacity=".5">
              map not to scale
            </text>

            {/* the trail so far */}
            <polyline points={path.map((p) => p.join(",")).join(" ")} fill="none" stroke="#c0392b" strokeWidth="2" strokeDasharray="5 4" />

            {(Object.keys(CITY) as City[]).map((c) => (
              <g key={c} transform={`translate(${CITY[c][0]} ${CITY[c][1]})`}>
                <circle r="5" fill={c === stop.at ? "#c0392b" : "#000"} />
                <text x="0" y="-9" textAnchor="middle" fontSize="9.5" fontWeight={c === stop.at ? 700 : 400}>
                  {c}
                </text>
              </g>
            ))}

            {/* Marx walks the route */}
            <g style={{ transform: `translate(${x}px, ${y + 34}px)`, transition: `transform ${T}` }}>
              <Figure name="Marx" x={0} y={0} scale={0.5} label={false} />
            </g>

            {/* where and why */}
            <rect x="200" y="140" width="150" height="46" fill="#fff" stroke="#000" />
            <text x="210" y="158" fontSize="10" fontWeight="600">
              {stop.at}, {stop.year}
            </text>
            <text x="210" y="175" fontSize="9.5" fill={s === 5 ? "#2a9d5b" : "#c0392b"}>
              {stop.why}
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 0.3 · Forgotten, then everywhere
 * ───────────────────────────────────────────────────────────── */
const EVENTS = [
  { year: "1848", text: "printed" },
  { year: "1852", text: "trial in Cologne" },
  { year: "1872", text: "reprinted" },
  { year: "1890", text: "worldwide" },
  { year: "1900s", text: "argued over" },
];

export function ForgottenThenEverywhere() {
  return (
    <Player
      id="anim-cm-0-3"
      title="0.3 · Forgotten, then everywhere"
      steps={[
        { caption: "In 1848 hardly anyone noticed the little pamphlet. The revolutions were soon defeated." },
        {
          caption: "Police arrested League members in Cologne. In 1852 seven were sentenced to prison in a fortress, and the League broke up. Engels later wrote that the Manifesto seemed doomed to be forgotten.",
          ms: 4600,
        },
        { caption: "Then, after the Paris Commune of 1871, people wanted to read it again. In their 1872 preface, Marx and Engels said some details were already out of date." },
        { caption: "Translations multiplied: English, Russian, French, Danish, Spanish, Polish and more. By 1890 Engels called it the most widely spread socialist text of all." },
        {
          caption: "In the 1900s, parties and governments that claimed Marx printed it by the million, and some ruled with one party, prisons and famine. Others read it as a sharp early picture of a world joined by trade. People still argue about it.",
          ms: 5600,
        },
      ]}
      viewBox="0 0 360 230"
    >
      {(s) => {
        const copies = [1, 1, 3, 9, 24][s];
        return (
          <>
            <line x1="30" y1="190" x2="330" y2="190" stroke="#000" strokeWidth="2" />
            {EVENTS.map((e, i) => (
              <g key={e.year} transform={`translate(${45 + i * 67} 190)`}>
                <circle r={i === s ? 6 : 4} fill={i <= s ? "#000" : "#fff"} stroke="#000" strokeWidth="1.5" style={{ transition: `r ${T}` }} />
                <text y="16" textAnchor="middle" fontSize="9" fontWeight={i === s ? 700 : 400}>
                  {e.year}
                </text>
                <text y="28" textAnchor="middle" fontSize="7.5" fillOpacity=".6">
                  {e.text}
                </text>
              </g>
            ))}

            {/* the pile of copies grows */}
            {Array.from({ length: 24 }, (_, i) => (
              <g
                key={i}
                style={{
                  opacity: i < copies ? 1 : 0,
                  transform: `translate(${60 + (i % 8) * 32}px, ${150 - Math.floor(i / 8) * 46}px) scale(.8)`,
                  transition: `opacity 400ms ease ${i * 25}ms`,
                }}
              >
                <Pamphlet title="" />
              </g>
            ))}

            {/* the trial */}
            <Fade show={s === 1}>
              <g transform="translate(270 70)">
                <rect x="-40" y="-26" width="80" height="52" fill="#fff" stroke="#000" />
                {[-28, -14, 0, 14, 28].map((bx) => (
                  <line key={bx} x1={bx} y1="-26" x2={bx} y2="26" stroke="#000" strokeWidth="2" />
                ))}
                <text y="42" textAnchor="middle" fontSize="8.5">
                  Cologne, 1852
                </text>
              </g>
            </Fade>

            {/* two readings */}
            <Fade show={s === 4} delay={300}>
              <rect x="20" y="10" width="150" height="34" fill="#fff" stroke="#c0392b" />
              <text x="95" y="24" textAnchor="middle" fontSize="8.5">
                used by one-party states
              </text>
              <text x="95" y="36" textAnchor="middle" fontSize="8.5">
                with prisons and famine
              </text>
              <rect x="190" y="10" width="150" height="34" fill="#fff" stroke="#2f6fd6" />
              <text x="265" y="24" textAnchor="middle" fontSize="8.5">
                read as an early picture
              </text>
              <text x="265" y="36" textAnchor="middle" fontSize="8.5">
                of a world joined by trade
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
