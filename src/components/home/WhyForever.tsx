import { Flower } from "@/components/flowers/Flower";
import type { FlowerKind } from "@/components/flowers/heads";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons: Array<{ title: string; body: string; kind: FlowerKind; colour?: string; tint: string }> = [
  {
    title: "They never wilt",
    body: "No water, no fading petals, no pollen. Your blooms look as fresh on day 500 as they did on day one.",
    kind: "sunflower",
    tint: "bg-sun-200/60",
  },
  {
    title: "Twisted by hand",
    body: "Every petal is shaped from soft chenille stems, so each piece is a little different — and entirely handmade.",
    kind: "tulip",
    colour: "Pink",
    tint: "bg-petal-100",
  },
  {
    title: "Made just for you",
    body: "Pick colours, flowers, wraps and notes — or send a Pinterest picture and we'll recreate it for you.",
    kind: "lily",
    colour: "Lilac",
    tint: "bg-lilac-200/70",
  },
  {
    title: "Packed with love",
    body: "Sleeved, cushioned and boxed with care, then shipped across India — and even abroad.",
    kind: "gerbera",
    colour: "Sky blue",
    tint: "bg-bluebell-200/70",
  },
];

export function WhyForever() {
  return (
    <section className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="Why forever flowers"
        title={
          <>
            Real feelings, <Accent>everlasting</Accent> blooms
          </>
        }
        description="Fresh flowers are gone in a week. Ours stay on the shelf, the desk and the dashboard — a keepsake of the moment they were given."
      />
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <Reveal key={reason.title} delay={i * 0.08} className="group relative overflow-hidden rounded-[2rem] border border-cocoa-800/10 bg-cream-50 p-7 transition hover:-translate-y-1 hover:shadow-lift">
            <div className={`grid size-20 place-items-center rounded-full ${reason.tint} transition duration-500 group-hover:rotate-12`}>
              <Flower kind={reason.kind} colour={reason.colour} size={58} fuzzy />
            </div>
            <h3 className="mt-6 font-display text-3xl font-medium text-cocoa-900">{reason.title}</h3>
            <p className="mt-3 leading-relaxed text-cocoa-600">{reason.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
