import type { Metadata } from "next";
import { products } from "@/data/products";
import { PageHero } from "@/components/layout/PageHero";
import { CategoryTabs } from "@/components/product/CategoryTabs";
import { ProductCard } from "@/components/product/ProductCard";
import { Accent } from "@/components/ui/SectionHeading";
import { BuilderStrip } from "@/components/product/BuilderStrip";

export const metadata: Metadata = {
  title: "Shop handmade forever flowers",
  description:
    "Shop handmade pipe-cleaner bouquets, flower baskets, mini pots, keychains, car hangings and gifts. Every piece is customisable and ships across India.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="The collection"
        title={
          <>
            Shop <Accent>forever</Accent> flowers
          </>
        }
        description="Every design is handmade to order and can be customised — colours, flowers, wraps and names. Add your favourites to the gift bag and send us your order in one tap."
        crumbs={[{ label: "Shop" }]}
      />
      <div className="container-page py-12 sm:py-16">
        <CategoryTabs />
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 4} />
          ))}
        </div>
      </div>
      <BuilderStrip />
    </>
  );
}
