import { Flower } from "@/components/flowers/Flower";
import type { FlowerKind } from "@/components/flowers/heads";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const steps: Array<{ title: string; body: string; kind: FlowerKind; colour?: string; tint: string }> = [
  { title: "Choose or design", body: "Add pieces to your gift bag, or design a custom bouquet in minutes.", kind: "daisy", tint: "bg-sun-200/70" },
  { title: "Send us your order", body: `One tap copies your order message — paste it in our Instagram chat @${site.instagram.handle}.`, kind: "tulip", colour: "Pink", tint: "bg-petal-100" },
  { title: "Confirm & pay", body: "We confirm the design, price and delivery date. Prepaid orders only.", kind: "gerbera", colour: "Orange", tint: "bg-cream-200" },
  { title: "Handmade & shipped", body: "Your blooms are twisted by hand, packed with love and sent your way.", kind: "sunflower", tint: "bg-leaf-200/60" },
];

export function HowToOrder() {
  return (
    <section className="container-page py-24 sm:py-32" id="how-to-order">
      <SectionHeading
        eyebrow="How to order"
        title={
          <>
            Four easy steps to <Accent>forever</Accent>
          </>
        }
      />
      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <span className="absolute left-[12%] right-[12%] top-12 hidden border-t-2 border-dashed border-petal-300 lg:block" aria-hidden />
        {steps.map((step, i) => (
          <li key={step.title} className="relative text-center">
            <div className={`relative mx-auto grid size-24 place-items-center rounded-full ${step.tint} shadow-soft ring-8 ring-cream-100`}>
              <Flower kind={step.kind} colour={step.colour} size={64} fuzzy />
              <span className="absolute -right-1 -top-1 grid size-8 place-items-center rounded-full bg-berry-500 text-sm font-semibold text-white">{i + 1}</span>
            </div>
            <h3 className="mt-6 font-display text-3xl text-cocoa-900">{step.title}</h3>
            <p className="mx-auto mt-2 max-w-xs leading-relaxed text-cocoa-600">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
