import Image from "next/image";
import Link from "next/link";
import { images, type ImageId } from "@/data/media";
import { SectionHeading, Accent } from "@/components/ui/SectionHeading";

const occasions: Array<{ title: string; note: string; image: ImageId; href: string }> = [
  { title: "Birthdays", note: "Sunflower bouquets & baskets", image: "sunflower-bouquet-2", href: "/products/sunflower-bouquet" },
  { title: "Valentine's & anniversaries", note: "Roses, lilies & rose lanterns", image: "pink-rose-bouquet-2", href: "/products/pink-rose-bouquet" },
  { title: "Raksha Bandhan", note: "A basket full of love", image: "flower-basket-3", href: "/products/signature-flower-basket" },
  { title: "Return gifts", note: "Mini pots & keychains in bulk", image: "mini-pots-3", href: "/bulk-orders" },
  { title: "Weddings & events", note: "Lily stems & décor", image: "lily-stems-1", href: "/products/lily-stems" },
  { title: "Just because", note: "Buy yourself flowers", image: "lavender-daisy-bouquet-1", href: "/products/lavender-daisy-bouquet" },
];

export function Occasions() {
  return (
    <section className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="Gifting made easy"
        title={
          <>
            A forever gift for <Accent>every moment</Accent>
          </>
        }
      />
      <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
        {occasions.map((occasion, i) => (
          <li key={occasion.title}>
            <Link href={occasion.href} className="group block text-center">
              <span className={`relative mx-auto block aspect-[3/4] w-full overflow-hidden shadow-soft transition duration-500 group-hover:-translate-y-2 ${i % 2 ? "rounded-[999px_999px_1.5rem_1.5rem]" : "rounded-[1.5rem_1.5rem_999px_999px]"}`}>
                <Image
                  src={images[occasion.image].src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 45vw"
                  placeholder="blur"
                  blurDataURL={images[occasion.image].blurDataURL}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </span>
              <span className="mt-4 block font-display text-2xl leading-tight text-cocoa-900 group-hover:text-berry-600">{occasion.title}</span>
              <span className="mt-1 block text-sm text-cocoa-500">{occasion.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
