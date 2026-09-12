import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/categories";
import { AutoplayVideo } from "@/components/media/AutoplayVideo";
import { AddToBagButton } from "@/components/bag/AddToBagButton";
import { compactNumber, formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

type Props = { product: Product; priority?: boolean; className?: string; sizes?: string };

export function ProductCard({ product, priority = false, className, sizes = "(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 48vw" }: Props) {
  const cover = product.images[0];
  const second = product.images[1];
  const category = getCategory(product.category);

  return (
    <article className={cn("group relative", className)}>
      <Link href={`/products/${product.slug}`} className="block" aria-label={product.name}>
        <div data-hover-video className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-petal-50 shadow-soft">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={sizes}
            placeholder="blur"
            blurDataURL={cover.blurDataURL}
            preload={priority}
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          {second && !product.video ? (
            <Image
              src={second.src}
              alt=""
              fill
              sizes={sizes}
              className="object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            />
          ) : null}
          {product.video ? (
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <AutoplayVideo video={product.video} mode="hover" />
            </div>
          ) : null}

          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.badges?.slice(0, 2).map((badge) => (
              <span
                key={badge}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider shadow-sm",
                  badge === "Bestseller" ? "bg-sun-300 text-cocoa-900" : badge === "New" ? "bg-bluebell-200 text-cocoa-900" : "bg-cream-50/95 text-berry-700",
                )}
              >
                {badge}
              </span>
            ))}
          </div>

          {product.instagram.views && product.instagram.views >= 10000 ? (
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-cocoa-900/60 px-2.5 py-1 text-[0.7rem] font-medium text-cream-50 backdrop-blur">
              <Eye className="size-3.5" /> {compactNumber(product.instagram.views)} reel views
            </span>
          ) : null}
        </div>

        <div className="mt-4 px-1">
          <p className="eyebrow text-[0.65rem] text-cocoa-400">{category?.short}</p>
          <h3 className="mt-1 font-display text-[1.45rem] font-medium leading-tight text-cocoa-900 transition group-hover:text-berry-600">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-cocoa-500">{product.tagline}</p>
          <p className="mt-2 text-sm font-medium text-cocoa-700">
            {product.price ? formatPrice(product.price) : <span className="text-berry-600">Ask for price · Customisable</span>}
          </p>
        </div>
      </Link>

      <AddToBagButton
        iconOnly
        className="absolute right-3 top-3 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
        item={{ kind: "product", slug: product.slug, name: product.name, image: cover.src }}
      />
    </article>
  );
}
