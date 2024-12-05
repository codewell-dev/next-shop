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