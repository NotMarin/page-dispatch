import type { FrameHistory, SimulationResult } from "@/types/types";

export function fifoAlgorithm(
  referenceString: number[],
  frameCount: number
): SimulationResult {
  const simulatedFrames = Array(frameCount).fill(null);
  let simulatedFaults = 0;
  let simulatedHits = 0;
  const simulationHistory: FrameHistory[] = [
    { frames: [...simulatedFrames], fault: false, replaced: null },
  ];

  const fifoQueue: number[] = [];

  referenceString.forEach((page) => {
    const pageIndex = simulatedFrames.indexOf(page);
    let replaced: number | null = null;

    if (pageIndex !== -1) {
      simulatedHits++;
      simulationHistory.push({
        frames: [...simulatedFrames],
        fault: false,
        replaced: null,
      });
    } else {
      simulatedFaults++;

      let replaceIndex = -1;

      if (simulatedFrames.includes(null)) {
        replaceIndex = simulatedFrames.indexOf(null);
      } else {
        const oldestPage = fifoQueue[0];
        replaceIndex = simulatedFrames.indexOf(oldestPage);
        fifoQueue.shift();
      }

      replaced = simulatedFrames[replaceIndex];

      simulatedFrames[replaceIndex] = page;

      fifoQueue.push(page);

      simulationHistory.push({
        frames: [...simulatedFrames],
        fault: true,
        replaced,
      });
    }
  });

  return {
    history: simulationHistory,
    pageFaults: simulatedFaults,
    pageHits: simulatedHits,
  };
}
