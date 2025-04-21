export type Algorithm =
  | "fifo"
  | "lru"
  | "optimal"
  | "fifo+"
  | "clock"
  | "second-chance";

export interface FrameHistory {
  frames: (number | null)[];
  fault: boolean;
  replaced: number | null;
  refBits?: Record<number, boolean>;
}

export interface SimulationResult {
  history: FrameHistory[];
  pageFaults: number;
  pageHits: number;
}
