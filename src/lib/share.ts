import { site } from "@/data/site";

function legacyCopy(text: string) {
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Starts the copy synchronously (inside the click handler) so it still works when we
 * open a new tab right after, then resolves with whether it succeeded.
 */
export function copyText(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => legacyCopy(text),
    );
  }
  return Promise.resolve(legacyCopy(text));
}

export function whatsappUrl(text: string) {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function emailUrl(subject: string, text: string) {
  if (!site.email) return null;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

/** Instagram can't prefill DMs, so copy the message and open the chat in the same click. */
export function sendViaInstagram(text: string) {
  const copied = copyText(text);
  window.open(site.instagram.dm, "_blank", "noopener,noreferrer");
  return copied;
}
