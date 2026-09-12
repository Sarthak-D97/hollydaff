import type { BagItem } from "@/lib/order-message";

const KEY = "hollydaff-gift-bag-v1";
const EMPTY: BagItem[] = [];

let items: BagItem[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as BagItem[]) : [];
    items = Array.isArray(parsed) ? parsed : EMPTY;
  } catch {
    items = EMPTY;
  }
}

function emit() {
  listeners.forEach((listener) => listener());
}

export const bagStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (event: StorageEvent) => {
      if (event.key === KEY) {
        loaded = false;
        load();
        emit();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot() {
    load();
    return items;
  },
  getServerSnapshot() {
    return EMPTY;
  },
  set(next: BagItem[]) {
    items = next;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // storage may be unavailable (private mode); the bag still works for this visit
    }
    emit();
  },
};
