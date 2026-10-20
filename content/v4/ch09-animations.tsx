"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Tick } from "@/components/anim/Things";
import { PROFIT, RENT, T } from "./ch08-animations";

/* ─────────────────────────────────────────────────────────────
 * 9.1 · Who said it first?
 * Anderson 1777 and 1801; West and Malthus 1815; Ricardo names
 * West and Malthus as the originators in his Principles' preface.
 * ───────────────────────────────────────────────────────────── */
const LINE_Y = 168;
const YEARS = [
  { y: "1777", x: 40 },
  { y: "1801", x: 120 },
  { y: "1815", x: 230 },
  { y: "1817", x: 318 },
];

export function WhoSaidItFirst() {
  return (
    <Player
      id="anim-v4-9-1"
      title="9.1 · Who said it first?"
      steps={[
        { caption: "Today's visitor is James Anderson, a practical Scottish farmer. In 1777, writing about the corn laws, he explained in passing why better fields pay more rent." },
        { caption: "Hardly anyone noticed. In 1801 he wrote again, and argued that land can be improved year after year, so food need not keep getting dearer." },
        { caption: "In 1815, while Parliament argued about corn, two books on rent came out at once: one by Edward West, one by Thomas Malthus." },
        { caption: "Then David Ricardo built the idea into his great book on political economy. He named West and Malthus as its discoverers. He seems not to have known Anderson. So it became the 'Ricardian' law of rent.", ms: 5200 },
        {
          caption: "Marx's verdict: Anderson came first. Malthus, he says, had read Anderson and used him without credit, and bent his ideas to defend landlords. Anderson himself was against Malthus's gloomy theory of population.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <line x1="20" y1={LINE_Y} x2="345" y2={LINE_Y} stroke="#000" strokeWidth="1.5" />
          {YEARS.map((yr, i) => {
            const lit = (i === 0 && s >= 0) || (i === 1 && s >= 1) || (i === 2 && s >= 2) || (i === 3 && s >= 3);
            return (
              <g key={yr.y}>
                <circle cx={yr.x} cy={LINE_Y} r={lit ? 5 : 3.5} fill={lit ? "#000" : "#fff"} stroke="#000" strokeWidth="1.5" style={{ transition: `all ${T}` }} />
                <text x={yr.x} y={LINE_Y + 17} textAnchor="middle" fontSize="10" fontWeight={lit ? 700 : 400} fillOpacity={lit ? 1 : 0.4}>
                  {yr.y}
                </text>
              </g>
            );
          })}

          {/* the thinkers, arriving in order */}
          <Figure name="Anderson" x={40} y={146} scale={0.62} />
          <Fade show={s >= 2}>
            <Figure name="West" x={212} y={146} scale={0.62} />
            <Figure name="Malthus" x={252} y={146} scale={0.62} mood={s === 4 ? "sad" : "happy"} />
          </Fade>
          <Fade show={s >= 3}>
            <Figure name="Ricardo" x={318} y={146} scale={0.62} />
          </Fade>

          {/* what each wrote */}
          <Fade show={s === 0}>
            <text x="68" y="64" fontSize="9">a book on the corn laws</text>
            <text x="68" y="77" fontSize="9" fillOpacity=".6">rent explained in passing</text>
          </Fade>
          <Fade show={s === 1}>
            <text x="92" y="64" fontSize="9">&ldquo;land can be improved&rdquo;</text>
            <text x="92" y="77" fontSize="9" fillOpacity=".6">a second book, 1801</text>
          </Fade>
          <Fade show={s === 2}>
            <text x="232" y="56" textAnchor="middle" fontSize="9">two books on rent</text>
            <text x="232" y="69" textAnchor="middle" fontSize="9" fillOpacity=".6">in the same year</text>
          </Fade>
          <Fade show={s === 3}>
            <text x="300" y="44" textAnchor="middle" fontSize="9">Ricardo names</text>
            <text x="300" y="57" textAnchor="middle" fontSize="9">West and Malthus</text>
            <text x="300" y="70" textAnchor="middle" fontSize="9" fillOpacity=".6">not Anderson</text>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(40 52)">
              <Tick />
            </g>
            <text x="54" y="56" fontSize="10" fontWeight="700">
              first
            </text>
            <path d="M68,70 C120,48 190,48 240,74" fill="none" stroke={RENT} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#v4c09-arrow)" />
            <text x="160" y="44" textAnchor="middle" fontSize="9" fill={RENT} fontWeight="600">
              used without credit (Marx&apos;s charge)
            </text>
          </Fade>
          <defs>
            <marker id="v4c09-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={RENT} />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.2 · Two hundred years of wheat prices
 * Half-century averages from the table Marx copied (1641 to 1859),
 * rounded to whole shillings per quarter of wheat.
 * ───────────────────────────────────────────────────────────── */
const PERIODS = [
  { label: "1650s to 1690s", short: "1650", price: 44 },
  { label: "1700s to 1740s", short: "1700", price: 36 },
  { label: "1750s to 1790s", short: "1750", price: 45 },
  { label: "1800s to 1840s", short: "1800", price: 70 },
  { label: "1850s", short: "1850", price: 53 },
];
const PPX = 1.6; // px per shilling
const FLOOR = 178;

export function WheatPrices() {
  return (
    <Player
      id="anim-v4-9-2"
      title="9.2 · Two hundred years of wheat prices"
      steps={[
        { caption: "Marx copied a table of English wheat prices from 1641 to 1859. Here are its averages for each half-century, in shillings for a quarter of wheat (rounded)." },
        { caption: "In the first half of the 1700s, prices fell. In the second half, they rose again. This is the world Anderson saw when he wrote." },
        { caption: "In the early 1800s prices shot up. That is the world Ricardo lived through, and it convinced him that bread must keep getting dearer as poorer land is ploughed.", ms: 4600 },
        { caption: "But by the 1850s, prices had fallen again. Marx's point: the table goes up and down. 'Ever dearer' is not a law of nature." },
        {
          caption: "Anderson had already said why: land can be improved, so worse land can become better land. Marx still praises Ricardo's scientific honesty, and saves his scorn for Malthus.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const hi = (i: number) => (s === 1 && (i === 1 || i === 2)) || (s === 2 && i === 3) || (s === 3 && i === 4);
        return (
          <>
            <line x1="30" y1={FLOOR} x2="340" y2={FLOOR} stroke="#000" strokeOpacity=".4" />
            {PERIODS.map((p, i) => {
              const x = 62 + i * 62;
              const h = p.price * PPX;
              return (
                <g key={p.short}>
                  <rect
                    x={x - 20}
                    y={FLOOR - h}
                    width="40"
                    height={h}
                    fill={hi(i) ? PROFIT : "#cfcfcf"}
                    stroke="#000"
                    strokeWidth=".8"
                    style={{ transition: `fill ${T}` }}
                  />
                  <text x={x} y={FLOOR - h - 6} textAnchor="middle" fontSize="11" fontWeight="700">
                    {p.price}s
                  </text>
                  <text x={x} y={FLOOR + 13} textAnchor="middle" fontSize="8.5">
                    {p.short}
                  </text>
                </g>
              );
            })}
            <text x="30" y="20" fontSize="8.5" fillOpacity=".6">
              average price of a quarter of wheat, by half-century
            </text>

            <Fade show={s === 1}>
              <text x="155" y="40" textAnchor="middle" fontSize="9" fontWeight="600">
                down, then up: Anderson&apos;s century
              </text>
            </Fade>
            <Fade show={s === 2}>
              <text x="248" y="38" textAnchor="middle" fontSize="9" fontWeight="600">
                Ricardo&apos;s years
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <path d="M62,108 L124,121 L186,106 L248,66 L310,94" fill="none" stroke={RENT} strokeWidth="2" style={{ transition: `opacity ${T}` }} />
              <text x="186" y="40" textAnchor="middle" fontSize="9" fontWeight="600" fill={RENT}>
                up and down, not ever dearer
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
