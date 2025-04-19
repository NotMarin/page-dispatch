"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
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

  const currentStepRef = useRef(currentStep);
  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(
      () => {
        setCurrentStep((prev) => {
          if (prev + 1 >= parsedReference.length) {
            setIsPlaying(false);
          }
          return Math.min(prev + 1, parsedReference.length);
        });
      },
      Math.max(100, 1000 / playbackSpeed)
    );

    return () => clearInterval(interval);
  }, [isPlaying, parsedReference.length, playbackSpeed]);

  const stepForward = useCallback(() => {
    if (currentStep < parsedReference.length) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, parsedReference.length]);

  const stepBackward = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const currentFrames = useMemo(
    () => history[currentStep]?.frames || Array(frameCount).fill(null),
    [history, currentStep, frameCount]
  );

  const isFault = useMemo(
    () => (currentStep > 0 ? history[currentStep]?.fault : false),
    [history, currentStep]
  );

  const replacedPage = useMemo(
    () => (currentStep > 0 ? history[currentStep]?.replaced : null),
    [history, currentStep]
  );

  const currentPage = useMemo(
    () => (currentStep > 0 ? parsedReference[currentStep - 1] : null),
    [parsedReference, currentStep]
  );

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>
          Visualización del Algoritmo de Reemplazo de Páginas
        </CardTitle>
        <CardDescription>
          Visualiza cómo funciona el algoritmo con una cadena de referencia y un
          número de marcos dados.
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
