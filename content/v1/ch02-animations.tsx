"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Cow, Cross, Fade, Gold, Linen, Loaf, Place, Tick } from "@/components/anim/Things";
import type { CastId } from "@/lib/cast";

/* ─────────────────────────────────────────────────────────────
 * 2.1 · The swap that gets stuck (why exchange needs a general equivalent)
 * ───────────────────────────────────────────────────────────── */
type Good = "coat" | "bread" | "linen";
const PEOPLE: { who: CastId; x: number; has: Good; wants: Good }[] = [
  { who: "ava", x: 60, has: "coat", wants: "bread" },
  { who: "mia", x: 180, has: "bread", wants: "linen" },
  { who: "leo", x: 300, has: "linen", wants: "coat" },
];
const DRAW: Record<Good, React.ReactNode> = { coat: <Coat />, bread: <Loaf />, linen: <Linen /> };
const home = (g: Good) => PEOPLE.find((p) => p.has === g)!.x;
const buyer = (g: Good) => PEOPLE.find((p) => p.wants === g)!.x;

/** Which good is being offered at each step, and to whom. */
const OFFERS: { good: Good; to: number; reply: string }[] = [
  { good: "coat", to: 180, reply: "Mia: “No thanks, I need linen.”" },
  { good: "bread", to: 300, reply: "Leo: “No thanks, I need a coat.”" },
  { good: "linen", to: 60, reply: "Ava: “No thanks, I need bread.”" },
];

export function TheStuckSwap() {
  return (
    <Player
      id="anim-2-1"
      title="2.1 · The swap that gets stuck"
      steps={[
        { caption: "Market day. Ava has a coat but wants bread. Mia has bread but wants linen. Leo has linen but wants a coat." },
        { caption: "Ava offers her coat to Mia. But Mia doesn't need a coat." },
        { caption: "Mia offers her bread to Leo. But Leo doesn't need bread." },
        { caption: "Leo offers his linen to Ava. But Ava doesn't need linen. Everyone has something useful, and nobody can swap!" },
        {
          caption: "The fix: everyone agrees to take one thing in every swap, gold. Ava sells her coat for gold, then spends the gold on bread. The thing everyone accepts becomes money.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const offer = s >= 1 && s <= 3 ? OFFERS[s - 1] : null;
        return (
          <>
            {PEOPLE.map((p) => (
              <g key={p.who}>
                <Figure who={p.who} x={p.x} y={208} scale={0.85} mood={s === 3 ? "sad" : "happy"} />
                {/* what they want, in a thought bubble */}
                <Fade show={s < 4}>
                  <circle cx={p.x - 14} cy={140} r="2" fill="#fff" stroke="#000" />
                  <circle cx={p.x - 10} cy={131} r="3" fill="#fff" stroke="#000" />
                  <ellipse cx={p.x} cy={108} rx="28" ry="20" fill="#fff" stroke="#000" />
                  <text x={p.x} y={94} textAnchor="middle" fontSize="7" fillOpacity=".6">
                    wants
                  </text>
                  <g transform={`translate(${p.x} 112) scale(.55)`}>{DRAW[p.wants]}</g>
                </Fade>
              </g>
            ))}

            {/* the goods: at home, on offer, or with their new owner */}
            {(Object.keys(DRAW) as Good[]).map((g) => {
              const x = s === 4 ? buyer(g) + 26 : offer?.good === g ? offer.to - 34 : home(g) + 26;
              return (
                <Place key={g} x={x} y={182} scale={0.75}>
                  {DRAW[g]}
                </Place>
              );
            })}

            {/* the refusal */}
            {OFFERS.map((o, i) => (
              <Fade key={o.good} show={s === i + 1} delay={500}>
                <text x="180" y="30" textAnchor="middle" fontSize="11">
                  {o.reply}
                </text>
                <g transform={`translate(${o.to - 34} 158)`}>
                  <Cross />
                </g>
              </Fade>
            ))}

            {/* gold, the thing everyone accepts */}
            <Place x={180} y={60} scale={1.1} show={s === 4}>
              <Gold />
            </Place>
            <Fade show={s === 4} delay={300}>
              <text x="180" y="94" textAnchor="middle" fontSize="10" fontWeight="600">
                everyone accepts gold
              </text>
              {[60, 300].map((x) => (
                <path key={x} d={`M${x < 180 ? 165 : 195},62 L${x},62`} stroke="#000" strokeOpacity=".3" strokeDasharray="3 3" />
              ))}
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2.2 · Why gold? (the money commodity's natural properties)
 * ───────────────────────────────────────────────────────────── */
const COLS = [
  { id: "cow", label: "a cow", x: 110, draw: <Cow /> },
  { id: "bread", label: "bread", x: 200, draw: <Loaf /> },
  { id: "gold", label: "gold", x: 290, draw: <Gold /> },
] as const;
const TESTS = [
  { label: "split it?", y: 112, pass: { cow: false, bread: true, gold: true } },
  { label: "will it keep?", y: 147, pass: { cow: true, bread: false, gold: true } },
  { label: "all alike?", y: 182, pass: { cow: false, bread: false, gold: true } },
];

export function WhyGold() {
  return (
    <Player
      id="anim-2-2"
      title="2.2 · Why gold?"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Tiny Town could use many things as money. Some people really did use cattle: Marx notes that wandering herders were the first to use a money-thing." },
        { caption: "Test one: can you split it to buy something small? Cut a cow in half and you just lose the cow. Bread and gold split easily." },
        { caption: "Test two: will it keep? Bread goes stale in a few days. A cow and a lump of gold will keep." },
        { caption: "Test three: is every piece the same? Cows are fat or thin, loaves big or small. Every ounce of gold is just like every other ounce." },
        {
          caption: "Gold passes every test, which is why gold and silver became money. But gold is still a thing people make: its value comes from the work of digging it up.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the winning column */}
          <rect x="250" y="16" width="80" height="186" fill="#e6b800" style={{ opacity: s === 4 ? 0.18 : 0, transition: "opacity 600ms" }} />

          {COLS.map((c) => (
            <g key={c.id}>
              <g transform={`translate(${c.x} 48) scale(${c.id === "bread" ? 1 : 1.05})`}>{c.draw}</g>
              <text x={c.x} y="80" textAnchor="middle" fontSize="10">
                {c.label}
              </text>
            </g>
          ))}

          {/* a cut through the cow, mould on the bread */}
          <Fade show={s === 1}>
            <line x1="110" y1="22" x2="110" y2="70" stroke="#d6452f" strokeWidth="2" strokeDasharray="4 3" />
          </Fade>
          <Fade show={s === 2}>
            {[[192, 44], [204, 40], [210, 50], [198, 52]].map(([x, y]) => (
              <circle key={`${x}${y}`} cx={x} cy={y} r="2.5" fill="#6b8f3a" />
            ))}
          </Fade>

          {TESTS.map((t, ti) => (
            <g key={t.label}>
              <text x="12" y={t.y + 4} fontSize="10" style={{ opacity: s >= ti + 1 ? 1 : 0.3, transition: "opacity 400ms" }}>
                {t.label}
              </text>
              <line x1="12" y1={t.y + 17} x2="340" y2={t.y + 17} stroke="#000" strokeOpacity=".1" />
              {COLS.map((c, ci) => (
                <Fade key={c.id} show={s >= ti + 1} delay={250 + ci * 200}>
                  <g transform={`translate(${c.x} ${t.y})`}>{t.pass[c.id] ? <Tick /> : <Cross />}</g>
                </Fade>
              ))}
            </g>
          ))}

          <Fade show={s === 4} delay={400}>
            <text x="290" y="216" textAnchor="middle" fontSize="10" fontWeight="600">
              becomes money
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
