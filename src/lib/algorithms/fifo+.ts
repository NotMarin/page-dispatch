import type { SimulationResult, FrameHistory } from "@/types/types";

export function fifoPlusAlgorithm(
  referenceString: number[],
  frameCount: number
): SimulationResult {
  const frames = Array(frameCount).fill(null);
  const fifoQueue: number[] = [];
  const refBits: Record<number, boolean> = {};
  const history: FrameHistory[] = [
    { frames: [...frames], fault: false, replaced: null },
  ];

  let pageFaults = 0;
  let pageHits = 0;

  for (const page of referenceString) {
    const hitIndex = frames.indexOf(page);

    if (hitIndex !== -1) {
      // Page hit
      pageHits++;
      updateRefBits(refBits, page);
      history.push({ frames: [...frames], fault: false, replaced: null });
      continue;
    }

    // Page fault
    pageFaults++;
    let replaceIndex: number;
    let replaced: number | null = null;

    if (frames.includes(null)) {
      replaceIndex = frames.indexOf(null);
    } else {
      const victim = findVictimPage(fifoQueue, refBits);
      replaceIndex = frames.indexOf(victim);
      fifoQueue.splice(fifoQueue.indexOf(victim), 1);
      replaced = victim;
    }

    frames[replaceIndex] = page;
    fifoQueue.push(page);
    refBits[page] = true;

    history.push({ frames: [...frames], fault: true, replaced });
  }

  return { history, pageFaults, pageHits };
}

// Helper to update all reference bits, setting only the current page to true
function updateRefBits(refBits: Record<number, boolean>, currentPage: number) {
  for (const page in refBits) {
    refBits[Number(page)] = Number(page) === currentPage;
  }
}

// Helper to find a victim page using the second-chance algorithm
function findVictimPage(
  queue: number[],
  refBits: Record<number, boolean>
): number {
  const tempQueue = [...queue];

  while (true) {
    const candidate = tempQueue.shift()!;
    if (refBits[candidate]) {
      refBits[candidate] = false;
      tempQueue.push(candidate);
    } else {
      return candidate;
    }
  }
}
