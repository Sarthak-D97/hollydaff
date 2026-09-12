import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

/** Four-point sparkle, like the ones on the Hollydaff logo. */
export function Sparkle({ size = 20, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden {...rest}>
      <path d="M12 0 C 12.9 7, 17 11.1, 24 12 C 17 12.9, 12.9 17, 12 24 C 11.1 17, 7 12.9, 0 12 C 7 11.1, 11.1 7, 12 0 Z" fill="currentColor" />
    </svg>
  );
}

export function Heart({ size = 20, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden {...rest}>
      <path
        d="M12 21 C 5 15.4, 1.5 11.6, 1.5 7.4 C 1.5 4.3, 3.9 2, 6.8 2 C 8.9 2, 10.8 3.1, 12 4.9 C 13.2 3.1, 15.1 2, 17.2 2 C 20.1 2, 22.5 4.3, 22.5 7.4 C 22.5 11.6, 19 15.4, 12 21 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Fine line-art botanical sprig, echoing the stems drawn around the logo. */
export function Sprig({ size = 120, strokeWidth = 1.3, ...rest }: IconProps & { strokeWidth?: number }) {
  const blossom = (cx: number, cy: number, r: number) => (
    <g>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx={cx} cy={cy - r} rx={r * 0.46} ry={r * 0.72} transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.26} />
    </g>
  );
  return (
    <svg viewBox="0 0 64 200" width={typeof size === "number" ? size * 0.32 : undefined} height={size} fill="none" aria-hidden {...rest}>
      <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 199 C 28 170, 32 140, 30 110 C 28 80, 34 50, 32 24" />
        <path d="M29 172 C 18 170, 10 162, 8 152 C 19 153, 27 161, 29 172 Z" />
        <path d="M29.5 165 C 22 162, 16 158, 12 154" />
        <path d="M31 150 C 42 148, 50 140, 52 130 C 41 131, 33 139, 31 150 Z" />
        <path d="M31.5 143 C 38 140, 44 136, 48 133" />
        <path d="M30 124 C 19 122, 11 114, 9 104 C 20 105, 28 113, 30 124 Z" />
        <path d="M30 100 C 41 98, 49 90, 51 80 C 40 81, 32 89, 30 100 Z" />
        <path d="M31 76 C 22 74, 16 68, 15 60 C 24 61, 30 67, 31 76 Z" />
        <path d="M31 62 C 24 55, 18 50, 12 47" />
        <path d="M33 46 C 38 40, 44 36, 50 34" />
        <path d="M50 34 C 49 28, 52 24, 55.5 25 C 57.5 29, 55 33, 50 34 Z" />
        {blossom(11, 44, 6)}
        {blossom(32, 17, 8)}
      </g>
    </svg>
  );
}

/** A single soft petal, used for the drifting petals and small accents. */
export function Petal({ size = 18, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 20 26" width={size} height={size} aria-hidden {...rest}>
      <path d="M10 0 C 17 6, 19 15, 10 26 C 1 15, 3 6, 10 0 Z" fill="currentColor" />
      <path d="M10 5 C 11 11, 11 16, 10 22" stroke="white" strokeOpacity="0.45" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Hand-drawn curvy arrow for handwritten annotations. */
export function ScribbleArrow({ size = 64, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 80 50" width={size} height={typeof size === "number" ? size * 0.62 : undefined} fill="none" aria-hidden {...rest}>
      <path d="M4 6 C 20 2, 44 6, 56 20 C 64 29, 66 36, 66 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M57 36 L66 45 L73 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
