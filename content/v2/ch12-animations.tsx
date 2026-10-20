"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coins, Cross, Fade, Place } from "@/components/anim/Things";
import { Yarn } from "@/components/anim/Workshop";

/**
 * A locomotive drawn in twelve parts, so it can be shown part-built.
 * `done` is how many of the twelve parts exist (0 to 12).
 */
function Locomotive({ done, rust = false }: { done: number; rust?: boolean }) {
  const parts: React.ReactNode[] = [
    <rect key="0" x="-40" y="-2" width="80" height="6" fill="#555" />,
    <circle key="1" cx="-28" cy="10" r="8" fill="#333" />,
    <circle key="2" cx="-8" cy="10" r="8" fill="#333" />,
    <circle key="3" cx="12" cy="10" r="8" fill="#333" />,
    <circle key="4" cx="30" cy="12" r="6" fill="#333" />,
    <rect key="5" x="-34" y="-20" width="40" height="18" rx="9" fill="#2f2f2f" />,
    <rect key="6" x="-4" y="-20" width="10" height="18" fill="#2f2f2f" />,
    <rect key="7" x="6" y="-34" width="28" height="32" fill="#3d3d3d" />,
    <rect key="8" x="10" y="-30" width="9" height="9" fill="#cfe3ff" />,
    <rect key="9" x="-30" y="-36" width="8" height="16" fill="#2f2f2f" />,
    <rect key="10" x="4" y="-38" width="32" height="5" fill="#222" />,
    <path key="11" d="M-44,6 L-40,-4 L-40,6 Z" fill="#555" />,
  ];
  return (
    <g>
      {parts.map((p, i) => (
        <g key={i} style={{ opacity: i < done ? 1 : 0.08, transition: "opacity 400ms" }}>
          {p}
        </g>
      ))}
      {rust &&
        [
          [-20, -12],
          [14, -14],
          [-6, 8],
          [24, -24],
        ].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3.5" fill="#a5532b" opacity=".85" />)}
    </g>
  );
}

/** A small factory with a chimney. */
function Works({ label }: { label: string }) {
  return (
    <g>
      <path d="M-26,14 L-26,-6 L-14,-14 L-14,-6 L-2,-14 L-2,-6 L10,-14 L10,14 Z" fill="#fff" stroke="#000" strokeWidth="1.1" />
      <rect x="14" y="-24" width="7" height="38" fill="#fff" stroke="#000" strokeWidth="1.1" />
      <text y="26" textAnchor="middle" fontSize="7.5">
        {label}
      </text>
    </g>
  );
}

const PX_PER_COIN = 1.6;

/* ─────────────────────────────────────────────────────────────
 * 12.1 · Yarn every week, a locomotive every three months
 * Marx's own set-up: equal capitals and days, a locomotive takes three
 * months, so the locomotive works needs twelve times the circulating
 * capital. The 10 coins a week are this site's.
 * ───────────────────────────────────────────────────────────── */
const WEEK_AT = [0, 1, 11, 12, 12];

export function YarnOrLocomotive() {
  return (
    <Player
      id="anim-v2-12-1"
      title="12.1 · Yarn every week, a locomotive every three months"
      viewBox="0 0 360 226"
      steps={[
        {
          caption: "Two workshops of the same size, with the same ten-hour days. Mr. Moneybags spins yarn. The Ironmaster at the Forge builds a locomotive. Each spends 10 coins a week on wages and materials.",
          ms: 5200,
        },
        { caption: "End of week one. Mr. Moneybags delivers his yarn and is paid: his 10 coins come back. The Ironmaster has one twelfth of a locomotive, and nothing to sell." },
        { caption: "Weeks two to eleven. Mr. Moneybags uses the same 10 coins over and over. The Ironmaster must find 10 fresh coins every single week.", ms: 4600 },
        { caption: "Week twelve: the locomotive is finished, delivered and paid for. Only now does all the Ironmaster's money come back at once." },
        {
          caption: "The same weekly spending, but the spinner needed 10 coins and the Ironmaster 120: twelve times as much. Marx calls the Ironmaster's three months a working period.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const week = WEEK_AT[s];
        const forgeTied = s >= 3 ? 120 : week * 10;
        const paid = s >= 3;
        return (
          <>
            <text x="350" y="16" textAnchor="end" fontSize="9" fontWeight="600">
              week {Math.max(week, 1)} of 12
            </text>

            {/* the mill */}
            <g transform="translate(36 54)">
              <Works label="spinning mill" />
            </g>
            {Array.from({ length: 6 }, (_, i) => (
              <Place key={i} x={92 + i * 22} y={50} show={i < Math.min(week, 6)} delay={i * 60}>
                <Yarn />
              </Place>
            ))}
            <Fade show={week > 6}>
              <text x="230" y="54" fontSize="8">
                + more each week
              </text>
            </Fade>
            <text x="86" y="84" fontSize="8">
              money tied up
            </text>
            <rect x="150" y="76" width={10 * PX_PER_COIN * 1.8} height="10" fill="#e6b800" stroke="#000" strokeWidth=".8" />
            <text x={156 + 10 * PX_PER_COIN * 1.8} y="84" fontSize="8.5" fontWeight="600">
              10
            </text>

            <line x1="10" y1="100" x2="350" y2="100" stroke="#000" strokeOpacity=".12" />

            {/* the forge */}
            <g transform="translate(36 140)">
              <Works label="the Forge" />
            </g>
            <g transform="translate(140 140)">
              <Locomotive done={paid ? 12 : week} />
            </g>
            <Fade show={paid}>
              <text x="140" y="174" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#2a9d5b">
                delivered and paid
              </text>
            </Fade>
            <text x="86" y="198" fontSize="8">
              money tied up
            </text>
            <rect
              x="150"
              y="190"
              width={forgeTied * PX_PER_COIN}
              height="10"
              fill="#e6b800"
              stroke="#000"
              strokeWidth=".8"
              style={{ transition: "width 700ms cubic-bezier(.2,.8,.2,1)" }}
            />
            <text x={154 + forgeTied * PX_PER_COIN} y="198" fontSize="8.5" fontWeight="600" style={{ transition: "x 700ms" }}>
              {forgeTied}
            </text>
            <Figure name="Ironmaster" x={300} y={176} scale={0.6} mood={s === 2 ? "sad" : "happy"} />

            <Fade show={s === 4}>
              <rect x="196" y="86" width="156" height="30" fill="#000" />
              <text x="274" y="99" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">
                120 against 10:
              </text>
              <text x="274" y="111" textAnchor="middle" fontSize="9" fill="#fff">
                twelve times the capital
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12.2 · A day's work, or one long job (the working period, and crises)
 * Marx's numbers: 100 working days of 10 hours = 1,000 hours.
 * ───────────────────────────────────────────────────────────── */
export function OneLongJob() {
  return (
    <Player
      id="anim-v2-12-2"
      title="12.2 · A day's work, or one long job"
      steps={[
        { caption: "In the mill, every day's work ends in finished yarn. Each day stands on its own." },
        {
          caption: "At the Forge, 100 working days of 10 hours each make one locomotive: 1,000 hours joined into a single job. Marx calls such a run of connected days a working period.",
          ms: 5000,
        },
        { caption: "Halfway through, a crisis hits and orders stop. In the mill, tomorrow's yarn simply isn't made. Yesterday's yarn can still be sold." },
        {
          caption: "At the Forge, half a locomotive can't be sold to anyone. Unless the work goes on, the iron and labour already put in are wasted, and it rusts while it waits.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const crisis = s >= 2;
        const dayW = 2.4;
        return (
          <>
            {/* the mill: one skein a day */}
            <text x="14" y="22" fontSize="9" fontWeight="600">
              spinning mill: finished every day
            </text>
            {Array.from({ length: 10 }, (_, i) => (
              <Place key={i} x={28 + i * 30} y={50} show={!crisis || i < 5} delay={s === 0 ? i * 80 : 0}>
                <Yarn />
              </Place>
            ))}
            <Fade show={crisis}>
              <text x="240" y="54" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                no more made
              </text>
              <text x="90" y="76" textAnchor="middle" fontSize="8.5" fill="#2a9d5b">
                these can still be sold
              </text>
            </Fade>

            <line x1="10" y1="92" x2="350" y2="92" stroke="#000" strokeOpacity=".12" />

            {/* the forge: one long job */}
            <text x="14" y="110" fontSize="9" fontWeight="600">
              the Forge: one locomotive, 100 working days
            </text>
            <g opacity={s >= 1 ? 1 : 0.3} style={{ transition: "opacity 500ms" }}>
              <rect x="40" y="186" width={100 * dayW} height="12" fill="#fff" stroke="#000" strokeWidth=".8" />
              <rect
                x="40"
                y="186"
                width={(crisis ? 50 : s >= 1 ? 100 : 0) * dayW}
                height="12"
                fill="#555"
                style={{ transition: "width 900ms cubic-bezier(.2,.8,.2,1)" }}
              />
              <text x="40" y="210" fontSize="7.5">
                day 1
              </text>
              <text x={40 + 100 * dayW} y="210" textAnchor="end" fontSize="7.5">
                day 100
              </text>
              <Fade show={s === 1}>
                <text x={40 + 50 * dayW} y="210" textAnchor="middle" fontSize="8" fontWeight="600">
                  1,000 working hours, one job
                </text>
              </Fade>
            </g>
            <g transform="translate(236 154)">
              <Locomotive done={s === 0 ? 0 : crisis ? 6 : 12} rust={s === 3} />
            </g>

            <Fade show={crisis}>
              <line x1={40 + 50 * dayW} y1="120" x2={40 + 50 * dayW} y2="204" stroke="#d6452f" strokeWidth="2" strokeDasharray="4 3" />
              <text x={44 + 50 * dayW} y="128" fontSize="8.5" fill="#d6452f" fontWeight="600">
                crisis
              </text>
              <line x1="210" y1="14" x2="210" y2="86" stroke="#d6452f" strokeWidth="2" strokeDasharray="4 3" />
            </Fade>
            <Fade show={s === 3}>
              <g transform="translate(318 140)">
                <Cross />
              </g>
              <text x="318" y="160" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                half a train:
              </text>
              <text x="318" y="171" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                nobody can buy it
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 12.3 · Who can take on a long job? (concentration and credit)
 * Marx's source: a London builder's evidence to the 1857 bank committee.
 * ───────────────────────────────────────────────────────────── */
export function WhoCanBuildLong() {
  return (
    <Player
      id="anim-v2-12-3"
      title="12.3 · Who can take on a long job?"
      viewBox="0 0 360 222"
      steps={[
        { caption: "Long ago, very long jobs like roads and canals were often not done by private capitalists at all. Towns or the state paid, and in older times it was often forced labour." },
        { caption: "Even a house was paid for bit by bit: the family paid the builder at each stage as the walls went up." },
        {
          caption: "By the 1850s, a London builder told a committee of Parliament, builders built 100 to 200 houses at once, for sale to whoever would buy, on borrowed money 20 to 50 times their own.",
          ms: 5600,
        },
        { caption: "When a crisis stopped the loans, the whole job could collapse: houses stood unfinished, or were sold at auction for half what they cost.", ms: 4600 },
        {
          caption: "Marx's point: long working periods suit only very big capitals, or capitalists who can use other people's money through credit. Bea's bank makes the long job possible.",
          ms: 5200,
        },
      ]}
    >
      {(s) => {
        const houses = s >= 2 ? 12 : s === 1 ? 1 : 0;
        const crisis = s === 3;
        return (
          <>
            {/* the road built by the town */}
            <Fade show={s === 0}>
              <path d="M10,170 C90,120 200,180 350,110" stroke="#9a9a9a" strokeWidth="18" fill="none" />
              <path d="M10,170 C90,120 200,180 350,110" stroke="#fff" strokeWidth="1.5" strokeDasharray="8 8" fill="none" />
              <text x="180" y="60" textAnchor="middle" fontSize="10" fontWeight="600">
                a road for everyone
              </text>
              <text x="180" y="74" textAnchor="middle" fontSize="8.5">
                paid by the town or the state
              </text>
            </Fade>

            {/* houses */}
            {Array.from({ length: 12 }, (_, i) => {
              const col = i % 6;
              const row = Math.floor(i / 6);
              const x = 40 + col * 36;
              const y = 96 + row * 52;
              const unfinished = crisis && i % 3 !== 0;
              return (
                <Place key={i} x={x} y={y} show={i < houses} delay={i * 50}>
                  <rect x="-13" y="-10" width="26" height="22" fill={unfinished ? "none" : "#fff"} stroke="#000" strokeWidth="1" strokeDasharray={unfinished ? "3 2" : "0"} />
                  {!unfinished && <path d="M-16,-10 L0,-22 L16,-10 Z" fill="#c0503a" stroke="#000" strokeWidth="1" />}
                  {!unfinished && <rect x="-4" y="2" width="8" height="10" fill="#8a5a2b" />}
                </Place>
              );
            })}
            <Fade show={s === 1}>
              <text x="90" y="140" fontSize="8.5">
                the family pays at each stage
              </text>
              <g transform="translate(160 96)">
                <Coins n={2} />
              </g>
            </Fade>
            <Fade show={s >= 2}>
              <text x="40" y="34" fontSize="9" fontWeight="600">
                100 to 200 houses, built for the market
              </text>
            </Fade>

            {/* own money vs borrowed */}
            <Fade show={s >= 2}>
              <text x="262" y="54" fontSize="8">
                the builder&apos;s own money
              </text>
              <rect x="262" y="58" width="6" height="10" fill="#e6b800" stroke="#000" strokeWidth=".8" />
              <text x="262" y="84" fontSize="8">
                borrowed
              </text>
              <rect x="262" y="88" width="88" height="10" fill="#7b4bd6" stroke="#000" strokeWidth=".8" opacity={crisis ? 0.25 : 1} style={{ transition: "opacity 500ms" }} />
              <text x="262" y="110" fontSize="7.5">
                20 to 50 times as much
              </text>
            </Fade>
            <Figure name="Builder" x={240} y={206} scale={0.6} mood={crisis ? "sad" : "happy"} style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }} />
            <Figure who="bea" x={300} y={206} scale={0.6} style={{ opacity: s >= 2 ? 1 : 0, transition: "opacity 500ms" }} />

            <Fade show={crisis}>
              <text x="140" y="214" textAnchor="middle" fontSize="9" fill="#d6452f" fontWeight="600">
                crisis: unfinished, or sold at half the cost
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="20" y="186" width="190" height="30" fill="#000" />
              <text x="115" y="199" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                long jobs need big capital
              </text>
              <text x="115" y="211" textAnchor="middle" fontSize="8.5" fill="#fff">
                or other people&apos;s money
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
