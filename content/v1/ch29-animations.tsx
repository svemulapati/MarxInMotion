"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Corn, Fade, Tag } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const LORD = "#4a4a4a";
const FARMER = CAST.ned.color;

/* ─────────────────────────────────────────────────────────────
 * 29.1 · From bailiff to farmer (four steps over two centuries)
 * ───────────────────────────────────────────────────────────── */
const STAGES = [
  { name: "bailiff", when: "1300s", farmerShare: 0, note: "a serf who runs the lord's land" },
  { name: "farmer", when: "late 1300s", farmerShare: 0, note: "the lord gives seed, cattle, tools" },
  { name: "half-farmer", when: "soon after", farmerShare: 0.5, note: "each puts in half, harvest shared" },
  { name: "farmer proper", when: "by the 1500s", farmerShare: 1, note: "own money, hired hands, pays rent" },
];
const stepX = (i: number) => 52 + i * 86;
const stepY = (i: number) => 164 - i * 26;

export function BailiffToFarmer() {
  return (
    <Player
      id="anim-29-1"
      title="29.1 · From bailiff to farmer"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Grandpa Ned's ancestor Hob starts as the lord's bailiff. He is a serf himself, and he runs the lord's land for the lord. Everything belongs to the lord." },
        { caption: "Later, the lord lets Hob farm on his own account, but gives him the seed, the cattle and the tools. Hob hires a few more helpers than an ordinary peasant." },
        { caption: "Then Hob becomes a half-farmer. He puts in half the seed and cattle, the lord puts in the other half, and they share the harvest as agreed." },
        {
          caption: "Finally Hob is a farmer proper. He farms with his own money, hires labourers for wages, and pays the lord rent. His money makes more money: he is a capitalist of the countryside.",
          ms: 5200,
        },
        { caption: "Grandpa Ned still farms this way today: he rents his land and pays the landlord. That is why rent comes up again in Volume III." },
      ]}
    >
      {(s) => {
        const at = Math.min(s, 3);
        return (
          <>
            {/* the staircase */}
            {STAGES.map((st, i) => (
              <g key={st.name}>
                <rect x={stepX(i) - 40} y={stepY(i)} width="80" height={214 - stepY(i)} fill={i <= at ? "#f3e3b3" : "#fff"} stroke="#000" style={{ transition: `fill ${T}` }} />
                <text x={stepX(i)} y={stepY(i) + 14} textAnchor="middle" fontSize="9.5" fontWeight="600">
                  {st.name}
                </text>
                <text x={stepX(i)} y={stepY(i) + 26} textAnchor="middle" fontSize="8" fillOpacity=".6">
                  {st.when}
                </text>
                {/* who owns the seed and cattle */}
                <rect x={stepX(i) - 30} y={stepY(i) + 34} width="60" height="8" fill={LORD} />
                <rect x={stepX(i) - 30} y={stepY(i) + 34} width={60 * st.farmerShare} height="8" fill={FARMER} />
              </g>
            ))}
            <text x="180" y="226" textAnchor="middle" fontSize="8.5" fillOpacity=".7">
              bars: who owns the seed and cattle (dark = lord, brown = farmer)
            </text>

            {/* Hob climbs */}
            <g style={{ transform: `translate(${stepX(at)}px, ${stepY(at)}px)`, transition: `transform ${T}, opacity 400ms`, opacity: s === 4 ? 0 : 1 }}>
              <Figure name="Hob" x={0} y={0} scale={0.7} label={false} />
              <text y="-50" textAnchor="middle" fontSize="8.5">
                Hob
              </text>
            </g>
            {STAGES.map((st, i) => (
              <Fade key={st.name} show={at === i && s < 4} delay={300}>
                <text x="180" y="22" textAnchor="middle" fontSize="11" fontWeight="600">
                  {st.note}
                </text>
              </Fade>
            ))}

            {/* Ned, today */}
            <Fade show={s === 4} delay={300}>
              <Figure who="ned" x={stepX(3)} y={stepY(3)} scale={0.7} label={false} />
              <g transform={`translate(${stepX(3) - 38} ${stepY(3) - 30})`}>
                <Tag text="rent" />
              </g>
              <text x="180" y="22" textAnchor="middle" fontSize="11" fontWeight="600">
                today: Grandpa Ned, tenant farmer
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 29.2 · The long lease (the 16th-century price rise)
 * Illustrative numbers: rent fixed at 10 coins a year; corn from 1 coin
 * a sack to 2; wages from 10 to 14. Marx gives no figures here.
 * ───────────────────────────────────────────────────────────── */
const UNIT = 2.3;
const YEARS = [
  { label: "year 1", price: 1, sales: 40, rent: 10, wages: 10 },
  { label: "year 40", price: 2, sales: 80, rent: 10, wages: 14 },
];

function SplitBar({ y, d, show }: { y: number; d: (typeof YEARS)[number]; show: boolean }) {
  const keep = d.sales - d.rent - d.wages;
  const segs = [
    { w: d.rent, fill: LORD, label: `rent ${d.rent}` },
    { w: d.wages, fill: "#9a9a9a", label: `wages ${d.wages}` },
    { w: keep, fill: FARMER, label: `farmer keeps ${keep}` },
  ];
  let x = 96;
  return (
    <g style={{ opacity: show ? 1 : 0, transition: "opacity 500ms" }}>
      <text x="10" y={y + 13} fontSize="9.5" fontWeight="600">
        {d.label}
      </text>
      <text x="10" y={y + 25} fontSize="8" fillOpacity=".6">
        corn {d.price} coin{d.price > 1 ? "s" : ""}/sack
      </text>
      {segs.map((sg) => {
        const sx = x;
        x += sg.w * UNIT;
        return <rect key={sg.label} x={sx} y={y} width={sg.w * UNIT} height="18" fill={sg.fill} stroke="#fff" />;
      })}
      <text x="96" y={y + 31} fontSize="8.5">
        {segs.map((sg) => sg.label).join("  \u00b7  ")}
      </text>
      <text x={96 + d.sales * UNIT + 4} y={y + 13} fontSize="9" fontWeight="600">
        {d.sales}
      </text>
    </g>
  );
}

export function TheLongLease() {
  return (
    <Player
      id="anim-29-2"
      title="29.2 · The long lease"
      steps={[
        { caption: "In the 1500s farm leases often ran for a very long time, sometimes 99 years. Hob's lease fixes his rent at 10 coins a year, every year." },
        { caption: "In the first year Hob sells 40 sacks of corn at 1 coin each. He pays 10 coins rent and 10 coins in wages, and keeps 20. (These numbers are made up to show the idea.)" },
        { caption: "Then, over many years, gold and silver become cheaper, so money is worth less. Prices climb: a sack of corn now sells for 2 coins." },
        {
          caption: "Forty years on, Hob sells the same 40 sacks for 80 coins. His rent is still 10. Wages crept up only to 14, much slower than prices. Hob keeps 56.",
          ms: 5000,
        },
        {
          caption: "The landlord's 10 coins now buy half as much corn, and the farmhands' wages buy less than before. Marx says farmers grew rich “at the expense both of their labourers and their landlords”.",
          ms: 5400,
        },
      ]}
      viewBox="0 0 360 230"
    >
      {(s) => (
        <>
          {/* the lease */}
          <g style={{ opacity: s === 0 ? 1 : 0.35, transition: "opacity 500ms" }}>
            <rect x="120" y="14" width="120" height="44" fill="#fffbe6" stroke="#000" />
            <text x="180" y="31" textAnchor="middle" fontSize="10" fontWeight="600">
              LEASE: 99 years
            </text>
            <text x="180" y="47" textAnchor="middle" fontSize="9.5">
              rent: 10 coins a year
            </text>
          </g>

          <SplitBar y={74} d={YEARS[0]} show={s >= 1} />
          <SplitBar y={130} d={YEARS[1]} show={s >= 3} />

          {/* prices rising */}
          <Fade show={s === 2}>
            <g transform="translate(290 150)">
              <Corn />
            </g>
            <g transform="translate(300 128)">
              <Tag text="2 coins" />
            </g>
            <text x="290" y="182" textAnchor="middle" fontSize="9">
              prices up
            </text>
            <text x="200" y="150" textAnchor="middle" fontSize="10">
              money worth less
            </text>
          </Fade>

          {/* winners and losers */}
          <Fade show={s === 4} delay={300}>
            {[
              { x: 60, label: "landlord", line: "rent buys half", down: true },
              { x: 180, label: "farmhands", line: "wages buy less", down: true },
              { x: 300, label: "farmer", line: "much richer", down: false },
            ].map((w) => (
              <g key={w.label}>
                <text x={w.x} y="196" textAnchor="middle" fontSize="10" fontWeight="600">
                  {w.label}
                </text>
                <text x={w.x} y="210" textAnchor="middle" fontSize="9">
                  {w.line}
                </text>
                <text x={w.x} y="226" textAnchor="middle" fontSize="14" fill={w.down ? "#d6452f" : "#2a9d5b"}>
                  {w.down ? "▼" : "▲"}
                </text>
              </g>
            ))}
          </Fade>
        </>
      )}
    </Player>
  );
}
