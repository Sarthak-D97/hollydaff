import { Eye, Play } from "lucide-react";
import Link from "next/link";
import { AutoplayVideo } from "./AutoplayVideo";
import { InstagramIcon } from "@/components/ui/Icons";
import type { Reel } from "@/data/reels";
import { compactNumber } from "@/lib/format";
import { cn } from "@/lib/cn";

export function ReelCard({ reel, className }: { reel: Reel; className?: string }) {
  return (
    <article className={cn("group relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-cocoa-800 shadow-lift", className)}>
      <AutoplayVideo video={reel.video} label={reel.title} className="transition duration-700 group-hover:scale-[1.03]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa-900/85 via-cocoa-900/10 to-transparent" />
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-cocoa-900/55 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur">
        <Eye className="size-3.5" /> {compactNumber(reel.views)} views
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-display text-2xl leading-tight text-cream-50">{reel.title}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href={reel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-3 py-1.5 text-xs font-semibold text-cocoa-900 transition hover:bg-white"
          >
            <InstagramIcon size={14} /> Watch on Instagram
          </a>
          {reel.productSlug ? (
            <Link
              href={`/products/${reel.productSlug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-cream-50/60 px-3 py-1.5 text-xs font-semibold text-cream-50 transition hover:bg-cream-50/15"
            >
              <Play className="size-3" /> Shop this
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
