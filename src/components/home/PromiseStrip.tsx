import { Flower } from "@/components/flowers/Flower";
import type { FlowerKind } from "@/components/flowers/heads";

const promises: Array<{ label: string; kind: FlowerKind; colour?: string }> = [
  { label: "Handmade to order", kind: "sunflower" },
  { label: "Never wilts or fades", kind: "lily", colour: "Magenta" },
  { label: "Fully customisable", kind: "gerbera", colour: "Sky blue" },
  { label: "Bulk & return gifts", kind: "tulip", colour: "Purple" },
  { label: "Ships PAN India", kind: "rose", colour: "Red" },
  { label: "Packed with love", kind: "daisy" },
];

export function PromiseStrip() {
  const row = [...promises, ...promises];
  return (
    <div className="relative -mt-6 rotate-[-1.2deg] bg-berry-500 py-4 text-cream-50 shadow-lift">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center motion-safe-only">
          {row.map((p, i) => (
            <span key={i} className="flex items-center gap-3 px-6 font-display text-2xl italic" aria-hidden={i >= promises.length}>
              <span className="grid size-9 place-items-center rounded-full bg-cream-50">
                <Flower kind={p.kind} colour={p.colour} size={28} />
              </span>
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
