import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function changeActiveImgMinus(index: number, setActiveImage: any) {
  if(index == 0) {
    return index
  } else {
    setActiveImage(index - 1)
  }
}

export function changeActiveImgPlus (index: number, setActiveImage: any, item: any) {
  if (index == item.images.length - 1) {
    return index
  } else {
    setActiveImage(index + 1)
  }
}

export function priceCounts(quantity: any, price: any) {
  if(quantity == 1) {
    return price.toString().slice(0,5)
  } else {
    let newPrice: any = price * quantity
    return newPrice.toString().slice(0,5)
  }
} 
export function LocalStorageSet(state: any) {
  localStorage.setItem("cart", JSON.stringify(state));
}
