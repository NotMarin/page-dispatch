"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AlgorithmControls from "./components/algorithm-controls";
import VisualizationDisplay from "./components/visualization-display";
import PlaybackControls from "./components/playback-controls";
import { runSimulation } from "@/lib/simulation";
import { parseReferenceString } from "@/lib/utils";
import type { Algorithm, FrameHistory } from "@/types/types";

interface PageReplacementAlgorithmProps {
  algorithm: Algorithm;
}

export default function SimulationVisualizer({
  algorithm,
}: PageReplacementAlgorithmProps) {
  const [referenceString, setReferenceString] = useState(
    "7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0"
  );
  const [frameCount, setFrameCount] = useState(3);
  const [parsedReference, setParsedReference] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [pageFaults, setPageFaults] = useState(0);
  const [pageHits, setPageHits] = useState(0);
  const [history, setHistory] = useState<FrameHistory[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  useEffect(() => {
    const parsed = parseReferenceString(referenceString);
    setParsedReference(parsed);
  }, [referenceString]);

  useEffect(() => {
    if (parsedReference.length > 0) {
      const { history, pageFaults, pageHits } = runSimulation(
        algorithm,
        parsedReference,
        frameCount
      );
      setHistory(history);
      setPageFaults(pageFaults);
      setPageHits(pageHits);
    }
  }, [algorithm, parsedReference, frameCount]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev + 1 >= parsedReference.length) {
            setIsPlaying(false);
          }

          return Math.min(prev + 1, parsedReference.length);
        });
      }, 1000 / playbackSpeed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentStep, parsedReference.length, playbackSpeed]);

  const stepForward = () => {
    if (currentStep < parsedReference.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const stepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentFrames =
    history[currentStep]?.frames || Array(frameCount).fill(null);
  const isFault = currentStep > 0 ? history[currentStep]?.fault : false;
  const replacedPage = currentStep > 0 ? history[currentStep]?.replaced : null;
  const currentPage = currentStep > 0 ? parsedReference[currentStep - 1] : null;

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>
          Visualización del Algoritmo de Reemplazo de Páginas
        </CardTitle>
        <CardDescription>
          Visualiza cómo funciona {algorithm.toUpperCase()} con una cadena de
          referencia y un número de marcos dados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6">
          <AlgorithmControls
            algorithm={algorithm}
            frameCount={frameCount}
            setFrameCount={setFrameCount}
            referenceString={referenceString}
            setReferenceString={setReferenceString}
            playbackSpeed={playbackSpeed}
            setPlaybackSpeed={setPlaybackSpeed}
          />

          <div className="w-full">
            <VisualizationDisplay
              algorithm={algorithm}
              currentStep={currentStep}
              parsedReference={parsedReference}
              currentPage={currentPage}
              isFault={isFault}
              replacedPage={replacedPage}
              currentFrames={currentFrames}
              history={history}
              frameCount={frameCount}
              pageFaults={pageFaults}
              pageHits={pageHits}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <PlaybackControls
          stepBackward={stepBackward}
          togglePlay={togglePlay}
          stepForward={stepForward}
          isPlaying={isPlaying}
          currentStep={currentStep}
          maxSteps={parsedReference.length}
        />
      </CardFooter>
    </Card>
  );
}
