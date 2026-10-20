"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Fade, Tag } from "@/components/anim/Things";

const GRAY = "#bdbdbd";
const GREEN = "#2a9d5b";
const GOLD = "#e6b800";
const TOM = "#c2407f";
const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 17.1 · Where Tom's slice comes from
 * Marx's own numbers: industry 720c + 180v = 900, s' = 100%, so
 * 180 of surplus and a product worth 1,080 (20%). Add 100 of merchant's
 * capital: 180 over 1,000 = 18%. Industry sells to the merchant at
 * 1,062; the merchant sells at 1,080.
 * ───────────────────────────────────────────────────────────── */
const U = 0.27; // px per coin

export function WhereTomsSliceComesFrom() {
  return (
    <Player
      id="anim-v3-17-1"
      title="17.1 · Where Tom's slice comes from"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Marx's own numbers for a whole country. The mills put in 720 of machines and cotton and 900 in all. Their workers make 180 of surplus-value, so the goods are worth 1,080. Profit: 180 on 900 = 20%.", ms: 5600 },
        { caption: "Now add the merchants, like Tom, with 100 of their own capital. They want the normal rate of profit on it too. All capital together is now 1,000." },
        { caption: "But there is still only 180 of surplus-value. Spread over 1,000 of capital, the average rate falls to 18%." },
        { caption: "So the mills sell their goods to Tom not at 1,080 but at 1,062: their costs of 900 plus 18% profit, which is 162." },
        { caption: "Tom then sells at 1,080. His 18 coins are 18% on his 100." },
        {
          caption: "Look closely: Tom sells at exactly 1,080, the full value. He did not add anything on top. He got a slice of the same 180 of surplus-value: 162 stayed with the mills, 18 went to Tom.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const x0 = 18;
        const withTom = s >= 1;
        return (
          <>
            {/* the value of the goods */}
            <text x={x0} y="20" fontSize="9" fillOpacity=".6">
              value of everything made
            </text>
            <rect x={x0} y={26} width={720 * U} height="20" fill={GRAY} stroke="#000" strokeWidth=".6" />
            <text x={x0 + 360 * U} y={40} textAnchor="middle" fontSize="9">
              c 720
            </text>
            <rect x={x0 + 720 * U} y={26} width={180 * U} height="20" fill={GREEN} stroke="#000" strokeWidth=".6" />
            <text x={x0 + 810 * U} y={40} textAnchor="middle" fontSize="9" fill="#fff">
              v 180
            </text>
            {/* surplus split: mills' share and Tom's share */}
            <rect x={x0 + 900 * U} y={26} width={(s >= 3 ? 162 : 180) * U} height="20" fill={GOLD} stroke="#000" strokeWidth=".6" style={{ transition: `width ${T}` }} />
            <rect
              x={x0 + 1062 * U}
              y={26}
              width={18 * U}
              height="20"
              fill={TOM}
              stroke="#000"
              strokeWidth=".6"
              style={{ opacity: s >= 3 ? 1 : 0, transition: "opacity 500ms 300ms" }}
            />
            <text x={x0 + 1080 * U + 4} y={40} fontSize="10" fontWeight="600">
              1,080
            </text>
            <text x={x0 + 990 * U} y={60} textAnchor="middle" fontSize="8.5" fill="#8a6d00">
              s 180
            </text>

            {/* capital advanced */}
            <text x={x0} y="88" fontSize="9" fillOpacity=".6">
              capital put in
            </text>
            <rect x={x0} y={94} width={900 * U} height="16" fill="#fff" stroke="#000" strokeWidth=".8" />
            <text x={x0 + 450 * U} y={106} textAnchor="middle" fontSize="9">
              the mills: 900
            </text>
            <g style={{ opacity: withTom ? 1 : 0, transition: "opacity 500ms" }}>
              <rect x={x0 + 900 * U} y={94} width={100 * U} height="16" fill={TOM} stroke="#000" strokeWidth=".8" />
              <text x={x0 + 1000 * U + 4} y={106} fontSize="9">
                Tom: 100
              </text>
            </g>

            {/* the rate */}
            <text x={x0} y="134" fontSize="9" fillOpacity=".6">
              average rate of profit
            </text>
            <text x={x0 + 112} y="136" fontSize="18" fontWeight="600" fill={s >= 2 ? "#d6452f" : "#000"}>
              {s >= 2 ? "18%" : "20%"}
            </text>

            {/* the two price tags */}
            <Fade show={s >= 3}>
              <Figure who="moneybags" x={60} y={200} scale={0.6} label={false} />
              <g transform="translate(112 160)">
                <Tag text="1,062" />
              </g>
              <text x="112" y="182" textAnchor="middle" fontSize="8.5">
                mills sell to Tom
              </text>
              <path d="M138,160 L222,160" stroke="#000" strokeWidth="1" markerEnd="url(#v3c17arr)" />
            </Fade>
            <Fade show={s >= 4}>
              <Figure who="tom" x={300} y={200} scale={0.6} label={false} />
              <g transform="translate(248 160)">
                <Tag text="1,080" />
              </g>
              <text x="248" y="182" textAnchor="middle" fontSize="8.5">
                Tom sells: +18
              </text>
            </Fade>
            <Fade show={s === 5} delay={300}>
              <rect x="70" y="204" width="220" height="22" fill="#000" />
              <text x="180" y="219" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
                a share of the surplus, <tspan fill={GOLD}>not a mark-up</tspan>
              </text>
            </Fade>
            <defs>
              <marker id="v3c17arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
              </marker>
            </defs>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 17.2 · Tom's shop assistant
 * "The unpaid labour of these clerks, while it does not create
 * surplus-value, enables him to appropriate surplus-value."
 * The hours are illustrative.
 * ───────────────────────────────────────────────────────────── */
export function TomsShopAssistant() {
  return (
    <Player
      id="anim-v3-17-2"
      title="17.2 · Tom's shop assistant"
      steps={[
        { caption: "Tom's shop is busy now, so he hires a clerk, Lily, to write bills, keep the books and serve customers. She works a long day." },
        { caption: "Lily is paid a wage like any worker: enough to live on. Here it covers about half of her day. (Made-up hours.)" },
        { caption: "But her work does not make the yarn worth more. Selling and bookkeeping add no value, just like Clerk Pim's sums in Volume II." },
        { caption: "So how does Lily make Tom richer? Her extra hours let Tom handle far more yarn, and so claim a bigger slice of the surplus made in the mills." },
        {
          caption: "Marx: the clerk's unpaid labour “does not create surplus-value” but “enables him to appropriate surplus-value”. Without it, trade could never be run on a big scale.",
          ms: 5400,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="tom" x={50} y={120} scale={0.75} />
          <Figure name="Lily" x={120} y={120} scale={0.75} />
          <rect x="88" y="142" width="64" height="22" fill="#fff" stroke="#000" />
          <text x="120" y="157" textAnchor="middle" fontSize="8">
            bills, books
          </text>

          {/* Lily's day */}
          <text x="180" y="40" fontSize="9" fillOpacity=".6">
            Lily&apos;s working day
          </text>
          <rect x="180" y="46" width="160" height="18" fill="#2c2c2c" fillOpacity=".15" stroke="#000" strokeWidth=".6" />
          <Fade show={s >= 1}>
            <rect x="180" y="46" width="80" height="18" fill={GREEN} />
            <text x="220" y="59" textAnchor="middle" fontSize="8.5" fill="#fff">
              paid
            </text>
            <rect x="260" y="46" width="80" height="18" fill={GOLD} />
            <text x="300" y="59" textAnchor="middle" fontSize="8.5">
              unpaid
            </text>
          </Fade>

          <Fade show={s >= 2}>
            <text x="180" y="94" fontSize="9" fillOpacity=".6">
              value added to the yarn
            </text>
            <text x="180" y="112" fontSize="16" fontWeight="600" fill="#d6452f">
              0
            </text>
          </Fade>

          <Fade show={s >= 3}>
            <text x="180" y="146" fontSize="9" fillOpacity=".6">
              Tom&apos;s slice of the mills&apos; surplus
            </text>
            <rect x="180" y="152" height="16" width={s >= 3 ? 120 : 40} fill={TOM} style={{ transition: `width ${T}` }} />
            <text x="306" y="164" fontSize="8.5">
              bigger
            </text>
          </Fade>
          <Fade show={s === 4} delay={300}>
            <rect x="20" y="186" width="320" height="24" fill="#000" />
            <text x="180" y="202" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="600">
              unpaid labour that <tspan fill={GOLD}>captures</tspan> surplus, not creates it
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
