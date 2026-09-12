import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "soft" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-berry-500 text-cream-50 shadow-[0_10px_24px_-12px_rgb(207_84_114/0.8)] hover:bg-berry-600 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-cocoa-800/80 text-cocoa-800 hover:bg-cocoa-800 hover:text-cream-50 hover:-translate-y-0.5 active:translate-y-0",
  soft: "bg-petal-100 text-berry-700 hover:bg-petal-200 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-cocoa-700 hover:text-berry-600 hover:bg-petal-50",
  light: "bg-cream-50 text-cocoa-900 hover:bg-white hover:-translate-y-0.5 active:translate-y-0 shadow-soft",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size; children: ReactNode };

export function ButtonLink({ variant = "primary", size = "md", className, children, ...rest }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

type ExternalLinkProps = ComponentProps<"a"> & { variant?: Variant; size?: Size };

export function ButtonExternal({ variant = "primary", size = "md", className, children, ...rest }: ExternalLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; size?: Size };

export function Button({ variant = "primary", size = "md", className, type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...rest} />;
}
