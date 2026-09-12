import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { AutoplayVideo } from "@/components/media/AutoplayVideo";
import { Flower } from "@/components/flowers/Flower";
import { Sprig } from "@/components/flowers/Decor";
import { FinalCta } from "@/components/home/FinalCta";
import { images, videos } from "@/data/media";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our story",
  description: `Meet ${site.founder}, the maker behind Hollydaff — handmade pipe-cleaner flowers twisted petal by petal in ${site.location.city}, India.`,
  alternates: { canonical: "/about" },
};

const craftSteps = [
  { title: "Twist", body: "Soft chenille stems are bent, looped and twisted into petals, leaves and stems.", image: "craft-desk" as const },
  { title: "Shape", body: "Petals are layered into sunflowers, lilies, roses and tulips — each shaped by hand.", image: "maker-crafting" as const },
  { title: "Arrange", body: "Blooms are gathered into bouquets, pots and baskets with wraps, ribbons and pearls.", image: "process-baskets" as const },
  { title: "Pack", body: "Every order is sleeved, cushioned and boxed so it arrives picture-perfect.", image: "bulk-packing" as const },
];

const values = [
  { kind: "sunflower" as const, title: "Joy in every piece", body: "Flowers should make people smile — today, and every time they see them after." },
  { kind: "lily" as const, colour: "Lilac", title: "Made to last", body: "No wilting and no waste: a gift that becomes a keepsake instead of a memory." },
  { kind: "rose" as const, colour: "Blush pink", title: "Honest & personal", body: "Real photos, real reviews, and a real person replying to your messages." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Handmade with <Accent>heart</Accent>
          </>
        }
        description="Hollydaff is a small, handmade flower studio from Ranchi — turning fuzzy pipe cleaners into bouquets, baskets and keepsakes that bloom forever."
        crumbs={[{ label: "Our story" }]}
      />

      <section className="container-page py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-cream-50 shadow-lift">
              <Image src="/brand/hollydaff-logo.jpg" alt="The Hollydaff logo illustration — the founder holding a basket of flowers" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </div>
            <Sprig size={180} className="absolute -right-10 bottom-4 text-cocoa-300" />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="How it started"
              title={
                <>
                  A bundle of pipe cleaners &amp; a <Accent>big dream</Accent>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-cocoa-600">
              <p>
                Hollydaff started with a bundle of colourful chenille stems, a lot of patience and a wish to make flowers that last. Today it&apos;s a
                small handmade studio in {site.location.city}, making bouquets, baskets, mini pots and keepsakes for customers across India — and
                even abroad.
              </p>
              <p>
                The promise is simple: flowers that never wilt, made by hand, just for you. From a single rose to boxes of return gifts and our
                first international bulk order, every piece is made the same way — <Accent>one petal at a time</Accent>.
              </p>
              <p>
                Thank you to the {site.stats.community} people who follow along on Instagram, and to every customer who trusted a small business
                with their special moments.
              </p>
            </div>
            <p className="mt-6 font-hand text-3xl text-cocoa-800">— {site.founder}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream-200/60 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The craft"
            title={
              <>
                From stem to <Accent>bloom</Accent>
              </>
            }
            description="No machines and no moulds — just hands, a glue gun and a lot of patience."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {craftSteps.map((step, i) => (
              <figure key={step.title} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-soft">
                  <Image src={images[step.image].src} alt={step.body} fill sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw" placeholder="blur" blurDataURL={images[step.image].blurDataURL} className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-full bg-cream-50 font-display text-xl font-semibold text-berry-600">{i + 1}</span>
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-3xl text-cocoa-900">{step.title}</p>
                  <p className="mt-1 leading-relaxed text-cocoa-600">{step.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What we believe"
              title={
                <>
                  Small business, <Accent>big love</Accent>
                </>
              }
            />
            <ul className="mt-10 space-y-6">
              {values.map((v) => (
                <li key={v.title} className="flex gap-5">
                  <span className="grid size-16 shrink-0 place-items-center rounded-full bg-cream-50 shadow-soft">
                    <Flower kind={v.kind} colour={v.colour} size={46} fuzzy />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl text-cocoa-900">{v.title}</h3>
                    <p className="mt-1 leading-relaxed text-cocoa-600">{v.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[1.75rem] bg-cocoa-900 shadow-lift">
              <div className="aspect-[9/16]">
                <AutoplayVideo video={videos["reel-crafting-basket"]} label="Arranging a flower basket by hand" />
              </div>
            </div>
            <div className="mt-12 overflow-hidden rounded-[1.75rem] bg-cocoa-900 shadow-lift">
              <div className="aspect-[9/16]">
                <AutoplayVideo video={videos["reel-packing"]} label="Packing a bulk order" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title="Let's make something beautiful together" description="Tell us about the person, the occasion and the colours — we'll take care of the rest." />
    </>
  );
}
