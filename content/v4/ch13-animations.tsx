"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Fade } from "@/components/anim/Things";
import { Field, PROFIT, RENT, SOIL } from "@/content/v3/ch37-animations";

const FX = [70, 180, 290];

/** A short fence drawn along the top of a field, centred on (0, 0). */
function Fence({ w }: { w: number }) {
  return (
    <g>
      <line x1={-w / 2} y1="0" x2={w / 2} y2="0" stroke="#000" strokeWidth="1.5" />
      {Array.from({ length: Math.floor(w / 10) + 1 }, (_, i) => (
        <line key={i} x1={-w / 2 + i * 10} y1="-6" x2={-w / 2 + i * 10} y2="3" stroke="#000" strokeWidth="1.5" />
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.1 · Ricardo's empty country
 * Ricardo's own example: fields 1, 2, 3 yield 100, 90, 80 quarters.
 * When No. 2 is farmed, No. 1 pays 10 quarters of rent.
 * ───────────────────────────────────────────────────────────── */
export function RicardosEmptyCountry() {
  return (
    <Player
      id="anim-v4-13-1"
      title="13.1 · Ricardo's empty country"
      viewBox="0 0 360 230"
      steps={[
        { caption: "David Ricardo starts his story in a new country with lots of good land and few people. Nobody owns it. Anyone may farm it." },
        { caption: "Field 1 is the best. The same money and work grow 100 sacks of wheat there. All of it is the farmer's: no rent, because there is free land all around." },
        { caption: "The town grows, so field 2, which grows 90 sacks, must be farmed too. Now field 1 grows 10 sacks more than field 2, and those 10 sacks become rent." },
        { caption: "Field 3, which grows 80, comes next, and so on. Ricardo's rule: the worst field farmed pays no rent at all. Rent is only the difference from the worst." },
        {
          caption: "Marx: that only works if nobody owns field 3. Ricardo began with land 'not yet appropriated', then forgot it. Where a Landlord owns every field, he will not hand out even the worst one for nothing.",
          ms: 6000,
        },
      ]}
    >
      {(s) => {
        const yields = [100, 90, 80];
        return (
          <>
            {yields.map((y, i) => {
              const farmed = s >= 1 + i;
              return (
                <g key={y}>
                  <g transform={`translate(${FX[i]} 160)`} style={{ opacity: farmed ? 1 : 0.3, transition: "opacity 500ms" }}>
                    <Field w={92} h={40} fill={SOIL[3 - i]} crops={farmed ? 6 : 0} label={`field ${i + 1}`} />
                  </g>
                  <Fade show={farmed}>
                    <text x={FX[i]} y="126" textAnchor="middle" fontSize="11" fontWeight="700">
                      {y} sacks
                    </text>
                  </Fade>
                  <Fade show={s === 4}>
                    <g transform={`translate(${FX[i]} 138)`}>
                      <Fence w={92} />
                    </g>
                  </Fade>
                </g>
              );
            })}

            <Fade show={s >= 2 && s < 4}>
              <rect x={FX[0] - 32} y="94" width="64" height="16" fill={RENT} />
              <text x={FX[0]} y="105.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="700">
                rent: {s >= 3 ? "20" : "10"} sacks
              </text>
            </Fade>
            <Fade show={s === 3}>
              <rect x={FX[1] - 32} y="94" width="64" height="16" fill={RENT} />
              <text x={FX[1]} y="105.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="700">
                rent: 10 sacks
              </text>
              <text x={FX[2]} y="105.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fillOpacity=".6">
                no rent
              </text>
            </Fade>

            <Fade show={s < 4}>
              <Figure name="Ricardo" x={322} y={74} scale={0.62} />
            </Fade>
            <Fade show={s === 4}>
              <Figure name="Landlord" x={322} y={74} scale={0.62} />
              <rect x={FX[2] - 40} y="94" width="80" height="16" fill="#000" />
              <text x={FX[2]} y="105.5" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="700">
                rent here too
              </text>
            </Fade>
            <text x="180" y="22" textAnchor="middle" fontSize="10" fontWeight="600">
              {s === 4 ? "an old country: every field has an owner" : "a new country: free land for anyone"}
            </text>
          </>
        );
      }}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 13.2 · Does rent make bread dear?
 * Ricardo: "Corn is not high because a rent is paid, but a rent is
 * paid because corn is high." Marx: true of differential rent, false
 * of absolute rent. The 6 / 7 coin figures are made up.
 * ───────────────────────────────────────────────────────────── */
export function DoesRentMakeBreadDear() {
  return (
    <Player
      id="anim-v4-13-2"
      title="13.2 · Does rent make bread dear?"
      steps={[
        { caption: "Ricardo's famous line: corn is not dear because rent is paid; rent is paid because corn is dear. The price is set on the worst field, which in his story pays no rent." },
        { caption: "So if the Landlord gave up all the rent on the better fields, bread would not get cheaper. The farmers, like Grandpa Ned, would just keep the extra." },
        { caption: "Marx agrees, for differential rent. It is the result of the price, not its cause." },
        { caption: "But now the Landlord owns the worst field too. Without landowners, the wheat there would sell at its cost plus profit: say 6 coins a sack. (Made-up numbers.)" },
        {
          caption: "The Landlord wants rent even there, so the wheat sells at its full value instead: say 7 coins. Here landownership really does push the price of bread up. That is absolute rent.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          <g transform="translate(90 180)">
            <Field w={130} h={40} fill={SOIL[0]} crops={6} label="the worst field" />
          </g>
          <Figure who="ned" x={40} y={210} scale={0.7} mood={s === 1 ? "wow" : "happy"} />
          <Figure name={s >= 3 ? "Landlord" : "Ricardo"} x={320} y={210} scale={0.7} />

          {/* price bar */}
          <text x="200" y="42" fontSize="9" fontWeight="600">
            price of a sack
          </text>
          <rect x="200" y="50" width={s >= 4 ? 140 : 120} height="22" fill="#cfcfcf" style={{ transition: "width 700ms" }} />
          <rect x="200" y="50" width="100" height="22" fill="#9a9a9a" />
          <text x="250" y="65" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="700">
            cost
          </text>
          <rect x="300" y="50" width="20" height="22" fill={PROFIT} />
          <Fade show={s >= 4}>
            <rect x="320" y="50" width="20" height="22" fill={RENT} />
            <text x="330" y="86" textAnchor="middle" fontSize="8" fontWeight="700" fill={RENT}>
              rent
            </text>
          </Fade>
          <text x="310" y="86" textAnchor="middle" fontSize="8" fontWeight="700" fill="#b38f00">
            profit
          </text>
          <Fade show={s >= 3}>
            <text x="200" y="104" fontSize="11" fontWeight="700">
              {s >= 4 ? "7 coins: value" : "6 coins: cost + profit"}
            </text>
          </Fade>

          <Fade show={s === 0}>
            <g transform="translate(200 150)">
              <Bubble w={150} lines={["Corn is not high because", "a rent is paid..."]} />
            </g>
          </Fade>
          <Fade show={s === 1}>
            <g transform="translate(60 150)">
              <Bubble w={120} lines={["I keep the extra!"]} />
            </g>
          </Fade>
          <Fade show={s === 2}>
            <rect x="140" y="124" width="200" height="18" fill="#000" />
            <text x="240" y="136.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
              differential rent: an effect of the price
            </text>
          </Fade>
          <Fade show={s === 4}>
            <rect x="140" y="124" width="200" height="18" fill={RENT} />
            <text x="240" y="136.5" textAnchor="middle" fontSize="8.5" fill="#fff" fontWeight="600">
              absolute rent: raises the price
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
