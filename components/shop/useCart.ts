"use client";

import { useMemo, useSyncExternalStore } from "react";
import { addItem, changeLanguage, itemKey, parseCart, type CartItem, type Language } from "@/lib/cart";

const storageKey = "cbcm-cart-v1";
const listeners = new Set<() => void>();
let memory = "[]";
let memoryOnly = false;
function snapshot() {
  if (memoryOnly) return memory;
  try { return window.localStorage.getItem(storageKey) || "[]"; } catch { return memory; }
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  const storage = (event: StorageEvent) => { if (event.key === storageKey || event.key === null) listener(); };
  window.addEventListener("storage", storage);
  return () => { listeners.delete(listener); window.removeEventListener("storage", storage); };
}
function write(items: CartItem[]) {
  memory = JSON.stringify(items);
  try { window.localStorage.setItem(storageKey, memory); memoryOnly = false; } catch { memoryOnly = true; }
  listeners.forEach((listener) => listener());
}
const serverSnapshot = () => "[]";
const clientReady = () => true;
const serverReady = () => false;

export function useCart() {
  const raw = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const items = useMemo(() => parseCart(raw), [raw]);
  return {
    items,
    ready,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    add(item: CartItem) {
      const next = addItem(parseCart(snapshot()), item);
      if (!next) return false;
      write(next); return true;
    },
    remove(key: string) { write(parseCart(snapshot()).filter((item) => itemKey(item) !== key)); },
    quantity(key: string, quantity: number) {
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) return;
      write(parseCart(snapshot()).map((item) => itemKey(item) === key ? { ...item, quantity } : item));
    },
    language(key: string, language: Language) {
      const next = changeLanguage(parseCart(snapshot()), key, language);
      if (!next) return false;
      write(next); return true;
    },
  };
}
