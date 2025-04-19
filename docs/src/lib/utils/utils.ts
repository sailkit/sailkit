import { type ClassValue, clsx } from 'clsx';
import { page } from '$app/state';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
