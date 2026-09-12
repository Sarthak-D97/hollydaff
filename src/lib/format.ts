/** 121772 → "121K", 6958 → "6.9K" (rounded down, so it never overstates). */
export function compactNumber(value: number) {
  if (value >= 1_000_000) return `${Math.floor(value / 100_000) / 10}M`;
  if (value >= 10_000) return `${Math.floor(value / 1000)}K`;
  if (value >= 1000) return `${Math.floor(value / 100) / 10}K`;
  return String(value);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
