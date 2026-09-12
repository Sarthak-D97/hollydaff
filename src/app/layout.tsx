import type { Metadata, Viewport } from "next";
import { Caveat, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BagProvider } from "@/components/bag/BagProvider";
import { BagDrawer } from "@/components/bag/BagDrawer";
import { FlowerDefs } from "@/components/flowers/FlowerDefs";
import { MotionProvider } from "@/components/ui/MotionProvider";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url || "http://localhost:3000"),
  title: {
    default: "Hollydaff — Handmade Forever Flowers, Bouquets & Gifts",
    template: "%s · Hollydaff",
  },
  description: site.description,
  applicationName: "Hollydaff",
  keywords: [
    "handmade flowers",
    "pipe cleaner flowers",
    "chenille flowers",
    "forever flowers",
    "handmade bouquet",
    "sunflower bouquet",
    "flower basket",
    "mini flower pots",
    "flower keychain",
    "car hanging",
    "return gifts",
    "bulk gifts",
    "Ranchi",
    "India",
  ],
  openGraph: {
    type: "website",
    siteName: "Hollydaff",
    locale: "en_IN",
    title: "Hollydaff — Handmade Forever Flowers",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollydaff — Handmade Forever Flowers",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#fbf6f0",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Hollydaff",
  description: site.description,
  url: site.url,
  image: `${site.url}/brand/hollydaff-logo.jpg`,
  logo: `${site.url}/brand/hollydaff-logo.jpg`,
  sameAs: [site.instagram.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: "IN",
  },
  areaServed: "IN",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${hand.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-dvh">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <FlowerDefs />
        <MotionProvider>
          <BagProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cocoa-900 focus:px-4 focus:py-2 focus:text-cream-50"
            >
              Skip to content
            </a>
            <AnnouncementBar />
            <Header />
            <main id="main" className="overflow-x-clip">{children}</main>
            <Footer />
            <BagDrawer />
          </BagProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
