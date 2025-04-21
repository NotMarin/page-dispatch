import type { SimulationResult, FrameHistory } from "@/types/types";

export function secondChanceAlgorithm(
  referenceString: number[],
  frameCount: number
): SimulationResult {
  const frames = Array(frameCount).fill(null);
  const queue: number[] = [];
  const refBits: Record<number, boolean> = {};
  const history: FrameHistory[] = [
    { frames: [...frames], fault: false, replaced: null },
  ];

  let pageFaults = 0;
  let pageHits = 0;

  for (const page of referenceString) {
    const hitIndex = frames.indexOf(page);

    if (hitIndex !== -1) {
      pageHits++;
      refBits[page] = true;
      history.push({ frames: [...frames], fault: false, replaced: null });
      continue;
    }

    pageFaults++;
    let replaceIndex: number;
    let replaced: number | null = null;

    if (frames.includes(null)) {
      replaceIndex = frames.indexOf(null);
    } else {
      const victim = findVictimPage(queue, refBits);
      replaceIndex = frames.indexOf(victim);
      queue.splice(queue.indexOf(victim), 1);
      replaced = victim;
    }

    frames[replaceIndex] = page;
    queue.push(page);
    refBits[page] = true;

    history.push({ frames: [...frames], fault: true, replaced });
  }

  return { history, pageFaults, pageHits };
}

function findVictimPage(
  queue: number[],
  refBits: Record<number, boolean>
): number {
  while (true) {
    const candidate = queue.shift()!;
    if (refBits[candidate]) {
      refBits[candidate] = false;
      queue.push(candidate);
    } else {
      return candidate;
    }
  }
}
