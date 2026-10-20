"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Coins, Fade, Place } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 19.1 · Three ways to work for someone else
 * Marx: in the corvée the two kinds of work "differ in space and time";
 * for the slave all labour appears unpaid; for the wage-worker all
 * labour appears paid.
 * ───────────────────────────────────────────────────────────── */
const BX = 112;
const BW = 228;

function Row({
  y,
  label,
  sub,
  show,
  children,
  verdict,
  showVerdict,
}: {
  y: number;
  label: string;
  sub: string;
  show: boolean;
  children: React.ReactNode;
  verdict: string;
  showVerdict: boolean;
}) {
  return (
    <Fade show={show}>
      <text x="10" y={y + 8} fontSize="10" fontWeight="600">
        {label}
      </text>
      <text x="10" y={y + 21} fontSize="8.5" fillOpacity=".55">
        {sub}
      </text>
      {children}
      <Fade show={showVerdict} delay={300}>
        <text x={BX + BW / 2} y={y + 38} textAnchor="middle" fontSize="9.5" fontWeight="600">
          {verdict}
        </text>
      </Fade>
    </Fade>
  );
}

export function ThreeWaysToWork() {
  return (
    <Player
      id="anim-19-1"
      title="19.1 · Three ways to work for someone else"
      viewBox="0 0 360 232"
      steps={[
        {
          caption: "Long ago, a peasant worked some days on his own field and other days, for free, on his lord's field. Anyone could see which work was for whom. This was called the corvée.",
          ms: 4600,
        },
        {
          caption: "An enslaved person's whole day looked like work for the master, even the part that only paid for their own food and shelter.",
          ms: 4200,
        },
        { caption: "Now Sam. He is paid 3 coins “for the day”. His whole day looks paid." },
        {
          caption: "But inside Sam's day the same split is there. The first 6 hours make the value of his wage. The other 6 are unpaid. The wage hides the line.",
          ms: 4400,
        },
        {
          caption: "Marx: for the slave, ownership hides the part that is for himself. For the wage-worker, money hides the part that is unpaid.",
          ms: 4600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* the peasant: two separate blocks, in different places and days */}
          <Row y={20} label="Peasant" sub="long ago" show={s >= 0} verdict="you can see the split" showVerdict={s === 4}>
            <rect x={BX} y={20} width={BW / 2 - 4} height="22" fill={TONE.wage} stroke="#000" />
            <rect x={BX + BW / 2 + 4} y={20} width={BW / 2 - 4} height="22" fill={TONE.surplus} stroke="#000" />
            <text x={BX + BW / 4} y={34} textAnchor="middle" fontSize="9" fill="#fff">
              his own field
            </text>
            <text x={BX + (3 * BW) / 4} y={34} textAnchor="middle" fontSize="9">
              the lord&apos;s field
            </text>
          </Row>

          {/* the enslaved worker: everything looks like the master's */}
          <Row y={90} label="Enslaved" sub="worker" show={s >= 1} verdict="all of it looks unpaid" showVerdict={s === 4}>
            <rect x={BX} y={90} width={BW} height="22" fill={TONE.surplus} stroke="#000" />
            <rect x={BX + 2} y={92} width={BW / 2 - 4} height="18" fill="none" stroke={TONE.wage} strokeWidth="2" strokeDasharray="4 3" />
            <text x={BX + BW / 4} y={104} textAnchor="middle" fontSize="8.5">
              really feeds him
            </text>
            <text x={BX + (3 * BW) / 4} y={104} textAnchor="middle" fontSize="9">
              for the master
            </text>
          </Row>

          {/* Sam: one green bar that later shows its hidden split */}
          <Row y={160} label="Sam" sub="paid a wage" show={s >= 2} verdict="all of it looks paid" showVerdict={s === 4}>
            <rect x={BX} y={160} width={BW} height="22" fill={TONE.wage} stroke="#000" />
            <rect
              x={BX + BW / 2}
              y={160}
              width={BW / 2}
              height="22"
              fill={TONE.surplus}
              stroke="#000"
              style={{ opacity: s >= 3 ? 1 : 0, transition: `opacity 600ms ease 200ms` }}
            />
            <text x={BX + BW / 2} y={174} textAnchor="middle" fontSize="9.5" fill="#fff" style={{ opacity: s >= 3 ? 0 : 1, transition: "opacity 300ms" }}>
              paid: 3 coins for the day
            </text>
            <Fade show={s >= 3} delay={300}>
              <text x={BX + BW / 4} y={174} textAnchor="middle" fontSize="9" fill="#fff">
                6 h paid
              </text>
              <text x={BX + (3 * BW) / 4} y={174} textAnchor="middle" fontSize="9">
                6 h unpaid
              </text>
              <line x1={BX + BW / 2} y1="152" x2={BX + BW / 2} y2="190" stroke="#d6452f" strokeWidth="2" strokeDasharray="3 3" />
              <text x={BX + BW / 2} y="148" textAnchor="middle" fontSize="8.5" fill="#d6452f">
                the hidden line
              </text>
            </Fade>
          </Row>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 19.2 · Worth 3, makes 6
 * Marx: "labour which creates a value of 6s. possesses a value of 3s."
 * ───────────────────────────────────────────────────────────── */
const DAY_X = 30;
const DAY_W = 300;

export function WorthThreeMakesSix() {
  return (
    <Player
      id="anim-19-2"
      title="19.2 · Worth 3, makes 6"
      viewBox="0 0 360 226"
      steps={[
        { caption: "In his 12-hour day, Sam's work makes 6 coins of new value." },
        { caption: "On Saturday, Mr. Moneybags pays him 3 coins. People call this “the value of a day's labour”." },
        { caption: "But that is odd. Work that makes 6 coins is “worth” 3? Marx says the phrase “value of labour” makes as little sense as “the value of the earth”.", ms: 4800 },
        {
          caption: "Here is the answer. Mr. Moneybags never bought Sam's labour. He bought Sam's labour-power, his ability to work for a day, and that costs 3 coins to keep going. The work itself makes 6.",
          ms: 5600,
        },
        { caption: "So the other 3 coins go to Mr. Moneybags. Calling the wage “the price of labour” makes this split vanish from sight.", ms: 4400 },
      ]}
    >
      {(s) => (
        <>
          {/* the day */}
          <rect x={DAY_X} y="70" width={DAY_W} height="22" fill="#d9d9d9" stroke="#000" />
          <rect
            x={DAY_X}
            y="70"
            width={DAY_W / 2}
            height="22"
            fill={TONE.wage}
            stroke="#000"
            style={{ opacity: s >= 3 ? 1 : 0, transition: "opacity 600ms" }}
          />
          <rect
            x={DAY_X + DAY_W / 2}
            y="70"
            width={DAY_W / 2}
            height="22"
            fill={TONE.surplus}
            stroke="#000"
            style={{ opacity: s >= 4 ? 1 : 0, transition: "opacity 600ms" }}
          />
          <text x={DAY_X + DAY_W / 2} y="85" textAnchor="middle" fontSize="9.5" style={{ opacity: s < 3 ? 1 : 0, transition: "opacity 300ms" }}>
            Sam&apos;s 12 hours of spinning
          </text>
          <Fade show={s >= 3}>
            <text x={DAY_X + DAY_W / 4} y="85" textAnchor="middle" fontSize="9" fill="#fff">
              6 h: keeps Sam going
            </text>
          </Fade>
          <Fade show={s >= 4}>
            <text x={DAY_X + (3 * DAY_W) / 4} y="85" textAnchor="middle" fontSize="9">
              6 h: for Moneybags
            </text>
          </Fade>

          {/* six coins of new value, then where they go */}
          {Array.from({ length: 6 }, (_, i) => {
            const home: [number, number] = [DAY_X + 25 + i * 50, 48];
            const toSam = s >= 1 && i < 3;
            const toBoss = s >= 4 && i >= 3;
            const [x, y] = toSam ? [50 + i * 16, 150] : toBoss ? [262 + (i - 3) * 16, 150] : home;
            return (
              <Place key={i} x={x} y={y} delay={i * 90}>
                <Coin r={8} />
              </Place>
            );
          })}
          <Fade show={s === 0}>
            <text x="180" y="28" textAnchor="middle" fontSize="10" fontWeight="600">
              6 coins of new value
            </text>
          </Fade>

          <Figure who="sam" x={60} y={212} scale={0.75} mood={s === 2 ? "wow" : "happy"} />
          <Figure who="moneybags" x={300} y={212} scale={0.75} />
          <Fade show={s >= 1}>
            <text x="68" y="132" textAnchor="middle" fontSize="9">
              his wage: 3 coins
            </text>
          </Fade>
          <Fade show={s >= 4}>
            <text x="280" y="132" textAnchor="middle" fontSize="9">
              surplus: 3 coins
            </text>
          </Fade>

          {/* the puzzle, then the answer */}
          <Fade show={s === 2} delay={200}>
            <text x="180" y="140" textAnchor="middle" fontSize="13" fontWeight="600">
              makes 6, &ldquo;worth&rdquo; 3?
            </text>
          </Fade>
          <Fade show={s === 3} delay={300}>
            <text x="180" y="110" textAnchor="middle" fontSize="10" fontWeight="600">
              bought: labour-power (3 coins)
            </text>
            <text x="180" y="124" textAnchor="middle" fontSize="10">
              used: labour (makes 6 coins)
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 19.3 · Why it looks fair
 * Marx's reasons the wage-form seems natural: wages are paid after the
 * work; they rise with the length of the day (but hiring a machine for a
 * week also costs more than for a day); better workers earn more.
 * ───────────────────────────────────────────────────────────── */
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function WhyItLooksFair() {
  return (
    <Player
      id="anim-19-3"
      title="19.3 · Why it looks fair"
      steps={[
        { caption: "Reason one: Sam is paid after he has worked, at the end of the week. So it feels like paying for work already done." },
        {
          caption: "Reason two: work two days, get paid twice as much. That looks like paying for labour. But, says Marx, renting a machine for a week also costs more than for a day, and nobody says you paid for the machine's work.",
          ms: 6000,
        },
        { caption: "Reason three: a faster spinner gets a little more than a slow one. So pay seems to match the work each person does." },
        { caption: "Every one of these is true. Together they make the unpaid half of the day disappear from view.", ms: 4200 },
      ]}
    >
      {(s) => (
        <>
          {/* 1 · paid after the week */}
          <Fade show={s === 0}>
            {DAYS.map((d, i) => (
              <g key={d}>
                <rect x={40 + i * 48} y="40" width="40" height="34" fill={TONE.wage} stroke="#000" />
                <text x={60 + i * 48} y="61" textAnchor="middle" fontSize="9.5" fill="#fff">
                  {d}
                </text>
              </g>
            ))}
            <path d="M40,86 H320" stroke="#000" strokeOpacity=".3" />
            <text x="300" y="104" textAnchor="middle" fontSize="9.5" fontWeight="600">
              payday
            </text>
            <Figure who="sam" x={180} y={205} scale={0.8} />
            <Place x={300} y={130} show={s === 0} delay={600}>
              <Coins n={6} />
            </Place>
            <text x="180" y="112" textAnchor="middle" fontSize="9.5">
              the work comes first, the money after
            </text>
          </Fade>

          {/* 2 · longer time, more money, like hiring a machine */}
          <Fade show={s === 1}>
            <text x="95" y="34" textAnchor="middle" fontSize="10" fontWeight="600">
              hire Sam
            </text>
            <text x="265" y="34" textAnchor="middle" fontSize="10" fontWeight="600">
              hire a loom
            </text>
            <line x1="180" y1="24" x2="180" y2="196" stroke="#000" strokeOpacity=".12" />
            {[
              { t: "1 day", n: 3, y: 66 },
              { t: "2 days", n: 6, y: 112 },
            ].map((r) => (
              <g key={r.t}>
                <text x="30" y={r.y + 4} fontSize="9.5">
                  {r.t}
                </text>
                <g transform={`translate(${110 + r.n * 2} ${r.y})`}>
                  <Coins n={r.n} />
                </g>
              </g>
            ))}
            {[
              { t: "1 day", n: 1, y: 66 },
              { t: "1 week", n: 5, y: 112 },
            ].map((r) => (
              <g key={r.t}>
                <text x="200" y={r.y + 4} fontSize="9.5">
                  {r.t}
                </text>
                <g transform={`translate(${282 + r.n * 2} ${r.y})`}>
                  <Coins n={r.n} />
                </g>
              </g>
            ))}
            <text x="180" y="160" textAnchor="middle" fontSize="9.5">
              more time costs more, for a loom too
            </text>
            <text x="180" y="176" textAnchor="middle" fontSize="8.5" fillOpacity=".55">
              (example numbers)
            </text>
          </Fade>

          {/* 3 · a faster spinner earns more */}
          <Fade show={s === 2}>
            <Figure who="sam" x={110} y={200} scale={0.85} />
            <Figure name="fast spinner" x={250} y={200} scale={0.85} />
            <g transform="translate(110 100)">
              <Coins n={3} label="3 coins" />
            </g>
            <g transform="translate(250 100)">
              <Coins n={4} label="a bit more" />
            </g>
            <text x="180" y="40" textAnchor="middle" fontSize="10" fontWeight="600">
              more work, more pay?
            </text>
          </Fade>

          {/* 4 · the unpaid half vanishes */}
          <Fade show={s === 3}>
            <rect x="30" y="70" width="300" height="24" fill={TONE.wage} stroke="#000" />
            <rect x="180" y="70" width="150" height="24" fill={TONE.surplus} stroke="#000" className="c19-ghost" />
            <text x="105" y="86" textAnchor="middle" fontSize="9.5" fill="#fff">
              looks paid
            </text>
            <text x="255" y="86" textAnchor="middle" fontSize="9.5">
              unpaid, out of sight
            </text>
            <Figure who="sam" x={180} y={205} scale={0.8} mood="happy" />
            <text x="180" y="124" textAnchor="middle" fontSize="10" fontWeight="600">
              the wage-form hides the split
            </text>
          </Fade>

          <style>{`
            @keyframes c19-ghost { 0%, 100% { opacity: .15 } 50% { opacity: .75 } }
            .c19-ghost { animation: c19-ghost 2.4s ease-in-out infinite; transition: opacity ${T}; }
          `}</style>
        </>
      )}
    </Player>
  );
}
