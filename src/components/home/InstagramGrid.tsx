import Image from "next/image";
import { images, type ImageId } from "@/data/media";
import { site } from "@/data/site";
import { InstagramIcon } from "@/components/ui/Icons";
import { ButtonExternal } from "@/components/ui/Button";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";

const posts: Array<{ image: ImageId; href: string; alt: string }> = [
  { image: "lilies-bunch", href: "https://www.instagram.com/reel/DWRbFUGD-h3/", alt: "Bunch of handmade lilies" },
  { image: "flower-keychains-2", href: "https://www.instagram.com/reel/DVBuWFZjwLN/", alt: "Pink lily keychain" },
  { image: "grand-mixed-bouquet-2", href: "https://www.instagram.com/reel/DZp2t-PpI-R/", alt: "Grand mixed bouquet" },
  { image: "rose-lantern-2", href: "https://www.instagram.com/reel/DS70Z8Mj-xB/", alt: "Glowing rose lantern" },
  { image: "mini-pots-6", href: "https://www.instagram.com/p/DTmniqzjxOh/", alt: "Smiley daisy mini pot" },
  { image: "lilies-wall", href: "https://www.instagram.com/reel/DcGz7WCvhSc/", alt: "Handmade lilies against a wall" },
  { image: "phone-cover-1", href: "https://www.instagram.com/reel/DXj7KocDycN/", alt: "Handmade flower phone cover" },
  { image: "gift-boxes", href: "https://www.instagram.com/reel/DWRbFUGD-h3/", alt: "Bouquets packed in gift boxes" },
];

export function InstagramGrid() {
  return (
    <section className="container-page py-24 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow={`@${site.instagram.handle}`}
          title={
            <>
              Follow along the <Accent>garden</Accent>
            </>
          }
          description="New designs, packing days and behind-the-scenes — first on Instagram."
        />
        <ButtonExternal href={site.instagram.url}>
          <InstagramIcon size={18} /> Follow on Instagram
        </ButtonExternal>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {posts.map((post, i) => (
          <li key={post.image} className={i === 0 ? "row-span-2 sm:col-span-2" : undefined}>
            <a href={post.href} target="_blank" rel="noopener noreferrer" className="group relative block h-full min-h-40 overflow-hidden rounded-[1.5rem] bg-petal-50">
              <span className={`relative block ${i === 0 ? "aspect-[4/5] sm:aspect-auto sm:h-full" : "aspect-square"}`}>
                <Image src={images[post.image].src} alt={post.alt} fill sizes={i === 0 ? "(min-width: 640px) 50vw, 50vw" : "(min-width: 640px) 25vw, 50vw"} placeholder="blur" blurDataURL={images[post.image].blurDataURL} className="object-cover transition duration-700 group-hover:scale-105" />
              </span>
              <span className="absolute inset-0 grid place-items-center bg-cocoa-900/0 text-white opacity-0 transition duration-300 group-hover:bg-cocoa-900/35 group-hover:opacity-100">
                <InstagramIcon size={30} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
