import type { FrameHistory, SimulationResult } from "@/types/types";

export function optimalAlgorithm(
  referenceString: number[],
  frameCount: number
): SimulationResult {
  const simulatedFrames = Array(frameCount).fill(null);
  let simulatedFaults = 0;
  let simulatedHits = 0;
  const simulationHistory: FrameHistory[] = [
    { frames: [...simulatedFrames], fault: false, replaced: null },
  ];

  // For Optimal algorithm - track future usage of each page
  const futureUsage: { [key: number]: number[] } = {};
  referenceString.forEach((page, index) => {
    if (!futureUsage[page]) {
      futureUsage[page] = [];
    }
    futureUsage[page].push(index);
  });

  referenceString.forEach((page, step) => {
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
        // Need to replace a frame - use Optimal
        let furthestUse = -1;
        simulatedFrames.forEach((frameValue, index) => {
          if (frameValue === null) return;

          // Find next use of this page
          const futureUses = futureUsage[frameValue];
          const nextUseIndex = futureUses.findIndex(
            (useStep) => useStep > step
          );

          // If page won't be used again, replace it
          if (nextUseIndex === -1) {
            replaceIndex = index;
            furthestUse = Number.POSITIVE_INFINITY;
            return;
          }

          const nextUse = futureUses[nextUseIndex];
          if (nextUse > furthestUse) {
            furthestUse = nextUse;
            replaceIndex = index;
          }
        });
      }

      // Store the replaced page
      replaced = simulatedFrames[replaceIndex];

      // Replace the frame
      simulatedFrames[replaceIndex] = page;

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
