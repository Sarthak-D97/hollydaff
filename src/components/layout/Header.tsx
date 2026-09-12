"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { BagButton } from "@/components/bag/BagButton";
import { InstagramIcon } from "@/components/ui/Icons";
import { Flower } from "@/components/flowers/Flower";
import { Sprig } from "@/components/flowers/Decor";
import { navLinks, site } from "@/data/site";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) => (href === "/shop" ? pathname === "/shop" || pathname.startsWith("/collections") || pathname.startsWith("/products") : pathname.startsWith(href));

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-cocoa-800/10 bg-cream-100/85 shadow-[0_8px_30px_-20px_rgb(60_45_40/0.35)] backdrop-blur-md" : "bg-cream-100/60 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
        <Logo onClick={() => setMenuOpen(false)} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition",
                    isActive(link.href) ? "text-berry-600" : "text-cocoa-700 hover:text-berry-600",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-berry-400 transition-transform duration-300",
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden size-11 place-items-center rounded-full text-cocoa-700 transition hover:bg-petal-50 hover:text-berry-600 sm:grid"
            aria-label="Hollydaff on Instagram"
          >
            <InstagramIcon size={21} />
          </a>
          <BagButton />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-cocoa-800/15 text-cocoa-800 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

    </header>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={cn(
          "fixed inset-0 z-[60] overflow-y-auto bg-cream-100 transition-all duration-500 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible -translate-y-3 opacity-0",
        )}
      >
        <div className="paper relative min-h-full px-6 pb-12">
          <div className="flex h-[4.5rem] items-center justify-between sm:h-20">
            <Logo onClick={() => setMenuOpen(false)} />
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-cocoa-800/15 text-cocoa-800"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <Sprig size={220} className="pointer-events-none absolute -right-2 bottom-10 text-cocoa-300" />
          <nav aria-label="Mobile" className="mt-4">
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...navLinks, { href: "/faq", label: "FAQ" }, { href: "/contact", label: "Contact" }].map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-4 border-b border-cocoa-800/10 py-4 font-display text-3xl",
                      (link.href === "/" ? pathname === "/" : isActive(link.href)) ? "text-berry-600" : "text-cocoa-900",
                    )}
                  >
                    <Flower kind={(["sunflower", "lily", "tulip", "daisy", "rose", "gerbera", "lily", "daisy"] as const)[i % 8]} size={28} colour={i % 3 === 1 ? "Magenta" : undefined} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a href={site.instagram.dm} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary", "lg", "mt-8 w-full")}>
            <InstagramIcon size={20} /> Message us on Instagram
          </a>
          <p className="mt-4 text-center text-sm text-cocoa-500">@{site.instagram.handle} · {site.location.city}, India</p>
        </div>
      </div>
    </>
  );
}
