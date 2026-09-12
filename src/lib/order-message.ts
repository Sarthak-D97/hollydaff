export type BagItem = {
  id: string;
  kind: "product" | "custom";
  name: string;
  slug?: string;
  image?: string;
  option?: string;
  note?: string;
  details?: string[];
  qty: number;
};

export type CustomerDetails = {
  name?: string;
  city?: string;
  occasion?: string;
  date?: string;
  notes?: string;
};

export function buildOrderMessage(items: BagItem[], customer: CustomerDetails = {}, siteUrl?: string) {
  const lines: string[] = ["Hi Hollydaff! 🌷 I'd love to order:", ""];

  items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.name} × ${item.qty}`);
    if (item.option) lines.push(`   • ${item.option}`);
    item.details?.forEach((detail) => lines.push(`   • ${detail}`));
    if (item.note) lines.push(`   • Note: ${item.note}`);
    if (item.slug && siteUrl) lines.push(`   • ${siteUrl.replace(/\/$/, "")}/products/${item.slug}`);
  });

  const extra: Array<[string, string | undefined]> = [
    ["Name", customer.name],
    ["City / pincode", customer.city],
    ["Occasion", customer.occasion],
    ["Needed by", customer.date],
    ["Notes", customer.notes],
  ];
  const filled = extra.filter(([, value]) => value && value.trim());
  if (filled.length) {
    lines.push("");
    filled.forEach(([label, value]) => lines.push(`${label}: ${value!.trim()}`));
  }

  lines.push("", "Could you please share the price and delivery date? Thank you! 💌");
  return lines.join("\n");
}

export function buildEnquiryMessage(title: string, fields: Array<[string, string | undefined]>) {
  const lines = [`Hi Hollydaff! 🌷 ${title}`, ""];
  fields.filter(([, v]) => v && v.trim()).forEach(([label, value]) => lines.push(`${label}: ${value!.trim()}`));
  lines.push("", "Looking forward to hearing from you! 💌");
  return lines.join("\n");
}
