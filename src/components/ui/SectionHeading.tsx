import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Sparkle } from "@/components/flowers/Decor";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "dark", className, as = "h2" }: Props) {
  const Heading = as;
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-4 inline-flex items-center gap-2",
            tone === "dark" ? "text-berry-600" : "text-petal-200",
          )}
        >
          <Sparkle size={10} />
          {eyebrow}
          <Sparkle size={10} />
        </p>
      ) : null}
      <Heading
        className={cn(
          "font-display font-medium leading-[1.05] tracking-tight",
          as === "h1" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl",
          tone === "dark" ? "text-cocoa-900" : "text-cream-50",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-cocoa-600" : "text-cream-200/85")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Italic, berry-coloured accent word inside display headings. */
export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return <em className={cn("font-display italic font-medium text-berry-500", className)}>{children}</em>;
}
