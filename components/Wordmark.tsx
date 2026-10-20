/**
 * The KAPITAL wordmark, cut from flat blocks with 45° chamfers. Every letter
 * is a handful of polygons on a 100 x 140 cell, and each block rises into
 * place on load with a small stagger.
 */
type Glyph = { w: number; blocks: string[] };

const H = 140;
const C = 34; // chamfer size

const GLYPHS: Record<string, Glyph> = {
  K: {
    w: 100,
    blocks: [
      `0,0 44,0 44,${H} 0,${H}`,
      `52,0 100,0 100,18 52,${H / 2 - 6}`,
      `52,${H / 2 + 6} 100,${H - 18} 100,${H} 52,${H}`,
    ],
  },
  A: {
    w: 100,
    blocks: [
      `0,${C} ${C},0 ${100 - C},0 100,${C} 100,64 0,64`,
      `0,72 44,72 44,${H} 0,${H}`,
      `56,72 100,72 100,${H} 56,${H}`,
    ],
  },
  P: {
    w: 100,
    blocks: [
      `0,0 44,0 44,${H} 0,${H}`,
      `52,0 ${100 - C},0 100,${C} 100,${84 - C} ${100 - C},84 52,84`,
    ],
  },
  I: { w: 44, blocks: [`0,0 44,0 44,${H} 0,${H}`] },
  T: {
    w: 100,
    blocks: [`0,0 100,0 100,44 0,44`, `28,52 72,52 72,${H} 28,${H}`],
  },
  L: {
    w: 100,
    blocks: [`0,0 44,0 44,${H} 0,${H}`, `52,${H - 44} ${100 - C},${H - 44} 100,${H - 44 + C} 100,${H} 52,${H}`],
  },
};

const GAP = 10;

export default function Wordmark({ word = "KAPITAL" }: { word?: string }) {
  const letters: { ch: string; g: Glyph; at: number; first: number }[] = [];
  let x = 0;
  let blockCount = 0;
  for (const ch of word) {
    const g = GLYPHS[ch];
    letters.push({ ch, g, at: x, first: blockCount });
    x += g.w + GAP;
    blockCount += g.blocks.length;
  }
  const width = x - GAP;

  return (
    <svg viewBox={`0 0 ${width} ${H}`} className="block w-full" role="img" aria-label={word}>
      {letters.map(({ ch, g, at, first }, li) => (
        <g key={li} transform={`translate(${at} 0)`} data-letter={ch}>
          {g.blocks.map((points, bi) => (
            <polygon
              key={points}
              points={points}
              className="wm-block"
              style={{ animationDelay: `${120 + (first + bi) * 45}ms` }}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
