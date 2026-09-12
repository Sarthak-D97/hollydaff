import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FaqList } from "@/components/home/FaqList";
import { FinalCta } from "@/components/home/FinalCta";
import { Accent } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ, ordering & shipping",
  description: "How Hollydaff handmade flowers are made, how to order and customise, payment, and shipping across India.",
  alternates: { canonical: "/faq" },
};

const groups = ["Flowers", "Orders", "Shipping"] as const;

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Help"
        title={
          <>
            Questions, <Accent>answered</Accent>
          </>
        }
        description="Everything about our forever flowers, ordering, payment and shipping. Can't find your answer? Message us on Instagram."
        crumbs={[{ label: "FAQ" }]}
      />
      <div className="container-page max-w-4xl space-y-14 py-16 sm:py-20">
        {groups.map((group) => (
          <section key={group} id={group.toLowerCase()} className="scroll-mt-28">
            <h2 className="mb-5 font-display text-4xl text-cocoa-900">{group}</h2>
            <FaqList items={faqs.filter((f) => f.group === group)} />
          </section>
        ))}
      </div>
      <FinalCta title="Still curious?" description="Send us a message — we're happy to help you choose the perfect piece." />
    </>
  );
}
