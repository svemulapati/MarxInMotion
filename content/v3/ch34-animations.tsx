"use client";

import Player from "@/components/anim/Player";
import { Cross, Fade, Gold, Place, Tick } from "@/components/anim/Things";
import { Note } from "./ch33-animations";

const T = "700ms cubic-bezier(.2,.8,.2,1)";
const GOLD = "#e6b800";
const RED = "#d6452f";

/** The Bank of England as one hall, or split by a wall into two departments. */
function Hall({ split }: { split: boolean }) {
  return (
    <g>
      <path d="M40,58 L180,22 L320,58 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <rect x="40" y="58" width="280" height="122" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <text x="180" y="50" textAnchor="middle" fontSize="10" fontWeight="600">
        Bank of England
      </text>
      <line x1="180" y1="58" x2="180" y2="180" stroke="#000" strokeWidth="4" style={{ opacity: split ? 1 : 0, transition: "opacity 500ms" }} />
      <g style={{ opacity: split ? 1 : 0, transition: "opacity 500ms" }}>
        <text x="110" y="74" textAnchor="middle" fontSize="9.5" fontWeight="600">
          issue department
        </text>
        <text x="250" y="74" textAnchor="middle" fontSize="9.5" fontWeight="600">
          banking department
        </text>
      </g>
    </g>
  );
}

function Bonds() {
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={-14 + i * 3} y={-10 - i * 3} width="28" height="20" fill="#f1f1f1" stroke="#000" strokeWidth=".8" />
      ))}
      <text x="3" y="5" textAnchor="middle" fontSize="7">
        bonds
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 34.1 · Peel's rule: notes must follow gold
 * The 1844 Act splits the Bank: the issue department holds £14m in
 * securities plus all the gold and issues notes for exactly that much;
 * "for every five pounds in gold which leave ... a five-pound note
 * returns to the issue department and is destroyed".
 * ───────────────────────────────────────────────────────────── */
export function PeelsRule() {
  return (
    <Player
      id="anim-v3-34-1"
      title="34.1 · Peel's rule: notes must follow gold"
      steps={[
        { caption: "Before 1844 the Bank of England was one big hall: gold, notes and lending all in the same place." },
        { caption: "In 1844 Sir Robert Peel's Bank Act built a wall down the middle, making two departments." },
        { caption: "The issue department held £14 million of government bonds plus all the gold, and printed notes for exactly that amount. No more." },
        { caption: "The rule: every time £5 of gold leaves the Bank, a £5 note must come back and be destroyed. Gold out, notes shrink." },
        {
          caption: "The idea, called the currency principle, was to make paper money rise and fall exactly like gold, so prices would stay steady. Marx says it rested on a mistaken theory of money.",
          ms: 5200,
        },
      ]}
      viewBox="0 0 360 225"
    >
      {(s) => (
        <>
          <Hall split={s >= 1} />

          {/* issue department contents */}
          <Fade show={s >= 2}>
            <g transform="translate(80 110)">
              <Bonds />
              <text x="0" y="24" textAnchor="middle" fontSize="8.5">
                £14m
              </text>
            </g>
            <g transform="translate(140 108)">
              <Gold label="Au" />
              <text x="0" y="26" textAnchor="middle" fontSize="8.5">
                all the gold
              </text>
            </g>
            <text x="110" y="160" textAnchor="middle" fontSize="9">
              notes = bonds + gold
            </text>
          </Fade>

          {/* banking department: its reserve of notes */}
          <Fade show={s >= 2}>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${222 + i * 28} 112)`}>
                <Note text="£5" w={26} />
              </g>
            ))}
            <text x="250" y="140" textAnchor="middle" fontSize="9">
              notes to lend from
            </text>
          </Fade>

          {/* gold leaves, a note is destroyed */}
          <Place x={140} y={s >= 3 ? 204 : 108} show={s === 3}>
            <Gold label="£5" />
          </Place>
          <Fade show={s === 3}>
            <text x="160" y="208" fontSize="9">
              gold goes out
            </text>
          </Fade>
          <Fade show={s >= 3}>
            <g transform="translate(278 112)">
              <Cross />
            </g>
            <text x="250" y="160" textAnchor="middle" fontSize="9" fill={RED}>
              a £5 note is destroyed
            </text>
          </Fade>

          <Fade show={s === 4} delay={300}>
            <text x="180" y="208" textAnchor="middle" fontSize="10" fontWeight="600">
              paper made to behave exactly like gold
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 34.2 · Locked doors in a storm
 * 1847: gold drains, the banking department nears bankruptcy while
 * the issue department still holds millions in gold and £14m in bonds;
 * interest reaches 8 and 9% in October and November 1847; the
 * government letter of 25 October 1847 suspends the Act; it is
 * suspended again on 12 November 1857.
 * ───────────────────────────────────────────────────────────── */
export function LockedDoorsInAStorm() {
  return (
    <Player
      id="anim-v3-34-2"
      title="34.2 · Locked doors in a storm"
      steps={[
        { caption: "Autumn 1847. A crisis breaks and gold starts flowing out of the Bank of England." },
        { caption: "By Peel's rule the banking department's notes must shrink. Its reserve falls close to nothing, while next door the issue department still sits on millions in gold and bonds." },
        { caption: "Merchants panic and rush to hoard notes. Interest climbs to 8 and then 9 per cent in October and November 1847." },
        { caption: "On 25 October 1847 the government sends a letter suspending the Act. The wall is opened, and the panic eases." },
        {
          caption: "Ten years later the same thing happens. In July 1857 Lord Overstone praises the Act; on 12 November 1857 the government suspends it again. Marx: the law made the crises worse.",
          ms: 6000,
        },
      ]}
      viewBox="0 0 360 225"
    >
      {(s) => {
        const reserve = [3, 1, 0, 3, 3][s];
        const open = s >= 3;
        return (
          <>
            <Hall split />

            {/* issue department still full */}
            <g transform="translate(80 110)">
              <Bonds />
            </g>
            <g transform="translate(140 108)">
              <Gold label="Au" />
            </g>
            <Fade show={s >= 1}>
              <text x="110" y="148" textAnchor="middle" fontSize="9" fontWeight="600">
                still full
              </text>
            </Fade>

            {/* banking department reserve */}
            {[0, 1, 2].map((i) => (
              <g key={i} style={{ opacity: i < reserve ? 1 : 0.1, transition: "opacity 500ms" }}>
                <g transform={`translate(${222 + i * 28} 112)`}>
                  <Note text="£5" w={26} />
                </g>
              </g>
            ))}
            <Fade show={s >= 1 && s < 3}>
              <text x="250" y="148" textAnchor="middle" fontSize="9" fontWeight="600" fill={RED}>
                nearly empty
              </text>
            </Fade>

            {/* the wall opens */}
            <rect x="176" y={open ? 100 : 58} width="8" height={open ? 40 : 0} fill="#fff" style={{ transition: `all ${T}` }} />
            <Fade show={open}>
              <path d="M150,120 L210,120" stroke={GOLD} strokeWidth="3" markerEnd="url(#v3c34-arr)" />
              <g transform="translate(250 166)">
                <Tick />
              </g>
            </Fade>
            <defs>
              <marker id="v3c34-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill={GOLD} />
              </marker>
            </defs>

            {/* gold drains out */}
            <Fade show={s <= 1}>
              {[0, 1, 2].map((i) => (
                <circle key={i} cx={150 - i * 30} cy={196} r="7" fill={GOLD} stroke="#000" className="v3c34-drain" style={{ animationDelay: `${i * 300}ms` }} />
              ))}
              <text x="190" y="200" fontSize="9">
                gold drains out
              </text>
            </Fade>

            {/* interest */}
            <Fade show={s >= 2}>
              <text x="58" y="208" fontSize="9">
                interest
              </text>
              <text x="58" y="222" fontSize="13" fontWeight="700" fill={s === 2 ? RED : "#000"}>
                {s === 2 ? "8% → 9%" : s === 3 ? "easing" : "1857: again"}
              </text>
            </Fade>
            <Fade show={s >= 3}>
              <text x="250" y="200" textAnchor="middle" fontSize="9.5" fontWeight="600">
                {s === 3 ? "25 Oct 1847: Act suspended" : "12 Nov 1857: suspended again"}
              </text>
            </Fade>

            <style>{`
              @keyframes v3c34-drain { from { transform: translateX(0); opacity: 1; } to { transform: translateX(-40px); opacity: 0; } }
              .v3c34-drain { animation: v3c34-drain 1.6s linear infinite; }
            `}</style>
          </>
        );
      }}
    </Player>
  );
}
