import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Flower } from "@/components/flowers/Flower";

export function BuilderStrip() {
  return (
    <section className="container-page pb-8">
      <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-petal-100 px-8 py-10 text-center md:flex-row md:text-left">
        <div className="flex -space-x-3" aria-hidden>
          <Flower kind="sunflower" size={64} className="animate-sway" />
          <Flower kind="lily" colour="Magenta" size={60} className="animate-sway-slow" />
          <Flower kind="tulip" colour="Purple" size={54} className="animate-sway" />
          <Flower kind="rose" colour="Red" size={50} className="animate-sway-slow" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl text-cocoa-900 sm:text-4xl">Can&apos;t find exactly what you want?</h2>
          <p className="mt-1 text-cocoa-600">Design your own bouquet — pick flowers, colours, wrap and ribbon — and send it straight to us.</p>
        </div>
        <ButtonLink href="/custom-bouquet" size="lg">
          Design a bouquet <ArrowRight className="size-5" />
        </ButtonLink>
      </div>
    </section>
  );
}
