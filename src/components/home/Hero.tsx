import Image from "next/image";
import Link from "next/link";
import { preload } from "react-dom";
import { ArrowRight } from "lucide-react";
import { HeroBouquet } from "@/components/flowers/HeroBouquet";
import { FloatingPetals } from "@/components/flowers/FloatingPetals";
import { CircleBadge } from "@/components/flowers/CircleBadge";
import { Flower } from "@/components/flowers/Flower";
import { ScribbleArrow, Sparkle, Sprig } from "@/components/flowers/Decor";
import { AutoplayVideo } from "@/components/media/AutoplayVideo";
import { ButtonLink } from "@/components/ui/Button";
import { images, videos } from "@/data/media";
import { site } from "@/data/site";

export function Hero() {
  const video = videos["hero-montage"];
  preload(video.poster, { as: "image", fetchPriority: "high" });

  return (
    <section className="paper relative overflow-hidden">
      <FloatingPetals className="pointer-events-none absolute inset-0 overflow-hidden" />

      <div className="container-page relative grid items-center gap-16 pb-24 pt-10 sm:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pb-32 lg:pt-16">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-petal-200 bg-cream-50/85 py-1.5 pl-2 pr-4 text-sm text-cocoa-700 shadow-sm backdrop-blur">
            <Flower kind="sunflower" size={22} />
            Handmade in {site.location.city} · Shipping across India
          </p>

          <div className="relative">
            <h1 className="mt-7 font-display text-[3.3rem] font-medium leading-[0.95] tracking-tight text-cocoa-900 sm:text-7xl xl:text-[5.4rem]">
              Flowers that
              <br />
              bloom{" "}
              <span className="relative inline-block">
                <em className="italic text-berry-500">forever</em>
                <svg viewBox="0 0 220 18" className="absolute -bottom-2 left-0 w-full text-petal-300" aria-hidden preserveAspectRatio="none">
                  <path d="M3 12 C 50 4, 120 3, 217 9" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>
            <div className="pointer-events-none absolute -right-2 top-4 hidden flex-col items-end xl:flex" aria-hidden>
              <span className="-rotate-6 font-hand text-2xl text-berry-500">no water needed ♡</span>
              <ScribbleArrow size={58} className="mr-16 mt-1 rotate-[70deg] text-berry-400" />
            </div>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cocoa-600 sm:text-xl">
            Bouquets, flower baskets, mini pots and little keepsakes — twisted petal by petal from soft chenille stems, made just the way you
            want them and delivered with love.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/shop" size="lg">
              Shop the collection <ArrowRight className="size-5" />
            </ButtonLink>
            <ButtonLink href="/custom-bouquet" size="lg" variant="secondary">
              <Flower kind="daisy" size={22} /> Design your bouquet
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-cocoa-800/10 pt-7">
            {[
              { value: site.stats.reelViews, label: "views on our reels" },
              { value: site.stats.community, label: "people in our Insta family" },
              { value: "PAN India", label: "shipping, plus international" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-[1.7rem] font-semibold leading-tight lining-nums text-cocoa-900 sm:text-4xl">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-cocoa-500 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] sm:max-w-[29rem]">
          <div className="arch absolute -right-5 top-8 bottom-6 left-10 rotate-3 bg-petal-100" aria-hidden />
          <div className="arch relative aspect-[4/5.3] overflow-hidden border-[10px] border-cream-50 bg-petal-50 shadow-lift">
            <AutoplayVideo video={video} eager label="Handmade Hollydaff flowers" />
          </div>

          <HeroBouquet className="pointer-events-none absolute -bottom-14 -left-10 z-10 w-[64%] drop-shadow-[0_18px_24px_rgb(60_45_40/0.18)] sm:-left-24" />
          <CircleBadge className="absolute -right-3 -top-4 z-10 sm:-right-10" />
          <Sprig size={170} className="pointer-events-none absolute -right-14 bottom-28 hidden text-cocoa-300 sm:block" />
          <Sparkle size={22} className="absolute -left-8 top-24 text-sun-400" />
          <Sparkle size={14} className="absolute left-4 top-10 text-berry-400" />

          <Link
            href="/products/mini-flower-pots"
            className="group absolute -right-4 bottom-10 z-20 flex items-center gap-3 rounded-2xl bg-cream-50/95 p-2 pr-4 shadow-lift backdrop-blur transition hover:-translate-y-1 sm:-right-12"
          >
            <span className="relative size-14 overflow-hidden rounded-xl">
              <Image src={images["mini-pots-1"].src} alt="" fill sizes="56px" className="object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-sun-700">★ Bestseller</span>
              <span className="block font-display text-lg text-cocoa-900 group-hover:text-berry-600">Mini flower pots</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
