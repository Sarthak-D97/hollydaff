"use client";

import { useRef, useState } from "react";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { BouquetPreview } from "./BouquetPreview";
import {
  MAX_STEMS,
  colourSwatch,
  describeDesign,
  flowerTypes,
  presets,
  ribbons,
  wraps,
  type BouquetDesign,
  type RibbonName,
  type Stem,
  type WrapName,
} from "./bouquet-options";
import { flowerPalettes, type FlowerKind } from "@/components/flowers/heads";
import { Flower } from "@/components/flowers/Flower";
import { Sparkle } from "@/components/flowers/Decor";
import { useBag } from "@/components/bag/BagProvider";
import { buttonClasses } from "@/components/ui/Button";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { buildOrderMessage } from "@/lib/order-message";
import { sendViaInstagram, whatsappUrl } from "@/lib/share";
import { cn } from "@/lib/cn";

const initial: BouquetDesign = {
  stems: [
    { id: 1, kind: "sunflower", colour: "Golden yellow" },
    { id: 2, kind: "rose", colour: "Blush pink" },
    { id: 3, kind: "lily", colour: "Magenta" },
    { id: 4, kind: "daisy", colour: "White" },
    { id: 5, kind: "tulip", colour: "Pink" },
  ],
  wrap: "Blush pink",
  ribbon: "Black satin",
  greenery: true,
  pearls: false,
  note: "",
};

export function BouquetBuilder() {
  const [design, setDesign] = useState<BouquetDesign>(initial);
  const [sent, setSent] = useState(false);
  const nextId = useRef(100);
  const { addItem } = useBag();

  const full = design.stems.length >= MAX_STEMS;
  const summary = describeDesign(design);
  const item = {
    kind: "custom" as const,
    name: `Custom bouquet · ${design.stems.length} stem${design.stems.length === 1 ? "" : "s"}`,
    details: summary,
    note: design.note.trim() ? `Note card: ${design.note.trim()}` : undefined,
    qty: 1,
  };
  const message = buildOrderMessage([{ ...item, id: "custom" }]);
  const whatsapp = whatsappUrl(message);

  const addStem = (kind: FlowerKind, colour: string) => {
    if (full) return;
    const id = nextId.current++;
    setDesign((d) => ({ ...d, stems: [...d.stems, { id, kind, colour }] }));
    setSent(false);
  };

  const removeStem = (id: number) => setDesign((d) => ({ ...d, stems: d.stems.filter((s) => s.id !== id) }));

  const applyPreset = (index: number) => {
    const preset = presets[index];
    const stems: Stem[] = preset.stems.flatMap(([kind, colour, n]) => Array.from({ length: n }, () => ({ id: nextId.current++, kind, colour })));
    setDesign((d) => ({ ...d, stems, wrap: preset.wrap, ribbon: preset.ribbon }));
  };

  const surprise = () => {
    const random = randomDesign(() => nextId.current++);
    setDesign((d) => ({ ...d, ...random }));
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
      {/* Preview */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="paper relative overflow-hidden rounded-[2.25rem] border border-cocoa-800/10 p-6 shadow-lift sm:p-10">
          <Sparkle size={18} className="absolute left-8 top-8 text-sun-400" />
          <Sparkle size={12} className="absolute right-10 top-16 text-berry-400" />
          <Sparkle size={14} className="absolute bottom-24 left-10 text-lilac-400" />
          <BouquetPreview design={design} className="mx-auto w-full max-w-[420px]" />
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm text-cocoa-600">
            <span className="rounded-full bg-cream-50 px-3 py-1 shadow-sm">
              {design.stems.length}/{MAX_STEMS} stems
            </span>
            <span className="rounded-full bg-cream-50 px-3 py-1 shadow-sm">{design.wrap} wrap</span>
            <span className="rounded-full bg-cream-50 px-3 py-1 shadow-sm">{design.ribbon} ribbon</span>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-cocoa-500">
          Illustration for planning — your real bouquet is hand-twisted and arranged to match.
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-10">
        <section>
          <StepTitle n={1} title="Start from a favourite" hint="or build from scratch below" />
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {presets.map((preset, i) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => applyPreset(i)}
                className="rounded-2xl border border-cocoa-800/10 bg-cream-50 p-3 text-left transition hover:-translate-y-0.5 hover:border-berry-300 hover:shadow-soft"
              >
                <span className="flex -space-x-2">
                  {preset.stems.slice(0, 3).map(([kind, colour]) => (
                    <Flower key={`${kind}${colour}`} kind={kind} colour={colour} size={30} />
                  ))}
                </span>
                <span className="mt-2 block font-medium text-cocoa-900">{preset.name}</span>
                <span className="block text-xs text-cocoa-500">{preset.description}</span>
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={surprise} className={buttonClasses("soft", "sm")}>
              <Shuffle className="size-4" /> Surprise me
            </button>
            <button type="button" onClick={() => setDesign((d) => ({ ...d, stems: [] }))} className={buttonClasses("ghost", "sm")}>
              <RotateCcw className="size-4" /> Clear flowers
            </button>
          </div>
        </section>

        <section>
          <StepTitle n={2} title="Pick your blooms" hint={full ? "That's a full bouquet!" : `Tap a colour to add a stem · up to ${MAX_STEMS}`} />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {flowerTypes.map((type) => (
              <div key={type.kind} className="flex items-center gap-3 rounded-2xl border border-cocoa-800/10 bg-cream-50 p-3">
                <Flower kind={type.kind} size={46} className="shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-tight text-cocoa-900">
                    {type.name} <span className="text-xs font-normal text-cocoa-400">· {type.blurb}</span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {Object.keys(flowerPalettes[type.kind]).map((colour) => (
                      <button
                        key={colour}
                        type="button"
                        onClick={() => addStem(type.kind, colour)}
                        disabled={full}
                        title={`Add ${colour} ${type.name.toLowerCase()}`}
                        aria-label={`Add ${colour} ${type.name.toLowerCase()}`}
                        className="size-7 rounded-full border-2 border-white shadow-[0_0_0_1px_rgb(60_45_40/0.15)] transition hover:scale-110 disabled:opacity-40"
                        style={{ background: colourSwatch(type.kind, colour) }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {design.stems.length ? (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stems in your bouquet">
              {design.stems.map((stem) => (
                <li key={stem.id}>
                  <button
                    type="button"
                    onClick={() => removeStem(stem.id)}
                    className="group inline-flex h-9 items-center gap-1.5 rounded-full border border-cocoa-800/10 bg-white/80 pl-1.5 pr-2.5 text-xs text-cocoa-700 transition hover:border-berry-300"
                    aria-label={`Remove ${stem.colour} ${stem.kind}`}
                  >
                    <Flower kind={stem.kind} colour={stem.colour} size={24} />
                    {stem.colour} {stem.kind}
                    <X className="size-3.5 text-cocoa-400 group-hover:text-berry-600" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section>
          <StepTitle n={3} title="Wrap it up" />
          <div className="mt-4 space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium text-cocoa-800">
                Wrapping paper: <span className="text-berry-600">{design.wrap}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(wraps) as WrapName[]).map((name) => (
                  <SwatchButton key={name} label={name} colour={wraps[name].base} active={design.wrap === name} onClick={() => setDesign((d) => ({ ...d, wrap: name }))} />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-cocoa-800">
                Ribbon: <span className="text-berry-600">{design.ribbon}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(ribbons) as RibbonName[]).map((name) => (
                  <SwatchButton key={name} label={name} colour={ribbons[name]} active={design.ribbon === name} onClick={() => setDesign((d) => ({ ...d, ribbon: name }))} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Toggle label="Add greenery" checked={design.greenery} onChange={(v) => setDesign((d) => ({ ...d, greenery: v }))} />
              <Toggle label="Add pearls" checked={design.pearls} onChange={(v) => setDesign((d) => ({ ...d, pearls: v }))} />
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-cocoa-800">
                Note card message <span className="font-normal text-cocoa-400">(optional)</span>
              </span>
              <input
                value={design.note}
                maxLength={80}
                onChange={(e) => setDesign((d) => ({ ...d, note: e.target.value }))}
                placeholder="Happy birthday, Didi! 💛"
                className="h-12 w-full rounded-2xl border border-cocoa-800/15 bg-cream-50 px-4 text-cocoa-900 outline-none transition placeholder:text-cocoa-300 focus:border-berry-400 focus:ring-2 focus:ring-petal-200"
              />
            </label>
          </div>
        </section>

        <section className="rounded-[2rem] bg-cocoa-900 p-6 text-cream-100 sm:p-8">
          <StepTitle n={4} title="Send it to us" tone="light" />
          <ul className="mt-4 space-y-1 text-sm text-cream-200/85">
            {summary.map((line) => (
              <li key={line}>✿ {line}</li>
            ))}
            {design.note.trim() ? <li>✿ Note card: “{design.note.trim()}”</li> : null}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              disabled={!design.stems.length}
              onClick={() => sendViaInstagram(message).then((ok) => setSent(ok))}
              className={buttonClasses("primary", "lg", "w-full")}
            >
              <InstagramIcon size={20} /> Send on Instagram
            </button>
            <button type="button" disabled={!design.stems.length} onClick={() => addItem(item)} className={buttonClasses("light", "lg", "w-full")}>
              Add to gift bag
            </button>
            {whatsapp ? (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={buttonClasses("light", "md", "w-full sm:col-span-2")}>
                <WhatsAppIcon size={18} /> Send on WhatsApp
              </a>
            ) : null}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-cream-200/70">
            {sent ? (
              <span className="inline-flex items-center gap-1.5 text-leaf-200">
                <Check className="size-4" /> Design copied — paste it in the chat and we&apos;ll reply with the price & timeline.
              </span>
            ) : (
              "We copy your design as a message — paste it in our Instagram chat and we'll confirm price, colours and delivery date."
            )}
          </p>
        </section>
      </div>
    </div>
  );
}

const pick = <T,>(list: readonly T[]) => list[Math.floor(Math.random() * list.length)];

function randomDesign(nextId: () => number): Pick<BouquetDesign, "stems" | "wrap" | "ribbon" | "greenery"> {
  const count = 5 + Math.floor(Math.random() * 5);
  const stems: Stem[] = Array.from({ length: count }, () => {
    const type = pick(flowerTypes);
    return { id: nextId(), kind: type.kind, colour: pick(Object.keys(flowerPalettes[type.kind])) };
  });
  return {
    stems,
    wrap: pick(Object.keys(wraps) as WrapName[]),
    ribbon: pick(Object.keys(ribbons) as RibbonName[]),
    greenery: Math.random() > 0.3,
  };
}

function StepTitle({ n, title, hint, tone = "dark" }: { n: number; title: string; hint?: string; tone?: "dark" | "light" }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className={cn("grid size-8 place-items-center rounded-full text-sm font-semibold", tone === "dark" ? "bg-petal-100 text-berry-700" : "bg-cream-50 text-cocoa-900")}>{n}</span>
      <h2 className={cn("font-display text-3xl font-medium", tone === "dark" ? "text-cocoa-900" : "text-cream-50")}>{title}</h2>
      {hint ? <span className={cn("text-sm", tone === "dark" ? "text-cocoa-500" : "text-cream-200/70")}>{hint}</span> : null}
    </div>
  );
}

function SwatchButton({ label, colour, active, onClick }: { label: string; colour: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-full border pl-1.5 pr-3.5 text-sm transition",
        active ? "border-berry-500 bg-petal-50 font-medium text-berry-700" : "border-cocoa-800/15 bg-cream-50 text-cocoa-700 hover:border-berry-300",
      )}
    >
      <span className="size-7 rounded-full border border-cocoa-800/15" style={{ background: colour }} />
      {label}
    </button>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "inline-flex h-11 items-center gap-3 rounded-full border px-4 text-sm transition",
        checked ? "border-leaf-500 bg-leaf-200/50 text-leaf-700" : "border-cocoa-800/15 bg-cream-50 text-cocoa-700",
      )}
    >
      <span className={cn("relative h-5 w-9 rounded-full transition", checked ? "bg-leaf-500" : "bg-cocoa-200")}>
        <span className={cn("absolute top-0.5 size-4 rounded-full bg-white shadow transition-all", checked ? "left-[1.1rem]" : "left-0.5")} />
      </span>
      {label}
    </button>
  );
}
