import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { BouquetBuilder } from "@/components/builder/BouquetBuilder";
import { Accent } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/home/FaqList";

export const metadata: Metadata = {
  title: "Design your own bouquet",
  description: "Build a custom handmade bouquet — choose sunflowers, roses, tulips, lilies, daisies and gerberas, pick your wrap and ribbon, and send the design to Hollydaff.",
  alternates: { canonical: "/custom-bouquet" },
};

const builderFaqs = [
  {
    group: "Orders" as const,
    question: "Will my bouquet look exactly like the preview?",
    answer: "The preview is a drawing to help you plan colours and flowers. Your real bouquet is hand-twisted from chenille stems and arranged to match your choices — often with extra little details.",
  },
  {
    group: "Orders" as const,
    question: "Can I add something that isn't in the builder?",
    answer: "Yes! Chocolates, name tags, fairy lights, a different flower or a Pinterest reference — mention it when you send the design and we'll work it in.",
  },
  {
    group: "Orders" as const,
    question: "How much will it cost?",
    answer: "It depends on the number of stems, flower types and extras. Send us the design and we'll reply with the price and delivery timeline before you pay.",
  },
];

export default function CustomBouquetPage() {
  return (
    <>
      <PageHero
        eyebrow="Build-a-bouquet"
        title={
          <>
            Design your <Accent>dream</Accent> bouquet
          </>
        }
        description="Choose your blooms, colours, wrap and ribbon, and watch your bouquet come together. When it's perfect, send it to us — we'll handcraft it for you."
        crumbs={[{ label: "Design a bouquet" }]}
      />
      <div className="container-page py-14 sm:py-20">
        <BouquetBuilder />
      </div>
      <section className="container-page max-w-4xl pb-12">
        <FaqList items={builderFaqs} />
      </section>
    </>
  );
}
