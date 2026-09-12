"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Check, ChevronDown, Copy, Minus, Plus, Trash2, X } from "lucide-react";
import { useBag } from "./BagProvider";
import { Flower } from "@/components/flowers/Flower";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { buttonClasses } from "@/components/ui/Button";
import { buildOrderMessage, type CustomerDetails } from "@/lib/order-message";
import { copyText, sendViaInstagram, whatsappUrl } from "@/lib/share";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { useOrigin } from "@/lib/use-origin";

const occasions = ["Birthday", "Anniversary", "Valentine's Day", "Raksha Bandhan", "Wedding / event", "Return gifts", "Corporate gifting", "Just because"];

export function BagDrawer() {
  const { items, isOpen, close, updateQty, removeItem, clear, toast, open, dismissToast } = useBag();
  const [details, setDetails] = useState<CustomerDetails>({});
  const [showDetails, setShowDetails] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState<"idle" | "copied" | "sent">("idle");
  const closeRef = useRef<HTMLButtonElement>(null);

  const origin = useOrigin();
  const message = useMemo(() => buildOrderMessage(items, details, origin), [items, details, origin]);
  const whatsapp = whatsappUrl(message);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  const update = (key: keyof CustomerDetails, value: string) => setDetails((d) => ({ ...d, [key]: value }));

  const handleInstagram = () => {
    sendViaInstagram(message).then((ok) => setStatus(ok ? "sent" : "idle"));
  };

  const handleCopy = () => {
    copyText(message).then((ok) => {
      if (ok) setStatus("copied");
    });
  };

  return (
    <>
      {/* Toast */}
      <div
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed inset-x-0 bottom-5 z-[60] flex justify-center px-4 transition-all duration-300",
          toast ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        {toast ? (
          <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-cocoa-900 py-2 pl-2 pr-2 text-sm text-cream-50 shadow-lift">
            <span className="grid size-8 place-items-center rounded-full bg-cream-50">
              <Flower kind="daisy" size={24} />
            </span>
            <span className="max-w-[16rem] truncate">{toast}</span>
            <button type="button" onClick={open} className="rounded-full bg-berry-500 px-4 py-1.5 font-medium hover:bg-berry-400">
              View bag
            </button>
            <button type="button" onClick={dismissToast} aria-label="Dismiss" className="grid size-7 place-items-center rounded-full text-cream-200 hover:bg-white/10">
              <X className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-cocoa-900/35 backdrop-blur-[2px] transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={close}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your gift bag"
        inert={!isOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col bg-cream-50 shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between border-b border-cocoa-100 px-6 py-5">
          <div>
            <p className="eyebrow text-berry-600">Order enquiry</p>
            <h2 className="font-display text-3xl font-medium text-cocoa-900">Your gift bag</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="grid size-10 place-items-center rounded-full border border-cocoa-100 text-cocoa-700 transition hover:border-berry-400 hover:text-berry-600"
            aria-label="Close gift bag"
          >
            <X className="size-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="relative mb-6 h-28 w-40">
              <Flower kind="sunflower" size={84} className="absolute left-2 top-4 animate-sway" />
              <Flower kind="lily" colour="Pink stargazer" size={70} className="absolute right-3 top-0 animate-sway-slow" />
              <Flower kind="daisy" size={46} className="absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>
            <p className="font-display text-2xl text-cocoa-900">Your gift bag is empty</p>
            <p className="mt-2 text-cocoa-600">Add a few forever blooms, or design a bouquet that&apos;s all yours.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/shop" onClick={close} className={buttonClasses("primary", "md")}>
                Browse the shop
              </Link>
              <Link href="/custom-bouquet" onClick={close} className={buttonClasses("secondary", "md")}>
                Design a bouquet
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 rounded-2xl border border-cocoa-100 bg-white/70 p-3">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-petal-50">
                      {item.image ? (
                        <Image src={item.image} alt="" fill sizes="80px" className="object-cover" />
                      ) : (
                        <div className="grid size-full place-items-center">
                          <Flower kind="rose" colour="Blush pink" size={52} />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        {item.slug ? (
                          <Link href={`/products/${item.slug}`} onClick={close} className="font-medium leading-snug text-cocoa-900 hover:text-berry-600">
                            {item.name}
                          </Link>
                        ) : (
                          <p className="font-medium leading-snug text-cocoa-900">{item.name}</p>
                        )}
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="grid size-8 shrink-0 place-items-center rounded-full text-cocoa-400 transition hover:bg-petal-50 hover:text-berry-600"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      {item.option ? <p className="mt-0.5 text-sm text-cocoa-500">{item.option}</p> : null}
                      {item.details?.length ? (
                        <ul className="mt-1 space-y-0.5 text-xs text-cocoa-500">
                          {item.details.map((detail) => (
                            <li key={detail}>• {detail}</li>
                          ))}
                        </ul>
                      ) : null}
                      {item.note ? <p className="mt-1 text-xs italic text-cocoa-500">“{item.note}”</p> : null}
                      <div className="mt-2 inline-flex items-center rounded-full border border-cocoa-100 bg-cream-50">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="grid size-8 place-items-center rounded-full text-cocoa-600 hover:text-berry-600"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium tabular-nums">{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="grid size-8 place-items-center rounded-full text-cocoa-600 hover:text-berry-600"
                          aria-label="Increase quantity"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-cocoa-100 bg-white/60">
                <button
                  type="button"
                  onClick={() => setShowDetails((v) => !v)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-cocoa-800"
                  aria-expanded={showDetails}
                >
                  Add your details <span className="font-normal text-cocoa-400">(optional, speeds things up)</span>
                  <ChevronDown className={cn("size-4 transition", showDetails && "rotate-180")} />
                </button>
                {showDetails ? (
                  <div className="grid gap-3 px-4 pb-4">
                    <Field label="Your name">
                      <input className={inputClass} value={details.name ?? ""} onChange={(e) => update("name", e.target.value)} autoComplete="name" />
                    </Field>
                    <Field label="City & pincode">
                      <input className={inputClass} value={details.city ?? ""} onChange={(e) => update("city", e.target.value)} placeholder="e.g. Ranchi 834001" />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Occasion">
                        <select className={inputClass} value={details.occasion ?? ""} onChange={(e) => update("occasion", e.target.value)}>
                          <option value="">Select…</option>
                          {occasions.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Needed by">
                        <input type="date" className={inputClass} value={details.date ?? ""} onChange={(e) => update("date", e.target.value)} />
                      </Field>
                    </div>
                    <Field label="Anything else?">
                      <textarea rows={2} className={cn(inputClass, "h-auto py-2")} value={details.notes ?? ""} onChange={(e) => update("notes", e.target.value)} placeholder="Colours, names, reference pictures…" />
                    </Field>
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setShowMessage((v) => !v)}
                className="mt-4 text-sm font-medium text-berry-600 underline-offset-4 hover:underline"
              >
                {showMessage ? "Hide" : "Preview"} your order message
              </button>
              {showMessage ? (
                <pre className="mt-2 whitespace-pre-wrap rounded-2xl bg-cocoa-900 p-4 font-sans text-xs leading-relaxed text-cream-100">{message}</pre>
              ) : null}

              <ol className="mt-6 space-y-2 text-sm text-cocoa-600">
                {[
                  "Tap send — we copy your order message for you.",
                  "Paste it into our Instagram chat and hit send.",
                  "We confirm design, price & delivery date, then start crafting.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-petal-100 text-xs font-semibold text-berry-700">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <footer className="space-y-3 border-t border-cocoa-100 bg-cream-100/80 px-6 py-5">
              {status === "sent" ? (
                <p className="flex items-center gap-2 rounded-xl bg-leaf-200/60 px-3 py-2 text-sm text-leaf-700">
                  <Check className="size-4" /> Message copied — paste it in the Instagram chat that just opened.
                </p>
              ) : null}
              <button type="button" onClick={handleInstagram} className={buttonClasses("primary", "lg", "w-full")}>
                <InstagramIcon size={20} /> Send order on Instagram
              </button>
              <div className="flex gap-3">
                {whatsapp ? (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary", "md", "flex-1")}>
                    <WhatsAppIcon size={18} /> WhatsApp
                  </a>
                ) : null}
                <button type="button" onClick={handleCopy} className={buttonClasses("soft", "md", "flex-1")}>
                  {status === "copied" ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {status === "copied" ? "Copied!" : "Copy message"}
                </button>
              </div>
              <div className="flex items-center justify-between text-xs text-cocoa-500">
                <span>{site.payment} · Handmade to order</span>
                <button type="button" onClick={clear} className="underline-offset-4 hover:text-berry-600 hover:underline">
                  Clear bag
                </button>
              </div>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}

const inputClass =
  "h-10 w-full min-w-0 rounded-xl border border-cocoa-100 bg-cream-50 px-3 text-sm text-cocoa-900 placeholder:text-cocoa-300 outline-none transition focus:border-berry-400 focus:ring-2 focus:ring-petal-200";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid min-w-0 gap-1 text-xs font-medium text-cocoa-600">
      {label}
      {children}
    </label>
  );
}
