"use client";

import Figure from "@/components/anim/Figure";
import Player from "@/components/anim/Player";
import { Coat, Fade, Linen, Loaf } from "@/components/anim/Things";
import { Cotton, TONE, Yarn } from "@/components/anim/Workshop";
import { CAST } from "@/lib/cast";
import { Gear, Note, Track, type StationId } from "./ch01-animations";

/* ─────────────────────────────────────────────────────────────
 * 3.1 · Start with the yarn (C′ – M′ – C … P … C′)
 * ───────────────────────────────────────────────────────────── */
const C_ORDER: StationId[] = ["C2", "M2", "C", "P", "C2"];
const C_SUBS = ["20 lb yarn: 30", "30 coins", "cotton, Sam", "the workshop", "new yarn: 30"];

export function StartWithTheYarn() {
  return (
    <Player
      id="anim-v2-3-1"
      title="3.1 · Start with the yarn"
      viewBox="0 0 360 225"
      steps={[
        { caption: "A third camera. This time start with the finished yarn: 20 lb, worth 30 coins (C′)." },
        {
          caption: "Notice what this circle starts with. The other two began with plain capital. This one begins with surplus-value already inside: 3 of the 30 coins' worth is extra.",
          ms: 5000,
        },
        { caption: "The yarn is sold (M′). The money splits: 27 coins buy cotton and Sam's week (C), 3 coins go on Mr. Moneybags' own life." },
        { caption: "The workshop runs (P) and makes a new batch of yarn (C′)." },
        {
          caption: "So the circle ends where it began, with yarn. For it to keep turning, all that yarn must be bought and used: by other workshops, and by people eating and dressing.",
          ms: 5000,
        },
      ]}
    >
      {(s) => (
        <>
          <Track order={C_ORDER} active={[0, 0, 2, 3, 4][s]} subs={C_SUBS} />
          <Fade show={s === 1}>
            <g transform="translate(36 30)">
              <rect x="-30" y="-10" width="54" height="14" fill="#cfcfcf" stroke="#000" />
              <rect x="24" y="-10" width="6" height="14" fill={TONE.surplus} stroke="#000" />
              <text x="-3" y="0" textAnchor="middle" fontSize="7.5">
                27
              </text>
            </g>
            <text x="78" y="33" fontSize="9" fontWeight="600" fill="#9a7a00">
              surplus-value inside from the start
            </text>
          </Fade>
          <Note show={s === 2}>27 back into the business, 3 for Moneybags</Note>
          <Note show={s === 4}>yarn → yarn: and someone must use it all</Note>
        </>
      )}
    </Player>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3.2 · Everyone's yarn is someone's cotton
 * ───────────────────────────────────────────────────────────── */
type NodeId = "farm" | "forge" | "mill" | "weaver" | "ava" | "mia" | "homes";
const NODES: Record<NodeId, { x: number; y: number; label: string }> = {
  farm: { x: 50, y: 52, label: "cotton farm" },
  forge: { x: 50, y: 150, label: "the Forge" },
  mill: { x: 150, y: 100, label: "Moneybags' mill" },
  weaver: { x: 245, y: 52, label: "weaving mill" },
  ava: { x: 315, y: 110, label: "Ava's coats" },
  mia: { x: 245, y: 168, label: "Mia's bakery" },
  homes: { x: 150, y: 190, label: "everyone's homes" },
};

const LINKS: { from: NodeId; to: NodeId; step: number; color?: string }[] = [
  { from: "farm", to: "mill", step: 0 },
  { from: "mill", to: "weaver", step: 1 },
  { from: "weaver", to: "ava", step: 1 },
  { from: "forge", to: "mill", step: 2 },
  { from: "ava", to: "homes", step: 3, color: CAST.sam.color },
  { from: "mia", to: "homes", step: 3, color: CAST.sam.color },
];

function NodeIcon({ id }: { id: NodeId }) {
  if (id === "farm") return <Cotton />;
  if (id === "forge") return <Gear r={11} />;
  if (id === "mill") return <Yarn />;
  if (id === "weaver") return <Linen />;
  if (id === "ava")
    return (
      <g transform="scale(.6)">
        <Coat />
      </g>
    );
  if (id === "mia") return <Loaf />;
  return (
    <g transform="translate(0 14)">
      <Figure who="sam" x={-10} y={0} scale={0.4} label={false} />
      <Figure who="moneybags" x={12} y={0} scale={0.4} label={false} />
    </g>
  );
}

export function EveryonesCotton() {
  return (
    <Player
      id="anim-v2-3-2"
      title="3.2 · Everyone's yarn is someone's cotton"
      viewBox="0 0 360 225"
      steps={[
        { caption: "Mr. Moneybags' cotton is the cotton farm's finished product. The farm's C′ is his shopping, his M–C." },
        { caption: "His yarn, in turn, is the weaving mill's raw material, and their cloth becomes Ava's coats." },
        { caption: "Even his spindles came out of another workshop: the Forge's finished product. Marx's own example is coal and machinery." },
        { caption: "And the coats and bread? They are bought by Sam with his wage and by Mr. Moneybags with his surplus-value. Eating and dressing are part of the circle too." , ms: 5000 },
        {
          caption: "Watch C′…C′ for the whole town and you see all of society's capital moving at once. Marx notes the French economist Quesnay built his famous table on this circle. Part Three of this volume picks it up.",
          ms: 5600,
        },
      ]}
    >
      {(s) => (
        <>
          {LINKS.map((l, i) => {
            const a = NODES[l.from];
            const b = NODES[l.to];
            return (
              <Fade key={i} show={s >= l.step} delay={l.step === s ? 200 : 0}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={l.color ?? "#000"}
                  strokeWidth="1.6"
                  strokeDasharray={l.color ? "4 3" : undefined}
                />
              </Fade>
            );
          })}

          {(Object.keys(NODES) as NodeId[]).map((id) => {
            const n = NODES[id];
            const lit =
              (s === 0 && (id === "farm" || id === "mill")) ||
              (s === 1 && (id === "mill" || id === "weaver" || id === "ava")) ||
              (s === 2 && (id === "forge" || id === "mill")) ||
              (s === 3 && (id === "ava" || id === "mia" || id === "homes")) ||
              s === 4;
            return (
              <g key={id} style={{ opacity: lit ? 1 : 0.35, transition: "opacity 500ms" }}>
                <circle cx={n.x} cy={n.y} r="22" fill="#fff" stroke="#000" strokeWidth={lit ? 2 : 1} />
                <g transform={`translate(${n.x} ${n.y})`}>
                  <NodeIcon id={id} />
                </g>
                <text x={n.x} y={n.y + (id === "homes" ? 33 : 34)} textAnchor="middle" fontSize="8.5">
                  {n.label}
                </text>
              </g>
            );
          })}

          <Fade show={s === 4} delay={300}>
            <rect x="124" y="6" width="112" height="20" rx="4" fill="#000" />
            <text x="180" y="19" textAnchor="middle" fontSize="8.5" fill="#fff">
              the whole social capital
            </text>
          </Fade>
        </>
      )}
    </Player>
  );
}
