import { faqs } from "@/data/faqs";
import { FaqList } from "./FaqList";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Flower } from "@/components/flowers/Flower";

export function FaqSection() {
  const picks = [faqs[0], faqs[2], faqs[3], faqs[4], faqs[6]];
  return (
    <section className="container-page py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Good to know"
            title={
              <>
                Questions, <Accent>answered</Accent>
              </>
            }
            description="Everything you need to know about our forever flowers, ordering and shipping."
          />
          <ButtonLink href="/faq" variant="secondary" className="mt-8">
            See all FAQs
          </ButtonLink>
          <div className="mt-10 hidden gap-2 lg:flex" aria-hidden>
            <Flower kind="lily" colour="Sky blue" size={70} className="animate-sway" />
            <Flower kind="sunflower" size={90} className="animate-sway-slow" />
            <Flower kind="tulip" colour="Red" size={64} className="animate-sway" />
          </div>
        </div>
        <FaqList items={picks} />
      </div>
    </section>
  );
}
