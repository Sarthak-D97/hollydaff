import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ReelCard } from "@/components/media/ReelCard";
import { ProductCard } from "@/components/product/ProductCard";
import { Accent, SectionHeading } from "@/components/ui/SectionHeading";
import { Flower } from "@/components/flowers/Flower";
import type { FlowerKind } from "@/components/flowers/heads";
import { images } from "@/data/media";
import { reels } from "@/data/reels";
import { getProduct } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bulk orders, return gifts & reseller packs",
  description:
    "Handmade mini pots, keychains, lily stems and bouquets in bulk — for return gifts, weddings, exhibitions, corporate gifting and resellers. Shipped across India and abroad.",
  alternates: { canonical: "/bulk-orders" },
};

const useCases: Array<{ title: string; body: string; kind: FlowerKind; colour?: string }> = [
  { title: "Return gifts", body: "Birthdays, baby showers, weddings & poojas — mini pots and keychains guests actually keep.", kind: "tulip", colour: "Pink" },
  { title: "Exhibitions & stalls", body: "Eye-catching, lightweight pieces that sell well at markets, pop-ups and college fests.", kind: "sunflower" },
  { title: "Corporate & festive", body: "Desk buddies and bouquets for teams, clients and festive hampers, with your colours.", kind: "lily", colour: "Lilac" },
  { title: "Reseller packs", body: "Start your own small business on a budget with ready-to-sell handmade stock.", kind: "gerbera", colour: "Magenta" },
];

const process = [
  "Tell us the designs, colours, quantity and your date.",
  "We share a quote, a sample picture if needed, and a timeline.",
  "Confirm with a prepaid order and we start crafting.",
  "Everything is sleeved, boxed and shipped to your door.",
];

export default function BulkOrdersPage() {
  const bulkReels = [reels[0], reels[3], reels[1]];
  const bulkProducts = ["mini-flower-pots", "flower-keychains", "orchid-keyring", "lily-stems"].map((slug) => getProduct(slug)!).filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Bulk & gifting"
        title={
          <>
            Handmade blooms, <Accent>by the box</Accent>
          </>
        }
        description={`Return gifts, events, corporate gifting and reseller packs — crafted with the same care as a single bouquet. Our bulk orders have travelled to ${site.shippedTo.join(", ")}.`}
        crumbs={[{ label: "Bulk orders" }]}
      />

      <section className="container-page py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <div key={u.title} className="rounded-[2rem] border border-cocoa-800/10 bg-cream-50 p-7">
              <Flower kind={u.kind} colour={u.colour} size={56} fuzzy />
              <h2 className="mt-5 font-display text-3xl text-cocoa-900">{u.title}</h2>
              <p className="mt-2 leading-relaxed text-cocoa-600">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-200/60 py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="How bulk orders work"
              title={
                <>
                  Simple, clear &amp; <Accent>made with love</Accent>
                </>
              }
            />
            <ol className="mt-8 space-y-4">
              {process.map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl bg-cream-50 p-4 shadow-sm">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-berry-500 font-semibold text-white">{i + 1}</span>
                  <span className="pt-1.5 text-cocoa-700">{step}</span>
                </li>
              ))}
            </ol>
            <ul className="mt-8 space-y-2 text-cocoa-700">
              {["Mix & match designs and colours", "Name tags & cut-outs on request", "Careful packing for safe delivery", "PAN India & international shipping"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-leaf-500" strokeWidth={3} /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {(["bulk-pots-floor", "bulk-flatlay", "orchid-keyring-2"] as const).map((id) => (
                <div key={id} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={images[id].src} alt="Handmade bulk order pieces" fill sizes="(min-width: 1024px) 15vw, 30vw" placeholder="blur" blurDataURL={images[id].blurDataURL} className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <EnquiryForm
            title="Get a bulk quote"
            intro="I'd like a quote for a bulk order."
            submitLabel="Send bulk enquiry on Instagram"
            fields={[
              { name: "name", label: "Your name", required: true, half: true },
              { name: "city", label: "City & pincode", required: true, half: true },
              { name: "purpose", label: "What's it for?", type: "select", options: ["Return gifts", "Wedding / event", "Exhibition / stall", "Corporate gifting", "Reselling", "Something else"], half: true },
              { name: "quantity", label: "Approx. quantity", type: "number", placeholder: "e.g. 50", half: true },
              { name: "products", label: "Products you're interested in", placeholder: "Mini pots, flower keychains, lily stems…" },
              { name: "date", label: "Needed by", type: "date", half: true },
              { name: "budget", label: "Budget (optional)", placeholder: "Per piece or total", half: true },
              { name: "notes", label: "Colours, names or anything else", type: "textarea" },
            ]}
          />
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Bulk favourites"
          title={
            <>
              Our most-ordered <Accent>bulk pieces</Accent>
            </>
          }
        />
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {bulkProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-cocoa-900 py-20">
        <div className="container-page">
          <SectionHeading
            tone="light"
            eyebrow="Behind the scenes"
            title={
              <>
                Packed by hand, <Accent className="text-petal-300">shipped with love</Accent>
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
            {bulkReels.map((reel) => (
              <ReelCard key={reel.href} reel={reel} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
