import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mailtoFor(subject: string) {
  return `mailto:moderndentalminot@gmail.com?subject=${encodeURIComponent(subject)}`;
}
