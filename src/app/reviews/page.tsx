import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { TestimonialCard } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";
import { Accent } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer reviews",
  description: "Real messages from Hollydaff customers about our handmade bouquets, mini pots, keychains and bulk orders.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Love notes"
        title={
          <>
            Kind words from <Accent>kind people</Accent>
          </>
        }
        description="These are real messages our customers sent after receiving their orders. You can find the originals in the “Reviews” highlight on our Instagram."
        crumbs={[{ label: "Reviews" }]}
      >
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
          {[
            { value: site.stats.reelViews, label: "reel views" },
            { value: site.stats.likes, label: "likes on our posts" },
            { value: site.stats.community, label: "Instagram followers" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-cream-50/80 px-3 py-4 shadow-sm">
              <p className="font-display text-3xl font-semibold text-cocoa-900 sm:text-4xl">{s.value}</p>
              <p className="text-xs text-cocoa-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHero>
      <section className="container-page py-16 sm:py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.quote} t={t} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-cocoa-500">
          Customer names are kept private. Sent us a message you&apos;d like featured? Tag @{site.instagram.handle}.
        </p>
      </section>
      <FinalCta />
    </>
  );
}
