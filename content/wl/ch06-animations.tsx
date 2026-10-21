"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coin, Fade, Loaf, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

const T = "700ms cubic-bezier(.2,.8,.2,1)";

/* ─────────────────────────────────────────────────────────────
 * 6.1 · One shilling, two fates (Marx's own day-labourer example)
 * ───────────────────────────────────────────────────────────── */
const Wheat = ({ n }: { n: number }) => (
  <g>
    {Array.from({ length: n }, (_, i) => (
      <g key={i} transform={`translate(${(i - (n - 1) / 2) * 16} 0)`}>
        <line
          x1="0"
          y1="12"
          x2="0"
          y2="-10"
          stroke="#8a6d00"
          strokeWidth="1.5"
        />
        <ellipse
          cx="0"
          cy="-12"
          rx="4"
          ry="7"
          fill="#e8c35a"
          stroke="#000"
          strokeWidth=".8"
        />
      </g>
    ))}
  </g>
);

export function OneShillingTwoFates() {
  return (
    <Player
      id="anim-wl-6-1"
      viewBox="0 0 360 240"
      title="6.1 · One shilling, two fates"
      steps={[
        {
          caption:
            "Marx's own example. A farmer pays a day-labourer one shilling to work in his fields all day.",
        },
        {
          caption:
            "By evening the labourer's work has grown crops worth two shillings. The farmer gets them all.",
        },
        {
          caption:
            "For the farmer, the shilling was a seed: one shilling went out, two came back.",
        },
        {
          caption:
            "For the labourer, the shilling buys bread, and the bread gets eaten. By tomorrow it is gone.",
        },
        {
          caption:
            "So tomorrow he must come back and make the same swap again. And the farmer needs him to. Marx: capital needs wage-labour, and wage-labour needs capital.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure who="ned" x={70} y={200} />
          <text
            x="70"
            y="226"
            textAnchor="middle"
            fontSize="8.5"
            fillOpacity=".6"
          >
            the farmer
          </text>
          <Figure name="Jem" x={290} y={200} mood={s === 3 ? "sad" : "happy"} />
          <text
            x="290"
            y="226"
            textAnchor="middle"
            fontSize="8.5"
            fillOpacity=".6"
          >
            the day-labourer
          </text>

          {/* the field and the crop */}
          <rect
            x="130"
            y="150"
            width="100"
            height="40"
            fill="#9cc77a"
            stroke="#000"
            strokeOpacity=".4"
          />
          <Fade show={s >= 1}>
            <g transform="translate(180 160)">
              <Wheat n={4} />
            </g>
            <text x="180" y="204" textAnchor="middle" fontSize="9">
              crops worth 2 shillings
            </text>
          </Fade>

          {/* the shilling travels from farmer to labourer */}
          <Place x={s === 0 ? 70 : 290} y={110}>
            <Coin r={10} />
          </Place>
          <text
            x={s === 0 ? 70 : 290}
            y="95"
            textAnchor="middle"
            fontSize="9"
            style={{ transition: `x ${T}` }}
          >
            1 shilling
          </text>

          {/* the farmer's two shillings */}
          <Fade show={s >= 2}>
            <g transform="translate(58 60)">
              <Coin r={10} />
            </g>
            <g transform="translate(82 60)">
              <Coin r={10} />
            </g>
            <text
              x="70"
              y="40"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="#2a9d5b"
            >
              1 became 2
            </text>
          </Fade>

          {/* the labourer's bread, eaten */}
          <Fade show={s === 3}>
            <Place x={250} y={70} scale={0.8}>
              <Loaf />
            </Place>
            <text
              x="250"
              y="45"
              textAnchor="middle"
              fontSize="10"
              fontWeight="600"
              fill="#d6452f"
            >
              eaten, gone
            </text>
          </Fade>

          <Fade show={s === 4}>
            <path
              d="M110,60 C160,20 200,20 250,60"
              fill="none"
              stroke="#000"
              strokeOpacity=".5"
              markerEnd="url(#wl6a)"
            />
            <path
              d="M250,80 C200,120 160,120 110,80"
              fill="none"
              stroke="#000"
              strokeOpacity=".5"
              markerEnd="url(#wl6a)"
            />
            <text x="180" y="30" textAnchor="middle" fontSize="9">
              wages
            </text>
            <text x="180" y="122" textAnchor="middle" fontSize="9">
              a day of work
            </text>
          </Fade>
          <defs>
            <marker
              id="wl6a"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="#000" fillOpacity=".5" />
            </marker>
          </defs>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6.2 · The little house and the palace (relative needs; nominal, real
 * and relative wages)
 * ───────────────────────────────────────────────────────────── */
const House = ({
  w,
  h,
  fill = "#fff",
}: {
  w: number;
  h: number;
  fill?: string;
}) => (
  <g style={{ transition: `all ${T}` }}>
    <rect
      x={-w / 2}
      y={-h}
      width={w}
      height={h}
      fill={fill}
      stroke="#000"
      style={{ transition: `all ${T}` }}
    />
    <polygon
      points={`${-w / 2 - 4},${-h} 0,${-h - w * 0.45} ${w / 2 + 4},${-h}`}
      fill="#d6452f"
      stroke="#000"
      style={{ transition: `all ${T}` }}
    />
  </g>
);

export function LittleHouseAndPalace() {
  return (
    <Player
      id="anim-wl-6-2"
      title="6.2 · The little house and the palace"
      steps={[
        {
          caption:
            "Marx's picture: a little house among other little houses. It does the job. Nobody feels poor in it.",
        },
        {
          caption:
            "Then a palace goes up next door. The little house hasn't changed, but now it looks like a hut.",
        },
        {
          caption:
            "If business booms, wages may rise and Sam's house grows. But the boss's palace grows even faster. Our needs, Marx says, are measured against society.",
        },
        {
          caption:
            "Marx adds two more ways to measure a wage. Nominal wage: the coins in Sam's hand, here 3.",
        },
        {
          caption:
            "Real wage: what the coins can buy. In the winter of 1847 a bad harvest made bread dear: the same 3 coins bought less. (Made-up loaf counts.)",
          ms: 4600,
        },
        {
          caption:
            "Relative wage: Sam's share of the new value compared with the boss's share. That, Marx says, matters most, and the next chapter is about it.",
          ms: 4600,
        },
      ]}
    >
      {(s) => {
        const sam = s === 0 ? 44 : s === 1 ? 44 : 60;
        const palace = s === 0 ? 0 : s === 1 ? 110 : 150;
        return (
          <>
            {/* houses scene (steps 0 to 2) */}
            <g style={{ opacity: s <= 2 ? 1 : 0, transition: "opacity 500ms" }}>
              <line x1="10" y1="190" x2="350" y2="190" stroke="#000" />
              <g transform="translate(60 190)">
                <House w={40} h={40} />
              </g>
              <g transform="translate(120 190)">
                <House w={sam} h={sam} fill={CAST.sam.color} />
              </g>
              <text x="120" y="204" textAnchor="middle" fontSize="9">
                Sam&apos;s house
              </text>
              <g
                transform="translate(260 190)"
                style={{ opacity: palace ? 1 : 0, transition: "opacity 500ms" }}
              >
                <House w={palace} h={palace * 0.8} fill="#f3e3b3" />
              </g>
              <Fade show={s >= 1}>
                <text x="260" y="204" textAnchor="middle" fontSize="9">
                  the boss&apos;s palace
                </text>
              </Fade>
            </g>

            {/* the three wages (steps 3 to 5), moved down into the space the houses leave */}
            <g transform="translate(0 70)">
              <Fade show={s >= 3}>
                <rect
                  x="20"
                  y="20"
                  width="320"
                  height="56"
                  fill="#fff"
                  stroke="#000"
                  strokeOpacity=".2"
                />
                <text x="30" y="36" fontSize="9" fontWeight="600">
                  nominal wage
                </text>
                {[0, 1, 2].map((i) => (
                  <g key={i} transform={`translate(${42 + i * 18} 58)`}>
                    <Coin r={7} />
                  </g>
                ))}
              </Fade>
              <Fade show={s >= 4}>
                <text x="130" y="36" fontSize="9" fontWeight="600">
                  real wage
                </text>
                {[0, 1, 2].map((i) => (
                  <g
                    key={i}
                    transform={`translate(${142 + i * 22} 58) scale(.45)`}
                    style={{
                      opacity: s >= 4 && i === 2 ? 0.15 : 1,
                      transition: "opacity 500ms 400ms",
                    }}
                  >
                    <Loaf />
                  </g>
                ))}
                <text
                  x="190"
                  y="72"
                  textAnchor="middle"
                  fontSize="7.5"
                  fill="#d6452f"
                >
                  1847: dearer bread
                </text>
              </Fade>
              <Fade show={s >= 5}>
                <text x="240" y="36" fontSize="9" fontWeight="600">
                  relative wage
                </text>
                <rect
                  x="240"
                  y="50"
                  width="40"
                  height="12"
                  fill={CAST.sam.color}
                />
                <rect x="280" y="50" width="50" height="12" fill="#e6b800" />
                <text x="260" y="72" textAnchor="middle" fontSize="7.5">
                  Sam
                </text>
                <text x="305" y="72" textAnchor="middle" fontSize="7.5">
                  boss
                </text>
              </Fade>
            </g>
          </>
        );
      }}
    </Player>
  );
}
