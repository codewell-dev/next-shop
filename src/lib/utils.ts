import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceCounts(quantity: number | undefined, price: number): string {
  const qty = quantity ?? 1;
  return (qty * price).toFixed(2);
}

export function LocalStorageSet(data: any) {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(data));
  }
}

export function changeActiveImgPlus(
  current: number,
  setter: (n: number) => void,
  item: Product
) {
  if (current < item.images.length - 1) {
    setter(current + 1);
  } else {
    setter(0);
  }
}

export function changeActiveImgMinus(
  current: number,
  setter: (n: number) => void
) {
  if (current > 0) {
    setter(current - 1);
  }
}
