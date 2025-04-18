"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import type { Algorithm } from "@/types/types";

interface AlgorithmControlsProps {
  algorithm: Algorithm;
  frameCount: number;
  setFrameCount: (count: number) => void;
  referenceString: string;
  setReferenceString: (str: string) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
}

export default function AlgorithmControls({
  frameCount,
  setFrameCount,
  referenceString,
  setReferenceString,
  playbackSpeed,
  setPlaybackSpeed,
}: AlgorithmControlsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="frames">Número de marcos</Label>
        <div className="flex items-center gap-2">
          <Slider
            id="frames"
            min={1}
            max={10}
            step={1}
            value={[frameCount]}
            onValueChange={(value) => setFrameCount(value[0])}
            className="flex-1"
          />
          <span className="w-8 text-center">{frameCount}</span>
        </div>
      </div>

      <div>
        <Label htmlFor="reference">Cadena de Referencia</Label>
        <Input
          id="reference"
          value={referenceString}
          onChange={(e) => setReferenceString(e.target.value)}
          placeholder="Números de página"
          className="mt-2"
        />
        <p className="text-muted-foreground mt-1 text-xs">
          Ingresa números de página separados por comas
        </p>
      </div>

      <div>
        <Label htmlFor="speed">Velocidad de Reproducción</Label>
        <div className="flex items-center gap-2">
          <Slider
            id="speed"
            min={0.5}
            max={3}
            step={0.5}
            value={[playbackSpeed]}
            onValueChange={(value) => setPlaybackSpeed(value[0])}
            className="flex-1"
          />
          <span className="w-8 text-center">{playbackSpeed}x</span>
        </div>
      </div>
    </div>
  );
}
