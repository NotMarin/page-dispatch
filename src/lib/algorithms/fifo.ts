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

  // FIFO queue to track order of page entry
  const fifoQueue: number[] = [];

  referenceString.forEach((page) => {
    // Check if page is already in frames (hit)
    const pageIndex = simulatedFrames.indexOf(page);
    let replaced: number | null = null;

    if (pageIndex !== -1) {
      // Page hit
      simulatedHits++;
      simulationHistory.push({
        frames: [...simulatedFrames],
        fault: false,
        replaced: null,
      });
    } else {
      // Page fault
      simulatedFaults++;

      // Find frame to replace
      let replaceIndex = -1;

      if (simulatedFrames.includes(null)) {
        // Empty frame available
        replaceIndex = simulatedFrames.indexOf(null);
      } else {
        // Need to replace a frame - use FIFO
        const oldestPage = fifoQueue[0];
        replaceIndex = simulatedFrames.indexOf(oldestPage);
        fifoQueue.shift();
      }

      // Store the replaced page
      replaced = simulatedFrames[replaceIndex];

      // Replace the frame
      simulatedFrames[replaceIndex] = page;

      // Update FIFO queue
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
