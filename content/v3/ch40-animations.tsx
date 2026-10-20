"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Place } from "@/components/anim/Things";
import { Field, RENT, SOIL, Sacks } from "./ch37-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/** One dose of capital: £2½, shown as a small labelled block. */
function Dose({ k }: { k: number }) {
  return (
    <g>
      <rect x="-15" y="-8" width="30" height="16" fill="#fff" stroke="#000" />
      <text y="3.5" textAnchor="middle" fontSize="7.5" fontWeight="700">
        £2½ #{k + 1}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 40.1 · Four fields, or one field
 * Marx's numbers: £10 of capital in four doses of £2½; price of
 * production £3 a quarter; yields 1, 2, 3 and 4 quarters.
 * ───────────────────────────────────────────────────────────── */
export function FourFieldsOrOne() {
  return (
    <Player
      id="anim-v3-40-1"
      title="40.1 · Four fields, or one field"
      steps={[
        { caption: "Last chapter: four doses of capital, £2½ each, spent on four different acres, A to D. They grew 1, 2, 3 and 4 quarters." },
        { caption: "Now Ned tries something else. He puts all four doses into one single acre, one after another: more manure, better ploughing, more care." },
        { caption: "Suppose the four doses on his one acre yield 1, 2, 3 and 4 quarters too. The total is the same 10 quarters." },
        { caption: "Wheat still sells at £3 a quarter, the cost of the poorest dose. So the better doses make £3, £6 and £9 of surplus-profit, just as the better acres did." },
        {
          caption: "Marx calls rent from extra capital piled onto the same land differential rent II. Farming more on the same plot is what he means by intensive cultivation.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const together = s >= 1;
        return (
          <>
            {/* four acres side by side */}
            {[0, 1, 2, 3].map((i) => (
              <g key={i} style={{ opacity: together ? 0.2 : 1, transition: "opacity 500ms" }} transform={`translate(${50 + i * 86} 70)`}>
                <Field w={66} h={30} fill={SOIL[i]} label={`acre ${"ABCD"[i]}`} />
              </g>
            ))}
            {/* one acre */}
            <Fade show={together}>
              <g transform="translate(180 168)">
                <Field w={130} h={40} fill={SOIL[2]} label="Ned's one acre" />
              </g>
            </Fade>

            {/* the doses travel */}
            {[0, 1, 2, 3].map((i) => (
              <Place key={i} x={together ? 128 + i * 35 : 50 + i * 86} y={together ? 132 : 36} delay={i * 120}>
                <Dose k={i} />
              </Place>
            ))}

            {/* yields on the four acres */}
            {[0, 1, 2, 3].map((i) => (
              <Fade key={i} show={s === 0} delay={i * 120}>
                <g transform={`translate(${50 + i * 86} 152)`}>
                  <Sacks n={i + 1} />
                </g>
              </Fade>
            ))}
            <Fade show={s >= 2}>
              <g transform="translate(318 118)">
                <text textAnchor="middle" fontSize="8.5" fontWeight="600">
                  yields
                </text>
                {[1, 2, 3, 4].map((q, i) => (
                  <text key={q} y={16 + i * 14} textAnchor="middle" fontSize="9">
                    dose {i + 1}: {q} qr{q > 1 ? "s" : ""}
                  </text>
                ))}
                <text y={78} textAnchor="middle" fontSize="9" fontWeight="700">
                  10 quarters
                </text>
              </g>
            </Fade>
            <Fade show={s >= 3}>
              <g transform="translate(354 214)">
                <text textAnchor="end" fontSize="8.5" fontWeight="700" fill={RENT}>
                  extra: £0, £3, £6, £9
                </text>
              </g>
            </Fade>
            <Fade show={s === 4}>
              <rect x="10" y="4" width="250" height="18" fill="#000" />
              <text x="135" y="16.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                same land, more capital: differential rent II
              </text>
            </Fade>
            <Figure who="ned" x={30} y={204} scale={0.6} />
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 40.2 · Whose is the extra?
 * Rent is fixed when the lease is signed; surplus-profit from new
 * investments goes to the tenant while the lease lasts.
 * ───────────────────────────────────────────────────────────── */
export function WhoseIsTheExtra() {
  return (
    <Player
      id="anim-v3-40-2"
      title="40.2 · Whose is the extra?"
      steps={[
        { caption: "When Ned signs his lease, the rent is fixed for the years ahead." },
        { caption: "During the lease Ned piles extra capital onto his field. The extra surplus-profit it brings goes into Ned's pocket, not the Landlord's." },
        { caption: "When the lease ends, the Landlord looks at the bigger harvests and writes the extra into the new rent." },
        { caption: "So tenants fought for long leases, Marx says, and resisted official farm statistics that would show how much they really grew." },
        {
          caption: "Landlords answered with more 'tenancies at will': leases they could cancel every single year. The fight over who gets the extra never stops.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const pos = [6, 40, 92, 92, 96][s];
        return (
          <>
            <Figure who="ned" x={50} y={200} scale={0.8} mood={s >= 2 ? "sad" : "happy"} />
            <Figure name="Landlord" x={310} y={200} scale={0.8} />

            {/* the lease bar */}
            <g transform="translate(60 60)">
              <rect width="200" height="18" fill="#fffbe6" stroke="#000" />
              <text x="100" y="12.5" textAnchor="middle" fontSize="8.5">
                lease: rent fixed
              </text>
              <rect x="200" width="40" height="18" fill="#f3d6bb" stroke="#000" />
              <text x="220" y="12.5" textAnchor="middle" fontSize="7.5">
                new
              </text>
              <g style={{ transform: `translateX(${pos * 2.4}px)`, transition: `transform ${T}` }}>
                <polygon points="0,-4 -5,-12 5,-12" fill="#000" />
              </g>
            </g>

            {/* the extra pile */}
            <Fade show={s >= 1}>
              <Place x={s >= 2 ? 250 : 120} y={168}>
                <Sacks n={4} fill={RENT} />
              </Place>
              <text x={s >= 2 ? 250 : 120} y="182" textAnchor="middle" fontSize="8" fontWeight="700" fill={RENT} style={{ transition: `all ${T}` }}>
                the extra
              </text>
            </Fade>

            <Fade show={s === 3}>
              <g transform="translate(180 100)">
                <rect x="-66" y="-14" width="132" height="28" fill="#fff" stroke="#000" />
                <text y="-2" textAnchor="middle" fontSize="8" fontWeight="700">
                  FARM STATISTICS
                </text>
                <text y="9" textAnchor="middle" fontSize="7.5">
                  &ldquo;no thank you!&rdquo; say the tenants
                </text>
              </g>
            </Fade>
            <Fade show={s === 4}>
              <g transform="translate(180 100)">
                <rect x="-70" y="-14" width="140" height="28" fill="#000" />
                <text y="-1" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">
                  tenancy at will
                </text>
                <text y="10" textAnchor="middle" fontSize="7.5" fill="#fff" fillOpacity=".8">
                  can be cancelled every year
                </text>
              </g>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
