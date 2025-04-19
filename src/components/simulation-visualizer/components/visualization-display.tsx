"use client";

import type { Algorithm, FrameHistory } from "@/types/types";
import { getAlgorithmName } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface VisualizationDisplayProps {
  algorithm: Algorithm;
  currentStep: number;
  parsedReference: number[];
  currentPage: number | null;
  isFault: boolean;
  replacedPage: number | null;
  currentFrames: (number | null)[];
  history: FrameHistory[];
  frameCount: number;
  pageFaults: number;
  pageHits: number;
}

export default function VisualizationDisplay({
  algorithm,
  currentStep,
  parsedReference,
  currentPage,
  isFault,
  replacedPage,
  currentFrames,
  history,
  frameCount,
  pageFaults,
  pageHits,
}: VisualizationDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{getAlgorithmName(algorithm)}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">
            Paso: {currentStep}/{parsedReference.length}
          </span>
        </div>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="font-medium">Página Actual:</span>
            {currentPage !== null ? (
              <span className="bg-primary/10 rounded-md px-3 py-1">
                {currentPage}
              </span>
            ) : (
              <span className="text-muted-foreground">-</span>
            )}

            {currentStep > 0 && (
              <span
                className={`ml-2 rounded px-2 py-0.5 text-xs ${isFault ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}
              >
                {isFault ? "FALLO" : "ACIERTO"}
              </span>
            )}

            {replacedPage !== null && (
              <span className="ml-2 text-sm">
                Reemplazo: <span>{replacedPage}</span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-wrap gap-2">
              {parsedReference.map((page, index) => (
                <div
                  key={index}
                  className={`flex h-8 w-8 items-center justify-center rounded-md border text-sm ${index === currentStep - 1 ? "border-primary bg-primary/10 font-bold" : "border-muted"} ${index < currentStep - 1 ? "bg-muted/30" : ""} `}
                >
                  {page}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[9rem_1fr] gap-5">
          <div>
            <h4 className="mb-2 text-sm font-medium">Marcos de Memoria</h4>
            <div className="grid grid-cols-1 gap-2">
              {currentFrames.map((frame, index) => (
                <div
                  key={index}
                  className={`flex h-10 items-center justify-center rounded-md border-2 ${frame === null ? "border-muted text-muted-foreground border-dashed" : "border-primary border-solid"} ${frame === currentPage && isFault ? "bg-primary/10" : ""} `}
                >
                  {frame !== null ? frame : "Vacío"}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Ejecución Paso a Paso</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full table-fixed border-collapse">
                <thead>
                  <tr>
                    <th className="bg-muted/30 border py-2">Marco</th>
                    {parsedReference.map((page, index) => (
                      <th
                        key={index}
                        className={`border text-center ${index < currentStep ? "" : "bg-muted/10"}`}
                      >
                        {index < currentStep ? (
                          <>
                            <div>{page}</div>
                            <div
                              className={`flex justify-center text-xs ${history[index + 1]?.fault ? "text-red-500" : "text-green-500"}`}
                            >
                              {history[index + 1]?.fault ? (
                                <X size={16} />
                              ) : (
                                <Check size={16} />
                              )}
                            </div>
                          </>
                        ) : (
                          <div className="text-muted-foreground">{page}</div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array(frameCount)
                    .fill(null)
                    .map((_, frameIndex) => (
                      <tr key={frameIndex}>
                        <td className="bg-muted/30 border text-center font-medium">
                          Marco {frameIndex + 1}
                        </td>
                        {parsedReference.map((_, stepIndex) => {
                          if (stepIndex >= currentStep) {
                            return (
                              <td
                                key={stepIndex}
                                className="bg-muted/10 border p-2 text-center"
                              >
                                -
                              </td>
                            );
                          }

                          const frameState =
                            history[stepIndex + 1]?.frames[frameIndex];
                          const isNewPage =
                            stepIndex >= 0 &&
                            history[stepIndex + 1]?.frames[frameIndex] !==
                              history[stepIndex]?.frames[frameIndex] &&
                            history[stepIndex + 1]?.frames[frameIndex] ===
                              parsedReference[stepIndex];

                          return (
                            <td
                              key={stepIndex}
                              className={`border p-2 text-center ${isNewPage ? "bg-primary/10" : ""} `}
                            >
                              {frameState !== null ? frameState : "-"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div>
            <span className="text-sm font-medium">Fallos:</span>
            <span className="ml-2 text-red-600">{pageFaults}</span>
          </div>
          <div>
            <span className="text-sm font-medium">Aciertos:</span>
            <span className="ml-2 text-green-600">{pageHits}</span>
          </div>
          <div>
            <span className="text-sm font-medium">Tasa de Fallos:</span>
            <span className="ml-2">
              {parsedReference.length > 0
                ? `${((pageFaults / parsedReference.length) * 100).toFixed(1)}%`
                : "0%"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
