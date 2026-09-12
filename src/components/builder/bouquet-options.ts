import type { FlowerKind } from "@/components/flowers/heads";
import { flowerPalettes } from "@/components/flowers/heads";

export type Stem = { id: number; kind: FlowerKind; colour: string };

export const MAX_STEMS = 12;

export const flowerTypes: Array<{ kind: FlowerKind; name: string; blurb: string }> = [
  { kind: "sunflower", name: "Sunflower", blurb: "Our bestseller" },
  { kind: "rose", name: "Rose", blurb: "Classic romance" },
  { kind: "tulip", name: "Tulip", blurb: "Soft & elegant" },
  { kind: "lily", name: "Lily", blurb: "Big statement" },
  { kind: "daisy", name: "Daisy", blurb: "Sweet filler" },
  { kind: "gerbera", name: "Gerbera", blurb: "Bright & happy" },
];

export const colourSwatch = (kind: FlowerKind, colour: string) => {
  const p = flowerPalettes[kind][colour];
  return kind === "lily" && colour === "Pink stargazer" ? p.dark : p.base;
};

export const wraps = {
  "Blush pink": { base: "#f6d9d2", dark: "#e9b9b0", line: "#fcefeb" },
  "Pearl white": { base: "#fbf8f2", dark: "#e6ddcf", line: "#ffffff" },
  "Classic black": { base: "#3b312d", dark: "#231c19", line: "#61534c" },
  "Kraft brown": { base: "#d8b389", dark: "#bf9463", line: "#e9cfae" },
  Lilac: { base: "#e4d9f4", dark: "#c8b6e6", line: "#f3eefb" },
} as const;

export const ribbons = {
  "Black satin": "#1f1a18",
  "Hot pink": "#e0407f",
  Red: "#c8243a",
  Lilac: "#9b7fd0",
  Teal: "#2a9d8f",
  Ivory: "#efe4d2",
} as const;

export type WrapName = keyof typeof wraps;
export type RibbonName = keyof typeof ribbons;

export type BouquetDesign = {
  stems: Stem[];
  wrap: WrapName;
  ribbon: RibbonName;
  greenery: boolean;
  pearls: boolean;
  note: string;
};

type PresetStem = [FlowerKind, string, number];

export const presets: Array<{ name: string; description: string; stems: PresetStem[]; wrap: WrapName; ribbon: RibbonName }> = [
  {
    name: "Sunshine",
    description: "Sunflowers & white daisies",
    stems: [["sunflower", "Golden yellow", 3], ["daisy", "White", 4]],
    wrap: "Blush pink",
    ribbon: "Black satin",
  },
  {
    name: "Romance",
    description: "Red roses with blush accents",
    stems: [["rose", "Red", 5], ["rose", "Blush pink", 2], ["daisy", "White", 2]],
    wrap: "Classic black",
    ribbon: "Red",
  },
  {
    name: "Pastel dream",
    description: "Lilac, blush & sky blue",
    stems: [["lily", "Lilac", 1], ["tulip", "Pink", 2], ["rose", "Blush pink", 2], ["gerbera", "Sky blue", 1], ["daisy", "Lilac", 2]],
    wrap: "Pearl white",
    ribbon: "Lilac",
  },
  {
    name: "Garden party",
    description: "A little of everything",
    stems: [["sunflower", "Golden yellow", 1], ["lily", "Magenta", 1], ["gerbera", "Orange", 1], ["tulip", "Red", 1], ["rose", "Peach", 1], ["daisy", "Butter", 2], ["gerbera", "Sky blue", 1]],
    wrap: "Kraft brown",
    ribbon: "Ivory",
  },
];

export function describeDesign(design: BouquetDesign) {
  const counts = new Map<string, number>();
  design.stems.forEach((stem) => {
    const name = flowerTypes.find((f) => f.kind === stem.kind)?.name ?? stem.kind;
    const key = `${name} (${stem.colour})`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  const lines = [...counts.entries()].map(([name, count]) => `${count} × ${name}`);
  lines.push(`Wrap: ${design.wrap} · Ribbon: ${design.ribbon}`);
  const extras = [design.greenery ? "greenery" : null, design.pearls ? "pearls" : null].filter(Boolean);
  if (extras.length) lines.push(`Extras: ${extras.join(" & ")}`);
  return lines;
}
