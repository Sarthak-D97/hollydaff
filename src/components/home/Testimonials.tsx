import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Flower } from "@/components/flowers/Flower";
import { cn } from "@/lib/cn";

export function TestimonialCard({ t, className }: { t: Testimonial; className?: string }) {
  return (
    <figure className={cn("relative flex h-full flex-col rounded-[1.75rem] border border-cocoa-800/10 bg-cream-50 p-6 shadow-soft", className)}>
      <Quote className="absolute right-5 top-5 size-8 text-petal-200" />
      <div className="flex gap-0.5 text-sun-500" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      {t.highlight ? <p className="mt-4 font-display text-2xl leading-snug text-cocoa-900">“{t.highlight}”</p> : null}
      <blockquote className="mt-3 flex-1 leading-relaxed text-cocoa-600">{t.quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-cocoa-800/10 pt-4 text-sm">
        <span className="grid size-9 place-items-center rounded-full bg-petal-100">
          <Flower kind="rose" colour="Blush pink" size={26} />
        </span>
        <span>
          <span className="block font-medium text-cocoa-900">Verified customer</span>
          <span className="block text-cocoa-500">{t.context}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const rowA = testimonials.slice(0, 6);
  const rowB = testimonials.slice(6, 12);
  return (
    <section className="overflow-hidden bg-cream-200/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Love notes"
          title={
            <>
              Messages that make us <Accent>bloom</Accent>
            </>
          }
          description="Real words from real customers — straight from our Instagram DMs."
        />
      </div>
      <div className="mt-14 space-y-5">
        {[rowA, rowB].map((row, r) => (
          <div key={r} className="group flex overflow-hidden">
            <ul className={cn("flex w-max gap-5 pr-5 motion-safe-only group-hover:[animation-play-state:paused]", r === 0 ? "animate-marquee" : "animate-marquee-reverse")}>
              {[...row, ...row].map((t, i) => (
                <li key={i} className="w-[20rem] shrink-0 sm:w-[24rem]" aria-hidden={i >= row.length}>
                  <TestimonialCard t={t} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <ButtonLink href="/reviews" variant="secondary">
          Read all reviews
        </ButtonLink>
      </div>
    </section>
  );
}
