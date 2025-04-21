"use client";

import React, { useMemo } from "react";
import IntroClock from "./components/intro-clock/intro-clock";
import SimulationClock from "./components/simulation-clock/simulation-clock";
import SlideShow from "@/components/slide-show/slide-show";

export default function LayoutClock() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        content: <IntroClock />,
      },
      {
        id: 2,
        content: <SimulationClock />,
      },
    ],
    []
  );

  return <SlideShow slides={slides} />;
}
