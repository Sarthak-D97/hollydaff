// Hand-drawn flower heads, all drawn in a 100 × 100 box centred on (50, 50) so they can be
// used as standalone icons or placed inside larger SVG compositions with a transform.

export type FlowerKind = "sunflower" | "rose" | "tulip" | "lily" | "daisy" | "gerbera";

type Palette = { base: string; dark: string; light: string; accent?: string };

export const flowerPalettes: Record<FlowerKind, Record<string, Palette>> = {
  sunflower: {
    "Golden yellow": { base: "#f6be45", dark: "#e39a26", light: "#fad57a", accent: "#4e2f18" },
    "Sunset orange": { base: "#f39a3a", dark: "#d9731f", light: "#f8c07c", accent: "#4e2f18" },
  },
  rose: {
    Red: { base: "#d63b4d", dark: "#a62536", light: "#ec6b78" },
    "Blush pink": { base: "#f3aebb", dark: "#d4808f", light: "#f9d2d9" },
    "Hot pink": { base: "#e75a96", dark: "#bf3a74", light: "#f58db9" },
    Peach: { base: "#f6b38a", dark: "#d98a5e", light: "#fbd2b6" },
    White: { base: "#f8f2e8", dark: "#d8ccbc", light: "#ffffff" },
  },
  tulip: {
    Pink: { base: "#f07fa6", dark: "#d9588a", light: "#f7a8c4" },
    Red: { base: "#d93a4a", dark: "#b32536", light: "#ee6a73" },
    Purple: { base: "#9a70d1", dark: "#7550b3", light: "#bea0e6" },
    Yellow: { base: "#f4c343", dark: "#dfa122", light: "#f9dc80" },
    White: { base: "#f7f1e7", dark: "#ddd0bf", light: "#ffffff" },
  },
  lily: {
    "Pink stargazer": { base: "#fbe3ec", dark: "#d6336c", light: "#ffffff", accent: "#c2572b" },
    Magenta: { base: "#e0447f", dark: "#b82a60", light: "#f7a8c8", accent: "#f2c14e" },
    Lilac: { base: "#bba5e3", dark: "#8c6cc4", light: "#e4daf5", accent: "#6b4a9e" },
    "Sky blue": { base: "#9fd0ef", dark: "#5da3d6", light: "#d9eefa", accent: "#f2b33d" },
    White: { base: "#fffdf8", dark: "#e7d8bd", light: "#ffffff", accent: "#e8792e" },
  },
  daisy: {
    White: { base: "#fffdf8", dark: "#e7ddd0", light: "#ffffff", accent: "#f3b63a" },
    Lilac: { base: "#cdbbf0", dark: "#a88fd8", light: "#eae2fa", accent: "#f3b63a" },
    Butter: { base: "#fbe08d", dark: "#eec25a", light: "#fdf0c4", accent: "#e8792e" },
  },
  gerbera: {
    "Sky blue": { base: "#4fa8e3", dark: "#2f84c2", light: "#8ecaf0", accent: "#f2c14e" },
    Magenta: { base: "#e0407f", dark: "#b52a61", light: "#f28ab4", accent: "#f2c14e" },
    Orange: { base: "#f28a2e", dark: "#d06a17", light: "#f8b26f", accent: "#6b3f1d" },
  },
};

export const defaultColour: Record<FlowerKind, string> = {
  sunflower: "Golden yellow",
  rose: "Blush pink",
  tulip: "Pink",
  lily: "Pink stargazer",
  daisy: "White",
  gerbera: "Sky blue",
};

const rot = (deg: number) => `rotate(${deg} 50 50)`;
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

// Fermat spiral for sunflower seeds — computed once, deterministic.
const seeds = range(36).map((i) => {
  const r = 1.85 * Math.sqrt(i);
  const t = (i * 137.508 * Math.PI) / 180;
  return { x: +(50 + r * Math.cos(t)).toFixed(1), y: +(50 + r * Math.sin(t)).toFixed(1) };
});

function SunflowerShape({ p }: { p: Palette }) {
  return (
    <g>
      {range(16).map((i) => (
        <path
          key={`b${i}`}
          d="M50 50 C 44.5 38, 43.5 20, 50 5 C 56.5 20, 55.5 38, 50 50 Z"
          fill={p.dark}
          transform={rot(i * 22.5 + 11.25)}
        />
      ))}
      {range(16).map((i) => (
        <g key={`f${i}`} transform={rot(i * 22.5)}>
          <path d="M50 50 C 45 39, 44.5 23, 50 9.5 C 55.5 23, 55 39, 50 50 Z" fill={p.base} />
          <path d="M50 42 L50 16" stroke={p.light} strokeWidth="1" strokeLinecap="round" opacity="0.75" />
        </g>
      ))}
      <circle cx="50" cy="50" r="15.5" fill="#6b4424" />
      <circle cx="50" cy="50" r="12" fill={p.accent ?? "#4e2f18"} />
      {seeds.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r="1" fill="#9a6a38" />
      ))}
    </g>
  );
}

function RoseShape({ p }: { p: Palette }) {
  return (
    <g>
      {range(5).map((i) => (
        <ellipse
          key={`o${i}`}
          cx="50"
          cy="27"
          rx="17"
          ry="15"
          fill={p.base}
          stroke={p.dark}
          strokeWidth="1.2"
          transform={rot(i * 72)}
        />
      ))}
      <circle cx="50" cy="50" r="24" fill={p.base} />
      {range(4).map((i) => (
        <ellipse
          key={`m${i}`}
          cx="50"
          cy="37"
          rx="13"
          ry="11"
          fill={p.light}
          stroke={p.dark}
          strokeWidth="1.1"
          transform={rot(i * 90 + 45)}
        />
      ))}
      <circle cx="50" cy="50" r="12" fill={p.base} stroke={p.dark} strokeWidth="1.1" />
      <path
        d="M50 50 m -2.5 0 a 3.5 3.5 0 1 1 5.5 2.8 a 6.5 6.5 0 1 1 -10.2 -5.4 a 9.5 9.5 0 1 1 14.6 8.6"
        fill="none"
        stroke={p.dark}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </g>
  );
}

function TulipShape({ p }: { p: Palette }) {
  return (
    <g>
      <path d="M50 14 C 65 22, 72 50, 63 78 C 57 87, 43 87, 37 78 C 28 50, 35 22, 50 14 Z" fill={p.dark} />
      <path d="M28 28 C 42 32, 51 52, 52 86 C 38 88, 27 79, 23 62 C 19 48, 21 36, 28 28 Z" fill={p.base} />
      <path d="M72 28 C 58 32, 49 52, 48 86 C 62 88, 73 79, 77 62 C 81 48, 79 36, 72 28 Z" fill={p.light} />
      <path d="M30 40 C 38 48, 44 62, 46 80" stroke={p.light} strokeWidth="1.2" fill="none" opacity="0.7" strokeLinecap="round" />
      <path d="M70 40 C 62 48, 56 62, 54 80" stroke={p.base} strokeWidth="1.2" fill="none" opacity="0.7" strokeLinecap="round" />
    </g>
  );
}

function LilyShape({ p }: { p: Palette }) {
  return (
    <g>
      {range(3).map((i) => (
        <g key={`i${i}`} transform={rot(i * 120 + 60)}>
          <path d="M50 50 C 35 43, 32 25, 50 7 C 68 25, 65 43, 50 50 Z" fill={p.base} stroke={p.dark} strokeWidth="0.9" strokeOpacity="0.35" />
          <path d="M50 46 C 48.5 34, 49 22, 50 12" stroke={p.dark} strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
          <path d="M42 34 C 40 28, 41 22, 44 17" stroke={p.light} strokeWidth="1.1" strokeLinecap="round" opacity="0.85" fill="none" />
        </g>
      ))}
      {range(3).map((i) => (
        <g key={`o${i}`} transform={rot(i * 120)}>
          <path d="M50 50 C 33 43, 29 22, 50 1 C 71 22, 67 43, 50 50 Z" fill={p.base} stroke={p.dark} strokeWidth="0.9" strokeOpacity="0.35" />
          <path d="M50 46 C 51.5 32, 51 18, 50 6" stroke={p.dark} strokeWidth="3.4" strokeLinecap="round" opacity="0.5" fill="none" />
          <path d="M58 34 C 60 27, 59 20, 56 14" stroke={p.light} strokeWidth="1.1" strokeLinecap="round" opacity="0.85" fill="none" />
          <circle cx="45" cy="38" r="1" fill={p.dark} opacity="0.7" />
          <circle cx="55" cy="35" r="0.9" fill={p.dark} opacity="0.7" />
          <circle cx="46.5" cy="30" r="0.8" fill={p.dark} opacity="0.6" />
          <circle cx="53.5" cy="26" r="0.7" fill={p.dark} opacity="0.5" />
        </g>
      ))}
      {range(6).map((i) => (
        <g key={`s${i}`} transform={rot(i * 60 + 30)}>
          <path d="M50 50 Q 52 40 50 29" stroke="#8aa865" strokeWidth="1" fill="none" />
          <ellipse cx="50" cy="28" rx="1.7" ry="3" fill={p.accent ?? "#c2572b"} />
        </g>
      ))}
      <circle cx="50" cy="50" r="3.2" fill="#9bbf73" />
    </g>
  );
}

function DaisyShape({ p }: { p: Palette }) {
  return (
    <g>
      {range(14).map((i) => (
        <ellipse
          key={i}
          cx="50"
          cy="28.5"
          rx="5.4"
          ry="17.5"
          fill={p.base}
          stroke={p.dark}
          strokeWidth="0.9"
          transform={rot(i * (360 / 14))}
        />
      ))}
      <circle cx="50" cy="50" r="10" fill={p.accent ?? "#f3b63a"} />
      <circle cx="50" cy="50" r="6.5" fill="#e39a1e" opacity="0.55" />
      <circle cx="46.5" cy="46.5" r="2.2" fill="#fde9a8" opacity="0.8" />
    </g>
  );
}

function GerberaShape({ p }: { p: Palette }) {
  return (
    <g>
      {range(22).map((i) => (
        <ellipse key={`o${i}`} cx="50" cy="26" rx="3.9" ry="20" fill={p.base} stroke={p.dark} strokeWidth="0.7" transform={rot(i * (360 / 22))} />
      ))}
      {range(18).map((i) => (
        <ellipse key={`i${i}`} cx="50" cy="37" rx="2.6" ry="10" fill={p.light} transform={rot(i * 20 + 10)} />
      ))}
      <circle cx="50" cy="50" r="8.5" fill={p.accent ?? "#f2c14e"} />
      <circle cx="50" cy="50" r="4.5" fill={p.dark} opacity="0.55" />
    </g>
  );
}

function resolvePalette(kind: FlowerKind, colour?: string) {
  const palettes = flowerPalettes[kind];
  const name = colour && palettes[colour] ? colour : defaultColour[kind];
  return { name, palette: palettes[name] };
}

export function flowerSymbolId(kind: FlowerKind, colour?: string) {
  const { name } = resolvePalette(kind, colour);
  return `hd-${kind}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

/** Full SVG drawing of a flower head. Rendered once per colour inside <FlowerDefs />. */
export function FlowerShape({ kind, colour }: { kind: FlowerKind; colour?: string }) {
  const p = resolvePalette(kind, colour).palette;
  switch (kind) {
    case "sunflower":
      return <SunflowerShape p={p} />;
    case "rose":
      return <RoseShape p={p} />;
    case "tulip":
      return <TulipShape p={p} />;
    case "lily":
      return <LilyShape p={p} />;
    case "daisy":
      return <DaisyShape p={p} />;
    case "gerbera":
      return <GerberaShape p={p} />;
  }
}

/** Lightweight reference to a shared flower symbol, drawn in a 100 × 100 box. */
export function FlowerHead({ kind, colour }: { kind: FlowerKind; colour?: string }) {
  return <use href={`#${flowerSymbolId(kind, colour)}`} width="100" height="100" />;
}

export function LeafShape({ fill = "#6e8d5b", vein = "#a8c096" }: { fill?: string; vein?: string }) {
  return (
    <g>
      <path d="M0 0 C 9 -10, 28 -10, 40 0 C 28 10, 9 10, 0 0 Z" fill={fill} />
      <path d="M3 0 C 14 -1, 26 -1, 36 0" stroke={vein} strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </g>
  );
}
