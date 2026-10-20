"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Coin, Coins, Fade, Gold, Linen, Loaf, Place } from "@/components/anim/Things";
import { CAST } from "@/lib/cast";

/**
 * The wrap-up: all four volumes in one sixteen-step animation, told with the
 * Tiny Town cast and the workshop numbers used throughout the site (Sam's
 * 3-coin wage, a 12-hour day, 24 + 3 coins in and 30 out).
 */
const STEPS = [
  { vol: 1, caption: "It starts with a swap. One coat for twenty yards of linen. They balance because each holds the same hours of human work: its value." },
  { vol: 1, caption: "People settle on one thing to measure everything else. Gold becomes money, and every value gets a price." },
  { vol: 1, caption: "Mr. Moneybags arrives. He doesn't buy to use. He buys to sell for more: 100 coins go round, 110 come back. Where does the extra come from?" },
  { vol: 1, caption: "His secret buy is Sam's ability to work. Sam owns nothing else, so he sells a day of it for 3 coins, what he needs to live." },
  { vol: 1, caption: "Sam works 12 hours. Six hours make the value of his wage. The other six are unpaid. That unpaid part is surplus-value, and nobody cheated.", ms: 4600 },
  { vol: 1, caption: "The boss puts the extra back in. The workshop grows, machines replace hands, and a crowd waits at the gate for work.", ms: 4200 },
  { vol: 2, caption: "Volume II follows the money. Coins become cotton and Sam's work, then yarn, then more coins. Capital must keep moving or it stops being capital." },
  { vol: 2, caption: "Some parts move fast, like cotton used up every week. Some move slowly, like a machine that wears out over ten years." },
  { vol: 2, caption: "The whole town must fit together: the Forge makes machines, the bakery makes bread, and each needs what the other makes. If they don't match, there's a crash.", ms: 4600 },
  { vol: 3, caption: "Volume III shows how the extra gets shared out. In his ledger, the boss sees only costs (27) and profit (3), as if every coin he spent had grown." },
  { vol: 3, caption: "Competition moves money between trades until every 100 coins earn about the same profit. Prices drift away from values, but the totals still match." },
  { vol: 3, caption: "As machines pile up, each coin earns a smaller share. Marx calls this the falling rate of profit, and he links it to crises." },
  { vol: 3, caption: "Then the pie is sliced: profit for Mr. Moneybags, interest for Bea the banker, a cut for Tom the shopkeeper, rent for the Landlord. Every slice comes from the same unpaid hours.", ms: 5200 },
  { vol: 3, caption: "From outside it looks like money makes profit, land makes rent and work makes wages. Marx calls that the trinity formula: three springs that are really one." },
  { vol: 4, caption: "In the bonus volume, Marx reads the thinkers before him. Smith and Ricardo found that work makes value, but missed where the extra comes from." },
  { vol: 0, caption: "That is Marx's whole argument. Many economists disagree with parts of it, and the site shows both sides. Now it's your turn to weigh it up.", ms: 5200 },
];

const VOLS = ["I", "II", "III", "IV"];

export function TheWholeStory() {
  return (
    <Player id="anim-whole-story" title="The whole story in one animation" steps={STEPS} viewBox="0 0 360 240">
      {(s) => (
        <>
          <Arrow />
          {/* which volume we're in */}
          <g transform="translate(0 6)">
            {VOLS.map((v, i) => {
              const on = STEPS[s].vol === i + 1;
              const past = STEPS[s].vol === 0 || STEPS[s].vol > i + 1;
              return (
                <g key={v} transform={`translate(${20 + i * 82} 0)`}>
                  <rect width="74" height="16" fill={on ? "#000" : past ? "#bdbdbd" : "#e4e4e4"} style={{ transition: "fill 400ms" }} />
                  <text x="37" y="11.5" textAnchor="middle" fontSize="8.5" fill={on ? "#fff" : "#000"}>
                    Volume {v}
                  </text>
                </g>
              );
            })}
          </g>

          {/* one scene per step, cross-faded */}
          <Fade show={s === 0}>
            <Scale />
          </Fade>
          <Fade show={s === 1}>
            <MoneyBorn />
          </Fade>
          <Fade show={s === 2}>
            <Moneybags />
          </Fade>
          <Fade show={s === 3}>
            <SamSells />
          </Fade>
          <Fade show={s === 4}>
            <TheDay />
          </Fade>
          <Fade show={s === 5}>
            <Grows />
          </Fade>
          <Fade show={s === 6}>
            <Circuit />
          </Fade>
          <Fade show={s === 7}>
            <FastSlow />
          </Fade>
          <Fade show={s === 8}>
            <TwoDepartments />
          </Fade>
          <Fade show={s === 9}>
            <Ledger />
          </Fade>
          <Fade show={s === 10}>
            <Averaging />
          </Fade>
          <Fade show={s === 11}>
            <Falling />
          </Fade>
          <Fade show={s === 12}>
            <Pie />
          </Fade>
          <Fade show={s === 13}>
            <ThreeSprings />
          </Fade>
          <Fade show={s === 14}>
            <Shelf />
          </Fade>
          <Fade show={s === 15}>
            <WeighIt />
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ── Volume I ─────────────────────────────────────────────── */

function Scale() {
  return (
    <g>
      <polygon points="180,150 168,178 192,178" fill="#000" />
      <line x1="90" y1="148" x2="270" y2="148" stroke="#000" strokeWidth="3" />
      <Place x={110} y={118}>
        <Coat />
      </Place>
      <Place x={250} y={128}>
        <Linen />
      </Place>
      <text x="110" y="168" textAnchor="middle" fontSize="9">
        1 coat
      </text>
      <text x="250" y="168" textAnchor="middle" fontSize="9">
        20 yards of linen
      </text>
      <text x="180" y="62" textAnchor="middle" fontSize="12" fontWeight="600">
        10 hours = 10 hours
      </text>
      <text x="180" y="200" textAnchor="middle" fontSize="9" fillOpacity=".6">
        value: the work hidden inside
      </text>
    </g>
  );
}

function MoneyBorn() {
  const things = [<Coat key="c" />, <Linen key="l" />, <Loaf key="b" />];
  return (
    <g>
      <Place x={180} y={120} scale={1.6}>
        <Gold />
      </Place>
      {things.map((t, i) => {
        const a = (-150 + i * 120) * (Math.PI / 180);
        const x = 180 + 110 * Math.cos(a);
        const y = 122 + 62 * Math.sin(a);
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={180 + 30 * Math.cos(a)} y2={122 + 30 * Math.sin(a)} stroke="#000" strokeOpacity=".3" strokeDasharray="3 3" />
            <g transform={`translate(${x} ${y}) scale(.7)`}>{t}</g>
          </g>
        );
      })}
      <text x="180" y="210" textAnchor="middle" fontSize="10">
        everything measured in gold: prices
      </text>
    </g>
  );
}

function Moneybags() {
  return (
    <g>
      <Figure who="moneybags" x={70} y={200} />
      <circle cx="225" cy="118" r="62" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="6 4" />
      <g transform="translate(225 56)">
        <Coins n={3} />
      </g>
      <g transform="translate(287 118) scale(.7)">
        <Linen />
      </g>
      <g transform="translate(225 180)">
        <Coins n={4} />
      </g>
      <text x="225" y="114" textAnchor="middle" fontSize="13" fontWeight="600">
        M–C–M′
      </text>
      <text x="225" y="130" textAnchor="middle" fontSize="10">
        100 → 110
      </text>
      <text x="225" y="226" textAnchor="middle" fontSize="18" fontWeight="300">
        ?
      </text>
    </g>
  );
}

function SamSells() {
  return (
    <g>
      <Figure who="sam" x={110} y={200} scale={1.15} />
      <Figure who="moneybags" x={260} y={200} />
      <g transform="translate(185 120)">
        <Coins n={3} label="3 coins for a day" />
      </g>
      <path d="M140,150 C170,130 200,130 230,150" fill="none" stroke="#000" strokeOpacity=".4" markerEnd="url(#wu-arr)" />
      <text x="110" y="70" textAnchor="middle" fontSize="9.5">
        owns only his
      </text>
      <text x="110" y="82" textAnchor="middle" fontSize="9.5">
        ability to work
      </text>
    </g>
  );
}

function TheDay() {
  const x = 30;
  const w = 300;
  return (
    <g>
      <Figure who="sam" x={50} y={110} scale={0.8} />
      <rect x={x} y="130" width={w / 2} height="34" fill={CAST.sam.color} />
      <rect x={x + w / 2} y="130" width={w / 2} height="34" fill="#e6b800" />
      <text x={x + w / 4} y="151" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="600">
        6 h paid: 3 coins
      </text>
      <text x={x + (3 * w) / 4} y="151" textAnchor="middle" fontSize="11" fontWeight="600">
        6 h unpaid: 3 coins
      </text>
      {[0, 3, 6, 9, 12].map((h) => (
        <text key={h} x={x + (w / 12) * h} y="180" textAnchor="middle" fontSize="8.5" fillOpacity=".6">
          {h}h
        </text>
      ))}
      <text x={x + (3 * w) / 4} y="205" textAnchor="middle" fontSize="11">
        surplus-value
      </text>
    </g>
  );
}

function Grows() {
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${40 + i * 62} ${150 - i * 18})`}>
          <rect width="54" height={36 + i * 18} fill="#fff" stroke="#000" />
          <polygon points={`0,0 18,-12 18,0 36,-12 36,0 54,-12 54,0`} fill="#000" />
        </g>
      ))}
      <text x="110" y="208" textAnchor="middle" fontSize="9.5">
        accumulate, accumulate!
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <Figure key={i} name="" label={false} x={250 + (i % 3) * 22} y={150 + Math.floor(i / 3) * 40} scale={0.55} mood="sad" />
      ))}
      <text x="272" y="208" textAnchor="middle" fontSize="9.5">
        the crowd at the gate
      </text>
    </g>
  );
}

/* ── Volume II ────────────────────────────────────────────── */

function Circuit() {
  const stops = ["M", "C", "P", "C′", "M′"];
  return (
    <g>
      {stops.map((st, i) => (
        <g key={st} transform={`translate(${44 + i * 68} 110)`}>
          <circle r="22" fill="#fff" stroke="#000" strokeWidth="2" />
          <text y="5" textAnchor="middle" fontSize="13" fontWeight="600">
            {st}
          </text>
          {i < stops.length - 1 && <line x1="24" y1="0" x2="44" y2="0" stroke="#000" markerEnd="url(#wu-arr)" />}
        </g>
      ))}
      <path d="M316,136 C300,190 60,190 44,136" fill="none" stroke="#e6b800" strokeWidth="3" markerEnd="url(#wu-arr)" />
      <text x="180" y="208" textAnchor="middle" fontSize="10">
        round and round, never stopping
      </text>
      <text x="180" y="64" textAnchor="middle" fontSize="9" fillOpacity=".6">
        coins, cotton and work, the workshop, yarn, more coins
      </text>
    </g>
  );
}

function FastSlow() {
  return (
    <g>
      <text x="95" y="62" textAnchor="middle" fontSize="10" fontWeight="600">
        fast: cotton
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={40 + i * 19} y="80" width="15" height="60" fill="#d4d4d4" stroke="#000" />
      ))}
      <text x="95" y="160" textAnchor="middle" fontSize="9">
        used up and bought again every week
      </text>
      <text x="265" y="62" textAnchor="middle" fontSize="10" fontWeight="600">
        slow: a machine
      </text>
      <rect x="215" y="80" width="100" height="60" fill="#fff" stroke="#000" strokeWidth="2" />
      <rect x="215" y="80" width="10" height="60" fill="#000" fillOpacity=".7" />
      <text x="265" y="160" textAnchor="middle" fontSize="9">
        wears out a tenth each year
      </text>
      <text x="180" y="205" textAnchor="middle" fontSize="10">
        fixed and circulating capital
      </text>
    </g>
  );
}

function TwoDepartments() {
  return (
    <g>
      <rect x="30" y="70" width="120" height="70" fill="#fff" stroke="#000" strokeWidth="2" />
      <text x="90" y="98" textAnchor="middle" fontSize="11" fontWeight="600">
        Department I
      </text>
      <text x="90" y="114" textAnchor="middle" fontSize="9">
        the Forge: machines
      </text>
      <rect x="210" y="70" width="120" height="70" fill="#fff" stroke="#000" strokeWidth="2" />
      <text x="270" y="98" textAnchor="middle" fontSize="11" fontWeight="600">
        Department II
      </text>
      <text x="270" y="114" textAnchor="middle" fontSize="9">
        the bakery: bread
      </text>
      <path d="M150,92 L208,92" stroke="#000" markerEnd="url(#wu-arr)" />
      <path d="M210,120 L152,120" stroke="#000" markerEnd="url(#wu-arr)" />
      <polygon points="180,190 168,212 192,212" fill="#000" />
      <line x1="120" y1="188" x2="240" y2="188" stroke="#000" strokeWidth="3" />
      <text x="180" y="176" textAnchor="middle" fontSize="10">
        I(v + s) = IIc: they must match
      </text>
    </g>
  );
}

/* ── Volume III ───────────────────────────────────────────── */

function Ledger() {
  return (
    <g>
      <Figure who="moneybags" x={60} y={200} />
      <rect x="130" y="60" width="200" height="120" fill="#fffbe6" stroke="#000" />
      <text x="145" y="84" fontSize="10" fontWeight="600">
        My ledger
      </text>
      <text x="145" y="108" fontSize="10">
        cotton, spindles, wages
      </text>
      <text x="315" y="108" textAnchor="end" fontSize="10">
        27
      </text>
      <text x="145" y="130" fontSize="10">
        profit
      </text>
      <text x="315" y="130" textAnchor="end" fontSize="10" fill="#b38f00" fontWeight="700">
        3
      </text>
      <line x1="145" y1="140" x2="315" y2="140" stroke="#000" strokeOpacity=".3" />
      <text x="145" y="160" fontSize="10">
        rate of profit
      </text>
      <text x="315" y="160" textAnchor="end" fontSize="10">
        about 11%
      </text>
      <text x="230" y="210" textAnchor="middle" fontSize="9.5" fillOpacity=".7">
        the wage and the cotton look the same
      </text>
    </g>
  );
}

function Averaging() {
  const before = [10, 30, 20];
  return (
    <g>
      {["mill", "tailors", "bakery"].map((t, i) => (
        <g key={t} transform={`translate(${70 + i * 110} 0)`}>
          <rect x="-20" y={180 - before[i] * 3.6} width="18" height={before[i] * 3.6} fill="#d4d4d4" stroke="#000" />
          <rect x="4" y={180 - 20 * 3.6} width="18" height={20 * 3.6} fill="#e6b800" stroke="#000" />
          <text y="196" textAnchor="middle" fontSize="9">
            {t}
          </text>
          <text x="-11" y={174 - before[i] * 3.6} textAnchor="middle" fontSize="8">
            {before[i]}%
          </text>
          <text x="13" y={174 - 20 * 3.6} textAnchor="middle" fontSize="8" fontWeight="700">
            20%
          </text>
        </g>
      ))}
      <line x1="30" y1={180 - 20 * 3.6} x2="330" y2={180 - 20 * 3.6} stroke="#000" strokeDasharray="4 3" />
      <text x="180" y="220" textAnchor="middle" fontSize="10">
        gray: before competition · gold: after (made-up numbers)
      </text>
    </g>
  );
}

function Falling() {
  const rates = [66, 50, 33, 25, 20];
  return (
    <g>
      {rates.map((r, i) => (
        <g key={r} transform={`translate(${60 + i * 60} 0)`}>
          <rect x="-16" y={190 - r * 1.8} width="32" height={r * 1.8} fill={i === rates.length - 1 ? "#d6452f" : "#000"} fillOpacity={0.25 + i * 0.15} />
          <text y={184 - r * 1.8} textAnchor="middle" fontSize="9">
            {r}%
          </text>
          {Array.from({ length: i + 1 }, (_, k) => (
            <rect key={k} x={-14 + k * 6} y="198" width="5" height="5" fill="#000" />
          ))}
        </g>
      ))}
      <text x="180" y="222" textAnchor="middle" fontSize="10">
        more machines (squares), a smaller rate of profit (Marx&apos;s own numbers)
      </text>
    </g>
  );
}

function Pie() {
  const slices = [
    { who: "Mr. Moneybags", color: "#1f1f1f", a: 0, b: 140 },
    { who: "Bea: interest", color: CAST.bea.color, a: 140, b: 210 },
    { who: "Tom: commerce", color: CAST.tom.color, a: 210, b: 270 },
    { who: "Landlord: rent", color: "#8a8a8a", a: 270, b: 360 },
  ];
  const pt = (deg: number, r: number): [number, number] => [130 + r * Math.sin((deg * Math.PI) / 180), 120 - r * Math.cos((deg * Math.PI) / 180)];
  return (
    <g>
      {slices.map((s) => {
        const [x1, y1] = pt(s.a, 70);
        const [x2, y2] = pt(s.b, 70);
        return <path key={s.who} d={`M130,120 L${x1},${y1} A70,70 0 ${s.b - s.a > 180 ? 1 : 0} 1 ${x2},${y2} Z`} fill={s.color} stroke="#fff" strokeWidth="2" />;
      })}
      {slices.map((s, i) => (
        <g key={s.who} transform={`translate(225 ${72 + i * 22})`}>
          <rect width="10" height="10" fill={s.color} />
          <text x="15" y="9" fontSize="9.5">
            {s.who}
          </text>
        </g>
      ))}
      <text x="180" y="218" textAnchor="middle" fontSize="10">
        one pie, baked in Sam&apos;s unpaid hours
      </text>
    </g>
  );
}

function ThreeSprings() {
  const springs = [
    { src: "money", out: "profit", x: 70 },
    { src: "land", out: "rent", x: 180 },
    { src: "work", out: "wages", x: 290 },
  ];
  return (
    <g>
      {springs.map((s) => (
        <g key={s.src} transform={`translate(${s.x} 0)`}>
          <rect x="-36" y="70" width="72" height="34" fill="#fff" stroke="#000" />
          <text y="92" textAnchor="middle" fontSize="11" fontWeight="600">
            {s.src}
          </text>
          <line x1="0" y1="106" x2="0" y2="132" stroke="#000" markerEnd="url(#wu-arr)" />
          <text y="150" textAnchor="middle" fontSize="11">
            {s.out}
          </text>
          <path d="M0,160 C0,180 0,180 0,186" stroke="#e6b800" strokeWidth="3" />
        </g>
      ))}
      <path d="M70,186 L290,186" stroke="#e6b800" strokeWidth="3" />
      <text x="180" y="206" textAnchor="middle" fontSize="10" fontWeight="600">
        Marx: really one spring, people&apos;s work
      </text>
    </g>
  );
}

/* ── Volume IV and the close ──────────────────────────────── */

function Shelf() {
  const books = ["Steuart", "Quesnay", "Smith", "Ricardo", "Malthus", "Jones"];
  const colors = ["#2f6fd6", "#2a9d5b", "#d6452f", "#7b4bd6", "#d99a00", "#c2407f"];
  return (
    <g>
      <line x1="40" y1="130" x2="320" y2="130" stroke="#000" strokeWidth="3" />
      {books.map((b, i) => (
        <g key={b} transform={`translate(${52 + i * 45} 60)`}>
          <rect width="34" height="70" fill={colors[i]} />
          <text x="17" y="40" textAnchor="middle" fontSize="7.5" fill="#fff" transform="rotate(-90 17 40)">
            {b}
          </text>
        </g>
      ))}
      <Figure name="Marx" x={180} y={205} scale={0.85} label={false} />
      <text x="180" y="224" textAnchor="middle" fontSize="9" fillOpacity=".6">
        Marx, reading the thinkers before him
      </text>
    </g>
  );
}

function WeighIt() {
  return (
    <g>
      <polygon points="180,150 166,182 194,182" fill="#000" />
      <line x1="80" y1="148" x2="280" y2="148" stroke="#000" strokeWidth="3" />
      <rect x="70" y="112" width="70" height="34" fill="#fff" stroke="#000" />
      <text x="105" y="133" textAnchor="middle" fontSize="10" fontWeight="600">
        Marx says
      </text>
      <rect x="220" y="112" width="70" height="34" fill="#fff" stroke="#000" />
      <text x="255" y="133" textAnchor="middle" fontSize="10" fontWeight="600">
        critics say
      </text>
      <Figure who="sam" x={180} y={96} scale={0.7} mood="wow" label={false} />
      <text x="180" y="206" textAnchor="middle" fontSize="11" fontWeight="600">
        your turn to weigh it up
      </text>
      <g transform="translate(40 200)">
        <Coin r={6} />
      </g>
      <g transform="translate(320 200)">
        <Coin r={6} />
      </g>
    </g>
  );
}

function Arrow() {
  return (
    <defs>
      <marker id="wu-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#000" />
      </marker>
    </defs>
  );
}
