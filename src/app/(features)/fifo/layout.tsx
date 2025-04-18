"use client";

import Slideshow from "@/components/slide-show/slide-show";
import React, { useMemo } from "react";
import IntroFifo from "./components/intro/intro-fifo";
import SimulationFifo from "./components/simulation-fifo/simulation-fifo";

export default function FifoLayout() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        content: <IntroFifo />,
      },
      {
        id: 2,
        content: <SimulationFifo />,
      },
    ],
    []
  );

  return <Slideshow slides={slides} />;
}
