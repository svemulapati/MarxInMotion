/**
 * Soft grayscale "photograph" built from blurred blobs plus film grain, so the
 * page has the washed-out print feel without shipping any images.
 */
const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const MOODS = {
  light: { base: "#ececec", blobs: ["#a8a8a8", "#fafafa", "#8f8f8f"] },
  mid: { base: "#8d8d8d", blobs: ["#5c5c5c", "#b9b9b9", "#3e3e3e"] },
  dark: { base: "#1d1d1d", blobs: ["#5a5a5a", "#0b0b0b", "#8a8a8a"] },
};

export default function Grain({
  mood = "light",
  className = "",
  drift = true,
}: {
  mood?: keyof typeof MOODS;
  className?: string;
  drift?: boolean;
}) {
  const m = MOODS[mood];
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: m.base }} aria-hidden>
      <div
        className={`absolute -inset-1/4 ${drift ? "grain-drift" : ""}`}
        style={{
          background: `radial-gradient(40% 35% at 30% 30%, ${m.blobs[0]}, transparent 70%),
            radial-gradient(35% 45% at 70% 60%, ${m.blobs[1]}, transparent 70%),
            radial-gradient(30% 30% at 45% 80%, ${m.blobs[2]}, transparent 70%)`,
          filter: "blur(18px)",
        }}
      />
      <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: NOISE }} />
    </div>
  );
}
