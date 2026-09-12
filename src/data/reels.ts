import { videos, type MediaVideo } from "./media";

export type Reel = {
  title: string;
  views: number;
  video: MediaVideo;
  href: string;
  productSlug?: string;
};

const url = (code: string) => `https://www.instagram.com/reel/${code}/`;

export const reels: Reel[] = [
  { title: "Bulk mini pots in the making", views: 125051, video: videos["reel-bulk-pots"], href: url("DVtooQsD-s1"), productSlug: "mini-flower-pots" },
  { title: "Flower keychains", views: 121772, video: videos["reel-keychains"], href: url("DVBuWFZjwLN"), productSlug: "flower-keychains" },
  { title: "Tulip bell car hanging", views: 96752, video: videos["reel-car-hanging"], href: url("DZNhUTtvhAx"), productSlug: "tulip-bell-car-hanging" },
  { title: "A bulk order, packed", views: 80742, video: videos["reel-bulk-order"], href: url("DXZoXikD3ei") },
  { title: "Keychains in every colour", views: 22122, video: videos["reel-keychains-colours"], href: url("DTcaardjxlU"), productSlug: "mini-bouquet-keychain" },
  { title: "Handmade phone cover", views: 20758, video: videos["reel-phone-cover"], href: url("DXj7KocDycN"), productSlug: "flower-phone-cover" },
  { title: "Mini flower pots", views: 14020, video: videos["reel-mini-pots"], href: url("DVWOVUGD0vx"), productSlug: "mini-flower-pots" },
  { title: "Lilies for every mood", views: 12168, video: videos["reel-lilies"], href: url("DWMDV5Oib3E"), productSlug: "lily-stems" },
  { title: "Sunflower bouquet", views: 6958, video: videos["reel-sunflower-bouquet"], href: url("DTPvXu7j6z7"), productSlug: "sunflower-bouquet" },
  { title: "Glowing rose lantern", views: 1983, video: videos["reel-rose-lantern"], href: url("DS70Z8Mj-xB"), productSlug: "rose-lantern" },
];
