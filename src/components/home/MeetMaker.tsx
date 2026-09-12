import Image from "next/image";
import { images } from "@/data/media";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Accent } from "@/components/ui/SectionHeading";
import { Sprig, Sparkle } from "@/components/flowers/Decor";
import { Flower } from "@/components/flowers/Flower";

export function MeetMaker() {
  const portrait = images["maker-portrait"];
  const crafting = images["process-baskets"];
  return (
    <section className="container-page py-24 sm:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="arch relative aspect-[4/5] overflow-hidden border-[10px] border-cream-50 shadow-lift">
            <Image src={portrait.src} alt={`${site.founder}, the maker behind Hollydaff, holding a sunflower basket`} fill sizes="(min-width: 1024px) 40vw, 90vw" placeholder="blur" blurDataURL={portrait.blurDataURL} className="object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-4 w-40 rotate-6 overflow-hidden rounded-3xl border-[6px] border-cream-50 shadow-lift sm:-right-12 sm:w-48">
            <div className="relative aspect-[4/5]">
              <Image src={crafting.src} alt="Crafting mini flower baskets by hand" fill sizes="200px" placeholder="blur" blurDataURL={crafting.blurDataURL} className="object-cover" />
            </div>
          </div>
          <Sprig size={200} className="absolute -left-14 top-10 hidden text-cocoa-300 sm:block" />
          <Sparkle size={20} className="absolute -right-6 top-8 text-sun-400" />
          <span className="absolute -left-4 bottom-16 rotate-[-10deg] rounded-full bg-cream-50 px-4 py-2 font-hand text-2xl text-berry-500 shadow-soft">
            the creator & the creation
          </span>
        </div>

        <div>
          <p className="eyebrow text-berry-600">✿ Meet the maker</p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-[1.02] text-cocoa-900 sm:text-6xl">
            Hi, I&apos;m {site.founder} <Flower kind="sunflower" size={46} className="inline-block align-baseline" />
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-cocoa-600">
            <p>
              Hollydaff began with a bundle of fuzzy pipe cleaners and a simple wish — to make flowers that could hold a feeling{" "}
              <Accent>forever</Accent>.
            </p>
            <p>
              Today every bouquet, basket, mini pot and keychain is still twisted, shaped and packed by hand in {site.location.city}. Some are
              made for birthdays and anniversaries, some for a stall full of return gifts, and some travel all the way to another country — but
              each one gets the same patience and love.
            </p>
            <p>Thank you for trusting a small business. Every order, message and story you share keeps this little garden growing.</p>
          </div>
          <p className="mt-6 font-hand text-3xl text-cocoa-800">— {site.founder}, Hollydaff</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/about">Read our story</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Say hello
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
