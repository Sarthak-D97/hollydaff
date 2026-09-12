"use client";

import { ShoppingBag } from "lucide-react";
import { useBag } from "./BagProvider";
import { cn } from "@/lib/cn";

export function BagButton({ className }: { className?: string }) {
  const { count, open } = useBag();
  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "relative inline-flex h-11 items-center gap-2 rounded-full border border-cocoa-800/15 bg-cream-50/70 pl-3.5 pr-4 text-sm font-medium text-cocoa-800 transition hover:border-berry-400 hover:text-berry-600",
        className,
      )}
      aria-label={`Open gift bag${count ? `, ${count} item${count === 1 ? "" : "s"}` : ""}`}
    >
      <ShoppingBag className="size-[18px]" strokeWidth={1.8} />
      <span className="hidden sm:inline">Gift bag</span>
      {count > 0 ? (
        <span
          key={count}
          className="pop-in absolute -right-1.5 -top-1.5 grid min-w-5 place-items-center rounded-full bg-berry-500 px-1.5 text-[11px] font-semibold leading-5 text-white shadow"
        >
          {count}
        </span>
      ) : null}
    </button>
  );
}
