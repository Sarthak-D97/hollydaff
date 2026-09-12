import Link from "next/link";
import { Logo } from "./Logo";
import { FlowerMeadow } from "@/components/flowers/FlowerMeadow";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Heart } from "@/components/flowers/Decor";
import { categories } from "@/data/categories";
import { site } from "@/data/site";
import { buttonClasses } from "@/components/ui/Button";
import { Mail, MapPin } from "lucide-react";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative mt-24">
      <FlowerMeadow className="relative z-10 -mb-1 block h-[110px] w-full sm:h-[150px]" />
      <div className="bg-cocoa-900 text-cream-200">
        <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed text-cream-200/80">
              Forever flowers, twisted by hand from soft chenille stems — bouquets, baskets, mini pots and little keepsakes that never wilt.
            </p>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={buttonClasses("light", "md", "mt-6")}>
              <InstagramIcon size={18} /> Follow @{site.instagram.handle}
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-petal-300">Shop</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link className="transition hover:text-white" href="/shop">
                  All products
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link className="transition hover:text-white" href={`/collections/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-petal-300">Help</h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/custom-bouquet", label: "Design a bouquet" },
                { href: "/bulk-orders", label: "Bulk & return gifts" },
                { href: "/faq", label: "FAQ & shipping" },
                { href: "/reviews", label: "Customer reviews" },
                { href: "/about", label: "Our story" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link className="transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-petal-300">Say hello</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a className="flex items-center gap-3 transition hover:text-white" href={site.instagram.dm} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon size={18} /> DM @{site.instagram.handle}
                </a>
              </li>
              {site.whatsapp ? (
                <li>
                  <a className="flex items-center gap-3 transition hover:text-white" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={18} /> WhatsApp us
                  </a>
                </li>
              ) : null}
              {site.email ? (
                <li>
                  <a className="flex items-center gap-3 transition hover:text-white" href={`mailto:${site.email}`}>
                    <Mail className="size-[18px]" /> {site.email}
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-3">
                <MapPin className="size-[18px]" /> {site.location.city}, {site.location.region}, India
              </li>
            </ul>
            <p className="mt-6 rounded-2xl border border-cream-200/15 px-4 py-3 text-sm text-cream-200/75">
              {site.payment} · Shipping PAN India · International on request
            </p>
          </div>
        </div>
        <div className="border-t border-cream-200/10">
          <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-cream-200/60 sm:flex-row">
            <p>© {YEAR} Hollydaff. All photos & videos © @{site.instagram.handle}.</p>
            <p className="flex items-center gap-1.5">
              Made with <Heart size={14} className="text-petal-400" /> in {site.location.city}, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
