"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Bubble, Clock, Coat, Fade, Linen, Tick } from "@/components/anim/Things";
import { TONE } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";
import { GOLD, OpenBook, RED, Seesaw, Shelf, T } from "./ch01-animations";

/** One hour block of a working-day bar. */
const HOUR = 20;

/** A ruler drawn as a long bar with ticks, labelled. */
function Ruler({ x, y, label, active }: { x: number; y: number; label: string; active: boolean }) {
  return (
    <g style={{ opacity: active ? 1 : 0.3, transition: `opacity ${T}` }}>
      <rect x={x} y={y} width="120" height="14" fill="#f3e3b3" stroke="#000" />
      {Array.from({ length: 11 }, (_, i) => (
        <line key={i} x1={x + i * 12} y1={y} x2={x + i * 12} y2={y + (i % 5 === 0 ? 8 : 5)} stroke="#000" />
      ))}
      <text x={x + 60} y={y + 28} textAnchor="middle" fontSize="8.5" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.1 · Two rulers for value
 * Smith's two definitions: labour contained vs labour commanded ("the
 * quantity of labour which it enables him to purchase or command").
 * Workshop numbers from CONTINUITY.md: 12-hour day, wage 3 coins = 6 hours.
 * ───────────────────────────────────────────────────────────── */
export function TwoRulersForValue() {
  return (
    <Player
      id="anim-v4-3-1"
      title="3.1 · Two rulers for value"
      steps={[
        {
          caption: "The most famous visitor: Adam Smith, whose Wealth of Nations came out in 1776. Smith says labour measures value. But he carries two different rulers, and swaps between them.",
          ms: 4800,
        },
        { caption: "Ruler one: the labour that went into a thing. A coat and 20 yards of linen each took 10 hours, so they swap one for one, as in Volume I." },
        {
          caption: "Ruler two: the labour a thing can buy, or in Smith's word, command. In a town of makers who swap what they made themselves, both rulers give the same answer.",
          ms: 4600,
        },
        {
          caption: "Now add a boss. Sam works 12 hours. His wage, 3 coins, buys goods that took only 6 hours to make. The two rulers no longer agree.",
          ms: 4600,
        },
        {
          caption: "Smith slides over to ruler two, which really means measuring by wages. Marx says that ruler stretches: the value of labour-power changes like any other price.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <Fade show={s === 0}>
            <Shelf x={262} y={6} label="Smith, 1776" />
          </Fade>
          <Fade show={s === 0}>
            <Figure name="Adam Smith" x={80} y={200} scale={0.85} />
            <g transform="translate(180 110)">
              <OpenBook title="Wealth of Nations" year="1776" />
            </g>
          </Fade>

          <Fade show={s >= 1}>
            <Ruler x={20} y={30} label="1. labour put in" active={s === 1 || s === 2 || s === 3} />
            <Ruler x={200} y={30} label="2. labour it can buy" active={s >= 2} />
          </Fade>

          {/* makers swapping their own goods */}
          <Fade show={s === 1 || s === 2}>
            <g transform="translate(90 132) scale(.9)">
              <Coat />
            </g>
            <g transform="translate(270 132) scale(.9)">
              <Linen />
            </g>
            <g transform="translate(90 186)">
              <Clock hours="10 h" color={CAST.ava.color} />
            </g>
            <g transform="translate(270 186)">
              <Clock hours="10 h" color={CAST.leo.color} />
            </g>
            <text x="180" y="140" textAnchor="middle" fontSize="20">
              =
            </text>
          </Fade>
          <Fade show={s === 2}>
            <g transform="translate(180 92)">
              <Tick />
            </g>
            <text x="180" y="112" textAnchor="middle" fontSize="8.5">
              both rulers agree
            </text>
          </Fade>

          {/* the boss arrives */}
          <Fade show={s >= 3}>
            <text x="20" y="96" fontSize="8.5">
              Sam&apos;s day: hours put in
            </text>
            <rect x="20" y="102" width={12 * HOUR * 0.8} height="16" fill={TONE.wage} />
            <text x={20 + 12 * HOUR * 0.8 + 6} y="114" fontSize="9" fontWeight="700">
              12 h
            </text>
            <text x="20" y="148" fontSize="8.5">
              what his wage of 3 coins can buy
            </text>
            <rect x="20" y="154" width={6 * HOUR * 0.8} height="16" fill={GOLD} />
            <text x={20 + 6 * HOUR * 0.8 + 6} y="166" fontSize="9" fontWeight="700">
              6 h
            </text>
            <Figure who="sam" x={320} y={200} scale={0.7} />
          </Fade>
          <Fade show={s === 4}>
            <text x="180" y="200" textAnchor="middle" fontSize="9.5" fontWeight="600" fill={RED}>
              ruler two is made of rubber
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.2 · The first cut and the second
 * Smith, Book I ch. VIII and VI as quoted by Marx: "the whole produce of
 * labour belongs to the labourer"; rent "the first deduction", profit "a
 * second deduction". Sack numbers are this site's.
 * ───────────────────────────────────────────────────────────── */
function Pile({ n, color }: { n: number; color: string }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => (
        <rect key={i} x={(i % 4) * 14} y={-Math.floor(i / 4) * 12} width="12" height="10" fill={color} stroke="#000" strokeWidth=".7" />
      ))}
    </g>
  );
}

export function TheFirstCutAndTheSecond() {
  return (
    <Player
      id="anim-v4-3-2"
      title="3.2 · The first cut and the second"
      steps={[
        {
          caption: "Smith tells a story. In the earliest times, before land was owned or stock piled up, the whole produce of labour belonged to the labourer. Say 12 sacks. (Our numbers.)",
          ms: 4800,
        },
        { caption: "Then land became private property. In Smith's words, the landlord's rent makes the first deduction from the produce of labour: 3 sacks." },
        {
          caption: "The worker can't live until harvest without food and seed advanced by a farmer, like Grandpa Ned. Profit, says Smith, makes a second deduction: 3 more.",
          ms: 4800,
        },
        { caption: "What is left, 6 sacks, is the worker's wage. Smith adds that almost all other work, in all arts and manufactures, suffers the same cut." },
        {
          caption: "Marx calls this Smith at his best. Rent and profit are slices cut from what the worker made: the unpaid part. Smith had found where surplus-value comes from.",
          ms: 4800,
        },
      ]}
    >
      {(s) => (
        <>
          <Figure name="labourer" x={60} y={200} scale={0.8} />
          <g transform="translate(110 190)">
            <Pile n={s >= 2 ? 6 : s >= 1 ? 9 : 12} color="#e3cf9a" />
          </g>
          <text x="138" y="208" textAnchor="middle" fontSize="8.5">
            {s >= 3 ? "left: 6 (wages)" : s >= 2 ? "left: 6" : s >= 1 ? "left: 9" : "all 12 his"}
          </text>

          {/* the landlord's cut */}
          <Fade show={s >= 1}>
            <g style={{ transform: `translate(${s >= 1 ? 226 : 110}px, 120px)`, transition: `transform ${T}` }}>
              <Pile n={3} color={GOLD} />
            </g>
            <Figure name="Landlord" x={300} y={142} scale={0.6} />
            <text x="226" y="100" fontSize="8.5" fontWeight="600">
              1st deduction: rent
            </text>
          </Fade>
          {/* the farmer's cut */}
          <Fade show={s >= 2}>
            <g style={{ transform: `translate(${s >= 2 ? 226 : 110}px, 186px)`, transition: `transform ${T}` }}>
              <Pile n={3} color="#b38f00" />
            </g>
            <Figure who="ned" x={300} y={208} scale={0.6} />
            <text x="226" y="166" fontSize="8.5" fontWeight="600">
              2nd deduction: profit
            </text>
          </Fade>

          <Fade show={s === 4}>
            <rect x="20" y="20" width="320" height="22" fill="#000" />
            <text x="180" y="35" textAnchor="middle" fontSize="9.5" fill="#fff">
              rent and profit = slices of the worker&apos;s own produce
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.3 · Did the rule break?
 * Smith senses that with capital and landed property "the law of value
 * changes into its opposite"; Marx: labour-power is bought at its value and
 * its use yields more. Workshop numbers: wage 3 coins, 12-hour day.
 * ───────────────────────────────────────────────────────────── */
export function DidTheRuleBreak() {
  return (
    <Player
      id="anim-v4-3-3"
      title="3.3 · Did the rule break?"
      steps={[
        { caption: "Swapping is supposed to be fair: equal work for equal work. A coat for 20 yards of linen, 10 hours for 10 hours." },
        { caption: "But between Mr. Moneybags and Sam, more work comes back than was paid for. Sam gets 3 coins, 6 hours' worth, and gives 12 hours." },
        {
          caption: "Smith felt this and decided the rule only held in the earliest times. Once there were bosses and landlords, it seemed to turn into its opposite.",
          ms: 4600,
        },
        {
          caption: "Marx's answer: the rule never broke. Sam sells his ability to work, his labour-power, at its full value of 3 coins. The boss then uses it for 12 hours.",
          ms: 4800,
        },
        {
          caption: "Marx praises Smith for feeling the puzzle, and blames him for letting it shake his trust in the rule. That wobble, Marx says, runs right through the Wealth of Nations.",
          ms: 5000,
        },
      ]}
    >
      {(s) => {
        const tilt = s === 1 || s === 2 ? -14 : 0;
        return (
          <>
            <Seesaw
              x={180}
              y={62}
              tilt={tilt}
              left={s >= 1 ? "12 h of work" : "coat 10 h"}
              right={s >= 1 ? "3 coins (6 h)" : "linen 10 h"}
            />
            <Fade show={s >= 1}>
              <Figure who="sam" x={60} y={200} scale={0.75} />
              <Figure who="moneybags" x={300} y={200} scale={0.75} />
            </Fade>
            <Fade show={s === 2}>
              <Figure name="Adam Smith" x={180} y={200} scale={0.75} mood="wow" />
              <g transform="translate(196 146)">
                <Bubble w={110} lines={["The rule only held", "in the old days!"]} />
              </g>
            </Fade>
            <Fade show={s >= 3}>
              <rect x="110" y="112" width="140" height="20" fill="#fff" stroke="#000" />
              <text x="180" y="126" textAnchor="middle" fontSize="9">
                labour-power: 3 coins = 3 coins
              </text>
              <g transform="translate(260 120)">
                <Tick />
              </g>
              <rect x="110" y="142" width="140" height="14" fill={TONE.wage} />
              <rect x="180" y="142" width="70" height="14" fill={GOLD} />
              <text x="180" y="172" textAnchor="middle" fontSize="8.5">
                its use: 12 hours (6 paid, 6 extra)
              </text>
            </Fade>
            <Fade show={s === 4}>
              <rect x="10" y="4" width="340" height="20" fill="#000" />
              <text x="180" y="18" textAnchor="middle" fontSize="9" fill="#fff">
                strength: he felt the puzzle. weakness: it shook his trust in the rule
              </text>
            </Fade>
          </>
        );
      }}
    </Player>
  );
}
