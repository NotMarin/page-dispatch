"use client";

import { useMemo } from "react";
import IntroOptimal from "./components/intro-optimal/intro-optimal";
import SimulationOptimal from "./components/simulation-optimal/simulation-optimal";
import SlideShow from "@/components/slide-show/slide-show";

export default function LayoutOptimal() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        content: <IntroOptimal />,
      },
      {
        id: 2,
        content: <SimulationOptimal />,
      },
    ],
    []
  );

  return <SlideShow slides={slides} />;
}
