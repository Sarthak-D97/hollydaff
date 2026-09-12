import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { images } from "@/data/media";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Accent } from "@/components/ui/SectionHeading";
import { Flower } from "@/components/flowers/Flower";

const uses = [
  "Return gifts for birthdays, baby showers & weddings",
  "Exhibitions, stalls & pop-up markets",
  "Corporate, festive & team gifting",
  "Reseller packs to start your own small business",
];

export function BulkCta() {
  return (
    <section className="container-page py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-leaf-700 text-cream-50">
        <div className="grid lg:grid-cols-2">
          <div className="relative z-10 p-8 sm:p-14">
            <p className="eyebrow text-leaf-200">✿ Bulk orders & gifting</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[1.02] sm:text-6xl">
              Blooms by the <Accent className="text-sun-300">dozen</Accent>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream-100/85">
              Whether it&apos;s a few dozen mini pots or a box full of keychains, we craft bulk orders with the same care as a single bouquet — and ship them wherever
              you are.
            </p>
            <ul className="mt-8 space-y-3">
              {uses.map((use) => (
                <li key={use} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-cream-50 text-leaf-700">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {use}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-cream-100/75">Parcels have reached {site.shippedTo.join(", ")}.</p>
            <ButtonLink href="/bulk-orders" size="lg" variant="light" className="mt-8">
              Plan a bulk order <ArrowRight className="size-5" />
            </ButtonLink>
          </div>
          <div className="relative min-h-[26rem] lg:min-h-full">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-3 sm:p-5">
              <div className="relative row-span-2 overflow-hidden rounded-[1.75rem]">
                <Image src={images["bulk-pots-floor"].src} alt="Rows of handmade mini pots ready for a bulk order" fill sizes="(min-width: 1024px) 25vw, 50vw" placeholder="blur" blurDataURL={images["bulk-pots-floor"].blurDataURL} className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem]">
                <Image src={images["bulk-sunflowers"].src} alt="Box of handmade sunflower heads" fill sizes="(min-width: 1024px) 25vw, 50vw" placeholder="blur" blurDataURL={images["bulk-sunflowers"].blurDataURL} className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem]">
                <Image src={images["bulk-packing"].src} alt="Bulk order being packed into a box" fill sizes="(min-width: 1024px) 25vw, 50vw" placeholder="blur" blurDataURL={images["bulk-packing"].blurDataURL} className="object-cover" />
              </div>
            </div>
            <span className="absolute -left-6 top-10 hidden rotate-[-8deg] rounded-2xl bg-cream-50 px-4 py-3 font-hand text-2xl text-cocoa-800 shadow-lift lg:block">
              first international order → UK! <Flower kind="sunflower" size={22} className="inline-block align-middle" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
