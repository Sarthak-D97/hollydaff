import type { CSSProperties } from "react";
import { Petal } from "./Decor";

const petals = [
  { left: "6%", size: 16, color: "#f5d0c9", duration: 16, delay: 0, x: 80, r: 380 },
  { left: "18%", size: 12, color: "#fbe4a6", duration: 19, delay: 4, x: -60, r: -300 },
  { left: "31%", size: 18, color: "#e4daf5", duration: 22, delay: 9, x: 50, r: 460 },
  { left: "47%", size: 13, color: "#f5d0c9", duration: 18, delay: 2, x: -90, r: 340 },
  { left: "62%", size: 17, color: "#ecb0a8", duration: 21, delay: 7, x: 70, r: -420 },
  { left: "74%", size: 12, color: "#d4ebf7", duration: 17, delay: 11, x: -40, r: 300 },
  { left: "86%", size: 15, color: "#fbe4a6", duration: 20, delay: 5, x: 60, r: 400 },
  { left: "94%", size: 11, color: "#f5d0c9", duration: 15, delay: 13, x: -70, r: -360 },
];

export function FloatingPetals({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal-drift absolute -top-8 block"
          style={
            {
              left: p.left,
              color: p.color,
              "--drift-duration": `${p.duration}s`,
              "--drift-delay": `${p.delay}s`,
              "--drift-x": `${p.x}px`,
              "--drift-r": `${p.r}deg`,
            } as CSSProperties
          }
        >
          <Petal size={p.size} />
        </span>
      ))}
    </div>
  );
}
