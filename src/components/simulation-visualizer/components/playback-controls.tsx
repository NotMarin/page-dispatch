"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface PlaybackControlsProps {
  stepBackward: () => void;
  togglePlay: () => void;
  stepForward: () => void;
  isPlaying: boolean;
  currentStep: number;
  maxSteps: number;
}

export default function PlaybackControls({
  stepBackward,
  togglePlay,
  stepForward,
  isPlaying,
  currentStep,
  maxSteps,
}: PlaybackControlsProps) {
  return (
    <>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={stepBackward}
          className="cursor-pointer"
          disabled={currentStep === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant={isPlaying ? "secondary" : "default"}
          className="cursor-pointer"
          onClick={togglePlay}
          disabled={currentStep >= maxSteps}
        >
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4" /> Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4" /> Play
            </>
          )}
        </Button>
        <Button
          variant="outline"
          onClick={stepForward}
          className="cursor-pointer"
          disabled={currentStep >= maxSteps}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
