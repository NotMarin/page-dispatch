import type { FrameHistory, SimulationResult } from "@/types/types";

export function lruAlgorithm(
  referenceString: number[],
  frameCount: number
): SimulationResult {
  const simulatedFrames = Array(frameCount).fill(null);
  let simulatedFaults = 0;
  let simulatedHits = 0;
  const simulationHistory: FrameHistory[] = [
    { frames: [...simulatedFrames], fault: false, replaced: null },
  ];

  // LRU usage tracking
  const lruUsage: { [key: number]: number } = {};

  referenceString.forEach((page, step) => {
    // Check if page is already in frames (hit)
    const pageIndex = simulatedFrames.indexOf(page);
    let replaced: number | null = null;

    if (pageIndex !== -1) {
      // Page hit
      simulatedHits++;

      // Update LRU usage
      lruUsage[page] = step;

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
        // Need to replace a frame - use LRU
        let leastRecentlyUsed = Number.POSITIVE_INFINITY;
        simulatedFrames.forEach((frameValue, index) => {
          if (frameValue !== null && lruUsage[frameValue] < leastRecentlyUsed) {
            leastRecentlyUsed = lruUsage[frameValue];
            replaceIndex = index;
          }
        });
      }

      // Store the replaced page
      replaced = simulatedFrames[replaceIndex];

      // Replace the frame
      simulatedFrames[replaceIndex] = page;

      // Update LRU usage
      lruUsage[page] = step;

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
