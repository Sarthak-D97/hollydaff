import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-cocoa-800/10 rounded-[2rem] border border-cocoa-800/10 bg-cream-50 px-6 sm:px-8">
      {items.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-2xl text-cocoa-900 transition hover:text-berry-600">
            {faq.question}
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-cocoa-800/15 transition group-open:rotate-45 group-open:border-berry-400 group-open:bg-berry-500 group-open:text-white">
              <Plus className="size-4" />
            </span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-cocoa-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
