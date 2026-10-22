"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cow, Fade, Place } from "@/components/anim/Things";

const GOLD = "#e6b800";
const GREEN = "#2a9d5b";

/** A sack of grain. */
function Sack() {
  return (
    <g>
      <path d="M-9,-12 Q0,-16 9,-12 L11,10 Q0,14 -11,10 Z" fill="#d8b47a" stroke="#000" strokeWidth="1" />
      <path d="M-6,-12 L0,-17 L6,-12" fill="none" stroke="#000" strokeWidth="1" />
    </g>
  );
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ─────────────────────────────────────────────────────────────
 * 47.1 · Three old ways to pay for land
 * Labour rent (part of the week on the lord's estate), rent in kind
 * (surplus product handed over), money rent (the product's price handed
 * over). In all three the payer is the cultivator, and rent is the whole
 * of his surplus-labour.
 * ───────────────────────────────────────────────────────────── */
export function ThreeOldWays() {
  return (
    <Player
      id="anim-v3-47-1"
      title="47.1 · Three old ways to pay for land"
      viewBox="0 0 360 226"
      steps={[
        {
          caption: "Long, long ago, before Grandpa Ned's family were farmers for profit, a peasant ploughed his own strip with his own plough for part of the week, and worked the lord's fields for the rest, for nothing.",
          ms: 5600,
        },
        {
          caption: "This is labour rent. Here you can see the lord's share with your own eyes: whole days. Rent and the unpaid surplus-labour are the very same thing.",
          ms: 5200,
        },
        {
          caption: "Later the peasant works only his own land, then hands the lord sacks of grain. This is rent in kind. Now the law, not the overseer's whip, makes him do the extra work.",
          ms: 5600,
        },
        {
          caption: "Later still he must sell some of his grain in town and pay the lord in coins. This is money rent. It needs markets, towns and money to be everywhere.",
          ms: 5200,
        },
        { caption: "Days, then sacks, then coins. The form changes, but in all three the lord takes the peasant's whole surplus." },
      ]}
    >
      {(s) => (
        <>
          <Figure name="peasant" x={42} y={196} scale={0.8} />
          <Figure name="lord" x={322} y={196} scale={0.8} />

          {/* labour rent: the working week */}
          <Fade show={s <= 1}>
            {DAYS.map((d, i) => {
              const lord = i >= 3;
              return (
                <g key={d}>
                  <rect x={70 + i * 37} y="60" width="33" height="34" fill={lord ? GOLD : GREEN} />
                  <text x={86 + i * 37} y="82" textAnchor="middle" fontSize="10" fill={lord ? "#000" : "#fff"}>
                    {d}
                  </text>
                </g>
              );
            })}
            <text x="125" y="112" textAnchor="middle" fontSize="10">
              his own strip
            </text>
            <text x="236" y="112" textAnchor="middle" fontSize="10">
              the lord&apos;s fields, unpaid
            </text>
            <Fade show={s === 1}>
              <text x="180" y="40" textAnchor="middle" fontSize="12" fontWeight="600">
                labour rent: you can see the unpaid days
              </text>
            </Fade>
          </Fade>

          {/* rent in kind */}
          <Fade show={s === 2 || s === 4}>
            {[0, 1, 2].map((i) => (
              <Place key={i} x={s === 4 ? 152 : 150 + i * 28} y={s === 4 ? 122 : 130} show scale={s === 4 ? 0.8 : 1}>
                <Sack />
              </Place>
            ))}
            <Fade show={s === 2}>
              <text x="180" y="40" textAnchor="middle" fontSize="12" fontWeight="600">
                rent in kind: sacks of grain
              </text>
              <path d="M110,150 L280,150" stroke="#000" strokeDasharray="4 3" markerEnd="url(#v3c47a)" />
            </Fade>
          </Fade>

          {/* money rent */}
          <Fade show={s === 3 || s === 4}>
            <g transform={s === 4 ? "translate(232 122)" : "translate(180 130)"}>
              <Coins n={4} />
            </g>
            <Fade show={s === 3}>
              <text x="180" y="40" textAnchor="middle" fontSize="12" fontWeight="600">
                money rent: coins
              </text>
              <g transform="translate(180 76)">
                <rect x="-36" y="-14" width="72" height="22" fill="#ddd" stroke="#000" />
                <text y="2" textAnchor="middle" fontSize="9">
                  town market
                </text>
              </g>
              <path d="M110,150 L280,150" stroke="#000" strokeDasharray="4 3" markerEnd="url(#v3c47a)" />
            </Fade>
          </Fade>

          {/* the summary row */}
          <Fade show={s === 4}>
            <rect x="72" y="110" width="36" height="24" fill={GOLD} />
            <text x="90" y="126" textAnchor="middle" fontSize="9">
              days
            </text>
            <text x="126" y="126" textAnchor="middle" fontSize="14">
              →
            </text>
            <text x="194" y="126" textAnchor="middle" fontSize="14">
              →
            </text>
            <text x="180" y="40" textAnchor="middle" fontSize="12" fontWeight="600">
              the form changes, the lord&apos;s share does not
            </text>
          </Fade>

          <defs>
            <marker id="v3c47a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 47.2 · Two roads out of money rent
 * Money rent turns custom into contract. It leads either to peasant
 * freehold or to rent paid by a capitalist tenant farmer; better-off
 * peasants hiring day-labourers are the "nursery school" for capitalist
 * tenants, helped in 16th-century England by falling money and long
 * leases. Then rent is only the excess over average profit.
 * ───────────────────────────────────────────────────────────── */
export function TwoRoads() {
  return (
    <Player
      id="anim-v3-47-2"
      title="47.2 · Two roads out of money rent"
      viewBox="0 0 360 226"
      steps={[
        { caption: "Once rent is paid in money, the old custom between lord and peasant becomes a written contract. The peasant is now really a tenant." },
        { caption: "Road one: the peasant buys himself free of the rent and owns his plot outright. He becomes a peasant proprietor." },
        {
          caption: "Road two: a better-off peasant hires day-labourers for wages, saves, and rents more land. Marx calls these peasants a nursery school for capitalist farmers. Grandpa Ned's family ended up here too: Hob began as the lord's bailiff, and his family came to rent land and hire workers (Volume I, Chapter 29).",
          ms: 6000,
        },
        {
          caption: "Now the farmer is a capitalist. He pays wages, buys seed and tools, and expects the normal profit any business makes. Grandpa Ned farms this way today.",
          ms: 5200,
        },
        {
          caption: "So the rent changes too. In the old forms, rent swallowed the whole surplus. Now the workers' surplus goes to the farmer first, and rent is only what is left above his normal profit.",
          ms: 5800,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the contract */}
          <Fade show={s === 0}>
            <rect x="140" y="50" width="80" height="96" fill="#fffbe6" stroke="#000" />
            {[70, 82, 94, 106, 118].map((y) => (
              <line key={y} x1="150" y1={y} x2="210" y2={y} stroke="#999" />
            ))}
            <text x="180" y="138" textAnchor="middle" fontSize="9">
              lease
            </text>
            <Figure name="peasant" x={70} y={190} scale={0.8} />
            <Figure name="lord" x={290} y={190} scale={0.8} />
          </Fade>

          {/* the fork in the road */}
          <Fade show={s === 1 || s === 2}>
            <path d="M180,210 L180,150 L80,80" fill="none" stroke="#bbb" strokeWidth="14" />
            <path d="M180,150 L280,80" fill="none" stroke="#bbb" strokeWidth="14" />
            <text x="70" y="62" textAnchor="middle" fontSize="10" fontWeight={s === 1 ? 700 : 400}>
              owns his plot
            </text>
            <text x="290" y="62" textAnchor="middle" fontSize="10" fontWeight={s === 2 ? 700 : 400}>
              capitalist tenant
            </text>
            <Figure name="peasant" x={s === 1 ? 84 : 180} y={s === 1 ? 108 : 196} scale={0.65} style={{ opacity: s === 1 ? 1 : 0.3 }} />
            <Fade show={s === 2}>
              <Figure name="Hob" x={274} y={112} scale={0.65} />
              {[236, 326].map((x) => (
                <Figure key={x} name="day-labourer" x={x} y={200} scale={0.55} />
              ))}
            </Fade>
          </Fade>

          {/* the capitalist farmer */}
          <Fade show={s === 3}>
            <Figure who="ned" x={70} y={190} scale={0.9} />
            <Figure name="farmhand" x={150} y={190} scale={0.7} />
            <Figure name="farmhand" x={190} y={190} scale={0.7} />
            <g transform="translate(270 150)">
              <Cow />
            </g>
            <text x="180" y="50" textAnchor="middle" fontSize="11" fontWeight="600">
              wages + seed + tools → normal profit expected
            </text>
          </Fade>

          {/* where the surplus goes, before and after */}
          <Fade show={s === 4}>
            <text x="90" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              old rent
            </text>
            <rect x="40" y="56" width="100" height="70" fill={GOLD} />
            <text x="90" y="95" textAnchor="middle" fontSize="10">
              all the surplus
            </text>
            <text x="90" y="144" textAnchor="middle" fontSize="9.5">
              peasant → lord
            </text>

            <text x="270" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              capitalist rent
            </text>
            <rect x="220" y="56" width="100" height="48" fill="#b9b9b9" />
            <text x="270" y="84" textAnchor="middle" fontSize="10">
              normal profit
            </text>
            <rect x="220" y="104" width="100" height="22" fill={GOLD} />
            <text x="270" y="119" textAnchor="middle" fontSize="10">
              rent: the extra
            </text>
            <text x="270" y="144" textAnchor="middle" fontSize="9.5">
              workers → farmer → landlord
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 47.3 · Halves and small plots
 * Métayage: the landlord supplies land and part of the working capital
 * (e.g. cattle), and the product is shared. Peasant proprietorship: no
 * rent, but the peasant farms down to the wage he pays himself; lower
 * grain prices "a result of the producers' poverty"; mortgage interest;
 * downfall through loss of domestic industry, commons, soil and
 * competition.
 * ───────────────────────────────────────────────────────────── */
export function HalvesAndSmallPlots() {
  return (
    <Player
      id="anim-v3-47-3"
      title="47.3 · Halves and small plots"
      viewBox="0 0 360 226"
      steps={[
        {
          caption: "A halfway house: share-cropping, which Marx calls the métayer system. The landlord gives the land and some cattle, the farmer gives work and some tools, and they split the harvest.",
          ms: 5600,
        },
        { caption: "Another road: the peasant who owns his own small plot. He pays no rent to anyone." },
        {
          caption: "He keeps farming as long as the price covers the wage he pays himself, even a very low one. So grain from small plots can be cheap. Marx: a result of the farmers' poverty, not of how productive they are.",
          ms: 6000,
        },
        { caption: "Often he bought the plot with borrowed money, so he pays interest on a mortgage to a lender like Bea. The rent comes back in disguise." },
        {
          caption: "Marx thought small plots were doomed: factories took away their winter weaving, big owners took the common grazing land, the soil wore out, and big farms out-competed them.",
          ms: 5800,
        },
      ]}
    >
      {(s) => (
        <>
          {/* share-cropping */}
          <Fade show={s === 0}>
            <Figure name="Landlord" x={60} y={190} scale={0.8} />
            <Figure name="share-cropper" x={300} y={190} scale={0.8} />
            <g transform="translate(110 168)">
              <Cow />
            </g>
            <circle cx="180" cy="94" r="46" fill={GOLD} stroke="#000" />
            <line x1="180" y1="48" x2="180" y2="140" stroke="#000" strokeWidth="2" />
            <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
              the harvest, shared
            </text>
            <text x="158" y="98" textAnchor="middle" fontSize="8.5">
              landlord
            </text>
            <text x="202" y="98" textAnchor="middle" fontSize="8.5">
              farmer
            </text>
          </Fade>

          {/* the peasant on his own plot */}
          <Fade show={s >= 1}>
            <rect x="30" y="150" width="120" height="30" fill={s === 4 ? "#c9c0a8" : "#cfe3a8"} stroke="#000" style={{ transition: "fill 700ms" }} />
            <text x="90" y="196" textAnchor="middle" fontSize="9.5">
              his own small plot
            </text>
            <Figure name="peasant" x={90} y={150} scale={0.75} mood={s >= 3 ? "sad" : "happy"} />
          </Fade>
          <Fade show={s === 1}>
            <text x="250" y="110" textAnchor="middle" fontSize="16" fontWeight="300">
              rent: none
            </text>
          </Fade>
          <Fade show={s === 2}>
            <text x="250" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
              keeps going while the price covers
            </text>
            <text x="250" y="86" textAnchor="middle" fontSize="11" fontWeight="600">
              the wage he pays himself
            </text>
            <g transform="translate(250 112)">
              <Coins n={1} />
            </g>
            <text x="250" y="140" textAnchor="middle" fontSize="10" fill="#d6452f">
              cheap grain from poverty
            </text>
          </Fade>
          <Fade show={s === 3}>
            <Figure who="bea" x={290} y={190} scale={0.8} />
            <text x="230" y="80" textAnchor="middle" fontSize="11" fontWeight="600">
              mortgage interest
            </text>
            <path d="M120,120 C170,90 220,100 270,130" fill="none" stroke="#000" strokeDasharray="4 3" markerEnd="url(#v3c47b)" />
            <g transform="translate(196 104)">
              <Coins n={2} />
            </g>
          </Fade>
          <Fade show={s === 4}>
            {["home weaving lost to factories", "common grazing taken", "the soil wears out", "big farms compete"].map((t, i) => (
              <text key={t} x="200" y={70 + i * 22} fontSize="10.5">
                × {t}
              </text>
            ))}
          </Fade>
          <defs>
            <marker id="v3c47b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}
