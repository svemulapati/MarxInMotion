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

/**
 * A hanging price tag. The tip stays at x = 18; longer labels grow the tag
 * to the left so the text never spills past its edge.
 */
export const Tag = ({ text }: { text: string }) => {
  const left = 12 - Math.max(28, text.length * 4.3 + 8);
  return (
    <g>
      <path d={`M${left},-7 L12,-7 L18,0 L12,7 L${left},7 Z`} fill="#fff" stroke="#000" strokeWidth="1" />
      <circle cx="12" cy="0" r="1.5" fill="#000" />
      <text x={(left + 10) / 2} y="3" textAnchor="middle" fontSize="7.5">
        {text}
      </text>
    </g>
  );
};

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

/** A small gold coin, for counting money in scenes. */
export const Coin = ({ r = 7 }: { r?: number }) => (
  <g>
    <circle r={r} fill="#e6b800" stroke="#000" strokeWidth="1" />
    <circle r={r * 0.62} fill="none" stroke="#8a6d00" strokeWidth=".8" />
  </g>
);

/** A row of n coins with an optional label underneath. */
export const Coins = ({ n, label }: { n: number; label?: string }) => (
  <g>
    {Array.from({ length: n }, (_, i) => (
      <g key={i} transform={`translate(${(i - (n - 1) / 2) * 9} 0)`}>
        <Coin r={6} />
      </g>
    ))}
    {label && (
      <text y="19" textAnchor="middle" fontSize="8.5">
        {label}
      </text>
    )}
  </g>
);

export const Bible = () => (
  <g>
    <rect x="-11" y="-14" width="22" height="28" fill="#4a3426" stroke="#000" strokeWidth="1.2" />
    <rect x="-1.2" y="-8" width="2.4" height="12" fill="#e6b800" />
    <rect x="-5" y="-4.5" width="10" height="2.4" fill="#e6b800" />
  </g>
);

export const Jug = () => (
  <g>
    <path d="M-8,-12 h16 v4 q6,6 4,18 h-24 q-2,-12 4,-18 Z" fill="#e8a33d" stroke="#000" strokeWidth="1.2" />
    <path d="M10,-6 q8,2 4,10" fill="none" stroke="#000" strokeWidth="1.2" />
    <text y="7" textAnchor="middle" fontSize="6" fontWeight="600">
      CIDER
    </text>
  </g>
);

export const Cow = () => (
  <g>
    <rect x="-20" y="-12" width="34" height="18" rx="6" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <circle cx="-8" cy="-4" r="4" fill="#000" />
    <circle cx="6" cy="1" r="3" fill="#000" />
    <rect x="12" y="-18" width="12" height="11" rx="3" fill="#fff" stroke="#000" strokeWidth="1.2" />
    <circle cx="20" cy="-14" r="1" fill="#000" />
    {[-16, -8, 4, 10].map((x) => (
      <line key={x} x1={x} y1="6" x2={x} y2="16" stroke="#000" strokeWidth="2" />
    ))}
  </g>
);

/** A written promise to pay later. */
export const IOU = ({ text = "IOU" }: { text?: string }) => (
  <g>
    <rect x="-14" y="-9" width="28" height="18" fill="#fffbe6" stroke="#000" strokeWidth="1" />
    <text y="3" textAnchor="middle" fontSize="7.5" fontWeight="600">
      {text}
    </text>
  </g>
);

export const Chest = ({ open = false }: { open?: boolean }) => (
  <g>
    <rect x="-20" y="-6" width="40" height="22" fill="#8a5a2b" stroke="#000" strokeWidth="1.2" />
    <path
      d={open ? "M-20,-6 L-24,-26 L16,-26 L20,-6 Z" : "M-20,-6 Q0,-20 20,-6 Z"}
      fill="#a06a35"
      stroke="#000"
      strokeWidth="1.2"
      style={{ transition: "d 500ms" }}
    />
    <rect x="-3" y="-2" width="6" height="7" fill="#e6b800" stroke="#000" strokeWidth=".8" />
  </g>
);

export const Tick = () => <path d="M-6,0 L-2,5 L7,-6" fill="none" stroke="#2a9d5b" strokeWidth="3" strokeLinecap="round" />;

export const Cross = () => (
  <path d="M-5,-5 L5,5 M5,-5 L-5,5" fill="none" stroke="#d6452f" strokeWidth="3" strokeLinecap="round" />
);
