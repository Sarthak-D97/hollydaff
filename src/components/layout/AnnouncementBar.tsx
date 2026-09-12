import { Flower } from "@/components/flowers/Flower";

const messages = [
  "Handmade to order, one petal at a time",
  "Custom & bulk orders welcome",
  "Shipping across India",
  "DM @hollydaff.co to order",
  "Flowers that never wilt",
];

export function AnnouncementBar() {
  const row = [...messages, ...messages];
  return (
    <div className="relative overflow-hidden bg-cocoa-900 text-cream-100">
      <div className="flex w-max animate-marquee items-center py-2 motion-safe-only">
        {row.map((message, i) => (
          <span key={i} className="flex items-center gap-4 px-4 text-[0.78rem] tracking-wide" aria-hidden={i >= messages.length}>
            <Flower kind={i % 2 ? "daisy" : "sunflower"} size={16} />
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
