import Link from "next/link";
import { categories, type CategorySlug } from "@/data/categories";
import { Flower } from "@/components/flowers/Flower";
import { cn } from "@/lib/cn";

export function CategoryTabs({ active }: { active?: CategorySlug }) {
  const tabs = [{ href: "/shop", label: "All", slug: undefined, icon: null }, ...categories.map((c) => ({ href: `/collections/${c.slug}`, label: c.name, slug: c.slug, icon: c.icon }))];
  return (
    <nav aria-label="Collections" className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
        {tabs.map((tab) => {
          const isActive = tab.slug === active;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition",
                  isActive ? "border-berry-500 bg-berry-500 text-white shadow-soft" : "border-cocoa-800/15 bg-cream-50 text-cocoa-700 hover:border-berry-400 hover:text-berry-600",
                )}
              >
                {tab.icon ? <Flower kind={tab.icon.kind} colour={tab.icon.colour} size={20} /> : null}
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
