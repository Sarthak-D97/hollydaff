import type { Metadata } from "next";
import { MapPin, Truck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Accent } from "@/components/ui/SectionHeading";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Flower } from "@/components/flowers/Flower";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Message Hollydaff on Instagram to order handmade flowers, ask about custom designs or plan a bulk order.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title={
          <>
            We&apos;d love to <Accent>hear from you</Accent>
          </>
        }
        description="Orders, custom ideas, bulk quotes or just a hello — we reply to every message personally."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 space-y-4">
          <a
            href={site.instagram.dm}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-[2rem] bg-berry-500 p-6 text-cream-50 shadow-lift transition hover:-translate-y-1"
          >
            <span className="grid size-14 place-items-center rounded-full bg-cream-50 text-berry-600">
              <InstagramIcon size={26} />
            </span>
            <span>
              <span className="block font-display text-3xl">Instagram DM</span>
              <span className="text-cream-100/90">@{site.instagram.handle} · fastest way to reach us</span>
            </span>
          </a>
          {site.whatsapp ? (
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-[2rem] border border-cocoa-800/10 bg-cream-50 p-6 transition hover:-translate-y-1"
            >
              <span className="grid size-14 place-items-center rounded-full bg-leaf-200 text-leaf-700">
                <WhatsAppIcon size={26} />
              </span>
              <span>
                <span className="block font-display text-3xl text-cocoa-900">WhatsApp</span>
                <span className="text-cocoa-600">Chat with us directly</span>
              </span>
            </a>
          ) : null}
          <div className="flex items-center gap-5 rounded-[2rem] border border-cocoa-800/10 bg-cream-50 p-6">
            <span className="grid size-14 place-items-center rounded-full bg-sun-200 text-sun-700">
              <MapPin className="size-6" />
            </span>
            <span>
              <span className="block font-display text-3xl text-cocoa-900">
                {site.location.city}, {site.location.region}
              </span>
              <span className="text-cocoa-600">Handmade studio · online orders only</span>
            </span>
          </div>
          <div className="flex items-center gap-5 rounded-[2rem] border border-cocoa-800/10 bg-cream-50 p-6">
            <span className="grid size-14 place-items-center rounded-full bg-bluebell-200 text-bluebell-600">
              <Truck className="size-6" />
            </span>
            <span>
              <span className="block font-display text-3xl text-cocoa-900">Shipping PAN India</span>
              <span className="text-cocoa-600">International on request · {site.payment}</span>
            </span>
          </div>
          <div className="flex justify-center gap-2 pt-4" aria-hidden>
            <Flower kind="tulip" colour="Pink" size={54} className="animate-sway" />
            <Flower kind="sunflower" size={70} className="animate-sway-slow" />
            <Flower kind="daisy" colour="Lilac" size={48} className="animate-sway" />
          </div>
        </div>
        <EnquiryForm
          title="Send us a message"
          intro="I have a question."
          fields={[
            { name: "name", label: "Your name", required: true, half: true },
            { name: "city", label: "City", half: true },
            { name: "topic", label: "Topic", type: "select", options: ["Order a product", "Custom design", "Bulk order", "Shipping", "Something else"] },
            { name: "message", label: "Your message", type: "textarea", required: true, placeholder: "Tell us what you have in mind…" },
          ]}
        />
      </section>
    </>
  );
}
