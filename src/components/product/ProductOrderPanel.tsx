"use client";

import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useBag } from "@/components/bag/BagProvider";
import { buttonClasses } from "@/components/ui/Button";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { buildOrderMessage } from "@/lib/order-message";
import { sendViaInstagram, whatsappUrl } from "@/lib/share";
import { cn } from "@/lib/cn";
import { useOrigin } from "@/lib/use-origin";

type Props = { product: Pick<Product, "slug" | "name" | "options" | "customise"> & { image: string } };

export function ProductOrderPanel({ product }: Props) {
  const { addItem } = useBag();
  const [option, setOption] = useState(product.options?.values[0]);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const origin = useOrigin();

  const item = {
    kind: "product" as const,
    slug: product.slug,
    name: product.name,
    image: product.image,
    option: option && product.options ? `${product.options.label}: ${option}` : undefined,
    note: note.trim() || undefined,
    qty,
  };
  const message = buildOrderMessage([{ ...item, id: "now" }], {}, origin);
  const whatsapp = whatsappUrl(message);

  return (
    <div className="space-y-6">
      {product.options ? (
        <fieldset>
          <legend className="mb-3 text-sm font-medium text-cocoa-800">
            {product.options.label}: <span className="text-berry-600">{option}</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {product.options.values.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setOption(value)}
                aria-pressed={option === value}
                className={cn(
                  "inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-sm transition",
                  option === value ? "border-berry-500 bg-petal-50 font-medium text-berry-700" : "border-cocoa-800/15 bg-cream-50 text-cocoa-700 hover:border-berry-300",
                )}
              >
                {option === value ? <Check className="size-3.5" /> : null}
                {value}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div>
        <label htmlFor="note" className="mb-2 block text-sm font-medium text-cocoa-800">
          Personal touch <span className="font-normal text-cocoa-400">(optional)</span>
        </label>
        <textarea
          id="note"
          rows={2}
          maxLength={220}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Colours you love, a name for the tag, note card message…"
          className="w-full rounded-2xl border border-cocoa-800/15 bg-cream-50 px-4 py-3 text-sm text-cocoa-900 outline-none transition placeholder:text-cocoa-300 focus:border-berry-400 focus:ring-2 focus:ring-petal-200"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex h-14 items-center rounded-full border border-cocoa-800/15 bg-cream-50" role="group" aria-label="Quantity">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid size-12 place-items-center rounded-full text-cocoa-600 hover:text-berry-600" aria-label="Decrease quantity">
            <Minus className="size-4" />
          </button>
          <span className="w-10 text-center font-medium tabular-nums" aria-live="polite">
            {qty}
          </span>
          <button type="button" onClick={() => setQty((q) => Math.min(999, q + 1))} className="grid size-12 place-items-center rounded-full text-cocoa-600 hover:text-berry-600" aria-label="Increase quantity">
            <Plus className="size-4" />
          </button>
        </div>
        <button type="button" onClick={() => addItem(item)} className={buttonClasses("primary", "lg", "flex-1")}>
          Add to gift bag
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => {
            sendViaInstagram(message).then((ok) => setSent(ok));
          }}
          className={buttonClasses("secondary", "md", "w-full")}
        >
          <InstagramIcon size={18} /> Order now on Instagram
        </button>
        {whatsapp ? (
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary", "md", "w-full")}>
            <WhatsAppIcon size={18} /> Order on WhatsApp
          </a>
        ) : (
          <p className="flex items-center text-xs leading-relaxed text-cocoa-500">We copy your order message — just paste it in our chat.</p>
        )}
      </div>
      {sent ? (
        <p className="flex items-center gap-2 rounded-xl bg-leaf-200/60 px-3 py-2 text-sm text-leaf-700">
          <Check className="size-4" /> Order message copied — paste it into the Instagram chat.
        </p>
      ) : null}
    </div>
  );
}
