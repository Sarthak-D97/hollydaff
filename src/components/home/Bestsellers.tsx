import { ArrowRight } from "lucide-react";
import { getBestsellers } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Bestsellers() {
  const items = getBestsellers();
  return (
    <section className="container-page py-24 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow="Most loved"
          title={
            <>
              Our <Accent>bestsellers</Accent>
            </>
          }
          description="The pieces our Instagram family can't stop ordering — hover to watch them in motion."
        />
        <ButtonLink href="/shop" variant="secondary">
          View all products <ArrowRight className="size-4" />
        </ButtonLink>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {items.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 4) * 0.07}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
