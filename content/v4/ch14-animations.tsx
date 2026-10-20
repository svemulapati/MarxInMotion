"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade, Loaf } from "@/components/anim/Things";
import { Field, RENT, SOIL } from "@/content/v3/ch37-animations";
import { Mine } from "./ch12-animations";

/** A small stick person, for counting a growing population. */
function Person({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cy="-14" r="4" fill="#fff" stroke="#000" />
      <rect x="-4" y="-10" width="8" height="10" fill="#9a9a9a" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14.1 · Food always pays rent?
 * Smith: food creates its own demand, because people multiply with their
 * food, so land growing food "always affords rent". Marx: why "always"
 * and "necessarily" has not been shown.
 * ───────────────────────────────────────────────────────────── */
export function FoodAlwaysPaysRent() {
  return (
    <Player
      id="anim-v4-14-1"
      title="14.1 · Food always pays rent?"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Adam Smith visits the shelf. He divides what land grows into two kinds: food, which always pays rent, and other things, which only sometimes do." },
        { caption: "Why always? Smith says people multiply with their food. Grow more bread, and soon there are more mouths to eat it." },
        { caption: "So food is always wanted, he says. And a field grows more food than the farmhands need to live on." },
        { caption: "The extra pays the farmer's costs and profit, with some left over for the Landlord. That leftover is rent, from any food-growing field." },
        {
          caption: "Marx: Smith never shows why food must 'always' and 'necessarily' pay rent. The idea that nature's bounty itself yields rent is a leftover from the older Physiocrats.",
          ms: 5600,
        },
      ]}
    >
      {(s) => {
        const people = s >= 2 ? 8 : s >= 1 ? 5 : 3;
        return (
          <>
            <g transform="translate(90 180)">
              <Field w={130} h={40} fill={SOIL[2]} crops={7} label="a wheat field" />
            </g>
            {Array.from({ length: Math.min(s + 2, 6) }, (_, i) => (
              <g key={i} transform={`translate(${40 + i * 20} 128) scale(.8)`}>
                <Loaf />
              </g>
            ))}
            {Array.from({ length: people }, (_, i) => (
              <Person key={i} x={210 + (i % 4) * 22} y={110 + Math.floor(i / 4) * 30} />
            ))}
            <text x="243" y="56" textAnchor="middle" fontSize="9" fontWeight="600">
              mouths to feed: {people}
            </text>
            <Figure name="Adam Smith" x={320} y={210} scale={0.7} />

            <Fade show={s === 1}>
              <path d="M150,128 C175,100 190,95 205,95" stroke="#000" fill="none" strokeDasharray="3 3" />
            </Fade>
            <Fade show={s >= 3}>
              <rect x="30" y="80" width="120" height="18" fill={RENT} />
              <text x="90" y="92.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="700">
                leftover = rent
              </text>
            </Fade>
            <Fade show={s === 0}>
              <g transform="translate(200 160)">
                <Bubble w={110} lines={["Food always", "affords rent!"]} />
              </g>
            </Fade>
            <Fade show={s === 4}>
              <rect x="20" y="22" width="320" height="20" fill="#000" />
              <text x="180" y="35.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
                Marx: why &quot;always&quot;? That has not been shown.
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 14.2 · One third, one tenth
 * Smith's shares quoted by Marx: farm rent commonly a third of the gross
 * produce; in coal mines a fifth is very great, a tenth common.
 * ───────────────────────────────────────────────────────────── */
function Pie({ share, label }: { share: number; label: string }) {
  const a = share * 2 * Math.PI;
  const x = 30 * Math.sin(a);
  const y = -30 * Math.cos(a);
  return (
    <g>
      <circle r="30" fill="#efe3c2" stroke="#000" />
      <path d={`M0,0 L0,-30 A30,30 0 ${share > 0.5 ? 1 : 0} 1 ${x.toFixed(1)},${y.toFixed(1)} Z`} fill={RENT} stroke="#000" />
      <text y="46" textAnchor="middle" fontSize="9" fontWeight="700">
        {label}
      </text>
    </g>
  );
}

export function OneThirdOneTenth() {
  return (
    <Player
      id="anim-v4-14-2"
      title="14.2 · One third, one tenth"
      viewBox="0 0 360 230"
      steps={[
        { caption: "Smith noticed that rent is not the same everywhere. On a farm, he says, rent is commonly a third of everything the land produces." },
        { caption: "In a coal mine it is much smaller: a fifth is a very great rent, a tenth the usual one. Coal is worth little far from the mine, so the mine's place matters a lot." },
        { caption: "Smith also said something odd. Wages and profit are causes of a high or low price. Rent, he says, is the effect of the price." },
        {
          caption: "Marx: Smith was right that rent is a 'monopoly price', paid because someone owns the land. But he moves from one idea to its very opposite without noticing, and never explains where rent comes from.",
          ms: 6000,
        },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(80 110)">
            <Pie share={1 / 3} label="farm: about 1/3" />
          </g>
          <Fade show={s >= 1}>
            <g transform="translate(200 110)">
              <Pie share={1 / 10} label="coal mine: 1/10" />
            </g>
            <g transform="translate(300 128)">
              <Mine label="" />
            </g>
          </Fade>
          <rect x="140" y="160" width="10" height="8" fill={RENT} />
          <text x="154" y="167" fontSize="8">
            rent&apos;s share of what is produced
          </text>

          <Fade show={s === 2}>
            <rect x="20" y="186" width="320" height="34" fill="#fff" stroke="#000" />
            <text x="180" y="200" textAnchor="middle" fontSize="8.5">
              wages and profit: <tspan fontWeight="700">causes</tspan> of the price
            </text>
            <text x="180" y="213" textAnchor="middle" fontSize="8.5">
              rent: an <tspan fontWeight="700">effect</tspan> of the price
            </text>
          </Fade>
          <Fade show={s === 3}>
            <rect x="20" y="186" width="320" height="34" fill="#000" />
            <text x="180" y="200" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
              Marx: rent is a monopoly price,
            </text>
            <text x="180" y="213" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
              paid because someone owns the land
            </text>
          </Fade>
          <Figure name="Adam Smith" x={30} y={210} scale={0.55} label={false} style={{ opacity: s >= 2 ? 0 : 1, transition: "opacity 400ms" }} />
        </>
      )}
    </Player>
  );
}
