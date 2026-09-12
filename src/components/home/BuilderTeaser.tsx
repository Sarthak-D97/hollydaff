import { ArrowRight } from "lucide-react";
import { BouquetPreview } from "@/components/builder/BouquetPreview";
import type { BouquetDesign } from "@/components/builder/bouquet-options";
import { ButtonLink } from "@/components/ui/Button";
import { Accent } from "@/components/ui/SectionHeading";
import { Sparkle } from "@/components/flowers/Decor";
import { Flower } from "@/components/flowers/Flower";

const sample: BouquetDesign = {
  stems: [
    { id: 1, kind: "sunflower", colour: "Golden yellow" },
    { id: 2, kind: "lily", colour: "Magenta" },
    { id: 3, kind: "rose", colour: "Blush pink" },
    { id: 4, kind: "tulip", colour: "Purple" },
    { id: 5, kind: "gerbera", colour: "Sky blue" },
    { id: 6, kind: "daisy", colour: "White" },
    { id: 7, kind: "rose", colour: "Red" },
    { id: 8, kind: "daisy", colour: "Lilac" },
    { id: 9, kind: "tulip", colour: "Pink" },
  ],
  wrap: "Blush pink",
  ribbon: "Black satin",
  greenery: true,
  pearls: true,
  note: "for you ♡",
};

const steps = [
  { title: "Pick your blooms", body: "Sunflowers, roses, tulips, lilies, daisies & gerberas in the colours you love." },
  { title: "Choose wrap & ribbon", body: "Blush, pearl, black, kraft or lilac wrap — plus greenery, pearls and a note card." },
  { title: "Send it to us", body: "Your design becomes a ready-made message. We confirm, craft and deliver." },
];

export function BuilderTeaser() {
  return (
    <section className="relative overflow-hidden bg-petal-100 py-24 sm:py-32">
      <Sparkle size={26} className="absolute left-[8%] top-16 text-sun-400" />
      <Sparkle size={16} className="absolute right-[12%] top-24 text-berry-400" />
      <Flower kind="daisy" size={70} className="absolute -left-6 bottom-10 opacity-70 animate-sway-slow" />
      <Flower kind="lily" colour="Sky blue" size={90} className="absolute -right-8 top-10 hidden opacity-80 animate-sway md:block" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-cream-50/70 blur-2xl" aria-hidden />
          <BouquetPreview design={sample} className="relative w-full drop-shadow-[0_30px_40px_rgb(60_45_40/0.18)]" />
        </div>
        <div>
          <p className="eyebrow text-berry-600">✿ Build-a-bouquet</p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-[1.02] text-cocoa-900 sm:text-6xl">
            Design a bouquet that&apos;s <Accent>all yours</Accent>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-cocoa-600">
            Almost every Hollydaff piece is made to order, so why not make it exactly how you imagine it? Play with flowers and colours, see it
            come together, then send it straight to us.
          </p>
          <ol className="mt-8 space-y-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cream-50 font-display text-xl font-semibold text-berry-600 shadow-sm">{i + 1}</span>
                <div>
                  <p className="font-medium text-cocoa-900">{step.title}</p>
                  <p className="text-cocoa-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink href="/custom-bouquet" size="lg" className="mt-10">
            Start designing <ArrowRight className="size-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
