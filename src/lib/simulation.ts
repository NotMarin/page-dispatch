import type { Algorithm, SimulationResult } from "@/types/types";
import { fifoAlgorithm } from "./algorithms/fifo";
import { lruAlgorithm } from "./algorithms/lru";
import { optimalAlgorithm } from "./algorithms/optimal";

export function runSimulation(
  algorithm: Algorithm,
  referenceString: number[],
  frameCount: number
): SimulationResult {
  switch (algorithm) {
    case "fifo":
      return fifoAlgorithm(referenceString, frameCount);
    case "lru":
      return lruAlgorithm(referenceString, frameCount);
    case "optimal":
      return optimalAlgorithm(referenceString, frameCount);
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
