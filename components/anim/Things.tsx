import { CAST } from "@/lib/cast";

/**
 * Small drawn objects for Tiny Town scenes. Each is centred on (0, 0) and
 * positioned by the caller with <Place>, which animates moves between steps.
 */
export function Place({
  x,
  y,
  scale = 1,
  show = true,
  delay = 0,
  children,
}: {
  x: number;
  y: number;
  scale?: number;
  show?: boolean;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <g
      style={{
        transform: `translate(${x}px, ${y}px) scale(${show ? scale : scale * 0.6})`,
        opacity: show ? 1 : 0,
        transition: `transform 700ms cubic-bezier(.2,.8,.2,1) ${delay}ms, opacity 500ms ease ${delay}ms`,
      }}
    >
      {children}
    </g>
  );
}

/** Fade a group in or out without moving it. */
export function Fade({ show, delay = 0, children }: { show: boolean; delay?: number; children: React.ReactNode }) {
  return <g style={{ opacity: show ? 1 : 0, transition: `opacity 500ms ease ${show ? delay : 0}ms` }}>{children}</g>;
}

export const Coat = () => (
  <g>
    <path
      d="M-12,-21 L-4,-23 L0,-16 L4,-23 L12,-21 L21,4 L14,7 L12,23 L-12,23 L-14,7 L-21,4 Z"
      fill={CAST.ava.color}
      stroke="#000"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <line x1="0" y1="-16" x2="0" y2="23" stroke="#000" strokeWidth="1" />
    <circle cx="2.5" cy="-6" r="1.4" fill="#000" />
    <circle cx="2.5" cy="3" r="1.4" fill="#000" />
    <circle cx="2.5" cy="12" r="1.4" fill="#000" />
  </g>
);

export const Linen = ({ label }: { label?: string }) => (
  <g>
    <rect x="-17" y="-8" width="34" height="16" rx="2" fill="#bcd0f2" stroke="#000" strokeWidth="1.2" />
    <ellipse cx="17" cy="0" rx="4" ry="8" fill="#9db8e8" stroke="#000" strokeWidth="1.2" />
    <line x1="-11" y1="-8" x2="-11" y2="8" stroke={CAST.leo.color} strokeWidth="1" />
    <line x1="-3" y1="-8" x2="-3" y2="8" stroke={CAST.leo.color} strokeWidth="1" />
    <line x1="5" y1="-8" x2="5" y2="8" stroke={CAST.leo.color} strokeWidth="1" />
    {label && (
      <text y="20" textAnchor="middle" fontSize="8">
        {label}
      </text>
    )}
  </g>
);

export const Tea = () => (
  <g>
    <rect x="-12" y="-12" width="24" height="24" fill="#cfe3c6" stroke="#000" strokeWidth="1.2" />
    <text y="3" textAnchor="middle" fontSize="7.5" fontWeight="600">
      TEA
    </text>
  </g>
);

export const Coffee = () => (
  <g>
    <path d="M-11,-12 Q0,-16 11,-12 L13,12 Q0,15 -13,12 Z" fill="#b08968" stroke="#000" strokeWidth="1.2" />
    <ellipse cx="-2" cy="1" rx="2.6" ry="3.6" fill="#4a2c17" />
    <ellipse cx="4" cy="2" rx="2.6" ry="3.6" fill="#4a2c17" />
  </g>
);

export const Corn = () => (
  <g>
    <line x1="0" y1="14" x2="0" y2="-14" stroke="#000" strokeWidth="1.2" />
    {[-10, -4, 2, 8].map((y) => (
      <g key={y}>
        <ellipse cx="-4" cy={y} rx="4" ry="2.5" fill="#e8c35a" stroke="#000" strokeWidth="0.8" transform={`rotate(-30 -4 ${y})`} />
        <ellipse cx="4" cy={y} rx="4" ry="2.5" fill="#e8c35a" stroke="#000" strokeWidth="0.8" transform={`rotate(30 4 ${y})`} />
      </g>
    ))}
  </g>
);

export const Gold = ({ label }: { label?: string }) => (
  <g>
    <circle r="15" fill="#e6b800" stroke="#000" strokeWidth="1.2" />
    <circle r="11" fill="none" stroke="#8a6d00" strokeWidth="1" />
    <text y="3.5" textAnchor="middle" fontSize="9" fontWeight="700">
      {label ?? "Au"}
    </text>
  </g>
);

export const Loaf = () => (
  <g>
    <path d="M-20,8 Q-22,-10 0,-12 Q22,-10 20,8 Z" fill="#c98a3a" stroke="#000" strokeWidth="1.2" />
    <path d="M-9,-6 l4,8 M-1,-8 l4,8 M7,-6 l4,8" stroke="#7a4a14" strokeWidth="1.2" fill="none" />
  </g>
);

/** A clock face with a label underneath, for "hours of work". */
export const Clock = ({ hours, color = "#000" }: { hours: string; color?: string }) => (
  <g>
    <circle r="11" fill="#fff" stroke={color} strokeWidth="1.5" />
    <line x1="0" y1="0" x2="0" y2="-7" stroke={color} strokeWidth="1.4" />
    <line x1="0" y1="0" x2="5" y2="2" stroke={color} strokeWidth="1.4" />
    <text y="23" textAnchor="middle" fontSize="9" fontWeight="600" fill={color}>
      {hours}
    </text>
  </g>
);

/** A hanging price tag. */
export const Tag = ({ text }: { text: string }) => (
  <g>
    <path d="M-16,-7 L12,-7 L18,0 L12,7 L-16,7 Z" fill="#fff" stroke="#000" strokeWidth="1" />
    <circle cx="12" cy="0" r="1.5" fill="#000" />
    <text x="-2" y="3" textAnchor="middle" fontSize="7.5">
      {text}
    </text>
  </g>
);

/** Rounded speech bubble anchored at its tail (bottom-left). */
export const Bubble = ({ w, lines }: { w: number; lines: string[] }) => {
  const h = 10 + lines.length * 10;
  return (
    <g>
      <path d={`M0,0 L6,-8 L${w},-8 L${w},${-8 - h} L0,${-8 - h} L0,-8 Z`} fill="#fff" stroke="#000" strokeWidth="1" />
      {lines.map((l, i) => (
        <text key={i} x="6" y={-8 - h + 13 + i * 10} fontSize="8">
          {l}
        </text>
      ))}
    </g>
  );
};
