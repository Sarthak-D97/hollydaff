import { FlowerHead, LeafShape } from "@/components/flowers/heads";
import { ribbons, wraps, type BouquetDesign } from "./bouquet-options";

const TIE = { x: 210, y: 392 };

const slots: Array<[number, number]> = [
  [210, 196],
  [148, 222],
  [272, 222],
  [180, 146],
  [242, 146],
  [98, 180],
  [322, 180],
  [212, 98],
  [132, 124],
  [290, 124],
  [168, 262],
  [254, 262],
];

const headSize = { sunflower: 96, lily: 98, rose: 76, tulip: 72, daisy: 60, gerbera: 76 } as const;

const greeneryLeaves: Array<[number, number, number, number]> = [
  [96, 262, -155, 1.3],
  [324, 262, -25, 1.3],
  [70, 205, -170, 1.1],
  [350, 205, -10, 1.1],
  [140, 92, -120, 1],
  [284, 92, -60, 1],
  [210, 58, -90, 0.9],
];

const pearlDots: Array<[number, number]> = [
  [120, 172], [300, 170], [176, 196], [246, 198], [206, 150], [150, 250], [272, 252], [210, 238], [96, 222], [326, 222], [160, 110], [262, 108],
];

export function BouquetPreview({ design, className, animate = false }: { design: BouquetDesign; className?: string; animate?: boolean }) {
  const wrap = wraps[design.wrap];
  const ribbon = ribbons[design.ribbon];
  const count = design.stems.length;
  const scale = count <= 1 ? 1.5 : count <= 3 ? 1.3 : count <= 6 ? 1.18 : count <= 9 ? 1.06 : 1;
  // Pull flowers (and greenery) towards the centre when there are only a few, so small bouquets look full.
  const pull = count <= 3 ? 0.55 : count <= 6 ? 0.8 : 1;

  const placed = design.stems.map((stem, i) => {
    const [sx, sy] = slots[i];
    const x = 210 + (sx - 210) * pull;
    const y = 196 + (sy - 196) * pull + (count <= 1 ? 14 : 0);
    return { stem, x, y, size: headSize[stem.kind] * scale, order: i };
  });
  const drawOrder = [...placed].sort((a, b) => a.y - b.y);

  return (
    <svg viewBox="0 0 420 540" className={className} role="img" aria-label="Preview of your custom bouquet">
      {/* back wrap */}
      <path d="M44 176 Q 210 58 376 176 L 246 416 L 174 416 Z" fill={wrap.dark} />
      <path d="M44 176 Q 210 58 376 176" stroke={wrap.line} strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M70 168 Q 210 84 350 168 L 238 404 L 182 404 Z" fill={wrap.base} opacity="0.55" />

      {design.greenery
        ? greeneryLeaves.map(([lx, ly, r, s], i) => {
            const leafPull = Math.max(pull, 0.7);
            const x = 210 + (lx - 210) * leafPull;
            const y = 210 + (ly - 210) * leafPull;
            return (
            <g key={`leaf${i}`} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
              <LeafShape fill={i % 2 ? "#7f9e6b" : "#6e8d5b"} />
            </g>
            );
          })
        : null}

      {/* stems */}
      {placed.map(({ x, y, stem }) => (
        <path
          key={`stem${stem.id}`}
          d={`M${x} ${y} Q ${(x + TIE.x) / 2 + (x - TIE.x) * 0.15} ${(y + TIE.y) / 2} ${TIE.x} ${TIE.y}`}
          stroke="#5f7f4d"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />
      ))}

      {/* heads */}
      {drawOrder.map(({ x, y, size, stem }) => {
        const tilt = stem.kind === "tulip" ? (x - 210) * 0.18 : (x - 210) * 0.06;
        return (
          <g key={`head${stem.id}`} transform={`translate(${x - size / 2} ${y - size / 2}) scale(${size / 100})`}>
            <g transform={`rotate(${tilt} 50 50)`}>
              <g className={animate ? "bloom" : undefined}>
                <FlowerHead kind={stem.kind} colour={stem.colour} />
              </g>
            </g>
          </g>
        );
      })}

      {design.pearls
        ? pearlDots.slice(0, Math.max(4, count + 2)).map(([x, y], i) => (
            <g key={`pearl${i}`}>
              <circle cx={x} cy={y} r="4.2" fill="#fffaf2" stroke="#e8dccb" strokeWidth="1" />
              <circle cx={x - 1.3} cy={y - 1.4} r="1.2" fill="#ffffff" />
            </g>
          ))
        : null}

      {/* front wrap */}
      <path d="M86 270 Q 210 318 334 270 L 244 432 Q 210 446 176 432 Z" fill={wrap.base} />
      <path d="M86 270 Q 210 318 334 270" stroke={wrap.line} strokeWidth="4" fill="none" />
      <path d="M130 296 Q 180 360 196 428" stroke={wrap.dark} strokeWidth="2" fill="none" opacity="0.45" />
      <path d="M290 296 Q 240 360 224 428" stroke={wrap.dark} strokeWidth="2" fill="none" opacity="0.45" />
      <path d="M176 432 L 192 520 Q 210 530 228 520 L 244 432 Q 210 446 176 432 Z" fill={wrap.dark} />

      {/* ribbon */}
      <g transform="translate(210 430)">
        <path d="M-6 0 C -40 -26, -66 -8, -58 12 C -50 30, -20 16, -6 4 Z" fill={ribbon} />
        <path d="M6 0 C 40 -26, 66 -8, 58 12 C 50 30, 20 16, 6 4 Z" fill={ribbon} />
        <path d="M-5 6 C -14 30, -26 56, -40 76 L -26 80 C -14 58, -4 34, 2 10 Z" fill={ribbon} />
        <path d="M5 6 C 14 30, 24 56, 34 78 L 20 82 C 10 58, 2 34, -2 10 Z" fill={ribbon} />
        <rect x="-11" y="-8" width="22" height="18" rx="7" fill={ribbon} />
        <path d="M-50 6 C -40 0, -26 -4, -14 0" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      </g>

      {design.note.trim() ? (
        <g transform="translate(262 452) rotate(8)">
          <path d="M-8 -30 L 0 0" stroke="#b8a193" strokeWidth="1.2" />
          <rect x="-4" y="0" width="118" height="54" rx="6" fill="#fffdf8" stroke="#e7dccf" />
          <text x="55" y="33" textAnchor="middle" fontSize="17" fill="#503e37" fontFamily="var(--font-caveat), cursive">
            {design.note.trim().length > 16 ? `${design.note.trim().slice(0, 15)}…` : design.note.trim()}
          </text>
        </g>
      ) : null}

      {count === 0 ? (
        <text x="210" y="190" textAnchor="middle" fontSize="26" fill="#9b8273" fontFamily="var(--font-caveat), cursive">
          pick some blooms ✿
        </text>
      ) : null}
    </svg>
  );
}
