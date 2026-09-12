import { Flower } from "./Flower";
import { cn } from "@/lib/cn";

export function FlowerDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4 text-cocoa-300", className)} aria-hidden>
      <span className="h-px w-16 bg-current sm:w-28" />
      <Flower kind="daisy" size={18} />
      <Flower kind="sunflower" size={26} />
      <Flower kind="daisy" colour="Lilac" size={18} />
      <span className="h-px w-16 bg-current sm:w-28" />
    </div>
  );
}
