"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import type { BagItem } from "@/lib/order-message";
import { bagStore } from "./bag-store";

type NewItem = Omit<BagItem, "id" | "qty"> & { qty?: number };

type BagContextValue = {
  items: BagItem[];
  count: number;
  isOpen: boolean;
  toast: string | null;
  open: () => void;
  close: () => void;
  addItem: (item: NewItem) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  dismissToast: () => void;
};

const BagContext = createContext<BagContextValue | null>(null);

function itemKey(item: Pick<BagItem, "kind" | "slug" | "name" | "option" | "note" | "details">) {
  return [item.kind, item.slug ?? item.name, item.option ?? "", item.note ?? "", (item.details ?? []).join("|")].join("::");
}

export function BagProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(bagStore.subscribe, bagStore.getSnapshot, bagStore.getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3800);
  }, []);

  const addItem = useCallback(
    ({ qty = 1, ...item }: NewItem) => {
      const current = bagStore.getSnapshot();
      const key = itemKey(item);
      const existing = current.find((entry) => itemKey(entry) === key);
      if (existing) {
        bagStore.set(current.map((entry) => (entry.id === existing.id ? { ...entry, qty: Math.min(entry.qty + qty, 999) } : entry)));
      } else {
        const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
        bagStore.set([...current, { ...item, id, qty }]);
      }
      showToast(`${item.name} added to your gift bag`);
    },
    [showToast],
  );

  const updateQty = useCallback((id: string, qty: number) => {
    const current = bagStore.getSnapshot();
    if (qty <= 0) {
      bagStore.set(current.filter((entry) => entry.id !== id));
    } else {
      bagStore.set(current.map((entry) => (entry.id === id ? { ...entry, qty: Math.min(qty, 999) } : entry)));
    }
  }, []);

  const removeItem = useCallback((id: string) => {
    bagStore.set(bagStore.getSnapshot().filter((entry) => entry.id !== id));
  }, []);

  const clear = useCallback(() => bagStore.set([]), []);
  const open = useCallback(() => {
    setToast(null);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const dismissToast = useCallback(() => setToast(null), []);

  const value = useMemo<BagContextValue>(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.qty, 0),
      isOpen,
      toast,
      open,
      close,
      addItem,
      updateQty,
      removeItem,
      clear,
      dismissToast,
    }),
    [items, isOpen, toast, open, close, addItem, updateQty, removeItem, clear, dismissToast],
  );

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error("useBag must be used inside <BagProvider>");
  return context;
}
