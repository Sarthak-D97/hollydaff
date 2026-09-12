import { images, type MediaImage } from "./media";
import type { FlowerKind } from "@/components/flowers/heads";

export type CategorySlug = "bouquets" | "baskets" | "mini-pots" | "keychains" | "car-hangings" | "gifts";

export type Category = {
  slug: CategorySlug;
  name: string;
  short: string;
  teaser: string;
  description: string;
  image: MediaImage;
  imageAlt: string;
  icon: { kind: FlowerKind; colour?: string };
};

export const categories: Category[] = [
  {
    slug: "bouquets",
    name: "Bouquets & Stems",
    short: "Bouquets",
    teaser: "Single stems to grand bouquets",
    description:
      "From a single rose to a grand garden bouquet — forever blooms wrapped in tulle, lace and satin, in every colour you can dream of.",
    image: images["sunflower-bouquet-1"],
    imageAlt: "Handmade sunflower bouquet with daisies in blush wrap",
    icon: { kind: "sunflower" },
  },
  {
    slug: "baskets",
    name: "Flower Baskets",
    short: "Baskets",
    teaser: "Baskets full of love",
    description:
      "Woven baskets brimming with sunflowers, lilies and roses — a basket full of love for birthdays, anniversaries and Raksha Bandhan.",
    image: images["flower-basket-1"],
    imageAlt: "Cane basket filled with a handmade sunflower, lilies and red roses",
    icon: { kind: "rose", colour: "Red" },
  },
  {
    slug: "mini-pots",
    name: "Mini Pots",
    short: "Mini pots",
    teaser: "Our best-selling desk buddies",
    description:
      "Palm-sized desk buddies in cupcake pots — our best-selling pieces for return gifts, exhibitions and stalls.",
    image: images["mini-pots-1"],
    imageAlt: "Mini potted pink lily made from chenille stems",
    icon: { kind: "tulip", colour: "Red" },
  },
  {
    slug: "keychains",
    name: "Keychains & Charms",
    short: "Keychains",
    teaser: "Blooms for your keys & bags",
    description:
      "Gerberas, lilies, strawberries, orchids and tiny bouquets on gold-tone rings — sweet on bags, keys and gift hampers.",
    image: images["flower-keychains-1"],
    imageAlt: "Blue gerbera flower keychain held in hand",
    icon: { kind: "gerbera", colour: "Sky blue" },
  },
  {
    slug: "car-hangings",
    name: "Car Hangings",
    short: "Car hangings",
    teaser: "Dreamy rear-view mirror charms",
    description: "Pastel tulip bells with pearls and cascading blossoms — a dreamy charm for your rear-view mirror.",
    image: images["car-hanging-1"],
    imageAlt: "Pink and lilac tulip bell car hangings with pearl strings",
    icon: { kind: "lily", colour: "Lilac" },
  },
  {
    slug: "gifts",
    name: "Gifts & Décor",
    short: "Gifts",
    teaser: "Lanterns, phone covers & hampers",
    description: "Glowing rose lanterns, handmade phone covers and themed hampers for the people who have everything.",
    image: images["rose-lantern-1"],
    imageAlt: "Glowing red rose lantern made by hand",
    icon: { kind: "daisy", colour: "Butter" },
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
