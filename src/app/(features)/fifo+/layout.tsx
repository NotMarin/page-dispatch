"use client";

import { useMemo } from "react";
import IntroFifoPlus from "./intro-fifo+/intro-fifo+";
import SimulationFifoPlus from "./simulation-fifo+/simulation-fifo+";
import SlideShow from "@/components/slide-show/slide-show";

export default function LayoutFifoPlus() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        content: <IntroFifoPlus />,
      },
      {
        id: 2,
        content: <SimulationFifoPlus />,
      },
    ],
    []
  );

  return <SlideShow slides={slides} />;
}
