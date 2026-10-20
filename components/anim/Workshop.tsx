import { CAST } from "@/lib/cast";

/* ─────────────────────────────────────────────────────────────
 * Mr. Moneybags' spinning workshop: drawings and value bars for any
 * chapter that needs the workshop (Vol I, Ch 7 on).
 * Workshop numbers follow CONTINUITY.md (Marx's own, Ch 7).
 * ───────────────────────────────────────────────────────────── */

/** Colours for the parts of value, used the same way in every chapter. */
export const TONE = {
  cotton: "#d4d4d4",
  spindle: "#a9a9a9",
  wage: CAST.sam.color,
  surplus: "#e6b800",
};

/** A fluffy bale of raw cotton. */
export const Cotton = () => (
  <g>
    {[
      [-9, 2, 8],
      [0, -4, 9],
      [9, 2, 8],
      [-4, 6, 7],
      [5, 7, 7],
    ].map(([x, y, r], i) => (
      <circle key={i} cx={x} cy={y} r={r} fill="#fff" stroke="#000" strokeWidth="1" />
    ))}
  </g>
);

/** A hand spindle: a stick with a round whorl and some yarn on it. */
export const Spindle = () => (
  <g>
    <line x1="0" y1="-22" x2="0" y2="20" stroke="#6b4a2b" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="0" cy="-6" rx="6" ry="9" fill="#f3e3b3" stroke="#000" strokeWidth="1" />
    <ellipse cx="0" cy="12" rx="11" ry="3.5" fill="#8a5a2b" stroke="#000" strokeWidth="1" />
  </g>
);

/** A skein of finished yarn. */
export const Yarn = ({ fill = "#f3e3b3" }: { fill?: string }) => (
  <g>
    <ellipse cx="0" cy="0" rx="14" ry="9" fill={fill} stroke="#000" strokeWidth="1.1" />
    <path d="M-12,-3 Q0,4 12,-3 M-12,2 Q0,9 12,2" fill="none" stroke="#000" strokeOpacity=".35" />
  </g>
);

export interface Seg {
  n: number;
  color: string;
  label?: string;
  show?: boolean;
}

/**
 * A horizontal bar of value, one segment per part. `unit` is pixels per coin
 * (or per hour). Hidden segments shrink to nothing, so parts grow in when shown.
 */
export function Bar({ x, y, unit, segs, h = 18, delay = 0 }: { x: number; y: number; unit: number; segs: Seg[]; h?: number; delay?: number }) {
  const widths = segs.map((s) => (s.show !== false ? s.n * unit : 0));
  const lefts = widths.map((_, i) => x + widths.slice(0, i).reduce((a, b) => a + b, 0));
  return (
    <g>
      {segs.map((s, i) => {
        const on = s.show !== false;
        const w = widths[i];
        const left = lefts[i];
        return (
          <g key={i}>
            <rect
              x={left}
              y={y}
              width={w}
              height={h}
              fill={s.color}
              stroke="#000"
              strokeWidth={on ? 1 : 0}
              style={{ transition: `width 700ms cubic-bezier(.2,.8,.2,1) ${delay + i * 120}ms, x 700ms cubic-bezier(.2,.8,.2,1)` }}
            />
            {s.label && (
              <text
                x={left + w / 2}
                y={y + h / 2 + 3.5}
                textAnchor="middle"
                fontSize="9"
                fill={s.color === TONE.wage ? "#fff" : "#000"}
                style={{ opacity: on ? 1 : 0, transition: `opacity 400ms ease ${on ? 500 + delay + i * 120 : 0}ms` }}
              >
                {s.label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}
