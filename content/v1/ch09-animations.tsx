"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade } from "@/components/anim/Things";
import { Bar, TONE, Yarn } from "@/components/anim/Workshop";

/* ─────────────────────────────────────────────────────────────
 * 9.1 · Sam's day, cut in two (necessary and surplus labour time)
 * ───────────────────────────────────────────────────────────── */
const H = 24; // pixels per hour
const X0 = 36;

export function SamsDayCutInTwo() {
  return (
    <Player
      id="anim-9-1"
      title="9.1 · Sam's day, cut in two"
      steps={[
        { caption: "Sam works a 12-hour day in the workshop. Let's watch where his hours go." },
        { caption: "In the first 6 hours, Sam makes new value worth 3 coins: exactly his wage. Marx calls this necessary labour time. It is the time Sam works for himself." },
        { caption: "In the next 6 hours, Sam makes another 3 coins of new value. He is paid nothing extra for these. Marx calls this surplus labour time." },
        {
          caption: "Marx's measure of how hard Sam is exploited: surplus-value divided by variable capital. 3 coins ÷ 3 coins = 100%. It is the same as 6 hours ÷ 6 hours.",
          ms: 4800,
        },
        {
          caption: "Why leave the 24 coins of cotton and spindle out? They only pass through. Counting them would give 3 ÷ 27, about 11%, which hides that half of Sam's working day goes to Mr. Moneybags.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {/* hour ticks */}
          {Array.from({ length: 13 }, (_, h) => (
            <g key={h}>
              <line x1={X0 + h * H} y1="66" x2={X0 + h * H} y2="98" stroke="#000" strokeOpacity={h % 6 === 0 ? 0.6 : 0.2} />
              <text x={X0 + h * H} y="60" textAnchor="middle" fontSize="8" fillOpacity=".6">
                {h}h
              </text>
            </g>
          ))}
          <rect x={X0} y="70" width={12 * H} height="24" fill="none" stroke="#000" />
          <Bar
            x={X0}
            y={70}
            unit={H}
            h={24}
            segs={[
              { n: 6, color: TONE.wage, label: "for Sam: 3 coins", show: s >= 1 },
              { n: 6, color: TONE.surplus, label: "for Moneybags: 3 coins", show: s >= 2 },
            ]}
          />
          <Fade show={s >= 1}>
            <text x={X0 + 3 * H} y="114" textAnchor="middle" fontSize="9.5" fontWeight="600">
              necessary labour
            </text>
          </Fade>
          <Fade show={s >= 2}>
            <text x={X0 + 9 * H} y="114" textAnchor="middle" fontSize="9.5" fontWeight="600">
              surplus labour
            </text>
          </Fade>

          {/* the rate */}
          <Fade show={s === 3}>
            <text x="180" y="150" textAnchor="middle" fontSize="13" fontWeight="600">
              rate of surplus-value = s ÷ v
            </text>
            <text x="180" y="174" textAnchor="middle" fontSize="12">
              3 coins ÷ 3 coins = 100%
            </text>
            <text x="180" y="194" textAnchor="middle" fontSize="12">
              6 hours ÷ 6 hours = 100%
            </text>
          </Fade>
          <Fade show={s === 4}>
            <text x="104" y="150" textAnchor="middle" fontSize="10" fontWeight="600">
              Marx: s ÷ v
            </text>
            <text x="104" y="178" textAnchor="middle" fontSize="20" fontWeight="600" fill="#b38f00">
              100%
            </text>
            <text x="256" y="150" textAnchor="middle" fontSize="10" fontWeight="600">
              counting everything: s ÷ (c + v)
            </text>
            <text x="256" y="178" textAnchor="middle" fontSize="20" fontWeight="300">
              11%
            </text>
            <line x1="180" y1="138" x2="180" y2="196" stroke="#000" strokeOpacity=".15" />
            <text x="180" y="212" textAnchor="middle" fontSize="9" fillOpacity=".6">
              the same day, measured two ways
            </text>
          </Fade>

          <g style={{ opacity: s <= 2 ? 1 : 0, transition: "opacity 400ms" }}>
            <Figure who="sam" x={180} y={206} scale={0.8} mood={s === 2 ? "sleepy" : "happy"} />
          </g>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.2 · Twenty pounds of yarn (the product split into parts)
 * Marx: 20 lb = 30 shillings; 16 lb stand for c, 2 lb for v, 2 lb for s.
 * ───────────────────────────────────────────────────────────── */
/** Colour of pound i of the 20 lb of yarn at step s. */
function poundTone(i: number, s: number) {
  if (i < 16) return s >= 1 ? TONE.cotton : "#f3e3b3";
  if (i < 18) return s >= 2 ? TONE.wage : "#f3e3b3";
  return s >= 3 ? TONE.surplus : "#f3e3b3";
}

export function TwentyPoundsOfYarn() {
  return (
    <Player
      id="anim-9-2"
      title="9.2 · Twenty pounds of yarn"
      steps={[
        { caption: "Here is the whole day's product: 20 lb of yarn, worth 30 coins. Each pound is worth one and a half coins." },
        { caption: "16 lb of it just pay back the cotton and the spindle wear: 24 coins of constant capital." },
        { caption: "2 lb pay back Sam's wage: 3 coins of variable capital." },
        { caption: "And the last 2 lb are the surplus-value: 3 coins that belong to Mr. Moneybags." },
        {
          caption: "A handy picture, but careful. It does not mean Sam spends the morning making cotton. In every hour he passes on old value and adds new. Forgetting this led one famous professor badly astray.",
          ms: 5400,
        },
      ]}
    >
      {(s) => {
        return (
          <>
            {Array.from({ length: 20 }, (_, i) => (
              <g key={i} transform={`translate(${40 + (i % 10) * 31} ${i < 10 ? 50 : 92})`}>
                <g style={{ transition: "opacity 400ms" }}>
                  <Yarn fill={poundTone(i, s)} />
                </g>
              </g>
            ))}
            <text x="180" y="20" textAnchor="middle" fontSize="11" fontWeight="600">
              20 lb of yarn = 30 coins
            </text>

            <Fade show={s >= 1}>
              <rect x="22" y="126" width={16 * 10.2} height="10" fill={TONE.cotton} stroke="#000" />
              <text x="104" y="152" textAnchor="middle" fontSize="9.5">
                16 lb: cotton + spindle (24)
              </text>
            </Fade>
            <Fade show={s >= 2}>
              <rect x={22 + 16 * 10.2} y="126" width="20.4" height="10" fill={TONE.wage} stroke="#000" />
              <text x="232" y="168" textAnchor="middle" fontSize="9.5">
                2 lb: wage (3)
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <rect x={22 + 18 * 10.2} y="126" width="20.4" height="10" fill={TONE.surplus} stroke="#000" />
              <text x="300" y="152" textAnchor="middle" fontSize="9.5">
                2 lb: surplus (3)
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="40" y="182" width="280" height="30" fill="#000" />
              <text x="180" y="201" textAnchor="middle" fontSize="10.5" fill="#fff">
                a way of dividing the product, not the day
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 9.3 · Senior's "last hour"
 * Nassau Senior, 1836-37: in an 11½-hour mill day the whole net profit
 * comes from the last hour. Marx's reply uses the owners' own figures.
 * ───────────────────────────────────────────────────────────── */
const HH = 10; // pixels per half-hour

export function SeniorsLastHour() {
  return (
    <Player
      id="anim-9-3"
      title="9.3 · Senior's “last hour”"
      viewBox="0 0 360 230"
      steps={[
        {
          caption: "In 1836, factory owners asked the economist Nassau Senior to argue against shorter working days. He claimed that in an 11½-hour day, all the profit is made in the last hour. Cut one hour, and profit vanishes!",
          ms: 5600,
        },
        {
          caption: "His sums split the day into 23 half-hours. The first 21 just pay back the mill, the machines, the cotton and the wages. Only the last 2 make the profit.",
          ms: 4800,
        },
        {
          caption: "Marx's reply: cotton and machines are not made by the workers during the day. Their value just passes through. Only the workers' hours count. By the owners' own figures, wages and profit are equal, so the hours split in half: 5¾ for wages, 5¾ for profit.",
          ms: 6200,
        },
        {
          caption: "Now cut the day by one hour. The workers still need 5¾ hours to make their wages, and the surplus hours fall from 5¾ to 4¾. Profit gets smaller, at a rate of about 82%, but it does not vanish.",
          ms: 5600,
        },
        { caption: "Marx's verdict on the dreadful “last hour”: “all bosh”.", ms: 3600 },
      ]}
    >
      {(s) => {
        const halves = Array.from({ length: 23 }, (_, i) => i);
        return (
          <>
            <Fade show={s === 0}>
              <Figure name="Prof. Senior" x={70} y={190} />
              <g transform="translate(88 132)">
                <Bubble w={190} lines={["All the profit comes in", "the last hour! Shorten the", "day and profit dies!"]} />
              </g>
              <Figure who="moneybags" x={300} y={190} mood="wow" />
            </Fade>

            {/* Senior's picture: 23 half-hours */}
            <Fade show={s === 1}>
              <text x="180" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
                Senior&apos;s picture of the day
              </text>
              {halves.map((i) => (
                <rect
                  key={i}
                  x={22 + i * 13.7}
                  y="60"
                  width="12"
                  height="40"
                  fill={i >= 21 ? TONE.surplus : i === 20 ? TONE.spindle : TONE.cotton}
                  stroke="#000"
                  strokeWidth=".6"
                />
              ))}
              <text x="160" y="120" textAnchor="middle" fontSize="9.5">
                21 half-hours: pay back mill, machines, cotton, wages
              </text>
              <text x="320" y="120" textAnchor="middle" fontSize="9.5" fontWeight="600">
                profit
              </text>
              <path d="M310,104 v6" stroke="#000" />
            </Fade>

            {/* Marx's picture: only labour time */}
            <Fade show={s >= 2}>
              <text x="12" y="52" fontSize="10" fontWeight="600">
                11½ h
              </text>
              <Bar
                x={60}
                y={40}
                unit={HH}
                h={20}
                segs={[
                  { n: 11.5, color: TONE.wage, label: "wages 5¾ h" },
                  { n: 11.5, color: TONE.surplus, label: "profit 5¾ h" },
                ]}
              />
              <text x="60" y="74" fontSize="8.5" fillOpacity=".6">
                cotton and machines take no working hours
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="12" y="112" fontSize="10" fontWeight="600">
                10½ h
              </text>
              <Bar
                x={60}
                y={100}
                unit={HH}
                h={20}
                segs={[
                  { n: 11.5, color: TONE.wage, label: "wages 5¾ h" },
                  { n: 9.5, color: TONE.surplus, label: "profit 4¾ h" },
                ]}
              />
              <path d={`M${60 + 21 * HH},96 v28`} stroke="#d6452f" strokeDasharray="3 2" />
              <text x={60 + 22 * HH + 2} y="114" fontSize="9" fill="#d6452f">
                −1 h
              </text>
              <text x="180" y="146" textAnchor="middle" fontSize="11">
                rate of surplus-value: 4¾ ÷ 5¾ ≈ 82%
              </text>
            </Fade>
            <Fade show={s === 4}>
              <text x="180" y="186" textAnchor="middle" fontSize="22" fontWeight="600">
                &ldquo;all bosh&rdquo;
              </text>
              <text x="180" y="206" textAnchor="middle" fontSize="9.5">
                smaller profit, not no profit
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
