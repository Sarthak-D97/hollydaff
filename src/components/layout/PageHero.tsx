import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Flower } from "@/components/flowers/Flower";
import { Sparkle, Sprig } from "@/components/flowers/Decor";
import { FloatingPetals } from "@/components/flowers/FloatingPetals";

type Crumb = { href?: string; label: string };

export function PageHero({ eyebrow, title, description, crumbs = [], children }: { eyebrow?: string; title: ReactNode; description?: ReactNode; crumbs?: Crumb[]; children?: ReactNode }) {
  return (
    <section className="paper relative overflow-hidden border-b border-cocoa-800/5">
      <FloatingPetals className="pointer-events-none absolute inset-0 overflow-hidden" />
      <Sprig size={210} className="pointer-events-none absolute -left-6 bottom-0 hidden text-cocoa-300/80 md:block" />
      <Sprig size={170} className="pointer-events-none absolute -right-4 top-6 hidden -scale-x-100 text-cocoa-300/80 md:block" />
      <Flower kind="sunflower" size={64} className="absolute right-[14%] top-10 hidden animate-sway-slow lg:block" fuzzy />
      <Flower kind="lily" colour="Magenta" size={54} className="absolute bottom-10 left-[12%] hidden animate-sway lg:block" fuzzy />
      <Sparkle size={16} className="absolute left-[22%] top-12 text-sun-400" />
      <Sparkle size={12} className="absolute bottom-14 right-[24%] text-berry-400" />

      <div className="container-page relative py-14 text-center sm:py-20">
        {crumbs.length ? (
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-cocoa-500">
              <li>
                <Link href="/" className="hover:text-berry-600">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5 text-cocoa-300" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-berry-600">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-cocoa-700">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? <p className="eyebrow text-berry-600">✿ {eyebrow} ✿</p> : null}
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-cocoa-900 sm:text-6xl lg:text-7xl">{title}</h1>
        {description ? <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cocoa-600">{description}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
