import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Eye, Palette, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { getProduct, getRelatedProducts, products } from "@/data/products";
import { getCategory } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductOrderPanel } from "@/components/product/ProductOrderPanel";
import { ProductCard } from "@/components/product/ProductCard";
import { BuilderStrip } from "@/components/product/BuilderStrip";
import { TestimonialCard } from "@/components/home/Testimonials";
import { InstagramIcon } from "@/components/ui/Icons";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { Flower } from "@/components/flowers/Flower";
import { compactNumber, formatPrice } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const cover = product.images[0];
  return {
    title: product.name,
    description: `${product.tagline} ${product.description}`.slice(0, 160),
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} · Hollydaff`,
      description: product.tagline,
      images: [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }],
    },
  };
}

const care = [
  "Keep away from water and damp spaces.",
  "Avoid long hours of harsh, direct sunlight to keep colours bright.",
  "Dust gently with a soft brush or a hairdryer on the cool setting.",
  "Reshape petals softly with your fingers if they get squished in transit.",
];

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const reviews = [testimonials[0], testimonials[3], testimonials[7]];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((image) => `${site.url}${image.src}`),
    brand: { "@type": "Brand", name: "Hollydaff" },
    category: category?.name,
    url: `${site.url}/products/${product.slug}`,
    ...(product.price
      ? { offers: { "@type": "Offer", price: product.price, priceCurrency: "INR", availability: "https://schema.org/MadeToOrder" } }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="border-b border-cocoa-800/5 bg-cream-200/40">
        <nav aria-label="Breadcrumb" className="container-page py-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-cocoa-500">
            <li>
              <Link href="/" className="hover:text-berry-600">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="size-3.5 text-cocoa-300" />
              <Link href="/shop" className="hover:text-berry-600">
                Shop
              </Link>
            </li>
            {category ? (
              <li className="flex items-center gap-1">
                <ChevronRight className="size-3.5 text-cocoa-300" />
                <Link href={`/collections/${category.slug}`} className="hover:text-berry-600">
                  {category.name}
                </Link>
              </li>
            ) : null}
            <li className="flex items-center gap-1">
              <ChevronRight className="size-3.5 text-cocoa-300" />
              <span aria-current="page" className="text-cocoa-700">
                {product.name}
              </span>
            </li>
          </ol>
        </nav>
      </div>

      <section className="container-page grid gap-12 py-10 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <ProductGallery images={product.images} video={product.video} name={product.name} />

        <div className="min-w-0">
          <p className="eyebrow flex items-center gap-2 text-berry-600">
            {category ? <Flower kind={category.icon.kind} colour={category.icon.colour} size={18} /> : null}
            {category?.name}
          </p>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[1.02] tracking-tight text-cocoa-900 sm:text-6xl">{product.name}</h1>
          {product.badges?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.badges.map((badge) => (
                <span key={badge} className="rounded-full bg-sun-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cocoa-900">
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
          <p className="mt-5 font-display text-2xl italic leading-snug text-cocoa-700">{product.tagline}</p>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-y border-cocoa-800/10 py-4">
            {product.price ? (
              <p className="font-display text-4xl font-semibold text-cocoa-900">{formatPrice(product.price)}</p>
            ) : (
              <p className="font-display text-3xl text-cocoa-900">Price on request</p>
            )}
            <p className="text-sm text-cocoa-500">Final price depends on size & customisation — we confirm it in chat before you pay.</p>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-cocoa-600">{product.description}</p>

          <div className="mt-8">
            <ProductOrderPanel product={{ slug: product.slug, name: product.name, options: product.options, customise: product.customise, image: product.images[0].src }} />
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {[
              { icon: Sparkles, label: "Handmade to order" },
              { icon: Palette, label: "Fully customisable" },
              { icon: Truck, label: "Ships across India" },
              { icon: ShieldCheck, label: site.payment },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 rounded-2xl bg-cream-50 px-3 py-3 text-cocoa-700 ring-1 ring-cocoa-800/5">
                <Icon className="size-[18px] shrink-0 text-berry-500" strokeWidth={1.8} />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 divide-y divide-cocoa-800/10 rounded-[1.75rem] border border-cocoa-800/10 bg-cream-50 px-6">
            <Detail title="What you'll love" open>
              <ul className="space-y-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-berry-500">✿</span>
                    {h}
                  </li>
                ))}
              </ul>
            </Detail>
            <Detail title="Make it yours">{product.customise} Share a reference photo if you have one — we love recreating ideas.</Detail>
            <Detail title="Care for your blooms">
              <ul className="space-y-2">
                {care.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-berry-500">✿</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Detail>
            <Detail title="Shipping & payment">
              Made to order and shipped PAN India (international on request). {site.payment}. We&apos;ll share the delivery timeline when we confirm your
              order — message us early if you need it for a date.
            </Detail>
          </div>

          {product.occasions?.length ? (
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-cocoa-500">Perfect for</span>
              {product.occasions.map((o) => (
                <span key={o} className="rounded-full bg-petal-50 px-3 py-1 text-berry-700">
                  {o}
                </span>
              ))}
            </div>
          ) : null}

          <a
            href={product.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center gap-4 rounded-[1.75rem] bg-cocoa-900 p-4 text-cream-100 transition hover:bg-cocoa-800"
          >
            <span className="grid size-12 place-items-center rounded-full bg-cream-50 text-cocoa-900">
              <InstagramIcon size={22} />
            </span>
            <span className="flex-1">
              <span className="block font-medium">See it on Instagram</span>
              <span className="flex items-center gap-1 text-sm text-cream-200/75">
                {product.instagram.views ? (
                  <>
                    <Eye className="size-3.5" /> {compactNumber(product.instagram.views)} views ·{" "}
                  </>
                ) : null}
                @{site.instagram.handle}
              </span>
            </span>
            <ChevronRight className="size-5 transition group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section className="bg-cream-200/60 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Love notes"
            title={
              <>
                Loved by our <Accent>customers</Accent>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((t) => (
              <TestimonialCard key={t.quote} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          align="left"
          eyebrow="You may also love"
          title={
            <>
              More <Accent>blooms</Accent> to browse
            </>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <BuilderStrip />
    </>
  );
}

function Detail({ title, children, open = false }: { title: string; children: ReactNode; open?: boolean }) {
  return (
    <details className="group py-4" open={open}>
      <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl text-cocoa-900">
        {title}
        <span className="text-2xl text-berry-500 transition group-open:rotate-45">+</span>
      </summary>
      <div className="mt-3 leading-relaxed text-cocoa-600">{children}</div>
    </details>
  );
}
