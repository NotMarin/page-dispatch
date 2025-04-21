import type { SimulationResult, FrameHistory } from "@/types/types";

export function clockAlgorithm(
  referenceString: number[],
  frameCount: number
): SimulationResult {
  const frames = Array(frameCount).fill(null);
  const refBits: boolean[] = Array(frameCount).fill(false);
  const history: FrameHistory[] = [
    {
      frames: [...frames],
      fault: false,
      replaced: null,
      refBits: [...refBits],
    },
  ];

  let pageFaults = 0;
  let pageHits = 0;
  let clockPointer = 0;

  for (const page of referenceString) {
    const hitIndex = frames.indexOf(page);

    if (hitIndex !== -1) {
      // Page hit
      pageHits++;
      refBits[hitIndex] = true;
      history.push({
        frames: [...frames],
        fault: false,
        replaced: null,
        refBits: [...refBits],
      });
      continue;
    }

    // Page fault
    pageFaults++;
    let replaced: number | null = null;

    while (true) {
      if (frames[clockPointer] === null) {
        // Empty frame, use directly
        frames[clockPointer] = page;
        refBits[clockPointer] = true;
        break;
      }

      if (!refBits[clockPointer]) {
        // Replace this page
        replaced = frames[clockPointer]!;
        frames[clockPointer] = page;
        refBits[clockPointer] = true;
        break;
      }

      // Give a second chance
      refBits[clockPointer] = false;
      clockPointer = (clockPointer + 1) % frameCount;
    }

    history.push({
      frames: [...frames],
      fault: true,
      replaced,
      refBits: [...refBits],
    });

    // Move clock pointer to next position
    clockPointer = (clockPointer + 1) % frameCount;
  }

  return { history, pageFaults, pageHits };
}
