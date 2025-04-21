export type Algorithm = "fifo" | "fifoplus" | "lru" | "optimal" | "fifo+";

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
