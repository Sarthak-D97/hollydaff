import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";
import { Flower } from "@/components/flowers/Flower";
import { cn } from "@/lib/cn";

export function CategoryShowcase() {
  return (
    <section className="bg-cream-200/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Shop by collection"
          title={
            <>
              Something <Accent>blooming</Accent> for everyone
            </>
          }
        />
        <div className="mt-14 grid auto-rows-[15rem] grid-cols-2 gap-4 sm:auto-rows-[18rem] lg:grid-cols-4">
          {categories.map((category, i) => {
            return (
              <Link
                key={category.slug}
                href={`/collections/${category.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] bg-petal-50 shadow-soft",
                  i === 0 && "col-span-2 row-span-2",
                  i === 3 && "lg:col-span-2",
                )}
              >
                <Image
                  src={category.image.src}
                  alt={category.imageAlt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  placeholder="blur"
                  blurDataURL={category.image.blurDataURL}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/75 via-cocoa-900/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                  <div>
                    <span className="mb-2 grid size-10 place-items-center rounded-full bg-cream-50/95">
                      <Flower kind={category.icon.kind} colour={category.icon.colour} size={30} />
                    </span>
                    <h3 className={cn("font-display font-medium leading-none text-cream-50", i === 0 ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl")}>
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-cream-100/85">{category.teaser}</p>
                    {i === 0 ? <p className="mt-3 hidden max-w-sm text-cream-100/85 sm:block">{category.description}</p> : null}
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream-50 text-cocoa-900 transition duration-300 group-hover:rotate-45 group-hover:bg-berry-500 group-hover:text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
