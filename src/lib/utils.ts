import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Algorithm } from "../types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseReferenceString(referenceString: string): number[] {
  try {
    const parsed = referenceString
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "")
      .map((s) => Number.parseInt(s, 10));

    if (parsed.some(isNaN)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

export function getAlgorithmName(algorithm: Algorithm): string {
  switch (algorithm) {
    case "fifo":
      return "First-In-First-Out (FIFO)";
    case "lru":
      return "Least Recently Used (LRU)";
    case "optimal":
      return "Óptimo";
    case "fifo+":
      return "FIFO+";
    case "clock":
      return "Reloj";
    case "second-chance":
      return "Segunda Oportunidad";
    default:
      return "Unknown Algorithm";
  }
}
