import { FlowerHead, LeafShape, type FlowerKind } from "./heads";

type Stem = { x: number; h: number; kind: FlowerKind; colour?: string; size: number; lean: number; sway?: "a" | "b" };

// A hand-placed row of flowers "growing" out of a border. Deterministic, so it renders the same on server & client.
const stems: Stem[] = [
  { x: 30, h: 70, kind: "daisy", size: 34, lean: -6 },
  { x: 78, h: 104, kind: "tulip", colour: "Pink", size: 42, lean: 4, sway: "a" },
  { x: 128, h: 82, kind: "sunflower", size: 58, lean: -3, sway: "b" },
  { x: 182, h: 60, kind: "daisy", colour: "Lilac", size: 30, lean: 8 },
  { x: 222, h: 112, kind: "lily", colour: "Magenta", size: 54, lean: -5, sway: "a" },
  { x: 280, h: 74, kind: "rose", colour: "Red", size: 38, lean: 5 },
  { x: 330, h: 96, kind: "gerbera", colour: "Sky blue", size: 46, lean: -4, sway: "b" },
  { x: 384, h: 64, kind: "tulip", colour: "Yellow", size: 36, lean: 7 },
  { x: 430, h: 118, kind: "sunflower", size: 64, lean: 2, sway: "a" },
  { x: 492, h: 78, kind: "lily", colour: "Lilac", size: 46, lean: -7 },
  { x: 544, h: 58, kind: "daisy", size: 30, lean: 4 },
  { x: 586, h: 100, kind: "rose", colour: "Blush pink", size: 44, lean: -3, sway: "b" },
  { x: 640, h: 84, kind: "tulip", colour: "Purple", size: 40, lean: 6 },
  { x: 690, h: 120, kind: "lily", colour: "Pink stargazer", size: 58, lean: -2, sway: "a" },
  { x: 750, h: 70, kind: "gerbera", colour: "Magenta", size: 40, lean: 5 },
  { x: 800, h: 94, kind: "sunflower", size: 52, lean: -5, sway: "b" },
  { x: 852, h: 62, kind: "daisy", colour: "Butter", size: 30, lean: 7 },
  { x: 894, h: 108, kind: "tulip", colour: "Red", size: 44, lean: -4, sway: "a" },
  { x: 946, h: 80, kind: "lily", colour: "Sky blue", size: 48, lean: 3 },
  { x: 1000, h: 66, kind: "rose", colour: "Hot pink", size: 36, lean: -6 },
  { x: 1046, h: 114, kind: "sunflower", size: 60, lean: 4, sway: "b" },
  { x: 1104, h: 76, kind: "daisy", colour: "Lilac", size: 34, lean: -5 },
  { x: 1146, h: 98, kind: "gerbera", colour: "Orange", size: 46, lean: 6, sway: "a" },
  { x: 1198, h: 70, kind: "tulip", colour: "Pink", size: 38, lean: -3 },
  { x: 1246, h: 116, kind: "lily", colour: "Magenta", size: 54, lean: 2, sway: "b" },
  { x: 1302, h: 82, kind: "rose", colour: "Peach", size: 40, lean: -6 },
  { x: 1350, h: 62, kind: "daisy", size: 30, lean: 5 },
  { x: 1400, h: 100, kind: "sunflower", size: 54, lean: -2, sway: "a" },
];

export function FlowerMeadow({ className }: { className?: string }) {
  const H = 150;
  return (
    <svg viewBox={`0 0 1440 ${H}`} preserveAspectRatio="xMidYMax slice" className={className} aria-hidden>
      {stems.map((s, i) => {
        const topX = s.x + s.lean;
        const topY = H - s.h;
        return (
          <g key={i} className={s.sway ? "sway-root motion-safe-only" : undefined} style={s.sway ? { animation: `hd-sway ${s.sway === "a" ? 7 : 9}s ease-in-out ${i * 0.37}s infinite` } : undefined}>
            <path d={`M${s.x} ${H + 2} C ${s.x - s.lean} ${H - s.h * 0.45}, ${topX} ${topY + s.h * 0.3}, ${topX} ${topY + s.size * 0.25}`} stroke="#6e8d5b" strokeWidth="3" fill="none" strokeLinecap="round" />
            {i % 2 === 0 ? (
              <g transform={`translate(${s.x + 1} ${H - s.h * 0.38}) rotate(${-35 + s.lean}) scale(0.55)`}>
                <LeafShape />
              </g>
            ) : (
              <g transform={`translate(${s.x - 1} ${H - s.h * 0.3}) rotate(${-150 + s.lean}) scale(0.5)`}>
                <LeafShape fill="#7f9e6b" />
              </g>
            )}
            <g transform={`translate(${topX - s.size / 2} ${topY - s.size / 2}) scale(${s.size / 100})`}>
              <FlowerHead kind={s.kind} colour={s.colour} />
            </g>
          </g>
        );
      })}
    </svg>
  );
}
