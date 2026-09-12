"use client";

import { Plus } from "lucide-react";
import type { ReactNode } from "react";
import { useBag } from "./BagProvider";
import { buttonClasses } from "@/components/ui/Button";
import type { BagItem } from "@/lib/order-message";
import { cn } from "@/lib/cn";

type Props = {
  item: Omit<BagItem, "id" | "qty"> & { qty?: number };
  variant?: "primary" | "secondary" | "soft" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
  iconOnly?: boolean;
};

export function AddToBagButton({ item, variant = "primary", size = "md", className, children, iconOnly }: Props) {
  const { addItem } = useBag();
  if (iconOnly) {
    return (
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          addItem(item);
        }}
        className={cn(
          "grid size-11 place-items-center rounded-full bg-cream-50/95 text-cocoa-900 shadow-soft backdrop-blur transition hover:scale-105 hover:bg-berry-500 hover:text-white",
          className,
        )}
        aria-label={`Add ${item.name} to gift bag`}
      >
        <Plus className="size-5" strokeWidth={2} />
      </button>
    );
  }
  return (
    <button type="button" onClick={() => addItem(item)} className={buttonClasses(variant, size, className)}>
      {children ?? "Add to gift bag"}
    </button>
  );
}
