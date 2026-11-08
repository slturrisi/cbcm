export const languages = [
  "Chinese Traditional", "Danish", "Dutch", "English", "French", "German", "Greek", "Hebrew", "Hungarian", "Italian", "Japanese", "Norwegian", "Portuguese", "Russian", "Spanish (Castillian)", "Spanish (Latin American)", "Swedish",
] as const;
// Display prices from the supplied reference. Verify local prices before live checkout.
export const prices = { Paperback: 20 } as const;
export type Format = keyof typeof prices;
export type Language = (typeof languages)[number];
export type CartItem = { format: Format; language: Language; quantity: number };
export const itemKey = (item: Pick<CartItem, "format" | "language">) => `${item.format}:${item.language}`;
export const money = (amount: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
export const subtotal = (items: CartItem[]) => items.reduce((sum, item) => sum + prices[item.format] * item.quantity, 0);

export function parseCart(raw: string): CartItem[] {
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    const result: CartItem[] = [];
    for (const item of value) {
      if (!item || typeof item !== "object" || !Object.hasOwn(prices, item.format) || !languages.includes(item.language) || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) continue;
      const existing = result.find((entry) => itemKey(entry) === itemKey(item));
      if (existing) existing.quantity = Math.min(99, existing.quantity + item.quantity);
      else result.push({ format: item.format, language: item.language, quantity: item.quantity });
    }
    return result;
  } catch { return []; }
}

export function addItem(items: CartItem[], added: CartItem): CartItem[] | null {
  if (!Object.hasOwn(prices, added.format) || !languages.includes(added.language) || !Number.isInteger(added.quantity) || added.quantity < 1 || added.quantity > 99) return null;
  const existing = items.find((item) => itemKey(item) === itemKey(added));
  if (existing && existing.quantity + added.quantity > 99) return null;
  return existing ? items.map((item) => itemKey(item) === itemKey(added) ? { ...item, quantity: item.quantity + added.quantity } : item) : [...items, { ...added }];
}

export function changeLanguage(items: CartItem[], key: string, language: Language): CartItem[] | null {
  const item = items.find((entry) => itemKey(entry) === key);
  if (!item || !languages.includes(language)) return null;
  return addItem(items.filter((entry) => itemKey(entry) !== key), { ...item, language });
}
