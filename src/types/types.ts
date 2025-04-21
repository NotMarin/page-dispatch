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
}

export interface SimulationResult {
  history: FrameHistory[];
  pageFaults: number;
  pageHits: number;
}
