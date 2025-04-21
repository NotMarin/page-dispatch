"use client";

import SlideShow from "@/components/slide-show/slide-show";
import SimulationSecondChange from "./components/simulation-second-change/simulation-second-change";
import IntroSecondChange from "./components/intro-second-change/intro-second-change";
import { useMemo } from "react";

export default function LayoutSecondChange() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        content: <IntroSecondChange />,
      },
      {
        id: 2,
        content: <SimulationSecondChange />,
      },
    ],
    []
  );

  return <SlideShow slides={slides} />;
}
