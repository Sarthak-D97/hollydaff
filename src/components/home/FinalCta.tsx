import { ArrowRight } from "lucide-react";
import { ButtonExternal, ButtonLink } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/Icons";
import { Flower } from "@/components/flowers/Flower";
import { Sparkle } from "@/components/flowers/Decor";
import { site } from "@/data/site";

export function FinalCta({ title = "Ready to gift a bloom that lasts forever?", description = "Pick a favourite, design your own, or just say hi — we reply to every message." }: { title?: string; description?: string }) {
  return (
    <section className="container-page pt-12">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-berry-500 px-6 py-16 text-center text-cream-50 sm:px-12 sm:py-20">
        <Flower kind="sunflower" size={140} className="absolute -left-10 -top-10 opacity-90 animate-sway-slow" fuzzy />
        <Flower kind="lily" colour="White" size={120} className="absolute -bottom-10 -right-6 opacity-90 animate-sway" fuzzy />
        <Flower kind="daisy" size={60} className="absolute bottom-8 left-[12%] hidden opacity-80 sm:block" />
        <Flower kind="rose" colour="Blush pink" size={70} className="absolute right-[14%] top-8 hidden opacity-80 sm:block" />
        <Sparkle size={18} className="absolute left-[30%] top-10 text-sun-300" />
        <Sparkle size={12} className="absolute bottom-12 right-[32%] text-cream-50" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-5xl font-medium leading-[1.02] sm:text-6xl">{title}</h2>
          <p className="mt-5 text-lg text-cream-100/90">{description}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/shop" size="lg" variant="light">
              Shop now <ArrowRight className="size-5" />
            </ButtonLink>
            <ButtonExternal href={site.instagram.dm} size="lg" className="bg-cocoa-900 hover:bg-cocoa-800">
              <InstagramIcon size={20} /> Message @{site.instagram.handle}
            </ButtonExternal>
          </div>
        </div>
      </div>
    </section>
  );
}
