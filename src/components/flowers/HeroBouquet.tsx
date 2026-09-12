import { FlowerHead, LeafShape, type FlowerKind } from "./heads";

type Bloom = { kind: FlowerKind; colour?: string; x: number; y: number; size: number; rotate?: number; delay: number };

const leaves = [
  { x: 150, y: 300, r: -140, s: 1.5 },
  { x: 205, y: 318, r: -60, s: 1.35 },
  { x: 80, y: 250, r: -170, s: 1.1 },
  { x: 250, y: 250, r: -25, s: 1.2 },
  { x: 120, y: 350, r: 160, s: 1 },
];

const stems = [
  "M150 390 C 150 350, 138 320, 128 262",
  "M160 390 C 175 345, 210 330, 238 300",
  "M140 390 C 120 330, 90 260, 80 190",
  "M165 390 C 185 320, 205 260, 214 220",
  "M150 390 C 120 360, 95 345, 70 320",
];

const blooms: Bloom[] = [
  { kind: "tulip", colour: "Pink", x: 80, y: 176, size: 82, rotate: -14, delay: 0.55 },
  { kind: "daisy", x: 212, y: 206, size: 64, delay: 0.75 },
  { kind: "sunflower", x: 128, y: 250, size: 138, delay: 0.25 },
  { kind: "lily", colour: "Magenta", x: 246, y: 300, size: 116, rotate: 12, delay: 0.45 },
  { kind: "rose", colour: "Blush pink", x: 66, y: 322, size: 86, delay: 0.65 },
  { kind: "daisy", colour: "Lilac", x: 300, y: 222, size: 44, delay: 0.95 },
  { kind: "gerbera", colour: "Sky blue", x: 186, y: 356, size: 58, delay: 0.85 },
];

/** Animated bouquet that blooms in over the hero video frame. */
export function HeroBouquet({ className, fuzzy = true }: { className?: string; fuzzy?: boolean }) {
  return (
    <svg viewBox="0 0 360 400" className={className} aria-hidden>
      <g className="sway-root motion-safe-only" style={{ animation: "hd-sway 8s ease-in-out 1.6s infinite" }}>
        {stems.map((d, i) => (
          <path key={i} d={d} pathLength={1} className="stem-draw" style={{ animationDelay: `${i * 0.08}s` }} stroke="#6e8d5b" strokeWidth="4" fill="none" strokeLinecap="round" />
        ))}
        {leaves.map((leaf, i) => (
          <g key={i} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}>
            <g className="bloom" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <LeafShape fill={i % 2 ? "#7f9e6b" : "#6e8d5b"} />
            </g>
          </g>
        ))}
        {blooms.map((bloom, i) => (
          <g key={i} transform={`translate(${bloom.x - bloom.size / 2} ${bloom.y - bloom.size / 2}) scale(${bloom.size / 100})`}>
            <g transform={bloom.rotate ? `rotate(${bloom.rotate} 50 50)` : undefined}>
              <g className="bloom" style={{ animationDelay: `${bloom.delay}s` }} filter={fuzzy ? "url(#hd-fuzz)" : undefined}>
                <FlowerHead kind={bloom.kind} colour={bloom.colour} />
              </g>
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}
