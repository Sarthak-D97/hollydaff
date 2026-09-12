"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy } from "lucide-react";
import { buildEnquiryMessage } from "@/lib/order-message";
import { copyText, emailUrl, sendViaInstagram, whatsappUrl } from "@/lib/share";
import { buttonClasses } from "@/components/ui/Button";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type Field = {
  name: string;
  label: string;
  type?: "text" | "number" | "date" | "textarea" | "select";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  half?: boolean;
};

type Props = {
  title: string;
  intro: string;
  fields: Field[];
  submitLabel?: string;
  className?: string;
};

export function EnquiryForm({ title, intro, fields, submitLabel = "Send on Instagram", className }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent" | "copied">("idle");

  const message = buildEnquiryMessage(
    intro,
    fields.map((field) => [field.label, values[field.name]]),
  );
  const whatsapp = whatsappUrl(message);
  const email = emailUrl(`${title} — Hollydaff`, message);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendViaInstagram(message).then((ok) => setStatus(ok ? "sent" : "idle"));
  };

  return (
    <form onSubmit={onSubmit} className={cn("min-w-0 rounded-[2rem] border border-cocoa-800/10 bg-cream-50 p-5 shadow-soft sm:p-8", className)}>
      <h2 className="font-display text-4xl text-cocoa-900">{title}</h2>
      <p className="mt-2 text-cocoa-600">Fill this in and we&apos;ll turn it into a message for our Instagram chat — no sign-up needed.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const common = {
            id: `f-${field.name}`,
            name: field.name,
            required: field.required,
            value: values[field.name] ?? "",
            placeholder: field.placeholder,
            onChange: (e: { target: { value: string } }) => setValues((v) => ({ ...v, [field.name]: e.target.value })),
            className:
              "w-full min-w-0 appearance-none rounded-2xl border border-cocoa-800/15 bg-white/70 px-4 text-cocoa-900 outline-none transition placeholder:text-cocoa-300 focus:border-berry-400 focus:ring-2 focus:ring-petal-200",
          };
          return (
            <label key={field.name} htmlFor={common.id} className={cn("grid min-w-0 gap-1.5 text-sm font-medium text-cocoa-700", !field.half && "sm:col-span-2")}>
              <span>
                {field.label} {field.required ? <span className="text-berry-500">*</span> : null}
              </span>
              {field.type === "textarea" ? (
                <textarea {...common} rows={4} className={cn(common.className, "py-3")} />
              ) : field.type === "select" ? (
                <select {...common} className={cn(common.className, "h-12")}>
                  <option value="">Select…</option>
                  {field.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input {...common} type={field.type ?? "text"} min={field.type === "number" ? 1 : undefined} className={cn(common.className, "h-12")} />
              )}
            </label>
          );
        })}
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <button type="submit" className={buttonClasses("primary", "lg", "w-full sm:col-span-2")}>
          <InstagramIcon size={20} /> {submitLabel}
        </button>
        {whatsapp ? (
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={buttonClasses("secondary", "md", "w-full")}>
            <WhatsAppIcon size={18} /> WhatsApp instead
          </a>
        ) : null}
        {email ? (
          <a href={email} className={buttonClasses("secondary", "md", "w-full")}>
            Email instead
          </a>
        ) : null}
        <button
          type="button"
          onClick={() => copyText(message).then((ok) => ok && setStatus("copied"))}
          className={buttonClasses("soft", "md", cn("w-full", !whatsapp && !email && "sm:col-span-2"))}
        >
          {status === "copied" ? <Check className="size-4" /> : <Copy className="size-4" />} {status === "copied" ? "Copied!" : "Copy message"}
        </button>
      </div>
      {status === "sent" ? (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-leaf-200/60 px-3 py-2 text-sm text-leaf-700">
          <Check className="size-4" /> Message copied — paste it in the chat with @{site.instagram.handle}.
        </p>
      ) : (
        <p className="mt-4 text-xs text-cocoa-500">We usually reply within a day. {site.payment}.</p>
      )}
    </form>
  );
}
