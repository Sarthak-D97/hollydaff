import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ tone = "dark", className, onClick }: { tone?: "dark" | "light"; className?: string; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className={cn("group inline-flex items-center gap-3", className)} aria-label="Hollydaff home">
      <span className="relative size-11 overflow-hidden rounded-full ring-1 ring-cocoa-800/10 transition duration-500 group-hover:rotate-[-8deg] sm:size-12">
        <Image src="/brand/hollydaff-logo-512.jpg" alt="" fill sizes="48px" className="scale-[1.18] object-cover object-[50%_42%]" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold tracking-[0.3em] sm:text-2xl",
            tone === "dark" ? "text-cocoa-900" : "text-cream-50",
          )}
        >
          HOLLYDAFF
        </span>
        <span className={cn("mt-0.5 font-hand text-base", tone === "dark" ? "text-berry-500" : "text-petal-200")}>handmade with heart</span>
      </span>
    </Link>
  );
}
