import type { Algorithm, SimulationResult } from "@/types/types";
import { fifoAlgorithm } from "./algorithms/fifo";

export function runSimulation(
  algorithm: Algorithm,
  referenceString: number[],
  frameCount: number
): SimulationResult {
  switch (algorithm) {
    case "fifo":
      return fifoAlgorithm(referenceString, frameCount);

    default:
      return {
        history: [
          {
            frames: Array(frameCount).fill(null),
            fault: false,
            replaced: null,
          },
        ],
        pageFaults: 0,
        pageHits: 0,
      };
  }
}
