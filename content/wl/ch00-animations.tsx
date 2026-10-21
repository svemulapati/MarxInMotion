"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, Place, Tick } from "@/components/anim/Things";

/** Marx himself, drawn as a gray one-off: a round head with a very large beard. */
export function MarxHead({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g style={{ transform: `translate(${x}px, ${y}px) scale(${scale})`, transition: "transform 900ms cubic-bezier(.2,.8,.2,1)" }}>
      <polygon points="-13,-34 -7,-40 7,-40 13,-34 13,0 -13,0" fill="#6d6d6d" />
      <path d="M-13,-46 Q-16,-20 0,-14 Q16,-20 13,-46 Z" fill="#9a9a9a" stroke="#000" strokeWidth="1.2" />
      <circle cx="0" cy="-50" r="10" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <path d="M-10,-47 Q0,-36 10,-47 Q8,-34 0,-30 Q-8,-34 -10,-47 Z" fill="#9a9a9a" stroke="#000" strokeWidth="1" />
      <path d="M-10,-54 Q-12,-64 0,-62 Q12,-64 10,-54" fill="#9a9a9a" stroke="#000" strokeWidth="1" />
      <circle cx="-3.5" cy="-52" r="1.3" />
      <circle cx="3.5" cy="-52" r="1.3" />
    </g>
  );
}

/** A folded newspaper with a headline. */
function Paper({ title, sub, stamp }: { title: string; sub?: string; stamp?: string }) {
  return (
    <g>
      <rect x="-46" y="-30" width="92" height="60" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <text y="-17" textAnchor="middle" fontSize="7.5" fontWeight="700">
        {title}
      </text>
      <line x1="-38" y1="-11" x2="38" y2="-11" stroke="#000" strokeWidth=".8" />
      {sub && (
        <text y="0" textAnchor="middle" fontSize="7">
          {sub}
        </text>
      )}
      {[9, 15, 21].map((yy) => (
        <line key={yy} x1="-36" y1={yy} x2="36" y2={yy} stroke="#000" strokeOpacity=".25" />
      ))}
      {stamp && (
        <g transform="translate(0 14) rotate(-10)">
          <rect x="-30" y="-8" width="60" height="16" fill="none" stroke="#d6452f" strokeWidth="1.6" />
          <text y="4" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#d6452f">
            {stamp}
          </text>
        </g>
      )}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 0.1 · From a lecture to a newspaper (why it was written, how it was printed)
 * ───────────────────────────────────────────────────────────── */
export function FromLectureToNewspaper() {
  return (
    <Player
      id="anim-wl-0-1"
      title="0.1 · From a lecture to a newspaper"
      steps={[
        { caption: "Brussels, late December 1847. In a room of the German Workers' Society, workers who had left Germany to find jobs gather after a long day." },
        { caption: "Karl Marx stands up and asks them a simple question: what are your wages, really? He promises to explain it in plain words, with no big book learning needed." },
        { caption: "Then the world turns upside down. In February 1848 revolutions break out across Europe, and the lectures sit in a drawer." },
        { caption: "In Cologne, Marx starts a daily paper, the Neue Rheinische Zeitung. In April 1849 he prints the lectures in it, as front-page articles called Wage-Labour and Capital.", ms: 4600 },
        { caption: "On May 19, 1849 the paper prints its last issue, all in red ink. The articles promised to be continued. They never were.", ms: 4600 },
      ]}
    >
      {(s) => (
        <>
          {/* the lecture room */}
          <Fade show={s <= 1}>
            <rect x="20" y="30" width="320" height="170" fill="#fff" stroke="#000" strokeOpacity=".2" />
            <text x="180" y="48" textAnchor="middle" fontSize="9" fillOpacity=".6">
              Brussels, December 1847
            </text>
            <rect x="200" y="62" width="120" height="58" fill="#2a2a2a" />
            <text x="260" y="85" textAnchor="middle" fontSize="10" fill="#fff">
              What are
            </text>
            <text x="260" y="100" textAnchor="middle" fontSize="10" fill="#fff">
              wages?
            </text>
            <MarxHead x={170} y={150} scale={0.9} />
            {[45, 80, 115].map((x, i) => (
              <Figure key={x} name="" label={false} x={x} y={190} scale={0.65} mood={s === 1 ? "wow" : "happy"} style={{ opacity: 0.95 - i * 0.1 }} />
            ))}
            <text x="80" y="214" textAnchor="middle" fontSize="8.5">
              German workers far from home
            </text>
          </Fade>
          <Fade show={s === 1}>
            <g transform="translate(150 70)">
              <rect x="-62" y="-14" width="124" height="22" fill="#fff" stroke="#000" />
              <text y="1" textAnchor="middle" fontSize="8.5">
                plain words, for workers
              </text>
            </g>
          </Fade>

          {/* 1848: the drawer, and revolutions all around */}
          <Fade show={s === 2}>
            <g transform="translate(180 120)">
              <rect x="-50" y="-22" width="100" height="44" fill="#a06a35" stroke="#000" strokeWidth="1.2" />
              <rect x="-10" y="-3" width="20" height="6" fill="#e6b800" />
              <text y="40" textAnchor="middle" fontSize="9">
                the lecture notes wait
              </text>
            </g>
            {[
              ["Paris", 60, 60],
              ["Vienna", 300, 60],
              ["Berlin", 300, 180],
              ["Milan", 60, 180],
            ].map(([c, x, y]) => (
              <g key={c as string} transform={`translate(${x} ${y})`}>
                <path d="M0,-12 L4,-3 L13,-3 L6,3 L9,12 L0,6 L-9,12 L-6,3 L-13,-3 L-4,-3 Z" fill="#d6452f" className="twinkle" />
                <text y="24" textAnchor="middle" fontSize="8.5">
                  {c}
                </text>
              </g>
            ))}
            <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              1848: revolutions everywhere
            </text>
          </Fade>

          {/* the newspaper */}
          <Place x={180} y={115} scale={1.5} show={s >= 3}>
            <Paper title="Neue Rheinische Zeitung" sub="Wage-Labour and Capital" stamp={s === 4 ? "LAST ISSUE" : undefined} />
          </Place>
          <Fade show={s === 3}>
            <text x="180" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
              Cologne, April 1849
            </text>
            <text x="180" y="208" textAnchor="middle" fontSize="9">
              printed as front-page articles
            </text>
          </Fade>
          <Fade show={s === 4}>
            <text x="180" y="40" textAnchor="middle" fontSize="10" fontWeight="600" fill="#d6452f">
              May 19, 1849: the red issue
            </text>
            <text x="180" y="208" textAnchor="middle" fontSize="9">
              &ldquo;to be continued&rdquo; ... but never continued
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 0.2 · Marx's road of exile (why he had to leave, again and again)
 * ───────────────────────────────────────────────────────────── */
const CITY = {
  london: { x: 70, y: 70, name: "London" },
  paris: { x: 105, y: 165, name: "Paris" },
  brussels: { x: 185, y: 110, name: "Brussels" },
  cologne: { x: 275, y: 120, name: "Cologne" },
};
type CityId = keyof typeof CITY;
const ROUTE: { at: CityId; date: string; why: string }[] = [
  { at: "paris", date: "1844", why: "Marx writes against the King of Prussia from Paris." },
  { at: "brussels", date: "January 1845", why: "Prussia presses France, and France orders him out." },
  { at: "brussels", date: "December 1845", why: "He gives up his Prussian citizenship." },
  { at: "paris", date: "March 1848", why: "Belgium's king orders him out within 24 hours." },
  { at: "cologne", date: "April 1848", why: "Revolution in Germany: he goes home to start a paper." },
  { at: "paris", date: "May to June 1849", why: "Prussia expels him as 'no longer a Prussian subject'." },
  { at: "london", date: "August 1849", why: "France orders him out of Paris. London becomes home for life." },
];

export function RoadOfExile() {
  return (
    <Player
      id="anim-wl-0-2"
      title="0.2 · Marx's road of exile"
      viewBox="0 0 360 240"
      steps={[
        { caption: "1844: Marx lives in Paris. He writes for a German paper there that criticises the King of Prussia, ruler of the land where Marx was born." },
        { caption: "January 1845: the Prussian government pushes France to get rid of him. France orders him out, and he moves to Brussels in Belgium." },
        { caption: "December 1845: tired of the Prussian police chasing him, he gives up his Prussian citizenship. Now he belongs to no country at all." },
        { caption: "March 1848: revolution in France frightens Belgium's rulers. The king orders Marx out within 24 hours, and the police lock him up for 18 hours first.", ms: 4600 },
        { caption: "April 1848: revolution reaches Germany too. Marx goes back to Cologne and starts the Neue Rheinische Zeitung, where these lectures will be printed." },
        { caption: "May 1849: the revolution is losing. Prussia expels him on the excuse that he is 'no longer a Prussian subject', and the paper has to close.", ms: 4600 },
        { caption: "August 1849: back in Paris, the French government orders him out again. He crosses the sea to London, where he lives for the rest of his life.", ms: 4600 },
      ]}
    >
      {(s) => {
        const stop = ROUTE[s];
        const here = CITY[stop.at];
        const visited = ROUTE.slice(0, s + 1).map((r) => r.at);
        return (
          <>
            {/* the sea between England and the continent */}
            <path d="M0,40 C40,60 30,100 60,120 C90,140 30,190 0,200 Z" fill="#cfe0f2" />
            <path d="M0,30 C60,30 100,20 130,0 L0,0 Z" fill="#cfe0f2" />
            <text x="24" y="150" fontSize="8" fill="#4a6f99">
              the sea
            </text>

            {/* the path travelled so far */}
            {ROUTE.slice(1, s + 1).map((r, i) => {
              const a = CITY[ROUTE[i].at];
              const b = CITY[r.at];
              return a === b ? null : (
                <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#d6452f" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#wl-exile)" />
              );
            })}
            <defs>
              <marker id="wl-exile" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#d6452f" />
              </marker>
            </defs>

            {(Object.keys(CITY) as CityId[]).map((id) => {
              const c = CITY[id];
              const seen = visited.includes(id);
              return (
                <g key={id} opacity={seen ? 1 : 0.35}>
                  <circle cx={c.x} cy={c.y} r="5" fill={stop.at === id ? "#000" : "#fff"} stroke="#000" strokeWidth="1.5" />
                  <text x={id === "london" ? c.x - 9 : c.x} y={id === "london" ? c.y + 4 : c.y + 17} textAnchor={id === "london" ? "end" : "middle"} fontSize="9">
                    {c.name}
                  </text>
                </g>
              );
            })}

            {/* Marx at his current stop */}
            <MarxHead x={here.x + 16} y={here.y - 8} scale={0.55} />

            {/* crossing out the old home when expelled */}
            <Fade show={s === 1 || s === 3 || s === 5 || s === 6}>
              <g transform={`translate(${CITY[ROUTE[Math.max(s - 1, 0)].at].x - 14} ${CITY[ROUTE[Math.max(s - 1, 0)].at].y - 12})`}>
                <Cross />
              </g>
            </Fade>
            <Fade show={s === 2}>
              <g transform="translate(250 175)">
                <rect x="-46" y="-12" width="92" height="22" fill="#fff" stroke="#000" />
                <text y="3" textAnchor="middle" fontSize="8">
                  Prussian passport
                </text>
                <line x1="-46" y1="-12" x2="46" y2="10" stroke="#d6452f" strokeWidth="2" />
              </g>
            </Fade>

            {/* date card */}
            <rect x="96" y="194" width="260" height="42" fill="#fff" stroke="#000" strokeOpacity=".3" />
            <text x="106" y="210" fontSize="10.5" fontWeight="700">
              {stop.date}
            </text>
            <text x="106" y="226" fontSize="8.6">
              {stop.why}
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 0.3 · One changed word (Engels' 1891 edition)
 * ───────────────────────────────────────────────────────────── */
export function OneChangedWord() {
  return (
    <Player
      id="anim-wl-0-3"
      title="0.3 · One changed word"
      steps={[
        { caption: "1891: Marx has died, and his friend Engels prints a new edition for workers: 10,000 copies. In 1849 the text said the worker sells his labour for wages." },
        { caption: "Engels' own example: a worker is paid 3 shillings for 12 hours, and in those 12 hours he adds 6 shillings of new value. So is his labour worth 3 or 6?" },
        { caption: "'Hold on there!' cries the worker in Engels' story. If labour is what he sells, it seems to have two values at once. That makes no sense." },
        { caption: "Marx's later answer: he sells his labour-power, his ability to work for a day. That costs 3 shillings to keep up, but it can make 6. So Engels changed the word.", ms: 4800 },
        { caption: "Engels said so openly: this is 'not as Marx wrote it in 1849'. Some readers thank him for making it clearer. Others say an editor should never rewrite an author.", ms: 4800 },
      ]}
    >
      {(s) => (
        <>
          {/* the old and new words */}
          <g transform="translate(180 50)">
            <text x="-70" y="5" textAnchor="middle" fontSize="15" fontWeight="600" style={{ opacity: s >= 3 ? 0.35 : 1, transition: "opacity 500ms" }}>
              labour
            </text>
            <Fade show={s >= 3}>
              <line x1="-100" y1="0" x2="-40" y2="0" stroke="#d6452f" strokeWidth="2.5" />
              <text x="0" y="5" textAnchor="middle" fontSize="15">
                →
              </text>
              <text x="70" y="5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#2a9d5b">
                labour-power
              </text>
            </Fade>
          </g>

          <Figure who="sam" x={60} y={196} scale={0.85} mood={s === 2 ? "wow" : "happy"} />
          <Fade show={s === 2}>
            <g transform="translate(70 104)">
              <rect x="0" y="-26" width="96" height="30" fill="#fff" stroke="#000" />
              <text x="6" y="-13" fontSize="8">
                Hold on there!
              </text>
              <text x="6" y="-2" fontSize="8">
                3 or 6 shillings?
              </text>
            </g>
          </Fade>

          {/* the two values */}
          <Fade show={s >= 1 && s <= 3}>
            <g transform="translate(170 110)">
              <text y="-6" fontSize="9">
                paid for 12 hours
              </text>
              <g transform="translate(160 -10)">
                <Coins n={3} />
              </g>
              <text y="30" fontSize="9">
                new value made in 12 hours
              </text>
              <g transform="translate(160 26)">
                <Coins n={6} />
              </g>
            </g>
          </Fade>
          <Fade show={s === 3}>
            <text x="230" y="182" textAnchor="middle" fontSize="9.5" fontWeight="600">
              sells the ability, not the work
            </text>
          </Fade>

          {/* the open note, and two views */}
          <Fade show={s === 4}>
            <g transform="translate(240 120)">
              <rect x="-90" y="-36" width="180" height="40" fill="#fffbe6" stroke="#000" />
              <text y="-20" textAnchor="middle" fontSize="8.5">
                &ldquo;not as Marx wrote it in 1849&rdquo;
              </text>
              <text y="-7" textAnchor="middle" fontSize="8">
                Engels, introduction, 1891
              </text>
            </g>
            <g transform="translate(180 180)">
              <Tick />
              <text x="12" y="4" fontSize="8.5">
                clearer
              </text>
              <g transform="translate(80 0)">
                <Cross />
              </g>
              <text x="92" y="4" fontSize="8.5">
                changed
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
