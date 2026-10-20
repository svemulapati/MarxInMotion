"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, Place, Tick } from "@/components/anim/Things";

const GOLD = "#e6b800";
const GREEN = "#2a9d5b";
const RED = "#d6452f";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** The Old Thinkers' Shelf: a short bookcase with one book pulled out. Shared by Vol IV, Ch 4 to 7. */
export function Shelf({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-34" y="-46" width="68" height="46" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <line x1="-34" y1="-23" x2="34" y2="-23" stroke="#000" strokeWidth="1" />
      {[-28, -21, -14, -6, 2, 10, 18, 26].map((bx, i) => (
        <rect key={bx} x={bx} y={i % 2 ? -44 : -41} width="5" height={i % 2 ? 20 : 17} fill={i === 3 ? GOLD : "#cfcfcf"} stroke="#000" strokeWidth=".5" />
      ))}
      {[-28, -20, -10, 0, 8, 16, 24].map((bx, i) => (
        <rect key={bx} x={bx} y={i % 3 ? -20 : -18} width="6" height={i % 3 ? 19 : 17} fill="#cfcfcf" stroke="#000" strokeWidth=".5" />
      ))}
      {label && (
        <text y="12" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
          {label}
        </text>
      )}
    </g>
  );
}

/** A yes/no badge. */
function Verdict({ ok }: { ok: boolean }) {
  return ok ? <Tick /> : <Cross />;
}

/* ─────────────────────────────────────────────────────────────
 * 4.1 · Smith's two rulers
 * Marx: Smith "jumbled together" two definitions of productive labour.
 * First (the correct one): labour exchanged against capital, which
 * produces a surplus. Second: labour that "fixes and realises itself"
 * in a "vendible commodity". The actor (paid by an entrepreneur) and the
 * jobbing tailor (patching trousers at home) are Marx's own test cases.
 * ───────────────────────────────────────────────────────────── */
const CASES = [
  { who: "spinner", where: "in the mill", r1: true, r2: true },
  { who: "actor", where: "in a theatre company", r1: true, r2: false },
  { who: "tailor", where: "patching at home", r1: false, r2: true },
];

export function SmithsTwoRulers() {
  return (
    <Player
      id="anim-v4-4-1"
      title="4.1 · Smith's two rulers"
      viewBox="0 0 360 230"
      steps={[
        { caption: "From the Old Thinkers' Shelf comes Adam Smith (1776). He sorted workers into productive and unproductive. Marx says Smith mixed up two different rulers." },
        { caption: "Ruler one: is the worker paid out of a boss's capital, so that the work brings back more than it cost? The mill spinner: yes." },
        { caption: "Ruler two: does the work leave a thing behind that can be sold, like yarn or a coat? The spinner: yes again. For her, both rulers agree." },
        { caption: "Now an actor hired by a theatre owner, who sells tickets and makes a profit. Ruler one says yes. Ruler two says no: a play leaves no thing behind." },
        { caption: "And a jobbing tailor who comes to the boss's house to patch his trousers. He leaves a mended thing behind, so ruler two says yes. But he is paid from the boss's spending money, not his capital, so ruler one says no." },
        {
          caption: "Marx keeps ruler one, which he calls Smith's correct definition. What makes work productive under capitalism is not what it makes, but whether it makes a profit for capital.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <Shelf x={40} y={70} label="1776" />
          <Figure name="Adam Smith" x={40} y={196} scale={0.8} />

          {/* the two rulers */}
          <g opacity={s >= 1 ? 1 : 0.2} style={{ transition: "opacity 500ms" }}>
            <rect x="96" y="22" width="120" height="16" fill={GOLD} stroke="#000" strokeWidth=".8" />
            <text x="156" y="33" textAnchor="middle" fontSize="8.5">
              1 · makes a profit for capital?
            </text>
          </g>
          <g opacity={s >= 2 ? 1 : 0.2} style={{ transition: "opacity 500ms" }}>
            <rect x="228" y="22" width="124" height="16" fill="#e4e4e4" stroke="#000" strokeWidth=".8" />
            <text x="290" y="33" textAnchor="middle" fontSize="8.5">
              2 · leaves a thing to sell?
            </text>
          </g>

          {/* the three workers */}
          {CASES.map((c, i) => {
            const shown = i === 0 ? s >= 1 : i === 1 ? s >= 3 : s >= 4;
            const y = 76 + i * 48;
            return (
              <Fade key={c.who} show={shown}>
                <text x="96" y={y} fontSize="10" fontWeight="600">
                  {c.who}
                </text>
                <text x="96" y={y + 12} fontSize="8.5" fillOpacity=".6">
                  {c.where}
                </text>
                <g transform={`translate(196 ${y})`}>
                  <Fade show={s >= 1}>
                    <Verdict ok={c.r1} />
                  </Fade>
                </g>
                <g transform={`translate(290 ${y})`}>
                  <Fade show={s >= 2}>
                    <Verdict ok={c.r2} />
                  </Fade>
                </g>
              </Fade>
            );
          })}

          {/* Marx keeps ruler one */}
          <Fade show={s === 5}>
            <rect x="90" y="16" width="132" height="176" fill="none" stroke={GREEN} strokeWidth="2.5" />
            <line x1="226" y1="20" x2="356" y2="190" stroke={RED} strokeWidth="1.5" strokeOpacity=".5" />
            <text x="156" y="210" textAnchor="middle" fontSize="10" fontWeight="600" fill={GREEN}>
              Marx keeps this ruler
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.2 · Same cook, two kitchens
 * Marx: "the cooks and waiters in a public hotel are productive labourers,
 * in so far as their labour is transformed into capital for the
 * proprietor"; the same persons are unproductive "as menial servants".
 * ───────────────────────────────────────────────────────────── */
export function SameCookTwoKitchens() {
  return (
    <Player
      id="anim-v4-4-2"
      title="4.2 · Same cook, two kitchens"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Meet Rosa, a cook. On weekdays she works in the kitchen of the Tiny Town Inn, which Mr. Moneybags owns." },
        { caption: "The Inn pays her wage out of its capital. Diners pay for the chops she cooks, and the Inn takes in more than it paid her. Her cooking makes a profit." },
        { caption: "On Sundays Mr. Moneybags hires Rosa to cook at his own house. She cooks exactly the same chops, just as well." },
        { caption: "But now he pays her out of his spending money, his revenue. Nothing is sold. He simply eats the chops. No profit comes back." },
        {
          caption: "Marx's point, using a hotel cook just like this: the same work is productive in the Inn and unproductive at home. The difference is not in the cooking but in who buys it, and why.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        const atHome = s >= 2;
        return (
          <>
            {/* the two kitchens */}
            <g opacity={atHome ? 0.35 : 1} style={{ transition: "opacity 600ms" }}>
              <path d="M20,74 L95,40 L170,74 Z" fill="#e4e4e4" stroke="#000" />
              <rect x="30" y="74" width="130" height="80" fill="#fff" stroke="#000" />
              <text x="95" y="66" textAnchor="middle" fontSize="9" fontWeight="600">
                Tiny Town Inn
              </text>
            </g>
            <g opacity={atHome ? 1 : 0.35} style={{ transition: "opacity 600ms" }}>
              <path d="M200,74 L265,46 L330,74 Z" fill="#e4e4e4" stroke="#000" />
              <rect x="210" y="74" width="110" height="80" fill="#fff" stroke="#000" />
              <text x="265" y="68" textAnchor="middle" fontSize="9" fontWeight="600">
                Moneybags&apos; house
              </text>
            </g>

            {/* Rosa moves between them */}
            <g style={{ transform: `translateX(${atHome ? 180 : 0}px)`, transition: `transform ${T}` }}>
              <Figure name="Rosa" x={70} y={150} scale={0.75} />
              <g transform="translate(108 130)">
                <ellipse rx="12" ry="6" fill="#c98a3a" stroke="#000" />
                <text y="20" textAnchor="middle" fontSize="8" fillOpacity=".6">
                  chops
                </text>
              </g>
            </g>

            {/* money flows */}
            <Fade show={s === 1 || s === 4}>
              <g transform="translate(60 190)">
                <Coins n={2} />
                <text x="18" y="4" fontSize="8.5">
                  wage from capital
                </text>
              </g>
              <g transform="translate(60 210)">
                <Coins n={3} />
                <text x="22" y="4" fontSize="8.5" fill={GREEN} fontWeight="600">
                  more comes back
                </text>
              </g>
            </Fade>
            <Fade show={s >= 3}>
              <g transform="translate(232 190)">
                <Coins n={2} />
                <text x="18" y="4" fontSize="8.5">
                  paid from revenue
                </text>
              </g>
              <g transform="translate(232 210)">
                <text fontSize="8.5" fill={RED} fontWeight="600">
                  nothing comes back
                </text>
              </g>
            </Fade>

            {/* verdicts */}
            <Fade show={s === 4}>
              <text x="95" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill={GREEN}>
                productive
              </text>
              <text x="265" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill={RED}>
                unproductive
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4.3 · Why the word stung
 * Smith's own list of "unproductive" labourers (sovereign, army, churchmen,
 * lawyers, physicians, men of letters, players, opera-singers...). Later
 * writers (Garnier, Say, Storch, Senior) protested that all useful work is
 * productive. Marx: they confuse "useful" with "productive for capital";
 * Senior even objected that Smith made the lawgiver Moses unproductive.
 * ───────────────────────────────────────────────────────────── */
const LIST = ["the king", "soldiers", "lawyers", "doctors", "writers", "singers"];

export function WhyTheWordStung() {
  return (
    <Player
      id="anim-v4-4-3"
      title="4.3 · Why the word stung"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Smith's list of unproductive workers was long and bold: the king, soldiers, churchmen, lawyers, doctors, writers, actors, opera-singers." },
        { caption: "He did not say they were useless. He said they are paid out of other people's work, and leave no lasting thing behind." },
        { caption: "Later writers were stung. Germain Garnier, Jean-Baptiste Say, Heinrich Storch and Nassau Senior all protested: any useful work is productive, a doctor makes health, a singer makes delight." },
        { caption: "Marx teases them. Senior complained that Smith's rule made Moses, the great lawgiver, unproductive, as if that were an insult to Moses." },
        {
          caption: "Marx's reply: \"useful\" and \"productive for capital\" are two different questions. Nobody says a doctor is useless. The question is only whether the work makes a profit for a boss.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <Shelf x={40} y={70} />
          <Figure name="Smith" x={40} y={196} scale={0.75} />

          {/* Smith's list */}
          {LIST.map((w, i) => (
            <Place key={w} x={110 + (i % 3) * 78} y={40 + Math.floor(i / 3) * 34} show={s >= 0} delay={i * 80}>
              <rect x="-34" y="-11" width="68" height="20" fill={s >= 2 ? "#fff" : "#f0dede"} stroke="#000" strokeWidth=".8" style={{ transition: "fill 500ms" }} />
              <text y="3" textAnchor="middle" fontSize="9">
                {w}
              </text>
            </Place>
          ))}
          <Fade show={s <= 1}>
            <text x="188" y="104" textAnchor="middle" fontSize="10" fontWeight="600" fill={RED}>
              &ldquo;unproductive&rdquo;
            </text>
          </Fade>
          <Fade show={s === 1}>
            <text x="188" y="122" textAnchor="middle" fontSize="9" fillOpacity=".7">
              paid from others&apos; work, nothing left to sell
            </text>
          </Fade>

          {/* the protesters */}
          <Fade show={s >= 2}>
            {["Garnier", "Say", "Storch", "Senior"].map((n, i) => (
              <Figure key={n} name={n} x={120 + i * 62} y={192} scale={0.62} mood={s === 2 ? "wow" : "happy"} />
            ))}
            <text x="214" y="104" textAnchor="middle" fontSize="10" fontWeight="600">
              &ldquo;All useful work is productive!&rdquo;
            </text>
          </Fade>
          <Fade show={s === 3}>
            <g transform="translate(250 120)">
              <rect x="-62" y="-10" width="124" height="20" fill="#fff" stroke="#000" />
              <text y="4" textAnchor="middle" fontSize="9">
                Moses, unproductive?!
              </text>
            </g>
          </Fade>
          <Fade show={s === 4}>
            <g transform="translate(214 130)">
              <rect x="-110" y="-12" width="220" height="24" fill="#000" />
              <text y="4" textAnchor="middle" fontSize="9.5" fill="#fff">
                useful? and profitable for capital? are two questions
              </text>
            </g>
          </Fade>
        </>
      )}
    </Player>
  );
}
