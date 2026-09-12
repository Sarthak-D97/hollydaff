// Central business details. Everything customer-facing reads from here, so update it
// in one place (WhatsApp number, email, domain, prices live in products.ts).

function resolveSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProdUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelUrl = process.env.VERCEL_URL?.trim();

  let target =
    envUrl ||
    (vercelProdUrl ? `https://${vercelProdUrl}` : "") ||
    (vercelUrl ? `https://${vercelUrl}` : "") ||
    "http://localhost:3000";

  if (!/^https?:\/\//i.test(target)) {
    target = `https://${target}`;
  }

  try {
    const parsed = new URL(target);
    return parsed.href.replace(/\/$/, "");
  } catch {
    return "http://localhost:3000";
  }
}

export const site = {
  name: "Hollydaff",
  tagline: "Handmade with heart",
  description:
    "Handmade pipe-cleaner flowers that never wilt — bouquets, flower baskets, mini pots, keychains, car hangings and gift hampers. Custom & bulk orders, shipped across India.",
  url: resolveSiteUrl(),
  founder: "Taniya",
  location: {
    city: "Ranchi",
    region: "Jharkhand",
    country: "India",
  },
  instagram: {
    handle: "hollydaff.co",
    url: "https://www.instagram.com/hollydaff.co/",
    // Opens a DM thread with the shop on the Instagram app / web.
    dm: "https://ig.me/m/hollydaff.co",
  },
  // Digits only, with country code (e.g. "919876543210"). Leave empty to hide WhatsApp buttons.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  stats: {
    reelViews: "800K+",
    community: "1.6K+",
    likes: "15K+",
    designs: "50+",
  },
  shippedTo: ["Chennai", "Bengaluru", "Haryana", "the UK"],
  payment: "Prepaid orders only",
} as const;

export const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/custom-bouquet", label: "Design a Bouquet" },
  { href: "/bulk-orders", label: "Bulk & Gifting" },
  { href: "/about", label: "Our Story" },
  { href: "/reviews", label: "Reviews" },
] as const;
