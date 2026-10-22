"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Clock, Coat, Corn, Cross, Fade, Jug, Linen, Place, Tag, Tick } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GAIN = "#2a9d5b";
const LOSS = "#d6452f";

/* ─────────────────────────────────────────────────────────────
 * 5.1 · Everyone adds ten per cent (a seller's privilege cancels out)
 * Marx: sell what is worth 100 for 110, gain 10 as seller, lose it as buyer.
 * ───────────────────────────────────────────────────────────── */
export function EveryoneAddsTen() {
  return (
    <Player
      id="anim-5-1"
      title="5.1 · Everyone adds ten per cent"
      steps={[
        { caption: "Mr. Moneybags has a trick. He sells linen worth 100 coins to Tom for 110. As a seller, he is 10 coins up." },
        { caption: "But then he needs corn. Tom plays the same trick: corn worth 100 coins, sold to Moneybags for 110. As a buyer, Moneybags is 10 coins down." },
        { caption: "Add it up: plus 10, minus 10, equals nothing. What he won as a seller he lost as a buyer." },
        {
          caption: "If everyone in Tiny Town adds 10 per cent, every price grows, but nobody is any richer. It's like everyone standing on tiptoe: nobody gets taller.",
          ms: 4600,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="moneybags" x={60} y={208} scale={0.85} mood={s >= 2 ? "sad" : "happy"} />
          <Figure who="tom" x={300} y={208} scale={0.85} />

          {/* the linen has gone to Tom; the corn comes back later */}
          <Place x={250} y={118} scale={0.9}>
            <Linen />
          </Place>
          <g transform="translate(250 96)">
            <Tag text="110" />
          </g>
          <Place x={s >= 1 ? 110 : 250} y={152} scale={0.9} show={s >= 1}>
            <Corn />
          </Place>
          <Fade show={s >= 1}>
            <g transform="translate(110 130)">
              <Tag text="110" />
            </g>
          </Fade>

          {/* Moneybags' little ledger */}
          <g transform="translate(180 40)">
            <Fade show={s <= 2}>
              <text textAnchor="middle" fontSize="11" fill={GAIN} fontWeight="600">
                as a seller: +10
              </text>
            </Fade>
            <Fade show={s >= 1 && s <= 2}>
              <text y="18" textAnchor="middle" fontSize="11" fill={LOSS} fontWeight="600">
                as a buyer: &#8722;10
              </text>
            </Fade>
            <Fade show={s === 2}>
              <line x1="-50" y1="25" x2="50" y2="25" stroke="#000" />
              <text y="42" textAnchor="middle" fontSize="13" fontWeight="700">
                net: 0
              </text>
            </Fade>
          </g>

          {/* the whole town marks up */}
          <Fade show={s === 3}>
            {[70, 140, 210, 280].map((x, i) => (
              <g key={x} transform={`translate(${x} 34)`}>
                <text y="-12" textAnchor="middle" fontSize="8" fillOpacity=".5" textDecoration="line-through">
                  100
                </text>
                <Tag text="110" />
                <text y="24" textAnchor="middle" fontSize="8">
                  {["linen", "corn", "bread", "coats"][i]}
                </text>
              </g>
            ))}
            <text x="180" y="78" textAnchor="middle" fontSize="11" fontWeight="600">
              bigger numbers, nobody richer
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.2 · The swindle (cheating moves value, it does not make it)
 * Marx: A sells wine worth £40 for corn worth £50; the total stays £90.
 * ───────────────────────────────────────────────────────────── */
const PX = 3; // pixels per coin of value
const BAR_X = 45;

export function TheSwindle() {
  return (
    <Player
      id="anim-5-2"
      title="5.2 · The swindle"
      steps={[
        { caption: "Moneybags has a jug of cider worth 40 coins. Tom has corn worth 50 coins. Between them they own 90 coins of value." },
        { caption: "Moneybags talks Tom into a bad swap: the cider for all the corn. Moneybags is 10 up, and Tom is 10 down." },
        { caption: "Now count the total again. Still 90. Not one coin of value was made. It just moved from Tom's pocket into Moneybags' pocket.", ms: 4200 },
        {
          caption: "That's why cheating can't explain where the extra comes from. If every boss cheats every other boss, the bosses as a group are no richer at all.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const mine = s >= 1 ? 50 : 40;
        const toms = 90 - mine;
        return (
          <>
            {/* the town's total, split between the two */}
            <rect x={BAR_X} y="30" width={mine * PX} height="22" fill={CAST.moneybags.color} style={{ transition: `width ${T} 300ms` }} />
            <rect
              x={BAR_X + mine * PX}
              y="30"
              width={toms * PX}
              height="22"
              fill={CAST.tom.color}
              style={{ transition: `x ${T} 300ms, width ${T} 300ms` }}
            />
            <text x={BAR_X + 6} y="45" fontSize="10" fill="#fff" fontWeight="600">
              Moneybags {mine}
            </text>
            <text x={BAR_X + 90 * PX - 6} y="45" fontSize="10" fill="#fff" fontWeight="600" textAnchor="end">
              Tom {toms}
            </text>
            <text x="180" y="70" textAnchor="middle" fontSize="11" fontWeight={s >= 2 ? 700 : 400}>
              total value in town: 90
            </text>
            <Fade show={s >= 2}>
              <text x="180" y="84" textAnchor="middle" fontSize="9.5">
                before and after
              </text>
            </Fade>

            <Figure who="moneybags" x={60} y={208} scale={0.85} />
            <Figure who="tom" x={300} y={208} scale={0.85} mood={s >= 1 ? "sad" : "happy"} />

            {/* the goods change hands */}
            <Place x={s >= 1 ? 250 : 110} y={140} scale={0.9}>
              <Jug />
              <text y="26" textAnchor="middle" fontSize="8.5">
                worth 40
              </text>
            </Place>
            <Place x={s >= 1 ? 110 : 250} y={140} scale={0.9}>
              <Corn />
              <text y="26" textAnchor="middle" fontSize="8.5">
                worth 50
              </text>
            </Place>

            <Fade show={s >= 1}>
              <text x="60" y="110" textAnchor="middle" fontSize="12" fontWeight="700" fill={GAIN}>
                +10
              </text>
              <text x="300" y="110" textAnchor="middle" fontSize="12" fontWeight="700" fill={LOSS}>
                &#8722;10
              </text>
            </Fade>
            <Fade show={s === 3}>
              <text x="180" y="100" textAnchor="middle" fontSize="10.5" fontWeight="600">
                moved, not made
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5.3 · Hic Rhodus! (the three rules of Marx's puzzle)
 * ───────────────────────────────────────────────────────────── */
const RULES = ["1. Buy everything at its fair value", "2. Sell everything at its fair value", "3. Still end up with more money"];

export function HicRhodus() {
  return (
    <Player
      id="anim-5-3"
      viewBox="0 0 360 236"
      title="5.3 · Marx's three rules"
      steps={[
        { caption: "Marx sets Moneybags a puzzle with three rules. Rule one: he must buy everything at its fair value. No cheating." },
        { caption: "Rule two: he must sell everything at its fair value too." },
        { caption: "Rule three: and yet at the end he must have more money than he started with. How can that be?" },
        {
          caption: "A clue. When Ava sews cloth into a coat, the coat is worth more than the cloth, because her work was added. New value comes from work, not from swapping.",
          ms: 4600,
        },
        {
          caption: "So Moneybags must buy one very special thing: something that makes new value when it is used. Marx dares him with an old saying: “Hic Rhodus, hic salta!” Here is the place. Jump!",
          ms: 5200,
        },
      ]}
    >
      {(s) => (
        <>
          {RULES.map((r, i) => (
            <Fade key={r} show={s >= i}>
              <text x="44" y={34 + i * 26} fontSize="11">
                {r}
              </text>
              <g transform={`translate(26 ${30 + i * 26})`}>
                {i < 2 ? (
                  <Tick />
                ) : (
                  <text x="-4" y="5" fontSize="15" fontWeight="700">
                    ?
                  </text>
                )}
              </g>
            </Fade>
          ))}

          {/* the clue: work adds value */}
          <Fade show={s === 3}>
            <Figure who="ava" x={40} y={210} scale={0.75} />
            <Place x={100} y={170}>
              <Linen />
              <text y="22" textAnchor="middle" fontSize="8.5">
                cloth
              </text>
            </Place>
            <text x="138" y="174" textAnchor="middle" fontSize="16">
              +
            </text>
            <Place x={180} y={164}>
              <Clock hours="Ava's work" color={CAST.ava.color} />
            </Place>
            <text x="222" y="174" textAnchor="middle" fontSize="16">
              =
            </text>
            <Place x={270} y={164} scale={0.85}>
              <Coat />
            </Place>
            <text x="270" y="200" textAnchor="middle" fontSize="8.5">
              a coat, worth more
            </text>
          </Fade>

          {/* the dare */}
          <Fade show={s === 4}>
            <text x="180" y="138" textAnchor="middle" fontSize="20" fontStyle="italic">
              Hic Rhodus, hic salta!
            </text>
            <text x="180" y="158" textAnchor="middle" fontSize="10">
              (Here is Rhodes. Jump here!)
            </text>
            <rect x="80" y="172" width="200" height="30" fill="#fff" stroke="#000" />
            <text x="180" y="191" textAnchor="middle" fontSize="10" fontWeight="600">
              find something that makes new value
            </text>
          </Fade>
          <Fade show={s === 2}>
            <g transform="translate(180 160)">
              <Cross />
            </g>
            <text x="180" y="190" textAnchor="middle" fontSize="10">
              rules 1 and 2 seem to make rule 3 impossible
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
