"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Cross, Fade, Tick } from "@/components/anim/Things";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";

/* ─────────────────────────────────────────────────────────────
 * 44.1 · The extra quarter from field B
 * Marx's tables: at £3 a quarter, money-rents A 0, B 4½, C 10½, D 16½
 * (total 31½). One more quarter is needed: £3¾ from a second dose on A,
 * £4 from a worse soil A-1, £3½ from a second dose on B. B is cheapest,
 * so £3½ becomes the price: A ½, B 6¼, C 13¼, D 20¼ (total 40¼).
 * ───────────────────────────────────────────────────────────── */
const BEFORE = [0, 4.5, 10.5, 16.5];
const AFTER = [0.5, 6.25, 13.25, 20.25];
const FRAC = (n: number) => {
  const w = Math.floor(n);
  const f = n - w;
  const tail = f === 0.5 ? "½" : f === 0.25 ? "¼" : f === 0.75 ? "¾" : "";
  return `£${w || !tail ? w : ""}${tail}`;
};
const RX = 64;
const PX = 12;

export function TheExtraQuarter() {
  return (
    <Player
      id="anim-v3-44-1"
      title="44.1 · The extra quarter from field B"
      viewBox="0 0 360 230"
      steps={[
        {
          caption: "Four kinds of field, A to D. Wheat sells at £3 a quarter, the cost on field A, the worst. So A pays no rent, and B, C and D pay £4½, £10½ and £16½. Marx's own numbers.",
          ms: 5400,
        },
        { caption: "The town wants one more quarter of wheat. Where should it come from? There are three ways to grow it." },
        {
          caption: "A second dose of money on field A would cost £3¾. A new, even worse field would cost £4. A second dose on field B costs only £3½. B is the cheapest, so B grows it.",
          ms: 5600,
        },
        {
          caption: "Now £3½ is the price for every quarter, because that last quarter is needed. Every field earns more, and look: even the worst field A now pays a rent of £½.",
          ms: 5400,
        },
        {
          caption: "So a better field, not the worst one, can set the price, and then all land pays rent. Engels added a note that Marx's sums need a small fix, but the lesson stands.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const after = s >= 3;
        const rents = after ? AFTER : BEFORE;
        const choose = s === 1 || s === 2;
        return (
          <>
            <text x="12" y="22" fontSize="10" fontWeight="600">
              money-rent per acre
            </text>
            <text x="348" y="22" textAnchor="end" fontSize="11" fontWeight="700" fill={after ? "#8a6d00" : "#000"}>
              price: £{after ? "3½" : "3"} a quarter
            </text>

            <Fade show={!choose}>
              {["A", "B", "C", "D"].map((id, i) => {
                const y = 40 + i * 32;
                const r = rents[i];
                return (
                  <g key={id}>
                    <text x="20" y={y + 13} fontSize="12" fontWeight="700">
                      {id}
                    </text>
                    <rect x={RX} y={y} height="18" width={r * PX} fill={GOLD} style={{ transition: `width ${T}` }} />
                    <text x={RX + r * PX + 6} y={y + 13} fontSize="10.5" style={{ transition: `x ${T}` }}>
                      {r === 0 ? "no rent" : FRAC(r)}
                    </text>
                  </g>
                );
              })}
              <text x="348" y="190" textAnchor="end" fontSize="11" fontWeight="600">
                total rent: £{after ? "40¼" : "31½"}
              </text>
              <Fade show={after}>
                <g transform="translate(140 52)">
                  <Tick />
                </g>
                <text x="152" y="56" fontSize="9.5" fontWeight="600" fill="#2a9d5b">
                  even A pays now
                </text>
              </Fade>
            </Fade>

            {/* three ways to grow one more quarter */}
            <Fade show={choose}>
              {[
                { label: "second dose on A", cost: "£3¾", x: 66 },
                { label: "a worse field", cost: "£4", x: 180 },
                { label: "second dose on B", cost: "£3½", x: 294 },
              ].map((o, i) => {
                const best = i === 2;
                return (
                  <g key={o.label}>
                    <rect x={o.x - 52} y="50" width="104" height="90" fill="#fff" stroke={s === 2 && best ? "#2a9d5b" : "#000"} strokeWidth={s === 2 && best ? 3 : 1} />
                    <text x={o.x} y="76" textAnchor="middle" fontSize="10">
                      {o.label}
                    </text>
                    <text x={o.x} y="108" textAnchor="middle" fontSize="22" fontWeight="300">
                      {o.cost}
                    </text>
                    <text x={o.x} y="128" textAnchor="middle" fontSize="9">
                      for one quarter
                    </text>
                    <Fade show={s === 2}>
                      <g transform={`translate(${o.x} 160)`}>{best ? <Tick /> : <Cross />}</g>
                    </Fade>
                  </g>
                );
              })}
              <Fade show={s === 2}>
                <text x="180" y="196" textAnchor="middle" fontSize="11" fontWeight="600">
                  the cheapest way wins: field B
                </text>
              </Fade>
            </Fade>

            <Fade show={s === 4}>
              <rect x="20" y="198" width="320" height="24" fill="#000" />
              <text x="180" y="214" textAnchor="middle" fontSize="10" fill="#fff">
                a better field sets the price, and all land pays rent
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 44.2 · Nature's free gift
 * Natural powers cost nothing and enter no price; "a free gift of
 * Nature to capital". Permanent improvements give one field what another
 * has by nature; once the capital is paid off, its yield is pure
 * differential rent.
 * ───────────────────────────────────────────────────────────── */
export function NaturesFreeGift() {
  return (
    <Player
      id="anim-v3-44-2"
      title="44.2 · Nature's free gift"
      viewBox="0 0 360 242"
      steps={[
        { caption: "Two of the Landlord's fields. The left one has a stream that drains it by itself. The right one is soggy, and its wheat drowns." },
        {
          caption: "Nobody paid for the stream. Marx calls it a free gift of nature. It costs nothing, so it adds nothing to the price, but it makes the farmer's capital look extra clever.",
          ms: 5200,
        },
        { caption: "Grandpa Ned spends money laying drains under the soggy field. Now it grows just as well as the naturally drained one." },
        {
          caption: "For a while, part of the rent on the drained field is really interest on the money spent on the drains.",
        },
        {
          caption: "Once the drains are paid off, both fields pay the same kind of rent. Marx laughs at the idea that rent is interest on one field and not on the other: it is the extra yield that counts.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const drained = s >= 2;
        return (
          <>
            {/* left field: a natural stream */}
            <rect x="20" y="70" width="150" height="80" fill="#cfe3a8" stroke="#000" />
            <path d="M30,150 C60,120 70,100 100,96 C130,92 150,80 168,72" fill="none" stroke="#5aa0e0" strokeWidth="6" />
            {Array.from({ length: 6 }, (_, i) => (
              <rect key={i} x={36 + i * 22} y="78" width="6" height="22" fill="#e8c35a" />
            ))}
            <text x="95" y="166" textAnchor="middle" fontSize="10">
              drained by nature
            </text>

            {/* right field: soggy, then drained */}
            <rect x="190" y="70" width="150" height="80" fill={drained ? "#cfe3a8" : "#b8c9c9"} stroke="#000" style={{ transition: "fill 700ms" }} />
            <Fade show={!drained}>
              {[[215, 120], [260, 132], [300, 112], [240, 96]].map(([x, y], i) => (
                <ellipse key={i} cx={x} cy={y} rx="16" ry="5" fill="#7fb0d8" />
              ))}
            </Fade>
            <Fade show={drained}>
              {[90, 110, 130].map((y) => (
                <line key={y} x1="196" y1={y} x2="334" y2={y} stroke="#555" strokeWidth="2" strokeDasharray="6 4" />
              ))}
            </Fade>
            {Array.from({ length: 6 }, (_, i) => (
              <rect key={i} x={206 + i * 22} y={drained ? 78 : 92} width="6" height={drained ? 22 : 8} fill="#e8c35a" style={{ transition: `all ${T}` }} />
            ))}
            <text x="265" y="166" textAnchor="middle" fontSize="10">
              {drained ? "drained by Ned's money" : "soggy"}
            </text>

            <Fade show={s === 1}>
              <rect x="40" y="22" width="110" height="26" fill="#000" />
              <text x="95" y="39" textAnchor="middle" fontSize="10" fill="#fff">
                a free gift of nature
              </text>
            </Fade>

            <Figure who="ned" x={265} y={222} scale={0.6} style={{ opacity: s === 2 || s === 3 ? 1 : 0, transition: "opacity 500ms" }} />

            <Fade show={s === 3}>
              <text x="265" y="38" textAnchor="middle" fontSize="10.5" fontWeight="600">
                rent = part interest
              </text>
              <text x="265" y="52" textAnchor="middle" fontSize="9.5">
                on the drain money
              </text>
            </Fade>
            <Fade show={s >= 4}>
              <text x="95" y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill="#8a6d00">
                differential rent
              </text>
              <text x="265" y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill="#8a6d00">
                differential rent
              </text>
              <text x="180" y="200" textAnchor="middle" fontSize="10">
                drains paid off: the extra yield counts, not who made it
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
