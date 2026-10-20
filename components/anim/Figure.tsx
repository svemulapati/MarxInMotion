import { CAST, type CastId } from "@/lib/cast";

/**
 * A Tiny Town person, drawn in the same chamfered-block style as the
 * wordmark. Placed by its feet: (x, y) is the bottom centre. Use inside an
 * SVG scene. `mood` swaps the mouth; `label` prints the name underneath.
 */
export default function Figure({
  who,
  name,
  x,
  y,
  scale = 1,
  mood = "happy",
  label = true,
  style,
}: {
  /** A cast member, or leave out for a gray townsperson named by `name`. */
  who?: CastId;
  name?: string;
  x: number;
  y: number;
  scale?: number;
  mood?: "happy" | "sad" | "sleepy" | "wow";
  label?: boolean;
  style?: React.CSSProperties;
}) {
  const c = who ? CAST[who] : { name: name ?? "", color: "#9a9a9a", hat: undefined };
  return (
    <g style={{ transform: `translate(${x}px, ${y}px) scale(${scale})`, transition: "transform 700ms cubic-bezier(.2,.8,.2,1)", ...style }}>
      {/* body: a block with chamfered shoulders */}
      <polygon points="-13,-34 -7,-40 7,-40 13,-34 13,0 -13,0" fill={c.color} />
      {/* head */}
      <circle cx="0" cy="-50" r="10" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <Face mood={mood} />
      <Hat kind={c.hat} />
      {label && (
        <text y="13" textAnchor="middle" fontSize="9" fill="#000">
          {c.name}
        </text>
      )}
    </g>
  );
}

function Face({ mood }: { mood: "happy" | "sad" | "sleepy" | "wow" }) {
  return (
    <g fill="#000" stroke="#000">
      {mood === "sleepy" ? (
        <>
          <line x1="-5.5" y1="-52" x2="-2" y2="-52" strokeWidth="1.2" />
          <line x1="2" y1="-52" x2="5.5" y2="-52" strokeWidth="1.2" />
        </>
      ) : (
        <>
          <circle cx="-3.5" cy="-52" r="1.3" stroke="none" />
          <circle cx="3.5" cy="-52" r="1.3" stroke="none" />
        </>
      )}
      {mood === "happy" && <path d="M-4,-47 Q0,-43.5 4,-47" fill="none" strokeWidth="1.2" />}
      {mood === "sad" && <path d="M-4,-45 Q0,-48.5 4,-45" fill="none" strokeWidth="1.2" />}
      {mood === "sleepy" && <path d="M-2.5,-46 L2.5,-46" fill="none" strokeWidth="1.2" />}
      {mood === "wow" && <circle cx="0" cy="-46" r="2" fill="none" strokeWidth="1.2" />}
    </g>
  );
}

function Hat({ kind }: { kind?: "top" | "chef" | "cap" | "straw" }) {
  if (kind === "top")
    return (
      <g fill="#000">
        <rect x="-12" y="-60" width="24" height="3" />
        <rect x="-7" y="-74" width="14" height="15" />
      </g>
    );
  if (kind === "chef")
    return <path d="M-8,-58 h16 v-6 a5,5 0 0 0 -4,-8 a5,5 0 0 0 -8,0 a5,5 0 0 0 -4,8 Z" fill="#fff" stroke="#000" strokeWidth="1.2" />;
  if (kind === "cap") return <path d="M-10,-56 a10,9 0 0 1 20,0 h5 v2 h-25 Z" fill="#000" />;
  if (kind === "straw")
    return (
      <g fill="#d8b45a" stroke="#000" strokeWidth="1">
        <rect x="-16" y="-59" width="32" height="3" />
        <rect x="-8" y="-67" width="16" height="9" />
      </g>
    );
  return null;
}
