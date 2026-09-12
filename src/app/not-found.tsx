import { ButtonLink } from "@/components/ui/Button";
import { Flower } from "@/components/flowers/Flower";

export default function NotFound() {
  return (
    <section className="paper">
      <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <div className="flex items-end gap-2" aria-hidden>
          <Flower kind="tulip" colour="Pink" size={70} className="animate-sway" />
          <span className="font-display text-[8rem] leading-none text-cocoa-900 sm:text-[11rem]">4</span>
          <Flower kind="sunflower" size={130} className="mb-4 animate-sway-slow" fuzzy />
          <span className="font-display text-[8rem] leading-none text-cocoa-900 sm:text-[11rem]">4</span>
          <Flower kind="lily" colour="Lilac" size={70} className="animate-sway" />
        </div>
        <h1 className="mt-6 font-display text-5xl text-cocoa-900">This page hasn&apos;t bloomed yet</h1>
        <p className="mt-3 max-w-md text-lg text-cocoa-600">The page you&apos;re looking for doesn&apos;t exist, but plenty of forever flowers do.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/shop" variant="secondary">
            Browse the shop
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
