"use client";

import { useEffect, useRef } from "react";
import type { MediaVideo } from "@/data/media";
import { cn } from "@/lib/cn";

type Props = {
  video: MediaVideo;
  className?: string;
  /** Start playing as soon as it's visible (default) or only while hovered. */
  mode?: "in-view" | "hover";
  label?: string;
  eager?: boolean;
};

export function AutoplayVideo({ video, className, mode = "in-view", label, eager = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.pause();
      return;
    }

    if (mode === "hover") {
      const host = el.closest("[data-hover-video]") ?? el.parentElement;
      if (!host) return;
      const play = () => {
        el.play().catch(() => {});
      };
      const stop = () => {
        el.pause();
      };
      host.addEventListener("mouseenter", play);
      host.addEventListener("mouseleave", stop);
      return () => {
        host.removeEventListener("mouseenter", play);
        host.removeEventListener("mouseleave", stop);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mode]);

  return (
    <video
      ref={ref}
      className={cn("size-full object-cover", className)}
      poster={video.poster}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      autoPlay={eager}
      aria-label={label}
      width={video.width}
      height={video.height}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
