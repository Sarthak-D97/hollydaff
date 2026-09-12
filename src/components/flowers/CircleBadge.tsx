import { Heart } from "./Decor";
import { cn } from "@/lib/cn";

/** Rotating circular text badge inspired by the "Handmade with heart" ring on the logo. */
export function CircleBadge({ text = "HANDMADE WITH HEART • FLOWERS • BOUQUETS • JOY • ", className }: { text?: string; className?: string }) {
  return (
    <div className={cn("size-28", className)}>
      <div className="relative grid size-full place-items-center rounded-full bg-cream-50 shadow-soft">
        <svg viewBox="0 0 120 120" className="absolute inset-0 size-full motion-safe-only" style={{ animation: "hd-spin 26s linear infinite" }} aria-hidden>
          <defs>
            <path id="hd-circle-path" d="M60 60 m -46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0" />
          </defs>
          <text fontSize="9.6" letterSpacing="2.1" fill="#503e37" fontFamily="var(--font-jost), sans-serif">
            <textPath href="#hd-circle-path">{text}</textPath>
          </text>
        </svg>
        <Heart size={26} className="text-petal-400" />
      </div>
    </div>
  );
}
