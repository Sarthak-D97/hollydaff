import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { PageHero } from "@/components/layout/PageHero";
import { CategoryTabs } from "@/components/product/CategoryTabs";
import { ProductCard } from "@/components/product/ProductCard";
import { BuilderStrip } from "@/components/product/BuilderStrip";
import { ButtonLink } from "@/components/ui/Button";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} — handmade & customisable`,
    description: category.description,
    alternates: { canonical: `/collections/${category.slug}` },
    openGraph: { images: [{ url: category.image.src, width: category.image.width, height: category.image.height, alt: category.imageAlt }] },
  };
}

export default async function CollectionPage({ params }: PageProps<"/collections/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getProductsByCategory(category.slug);

  return (
    <>
      <PageHero eyebrow="Collection" title={category.name} description={category.description} crumbs={[{ href: "/shop", label: "Shop" }, { label: category.name }]} />
      <div className="container-page py-12 sm:py-16">
        <CategoryTabs active={category.slug} />
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product, i) => (
            <ProductCard key={product.slug} product={product} priority={i < 4} />
          ))}
        </div>
        {category.slug === "mini-pots" || category.slug === "keychains" ? (
          <div className="mt-16 rounded-[2rem] border border-dashed border-leaf-500/50 bg-leaf-200/30 p-8 text-center">
            <p className="font-display text-3xl text-cocoa-900">Ordering for return gifts or a stall?</p>
            <p className="mt-2 text-cocoa-600">{category.name} are our most popular bulk pieces — mix designs, add names and get a bulk quote.</p>
            <ButtonLink href="/bulk-orders" className="mt-6">
              Plan a bulk order
            </ButtonLink>
          </div>
        ) : null}
      </div>
      <BuilderStrip />
    </>
  );
}
