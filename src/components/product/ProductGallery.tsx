"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { ProductImage } from "@/data/products";
import type { MediaVideo } from "@/data/media";
import { AutoplayVideo } from "@/components/media/AutoplayVideo";
import { cn } from "@/lib/cn";

type Slide = { type: "image"; image: ProductImage } | { type: "video"; video: MediaVideo };

export function ProductGallery({ images, video, name }: { images: ProductImage[]; video?: MediaVideo; name: string }) {
  const slides: Slide[] = [...images.map((image) => ({ type: "image" as const, image })), ...(video ? [{ type: "video" as const, video }] : [])];
  const [index, setIndex] = useState(0);
  const current = slides[index];
  const go = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length);

  return (
    <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-petal-50 shadow-lift">
        {current.type === "image" ? (
          <Image
            key={current.image.src}
            src={current.image.src}
            alt={current.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            placeholder="blur"
            blurDataURL={current.image.blurDataURL}
            preload={index === 0}
            className="object-cover"
          />
        ) : (
          <AutoplayVideo key={current.video.src} video={current.video} label={`${name} video`} />
        )}

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/90 text-cocoa-800 shadow-soft backdrop-blur transition hover:bg-white"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/90 text-cocoa-800 shadow-soft backdrop-blur transition hover:bg-white"
              aria-label="Next photo"
            >
              <ChevronRight className="size-5" />
            </button>
            <span className="absolute bottom-4 right-4 rounded-full bg-cocoa-900/55 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur">
              {index + 1} / {slides.length}
            </span>
          </>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <ul className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1">
          {slides.map((slide, i) => (
            <li key={i} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "relative block aspect-[4/5] w-[4.5rem] overflow-hidden rounded-2xl ring-2 transition sm:w-20",
                  i === index ? "ring-berry-500" : "ring-transparent opacity-75 hover:opacity-100",
                )}
                aria-label={slide.type === "image" ? `Show photo ${i + 1}` : "Play video"}
                aria-current={i === index}
              >
                <Image
                  src={slide.type === "image" ? slide.image.src : slide.video.poster}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                {slide.type === "video" ? (
                  <span className="absolute inset-0 grid place-items-center bg-cocoa-900/35 text-white">
                    <Play className="size-5 fill-white" />
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
