"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/data/site";

const subscribe = () => () => {};

/** The current site origin on the client (falls back to the configured URL during SSR). */
export function useOrigin() {
  return useSyncExternalStore(subscribe, () => window.location.origin, () => site.url);
}
